
const formulario_general=document.getElementById("formGeneral")

formulario_general.addEventListener("submit",function(evitarRecarga){
  evitarRecarga.preventDefault();

  const nuevoProducto =new Productos(
    "General",
    document.getElementById("nombreProducto").value,
    document.getElementById("imagen").value,
    document.getElementById("marca").value,
    document.getElementById("precio").value,
    parseInt(document.getElementById("stock").value),
    parseInt(document.getElementById("cuotas").value),
    document.getElementById("descripcion").value,
    {
      fechaInicio: document.getElementById("fechaInicio").value,
      fechaFinal: document.getElementById("fechaFinal").value,
      condiciones: document.getElementById("condiciones").value,
    }
  );


  try {
    nuevoProducto.actualizarStock = 10; 
  } catch (error) {
    console.log("Error:", error.message);  
  }

  const cotizacionDolar= 1000; 
  const precioDolares =Productos.conversion(nuevoProducto.precio, cotizacionDolar);
  console.log("Precio en dolares: "+precioDolares);


  try {
    nuevoProducto.aplicarDescuento =20 
  }catch(error){
  console.log("Error:", error.message); 
  }
  console.log("Nuevo precio con descuento:" + nuevoProducto.precio);

  nuevoProducto.descripcion= "Notebook ideal para tareas y multimedia";
  console.log("Nueva descripción:" + nuevoProducto.descripcion);


  console.log("Nueva garantía:");
  console.log("Fecha de inicio:",nuevoProducto.garantia.fechaInicio);
  console.log("Fecha final:", nuevoProducto.garantia.fechaFinal);
  console.log("Condiciones:",nuevoProducto.garantia.condiciones);

  listaProductos.push(nuevoProducto);
  console.log("Nuevo producto agregado");
  console.log(nuevoProducto);
  console.log("Lista actualizada de productos:");
  console.log(listaProductos);

  formulario_general.reset();
  
});

const botonEliminar0 = document.getElementById("eliminarUltimoProd");

botonEliminar0.addEventListener("click",function () {
  if(listaProductos.length> 0) {
    const eliminado =listaProductos.pop(); 
    console.log("Producto eliminado:",eliminado);
    console.log("Lista actualizada de productos:");
    console.log(listaProductos);
  } else{
    console.log("No hay productos para eliminar");
  }
});

/*------------------------------------------------------------*/

const formulario_notebook=document.getElementById("formNotebook")

formulario_notebook.addEventListener("submit",function(evitarRecarga){
  evitarRecarga.preventDefault();

  const nuevoNotebook = new Notebooks(
    formulario_notebook.querySelector("#nombreProducto").value,
    formulario_notebook.querySelector("#imagen").value,
    formulario_notebook.querySelector("#marca").value,
    parseFloat(formulario_notebook.querySelector("#precio").value),
    parseInt(formulario_notebook.querySelector("#stock").value),
    parseInt(formulario_notebook.querySelector("#cuotas").value),
    formulario_notebook.querySelector("#descripcion").value,
    {
      fechaInicio: formulario_notebook.querySelector("#fechaInicio").value,
      fechaFinal: formulario_notebook.querySelector("#fechaFinal").value,
      condiciones: formulario_notebook.querySelector("#condiciones").value,
    },
    formulario_notebook.querySelector("#procesador").value,
    formulario_notebook.querySelector("#graficos").value,
    formulario_notebook.querySelector("#almacenamiento").value,
    parseInt(formulario_notebook.querySelector("#memoria").value),
    parseInt(formulario_notebook.querySelector("#pantalla").value),
    formulario_notebook.querySelector("#sist_operativo").value,
    formulario_notebook.querySelector("#teclado").value,
    formulario_notebook.querySelector("#conectividad").value,
    formulario_notebook.querySelector("#puertos").value
  );

  try {
    nuevoNotebook.sist_operativo = "Android"; 
  }catch (error) {
    console.log("Error:", error.message);
  }

  listaNotebooks.push(nuevoNotebook);
  console.log("Nuevo producto agregado");
  console.log(nuevoNotebook);
  console.log("Lista actualizada de productos:");
  console.log(listaNotebooks);



  formulario_notebook.reset();
});

const botonEliminar1 =document.getElementById("eliminarUltimoNote");

botonEliminar1.addEventListener("click",function(){
  if (listaNotebooks.length >0){
    const eliminado = listaNotebooks.pop();
    console.log("Producto eliminado:",eliminado);
    console.log("Lista actualizada de productos:");
    console.log(listaNotebooks);
  } else {
    console.log("No hay productos para eliminar");
  }
});

/*------------------------------------------------------------*/

const formulario_monitor=document.getElementById("formMonitor")

formulario_monitor.addEventListener("submit",function(evitarRecarga){
  evitarRecarga.preventDefault();

  const nuevoMonitor = new Monitores(
    formulario_monitor.querySelector("#nombreProducto").value,
    formulario_monitor.querySelector("#imagen").value,
    formulario_monitor.querySelector("#marca").value,
    parseFloat(formulario_monitor.querySelector("#precio").value),
    parseInt(formulario_monitor.querySelector("#stock").value),
    parseInt(formulario_monitor.querySelector("#cuotas").value),
    formulario_monitor.querySelector("#descripcion").value,
    {
      fechaInicio: formulario_monitor.querySelector("#fechaInicio").value,
      fechaFinal: formulario_monitor.querySelector("#fechaFinal").value,
      condiciones: formulario_monitor.querySelector("#condiciones").value,
    },
    parseInt(formulario_monitor.querySelector("#pulgadas").value),
    formulario_monitor.querySelector("#tipo").value,
    formulario_monitor.querySelector("#resolucion").value,
    formulario_monitor.querySelector("#relacion_aspecto").value,
    parseInt(formulario_monitor.querySelector("#tiempo_respuesta").value),
    parseInt(formulario_monitor.querySelector("#fps").value),
    formulario_monitor.querySelector("#signal_input").value,
    parseInt(formulario_monitor.querySelector("#brillo").value)
  
  );

  listaMonitores.push(nuevoMonitor);
  console.log("Nuevo producto agregado");
  console.log(nuevoMonitor);
  console.log("Lista actualizada de productos:");
  console.log(listaMonitores);



  formulario_monitor.reset();
});


const botonEliminar2 =document.getElementById("eliminarUltimoMoni");

botonEliminar2.addEventListener("click",function(){
  if (listaMonitores.length >0){
    const eliminado = listaMonitores.pop();
    console.log("Producto eliminado:",eliminado);
    console.log("Lista actualizada de productos:");
    console.log(listaMonitores);
  } else {
    console.log("No hay productos para eliminar");
  }
});

document.getElementById("boton_General").addEventListener("click",function(){
  document.getElementById("formGeneral").classList.remove("oculto");
  document.getElementById("formNotebook").classList.add("oculto");
  document.getElementById("formMonitor").classList.add("oculto");
});

document.getElementById("boton_Notebook").addEventListener("click",function(){
  document.getElementById("formNotebook").classList.remove("oculto");
  document.getElementById("formGeneral").classList.add("oculto");
  document.getElementById("formMonitor").classList.add("oculto");
});

document.getElementById("boton_Monitor").addEventListener("click",function(){
  document.getElementById("formMonitor").classList.remove("oculto");
  document.getElementById("formGeneral").classList.add("oculto");
  document.getElementById("formNotebook").classList.add("oculto");
});

document.getElementById("formGeneral").classList.remove("oculto");

/*------------------------------------------------------------*/
 
const formulario_reparacion = document.getElementById("formReparacion");

formulario_reparacion.addEventListener("submit",function(evitarRecarga) {
  evitarRecarga.preventDefault();

  
  const nuevoServicioReparacion = new Reparacion(
    formulario_reparacion.querySelector("#producto_reparado").value,
    formulario_reparacion.querySelector("#imagen").value,
    parseFloat(formulario_reparacion.querySelector("#costo").value),
    parseInt(formulario_reparacion.querySelector("#duracion_estimada").value)+ " dias",
    formulario_reparacion.querySelector("#tecnico_asignado").value,
    formulario_reparacion.querySelector("#repuestos").value,
  );

  // Esto puse pq sino en la consola me mostraba incluso las clases del padre

  const servicioReparacionDetallado = {
    producto_reparado: nuevoServicioReparacion.producto_reparado,
    imagen: nuevoServicioReparacion.imagen,
    costo: nuevoServicioReparacion.costo,
    duracion_estimada: nuevoServicioReparacion.duracion_estimada,
    tecnico_asignado: nuevoServicioReparacion.tecnico_asignado,
    repuestos: nuevoServicioReparacion.repuestos,
  };


  servicio1.push(servicioReparacionDetallado);

  console.log("Nuevo producto agregado");
  console.log(servicioReparacionDetallado);
  console.log("Lista actualizada de productos:");
  console.log(servicio1);



  formulario_reparacion.reset();
});

const botonEliminar3 =document.getElementById("eliminarUltimoServ1");

botonEliminar3.addEventListener("click",function(){
  if (servicio1.length >0){
    const eliminado = servicio1.pop();
    console.log("Producto eliminado:",eliminado);
    console.log("Lista actualizada de productos:");
    console.log(servicio1);
  } else {
    console.log("No hay productos para eliminar");
  }
});

/*------------------------------------------------------------*/

const formulario_asesoramiento = document.getElementById("formAsesoramiento");

formulario_asesoramiento.addEventListener("submit",function(evitarRecarga) {
  evitarRecarga.preventDefault();

  const nuevoServicioAsesoramiento = new AsesoramientoTecnico(
    formulario_asesoramiento.querySelector("#tema").value,
    parseFloat(formulario_asesoramiento.querySelector("#costo").value),
    parseInt(formulario_asesoramiento.querySelector("#duracion_estimada").value), 
    formulario_asesoramiento.querySelector("#tecnico_asignado").value,
    formulario_asesoramiento.querySelector("#imagen").value
  );

  const servicioAsesoramientoDetallado={
    tema: nuevoServicioAsesoramiento.tema,
    costo:nuevoServicioAsesoramiento.costo,
    duracion_estimada:nuevoServicioAsesoramiento.duracion_estimada,
    tecnico_asignado:nuevoServicioAsesoramiento.tecnico_asignado,
    imagen:nuevoServicioAsesoramiento.imagen,
  }

  try{
    nuevoServicioAsesoramiento.agregarDuracion=2;
  }catch(error) {
    console.log("Error al agregar duración:", error.message);
  }

  console.log("Duración final:",nuevoServicioAsesoramiento.duracion_estimada+ " días");

  servicio2.push(servicioAsesoramientoDetallado);
  console.log("Nuevo producto agregado");
  console.log(servicioAsesoramientoDetallado);
  console.log("Lista actualizada de productos:");
  console.log(servicio2);

  formulario_asesoramiento.reset();
});

const botonEliminar4 =document.getElementById("eliminarUltimoServ2");

botonEliminar4.addEventListener("click",function(){
  if (servicio2.length >0){
    const eliminado = servicio2.pop();
    console.log("Producto eliminado:",eliminado);
    console.log("Lista actualizada de productos:");
    console.log(servicio2);
  } else {
    console.log("No hay productos para eliminar");
  }
});

/*------------------------------------------------------------*/

const formulario_delivery = document.getElementById("formDelivery");

formulario_delivery.addEventListener("submit",function(evitarRecarga) {
  evitarRecarga.preventDefault();

  const nuevoServicioDelivery = new Delivery(
    formulario_delivery.querySelector("#producto_enviado").value,
    formulario_delivery.querySelector("#imagen").value,
    parseFloat(formulario_delivery.querySelector("#costo").value),
    parseInt(formulario_delivery.querySelector("#duracion_estimada").value) + " días", 
    formulario_delivery.querySelector("#tecnico_asignado").value,
    formulario_delivery.querySelector("#direccionEntrega").value
  );

  const servicioDeliveryDetallado={
    producto_enviado:nuevoServicioDelivery.producto_enviado,
    imagen:nuevoServicioDelivery.imagen,
    costo:nuevoServicioDelivery.costo,
    duracion_estimada:nuevoServicioDelivery.duracion_estimada,
    tecnico_asignado:nuevoServicioDelivery.tecnico_asignado,
    direccionEntrega:nuevoServicioDelivery.direccionEntrega,
  }

  servicio3.push(servicioDeliveryDetallado);
  console.log("Nuevo producto agregado");
  console.log(servicioDeliveryDetallado);
  console.log("Lista actualizada de productos:");
  console.log(servicio3);



  formulario_delivery.reset();
});

const botonEliminar5 =document.getElementById("eliminarUltimoServ3");

botonEliminar5.addEventListener("click",function(){
  if (servicio3.length >0){
    const eliminado = servicio3.pop();
    console.log("Producto eliminado:",eliminado);
    console.log("Lista actualizada de productos:");
    console.log(servicio3);
  } else {
    console.log("No hay productos para eliminar");
  }
});

document.getElementById("boton_Reparacion").addEventListener("click",function(){
  document.getElementById("formReparacion").classList.remove("oculto");
  document.getElementById("formAsesoramiento").classList.add("oculto");
  document.getElementById("formDelivery").classList.add("oculto");
});

document.getElementById("boton_Asesoramiento").addEventListener("click",function(){
  document.getElementById("formAsesoramiento").classList.remove("oculto");
  document.getElementById("formReparacion").classList.add("oculto");
  document.getElementById("formDelivery").classList.add("oculto");
});

document.getElementById("boton_Delivery").addEventListener("click",function(){
  document.getElementById("formDelivery").classList.remove("oculto");
  document.getElementById("formReparacion").classList.add("oculto");
  document.getElementById("formAsesoramiento").classList.add("oculto");
});

document.getElementById("formReparacion").classList.remove("oculto");