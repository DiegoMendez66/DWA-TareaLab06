exports.calcularEdad = function(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
  
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
  
    // Verificar si el cumpleaños ya ha ocurrido este año
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNac = fechaNac.getMonth();
    const diaNac = fechaNac.getDate();
  
    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
      edad--;
    }
  
    return edad;
  }
