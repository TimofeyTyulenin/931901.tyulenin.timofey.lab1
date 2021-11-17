var box = document.querySelector('.box');
var tri = document.querySelector('.tri');
var circle = document.querySelector('.circle');

box.onclick=function(){
    var number = document.getElementsByTagName('input')[0].value;
    for (let i=0; i<number; i++){
let object = document.createElement('div');
let w = Math.round(Math.random()*300);
object.style.position='absolute';
object.style.width= w + 'px';
object.style.height=object.style.width;
object.style.border='1px solid black';
object.style.top=Math.round(Math.random()*(document.documentElement.scrollHeight*0.7))+'px';
object.style.left=Math.round(Math.random()*(document.documentElement.scrollWidth*0.7)) +'px';

object.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
document.body.append(object);

object.onclick = function(){
    object.style.background='rgba(251, 255, 0, 0.86)';
    }
    object.ondblclick = function(){
        object.remove();
    }
    }
}

tri.onclick=function(){
    var number = document.getElementsByTagName('input')[0].value;
    for (let i=0; i<number; i++){
        
        let object = document.createElement('div');
        let w = Math.round(Math.random()*300);
        object.style.position='absolute';
        //object.style.width= w + 'px';
        //object.style.height=object.style.width;
        object.style.borderLeft=w+'px solid transparent';
        object.style.borderRight=w+'px solid transparent';
        object.style.borderBottom = w+ 'px solid rgba(4, 0, 255, 0.8)';
        object.style.top=Math.round(Math.random()*(document.documentElement.scrollHeight*0.7))+'px';
        object.style.left=Math.round(Math.random()*(document.documentElement.scrollWidth*0.7)) +'px';
        
        
        document.body.append(object);
        
                    object.onclick = function(){
                        object.style.borderBlockEndColor='rgba(251, 255, 0, 0.86)';
                    }
                    object.ondblclick = function(){
                        object.remove();
                    }

    }
}

circle.onclick=function(){
    var number = document.getElementsByTagName('input')[0].value;
    for (let i=0; i<number; i++){
        
        let object = document.createElement('div');
        let w = Math.round(Math.random()*300);
        object.style.position='absolute';
        object.style.width= w + 'px';
        object.style.height=object.style.width;
        object.style.borderRadius=w/2+'px';
        object.style.border='1px solid black';
        object.style.top=Math.round(Math.random()*(document.documentElement.scrollHeight*0.7))+'px';
        object.style.left=Math.round(Math.random()*(document.documentElement.scrollWidth*0.7)) +'px';
        
        object.style.backgroundColor = 'rgba(30, 138, 3, 0.93)';
        document.body.append(object);
        
        object.onclick = function(){
            object.style.background='rgba(251, 255, 0, 0.86)';
            }
            object.ondblclick = function(){
                object.remove();
            }

    }
}