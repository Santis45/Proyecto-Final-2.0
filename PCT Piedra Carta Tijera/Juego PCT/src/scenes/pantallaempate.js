export class pantallaempate extends Phaser.Scene{
    constructor() {
        super ("pantallaempate")
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selectfondo').setScale(0.6);
        
        this.add.image(360, 650, 'rocklosepose').setScale(0.35);
        this.add.image(1580, 650, 'paperslosepose').setScale(0.35);
        
        let volverjugar = this.add.image(this.cameras.main.centerX,this.cameras.main.centerY*1.3, 'revancha').setScale(0.3);
        volverjugar.setInteractive();
        volverjugar.on("pointerdown", (pointer, localX, localY) => { 
            this.scene.start("pantalladejuego");});
        
        let volvermenu = this.add.image(this.cameras.main.centerX,this.cameras.main.centerY*0.7, 'menu').setScale(0.3);
        volvermenu.setInteractive();
        volvermenu.on("pointerdown", (pointer, localX, localY) => {
            this.scene.start("MainMenu");});

    }
}