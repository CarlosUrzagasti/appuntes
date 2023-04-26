const assert = require('chai').assert;
const should = require('chai').should();
const { calcularCociente } = require('../main');



describe('calcularCociente', function() {
  it('Debería devolver el cociente de dos números enteros positivos', function() {
    assert.equal(calcularCociente(6, 2), 3);
  });

  it('Debería devolver el cociente de dos números enteros negativos', function() {
    assert.equal(calcularCociente(-12, -3), 4);
  });

  it('Debería devolver el cociente de un número entero positivo y otro negativo', function() {
    assert.equal(calcularCociente(10, -5), -2);
  });

  it('Debería devolver un error al dividir entre cero', function() {
    (()=>calcularCociente(8, 0)).should.throw('División por cero') 
  });
  

  it('Debería devolver el cociente de dos números decimales positivos', function() {
    assert.equal(calcularCociente(3.5, 1.75), 2);
  });

  it('Debería devolver el cociente de dos números decimales negativos', function() {
    assert.equal(calcularCociente(-2.4, -1.2), 2);
  });

  it('Debería devolver el cociente de un número decimal positivo y otro negativo', function() {
    assert.equal(calcularCociente(5.6, -2.8), -2);
  });

  it('Debería devolver un error al dividir entre cero (números decimales)', function() {
    assert.throw(() => calcularCociente(4.3, 0), Error);
  });

  it('debería retornar 0.3333 al dividir 1 por 3', function() {
    const resultado = calcularCociente(1, 3);
    assert.approximately(resultado, 0.3333, 0.0001);
  });

 
});



/*describe('calcularCociente', () => {
  it('debería devolver 5 al dividir 10 entre 2', () => {
    const resultado = calcularCociente(10, 2);
    assert.equal(resultado, 5);
  });

  
  it('debería devolver Infinity al dividir 1,5 entre 0', () => {
    const resultado = calcularCociente(1.5, 0);
    assert.equal(resultado, Infinity);
  });

  it('debería devolver NaN al dividir "hola" entre 2', () => {
    const resultado = calcularCociente('hola', 2);
    assert(isNaN(resultado));
  });

  it('debería devolver 0 al dividir 0 entre 5', () => {
    const resultado = calcularCociente(0, 5);
    assert.equal(resultado, 0);
  });
  it('debería retornar 2.5 al dividir 5 por 2', function() {
    const resultado = calcularCociente(5, 2);
    assert.approximately(resultado, 2.5, 0.0001);
  });

  it('debería retornar 0.3333 al dividir 1 por 3', function() {
    const resultado = calcularCociente(1, 3);
    assert.approximately(resultado, 0.3333, 0.0001);
  });

  it('debería retornar NaN al dividir 0 por 0', function() {
    const resultado = calcularCociente(0, 0);
    assert.isNaN(resultado);
  });
});*/

