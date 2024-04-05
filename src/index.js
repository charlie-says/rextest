import Phaser from 'phaser';


import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

import TextEditPlugin from 'phaser3-rex-plugins/plugins/textedit-plugin.js';
import BBCodeTextPlugin from 'phaser3-rex-plugins/plugins/bbcodetext-plugin.js';


import PreloadFonts from './scenes/preloadfonts.js';
import PreloadAssets from './scenes/preloadassets.js';

import Splash from './scenes/splash.js';



const config = {
    type: Phaser.AUTO,

    title: 'Rex Test',

    render: {
        pixelArt: false,
        antialias: true,
        antialiasGL: true,
        roundPixels: true,
    },

    scale: {
        mode: Phaser.Scale.NONE,

        parent: 'phased',
        // autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight,

    },

    scene: [PreloadFonts, PreloadAssets,
        Splash,

   
    ],
    parent: 'phased',
    // fullscreenTarget: divId, // For fullscreen
    dom: {
        createContainer: true
    },
    input: {
        mouse: {
            target: 'phased'
        },
        touch: {
            target: 'phased'
        },
    },
    plugins: {
        scene: [
             {
                key: 'rexUI',
                plugin: RexUIPlugin,
                mapping: 'rexUI'
            },
            {
                key: 'rexTextEdit',
                plugin: TextEditPlugin,
                start: true
            },
            {
                key: 'rexBBCodeTextPlugin',
                plugin: BBCodeTextPlugin,
                start: true
            },

        ],
/*
        global: [
            {
                key: 'rexUI',
                plugin: RexUIPlugin,
                mapping: 'rexUI'
            },
            {
                key: 'rexTextEdit',
                plugin: TextEditPlugin,
                start: true
            },
            {
                key: 'BBCodeTextPlugin',
                plugin: BBCodeTextPlugin,
                start: true
            }
        ]
*/
    },

    transparent: true,
    roundPixels: true,
    /*
        fps: {
            target: 30,
            forceSetTimeOut: true
        },
        */
    backgroundColor: '#222222',
    resolution: window.devicePixelRatio,
};

const game = new Phaser.Game(config);

game.resizeEmitter = new Phaser.Events.EventEmitter();
window.addEventListener('resize', (event) => {

    const winWidth = document.body.clientWidth || window.innerWidth;
    const winHeight = document.body.clientHeight || window.innerHeight;

    const devicePixelRatio = 1;

    const width = winWidth * devicePixelRatio;
    const height = winHeight * devicePixelRatio;

    // console.log('Window resize:', width, height);

    // this.game.scale.setParentSize(winWidth, winHeight);
    // this.game.scale.setZoom(1 / devicePixelRatio);

    game.scale.setGameSize(width, height);

    game.resizeEmitter.emit('resize');
});

window.dispatchEvent(new Event('resize'));

