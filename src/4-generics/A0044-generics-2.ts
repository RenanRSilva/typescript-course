type MeuTipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros)

async function promisesAsync() {
  return 1;
}

function minhaPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000);
  });
}


promisesAsync().then((resultado) => console.log(resultado + 1));