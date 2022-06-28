
export class Preloads extends Phaser.Scene {

  constructor() {

    super("Preloads");
  }

    
    


  preload() {
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x2b2829, 0.8);
    progressBox.fillRect(630, 590, 620, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
    x: width / 2,
    y: height / 2 - 50,
    text: 'CARGANDO...',
    style: {
        font: '80px Impact',
        fill: '#ffffff'
    }
});
loadingText.setOrigin(0.5, 0.5);

var percentText = this.make.text({
  x: width / 2.04,
  y: height / 2 + 74,
  text: '0%',
  style: {
      font: '20px Happy Chicken',
      fill: '#ffffff'
  }
});
percentText.setOrigin(0.5, 0.5);


    this.load.on('progress', function (value) {
      console.log(value);
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xc91429, 1);
      progressBar.fillRect(640, 600, 600 * value, 30);
  });
  
    
    this.load.on('progress', function (value) {
      console.log(value);
  });
              
  this.load.on('fileprogress', function (file) {
      console.log(file.src);
  });
  this.load.on('complete', function () {
      console.log('complete');
      progressBar.destroy();
progressBox.destroy();
  });
  
    
  
  this.load.image("ajustes", "public/assets/images/ajustes.png");
  this.load.image("ajustesimg", "public/assets/images/ajustesimg.png")
    this.load.image("0", "public/assets/images/0.png");
    this.load.image("como_jugar", "public/assets/images/como_jugar.png");
    this.load.image("volumen", "public/assets/images/volumen.png");
    this.load.image("masvolumen", "public/assets/images/masvolumen.png");
    this.load.image("menosvolumen", "public/assets/images/menosvolumen.png");

    this.load.audio("Música Menú Principal", "public/assets/sounds/Música Menú Principal.mp3")
    this.load.audio("CardFlip", "public/assets/sounds/Card_Flip.mp3")
    this.load.audio("MusicaJuego", "public/assets/sounds/MusicaFondo.mp3")
    this.load.audio("PapersSong", "public/assets/sounds/PapersWin.mp3")
    this.load.audio("RockSong", "public/assets/sounds/RockWin.mp3")
    this.load.audio("JuegoMusica", "public/assets/sounds/GameSong.mp3")

    this.load.image("1v1", "public/assets/images/1v1.png");
    this.load.image("menu", "public/assets/images/menu.png");
    this.load.image("revancha", "public/assets/images/revancha.png");
    this.load.image("logo", "public/assets/images/logo.png");
    this.load.image("menufondo", "public/assets/images/menufondo.png");
    this.load.image("cartaselect1", "public/assets/images/cartaselect1.png");
    this.load.image("cartaselect2", "public/assets/images/cartaselect2.png");
    this.load.image("tutorialpctimg", "public/assets/images/tutorialpctimg.png");
    this.load.image("rocklosepose", "public/assets/images/rocklosepose.png");
    this.load.image("cartaselect3", "public/assets/images/cartaselect3.png");
    this.load.image("confirmarboton", "public/assets/images/confirmarboton.png");
    
    this.load.image("paperslosepose", "public/assets/images/paperslosepose.png");
    this.load.image("paperlogo", "public/assets/images/paperlogo.png");
    this.load.image("paperswinpose", "public/assets/images/paperswinpose.png");
    this.load.image("papers_rock", "public/assets/images/papers_rock.png");
    this.load.image("gana", "public/assets/images/gana.png");
    this.load.image("ayuda", "public/assets/images/ayuda.png");
    this.load.image("x", "public/assets/images/X.png");
    this.load.image("selectfondo", "public/assets/images/selectfondo.png");
    this.load.image("confirmarSI", "public/assets/images/confirmarsi.png");
    this.load.image("rocklogo", "public/assets/images/rocklogo.png");
    this.load.image("fondosimplegameplay", "public/assets/images/fondosimplegameplay.png");
    this.load.image("VS", "public/assets/images/VS.png");
    this.load.image("scissorscard", "public/assets/images/scissorscard.png");
    this.load.image("rockcard", "public/assets/images/rockcard.png");
    this.load.image("rock_papers", "public/assets/images/rock_papers.png");
    this.load.image("rockwinpose", "public/assets/images/rockwinpose.png");
    this.load.image("papercard", "public/assets/images/papercard.png");
    this.load.image("backcard", "public/assets/images/backcard.png");
    
    
    this.load.image("rocknormalpose", "public/assets/images/rocknormalpose.png");
    this.load.image("papernormalpose", "public/assets/images/papernormalpose.png");
    this.load.image("confirmarno", "public/assets/images/confirmarNO.png");
    this.load.image("recuerda", "public/assets/images/recuerda.png",{ 
    
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {

    
    
    
    this.scene.start("MainMenu");
  }
}
