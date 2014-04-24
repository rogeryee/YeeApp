/// <reference path="lib/angular/angular.d.ts"/>

"use strict";

export class ApplicationController
{
	constructor(private appModuel:ng.IModule)
	{
		console.log("Create ApplicationController");
		
		appModuel.config(($stateProvider, $urlRouterProvider) => {  
      
		  // For any unmatched url, send to /route1
	      $urlRouterProvider.otherwise("/route1");
	      
	      $stateProvider
	        .state('route1', {
	            url: "/route1",
	            template: "<h1>Route 1</h1>"
	        })
	        .state('route2', {
	            url: "/route2",
	            template: "<h1>Route 2</h1>"
	        });
	    });	
	}
	
	public getAppModule():any
	{
		return this.appModuel;
	}
}