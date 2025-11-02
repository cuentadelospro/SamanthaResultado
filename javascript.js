// Obtener elementos del DOM
const btnTema = document.getElementById('btnTema');
const btnEnviar = document.getElementById('btnEnviar');
const inputNombre = document.getElementById('nombre');
const inputCorreo = document.getElementById('correo');

// Función para cambiar tema
btnTema.addEventListener('click', function() {
    const body = document.body;
    
    if (body.style.background === 'rgb(255, 255, 255)' || body.style.background === '') {
        body.style.background = '#f0f0f0';
    } else {
        body.style.background = '#ffffff';
    }
});

// Función para guardar usuario
btnEnviar.addEventListener('click', function() {
    const nombre = inputNombre.value.trim();
    const correo = inputCorreo.value.trim();
    
    if (nombre === '' || correo === '') {
        alert('Por favor completa todos los campos');
    } else {
        // Mostrar mensaje de usuario guardado
        alert('Usuario guardado');
        
        // Borrar los campos
        inputNombre.value = '';
        inputCorreo.value = '';
    }
});

// Validación en tiempo real del email
inputCorreo.addEventListener('input', function() {
    const email = inputCorreo.value;
    if (email.includes('@') && email.includes('.')) {
        inputCorreo.style.borderColor = '#4a90e2';
    } else if (email !== '') {
        inputCorreo.style.borderColor = '#ff6b6b';
    } else {
        inputCorreo.style.borderColor = '#ccc';
    }
});