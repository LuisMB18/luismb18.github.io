const botoncokA = document.getElementById('botonaceptar');
const cookiesA = document.getElementById('cookies');
const fondocookA = document.getElementById('fondocook');

if (!localStorage.getItem('cookies-aceptadas')) {
    cookiesA.classList.add('activo');
    fondocookA.classList.add('activo');
}



botoncokA.addEventListener('click', () => {
    cookiesA.classList.remove('activo');
    fondocookA.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);
});

    
