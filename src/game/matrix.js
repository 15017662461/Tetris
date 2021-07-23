export function getBoxBottomPoints(matrix) {
  //  其实还是有点问题
  const row = matrix.length;
  const col = matrix[0].length
  const points = []
  for (let i = row - 1; i >= 0; i--) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j]) {
        points.push({ x: j, y: i })
      }
    }
    if(points.length) return points
  }
  return points
}


export function getBoxRightPoints(matrix){
  const row = matrix.length
  const col = matrix[0].length
  const points = []
  for(let j = col - 1;j >= 0;j --){
    for(let i = 0;i < row;i ++){
      if(matrix[i][j]){
        points.push({x:j,y:i})
      }
    }
    if(points.length) return points
  }
  return points
}



export function getBoxLeftPoints(matrix){
  const row = matrix.length
  const col = matrix[0].length
  const points = []
  for(let j = 0;j < col;j ++){
    for(let i = 0;i < row;i ++){
      if(matrix[i][j]){
        points.push({x:j,y:i})
      }
    }
    if(points.length) return points
  }
  return points
}

export function getBoxAllPoints(matrix){
  const points = []
  const row = matrix.length
  const col = matrix[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j]) {
        const x = j
        const y = i
        points.push({ x, y })
      }
    }
  }
  return points
}



export function rotate(matrix) {
  const row = matrix.length
  const col = matrix[0].length

  let r = []

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let k = row - 1 - j
      if (!r[k]) {
        r[k] = []
      }
      r[k][i] = matrix[i][j]
    }
  }
  return r
}