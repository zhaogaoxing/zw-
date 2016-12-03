var pos = cc.Enum({
    earth: 0,
    water: 1,
    fire: 2,
    wind: 3
});

var dir = cc.Enum({
    plus: 0,
    minus: 1
});
cc.Class({
    'extends': cc.Component,

    properties: {
        curPos: {
            'default': pos.earth,
            type: pos
        },
        curDir: {
            'default': dir.plus,
            type: dir
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    _ItemPlus: function _ItemPlus(key) {
        console.log('plus前往myChildItemProgessbar:' + key);
        cc.find('Canvas/config/AttributePoint/' + key).getComponent('myChildItemProgessbar').plus();
    },

    _ItemMinus: function _ItemMinus(key) {
        console.log('minus前往myChildItemProgessbar:' + key);
        cc.find('Canvas/config/AttributePoint/' + key).getComponent('myChildItemProgessbar').minus();
    },

    changeStatus: function changeStatus() {
        console.log('进入+号按钮: ' + this.curDir);
        switch (this.curDir) {
            case dir.plus:
                cc.find('Canvas/config/AttributePoint').getComponent("myAttributeStateLabel").minus();
                switch (this.curPos) {
                    case pos.earth:
                        this._ItemPlus('earth');break;
                    case pos.water:
                        this._ItemPlus('water');break;
                    case pos.fire:
                        this._ItemPlus('fire');break;
                    case pos.wind:
                        this._ItemPlus('wind');break;
                }
                break;
            case dir.minus:
                cc.find('Canvas/config/AttributePoint').getComponent("myAttributeStateLabel").plus();
                switch (this.curPos) {
                    case pos.earth:
                        this._ItemMinus('earth');break;
                    case pos.water:
                        this._ItemMinus('water');break;
                    case pos.fire:
                        this._ItemMinus('fire');break;
                    case pos.wind:
                        this._ItemMinus('wind');break;
                }
                break;
        }
    },

    show: function show() {
        this.node.active = true;
        this.node.enabled = true;
    },

    hide: function hide() {
        this.node.active = false;
        this.node.enabled = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});