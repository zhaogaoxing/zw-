var pos = cc.Enum({
    earth: 0,
    water: 1,
    fire: 2,
    wind: 3
});

cc.Class({
    'extends': cc.Component,

    properties: {
        curPos: {
            'default': pos.earth,
            type: pos
        },
        curLength: 0.0
    },

    // use this for initialization
    onLoad: function onLoad() {},

    _hidePlusBtn: function _hidePlusBtn(key) {
        cc.find('Canvas/config/AttributePoint/btnList/plusList/' + key).getComponent('myAttributeBtn').hide();
    },

    _showPlusBtn: function _showPlusBtn(key) {
        cc.find('Canvas/config/AttributePoint/btnList/plusList/' + key).getComponent('myAttributeBtn').show();
    },

    _hideMinusBtn: function _hideMinusBtn(key) {
        console.log('_hideMinusBtn');
        cc.find('Canvas/config/AttributePoint/btnList/minueList/' + key).getComponent('myAttributeBtn').hide();
    },

    _showMinusBtn: function _showMinusBtn(key) {
        cc.find('Canvas/config/AttributePoint/btnList/minueList/' + key).getComponent('myAttributeBtn').show();
    },

    hidePlusBtnHandler: function hidePlusBtnHandler() {
        switch (this.curPos) {
            case pos.earth:
                this._hidePlusBtn('earthPlusBtn');break;
            case pos.water:
                this._hidePlusBtn('waterPlusBtn');break;
            case pos.fire:
                this._hidePlusBtn('firePlusBtn');break;
            case pos.wind:
                this._hidePlusBtn('windPlusBtn');break;
        }
    },

    hideMinusBtnHandler: function hideMinusBtnHandler() {
        switch (this.curPos) {
            case pos.earth:
                this._hideMinusBtn('earthMinusBtn');break;
            case pos.water:
                this._hideMinusBtn('waterMinusBtn');break;
            case pos.fire:
                this._hideMinusBtn('fireMinusBtn');break;
            case pos.wind:
                this._hideMinusBtn('windMinusBtn');break;
        }
    },

    showMinusBtnHandler: function showMinusBtnHandler() {
        console.log('showMinusBtn');
        switch (this.curPos) {
            case pos.earth:
                this._showMinusBtn('earthMinusBtn');break;
            case pos.water:
                this._showMinusBtn('waterMinusBtn');break;
            case pos.fire:
                this._showMinusBtn('fireMinusBtn');break;
            case pos.wind:
                this._showMinusBtn('windMinusBtn');break;
        }
    },

    showPlusBtnHandler: function showPlusBtnHandler() {
        switch (this.curPos) {
            case pos.earth:
                this._showPlusBtn('earthPlusBtn');break;
            case pos.water:
                this._showPlusBtn('waterPlusBtn');break;
            case pos.fire:
                this._showPlusBtn('firePlusBtn');break;
            case pos.wind:
                this._showPlusBtn('windPlusBtn');break;
        }
    },

    plus: function plus() {
        this.showMinusBtnHandler();
        console.log('ProgressBar' + this.curPos + ' plus');
        this.curLength++;
        this.getComponent(cc.ProgressBar).progress = this.curLength / 10;
        if (this.getComponent(cc.ProgressBar).progress == 1) this.hidePlusBtnHandler();else this.showPlusBtnHandler();
    },

    minus: function minus() {
        this.showPlusBtnHandler();
        console.log('ProgressBar' + this.curPos + ' minus');
        this.curLength--;
        console.log(this.curLength);
        console.log(this.curLength / 10);
        this.getComponent(cc.ProgressBar).progress = this.curLength / 10;
        console.log('progress: ' + this.getComponent(cc.ProgressBar).progress);
        if (this.getComponent(cc.ProgressBar).progress < 0.1) {
            this.getComponent(cc.ProgressBar).progress = 0;
            this.hideMinusBtnHandler();
        } else this.showMinusBtnHandler();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});