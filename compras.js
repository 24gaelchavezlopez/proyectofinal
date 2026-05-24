let totalAcumulado=0;
let numeroOrden=1;
const textoTotal= document.getElementById('total-cuenta');
const botones= document.querySelectorAll('.boton-compra');

botones.forEach(boton=>{
    boton.addEventListener('click',()=>{
        const precioProducto=parseFloat(boton.getAttribute('data-precio'));
        totalAcumulado=totalAcumulado+precioProducto;
        textoTotal.textContent= totalAcumulado.toFixed(2);
    });
});

document.getElementById('boton-total').addEventListener('click', function() {
    if(totalAcumulado===0){
        alert('Debes seleccionar al menos un producto');
        return;
    }
    const respuesta=confirm('¿Estás seguro de que quieres comprar estos productos?');
    
    if(respuesta) {
        alert('Gracias por tu compra!');
        alert('Tu número de orden es: #'+numeroOrden);
        numeroOrden=numeroOrden+1;
        totalAcumulado=0; 
        textoTotal.textContent='0'; 
    }else {
        console.log('Compra cancelada');
    }
});