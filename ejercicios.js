//Ejercicio 1
console.log("---Ejercicio 1---");

function ejercicio1(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} es un número par`);
  } else {
    console.log(`${numero} es un número impar`);
  }
}

ejercicio1(8);

//Ejercicio 2
console.log("---Ejercicio 2---");

const ejercicio2 = (num1, num2) => {
  if (num1 > num2) {
    console.log(`El primer numero (${num1}) es mayor al segundo (${num2})`);
  } else if (num1 < num2) {
    console.log(`El primer numero (${num1}) es menor al segundo (${num2})`);
  } else console.log(`Los dos numeros (${num1} y ${num2}) son iguales`);
};

ejercicio2(5, 8);

//Ejercicio3
console.log("---Ejercicio 3---");

function ejercicio3(numero) {
  if (numero % 5 === 0) {
    console.log(`${numero} es múltiplo de 5`);
  } else {
    console.log(`${numero} NO es múltiplo de 5`);
  }
}

ejercicio3(20);

//Ejercicio4
console.log("---Ejercicio 4---");

function ejercicio4(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

ejercicio4(6);

//Ejercicio5
console.log("---Ejercicio 5---");

function ejercicio5(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}

ejercicio5("Messi", 10);

//Ejercicio 6
console.log("---Ejercicio 6---");

const arr = [1, 2, 3, 4, 5, 6];

function ejercicio6(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

ejercicio6(arr);

//Ejercicio 7
console.log("---Ejercicio 7---");
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function ejercicio7(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] != 4) {
      console.log(arr2[i]);
    }
  }
}

ejercicio7(arr2);

///Ejercicio8
console.log("---Ejercicio 8---");

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numIngresado = 7;

function ejercicio8(array3) {
  for (let numArray3 of array3) {
    let resultadoParcial = numArray3 * numIngresado;
    console.log(`${numArray3} x ${numIngresado} es ${resultadoParcial}`);
  }
}

ejercicio8(array3);
