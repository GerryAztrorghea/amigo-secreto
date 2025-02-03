// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let creandoArregloAmigos =[]

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();


    if (nombreAmigo === ''){
        alert('Por favor ingresa un nombre');
        return;
    }

    if(creandoArregloAmigos.includes(nombreAmigo)){
        alert('Opss... '+nombreAmigo+'  ya esta en la lista');
        return;
    }

    creandoArregloAmigos.push(nombreAmigo);

    inputAmigo.value = '';

    actualizarLista();
}    

function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for( let i= 0; i < creandoArregloAmigos.length; i++){
        const li = document.createElement('li');
        li.textContent= creandoArregloAmigos[i];
        listaAmigos.appendChild(li); 
    }

}

function sortearAmigo (){
    if (creandoArregloAmigos.length === 0){
        alert ('Opps... No hay amigos para sortear, para iniciar agrega un nombre');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random()* creandoArregloAmigos.length);
    const amigoSorteado= creandoArregloAmigos[indiceAleatorio];

    const resultado= document.getElementById('resultado');
    if(resultado){
        resultado.innerHTML = 'Amigo sorteado: '+amigoSorteado;
        return;
    }
}
