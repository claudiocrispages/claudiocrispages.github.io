let formulario = document.getElementById('formulario');
let input = document.querySelectorAll('#formulario input')


let expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	mensaje: /^.{10,200}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ 
}

let campos = {
	usuario: false,
	nombre: false,
	correo: false,
	telefono: false	
}

let validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			if(expresiones.usuario.test(e.target.value)){
				document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__usuario i').classList.add('fa-circle-check');
				document.querySelector('#grupo__usuario i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');

				campos['usuario'] = true;
				
			} else {
				document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__usuario i').classList.add('fa-times-circle');
				document.querySelector('#grupo__usuario i').classList.remove('fa-circle-check');
				document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');

				campos['usuario'] = false;
			}
		break;
		case "nombre":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
				document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');

				campos['nombre'] = true;
				
			} else {
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('fa-times-circle');
				document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');

				campos['nombre'] = false;
			}
		
		break;
		case "correo":
			if(expresiones.correo.test(e.target.value)){
				document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__correo i').classList.add('fa-check-circle');
				document.querySelector('#grupo__correo i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error-activo');

				campos['correo'] = true;
				
			} else {
				document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__correo').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__correo i').classList.add('fa-times-circle');
				document.querySelector('#grupo__correo i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');

				campos['correo'] = false;
			}
		
		
		break;
		case "telefono":
			if(expresiones.telefono.test(e.target.value)){
				document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__telefono').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__telefono i').classList.add('fa-check-circle');
				document.querySelector('#grupo__telefono i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__telefono .formulario__input-error').classList.remove('formulario__input-error-activo');

				campos['telefono'] = true;
				
			} else {
				document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__telefono').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__telefono i').classList.add('fa-times-circle');
				document.querySelector('#grupo__telefono i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__telefono .formulario__input-error').classList.add('formulario__input-error-activo');

				campos['telefono'] = false;
			}

		break;
	}
}

input.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
})


formulario.addEventListener('submit', (e) => {
	

let terminos = document.getElementById('terminos')


if (campos.usuario && campos.nombre && campos.correo && campos.telefono && terminos.checked) {

	document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
	document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-action');
	e.preventDefault();

	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-action');
		e.preventDefault();
	}

});