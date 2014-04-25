/// <reference path="lib/angular/angular.d.ts"/>
/// <reference path="lib/angular-ui/angular-ui-router.d.ts"/>
define(["require", "exports"], function(require, exports) {
    //import loginController = require("scripts/app/controllers/loginController");
    //import loginService = require("scripts/app/services/loginService");
    var LoginModule = (function () {
        function LoginModule() {
            console.log("create loginModule");
            var loginModule = angular.module("login", ["ui.router"]);
            loginModule.config(function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.state('main', {
                    url: "/main",
                    templateUrl: "views/main.html"
                });
            });
            //		loginModule.service('loginService', loginService.LoginService);
            //		loginModule.controller("loginController", ["$scope","$state","loginService", loginController.LoginController]);
        }
        return LoginModule;
    })();
    exports.LoginModule = LoginModule;
});
//# sourceMappingURL=loginModule.js.map
