

window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000, 
    origin: 'bottom'
}
);

sr.reveal('.main-header', {
    duration: 5000, 
    origin: 'bottom',
    distance: "400px"
}
);

sr.reveal('.seccion', {
    duration: 5000, 
    origin: 'right',
    distance: "400px"
}
);

sr.reveal('.media img', {
    duration: 5000, 
    origin: 'left',
    distance: "400px"
}
);

sr.reveal('.fondo', {
    duration: 6000, 
    origin: 'left',
    distance: "400px",
    delay: 1000
}
);


sr.reveal('.producto', {
    duration: 7000, 
    origin: 'bottom',
    distance: "600px",
    delay: 1000

}
);


sr.reveal('.video', {
    duration: 5000, 
    origin: 'bottom',
    distance: "400px"
}
);

sr.reveal('.precios', {
    duration: 5000, 
    origin: 'left',
    distance: "600px"
}
);

sr.reveal('.formulario', {
    duration: 5000, 
    origin: 'bottom',
    distance: "600px"
}
);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



















// con esto seleccionamos todas las imagenes de la galeria.la que tenemos abjo
var imagenes = document.querySelectorAll(".galeria_img");

// el modal para ocultarlo o mostrarlo.este es ell que va a mostrer el contenido
var modal = document.querySelector("#modal");

// a este le va os a seleccionar o colocar la imagen
var img = document.querySelector("#modal__img");

// con este para ocultar o mstrar ls imagenes
 
for( var i = 0; i < imagenes.length; i++){
    // cuando se le de click a una img se aplica la funcion
    imagenes[i].addEventListener("click", function(e){
        // ls cual le agrega o le quita la clase modal__open
modal.classList.toggle("modal__open");
// target detecta a acual imagen se le hizo click y se le agrega a la var src
var src = e.target.src;
// a la var img en el src le agregamos la variable src que ya contine el src que a agregado de la imagen a la cual le hemos dado click
img.setAttribute("src", src);
    });
}

// este if es porque daba un error
if(document.querySelector("#modal__boton")){
    modal__boton.addEventListener("click", function(){
        modal.classList.toggle("modal__open");
    
    })}; 






    var error = document.getElementById("error");
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var enviar = document.getElementById("enviar");
var listo= document.getElementById("listo");

nombre.addEventListener("blur", validarInput);
email.addEventListener("blur", validarInput);
mensaje.addEventListener("blur", validarInput);


function resetformu(){
    document.getElementById("form").reset();

}


// validar formulario

function validarInput(){
    if(this.value== ""){
error.style.display = "block";
error.style.border = "1px solid red";
error.style.color = "red";
error.style.textAlign = "center";


error.innerHTML = 'debe llenar el campo';
this.style.border = '1px solid red';
    }
    else {
        error.style.display = 'none';
        this.style.border = '1px solid #000000';
    }
}

email.addEventListener("blur", validarEmail);
 function validarEmail(){
     if(this.value.indexOf("@") > -1){
        error.style.display = 'none';
        this.style.border = '1px solid #000000';
     } else{
        error.style.display = "block";
        error.style.border = "1px solid red";
        error.style.color = "red";
        error.innerHTML = 'debe contener @ ';
        error.style.textAlign = "center";
        this.style.border = '1px solid red';
        
     }
 }

 


 enviar.addEventListener("click", function(){
if(nombre.value == "" || email.value=="" || mensaje.value==""){
    listo.style.display = "block";
    listo.style.border = "1px solid red";
    listo.style.color = "red";
    listo.innerHTML = 'debes llenar todos los campos ';
    listo.style.textAlign = "center";
    this.style.border = '1px solid red';
}
else{

    listo.style.display = "block";
    listo.style.border = "1px solid green";
    listo.style.background = "green";
    listo.style.color = "white";
    listo.innerHTML = 'Gracias por haberte comunicado con nosotros... ';
    listo.style.textAlign = "center";
    this.style.border = '1px solid red';
 }
 resetformu();
 setTimeout(function(){
     document.getElementById("listo").remove();
 }, 3000);
});













