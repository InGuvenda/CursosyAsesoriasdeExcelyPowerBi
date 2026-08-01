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

    carrito.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item.nombre + " - $" + item.precio;

        // BOTÓN ELIMINAR
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarProducto(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = "Total: $" + total;
}

function eliminarProducto(index){
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    mostrarCarrito();
}

// 🔥 COMPRA POR WHATSAPP
function comprar(){
    if(carrito.length === 0){
        alert("Tu carrito está vacío");
        return;
    }

    let mensaje = "Hola, quiero comprar:\n";

    carrito.forEach(item=>{
        mensaje += "- " + item.nombre + " ($" + item.precio + ")\n";
    });

    mensaje += "Total: $" + total;

    let url = "https://wa.me/523333945657?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}
