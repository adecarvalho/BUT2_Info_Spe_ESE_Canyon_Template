import { Pillar } from './pillar.js';
import { getRandomFloat } from '../lib/ezLib.js';
import { Plane } from './plane.js';
//
export class PillarManager {
    //static
    static TYPE_MOVING_NONE = 0;
    static TYPE_MOVING_UP = 1;
    static TYPE_MOVING_DOWN = 2;

    //
    constructor(screenWidth, screenHeight) {
        this.pillarUp = new Pillar(screenWidth, screenHeight, Pillar.PILLAR_TYPE_UP);
        this.pillarDown = new Pillar(screenWidth, screenHeight, Pillar.PILLAR_TYPE_DOWN);
        this.speed = 400;
        this.typeMovingPillar = PillarManager.TYPE_MOVING_NONE;
        this.newWave();
    }
    //
    reset() {
        this.pillarDown.reset();
        this.pillarUp.reset();
    }
    //
    newWave() {
        if (this.pillarUp.getState() == Pillar.PILLAR_STATE_IDLE && this.pillarDown.getState() == Pillar.PILLAR_STATE_IDLE) {
            //
            const val = getRandomFloat(0, 100);
        }
    }
    //
    isWinPoints() {
        switch (this.typeMovingPillar) {
            case PillarManager.TYPE_MOVING_DOWN:
                if (this.pillarDown.getRight() <= 0) {
                    this.pillarDown.reset();
                    return true;
                }
                break;
            //
            case PillarManager.TYPE_MOVING_UP:
                if (this.pillarUp.getRight() <= 0) {
                    this.pillarUp.reset();
                    return true;
                }
                break;
            //
            case PillarManager.TYPE_MOVING_NONE:
                return false;
            //
            default:
                break;
        }
        //
        return false;
    }
    //
    isCollidePlane(zeplane) {
        if (zeplane.getState() != Plane.STATE_LIVE) {
            return false;
        }
        //
        if (this.pillarDown.collidesWithRectBounds(zeplane) || this.pillarUp.collidesWithRectBounds(zeplane)) {
            return true;
        }
        return false;
    }
    //
    update(dt) {
        this.pillarDown.update(dt);
        this.pillarUp.update(dt);
    }
    //
    render(ctx) {
        this.pillarDown.render(ctx);
        this.pillarUp.render(ctx);
    }
}
//end