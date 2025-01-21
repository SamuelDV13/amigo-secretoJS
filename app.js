var listaAmigos = [];


//Funcion para agregar un amigo a la lista
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    
    if(nombre != ""){
        listaAmigos.push(nombre);
        limpiarCampo("amigo");
        mostrarLista();
    } else{
        alert("El nombre no puede estar vacio.");
    }  
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