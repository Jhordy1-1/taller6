                   /* Fundamentos - API  */

//Ejemplo 1
/*
const login = require('./module')

login()
*/


//Ejemplo 2

/*
const {login, LIKES} = require('./module')

login()
console.log(LIKES);
*/

//Ejemplo 3

// const {login, LIKES} = require('./module')

// login()
// console.log(LIKES);

                     /* Local storage */

//Guardar un Objeto en el LocalStorage

const datos = {
    nombre: "Dennis",
    edad: 20,
    email: "dennis.catana@epn.edu.ec"
};
// Convertir el objeto a formato JSON y guardarlo en el LocalStorage bajo la clave 'objetoGuardado'
  localStorage.setItem('objetoGuardado', JSON.stringify(datos));

// Obtener un Objeto en el LocalStorage
const datos2 = JSON.parse(localStorage.getItem('objetoGuardado'));
// Ahora datos2 contendrá el objeto guardado previamente en el LocalStorage
console.log(datos2);

// Eliminar un Objeto en el LocalStorage
localStorage.removeItem('objetoGuardado');