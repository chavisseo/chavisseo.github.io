/*function chiMensaje(){
    alert("Apoco chi");
}

function noMensaje(){
    alert("como q ño");
}

document.getElementById("btnChi").addEventListener("click", chiMensaje);*/

let segurisiTexto = "Seguri";
let siTexto = "si";
let maTexto = "ma?";
const modo = getParametro("modo");
const texto = document.getElementById("texto1");
const btnChi = document.getElementById("btnChi");
const btnNo = document.getElementById("btnNo");
const img = document.getElementById("imagen");
let imagenTexto = "";
let contador = 1;

function getParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}


function cambio(){
    if(modo == "pagina2" || modo == "pagina3"){
        window.location.href = "index.html";
    }else{
        window.location.href = "index.html?modo=pagina2";
    }
}

function acepto(){
    window.location.href = "index.html?modo=pagina3";
}

function segura(){
    if(contador == 6){
        contador = 1;
        siTexto = "";
    } 

    siTexto = siTexto + "si";
    let textoFinal = segurisiTexto + siTexto + maTexto; 
    texto.innerText = textoFinal;

    img.setAttribute("src", "img"+contador+".jpg");
    contador++;
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    // Posición inicial aleatoria
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px"; 

    // Tamaño aleatorio
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + "px";

    // Duración de la animación aleatoria
    const duration = Math.random() * 2 + 3;
    heart.style.animationDuration = duration + "s";

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

if(modo=="pagina2"){
    texto.innerText = "Segurisima?";
    img.style.display="block";
    btnChi.style.backgroundColor="#ff4040";
    btnNo.style.backgroundColor="#4CAF50";
    btnChi.addEventListener("click",segura);
    
}else if(modo=="pagina3"){
    texto.innerText = "Te amo muchisisisisimo"
    btnChi.style.display = "none";
    btnNo.innerText = "Volver";
    img.setAttribute("src", "feliz.jpg");
    img.style.display="block";
    setInterval(createHeart, 300);
}else{
    btnChi.addEventListener("click", acepto);
}
btnNo.addEventListener("click", cambio);


