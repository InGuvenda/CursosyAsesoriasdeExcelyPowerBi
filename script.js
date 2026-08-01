let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio){
    carrito.push({nombre, precio});
    total += precio;
    mostrarCarrito();
}

function mostrarCarrito(){
    let lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.nombre + " - $" + item.precio;
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = "Total: $" + total;
}
