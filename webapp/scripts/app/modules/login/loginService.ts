/// <reference path="../lib/angular/angular.d.ts"/>
/// <reference path="../lib/angular-ui/angular-ui-router.d.ts"/>

export class LoginService
{
	constructor()
	{
	}
	
	/**
	 * Returns True if the user and password are valid,
	 * Otherwise returns False
	 */
	public login(name:string,password:string):boolean
	{
		if(name == "test" && password == "1111")
		{
			console.log("Login Success");
			return true;
		}
		else
		{
			console.log("Login Failed");
			return false;
		}
	}
}