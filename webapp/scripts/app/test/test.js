define(["require", "exports", "dojo/dom"], function(require, exports, DojoDom) {
    var TestClass = (function () {
        function TestClass(name) {
            console.log("Hi " + name + " !");
            console.log("Creating an instance for TestClass");
        }
        TestClass.prototype.setText = function (id, text) {
            var dom = DojoDom.byId(id);
            if (dom)
                dom.innerHTML = text;
        };
        return TestClass;
    })();
    exports.TestClass = TestClass;
});
//# sourceMappingURL=test.js.map
