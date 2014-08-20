define(['plugins/router'], function(router) {
    return {
        router: router,
        activate: function() {
            return router.map([
                {route: ['', 'home'], moduleId: 'viewmodels/home', title: 'Hello World', nav: 1},
                {route: 'example-page', moduleId: 'viewmodels/page', title: 'Example page', nav: true}
            ]).buildNavigationModel()
                    .mapUnknownRoutes('viewmodels/home', 'not-found')
                    .activate();
        }
    };
});