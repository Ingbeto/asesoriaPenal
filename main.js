const btnInicio = document.getElementById('btn-inicio'), btnCerrarMenu = document.getElementById('btn-menu-cerrar'), containerEnlacesNav = document.querySelector('.container-enlaces-nav'), containerSubcategorias = document.querySelector('.container-subcategorias'),
    esDispositivoMovil = () => window.innerWidth <= 800;

document.querySelectorAll('.desplegables').forEach((item) => {
    const container = document.getElementById(`${item.dataset.container}`);

    if(container === undefined || container === null) return;

    item.addEventListener('click', (e) => {
        if(container.classList.contains('activo') && !esDispositivoMovil()){
            item.querySelector('i').classList.add('activo');
            setTimeout(() => {
                item.querySelector('i').classList.remove('activo');
            }, 1000);
        }
        container.classList.toggle('activo');
        container.style.height = 'auto';
    });

    if(esDispositivoMovil()) return;

    item.addEventListener('mouseenter', (e) => {
          document.querySelectorAll('.grid').forEach(grid => {
                grid.classList.remove('activo');
          });
          container.classList.add('activo');
    });

    container.addEventListener('mouseleave', (e) => {
          e.target.classList.remove('activo');
            item.querySelector('i').classList.add('activo');
            setTimeout(() => {
                item.querySelector('i').classList.remove('activo');
            }, 1000);
    });

});

document.querySelectorAll('.grid .btn-cerrar').forEach((button) => {
   button.addEventListener('click', () => {
        document.querySelectorAll('.grid').forEach(grid => {
          grid.classList.remove('activo');
        });
        document.querySelectorAll('.container-enlaces-nav').forEach(container => {
            container.classList.remove('activo');
        });
   });
});

document.querySelectorAll('.categorias a').forEach((elemento)=>{
    if(!esDispositivoMovil()){
      elemento.addEventListener('mouseenter',(e)=>{
        document.querySelectorAll('.subcategoria').forEach((categoria)=>{
            categoria.classList.remove('activo');
            if(categoria.dataset.categoria === e.target.dataset.categoria){
                categoria.classList.add('activo');
            }
        });
    });
    }

});

document.querySelector('#btn-menu-barras').addEventListener('click',(e)=>{
    e.preventDefault();
    if(containerEnlacesNav.classList.contains('activo')){
        containerEnlacesNav.classList.remove('activo');
    }else{
        containerEnlacesNav.classList.add('activo')
    }
});

document.querySelectorAll('.grid .categorias .btn-regresar').forEach(button => {
  button.addEventListener('click', (event) => {
      event.preventDefault();
      button.parentElement.parentElement.parentElement.classList.remove('activo')
  });
});

document.querySelectorAll('.grid .categorias a').forEach((elemento)=>{
    elemento.addEventListener('click',(e)=>{
        e.preventDefault();
        if (esDispositivoMovil()){
                containerSubcategorias.classList.add('activo');
                document.querySelectorAll('.grid .subcategoria').forEach((categoria)=>{
                    categoria.classList.remove('activo');
                    if(categoria.dataset.categoria == e.target.dataset.categoria){
                        categoria.classList.add('activo');
                    }
                })
        }
    });
});

document.querySelectorAll('.grid .container-subcategorias .btn-regresar').forEach(button => {
  button.addEventListener('click', (event) => {
      event.preventDefault();
      button.parentElement.parentElement.parentElement.classList.remove('activo')
  });
});

