import { hitBottomBorder, hitRightBorder,hitLeftBorder,
          hitBottomBox,hitRightBox,hitLeftBox } from '../src/game/hit'
import { gameRow,gameCol } from '../src/game/config'


// 边界碰撞
test('当box到底的时候应该返回一个true', () => {
  const box = {
    shape: [[1, 1], [1, 1]],
    x: 0,
    y: gameRow - 1
  }
  expect(hitBottomBorder(box)).toBe(true)
});

test('当box到达最右边的时候返回一个true', () => {
  const box = {
    shape: [[1, 1], [1, 1]],
    x: gameCol - 1,
    y: 2
  }
  expect(hitRightBorder(box)).toBe(true)
});

test('当box到达最左边的时候返回一个true', () => {
  const box = {
    shape: [[1, 1], [1, 1]],
    x: 0,
    y: 2
  }
  expect(hitLeftBorder(box)).toBe(true)
});




// 盒子碰撞
test('当box底部碰撞到其他的box上的时候返回一个true', () => {
  const box = {
    shape: [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ],
    x: 1,
    y: 1
  }

  const map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]

  expect(hitBottomBox(map, box)).toBe(true)
})


test('当box右边碰撞到其他的box上的时候返回一个true', () => {
  const box = {
    shape: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0]
    ],
    x: 0,
    y: 0
  }

  const map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]

  expect(hitRightBox(map, box)).toBe(true)
});

test('当box左边碰撞到其他的box上的时候返回一个true', () => {
  const box = {
    shape: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0]
    ],
    x: 1,
    y: 0
  }

  const map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0]
  ]

  expect(hitLeftBox(map, box)).toBe(true) 
});




