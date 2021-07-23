import { gameRow, gameCol } from './config'
import { getBoxBottomPoints, getBoxRightPoints, getBoxLeftPoints, getBoxAllPoints } from './matrix'


export function hitBorder({ box, points, offsetY = 0, offsetX = 0, type }) {
  for (let i = 0; i < points.length; i++) {
    const point = points[i]
    const x = point.x + box.x + offsetX
    const y = point.y + box.y + offsetY
    switch (type) {
      case "bottom":
        if (y >= gameRow) {
          return true
        }
        break;
      case "right":
        if (x >= gameCol) {
          return true
        }
      case "left":
        if (x < 0) {
          return true
        }
      default:
        break;
    }
  }
  return false
}


export function hitBottomBorder(box) {
  const points = getBoxBottomPoints(box.shape)
  return hitBorder({ box, points, offsetY: 1, type: "bottom" })
}

export function hitRightBorder(box) {
  const points = getBoxRightPoints(box.shape)
  return hitBorder({ box, points, offsetX: 1, type: "right" })
}

export function hitLeftBorder(box) {
  const points = getBoxLeftPoints(box.shape)
  return hitBorder({ box, points, offsetX: -1, type: "left" })
}


export function hitBox({ box, map, points, offsetY = 0, offsetX = 0 }) {
  for (let i = 0; i < points.length; i++) {
    const point = points[i]
    const y = point.y + box.y + offsetY
    const x = point.x + box.x + offsetX
    if (map[y][x] < 0) {
      return true
    }
  }
  return false
}

export function hitBottomBox(map, box) {
  const points = getBoxAllPoints(box.shape)
  return hitBox({ box, map, points, offsetY: 1 })
}

export function hitRightBox(map, box) {
  const points = getBoxAllPoints(box.shape)
  return hitBox({ box, map, points, offsetX: 1 })
}

export function hitLeftBox(map, box) {
  const points = getBoxAllPoints(box.shape)
  return hitBox({ box, map, points, offsetX: -1 })
}

