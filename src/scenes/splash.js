import Phaser from 'phaser';

import gsap from 'gsap';

import { TextEdit, Edit } from 'phaser3-rex-plugins/plugins/textedit.js';


export default class Splash extends Phaser.Scene {

    constructor(data) {

        super(
            {
                key: 'Splash',
            },
        );

    }

    init(data) {

    }

    preload() {


    }

    create() {

        this._width = window.innerWidth;
        this._height = window.innerHeight;

        this._title = new Phaser.GameObjects.Text(this, 0, 0, 'Enter', {
            fontFamily: 'OPTIAurora',
            fontSize: 25,
            //lineSpacing: height*2,
            align: 'center'
        });

        // this.printText = this.add.rexBBCodeText(400, 300, 'abc', {
        this.printText = this.rexUI.add.BBCodeText(400, 300, 'abc', {
            color: 'yellow',
            fontSize: '24px',
            fixedWidth: 200,
            fixedHeight: 80,
            backgroundColor: '#333333',
            valign: 'center',
            padding: {
               x:25,
                top: 0,
                bottom: 0,
            },
        }).setOrigin(0.5);


        // this.plugins.get('rexTextEdit').add(this.printText, {
        const editor = new TextEdit(this.printText, {
            type: 'text',
            enterClose: false,

            onOpen: (textObject) => {
                console.log('Open text editor');
            },
            onTextChanged: (textObject, text) => {
                textObject.text = text;
                console.log(`Text: ${text}`);
            },
            onClose: (textObject) => {
                console.log('Close text editor');
            },
            selectAll: true,
        });

        this._resize();

    }

    _upClicked() {
        console.log('up');
    }

    _playGame() {

    }

    _hide() {

        gsap.to(this._title, { alpha: 0, duration: 0.25, delay: 0.1 });
        gsap.delayedCall(1, () => { this.scene.manager.stop(this); });
    }

    _resize() {

        this._title.x = this._width * 0.5;
        this._title.y = this._height * 0.15;

        this.printText.x = this._width * 0.5;
    }

}
