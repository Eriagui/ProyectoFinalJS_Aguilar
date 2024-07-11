class Iphone{
    constructor(modelo, capacidad, color, precio, imagen){
        this.modelo = modelo
        this.capacidad = capacidad
        this.color = color
        this.precio = precio
        this.imagen = imagen
    }
}

class Usuario{
    constructor (nombre, contrasena){
        this.nombre = nombre
        this.contrasena = contrasena
    }
}

class Sistema {
    constructor() {
        this.productos = [
            new Iphone("SE", [64, 128], ["rojo", "azul_medianoche", "blanco_estelar"], [10499, 11499], ["SE_rojo","SE_azul_medianoche", "SE_blanco_estelar"]),
            new Iphone("12", [64, 128],  ["negro", "morado"], [12499, 13499], ["12_negro", "12_morado"]),
            new Iphone("13", [128, 256], ["azul", "azul_medianoche", "rojo", "blanco_estelar", "rosa", "verde"], [14499, 16499], ["13_azul", "13_azul_medianoche", "13_rojo", "13_blanco_estelar", "13_rosa", "13_verde"]),
            new Iphone("14", [128, 256], ["amarillo", "azul", "rojo", "blanco_estelar", "morado", "medianoche"], [16999, 18999], ["14_amarillo", "14_azul", "14_rojo", "14_blanco_estelar", "14_morado", "14_medianoche"]),
            new Iphone("14_Plus", [128, 256], ["amarillo", "azul", "rojo", "blanco_estelar", "morado", "medianoche"], [19499, 21499], ["14_Plus_amarillo","14_Plus_azul", "14_Plus_rojo", "14_Plus_blanco_estelar", "14_Plus_morado", "14_Plus_medianoche"]),
            new Iphone("15", [128, 256, 512], ["amarillo", "azul", "negro", "rosa", "verde"], [19499, 21499, 25999], ["15_amarillo", "15_azul", "15_negro", "15_rosa", "15_verde"]),
            new Iphone("15_Plus", [128, 256, 512], ["amarillo", "azul", "negro", "rosa", "verde"], [21999, 23999, 28499], ["15_Plus_amarillo", "15_Plus_azul", "15_Plus_negro", "15_Plus_rosa", "15_Plus_verde"]),
            new Iphone("15_Pro", [128, 256, 512, 1000], ["azul", "blanco", "natural", "negro"], [23999, 25999, 30499, 34999], ["15_Pro_azul", "15_Pro_blanco", "15_Pro_natural", "15_Pro_negro"]),
            new Iphone("15_Pro_Max", [256, 512, 1000], ["azul", "blanco", "natural", "negro"], [28999, 33499, 37999], ["15_Pro_Max_azul", "15_Pro_Max_blanco", "15_Pro_Max_natural", "15_Pro_Max_negro"])
        ]

        this.usuarios = [
            new Usuario("PEPE", "ElPepe"),
            new Usuario("Maria", "Maria123")
        ]

        this.carrito = []
    }
}

class Articulo{
    constructor(id, modelo, capacidad, color, precio, imagen, cantidad){
        this.id = id
        this.modelo = modelo
        this.capacidad = capacidad
        this.color = color
        this.precio_unitario = precio
        this.imagen = imagen
        this.cantidad = cantidad
    }
}

let sistema_inicial = new Sistema
let sistema_guardado = JSON.parse(localStorage.getItem("saved_system"))
//Si en el local storage no hay un sistema guardado, entonces se toma el que se tiene en el archivo sistema
//Para eso nos ayudamos del operador Nullish
let sistema = sistema_guardado ?? sistema_inicial