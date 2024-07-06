const addCartToHTML_index = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(sistema.carrito.length > 0){
        sistema.carrito.forEach(item => {
            totalQuantity = totalQuantity +  item.cantidad;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.id;

            let positionProduct = sistema.productos.findIndex((value) => value.id == item.id);
            let info = sistema.productos[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="./assets/images/${info.imagen}.webp">
                </div>
                <div class="name">
                Iphone ${info.modelo}, ${info.color}, ${info.capacidad} GB
                </div>
                <div class="totalPrice">$${info.precio * item.cantidad}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.cantidad}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
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
    addCartToHTML_index();
    actualizar_icono_carrito()
    //addCartToMemory();
    let sistema_texto = JSON.stringify(sistema) // el carrito se convierte a texto para poderlo almacenar en el local storage
    //Se almacena el carrito en el local storage
    localStorage.setItem("saved_system", sistema_texto)
}