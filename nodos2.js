//agregar estilo de baile
function agregar(){
    var genero = document.getElementById('nombre').value;
    let etiqueta, mole, verde;

    etiqueta=document.getElementsByTagName('li');

    mole=document.createElement('li');
    verde=document.createTextNode(genero);
    mole.appendChild(verde);

    etiqueta[2].insertAdjacentElement('beforeend', mole);
}
//cambiar diseño
let header=document.getElementsByTagName('header')
let palabra=document.getElementsByTagName('h1')

let leon=document.createElement('header')
leon.setAttribute('class','estilo')
let color=document.createTextNode('nuevo estilo')
leon.appendChild(color)


header[0].replaceChild(leon, palabra[0])

