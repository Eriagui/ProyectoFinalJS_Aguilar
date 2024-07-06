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