let btnResumen = document.querySelector("#btnResumen");
let cantidad = document.querySelector("#inputCant")
let categoria=document.querySelector("#selectCategoria");
btnResumen.addEventListener("click", function(e){
    e.preventDefault();   
    let precio = 200 * parseInt(cantidad.value) ;
    let precioConDescuento=0;
  
    if (categoria.value=="estudiante") {
        precioConDescuento = precio - (precio * 0.8);        
    }
    else if ( categoria.value == "trainee") {
        precioConDescuento = precio - ( precio * 0.5);
        
    }
    else{
        precioConDescuento = precio -( precio * 0.15);
    }
  
    document.querySelector("#total").textContent =   precioConDescuento;

    })