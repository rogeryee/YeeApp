/// <reference path="lib/angular/angular.d.ts"/>
/// <reference path="lib/angular-ui/angular-ui-router.d.ts"/>
"use strict";
define(["require", "exports", "modules/login/config"], function(require, exports, loginModule) {
    var Application = (function () {
        function Application() {
            this.dependencies = ["ui.router"];
            this.modulesConfig();
            this.appConfig();
        }
        Application.prototype.appConfig = function () {
            var yeeApp = angular.module("YeeApp", this.dependencies);
            yeeApp.config(function ($stateProvider, $urlRouterProvider) {
                // For any unmatched url, send to /route1
                $urlRouterProvider.otherwise("/login");

                $stateProvider.state('login', {
                    url: "/login",
                    templateUrl: "views/login/login.html"
                });
            });
        };

        Application.prototype.modulesConfig = function () {
            new loginModule.Config();
            this.dependencies.push(loginModule.Config.getModuleName());
        };

        Application.prototype.start = function () {
            angular.bootstrap(document, ['YeeApp']);
        };
        return Application;
    })();
    exports.Application = Application;
});
//# sourceMappingURL=Application.js.map
