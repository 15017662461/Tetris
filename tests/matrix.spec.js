import { getBoxBottomPoints, rotate, getBoxRightPoints,getBoxLeftPoints } from '../src/game/matrix'

test('获取matrix底部的所有点', () => {
  const matrix = [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0]
  ]
  const points = getBoxBottomPoints(matrix)
  expect(points).toEqual([{
    x: 1,
    y: 2
  }])
});

test('rotate ', () => {
  const matrix = [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0]
  ]

  expect(rotate(matrix)).toEqual(
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1]
    ]
  )
});


test('获取matrix最右边的点', () => {
  const matrix = [
    [1, 1],
    [1, 1]
  ]

  expect(getBoxRightPoints(matrix)).toEqual([
    { x: 1, y: 0 }, { x: 1, y: 1 }
  ])
});


test('获取matrix最左边的点', () => {
  const matrix = [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0]
  ]

  expect(getBoxLeftPoints(matrix)).toEqual([
    {x:0,y:1},{x:0,y:2}
  ])
});




