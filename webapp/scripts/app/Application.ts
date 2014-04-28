/// <reference path="lib/angular/angular.d.ts"/>
/// <reference path="lib/angular-ui/angular-ui-router.d.ts"/>

"use strict";

import mainModule = require("modules/main/config");
import loginModule = require("modules/login/config");


export class Application
{
	private dependencies:any[] = [];
	
	constructor()
	{
		this.modulesConfig();
		this.appConfig();
	}
		
	private appConfig():void
	{
		var main = new mainModule.Config(this.dependencies);
		main.config();
	}
	
	private modulesConfig():void
	{
		var mod = new loginModule.Config();
		mod.config();
		this.dependencies.push(mod.getModuleName());
	}
	
	private start():void
	{
		angular.bootstrap(document, ['YeeApp']); 	
	}
}


