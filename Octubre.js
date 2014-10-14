// sacar el inidice de los que son mayusculas
var capitals = function (word) {
  var indices= [];	
  for(var i=0;i<word.length;i++)
      if(word[i] == word[i].toUpperCase())
         indices.push(i);
  return indices;
};

console.log(capitals('CodEWarS'));

// añadir a un array
function zipWith(array1, array2) {
  var i = 0;
  while (i < array2.length) {
    array1.push(array2[i]);
    i++;
  }
  return array1;
}
console.log(zipWith([1,2,3,7],[1]));

// darle la vuelta a un array
function reverse(array) {
  return array.reduce(function(a, b) {
    return [b].concat(a)
  }, []);
}

//ordenar un array alfabeticamente
function sortGiftCode(code){
  var aux = [];
  var result = '';
  for(i = 0; i < code.length; i++) {
    aux[i] = code.charAt(i);
  }
  aux.sort();
  for(i = 0; i < aux.length; i++) {
    result = result + aux[i];
  }
  return result;
}

// cambiar la llamada
name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
      var son=this;
        return function() {
            return son.name;
        };
    }
};
console.log(alpha.getNameFunc()());

//sacar n mayores valores de un array
function largest(n,xs){
  return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}