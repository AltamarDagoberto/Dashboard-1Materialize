document.querySelector('#btningresar').addEventListener('click',
iniciarSesion);

function iniciarSesion(){
    let sCorreo='';
    let sContraseña='';
    let bAcceso='false';

    sCorreo = document.querySelector('#txtCorreo').value;
    sContraseña = document.querySelector('#txContraseña').value;
    bAcceso=validarCredenciales(sCorreo,sContraseña);
    if (bAcceso==true) {
        ingresar();
    }

}

function ingresar(){
    let rol = sessionStorage.getItem('rolUsuarioActivo');
    switch (rol) {
        case '1':
            window.location.href='./home.html'
            break;
    
        default:
            break;
    }
}