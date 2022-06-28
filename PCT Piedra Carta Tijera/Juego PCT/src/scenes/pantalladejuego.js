var carta1
var carta2
var carta3
var carta4
var carta5
var carta6
var cartaj1=0
var cartaj2=0
var gameOver
var cartaselect11
var cartaselect2
var timedEvent
let scorej1 = 0
var scorej2 = 0
var scoreTextoj1; 
var scoreTextoj2;
var cartaseleccionadaj1 = 0
var cartaseleccionadaj2 = 0
var carta11
var carta22
var carta33
var carta44
var carta55
var carta66
var backcard1
var backcard2
var backcard3
var backcard4
var backcard5
var backcard6
var cartaselj1
var cartaselj2
var puntajej1 = 0
var puntajej2 = 0


export class pantalladejuego extends Phaser.Scene {
    constructor () {
        super("pantalladejuego")

    }


    create () {

        this.gameMusic = this.sound.add("JuegoMusica");

         
        this.cardSound = this.sound.add("CardFlip");

        var cardConfig2 = { 
            mute: false,
            volume: 0.6,
            rate: 1,
            detune: 1,
            seek: 0,
            loop: true,
            delay: 0,}

        
        var cardConfig = { 
            mute: false,
            volume: 1,
            rate: 1,
            detune: 1,
            seek: 0,
            loop: false,
            delay: 0,}
           

            this.gameMusic.play(cardConfig2);
        
        
        //Texto
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondosimplegameplay').setScale(0.6);
        let botonajustes = this.add.image(1430, 70, 'ajustes').setScale(0.13);
        botonajustes.setInteractive();
        botonajustes.on("pointerdown", (pointer, localX, localY) => {
        let imagenajustes = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY-200, 'ajustesimg' ).setScale(0.25);
        let botoncerrarajustes = this.add.image(this.cameras.main.centerX+430, this.cameras.main.centerY-430,"x",).setScale(0.08)
        botoncerrarajustes.setInteractive();
        botoncerrarajustes.on("pointerdown", (pointer, localX, localY) => {
        botoncerrarajustes.destroy();
        imagenajustes.destroy();})})
        this.add.image(200, 640, 'rocknormalpose').setScale(0.3);
        this.add.image(1690, 630, 'papernormalpose').setScale(0.3);
        let recuerda = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*0.2, 'recuerda').setScale(0.25);
        recuerda.setInteractive();
        recuerda.on("pointerdown", (pointer, localX, localY) => {
        this.gameMusic.stop();
        this.scene.start("pantallapostjuego2");});

        //Cartas
        
        let cartasn = [1,2,3]

        carta1 = cartasn[Phaser.Math.Between(0,2)];
        carta2 = cartasn[Phaser.Math.Between(0,2)];
        carta3 = cartasn[Phaser.Math.Between(0,2)];
        carta4 = cartasn[Phaser.Math.Between(0,2)];
        carta5 = cartasn[Phaser.Math.Between(0,2)];
        carta6 = cartasn[Phaser.Math.Between(0,2)];
        // Carta 1    
        if(carta1==1){
        var carta11=this.add.image(580, 280, 'rockcard').setScale(0.18);
        /*carta11.setInteractive();
        carta11.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 542, "cartaselect3").setScale(0.19);
        this.add.image(583, 802, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 282, "cartaselect1").setScale(0.19);
		cartaj1=carta1;
        cartaseleccionadaj1 = 1 */  
        console.log(cartaj1)}//);}
        if(carta1==2){
        var carta11=this.add.image(580, 280, 'papercard').setScale(0.18);
        /*carta11.setInteractive();
        carta11.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 542, "cartaselect3").setScale(0.19);
        this.add.image(583, 802, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 282, "cartaselect1").setScale(0.19);
        cartaj1=carta1;
        cartaseleccionadaj1 = 1*/    
        console.log(cartaj1)}//);}
        if(carta1==3){
        var carta11=this.add.image(580, 280, 'scissorscard').setScale(0.18);
        /*carta11.setInteractive();
        carta11.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 542, "cartaselect3").setScale(0.19);
        this.add.image(583, 802, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 282, "cartaselect1").setScale(0.19);
        cartaj1=carta1;
        cartaseleccionadaj1 = 1*/    
        console.log(cartaj1)}//);}
        // Carta 2
        if(carta2==1){
        var carta22=this.add.image(580, 540, 'rockcard').setScale(0.18);
        /*carta22.setInteractive();
        carta22.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 282, "cartaselect3").setScale(0.19);
        this.add.image(583, 802, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 542, "cartaselect1").setScale(0.19);
		cartaj1=carta2; 
        cartaseleccionadaj1 = 2  */ 
        console.log(cartaj1)}//);}
        if(carta2==2){
        var carta22=this.add.image(580, 540, 'papercard').setScale(0.18);
        /*carta22.setInteractive();
        carta22.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 282, "cartaselect3").setScale(0.19);
        this.add.image(583, 802, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 542, "cartaselect1").setScale(0.19);
        cartaj1=carta2;  
        cartaseleccionadaj1 = 2  */
        console.log(cartaj1)}//);}
        if(carta2==3){
        var carta22=this.add.image(580, 540, 'scissorscard').setScale(0.18);
        /*carta22.setInteractive();
        carta22.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 282, "cartaselect3").setScale(0.19);
        this.add.image(583, 802, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 542, "cartaselect1").setScale(0.19);
        cartaj1=carta2; 
        cartaseleccionadaj1 = 2 */   
        console.log(cartaj1)}//);}
        // Carta 3        
        if(carta3==1){
        var carta33=this.add.image(580, 800, 'rockcard').setScale(0.18);
        /*carta33.setInteractive();
        carta33.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 282, "cartaselect3").setScale(0.19);
        this.add.image(583, 542, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 802, "cartaselect1").setScale(0.19);
        cartaj1=carta3; 
        cartaseleccionadaj1 = 3    */
        console.log(cartaj1)}//);}
        if(carta3==2){
        var carta33=this.add.image(580, 800, 'papercard').setScale(0.18);
        /*carta33.setInteractive();
        carta33.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 282, "cartaselect3").setScale(0.19);
        this.add.image(583, 542, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 802, "cartaselect1").setScale(0.19);
        cartaj1=carta3;
        cartaseleccionadaj1 = 3   */    
        console.log(cartaj1)}//);}
        if(carta3==3){
        var carta33=this.add.image(580, 800, 'scissorscard').setScale(0.18);
        /*carta33.setInteractive();
        carta33.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 282, "cartaselect3").setScale(0.19);
        this.add.image(583, 542, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 802, "cartaselect1").setScale(0.19);
        cartaj1=carta3;  
        cartaseleccionadaj1 = 3   */  
        console.log(cartaj1)}//);}
        // Carta 4    
        if(carta4==1){
        var carta44=this.add.image(1330, 280, 'rockcard').setScale(0.18);
        /*carta44.setInteractive();
        carta44.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 542, "cartaselect3").setScale(0.19);
        this.add.image(1332, 802, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 282, "cartaselect2").setScale(0.19);
        cartaj2=carta4;
        cartaseleccionadaj2 = 4  */     
        console.log(cartaj2)}//);}
        if(carta4==2){
        var carta44=this.add.image(1330, 280, 'papercard').setScale(0.18);
        /*carta44.setInteractive();
        carta44.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 542, "cartaselect3").setScale(0.19);
        this.add.image(1332, 802, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 282, "cartaselect2").setScale(0.19);
        cartaj2=carta4; 
        cartaseleccionadaj2 = 4*/    
        console.log(cartaj2)}//);}
        if(carta4==3){
        var carta44=this.add.image(1330, 280, 'scissorscard').setScale(0.18);
        /*carta44.setInteractive();
        carta44.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 542, "cartaselect3").setScale(0.19);
        this.add.image(1332, 802, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 282, "cartaselect2").setScale(0.19);
        cartaj2=carta4;
        cartaseleccionadaj2 = 4 */    
        console.log(cartaj2)}//);}
        // Carta 5    
        if(carta5==1){
        var carta55=this.add.image(1330, 540, 'rockcard').setScale(0.18);
        /*carta55.setInteractive();
        carta55.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 282, "cartaselect3").setScale(0.19);
        this.add.image(1332, 802, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 542, "cartaselect2").setScale(0.19);
        cartaj2=carta5;
        cartaseleccionadaj2 = 5 */  
        console.log(cartaj2)}//);}
        if(carta5==2){
        var carta55=this.add.image(1330, 540, 'papercard').setScale(0.18);
        /*carta55.setInteractive();
        carta55.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 282, "cartaselect3").setScale(0.19);
        this.add.image(1332, 802, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 542, "cartaselect2").setScale(0.19);
        cartaj2=carta5;
        cartaseleccionadaj2 = 5    */   
        console.log(cartaj2)}//);}
        if(carta5==3){
        var carta55=this.add.image(1330, 540, 'scissorscard').setScale(0.18);
        /*carta55.setInteractive();
        carta55.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 282, "cartaselect3").setScale(0.19);
        this.add.image(1332, 802, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 542, "cartaselect2").setScale(0.19);
        cartaj2=carta5;
        cartaseleccionadaj2 = 5 */     
        console.log(cartaj2)}//);}
        // Carta 6    
        if(carta6==1){
        var carta66=this.add.image(1330, 800, 'rockcard').setScale(0.18);
        /*carta66.setInteractive();
        carta66.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 282, "cartaselect3").setScale(0.19);
        this.add.image(1332, 542, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 802, "cartaselect2").setScale(0.19);
        cartaj2=carta6;
        cartaseleccionadaj2 = 6 */   
        console.log(cartaj2)}//);}
        if(carta6==2){
        var carta66=this.add.image(1330, 800, 'papercard').setScale(0.18);
        /*carta66.setInteractive();
        carta66.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 282, "cartaselect3").setScale(0.19);
        this.add.image(1332, 542, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 802, "cartaselect2").setScale(0.19);
        cartaj2=carta6;
        cartaseleccionadaj2 = 6 */   
        console.log(cartaj2)}//);}
        if(carta6==3){
        var carta66=this.add.image(1330, 800, 'scissorscard').setScale(0.18);
        /*carta66.setInteractive();
        carta66.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 282, "cartaselect3").setScale(0.19);
        this.add.image(1332, 542, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 802, "cartaselect2").setScale(0.19);
        cartaj2=carta6;
        cartaseleccionadaj2 = 6 */     
        console.log(cartaj2)}//);}


        timedEvent = this.time.addEvent({ delay: 5000, callback: TiempoFin, callbackScope: this, loop: false });


        function TiempoFin() {
     recuerda.destroy();    
     backcard1 = this.add.image(580, 280, 'backcard').setScale(0.18);
     backcard1.setInteractive();
        backcard1.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 542, "cartaselect3").setScale(0.19);
        this.add.image(583, 802, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 282, "cartaselect1").setScale(0.19);
        cartaj1=carta1;
        cartaseleccionadaj1 = 1})
     backcard2 = this.add.image(580, 540, 'backcard').setScale(0.18);
     backcard2.setInteractive();
        backcard2.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 282, "cartaselect3").setScale(0.19);
        this.add.image(583, 802, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 542, "cartaselect1").setScale(0.19);
        cartaj1=carta2; 
        cartaseleccionadaj1 = 2})
     backcard3 = this.add.image(580, 800, 'backcard').setScale(0.18);
     backcard3.setInteractive();
        backcard3.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(583, 282, "cartaselect3").setScale(0.19);
        this.add.image(583, 542, "cartaselect3").setScale(0.19);
        var cartaselect11 = this.add.image(583, 802, "cartaselect1").setScale(0.19);
        cartaj1=carta3;  
        cartaseleccionadaj1 = 3 })
     backcard4 = this.add.image(1330, 280, 'backcard').setScale(0.18);
     backcard4.setInteractive();
        backcard4.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 542, "cartaselect3").setScale(0.19);
        this.add.image(1332, 802, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 282, "cartaselect2").setScale(0.19);
        cartaj2=carta4;
        cartaseleccionadaj2 = 4})
     backcard5 = this.add.image(1330, 540, 'backcard').setScale(0.18);
     backcard5.setInteractive();
        backcard5.on("pointerdown", (pointer, localX, localY) => {
        this.add.image(1332, 282, "cartaselect3").setScale(0.19);
        this.add.image(1332, 802, "cartaselect3").setScale(0.19);
        var cartaselect2 = this.add.image(1332, 542, "cartaselect2").setScale(0.19);
        cartaj2=carta5;
        cartaseleccionadaj2 = 5})
     backcard6 = this.add.image(1330, 800, 'backcard').setScale(0.18);
     backcard6.setInteractive();
     backcard6.on("pointerdown", (pointer, localX, localY) => {
     this.add.image(1332, 282, "cartaselect3").setScale(0.19);
     this.add.image(1332, 542, "cartaselect3").setScale(0.19);
     var cartaselect2 = this.add.image(1332, 802, "cartaselect2").setScale(0.19);
     cartaj2=carta6;
     cartaseleccionadaj2 = 6})
    
     this.cardSound.play(cardConfig); }

        var confimarsi=this.add.image(this.cameras.main.centerX, this.cameras.main.centerY*1.8, 'confirmarboton').setScale(0.23);
        confimarsi.setInteractive();
        confimarsi.on("pointerdown", (pointer, localX, localY) => {
            if ((cartaj1!=0)&&(cartaj2!=0)){

            if (cartaseleccionadaj1==1){
                cartaselj1=carta1
                backcard1.destroy();
             }

            if (cartaseleccionadaj1==2){
                cartaselj1=carta2
                backcard2.destroy();
             }
        
            if (cartaseleccionadaj1==3){
                cartaselj1=carta3
                backcard3.destroy();
             }
            
            if (cartaseleccionadaj2==4){
                cartaselj2=carta4
                backcard4.destroy();
             } 

            if (cartaseleccionadaj2==5){
                cartaselj2=carta5
                backcard5.destroy();
             }

            if (cartaseleccionadaj2==6){
                cartaselj2=carta6
                backcard6.destroy();
             } 
             
             console.log(cartaselj1)
             console.log(cartaselj2)
             if ((cartaselj1==1)&&(cartaselj2!=1)){
                if(cartaselj2==3){
                puntajej1++;
                scoreTextoj1.setText(puntajej1)}
                if (cartaselj2==2){
                puntajej2++;
                scoreTextoj2.setText(puntajej2)}}
               
            if ((cartaselj1==2)&&(cartaselj2!=2)){
                if(cartaselj2==1){
                puntajej1++;
                scoreTextoj1.setText(puntajej1)}
                if (cartaselj2==3){
                puntajej2++;
                scoreTextoj2.setText(puntajej2)}}
               
            if ((cartaselj1==3)&&(cartaselj2!=3)){
                if(cartaselj2==2){
                puntajej1++;
                scoreTextoj1.setText(puntajej1)}
                if (cartaselj2==1){
                puntajej2++;
                scoreTextoj2.setText(puntajej2)}}
               
            if (cartaselj1==cartaselj2){
                puntajej1++;
                scoreTextoj1.setText(puntajej1);
                puntajej2++;
                scoreTextoj2.setText(puntajej2)}

                this.add.image(583, 282, "cartaselect3").setScale(0.19);
                this.add.image(583, 542, "cartaselect3").setScale(0.19);
                this.add.image(583, 802, "cartaselect3").setScale(0.19);
                this.add.image(1332, 282, "cartaselect3").setScale(0.19);
                this.add.image(1332, 542, "cartaselect3").setScale(0.19);
                this.add.image(1332, 802, "cartaselect3").setScale(0.19);
                cartaj1=0
                cartaj2=0

                this.cardSound.play(cardConfig); 

                console.log(puntajej1)
                console.log(puntajej2)
                console.log("a")


           }})


           

            
         
        
         //Score
         scoreTextoj1 = this.add.text(155, 10, "0", { 
            font: '130px Happy Chicken',
            fill: '#fff',
            stroke: '#000000',
            strokeThickness: 11,
            addStrokeColor: '#000000'
            
        });
        

        scoreTextoj2 = this.add.text(1660, 10, "0", { 
            
            font: '130px Happy Chicken',
            fill: '#fff',
            stroke: '#000000',
            strokeThickness: 11,
            addStrokeColor: '#000000'
        });


        let luul = this.add.image(485, 70, 'ayuda').setScale(0.13);
        luul.setInteractive();
        luul.on("pointerdown", (pointer, localX, localY) => {
        let botontutorialingame = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'tutorialpctimg' ).setScale(0.26);
        let botoncerraringame = this.add.image(this.cameras.main.centerX+445, this.cameras.main.centerY-445,"x",).setScale(0.08)
        botoncerraringame.setInteractive();
        botoncerraringame.on("pointerdown", (pointer, localX, localY) => {
        botoncerraringame.destroy();
        botontutorialingame.destroy();    


        
        /*
        let cartas = ['PIEDRA', 'PAPEL', 'TIJERA']

        var Player1 = this.add.image(200, 640, 'rocknormalpose').setScale(0.3);
        var Player2 = this.add.image(1690, 630, 'papernormalpose').setScale(0.3);

        Player1.cartas = []
        Player1.cartas.push([
            cartas[Phaser.Math.Between(0,2)],
            [100,100]
        ])
        Player1.cartas.push([
            cartas[Phaser.Math.Between(0,2)],
            [100,200]
        ])
        Player1.cartas.push([
            cartas[Phaser.Math.Between(0,2)],
            [100,300]
        ])
        console.log(Player1.cartas)

        Player2.cartas = []
        Player2.cartas.push([
            cartas[Phaser.Math.Between(0,2)],
            [500,100]
        ])
        Player2.cartas.push([
            cartas[Phaser.Math.Between(0,2)],
            [500,200]
        ])
        Player2.cartas.push([
            cartas[Phaser.Math.Between(0,2)],
            [500,300]
        ])
        console.log(Player2.cartas)
        console.log(Player1.cartas[0])
        console.log(Player1.cartas[1])
        console.log(Player1.cartas[2])

        if(Player1.cartas[0]=='PIEDRA'){
            this.add.image(580, 280, 'rockcard').setScale(0.18);
            console.log("piedra")}
        if(Player1.cartas[0]=='PAPEL'){
            this.add.image(580, 280, 'papercard').setScale(0.18);
            console.log("papel")}
        if(Player1.cartas[0]=='TIJERA'){
            this.add.image(580, 280, 'scissorscard').setScale(0.18);
            console.log("tijera")}
        
        if(Player1.cartas[1]=='PIEDRA'){
            this.add.image(580, 540, 'rockcard').setScale(0.18);}
        if(Player1.cartas[1]=='PAPEL'){
            this.add.image(580, 540, 'papercard').setScale(0.18);}
        if(Player1.cartas[1]=='TIJERA'){
            this.add.image(580, 540, 'scissorscard').setScale(0.18);}

        this.add.image(580, 280, 'backcard').setScale(0.18);
        this.add.image(580, 540, 'backcard').setScale(0.18);
        this.add.image(580, 800, 'backcard').setScale(0.18);
        this.add.image(1330, 280, 'backcard').setScale(0.18);
        this.add.image(1330, 540, 'backcard').setScale(0.18);
        this.add.image(1330, 800, 'backcard').setScale(0.18);*/
       

 

        /*this.add.sprite(400,400,"papersprite");
        this.anims.play("papercard", true);*/
     })})

   }

     update(){
        if((puntajej1==2)&&(puntajej2!=2)){ 
            puntajej1=0;
            puntajej2=0;
            this.gameMusic.stop();
            this.scene.start("pantallapostjuego");}
        if((puntajej2==2)&&(puntajej1!=2)){ 
            puntajej1=0;
            puntajej2=0;
            this.gameMusic.stop();
            this.scene.start("pantallapostjuego2");}
            if((puntajej2==2)&&(puntajej1==2)){
            puntajej1=0;
            puntajej2=0;
            this.gameMusic.stop();
            this.scene.start("pantallaempate");}
             
     }
    }
    