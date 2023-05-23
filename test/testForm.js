const form = require('../source/validarForm')

const formulario = {
    nombre: "Diego Mendez",
    fechaNacimiento: "2001-03/26",
    email: "dmendez@email.com"
  };
  
  const camposObligatorios = ["nombre", "email"];
  const camposOpcionales = ["fechaNacimiento"];
  
  const errores = form.validarFormulario(formulario, camposObligatorios, camposOpcionales);
  
  if (errores.length === 0) {
    console.log("Los datos del formulario son válidos");
  } else {
    console.log("Se encontraron los siguientes errores:");
    for (const error of errores) {
      console.log(error);
    }
  }