/// <reference path="lib/angular/angular.d.ts"/>

"use strict";

export class ApplicationController
{
	constructor(private application:any)
	{
		console.log("Create ApplicationController");
		
		application.config(($stateProvider, $urlRouterProvider) => {  
      
		  // For any unmatched url, send to /route1
	      $urlRouterProvider.otherwise("/route1");
	      
	      $stateProvider
	        .state('route1', {
	            url: "/route1",
	            template: "login.html"
	        });
	    });
	}
	
	public getApplication():any
	{
		return this.application;
	}
}