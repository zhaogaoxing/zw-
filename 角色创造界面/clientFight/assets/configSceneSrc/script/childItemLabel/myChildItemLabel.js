var pos = cc.Enum({
    vital : 0,
    strength: 1,
    tough: 2,
    quick: 3,
    magic: 4,
});

cc.Class({
    extends: cc.Component,

    properties: {
        curPos: {
            default: pos.vital,
            type: pos,
        },
    },

    // use this for initialization
    onLoad: function () {
        
    },
    
    _hidePlusBtn: function(key){
         cc.find('Canvas/config/basePoint/btnList/plusList/'+key).getComponent('myBaseStateBtn').hide();   
    },
    
    _showPlusBtn: function(key){
        cc.find('Canvas/config/basePoint/btnList/plusList/'+key).getComponent('myBaseStateBtn').show();   
    },
    
    _hideMinusBtn: function(key){
        console.log('_hideMinusBtn');
         cc.find('Canvas/config/basePoint/btnList/minueList/'+key).getComponent('myBaseStateBtn').hide();   
    },
    
    _showMinusBtn: function(key){
        cc.find('Canvas/config/basePoint/btnList/minueList/'+key).getComponent('myBaseStateBtn').show();   
    },
    
    hidePlusBtnHandler: function(){
        switch(this.curPos){
            case pos.vital: this._hidePlusBtn('vitalPlusBtn');break;
            case pos.strength: this._hidePlusBtn('strengthPlusBtn');break;
            case pos.tough: this._hidePlusBtn('toughPlusBtn');break;
            case pos.quick: this._hidePlusBtn('quickPlusBtn');break;
            case pos.magic: this._hidePlusBtn('magicPlusBtn');break;
        }
    },
    
    hideMinusBtnHandler: function(){
        switch(this.curPos){
            case pos.vital: this._hideMinusBtn('vitalMinusBtn');break;
            case pos.strength: this._hideMinusBtn('strengthMinusBtn');break;
            case pos.tough: this._hideMinusBtn('toughMinusBtn');break;
            case pos.quick: this._hideMinusBtn('quickMinusBtn');break;
            case pos.magic: this._hideMinusBtn('magicMinusBtn');break;
        }
    },
    
    showMinusBtnHandler: function(){
        console.log('showMinusBtn');
        switch(this.curPos){
            case pos.vital: this._showMinusBtn('vitalMinusBtn');break;
            case pos.strength: this._showMinusBtn('strengthMinusBtn');break;
            case pos.tough: this._showMinusBtn('toughMinusBtn');break;
            case pos.quick: this._showMinusBtn('quickMinusBtn');break;
            case pos.magic: this._showMinusBtn('magicMinusBtn');break;
        }
    },
    
    showPlusBtnHandler: function(){
        switch(this.curPos){
            case pos.vital: this._showPlusBtn('vitalPlusBtn');break;
            case pos.strength: this._showPlusBtn('strengthPlusBtn');break;
            case pos.tough: this._showPlusBtn('toughPlusBtn');break;
            case pos.quick: this._showPlusBtn('quickPlusBtn');break;
            case pos.magic: this._showPlusBtn('magicPlusBtn');break;
        }
    },
    
    
    
    plus: function(){
        this.showMinusBtnHandler();
        console.log('label' + this.curPos + ' plus');
        this.getComponent(cc.Label).string++;
        if(this.getComponent(cc.Label).string >= 15)
            this.hidePlusBtnHandler();
        else
            this.showPlusBtnHandler();
    },
    
    
    minus: function(){
        this.showPlusBtnHandler();
        console.log('label' + this.curPos + ' minus');
        this.getComponent(cc.Label).string--;
        if(this.getComponent(cc.Label).string > 0)
            this.showMinusBtnHandler();
        else
            this.hideMinusBtnHandler();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
