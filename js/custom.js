function cargarFragmento(idElemento, archivo) {
    fetch(archivo)
        .then(respuesta => respuesta.text())
        .then(contenido => {

            // Si se proporciona un callback, ejecutarlo con el contenido cargado
            const contenedor = document.getElementById(idElemento);
            contenedor.innerHTML = contenido;
            // Ejecutar los scripts dentro del fragmento cargado
            const scripts = contenedor.querySelectorAll("script");
            scripts.forEach(oldScript => {
                const newScript = document.createElement("script");
                if (oldScript.src) {
                    newScript.src = oldScript.src;
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                document.body.appendChild(newScript);
            });
        })
        .catch(error => console.error(`Error cargando ${archivo}:`, error));
}