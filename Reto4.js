



function findTheKiller(whisper, suspects) {
    let resp= ""
    let can=0;
    let num=suspects.length
    let n = whisper.length
    whisper = whisper.toLowerCase();
    for(let i=0;i<num;i++){

        let isValid = true
        let a = whisper
        
        let b = suspects[i].toLowerCase()
        let m=b.length

        if (m+1<n){
            isValid = false
            continue
        }

        for(let j=0;j<n;j++){
            if (j==n-1 && a[j]==='$'){
                if (j==m) {
                    isValid=true
                    break
                }
                isValid = false
                break
            }
            if (a[j]==='~' || a[j]===b[j]){
                continue
            }
            isValid=false
            break
        }

        if (isValid) {
            if (can===0){
                resp+=suspects[i]
            }else{
                resp+=','+suspects[i]
            }
            can++
        }
    }
    if (can>=1) return resp
    return ''
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

