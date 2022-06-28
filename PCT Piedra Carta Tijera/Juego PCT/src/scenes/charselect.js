
var rocknormalposes;


export class charselect extends Phaser.Scene {
    constructor() {
        
        super("charselect")
    }

        
    
    preload() {
        game.load.image("rocknormalpose", "public/assets/images/rocknormalpose.png");

         }
     
    
    create() {
         

        rocknormalposes = game.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'rocknormalpose').setScale(0.4);
        
        

        rocknormalposes.alpha = 0.5;
        rocknormalposes.anchor.set(0.5);
        rocknormalposes.inputEnabled = true;

        game.input.addMoveCallback(p, this);

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'menufondo').setScale(0.6);
        let atras = this.add.image(100, 100, 'x').setScale(0.15);
        atras.setInteractive();
        atras.on("pointerdown", (pointer, localX, localY) => {
		this.scene.start("MainMenu");});

   

}

   



 update() {

    

    if (rocknormalposes.input.pointerOver())
    {
        rocknormalposes.alpha = 1;
    }
    else
    {
        rocknormalposes.alpha = 0.5;
    }

}


 }


    


 
 