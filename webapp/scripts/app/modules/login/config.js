"use strict";
define(["require", "exports", "modules/login/loginController", "modules/login/loginService"], function(require, exports, loginController, loginService) {
    var Config = (function () {
        function Config(outerDependencies, moduleName) {
            this.moduleName = "module.login";
            this.internalDependencies = [];
            this.outerDependencies = [];
            if (outerDependencies)
                this.outerDependencies = outerDependencies;

            if (moduleName)
                this.moduleName = moduleName;
        }
        Config.prototype.config = function () {
            this.moduleInstance = angular.module(this.moduleName, this.internalDependencies.concat(this.outerDependencies));

            // URL Configuration
            this.moduleInstance.config(function ($stateProvider, $urlRouterProvider) {
                // For any unmatched url, send to /route1
                $urlRouterProvider.otherwise("/login");

                $stateProvider.state('main', {
                    url: "/main",
                    templateUrl: "views/main.html"
                });
            });

            // Service Configuration
            this.moduleInstance.service('loginService', loginService.LoginService);

            // Controller Configuration
            this.moduleInstance.controller("loginController", ["$scope", "$state", "loginService", loginController.LoginController]);
        };

        Config.prototype.getModuleName = function () {
            return this.moduleName;
        };
        return Config;
    })();
    exports.Config = Config;
});
//# sourceMappingURL=config.js.map
