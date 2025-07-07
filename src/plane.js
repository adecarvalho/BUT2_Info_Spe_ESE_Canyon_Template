import { theGame } from "./main.js";
import { Entity } from '../lib/ezLib.js';
import { Explosion } from '../lib/explosion.js';

//
export class Plane extends Entity {
    //static
    static STATE_LIVE = "LIVE";
    static STATE_TOUCHED = "TOUCHED";
    static STATE_INVINCIBLE = "INVINCIBLE";

    static GRAVITY = 5;
    static JUMP_MODULE = -3;
    //
    constructor(screenWidth, screenHeight, xini = 0, yini = 0) {
        super(xini, yini, theGame.getAssetManager().getImage('plane'));
        //
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.initPosition = { x: xini, y: yini };
        //
        this.setState(Plane.STATE_LIVE);
        //
        this.timer = 0;
        this.inflateRectBounds(4, 4);
        this.reset();
    }
    //
    reset() {
        //todo
    }
    //
    stop() {
        //todo
    }
    //
    jump() {
        if (this.getState() == Plane.STATE_LIVE || this.getState() == Plane.STATE_INVINCIBLE) {
            //todo
        }
    }
    //
    limites() {
        //todo
    }
    //
    touched() {
        if (this.getState() == Plane.STATE_LIVE) {
            //todo
        }
    }
    //
    update(dt) {
        super.update(dt);
        //
        const dy = this.getVelocityY() + Plane.GRAVITY * dt;
        const yp = this.getPositionY() + dy;
        this.setVelocityXY(0, dy);
        this.setPositionY(yp);
        //
        this.limites();
    }
    //
    render(ctx) {
        const st = this.getState();
        //todo
    }
}
//end