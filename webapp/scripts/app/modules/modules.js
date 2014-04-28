/// <reference path="../lib/angular/angular.d.ts"/>
/// <reference path="../lib/angular-ui/angular-ui-router.d.ts"/>
define(["require", "exports"], function(require, exports) {
    

    var ModuleBase = (function () {
        function ModuleBase(outerDependencies) {
            this.moduleName = "module.name";
            this.internalDependencies = [];
            this.outerDependencies = outerDependencies;
        }
        ModuleBase.prototype.config = function () {
            this.moduleInstance = angular.module(this.moduleName, this.internalDependencies.concat(this.outerDependencies));
        };

        ModuleBase.prototype.getModuleName = function () {
            return this.moduleName;
        };
        return ModuleBase;
    })();
    exports.ModuleBase = ModuleBase;
});
//# sourceMappingURL=modules.js.map
