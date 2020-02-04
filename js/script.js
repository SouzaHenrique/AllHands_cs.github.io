function typeWriter(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 185 * i);
  })
}

const titulo = document.querySelector('.animated_tittle');

typeWriter(titulo);