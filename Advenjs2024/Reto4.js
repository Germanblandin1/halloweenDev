function createXmasTree(height, ornament) {
    const n = height*2-1
    const result = []

    for (let i = 1; i <= n; i += 2) {
        result.push('_'.repeat((n-i)/2)+ornament.repeat(i)+'_'.repeat((n-i)/2)+'\n')
    }
    result.push('_'.repeat((n-1)/2)+'#'+'_'.repeat((n-1)/2)+'\n')
    result.push('_'.repeat((n-1)/2)+'#'+'_'.repeat((n-1)/2))
    
    
    return result.join('');
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
console.log(createXmasTree(1, '@'))