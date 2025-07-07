//
import { Label } from '../lib/ezLib.js';
import { theGame, theMusicPlayer } from './main.js';

//
export class ConcluStage {
  //
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.score = new Label('Score', 40);
    this.score.setColor('PURPLE');
  }
  //
  onEnter(datas) {
    //todo
  }
  //
  onExit() {
    //todo
  }
  //
  update(dt) {
    //todo
  }
  //
  render(ctx) {
    //todo
  }
}
//end