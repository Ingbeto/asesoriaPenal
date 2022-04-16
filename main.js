const btnInicio = document.getElementById('btn-inicio'),
    btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
    containerEnlacesNav = document.querySelector('#menu .container-enlaces-nav'),
    containerSubcategorias = document.querySelector('#menu .container-subcategorias'),
    esDispositivoMovil = () => window.innerWidth <= 800;

document.querySelectorAll('.desplegables').forEach((item) => {
    const container = document.getElementById(`${item.dataset.container}`);
    if(container){
        item.addEventListener('mouseover', (e) => {
            document.querySelectorAll('.grid').forEach(grid => {
                grid.classList.remove('activo');
            });
            container.classList.add('activo');
            container.addEventListener('mouseleave', () => {
               container.classList.remove('activo');
            });
        })
    }
});


document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
    if(!esDispositivoMovil()){
      elemento.addEventListener('mouseenter',(e)=>{
        document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
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
        document.querySelector('body').style.overflow = 'visible';
    }else{
        containerEnlacesNav.classList.add('activo')
        document.querySelector('body').style.overflow = 'hidden';
    }
});

btnInicio.addEventListener('click',(e) => {
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});

document.querySelector('#grid .categorias .btn-regresar').addEventListener('click',(e)=>{
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
    elemento.addEventListener('click',(e)=>{
        e.preventDefault();
        if (esDispositivoMovil()){
                containerSubcategorias.classList.add('activo');
                document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
                    categoria.classList.remove('activo');
                    if(categoria.dataset.categoria== e.target){
                        categoria.classList.add('activo');
                    }
                })
        }
    });
});

document.querySelectorAll('#grid .container-subcategorias .btn-regresar').forEach((boton)=>{
    boton.addEventListener('click',(e)=>{
    e.preventDefault();
    containerSubcategorias.classList.remove('activo');
    console.log();
});

})