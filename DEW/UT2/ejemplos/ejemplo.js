const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

function menu(){
  rl.question('Dime tu nombre: ', (name)=>(console.log('Bienvenido ${name} !');)
  menu();
);
}