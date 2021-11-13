let popupbg = document.querySelector('.popup_bg');
let popupf = document.querySelector('.popupf');
let popups = document.querySelector('.popups');
let popupt = document.querySelector('.popupt');


let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

btn1.onclick=function(){
    popupbg.classList.add('active');
    popupf.classList.add('active');
};
btn2.onclick=function(){
    popupbg.classList.add('active');
    popups.classList.add('active');
};
btn3.onclick=function(){
    popupbg.classList.add('active');
    popupt.classList.add('active');
};

document.addEventListener('click', (e)=>{
    if(e.target===popupbg){
        popupbg.classList.remove('active');
        popupt.classList.remove('active');
        popups.classList.remove('active');
        popupf.classList.remove('active');
    }
});

