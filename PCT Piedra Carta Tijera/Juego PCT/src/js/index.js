import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { configuracion } from "../scenes/configuracion.js";
import { charselect } from "../scenes/charselect.js";
import { pantalladecarga } from "../scenes/pantalladecarga.js";
import { pantalladejuego } from "../scenes/pantalladejuego.js";
import { pantallapostjuego } from "../scenes/pantallapostjuego.js";
import { pantallapostjuego2 } from "../scenes/pantallapostjuego2.js";
import { pantallaempate } from "../scenes/pantallaempate.js";
import { volumen } from "../scenes/volumen.js";

var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 450,
    },
    max: {
      width: 1600,
      height: 900,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [Preloads, MainMenu, configuracion, charselect, pantalladecarga, pantalladejuego, pantallapostjuego, pantallapostjuego2,pantallaempate, volumen]
};

var rocknormalposes;
var cartapaper;

var game = new Phaser.Game(config);



