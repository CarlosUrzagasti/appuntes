function calcularCociente(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error('División por cero');
      }
    const cociente = dividendo / divisor;
    //redondeo con  4 cifras de presicion
    const cocienteRedondeado = Math.round(cociente * 10000) / 10000;
    return cocienteRedondeado;
  }
  
  module.exports = {calcularCociente};
  