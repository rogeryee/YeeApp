/// <reference path="../lib/angular/angular.d.ts"/>
/// <reference path="../lib/angular-ui/angular-ui-router.d.ts"/>

import loginServiceModule = require("scripts/app/login/loginService");

export class LoginController
{
	constructor(private $scope: ng.IScope, private $state:ng.ui.IState, private loginService:loginServiceModule.LoginService)
	{
		this.$scope.user = {name:"",password:""};
		this.$scope.login = () => {
			console.log("LoginController->login():user = " + this.$scope.user.name + ", pwd = " + this.$scope.user.password);
			var ret = this.loginService.login(this.$scope.user.name, this.$scope.user.password);
			
			if(ret)
				this.$state.go('main');
		}
	}
}