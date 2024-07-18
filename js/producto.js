

// Se cargan los artículos en el icono y la lista del carrito
actualizar_icono_carrito()
addCartToHTML()

let clases_seleccionado = []
let precio
let capacidad
let color
let modelo = localStorage.getItem("modelo")
let capacidades = []
let colores = []
let nombre_imagen

let modelo_filtrado = sistema.productos.filter((elm) => elm.modelo == modelo)

// Se obtienen todas las capacidades disponibles del modelo
capacidades = modelo_filtrado[0].capacidad

// Se obtienen todos los colores disponibles del modelo
colores = modelo_filtrado[0].color

// Se clona la plantilla para modificarla posteriormente
let plantilla = document.querySelector("template").content.cloneNode(true)

// Modelo del producto
plantilla.querySelector("h1").innerText = "iphone " + modelo

// Botones de capacidades del producto

// Se coloca la información en los que aplican
capacidades.forEach((elm, num) => {
    plantilla.querySelector(`#capacity${num + 1}`).innerText = capacidades[num]
})

let longitud = capacidades.length
// Se remueven los botones sobrantes
for (let i = longitud + 1; i < 5; i++) {
    let parent = plantilla.querySelector(`#parent_capacity${i}`)
    let child = plantilla.querySelector(`#capacity${i}`)
    parent.removeChild(child)
}

// Botones de colores del producto

// Se coloca la información en los que aplican
colores.forEach((elm, num) => {
    plantilla.querySelector(`#color${num + 1}`).innerText = colores[num]
    plantilla.querySelector(`#color${num + 1}`).classList.add(`btn-${colores[num]}`)
})

longitud = colores.length
// Se remueven los botones sobrantes
for (let i = longitud + 1; i < 7; i++) {
    let parent = plantilla.querySelector(`#parent_color${i}`)
    let child = plantilla.querySelector(`#color${i}`)
    parent.removeChild(child)
}

// Se coloca la descripción del modelo correspondiente
let descripcion = plantilla.querySelector("#descripcion")

switch (modelo) {
    case "SE":
        descripcion.innerHTML = `
            <h2>Descripción del Producto</h2>
                <ul>
                    <li>Chip A15 Bionic, el mismo que trae el iPhone13</li>
                    <li>Rendimiento gráfico hasta x1.2 más rápido</li>
                    <li>Un gran avance en duración de bateria</li>
                    <li>Conexión 5G rapidísima</li>
                    <li>Diseño hecho para durar</li>
                    <li>Cámara que es una superestrella</li>
                    <li>Botón de inicio para que te sientas en casa</li>
                </ul>
        `
        break;

    case "12":
        descripcion.innerHTML = `
            <h2>Descripción del Producto</h2>
                <ul>
                    <li>Pantalla Super Retina XDR y True Tone Pantalla OLED de 6.1 pulgadas (diagonal) sin marco</li>
                    <li>Diseño de aluminio con frente de Ceramic Shield y parte posterior de vidrio</li>
                    <li>Resistente al agua hasta por 30 minutos a una profundidad máxima de 6 metros</li>
                    <li>Sistema de 2 cámaras Pro de 12 MP(ultra gran angular y gran angular)</li>
                    <li>Cámara frontal TrueDepth 12MP</li>
                    <li>5G y Gigabit LTE Chip A14 Bionic con Neural Engine de última generación</li>
                    <li>Escáner LiDar para tomar retratos con modo de noche y con poca luz.</li>
                </ul>
        `
        break;

    case "13":
        descripcion.innerHTML = `
            <h2>Descripción del Producto</h2>
                <ul>
                    <li>Pantalla Super Retina XDR de 6.1 Pulgadas</li>
                    <li>Captura hasta 2.2 veces más luz</li>
                    <li>Compatible con 5G</li>
                    <li>Cámara Gran angular y Ultra gran angular</li>
                    <li>Modo Cine en videos de 1080p a 30 cps</li>
                    <li>Grabación de video HDR en Dolby Vision de hasta 4K a 60 cps</li>
                    <li>Chip A15 Bionic</li>
                    <li>Nuevo CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia</li>
                    <li>Nuevo GPU de 4 núcleos</li>
                    <li>Nuevo Neural Engine de 16 núcleos</li>
                    <li>Hasta 19 horas de reproducción de video</li>
                    <li>Frente de Ceramic Shield</li>
                    <li>Diseño de aluminio con parte posterior de vidrio</li>
                    <li>Resistencia al agua IP68</li>
                </ul>
        `
        break;

    case "14":
        descripcion.innerHTML = `
                <h2>Descripción del Producto</h2>
                    <ul>
                        <li>Pantalla Super Retina XDR de 6.1 pulgadas</li>
                        <li>Sistema avanzado de cámaras para tomar mejores fotos en cualquier condición de luz</li>
                        <li>Modo Cine ahora en 4K Dolby Vision de hasta 30 cps</li>
                        <li>Modo Acción para lograr videos estables, aun con cámara en mano</li>
                        <li>Detección de Choques, una funcionalidad de seguridad que pide ayuda cuando tú no puedes</li>
                        <li>Batería para todo el día y hasta 20 horas de reproducción de video</li>
                        <li>Chip A15 Bionic con GPU de 5 núcleos para un rendimiento fuera de serie. Red 5G ultrarrápida</li>
                        <li>Ceramic Shield y resistencia al agua, características de durabilidad líderes en la industria</li>
                        <li>iOS 16 ofrece aún más opciones de personalización y más formas de comunicarse y compartir</li>
                    </ul>
            `
        break;

    case "14_Plus":
        descripcion.innerHTML = `
                    <h2>Descripción del Producto</h2>
                        <ul>
                            <li>Pantalla Super Retina XDR de 6.1 pulgadas</li>
                            <li>Sistema avanzado de cámaras para tomar mejores fotos en cualquier condición de luz</li>
                            <li>Modo Cine ahora en 4K Dolby Vision de hasta 30 cps</li>
                            <li>Modo Acción para lograr videos estables, aun con cámara en mano</li>
                            <li>Detección de Choques, una funcionalidad de seguridad que pide ayuda cuando tú no puedes</li>
                            <li>Batería para todo el día y hasta 26 horas de reproducción de video</li>
                            <li>Chip A15 Bionic con GPU de 5 núcleos para un rendimiento fuera de serie. Red 5G ultrarrápida</li>
                            <li>Ceramic Shield y resistencia al agua, características de durabilidad líderes en la industria</li>
                            <li>iOS 16 ofrece aún más opciones de personalización y más formas de comunicarse y compartir</li>
                        </ul>
                `
        break;

    case "15":
        descripcion.innerHTML = `
                    <h2>Descripción del Producto</h2>
                        <ul>
                            <li>LA DYNAMIC ISLAND LLEGA AL IPHONE 15 — La Dynamic Island te muestra alertas y Actividades en Vivo para que no te pierdas nada mientras haces de todo. Puedes ver cuánto falta para que llegue el auto que pediste, saber si alguien te está llamando, consultar el estado de tu vuelo y mucho más.</li>
                            <li>DISEÑO INNOVADOR — El iPhone 15 tiene un robusto vidrio con infusión de color en un diseño de aluminio. Es resistente a las salpicaduras, al agua y al polvo, y viene con frente de Ceramic Shield, más duro que cualquier vidrio de smartphone. Además, la pantalla Super Retina XDR de 6.1 pulgadas es hasta dos veces más brillante bajo el sol en comparación con el iPhone 14.</li>
                            <li>CÁMARA GRAN ANGULAR DE 48 MP CON TELEOBJETIVO DE 2X — La cámara gran angular de 48 MP hace capturas en superalta resolución para que sea más fácil que nunca tomar fotos espectaculares y con 6 gran nivel de detalle. Y el teleobjetivo de 2x de calidad óptica te permite encuadrar tomas perfectas en primer plano.</li>
                            <li>RETRATOS DE ÚLTIMA GENERACIÓN — Captura retratos con muchísimos más detalles y color. Y cambia el enfoque de un sujeto a otro con un simple toque, incluso después de tomar la foto.</li>
                            <li>SUPERPOTENTE CHIP A16 BIONIC — El ultrarrápido chip A16 Bionic brinda la potencia necesaria para hacer realidad las funcionalidades más avanzadas, como la fotografía computacional, las transiciones animadas de la Dynamic Island y el uso de Aislamiento de Voz en las llamadas. Además, su increíble eficiencia ayuda a ofrecer una duración de batería para todo el día.</li>
                            <li>CONEXIÓN USB-C — Con la nueva entrada USB-C puedes cargar tu Mac o iPad con el mismo cable que usas para cargar el iPhone 15. Incluso puedes usar el iPhone 15 para cargar el Apple Watch o los AirPods.</li>
                            <li>FUNCIONALIDAD ESENCIAL DE SEGURIDAD— Con Detección de Choques, el iPhone puede identificar si sufres un accidente de auto grave y pedir ayuda cuando tú no puedes.</li>
                            <li>INNOVACIONES QUE MARCAN LA DIFERENCIA — El iPhone cuenta con tecnologías de privacidad que te ayudan a mantener el control de tus datos. Está fabricado con más materiales reciclados para reducir su impacto medioambiental. Y viene con funcionalidades integradas que lo hace accesible para todo el mundo.</li>
                        </ul>
                `
        break;

    case "15_Plus":
        descripcion.innerHTML = `
                    <h2>Descripción del Producto</h2>
                        <ul>
                            <li>LA DYNAMIC ISLAND LLEGA AL IPHONE 15 PLUS — La Dynamic Island te muestra alertas y Actividades en Vivo para que no te pierdas nada mientras haces de todo. Puedes ver cuánto falta para que llegue el auto que pediste, saber si alguien te está llamando, consultar el estado de tu vuelo y mucho más.</li>
                            <li>DISEÑO INNOVADOR — El iPhone 15 Plus tiene un robusto vidrio con infusión de color en un diseño de aluminio. Es resistente a las salpicaduras, al agua y al polvo, y viene con frente de Ceramic Shield, más duro que cualquier vidrio de smartphone. Además, la pantalla Super Retina XDR de 6.7 pulgadas es hasta dos veces más brillante bajo el sol en comparación con el iPhone 14.</li>
                            <li>CÁMARA GRAN ANGULAR DE 48 MP CON TELEOBJETIVO DE 2X — La cámara gran angular de 48 MP hace capturas en superalta resolución para que sea más fácil que nunca tomar fotos espectaculares y con 6 gran nivel de detalle. Y el teleobjetivo de 2x de calidad óptica te permite encuadrar tomas perfectas en primer plano.</li>
                            <li>RETRATOS DE ÚLTIMA GENERACIÓN — Captura retratos con muchísimos más detalles y color. Y cambia el enfoque de un sujeto a otro con un simple toque, incluso después de tomar la foto.</li>
                            <li>SUPERPOTENTE CHIP A16 BIONIC — El ultrarrápido chip A16 Bionic brinda la potencia necesaria para hacer realidad las funcionalidades más avanzadas, como la fotografía computacional, las transiciones animadas de la Dynamic Island y el uso de Aislamiento de Voz en las llamadas. Además, su increíble eficiencia ayuda a ofrecer una duración de batería para todo el día.</li>
                            <li>CONEXIÓN USB-C — Con la nueva entrada USB-C puedes cargar tu Mac o iPad con el mismo cable que usas para cargar el iPhone 15. Incluso puedes usar el iPhone 15 Plus para cargar el Apple Watch o los AirPods.</li>
                            <li>FUNCIONALIDAD ESENCIAL DE SEGURIDAD— Con Detección de Choques, el iPhone puede identificar si sufres un accidente de auto grave y pedir ayuda cuando tú no puedes.</li>
                            <li>INNOVACIONES QUE MARCAN LA DIFERENCIA — El iPhone cuenta con tecnologías de privacidad que te ayudan a mantener el control de tus datos. Está fabricado con más materiales reciclados para reducir su impacto medioambiental. Y viene con funcionalidades integradas que lo hace accesible para todo el mundo.</li>
                        </ul>
                `
        break;

    case "15_Pro":
        descripcion.innerHTML = `
                    <h2>Descripción del Producto</h2>
                        <ul>
                            <li>FORJADO EN TITANIO — El iPhone 15 Pro tiene un diseño resistente y ligero, con titanio de calidad aeroespacial y parte posterior de vidrio mate texturizado. Frente de Ceramic Shield, más duro que el vidrio más duro de cualquier smartphone. Y resistencia a las salpicaduras, al agua y al polvo.</li>
                            <li>PANTALLA AVANZADA — La pantalla Super Retina XDR de 6.1 pulgadas con ProMotion aumenta la frecuencia de actualización hasta 120 Hz cuando necesitas el máximo rendimiento gráfico. La Dynamic Island muestra alertas y Actividades en Vivo al instante. Y la pantalla siempre activa te permite tener información siempre a la vista sin mover un dedo.</li>
                            <li>REVOLUCIONARIO CHIP A17 PRO — Con el GPU de nivel pro, los juegos móviles son más inmersivos, con escenarios llenos de detalles y personajes más realistas. Y el chip A17 Pro es tan eficiente que la batería es capaz de seguirte el ritmo todo el día.</li>
                            <li>SISTEMA DE CÁMARAS PRO — Multiplica tus opciones de encuadre con 7 lentes pro. Toma fotos en superalta resolución con más colores y detalles que nunca con la cámara gran angular de 48 MP. Y captura primeros planos supernítidos desde más lejos con la cámara teleobjetivo de 3x del iPhone 15 Pro.</li>
                            <li>BOTÓN DE ACCIÓN PERSONALIZABLE — El Botón de Acción te lleva volando a tu funcionalidad favorita, como el modo Silencio, Cámara, Nota de Voz o Atajos. Configúralo con la que quieras usar y mantenlo presionado para que haga su magia.</li>
                            <li>CONEXIONES MUY PRO — El nuevo conector USB-C te permite cargar tu Mac o iPad con el mismo cable que usas para cargar el iPhone 15 Pro. Con USB 3, las velocidades de transferencia pisan el acelerador a fondo.4 Y con la conexión Wi Fi 6E, podrás descargar archivos hasta el doble de rápido.</li>
                            <li>FUNCIONALIDADES ESENCIALES DE SEGURIDAD— Con Detección de Choques, el iPhone puede identificar si sufres un accidente de auto grave y pedir ayuda cuando tú no puedes.</li>
                            <li>INNOVACIONES QUE MARCAN LA DIFERENCIA — El iPhone cuenta con tecnologías de privacidad que te ayudan a mantener el control de tus datos. Está fabricado con más materiales reciclados para reducir su impacto medioambiental. Y viene con funcionalidades integradas que lo hacen accesible para todo el mundo</li>
                        </ul>
                `
        break;

    case "15_Pro_Max":
        descripcion.innerHTML = `
                    <h2>Descripción del Producto</h2>
                        <ul>
                            <li>FORJADO EN TITANIO — El iPhone 15 Pro Max tiene un diseño resistente y ligero, con titanio de calidad aeroespacial y parte posterior de vidrio mate texturizado. Frente de Ceramic Shield, más duro que el vidrio más duro de cualquier smartphone. Y resistencia a las salpicaduras, al agua y al polvo.</li>
                            <li>PANTALLA AVANZADA — La pantalla Super Retina XDR de 6.7 pulgadas con ProMotion aumenta la frecuencia de actualización hasta 120 Hz cuando necesitas el máximo rendimiento gráfico. La Dynamic Island muestra alertas y Actividades en Vivo al instante. Y la pantalla siempre activa te permite tener información siempre a la vista sin mover un dedo.</li>
                            <li>REVOLUCIONARIO CHIP A17 PRO — Con el GPU de nivel pro, los juegos móviles son más inmersivos, con escenarios llenos de detalles y personajes más realistas. Y el chip A17 Pro es tan eficiente que la batería es capaz de seguirte el ritmo todo el día.</li>
                            <li>SISTEMA DE CÁMARAS PRO — Multiplica tus opciones de encuadre con 7 lentes pro. Toma fotos en superalta resolución con más colores y detalles que nunca con la cámara gran angular de 48 MP. Y captura primeros planos supernítidos desde más lejos con la cámara teleobjetivo de 5x del iPhone 15 Pro Max.</li>
                            <li>BOTÓN DE ACCIÓN PERSONALIZABLE — El Botón de Acción te lleva volando a tu funcionalidad favorita, como el modo Silencio, Cámara, Nota de Voz o Atajos. Configúralo con la que quieras usar y mantenlo presionado para que haga su magia.</li>
                            <li>CONEXIONES MUY PRO — El nuevo conector USB-C te permite cargar tu Mac o iPad con el mismo cable que usas para cargar el iPhone 15 Pro. Con USB 3, las velocidades de transferencia pisan el acelerador a fondo.4 Y con la conexión Wi Fi 6E, podrás descargar archivos hasta el doble de rápido.</li>
                            <li>FUNCIONALIDADES ESENCIALES DE SEGURIDAD— Con Detección de Choques, el iPhone puede identificar si sufres un accidente de auto grave y pedir ayuda cuando tú no puedes.</li>
                            <li>INNOVACIONES QUE MARCAN LA DIFERENCIA — El iPhone cuenta con tecnologías de privacidad que te ayudan a mantener el control de tus datos. Está fabricado con más materiales reciclados para reducir su impacto medioambiental. Y viene con funcionalidades integradas que lo hacen accesible para todo el mundo</li>
                        </ul>
                `
        break;

    default:
        descripcion.innerHTML = `
            <h2>Descripción no Encontrada</h2>
        `

}

// Se despliegan todos los cambios
let contenedor = document.querySelector("#container")
contenedor.append(plantilla)

// Se obtiene la capacidad del equipo seleccionado (por defecto)
capacidad = get_capacity()

// Se obtiene el color del equipo seleccionado (por defecto)
color = get_color()

// Se muestra el precio del equipo seleccionado (por defecto)
muestra_precio(capacidad)
// Se muestra la imagen del equipo seleccionado (por defecto)
nombre_imagen = muestra_imagen(color)

// Se identifican todos los botones
let boton = document.querySelectorAll(".btn")

// Se le agrega la categoría de seleccionado al botón sobre el cual se hace click
// Se recorren todos los botones
boton.forEach((btn, num) => {

    // Se obtienen las clases del botón a evaluar
    let clases = boton[num].classList.value

    // Si el botón no es un botón primario (botón para ver detalles del producto)
    if (!clases.includes("btn-primary")) {

        //Se le pondrá un border al hacer click en él
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

            // Se muestra el precio del equipo seleccionado
            muestra_precio(capacidad)
            // Se muestra la imagen del equipo seleccionado
            nombre_imagen = muestra_imagen(color)

        })
    }
})

// Cuando se apriete el botón, agregar al carrito, se agrega el producto al carrito
let boton_agregar = document.querySelector(".btn-primary")
boton_agregar.addEventListener("click", () => {

    // Si el precio no se ha podido determinar es porque el Iphone no se ha terminado de configurar
    if (isNaN(precio)) {
        alert("Para poder agregar, primero debes terminar de configurar tu Iphone")
    } else {  // Si el Iphone ya está configurado, se puede agregar al carrito
        let id_producto = get_product_id(modelo, capacidad, color)
        agregar_carrito(id_producto, modelo, capacidad, color, precio, nombre_imagen)
        actualizar_icono_carrito()
        if (!body.classList.contains('showCart')) {

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Producto agregado al carrito",
                showConfirmButton: false,
                timer: 1500
            });

            //alert("Producto agregado al carrito")
        }

    }
})

function get_price(capacidad) { // Obtiene el precio del producto seleccionado
    let indice = capacidades.indexOf(capacidad)
    let precio = modelo_filtrado[0].precio[indice]
    return precio
}

// Asigna un ID al producto seleccionado
function get_product_id(modelo, capacidad, color) {
    let id = modelo + "_" + capacidad + "_" + color
    return id
}


function agregar_carrito(id_producto, modelo, capacidad, color, precio, nombre_imagen) {
    let cantidad = 1
    if (sistema.carrito.find((elm) => elm.id == id_producto)) { //Si el artículo ya exite en el carrito, se aumenta la cantidad en 1
        sistema.carrito.forEach((elm, num) => {
            if (sistema.carrito[num].id == id_producto) {
                sistema.carrito[num].cantidad++
            }
        })
    } else { // Si el producto no está aún en el carrito, se agrega como un nuevo artículo
        let articulo = new Articulo(id_producto, modelo, capacidad, color, precio, nombre_imagen, cantidad)
        sistema.carrito.push(articulo)  // se agrega el artículo al carrito
    }

    //Se agrega el carrito a la sección carrito en HTML
    addCartToHTML()
    let sistema_texto = JSON.stringify(sistema) // el sistema, incluyendo el carrito se convierte a texto para poderlo almacenar en el local storage
    //Se almacena el sistema/carrito en el local storage
    localStorage.setItem("saved_system", sistema_texto)
}

function muestra_precio(capacidad) {
    if (capacidad && color) { // El precio sólo se calcula si ya se terminó de configurar el Iphone
        precio = get_price(capacidad)
        let precio_texto = "$ " + precio + " MXN"
        document.querySelector(".precio").innerText = precio_texto
    }
}

function muestra_imagen(color) {
    let indice = colores.indexOf(color)
    let nombre_imagen = modelo_filtrado[0].imagen[indice]
    let imagen = document.querySelector(".img-fluid")
    imagen.src = `../assets/images/${nombre_imagen}.webp`
    return nombre_imagen
}