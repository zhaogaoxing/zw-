"use strict";
cc._RFpush(module, 'a95b0Y20flH5q06Hjmh00f+', 'myCreateBtn');
// heroChooseSceneSrc\script\createBtn\myCreateBtn.js

cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {},

    toRegisterScene: function toRegisterScene() {
        cc.director.loadScene('registerScene');
    },

    hide: function hide() {
        this.node.enabled = false;
        this.node.active = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();