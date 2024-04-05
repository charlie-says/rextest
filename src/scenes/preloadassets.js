import Phaser from 'phaser';

export default class PreloadAssets extends Phaser.Scene {
    constructor() {

        super(
            {
                'key': 'PreloadAssets',
            }
        );
    }

    preload() {
    
        // this.load.image('logo', solidImg);
        this.load.image('solid', './assets/ui/solid.png');
        this.load.image('person', './assets/ui/person.png');

        // this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);
        // this.load.plugin('rextexteditplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js', true);

        this.load.on('progress', function (value) {
            // console.log(value);
        });

        this.load.on('fileprogress', function (file) {
            // console.log(file.src);
        });

        this.load.on('complete', function () {
            console.log('Loading Complete');
        });

    }

    create() {
        this.start();
    }

    start() {
        this.scene.start('Splash');    
    }

}