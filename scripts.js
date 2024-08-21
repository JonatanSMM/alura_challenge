const texto = document.getElementById('recibir-datos');
const mostrarTexto = document.getElementById('mostrar-datos');

const encriptaBtn = document.getElementById('encriptar');
const desencriptaBtn = document.getElementById('desencriptar');
const contenidoParaMostrar = document.getElementById('contenidoDesencriptado');
const mostrarVista = document.getElementById('mostrar-vista');

const copiarBtn = document.getElementById('copiar-btn');

function encriptarEstandar(str) {
    return str.split('').map(char => {
        switch (char) {
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'a':
                return 'ai';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return char;
        }
    }).join('');
}

function desencriptarEstandar(str) {
    return str
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function setupCopyListener() {
    copiarBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(mostrarTexto.value);
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    });
}

texto.addEventListener('input', function() {
    this.value = this.value.toLowerCase();
});

encriptaBtn.addEventListener('click', () => {
    const recibirTexto = texto.value;
    const encriptandoTexto = encriptarEstandar(recibirTexto);
    mostrarTexto.value=encriptandoTexto;
    if (contenidoParaMostrar.parentNode) {
        contenidoParaMostrar.parentNode.removeChild(contenidoParaMostrar);
    }
   
    contenidoParaMostrar.classList.add('hidden');
    mostrarVista.style.display = 'block';
     setupCopyListener();
    
});

desencriptaBtn.addEventListener('click', () => {
    const recibirTexto = texto.value;
    const desencriptandoTexto = desencriptarEstandar(recibirTexto);
    mostrarTexto.value = desencriptandoTexto;
    if (contenidoParaMostrar.parentNode) {
        contenidoParaMostrar.parentNode.removeChild(contenidoParaMostrar);
    }
    contenidoParaMostrar.classList.add('hidden');
    mostrarVista.style.display = 'block';

});
