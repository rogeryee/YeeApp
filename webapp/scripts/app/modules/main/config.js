"use strict";
define(["require", "exports"], function(require, exports) {
    // Main Module of the Application
    var Config = (function () {
        function Config(outerDependencies, moduleName) {
            this.moduleName = "YeeApp";
            this.internalDependencies = ["ui.router"];
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

                $stateProvider.state('login', {
                    url: "/login",
                    templateUrl: "views/login/login.html"
                });
            });
        };

        Config.prototype.getModuleName = function () {
            return this.moduleName;
        };
        return Config;
    })();
    exports.Config = Config;
});
//# sourceMappingURL=config.js.map
