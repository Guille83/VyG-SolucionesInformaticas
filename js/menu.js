const ingresodato = document.querySelector('.ingresodato');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu)
// console.log(ingresodato)


ingresodato.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})




window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target !=menu && e.target !=ingresodato  ){



        menu.classList.toggle("spread")   
    }
})