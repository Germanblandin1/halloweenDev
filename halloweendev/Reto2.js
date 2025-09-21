function battleHorde(zombies, humans) {
    let ah=0;
    let az=0;
    let ch=0;
    let cz=0;


    let n= zombies.length

    for(let i=0;i<n;i++){
        cz = zombies[i]-'0'
        ch = humans[i]-'0'
        cz+=az
        ch+=ah

        if(cz<ch){
            ah=ch-cz
            az=0
        }else if(ch<cz){
            az=cz-ch
            ah=0
        }else{
            ah=0
            az=0
        }
    }
    if (az==ah) return 'x'
    if (az>ah) return az+'z'
    return ah+'h'
}



const zombies = '242';
const humans = '334';
console.log(battleHorde(zombies,humans))