import { initMap, addBoxToMap, eliminate } from './map'
import { render } from './renderer'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { hitBottomBorder, hitBottomBox, hitLeftBorder, hitLeftBox, hitRightBorder, hitRightBox } from './hit'
import { message } from './message'


export class Game {
  constructor(map) {
    initMap(map)
    this._map = map
    this._activeBox = null
    this._isDownMove = intervalTimer()
    this.autoMoveDown = true
  }

  _createBoxStrategy = null

  start() {
    this._activeBox = this._createBoxStrategy()
    addTicker(this.handleTicker.bind(this))
  }

  setCreateBoxStrategy(strategy){
    this._createBoxStrategy = strategy
  }

  down() {
    // 当碰撞到底部边界或者碰撞到底部的固化盒子后自身被固化
    if (hitBottomBorder(this._activeBox) || hitBottomBox(this._map, this._activeBox)) {
      // 为了不让box达到底部的时候被reset清除掉，让map对应的位置变为-1
      addBoxToMap(this._map, this._activeBox)
      eliminate(this._map)
      this._activeBox = this._createBoxStrategy()
      // 到达底部
      return
    }
    this._activeBox.y++
  }

  handleTicker(n) {
    if (this.autoMoveDown) {
      if (this._isDownMove(n, 300)) {
        this.down()
        message.emit("moveBoxToDown")
      }
    }
    render(this._activeBox, this._map)
  }


  addPlayer(player) {
    player.init(this)
  }


  moveBoxToLeft() {
    if (hitLeftBorder(this._activeBox)) {
      return
    }
    if (hitLeftBox(this._map, this._activeBox)) {
      return
    }
    this._activeBox.x--
  }

  moveBoxToRight() {
    if (hitRightBorder(this._activeBox)) {
      return
    }
    if (hitRightBox(this._map, this._activeBox)) {
      return
    }
    this._activeBox.x++
  }

  rotateBox() {
    this._activeBox.rotate()
  }

  moveBoxToDown() {
    this.down()
  }
}