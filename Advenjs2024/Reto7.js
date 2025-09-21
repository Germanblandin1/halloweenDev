function fixPackages(packages) {
    while (packages.includes('(')) {
        // Encuentra el último paréntesis abierto y el primer paréntesis cerrado después de él
        const openIndex = packages.lastIndexOf('(');
        const closeIndex = packages.indexOf(')', openIndex);

        // Extrae la parte dentro de los paréntesis
        const inside = packages.slice(openIndex + 1, closeIndex);
        // Reversa la parte interna
        const reversed = inside.split('').reverse().join('');

        // Reconstruye el string reemplazando los paréntesis procesados con el contenido revertido
        packages = packages.slice(0, openIndex) + reversed + packages.slice(closeIndex + 1);
    }

    return packages;
}

console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"