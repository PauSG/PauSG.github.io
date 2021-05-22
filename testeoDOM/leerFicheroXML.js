function gestionarFicheroXML(xmlDoc){
	document.querySelector(".animacion").style.transform = "scale(1.5)";
	let capaVacia = document.querySelector("#ficheroXML")
	let alumnos = xmlDoc.querySelectorAll("alumno")
	let nombreAlumno = xmlDoc.querySelectorAll("nombre")
	let apellidoAlumno = xmlDoc.querySelectorAll("apellido")
	for(let i=0; i<alumnos.length; i++)
		capaVacia.innerHTML += 
			"<p class=\"row\"><div class=\"cell nombre\">" + nombreAlumno[i].textContent + "</div>" + " " + "<div class=\"cell apellido\">" + apellidoAlumno[i].textContent + "</div></p>"
	
}

let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("Alumnos.xml","xml");
}
