
function createMagicPotion(potions, target) {
    // usamos un diccionario map para almacenar los valores ya visitados
    const dictionary = new Map();

    let potionsSize=potions.length;
    let response = [-1,-1];
    for(let i=0;i<potionsSize;i++){
        //buscamos en el map el elemento resultado de restar target-potions[1]
        let potion = dictionary.get(target-potions[i])
        if (potion===undefined){
            dictionary.set(potions[i],i);
        }else{
            response[0]=potion;
            response[1]=i;
            return response
        }
    }

    return undefined
}
  


console.log("hola")
const potions = [1, 2, 3, 4]
const goal = 5
console.log(createMagicPotion(potions,goal))