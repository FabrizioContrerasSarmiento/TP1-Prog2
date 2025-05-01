// Mostrar Servicios
function mostrarReparacion(servicio1) {
    const contenedor =document.getElementById("serviciosConteiner");
    const botones =document.getElementById("botones_servicios");

    contenedor.innerHTML = "";
    botones.style.display = "none";

    const contenedorServicios = document.createElement("div");
    contenedorServicios.classList.add("contenedor-servicios");

    for(let i=0;i<servicio1.length;i++) {
        let servicio =servicio1[i];
        let div =document.createElement("div");
        div.classList.add("servicio");

        div.innerHTML = `
            <p class="nombre_producto1"><strong class="strong">Producto Reparado:</strong> <span class="yellow"> ${servicio.producto_reparado} </span></p>
            <img src="${servicio.imagen}" class="imagenes_productos1 marginb2">
            <p><strong class="strong">Costo:</strong>  $<span class="verde">${servicio.costo} </span></p>
            <p><strong class="strong">Duración Estimada:</strong> <span class="verde">${servicio.duracion_estimada} </span> </p>
            <p><strong class="strong">Técnico Asignado:</strong> <span class="verde">${servicio.tecnico_asignado} </span> </p>
            <p><strong class="strong">Repuestos Usados:</strong> <span class="verde"> ${servicio.repuestos} </span></p>
        `;
        contenedorServicios.appendChild(div);
    }
    contenedor.appendChild(contenedorServicios);

    let botonVolver = document.createElement("button");
    botonVolver.classList.add("boton_servicios", "cursor");
    botonVolver.innerText = "Volver";
    botonVolver.style.marginTop = "2em";
    botonVolver.addEventListener("click", function(){
        contenedor.innerHTML = "";
        botones.style.display = "flex";
    });
    contenedor.appendChild(botonVolver);
}

function mostrarAsesoramiento(servicio2) {
    const contenedor =document.getElementById("serviciosConteiner");
    const botones =document.getElementById("botones_servicios");

    contenedor.innerHTML = "";
    botones.style.display = "none";

    const contenedorServicios = document.createElement("div");
    contenedorServicios.classList.add("contenedor-servicios");

    for (let i=0;i<servicio2.length;i++) {
        let servicio =servicio2[i];
        let div =document.createElement("div");
        div.classList.add("servicio");

        div.innerHTML = `
            <p><strong class="strong">Tema:</strong> <span class="yellow"> ${servicio.tema} </span> </p>
            <p><strong class="strong">Costo:</strong> <span class="verde">$${servicio.costo} </span></p>
            <p><strong class="strong">Duración Estimada:</strong> <span class="verde"> ${servicio.duracion_estimada} </span></p>
            <p><strong class="strong">Técnico Asignado:</strong> <span class="verde"> ${servicio.tecnico_asignado} </span></p>
            <h3 class="strong">Técnico:</h3>
            <img src="${servicio.imagen}" class="imagenes_productos1 marginb2">
        `;
        contenedorServicios.appendChild(div);
    }
    contenedor.appendChild(contenedorServicios);

    let botonVolver =document.createElement("button");
    botonVolver.classList.add("boton_servicios", "cursor");
    botonVolver.innerText = "Volver";
    botonVolver.style.marginTop = "2em";
    botonVolver.addEventListener("click",function(){
        contenedor.innerHTML = "";
        botones.style.display = "flex";
    });
    contenedor.appendChild(botonVolver);
}

function mostrarDelivery(servicio3) {
    const contenedor = document.getElementById("serviciosConteiner");
    const botones = document.getElementById("botones_servicios");

    contenedor.innerHTML = "";
    botones.style.display = "none";

    const contenedorServicios = document.createElement("div");
    contenedorServicios.classList.add("contenedor-servicios");

    for (let i =0;i<servicio3.length;i++) {
        let servicio =servicio3[i];
        let div =document.createElement("div");
        div.classList.add("servicio");

        div.innerHTML = `
            <p class="nombre_producto1"><strong class="strong">Producto Enviado:</strong> <span class="yellow"> ${servicio.producto_enviado} </span></p>
            <img src="${servicio.imagen}" class="imagenes_productos1 marginb2">
            <p><strong class="strong">Costo:</strong>  <span class="verde"> $${servicio.costo} </span></p>
            <p><strong class="strong">Duración Estimada:</strong> <span class="verde">  ${servicio.duracion_estimada} </span></p>
            <p><strong class="strong">Técnico Asignado:</strong> <span class="verde"> ${servicio.tecnico_asignado} </span> </p>
            <p><strong class="strong">Dirección de Entrega:</strong> <span class="verde">  ${servicio.direccionEntrega} </span> </p>
        `;
        contenedorServicios.appendChild(div);
    }
    contenedor.appendChild(contenedorServicios);

    let botonVolver =document.createElement("button");
    botonVolver.classList.add("boton_servicios", "cursor");
    botonVolver.innerText = "Volver";
    botonVolver.style.marginTop = "2em";
    botonVolver.addEventListener("click", function(){
        contenedor.innerHTML = "";
        botones.style.display = "flex";
    });
    contenedor.appendChild(botonVolver);
}

let botonReparacion = document.getElementById("boton_reparaciones");
let botonAsesoramiento = document.getElementById("boton_asesoramientos");
let botonDelivery = document.getElementById("boton_delivery");

botonReparacion.addEventListener("click",function(){
        mostrarReparacion(servicio1);
});

botonAsesoramiento.addEventListener("click",function(){
    mostrarAsesoramiento(servicio2);
});

botonDelivery.addEventListener("click",function() {
    mostrarDelivery(servicio3);
});
    
//Mostrar Productos
function mostrarProductos(listaNotebooks, listaMonitores,listaProductos) {
    document.getElementById("todosProd").innerHTML=""
    document.getElementById("notebooksContainer").innerHTML = "";
    document.getElementById("monitoresContainer").innerHTML = "";

    
    // Mostrar Notebooks
    for (let i =0;i<listaNotebooks.length;i++) {
        const producto =listaNotebooks[i];
        const div = document.createElement("div");
        div.classList.add("producto","notebook");

        div.innerHTML = `
            <h3 class="nombre_producto1 font_13 strong"> <span class="yellow"> ${producto.nombreProducto} </span></h3>
            <img src="${producto.imagen}" class="imagenes_productos1 marginb2">
            <p class="marca_margin" ><strong class="strong " >Marca:</strong> <span class="verde"> ${producto.marca} </span></p>
            <p><strong class="strong" >Precio: </strong> <span class="verde">$ ${producto.precio} </span></p>
            <p><strong class="strong" >Stock: </strong> <span class="verde"> ${producto.stock} unidades </span></p>
            <p><strong class="strong" >Cuotas: </strong> <span class="verde"> ${producto.cuotas} cuotas sin interés </span></p>
            <p><strong class="strong" >Descripcion: </strong> <span class="verde"> ${producto.descripcion} </span> </p>
            <p><strong class="strong" >Garantia: </strong> <span class="verde">  Desde ${producto.garantia.fechaInicio} hasta ${producto.garantia.fechaFinal} </span></p>
            <p><strong class="strong" >Condiciones: </strong> <span class="verde"> ${producto.garantia.condiciones} </span> </p>
            <p><strong class="strong" >Procesador: </strong> <span class="verde"> ${producto.procesador} </span> </p>
            <p><strong class="strong" >Graficos: </strong> <span class="verde"> ${producto.graficos} </span> </p>
            <p><strong class="strong" >Almacenamiento: </strong> <span class="verde"> ${producto.almacenamiento} </span> </p>
            <p><strong class="strong" >Memoria: </strong> <span class="verde"> ${producto.memoria} </span> </p>
            <p><strong class="strong" >Pantalla: </strong> <span class="verde"> ${producto.pantalla} </span> </p>
            <p><strong class="strong" >Sistema Operativo: </strong> <span class="verde"> ${producto.sist_operativo} </span> </p>
            <p><strong class="strong" >Teclado: </strong> <span class="verde"> ${producto.teclado} </span> </p>
            <p><strong class="strong" >Conectividad: </strong> <span class="verde"> ${producto.conectividad} </span> </p>
            <p><strong class="strong" >Puuertos: </strong> <span class="verde"> ${producto.puertos} </span> </p>
        `;
        document.getElementById("notebooksContainer").appendChild(div);
    }

    // Mostrar Monitores
    for (let i =0;i<listaMonitores.length;i++) {
        const producto = listaMonitores[i];
        const div = document.createElement("div");
        div.classList.add("producto","monitor");

        div.innerHTML = `
            <h3 class="nombre_producto1 font_13 strong"> <span class="yellow"> ${producto.nombreProducto} </span></h3>
            <img src="${producto.imagen}" class="imagenes_productos1 marginb2">
            <p class="marca_margin" ><strong class="strong " >Marca:</strong> <span class="verde"> ${producto.marca} </span></p>
            <p><strong class="strong" >Precio: </strong> <span class="verde">$ ${producto.precio} </span></p>
            <p><strong class="strong" >Stock: </strong> <span class="verde"> ${producto.stock} unidades </span></p>
            <p><strong class="strong" >Cuotas: </strong> <span class="verde"> ${producto.cuotas} cuotas sin interés </span></p>
            <p><strong class="strong" >Descripcion: </strong> <span class="verde"> ${producto.descripcion} </span> </p>
            <p><strong class="strong" >Garantia: </strong> <span class="verde">  Desde ${producto.garantia.fechaInicio} hasta ${producto.garantia.fechaFinal} </span></p>
            <p><strong class="strong" >Condiciones: </strong> <span class="verde"> ${producto.garantia.condiciones} </span> </p>
            <p><strong class="strong" >Pulgadas: </strong> <span class="verde"> ${producto.pulgadas} </span> </p>
            <p><strong class="strong" >Tipo: </strong> <span class="verde"> ${producto.tipo} </span> </p>
            <p><strong class="strong" >Resolucion: </strong> <span class="verde"> ${producto.resolucion} </span></p>
            <p><strong class="strong" >Relacion de Aspecto: </strong> <span class="verde"> ${producto.relacion_aspecto} </span> </p>
            <p><strong class="strong" >Tiempo de Respuesta: </strong> <span class="verde"> ${producto.tiempo_respuesta} </span> </p>
            <p><strong class="strong" >FPS: </strong> <span class="verde"> ${producto.fps} </span> </p>
            <p><strong class="strong" >Entrada de Señal: </strong> <span class="verde"> ${producto.signal_input} </span> </p>
            <p><strong class="strong" >Brillo: </strong> <span class="verde"> ${producto.brillo} </span> </p>
        `;
        document.getElementById("monitoresContainer").appendChild(div);
    }

    // Mostrar  Productos Generales
    for(let i=0;i<listaProductos.length;i++) {
        const producto = listaProductos[i];
        const div =document.createElement("div");
        div.classList.add("producto","producto-general");

        div.innerHTML = `
            <p class="categoria_productos marginb2"><strong class="strong" >Categoria:</strong><span class="verde"> ${producto.categoria} </span> </p>
            <h3 class="nombre_producto1 font_13 strong"> <span class="yellow"> ${producto.nombreProducto} </span></h3>
            <img src="${producto.imagen}" class="imagenes_productos marginb2">
            <p class="marca_margin" ><strong class="strong " >Marca:</strong> <span class="verde"> ${producto.marca} </span></p>
            <p><strong class="strong" >Precio: </strong> <span class="verde">$ ${producto.precio} </span></p>
            <p><strong class="strong" >Stock: </strong> <span class="verde"> ${producto.stock} unidades </span></p>
            <p><strong class="strong" >Cuotas: </strong> <span class="verde"> ${producto.cuotas} cuotas sin interés </span></p>
            <p><strong class="strong" >Descripcion: </strong> <span class="verde"> ${producto.descripcion} </span> </p>
            <p><strong class="strong" >Garantia: </strong> <span class="verde">  Desde ${producto.garantia.fechaInicio} hasta ${producto.garantia.fechaFinal} </span></p>
            <p><strong class="strong" >Condiciones: </strong> <span class="verde"> ${producto.garantia.condiciones} </span> </p>
        `;
        document.getElementById("todosProd").appendChild(div);
    }
}

mostrarProductos(listaNotebooks,listaMonitores,listaProductos);


/*--------------------Mostrar / ocultar seccions-----------------*/

let botones=document.getElementsByClassName("botones_color");
let secciones=document.getElementsByClassName("seccion");

for (let i=0;i<botones.length;i++) {
    botones[i].addEventListener("click",function() {
        
        for (let j=0;j<secciones.length;j++) {
            secciones[j].style.display="none";
        }
        if (i < secciones.length) {
            secciones[i].style.display = "block";  
        } //Muestra la seccion correspondiente,  solo a la que tiene  el mismo N° de boton 
    });
}

/*-----------------------------------------------------*/

secciones[0].style.display ="block";
