/// <reference path="lib/angular/angular.d.ts"/>
"use strict";
define(["require", "exports"], function(require, exports) {
    var ApplicationController = (function () {
        function ApplicationController(appModuel) {
            this.appModuel = appModuel;
            console.log("Create ApplicationController");

            appModuel.config(function ($stateProvider, $urlRouterProvider) {
                // For any unmatched url, send to /route1
                $urlRouterProvider.otherwise("/route1");

                $stateProvider.state('route1', {
                    url: "/route1",
                    template: "<h1>Route 1</h1>"
                }).state('route2', {
                    url: "/route2",
                    template: "<h1>Route 2</h1>"
                });
            });
        }
        ApplicationController.prototype.getAppModule = function () {
            return this.appModuel;
        };
        return ApplicationController;
    })();
    exports.ApplicationController = ApplicationController;
});
//# sourceMappingURL=ApplicationController.js.map
