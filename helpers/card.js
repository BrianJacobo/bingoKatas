function generateCard() {
  // Crear arreglo con subarreglo para cada columna necesaria
  let arr = [
    [], // b (1-15)
    [], // i (16-30)
    [], // n (31-45)
    [], // g (46-60)
    [], // o (51-75)
  ];

  // Llenar cada subarreglo
  for (let i = 0; i < arr.length; i++) {
    // Asignar máximo y mínimo de acuerdo a posición
    let min = i * 15 + 1;
    let max = min + 15;
    // Este ciclo termina cuando el subarreglo tenga 5 elementos
    while (arr[i].length < 5) {
      let num = Math.floor(Math.random() * (max - min)) + min;
      // Evitar que se repitan números
      if (!arr[i].includes(num)) {
        arr[i].push(num);
      }
    }
    // Ordenar
    arr[i].sort((a, b) => a - b);
  }
  // el númeo del centro es free
  arr[2][2] = "X";
  return arr;
}

const generateCardArray = () => {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(generateCard());
  }
  return arr;
};

module.exports = {
  generateCard,
  generateCardArray,
};
