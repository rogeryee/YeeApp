"use strict";

import Modules = require("modules/modules");

// Main Module of the Application
export class Config
{
	public moduleName: string = "YeeApp";
	public moduleInstance:ng.IModule;
	public internalDependencies:any[] = ["ui.router"];
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
	        .state('login', {
	            url: "/login",
	            templateUrl: "views/login/login.html"
	        })
	    });	
	}
	
	public getModuleName():string
	{
		return this.moduleName;
	}
}
