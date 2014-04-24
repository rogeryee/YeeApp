/// <reference path="lib/angular/angular.d.ts"/>

"use strict";

export class ApplicationController
{
	constructor(private appModuel:ng.IModule)
	{
		console.log("Create ApplicationController");
		
		appModuel.config(($stateProvider, $urlRouterProvider) => {  
      
		  // For any unmatched url, send to /route1
	      $urlRouterProvider.otherwise("/login");
	      
	      $stateProvider
	        .state('login', {
	            url: "/login",
	            templateUrl: "views/login.html"
//				template:"<h1>Here we go!!!</h1>"
	        })
	    });	
	}
	
	public getAppModule():any
	{
		return this.appModuel;
	}
}