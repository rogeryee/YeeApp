/// <reference path="lib/angular/angular.d.ts"/>
/// <reference path="lib/angular-ui/angular-ui-router.d.ts"/>
"use strict";
define(["require", "exports", "app/login/loginController", "app/login/loginService"], function(require, exports, loginController, loginService) {
    var ApplicationController = (function () {
        function ApplicationController(appModule) {
            this.appModule = appModule;
            console.log("Create ApplicationController");

            appModule.config(function ($stateProvider, $urlRouterProvider) {
                // For any unmatched url, send to /route1
                $urlRouterProvider.otherwise("/login");

                $stateProvider.state('login', {
                    url: "/login",
                    templateUrl: "views/login/login.html"
                }).state('main', {
                    url: "/main",
                    templateUrl: "views/main.html"
                });
            });

            appModule.service('loginService', loginService.LoginService);
            appModule.controller("loginController", ["$scope", "$state", "loginService", loginController.LoginController]);
        }
        ApplicationController.prototype.getAppModule = function () {
            return this.appModule;
        };
        return ApplicationController;
    })();
    exports.ApplicationController = ApplicationController;
});
//# sourceMappingURL=ApplicationController.js.map
