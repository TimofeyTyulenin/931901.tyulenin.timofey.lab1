var n = 0;
var deliting = 0;
var nRow = [];

function addRow(m){
	return`
			<tr class="${m}">
				<td><input type="text" class="field1"></td>
				<td><input type="number"  class="field2"></td>
				<td><button class="up">&#8593;</button></td>
				<td><button class="d">&#8595;</button></td>
				<td><button class="del">х</button></td>
			</tr>	
        `
	
}

function ad()
{
	n+=1;
	deliting+=1;
	var m = 'row' + n;
	document.body.querySelector('table').insertAdjacentHTML("beforeend",  this.addRow(m));
	nRow[n] = document.querySelector('.'+m)
	nRow[Number(n)+1]=null;
}

function deleteButton(del)
{
	var i = del.parentElement.parentElement.className;
	i = i.replace(/\D/g,'');
	var j = nRow[n].className;
	j = j.replace(/\D/g,'') - 1;
	var m = n;
	nRow.splice(i, 1);
	document.body.querySelector('table').querySelector('.'+del.parentElement.parentElement.className).remove();
	for (m;m>i;m--) {
		nRow[m-1].className = 'row' + j;
		j-=1;	
	}
	n-=1;
}

function downButton(d)
{
	var i = d.parentElement.parentElement.className;
	i = i.replace(/\D/g,'');
	j = Number(i)+1;
	if (nRow[j]!=null){
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field1').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field1').value = temp;
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field2').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field2').value = temp;
	}
}

function upButton(up)
{
	var i = up.parentElement.parentElement.className;
	i = i.replace(/\D/g,'');
	j = i - 1;
	if (nRow[j]!=null){
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field1').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field1').value = temp;
		temp = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value;
		document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value = document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field2').value;
		document.body.querySelector('table').querySelector('.'+nRow[j].className).querySelector('.field2').value = temp;
	}
}

function save()
{
	var saveUpload = [];
	document.body.insertAdjacentHTML("beforeend",  `{`);
	for (i=0;i<=n;i++){
	saveUpload.field1 = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field1').value;
	saveUpload.field2  = document.body.querySelector('table').querySelector('.'+nRow[i].className).querySelector('.field2').value;
	document.body.insertAdjacentHTML("beforeend",  `"${saveUpload.field1}" : "${saveUpload.field2}"`);
	if (i!=n) document.body.insertAdjacentHTML("beforeend",  ` , `);
	}
	document.body.insertAdjacentHTML("beforeend",  `}`);
}

function listener()
{
	nRow[0]=document.querySelector('.row0');
	nRow[-1]=null;
		document.body.addEventListener("click", e => {
                if (e.target.classList.contains("del")) {
					this.deleteButton(e.target);
            }
        });
		document.body.addEventListener("click", e => {
                if (e.target.classList.contains("d")) {
					this.downButton(e.target);
            }
        });
		document.body.addEventListener("click", e => {
                if (e.target.classList.contains("up")) {
					this.upButton(e.target);
            }
        });
}

document.addEventListener("DOMContentLoaded", () => listener());

