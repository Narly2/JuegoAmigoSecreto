// Script que recibe una lista de nombres de amigos, para posteriormente seleccionar uno al azar.
//

let amigos = [];                                        //Declara una lista y la inicia vacía


function adicionarAmigo(){                               

    let ingresoUsuario = document.getElementById('amigo').value;    //Lee la información que el usuario colocó en la caja de texto y la guarda en ingresoUsuario
    
    if(ingresoUsuario==''){
     alert("Por favor ingrese un nombre valido");
   } else{
     amigos.push(ingresoUsuario);                                   //va llenando la lista con los nombres que van ingresando

   }
      document.getElementById('amigo').value="";                    //Vacía la caja de texto despues de presionar el botón añadir
      presentarLista(amigos);
      
      return;
        
}

function presentarLista(amigos){

    lista=document.getElementById('listaAmigos');           //Asocia la lista del HTML con la variable lista
    lista.innerHTML="";                                    //borra la lista antes de actualizar, para que no se repita la lista en pantalla

    for(let i=0;i<amigos.length;i++){
        const elemento = document.createElement("li");  //crea un elemento de una lista
        elemento.textContent=amigos[i];                 //Asigna un nombre de la lista al elemento la lista de HTML
        lista.appendChild(elemento);                    //Agrega el elemento a la lista de HTML
    }
    return;
}



function sortearAmigo(amigos){
    
    if(amigos==''){
        alert("Debe ingresar una lista de amigos");
    }
    else {
             
        posicionCero=['Null']                               //se llena la posición cero con un valor null, para poder sortear todas las posiciones con información valida en la lista
        amigos=posicionCero.concat(amigos);    
        
        let cantidadAmigos = amigos.length-1;
        let elegido = Math.floor(Math.random()*cantidadAmigos)+1;
        
        sorteo = document.getElementById('resultado');
        sorteo.innerHTML="";  
        const elemento = document.createElement("li");      //para poder adicionar un elemento en la lista se debe colocar "li" en el HTML
        elemento.textContent=amigos[elegido];      
               
        sorteo.appendChild(elemento); 
    }
   
    return;
}