export class pantallapostjuego2 extends Phaser.Scene{
    constructor() {
        super ("pantallapostjuego2")
    }

    create() {

        this.paperSound = this.sound.add("PapersSong");
        var cardConfig = { 
            mute: false,
            volume: 1,
            rate: 1,
            detune: 1,
            seek: 0,
            loop: false,
            delay: 0,}
        this.paperSound.play(cardConfig);

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'papers_rock').setScale(0.6);
        
        this.add.image(1560, 650, 'rocklosepose').setScale(0.29);
        this.add.image(560, 850, 'paperswinpose').setScale(0.5);
        
    
        this.add.image(1680, 120, 'gana').setScale(0.28);
        this.add.image(1215, 100, 'paperlogo').setScale(0.25);
        
        let volverjugar = this.add.image(this.cameras.main.centerX+160 ,770, 'revancha').setScale(0.3);
        volverjugar.setInteractive();
        volverjugar.on("pointerdown", (pointer, localX, localY) => { 
            this.paperSound.stop();
            this.scene.start("pantalladejuego");});
        
        let volvermenu = this.add.image(this.cameras.main.centerX+160 ,960, 'menu').setScale(0.3);
        volvermenu.setInteractive();
        volvermenu.on("pointerdown", (pointer, localX, localY) => {
            this.paperSound.stop();
            this.scene.start("MainMenu");});

    }
}