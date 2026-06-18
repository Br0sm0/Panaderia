let saludo = document.getElementById("saludo")
let hora = new Date().getHours()

if (hora < 12){
    saludo.textContent = "Buenos Dias y Bienvenido"
}
else if( hora >=12 && hora < 18){
    saludo.textContent = "Buenas tardes y Bienvenido"
    
}
else{
    saludo.textContent = "Buenas noches y Bienvenido"
    
}


const boton = document.getElementById("btn-menu")
const menu = document.getElementById("menu")

boton.addEventListener("click",function(){
    menu.classList.toggle("menu-abierto")
})

const botnPedido = document.getElementById("btn-pedido")

botnPedido.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let producto = document.getElementById("menu-pedido").value;
    if (nombre){
        document.getElementById("respuesta").textContent= "Gracias "+ nombre +" tu pedido de "+ producto +" está confirmado";
    }
    else{
        document.getElementById("respuesta").textContent= "No ingresaste un nombre, Por favor ingresa tu nombre"
    }
    
})

