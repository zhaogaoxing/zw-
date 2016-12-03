"use strict";
cc._RFpush(module, '67b83D16cdIhpZ2BBJLdNr6', 'myMsgBox');
// msgBoxSrc\script\myMsgBox.js

cc.Class({
    'extends': cc.Component,

    properties: {
        // msg: {
        //     default: null,
        //     type: cc.Label,
        // }
    },

    onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
        this.msg = this.node.getChildByName('msg').getComponent(cc.Label);
        console.log(this.msg.string);
    },

    preShow: function preShow(msg) {
        this.msg.string = msg;
        this.node.active = true;
        this.getComponent(cc.Animation).play('preShow');
    },

    preAutoHide: function preAutoHide(msg) {
        this.msg.string = msg;
        this.node.active = true;
        this.getComponent(cc.Animation).play('preAutoHide');
    },

    postShow: function postShow() {
        this.node.active = false;
    }

});
// update: function (dt) {

// },

cc._RFpop();