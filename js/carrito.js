let body = document.querySelector('body');
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let listCartHTML = document.querySelector('.listCart');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

function cantidad_carrito() {
    total_articulos = 0
    sistema.carrito.forEach((elm) =>{
        total_articulos = total_articulos + elm.cantidad
    })
    return total_articulos
}

function actualizar_icono_carrito(){
    let total = cantidad_carrito()
    document.querySelector(".cantidad-carrito").innerText = total
}

const addCartToHTML = () => {
    OrderCart ()
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(sistema.carrito.length > 0){
        sistema.carrito.forEach(item => {
            totalQuantity = totalQuantity +  item.cantidad;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.id;

            //let positionProduct = sistema.productos.findIndex((value) => value.id == item.id);
            //let info = sistema.productos[positionProduct];
            listCartHTML.appendChild(newItem);

            let path = window.location.href
            let fileName = path.substring(path.lastIndexOf("/") + 1)
            let prefix

            //Si no estamos en la página index, entonces necesitamos dos puntos para la ruta
            fileName == "index.html" ? prefix ="." : prefix=".."

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
    }

    if(sistema.carrito.length >0){
        let total = 0;
        sistema.carrito.forEach((item) => {
            total = total + item.cantidad*item.precio_unitario
        })

        let newItem = document.createElement("div")
        listCartHTML.appendChild(newItem)
        newItem.innerHTML = `
        <div class="total">
            Total: $ ${total} MXN
        </div>
        `
    }

     //iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = sistema.carrito.findIndex((value) => value.id == product_id);
    if(positionItemInCart >= 0){
        let info = sistema.carrito[positionItemInCart];
        switch (type) {
            case 'plus':
                sistema.carrito[positionItemInCart].cantidad = sistema.carrito[positionItemInCart].cantidad + 1;
                break;
        
            default:
                let changeQuantity = sistema.carrito[positionItemInCart].cantidad - 1;
                if (changeQuantity > 0) {
                    sistema.carrito[positionItemInCart].cantidad = changeQuantity;
                }else{
                    sistema.carrito.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    actualizar_icono_carrito()
    //addCartToMemory();
    let sistema_texto = JSON.stringify(sistema) // el carrito se convierte a texto para poderlo almacenar en el local storage
    //Se almacena el carrito en el local storage
    localStorage.setItem("saved_system", sistema_texto)
}

function OrderCart (){
    if(sistema.carrito.length > 0){
        sistema.carrito.sort((a, b) => a.precio_unitario - b.precio_unitario)
    }
}