/// <reference path="lib/angular/angular.d.ts"/>
/// <reference path="lib/angular-ui/angular-ui-router.d.ts"/>
"use strict";
define(["require", "exports", "modules/main/config", "modules/login/config"], function(require, exports, mainModule, loginModule) {
    var Application = (function () {
        function Application() {
            this.dependencies = [];
            this.modulesConfig();
            this.appConfig();
        }
        Application.prototype.appConfig = function () {
            var main = new mainModule.Config(this.dependencies);
            main.config();
        };

        Application.prototype.modulesConfig = function () {
            var mod = new loginModule.Config();
            mod.config();
            this.dependencies.push(mod.getModuleName());
        };

        Application.prototype.start = function () {
            angular.bootstrap(document, ['YeeApp']);
        };
        return Application;
    })();
    exports.Application = Application;
});
//# sourceMappingURL=Application.js.map
