cc.Class({
    extends: cc.Component,

    properties: {
        // msg: {
        //     default: null,
        //     type: cc.Label,
        // }
    },

    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
        this.msg = this.node.getChildByName('msg').getComponent(cc.Label);
        console.log(this.msg.string);
    },

    preShow: function(msg){
        this.msg.string = msg;
        this.node.active = true;
        this.getComponent(cc.Animation).play('preShow');
    },
    
    preAutoHide: function(msg){
        this.msg.string = msg;
        this.node.active = true;
        this.getComponent(cc.Animation).play('preAutoHide');
    },
    
    postShow: function(){
        this.node.active = false;
    },
    
    // update: function (dt) {

    // },
});
