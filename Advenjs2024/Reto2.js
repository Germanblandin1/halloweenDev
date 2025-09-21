function createFrame(names) {
    const n = names.length;
    if (n === 0) return '*';
    
    // Inicializar la longitud máxima y el resultado
    let maxLen = 0;
    let result = [];
    
    // Calcular la longitud máxima
    for (const name of names) {
        if (name.length > maxLen) {
            maxLen = name.length;
        }
    }

    // Construir la primera línea del marco
    result.push("*".repeat(maxLen + 4));

    // Construir las líneas con los nombres
    for (const name of names) {
        result.push('* ' + name + ' '.repeat(maxLen - name.length) + ' *');
    }

    // Añadir la última línea del marco
    result.push("*".repeat(maxLen + 4));
    
    return result.join('\n');
}


console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

// Resultado esperado:
/*
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/
console.log(createFrame(['midu']))

// Resultado esperado:
/*
********
* midu *
********
*/
console.log(createFrame(['a', 'bb', 'ccc']))

// Resultado esperado:
/*
*******
* a   *
* bb  *
* ccc *
*******
*/
console.log(createFrame(['qlqlqlqlqlqllq','a', 'bb', 'ccc', 'dddd']))
console.log(createFrame([]))