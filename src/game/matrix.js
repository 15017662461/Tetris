import { hitBorder, hitBox } from "./hit";

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



export function rotate(box,map) {
  const matrix = box.shape
  // 列 = 行
  // 行 = 总行数 - 1 - 当前列
  const row = matrix.length
  const col = matrix[0].length

  let origin = JSON.parse(JSON.stringify(matrix))

  // 矩阵旋转
  for(let i = 0;i < row-1;i ++){
    for(let j = i + 1;j < col;j ++){
      [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
    }
  }
  matrix.forEach(m => m.reverse())

  const tempBox = {
    shape:matrix,
    x:box.x,
    y:box.y
  }
  const points = getBoxAllPoints(tempBox.shape)
  if(hitBorder({box:tempBox,points,type:"left"}) || 
      hitBorder({box:tempBox,points,type:"right"}) || 
      hitBorder({box:tempBox,points,type:"bottom"}) ||
      hitBox({box:tempBox,points,map})){
    return origin
  }
  return matrix
}