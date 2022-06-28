export class pantallapostjuego extends Phaser.Scene{
    constructor() {
        super ("pantallapostjuego")
    }

    create() {
        this.GameSound = this.sound.add("RockSong");
        var cardConfig = { 
            mute: false,
            volume: 1,
            rate: 1,
            detune: 1,
            seek: 0,
            loop: false,
            delay: 0,}
        this.GameSound.play(cardConfig);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'rock_papers').setScale(0.6);
        
        this.add.image(560, 850, 'rockwinpose').setScale(0.5);
        this.add.image(1580, 650, 'paperslosepose').setScale(0.28);
    
        this.add.image(1680, 120, 'gana').setScale(0.28);
        this.add.image(1290, 120, 'rocklogo').setScale(0.25);
        
        let volverjugar = this.add.image(this.cameras.main.centerX+160 ,770, 'revancha').setScale(0.3);
        volverjugar.setInteractive();
        volverjugar.on("pointerdown", (pointer, localX, localY) => { 
            this.GameSound.stop();
            this.scene.start("pantalladejuego");});
        
        let volvermenu = this.add.image(this.cameras.main.centerX+160 ,960, 'menu').setScale(0.3);
        volvermenu.setInteractive();
        volvermenu.on("pointerdown", (pointer, localX, localY) => {
            this.GameSound.stop();
            this.scene.start("MainMenu");});

    }
}