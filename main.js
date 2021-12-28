document.addEventListener("DOMContentLoaded", () => scene());
var k =0;
var h =0;

function scene()
{
	var t = 0;
	document.getElementById("scene").style.width=screen.width+'px';
	b=screen.height-130;
	document.getElementById("scene").style.height=b+'px';
	document.getElementById("scene").onclick = function()
	{
		t = 1;
		this.style.transitionDuration = 1 + 's';
		this.style.bottom = 100+'%';
	}
	
	document.getElementById("scene").onmouseover = function()
	{
		if (t!=1)
		{
		this.style.transitionDuration = 0.2 + 's';
		this.style.bottom = 5+'%';
	    }
	}
	document.getElementById("scene").onmouseout = function()
	{
		if (t!=1) 
		{
		this.style.transitionDuration = 0.2 + 's';
		this.style.bottom = 0+'%';
	    }
	}
	document.querySelector(".lamp_align").onmousedown = function()
	{
		document.getElementById("lamp_switch").style.top = 45+'px';
	}
	document.querySelector(".lamp_align").onmouseup = function()
	{
		document.getElementById("lamp_switch").style.top = 25+'px';
	}
}

function lamp()
{
	if (k === 0)
	{
		k = 1;
		
		var light = document.getElementById("triangle");
		light.style.opacity = 0.5;
		light.style.borderBottomColor = "yellow";
		light.style.zIndex = 65;
	}
	else if (k === 1)
	{
		var light = document.getElementById("triangle");
		k = 0;
		light.style.opacity = 1;
		light.style.borderBottomColor = "black";
		light.style.zIndex = 40;		
	}
}

function switching()
{
	if (h === 0)
	{
		h = 1;	
		var rabbit = document.getElementById("rabbit");
		var bird = document.getElementById("dove");
		rabbit.style.top = 50+"px";
		setTimeout ('dove.style.top = -90+ "px"',1000);	
		rabbit.style.display="none";
	}
	else if (h === 1)
	{
		h = 0;
		var rabbit = document.getElementById("rabbit");
		var bird = document.getElementById("dove");
		bird.style.top = 50+"px";
		rabbit.style.display="inline";
		setTimeout ('rabbit.style.top = -90+ "px"',1000);	
	}
}