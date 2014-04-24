/// <reference path="lib/angular/angular.d.ts"/>
"use strict";
define(["require", "exports"], function(require, exports) {
    var ApplicationController = (function () {
        function ApplicationController(appModuel) {
            this.appModuel = appModuel;
            console.log("Create ApplicationController");

            appModuel.config(function ($stateProvider, $urlRouterProvider) {
                // For any unmatched url, send to /route1
                $urlRouterProvider.otherwise("/login");

                $stateProvider.state('login', {
                    url: "/login",
                    templateUrl: "views/login.html"
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
