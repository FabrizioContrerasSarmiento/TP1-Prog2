
class Productos{
    #categoria;#nombreProducto;#imagen;#marca;#precio;#stock;#cuotas;#descripcion;#garantia;

    constructor(categoria,nombreProducto,imagen, marca, precio, stock,cuotas,descripcion,garantia) {
        this.#categoria = categoria;
        this.#nombreProducto=nombreProducto;
        this.#imagen=imagen;
        this.#marca = marca;
        this.#precio=precio;
        this.#stock = stock;
        this.#cuotas = cuotas;
        this.#descripcion=descripcion;
        this.#garantia={
            fechaInicio: garantia.fechaInicio,
            fechaFinal: garantia.fechaFinal, 
            condiciones: garantia.condiciones, 
        };
    }

    get categoria(){ return this.#categoria;}
    get nombreProducto(){ return this.#nombreProducto;}
    get imagen(){ return this.#imagen;}
    get marca(){ return this.#marca;}
    get precio(){ return this.#precio;}
    get stock(){ return this.#stock;}
    get cuotas(){ return this.#cuotas;}
    get descripcion(){ return this.#descripcion;}
    get garantia(){ return this.#garantia;}

    set aplicarDescuento(descuento) {
        if (typeof descuento !== "number") throw new TypeError("descuento tiene que ser un numero")
        this.#precio =this.#precio-(this.#precio*(descuento/100));
    }

    static conversion(precioPesos,cotizacionDolar){
        return (precioPesos / cotizacionDolar);  
    }

    set actualizarStock(cantidad) {
        if (typeof cantidad !== "number" || cantidad <= 0) {
            throw new TypeError("La cantidad tiene que ser mayor a 0");
        }
        this.#stock = this.#stock+cantidad;
    }

    set precio(nuevoPrecio) {
        this.#precio = nuevoPrecio;
    }

    set descripcion(nuevaDesc) {
        this.#descripcion = nuevaDesc;
    }

    set garantia(nuevaGarantia) {
        this.#garantia = nuevaGarantia;
    }

}

// Subclase Laptop que hereda de Productos
class Notebooks extends Productos {
    #procesador;#graficos;#almacenamiento;#memoria;#pantalla;#sist_operativo;#teclado;#conectividad;#puertos;

    constructor(nombreNotebook,imagen,marca, precio, stock, cuotas, descripcion, garantia,procesador, graficos, almacenamiento, memoria, pantalla, sist_operativo, teclado, conectividad, puertos) {
        super("Notebooks",nombreNotebook,imagen,marca,precio,stock,cuotas,descripcion,garantia);
        this.#procesador=procesador;
        this.#graficos=graficos;
        this.#almacenamiento=almacenamiento;
        this.#memoria=memoria;
        this.#pantalla=pantalla;
        this.#sist_operativo=sist_operativo;
        this.#teclado=teclado;
        this.#conectividad=conectividad;
        this.#puertos=puertos;
    }

    get procesador() { return this.#procesador; }
    get graficos() { return this.#graficos; }
    get almacenamiento() { return this.#almacenamiento; }
    get memoria() { return this.#memoria; }
    get pantalla() { return this.#pantalla; }
    get sist_operativo() { return this.#sist_operativo; }
    get teclado() { return this.#teclado; }
    get conectividad() { return this.#conectividad; }
    get puertos() { return this.#puertos; }

    set sist_operativo(nuevoSistema) {
        if (nuevoSistema !== "windows" && nuevoSistema !== "linux") {
            throw new TypeError("El sistema operativo tiene que ser windows o linux");
        }
    
        this.#sist_operativo = nuevoSistema;
    }

    set almacenamiento(nuevoAlmacenamiento){
        if(typeof almacenamiento !== "number" || nuevoAlmacenamiento<=0 ){
            throw new TypeError("Los gb tienen que ser positivos")
        }
        this.#almacenamiento=nuevoAlmacenamiento;
    }

    set memoria(nuevaMemoria){
        if(typeof memoria !== "number" || nuevaMemoria<=0 ){
            throw new TypeError("Los gb tienen que ser positivos")
        }
        this.#almacenamiento=nuevaMemoria
    }


}

//Subclase Monitores que hereda de Productos
class Monitores extends Productos {
    #pulgadas; #tipo; #resolucion; #relacion_aspecto;#tiempo_respuesta; #fps; #signal_input; #brillo;

    constructor(nombreMonitor,imagen,marca, precio, stock, cuotas, descripcion, garantia, pulgadas, tipo, resolucion, relacion_aspecto, tiempo_respuesta, fps, signal_input, brillo) {
        super("Monitores",nombreMonitor,imagen,marca,precio,stock,cuotas,descripcion,garantia);

        this.#pulgadas = pulgadas;
        this.#tipo = tipo;
        this.#resolucion = resolucion;
        this.#relacion_aspecto = relacion_aspecto;
        this.#tiempo_respuesta = tiempo_respuesta;
        this.#fps = fps;
        this.#signal_input =signal_input;
        this.#brillo = brillo;
    }

    get pulgadas() {return this.#pulgadas;}
    get tipo() {return this.#tipo;}
    get resolucion() {return this.#resolucion;}
    get relacion_aspecto() {return this.#relacion_aspecto;}
    get tiempo_respuesta() {return this.#tiempo_respuesta;}
    get fps() {return this.#fps;}
    get signal_input() {return this.#signal_input;}
    get brillo() {return this.#brillo;}

    set fps(nuevoFps) {
        if (typeof nuevoFps !== "number" || nuevoFps <= 0) {
          throw new TypeError("Los FPS tienen que ser un número positivo");
        }
        this.#fps = nuevoFps;
    }

    set pulgadas(nuevaPulgada) {
        if (typeof nuevaPulgada !== "number" || nuevaPulgada <= 0) {
          throw new TypeError("Las pulgadas tienen que ser un número positivo");
        }
        this.#pulgadas = nuevaPulgada;
    }


}

//Servicio Técnico
class ServicioTecnico{
    #imagen;#costo;#duracion_estimada;#tecnico_asignado;

    constructor(imagen, costo, duracion_estimada, tecnico_asignado) {
        this.#imagen= imagen;
        this.#costo = costo;
        this.#duracion_estimada = duracion_estimada;
        this.#tecnico_asignado = tecnico_asignado;
    }

    
    get imagen() {return this.#imagen;}
    get costo() {return this.#costo;}
    get duracion_estimada() {return this.#duracion_estimada;}
    get tecnico_asignado() {return this.#tecnico_asignado;}

    set costo(nuevoCosto) {
        if (typeof nuevoCosto !== "number" || nuevoCosto <= 0){
            throw new TypeError("el número tiene que ser mayor a 0");
        }
        this.#costo = nuevoCosto;
    }

    set tecnico_asignado(nuevoTecnico){
        this.#tecnico_asignado=nuevoTecnico;
    }

    set agregarCosto(monto) {
        if (typeof monto !== "number" || monto <= 0){
            throw new TypeError("el monto  tiene que ser un número mayor a 0");
        }
        this.#costo += monto;
    }

    set restarCosto(monto) {
        if (typeof monto !== "number" || monto <= 0){
            throw new TypeError("el monto tiene que ser un número mayor a 0");
        }
        this.#costo -= monto;
    }

    set agregarDuracion(duracion) {
        if (typeof duracion !== "number" || duracion <= 0){
            throw new TypeError("la duración tiene que ser un número mayor a 0");
        }
        this.#duracion_estimada += duracion;
    }

}

class Reparacion extends ServicioTecnico {
    #producto_reparado;#repuestos;

    constructor(producto_reparado,imagen,costo,duracion_estimada,tecnico_asignado,repuestos=[]) {
        super(imagen,costo,duracion_estimada,tecnico_asignado);
        this.#producto_reparado=producto_reparado;
        this.#repuestos=repuestos; 
    }
    
    get producto_reparado(){return this.#producto_reparado;}
    get repuestos() {return this.#repuestos;}
    
}

const servicio1 =[
    new Reparacion("Notebook Lenovo IdeaPad 1 Celeron","assets/images/Servicio Tecnico/Reparacion/1.png",18000,"3 días","Técnico Juan",["Pantalla", "Bateria"]),
    new Reparacion("Monitor Samsung 24\"", "assets/images/Servicio Tecnico/Reparacion/monitor-samsung-24.jpg", 22000, "2 días", "Técnico Ana", ["Puerto HDMI"])
]
   

class AsesoramientoTecnico extends ServicioTecnico {
    #tema;

    constructor(tema,costo, duracion_estimada, tecnico_asignado,imagen) {
        super(imagen, costo, duracion_estimada, tecnico_asignado);
        this.#tema = tema;
    }

    get tema() {return this.#tema;}

    set tema(nuevoTema){
        this.#tema=nuevoTema;
    }

}

const servicio2 =[
    new AsesoramientoTecnico("Elegir PC",5000,"1 hora","Martin Perez","assets/images/Servicio Tecnico/Asesoramiento Tecnico/1.jpg"),
    new AsesoramientoTecnico("Recuperar informacion",100000,"24 horas","Agente 096","assets/images/Servicio Tecnico/Asesoramiento Tecnico/hacker.jpg"),
]

class Delivery extends ServicioTecnico {
    #producto_enviado;#direccionEntrega;

    constructor(producto_enviado,imagen,costo, duracion_estimada, tecnico_asignado, direccionEntrega) {
        super(imagen, costo, duracion_estimada, tecnico_asignado);
        this.#producto_enviado=producto_enviado;
        this.#direccionEntrega = direccionEntrega;
    }

    get producto_enviado(){return this.#producto_enviado;}
    get direccionEntrega() {return this.#direccionEntrega;}

    set direccionEntrega(nuevaDireccion){
        this.#direccionEntrega=nuevaDireccion;
    }

}

const servicio3 =[
    new Delivery("Silla Gamer Vertagear SL3800 HygennX Rojo","assets/images/Servicio Tecnico/Delivery/1.jpg",3000, "24 hs", " Juan", "Av Acoyte 3000"),
    new Delivery("Disco Duro Externo Toshiba 2TB","assets/images/Servicio Tecnico/Delivery/disco duro externo.jpg",5000, "10 hs", " Mario", "Av Boedo 1500"),
]

let listaProductos=[
    new Productos("Placa de video","GeForce RTX 4070 Ti","assets/images/Productos/1.jpg","NVIDIA", 110000,5,12,"Placa gráfica de última generación con arquitectura Ada Lovelace, ideal para juegos en 4K.",
        {fechaInicio: "12/04/2025",fechaFinal: "12/04/2027",condiciones: "Garantía de 2 años"} ),
    new Productos("Teclado","K95 RGB Platinum XT","assets/images/Productos/2.jpg","Corsair",180000,20,6,"Teclado mecánico para gaming con retroiluminación RGB, macros y reposamuñecas.",
        {fechaInicio: "12/04/2025",fechaFinal: "12/04/2028",condiciones: "Garantía de 3 años."} ),
    new Productos("Mouse","MX Master 3S","assets/images/Productos/3.jpg","Logitech",120000,30,3,"Mouse ergonómico inalámbrico con sensor de alta precisión y botones programables.", 
        {fechaInicio: "12/04/2025",fechaFinal: "12/10/2025",condiciones: "Garantía de 6 meses"}),
    new Productos("Fuente de poder","RM850x 80+ Gold","assets/images/Productos/4.jpg","Corsair",150000,12,6,"Fuente modular de 850W con certificación 80 Plus Gold y ventilador silencioso.", 
        {fechaInicio: "12/04/2025",fechaFinal: "12/07/2025",condiciones: "Garantía de 3 meses"} ),
    new Productos("Disco sólido (SSD)","Samsung 980 PRO","assets/images/Productos/5.jpg","Samsung",170000,25,6,"SSD NVMe PCIe Gen4 de 1TB con velocidades de lectura de hasta 7000MB/s.", 
        {fechaInicio: "12/04/2025",fechaFinal: "12/05/2025",condiciones: "Garantía de 1 mes"} ),
]

let listaNotebooks=[
    new Notebooks("MacBook Pro M2","assets/images/Productos/Notebooks/1.jpg", "Apple", 950000, 10, 12,"Notebook con chip M2",
        {fechaInicio: "12/04/2025",fechaFinal: "12/04/2027",condiciones: "Garantía de 2 años por defectos de fabricación."},
        "Apple M2", "GPU integrada de 10 núcleos", "256GB SSD", "8GB", "13.3” Retina", "macOS Ventura", "Retroiluminado", "Wi-Fi 6, Bluetooth 5.3", "2x Thunderbolt 4"),
    new Notebooks("ThinkPad X1 Carbon Gen 11","assets/images/Productos/Notebooks/2.jpg", "Lenovo", 820000, 8, 12,"Ultrabook empresarial",
        {fechaInicio: "12/04/2025",fechaFinal: "12/04/2028",condiciones: "3 año de garantía con soporte técnico"},
        "Intel Core i7-1365U", "Intel Iris Xe", "512GB SSD", "16GB", "14” WUXGA", "Windows 11 Pro", "Resistente a derrames", "Wi-Fi 6E, Bluetooth 5.2", "2x Thunderbolt 4, HDMI, USB-A"),
    new Notebooks("Dell XPS 13","assets/images/Productos/Notebooks/3.jpg", "Dell", 780000, 15, 9,"Notebook premium ideal para el trabajo",
        {fechaInicio: "12/04/2025",fechaFinal: "12/10/2025",condiciones: "Garantia de 6 meses"},
        "Intel Core i5-1340P", "Intel Iris Xe", "512GB SSD", "8GB", "13.4” Full HD+", "Windows 11 Home", "Retroiluminado", "Wi-Fi 6, Bluetooth 5.1", "2x Thunderbolt 4"),
    new Notebooks("HP Spectre x360","assets/images/Productos/Notebooks/4.jpg", "HP", 850000, 12, 10,"Convertible 2-en-1",
        {fechaInicio: "12/04/2025",fechaFinal: "12/07/2025",condiciones: "Garantía limitada de 3 meses contra defectos."},
        "Intel Core i7-1355U", "Intel Iris Xe", "1TB SSD", "16GB", "13.5” OLED táctil", "Windows 11 Home", "Retroiluminado", "Wi-Fi 6E, Bluetooth 5.2", "2x USB-C, 1x USB-A, jack"),
    new Notebooks("Asus ROG Zephyrus G14","assets/images/Productos/Notebooks/5.jpg", "Asus", 890000, 5, 6,"Notebook gamer con Ryzen 9",
        {fechaInicio: "12/04/2025",fechaFinal: "12/05/2025",condiciones: "Cobertura por fallos de hardware y GPU durante 1 mes."},
        "AMD Ryzen 9 7940HS", "NVIDIA RTX 4060", "1TB SSD", "16GB", "14” QHD+ 165Hz", "Windows 11 Home", "RGB retroiluminado", "Wi-Fi 6E, Bluetooth 5.2", "HDMI, USB-C, USB-A, jack")
]

let listaMonitores=[
    new Monitores("Monitor UltraSharp U2723QE","assets/images/Productos/Monitores/1.jpg", "Dell", 450000, 7, 6,"Monitor IPS 4K con cobertura de color profesional.",
        {fechaInicio: "12/04/2025",fechaFinal: "12/04/2026",condiciones: "Cobertura de 1 año por píxeles muertos y fallos de fábrica."},
        "27\"", "IPS", "3840x2160 (4K)", "16:9", "5ms", "60Hz", "HDMI, DisplayPort, USB-C", "400 nits"),
    new Monitores("LG UltraGear 27GP850-B","assets/images/Productos/Monitores/2.jpg", "LG", 390000, 10, 6,"Monitor para gaming",
        {fechaInicio: "01/03/2025",fechaFinal: "01/0/2026",condiciones: "Garantía de 1 año por defectos de fábrica y rendimiento de píxeles."},
        "27\"", "Nano IPS", "2560x1440 (QHD)", "16:9", "1ms", "165Hz", "HDMI, DisplayPort", "400 nits"),
    new Monitores("ASUS ProArt Display PA278CV","assets/images/Productos/Monitores/3.jpg", "ASUS", 410000, 8, 12,"Monitor profesional de 27'' con calibración de color y USB-C para creadores de contenido.",
        {fechaInicio: "10/02/2025",fechaFinal: "10/02/2027",condiciones: "Garantía de 2 años con soporte para color y conectividad USB."},
        "27\"", "IPS", "2560x1440 (QHD)", "16:9", "5ms", "75Hz", "USB-C, HDMI, DisplayPort", "350 nits"),
    new Monitores("Samsung Odyssey G5","assets/images/Productos/Monitores/4.jpg", "Samsung", 370000, 12, 6,"Monitor curvo para gaming con resolución QHD, 144Hz y FreeSync Premium.",
        {fechaInicio: "15/01/2025",fechaFinal: "01/01/2026",condiciones: "Garantía de 1 año con cobertura especial por quemado de pantalla."},
        "32\"", "VA", "2560x1440 (QHD)", "16:9", "1ms", "144Hz", "HDMI, DisplayPort", "300 nits"),
    new Monitores("BenQ EX3501R","assets/images/Productos/Monitores/5.jpg", "BenQ", 490000, 5, 6,"Monitor ultrawide curvo de 35'' con HDR, ideal para productividad y entretenimiento.",
        {fechaInicio: "20/04/2025",fechaFinal: "20/04/2027",condiciones: "Garantía extendida de 2 años por calidad de imagen y funcionamiento continuo."},
        "35\"", "VA", "3440x1440 (UWQHD)", "21:9", "4ms", "100Hz", "HDMI, DisplayPort, USB-C", "300 nits")

]



