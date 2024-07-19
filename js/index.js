
// Programa principal del index
let sistema = new Sistema

fetch('./js/sistema_productos.json')
    .then(response => response.json())
    .then(data => {
        sistema.productos = data
        actualizar_icono_carrito() //función en carrito.js
        addCartToHTML() //función en carrito.js
        index_setup(sistema)
    })


// Funciones del index

function index_setup(sistema) {

    capacity_filter_setup()
    color_filter_setup()
    let modelo_precio_image = initial_setup(sistema)
    buttons_and_form_setup(sistema, modelo_precio_image)
}

function buttons_and_form_setup(sistema, modelo_precio_image) {

    // Se identifican todos los botones
    let boton = document.querySelectorAll(".btn")
    let modelo_array = modelo_precio_image[0].map((x) => x)
    let precio_array = modelo_precio_image[1].map((x) => x)
    let image_array = modelo_precio_image[2].map((x) => x)

    // Se le agrega la categoría de seleccionado al botón sobre el cual se hace click
    // Se recorren todos los botones
    boton.forEach((btn, num) => {

        // Se obtienen las clases del botón a evaluar
        let clases = boton[num].classList.value

        // Si el botón no es un botón primario (botón para ver detalles del producto)
        if (!clases.includes("btn-primary")) {

            boton[num].addEventListener("click", () => {

                let seleccionado = num

                // Se obtienen las clases del botón seleccionado
                clases_seleccionado = boton[seleccionado].classList.value

                // Se le agrega la clase de "btn-selected" al nuevo botón seleccionado
                boton[seleccionado].classList.add("btn-selected")

                // Se le quita la clase de seleccionado a los botones previamente seleccionados (con el mismo objetivo: seleccionar capacidad o color)
                unselect_other_btns(boton, seleccionado)

                // Se obtiene la capacidad del equipo seleccionado
                capacidad = get_capacity()
                // Se obtiene el color del equipo seleccionado
                color = get_color()

                // Se borran los datos que se tenían originalmente al cargar la página
                modelo_array = []
                precio_array = []
                image_array = []

                // Se obtiene un arreglo con los modelos diferentes de los productos en el sistema que cumplan con el filtro
                sistema.productos.forEach((elm, num) => {
                    let colores_producto = sistema.productos[num].color
                    let capacidades_producto = sistema.productos[num].capacidad

                    if (color == "todos" && isNaN(capacidad)) {
                        modelo = sistema.productos[num].modelo
                        modelo_array.includes(modelo) ? modelo_array : modelo_array.push(modelo)
                    } else {
                        if (color == "todos" || isNaN(capacidad)) {
                            if (color == "todos") {
                                if (capacidades_producto.includes(capacidad)) {
                                    modelo = sistema.productos[num].modelo
                                    modelo_array.includes(modelo) ? modelo_array : modelo_array.push(modelo)
                                }
                            }
                            if (isNaN(capacidad)) {
                                if (colores_producto.includes(color)) {
                                    modelo = sistema.productos[num].modelo
                                    modelo_array.includes(modelo) ? modelo_array : modelo_array.push(modelo)
                                }
                            }
                        } else {
                            if (colores_producto.includes(color) && capacidades_producto.includes(capacidad)) {
                                modelo = sistema.productos[num].modelo
                                modelo_array.includes(modelo) ? modelo_array : modelo_array.push(modelo)
                            }
                        }
                    }
                })
                // Se obtiene el precio más bajo de cada modelo en el arreglo obtenido en el paso anterior

                modelo_array.forEach((elm, num) => {
                    let producto = sistema.productos.filter((elm) => elm.modelo == modelo_array[num])
                    if (isNaN(capacidad)) {
                        let precio = producto[0].precio[0]
                        precio_array.push(precio)
                    } else {
                        let indice = producto[0].capacidad.indexOf(capacidad)
                        let precio = producto[0].precio[indice]
                        precio_array.push(precio)
                    }
                })

                if (color == "todos") {
                    // Se obtiene una imagen en color aleatorio del modelo correspondiente
                    modelo_array.forEach((elm, num) => {
                        let producto = sistema.productos.filter((elm) => elm.modelo == modelo_array[num])
                        let indice = Math.floor(Math.random() * (producto[0].imagen.length - 1))
                        let imagen = producto[0].imagen[indice]
                        image_array.push(imagen)
                    })
                } else {
                    // Se obtiene una imagen con el color filtrado del modelo correspondiente
                    modelo_array.forEach((elm, num) => {

                        let producto = sistema.productos.filter((elm) => elm.modelo == modelo_array[num])
                        let indice = producto[0].color.indexOf(color)
                        let imagen = producto[0].imagen[indice]
                        image_array.push(imagen)
                    })
                }

                actualiza_html(modelo_array, precio_array, image_array)
            })
        }
    })

    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault()
        let desde = Number(document.querySelector("#desde_input").value)
        let hasta = Number(document.querySelector("#hasta_input").value)

        let sigue = valida_filtro_precio(desde, hasta)

        if (sigue) {
            let modelo_array_actualizado = modelo_array.map((x) => x)
            let precio_array_actualizado = precio_array.map((x) => x)
            let image_array_actualizado = image_array.map((x) => x)
            let modelo_array_actualizado2 = []
            let precio_array_actualizado2 = []
            let image_array_actualizado2 = []

            precio_array.forEach((elm, num) => {
                if (elm < desde || elm > hasta) {
                    modelo_array_actualizado.splice(num, 1, -1)
                    precio_array_actualizado.splice(num, 1, -1)
                    image_array_actualizado.splice(num, 1, -1)
                }
            })

            modelo_array_actualizado.forEach((elm) => {
                if (elm != -1) {
                    modelo_array_actualizado2.push(elm)
                }
            })

            precio_array_actualizado.forEach((elm) => {
                if (elm != -1) {
                    precio_array_actualizado2.push(elm)
                }
            })

            image_array_actualizado.forEach((elm) => {
                if (elm != -1) {
                    image_array_actualizado2.push(elm)
                }
            })

            actualiza_html(modelo_array_actualizado2, precio_array_actualizado2, image_array_actualizado2)
        }
    })
}

function capacity_filter_setup() {
    let filtro_capacidades = ["Todas", "64", "128", "256", "512", "1000"]

    let container = document.querySelector("#capacidad_container")

    filtro_capacidades.forEach((elm) => {
        let plantilla = document.querySelector("#template1").content.cloneNode(true)
        plantilla.querySelector("button").innerText = elm
        if (elm == "Todas") {
            plantilla.querySelector("button").classList.add("btn-selected")
        }
        container.append(plantilla)
    })
}

function color_filter_setup() {
    let filtro_colores = ["Todos", "rosa", "amarillo", "morado", "azul", "medianoche", "banco", "rojo", "blanco_estelar", "verde", "negro", "natural", "azul_medianoche"]
    container = document.querySelector("#colores_container")

    let contador = 1
    filtro_colores.forEach((elm, num) => {
        let plantilla = document.querySelector("#template2").content.cloneNode(true)
        plantilla.querySelector("button").innerText = elm
        if (elm == "Todos") {
            plantilla.querySelector("button").classList.add("btn-selected")
        } else {
            plantilla.querySelector("button").classList.add(`btn-${elm}`)
        }

        switch (contador) {
            case 1:
                plantilla.querySelector("div").classList.add("col-4")
                break
            case 2:
                plantilla.querySelector("div").classList.add("col-3")
                break
            case 3:
                plantilla.querySelector("div").classList.add("col-5")
                break
        }

        let resto = contador % 3
        if (resto == 0) {
            contador = 1
        } else {
            contador++
        }

        container.append(plantilla)
    })
}

function initial_setup(sistema) {
    // Se obtiene la capacidad del equipo seleccionado (por defecto)
    let capacidad = get_capacity()

    // Se obtiene el color del equipo seleccionado (por defecto)
    let color = get_color()

    // arreglo con el nombre de los modelos diferentes
    let modelo_array = []

    //arreglo con el precio más bajo por modelo
    let precio_array = []

    //arreglo con las imagenes por modelo
    let image_array = []

    // Se obtiene un arreglo con el nombre de todos los modelos diferentes
    sistema.productos.forEach((item, num) => {
        let modelo = sistema.productos[num].modelo
        modelo_array.includes(modelo) ? modelo_array : modelo_array.push(modelo)
    })

    // Se obtiene el precio más bajo de cada modelo en el arreglo obtenido en el paso anterior
    modelo_array.forEach((elm, num) => {
        let precio = sistema.productos[num].precio[0]
        precio_array.push(precio)
    })

    // Se obtiene una imagen en color aleatorio del modelo correspondiente
    modelo_array.forEach((elm, num) => {
        let indice = Math.floor(Math.random() * (sistema.productos[num].imagen.length - 1))
        let imagen = sistema.productos[num].imagen[indice]
        image_array.push(imagen)
    })

    // Se despliegan los modelos en la página
    let container_cards = document.querySelector("#container")

    modelo_array.forEach((elm, num) => {

        let plantilla = document.querySelector("#template3").content.cloneNode(true)
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
            localStorage.setItem("modelo", modelo_seleccionado)
            window.location.href = "./pages/producto.html"
        })
    })
    return [modelo_array, precio_array, image_array]
}

function form_setup(modelo_precio_image) {


    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault()
        let desde = Number(document.querySelector("#desde_input").value)
        let hasta = Number(document.querySelector("#hasta_input").value)

        let sigue = valida_filtro_precio(desde, hasta)

        let modelo_array = modelo_precio_image[0].map((x) => x)
        let precio_array = modelo_precio_image[1].map((x) => x)
        let image_array = modelo_precio_image[2].map((x) => x)


        if (sigue) {
            let modelo_array_actualizado = modelo_array.map((x) => x)
            let precio_array_actualizado = precio_array.map((x) => x)
            let image_array_actualizado = image_array.map((x) => x)
            let modelo_array_actualizado2 = []
            let precio_array_actualizado2 = []
            let image_array_actualizado2 = []

            precio_array.forEach((elm, num) => {
                if (elm < desde || elm > hasta) {
                    modelo_array_actualizado.splice(num, 1, -1)
                    precio_array_actualizado.splice(num, 1, -1)
                    image_array_actualizado.splice(num, 1, -1)
                }
            })

            modelo_array_actualizado.forEach((elm) => {
                if (elm != -1) {
                    modelo_array_actualizado2.push(elm)
                }
            })

            precio_array_actualizado.forEach((elm) => {
                if (elm != -1) {
                    precio_array_actualizado2.push(elm)
                }
            })

            image_array_actualizado.forEach((elm) => {
                if (elm != -1) {
                    image_array_actualizado2.push(elm)
                }
            })

            actualiza_html(modelo_array_actualizado2, precio_array_actualizado2, image_array_actualizado2)
        }
    })
}

function actualiza_html(modelo_array, precio_array, image_array) {
    //Se borra lo cargado anteriormente en la página
    document.querySelector("#container").innerHTML = ``
    let container_cards = document.querySelector("#container")
    if (modelo_array.length == 0) {
        container_cards.innerHTML = `
        <h1>iPhones no encontrados</h1>
        `
    } else {
        modelo_array.forEach((elm, num) => {
            container_cards.innerHTML += `
            <div class="col-xs-12 col-md-6 col-lg-3">
                    <div class="card text-center" >
                        <img src="./assets/images/${image_array[num]}.webp" alt="Iphone ${modelo_array[num]}" class="img-fluid card-img-top"
                            title="Iphone ${modelo_array[num]}" id="imagen" />
                        <div class="card-body">
                            <strong class="card-title" id="producto">iPhone ${modelo_array[num]}</strong>
                            <p>
                                <strong class="card-text" id="precio">Desde $ ${precio_array[num]} MXN</strong>
                            </p>
                            <a class="btn btn-primary ${modelo_array[num]}">Ver</a>
                        </div>
                    </div>
                </div>
            `
        })

        container_cards = document.querySelector("#container")
        let button_ver = container_cards.querySelectorAll("a")

        button_ver.forEach((elm, num) => {
            button_ver[num].addEventListener("click", (event) => {
                let modelo_seleccionado = button_ver[num].classList[2]
                localStorage.setItem("modelo", modelo_seleccionado)
                window.location.href = "./pages/producto.html"
            })
        })
    }
}

function valida_filtro_precio(desde1, hasta1) {
    let sigue = true

    outerBlock: {
        if (!desde1) {

            Swal.fire({
                icon: "error",
                text: "Por favor especifique un valor para Desde",
            })

            sigue = false
            break outerBlock
        }

        if (!hasta1) {

            Swal.fire({
                icon: "error",
                text: "Por favor especifique un valor para Hasta",
            })

            sigue = false
            break outerBlock
        }

        if (desde1 > hasta1) {

            Swal.fire({
                icon: "error",
                text: "El valor Desde tiene que ser menor al valor Hasta",
            })

            sigue = false
            break outerBlock
        }
    }
    return sigue
}