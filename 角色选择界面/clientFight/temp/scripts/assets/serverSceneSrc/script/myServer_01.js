"use strict";
cc._RFpush(module, '54cecJ6yjtD776aj0IoRUX1', 'myServer_01');
// serverSceneSrc\script\myServer_01.js

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
    onLoad: function onLoad() {
        this.node.on('mouseup', function () {
            cc.director.loadScene('heroChooseScene');
        });
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();