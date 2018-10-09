let body = document.querySelector('body');
let seguidor = document.querySelector("#seguidor");

function acompanhar(event){
    seguidor.style.top = `${event.pageY}px`;
    seguidor.style.left = `${event.pageX}px`;
}

body.onmousemove = acompanhar;