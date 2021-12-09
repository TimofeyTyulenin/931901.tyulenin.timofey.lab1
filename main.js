let a = '';
let b = '';
let sign = '';
let finish = false;

const digit =['0','1','2','3','4','5','6','7','8','9','0','.'];
const action =['-','+','*','/'];

const out=document.querySelector('.calc-screen p');

function clearAll(){
    a='';
    b='';
    sign='';
    finish=false;
    out.textContent=0;
}
function delt(){
        if(out.textContent===a){
            a=a.slice(0,-1);
            out.textContent=a;
        }
        else if(out.textContent===b){
            b=b.slice(0,-1);
            out.textContent=b;
        }
        else if(out.textContent===sign){
            sign=sign.slice(0,-1);
            out.textContent=sign;
        }
        else if(finish){
            clearAll();
        }
}

document.querySelector('.clear').onclick = clearAll;
document.querySelector('.del').onclick = delt;

document.querySelector('.buttons').onclick =(event) =>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('clear')) return;
    if(event.target.classList.contains('del')) return;

    out.textContent='';
    const key = event.target.textContent;
    if(digit.includes(key)){
        if(b==='' && sign===''){
            if (key === '.' && a.includes('.')) {
                a += '';
                out.textContent = a;
            } else {
                a += key;
                out.textContent = a;
            }
        }
        else if(a!==''&& b!==''&&finish){
            b=key;
            finish=false;
            out.textContent=b;
        }
        else{
            if (key === '.' && b.includes('.')) {
                b += '';
                out.textContent = b;
            } else {
                b += key;
                out.textContent = b;
            }
        }
        return;
    }
    if(action.includes(key)){
        sign=key;
        
        out.textContent=a+sign;
        return;
    }
if(key==='='){
    switch(sign){
        case'+':
        a=(+a)+(+b);
        break;
        case'-':
        a=a-b;
        break;
        case'*':
        a=a*b;
        break;
        case'/':
        if(b==='0'){
            out.textContent='error';
            a='';
            b='';
            sign='';
            return;
        }
        a=a/b;
        break;
    }
    finish=true;
    out.textContent=a;
}
}