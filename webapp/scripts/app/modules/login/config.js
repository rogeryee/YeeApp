"use strict";
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "modules/modules", "modules/login/loginController", "modules/login/loginService"], function(require, exports, Modules, loginController, loginService) {
    var Config = (function (_super) {
        __extends(Config, _super);
        function Config() {
            _super.call(this);
        }
        Config.prototype.config = function () {
            var loginModule = angular.module(Config.MODULE_NAME, []);
            loginModule.config(function ($stateProvider, $urlRouterProvider) {
                // For any unmatched url, send to /route1
                $urlRouterProvider.otherwise("/login");

                $stateProvider.state('main', {
                    url: "/main",
                    templateUrl: "views/main.html"
                });
            });

            loginModule.service('loginService', loginService.LoginService);
            loginModule.controller("loginController", ["$scope", "$state", "loginService", loginController.LoginController]);
        };

        Config.getModuleName = function () {
            return Config.MODULE_NAME;
        };
        Config.MODULE_NAME = "module.login";
        return Config;
    })(Modules.ModuleBase);
    exports.Config = Config;
});
//# sourceMappingURL=config.js.map
