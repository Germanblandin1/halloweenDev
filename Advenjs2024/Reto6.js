function inBox(box) {
    // Recorrer cada fila (excepto los bordes)
    for (let i = 1; i < box.length - 1; i++) {
        const row = box[i];
        // Verificar si el '*' está en la fila pero no en los bordes de la fila
        const starIndex = row.indexOf('*');
        if (starIndex > 0 && starIndex < row.length - 1) {
            return true; // El '*' está dentro de la caja
        }
    }
    // Si no se encontró el '*' o está en los bordes
    return false;
}


  console.log(inBox([
    "###",
    "#*#",
    "###"
  ])) // ➞ true
  
  console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ])) // ➞ true
  
  console.log(inBox([
    "*####",
    "#   #",
    "#  #*",
    "####"
  ])) // ➞ false
  
  console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])) // ➞ false