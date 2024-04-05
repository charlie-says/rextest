import Phaser from 'phaser';

export default class PreloadFonts extends Phaser.Scene {
    constructor() {
        super(
            {
                'key': 'PreloadFonts',
            }
        );
    }

    init() {
        //  Inject our CSS.
        const element = document.createElement('style');

        document.head.appendChild(element);

        const sheet = element.sheet;

        let styles = '@font-face { font-family: "OPTIAurora"; src: url("assets/fonts/OPTIAuroraCondensedBold.otf") format("opentype"); }\n';

        sheet.insertRule(styles, 0);
    
    }

    preload() {
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create() {

        WebFont.load({
            custom: {
                families: ['OPTIAurora']
            },
            active: () => {
                //   this.add.text(32, 32, 'The face of the\nmoon was in\nshadow.', { fontFamily: 'Myriad Pro', fontSize: 80, color: '#ff0000' }).setShadow(2, 2, '#333333', 2, false, true);

                this.start();
            }
        });

       
    }

    start() {
        this.scene.start('PreloadAssets');
    }

}