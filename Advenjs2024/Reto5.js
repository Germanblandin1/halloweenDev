function organizeShoes(shoes) {
    const shoeCount = new Map();

    // Contar zapatos izquierdos y derechos en una sola pasada
    for (const shoe of shoes) {
        const { type, size } = shoe;
        if (!shoeCount.has(size)) {
            shoeCount.set(size, { I: 0, R: 0 });
        }
        shoeCount.get(size)[type]++;
    }

    // Crear el array de pares posibles
    const result = [];
    for (const [size, counts] of shoeCount.entries()) {
        const pairs = Math.min(counts.I, counts.R); // Número de pares posibles
        result.push(...Array(pairs).fill(size));
    }

    return result;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  console.log(organizeShoes(shoes))
  // [38, 42]
  
  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
  console.log(organizeShoes(shoes2))
  // [38, 38]
  
  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
  console.log(organizeShoes(shoes3))
  // []