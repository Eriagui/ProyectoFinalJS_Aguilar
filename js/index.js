actualizar_icono_carrito()
addCartToHTML()

// arreglo con el nombre de los modelos diferentes
let modelo_array = []

//arreglo con el precio más bajo por modelo
let precio_array = []

//arreglo con las imagenes por modelo
let image_array = []

// Se obtiene un arreglo con los modelos diferentes de los productos en el sistema
sistema.productos.forEach((elm, num) => {
    let modelo = sistema.productos[num].modelo
    modelo_array.includes(modelo) ? modelo_array : modelo_array.push(modelo)
})

// Se obtiene el precio más bajo de cada modelo en el arreglo obtenido en el paso anterior

modelo_array.forEach((elm,num) => {
    let precio = sistema.productos[num].precio[0]
    precio_array.push(precio)

    //let modelo_encontrado = sistema.productos.filter((elm2) => elm2.modelo == elm)

    //let precio = modelo_encontrado.precio
    // Se ordena en función a su precio en forma ascendente
    //modelo_encontrado.sort((a, b) => a.precio - b.precio)
    // El primer elemento es el de menor precio
    //let precio = modelo_encontrado[0].precio
    //precio_array.push(precio)
})



// Se obtiene la imagen del modelo correspondiente
modelo_array.forEach((elm,num) => {
    let indice = Math.floor(Math.random()*(sistema.productos[num].imagen.length-1))
    let imagen = sistema.productos[num].imagen[indice]
    //let modelo_encontrado = sistema.productos.filter((elm2) => elm2.modelo == elm)
    // Se toma la imagen del primer elemento
    //let num = Math.floor(Math.random()*(modelo_encontrado.imagen.length-1))
    //let imagen = modelo_encontrado.imagen[num]
    image_array.push(imagen)
})

let container_cards = document.querySelector("#container")

//console.log(modelo_array)
//console.log(precio_array)
//console.log(image_array)

modelo_array.forEach((elm, num) => {
    //console.log(num)
    let plantilla = document.querySelector("template").content.cloneNode(true)
    plantilla.querySelector("#producto").innerText = "Iphone " + modelo_array[num]
    plantilla.querySelector("#precio").innerText = "Desde $ " + precio_array[num] + " MXN"
    plantilla.querySelector("#imagen").src = `./assets/images/${image_array[num]}.webp`
    plantilla.querySelector("#imagen").alt = "Iphone " + modelo_array[num]
    plantilla.querySelector("#imagen").title = "Iphone " + modelo_array[num]
    let button_comprar = plantilla.querySelector("a")
    button_comprar.classList.add(modelo_array[num])
    container_cards.append(plantilla)

    button_comprar.addEventListener("click", (event) => {
        let modelo_seleccionado = button_comprar.classList[2]
        //console.log ("Se dio click en el modelo " + modelo_seleccionado)
        localStorage.setItem("modelo", modelo_seleccionado)
        window.location.href = "./pages/producto.html"
    })
})







//let modelo_array = ["SE", "12", "13", "14", "15", "15 Plus", "15 Pro", "15 Pro Max"]
//let tag_array = ["#precio_SE", "#precio_12", "#precio_13", "#precio_14", "#precio_15", "#precio_15_Plus", "#precio_15_Pro", "#precio_15_Pro_Max"]

//modelo_array.forEach((elm, num) => {
//    write_price(elm, tag_array[num])
//})

//function write_price(modelo, tag) {
//Se obtiene un arreglo del modelo de interés
//   let modelo_encontrado = sistema.productos.filter((elm2) => elm2.modelo == modelo)
// Se ordena en función a su precio en forma ascendente
//   modelo_encontrado.sort((a, b) => a.precio - b.precio)

// El primer elemento es el de menor precio
//    let precio = modelo_encontrado[0].precio
// Se coloca el precio en el lugar correspondiente
//   document.querySelector(tag).innerText = "Desde $ " + precio
//}