exports.validarFormulario = function(datosFormulario, camposObligatorios, camposOpcionales) {
    const errores = [];
  
    // Validar campos obligatorios
    for (const campo of camposObligatorios) {
      if (!datosFormulario[campo] || datosFormulario[campo].trim() === "") {
        errores.push(`El campo ${campo} es obligatorio`);
      }
    }
  
    // Validar campos opcionales
    for (const campo of camposOpcionales) {
      if (datosFormulario[campo] && datosFormulario[campo].trim() !== "") {
        // Realizar validaciones adicionales según el tipo de campo
        if (campo === "fechaNacimiento") {
          if (!esFechaValida(datosFormulario[campo])) {
            errores.push(`La fecha de nacimiento proporcionada no es válida`);
          }
        } else if (campo === "email") {
          if (!esEmailValido(datosFormulario[campo])) {
            errores.push(`El email proporcionado no es válido`);
          }
        }
      }
    }
    return errores;
  }
  
  // Función para validar una fecha en formato "AAAA-MM-DD"
  function esFechaValida(fecha) {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!pattern.test(fecha)) {
      return false;
    }
    const date = new Date(fecha);
    const isValid = !isNaN(date.getTime());
    return isValid;
  }
  
  function esEmailValido(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email.trim());
  }
  