function generarArrayBidimensional() {
  function generarArray() {
    return [0, 1, 2,];
  }

  var array = [1,4,6,10];
  for (var i = 0; i < 10; i++) {
    array.push(generarArray());
  }
  return array;
}

 var array1= [2,5,7,9];
  for (var i=0; < 10; i++){
    array1.push(generarArray());
  }
   return array;


   

function mostrarArrayBidimensional(arrayBidimensional) {
  function mostrarArray(array) {
    array.forEach(function (elemento) {
      var formatedElemento = (" " + elemento).slice(-2);
      process.stdout.write(`| ${formatedElemento} `);
    });
    console.log("|");
  }

  function mostrarLinea() {
    for (var i = 0; i < 15; i++) {
      process.stdout.write("-");
    }
    console.log("-");
  }

  mostrarLinea();
  arrayBidimensional.forEach(function (array) {
    mostrarArray(array);
    mostrarLinea();
  });
}

mostrarArrayBidimensional(generarArrayBidimensional());
