//
import { theGame, theMusicPlayer } from './main.js';
import { Label } from '../lib/ezLib.js';
import { PlayStage } from './play_stage.js';

//
export class IntroStage {
  //
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.input = theGame.getInputManager();

    this.assetManager = theGame.getAssetManager();

    this.indice = 0;
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

    //
    if (this.input.isKeyPressed('ArrowLeft') && this.indice > 0) {
      //todo
    }
    //
    if (this.input.isKeyPressed('ArrowRight') && this.indice < 2) {
      //todo
    }
    //
    if (this.input.isKeyPressed('ArrowUp')) {
      //todo
    }
    //
    if (this.input.isKeyPressed('ArrowDown')) {
      //todo
    }
    //enter -> game stage
    if (this.input.isKeyPressed('Space')) {
      //todo
    }
  }
  //
  afficheName(ctx) {
    //todo
  }

  render(ctx) {
    //todo
  }
}
//end class