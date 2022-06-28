export class pantalladecarga extends Phaser.Scene {
    constructor() {
        super("pantalladecarga")
    }
    create () {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selectfondo').setScale(0.6);

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'VS').setScale(0.35);

        
        
        


        
       

    } 
}
