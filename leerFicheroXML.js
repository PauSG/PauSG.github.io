function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let alumnos = xmlDoc.querySelectorAll("alumno")
	for(let i=0; i<alumnos.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + alumnos[i].textContent + "</p>"
	
}

let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("leerFicheroXML.xml","xml");
}
