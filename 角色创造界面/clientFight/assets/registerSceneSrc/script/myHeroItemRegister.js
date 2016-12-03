cc.Class({
    extends: cc.Component,

    properties: {
        frameIndex: 0,
    },

    // use this for initialization
    onLoad: function () {
        this.node.on('mouseup',function(){
            cc.find('Canvas/register/animNode').getComponent('myHeroTexture').show(this.frameIndex);
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
