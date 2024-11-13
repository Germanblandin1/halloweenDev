function escapePyramidHead(room) {
    // Code here
    const n = room.length
    const m = room[0].length

    const ini ={"i":-1,"j":-1}
    const dist = new Array(n)

    for(let i=0;i<n;i++){
        dist[i]= new Array(m)
        for(let j=0;j<m;j++){
            if (room[i][j]=='▲'){
                ini.i=i
                ini.j=j
            }
            dist[i][j]=10000000
        }
    }

    const mov = {"i":[0,0,-1,1],"j":[-1,1,0,0]}

    const queue = []
    let lastpost = 0
    let tam =1 
    queue.push(ini);
    dist[ini.i][ini.j]=0

    while (lastpost < tam){
        const cur = queue[lastpost]
        lastpost++

        for(let i=0;i<4;i++){
            const nx = {"i":cur.i+mov.i[i],"j":cur.j+mov.j[i]}
            if (nx.i<0 || nx.i>=n || nx.j<0 || nx.j>=m) continue
            if (room[nx.i][nx.j]==='#') continue
            const nxDist = dist[cur.i][cur.j]+1
            if (room[nx.i][nx.j]==='T') return nxDist
            if (nxDist<dist[nx.i][nx.j]){
                dist[nx.i][nx.j]=nxDist
                queue.push(nx)
                tam++
            }
        }
    }

    return -1
}

const room = [
    ['.', '.', '#', '.', '▲'],
    ['#', '.', '#', '.', '#'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '#', '.', '#'],
    ['T', '.', '.', '.', '.'],
  ]
  
  console.log(escapePyramidHead(room)) // -> 8
  
  const room2 = [
    ['T', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['▲', '.', '.', '#'],
    ['.', '#', '#', '#'],
  ]
  
  console.log( escapePyramidHead(room2)) // -> 2
  
  const room3 = [
    ['#', '#', '#'],
    ['▲', '.', '#'],
    ['.', '#', 'T'],
  ]
  
  console.log(escapePyramidHead(room3)) // -> -1