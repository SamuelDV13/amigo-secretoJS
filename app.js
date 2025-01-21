var listaAmigos = [];


//Funcion para agregar un amigo a la lista
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    
    if(nombre != ""){
        listaAmigos.push(nombre);
        limpiarCampo("amigo");
        document.getElementById("listaAmigos").innerText += `${listaAmigos[listaAmigos.length - 1]} \n`;
    } else{
        alert("El nombre no puede estar vacio.");
    }  
}


//Funcion para retornar un amigo de forma aleatoria
function sortearAmigo(){
    let numeroAmigos = listaAmigos.length;

    if(numeroAmigos != 0){
        let indice = Math.floor(Math.random() * numeroAmigos);
        document.getElementById("resultado").innerText = listaAmigos[indice];
        limpiarCampo("amigo");
    } else{
        alert("La lista de amigos esta vacia.");
    }
}


function limpiarCampo(campo){
    document.getElementById(campo).value = "";
}