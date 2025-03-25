const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let personas = [];

function agregarPersona() {
  rl.question('Ingrese el nombre de la persona: ', (nombre) => {
    rl.question('Ingrese el apellido de la persona: ', (apellido) => {
      rl.question('Ingrese el DNI de la persona: ', (dni) => {
        let telefonos = [];

        function preguntarTelefono() {
          rl.question('Ingrese el teléfono de la persona (o presione Enter para finalizar): ', (telefono) => {
            if (telefono === '') {
              if (telefonos.length === 0) {
                console.log('Debe ingresar al menos un número de teléfono.');
                preguntarTelefono();
              } else {
                personas.push([nombre, apellido, dni, telefonos]);
                rl.question('¿Desea agregar otra persona? (s/n): ', (respuesta) => {
                  if (respuesta.toLowerCase() === 's') {
                    agregarPersona();
                  } else {
                    mostrarPersonas();
                    rl.close();
                  }
                });
              }
            } else {
              telefonos.push(telefono);
              preguntarTelefono();
            }
          });
        }

        preguntarTelefono();
      });
    });
  });
}

function mostrarPersonas() {
  console.log('\nPersonas registradas:');
  personas.forEach((persona, idx) => {
    console.log(`Persona ${idx + 1}:`);
    console.log(`Nombre: ${persona[0]}`);
    console.log(`Apellido: ${persona[1]}`);
    console.log(`DNI: ${persona[2]}`);
    console.log('Teléfonos:');
    persona[3].forEach(telefono => {
      console.log(`  - ${telefono}`);
    });
    console.log('---');
  });
}

agregarPersona();
