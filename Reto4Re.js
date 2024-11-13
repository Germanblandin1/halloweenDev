function findTheKiller(whisper, suspects) {
    const formato = whisper.toLowerCase()
    const rege = new RegExp('^' + formato.replace(/~/g, '.'));
    
    const sol = suspects.filter(suspect => rege.test(suspect.toLowerCase()));

    return sol.join(',');
}


const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];
console.log(findTheKiller(whisper,suspects))

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']
console.log(findTheKiller(whisper2,suspects2))

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']
console.log(findTheKiller(whisper3,suspects3))

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']
console.log(findTheKiller(whisper4,suspects4))



