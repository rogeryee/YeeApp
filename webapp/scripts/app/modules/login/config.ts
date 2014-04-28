"use strict";

import Modules = require("modules/modules");
import loginController = require("modules/login/loginController");
import loginService = require("modules/login/loginService");

export class Config extends Modules.ModuleBase
{
	private static MODULE_NAME: string = "module.login";

	constructor()
	{
		super();
	}

	config(): void
	{
		var loginModule = angular.module(Config.MODULE_NAME, []);
		loginModule.config(($stateProvider, $urlRouterProvider) => {
			// For any unmatched url, send to /route1
			$urlRouterProvider.otherwise("/login");

			$stateProvider
				.state('main', {
					url: "/main",
					templateUrl: "views/main.html"
				})
	    	});

		loginModule.service('loginService', loginService.LoginService);
		loginModule.controller("loginController", ["$scope", "$state", "loginService", loginController.LoginController]);
	}

	public static getModuleName(): string
	{
		return Config.MODULE_NAME;
	}
}
