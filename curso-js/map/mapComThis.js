const maca = {
  value: 2,
};

const laranja = {
  value: 3,
};

function mapComThis(array, thisArg) {
  return array.map(function (item) {
    return item * this.value;
  }, thisArg);
}
const numeros = [1, 2];

console.log('this -> maça', mapComThis(numeros, maca));

console.log('this -> laranja', mapComThis(numeros, laranja));
