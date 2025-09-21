/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    const n = indices.length;
    const result = []; // Almacenará cada línea de la carrera

    for (let i = 0; i < n; i++) {
        const position = indices[i];

        // Cantidad de espacios iniciales
        const spaces = ' '.repeat(n - i - 1);
        // Cantidad de nieve a la izquierda
        const leftTilde = '~'.repeat(position < 0 ? length + position : position);
        // Carácter central
        const middle = position === 0 ? '~' : 'r';
        const rightTilde = '~'.repeat(position < 0 ? -position - 1 : length - position - 1);
        // Número de carril
        const mark = ` /${i + 1}`;
        // Usamos un array para construir la línea
        const lineParts = [spaces, leftTilde, middle, rightTilde, mark];
        result.push(lineParts.join('')); // Unimos los elementos con join
    }

    return result.join('\n'); // Unimos todas las líneas con saltos de línea
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/