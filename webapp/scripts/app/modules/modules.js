define(["require", "exports"], function(require, exports) {
    var ModuleBase = (function () {
        function ModuleBase() {
            this.config();
        }
        ModuleBase.prototype.config = function () {
        };

        ModuleBase.getModuleName = function () {
            return "Module_Name";
        };
        return ModuleBase;
    })();
    exports.ModuleBase = ModuleBase;
});
//# sourceMappingURL=modules.js.map
