/// <reference path="../lib/angular/angular.d.ts"/>
/// <reference path="../lib/angular-ui/angular-ui-router.d.ts"/>
define(["require", "exports"], function(require, exports) {
    var LoginService = (function () {
        function LoginService() {
        }
        /**
        * Returns True if the user and password are valid,
        * Otherwise returns False
        */
        LoginService.prototype.login = function (name, password) {
            if (name == "test" && password == "1111") {
                console.log("Login Success");
                return true;
            } else {
                console.log("Login Failed");
                return false;
            }
        };
        return LoginService;
    })();
    exports.LoginService = LoginService;
});
//# sourceMappingURL=loginService.js.map
