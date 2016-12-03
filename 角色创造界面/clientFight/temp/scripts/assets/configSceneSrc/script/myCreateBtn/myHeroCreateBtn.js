"use strict";
cc._RFpush(module, '8972e7pKTFJ3q16eYdwoi6J', 'myHeroCreateBtn');
// configSceneSrc\script\myCreateBtn\myHeroCreateBtn.js

cc.Class({
    'extends': cc.Component,

    properties: {
        heroName: {
            'default': null,
            type: cc.Label
        },
        headTexture: {
            'default': null,
            type: cc.Node
        },
        vital: {
            'default': null,
            type: cc.Label
        },
        strength: {
            'default': null,
            type: cc.Label
        },
        tough: {
            'default': null,
            type: cc.Label
        },
        quick: {
            'default': null,
            type: cc.Label
        },
        magic: {
            'default': null,
            type: cc.Label
        },
        earth: {
            'default': null,
            type: cc.Node
        },
        water: {
            'default': null,
            type: cc.Node
        },
        fire: {
            'default': null,
            type: cc.Node
        },
        wind: {
            'default': null,
            type: cc.Node
        }

    },

    // use this for initialization
    onLoad: function onLoad() {},

    toCreateHero: function toCreateHero() {
        console.log(this.heroName.string);
        console.log(this.headTexture.getComponent('myHeadAtlas').realTexture);
        console.log(this.vital.string);
        console.log(this.strength.string);
        console.log(this.tough.string);
        console.log(this.quick.string);
        console.log(this.magic.string);
        console.log(this.earth.getComponent('myChildItemProgessbar').curLength);
        console.log(this.water.getComponent('myChildItemProgessbar').curLength);
        console.log(this.fire.getComponent('myChildItemProgessbar').curLength);
        console.log(this.wind.getComponent('myChildItemProgessbar').curLength);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();