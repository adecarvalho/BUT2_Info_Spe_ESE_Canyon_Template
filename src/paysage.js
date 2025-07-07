import { theGame } from './main.js';
import { drawImage } from '../lib/ezLib.js';
//
export class Paysage {
    //
    constructor(screenWidth, screenHeight) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.img = theGame;
        this.position = { x: 0, y: 0 };
        this.velocity = -100;
    }
    //
    update(dt) {
        this.position.x += this.velocity * dt;
    }
    //
    render(ctx) {
        if (this.img != undefined) {
            drawImage(ctx, this.img, this.position.x, this.position.y);
        }
    }
}
//end