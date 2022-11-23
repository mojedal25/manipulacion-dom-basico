
/*-------CLASE ESCRIBIENDO EN EL DOM---------
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Manuel Ojeda <br> León';
h1.innerText = 'Manuel Ojeda <br> León';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'Crema');

h1.classList.add('crema');
h1.classList.remove('verde');
//h1.classList.toggle('crema');
//h1.classList.contains('crema');

input.value = 569;

const img = document.createElement('img');
img.setAttribute('src','https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tabla_de_posiciones-qatar_2022.jpg');

pid.append(img);
img.setAttribute('width','200px');
*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*form.addEventListener('submit',sumarInputsValues);

function sumarInputsValues(event){
    console.log({event});
    event.preventDefault();
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = "Resultado: " + sumaInputs;
}*/

btn.addEventListener('click',sumarInputsValues);

function sumarInputsValues(event){
    //console.log({event});
    //event.preventDefault();
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = "Resultado: " + sumaInputs;
}