"use strict";

import loginController = require("modules/login/loginController");
import loginService = require("modules/login/loginService");

export class Config
{
	public moduleName: string = "module.login";
	public moduleInstance:ng.IModule;
	public internalDependencies:any[] = [];
	public outerDependencies:any[] = [];

	constructor(outerDependencies?:any[],moduleName?:string)
	{
		if(outerDependencies)
			this.outerDependencies = outerDependencies;
		
		if(moduleName)
			this.moduleName = moduleName;
	}

	config(): void
	{
		this.moduleInstance = angular.module(this.moduleName, this.internalDependencies.concat(this.outerDependencies));
		
		// URL Configuration
		this.moduleInstance.config(($stateProvider, $urlRouterProvider) => {
			// For any unmatched url, send to /route1
			$urlRouterProvider.otherwise("/login");

			$stateProvider
				.state('main', {
					url: "/main",
					templateUrl: "views/main.html"
				})
	    	});
		
		// Service Configuration
		this.moduleInstance.service('loginService', loginService.LoginService);
		
		// Controller Configuration
		this.moduleInstance.controller("loginController", ["$scope", "$state", "loginService", loginController.LoginController]);
	}
	
	public getModuleName():string
	{
		return this.moduleName;
	}
}
