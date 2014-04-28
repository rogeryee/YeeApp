/// <reference path="../lib/angular/angular.d.ts"/>
/// <reference path="../lib/angular-ui/angular-ui-router.d.ts"/>

export interface IModule
{
	moduleName: string;
	moduleInstance:ng.IModule;
	
	config(): void;
}

export class ModuleBase implements IModule
{
	public moduleName: string = "module.name";
	
	moduleInstance:ng.IModule;
	internalDependencies:any[] = []; // Internal Module Dependencies
	outerDependencies:any[]; // Outer Module Dependencies
	
	constructor(outerDependencies:any[])
	{
		this.outerDependencies = outerDependencies;
	}

	config(): void
	{
		this.moduleInstance = angular.module(this.moduleName, this.internalDependencies.concat(this.outerDependencies));
	}

	public getModuleName(): string
	{
		return this.moduleName;
	}
}