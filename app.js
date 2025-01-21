var listaAmigos = [];


//Funcion para agregar un amigo a la lista
function agregarAmigo(){
    listaAmigos.push(document.getElementById("amigo").value);
    limpiarCampo("amigo");
    mostrarLista();
}


//Funcion para retornar un amigo de forma aleatoria
function sortearAmigo(){

}


function mostrarLista(){
        document.getElementById("listaAmigos").innerText += `${listaAmigos[listaAmigos.length - 1]} \n`;
}

function limpiarCampo(campo){
    document.getElementById(campo).value = "";
}