/// <reference path="lib/angular/angular.d.ts"/>
/// <reference path="lib/angular-ui/angular-ui-router.d.ts"/>

"use strict";

import loginController = require("scripts/app/login/loginController");
import loginService = require("scripts/app/login/loginService");

export class ApplicationController
{
	constructor(private appModule:ng.IModule)
	{
		console.log("Create ApplicationController");
		
		appModule.config(($stateProvider, $urlRouterProvider) => {  
      
		  // For any unmatched url, send to /route1
	      $urlRouterProvider.otherwise("/login");
	      
	      $stateProvider
	        .state('login', {
	            url: "/login",
	            templateUrl: "views/login/login.html"
	        })
			.state('main', {
	            url: "/main",
	            templateUrl: "views/main.html"
	        })
	    });	
		
		appModule.service('loginService', loginService.LoginService);
		appModule.controller("loginController", ["$scope","$state","loginService", loginController.LoginController]);
	}
	
	public getAppModule():any
	{
		return this.appModule;
	}
}


