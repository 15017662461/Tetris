import { message } from "./message"
import { createBoxByType } from './Box'

export class Rival{
  constructor(){
    this._game = null
  }

  init(game){
    this._game = game
    this._game.autoMoveDown = false
    this._game.setCreateBoxStrategy(this.handleCreateBox.bind(this))

    message.on('moveBoxToLeft',this.moveBoxToLeftMsg.bind(this))
    message.on('moveBoxToRight',this.moveBoxToRightMsg.bind(this))
    message.on('rotateBox',this.rotateBoxMsg.bind(this))
    message.on('moveBoxToDown',this.moveBoxToDownMsg.bind(this))
    message.on('createBox',this.createBoxMsg.bind(this))
    
  }
  _boxInfo = null
  _init = false
  handleCreateBox(){
    return createBoxByType(this._boxInfo.type)
  }

  createBoxMsg(info){
    this._boxInfo = info
    if(!this._init){
      this._game.start()
      this._init = true
    }
  }

  moveBoxToLeftMsg(){
    this._game.moveBoxToLeft()
  }

  moveBoxToRightMsg(){
    this._game.moveBoxToRight()
  }

  rotateBoxMsg(){
    this._game.rotateBox()
  }

  moveBoxToDownMsg(){
    this._game.moveBoxToDown()
  }
}