const botonEncriptar = document.querySelector(".boton_encriptar");
const textEncriptar = document.querySelector(".encriptar");
const advertencia = document.querySelector(".texto-advertencia");
const solucion = document.querySelector(".codificar");
const contenedor = document.querySelector(".contenedor-resolucion");
const botonCopiar = document.querySelector(".boton-copiar");
const botonDesencriptar = document.querySelector(".boton_desencriptar");
const sonidoEncriptar = new Audio('./snd/cat-1.mp3');
const sonidoDesencriptar = new Audio('./snd/cat-2.mp3');
const sonidoCopiar = new Audio('./snd/cat-3.mp3');


botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let text = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    sonidoEncriptar.play();
   
    if (texto == ""){
        advertencia.style.background = "#4dba34";
        advertencia.style.color = "#FFFFFF";
        advertencia.style.fontWeight = "800";
        advertencia.textContent = "ᓚ₍ ^. .^₎ El cuadro de texto no debe estar vacío";

        setTimeout(() => {
            advertencia.removeAttribute("style");
        },2000);

    }

    else if(texto !== text) {
        advertencia.style.background = "#4dba34";
        advertencia.style.color = "#FFFFFF";
        advertencia.style.fontWeight = "800";
        advertencia.textContent = "=^..^= No debe tener tildes ni caracteres especiales/simbolos";

        setTimeout(() => {
            advertencia.removeAttribute("style");
        },2000);
    }

    else if(texto !== texto.toLowerCase()){
        advertencia.style.background = "#4dba34";
        advertencia.style.color = "#FFFFFF";
        advertencia.style.fontWeight = "800";
        advertencia.textContent = "El texto debe ser en minuscula •⩊•";

        setTimeout(() => {
            advertencia.removeAttribute("style");
        },2000);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        solucion.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenedor.remove();
    }

    
});

botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let text = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    sonidoDesencriptar.play();
   
    if (texto == ""){
        advertencia.style.background = "#4dba34";
        advertencia.style.color = "#FFFFFF";
        advertencia.style.fontWeight = "800";
        advertencia.textContent = "ᓚ₍ ^. .^₎ El cuadro de texto no debe estar vacío";

        setTimeout(() => {
            advertencia.removeAttribute("style");
        },2000);

    }

    else if(texto !== text) {
        advertencia.style.background = "#4dba34";
        advertencia.style.color = "#FFFFFF";
        advertencia.style.fontWeight = "800";
        advertencia.textContent = "=^..^= No debe tener tildes ni caracteres especiales/simbolos";

        setTimeout(() => {
            advertencia.removeAttribute("style");
        },2000);
    }

    else if(texto !== texto.toLowerCase()){
        advertencia.style.background = "#4dba34";
        advertencia.style.color = "#FFFFFF";
        advertencia.style.fontWeight = "800";
        advertencia.textContent = "El texto debe ser en minuscula •⩊•";

        setTimeout(() => {
            advertencia.removeAttribute("style");
        },2000);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        solucion.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenedor.remove();
    }

    
});

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = solucion;
    copiar.select();
    document.execCommand("copy");
    sonidoCopiar.play();
    
});


