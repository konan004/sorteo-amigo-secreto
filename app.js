// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById ('listaAmigos');
const ulResultado = document.getElementById('resultado');

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    
    if (nombre === "") {
        inputAmigo.setCustomValidity("Por favor, ingrese un nombre válido");
        inputAmigo.reportValidity();
        return;
    }
    listaAmigos.push(nombre);    
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = "";
};

function sortearAmigo() {
    const aleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[aleatorio];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
};
