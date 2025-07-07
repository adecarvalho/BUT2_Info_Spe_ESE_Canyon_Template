import { PlayStage } from './play_stage.js';
//
const canvas = document.getElementById('game_screen');
const loading = document.getElementById('loading');
const audio_element = document.getElementById('audio_element');
//
export const theMusicPlayer = new MusicPlayer(audio_element);
//
export const theGame = new Game(canvas);
//
async function loadAssets() {
  //
  try {
    console.log('loading assets');
    //
    await theGame.loadImage("paysage", "../assets/images/paysage.png");
    //
    await theGame.loadImage("plane", "../assets/images/plane_single.png");

    await theGame.loadSound("fly", "../assets/sounds/fly.wav");
    //
    console.log('end loading');
    //
    setTimeout(() => {
      loading.style.display = 'none';
      const datas = { name: "AAA" };
      theGame.getStageManager().pushStage(new PlayStage(canvas.width, canvas.height), datas);
      //
      theGame.start();
    }, 500);

  } catch (error) {
    console.log("Error start main: " + error);
  }
}
//
loadAssets();