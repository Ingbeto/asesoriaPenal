const btnInicio = document.getElementById('btn-inicio'),
    btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
    grid = document.getElementById('grid'),
    containerEnlacesNav = document.querySelector('#menu .container-enlaces-nav'),
    containerSubcategorias = document.querySelector('#menu .container-subcategorias'),
    esDispositivoMovil = () => window.innerWidth <= 800;

btnInicio.addEventListener('mouseover', () => {
    if(!esDispositivoMovil()){
        grid.classList.add('activo');
    }   
});
grid.addEventListener('mouseleave', ()=>{
 if(!esDispositivoMovil()){
        grid.classList.remove('activo');
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