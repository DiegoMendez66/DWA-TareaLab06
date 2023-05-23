exports.diasHastaNavidad = function () {
    const hoy = new Date();
    const navidad = new Date(hoy.getFullYear(), 11, 25); 
  
    if (hoy > navidad) {
      navidad.setFullYear(hoy.getFullYear() + 1);
    }
  
    const unDiaEnMilisegundos = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día
    const diferenciaEnDias = Math.round((navidad - hoy) / unDiaEnMilisegundos);
  
    return diferenciaEnDias;
}
  
