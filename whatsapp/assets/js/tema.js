var botonTema = document.querySelector(".tema");
botonTema.addEventListener("click", function () {
    const mder = document.querySelectorAll(".mensaje-derecha");
    //
    botonTema.classList.toggle("oscuro");
    document.querySelector("body").classList.toggle("bclaro");
	document.querySelector(".chat").classList.toggle("tclaro");
    document.querySelector(".chat-nombre").classList.toggle("cfondo");
    document.querySelector(".chat-nombre h1").classList.toggle("cnclaro");
    document.querySelector(".chat-nombre h2").classList.toggle("clclaro");
    document.querySelector(".escribe-mensaje").classList.toggle("cfondo");
    document.querySelector(".mensaje-texto").classList.toggle("mtclaro");
    document.querySelector(".mensajes-chat").classList.toggle("sclaro");
    for (let i = 0; i < mder.length; i++) {
        mder[i].classList.toggle("mdclaro");
        document.querySelectorAll(".hora")[i].classList.toggle("hclaro");
    }
});
