var botoncerrar;
var musicConfig;
var volumenmusica=1

export class MainMenu extends Phaser.Scene {
    constructor() {
        
        super("MainMenu")
    }

    create() {

        this.menuMusic = this.sound.add("Música Menú Principal");

        var musicConfig = { 
            mute: false,
            volume: 1,
            rate: 1,
            detune: 1,
            seek: 0,
            loop: true,
            delay: 0,

         }
         this.menuMusic.play(musicConfig);

         


         


       
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'menufondo').setScale(0.6);
        
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*0.4, 'logo').setScale(0.5);

        
        let botonajustes = this.add.image(1920-100, 100, 'ajustes').setScale(0.15);
        botonajustes.setInteractive();
        botonajustes.on("pointerdown", (pointer, localX, localY) => {
        let imagenajustes = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY-200, 'ajustesimg' ).setScale(0.25);
        let botoncerrarajustes = this.add.image(this.cameras.main.centerX+430, this.cameras.main.centerY-430,"x",).setScale(0.08)
        botoncerrarajustes.setInteractive();
        botoncerrarajustes.on("pointerdown", (pointer, localX, localY) => {
        botoncerrarajustes.destroy();
        //botonmas.destroy();
        //botonmenos.destroy();
        //sonido.destroy();
        imagenajustes.destroy();})
        /*let botonmas = this.add.image(this.cameras.main.centerX+200, 300, 'masvolumen').setScale(0.15);
        botonmas.setInteractive();
        botonmas.on("pointerdown", (pointer, localX, localY) => {
        volumenmusica =  volumenmusica+1; 
        this.menuMusic.update(musicConfig);   
        });
        let botonmenos = this.add.image((this.cameras.main.centerX-200)+200, 300, 'menosvolumen').setScale(0.15);
        botonmenos.setInteractive();
        botonmenos.on("pointerdown", (pointer, localX, localY) => {
            volumenmusica =  volumenmusica-1;   
        });
        let sonido = this.add.image(this.cameras.main.centerX-200, 300, 'volumen').setScale(0.15);*/
   });
        
        let Jugar = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*1.33, '1v1', 0).setScale(0.2);
        Jugar.setInteractive();
        Jugar.on("pointerdown", (pointer, localX, localY) => {
            this.menuMusic.stop();
			this.scene.start("pantalladejuego");});    

        let lool = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*1.66, 'como_jugar').setScale(0.3);
        lool.setInteractive();
        lool.on("pointerdown", (pointer, localX, localY) => {
        let botontutorial = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'tutorialpctimg' ).setScale(0.25);
        let botoncerrar = this.add.image(this.cameras.main.centerX+430, this.cameras.main.centerY-430,"x",).setScale(0.08)
        botoncerrar.setInteractive();
        botoncerrar.on("pointerdown", (pointer, localX, localY) => {
        botoncerrar.destroy();
        botontutorial.destroy();});
	
          
        });       
        
    
        
         
   }
  }
     
 
  
