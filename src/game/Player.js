import { createBox } from "./Box"
import { message } from "./message"

export class Player {
  constructor() {
    this._game = null
  }

  init(game) {
    this._game = game
    this._game.setCreateBoxStrategy(this.handelCreateBox.bind(this))
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  handelCreateBox() {
    const box = createBox()
    message.emit("createBox", { type: box.type })
    return box
  }

  handleKeyDown(e) {
    switch (e.code) {
      case 'ArrowLeft':
        this._game.moveBoxToLeft()
        message.emit("moveBoxToLeft")
        break;
      case 'ArrowRight':
        this._game.moveBoxToRight()
        message.emit("moveBoxToRight")
        break;
      case 'ArrowUp':
        this._game.rotateBox()
        message.emit("rotateBox")
        break;
      case 'ArrowDown':
        this._game.moveBoxToDown()
        message.emit("moveBoxToDown")
        break
      default:
        break;
    }
  }
}