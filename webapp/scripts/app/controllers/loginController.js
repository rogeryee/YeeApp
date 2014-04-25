/// <reference path="lib/angular/angular.d.ts"/>
/// <reference path="lib/angular-ui/angular-ui-router.d.ts"/>
define(["require", "exports"], function(require, exports) {
    var LoginController = (function () {
        function LoginController($scope, $state, loginService) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.loginService = loginService;
            this.$scope.user = { name: "", password: "" };
            this.$scope.login = function () {
                console.log("LoginController->login():user = " + _this.$scope.user.name + ", pwd = " + _this.$scope.user.password);
                var ret = _this.loginService.login(_this.$scope.user.name, _this.$scope.user.password);

                if (ret)
                    _this.$state.go('main');
            };
        }
        return LoginController;
    })();
    exports.LoginController = LoginController;
});
//# sourceMappingURL=loginController.js.map
