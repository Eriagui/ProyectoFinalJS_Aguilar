let body = document.querySelector('body');
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let checkOutCart = document.querySelector('.checkOut');
let listCartHTML = document.querySelector('.listCart');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

checkOutCart.addEventListener('click', () => {
    setTimeout(() => {
        Swal.fire({
            icon: "error",
            text: "Error de conexión. Por favor, intente más tarde",
        })
    }, 1000)

})

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})

// funciones relacionadas al carrito

function cantidad_carrito() {
    total_articulos = 0
    carrito.forEach((elm) => {
        total_articulos = total_articulos + elm.cantidad
    })
    return total_articulos
}

function actualizar_icono_carrito() {
    let total = cantidad_carrito()
    document.querySelector(".cantidad-carrito").innerText = total
}

const addCartToHTML = () => {
    OrderCart()
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let total = 0;
    if (carrito.length > 0) {
        carrito.forEach(item => {
            total = total + item.cantidad * item.precio_unitario
            totalQuantity = totalQuantity + item.cantidad;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.id;

            listCartHTML.appendChild(newItem);

            let path = window.location.href
            let fileName = path.substring(path.lastIndexOf("/") + 1)
            let prefix

            //Si no estamos en la página index, entonces necesitamos dos puntos para la ruta
            fileName == "index.html" ? prefix = "." : prefix = ".."

            newItem.innerHTML = `
            <div class="image">
                    <img src="${prefix}/assets/images/${item.imagen}.webp">
                </div>
                <div class="name">
                Iphone ${item.modelo}, ${item.color}, ${item.capacidad} GB
                </div>
                <div class="totalPrice">Precio $${item.precio_unitario}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.cantidad}</span>
                    <span class="plus">></span>
                </div>
                <div class="totalPrice">Subtotal $${item.precio_unitario * item.cantidad}</div>
            `;
        })
        let newItem = document.createElement("div")
        listCartHTML.appendChild(newItem)
        newItem.innerHTML = `
        <div class="total">
            Total: $ ${total} MXN
        </div>
        `

    }
}

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = carrito.findIndex((value) => value.id == product_id);
    if (positionItemInCart >= 0) {
        let info = carrito[positionItemInCart];
        switch (type) {
            case 'plus':
                carrito[positionItemInCart].cantidad = carrito[positionItemInCart].cantidad + 1;
                break;

            default:
                let changeQuantity = carrito[positionItemInCart].cantidad - 1;
                if (changeQuantity > 0) {
                    carrito[positionItemInCart].cantidad = changeQuantity;
                } else {
                    carrito.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    actualizar_icono_carrito()
    // el carrito se convierte a texto para poderlo almacenar en el local storage
    let carrito_texto = JSON.stringify(carrito)
    //Se almacena el carrito en el local storage
    localStorage.setItem("saved_cart", carrito_texto)
}

function OrderCart() {
    if (carrito.length > 0) {
        carrito.sort((a, b) => a.precio_unitario - b.precio_unitario)
    }
}