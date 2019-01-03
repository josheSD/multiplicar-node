const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/mutiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then((archivo) => {
                console.log(`Archivo creado: ${archivo.green}`)
            })
            .catch((e) => {
                console.log(e)
            })
        break;
    default:
        console.log('comando no reconocido');
}
/*
console.log(argv);
 Otro objecto global PROCESS 
let argv2 = process.argv; //argv  muestra el camino de la carpeta
console.log(argv.limite);


let parametro = argv[2];
let base = parametro.split('=')[1]; //separar y agarra el 1 del array --base=5
console.log(base);

crearArchivo(base)
    .then((archivo) => {
        console.log(`Archivo creado: ${archivo}`)
    })
    .catch((e) => {
        console.log(e)
    })  
*/