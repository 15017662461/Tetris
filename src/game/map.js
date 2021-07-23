// map
import { gameRow, gameCol } from './config'
// init map
export function initMap(map) {
  for (let i = 0; i < gameRow; i++) {
    map[i] = []
    for (let j = 0; j < gameCol; j++) {
      map[i][j] = 0
    }
  }
}


export function addBoxToMap(map, box) {
  const row = box.shape.length
  const col = box.shape[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const x = box.x + j
      const y = box.y + i
      if (box.shape[i][j] > 0) {
        map[y][x] = -1
      }
    }
  }
}



export function eliminate(map) {
  // 1. 需要获取到所有满行的索引
  const lines = getCanEliminateLines(map)
  // 2. 删除满的，在顶部增加一行
  _eliminate(lines, map)
}

function getCanEliminateLines(map) {
  let result = [];
  const row = map.length;
  const col = map[0].length;

  for (let i = row - 1; i >= 0; i--) {
    let hit = true;
    for (let j = 0; j < col; j++) {
      if (map[i][j] !== -1) {
        hit = false;
        break;
      }
    }

    if (hit) {
      result.push(i);
    }
  }

  return result;
}

function _eliminate(lines, map) {
  const col = map[0].length
  lines.reverse().forEach(i => {
    map.splice(i, 1)
    map.unshift(Array(col).fill(0))
  })
}