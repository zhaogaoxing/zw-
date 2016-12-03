"use strict";
cc._RFpush(module, 'a1aebiF/6hCCJkjRlaW1FU4', 'mySocketIO');
// loginSceneSrc\script\login\mySocketIO.js

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
        var self = this;
        if (cc.sys.isNative) {
            window.io = SocketIO;
        } else {
            window.io = require('socket.io');
        }
        window.socket = io('http://localhost:3000');
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();