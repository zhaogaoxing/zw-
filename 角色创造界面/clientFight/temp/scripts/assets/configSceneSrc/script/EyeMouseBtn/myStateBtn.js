"use strict";
cc._RFpush(module, '86a80OG17tGpb9ashrN3f1R', 'myStateBtn');
// configSceneSrc\script\EyeMouseBtn\myStateBtn.js

var dir = cc.Enum({
    left: 0,
    right: 1
});
var pos = cc.Enum({
    eye: 0,
    mouse: 1
});
cc.Class({
    'extends': cc.Component,

    properties: {
        startState: 0,
        endState: 4,
        curState: 0,
        dirState: {
            'default': dir.left,
            type: dir
        },
        posState: {
            'default': pos.eye,
            type: pos
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    changeState: function changeState() {
        var des = {};

        console.log('here');

        switch (this.dirState) {
            case dir.left:
                switch (this.posState) {
                    case pos.eye:
                        cc.find('Canvas/config/headTexture').getComponent('myHeadAtlas').eye--;break;
                    case pos.mouse:
                        cc.find('Canvas/config/headTexture').getComponent('myHeadAtlas').mouse--;break;
                }
                break;
            case dir.right:
                switch (this.posState) {
                    case pos.eye:
                        cc.find('Canvas/config/headTexture').getComponent('myHeadAtlas').eye++;break;
                    case pos.mouse:
                        cc.find('Canvas/config/headTexture').getComponent('myHeadAtlas').mouse++;break;
                }
                break;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();