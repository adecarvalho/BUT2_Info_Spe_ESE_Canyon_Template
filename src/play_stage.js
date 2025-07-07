
import { ScoreManager } from '../lib/ezLib.js';
import { theGame, theMusicPlayer } from './main.js';

//
export class PlayStage {
	//
	constructor(screenWidth, screenHeight) {
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
		//
		this.inputManager = theGame.getInputManager();
		this.assetManager = theGame.getAssetManager();
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
	input() {
		//jump
		if (this.inputManager.isKeyPressed('Space')) {
			//todo
		}
	}
	//
	collisions() {
		//todo
		//plane and rocks

		//plane and pillarManager
	}
	//
	checkIsGameOver() {
		//todo
	}
	//
	update(dt) {
		//
		this.input();
		//
		this.collisions();
		//
		this.checkIsGameOver();
	}
	//
	render(ctx) {
		//todo
	}
}
//end