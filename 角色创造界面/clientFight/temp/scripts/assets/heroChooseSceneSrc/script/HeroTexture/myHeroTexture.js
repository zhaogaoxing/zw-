"use strict";
cc._RFpush(module, '7d5956psSdLmJQKsr6YeInG', 'myHeroTexture');
// heroChooseSceneSrc\script\HeroTexture\myHeroTexture.js

cc.Class({
    'extends': cc.Component,

    properties: {
        curFrameIndex: 0
    },

    // use this for initialization
    onLoad: function onLoad() {},

    show: function show(frameIndex) {
        var anim = this.getComponent(cc.Animation);
        console.log('角色选择界面第' + (frameIndex + 1) + "角色动画初始化中");
        this.curFrameIndex = frameIndex;
        console.log(this.curFrameIndex);
        //anim.stop();
        anim.play('walk_' + frameIndex + '_5');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();