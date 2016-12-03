var pos = cc.Enum({
    vital : 0,
    strength: 1,
    tough: 2,
    quick: 3,
    magic: 4,
});

var dir = cc.Enum({
    plus: 0,
    minus: 1,
});
cc.Class({
    extends: cc.Component,

    properties: {
        curPos: {
            default: pos.vital,
            type: pos,
        },
        curDir: {
            default: dir.plus,
            type: dir,
        },
    },

    // use this for initialization
    onLoad: function () {
        
    },
    
    _ItemPlus : function(key){
        console.log('plus前往itemLabel:' + key);
        cc.find('Canvas/config/basePoint/'+key).getComponent('myChildItemLabel').plus();
    },
    
    _ItemMinus: function(key){
        console.log('minus前往itemLabel:' + key);
        cc.find('Canvas/config/basePoint/'+key).getComponent('myChildItemLabel').minus();
    },
    
    changeStatus: function(){
        console.log('进入+号按钮: ' + this.curDir);
        switch(this.curDir){
            case dir.plus:
                            cc.find('Canvas/config/basePoint').getComponent("myMainStateLabel").minus();
                            switch(this.curPos){
                                case pos.vital:this._ItemPlus('vital');break;
                                case pos.strength:this._ItemPlus('strength');break;
                                case pos.tough:this._ItemPlus('tough');break;
                                case pos.quick:this._ItemPlus('quick');break;
                                case pos.magic:this._ItemPlus('magic');break;
                            }
            break;
            case dir.minus:
                             cc.find('Canvas/config/basePoint').getComponent("myMainStateLabel").plus();
                            switch(this.curPos){
                                case pos.vital:this._ItemMinus('vital');break;
                                case pos.strength:this._ItemMinus('strength');break;
                                case pos.tough:this._ItemMinus('tough');break;
                                case pos.quick:this._ItemMinus('quick');break;
                                case pos.magic:this._ItemMinus('magic');break;
                            }
            break;
        }
    },
    
    show: function(){
        this.node.active = true;
        this.node.enabled = true;
    },
    
    hide: function(){
        this.node.active = false;
        this.node.enabled = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
