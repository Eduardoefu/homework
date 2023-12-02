function ponerHora() {
	var d, m, hora, turno, h;
	d = new Date();
	if (m !== d.getMinutes()) {
		m = d.getMinutes();
		h = d.getHours();
		turno = h >= 12 ? "p.m." : "a.m.";
		h = h % 12 || 12;
		hora = h + ':' + (m < 10 ? '0' + m : m) + ' ' + turno;
	}
	return hora;
}
function enviarMensaje() {
	var msj = document.querySelector(".mensaje-texto").value;
	if (msj.trim() === "") {
		return false;
	}
	var msjTexto = document.querySelector(".mensajes-chat");
	var msjNuevo = document.createElement("div");
	if(document.querySelector(".chat").classList.contains("tclaro")) {
		msjNuevo.className = "mensaje mensaje-derecha nuevo mdclaro";
		msjNuevo.innerHTML = '<span class="texto">'+ msj + '</span><span class="hora hclaro">'+ ponerHora() +'</span>';
	}
	else {
		msjNuevo.className = "mensaje mensaje-derecha nuevo";
		msjNuevo.innerHTML = '<span class="texto">'+ msj + '</span><span class="hora">'+ ponerHora() +'</span>';
	}
	msjTexto.appendChild(msjNuevo);
	ponerHora();
	msjTexto.scrollTop = msjTexto.scrollHeight;
	document.querySelector(".mensaje-texto").value = "";
}

var botonEnvio = document.querySelector(".mensaje-envio");
botonEnvio.addEventListener("click", function () {
	enviarMensaje();
});

window.addEventListener("keydown", function (e) {
	if (e.key === 'Enter') {
		enviarMensaje();
		e.preventDefault();
	}
});