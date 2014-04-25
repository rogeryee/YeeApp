/// <reference path="lib/angular/angular.d.ts"/>
/// <reference path="lib/angular-ui/angular-ui-router.d.ts"/>

//import loginController = require("scripts/app/controllers/loginController");
//import loginService = require("scripts/app/services/loginService");

export class LoginModule
{
	constructor()
	{
		console.log("create loginModule");
		var loginModule = angular.module("login",["ui.router"]);
		loginModule.config(($stateProvider, $urlRouterProvider) => {  
      
			$urlRouterProvider.state('main', {
	            url: "/main",
	            templateUrl: "views/main.html"
	        })
	    });	
		
//		loginModule.service('loginService', loginService.LoginService);
//		loginModule.controller("loginController", ["$scope","$state","loginService", loginController.LoginController]);
	}
}