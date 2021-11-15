let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');



btn1.onclick=function(){
    var elem = document.getElementsByClassName("catn");
	for(var i=0; i<elem.length; i++) elem[i].style.width='850px';
	var elem = document.getElementsByClassName("dogn");
	for(var i=0; i<elem.length; i++) elem[i].style.width='50px';
	var elem = document.getElementsByClassName("cat");
	for(var i=0; i<elem.length; i++) elem[i].style.width='600px';
	var elem = document.getElementsByClassName("dog");
	for(var i=0; i<elem.length; i++) elem[i].style.width='0px';
};
btn2.onclick=function(){
    var elem = document.getElementsByClassName("catn");
	for(var i=0; i<elem.length; i++) elem[i].style.width='450px';
	var elem = document.getElementsByClassName("dogn");
	for(var i=0; i<elem.length; i++) elem[i].style.width='450px';
	var elem = document.getElementsByClassName("cat");
	for(var i=0; i<elem.length; i++) elem[i].style.width='410px';
	var elem = document.getElementsByClassName("dog");
	for(var i=0; i<elem.length; i++) elem[i].style.width='410px';
    
};
btn3.onclick=function(){
    var elem = document.getElementsByClassName("dogn");
	for(var i=0; i<elem.length; i++) elem[i].style.width='850px';
	var elem = document.getElementsByClassName("catn");
	for(var i=0; i<elem.length; i++) elem[i].style.width='50px';
	var elem = document.getElementsByClassName("dog");
	for(var i=0; i<elem.length; i++) elem[i].style.width='600px';
	var elem = document.getElementsByClassName("cat");
	for(var i=0; i<elem.length; i++) elem[i].style.width='0px';
};