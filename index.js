const head = document.getElementById('head-1');

head.innerHTML = 'Салам дуйно';
head.style.color = 'red';
head.style.fontSize = '100px';
head.style.border = '1px solid #ccc';
head.style.textAlign = 'center';



const list = document.getElementsByTagName('li');

for(let i = 0; i< list.length; i++){
    list[i].innerHTML = `list-item ${i +1}`;
    list[i].classList.add ('list-item');
}