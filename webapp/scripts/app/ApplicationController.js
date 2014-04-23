/// <reference path="lib/angular/angular.d.ts"/>
"use strict";
define(["require", "exports"], function(require, exports) {
    var ApplicationController = (function () {
        function ApplicationController(application) {
            this.application = application;
            console.log("Create ApplicationController");

            application.config(function ($stateProvider, $urlRouterProvider) {
                // For any unmatched url, send to /route1
                $urlRouterProvider.otherwise("/route1");

                $stateProvider.state('route1', {
                    url: "/route1",
                    template: "login.html"
                });
            });
        }
        ApplicationController.prototype.getApplication = function () {
            return this.application;
        };
        return ApplicationController;
    })();
    exports.ApplicationController = ApplicationController;
});
//# sourceMappingURL=ApplicationController.js.map
