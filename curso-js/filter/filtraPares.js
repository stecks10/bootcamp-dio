function filtraPares(arr) {
  return arr.filter(callBack);
}

function callBack(item) {
  return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 72, 80, 2, 4];

console.log(filtraPares(meuArray));
