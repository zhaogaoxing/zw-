cc.Class({
    extends: cc.Component,

    properties: {
        curFrameIndex: 0,
    },

    // use this for initialization
    onLoad: function () {
        
    },

    show : function(frameIndex){
        var anim = this.getComponent(cc.Animation);
        console.log('角色选择界面第'+(frameIndex+1)+"角色动画初始化中");
        this.curFrameIndex = frameIndex;
        console.log(this.curFrameIndex);
        //anim.stop();
        anim.play('walk_'+frameIndex+'_5');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
