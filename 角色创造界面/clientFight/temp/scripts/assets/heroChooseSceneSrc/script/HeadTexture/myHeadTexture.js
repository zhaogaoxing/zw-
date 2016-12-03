"use strict";
cc._RFpush(module, 'fec48jYwCtLWqBgDLyO1PYt', 'myHeadTexture');
// heroChooseSceneSrc\script\HeadTexture\myHeadTexture.js

cc.Class({
    'extends': cc.Component,

    properties: {
        headTextures: {
            'default': [],
            type: [cc.SpriteFrame]
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    show: function show(frameIndex) {
        console.log('第' + (frameIndex + 1) + '个头像初始化中');
        console.log(this.getComponent(cc.Sprite));
        console.log(this.headTextures);
        this.getComponent(cc.Sprite).spriteFrame = this.headTextures[frameIndex];
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();