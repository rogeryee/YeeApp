/// <reference path="../lib/dojo/dojo.d.ts"/>
import DojoDom = require("dojo/dom");

export class TestClass
{
    private name:string;
    
    constructor(name:string)
    {
		console.log("Hi " + name + " !");
        console.log("Creating an instance for TestClass");
    }
	
	public setText(id:string, text:string):void
	{
		var dom = DojoDom.byId(id);
		if(dom)
			dom.innerHTML = text;
	}
}