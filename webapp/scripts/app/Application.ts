/// <reference path="lib/angular/angular.d.ts"/>
/// <reference path="lib/angular-ui/angular-ui-router.d.ts"/>

"use strict";

import loginModule = require("modules/login/config");

export class Application
{
	private dependencies:any[] = ["ui.router"];
	
	constructor()
	{
		this.modulesConfig();
		this.appConfig();
	}
		
	private appConfig():void
	{
		var yeeApp = angular.module("YeeApp",this.dependencies);
		yeeApp.config(($stateProvider, $urlRouterProvider) => {  
      
		  // For any unmatched url, send to /route1
	      $urlRouterProvider.otherwise("/login");
	      
	      $stateProvider
	        .state('login', {
	            url: "/login",
	            templateUrl: "views/login/login.html"
	        })
	    });	
	}
	
	private modulesConfig():void
	{
		new loginModule.Config()
		this.dependencies.push(loginModule.Config.getModuleName());
	}
	
	private start():void
	{
		angular.bootstrap(document, ['YeeApp']); 	
	}
}


