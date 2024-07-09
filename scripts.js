const texto = document.getElementById('recibir-datos');
const mostrarTexto = document.getElementById('mostrar-datos');

const encriptaBtn = document.getElementById('encriptar');
const desencriptaBtn = document.getElementById('desencriptar');
const contenidoParaMostrar = document.getElementById('contenidoDesencriptado');
const mostrarVista = document.getElementById('mostrar-vista');

const copiarBtn = document.getElementById('copiar-btn');

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt();
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            return char;
        }
    }).join('');
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
encriptaBtn.addEventListener('click', () => {
    const recibirTexto = texto.value;
    const encriptandoTexto = caesarCipher(recibirTexto, 3);
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
    const desencriptandoTexto = caesarCipher(recibirTexto, -3);
    mostrarTexto.value = desencriptandoTexto;
    if (contenidoParaMostrar.parentNode) {
        contenidoParaMostrar.parentNode.removeChild(contenidoParaMostrar);
    }
    contenidoParaMostrar.classList.add('hidden');
    mostrarVista.style.display = 'block';

});
