window.addEventListener('load', () => {
  const textoOriginal = document.getElementById('textoOriginal').innerHTML;
  // Añadir
  document.getElementById('aniadir').addEventListener('click', () => {
    let seccion = document.getElementById('seccion');
    let nuevoArticulo = document.createElement('article');
    let nuevoParrafo = document.createElement('p');
    let texto = document.createTextNode(textoOriginal);
    nuevoParrafo.appendChild(texto);
    nuevoArticulo.appendChild(nuevoParrafo);
    seccion.appendChild(nuevoArticulo);
  });

  // Reemplazar
  document.getElementById('reemplazar').addEventListener('click', () => {
    let texto = document.createTextNode('Articulo Reemplazado');
    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.appendChild(texto);
    let articulo = document.getElementById('seccion').lastElementChild;
    let parrafoAntiguo = articulo.firstElementChild;
    articulo.replaceChild(nuevoParrafo, parrafoAntiguo);
  });

  //Borrar
  document.getElementById('borrar').addEventListener('click', () => {
    let seccion = document.getElementById('seccion');
    if (seccion.childElementCount > 1) {
      seccion.removeChild(seccion.lastElementChild);
    }
  });

  //CambiarColoresPares
  document.getElementById('cambiarColores').addEventListener('click', () => {
    [...document.querySelectorAll('article')].forEach((elemento, index) => {
      elemento.style.backgroundColor = index % 2 ? 'deepskyblue' : 'salmon';
    });
  });

  //EliminarReemplazados
  document
    .getElementById('eliminarReemplazados')
    .addEventListener('click', () => {
      [...document.querySelectorAll('article')].forEach((elemento) => {
        if (elemento.lastElementChild.innerHTML !== textoOriginal) {
          elemento.remove();
        }
      });
    });
});
