//Cree una función llamada contarOcurrencias que:
//Reciba un array de elementos (strings, números, etc.).
//Retorne un objeto donde las claves sean los elementos del array y los valores sean la
//cantidad de veces que aparecen.

function contarOcurrencias(elementos) {
    const contador = {};
  
    for (const elemento of elementos) {
      if (contador[elemento]) {
        contador[elemento]++;
      } else {
        contador[elemento] = 1;
      }
    }
  
    return contador;
  }
 
  const elementos = ["apple", "pen", "pineapple", "pen", "pen", "pineapple", "apple", "pen"];
  
  const conteoOcurrencias = contarOcurrencias(elementos);
  
  console.log(conteoOcurrencias); 
  