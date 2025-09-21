function findSafestPath(dream) {
    let n = dream.length
    let m = dream[0].length
    //console.log(n,m)

    let DP = new Array(m).fill(0);;

    for(let i = 0 ;i<n;i++){
        for(let j=0;j<m;j++){
            if (j==0){
                DP[j]= dream[i][j]+DP[0]
            }else if (i==0 && j>0){
                DP[j]= dream[i][j]+DP[j-1]
            }else{
                DP[j] = dream[i][j]+Math.min(DP[j],DP[j-1])
            }
        }
    }


    // Code here
    return DP[m-1]
} 


const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]

console.log(findSafestPath(dream))