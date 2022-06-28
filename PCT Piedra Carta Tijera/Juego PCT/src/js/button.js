// Clase Boton, para no repetir tanto codigo
class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ 
                backgroundColor: '#ffffff', 
                fontSize: '75px', 
                fill: '#000', 
                fontFamily: 'Kristen ITC'
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#0000ff' }))
            .on('pointerout', () => button.setStyle({ fill: '#000' }));
    }
}

export default Button;

