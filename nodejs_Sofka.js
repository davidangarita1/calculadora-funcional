/**
 * 
 * 1. Crear un función pura
 * 2. Dar un ejemplo de inmutabilidad
 * 3. Escribir una función que no comparta estados o que no tenga efectos secundarios
 * 4. Aplicar funciones basicas de filtro, mapeo y reduce
 */

// Respuesta 1
function sumar(a, b){
	return a + b;
  }
  
  console.log('Resultado de la suma: ', sumar(1,2));
  
  // Respuesta 2
  const x = 1;
  
  function adicionar(x) {
	return x + 1;
  }
  
  console.log('Variable original', x);
  console.log('Ejecutamos la funcion', adicionar(x));
  console.log('La variable no fue modificada', x);
  
  // Respuesta 3
  const lista = ['Hola', 'Mundo'];
  const string = ', Me llamo David';
  
  function nuevaLista(array, registro){
	return [...array, registro];
  }
  console.log('Imprimimos la lista original', lista);
  console.log('Imprimimos la lista nueva', nuevaLista(lista, string))
  console.log('La lista no fue alterada', lista);
  
  // Respuesta 4
  const numlist = [1,2,3,4,5];
  
  const resultFilter = numlist.filter(x => x < 3);
  console.log('Resultado Filter', resultFilter);
  
  const resultMap = numlist.map((x) => {return x * 2})
  console.log('Resultado Map', resultMap);
  
  const resultReducer = numlist.reduce((a,b) => a +b);
  console.log('Resultado Reducer', resultReducer);