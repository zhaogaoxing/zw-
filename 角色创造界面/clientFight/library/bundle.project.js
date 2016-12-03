require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myAttributeBtn":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2a1474pAFdISaC6mqFzom+g', 'myAttributeBtn');
// configSceneSrc\script\AttributeBtn\myAttributeBtn.js

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

cc._RFpop();
},{}],"myAttributeStateLabel":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'dd95bUsXi5D3pg5Nq8ABXhK', 'myAttributeStateLabel');
// configSceneSrc\script\AttributeStateLabel\myAttributeStateLabel.js

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
    onLoad: function onLoad() {},

    plus: function plus() {
        this.getComponent(cc.Label).string++;
        console.log("this.getComponent(cc.Label).string!=0: " + (this.getComponent(cc.Label).string != 0));
        if (this.getComponent(cc.Label).string != 0) {
            cc.find('Canvas/config/AttributePoint/btnList/plusList').getComponent('myBtnList').show();
        }
    },

    minus: function minus() {
        this.getComponent(cc.Label).string--;
        console.log("this.getComponent(cc.Label).string<=0: " + (this.getComponent(cc.Label).string <= 0));
        if (this.getComponent(cc.Label).string <= 0) {
            cc.find('Canvas/config/AttributePoint/btnList/plusList').getComponent('myBtnList').hide();
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myBaseStateBtn":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4eb28Pj0oJBtbcsBUvbkPLL', 'myBaseStateBtn');
// configSceneSrc\script\BaseStatusBtn\myBaseStateBtn.js

var pos = cc.Enum({
    vital: 0,
    strength: 1,
    tough: 2,
    quick: 3,
    magic: 4
});

var dir = cc.Enum({
    plus: 0,
    minus: 1
});
cc.Class({
    'extends': cc.Component,

    properties: {
        curPos: {
            'default': pos.vital,
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
        console.log('plus前往itemLabel:' + key);
        cc.find('Canvas/config/basePoint/' + key).getComponent('myChildItemLabel').plus();
    },

    _ItemMinus: function _ItemMinus(key) {
        console.log('minus前往itemLabel:' + key);
        cc.find('Canvas/config/basePoint/' + key).getComponent('myChildItemLabel').minus();
    },

    changeStatus: function changeStatus() {
        console.log('进入+号按钮: ' + this.curDir);
        switch (this.curDir) {
            case dir.plus:
                cc.find('Canvas/config/basePoint').getComponent("myMainStateLabel").minus();
                switch (this.curPos) {
                    case pos.vital:
                        this._ItemPlus('vital');break;
                    case pos.strength:
                        this._ItemPlus('strength');break;
                    case pos.tough:
                        this._ItemPlus('tough');break;
                    case pos.quick:
                        this._ItemPlus('quick');break;
                    case pos.magic:
                        this._ItemPlus('magic');break;
                }
                break;
            case dir.minus:
                cc.find('Canvas/config/basePoint').getComponent("myMainStateLabel").plus();
                switch (this.curPos) {
                    case pos.vital:
                        this._ItemMinus('vital');break;
                    case pos.strength:
                        this._ItemMinus('strength');break;
                    case pos.tough:
                        this._ItemMinus('tough');break;
                    case pos.quick:
                        this._ItemMinus('quick');break;
                    case pos.magic:
                        this._ItemMinus('magic');break;
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

cc._RFpop();
},{}],"myBtnList":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b961ap1RoNFE5ZuJd/THy4F', 'myBtnList');
// configSceneSrc\script\BtnList\myBtnList.js

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
    onLoad: function onLoad() {},

    show: function show() {
        console.log('totalShow');
        this.node.active = true;
        this.node.enabled = true;
    },

    hide: function hide() {
        console.log('totalHide');
        this.node.active = false;
        this.node.enabled = false;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myChildItemLabel":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'be183mLKzJOaZjRce6kk5N3', 'myChildItemLabel');
// configSceneSrc\script\childItemLabel\myChildItemLabel.js

var pos = cc.Enum({
    vital: 0,
    strength: 1,
    tough: 2,
    quick: 3,
    magic: 4
});

cc.Class({
    'extends': cc.Component,

    properties: {
        curPos: {
            'default': pos.vital,
            type: pos
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    _hidePlusBtn: function _hidePlusBtn(key) {
        cc.find('Canvas/config/basePoint/btnList/plusList/' + key).getComponent('myBaseStateBtn').hide();
    },

    _showPlusBtn: function _showPlusBtn(key) {
        cc.find('Canvas/config/basePoint/btnList/plusList/' + key).getComponent('myBaseStateBtn').show();
    },

    _hideMinusBtn: function _hideMinusBtn(key) {
        console.log('_hideMinusBtn');
        cc.find('Canvas/config/basePoint/btnList/minueList/' + key).getComponent('myBaseStateBtn').hide();
    },

    _showMinusBtn: function _showMinusBtn(key) {
        cc.find('Canvas/config/basePoint/btnList/minueList/' + key).getComponent('myBaseStateBtn').show();
    },

    hidePlusBtnHandler: function hidePlusBtnHandler() {
        switch (this.curPos) {
            case pos.vital:
                this._hidePlusBtn('vitalPlusBtn');break;
            case pos.strength:
                this._hidePlusBtn('strengthPlusBtn');break;
            case pos.tough:
                this._hidePlusBtn('toughPlusBtn');break;
            case pos.quick:
                this._hidePlusBtn('quickPlusBtn');break;
            case pos.magic:
                this._hidePlusBtn('magicPlusBtn');break;
        }
    },

    hideMinusBtnHandler: function hideMinusBtnHandler() {
        switch (this.curPos) {
            case pos.vital:
                this._hideMinusBtn('vitalMinusBtn');break;
            case pos.strength:
                this._hideMinusBtn('strengthMinusBtn');break;
            case pos.tough:
                this._hideMinusBtn('toughMinusBtn');break;
            case pos.quick:
                this._hideMinusBtn('quickMinusBtn');break;
            case pos.magic:
                this._hideMinusBtn('magicMinusBtn');break;
        }
    },

    showMinusBtnHandler: function showMinusBtnHandler() {
        console.log('showMinusBtn');
        switch (this.curPos) {
            case pos.vital:
                this._showMinusBtn('vitalMinusBtn');break;
            case pos.strength:
                this._showMinusBtn('strengthMinusBtn');break;
            case pos.tough:
                this._showMinusBtn('toughMinusBtn');break;
            case pos.quick:
                this._showMinusBtn('quickMinusBtn');break;
            case pos.magic:
                this._showMinusBtn('magicMinusBtn');break;
        }
    },

    showPlusBtnHandler: function showPlusBtnHandler() {
        switch (this.curPos) {
            case pos.vital:
                this._showPlusBtn('vitalPlusBtn');break;
            case pos.strength:
                this._showPlusBtn('strengthPlusBtn');break;
            case pos.tough:
                this._showPlusBtn('toughPlusBtn');break;
            case pos.quick:
                this._showPlusBtn('quickPlusBtn');break;
            case pos.magic:
                this._showPlusBtn('magicPlusBtn');break;
        }
    },

    plus: function plus() {
        this.showMinusBtnHandler();
        console.log('label' + this.curPos + ' plus');
        this.getComponent(cc.Label).string++;
        if (this.getComponent(cc.Label).string >= 15) this.hidePlusBtnHandler();else this.showPlusBtnHandler();
    },

    minus: function minus() {
        this.showPlusBtnHandler();
        console.log('label' + this.curPos + ' minus');
        this.getComponent(cc.Label).string--;
        if (this.getComponent(cc.Label).string > 0) this.showMinusBtnHandler();else this.hideMinusBtnHandler();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myChildItemProgessbar":[function(require,module,exports){
"use strict";
cc._RFpush(module, '717f5m4WVNBy6WHpYVxh/TC', 'myChildItemProgessbar');
// configSceneSrc\script\childItemProgressbar\myChildItemProgessbar.js

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

cc._RFpop();
},{}],"myCreateBtn":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a95b0Y20flH5q06Hjmh00f+', 'myCreateBtn');
// heroChooseSceneSrc\script\createBtn\myCreateBtn.js

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
    onLoad: function onLoad() {},

    toRegisterScene: function toRegisterScene() {
        cc.director.loadScene('registerScene');
    },

    hide: function hide() {
        this.node.enabled = false;
        this.node.active = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myHeadAtlas":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6881eq5kuhAA6HMJn16Gycr', 'myHeadAtlas');
// configSceneSrc\script\headTexture\myHeadAtlas.js

cc.Class({
    'extends': cc.Component,

    properties: {
        heroTexture: {
            'default': 0,
            notify: function notify() {
                this.changeHeadTexture();
            }
        },
        eye: {
            'default': 0,
            notify: function notify() {
                this.changeHeadTexture();
            }
        },
        mouse: {
            'default': 0,
            notify: function notify() {
                this.changeHeadTexture();
            }
        },

        realTexture: {
            'default': '000',
            type: String
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    start: function start() {
        var self = this;
        socket.on('getHeroTexture', function (heroTexture) {
            self.heroTexture = heroTexture;
        });
        socket.emit('getHeroTexture');
    },

    changeHeadTexture: function changeHeadTexture() {

        if (this.eye < 0) this.eye = 4;else if (this.eye > 4) this.eye = 0;
        if (this.mouse < 0) this.mouse = 4;else if (this.mouse > 4) this.mouse = 0;

        this.realTexture = ''.concat(this.heroTexture, this.eye, this.mouse);

        var realUrl = cc.url.raw("headTextureSrc/raw/girl".concat(this.heroTexture, this.eye, this.mouse, ".png"));
        console.log("headTextureSrc/raw/girl".concat(this.heroTexture, this.eye, this.mouse, ".png"));

        var texture = cc.textureCache.addImage(realUrl);

        console.log(this.getComponent(cc.Sprite));

        this.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myHeadTexture":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fec48jYwCtLWqBgDLyO1PYt', 'myHeadTexture');
// heroChooseSceneSrc\script\HeadTexture\myHeadTexture.js

cc.Class({
    'extends': cc.Component,

    properties: {
        headTextures: {
            'default': [],
            type: [cc.SpriteFrame]
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    show: function show(frameIndex) {
        console.log('第' + (frameIndex + 1) + '个头像初始化中');
        console.log(this.getComponent(cc.Sprite));
        console.log(this.headTextures);
        this.getComponent(cc.Sprite).spriteFrame = this.headTextures[frameIndex];
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myHeroCreateBtn":[function(require,module,exports){
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
},{}],"myHeroInfoIO":[function(require,module,exports){
"use strict";
cc._RFpush(module, '45caePXuFRBFZKxU1qsJKaH', 'myHeroInfoIO');
// heroChooseSceneSrc\script\HeroInfoIO\myHeroInfoIO.js

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

    show: function show(heroInfo) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = heroInfo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var line = _step.value;

                for (var item in line) {
                    console.log(item + ' ' + line[item]);
                }
            } // for(var item of this.children){
            //     var subChild = item.getChildren();
            //     for(var item2 of subChild){
            //         console.log(item2);
            //     }
            // }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        for (var index = 0; index < heroInfo.length; index++) {
            var heroInfoItem = heroInfo[index];
            var childInfoItem = this.children[index];
            //console.log(childInfoItem['heroName_0'+(index+1)]);

            childInfoItem.getChildByName('heroName_0' + (index + 1)).getComponent(cc.Label).string = heroInfoItem['heroName'];
            childInfoItem.getChildByName('heroLevel_0' + (index + 1)).getComponent(cc.Label).string = heroInfoItem['heroLevel'];
            childInfoItem.getChildByName('profession_0' + (index + 1)).getComponent(cc.Label).string = heroInfoItem['profession'];
            childInfoItem.getChildByName('loginTimes_0' + (index + 1)).getComponent(cc.Label).string = heroInfoItem['loginTimes'];

            childInfoItem.getChildByName('heroTexture_0' + (index + 1)).getComponent('myHeroTexture').show(heroInfoItem['heroTexture']);
            childInfoItem.getChildByName('headTexture_0' + (index + 1)).getComponent('myHeadTexture').show(heroInfoItem['headTexture']);

            childInfoItem.getChildByName('createBtn_0' + (index + 1)).getComponent('myCreateBtn').hide();
        }
    },

    init: function init() {
        this.children = this.node.getChildren();
    },

    // use this for initialization
    onLoad: function onLoad() {

        this.init();

        var self = this;

        window.socket.on('heroChoose', function (heroInfo) {
            if (heroInfo) {
                console.log(heroInfo);
            } else {
                console.log('none');
            }
            self.show(heroInfo);
        });

        window.socket.emit('heroChoose');
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"myHeroItemRegister":[function(require,module,exports){
"use strict";
cc._RFpush(module, '25466cs0BpIXKImB8rSIWnS', 'myHeroItemRegister');
// registerSceneSrc\script\myHeroItemRegister.js

cc.Class({
    'extends': cc.Component,

    properties: {
        frameIndex: 0
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.on('mouseup', function () {
            cc.find('Canvas/register/animNode').getComponent('myHeroTexture').show(this.frameIndex);
        }, this);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"myHeroTexture":[function(require,module,exports){
"use strict";
cc._RFpush(module, '7d5956psSdLmJQKsr6YeInG', 'myHeroTexture');
// heroChooseSceneSrc\script\HeroTexture\myHeroTexture.js

cc.Class({
    'extends': cc.Component,

    properties: {
        curFrameIndex: 0
    },

    // use this for initialization
    onLoad: function onLoad() {},

    show: function show(frameIndex) {
        var anim = this.getComponent(cc.Animation);
        console.log('角色选择界面第' + (frameIndex + 1) + "角色动画初始化中");
        this.curFrameIndex = frameIndex;
        console.log(this.curFrameIndex);
        //anim.stop();
        anim.play('walk_' + frameIndex + '_5');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myLogin":[function(require,module,exports){
"use strict";
cc._RFpush(module, '35f484N+X1JsaNEWJArOLBG', 'myLogin');
// loginSceneSrc\script\login\myLogin.js

cc.Class({
    'extends': cc.Component,

    properties: {
        // serverFeedback : {
        //     default : null,
        //     type: cc.Label,
        // },

        msgBox: {
            'default': null,
            type: cc.Node
        },

        userNameInput: {
            'default': null,
            type: cc.Label
        },
        passwordInput: {
            'default': null,
            type: cc.Label
        },

        errorText: '用户名或密码错误',
        emptyText: '用户名或密码不能为空'
    },

    isEmpty: function isEmpty(userName, password) {

        console.log(userName);
        console.log(password);

        if (userName == '' || password == '') return true;
        if (userName[0] == '请') return true;
        return false;
    },

    getUserName: function getUserName() {
        return this.userNameInput.string;
    },

    getPassword: function getPassword() {
        return this.passwordInput.getComponent('myPasswordInput').passwordText;
    },

    login: function login() {

        if (this.isEmpty(this.getUserName(), this.getPassword())) {
            this.msgBoxHandler.preAutoHide(this.emptyText);
            //this.serverFeedback.string = this.emptyText;
            return;
        } else {

            socket.emit('login', {
                userName: this.getUserName(),
                password: this.getPassword()
            });
        }
    },

    // use this for initialization
    onLoad: function onLoad() {

        this.msgBoxHandler = this.msgBox.getComponent('myMsgBox');

        var self = this;

        socket.on('login', function (success) {
            if (success) {

                console.log(cc);

                //self.serverFeedback.string = '';
                cc.director.loadScene('serverScene');
            } else {
                //self.serverFeedback.string = self.errorText;
                self.msgBoxHandler.preAutoHide(self.errorText);
            }
        });
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"myMainStateLabel":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8ac3dRKH+lKSoR8AnEloVkv', 'myMainStateLabel');
// configSceneSrc\script\mainStatusBtn\myMainStateLabel.js

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
    onLoad: function onLoad() {},

    plus: function plus() {
        this.getComponent(cc.Label).string++;
        console.log("this.getComponent(cc.Label).string!=0: " + (this.getComponent(cc.Label).string != 0));
        if (this.getComponent(cc.Label).string != 0) {
            cc.find('Canvas/config/basePoint/btnList/plusList').getComponent('myBtnList').show();
        }
    },

    minus: function minus() {
        this.getComponent(cc.Label).string--;
        console.log("this.getComponent(cc.Label).string<=0: " + (this.getComponent(cc.Label).string <= 0));
        if (this.getComponent(cc.Label).string <= 0) {
            cc.find('Canvas/config/basePoint/btnList/plusList').getComponent('myBtnList').hide();
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myMsgBox":[function(require,module,exports){
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
},{}],"myNextBtn":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c86e0L/vnRKLawAlGMnLj5O', 'myNextBtn');
// registerSceneSrc\script\myNextBtn.js

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
    onLoad: function onLoad() {},

    toConfigScene: function toConfigScene() {
        var heroTexture = cc.find('Canvas/register/animNode').getComponent('myHeroTexture').curFrameIndex;

        console.log(cc.find('Canvas/register/animNode'));
        console.log(cc.find('Canvas/register/animNode').getComponent('myHeroTexture'));

        window.socket.emit('heroTexture', heroTexture);
        cc.director.loadScene('configScene');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myPasswordInput":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3b824A/M6VJ8qG7hPD5x2iz', 'myPasswordInput');
// loginSceneSrc\script\EditBox\myPasswordInput.js

cc.Class({
    'extends': cc.Component,

    properties: {
        text: '请输入密码',
        // passwordInput:{
        //   default: null,
        //   type : cc.Label,
        // },

        passwordText: '',

        focus: {
            'default': false,
            type: Boolean
        }

    },

    delPlaceHolder: function delPlaceHolder() {
        if (this.passwordInput.string[0] == '请') {
            //这种方式请不要模仿= =我贪图方便
            this.passwordInput.string = ''; //开头为请就意味着没有输入了 那么我们清空吧
        }
    },

    resumePlaceHolder: function resumePlaceHolder() {
        if (this.passwordInput.string.length == 0) {
            //没有输入 
            this.passwordInput.string = this.text; //我们就将 '请输入用户名' 回显
        }
    },

    isContain: function isContain(event) {
        //将鼠标点击的坐标转化为输入框的坐标(输入框左下角为(0,0))
        var point = this.node.convertToNodeSpace(event.getLocation());
        //如果x或y 其中一个小于0 那就点在左下角的外面了
        if (point.x < 0 || point.y < 0) return false;
        //获取输入框的尺寸 (rect.width,rect.height)
        var rect = this.node.getBoundingBox();
        //如果x或y 其中一个大于输入框的宽或高 那就点在右上角外面了
        if (point.x > rect.width || point.y > rect.height) return false;
        return true; //排除上述情况就点在输入框上了
    },

    // use this for initialization
    onLoad: function onLoad() {

        this.passwordInput = this.getComponent(cc.Label);
        console.log(this.passwordText);

        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE, //这个听鼠标的点击 看有没被选中
            onMouseDown: function onMouseDown(event) {
                if (self.focus = self.isContain(event)) {
                    self.delPlaceHolder(); //清空 '请输入用户名' 判断在函数里完成
                } else {
                        self.resumePlaceHolder(); //恢复 '请输入用户名' 判断在函数里完成
                    }
            }
        }, self.node);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD, //这个听输入的是什么
            onKeyPressed: function onKeyPressed(keyCode, event) {
                if (!self.focus) return; //如果该输入框没有被选中 就不管了
                if (keyCode == cc.KEY.backspace) {
                    //如果输进来的是删除键
                    self.passwordText = self.passwordText.slice(0, -1); //删真正的密码
                    self.passwordInput.string = self.passwordInput.string.slice(0, -1); //删 * 号
                    return; // ↑ slice(开始位置,结束位置) 负号表示从后往前数
                }
                self.passwordText += String.fromCharCode(keyCode); //存真正的密码
                self.passwordInput.string += '*'; //回显 * 号
            }
        }, self.node);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"myServer_01":[function(require,module,exports){
"use strict";
cc._RFpush(module, '54cecJ6yjtD776aj0IoRUX1', 'myServer_01');
// serverSceneSrc\script\myServer_01.js

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
        this.node.on('mouseup', function () {
            cc.director.loadScene('heroChooseScene');
        });
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"mySocketIO":[function(require,module,exports){
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
},{"socket.io":"socket.io"}],"myStateBtn":[function(require,module,exports){
"use strict";
cc._RFpush(module, '86a80OG17tGpb9ashrN3f1R', 'myStateBtn');
// configSceneSrc\script\EyeMouseBtn\myStateBtn.js

var dir = cc.Enum({
    left: 0,
    right: 1
});
var pos = cc.Enum({
    eye: 0,
    mouse: 1
});
cc.Class({
    'extends': cc.Component,

    properties: {
        startState: 0,
        endState: 4,
        curState: 0,
        dirState: {
            'default': dir.left,
            type: dir
        },
        posState: {
            'default': pos.eye,
            type: pos
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    changeState: function changeState() {
        var des = {};

        console.log('here');

        switch (this.dirState) {
            case dir.left:
                switch (this.posState) {
                    case pos.eye:
                        cc.find('Canvas/config/headTexture').getComponent('myHeadAtlas').eye--;break;
                    case pos.mouse:
                        cc.find('Canvas/config/headTexture').getComponent('myHeadAtlas').mouse--;break;
                }
                break;
            case dir.right:
                switch (this.posState) {
                    case pos.eye:
                        cc.find('Canvas/config/headTexture').getComponent('myHeadAtlas').eye++;break;
                    case pos.mouse:
                        cc.find('Canvas/config/headTexture').getComponent('myHeadAtlas').mouse++;break;
                }
                break;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"myUserNameInput":[function(require,module,exports){
"use strict";
cc._RFpush(module, '18893iJ79NAVJyqYHJJF2l8', 'myUserNameInput');
// loginSceneSrc\script\EditBox\myUserNameInput.js

cc.Class({
    'extends': cc.Component,

    properties: {
        text: '请输入用户名',
        // userNameInput:{
        //   default: null,
        //   type : cc.Label,
        // },

        focus: false
    },

    delPlaceHolder: function delPlaceHolder() {
        if (this.userNameInput.string[0] == '请') {
            //这种方式请不要模仿= =我贪图方便
            this.userNameInput.string = ''; //开头为请就意味着没有输入了 那么我们清空吧
        }
    },

    resumePlaceHolder: function resumePlaceHolder() {
        if (this.userNameInput.string.length == 0) {
            //没有输入 
            this.userNameInput.string = this.text; //我们就将 '请输入用户名' 回显
        }
    },

    isContain: function isContain(event) {
        //将鼠标点击的坐标转化为输入框的坐标(输入框左下角为(0,0))
        var point = this.node.convertToNodeSpace(event.getLocation());
        //如果x或y 其中一个小于0 那就点在左下角的外面了
        if (point.x < 0 || point.y < 0) return false;
        //获取输入框的尺寸 (rect.width,rect.height)
        var rect = this.node.getBoundingBox();
        //如果x或y 其中一个大于输入框的宽或高 那就点在右上角外面了
        if (point.x > rect.width || point.y > rect.height) return false;
        return true; //排除上述情况就点在输入框上了
    },

    // use this for initialization
    onLoad: function onLoad() {

        this.userNameInput = this.getComponent(cc.Label);

        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE, //这个听鼠标的点击 看有没被选中
            onMouseDown: function onMouseDown(event) {
                if (self.focus = self.isContain(event)) {
                    self.delPlaceHolder(); //清空 '请输入用户名' 判断在函数里完成
                } else {
                        self.resumePlaceHolder(); //恢复 '请输入用户名' 判断在函数里完成
                    }
            }
        }, self.node);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD, //这个听输入的是什么
            onKeyPressed: function onKeyPressed(keyCode, event) {
                if (!self.focus) return; //如果该输入框没有被选中 就不管了
                if (keyCode == cc.KEY.backspace) {
                    //如果输进来的是删除键
                    self.userNameInput.string = self.userNameInput.string.slice(0, -1); //那么我们就把最后一个删掉
                    return; // ↑ slice(开始位置,结束位置) 负号表示从后往前数
                }
                self.userNameInput.string += String.fromCharCode(keyCode); //如果你其他的输入我们就拼到输入框
            } }, //   ↑  这个是javascript内置对象 fromCharCode可以将ascii->字符
        self.node);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"socket.io":[function(require,module,exports){
(function (global){
"use strict";
cc._RFpush(module, '00453+cMohGlq4jcOPytI2D', 'socket.io');
// loginSceneSrc\script\login\socket.io.js

if (!cc.sys.isNative) {

  (function (f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = f();
    } else if (typeof define === "function" && define.amd) {
      define([], f);
    } else {
      var g;if (typeof window !== "undefined") {
        g = window;
      } else if (typeof global !== "undefined") {
        g = global;
      } else if (typeof self !== "undefined") {
        g = self;
      } else {
        g = this;
      }g.io = f();
    }
  })(function () {
    var define, module, exports;return (function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
          }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
            var n = t[o][1][e];return s(n ? n : e);
          }, l, l.exports, e, t, n, r);
        }return n[o].exports;
      }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
    })({ 1: [function (_dereq_, module, exports) {

        module.exports = _dereq_('./lib/');
      }, { "./lib/": 2 }], 2: [function (_dereq_, module, exports) {

        module.exports = _dereq_('./socket');

        /**
         * Exports parser
         *
         * @api public
         *
         */
        module.exports.parser = _dereq_('engine.io-parser');
      }, { "./socket": 3, "engine.io-parser": 19 }], 3: [function (_dereq_, module, exports) {
        (function (global) {
          /**
           * Module dependencies.
           */

          var transports = _dereq_('./transports');
          var Emitter = _dereq_('component-emitter');
          var debug = _dereq_('debug')('engine.io-client:socket');
          var index = _dereq_('indexof');
          var parser = _dereq_('engine.io-parser');
          var parseuri = _dereq_('parseuri');
          var parsejson = _dereq_('parsejson');
          var parseqs = _dereq_('parseqs');

          /**
           * Module exports.
           */

          module.exports = Socket;

          /**
           * Noop function.
           *
           * @api private
           */

          function noop() {}

          /**
           * Socket constructor.
           *
           * @param {String|Object} uri or options
           * @param {Object} options
           * @api public
           */

          function Socket(uri, opts) {
            if (!(this instanceof Socket)) return new Socket(uri, opts);

            opts = opts || {};

            if (uri && 'object' == typeof uri) {
              opts = uri;
              uri = null;
            }

            if (uri) {
              uri = parseuri(uri);
              opts.hostname = uri.host;
              opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
              opts.port = uri.port;
              if (uri.query) opts.query = uri.query;
            } else if (opts.host) {
              opts.hostname = parseuri(opts.host).host;
            }

            this.secure = null != opts.secure ? opts.secure : global.location && 'https:' == location.protocol;

            if (opts.hostname && !opts.port) {
              // if no port is specified manually, use the protocol default
              opts.port = this.secure ? '443' : '80';
            }

            this.agent = opts.agent || false;
            this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
            this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80);
            this.query = opts.query || {};
            if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
            this.upgrade = false !== opts.upgrade;
            this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
            this.forceJSONP = !!opts.forceJSONP;
            this.jsonp = false !== opts.jsonp;
            this.forceBase64 = !!opts.forceBase64;
            this.enablesXDR = !!opts.enablesXDR;
            this.timestampParam = opts.timestampParam || 't';
            this.timestampRequests = opts.timestampRequests;
            this.transports = opts.transports || ['polling', 'websocket'];
            this.readyState = '';
            this.writeBuffer = [];
            this.policyPort = opts.policyPort || 843;
            this.rememberUpgrade = opts.rememberUpgrade || false;
            this.binaryType = null;
            this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
            this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;

            if (true === this.perMessageDeflate) this.perMessageDeflate = {};
            if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
              this.perMessageDeflate.threshold = 1024;
            }

            // SSL options for Node.js client
            this.pfx = opts.pfx || null;
            this.key = opts.key || null;
            this.passphrase = opts.passphrase || null;
            this.cert = opts.cert || null;
            this.ca = opts.ca || null;
            this.ciphers = opts.ciphers || null;
            this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;

            // other options for Node.js client
            var freeGlobal = typeof global == 'object' && global;
            if (freeGlobal.global === freeGlobal) {
              if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
                this.extraHeaders = opts.extraHeaders;
              }
            }

            this.open();
          }

          Socket.priorWebsocketSuccess = false;

          /**
           * Mix in `Emitter`.
           */

          Emitter(Socket.prototype);

          /**
           * Protocol version.
           *
           * @api public
           */

          Socket.protocol = parser.protocol; // this is an int

          /**
           * Expose deps for legacy compatibility
           * and standalone browser access.
           */

          Socket.Socket = Socket;
          Socket.Transport = _dereq_('./transport');
          Socket.transports = _dereq_('./transports');
          Socket.parser = _dereq_('engine.io-parser');

          /**
           * Creates transport of the given type.
           *
           * @param {String} transport name
           * @return {Transport}
           * @api private
           */

          Socket.prototype.createTransport = function (name) {
            debug('creating transport "%s"', name);
            var query = clone(this.query);

            // append engine.io protocol identifier
            query.EIO = parser.protocol;

            // transport name
            query.transport = name;

            // session id if we already have one
            if (this.id) query.sid = this.id;

            var transport = new transports[name]({
              agent: this.agent,
              hostname: this.hostname,
              port: this.port,
              secure: this.secure,
              path: this.path,
              query: query,
              forceJSONP: this.forceJSONP,
              jsonp: this.jsonp,
              forceBase64: this.forceBase64,
              enablesXDR: this.enablesXDR,
              timestampRequests: this.timestampRequests,
              timestampParam: this.timestampParam,
              policyPort: this.policyPort,
              socket: this,
              pfx: this.pfx,
              key: this.key,
              passphrase: this.passphrase,
              cert: this.cert,
              ca: this.ca,
              ciphers: this.ciphers,
              rejectUnauthorized: this.rejectUnauthorized,
              perMessageDeflate: this.perMessageDeflate,
              extraHeaders: this.extraHeaders
            });

            return transport;
          };

          function clone(obj) {
            var o = {};
            for (var i in obj) {
              if (obj.hasOwnProperty(i)) {
                o[i] = obj[i];
              }
            }
            return o;
          }

          /**
           * Initializes transport to use and starts probe.
           *
           * @api private
           */
          Socket.prototype.open = function () {
            var transport;
            if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
              transport = 'websocket';
            } else if (0 === this.transports.length) {
              // Emit error on next tick so it can be listened to
              var self = this;
              setTimeout(function () {
                self.emit('error', 'No transports available');
              }, 0);
              return;
            } else {
              transport = this.transports[0];
            }
            this.readyState = 'opening';

            // Retry with the next transport if the transport is disabled (jsonp: false)
            try {
              transport = this.createTransport(transport);
            } catch (e) {
              this.transports.shift();
              this.open();
              return;
            }

            transport.open();
            this.setTransport(transport);
          };

          /**
           * Sets the current transport. Disables the existing one (if any).
           *
           * @api private
           */

          Socket.prototype.setTransport = function (transport) {
            debug('setting transport %s', transport.name);
            var self = this;

            if (this.transport) {
              debug('clearing existing transport %s', this.transport.name);
              this.transport.removeAllListeners();
            }

            // set up transport
            this.transport = transport;

            // set up transport listeners
            transport.on('drain', function () {
              self.onDrain();
            }).on('packet', function (packet) {
              self.onPacket(packet);
            }).on('error', function (e) {
              self.onError(e);
            }).on('close', function () {
              self.onClose('transport close');
            });
          };

          /**
           * Probes a transport.
           *
           * @param {String} transport name
           * @api private
           */

          Socket.prototype.probe = function (name) {
            debug('probing transport "%s"', name);
            var transport = this.createTransport(name, { probe: 1 }),
                failed = false,
                self = this;

            Socket.priorWebsocketSuccess = false;

            function onTransportOpen() {
              if (self.onlyBinaryUpgrades) {
                var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
                failed = failed || upgradeLosesBinary;
              }
              if (failed) return;

              debug('probe transport "%s" opened', name);
              transport.send([{ type: 'ping', data: 'probe' }]);
              transport.once('packet', function (msg) {
                if (failed) return;
                if ('pong' == msg.type && 'probe' == msg.data) {
                  debug('probe transport "%s" pong', name);
                  self.upgrading = true;
                  self.emit('upgrading', transport);
                  if (!transport) return;
                  Socket.priorWebsocketSuccess = 'websocket' == transport.name;

                  debug('pausing current transport "%s"', self.transport.name);
                  self.transport.pause(function () {
                    if (failed) return;
                    if ('closed' == self.readyState) return;
                    debug('changing transport and sending upgrade packet');

                    cleanup();

                    self.setTransport(transport);
                    transport.send([{ type: 'upgrade' }]);
                    self.emit('upgrade', transport);
                    transport = null;
                    self.upgrading = false;
                    self.flush();
                  });
                } else {
                  debug('probe transport "%s" failed', name);
                  var err = new Error('probe error');
                  err.transport = transport.name;
                  self.emit('upgradeError', err);
                }
              });
            }

            function freezeTransport() {
              if (failed) return;

              // Any callback called by transport should be ignored since now
              failed = true;

              cleanup();

              transport.close();
              transport = null;
            }

            //Handle any error that happens while probing
            function onerror(err) {
              var error = new Error('probe error: ' + err);
              error.transport = transport.name;

              freezeTransport();

              debug('probe transport "%s" failed because of error: %s', name, err);

              self.emit('upgradeError', error);
            }

            function onTransportClose() {
              onerror("transport closed");
            }

            //When the socket is closed while we're probing
            function onclose() {
              onerror("socket closed");
            }

            //When the socket is upgraded while we're probing
            function onupgrade(to) {
              if (transport && to.name != transport.name) {
                debug('"%s" works - aborting "%s"', to.name, transport.name);
                freezeTransport();
              }
            }

            //Remove all listeners on the transport and on self
            function cleanup() {
              transport.removeListener('open', onTransportOpen);
              transport.removeListener('error', onerror);
              transport.removeListener('close', onTransportClose);
              self.removeListener('close', onclose);
              self.removeListener('upgrading', onupgrade);
            }

            transport.once('open', onTransportOpen);
            transport.once('error', onerror);
            transport.once('close', onTransportClose);

            this.once('close', onclose);
            this.once('upgrading', onupgrade);

            transport.open();
          };

          /**
           * Called when connection is deemed open.
           *
           * @api public
           */

          Socket.prototype.onOpen = function () {
            debug('socket open');
            this.readyState = 'open';
            Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
            this.emit('open');
            this.flush();

            // we check for `readyState` in case an `open`
            // listener already closed the socket
            if ('open' == this.readyState && this.upgrade && this.transport.pause) {
              debug('starting upgrade probes');
              for (var i = 0, l = this.upgrades.length; i < l; i++) {
                this.probe(this.upgrades[i]);
              }
            }
          };

          /**
           * Handles a packet.
           *
           * @api private
           */

          Socket.prototype.onPacket = function (packet) {
            if ('opening' == this.readyState || 'open' == this.readyState) {
              debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

              this.emit('packet', packet);

              // Socket is live - any packet counts
              this.emit('heartbeat');

              switch (packet.type) {
                case 'open':
                  this.onHandshake(parsejson(packet.data));
                  break;

                case 'pong':
                  this.setPing();
                  this.emit('pong');
                  break;

                case 'error':
                  var err = new Error('server error');
                  err.code = packet.data;
                  this.onError(err);
                  break;

                case 'message':
                  this.emit('data', packet.data);
                  this.emit('message', packet.data);
                  break;
              }
            } else {
              debug('packet received with socket readyState "%s"', this.readyState);
            }
          };

          /**
           * Called upon handshake completion.
           *
           * @param {Object} handshake obj
           * @api private
           */

          Socket.prototype.onHandshake = function (data) {
            this.emit('handshake', data);
            this.id = data.sid;
            this.transport.query.sid = data.sid;
            this.upgrades = this.filterUpgrades(data.upgrades);
            this.pingInterval = data.pingInterval;
            this.pingTimeout = data.pingTimeout;
            this.onOpen();
            // In case open handler closes socket
            if ('closed' == this.readyState) return;
            this.setPing();

            // Prolong liveness of socket on heartbeat
            this.removeListener('heartbeat', this.onHeartbeat);
            this.on('heartbeat', this.onHeartbeat);
          };

          /**
           * Resets ping timeout.
           *
           * @api private
           */

          Socket.prototype.onHeartbeat = function (timeout) {
            clearTimeout(this.pingTimeoutTimer);
            var self = this;
            self.pingTimeoutTimer = setTimeout(function () {
              if ('closed' == self.readyState) return;
              self.onClose('ping timeout');
            }, timeout || self.pingInterval + self.pingTimeout);
          };

          /**
           * Pings server every `this.pingInterval` and expects response
           * within `this.pingTimeout` or closes connection.
           *
           * @api private
           */

          Socket.prototype.setPing = function () {
            var self = this;
            clearTimeout(self.pingIntervalTimer);
            self.pingIntervalTimer = setTimeout(function () {
              debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
              self.ping();
              self.onHeartbeat(self.pingTimeout);
            }, self.pingInterval);
          };

          /**
          * Sends a ping packet.
          *
          * @api private
          */

          Socket.prototype.ping = function () {
            var self = this;
            this.sendPacket('ping', function () {
              self.emit('ping');
            });
          };

          /**
           * Called on `drain` event
           *
           * @api private
           */

          Socket.prototype.onDrain = function () {
            this.writeBuffer.splice(0, this.prevBufferLen);

            // setting prevBufferLen = 0 is very important
            // for example, when upgrading, upgrade packet is sent over,
            // and a nonzero prevBufferLen could cause problems on `drain`
            this.prevBufferLen = 0;

            if (0 === this.writeBuffer.length) {
              this.emit('drain');
            } else {
              this.flush();
            }
          };

          /**
           * Flush write buffers.
           *
           * @api private
           */

          Socket.prototype.flush = function () {
            if ('closed' != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
              debug('flushing %d packets in socket', this.writeBuffer.length);
              this.transport.send(this.writeBuffer);
              // keep track of current length of writeBuffer
              // splice writeBuffer and callbackBuffer on `drain`
              this.prevBufferLen = this.writeBuffer.length;
              this.emit('flush');
            }
          };

          /**
           * Sends a message.
           *
           * @param {String} message.
           * @param {Function} callback function.
           * @param {Object} options.
           * @return {Socket} for chaining.
           * @api public
           */

          Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
            this.sendPacket('message', msg, options, fn);
            return this;
          };

          /**
           * Sends a packet.
           *
           * @param {String} packet type.
           * @param {String} data.
           * @param {Object} options.
           * @param {Function} callback function.
           * @api private
           */

          Socket.prototype.sendPacket = function (type, data, options, fn) {
            if ('function' == typeof data) {
              fn = data;
              data = undefined;
            }

            if ('function' == typeof options) {
              fn = options;
              options = null;
            }

            if ('closing' == this.readyState || 'closed' == this.readyState) {
              return;
            }

            options = options || {};
            options.compress = false !== options.compress;

            var packet = {
              type: type,
              data: data,
              options: options
            };
            this.emit('packetCreate', packet);
            this.writeBuffer.push(packet);
            if (fn) this.once('flush', fn);
            this.flush();
          };

          /**
           * Closes the connection.
           *
           * @api private
           */

          Socket.prototype.close = function () {
            if ('opening' == this.readyState || 'open' == this.readyState) {
              this.readyState = 'closing';

              var self = this;

              if (this.writeBuffer.length) {
                this.once('drain', function () {
                  if (this.upgrading) {
                    waitForUpgrade();
                  } else {
                    close();
                  }
                });
              } else if (this.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            }

            function close() {
              self.onClose('forced close');
              debug('socket closing - telling transport to close');
              self.transport.close();
            }

            function cleanupAndClose() {
              self.removeListener('upgrade', cleanupAndClose);
              self.removeListener('upgradeError', cleanupAndClose);
              close();
            }

            function waitForUpgrade() {
              // wait for upgrade to finish since we can't send packets while pausing a transport
              self.once('upgrade', cleanupAndClose);
              self.once('upgradeError', cleanupAndClose);
            }

            return this;
          };

          /**
           * Called upon transport error
           *
           * @api private
           */

          Socket.prototype.onError = function (err) {
            debug('socket error %j', err);
            Socket.priorWebsocketSuccess = false;
            this.emit('error', err);
            this.onClose('transport error', err);
          };

          /**
           * Called upon transport close.
           *
           * @api private
           */

          Socket.prototype.onClose = function (reason, desc) {
            if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
              debug('socket close with reason: "%s"', reason);
              var self = this;

              // clear timers
              clearTimeout(this.pingIntervalTimer);
              clearTimeout(this.pingTimeoutTimer);

              // stop event from firing again for transport
              this.transport.removeAllListeners('close');

              // ensure transport won't stay open
              this.transport.close();

              // ignore further transport communication
              this.transport.removeAllListeners();

              // set ready state
              this.readyState = 'closed';

              // clear session id
              this.id = null;

              // emit close event
              this.emit('close', reason, desc);

              // clean buffers after, so users can still
              // grab the buffers on `close` event
              self.writeBuffer = [];
              self.prevBufferLen = 0;
            }
          };

          /**
           * Filters upgrades, returning only those matching client transports.
           *
           * @param {Array} server upgrades
           * @api private
           *
           */

          Socket.prototype.filterUpgrades = function (upgrades) {
            var filteredUpgrades = [];
            for (var i = 0, j = upgrades.length; i < j; i++) {
              if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
            }
            return filteredUpgrades;
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "./transport": 4, "./transports": 5, "component-emitter": 15, "debug": 17, "engine.io-parser": 19, "indexof": 23, "parsejson": 26, "parseqs": 27, "parseuri": 28 }], 4: [function (_dereq_, module, exports) {
        /**
         * Module dependencies.
         */

        var parser = _dereq_('engine.io-parser');
        var Emitter = _dereq_('component-emitter');

        /**
         * Module exports.
         */

        module.exports = Transport;

        /**
         * Transport abstract constructor.
         *
         * @param {Object} options.
         * @api private
         */

        function Transport(opts) {
          this.path = opts.path;
          this.hostname = opts.hostname;
          this.port = opts.port;
          this.secure = opts.secure;
          this.query = opts.query;
          this.timestampParam = opts.timestampParam;
          this.timestampRequests = opts.timestampRequests;
          this.readyState = '';
          this.agent = opts.agent || false;
          this.socket = opts.socket;
          this.enablesXDR = opts.enablesXDR;

          // SSL options for Node.js client
          this.pfx = opts.pfx;
          this.key = opts.key;
          this.passphrase = opts.passphrase;
          this.cert = opts.cert;
          this.ca = opts.ca;
          this.ciphers = opts.ciphers;
          this.rejectUnauthorized = opts.rejectUnauthorized;

          // other options for Node.js client
          this.extraHeaders = opts.extraHeaders;
        }

        /**
         * Mix in `Emitter`.
         */

        Emitter(Transport.prototype);

        /**
         * Emits an error.
         *
         * @param {String} str
         * @return {Transport} for chaining
         * @api public
         */

        Transport.prototype.onError = function (msg, desc) {
          var err = new Error(msg);
          err.type = 'TransportError';
          err.description = desc;
          this.emit('error', err);
          return this;
        };

        /**
         * Opens the transport.
         *
         * @api public
         */

        Transport.prototype.open = function () {
          if ('closed' == this.readyState || '' == this.readyState) {
            this.readyState = 'opening';
            this.doOpen();
          }

          return this;
        };

        /**
         * Closes the transport.
         *
         * @api private
         */

        Transport.prototype.close = function () {
          if ('opening' == this.readyState || 'open' == this.readyState) {
            this.doClose();
            this.onClose();
          }

          return this;
        };

        /**
         * Sends multiple packets.
         *
         * @param {Array} packets
         * @api private
         */

        Transport.prototype.send = function (packets) {
          if ('open' == this.readyState) {
            this.write(packets);
          } else {
            throw new Error('Transport not open');
          }
        };

        /**
         * Called upon open
         *
         * @api private
         */

        Transport.prototype.onOpen = function () {
          this.readyState = 'open';
          this.writable = true;
          this.emit('open');
        };

        /**
         * Called with data.
         *
         * @param {String} data
         * @api private
         */

        Transport.prototype.onData = function (data) {
          var packet = parser.decodePacket(data, this.socket.binaryType);
          this.onPacket(packet);
        };

        /**
         * Called with a decoded packet.
         */

        Transport.prototype.onPacket = function (packet) {
          this.emit('packet', packet);
        };

        /**
         * Called upon close.
         *
         * @api private
         */

        Transport.prototype.onClose = function () {
          this.readyState = 'closed';
          this.emit('close');
        };
      }, { "component-emitter": 15, "engine.io-parser": 19 }], 5: [function (_dereq_, module, exports) {
        (function (global) {
          /**
           * Module dependencies
           */

          var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
          var XHR = _dereq_('./polling-xhr');
          var JSONP = _dereq_('./polling-jsonp');
          var websocket = _dereq_('./websocket');

          /**
           * Export transports.
           */

          exports.polling = polling;
          exports.websocket = websocket;

          /**
           * Polling transport polymorphic constructor.
           * Decides on xhr vs jsonp based on feature detection.
           *
           * @api private
           */

          function polling(opts) {
            var xhr;
            var xd = false;
            var xs = false;
            var jsonp = false !== opts.jsonp;

            if (global.location) {
              var isSSL = 'https:' == location.protocol;
              var port = location.port;

              // some user agents have empty `location.port`
              if (!port) {
                port = isSSL ? 443 : 80;
              }

              xd = opts.hostname != location.hostname || port != opts.port;
              xs = opts.secure != isSSL;
            }

            opts.xdomain = xd;
            opts.xscheme = xs;
            xhr = new XMLHttpRequest(opts);

            if ('open' in xhr && !opts.forceJSONP) {
              return new XHR(opts);
            } else {
              if (!jsonp) throw new Error('JSONP disabled');
              return new JSONP(opts);
            }
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "./polling-jsonp": 6, "./polling-xhr": 7, "./websocket": 9, "xmlhttprequest-ssl": 10 }], 6: [function (_dereq_, module, exports) {
        (function (global) {

          /**
           * Module requirements.
           */

          var Polling = _dereq_('./polling');
          var inherit = _dereq_('component-inherit');

          /**
           * Module exports.
           */

          module.exports = JSONPPolling;

          /**
           * Cached regular expressions.
           */

          var rNewline = /\n/g;
          var rEscapedNewline = /\\n/g;

          /**
           * Global JSONP callbacks.
           */

          var callbacks;

          /**
           * Callbacks count.
           */

          var index = 0;

          /**
           * Noop.
           */

          function empty() {}

          /**
           * JSONP Polling constructor.
           *
           * @param {Object} opts.
           * @api public
           */

          function JSONPPolling(opts) {
            Polling.call(this, opts);

            this.query = this.query || {};

            // define global callbacks array if not present
            // we do this here (lazily) to avoid unneeded global pollution
            if (!callbacks) {
              // we need to consider multiple engines in the same page
              if (!global.___eio) global.___eio = [];
              callbacks = global.___eio;
            }

            // callback identifier
            this.index = callbacks.length;

            // add callback to jsonp global
            var self = this;
            callbacks.push(function (msg) {
              self.onData(msg);
            });

            // append to query string
            this.query.j = this.index;

            // prevent spurious errors from being emitted when the window is unloaded
            if (global.document && global.addEventListener) {
              global.addEventListener('beforeunload', function () {
                if (self.script) self.script.onerror = empty;
              }, false);
            }
          }

          /**
           * Inherits from Polling.
           */

          inherit(JSONPPolling, Polling);

          /*
           * JSONP only supports binary as base64 encoded strings
           */

          JSONPPolling.prototype.supportsBinary = false;

          /**
           * Closes the socket.
           *
           * @api private
           */

          JSONPPolling.prototype.doClose = function () {
            if (this.script) {
              this.script.parentNode.removeChild(this.script);
              this.script = null;
            }

            if (this.form) {
              this.form.parentNode.removeChild(this.form);
              this.form = null;
              this.iframe = null;
            }

            Polling.prototype.doClose.call(this);
          };

          /**
           * Starts a poll cycle.
           *
           * @api private
           */

          JSONPPolling.prototype.doPoll = function () {
            var self = this;
            var script = document.createElement('script');

            if (this.script) {
              this.script.parentNode.removeChild(this.script);
              this.script = null;
            }

            script.async = true;
            script.src = this.uri();
            script.onerror = function (e) {
              self.onError('jsonp poll error', e);
            };

            var insertAt = document.getElementsByTagName('script')[0];
            if (insertAt) {
              insertAt.parentNode.insertBefore(script, insertAt);
            } else {
              (document.head || document.body).appendChild(script);
            }
            this.script = script;

            var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);

            if (isUAgecko) {
              setTimeout(function () {
                var iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
                document.body.removeChild(iframe);
              }, 100);
            }
          };

          /**
           * Writes with a hidden iframe.
           *
           * @param {String} data to send
           * @param {Function} called upon flush.
           * @api private
           */

          JSONPPolling.prototype.doWrite = function (data, fn) {
            var self = this;

            if (!this.form) {
              var form = document.createElement('form');
              var area = document.createElement('textarea');
              var id = this.iframeId = 'eio_iframe_' + this.index;
              var iframe;

              form.className = 'socketio';
              form.style.position = 'absolute';
              form.style.top = '-1000px';
              form.style.left = '-1000px';
              form.target = id;
              form.method = 'POST';
              form.setAttribute('accept-charset', 'utf-8');
              area.name = 'd';
              form.appendChild(area);
              document.body.appendChild(form);

              this.form = form;
              this.area = area;
            }

            this.form.action = this.uri();

            function complete() {
              initIframe();
              fn();
            }

            function initIframe() {
              if (self.iframe) {
                try {
                  self.form.removeChild(self.iframe);
                } catch (e) {
                  self.onError('jsonp polling iframe removal error', e);
                }
              }

              try {
                // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
                var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
                iframe = document.createElement(html);
              } catch (e) {
                iframe = document.createElement('iframe');
                iframe.name = self.iframeId;
                iframe.src = 'javascript:0';
              }

              iframe.id = self.iframeId;

              self.form.appendChild(iframe);
              self.iframe = iframe;
            }

            initIframe();

            // escape \n to prevent it from being converted into \r\n by some UAs
            // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
            data = data.replace(rEscapedNewline, '\\\n');
            this.area.value = data.replace(rNewline, '\\n');

            try {
              this.form.submit();
            } catch (e) {}

            if (this.iframe.attachEvent) {
              this.iframe.onreadystatechange = function () {
                if (self.iframe.readyState == 'complete') {
                  complete();
                }
              };
            } else {
              this.iframe.onload = complete;
            }
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "./polling": 8, "component-inherit": 16 }], 7: [function (_dereq_, module, exports) {
        (function (global) {
          /**
           * Module requirements.
           */

          var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
          var Polling = _dereq_('./polling');
          var Emitter = _dereq_('component-emitter');
          var inherit = _dereq_('component-inherit');
          var debug = _dereq_('debug')('engine.io-client:polling-xhr');

          /**
           * Module exports.
           */

          module.exports = XHR;
          module.exports.Request = Request;

          /**
           * Empty function
           */

          function empty() {}

          /**
           * XHR Polling constructor.
           *
           * @param {Object} opts
           * @api public
           */

          function XHR(opts) {
            Polling.call(this, opts);

            if (global.location) {
              var isSSL = 'https:' == location.protocol;
              var port = location.port;

              // some user agents have empty `location.port`
              if (!port) {
                port = isSSL ? 443 : 80;
              }

              this.xd = opts.hostname != global.location.hostname || port != opts.port;
              this.xs = opts.secure != isSSL;
            } else {
              this.extraHeaders = opts.extraHeaders;
            }
          }

          /**
           * Inherits from Polling.
           */

          inherit(XHR, Polling);

          /**
           * XHR supports binary
           */

          XHR.prototype.supportsBinary = true;

          /**
           * Creates a request.
           *
           * @param {String} method
           * @api private
           */

          XHR.prototype.request = function (opts) {
            opts = opts || {};
            opts.uri = this.uri();
            opts.xd = this.xd;
            opts.xs = this.xs;
            opts.agent = this.agent || false;
            opts.supportsBinary = this.supportsBinary;
            opts.enablesXDR = this.enablesXDR;

            // SSL options for Node.js client
            opts.pfx = this.pfx;
            opts.key = this.key;
            opts.passphrase = this.passphrase;
            opts.cert = this.cert;
            opts.ca = this.ca;
            opts.ciphers = this.ciphers;
            opts.rejectUnauthorized = this.rejectUnauthorized;

            // other options for Node.js client
            opts.extraHeaders = this.extraHeaders;

            return new Request(opts);
          };

          /**
           * Sends data.
           *
           * @param {String} data to send.
           * @param {Function} called upon flush.
           * @api private
           */

          XHR.prototype.doWrite = function (data, fn) {
            var isBinary = typeof data !== 'string' && data !== undefined;
            var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
            var self = this;
            req.on('success', fn);
            req.on('error', function (err) {
              self.onError('xhr post error', err);
            });
            this.sendXhr = req;
          };

          /**
           * Starts a poll cycle.
           *
           * @api private
           */

          XHR.prototype.doPoll = function () {
            debug('xhr poll');
            var req = this.request();
            var self = this;
            req.on('data', function (data) {
              self.onData(data);
            });
            req.on('error', function (err) {
              self.onError('xhr poll error', err);
            });
            this.pollXhr = req;
          };

          /**
           * Request constructor
           *
           * @param {Object} options
           * @api public
           */

          function Request(opts) {
            this.method = opts.method || 'GET';
            this.uri = opts.uri;
            this.xd = !!opts.xd;
            this.xs = !!opts.xs;
            this.async = false !== opts.async;
            this.data = undefined != opts.data ? opts.data : null;
            this.agent = opts.agent;
            this.isBinary = opts.isBinary;
            this.supportsBinary = opts.supportsBinary;
            this.enablesXDR = opts.enablesXDR;

            // SSL options for Node.js client
            this.pfx = opts.pfx;
            this.key = opts.key;
            this.passphrase = opts.passphrase;
            this.cert = opts.cert;
            this.ca = opts.ca;
            this.ciphers = opts.ciphers;
            this.rejectUnauthorized = opts.rejectUnauthorized;

            // other options for Node.js client
            this.extraHeaders = opts.extraHeaders;

            this.create();
          }

          /**
           * Mix in `Emitter`.
           */

          Emitter(Request.prototype);

          /**
           * Creates the XHR object and sends the request.
           *
           * @api private
           */

          Request.prototype.create = function () {
            var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

            // SSL options for Node.js client
            opts.pfx = this.pfx;
            opts.key = this.key;
            opts.passphrase = this.passphrase;
            opts.cert = this.cert;
            opts.ca = this.ca;
            opts.ciphers = this.ciphers;
            opts.rejectUnauthorized = this.rejectUnauthorized;

            var xhr = this.xhr = new XMLHttpRequest(opts);
            var self = this;

            try {
              debug('xhr open %s: %s', this.method, this.uri);
              xhr.open(this.method, this.uri, this.async);
              try {
                if (this.extraHeaders) {
                  xhr.setDisableHeaderCheck(true);
                  for (var i in this.extraHeaders) {
                    if (this.extraHeaders.hasOwnProperty(i)) {
                      xhr.setRequestHeader(i, this.extraHeaders[i]);
                    }
                  }
                }
              } catch (e) {}
              if (this.supportsBinary) {
                // This has to be done after open because Firefox is stupid
                // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
                xhr.responseType = 'arraybuffer';
              }

              if ('POST' == this.method) {
                try {
                  if (this.isBinary) {
                    xhr.setRequestHeader('Content-type', 'application/octet-stream');
                  } else {
                    xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                  }
                } catch (e) {}
              }

              // ie6 check
              if ('withCredentials' in xhr) {
                xhr.withCredentials = true;
              }

              if (this.hasXDR()) {
                xhr.onload = function () {
                  self.onLoad();
                };
                xhr.onerror = function () {
                  self.onError(xhr.responseText);
                };
              } else {
                xhr.onreadystatechange = function () {
                  if (4 != xhr.readyState) return;
                  if (200 == xhr.status || 1223 == xhr.status) {
                    self.onLoad();
                  } else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    setTimeout(function () {
                      self.onError(xhr.status);
                    }, 0);
                  }
                };
              }

              debug('xhr data %s', this.data);
              xhr.send(this.data);
            } catch (e) {
              // Need to defer since .create() is called directly fhrom the constructor
              // and thus the 'error' event can only be only bound *after* this exception
              // occurs.  Therefore, also, we cannot throw here at all.
              setTimeout(function () {
                self.onError(e);
              }, 0);
              return;
            }

            if (global.document) {
              this.index = Request.requestsCount++;
              Request.requests[this.index] = this;
            }
          };

          /**
           * Called upon successful response.
           *
           * @api private
           */

          Request.prototype.onSuccess = function () {
            this.emit('success');
            this.cleanup();
          };

          /**
           * Called if we have data.
           *
           * @api private
           */

          Request.prototype.onData = function (data) {
            this.emit('data', data);
            this.onSuccess();
          };

          /**
           * Called upon error.
           *
           * @api private
           */

          Request.prototype.onError = function (err) {
            this.emit('error', err);
            this.cleanup(true);
          };

          /**
           * Cleans up house.
           *
           * @api private
           */

          Request.prototype.cleanup = function (fromError) {
            if ('undefined' == typeof this.xhr || null === this.xhr) {
              return;
            }
            // xmlhttprequest
            if (this.hasXDR()) {
              this.xhr.onload = this.xhr.onerror = empty;
            } else {
              this.xhr.onreadystatechange = empty;
            }

            if (fromError) {
              try {
                this.xhr.abort();
              } catch (e) {}
            }

            if (global.document) {
              delete Request.requests[this.index];
            }

            this.xhr = null;
          };

          /**
           * Called upon load.
           *
           * @api private
           */

          Request.prototype.onLoad = function () {
            var data;
            try {
              var contentType;
              try {
                contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
              } catch (e) {}
              if (contentType === 'application/octet-stream') {
                data = this.xhr.response;
              } else {
                if (!this.supportsBinary) {
                  data = this.xhr.responseText;
                } else {
                  try {
                    data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
                  } catch (e) {
                    var ui8Arr = new Uint8Array(this.xhr.response);
                    var dataArray = [];
                    for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
                      dataArray.push(ui8Arr[idx]);
                    }

                    data = String.fromCharCode.apply(null, dataArray);
                  }
                }
              }
            } catch (e) {
              this.onError(e);
            }
            if (null != data) {
              this.onData(data);
            }
          };

          /**
           * Check if it has XDomainRequest.
           *
           * @api private
           */

          Request.prototype.hasXDR = function () {
            return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
          };

          /**
           * Aborts the request.
           *
           * @api public
           */

          Request.prototype.abort = function () {
            this.cleanup();
          };

          /**
           * Aborts pending requests when unloading the window. This is needed to prevent
           * memory leaks (e.g. when using IE) and to ensure that no spurious error is
           * emitted.
           */

          if (global.document) {
            Request.requestsCount = 0;
            Request.requests = {};
            if (global.attachEvent) {
              global.attachEvent('onunload', unloadHandler);
            } else if (global.addEventListener) {
              global.addEventListener('beforeunload', unloadHandler, false);
            }
          }

          function unloadHandler() {
            for (var i in Request.requests) {
              if (Request.requests.hasOwnProperty(i)) {
                Request.requests[i].abort();
              }
            }
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "./polling": 8, "component-emitter": 15, "component-inherit": 16, "debug": 17, "xmlhttprequest-ssl": 10 }], 8: [function (_dereq_, module, exports) {
        /**
         * Module dependencies.
         */

        var Transport = _dereq_('../transport');
        var parseqs = _dereq_('parseqs');
        var parser = _dereq_('engine.io-parser');
        var inherit = _dereq_('component-inherit');
        var yeast = _dereq_('yeast');
        var debug = _dereq_('debug')('engine.io-client:polling');

        /**
         * Module exports.
         */

        module.exports = Polling;

        /**
         * Is XHR2 supported?
         */

        var hasXHR2 = (function () {
          var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
          var xhr = new XMLHttpRequest({ xdomain: false });
          return null != xhr.responseType;
        })();

        /**
         * Polling interface.
         *
         * @param {Object} opts
         * @api private
         */

        function Polling(opts) {
          var forceBase64 = opts && opts.forceBase64;
          if (!hasXHR2 || forceBase64) {
            this.supportsBinary = false;
          }
          Transport.call(this, opts);
        }

        /**
         * Inherits from Transport.
         */

        inherit(Polling, Transport);

        /**
         * Transport name.
         */

        Polling.prototype.name = 'polling';

        /**
         * Opens the socket (triggers polling). We write a PING message to determine
         * when the transport is open.
         *
         * @api private
         */

        Polling.prototype.doOpen = function () {
          this.poll();
        };

        /**
         * Pauses polling.
         *
         * @param {Function} callback upon buffers are flushed and transport is paused
         * @api private
         */

        Polling.prototype.pause = function (onPause) {
          var pending = 0;
          var self = this;

          this.readyState = 'pausing';

          function pause() {
            debug('paused');
            self.readyState = 'paused';
            onPause();
          }

          if (this.polling || !this.writable) {
            var total = 0;

            if (this.polling) {
              debug('we are currently polling - waiting to pause');
              total++;
              this.once('pollComplete', function () {
                debug('pre-pause polling complete');
                --total || pause();
              });
            }

            if (!this.writable) {
              debug('we are currently writing - waiting to pause');
              total++;
              this.once('drain', function () {
                debug('pre-pause writing complete');
                --total || pause();
              });
            }
          } else {
            pause();
          }
        };

        /**
         * Starts polling cycle.
         *
         * @api public
         */

        Polling.prototype.poll = function () {
          debug('polling');
          this.polling = true;
          this.doPoll();
          this.emit('poll');
        };

        /**
         * Overloads onData to detect payloads.
         *
         * @api private
         */

        Polling.prototype.onData = function (data) {
          var self = this;
          debug('polling got data %s', data);
          var callback = function callback(packet, index, total) {
            // if its the first message we consider the transport open
            if ('opening' == self.readyState) {
              self.onOpen();
            }

            // if its a close packet, we close the ongoing requests
            if ('close' == packet.type) {
              self.onClose();
              return false;
            }

            // otherwise bypass onData and handle the message
            self.onPacket(packet);
          };

          // decode payload
          parser.decodePayload(data, this.socket.binaryType, callback);

          // if an event did not trigger closing
          if ('closed' != this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emit('pollComplete');

            if ('open' == this.readyState) {
              this.poll();
            } else {
              debug('ignoring poll - transport state "%s"', this.readyState);
            }
          }
        };

        /**
         * For polling, send a close packet.
         *
         * @api private
         */

        Polling.prototype.doClose = function () {
          var self = this;

          function close() {
            debug('writing close packet');
            self.write([{ type: 'close' }]);
          }

          if ('open' == this.readyState) {
            debug('transport open - closing');
            close();
          } else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            debug('transport not open - deferring close');
            this.once('open', close);
          }
        };

        /**
         * Writes a packets payload.
         *
         * @param {Array} data packets
         * @param {Function} drain callback
         * @api private
         */

        Polling.prototype.write = function (packets) {
          var self = this;
          this.writable = false;
          var callbackfn = function callbackfn() {
            self.writable = true;
            self.emit('drain');
          };

          var self = this;
          parser.encodePayload(packets, this.supportsBinary, function (data) {
            self.doWrite(data, callbackfn);
          });
        };

        /**
         * Generates uri for connection.
         *
         * @api private
         */

        Polling.prototype.uri = function () {
          var query = this.query || {};
          var schema = this.secure ? 'https' : 'http';
          var port = '';

          // cache busting is forced
          if (false !== this.timestampRequests) {
            query[this.timestampParam] = yeast();
          }

          if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
          }

          query = parseqs.encode(query);

          // avoid port if default for schema
          if (this.port && ('https' == schema && this.port != 443 || 'http' == schema && this.port != 80)) {
            port = ':' + this.port;
          }

          // prepend ? to query
          if (query.length) {
            query = '?' + query;
          }

          var ipv6 = this.hostname.indexOf(':') !== -1;
          return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
        };
      }, { "../transport": 4, "component-inherit": 16, "debug": 17, "engine.io-parser": 19, "parseqs": 27, "xmlhttprequest-ssl": 10, "yeast": 30 }], 9: [function (_dereq_, module, exports) {
        (function (global) {
          /**
           * Module dependencies.
           */

          var Transport = _dereq_('../transport');
          var parser = _dereq_('engine.io-parser');
          var parseqs = _dereq_('parseqs');
          var inherit = _dereq_('component-inherit');
          var yeast = _dereq_('yeast');
          var debug = _dereq_('debug')('engine.io-client:websocket');
          var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

          /**
           * Get either the `WebSocket` or `MozWebSocket` globals
           * in the browser or the WebSocket-compatible interface
           * exposed by `ws` for Node environment.
           */

          var WebSocket = BrowserWebSocket || (typeof window !== 'undefined' ? null : _dereq_('ws'));

          /**
           * Module exports.
           */

          module.exports = WS;

          /**
           * WebSocket transport constructor.
           *
           * @api {Object} connection options
           * @api public
           */

          function WS(opts) {
            var forceBase64 = opts && opts.forceBase64;
            if (forceBase64) {
              this.supportsBinary = false;
            }
            this.perMessageDeflate = opts.perMessageDeflate;
            Transport.call(this, opts);
          }

          /**
           * Inherits from Transport.
           */

          inherit(WS, Transport);

          /**
           * Transport name.
           *
           * @api public
           */

          WS.prototype.name = 'websocket';

          /*
           * WebSockets support binary
           */

          WS.prototype.supportsBinary = true;

          /**
           * Opens socket.
           *
           * @api private
           */

          WS.prototype.doOpen = function () {
            if (!this.check()) {
              // let probe timeout
              return;
            }

            var self = this;
            var uri = this.uri();
            var protocols = void 0;
            var opts = {
              agent: this.agent,
              perMessageDeflate: this.perMessageDeflate
            };

            // SSL options for Node.js client
            opts.pfx = this.pfx;
            opts.key = this.key;
            opts.passphrase = this.passphrase;
            opts.cert = this.cert;
            opts.ca = this.ca;
            opts.ciphers = this.ciphers;
            opts.rejectUnauthorized = this.rejectUnauthorized;
            if (this.extraHeaders) {
              opts.headers = this.extraHeaders;
            }

            this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

            if (this.ws.binaryType === undefined) {
              this.supportsBinary = false;
            }

            if (this.ws.supports && this.ws.supports.binary) {
              this.supportsBinary = true;
              this.ws.binaryType = 'buffer';
            } else {
              this.ws.binaryType = 'arraybuffer';
            }

            this.addEventListeners();
          };

          /**
           * Adds event listeners to the socket
           *
           * @api private
           */

          WS.prototype.addEventListeners = function () {
            var self = this;

            this.ws.onopen = function () {
              self.onOpen();
            };
            this.ws.onclose = function () {
              self.onClose();
            };
            this.ws.onmessage = function (ev) {
              self.onData(ev.data);
            };
            this.ws.onerror = function (e) {
              self.onError('websocket error', e);
            };
          };

          /**
           * Override `onData` to use a timer on iOS.
           * See: https://gist.github.com/mloughran/2052006
           *
           * @api private
           */

          if ('undefined' != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
            WS.prototype.onData = function (data) {
              var self = this;
              setTimeout(function () {
                Transport.prototype.onData.call(self, data);
              }, 0);
            };
          }

          /**
           * Writes data to socket.
           *
           * @param {Array} array of packets.
           * @api private
           */

          WS.prototype.write = function (packets) {
            var self = this;
            this.writable = false;

            // encodePacket efficient as it uses WS framing
            // no need for encodePayload
            var total = packets.length;
            for (var i = 0, l = total; i < l; i++) {
              (function (packet) {
                parser.encodePacket(packet, self.supportsBinary, function (data) {
                  if (!BrowserWebSocket) {
                    // always create a new object (GH-437)
                    var opts = {};
                    if (packet.options) {
                      opts.compress = packet.options.compress;
                    }

                    if (self.perMessageDeflate) {
                      var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
                      if (len < self.perMessageDeflate.threshold) {
                        opts.compress = false;
                      }
                    }
                  }

                  //Sometimes the websocket has already been closed but the browser didn't
                  //have a chance of informing us about it yet, in that case send will
                  //throw an error
                  try {
                    if (BrowserWebSocket) {
                      // TypeError is thrown when passing the second argument on Safari
                      self.ws.send(data);
                    } else {
                      self.ws.send(data, opts);
                    }
                  } catch (e) {
                    debug('websocket closed before onclose event');
                  }

                  --total || done();
                });
              })(packets[i]);
            }

            function done() {
              self.emit('flush');

              // fake drain
              // defer to next tick to allow Socket to clear writeBuffer
              setTimeout(function () {
                self.writable = true;
                self.emit('drain');
              }, 0);
            }
          };

          /**
           * Called upon close
           *
           * @api private
           */

          WS.prototype.onClose = function () {
            Transport.prototype.onClose.call(this);
          };

          /**
           * Closes socket.
           *
           * @api private
           */

          WS.prototype.doClose = function () {
            if (typeof this.ws !== 'undefined') {
              this.ws.close();
            }
          };

          /**
           * Generates uri for connection.
           *
           * @api private
           */

          WS.prototype.uri = function () {
            var query = this.query || {};
            var schema = this.secure ? 'wss' : 'ws';
            var port = '';

            // avoid port if default for schema
            if (this.port && ('wss' == schema && this.port != 443 || 'ws' == schema && this.port != 80)) {
              port = ':' + this.port;
            }

            // append timestamp to URI
            if (this.timestampRequests) {
              query[this.timestampParam] = yeast();
            }

            // communicate binary support capabilities
            if (!this.supportsBinary) {
              query.b64 = 1;
            }

            query = parseqs.encode(query);

            // prepend ? to query
            if (query.length) {
              query = '?' + query;
            }

            var ipv6 = this.hostname.indexOf(':') !== -1;
            return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
          };

          /**
           * Feature detection for WebSocket.
           *
           * @return {Boolean} whether this transport is available.
           * @api public
           */

          WS.prototype.check = function () {
            return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "../transport": 4, "component-inherit": 16, "debug": 17, "engine.io-parser": 19, "parseqs": 27, "ws": undefined, "yeast": 30 }], 10: [function (_dereq_, module, exports) {
        // browser shim for xmlhttprequest module
        var hasCORS = _dereq_('has-cors');

        module.exports = function (opts) {
          var xdomain = opts.xdomain;

          // scheme must be same when usign XDomainRequest
          // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
          var xscheme = opts.xscheme;

          // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
          // https://github.com/Automattic/engine.io-client/pull/217
          var enablesXDR = opts.enablesXDR;

          // XMLHttpRequest can be disabled on IE
          try {
            if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
              return new XMLHttpRequest();
            }
          } catch (e) {}

          // Use XDomainRequest for IE8 if enablesXDR is true
          // because loading bar keeps flashing when using jsonp-polling
          // https://github.com/yujiosaka/socke.io-ie8-loading-example
          try {
            if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
              return new XDomainRequest();
            }
          } catch (e) {}

          if (!xdomain) {
            try {
              return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {}
          }
        };
      }, { "has-cors": 22 }], 11: [function (_dereq_, module, exports) {
        module.exports = after;

        function after(count, callback, err_cb) {
          var bail = false;
          err_cb = err_cb || noop;
          proxy.count = count;

          return count === 0 ? callback() : proxy;

          function proxy(err, result) {
            if (proxy.count <= 0) {
              throw new Error('after called too many times');
            }
            --proxy.count;

            // after first error, rest are passed to err_cb
            if (err) {
              bail = true;
              callback(err);
              // future error callbacks will go to error handler
              callback = err_cb;
            } else if (proxy.count === 0 && !bail) {
              callback(null, result);
            }
          }
        }

        function noop() {}
      }, {}], 12: [function (_dereq_, module, exports) {
        /**
         * An abstraction for slicing an arraybuffer even when
         * ArrayBuffer.prototype.slice is not supported
         *
         * @api public
         */

        module.exports = function (arraybuffer, start, end) {
          var bytes = arraybuffer.byteLength;
          start = start || 0;
          end = end || bytes;

          if (arraybuffer.slice) {
            return arraybuffer.slice(start, end);
          }

          if (start < 0) {
            start += bytes;
          }
          if (end < 0) {
            end += bytes;
          }
          if (end > bytes) {
            end = bytes;
          }

          if (start >= bytes || start >= end || bytes === 0) {
            return new ArrayBuffer(0);
          }

          var abv = new Uint8Array(arraybuffer);
          var result = new Uint8Array(end - start);
          for (var i = start, ii = 0; i < end; i++, ii++) {
            result[ii] = abv[i];
          }
          return result.buffer;
        };
      }, {}], 13: [function (_dereq_, module, exports) {
        /*
         * base64-arraybuffer
         * https://github.com/niklasvh/base64-arraybuffer
         *
         * Copyright (c) 2012 Niklas von Hertzen
         * Licensed under the MIT license.
         */
        (function (chars) {
          "use strict";

          exports.encode = function (arraybuffer) {
            var bytes = new Uint8Array(arraybuffer),
                i,
                len = bytes.length,
                base64 = "";

            for (i = 0; i < len; i += 3) {
              base64 += chars[bytes[i] >> 2];
              base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
              base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
              base64 += chars[bytes[i + 2] & 63];
            }

            if (len % 3 === 2) {
              base64 = base64.substring(0, base64.length - 1) + "=";
            } else if (len % 3 === 1) {
              base64 = base64.substring(0, base64.length - 2) + "==";
            }

            return base64;
          };

          exports.decode = function (base64) {
            var bufferLength = base64.length * 0.75,
                len = base64.length,
                i,
                p = 0,
                encoded1,
                encoded2,
                encoded3,
                encoded4;

            if (base64[base64.length - 1] === "=") {
              bufferLength--;
              if (base64[base64.length - 2] === "=") {
                bufferLength--;
              }
            }

            var arraybuffer = new ArrayBuffer(bufferLength),
                bytes = new Uint8Array(arraybuffer);

            for (i = 0; i < len; i += 4) {
              encoded1 = chars.indexOf(base64[i]);
              encoded2 = chars.indexOf(base64[i + 1]);
              encoded3 = chars.indexOf(base64[i + 2]);
              encoded4 = chars.indexOf(base64[i + 3]);

              bytes[p++] = encoded1 << 2 | encoded2 >> 4;
              bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
              bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
            }

            return arraybuffer;
          };
        })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
      }, {}], 14: [function (_dereq_, module, exports) {
        (function (global) {
          /**
           * Create a blob builder even when vendor prefixes exist
           */

          var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;

          /**
           * Check if Blob constructor is supported
           */

          var blobSupported = (function () {
            try {
              var a = new Blob(['hi']);
              return a.size === 2;
            } catch (e) {
              return false;
            }
          })();

          /**
           * Check if Blob constructor supports ArrayBufferViews
           * Fails in Safari 6, so we need to map to ArrayBuffers there.
           */

          var blobSupportsArrayBufferView = blobSupported && (function () {
            try {
              var b = new Blob([new Uint8Array([1, 2])]);
              return b.size === 2;
            } catch (e) {
              return false;
            }
          })();

          /**
           * Check if BlobBuilder is supported
           */

          var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;

          /**
           * Helper function that maps ArrayBufferViews to ArrayBuffers
           * Used by BlobBuilder constructor and old browsers that didn't
           * support it in the Blob constructor.
           */

          function mapArrayBufferViews(ary) {
            for (var i = 0; i < ary.length; i++) {
              var chunk = ary[i];
              if (chunk.buffer instanceof ArrayBuffer) {
                var buf = chunk.buffer;

                // if this is a subarray, make a copy so we only
                // include the subarray region from the underlying buffer
                if (chunk.byteLength !== buf.byteLength) {
                  var copy = new Uint8Array(chunk.byteLength);
                  copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
                  buf = copy.buffer;
                }

                ary[i] = buf;
              }
            }
          }

          function BlobBuilderConstructor(ary, options) {
            options = options || {};

            var bb = new BlobBuilder();
            mapArrayBufferViews(ary);

            for (var i = 0; i < ary.length; i++) {
              bb.append(ary[i]);
            }

            return options.type ? bb.getBlob(options.type) : bb.getBlob();
          };

          function BlobConstructor(ary, options) {
            mapArrayBufferViews(ary);
            return new Blob(ary, options || {});
          };

          module.exports = (function () {
            if (blobSupported) {
              return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
            } else if (blobBuilderSupported) {
              return BlobBuilderConstructor;
            } else {
              return undefined;
            }
          })();
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, {}], 15: [function (_dereq_, module, exports) {

        /**
         * Expose `Emitter`.
         */

        module.exports = Emitter;

        /**
         * Initialize a new `Emitter`.
         *
         * @api public
         */

        function Emitter(obj) {
          if (obj) return mixin(obj);
        };

        /**
         * Mixin the emitter properties.
         *
         * @param {Object} obj
         * @return {Object}
         * @api private
         */

        function mixin(obj) {
          for (var key in Emitter.prototype) {
            obj[key] = Emitter.prototype[key];
          }
          return obj;
        }

        /**
         * Listen on the given `event` with `fn`.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
          this._callbacks = this._callbacks || {};
          (this._callbacks[event] = this._callbacks[event] || []).push(fn);
          return this;
        };

        /**
         * Adds an `event` listener that will be invoked a single
         * time then automatically removed.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.once = function (event, fn) {
          var self = this;
          this._callbacks = this._callbacks || {};

          function on() {
            self.off(event, on);
            fn.apply(this, arguments);
          }

          on.fn = fn;
          this.on(event, on);
          return this;
        };

        /**
         * Remove the given callback for `event` or all
         * registered callbacks.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
          this._callbacks = this._callbacks || {};

          // all
          if (0 == arguments.length) {
            this._callbacks = {};
            return this;
          }

          // specific event
          var callbacks = this._callbacks[event];
          if (!callbacks) return this;

          // remove all handlers
          if (1 == arguments.length) {
            delete this._callbacks[event];
            return this;
          }

          // remove specific handler
          var cb;
          for (var i = 0; i < callbacks.length; i++) {
            cb = callbacks[i];
            if (cb === fn || cb.fn === fn) {
              callbacks.splice(i, 1);
              break;
            }
          }
          return this;
        };

        /**
         * Emit `event` with the given args.
         *
         * @param {String} event
         * @param {Mixed} ...
         * @return {Emitter}
         */

        Emitter.prototype.emit = function (event) {
          this._callbacks = this._callbacks || {};
          var args = [].slice.call(arguments, 1),
              callbacks = this._callbacks[event];

          if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i) {
              callbacks[i].apply(this, args);
            }
          }

          return this;
        };

        /**
         * Return array of callbacks for `event`.
         *
         * @param {String} event
         * @return {Array}
         * @api public
         */

        Emitter.prototype.listeners = function (event) {
          this._callbacks = this._callbacks || {};
          return this._callbacks[event] || [];
        };

        /**
         * Check if this emitter has `event` handlers.
         *
         * @param {String} event
         * @return {Boolean}
         * @api public
         */

        Emitter.prototype.hasListeners = function (event) {
          return !!this.listeners(event).length;
        };
      }, {}], 16: [function (_dereq_, module, exports) {

        module.exports = function (a, b) {
          var fn = function fn() {};
          fn.prototype = b.prototype;
          a.prototype = new fn();
          a.prototype.constructor = a;
        };
      }, {}], 17: [function (_dereq_, module, exports) {

        /**
         * This is the web browser implementation of `debug()`.
         *
         * Expose `debug()` as the module.
         */

        exports = module.exports = _dereq_('./debug');
        exports.log = log;
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

        /**
         * Colors.
         */

        exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

        /**
         * Currently only WebKit-based Web Inspectors, Firefox >= v31,
         * and the Firebug extension (any Firefox version) are known
         * to support "%c" CSS customizations.
         *
         * TODO: add a `localStorage` variable to explicitly enable/disable colors
         */

        function useColors() {
          // is webkit? http://stackoverflow.com/a/16459606/376773
          return 'WebkitAppearance' in document.documentElement.style ||
          // is firebug? http://stackoverflow.com/a/398120/376773
          window.console && (console.firebug || console.exception && console.table) ||
          // is firefox >= v31?
          // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
        }

        /**
         * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
         */

        exports.formatters.j = function (v) {
          return JSON.stringify(v);
        };

        /**
         * Colorize log arguments if enabled.
         *
         * @api public
         */

        function formatArgs() {
          var args = arguments;
          var useColors = this.useColors;

          args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

          if (!useColors) return args;

          var c = 'color: ' + this.color;
          args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

          // the final "%c" is somewhat tricky, because there could be other
          // arguments passed either before or after the %c, so we need to
          // figure out the correct index to insert the CSS into
          var index = 0;
          var lastC = 0;
          args[0].replace(/%[a-z%]/g, function (match) {
            if ('%%' === match) return;
            index++;
            if ('%c' === match) {
              // we only are interested in the *last* %c
              // (the user may have provided their own)
              lastC = index;
            }
          });

          args.splice(lastC, 0, c);
          return args;
        }

        /**
         * Invokes `console.log()` when available.
         * No-op when `console.log` is not a "function".
         *
         * @api public
         */

        function log() {
          // this hackery is required for IE8/9, where
          // the `console.log` function doesn't have 'apply'
          return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }

        /**
         * Save `namespaces`.
         *
         * @param {String} namespaces
         * @api private
         */

        function save(namespaces) {
          try {
            if (null == namespaces) {
              exports.storage.removeItem('debug');
            } else {
              exports.storage.debug = namespaces;
            }
          } catch (e) {}
        }

        /**
         * Load `namespaces`.
         *
         * @return {String} returns the previously persisted debug modes
         * @api private
         */

        function load() {
          var r;
          try {
            r = exports.storage.debug;
          } catch (e) {}
          return r;
        }

        /**
         * Enable namespaces listed in `localStorage.debug` initially.
         */

        exports.enable(load());

        /**
         * Localstorage attempts to return the localstorage.
         *
         * This is necessary because safari throws
         * when a user disables cookies/localstorage
         * and you attempt to access it.
         *
         * @return {LocalStorage}
         * @api private
         */

        function localstorage() {
          try {
            return window.localStorage;
          } catch (e) {}
        }
      }, { "./debug": 18 }], 18: [function (_dereq_, module, exports) {

        /**
         * This is the common logic for both the Node.js and web browser
         * implementations of `debug()`.
         *
         * Expose `debug()` as the module.
         */

        exports = module.exports = debug;
        exports.coerce = coerce;
        exports.disable = disable;
        exports.enable = enable;
        exports.enabled = enabled;
        exports.humanize = _dereq_('ms');

        /**
         * The currently active debug mode names, and names to skip.
         */

        exports.names = [];
        exports.skips = [];

        /**
         * Map of special "%n" handling functions, for the debug "format" argument.
         *
         * Valid key names are a single, lowercased letter, i.e. "n".
         */

        exports.formatters = {};

        /**
         * Previously assigned color.
         */

        var prevColor = 0;

        /**
         * Previous log timestamp.
         */

        var prevTime;

        /**
         * Select a color.
         *
         * @return {Number}
         * @api private
         */

        function selectColor() {
          return exports.colors[prevColor++ % exports.colors.length];
        }

        /**
         * Create a debugger with the given `namespace`.
         *
         * @param {String} namespace
         * @return {Function}
         * @api public
         */

        function debug(namespace) {

          // define the `disabled` version
          function disabled() {}
          disabled.enabled = false;

          // define the `enabled` version
          function enabled() {

            var self = enabled;

            // set `diff` timestamp
            var curr = +new Date();
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;

            // add the `color` if not set
            if (null == self.useColors) self.useColors = exports.useColors();
            if (null == self.color && self.useColors) self.color = selectColor();

            var args = Array.prototype.slice.call(arguments);

            args[0] = exports.coerce(args[0]);

            if ('string' !== typeof args[0]) {
              // anything else let's inspect with %o
              args = ['%o'].concat(args);
            }

            // apply any `formatters` transformations
            var index = 0;
            args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
              // if we encounter an escaped % then don't increase the array index
              if (match === '%%') return match;
              index++;
              var formatter = exports.formatters[format];
              if ('function' === typeof formatter) {
                var val = args[index];
                match = formatter.call(self, val);

                // now we need to remove `args[index]` since it's inlined in the `format`
                args.splice(index, 1);
                index--;
              }
              return match;
            });

            if ('function' === typeof exports.formatArgs) {
              args = exports.formatArgs.apply(self, args);
            }
            var logFn = enabled.log || exports.log || console.log.bind(console);
            logFn.apply(self, args);
          }
          enabled.enabled = true;

          var fn = exports.enabled(namespace) ? enabled : disabled;

          fn.namespace = namespace;

          return fn;
        }

        /**
         * Enables a debug mode by namespaces. This can include modes
         * separated by a colon and wildcards.
         *
         * @param {String} namespaces
         * @api public
         */

        function enable(namespaces) {
          exports.save(namespaces);

          var split = (namespaces || '').split(/[\s,]+/);
          var len = split.length;

          for (var i = 0; i < len; i++) {
            if (!split[i]) continue; // ignore empty strings
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') {
              exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            } else {
              exports.names.push(new RegExp('^' + namespaces + '$'));
            }
          }
        }

        /**
         * Disable debug output.
         *
         * @api public
         */

        function disable() {
          exports.enable('');
        }

        /**
         * Returns true if the given mode name is enabled, false otherwise.
         *
         * @param {String} name
         * @return {Boolean}
         * @api public
         */

        function enabled(name) {
          var i, len;
          for (i = 0, len = exports.skips.length; i < len; i++) {
            if (exports.skips[i].test(name)) {
              return false;
            }
          }
          for (i = 0, len = exports.names.length; i < len; i++) {
            if (exports.names[i].test(name)) {
              return true;
            }
          }
          return false;
        }

        /**
         * Coerce `val`.
         *
         * @param {Mixed} val
         * @return {Mixed}
         * @api private
         */

        function coerce(val) {
          if (val instanceof Error) return val.stack || val.message;
          return val;
        }
      }, { "ms": 25 }], 19: [function (_dereq_, module, exports) {
        (function (global) {
          /**
           * Module dependencies.
           */

          var keys = _dereq_('./keys');
          var hasBinary = _dereq_('has-binary');
          var sliceBuffer = _dereq_('arraybuffer.slice');
          var base64encoder = _dereq_('base64-arraybuffer');
          var after = _dereq_('after');
          var utf8 = _dereq_('utf8');

          /**
           * Check if we are running an android browser. That requires us to use
           * ArrayBuffer with polling transports...
           *
           * http://ghinda.net/jpeg-blob-ajax-android/
           */

          var isAndroid = navigator.userAgent.match(/Android/i);

          /**
           * Check if we are running in PhantomJS.
           * Uploading a Blob with PhantomJS does not work correctly, as reported here:
           * https://github.com/ariya/phantomjs/issues/11395
           * @type boolean
           */
          var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

          /**
           * When true, avoids using Blobs to encode payloads.
           * @type boolean
           */
          var dontSendBlobs = isAndroid || isPhantomJS;

          /**
           * Current protocol version.
           */

          exports.protocol = 3;

          /**
           * Packet types.
           */

          var packets = exports.packets = {
            open: 0, // non-ws
            close: 1, // non-ws
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
          };

          var packetslist = keys(packets);

          /**
           * Premade error packet.
           */

          var err = { type: 'error', data: 'parser error' };

          /**
           * Create a blob api even for blob builder when vendor prefixes exist
           */

          var Blob = _dereq_('blob');

          /**
           * Encodes a packet.
           *
           *     <packet type id> [ <data> ]
           *
           * Example:
           *
           *     5hello world
           *     3
           *     4
           *
           * Binary is encoded in an identical principle
           *
           * @api private
           */

          exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
            if ('function' == typeof supportsBinary) {
              callback = supportsBinary;
              supportsBinary = false;
            }

            if ('function' == typeof utf8encode) {
              callback = utf8encode;
              utf8encode = null;
            }

            var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

            if (global.ArrayBuffer && data instanceof ArrayBuffer) {
              return encodeArrayBuffer(packet, supportsBinary, callback);
            } else if (Blob && data instanceof global.Blob) {
              return encodeBlob(packet, supportsBinary, callback);
            }

            // might be an object with { base64: true, data: dataAsBase64String }
            if (data && data.base64) {
              return encodeBase64Object(packet, callback);
            }

            // Sending data as a utf-8 string
            var encoded = packets[packet.type];

            // data fragment is optional
            if (undefined !== packet.data) {
              encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
            }

            return callback('' + encoded);
          };

          function encodeBase64Object(packet, callback) {
            // packet data is an object { base64: true, data: dataAsBase64String }
            var message = 'b' + exports.packets[packet.type] + packet.data.data;
            return callback(message);
          }

          /**
           * Encode packet helpers for binary types
           */

          function encodeArrayBuffer(packet, supportsBinary, callback) {
            if (!supportsBinary) {
              return exports.encodeBase64Packet(packet, callback);
            }

            var data = packet.data;
            var contentArray = new Uint8Array(data);
            var resultBuffer = new Uint8Array(1 + data.byteLength);

            resultBuffer[0] = packets[packet.type];
            for (var i = 0; i < contentArray.length; i++) {
              resultBuffer[i + 1] = contentArray[i];
            }

            return callback(resultBuffer.buffer);
          }

          function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
            if (!supportsBinary) {
              return exports.encodeBase64Packet(packet, callback);
            }

            var fr = new FileReader();
            fr.onload = function () {
              packet.data = fr.result;
              exports.encodePacket(packet, supportsBinary, true, callback);
            };
            return fr.readAsArrayBuffer(packet.data);
          }

          function encodeBlob(packet, supportsBinary, callback) {
            if (!supportsBinary) {
              return exports.encodeBase64Packet(packet, callback);
            }

            if (dontSendBlobs) {
              return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
            }

            var length = new Uint8Array(1);
            length[0] = packets[packet.type];
            var blob = new Blob([length.buffer, packet.data]);

            return callback(blob);
          }

          /**
           * Encodes a packet with binary data in a base64 string
           *
           * @param {Object} packet, has `type` and `data`
           * @return {String} base64 encoded message
           */

          exports.encodeBase64Packet = function (packet, callback) {
            var message = 'b' + exports.packets[packet.type];
            if (Blob && packet.data instanceof global.Blob) {
              var fr = new FileReader();
              fr.onload = function () {
                var b64 = fr.result.split(',')[1];
                callback(message + b64);
              };
              return fr.readAsDataURL(packet.data);
            }

            var b64data;
            try {
              b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
            } catch (e) {
              // iPhone Safari doesn't let you apply with typed arrays
              var typed = new Uint8Array(packet.data);
              var basic = new Array(typed.length);
              for (var i = 0; i < typed.length; i++) {
                basic[i] = typed[i];
              }
              b64data = String.fromCharCode.apply(null, basic);
            }
            message += global.btoa(b64data);
            return callback(message);
          };

          /**
           * Decodes a packet. Changes format to Blob if requested.
           *
           * @return {Object} with `type` and `data` (if any)
           * @api private
           */

          exports.decodePacket = function (data, binaryType, utf8decode) {
            // String data
            if (typeof data == 'string' || data === undefined) {
              if (data.charAt(0) == 'b') {
                return exports.decodeBase64Packet(data.substr(1), binaryType);
              }

              if (utf8decode) {
                try {
                  data = utf8.decode(data);
                } catch (e) {
                  return err;
                }
              }
              var type = data.charAt(0);

              if (Number(type) != type || !packetslist[type]) {
                return err;
              }

              if (data.length > 1) {
                return { type: packetslist[type], data: data.substring(1) };
              } else {
                return { type: packetslist[type] };
              }
            }

            var asArray = new Uint8Array(data);
            var type = asArray[0];
            var rest = sliceBuffer(data, 1);
            if (Blob && binaryType === 'blob') {
              rest = new Blob([rest]);
            }
            return { type: packetslist[type], data: rest };
          };

          /**
           * Decodes a packet encoded in a base64 string
           *
           * @param {String} base64 encoded message
           * @return {Object} with `type` and `data` (if any)
           */

          exports.decodeBase64Packet = function (msg, binaryType) {
            var type = packetslist[msg.charAt(0)];
            if (!global.ArrayBuffer) {
              return { type: type, data: { base64: true, data: msg.substr(1) } };
            }

            var data = base64encoder.decode(msg.substr(1));

            if (binaryType === 'blob' && Blob) {
              data = new Blob([data]);
            }

            return { type: type, data: data };
          };

          /**
           * Encodes multiple messages (payload).
           *
           *     <length>:data
           *
           * Example:
           *
           *     11:hello world2:hi
           *
           * If any contents are binary, they will be encoded as base64 strings. Base64
           * encoded strings are marked with a b before the length specifier
           *
           * @param {Array} packets
           * @api private
           */

          exports.encodePayload = function (packets, supportsBinary, callback) {
            if (typeof supportsBinary == 'function') {
              callback = supportsBinary;
              supportsBinary = null;
            }

            var isBinary = hasBinary(packets);

            if (supportsBinary && isBinary) {
              if (Blob && !dontSendBlobs) {
                return exports.encodePayloadAsBlob(packets, callback);
              }

              return exports.encodePayloadAsArrayBuffer(packets, callback);
            }

            if (!packets.length) {
              return callback('0:');
            }

            function setLengthHeader(message) {
              return message.length + ':' + message;
            }

            function encodeOne(packet, doneCallback) {
              exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function (message) {
                doneCallback(null, setLengthHeader(message));
              });
            }

            map(packets, encodeOne, function (err, results) {
              return callback(results.join(''));
            });
          };

          /**
           * Async array map using after
           */

          function map(ary, each, done) {
            var result = new Array(ary.length);
            var next = after(ary.length, done);

            var eachWithIndex = function eachWithIndex(i, el, cb) {
              each(el, function (error, msg) {
                result[i] = msg;
                cb(error, result);
              });
            };

            for (var i = 0; i < ary.length; i++) {
              eachWithIndex(i, ary[i], next);
            }
          }

          /*
           * Decodes data when a payload is maybe expected. Possible binary contents are
           * decoded from their base64 representation
           *
           * @param {String} data, callback method
           * @api public
           */

          exports.decodePayload = function (data, binaryType, callback) {
            if (typeof data != 'string') {
              return exports.decodePayloadAsBinary(data, binaryType, callback);
            }

            if (typeof binaryType === 'function') {
              callback = binaryType;
              binaryType = null;
            }

            var packet;
            if (data == '') {
              // parser error - ignoring payload
              return callback(err, 0, 1);
            }

            var length = '',
                n,
                msg;

            for (var i = 0, l = data.length; i < l; i++) {
              var chr = data.charAt(i);

              if (':' != chr) {
                length += chr;
              } else {
                if ('' == length || length != (n = Number(length))) {
                  // parser error - ignoring payload
                  return callback(err, 0, 1);
                }

                msg = data.substr(i + 1, n);

                if (length != msg.length) {
                  // parser error - ignoring payload
                  return callback(err, 0, 1);
                }

                if (msg.length) {
                  packet = exports.decodePacket(msg, binaryType, true);

                  if (err.type == packet.type && err.data == packet.data) {
                    // parser error in individual packet - ignoring payload
                    return callback(err, 0, 1);
                  }

                  var ret = callback(packet, i + n, l);
                  if (false === ret) return;
                }

                // advance cursor
                i += n;
                length = '';
              }
            }

            if (length != '') {
              // parser error - ignoring payload
              return callback(err, 0, 1);
            }
          };

          /**
           * Encodes multiple messages (payload) as binary.
           *
           * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
           * 255><data>
           *
           * Example:
           * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
           *
           * @param {Array} packets
           * @return {ArrayBuffer} encoded payload
           * @api private
           */

          exports.encodePayloadAsArrayBuffer = function (packets, callback) {
            if (!packets.length) {
              return callback(new ArrayBuffer(0));
            }

            function encodeOne(packet, doneCallback) {
              exports.encodePacket(packet, true, true, function (data) {
                return doneCallback(null, data);
              });
            }

            map(packets, encodeOne, function (err, encodedPackets) {
              var totalLength = encodedPackets.reduce(function (acc, p) {
                var len;
                if (typeof p === 'string') {
                  len = p.length;
                } else {
                  len = p.byteLength;
                }
                return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
              }, 0);

              var resultArray = new Uint8Array(totalLength);

              var bufferIndex = 0;
              encodedPackets.forEach(function (p) {
                var isString = typeof p === 'string';
                var ab = p;
                if (isString) {
                  var view = new Uint8Array(p.length);
                  for (var i = 0; i < p.length; i++) {
                    view[i] = p.charCodeAt(i);
                  }
                  ab = view.buffer;
                }

                if (isString) {
                  // not true binary
                  resultArray[bufferIndex++] = 0;
                } else {
                  // true binary
                  resultArray[bufferIndex++] = 1;
                }

                var lenStr = ab.byteLength.toString();
                for (var i = 0; i < lenStr.length; i++) {
                  resultArray[bufferIndex++] = parseInt(lenStr[i]);
                }
                resultArray[bufferIndex++] = 255;

                var view = new Uint8Array(ab);
                for (var i = 0; i < view.length; i++) {
                  resultArray[bufferIndex++] = view[i];
                }
              });

              return callback(resultArray.buffer);
            });
          };

          /**
           * Encode as Blob
           */

          exports.encodePayloadAsBlob = function (packets, callback) {
            function encodeOne(packet, doneCallback) {
              exports.encodePacket(packet, true, true, function (encoded) {
                var binaryIdentifier = new Uint8Array(1);
                binaryIdentifier[0] = 1;
                if (typeof encoded === 'string') {
                  var view = new Uint8Array(encoded.length);
                  for (var i = 0; i < encoded.length; i++) {
                    view[i] = encoded.charCodeAt(i);
                  }
                  encoded = view.buffer;
                  binaryIdentifier[0] = 0;
                }

                var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;

                var lenStr = len.toString();
                var lengthAry = new Uint8Array(lenStr.length + 1);
                for (var i = 0; i < lenStr.length; i++) {
                  lengthAry[i] = parseInt(lenStr[i]);
                }
                lengthAry[lenStr.length] = 255;

                if (Blob) {
                  var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
                  doneCallback(null, blob);
                }
              });
            }

            map(packets, encodeOne, function (err, results) {
              return callback(new Blob(results));
            });
          };

          /*
           * Decodes data when a payload is maybe expected. Strings are decoded by
           * interpreting each byte as a key code for entries marked to start with 0. See
           * description of encodePayloadAsBinary
           *
           * @param {ArrayBuffer} data, callback method
           * @api public
           */

          exports.decodePayloadAsBinary = function (data, binaryType, callback) {
            if (typeof binaryType === 'function') {
              callback = binaryType;
              binaryType = null;
            }

            var bufferTail = data;
            var buffers = [];

            var numberTooLong = false;
            while (bufferTail.byteLength > 0) {
              var tailArray = new Uint8Array(bufferTail);
              var isString = tailArray[0] === 0;
              var msgLength = '';

              for (var i = 1;; i++) {
                if (tailArray[i] == 255) break;

                if (msgLength.length > 310) {
                  numberTooLong = true;
                  break;
                }

                msgLength += tailArray[i];
              }

              if (numberTooLong) return callback(err, 0, 1);

              bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
              msgLength = parseInt(msgLength);

              var msg = sliceBuffer(bufferTail, 0, msgLength);
              if (isString) {
                try {
                  msg = String.fromCharCode.apply(null, new Uint8Array(msg));
                } catch (e) {
                  // iPhone Safari doesn't let you apply to typed arrays
                  var typed = new Uint8Array(msg);
                  msg = '';
                  for (var i = 0; i < typed.length; i++) {
                    msg += String.fromCharCode(typed[i]);
                  }
                }
              }

              buffers.push(msg);
              bufferTail = sliceBuffer(bufferTail, msgLength);
            }

            var total = buffers.length;
            buffers.forEach(function (buffer, i) {
              callback(exports.decodePacket(buffer, binaryType, true), i, total);
            });
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "./keys": 20, "after": 11, "arraybuffer.slice": 12, "base64-arraybuffer": 13, "blob": 14, "has-binary": 21, "utf8": 29 }], 20: [function (_dereq_, module, exports) {

        /**
         * Gets the keys for an object.
         *
         * @return {Array} keys
         * @api private
         */

        module.exports = Object.keys || function keys(obj) {
          var arr = [];
          var has = Object.prototype.hasOwnProperty;

          for (var i in obj) {
            if (has.call(obj, i)) {
              arr.push(i);
            }
          }
          return arr;
        };
      }, {}], 21: [function (_dereq_, module, exports) {
        (function (global) {

          /*
           * Module requirements.
           */

          var isArray = _dereq_('isarray');

          /**
           * Module exports.
           */

          module.exports = hasBinary;

          /**
           * Checks for binary data.
           *
           * Right now only Buffer and ArrayBuffer are supported..
           *
           * @param {Object} anything
           * @api public
           */

          function hasBinary(data) {

            function _hasBinary(obj) {
              if (!obj) return false;

              if (global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                return true;
              }

              if (isArray(obj)) {
                for (var i = 0; i < obj.length; i++) {
                  if (_hasBinary(obj[i])) {
                    return true;
                  }
                }
              } else if (obj && 'object' == typeof obj) {
                if (obj.toJSON) {
                  obj = obj.toJSON();
                }

                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                    return true;
                  }
                }
              }

              return false;
            }

            return _hasBinary(data);
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "isarray": 24 }], 22: [function (_dereq_, module, exports) {

        /**
         * Module exports.
         *
         * Logic borrowed from Modernizr:
         *
         *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
         */

        try {
          module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
        } catch (err) {
          // if XMLHttp support is disabled in IE then it will throw
          // when trying to create
          module.exports = false;
        }
      }, {}], 23: [function (_dereq_, module, exports) {

        var indexOf = [].indexOf;

        module.exports = function (arr, obj) {
          if (indexOf) return arr.indexOf(obj);
          for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === obj) return i;
          }
          return -1;
        };
      }, {}], 24: [function (_dereq_, module, exports) {
        module.exports = Array.isArray || function (arr) {
          return Object.prototype.toString.call(arr) == '[object Array]';
        };
      }, {}], 25: [function (_dereq_, module, exports) {
        /**
         * Helpers.
         */

        var s = 1000;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var y = d * 365.25;

        /**
         * Parse or format the given `val`.
         *
         * Options:
         *
         *  - `long` verbose formatting [false]
         *
         * @param {String|Number} val
         * @param {Object} options
         * @return {String|Number}
         * @api public
         */

        module.exports = function (val, options) {
          options = options || {};
          if ('string' == typeof val) return parse(val);
          return options.long ? long(val) : short(val);
        };

        /**
         * Parse the given `str` and return milliseconds.
         *
         * @param {String} str
         * @return {Number}
         * @api private
         */

        function parse(str) {
          str = '' + str;
          if (str.length > 10000) return;
          var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
          if (!match) return;
          var n = parseFloat(match[1]);
          var type = (match[2] || 'ms').toLowerCase();
          switch (type) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return n * y;
            case 'days':
            case 'day':
            case 'd':
              return n * d;
            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
              return n * h;
            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
              return n * m;
            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
              return n * s;
            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
              return n;
          }
        }

        /**
         * Short format for `ms`.
         *
         * @param {Number} ms
         * @return {String}
         * @api private
         */

        function short(ms) {
          if (ms >= d) return Math.round(ms / d) + 'd';
          if (ms >= h) return Math.round(ms / h) + 'h';
          if (ms >= m) return Math.round(ms / m) + 'm';
          if (ms >= s) return Math.round(ms / s) + 's';
          return ms + 'ms';
        }

        /**
         * Long format for `ms`.
         *
         * @param {Number} ms
         * @return {String}
         * @api private
         */

        function long(ms) {
          return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
        }

        /**
         * Pluralization helper.
         */

        function plural(ms, n, name) {
          if (ms < n) return;
          if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
          return Math.ceil(ms / n) + ' ' + name + 's';
        }
      }, {}], 26: [function (_dereq_, module, exports) {
        (function (global) {
          /**
           * JSON parse.
           *
           * @see Based on jQuery#parseJSON (MIT) and JSON2
           * @api private
           */

          var rvalidchars = /^[\],:{}\s]*$/;
          var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
          var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
          var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
          var rtrimLeft = /^\s+/;
          var rtrimRight = /\s+$/;

          module.exports = function parsejson(data) {
            if ('string' != typeof data || !data) {
              return null;
            }

            data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

            // Attempt to parse using the native JSON parser first
            if (global.JSON && JSON.parse) {
              return JSON.parse(data);
            }

            if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
              return new Function('return ' + data)();
            }
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, {}], 27: [function (_dereq_, module, exports) {
        /**
         * Compiles a querystring
         * Returns string representation of the object
         *
         * @param {Object}
         * @api private
         */

        exports.encode = function (obj) {
          var str = '';

          for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
              if (str.length) str += '&';
              str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
            }
          }

          return str;
        };

        /**
         * Parses a simple querystring into an object
         *
         * @param {String} qs
         * @api private
         */

        exports.decode = function (qs) {
          var qry = {};
          var pairs = qs.split('&');
          for (var i = 0, l = pairs.length; i < l; i++) {
            var pair = pairs[i].split('=');
            qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
          }
          return qry;
        };
      }, {}], 28: [function (_dereq_, module, exports) {
        /**
         * Parses an URI
         *
         * @author Steven Levithan <stevenlevithan.com> (MIT license)
         * @api private
         */

        var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

        var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

        module.exports = function parseuri(str) {
          var src = str,
              b = str.indexOf('['),
              e = str.indexOf(']');

          if (b != -1 && e != -1) {
            str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
          }

          var m = re.exec(str || ''),
              uri = {},
              i = 14;

          while (i--) {
            uri[parts[i]] = m[i] || '';
          }

          if (b != -1 && e != -1) {
            uri.source = src;
            uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
            uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
            uri.ipv6uri = true;
          }

          return uri;
        };
      }, {}], 29: [function (_dereq_, module, exports) {
        (function (global) {
          /*! https://mths.be/utf8js v2.0.0 by @mathias */
          ;(function (root) {

            // Detect free variables `exports`
            var freeExports = typeof exports == 'object' && exports;

            // Detect free variable `module`
            var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;

            // Detect free variable `global`, from Node.js or Browserified code,
            // and use it as `root`
            var freeGlobal = typeof global == 'object' && global;
            if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
              root = freeGlobal;
            }

            /*--------------------------------------------------------------------------*/

            var stringFromCharCode = String.fromCharCode;

            // Taken from https://mths.be/punycode
            function ucs2decode(string) {
              var output = [];
              var counter = 0;
              var length = string.length;
              var value;
              var extra;
              while (counter < length) {
                value = string.charCodeAt(counter++);
                if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                  // high surrogate, and there is a next character
                  extra = string.charCodeAt(counter++);
                  if ((extra & 0xFC00) == 0xDC00) {
                    // low surrogate
                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                  } else {
                    // unmatched surrogate; only append this code unit, in case the next
                    // code unit is the high surrogate of a surrogate pair
                    output.push(value);
                    counter--;
                  }
                } else {
                  output.push(value);
                }
              }
              return output;
            }

            // Taken from https://mths.be/punycode
            function ucs2encode(array) {
              var length = array.length;
              var index = -1;
              var value;
              var output = '';
              while (++index < length) {
                value = array[index];
                if (value > 0xFFFF) {
                  value -= 0x10000;
                  output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                  value = 0xDC00 | value & 0x3FF;
                }
                output += stringFromCharCode(value);
              }
              return output;
            }

            function checkScalarValue(codePoint) {
              if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
                throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
              }
            }
            /*--------------------------------------------------------------------------*/

            function createByte(codePoint, shift) {
              return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
            }

            function encodeCodePoint(codePoint) {
              if ((codePoint & 0xFFFFFF80) == 0) {
                // 1-byte sequence
                return stringFromCharCode(codePoint);
              }
              var symbol = '';
              if ((codePoint & 0xFFFFF800) == 0) {
                // 2-byte sequence
                symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
              } else if ((codePoint & 0xFFFF0000) == 0) {
                // 3-byte sequence
                checkScalarValue(codePoint);
                symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
                symbol += createByte(codePoint, 6);
              } else if ((codePoint & 0xFFE00000) == 0) {
                // 4-byte sequence
                symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
                symbol += createByte(codePoint, 12);
                symbol += createByte(codePoint, 6);
              }
              symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
              return symbol;
            }

            function utf8encode(string) {
              var codePoints = ucs2decode(string);
              var length = codePoints.length;
              var index = -1;
              var codePoint;
              var byteString = '';
              while (++index < length) {
                codePoint = codePoints[index];
                byteString += encodeCodePoint(codePoint);
              }
              return byteString;
            }

            /*--------------------------------------------------------------------------*/

            function readContinuationByte() {
              if (byteIndex >= byteCount) {
                throw Error('Invalid byte index');
              }

              var continuationByte = byteArray[byteIndex] & 0xFF;
              byteIndex++;

              if ((continuationByte & 0xC0) == 0x80) {
                return continuationByte & 0x3F;
              }

              // If we end up here, it’s not a continuation byte
              throw Error('Invalid continuation byte');
            }

            function decodeSymbol() {
              var byte1;
              var byte2;
              var byte3;
              var byte4;
              var codePoint;

              if (byteIndex > byteCount) {
                throw Error('Invalid byte index');
              }

              if (byteIndex == byteCount) {
                return false;
              }

              // Read first byte
              byte1 = byteArray[byteIndex] & 0xFF;
              byteIndex++;

              // 1-byte sequence (no continuation bytes)
              if ((byte1 & 0x80) == 0) {
                return byte1;
              }

              // 2-byte sequence
              if ((byte1 & 0xE0) == 0xC0) {
                var byte2 = readContinuationByte();
                codePoint = (byte1 & 0x1F) << 6 | byte2;
                if (codePoint >= 0x80) {
                  return codePoint;
                } else {
                  throw Error('Invalid continuation byte');
                }
              }

              // 3-byte sequence (may include unpaired surrogates)
              if ((byte1 & 0xF0) == 0xE0) {
                byte2 = readContinuationByte();
                byte3 = readContinuationByte();
                codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;
                if (codePoint >= 0x0800) {
                  checkScalarValue(codePoint);
                  return codePoint;
                } else {
                  throw Error('Invalid continuation byte');
                }
              }

              // 4-byte sequence
              if ((byte1 & 0xF8) == 0xF0) {
                byte2 = readContinuationByte();
                byte3 = readContinuationByte();
                byte4 = readContinuationByte();
                codePoint = (byte1 & 0x0F) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;
                if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
                  return codePoint;
                }
              }

              throw Error('Invalid UTF-8 detected');
            }

            var byteArray;
            var byteCount;
            var byteIndex;
            function utf8decode(byteString) {
              byteArray = ucs2decode(byteString);
              byteCount = byteArray.length;
              byteIndex = 0;
              var codePoints = [];
              var tmp;
              while ((tmp = decodeSymbol()) !== false) {
                codePoints.push(tmp);
              }
              return ucs2encode(codePoints);
            }

            /*--------------------------------------------------------------------------*/

            var utf8 = {
              'version': '2.0.0',
              'encode': utf8encode,
              'decode': utf8decode
            };

            // Some AMD build optimizers, like r.js, check for specific condition patterns
            // like the following:
            if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
              define(function () {
                return utf8;
              });
            } else if (freeExports && !freeExports.nodeType) {
              if (freeModule) {
                // in Node.js or RingoJS v0.8.0+
                freeModule.exports = utf8;
              } else {
                // in Narwhal or RingoJS v0.7.0-
                var object = {};
                var hasOwnProperty = object.hasOwnProperty;
                for (var key in utf8) {
                  hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
                }
              }
            } else {
              // in Rhino or a web browser
              root.utf8 = utf8;
            }
          })(this);
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, {}], 30: [function (_dereq_, module, exports) {
        'use strict';

        var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
            length = 64,
            map = {},
            seed = 0,
            i = 0,
            prev;

        /**
         * Return a string representing the specified number.
         *
         * @param {Number} num The number to convert.
         * @returns {String} The string representation of the number.
         * @api public
         */
        function encode(num) {
          var encoded = '';

          do {
            encoded = alphabet[num % length] + encoded;
            num = Math.floor(num / length);
          } while (num > 0);

          return encoded;
        }

        /**
         * Return the integer value specified by the given string.
         *
         * @param {String} str The string to convert.
         * @returns {Number} The integer value represented by the string.
         * @api public
         */
        function decode(str) {
          var decoded = 0;

          for (i = 0; i < str.length; i++) {
            decoded = decoded * length + map[str.charAt(i)];
          }

          return decoded;
        }

        /**
         * Yeast: A tiny growing id generator.
         *
         * @returns {String} A unique id.
         * @api public
         */
        function yeast() {
          var now = encode(+new Date());

          if (now !== prev) return seed = 0, prev = now;
          return now + '.' + encode(seed++);
        }

        //
        // Map each character to its index.
        //
        for (; i < length; i++) map[alphabet[i]] = i;

        //
        // Expose the `yeast`, `encode` and `decode` functions.
        //
        yeast.encode = encode;
        yeast.decode = decode;
        module.exports = yeast;
      }, {}], 31: [function (_dereq_, module, exports) {

        /**
         * Module dependencies.
         */

        var url = _dereq_('./url');
        var parser = _dereq_('socket.io-parser');
        var Manager = _dereq_('./manager');
        var debug = _dereq_('debug')('socket.io-client');

        /**
         * Module exports.
         */

        module.exports = exports = lookup;

        /**
         * Managers cache.
         */

        var cache = exports.managers = {};

        /**
         * Looks up an existing `Manager` for multiplexing.
         * If the user summons:
         *
         *   `io('http://localhost/a');`
         *   `io('http://localhost/b');`
         *
         * We reuse the existing instance based on same scheme/port/host,
         * and we initialize sockets for each namespace.
         *
         * @api public
         */

        function lookup(uri, opts) {
          if (typeof uri == 'object') {
            opts = uri;
            uri = undefined;
          }

          opts = opts || {};

          var parsed = url(uri);
          var source = parsed.source;
          var id = parsed.id;
          var path = parsed.path;
          var sameNamespace = cache[id] && path in cache[id].nsps;
          var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;

          var io;

          if (newConnection) {
            debug('ignoring socket cache for %s', source);
            io = Manager(source, opts);
          } else {
            if (!cache[id]) {
              debug('new io instance for %s', source);
              cache[id] = Manager(source, opts);
            }
            io = cache[id];
          }

          return io.socket(parsed.path);
        }

        /**
         * Protocol version.
         *
         * @api public
         */

        exports.protocol = parser.protocol;

        /**
         * `connect`.
         *
         * @param {String} uri
         * @api public
         */

        exports.connect = lookup;

        /**
         * Expose constructors for standalone build.
         *
         * @api public
         */

        exports.Manager = _dereq_('./manager');
        exports.Socket = _dereq_('./socket');
      }, { "./manager": 32, "./socket": 34, "./url": 35, "debug": 39, "socket.io-parser": 47 }], 32: [function (_dereq_, module, exports) {

        /**
         * Module dependencies.
         */

        var eio = _dereq_('engine.io-client');
        var Socket = _dereq_('./socket');
        var Emitter = _dereq_('component-emitter');
        var parser = _dereq_('socket.io-parser');
        var on = _dereq_('./on');
        var bind = _dereq_('component-bind');
        var debug = _dereq_('debug')('socket.io-client:manager');
        var indexOf = _dereq_('indexof');
        var Backoff = _dereq_('backo2');

        /**
         * IE6+ hasOwnProperty
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Module exports
         */

        module.exports = Manager;

        /**
         * `Manager` constructor.
         *
         * @param {String} engine instance or engine uri/opts
         * @param {Object} options
         * @api public
         */

        function Manager(uri, opts) {
          if (!(this instanceof Manager)) return new Manager(uri, opts);
          if (uri && 'object' == typeof uri) {
            opts = uri;
            uri = undefined;
          }
          opts = opts || {};

          opts.path = opts.path || '/socket.io';
          this.nsps = {};
          this.subs = [];
          this.opts = opts;
          this.reconnection(opts.reconnection !== false);
          this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
          this.reconnectionDelay(opts.reconnectionDelay || 1000);
          this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
          this.randomizationFactor(opts.randomizationFactor || 0.5);
          this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
          });
          this.timeout(null == opts.timeout ? 20000 : opts.timeout);
          this.readyState = 'closed';
          this.uri = uri;
          this.connecting = [];
          this.lastPing = null;
          this.encoding = false;
          this.packetBuffer = [];
          this.encoder = new parser.Encoder();
          this.decoder = new parser.Decoder();
          this.autoConnect = opts.autoConnect !== false;
          if (this.autoConnect) this.open();
        }

        /**
         * Propagate given event to sockets and emit on `this`
         *
         * @api private
         */

        Manager.prototype.emitAll = function () {
          this.emit.apply(this, arguments);
          for (var nsp in this.nsps) {
            if (has.call(this.nsps, nsp)) {
              this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
            }
          }
        };

        /**
         * Update `socket.id` of all sockets
         *
         * @api private
         */

        Manager.prototype.updateSocketIds = function () {
          for (var nsp in this.nsps) {
            if (has.call(this.nsps, nsp)) {
              this.nsps[nsp].id = this.engine.id;
            }
          }
        };

        /**
         * Mix in `Emitter`.
         */

        Emitter(Manager.prototype);

        /**
         * Sets the `reconnection` config.
         *
         * @param {Boolean} true/false if it should automatically reconnect
         * @return {Manager} self or value
         * @api public
         */

        Manager.prototype.reconnection = function (v) {
          if (!arguments.length) return this._reconnection;
          this._reconnection = !!v;
          return this;
        };

        /**
         * Sets the reconnection attempts config.
         *
         * @param {Number} max reconnection attempts before giving up
         * @return {Manager} self or value
         * @api public
         */

        Manager.prototype.reconnectionAttempts = function (v) {
          if (!arguments.length) return this._reconnectionAttempts;
          this._reconnectionAttempts = v;
          return this;
        };

        /**
         * Sets the delay between reconnections.
         *
         * @param {Number} delay
         * @return {Manager} self or value
         * @api public
         */

        Manager.prototype.reconnectionDelay = function (v) {
          if (!arguments.length) return this._reconnectionDelay;
          this._reconnectionDelay = v;
          this.backoff && this.backoff.setMin(v);
          return this;
        };

        Manager.prototype.randomizationFactor = function (v) {
          if (!arguments.length) return this._randomizationFactor;
          this._randomizationFactor = v;
          this.backoff && this.backoff.setJitter(v);
          return this;
        };

        /**
         * Sets the maximum delay between reconnections.
         *
         * @param {Number} delay
         * @return {Manager} self or value
         * @api public
         */

        Manager.prototype.reconnectionDelayMax = function (v) {
          if (!arguments.length) return this._reconnectionDelayMax;
          this._reconnectionDelayMax = v;
          this.backoff && this.backoff.setMax(v);
          return this;
        };

        /**
         * Sets the connection timeout. `false` to disable
         *
         * @return {Manager} self or value
         * @api public
         */

        Manager.prototype.timeout = function (v) {
          if (!arguments.length) return this._timeout;
          this._timeout = v;
          return this;
        };

        /**
         * Starts trying to reconnect if reconnection is enabled and we have not
         * started reconnecting yet
         *
         * @api private
         */

        Manager.prototype.maybeReconnectOnOpen = function () {
          // Only try to reconnect if it's the first time we're connecting
          if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
          }
        };

        /**
         * Sets the current transport `socket`.
         *
         * @param {Function} optional, callback
         * @return {Manager} self
         * @api public
         */

        Manager.prototype.open = Manager.prototype.connect = function (fn) {
          debug('readyState %s', this.readyState);
          if (~this.readyState.indexOf('open')) return this;

          debug('opening %s', this.uri);
          this.engine = eio(this.uri, this.opts);
          var socket = this.engine;
          var self = this;
          this.readyState = 'opening';
          this.skipReconnect = false;

          // emit `open`
          var openSub = on(socket, 'open', function () {
            self.onopen();
            fn && fn();
          });

          // emit `connect_error`
          var errorSub = on(socket, 'error', function (data) {
            debug('connect_error');
            self.cleanup();
            self.readyState = 'closed';
            self.emitAll('connect_error', data);
            if (fn) {
              var err = new Error('Connection error');
              err.data = data;
              fn(err);
            } else {
              // Only do this if there is no fn to handle the error
              self.maybeReconnectOnOpen();
            }
          });

          // emit `connect_timeout`
          if (false !== this._timeout) {
            var timeout = this._timeout;
            debug('connect attempt will timeout after %d', timeout);

            // set timer
            var timer = setTimeout(function () {
              debug('connect attempt timed out after %d', timeout);
              openSub.destroy();
              socket.close();
              socket.emit('error', 'timeout');
              self.emitAll('connect_timeout', timeout);
            }, timeout);

            this.subs.push({
              destroy: function destroy() {
                clearTimeout(timer);
              }
            });
          }

          this.subs.push(openSub);
          this.subs.push(errorSub);

          return this;
        };

        /**
         * Called upon transport open.
         *
         * @api private
         */

        Manager.prototype.onopen = function () {
          debug('open');

          // clear old subs
          this.cleanup();

          // mark as open
          this.readyState = 'open';
          this.emit('open');

          // add new subs
          var socket = this.engine;
          this.subs.push(on(socket, 'data', bind(this, 'ondata')));
          this.subs.push(on(socket, 'ping', bind(this, 'onping')));
          this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
          this.subs.push(on(socket, 'error', bind(this, 'onerror')));
          this.subs.push(on(socket, 'close', bind(this, 'onclose')));
          this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
        };

        /**
         * Called upon a ping.
         *
         * @api private
         */

        Manager.prototype.onping = function () {
          this.lastPing = new Date();
          this.emitAll('ping');
        };

        /**
         * Called upon a packet.
         *
         * @api private
         */

        Manager.prototype.onpong = function () {
          this.emitAll('pong', new Date() - this.lastPing);
        };

        /**
         * Called with data.
         *
         * @api private
         */

        Manager.prototype.ondata = function (data) {
          this.decoder.add(data);
        };

        /**
         * Called when parser fully decodes a packet.
         *
         * @api private
         */

        Manager.prototype.ondecoded = function (packet) {
          this.emit('packet', packet);
        };

        /**
         * Called upon socket error.
         *
         * @api private
         */

        Manager.prototype.onerror = function (err) {
          debug('error', err);
          this.emitAll('error', err);
        };

        /**
         * Creates a new socket for the given `nsp`.
         *
         * @return {Socket}
         * @api public
         */

        Manager.prototype.socket = function (nsp) {
          var socket = this.nsps[nsp];
          if (!socket) {
            socket = new Socket(this, nsp);
            this.nsps[nsp] = socket;
            var self = this;
            socket.on('connecting', onConnecting);
            socket.on('connect', function () {
              socket.id = self.engine.id;
            });

            if (this.autoConnect) {
              // manually call here since connecting evnet is fired before listening
              onConnecting();
            }
          }

          function onConnecting() {
            if (! ~indexOf(self.connecting, socket)) {
              self.connecting.push(socket);
            }
          }

          return socket;
        };

        /**
         * Called upon a socket close.
         *
         * @param {Socket} socket
         */

        Manager.prototype.destroy = function (socket) {
          var index = indexOf(this.connecting, socket);
          if (~index) this.connecting.splice(index, 1);
          if (this.connecting.length) return;

          this.close();
        };

        /**
         * Writes a packet.
         *
         * @param {Object} packet
         * @api private
         */

        Manager.prototype.packet = function (packet) {
          debug('writing packet %j', packet);
          var self = this;

          if (!self.encoding) {
            // encode, then write to engine with result
            self.encoding = true;
            this.encoder.encode(packet, function (encodedPackets) {
              for (var i = 0; i < encodedPackets.length; i++) {
                self.engine.write(encodedPackets[i], packet.options);
              }
              self.encoding = false;
              self.processPacketQueue();
            });
          } else {
            // add packet to the queue
            self.packetBuffer.push(packet);
          }
        };

        /**
         * If packet buffer is non-empty, begins encoding the
         * next packet in line.
         *
         * @api private
         */

        Manager.prototype.processPacketQueue = function () {
          if (this.packetBuffer.length > 0 && !this.encoding) {
            var pack = this.packetBuffer.shift();
            this.packet(pack);
          }
        };

        /**
         * Clean up transport subscriptions and packet buffer.
         *
         * @api private
         */

        Manager.prototype.cleanup = function () {
          debug('cleanup');

          var sub;
          while (sub = this.subs.shift()) sub.destroy();

          this.packetBuffer = [];
          this.encoding = false;
          this.lastPing = null;

          this.decoder.destroy();
        };

        /**
         * Close the current socket.
         *
         * @api private
         */

        Manager.prototype.close = Manager.prototype.disconnect = function () {
          debug('disconnect');
          this.skipReconnect = true;
          this.reconnecting = false;
          if ('opening' == this.readyState) {
            // `onclose` will not fire because
            // an open event never happened
            this.cleanup();
          }
          this.backoff.reset();
          this.readyState = 'closed';
          if (this.engine) this.engine.close();
        };

        /**
         * Called upon engine close.
         *
         * @api private
         */

        Manager.prototype.onclose = function (reason) {
          debug('onclose');

          this.cleanup();
          this.backoff.reset();
          this.readyState = 'closed';
          this.emit('close', reason);

          if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
          }
        };

        /**
         * Attempt a reconnection.
         *
         * @api private
         */

        Manager.prototype.reconnect = function () {
          if (this.reconnecting || this.skipReconnect) return this;

          var self = this;

          if (this.backoff.attempts >= this._reconnectionAttempts) {
            debug('reconnect failed');
            this.backoff.reset();
            this.emitAll('reconnect_failed');
            this.reconnecting = false;
          } else {
            var delay = this.backoff.duration();
            debug('will wait %dms before reconnect attempt', delay);

            this.reconnecting = true;
            var timer = setTimeout(function () {
              if (self.skipReconnect) return;

              debug('attempting reconnect');
              self.emitAll('reconnect_attempt', self.backoff.attempts);
              self.emitAll('reconnecting', self.backoff.attempts);

              // check again for the case socket closed in above events
              if (self.skipReconnect) return;

              self.open(function (err) {
                if (err) {
                  debug('reconnect attempt error');
                  self.reconnecting = false;
                  self.reconnect();
                  self.emitAll('reconnect_error', err.data);
                } else {
                  debug('reconnect success');
                  self.onreconnect();
                }
              });
            }, delay);

            this.subs.push({
              destroy: function destroy() {
                clearTimeout(timer);
              }
            });
          }
        };

        /**
         * Called upon successful reconnect.
         *
         * @api private
         */

        Manager.prototype.onreconnect = function () {
          var attempt = this.backoff.attempts;
          this.reconnecting = false;
          this.backoff.reset();
          this.updateSocketIds();
          this.emitAll('reconnect', attempt);
        };
      }, { "./on": 33, "./socket": 34, "backo2": 36, "component-bind": 37, "component-emitter": 38, "debug": 39, "engine.io-client": 1, "indexof": 42, "socket.io-parser": 47 }], 33: [function (_dereq_, module, exports) {

        /**
         * Module exports.
         */

        module.exports = on;

        /**
         * Helper for subscriptions.
         *
         * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
         * @param {String} event name
         * @param {Function} callback
         * @api public
         */

        function on(obj, ev, fn) {
          obj.on(ev, fn);
          return {
            destroy: function destroy() {
              obj.removeListener(ev, fn);
            }
          };
        }
      }, {}], 34: [function (_dereq_, module, exports) {

        /**
         * Module dependencies.
         */

        var parser = _dereq_('socket.io-parser');
        var Emitter = _dereq_('component-emitter');
        var toArray = _dereq_('to-array');
        var on = _dereq_('./on');
        var bind = _dereq_('component-bind');
        var debug = _dereq_('debug')('socket.io-client:socket');
        var hasBin = _dereq_('has-binary');

        /**
         * Module exports.
         */

        module.exports = exports = Socket;

        /**
         * Internal events (blacklisted).
         * These events can't be emitted by the user.
         *
         * @api private
         */

        var events = {
          connect: 1,
          connect_error: 1,
          connect_timeout: 1,
          connecting: 1,
          disconnect: 1,
          error: 1,
          reconnect: 1,
          reconnect_attempt: 1,
          reconnect_failed: 1,
          reconnect_error: 1,
          reconnecting: 1,
          ping: 1,
          pong: 1
        };

        /**
         * Shortcut to `Emitter#emit`.
         */

        var emit = Emitter.prototype.emit;

        /**
         * `Socket` constructor.
         *
         * @api public
         */

        function Socket(io, nsp) {
          this.io = io;
          this.nsp = nsp;
          this.json = this; // compat
          this.ids = 0;
          this.acks = {};
          this.receiveBuffer = [];
          this.sendBuffer = [];
          this.connected = false;
          this.disconnected = true;
          if (this.io.autoConnect) this.open();
        }

        /**
         * Mix in `Emitter`.
         */

        Emitter(Socket.prototype);

        /**
         * Subscribe to open, close and packet events
         *
         * @api private
         */

        Socket.prototype.subEvents = function () {
          if (this.subs) return;

          var io = this.io;
          this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
        };

        /**
         * "Opens" the socket.
         *
         * @api public
         */

        Socket.prototype.open = Socket.prototype.connect = function () {
          if (this.connected) return this;

          this.subEvents();
          this.io.open(); // ensure open
          if ('open' == this.io.readyState) this.onopen();
          this.emit('connecting');
          return this;
        };

        /**
         * Sends a `message` event.
         *
         * @return {Socket} self
         * @api public
         */

        Socket.prototype.send = function () {
          var args = toArray(arguments);
          args.unshift('message');
          this.emit.apply(this, args);
          return this;
        };

        /**
         * Override `emit`.
         * If the event is in `events`, it's emitted normally.
         *
         * @param {String} event name
         * @return {Socket} self
         * @api public
         */

        Socket.prototype.emit = function (ev) {
          if (events.hasOwnProperty(ev)) {
            emit.apply(this, arguments);
            return this;
          }

          var args = toArray(arguments);
          var parserType = parser.EVENT; // default
          if (hasBin(args)) {
            parserType = parser.BINARY_EVENT;
          } // binary
          var packet = { type: parserType, data: args };

          packet.options = {};
          packet.options.compress = !this.flags || false !== this.flags.compress;

          // event ack callback
          if ('function' == typeof args[args.length - 1]) {
            debug('emitting packet with ack id %d', this.ids);
            this.acks[this.ids] = args.pop();
            packet.id = this.ids++;
          }

          if (this.connected) {
            this.packet(packet);
          } else {
            this.sendBuffer.push(packet);
          }

          delete this.flags;

          return this;
        };

        /**
         * Sends a packet.
         *
         * @param {Object} packet
         * @api private
         */

        Socket.prototype.packet = function (packet) {
          packet.nsp = this.nsp;
          this.io.packet(packet);
        };

        /**
         * Called upon engine `open`.
         *
         * @api private
         */

        Socket.prototype.onopen = function () {
          debug('transport is open - connecting');

          // write connect packet if necessary
          if ('/' != this.nsp) {
            this.packet({ type: parser.CONNECT });
          }
        };

        /**
         * Called upon engine `close`.
         *
         * @param {String} reason
         * @api private
         */

        Socket.prototype.onclose = function (reason) {
          debug('close (%s)', reason);
          this.connected = false;
          this.disconnected = true;
          delete this.id;
          this.emit('disconnect', reason);
        };

        /**
         * Called with socket packet.
         *
         * @param {Object} packet
         * @api private
         */

        Socket.prototype.onpacket = function (packet) {
          if (packet.nsp != this.nsp) return;

          switch (packet.type) {
            case parser.CONNECT:
              this.onconnect();
              break;

            case parser.EVENT:
              this.onevent(packet);
              break;

            case parser.BINARY_EVENT:
              this.onevent(packet);
              break;

            case parser.ACK:
              this.onack(packet);
              break;

            case parser.BINARY_ACK:
              this.onack(packet);
              break;

            case parser.DISCONNECT:
              this.ondisconnect();
              break;

            case parser.ERROR:
              this.emit('error', packet.data);
              break;
          }
        };

        /**
         * Called upon a server event.
         *
         * @param {Object} packet
         * @api private
         */

        Socket.prototype.onevent = function (packet) {
          var args = packet.data || [];
          debug('emitting event %j', args);

          if (null != packet.id) {
            debug('attaching ack callback to event');
            args.push(this.ack(packet.id));
          }

          if (this.connected) {
            emit.apply(this, args);
          } else {
            this.receiveBuffer.push(args);
          }
        };

        /**
         * Produces an ack callback to emit with an event.
         *
         * @api private
         */

        Socket.prototype.ack = function (id) {
          var self = this;
          var sent = false;
          return function () {
            // prevent double callbacks
            if (sent) return;
            sent = true;
            var args = toArray(arguments);
            debug('sending ack %j', args);

            var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
            self.packet({
              type: type,
              id: id,
              data: args
            });
          };
        };

        /**
         * Called upon a server acknowlegement.
         *
         * @param {Object} packet
         * @api private
         */

        Socket.prototype.onack = function (packet) {
          var ack = this.acks[packet.id];
          if ('function' == typeof ack) {
            debug('calling ack %s with %j', packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
          } else {
            debug('bad ack %s', packet.id);
          }
        };

        /**
         * Called upon server connect.
         *
         * @api private
         */

        Socket.prototype.onconnect = function () {
          this.connected = true;
          this.disconnected = false;
          this.emit('connect');
          this.emitBuffered();
        };

        /**
         * Emit buffered events (received and emitted).
         *
         * @api private
         */

        Socket.prototype.emitBuffered = function () {
          var i;
          for (i = 0; i < this.receiveBuffer.length; i++) {
            emit.apply(this, this.receiveBuffer[i]);
          }
          this.receiveBuffer = [];

          for (i = 0; i < this.sendBuffer.length; i++) {
            this.packet(this.sendBuffer[i]);
          }
          this.sendBuffer = [];
        };

        /**
         * Called upon server disconnect.
         *
         * @api private
         */

        Socket.prototype.ondisconnect = function () {
          debug('server disconnect (%s)', this.nsp);
          this.destroy();
          this.onclose('io server disconnect');
        };

        /**
         * Called upon forced client/server side disconnections,
         * this method ensures the manager stops tracking us and
         * that reconnections don't get triggered for this.
         *
         * @api private.
         */

        Socket.prototype.destroy = function () {
          if (this.subs) {
            // clean subscriptions to avoid reconnections
            for (var i = 0; i < this.subs.length; i++) {
              this.subs[i].destroy();
            }
            this.subs = null;
          }

          this.io.destroy(this);
        };

        /**
         * Disconnects the socket manually.
         *
         * @return {Socket} self
         * @api public
         */

        Socket.prototype.close = Socket.prototype.disconnect = function () {
          if (this.connected) {
            debug('performing disconnect (%s)', this.nsp);
            this.packet({ type: parser.DISCONNECT });
          }

          // remove socket from pool
          this.destroy();

          if (this.connected) {
            // fire events
            this.onclose('io client disconnect');
          }
          return this;
        };

        /**
         * Sets the compress flag.
         *
         * @param {Boolean} if `true`, compresses the sending data
         * @return {Socket} self
         * @api public
         */

        Socket.prototype.compress = function (compress) {
          this.flags = this.flags || {};
          this.flags.compress = compress;
          return this;
        };
      }, { "./on": 33, "component-bind": 37, "component-emitter": 38, "debug": 39, "has-binary": 41, "socket.io-parser": 47, "to-array": 51 }], 35: [function (_dereq_, module, exports) {
        (function (global) {

          /**
           * Module dependencies.
           */

          var parseuri = _dereq_('parseuri');
          var debug = _dereq_('debug')('socket.io-client:url');

          /**
           * Module exports.
           */

          module.exports = url;

          /**
           * URL parser.
           *
           * @param {String} url
           * @param {Object} An object meant to mimic window.location.
           *                 Defaults to window.location.
           * @api public
           */

          function url(uri, loc) {
            var obj = uri;

            // default to window.location
            var loc = loc || global.location;
            if (null == uri) uri = loc.protocol + '//' + loc.host;

            // relative path support
            if ('string' == typeof uri) {
              if ('/' == uri.charAt(0)) {
                if ('/' == uri.charAt(1)) {
                  uri = loc.protocol + uri;
                } else {
                  uri = loc.host + uri;
                }
              }

              if (!/^(https?|wss?):\/\//.test(uri)) {
                debug('protocol-less url %s', uri);
                if ('undefined' != typeof loc) {
                  uri = loc.protocol + '//' + uri;
                } else {
                  uri = 'https://' + uri;
                }
              }

              // parse
              debug('parse %s', uri);
              obj = parseuri(uri);
            }

            // make sure we treat `localhost:80` and `localhost` equally
            if (!obj.port) {
              if (/^(http|ws)$/.test(obj.protocol)) {
                obj.port = '80';
              } else if (/^(http|ws)s$/.test(obj.protocol)) {
                obj.port = '443';
              }
            }

            obj.path = obj.path || '/';

            var ipv6 = obj.host.indexOf(':') !== -1;
            var host = ipv6 ? '[' + obj.host + ']' : obj.host;

            // define unique id
            obj.id = obj.protocol + '://' + host + ':' + obj.port;
            // define href
            obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : ':' + obj.port);

            return obj;
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "debug": 39, "parseuri": 45 }], 36: [function (_dereq_, module, exports) {

        /**
         * Expose `Backoff`.
         */

        module.exports = Backoff;

        /**
         * Initialize backoff timer with `opts`.
         *
         * - `min` initial timeout in milliseconds [100]
         * - `max` max timeout [10000]
         * - `jitter` [0]
         * - `factor` [2]
         *
         * @param {Object} opts
         * @api public
         */

        function Backoff(opts) {
          opts = opts || {};
          this.ms = opts.min || 100;
          this.max = opts.max || 10000;
          this.factor = opts.factor || 2;
          this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
          this.attempts = 0;
        }

        /**
         * Return the backoff duration.
         *
         * @return {Number}
         * @api public
         */

        Backoff.prototype.duration = function () {
          var ms = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var rand = Math.random();
            var deviation = Math.floor(rand * this.jitter * ms);
            ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
          }
          return Math.min(ms, this.max) | 0;
        };

        /**
         * Reset the number of attempts.
         *
         * @api public
         */

        Backoff.prototype.reset = function () {
          this.attempts = 0;
        };

        /**
         * Set the minimum duration
         *
         * @api public
         */

        Backoff.prototype.setMin = function (min) {
          this.ms = min;
        };

        /**
         * Set the maximum duration
         *
         * @api public
         */

        Backoff.prototype.setMax = function (max) {
          this.max = max;
        };

        /**
         * Set the jitter
         *
         * @api public
         */

        Backoff.prototype.setJitter = function (jitter) {
          this.jitter = jitter;
        };
      }, {}], 37: [function (_dereq_, module, exports) {
        /**
         * Slice reference.
         */

        var slice = [].slice;

        /**
         * Bind `obj` to `fn`.
         *
         * @param {Object} obj
         * @param {Function|String} fn or string
         * @return {Function}
         * @api public
         */

        module.exports = function (obj, fn) {
          if ('string' == typeof fn) fn = obj[fn];
          if ('function' != typeof fn) throw new Error('bind() requires a function');
          var args = slice.call(arguments, 2);
          return function () {
            return fn.apply(obj, args.concat(slice.call(arguments)));
          };
        };
      }, {}], 38: [function (_dereq_, module, exports) {

        /**
         * Expose `Emitter`.
         */

        module.exports = Emitter;

        /**
         * Initialize a new `Emitter`.
         *
         * @api public
         */

        function Emitter(obj) {
          if (obj) return mixin(obj);
        };

        /**
         * Mixin the emitter properties.
         *
         * @param {Object} obj
         * @return {Object}
         * @api private
         */

        function mixin(obj) {
          for (var key in Emitter.prototype) {
            obj[key] = Emitter.prototype[key];
          }
          return obj;
        }

        /**
         * Listen on the given `event` with `fn`.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
          this._callbacks = this._callbacks || {};
          (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
          return this;
        };

        /**
         * Adds an `event` listener that will be invoked a single
         * time then automatically removed.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.once = function (event, fn) {
          function on() {
            this.off(event, on);
            fn.apply(this, arguments);
          }

          on.fn = fn;
          this.on(event, on);
          return this;
        };

        /**
         * Remove the given callback for `event` or all
         * registered callbacks.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
          this._callbacks = this._callbacks || {};

          // all
          if (0 == arguments.length) {
            this._callbacks = {};
            return this;
          }

          // specific event
          var callbacks = this._callbacks['$' + event];
          if (!callbacks) return this;

          // remove all handlers
          if (1 == arguments.length) {
            delete this._callbacks['$' + event];
            return this;
          }

          // remove specific handler
          var cb;
          for (var i = 0; i < callbacks.length; i++) {
            cb = callbacks[i];
            if (cb === fn || cb.fn === fn) {
              callbacks.splice(i, 1);
              break;
            }
          }
          return this;
        };

        /**
         * Emit `event` with the given args.
         *
         * @param {String} event
         * @param {Mixed} ...
         * @return {Emitter}
         */

        Emitter.prototype.emit = function (event) {
          this._callbacks = this._callbacks || {};
          var args = [].slice.call(arguments, 1),
              callbacks = this._callbacks['$' + event];

          if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i) {
              callbacks[i].apply(this, args);
            }
          }

          return this;
        };

        /**
         * Return array of callbacks for `event`.
         *
         * @param {String} event
         * @return {Array}
         * @api public
         */

        Emitter.prototype.listeners = function (event) {
          this._callbacks = this._callbacks || {};
          return this._callbacks['$' + event] || [];
        };

        /**
         * Check if this emitter has `event` handlers.
         *
         * @param {String} event
         * @return {Boolean}
         * @api public
         */

        Emitter.prototype.hasListeners = function (event) {
          return !!this.listeners(event).length;
        };
      }, {}], 39: [function (_dereq_, module, exports) {
        arguments[4][17][0].apply(exports, arguments);
      }, { "./debug": 40, "dup": 17 }], 40: [function (_dereq_, module, exports) {
        arguments[4][18][0].apply(exports, arguments);
      }, { "dup": 18, "ms": 44 }], 41: [function (_dereq_, module, exports) {
        (function (global) {

          /*
           * Module requirements.
           */

          var isArray = _dereq_('isarray');

          /**
           * Module exports.
           */

          module.exports = hasBinary;

          /**
           * Checks for binary data.
           *
           * Right now only Buffer and ArrayBuffer are supported..
           *
           * @param {Object} anything
           * @api public
           */

          function hasBinary(data) {

            function _hasBinary(obj) {
              if (!obj) return false;

              if (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                return true;
              }

              if (isArray(obj)) {
                for (var i = 0; i < obj.length; i++) {
                  if (_hasBinary(obj[i])) {
                    return true;
                  }
                }
              } else if (obj && 'object' == typeof obj) {
                // see: https://github.com/Automattic/has-binary/pull/4
                if (obj.toJSON && 'function' == typeof obj.toJSON) {
                  obj = obj.toJSON();
                }

                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                    return true;
                  }
                }
              }

              return false;
            }

            return _hasBinary(data);
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "isarray": 43 }], 42: [function (_dereq_, module, exports) {
        arguments[4][23][0].apply(exports, arguments);
      }, { "dup": 23 }], 43: [function (_dereq_, module, exports) {
        arguments[4][24][0].apply(exports, arguments);
      }, { "dup": 24 }], 44: [function (_dereq_, module, exports) {
        arguments[4][25][0].apply(exports, arguments);
      }, { "dup": 25 }], 45: [function (_dereq_, module, exports) {
        arguments[4][28][0].apply(exports, arguments);
      }, { "dup": 28 }], 46: [function (_dereq_, module, exports) {
        (function (global) {
          /*global Blob,File*/

          /**
           * Module requirements
           */

          var isArray = _dereq_('isarray');
          var isBuf = _dereq_('./is-buffer');

          /**
           * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
           * Anything with blobs or files should be fed through removeBlobs before coming
           * here.
           *
           * @param {Object} packet - socket.io event packet
           * @return {Object} with deconstructed packet and list of buffers
           * @api public
           */

          exports.deconstructPacket = function (packet) {
            var buffers = [];
            var packetData = packet.data;

            function _deconstructPacket(data) {
              if (!data) return data;

              if (isBuf(data)) {
                var placeholder = { _placeholder: true, num: buffers.length };
                buffers.push(data);
                return placeholder;
              } else if (isArray(data)) {
                var newData = new Array(data.length);
                for (var i = 0; i < data.length; i++) {
                  newData[i] = _deconstructPacket(data[i]);
                }
                return newData;
              } else if ('object' == typeof data && !(data instanceof Date)) {
                var newData = {};
                for (var key in data) {
                  newData[key] = _deconstructPacket(data[key]);
                }
                return newData;
              }
              return data;
            }

            var pack = packet;
            pack.data = _deconstructPacket(packetData);
            pack.attachments = buffers.length; // number of binary 'attachments'
            return { packet: pack, buffers: buffers };
          };

          /**
           * Reconstructs a binary packet from its placeholder packet and buffers
           *
           * @param {Object} packet - event packet with placeholders
           * @param {Array} buffers - binary buffers to put in placeholder positions
           * @return {Object} reconstructed packet
           * @api public
           */

          exports.reconstructPacket = function (packet, buffers) {
            var curPlaceHolder = 0;

            function _reconstructPacket(data) {
              if (data && data._placeholder) {
                var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
                return buf;
              } else if (isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                  data[i] = _reconstructPacket(data[i]);
                }
                return data;
              } else if (data && 'object' == typeof data) {
                for (var key in data) {
                  data[key] = _reconstructPacket(data[key]);
                }
                return data;
              }
              return data;
            }

            packet.data = _reconstructPacket(packet.data);
            packet.attachments = undefined; // no longer useful
            return packet;
          };

          /**
           * Asynchronously removes Blobs or Files from data via
           * FileReader's readAsArrayBuffer method. Used before encoding
           * data as msgpack. Calls callback with the blobless data.
           *
           * @param {Object} data
           * @param {Function} callback
           * @api private
           */

          exports.removeBlobs = function (data, callback) {
            function _removeBlobs(obj, curKey, containingObject) {
              if (!obj) return obj;

              // convert any blob
              if (global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
                pendingBlobs++;

                // async filereader
                var fileReader = new FileReader();
                fileReader.onload = function () {
                  // this.result == arraybuffer
                  if (containingObject) {
                    containingObject[curKey] = this.result;
                  } else {
                    bloblessData = this.result;
                  }

                  // if nothing pending its callback time
                  if (! --pendingBlobs) {
                    callback(bloblessData);
                  }
                };

                fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
              } else if (isArray(obj)) {
                  // handle array
                  for (var i = 0; i < obj.length; i++) {
                    _removeBlobs(obj[i], i, obj);
                  }
                } else if (obj && 'object' == typeof obj && !isBuf(obj)) {
                  // and object
                  for (var key in obj) {
                    _removeBlobs(obj[key], key, obj);
                  }
                }
            }

            var pendingBlobs = 0;
            var bloblessData = data;
            _removeBlobs(bloblessData);
            if (!pendingBlobs) {
              callback(bloblessData);
            }
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, { "./is-buffer": 48, "isarray": 43 }], 47: [function (_dereq_, module, exports) {

        /**
         * Module dependencies.
         */

        var debug = _dereq_('debug')('socket.io-parser');
        var json = _dereq_('json3');
        var isArray = _dereq_('isarray');
        var Emitter = _dereq_('component-emitter');
        var binary = _dereq_('./binary');
        var isBuf = _dereq_('./is-buffer');

        /**
         * Protocol version.
         *
         * @api public
         */

        exports.protocol = 4;

        /**
         * Packet types.
         *
         * @api public
         */

        exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'BINARY_EVENT', 'ACK', 'BINARY_ACK', 'ERROR'];

        /**
         * Packet type `connect`.
         *
         * @api public
         */

        exports.CONNECT = 0;

        /**
         * Packet type `disconnect`.
         *
         * @api public
         */

        exports.DISCONNECT = 1;

        /**
         * Packet type `event`.
         *
         * @api public
         */

        exports.EVENT = 2;

        /**
         * Packet type `ack`.
         *
         * @api public
         */

        exports.ACK = 3;

        /**
         * Packet type `error`.
         *
         * @api public
         */

        exports.ERROR = 4;

        /**
         * Packet type 'binary event'
         *
         * @api public
         */

        exports.BINARY_EVENT = 5;

        /**
         * Packet type `binary ack`. For acks with binary arguments.
         *
         * @api public
         */

        exports.BINARY_ACK = 6;

        /**
         * Encoder constructor.
         *
         * @api public
         */

        exports.Encoder = Encoder;

        /**
         * Decoder constructor.
         *
         * @api public
         */

        exports.Decoder = Decoder;

        /**
         * A socket.io Encoder instance
         *
         * @api public
         */

        function Encoder() {}

        /**
         * Encode a packet as a single string if non-binary, or as a
         * buffer sequence, depending on packet type.
         *
         * @param {Object} obj - packet object
         * @param {Function} callback - function to handle encodings (likely engine.write)
         * @return Calls callback with Array of encodings
         * @api public
         */

        Encoder.prototype.encode = function (obj, callback) {
          debug('encoding packet %j', obj);

          if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
            encodeAsBinary(obj, callback);
          } else {
            var encoding = encodeAsString(obj);
            callback([encoding]);
          }
        };

        /**
         * Encode packet as string.
         *
         * @param {Object} packet
         * @return {String} encoded
         * @api private
         */

        function encodeAsString(obj) {
          var str = '';
          var nsp = false;

          // first is type
          str += obj.type;

          // attachments if we have them
          if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
            str += obj.attachments;
            str += '-';
          }

          // if we have a namespace other than `/`
          // we append it followed by a comma `,`
          if (obj.nsp && '/' != obj.nsp) {
            nsp = true;
            str += obj.nsp;
          }

          // immediately followed by the id
          if (null != obj.id) {
            if (nsp) {
              str += ',';
              nsp = false;
            }
            str += obj.id;
          }

          // json data
          if (null != obj.data) {
            if (nsp) str += ',';
            str += json.stringify(obj.data);
          }

          debug('encoded %j as %s', obj, str);
          return str;
        }

        /**
         * Encode packet as 'buffer sequence' by removing blobs, and
         * deconstructing packet into object with placeholders and
         * a list of buffers.
         *
         * @param {Object} packet
         * @return {Buffer} encoded
         * @api private
         */

        function encodeAsBinary(obj, callback) {

          function writeEncoding(bloblessData) {
            var deconstruction = binary.deconstructPacket(bloblessData);
            var pack = encodeAsString(deconstruction.packet);
            var buffers = deconstruction.buffers;

            buffers.unshift(pack); // add packet info to beginning of data list
            callback(buffers); // write all the buffers
          }

          binary.removeBlobs(obj, writeEncoding);
        }

        /**
         * A socket.io Decoder instance
         *
         * @return {Object} decoder
         * @api public
         */

        function Decoder() {
          this.reconstructor = null;
        }

        /**
         * Mix in `Emitter` with Decoder.
         */

        Emitter(Decoder.prototype);

        /**
         * Decodes an ecoded packet string into packet JSON.
         *
         * @param {String} obj - encoded packet
         * @return {Object} packet
         * @api public
         */

        Decoder.prototype.add = function (obj) {
          var packet;
          if ('string' == typeof obj) {
            packet = decodeString(obj);
            if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
              // binary packet's json
              this.reconstructor = new BinaryReconstructor(packet);

              // no attachments, labeled binary but no binary data to follow
              if (this.reconstructor.reconPack.attachments === 0) {
                this.emit('decoded', packet);
              }
            } else {
              // non-binary full packet
              this.emit('decoded', packet);
            }
          } else if (isBuf(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
              throw new Error('got binary data when not reconstructing a packet');
            } else {
              packet = this.reconstructor.takeBinaryData(obj);
              if (packet) {
                // received final buffer
                this.reconstructor = null;
                this.emit('decoded', packet);
              }
            }
          } else {
            throw new Error('Unknown type: ' + obj);
          }
        };

        /**
         * Decode a packet String (JSON data)
         *
         * @param {String} str
         * @return {Object} packet
         * @api private
         */

        function decodeString(str) {
          var p = {};
          var i = 0;

          // look up type
          p.type = Number(str.charAt(0));
          if (null == exports.types[p.type]) return error();

          // look up attachments if type binary
          if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
            var buf = '';
            while (str.charAt(++i) != '-') {
              buf += str.charAt(i);
              if (i == str.length) break;
            }
            if (buf != Number(buf) || str.charAt(i) != '-') {
              throw new Error('Illegal attachments');
            }
            p.attachments = Number(buf);
          }

          // look up namespace (if any)
          if ('/' == str.charAt(i + 1)) {
            p.nsp = '';
            while (++i) {
              var c = str.charAt(i);
              if (',' == c) break;
              p.nsp += c;
              if (i == str.length) break;
            }
          } else {
            p.nsp = '/';
          }

          // look up id
          var next = str.charAt(i + 1);
          if ('' !== next && Number(next) == next) {
            p.id = '';
            while (++i) {
              var c = str.charAt(i);
              if (null == c || Number(c) != c) {
                --i;
                break;
              }
              p.id += str.charAt(i);
              if (i == str.length) break;
            }
            p.id = Number(p.id);
          }

          // look up json data
          if (str.charAt(++i)) {
            try {
              p.data = json.parse(str.substr(i));
            } catch (e) {
              return error();
            }
          }

          debug('decoded %s as %j', str, p);
          return p;
        }

        /**
         * Deallocates a parser's resources
         *
         * @api public
         */

        Decoder.prototype.destroy = function () {
          if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
          }
        };

        /**
         * A manager of a binary event's 'buffer sequence'. Should
         * be constructed whenever a packet of type BINARY_EVENT is
         * decoded.
         *
         * @param {Object} packet
         * @return {BinaryReconstructor} initialized reconstructor
         * @api private
         */

        function BinaryReconstructor(packet) {
          this.reconPack = packet;
          this.buffers = [];
        }

        /**
         * Method to be called when binary data received from connection
         * after a BINARY_EVENT packet.
         *
         * @param {Buffer | ArrayBuffer} binData - the raw binary data received
         * @return {null | Object} returns null if more binary data is expected or
         *   a reconstructed packet object if all buffers have been received.
         * @api private
         */

        BinaryReconstructor.prototype.takeBinaryData = function (binData) {
          this.buffers.push(binData);
          if (this.buffers.length == this.reconPack.attachments) {
            // done with buffer list
            var packet = binary.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
          }
          return null;
        };

        /**
         * Cleans up binary packet reconstruction variables.
         *
         * @api private
         */

        BinaryReconstructor.prototype.finishedReconstruction = function () {
          this.reconPack = null;
          this.buffers = [];
        };

        function error(data) {
          return {
            type: exports.ERROR,
            data: 'parser error'
          };
        }
      }, { "./binary": 46, "./is-buffer": 48, "component-emitter": 49, "debug": 39, "isarray": 43, "json3": 50 }], 48: [function (_dereq_, module, exports) {
        (function (global) {

          module.exports = isBuf;

          /**
           * Returns true if obj is a buffer or an arraybuffer.
           *
           * @api private
           */

          function isBuf(obj) {
            return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, {}], 49: [function (_dereq_, module, exports) {
        arguments[4][15][0].apply(exports, arguments);
      }, { "dup": 15 }], 50: [function (_dereq_, module, exports) {
        (function (global) {
          /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
          ;(function () {
            // Detect the `define` function exposed by asynchronous module loaders. The
            // strict `define` check is necessary for compatibility with `r.js`.
            var isLoader = typeof define === "function" && define.amd;

            // A set of types used to distinguish objects from primitives.
            var objectTypes = {
              "function": true,
              "object": true
            };

            // Detect the `exports` object exposed by CommonJS implementations.
            var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

            // Use the `global` object exposed by Node (including Browserify via
            // `insert-module-globals`), Narwhal, and Ringo as the default context,
            // and the `window` object in browsers. Rhino exports a `global` function
            // instead.
            var root = objectTypes[typeof window] && window || this,
                freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

            if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
              root = freeGlobal;
            }

            // Public: Initializes JSON 3 using the given `context` object, attaching the
            // `stringify` and `parse` functions to the specified `exports` object.
            function runInContext(context, exports) {
              context || (context = root["Object"]());
              exports || (exports = root["Object"]());

              // Native constructor aliases.
              var Number = context["Number"] || root["Number"],
                  String = context["String"] || root["String"],
                  Object = context["Object"] || root["Object"],
                  Date = context["Date"] || root["Date"],
                  SyntaxError = context["SyntaxError"] || root["SyntaxError"],
                  TypeError = context["TypeError"] || root["TypeError"],
                  Math = context["Math"] || root["Math"],
                  nativeJSON = context["JSON"] || root["JSON"];

              // Delegate to the native `stringify` and `parse` implementations.
              if (typeof nativeJSON == "object" && nativeJSON) {
                exports.stringify = nativeJSON.stringify;
                exports.parse = nativeJSON.parse;
              }

              // Convenience aliases.
              var objectProto = Object.prototype,
                  getClass = objectProto.toString,
                  isProperty,
                  forEach,
                  undef;

              // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
              var isExtended = new Date(-3509827334573292);
              try {
                // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
                // results for certain dates in Opera >= 10.53.
                isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
                // Safari < 2.0.2 stores the internal millisecond time value correctly,
                // but clips the values returned by the date methods to the range of
                // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
                isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
              } catch (exception) {}

              // Internal: Determines whether the native `JSON.stringify` and `parse`
              // implementations are spec-compliant. Based on work by Ken Snyder.
              function has(name) {
                if (has[name] !== undef) {
                  // Return cached feature test result.
                  return has[name];
                }
                var isSupported;
                if (name == "bug-string-char-index") {
                  // IE <= 7 doesn't support accessing string characters using square
                  // bracket notation. IE 8 only supports this for primitives.
                  isSupported = "a"[0] != "a";
                } else if (name == "json") {
                  // Indicates whether both `JSON.stringify` and `JSON.parse` are
                  // supported.
                  isSupported = has("json-stringify") && has("json-parse");
                } else {
                  var value,
                      serialized = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";
                  // Test `JSON.stringify`.
                  if (name == "json-stringify") {
                    var stringify = exports.stringify,
                        stringifySupported = typeof stringify == "function" && isExtended;
                    if (stringifySupported) {
                      // A test function object with a custom `toJSON` method.
                      (value = function () {
                        return 1;
                      }).toJSON = value;
                      try {
                        stringifySupported =
                        // Firefox 3.1b1 and b2 serialize string, number, and boolean
                        // primitives as object literals.
                        stringify(0) === "0" &&
                        // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                        // literals.
                        stringify(new Number()) === "0" && stringify(new String()) == '""' &&
                        // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                        // does not define a canonical JSON representation (this applies to
                        // objects with `toJSON` properties as well, *unless* they are nested
                        // within an object or array).
                        stringify(getClass) === undef &&
                        // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                        // FF 3.1b3 pass this test.
                        stringify(undef) === undef &&
                        // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                        // respectively, if the value is omitted entirely.
                        stringify() === undef &&
                        // FF 3.1b1, 2 throw an error if the given value is not a number,
                        // string, array, object, Boolean, or `null` literal. This applies to
                        // objects with custom `toJSON` methods as well, unless they are nested
                        // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                        // methods entirely.
                        stringify(value) === "1" && stringify([value]) == "[1]" &&
                        // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                        // `"[null]"`.
                        stringify([undef]) == "[null]" &&
                        // YUI 3.0.0b1 fails to serialize `null` literals.
                        stringify(null) == "null" &&
                        // FF 3.1b1, 2 halts serialization if an array contains a function:
                        // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                        // elides non-JSON values from objects and arrays, unless they
                        // define custom `toJSON` methods.
                        stringify([undef, getClass, null]) == "[null,null,null]" &&
                        // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                        // where character escape codes are expected (e.g., `\b` => `\u0008`).
                        stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                        // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                        stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                        // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                        // serialize extended years.
                        stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                        // The milliseconds are optional in ES 5, but required in 5.1.
                        stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                        // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                        // four-digit years instead of six-digit years. Credits: @Yaffle.
                        stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                        // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                        // values less than 1000. Credits: @Yaffle.
                        stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                      } catch (exception) {
                        stringifySupported = false;
                      }
                    }
                    isSupported = stringifySupported;
                  }
                  // Test `JSON.parse`.
                  if (name == "json-parse") {
                    var parse = exports.parse;
                    if (typeof parse == "function") {
                      try {
                        // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                        // Conforming implementations should also coerce the initial argument to
                        // a string prior to parsing.
                        if (parse("0") === 0 && !parse(false)) {
                          // Simple parsing test.
                          value = parse(serialized);
                          var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                          if (parseSupported) {
                            try {
                              // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                              parseSupported = !parse('"\t"');
                            } catch (exception) {}
                            if (parseSupported) {
                              try {
                                // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                                // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                                // certain octal literals.
                                parseSupported = parse("01") !== 1;
                              } catch (exception) {}
                            }
                            if (parseSupported) {
                              try {
                                // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                                // points. These environments, along with FF 3.1b1 and 2,
                                // also allow trailing commas in JSON objects and arrays.
                                parseSupported = parse("1.") !== 1;
                              } catch (exception) {}
                            }
                          }
                        }
                      } catch (exception) {
                        parseSupported = false;
                      }
                    }
                    isSupported = parseSupported;
                  }
                }
                return has[name] = !!isSupported;
              }

              if (!has("json")) {
                // Common `[[Class]]` name aliases.
                var functionClass = "[object Function]",
                    dateClass = "[object Date]",
                    numberClass = "[object Number]",
                    stringClass = "[object String]",
                    arrayClass = "[object Array]",
                    booleanClass = "[object Boolean]";

                // Detect incomplete support for accessing string characters by index.
                var charIndexBuggy = has("bug-string-char-index");

                // Define additional utility methods if the `Date` methods are buggy.
                if (!isExtended) {
                  var floor = Math.floor;
                  // A mapping between the months of the year and the number of days between
                  // January 1st and the first of the respective month.
                  var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                  // Internal: Calculates the number of days between the Unix epoch and the
                  // first day of the given month.
                  var getDay = function getDay(year, month) {
                    return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                  };
                }

                // Internal: Determines if a property is a direct property of the given
                // object. Delegates to the native `Object#hasOwnProperty` method.
                if (!(isProperty = objectProto.hasOwnProperty)) {
                  isProperty = function (property) {
                    var members = {},
                        constructor;
                    if ((members.__proto__ = null, members.__proto__ = {
                      // The *proto* property cannot be set multiple times in recent
                      // versions of Firefox and SeaMonkey.
                      "toString": 1
                    }, members).toString != getClass) {
                      // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
                      // supports the mutable *proto* property.
                      isProperty = function (property) {
                        // Capture and break the object's prototype chain (see section 8.6.2
                        // of the ES 5.1 spec). The parenthesized expression prevents an
                        // unsafe transformation by the Closure Compiler.
                        var original = this.__proto__,
                            result = (property in (this.__proto__ = null, this));
                        // Restore the original prototype chain.
                        this.__proto__ = original;
                        return result;
                      };
                    } else {
                      // Capture a reference to the top-level `Object` constructor.
                      constructor = members.constructor;
                      // Use the `constructor` property to simulate `Object#hasOwnProperty` in
                      // other environments.
                      isProperty = function (property) {
                        var parent = (this.constructor || constructor).prototype;
                        return property in this && !(property in parent && this[property] === parent[property]);
                      };
                    }
                    members = null;
                    return isProperty.call(this, property);
                  };
                }

                // Internal: Normalizes the `for...in` iteration algorithm across
                // environments. Each enumerated key is yielded to a `callback` function.
                forEach = function (object, callback) {
                  var size = 0,
                      Properties,
                      members,
                      property;

                  // Tests for bugs in the current environment's `for...in` algorithm. The
                  // `valueOf` property inherits the non-enumerable flag from
                  // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
                  (Properties = function () {
                    this.valueOf = 0;
                  }).prototype.valueOf = 0;

                  // Iterate over a new instance of the `Properties` class.
                  members = new Properties();
                  for (property in members) {
                    // Ignore all properties inherited from `Object.prototype`.
                    if (isProperty.call(members, property)) {
                      size++;
                    }
                  }
                  Properties = members = null;

                  // Normalize the iteration algorithm.
                  if (!size) {
                    // A list of non-enumerable properties inherited from `Object.prototype`.
                    members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
                    // properties.
                    forEach = function (object, callback) {
                      var isFunction = getClass.call(object) == functionClass,
                          property,
                          length;
                      var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                      for (property in object) {
                        // Gecko <= 1.0 enumerates the `prototype` property of functions under
                        // certain conditions; IE does not.
                        if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                          callback(property);
                        }
                      }
                      // Manually invoke the callback for each non-enumerable property.
                      for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
                    };
                  } else if (size == 2) {
                    // Safari <= 2.0.4 enumerates shadowed properties twice.
                    forEach = function (object, callback) {
                      // Create a set of iterated properties.
                      var members = {},
                          isFunction = getClass.call(object) == functionClass,
                          property;
                      for (property in object) {
                        // Store each property name to prevent double enumeration. The
                        // `prototype` property of functions is not enumerated due to cross-
                        // environment inconsistencies.
                        if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                          callback(property);
                        }
                      }
                    };
                  } else {
                    // No bugs detected; use the standard `for...in` algorithm.
                    forEach = function (object, callback) {
                      var isFunction = getClass.call(object) == functionClass,
                          property,
                          isConstructor;
                      for (property in object) {
                        if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                          callback(property);
                        }
                      }
                      // Manually invoke the callback for the `constructor` property due to
                      // cross-environment inconsistencies.
                      if (isConstructor || isProperty.call(object, property = "constructor")) {
                        callback(property);
                      }
                    };
                  }
                  return forEach(object, callback);
                };

                // Public: Serializes a JavaScript `value` as a JSON string. The optional
                // `filter` argument may specify either a function that alters how object and
                // array members are serialized, or an array of strings and numbers that
                // indicates which properties should be serialized. The optional `width`
                // argument may be either a string or number that specifies the indentation
                // level of the output.
                if (!has("json-stringify")) {
                  // Internal: A map of control characters and their escaped equivalents.
                  var Escapes = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                  };

                  // Internal: Converts `value` into a zero-padded string such that its
                  // length is at least equal to `width`. The `width` must be <= 6.
                  var leadingZeroes = "000000";
                  var toPaddedString = function toPaddedString(width, value) {
                    // The `|| 0` expression is necessary to work around a bug in
                    // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
                    return (leadingZeroes + (value || 0)).slice(-width);
                  };

                  // Internal: Double-quotes a string `value`, replacing all ASCII control
                  // characters (characters with code unit values between 0 and 31) with
                  // their escaped equivalents. This is an implementation of the
                  // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
                  var unicodePrefix = "\\u00";
                  var quote = function quote(value) {
                    var result = '"',
                        index = 0,
                        length = value.length,
                        useCharIndex = !charIndexBuggy || length > 10;
                    var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
                    for (; index < length; index++) {
                      var charCode = value.charCodeAt(index);
                      // If the character is a control character, append its Unicode or
                      // shorthand escape sequence; otherwise, append the character as-is.
                      switch (charCode) {
                        case 8:case 9:case 10:case 12:case 13:case 34:case 92:
                          result += Escapes[charCode];
                          break;
                        default:
                          if (charCode < 32) {
                            result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                            break;
                          }
                          result += useCharIndex ? symbols[index] : value.charAt(index);
                      }
                    }
                    return result + '"';
                  };

                  // Internal: Recursively serializes an object. Implements the
                  // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
                  var serialize = function serialize(property, object, callback, properties, whitespace, indentation, stack) {
                    var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                    try {
                      // Necessary for host object support.
                      value = object[property];
                    } catch (exception) {}
                    if (typeof value == "object" && value) {
                      className = getClass.call(value);
                      if (className == dateClass && !isProperty.call(value, "toJSON")) {
                        if (value > -1 / 0 && value < 1 / 0) {
                          // Dates are serialized according to the `Date#toJSON` method
                          // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                          // for the ISO 8601 date time string format.
                          if (getDay) {
                            // Manually compute the year, month, date, hours, minutes,
                            // seconds, and milliseconds if the `getUTC*` methods are
                            // buggy. Adapted from @Yaffle's `date-shim` project.
                            date = floor(value / 864e5);
                            for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                            for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                            date = 1 + date - getDay(year, month);
                            // The `time` value specifies the time within the day (see ES
                            // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                            // to compute `A modulo B`, as the `%` operator does not
                            // correspond to the `modulo` operation for negative numbers.
                            time = (value % 864e5 + 864e5) % 864e5;
                            // The hours, minutes, seconds, and milliseconds are obtained by
                            // decomposing the time within the day. See section 15.9.1.10.
                            hours = floor(time / 36e5) % 24;
                            minutes = floor(time / 6e4) % 60;
                            seconds = floor(time / 1e3) % 60;
                            milliseconds = time % 1e3;
                          } else {
                            year = value.getUTCFullYear();
                            month = value.getUTCMonth();
                            date = value.getUTCDate();
                            hours = value.getUTCHours();
                            minutes = value.getUTCMinutes();
                            seconds = value.getUTCSeconds();
                            milliseconds = value.getUTCMilliseconds();
                          }
                          // Serialize extended years correctly.
                          value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                          // Months, dates, hours, minutes, and seconds should have two
                          // digits; milliseconds should have three.
                          "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                          // Milliseconds are optional in ES 5.0, but required in 5.1.
                          "." + toPaddedString(3, milliseconds) + "Z";
                        } else {
                          value = null;
                        }
                      } else if (typeof value.toJSON == "function" && (className != numberClass && className != stringClass && className != arrayClass || isProperty.call(value, "toJSON"))) {
                        // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
                        // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
                        // ignores all `toJSON` methods on these objects unless they are
                        // defined directly on an instance.
                        value = value.toJSON(property);
                      }
                    }
                    if (callback) {
                      // If a replacement function was provided, call it to obtain the value
                      // for serialization.
                      value = callback.call(object, property, value);
                    }
                    if (value === null) {
                      return "null";
                    }
                    className = getClass.call(value);
                    if (className == booleanClass) {
                      // Booleans are represented literally.
                      return "" + value;
                    } else if (className == numberClass) {
                      // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                      // `"null"`.
                      return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                    } else if (className == stringClass) {
                      // Strings are double-quoted and escaped.
                      return quote("" + value);
                    }
                    // Recursively serialize objects and arrays.
                    if (typeof value == "object") {
                      // Check for cyclic structures. This is a linear search; performance
                      // is inversely proportional to the number of unique nested objects.
                      for (length = stack.length; length--;) {
                        if (stack[length] === value) {
                          // Cyclic structures cannot be serialized by `JSON.stringify`.
                          throw TypeError();
                        }
                      }
                      // Add the object to the stack of traversed objects.
                      stack.push(value);
                      results = [];
                      // Save the current indentation level and indent one additional level.
                      prefix = indentation;
                      indentation += whitespace;
                      if (className == arrayClass) {
                        // Recursively serialize array elements.
                        for (index = 0, length = value.length; index < length; index++) {
                          element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                          results.push(element === undef ? "null" : element);
                        }
                        result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
                      } else {
                        // Recursively serialize object members. Members are selected from
                        // either a user-specified list of property names, or the object
                        // itself.
                        forEach(properties || value, function (property) {
                          var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                          if (element !== undef) {
                            // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                            // is not the empty string, let `member` {quote(property) + ":"}
                            // be the concatenation of `member` and the `space` character."
                            // The "`space` character" refers to the literal space
                            // character, not the `space` {width} argument provided to
                            // `JSON.stringify`.
                            results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                          }
                        });
                        result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                      }
                      // Remove the object from the traversed object stack.
                      stack.pop();
                      return result;
                    }
                  };

                  // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
                  exports.stringify = function (source, filter, width) {
                    var whitespace, callback, properties, className;
                    if (objectTypes[typeof filter] && filter) {
                      if ((className = getClass.call(filter)) == functionClass) {
                        callback = filter;
                      } else if (className == arrayClass) {
                        // Convert the property names array into a makeshift set.
                        properties = {};
                        for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1));
                      }
                    }
                    if (width) {
                      if ((className = getClass.call(width)) == numberClass) {
                        // Convert the `width` to an integer and create a string containing
                        // `width` number of space characters.
                        if ((width -= width % 1) > 0) {
                          for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
                        }
                      } else if (className == stringClass) {
                        whitespace = width.length <= 10 ? width : width.slice(0, 10);
                      }
                    }
                    // Opera <= 7.54u2 discards the values associated with empty string keys
                    // (`""`) only if they are used directly within an object member list
                    // (e.g., `!("" in { "": 1})`).
                    return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
                  };
                }

                // Public: Parses a JSON source string.
                if (!has("json-parse")) {
                  var fromCharCode = String.fromCharCode;

                  // Internal: A map of escaped control characters and their unescaped
                  // equivalents.
                  var Unescapes = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                  };

                  // Internal: Stores the parser state.
                  var Index, Source;

                  // Internal: Resets the parser state and throws a `SyntaxError`.
                  var abort = function abort() {
                    Index = Source = null;
                    throw SyntaxError();
                  };

                  // Internal: Returns the next token, or `"$"` if the parser has reached
                  // the end of the source string. A token may be a string, number, `null`
                  // literal, or Boolean literal.
                  var lex = function lex() {
                    var source = Source,
                        length = source.length,
                        value,
                        begin,
                        position,
                        isSigned,
                        charCode;
                    while (Index < length) {
                      charCode = source.charCodeAt(Index);
                      switch (charCode) {
                        case 9:case 10:case 13:case 32:
                          // Skip whitespace tokens, including tabs, carriage returns, line
                          // feeds, and space characters.
                          Index++;
                          break;
                        case 123:case 125:case 91:case 93:case 58:case 44:
                          // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                          // the current position.
                          value = charIndexBuggy ? source.charAt(Index) : source[Index];
                          Index++;
                          return value;
                        case 34:
                          // `"` delimits a JSON string; advance to the next character and
                          // begin parsing the string. String tokens are prefixed with the
                          // sentinel `@` character to distinguish them from punctuators and
                          // end-of-string tokens.
                          for (value = "@", Index++; Index < length;) {
                            charCode = source.charCodeAt(Index);
                            if (charCode < 32) {
                              // Unescaped ASCII control characters (those with a code unit
                              // less than the space character) are not permitted.
                              abort();
                            } else if (charCode == 92) {
                              // A reverse solidus (`\`) marks the beginning of an escaped
                              // control character (including `"`, `\`, and `/`) or Unicode
                              // escape sequence.
                              charCode = source.charCodeAt(++Index);
                              switch (charCode) {
                                case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
                                  // Revive escaped control characters.
                                  value += Unescapes[charCode];
                                  Index++;
                                  break;
                                case 117:
                                  // `\u` marks the beginning of a Unicode escape sequence.
                                  // Advance to the first character and validate the
                                  // four-digit code point.
                                  begin = ++Index;
                                  for (position = Index + 4; Index < position; Index++) {
                                    charCode = source.charCodeAt(Index);
                                    // A valid sequence comprises four hexdigits (case-
                                    // insensitive) that form a single hexadecimal value.
                                    if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                      // Invalid Unicode escape sequence.
                                      abort();
                                    }
                                  }
                                  // Revive the escaped character.
                                  value += fromCharCode("0x" + source.slice(begin, Index));
                                  break;
                                default:
                                  // Invalid escape sequence.
                                  abort();
                              }
                            } else {
                              if (charCode == 34) {
                                // An unescaped double-quote character marks the end of the
                                // string.
                                break;
                              }
                              charCode = source.charCodeAt(Index);
                              begin = Index;
                              // Optimize for the common case where a string is valid.
                              while (charCode >= 32 && charCode != 92 && charCode != 34) {
                                charCode = source.charCodeAt(++Index);
                              }
                              // Append the string as-is.
                              value += source.slice(begin, Index);
                            }
                          }
                          if (source.charCodeAt(Index) == 34) {
                            // Advance to the next character and return the revived string.
                            Index++;
                            return value;
                          }
                          // Unterminated string.
                          abort();
                        default:
                          // Parse numbers and literals.
                          begin = Index;
                          // Advance past the negative sign, if one is specified.
                          if (charCode == 45) {
                            isSigned = true;
                            charCode = source.charCodeAt(++Index);
                          }
                          // Parse an integer or floating-point value.
                          if (charCode >= 48 && charCode <= 57) {
                            // Leading zeroes are interpreted as octal literals.
                            if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                              // Illegal octal literal.
                              abort();
                            }
                            isSigned = false;
                            // Parse the integer component.
                            for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++);
                            // Floats cannot contain a leading decimal point; however, this
                            // case is already accounted for by the parser.
                            if (source.charCodeAt(Index) == 46) {
                              position = ++Index;
                              // Parse the decimal component.
                              for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                              if (position == Index) {
                                // Illegal trailing decimal.
                                abort();
                              }
                              Index = position;
                            }
                            // Parse exponents. The `e` denoting the exponent is
                            // case-insensitive.
                            charCode = source.charCodeAt(Index);
                            if (charCode == 101 || charCode == 69) {
                              charCode = source.charCodeAt(++Index);
                              // Skip past the sign following the exponent, if one is
                              // specified.
                              if (charCode == 43 || charCode == 45) {
                                Index++;
                              }
                              // Parse the exponential component.
                              for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                              if (position == Index) {
                                // Illegal empty exponent.
                                abort();
                              }
                              Index = position;
                            }
                            // Coerce the parsed value to a JavaScript number.
                            return +source.slice(begin, Index);
                          }
                          // A negative sign may only precede numbers.
                          if (isSigned) {
                            abort();
                          }
                          // `true`, `false`, and `null` literals.
                          if (source.slice(Index, Index + 4) == "true") {
                            Index += 4;
                            return true;
                          } else if (source.slice(Index, Index + 5) == "false") {
                            Index += 5;
                            return false;
                          } else if (source.slice(Index, Index + 4) == "null") {
                            Index += 4;
                            return null;
                          }
                          // Unrecognized token.
                          abort();
                      }
                    }
                    // Return the sentinel `$` character if the parser has reached the end
                    // of the source string.
                    return "$";
                  };

                  // Internal: Parses a JSON `value` token.
                  var get = function get(value) {
                    var results, hasMembers;
                    if (value == "$") {
                      // Unexpected end of input.
                      abort();
                    }
                    if (typeof value == "string") {
                      if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                        // Remove the sentinel `@` character.
                        return value.slice(1);
                      }
                      // Parse object and array literals.
                      if (value == "[") {
                        // Parses a JSON array, returning a new JavaScript array.
                        results = [];
                        for (;; hasMembers || (hasMembers = true)) {
                          value = lex();
                          // A closing square bracket marks the end of the array literal.
                          if (value == "]") {
                            break;
                          }
                          // If the array literal contains elements, the current token
                          // should be a comma separating the previous element from the
                          // next.
                          if (hasMembers) {
                            if (value == ",") {
                              value = lex();
                              if (value == "]") {
                                // Unexpected trailing `,` in array literal.
                                abort();
                              }
                            } else {
                              // A `,` must separate each array element.
                              abort();
                            }
                          }
                          // Elisions and leading commas are not permitted.
                          if (value == ",") {
                            abort();
                          }
                          results.push(get(value));
                        }
                        return results;
                      } else if (value == "{") {
                        // Parses a JSON object, returning a new JavaScript object.
                        results = {};
                        for (;; hasMembers || (hasMembers = true)) {
                          value = lex();
                          // A closing curly brace marks the end of the object literal.
                          if (value == "}") {
                            break;
                          }
                          // If the object literal contains members, the current token
                          // should be a comma separator.
                          if (hasMembers) {
                            if (value == ",") {
                              value = lex();
                              if (value == "}") {
                                // Unexpected trailing `,` in object literal.
                                abort();
                              }
                            } else {
                              // A `,` must separate each object member.
                              abort();
                            }
                          }
                          // Leading commas are not permitted, object property names must be
                          // double-quoted strings, and a `:` must separate each property
                          // name and value.
                          if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                            abort();
                          }
                          results[value.slice(1)] = get(lex());
                        }
                        return results;
                      }
                      // Unexpected token encountered.
                      abort();
                    }
                    return value;
                  };

                  // Internal: Updates a traversed object member.
                  var update = function update(source, property, callback) {
                    var element = walk(source, property, callback);
                    if (element === undef) {
                      delete source[property];
                    } else {
                      source[property] = element;
                    }
                  };

                  // Internal: Recursively traverses a parsed JSON object, invoking the
                  // `callback` function for each value. This is an implementation of the
                  // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
                  var walk = function walk(source, property, callback) {
                    var value = source[property],
                        length;
                    if (typeof value == "object" && value) {
                      // `forEach` can't be used to traverse an array in Opera <= 8.54
                      // because its `Object#hasOwnProperty` implementation returns `false`
                      // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
                      if (getClass.call(value) == arrayClass) {
                        for (length = value.length; length--;) {
                          update(value, length, callback);
                        }
                      } else {
                        forEach(value, function (property) {
                          update(value, property, callback);
                        });
                      }
                    }
                    return callback.call(source, property, value);
                  };

                  // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
                  exports.parse = function (source, callback) {
                    var result, value;
                    Index = 0;
                    Source = "" + source;
                    result = get(lex());
                    // If a JSON string contains multiple tokens, it is invalid.
                    if (lex() != "$") {
                      abort();
                    }
                    // Reset the parser state.
                    Index = Source = null;
                    return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
                  };
                }
              }

              exports["runInContext"] = runInContext;
              return exports;
            }

            if (freeExports && !isLoader) {
              // Export for CommonJS environments.
              runInContext(root, freeExports);
            } else {
              // Export for web browsers and JavaScript engines.
              var nativeJSON = root.JSON,
                  previousJSON = root["JSON3"],
                  isRestored = false;

              var JSON3 = runInContext(root, root["JSON3"] = {
                // Public: Restores the original value of the global `JSON` object and
                // returns a reference to the `JSON3` object.
                "noConflict": function noConflict() {
                  if (!isRestored) {
                    isRestored = true;
                    root.JSON = nativeJSON;
                    root["JSON3"] = previousJSON;
                    nativeJSON = previousJSON = null;
                  }
                  return JSON3;
                }
              });

              root.JSON = {
                "parse": JSON3.parse,
                "stringify": JSON3.stringify
              };
            }

            // Export for asynchronous module loaders.
            if (isLoader) {
              define(function () {
                return JSON3;
              });
            }
          }).call(this);
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      }, {}], 51: [function (_dereq_, module, exports) {
        module.exports = toArray;

        function toArray(list, index) {
          var array = [];

          index = index || 0;

          for (var i = index || 0; i < list.length; i++) {
            array[i - index] = list[i];
          }

          return array;
        }
      }, {}] }, {}, [31])(31);
  });
}

cc._RFpop();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},["socket.io","myUserNameInput","myHeroItemRegister","myAttributeBtn","myLogin","myPasswordInput","myHeroInfoIO","myBaseStateBtn","myServer_01","myMsgBox","myHeadAtlas","myChildItemProgessbar","myHeroTexture","myStateBtn","myHeroCreateBtn","myMainStateLabel","mySocketIO","myCreateBtn","myBtnList","myChildItemLabel","myNextBtn","myAttributeStateLabel","myHeadTexture"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6L3poYW9nYW94aW5nL2NvY29zY3JlYXRvci9Db2Nvc0NyZWF0b3IvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvY29uZmlnU2NlbmVTcmMvc2NyaXB0L0F0dHJpYnV0ZUJ0bi9teUF0dHJpYnV0ZUJ0bi5qcyIsImFzc2V0cy9jb25maWdTY2VuZVNyYy9zY3JpcHQvQXR0cmlidXRlU3RhdGVMYWJlbC9teUF0dHJpYnV0ZVN0YXRlTGFiZWwuanMiLCJhc3NldHMvY29uZmlnU2NlbmVTcmMvc2NyaXB0L0Jhc2VTdGF0dXNCdG4vbXlCYXNlU3RhdGVCdG4uanMiLCJhc3NldHMvY29uZmlnU2NlbmVTcmMvc2NyaXB0L0J0bkxpc3QvbXlCdG5MaXN0LmpzIiwiYXNzZXRzL2NvbmZpZ1NjZW5lU3JjL3NjcmlwdC9jaGlsZEl0ZW1MYWJlbC9teUNoaWxkSXRlbUxhYmVsLmpzIiwiYXNzZXRzL2NvbmZpZ1NjZW5lU3JjL3NjcmlwdC9jaGlsZEl0ZW1Qcm9ncmVzc2Jhci9teUNoaWxkSXRlbVByb2dlc3NiYXIuanMiLCJhc3NldHMvaGVyb0Nob29zZVNjZW5lU3JjL3NjcmlwdC9jcmVhdGVCdG4vbXlDcmVhdGVCdG4uanMiLCJhc3NldHMvY29uZmlnU2NlbmVTcmMvc2NyaXB0L2hlYWRUZXh0dXJlL215SGVhZEF0bGFzLmpzIiwiYXNzZXRzL2hlcm9DaG9vc2VTY2VuZVNyYy9zY3JpcHQvSGVhZFRleHR1cmUvbXlIZWFkVGV4dHVyZS5qcyIsImFzc2V0cy9jb25maWdTY2VuZVNyYy9zY3JpcHQvbXlDcmVhdGVCdG4vbXlIZXJvQ3JlYXRlQnRuLmpzIiwiYXNzZXRzL2hlcm9DaG9vc2VTY2VuZVNyYy9zY3JpcHQvSGVyb0luZm9JTy9teUhlcm9JbmZvSU8uanMiLCJhc3NldHMvcmVnaXN0ZXJTY2VuZVNyYy9zY3JpcHQvbXlIZXJvSXRlbVJlZ2lzdGVyLmpzIiwiYXNzZXRzL2hlcm9DaG9vc2VTY2VuZVNyYy9zY3JpcHQvSGVyb1RleHR1cmUvbXlIZXJvVGV4dHVyZS5qcyIsImFzc2V0cy9sb2dpblNjZW5lU3JjL3NjcmlwdC9sb2dpbi9teUxvZ2luLmpzIiwiYXNzZXRzL2NvbmZpZ1NjZW5lU3JjL3NjcmlwdC9tYWluU3RhdHVzQnRuL215TWFpblN0YXRlTGFiZWwuanMiLCJhc3NldHMvbXNnQm94U3JjL3NjcmlwdC9teU1zZ0JveC5qcyIsImFzc2V0cy9yZWdpc3RlclNjZW5lU3JjL3NjcmlwdC9teU5leHRCdG4uanMiLCJhc3NldHMvbG9naW5TY2VuZVNyYy9zY3JpcHQvRWRpdEJveC9teVBhc3N3b3JkSW5wdXQuanMiLCJhc3NldHMvc2VydmVyU2NlbmVTcmMvc2NyaXB0L215U2VydmVyXzAxLmpzIiwiYXNzZXRzL2xvZ2luU2NlbmVTcmMvc2NyaXB0L2xvZ2luL215U29ja2V0SU8uanMiLCJhc3NldHMvY29uZmlnU2NlbmVTcmMvc2NyaXB0L0V5ZU1vdXNlQnRuL215U3RhdGVCdG4uanMiLCJhc3NldHMvbG9naW5TY2VuZVNyYy9zY3JpcHQvRWRpdEJveC9teVVzZXJOYW1lSW5wdXQuanMiLCJhc3NldHMvbG9naW5TY2VuZVNyYy9zY3JpcHQvbG9naW4vc29ja2V0LmlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzJhMTQ3NHBBRmRJU2FDNm1xRnpvbStnJywgJ215QXR0cmlidXRlQnRuJyk7XG4vLyBjb25maWdTY2VuZVNyY1xcc2NyaXB0XFxBdHRyaWJ1dGVCdG5cXG15QXR0cmlidXRlQnRuLmpzXG5cbnZhciBwb3MgPSBjYy5FbnVtKHtcbiAgICBlYXJ0aDogMCxcbiAgICB3YXRlcjogMSxcbiAgICBmaXJlOiAyLFxuICAgIHdpbmQ6IDNcbn0pO1xuXG52YXIgZGlyID0gY2MuRW51bSh7XG4gICAgcGx1czogMCxcbiAgICBtaW51czogMVxufSk7XG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGN1clBvczoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBwb3MuZWFydGgsXG4gICAgICAgICAgICB0eXBlOiBwb3NcbiAgICAgICAgfSxcbiAgICAgICAgY3VyRGlyOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IGRpci5wbHVzLFxuICAgICAgICAgICAgdHlwZTogZGlyXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIF9JdGVtUGx1czogZnVuY3Rpb24gX0l0ZW1QbHVzKGtleSkge1xuICAgICAgICBjb25zb2xlLmxvZygncGx1c+WJjeW+gG15Q2hpbGRJdGVtUHJvZ2Vzc2JhcjonICsga2V5KTtcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbmZpZy9BdHRyaWJ1dGVQb2ludC8nICsga2V5KS5nZXRDb21wb25lbnQoJ215Q2hpbGRJdGVtUHJvZ2Vzc2JhcicpLnBsdXMoKTtcbiAgICB9LFxuXG4gICAgX0l0ZW1NaW51czogZnVuY3Rpb24gX0l0ZW1NaW51cyhrZXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21pbnVz5YmN5b6AbXlDaGlsZEl0ZW1Qcm9nZXNzYmFyOicgKyBrZXkpO1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL0F0dHJpYnV0ZVBvaW50LycgKyBrZXkpLmdldENvbXBvbmVudCgnbXlDaGlsZEl0ZW1Qcm9nZXNzYmFyJykubWludXMoKTtcbiAgICB9LFxuXG4gICAgY2hhbmdlU3RhdHVzOiBmdW5jdGlvbiBjaGFuZ2VTdGF0dXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfov5vlhaUr5Y+35oyJ6ZKuOiAnICsgdGhpcy5jdXJEaXIpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY3VyRGlyKSB7XG4gICAgICAgICAgICBjYXNlIGRpci5wbHVzOlxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb25maWcvQXR0cmlidXRlUG9pbnQnKS5nZXRDb21wb25lbnQoXCJteUF0dHJpYnV0ZVN0YXRlTGFiZWxcIikubWludXMoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VyUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcG9zLmVhcnRoOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fSXRlbVBsdXMoJ2VhcnRoJyk7YnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcG9zLndhdGVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fSXRlbVBsdXMoJ3dhdGVyJyk7YnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcG9zLmZpcmU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9JdGVtUGx1cygnZmlyZScpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy53aW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fSXRlbVBsdXMoJ3dpbmQnKTticmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGRpci5taW51czpcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL0F0dHJpYnV0ZVBvaW50JykuZ2V0Q29tcG9uZW50KFwibXlBdHRyaWJ1dGVTdGF0ZUxhYmVsXCIpLnBsdXMoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VyUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcG9zLmVhcnRoOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fSXRlbU1pbnVzKCdlYXJ0aCcpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy53YXRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0l0ZW1NaW51cygnd2F0ZXInKTticmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBwb3MuZmlyZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0l0ZW1NaW51cygnZmlyZScpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy53aW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fSXRlbU1pbnVzKCd3aW5kJyk7YnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3c6IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuZW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkZDk1YlVzWGk1RDNwZzVOcThBQlhoSycsICdteUF0dHJpYnV0ZVN0YXRlTGFiZWwnKTtcbi8vIGNvbmZpZ1NjZW5lU3JjXFxzY3JpcHRcXEF0dHJpYnV0ZVN0YXRlTGFiZWxcXG15QXR0cmlidXRlU3RhdGVMYWJlbC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgcGx1czogZnVuY3Rpb24gcGx1cygpIHtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZysrO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmchPTA6IFwiICsgKHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgIT0gMCkpO1xuICAgICAgICBpZiAodGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyAhPSAwKSB7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL0F0dHJpYnV0ZVBvaW50L2J0bkxpc3QvcGx1c0xpc3QnKS5nZXRDb21wb25lbnQoJ215QnRuTGlzdCcpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtaW51czogZnVuY3Rpb24gbWludXMoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmctLTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPD0wOiBcIiArICh0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nIDw9IDApKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPD0gMCkge1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbmZpZy9BdHRyaWJ1dGVQb2ludC9idG5MaXN0L3BsdXNMaXN0JykuZ2V0Q29tcG9uZW50KCdteUJ0bkxpc3QnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0ZWIyOFBqMG9KQnRiY3NCVXZia1BMTCcsICdteUJhc2VTdGF0ZUJ0bicpO1xuLy8gY29uZmlnU2NlbmVTcmNcXHNjcmlwdFxcQmFzZVN0YXR1c0J0blxcbXlCYXNlU3RhdGVCdG4uanNcblxudmFyIHBvcyA9IGNjLkVudW0oe1xuICAgIHZpdGFsOiAwLFxuICAgIHN0cmVuZ3RoOiAxLFxuICAgIHRvdWdoOiAyLFxuICAgIHF1aWNrOiAzLFxuICAgIG1hZ2ljOiA0XG59KTtcblxudmFyIGRpciA9IGNjLkVudW0oe1xuICAgIHBsdXM6IDAsXG4gICAgbWludXM6IDFcbn0pO1xuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjdXJQb3M6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogcG9zLnZpdGFsLFxuICAgICAgICAgICAgdHlwZTogcG9zXG4gICAgICAgIH0sXG4gICAgICAgIGN1ckRpcjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBkaXIucGx1cyxcbiAgICAgICAgICAgIHR5cGU6IGRpclxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBfSXRlbVBsdXM6IGZ1bmN0aW9uIF9JdGVtUGx1cyhrZXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsdXPliY3lvoBpdGVtTGFiZWw6JyArIGtleSk7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb25maWcvYmFzZVBvaW50LycgKyBrZXkpLmdldENvbXBvbmVudCgnbXlDaGlsZEl0ZW1MYWJlbCcpLnBsdXMoKTtcbiAgICB9LFxuXG4gICAgX0l0ZW1NaW51czogZnVuY3Rpb24gX0l0ZW1NaW51cyhrZXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21pbnVz5YmN5b6AaXRlbUxhYmVsOicgKyBrZXkpO1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL2Jhc2VQb2ludC8nICsga2V5KS5nZXRDb21wb25lbnQoJ215Q2hpbGRJdGVtTGFiZWwnKS5taW51cygpO1xuICAgIH0sXG5cbiAgICBjaGFuZ2VTdGF0dXM6IGZ1bmN0aW9uIGNoYW5nZVN0YXR1cygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+i/m+WFpSvlj7fmjInpkq46ICcgKyB0aGlzLmN1ckRpcik7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJEaXIpIHtcbiAgICAgICAgICAgIGNhc2UgZGlyLnBsdXM6XG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbmZpZy9iYXNlUG9pbnQnKS5nZXRDb21wb25lbnQoXCJteU1haW5TdGF0ZUxhYmVsXCIpLm1pbnVzKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmN1clBvcykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy52aXRhbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0l0ZW1QbHVzKCd2aXRhbCcpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy5zdHJlbmd0aDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0l0ZW1QbHVzKCdzdHJlbmd0aCcpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy50b3VnaDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0l0ZW1QbHVzKCd0b3VnaCcpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy5xdWljazpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0l0ZW1QbHVzKCdxdWljaycpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy5tYWdpYzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0l0ZW1QbHVzKCdtYWdpYycpO2JyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZGlyLm1pbnVzOlxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb25maWcvYmFzZVBvaW50JykuZ2V0Q29tcG9uZW50KFwibXlNYWluU3RhdGVMYWJlbFwiKS5wbHVzKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmN1clBvcykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy52aXRhbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0l0ZW1NaW51cygndml0YWwnKTticmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBwb3Muc3RyZW5ndGg6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9JdGVtTWludXMoJ3N0cmVuZ3RoJyk7YnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcG9zLnRvdWdoOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fSXRlbU1pbnVzKCd0b3VnaCcpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHBvcy5xdWljazpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX0l0ZW1NaW51cygncXVpY2snKTticmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBwb3MubWFnaWM6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9JdGVtTWludXMoJ21hZ2ljJyk7YnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3c6IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuZW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdiOTYxYXAxUm9ORkU1WnVKZC9USHk0RicsICdteUJ0bkxpc3QnKTtcbi8vIGNvbmZpZ1NjZW5lU3JjXFxzY3JpcHRcXEJ0bkxpc3RcXG15QnRuTGlzdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvdGFsU2hvdycpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmVuYWJsZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBoaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndG90YWxIaWRlJyk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYmUxODNtTEt6Sk9hWmpSY2U2a2s1TjMnLCAnbXlDaGlsZEl0ZW1MYWJlbCcpO1xuLy8gY29uZmlnU2NlbmVTcmNcXHNjcmlwdFxcY2hpbGRJdGVtTGFiZWxcXG15Q2hpbGRJdGVtTGFiZWwuanNcblxudmFyIHBvcyA9IGNjLkVudW0oe1xuICAgIHZpdGFsOiAwLFxuICAgIHN0cmVuZ3RoOiAxLFxuICAgIHRvdWdoOiAyLFxuICAgIHF1aWNrOiAzLFxuICAgIG1hZ2ljOiA0XG59KTtcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjdXJQb3M6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogcG9zLnZpdGFsLFxuICAgICAgICAgICAgdHlwZTogcG9zXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIF9oaWRlUGx1c0J0bjogZnVuY3Rpb24gX2hpZGVQbHVzQnRuKGtleSkge1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL2Jhc2VQb2ludC9idG5MaXN0L3BsdXNMaXN0LycgKyBrZXkpLmdldENvbXBvbmVudCgnbXlCYXNlU3RhdGVCdG4nKS5oaWRlKCk7XG4gICAgfSxcblxuICAgIF9zaG93UGx1c0J0bjogZnVuY3Rpb24gX3Nob3dQbHVzQnRuKGtleSkge1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL2Jhc2VQb2ludC9idG5MaXN0L3BsdXNMaXN0LycgKyBrZXkpLmdldENvbXBvbmVudCgnbXlCYXNlU3RhdGVCdG4nKS5zaG93KCk7XG4gICAgfSxcblxuICAgIF9oaWRlTWludXNCdG46IGZ1bmN0aW9uIF9oaWRlTWludXNCdG4oa2V5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfaGlkZU1pbnVzQnRuJyk7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb25maWcvYmFzZVBvaW50L2J0bkxpc3QvbWludWVMaXN0LycgKyBrZXkpLmdldENvbXBvbmVudCgnbXlCYXNlU3RhdGVCdG4nKS5oaWRlKCk7XG4gICAgfSxcblxuICAgIF9zaG93TWludXNCdG46IGZ1bmN0aW9uIF9zaG93TWludXNCdG4oa2V5KSB7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb25maWcvYmFzZVBvaW50L2J0bkxpc3QvbWludWVMaXN0LycgKyBrZXkpLmdldENvbXBvbmVudCgnbXlCYXNlU3RhdGVCdG4nKS5zaG93KCk7XG4gICAgfSxcblxuICAgIGhpZGVQbHVzQnRuSGFuZGxlcjogZnVuY3Rpb24gaGlkZVBsdXNCdG5IYW5kbGVyKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY3VyUG9zKSB7XG4gICAgICAgICAgICBjYXNlIHBvcy52aXRhbDpcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlUGx1c0J0bigndml0YWxQbHVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy5zdHJlbmd0aDpcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlUGx1c0J0bignc3RyZW5ndGhQbHVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy50b3VnaDpcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlUGx1c0J0bigndG91Z2hQbHVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy5xdWljazpcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlUGx1c0J0bigncXVpY2tQbHVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy5tYWdpYzpcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlUGx1c0J0bignbWFnaWNQbHVzQnRuJyk7YnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaGlkZU1pbnVzQnRuSGFuZGxlcjogZnVuY3Rpb24gaGlkZU1pbnVzQnRuSGFuZGxlcigpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmN1clBvcykge1xuICAgICAgICAgICAgY2FzZSBwb3Mudml0YWw6XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZU1pbnVzQnRuKCd2aXRhbE1pbnVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy5zdHJlbmd0aDpcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlTWludXNCdG4oJ3N0cmVuZ3RoTWludXNCdG4nKTticmVhaztcbiAgICAgICAgICAgIGNhc2UgcG9zLnRvdWdoOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVNaW51c0J0bigndG91Z2hNaW51c0J0bicpO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSBwb3MucXVpY2s6XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZU1pbnVzQnRuKCdxdWlja01pbnVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy5tYWdpYzpcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlTWludXNCdG4oJ21hZ2ljTWludXNCdG4nKTticmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzaG93TWludXNCdG5IYW5kbGVyOiBmdW5jdGlvbiBzaG93TWludXNCdG5IYW5kbGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvd01pbnVzQnRuJyk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJQb3MpIHtcbiAgICAgICAgICAgIGNhc2UgcG9zLnZpdGFsOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dNaW51c0J0bigndml0YWxNaW51c0J0bicpO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSBwb3Muc3RyZW5ndGg6XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd01pbnVzQnRuKCdzdHJlbmd0aE1pbnVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy50b3VnaDpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93TWludXNCdG4oJ3RvdWdoTWludXNCdG4nKTticmVhaztcbiAgICAgICAgICAgIGNhc2UgcG9zLnF1aWNrOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dNaW51c0J0bigncXVpY2tNaW51c0J0bicpO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSBwb3MubWFnaWM6XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd01pbnVzQnRuKCdtYWdpY01pbnVzQnRuJyk7YnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hvd1BsdXNCdG5IYW5kbGVyOiBmdW5jdGlvbiBzaG93UGx1c0J0bkhhbmRsZXIoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJQb3MpIHtcbiAgICAgICAgICAgIGNhc2UgcG9zLnZpdGFsOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQbHVzQnRuKCd2aXRhbFBsdXNCdG4nKTticmVhaztcbiAgICAgICAgICAgIGNhc2UgcG9zLnN0cmVuZ3RoOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQbHVzQnRuKCdzdHJlbmd0aFBsdXNCdG4nKTticmVhaztcbiAgICAgICAgICAgIGNhc2UgcG9zLnRvdWdoOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQbHVzQnRuKCd0b3VnaFBsdXNCdG4nKTticmVhaztcbiAgICAgICAgICAgIGNhc2UgcG9zLnF1aWNrOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQbHVzQnRuKCdxdWlja1BsdXNCdG4nKTticmVhaztcbiAgICAgICAgICAgIGNhc2UgcG9zLm1hZ2ljOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQbHVzQnRuKCdtYWdpY1BsdXNCdG4nKTticmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwbHVzOiBmdW5jdGlvbiBwbHVzKCkge1xuICAgICAgICB0aGlzLnNob3dNaW51c0J0bkhhbmRsZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhYmVsJyArIHRoaXMuY3VyUG9zICsgJyBwbHVzJyk7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcrKztcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPj0gMTUpIHRoaXMuaGlkZVBsdXNCdG5IYW5kbGVyKCk7ZWxzZSB0aGlzLnNob3dQbHVzQnRuSGFuZGxlcigpO1xuICAgIH0sXG5cbiAgICBtaW51czogZnVuY3Rpb24gbWludXMoKSB7XG4gICAgICAgIHRoaXMuc2hvd1BsdXNCdG5IYW5kbGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYWJlbCcgKyB0aGlzLmN1clBvcyArICcgbWludXMnKTtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZy0tO1xuICAgICAgICBpZiAodGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA+IDApIHRoaXMuc2hvd01pbnVzQnRuSGFuZGxlcigpO2Vsc2UgdGhpcy5oaWRlTWludXNCdG5IYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNzE3ZjVtNFdWTkJ5NldIcFlWeGgvVEMnLCAnbXlDaGlsZEl0ZW1Qcm9nZXNzYmFyJyk7XG4vLyBjb25maWdTY2VuZVNyY1xcc2NyaXB0XFxjaGlsZEl0ZW1Qcm9ncmVzc2JhclxcbXlDaGlsZEl0ZW1Qcm9nZXNzYmFyLmpzXG5cbnZhciBwb3MgPSBjYy5FbnVtKHtcbiAgICBlYXJ0aDogMCxcbiAgICB3YXRlcjogMSxcbiAgICBmaXJlOiAyLFxuICAgIHdpbmQ6IDNcbn0pO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGN1clBvczoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBwb3MuZWFydGgsXG4gICAgICAgICAgICB0eXBlOiBwb3NcbiAgICAgICAgfSxcbiAgICAgICAgY3VyTGVuZ3RoOiAwLjBcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIF9oaWRlUGx1c0J0bjogZnVuY3Rpb24gX2hpZGVQbHVzQnRuKGtleSkge1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL0F0dHJpYnV0ZVBvaW50L2J0bkxpc3QvcGx1c0xpc3QvJyArIGtleSkuZ2V0Q29tcG9uZW50KCdteUF0dHJpYnV0ZUJ0bicpLmhpZGUoKTtcbiAgICB9LFxuXG4gICAgX3Nob3dQbHVzQnRuOiBmdW5jdGlvbiBfc2hvd1BsdXNCdG4oa2V5KSB7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb25maWcvQXR0cmlidXRlUG9pbnQvYnRuTGlzdC9wbHVzTGlzdC8nICsga2V5KS5nZXRDb21wb25lbnQoJ215QXR0cmlidXRlQnRuJykuc2hvdygpO1xuICAgIH0sXG5cbiAgICBfaGlkZU1pbnVzQnRuOiBmdW5jdGlvbiBfaGlkZU1pbnVzQnRuKGtleSkge1xuICAgICAgICBjb25zb2xlLmxvZygnX2hpZGVNaW51c0J0bicpO1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL0F0dHJpYnV0ZVBvaW50L2J0bkxpc3QvbWludWVMaXN0LycgKyBrZXkpLmdldENvbXBvbmVudCgnbXlBdHRyaWJ1dGVCdG4nKS5oaWRlKCk7XG4gICAgfSxcblxuICAgIF9zaG93TWludXNCdG46IGZ1bmN0aW9uIF9zaG93TWludXNCdG4oa2V5KSB7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb25maWcvQXR0cmlidXRlUG9pbnQvYnRuTGlzdC9taW51ZUxpc3QvJyArIGtleSkuZ2V0Q29tcG9uZW50KCdteUF0dHJpYnV0ZUJ0bicpLnNob3coKTtcbiAgICB9LFxuXG4gICAgaGlkZVBsdXNCdG5IYW5kbGVyOiBmdW5jdGlvbiBoaWRlUGx1c0J0bkhhbmRsZXIoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJQb3MpIHtcbiAgICAgICAgICAgIGNhc2UgcG9zLmVhcnRoOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVQbHVzQnRuKCdlYXJ0aFBsdXNCdG4nKTticmVhaztcbiAgICAgICAgICAgIGNhc2UgcG9zLndhdGVyOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVQbHVzQnRuKCd3YXRlclBsdXNCdG4nKTticmVhaztcbiAgICAgICAgICAgIGNhc2UgcG9zLmZpcmU6XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZVBsdXNCdG4oJ2ZpcmVQbHVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy53aW5kOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVQbHVzQnRuKCd3aW5kUGx1c0J0bicpO2JyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGhpZGVNaW51c0J0bkhhbmRsZXI6IGZ1bmN0aW9uIGhpZGVNaW51c0J0bkhhbmRsZXIoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJQb3MpIHtcbiAgICAgICAgICAgIGNhc2UgcG9zLmVhcnRoOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVNaW51c0J0bignZWFydGhNaW51c0J0bicpO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSBwb3Mud2F0ZXI6XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZU1pbnVzQnRuKCd3YXRlck1pbnVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy5maXJlOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVNaW51c0J0bignZmlyZU1pbnVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy53aW5kOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVNaW51c0J0bignd2luZE1pbnVzQnRuJyk7YnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hvd01pbnVzQnRuSGFuZGxlcjogZnVuY3Rpb24gc2hvd01pbnVzQnRuSGFuZGxlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3dNaW51c0J0bicpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY3VyUG9zKSB7XG4gICAgICAgICAgICBjYXNlIHBvcy5lYXJ0aDpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93TWludXNCdG4oJ2VhcnRoTWludXNCdG4nKTticmVhaztcbiAgICAgICAgICAgIGNhc2UgcG9zLndhdGVyOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dNaW51c0J0bignd2F0ZXJNaW51c0J0bicpO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSBwb3MuZmlyZTpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93TWludXNCdG4oJ2ZpcmVNaW51c0J0bicpO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSBwb3Mud2luZDpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93TWludXNCdG4oJ3dpbmRNaW51c0J0bicpO2JyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3dQbHVzQnRuSGFuZGxlcjogZnVuY3Rpb24gc2hvd1BsdXNCdG5IYW5kbGVyKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY3VyUG9zKSB7XG4gICAgICAgICAgICBjYXNlIHBvcy5lYXJ0aDpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93UGx1c0J0bignZWFydGhQbHVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy53YXRlcjpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93UGx1c0J0bignd2F0ZXJQbHVzQnRuJyk7YnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBvcy5maXJlOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQbHVzQnRuKCdmaXJlUGx1c0J0bicpO2JyZWFrO1xuICAgICAgICAgICAgY2FzZSBwb3Mud2luZDpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93UGx1c0J0bignd2luZFBsdXNCdG4nKTticmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwbHVzOiBmdW5jdGlvbiBwbHVzKCkge1xuICAgICAgICB0aGlzLnNob3dNaW51c0J0bkhhbmRsZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2dyZXNzQmFyJyArIHRoaXMuY3VyUG9zICsgJyBwbHVzJyk7XG4gICAgICAgIHRoaXMuY3VyTGVuZ3RoKys7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyA9IHRoaXMuY3VyTGVuZ3RoIC8gMTA7XG4gICAgICAgIGlmICh0aGlzLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPT0gMSkgdGhpcy5oaWRlUGx1c0J0bkhhbmRsZXIoKTtlbHNlIHRoaXMuc2hvd1BsdXNCdG5IYW5kbGVyKCk7XG4gICAgfSxcblxuICAgIG1pbnVzOiBmdW5jdGlvbiBtaW51cygpIHtcbiAgICAgICAgdGhpcy5zaG93UGx1c0J0bkhhbmRsZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2dyZXNzQmFyJyArIHRoaXMuY3VyUG9zICsgJyBtaW51cycpO1xuICAgICAgICB0aGlzLmN1ckxlbmd0aC0tO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1ckxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VyTGVuZ3RoIC8gMTApO1xuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPSB0aGlzLmN1ckxlbmd0aCAvIDEwO1xuICAgICAgICBjb25zb2xlLmxvZygncHJvZ3Jlc3M6ICcgKyB0aGlzLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MpO1xuICAgICAgICBpZiAodGhpcy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzIDwgMC4xKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgdGhpcy5oaWRlTWludXNCdG5IYW5kbGVyKCk7XG4gICAgICAgIH0gZWxzZSB0aGlzLnNob3dNaW51c0J0bkhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdhOTViMFkyMGZsSDVxMDZIam1oMDBmKycsICdteUNyZWF0ZUJ0bicpO1xuLy8gaGVyb0Nob29zZVNjZW5lU3JjXFxzY3JpcHRcXGNyZWF0ZUJ0blxcbXlDcmVhdGVCdG4uanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIHRvUmVnaXN0ZXJTY2VuZTogZnVuY3Rpb24gdG9SZWdpc3RlclNjZW5lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3JlZ2lzdGVyU2NlbmUnKTtcbiAgICB9LFxuXG4gICAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzY4ODFlcTVrdWhBQTZITUpuMTZHeWNyJywgJ215SGVhZEF0bGFzJyk7XG4vLyBjb25maWdTY2VuZVNyY1xcc2NyaXB0XFxoZWFkVGV4dHVyZVxcbXlIZWFkQXRsYXMuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBoZXJvVGV4dHVyZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiAwLFxuICAgICAgICAgICAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VIZWFkVGV4dHVyZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBleWU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogMCxcbiAgICAgICAgICAgIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSGVhZFRleHR1cmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91c2U6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogMCxcbiAgICAgICAgICAgIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSGVhZFRleHR1cmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZWFsVGV4dHVyZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnMDAwJyxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc29ja2V0Lm9uKCdnZXRIZXJvVGV4dHVyZScsIGZ1bmN0aW9uIChoZXJvVGV4dHVyZSkge1xuICAgICAgICAgICAgc2VsZi5oZXJvVGV4dHVyZSA9IGhlcm9UZXh0dXJlO1xuICAgICAgICB9KTtcbiAgICAgICAgc29ja2V0LmVtaXQoJ2dldEhlcm9UZXh0dXJlJyk7XG4gICAgfSxcblxuICAgIGNoYW5nZUhlYWRUZXh0dXJlOiBmdW5jdGlvbiBjaGFuZ2VIZWFkVGV4dHVyZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5leWUgPCAwKSB0aGlzLmV5ZSA9IDQ7ZWxzZSBpZiAodGhpcy5leWUgPiA0KSB0aGlzLmV5ZSA9IDA7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlIDwgMCkgdGhpcy5tb3VzZSA9IDQ7ZWxzZSBpZiAodGhpcy5tb3VzZSA+IDQpIHRoaXMubW91c2UgPSAwO1xuXG4gICAgICAgIHRoaXMucmVhbFRleHR1cmUgPSAnJy5jb25jYXQodGhpcy5oZXJvVGV4dHVyZSwgdGhpcy5leWUsIHRoaXMubW91c2UpO1xuXG4gICAgICAgIHZhciByZWFsVXJsID0gY2MudXJsLnJhdyhcImhlYWRUZXh0dXJlU3JjL3Jhdy9naXJsXCIuY29uY2F0KHRoaXMuaGVyb1RleHR1cmUsIHRoaXMuZXllLCB0aGlzLm1vdXNlLCBcIi5wbmdcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlYWRUZXh0dXJlU3JjL3Jhdy9naXJsXCIuY29uY2F0KHRoaXMuaGVyb1RleHR1cmUsIHRoaXMuZXllLCB0aGlzLm1vdXNlLCBcIi5wbmdcIikpO1xuXG4gICAgICAgIHZhciB0ZXh0dXJlID0gY2MudGV4dHVyZUNhY2hlLmFkZEltYWdlKHJlYWxVcmwpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0ZXh0dXJlKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdmZWM0OGpZd0N0TFdxQmdETHlPMVBZdCcsICdteUhlYWRUZXh0dXJlJyk7XG4vLyBoZXJvQ2hvb3NlU2NlbmVTcmNcXHNjcmlwdFxcSGVhZFRleHR1cmVcXG15SGVhZFRleHR1cmUuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBoZWFkVGV4dHVyZXM6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIHNob3c6IGZ1bmN0aW9uIHNob3coZnJhbWVJbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZygn56ysJyArIChmcmFtZUluZGV4ICsgMSkgKyAn5Liq5aS05YOP5Yid5aeL5YyW5LitJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWRUZXh0dXJlcyk7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmhlYWRUZXh0dXJlc1tmcmFtZUluZGV4XTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4OTcyZTdwS1RGSjNxMTZlWWR3b2k2SicsICdteUhlcm9DcmVhdGVCdG4nKTtcbi8vIGNvbmZpZ1NjZW5lU3JjXFxzY3JpcHRcXG15Q3JlYXRlQnRuXFxteUhlcm9DcmVhdGVCdG4uanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBoZXJvTmFtZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZFRleHR1cmU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgdml0YWw6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIHN0cmVuZ3RoOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICB0b3VnaDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgcXVpY2s6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIG1hZ2ljOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBlYXJ0aDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICB3YXRlcjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBmaXJlOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHdpbmQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICB0b0NyZWF0ZUhlcm86IGZ1bmN0aW9uIHRvQ3JlYXRlSGVybygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5oZXJvTmFtZS5zdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWRUZXh0dXJlLmdldENvbXBvbmVudCgnbXlIZWFkQXRsYXMnKS5yZWFsVGV4dHVyZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudml0YWwuc3RyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdHJlbmd0aC5zdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvdWdoLnN0cmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucXVpY2suc3RyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tYWdpYy5zdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVhcnRoLmdldENvbXBvbmVudCgnbXlDaGlsZEl0ZW1Qcm9nZXNzYmFyJykuY3VyTGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy53YXRlci5nZXRDb21wb25lbnQoJ215Q2hpbGRJdGVtUHJvZ2Vzc2JhcicpLmN1ckxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyZS5nZXRDb21wb25lbnQoJ215Q2hpbGRJdGVtUHJvZ2Vzc2JhcicpLmN1ckxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2luZC5nZXRDb21wb25lbnQoJ215Q2hpbGRJdGVtUHJvZ2Vzc2JhcicpLmN1ckxlbmd0aCk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNDVjYWVQWHVGUkJGWkt4VTFxc0pLYUgnLCAnbXlIZXJvSW5mb0lPJyk7XG4vLyBoZXJvQ2hvb3NlU2NlbmVTcmNcXHNjcmlwdFxcSGVyb0luZm9JT1xcbXlIZXJvSW5mb0lPLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIHNob3c6IGZ1bmN0aW9uIHNob3coaGVyb0luZm8pIHtcbiAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBoZXJvSW5mb1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGluZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBpbiBsaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0gKyAnICcgKyBsaW5lW2l0ZW1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIGZvcih2YXIgaXRlbSBvZiB0aGlzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIC8vICAgICB2YXIgc3ViQ2hpbGQgPSBpdGVtLmdldENoaWxkcmVuKCk7XG4gICAgICAgICAgICAvLyAgICAgZm9yKHZhciBpdGVtMiBvZiBzdWJDaGlsZCl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0yKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbJ3JldHVybiddKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvclsncmV0dXJuJ10oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgaGVyb0luZm8ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgaGVyb0luZm9JdGVtID0gaGVyb0luZm9baW5kZXhdO1xuICAgICAgICAgICAgdmFyIGNoaWxkSW5mb0l0ZW0gPSB0aGlzLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hpbGRJbmZvSXRlbVsnaGVyb05hbWVfMCcrKGluZGV4KzEpXSk7XG5cbiAgICAgICAgICAgIGNoaWxkSW5mb0l0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2hlcm9OYW1lXzAnICsgKGluZGV4ICsgMSkpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaGVyb0luZm9JdGVtWydoZXJvTmFtZSddO1xuICAgICAgICAgICAgY2hpbGRJbmZvSXRlbS5nZXRDaGlsZEJ5TmFtZSgnaGVyb0xldmVsXzAnICsgKGluZGV4ICsgMSkpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaGVyb0luZm9JdGVtWydoZXJvTGV2ZWwnXTtcbiAgICAgICAgICAgIGNoaWxkSW5mb0l0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ3Byb2Zlc3Npb25fMCcgKyAoaW5kZXggKyAxKSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBoZXJvSW5mb0l0ZW1bJ3Byb2Zlc3Npb24nXTtcbiAgICAgICAgICAgIGNoaWxkSW5mb0l0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2xvZ2luVGltZXNfMCcgKyAoaW5kZXggKyAxKSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBoZXJvSW5mb0l0ZW1bJ2xvZ2luVGltZXMnXTtcblxuICAgICAgICAgICAgY2hpbGRJbmZvSXRlbS5nZXRDaGlsZEJ5TmFtZSgnaGVyb1RleHR1cmVfMCcgKyAoaW5kZXggKyAxKSkuZ2V0Q29tcG9uZW50KCdteUhlcm9UZXh0dXJlJykuc2hvdyhoZXJvSW5mb0l0ZW1bJ2hlcm9UZXh0dXJlJ10pO1xuICAgICAgICAgICAgY2hpbGRJbmZvSXRlbS5nZXRDaGlsZEJ5TmFtZSgnaGVhZFRleHR1cmVfMCcgKyAoaW5kZXggKyAxKSkuZ2V0Q29tcG9uZW50KCdteUhlYWRUZXh0dXJlJykuc2hvdyhoZXJvSW5mb0l0ZW1bJ2hlYWRUZXh0dXJlJ10pO1xuXG4gICAgICAgICAgICBjaGlsZEluZm9JdGVtLmdldENoaWxkQnlOYW1lKCdjcmVhdGVCdG5fMCcgKyAoaW5kZXggKyAxKSkuZ2V0Q29tcG9uZW50KCdteUNyZWF0ZUJ0bicpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5ub2RlLmdldENoaWxkcmVuKCk7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB3aW5kb3cuc29ja2V0Lm9uKCdoZXJvQ2hvb3NlJywgZnVuY3Rpb24gKGhlcm9JbmZvKSB7XG4gICAgICAgICAgICBpZiAoaGVyb0luZm8pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoZXJvSW5mbyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnNob3coaGVyb0luZm8pO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2hlcm9DaG9vc2UnKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyNTQ2NmNzMEJwSVhLSW1COHJTSVduUycsICdteUhlcm9JdGVtUmVnaXN0ZXInKTtcbi8vIHJlZ2lzdGVyU2NlbmVTcmNcXHNjcmlwdFxcbXlIZXJvSXRlbVJlZ2lzdGVyLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZnJhbWVJbmRleDogMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3JlZ2lzdGVyL2FuaW1Ob2RlJykuZ2V0Q29tcG9uZW50KCdteUhlcm9UZXh0dXJlJykuc2hvdyh0aGlzLmZyYW1lSW5kZXgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc3ZDU5NTZwc1NkTG1KUUtzcjZZZUluRycsICdteUhlcm9UZXh0dXJlJyk7XG4vLyBoZXJvQ2hvb3NlU2NlbmVTcmNcXHNjcmlwdFxcSGVyb1RleHR1cmVcXG15SGVyb1RleHR1cmUuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjdXJGcmFtZUluZGV4OiAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KGZyYW1lSW5kZXgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZygn6KeS6Imy6YCJ5oup55WM6Z2i56ysJyArIChmcmFtZUluZGV4ICsgMSkgKyBcIuinkuiJsuWKqOeUu+WIneWni+WMluS4rVwiKTtcbiAgICAgICAgdGhpcy5jdXJGcmFtZUluZGV4ID0gZnJhbWVJbmRleDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJGcmFtZUluZGV4KTtcbiAgICAgICAgLy9hbmltLnN0b3AoKTtcbiAgICAgICAgYW5pbS5wbGF5KCd3YWxrXycgKyBmcmFtZUluZGV4ICsgJ181Jyk7XG4gICAgfVxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzM1ZjQ4NE4rWDFKc2FORVdKQXJPTEJHJywgJ215TG9naW4nKTtcbi8vIGxvZ2luU2NlbmVTcmNcXHNjcmlwdFxcbG9naW5cXG15TG9naW4uanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBzZXJ2ZXJGZWVkYmFjayA6IHtcbiAgICAgICAgLy8gICAgIGRlZmF1bHQgOiBudWxsLFxuICAgICAgICAvLyAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIC8vIH0sXG5cbiAgICAgICAgbXNnQm94OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXNlck5hbWVJbnB1dDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmRJbnB1dDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvclRleHQ6ICfnlKjmiLflkI3miJblr4bnoIHplJnor68nLFxuICAgICAgICBlbXB0eVRleHQ6ICfnlKjmiLflkI3miJblr4bnoIHkuI3og73kuLrnqbonXG4gICAgfSxcblxuICAgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkodXNlck5hbWUsIHBhc3N3b3JkKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlck5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhwYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKHVzZXJOYW1lID09ICcnIHx8IHBhc3N3b3JkID09ICcnKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHVzZXJOYW1lWzBdID09ICfor7cnKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBnZXRVc2VyTmFtZTogZnVuY3Rpb24gZ2V0VXNlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJOYW1lSW5wdXQuc3RyaW5nO1xuICAgIH0sXG5cbiAgICBnZXRQYXNzd29yZDogZnVuY3Rpb24gZ2V0UGFzc3dvcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhc3N3b3JkSW5wdXQuZ2V0Q29tcG9uZW50KCdteVBhc3N3b3JkSW5wdXQnKS5wYXNzd29yZFRleHQ7XG4gICAgfSxcblxuICAgIGxvZ2luOiBmdW5jdGlvbiBsb2dpbigpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KHRoaXMuZ2V0VXNlck5hbWUoKSwgdGhpcy5nZXRQYXNzd29yZCgpKSkge1xuICAgICAgICAgICAgdGhpcy5tc2dCb3hIYW5kbGVyLnByZUF1dG9IaWRlKHRoaXMuZW1wdHlUZXh0KTtcbiAgICAgICAgICAgIC8vdGhpcy5zZXJ2ZXJGZWVkYmFjay5zdHJpbmcgPSB0aGlzLmVtcHR5VGV4dDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvZ2luJywge1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLmdldFVzZXJOYW1lKCksXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuZ2V0UGFzc3dvcmQoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG5cbiAgICAgICAgdGhpcy5tc2dCb3hIYW5kbGVyID0gdGhpcy5tc2dCb3guZ2V0Q29tcG9uZW50KCdteU1zZ0JveCcpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBzb2NrZXQub24oJ2xvZ2luJywgZnVuY3Rpb24gKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYyk7XG5cbiAgICAgICAgICAgICAgICAvL3NlbGYuc2VydmVyRmVlZGJhY2suc3RyaW5nID0gJyc7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzZXJ2ZXJTY2VuZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3NlbGYuc2VydmVyRmVlZGJhY2suc3RyaW5nID0gc2VsZi5lcnJvclRleHQ7XG4gICAgICAgICAgICAgICAgc2VsZi5tc2dCb3hIYW5kbGVyLnByZUF1dG9IaWRlKHNlbGYuZXJyb3JUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOGFjM2RSS0grbEtTb1I4QW5FbG9Wa3YnLCAnbXlNYWluU3RhdGVMYWJlbCcpO1xuLy8gY29uZmlnU2NlbmVTcmNcXHNjcmlwdFxcbWFpblN0YXR1c0J0blxcbXlNYWluU3RhdGVMYWJlbC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgcGx1czogZnVuY3Rpb24gcGx1cygpIHtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZysrO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmchPTA6IFwiICsgKHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgIT0gMCkpO1xuICAgICAgICBpZiAodGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyAhPSAwKSB7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL2Jhc2VQb2ludC9idG5MaXN0L3BsdXNMaXN0JykuZ2V0Q29tcG9uZW50KCdteUJ0bkxpc3QnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWludXM6IGZ1bmN0aW9uIG1pbnVzKCkge1xuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nLS07XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZzw9MDogXCIgKyAodGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA8PSAwKSk7XG4gICAgICAgIGlmICh0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nIDw9IDApIHtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb25maWcvYmFzZVBvaW50L2J0bkxpc3QvcGx1c0xpc3QnKS5nZXRDb21wb25lbnQoJ215QnRuTGlzdCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzY3YjgzRDE2Y2RJaHBaMkJCSkxkTnI2JywgJ215TXNnQm94Jyk7XG4vLyBtc2dCb3hTcmNcXHNjcmlwdFxcbXlNc2dCb3guanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBtc2c6IHtcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5tc2cgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21zZycpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXNnLnN0cmluZyk7XG4gICAgfSxcblxuICAgIHByZVNob3c6IGZ1bmN0aW9uIHByZVNob3cobXNnKSB7XG4gICAgICAgIHRoaXMubXNnLnN0cmluZyA9IG1zZztcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgncHJlU2hvdycpO1xuICAgIH0sXG5cbiAgICBwcmVBdXRvSGlkZTogZnVuY3Rpb24gcHJlQXV0b0hpZGUobXNnKSB7XG4gICAgICAgIHRoaXMubXNnLnN0cmluZyA9IG1zZztcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgncHJlQXV0b0hpZGUnKTtcbiAgICB9LFxuXG4gICAgcG9zdFNob3c6IGZ1bmN0aW9uIHBvc3RTaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG59KTtcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdjODZlMEwvdm5SS0xhd0FsR01uTGo1TycsICdteU5leHRCdG4nKTtcbi8vIHJlZ2lzdGVyU2NlbmVTcmNcXHNjcmlwdFxcbXlOZXh0QnRuLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICB0b0NvbmZpZ1NjZW5lOiBmdW5jdGlvbiB0b0NvbmZpZ1NjZW5lKCkge1xuICAgICAgICB2YXIgaGVyb1RleHR1cmUgPSBjYy5maW5kKCdDYW52YXMvcmVnaXN0ZXIvYW5pbU5vZGUnKS5nZXRDb21wb25lbnQoJ215SGVyb1RleHR1cmUnKS5jdXJGcmFtZUluZGV4O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGNjLmZpbmQoJ0NhbnZhcy9yZWdpc3Rlci9hbmltTm9kZScpKTtcbiAgICAgICAgY29uc29sZS5sb2coY2MuZmluZCgnQ2FudmFzL3JlZ2lzdGVyL2FuaW1Ob2RlJykuZ2V0Q29tcG9uZW50KCdteUhlcm9UZXh0dXJlJykpO1xuXG4gICAgICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnaGVyb1RleHR1cmUnLCBoZXJvVGV4dHVyZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnY29uZmlnU2NlbmUnKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczYjgyNEEvTTZWSjhxRzdoUEQ1eDJpeicsICdteVBhc3N3b3JkSW5wdXQnKTtcbi8vIGxvZ2luU2NlbmVTcmNcXHNjcmlwdFxcRWRpdEJveFxcbXlQYXNzd29yZElucHV0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGV4dDogJ+ivt+i+k+WFpeWvhueggScsXG4gICAgICAgIC8vIHBhc3N3b3JkSW5wdXQ6e1xuICAgICAgICAvLyAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgdHlwZSA6IGNjLkxhYmVsLFxuICAgICAgICAvLyB9LFxuXG4gICAgICAgIHBhc3N3b3JkVGV4dDogJycsXG5cbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBkZWxQbGFjZUhvbGRlcjogZnVuY3Rpb24gZGVsUGxhY2VIb2xkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkSW5wdXQuc3RyaW5nWzBdID09ICfor7cnKSB7XG4gICAgICAgICAgICAvL+i/meenjeaWueW8j+ivt+S4jeimgeaooeS7vz0gPeaIkei0quWbvuaWueS+v1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnN0cmluZyA9ICcnOyAvL+W8gOWktOS4uuivt+WwseaEj+WRs+edgOayoeaciei+k+WFpeS6hiDpgqPkuYjmiJHku6zmuIXnqbrlkKdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZXN1bWVQbGFjZUhvbGRlcjogZnVuY3Rpb24gcmVzdW1lUGxhY2VIb2xkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkSW5wdXQuc3RyaW5nLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvL+ayoeaciei+k+WFpSBcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC5zdHJpbmcgPSB0aGlzLnRleHQ7IC8v5oiR5Lus5bCx5bCGICfor7fovpPlhaXnlKjmiLflkI0nIOWbnuaYvlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGlzQ29udGFpbjogZnVuY3Rpb24gaXNDb250YWluKGV2ZW50KSB7XG4gICAgICAgIC8v5bCG6byg5qCH54K55Ye755qE5Z2Q5qCH6L2s5YyW5Li66L6T5YWl5qGG55qE5Z2Q5qCHKOi+k+WFpeahhuW3puS4i+inkuS4uigwLDApKVxuICAgICAgICB2YXIgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICAvL+WmguaenHjmiJZ5IOWFtuS4reS4gOS4quWwj+S6jjAg6YKj5bCx54K55Zyo5bem5LiL6KeS55qE5aSW6Z2i5LqGXG4gICAgICAgIGlmIChwb2ludC54IDwgMCB8fCBwb2ludC55IDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvL+iOt+WPlui+k+WFpeahhueahOWwuuWvuCAocmVjdC53aWR0aCxyZWN0LmhlaWdodClcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgLy/lpoLmnpx45oiWeSDlhbbkuK3kuIDkuKrlpKfkuo7ovpPlhaXmoYbnmoTlrr3miJbpq5gg6YKj5bCx54K55Zyo5Y+z5LiK6KeS5aSW6Z2i5LqGXG4gICAgICAgIGlmIChwb2ludC54ID4gcmVjdC53aWR0aCB8fCBwb2ludC55ID4gcmVjdC5oZWlnaHQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8v5o6S6Zmk5LiK6L+w5oOF5Ya15bCx54K55Zyo6L6T5YWl5qGG5LiK5LqGXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuXG4gICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXNzd29yZFRleHQpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLk1PVVNFLCAvL+i/meS4quWQrOm8oOagh+eahOeCueWHuyDnnIvmnInmsqHooqvpgInkuK1cbiAgICAgICAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmZvY3VzID0gc2VsZi5pc0NvbnRhaW4oZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVsUGxhY2VIb2xkZXIoKTsgLy/muIXnqbogJ+ivt+i+k+WFpeeUqOaIt+WQjScg5Yik5pat5Zyo5Ye95pWw6YeM5a6M5oiQXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzdW1lUGxhY2VIb2xkZXIoKTsgLy/mgaLlpI0gJ+ivt+i+k+WFpeeUqOaIt+WQjScg5Yik5pat5Zyo5Ye95pWw6YeM5a6M5oiQXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2VsZi5ub2RlKTtcblxuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsIC8v6L+Z5Liq5ZCs6L6T5YWl55qE5piv5LuA5LmIXG4gICAgICAgICAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5mb2N1cykgcmV0dXJuOyAvL+WmguaenOivpei+k+WFpeahhuayoeacieiiq+mAieS4rSDlsLHkuI3nrqHkuoZcbiAgICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PSBjYy5LRVkuYmFja3NwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c6L6T6L+b5p2l55qE5piv5Yig6Zmk6ZSuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGFzc3dvcmRUZXh0ID0gc2VsZi5wYXNzd29yZFRleHQuc2xpY2UoMCwgLTEpOyAvL+WIoOecn+ato+eahOWvhueggVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnBhc3N3b3JkSW5wdXQuc3RyaW5nID0gc2VsZi5wYXNzd29yZElucHV0LnN0cmluZy5zbGljZSgwLCAtMSk7IC8v5YigICog5Y+3XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8g4oaRIHNsaWNlKOW8gOWni+S9jee9riznu5PmnZ/kvY3nva4pIOi0n+WPt+ihqOekuuS7juWQjuW+gOWJjeaVsFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLnBhc3N3b3JkVGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleUNvZGUpOyAvL+WtmOecn+ato+eahOWvhueggVxuICAgICAgICAgICAgICAgIHNlbGYucGFzc3dvcmRJbnB1dC5zdHJpbmcgKz0gJyonOyAvL+WbnuaYviAqIOWPt1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzU0Y2VjSjZ5anRENzc2YWowSW9SVVgxJywgJ215U2VydmVyXzAxJyk7XG4vLyBzZXJ2ZXJTY2VuZVNyY1xcc2NyaXB0XFxteVNlcnZlcl8wMS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdoZXJvQ2hvb3NlU2NlbmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYTFhZWJpRi82aENDSmtqUmxhVzFGVTQnLCAnbXlTb2NrZXRJTycpO1xuLy8gbG9naW5TY2VuZVNyY1xcc2NyaXB0XFxsb2dpblxcbXlTb2NrZXRJTy5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICB3aW5kb3cuaW8gPSBTb2NrZXRJTztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5pbyA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnODZhODBPRzE3dEdwYjlhc2hyTjNmMVInLCAnbXlTdGF0ZUJ0bicpO1xuLy8gY29uZmlnU2NlbmVTcmNcXHNjcmlwdFxcRXllTW91c2VCdG5cXG15U3RhdGVCdG4uanNcblxudmFyIGRpciA9IGNjLkVudW0oe1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDFcbn0pO1xudmFyIHBvcyA9IGNjLkVudW0oe1xuICAgIGV5ZTogMCxcbiAgICBtb3VzZTogMVxufSk7XG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN0YXJ0U3RhdGU6IDAsXG4gICAgICAgIGVuZFN0YXRlOiA0LFxuICAgICAgICBjdXJTdGF0ZTogMCxcbiAgICAgICAgZGlyU3RhdGU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogZGlyLmxlZnQsXG4gICAgICAgICAgICB0eXBlOiBkaXJcbiAgICAgICAgfSxcbiAgICAgICAgcG9zU3RhdGU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogcG9zLmV5ZSxcbiAgICAgICAgICAgIHR5cGU6IHBvc1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBjaGFuZ2VTdGF0ZTogZnVuY3Rpb24gY2hhbmdlU3RhdGUoKSB7XG4gICAgICAgIHZhciBkZXMgPSB7fTtcblxuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScpO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBkaXIubGVmdDpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMucG9zU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBwb3MuZXllOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbmZpZy9oZWFkVGV4dHVyZScpLmdldENvbXBvbmVudCgnbXlIZWFkQXRsYXMnKS5leWUtLTticmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBwb3MubW91c2U6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29uZmlnL2hlYWRUZXh0dXJlJykuZ2V0Q29tcG9uZW50KCdteUhlYWRBdGxhcycpLm1vdXNlLS07YnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBkaXIucmlnaHQ6XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnBvc1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcG9zLmV5ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb25maWcvaGVhZFRleHR1cmUnKS5nZXRDb21wb25lbnQoJ215SGVhZEF0bGFzJykuZXllKys7YnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcG9zLm1vdXNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbmZpZy9oZWFkVGV4dHVyZScpLmdldENvbXBvbmVudCgnbXlIZWFkQXRsYXMnKS5tb3VzZSsrO2JyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzE4ODkzaUo3OU5BVkp5cVlISkpGMmw4JywgJ215VXNlck5hbWVJbnB1dCcpO1xuLy8gbG9naW5TY2VuZVNyY1xcc2NyaXB0XFxFZGl0Qm94XFxteVVzZXJOYW1lSW5wdXQuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZXh0OiAn6K+36L6T5YWl55So5oi35ZCNJyxcbiAgICAgICAgLy8gdXNlck5hbWVJbnB1dDp7XG4gICAgICAgIC8vICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICB0eXBlIDogY2MuTGFiZWwsXG4gICAgICAgIC8vIH0sXG5cbiAgICAgICAgZm9jdXM6IGZhbHNlXG4gICAgfSxcblxuICAgIGRlbFBsYWNlSG9sZGVyOiBmdW5jdGlvbiBkZWxQbGFjZUhvbGRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlck5hbWVJbnB1dC5zdHJpbmdbMF0gPT0gJ+ivtycpIHtcbiAgICAgICAgICAgIC8v6L+Z56eN5pa55byP6K+35LiN6KaB5qih5Lu/PSA95oiR6LSq5Zu+5pa55L6/XG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lSW5wdXQuc3RyaW5nID0gJyc7IC8v5byA5aS05Li66K+35bCx5oSP5ZGz552A5rKh5pyJ6L6T5YWl5LqGIOmCo+S5iOaIkeS7rOa4heepuuWQp1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlc3VtZVBsYWNlSG9sZGVyOiBmdW5jdGlvbiByZXN1bWVQbGFjZUhvbGRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlck5hbWVJbnB1dC5zdHJpbmcubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIC8v5rKh5pyJ6L6T5YWlIFxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZUlucHV0LnN0cmluZyA9IHRoaXMudGV4dDsgLy/miJHku6zlsLHlsIYgJ+ivt+i+k+WFpeeUqOaIt+WQjScg5Zue5pi+XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaXNDb250YWluOiBmdW5jdGlvbiBpc0NvbnRhaW4oZXZlbnQpIHtcbiAgICAgICAgLy/lsIbpvKDmoIfngrnlh7vnmoTlnZDmoIfovazljJbkuLrovpPlhaXmoYbnmoTlnZDmoIco6L6T5YWl5qGG5bem5LiL6KeS5Li6KDAsMCkpXG4gICAgICAgIHZhciBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2UoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIC8v5aaC5p6ceOaIlnkg5YW25Lit5LiA5Liq5bCP5LqOMCDpgqPlsLHngrnlnKjlt6bkuIvop5LnmoTlpJbpnaLkuoZcbiAgICAgICAgaWYgKHBvaW50LnggPCAwIHx8IHBvaW50LnkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8v6I635Y+W6L6T5YWl5qGG55qE5bC65a+4IChyZWN0LndpZHRoLHJlY3QuaGVpZ2h0KVxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAvL+WmguaenHjmiJZ5IOWFtuS4reS4gOS4quWkp+S6jui+k+WFpeahhueahOWuveaIlumrmCDpgqPlsLHngrnlnKjlj7PkuIrop5LlpJbpnaLkuoZcbiAgICAgICAgaWYgKHBvaW50LnggPiByZWN0LndpZHRoIHx8IHBvaW50LnkgPiByZWN0LmhlaWdodCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy/mjpLpmaTkuIrov7Dmg4XlhrXlsLHngrnlnKjovpPlhaXmoYbkuIrkuoZcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG5cbiAgICAgICAgdGhpcy51c2VyTmFtZUlucHV0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLk1PVVNFLCAvL+i/meS4quWQrOm8oOagh+eahOeCueWHuyDnnIvmnInmsqHooqvpgInkuK1cbiAgICAgICAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmZvY3VzID0gc2VsZi5pc0NvbnRhaW4oZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVsUGxhY2VIb2xkZXIoKTsgLy/muIXnqbogJ+ivt+i+k+WFpeeUqOaIt+WQjScg5Yik5pat5Zyo5Ye95pWw6YeM5a6M5oiQXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzdW1lUGxhY2VIb2xkZXIoKTsgLy/mgaLlpI0gJ+ivt+i+k+WFpeeUqOaIt+WQjScg5Yik5pat5Zyo5Ye95pWw6YeM5a6M5oiQXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2VsZi5ub2RlKTtcblxuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsIC8v6L+Z5Liq5ZCs6L6T5YWl55qE5piv5LuA5LmIXG4gICAgICAgICAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5mb2N1cykgcmV0dXJuOyAvL+WmguaenOivpei+k+WFpeahhuayoeacieiiq+mAieS4rSDlsLHkuI3nrqHkuoZcbiAgICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PSBjYy5LRVkuYmFja3NwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c6L6T6L+b5p2l55qE5piv5Yig6Zmk6ZSuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXNlck5hbWVJbnB1dC5zdHJpbmcgPSBzZWxmLnVzZXJOYW1lSW5wdXQuc3RyaW5nLnNsaWNlKDAsIC0xKTsgLy/pgqPkuYjmiJHku6zlsLHmiormnIDlkI7kuIDkuKrliKDmjolcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDihpEgc2xpY2Uo5byA5aeL5L2N572uLOe7k+adn+S9jee9rikg6LSf5Y+36KGo56S65LuO5ZCO5b6A5YmN5pWwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYudXNlck5hbWVJbnB1dC5zdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShrZXlDb2RlKTsgLy/lpoLmnpzkvaDlhbbku5bnmoTovpPlhaXmiJHku6zlsLHmi7zliLDovpPlhaXmoYZcbiAgICAgICAgICAgIH0gfSwgLy8gICDihpEgIOi/meS4quaYr2phdmFzY3JpcHTlhoXnva7lr7nosaEgZnJvbUNoYXJDb2Rl5Y+v5Lul5bCGYXNjaWktPuWtl+esplxuICAgICAgICBzZWxmLm5vZGUpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzAwNDUzK2NNb2hHbHE0amNPUHl0STJEJywgJ3NvY2tldC5pbycpO1xuLy8gbG9naW5TY2VuZVNyY1xcc2NyaXB0XFxsb2dpblxcc29ja2V0LmlvLmpzXG5cbmlmICghY2Muc3lzLmlzTmF0aXZlKSB7XG5cbiAgKGZ1bmN0aW9uIChmKSB7XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZigpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIGRlZmluZShbXSwgZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBnO2lmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGcgPSB3aW5kb3c7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZyA9IGdsb2JhbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZyA9IHNlbGY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnID0gdGhpcztcbiAgICAgIH1nLmlvID0gZigpO1xuICAgIH1cbiAgfSkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZWZpbmUsIG1vZHVsZSwgZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCwgbiwgcikge1xuICAgICAgZnVuY3Rpb24gcyhvLCB1KSB7XG4gICAgICAgIGlmICghbltvXSkge1xuICAgICAgICAgIGlmICghdFtvXSkge1xuICAgICAgICAgICAgdmFyIGEgPSB0eXBlb2YgcmVxdWlyZSA9PSBcImZ1bmN0aW9uXCIgJiYgcmVxdWlyZTtpZiAoIXUgJiYgYSkgcmV0dXJuIGEobywgITApO2lmIChpKSByZXR1cm4gaShvLCAhMCk7dmFyIGYgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbyArIFwiJ1wiKTt0aHJvdyAoZi5jb2RlID0gXCJNT0RVTEVfTk9UX0ZPVU5EXCIsIGYpO1xuICAgICAgICAgIH12YXIgbCA9IG5bb10gPSB7IGV4cG9ydHM6IHt9IH07dFtvXVswXS5jYWxsKGwuZXhwb3J0cywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBuID0gdFtvXVsxXVtlXTtyZXR1cm4gcyhuID8gbiA6IGUpO1xuICAgICAgICAgIH0sIGwsIGwuZXhwb3J0cywgZSwgdCwgbiwgcik7XG4gICAgICAgIH1yZXR1cm4gbltvXS5leHBvcnRzO1xuICAgICAgfXZhciBpID0gdHlwZW9mIHJlcXVpcmUgPT0gXCJmdW5jdGlvblwiICYmIHJlcXVpcmU7Zm9yICh2YXIgbyA9IDA7IG8gPCByLmxlbmd0aDsgbysrKSBzKHJbb10pO3JldHVybiBzO1xuICAgIH0pKHsgMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oJy4vbGliLycpO1xuICAgICAgfSwgeyBcIi4vbGliL1wiOiAyIH1dLCAyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygnLi9zb2NrZXQnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXhwb3J0cyBwYXJzZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIG1vZHVsZS5leHBvcnRzLnBhcnNlciA9IF9kZXJlcV8oJ2VuZ2luZS5pby1wYXJzZXInKTtcbiAgICAgIH0sIHsgXCIuL3NvY2tldFwiOiAzLCBcImVuZ2luZS5pby1wYXJzZXJcIjogMTkgfV0sIDM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciB0cmFuc3BvcnRzID0gX2RlcmVxXygnLi90cmFuc3BvcnRzJyk7XG4gICAgICAgICAgdmFyIEVtaXR0ZXIgPSBfZGVyZXFfKCdjb21wb25lbnQtZW1pdHRlcicpO1xuICAgICAgICAgIHZhciBkZWJ1ZyA9IF9kZXJlcV8oJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6c29ja2V0Jyk7XG4gICAgICAgICAgdmFyIGluZGV4ID0gX2RlcmVxXygnaW5kZXhvZicpO1xuICAgICAgICAgIHZhciBwYXJzZXIgPSBfZGVyZXFfKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG4gICAgICAgICAgdmFyIHBhcnNldXJpID0gX2RlcmVxXygncGFyc2V1cmknKTtcbiAgICAgICAgICB2YXIgcGFyc2Vqc29uID0gX2RlcmVxXygncGFyc2Vqc29uJyk7XG4gICAgICAgICAgdmFyIHBhcnNlcXMgPSBfZGVyZXFfKCdwYXJzZXFzJyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gU29ja2V0O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTm9vcCBmdW5jdGlvbi5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVyaSBvciBvcHRpb25zXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gU29ja2V0KHVyaSwgb3B0cykge1xuICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNvY2tldCkpIHJldHVybiBuZXcgU29ja2V0KHVyaSwgb3B0cyk7XG5cbiAgICAgICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgICAgICAgICBpZiAodXJpICYmICdvYmplY3QnID09IHR5cGVvZiB1cmkpIHtcbiAgICAgICAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgICAgICAgdXJpID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVyaSkge1xuICAgICAgICAgICAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgICAgICAgICAgICBvcHRzLmhvc3RuYW1lID0gdXJpLmhvc3Q7XG4gICAgICAgICAgICAgIG9wdHMuc2VjdXJlID0gdXJpLnByb3RvY29sID09ICdodHRwcycgfHwgdXJpLnByb3RvY29sID09ICd3c3MnO1xuICAgICAgICAgICAgICBvcHRzLnBvcnQgPSB1cmkucG9ydDtcbiAgICAgICAgICAgICAgaWYgKHVyaS5xdWVyeSkgb3B0cy5xdWVyeSA9IHVyaS5xdWVyeTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0cy5ob3N0KSB7XG4gICAgICAgICAgICAgIG9wdHMuaG9zdG5hbWUgPSBwYXJzZXVyaShvcHRzLmhvc3QpLmhvc3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2VjdXJlID0gbnVsbCAhPSBvcHRzLnNlY3VyZSA/IG9wdHMuc2VjdXJlIDogZ2xvYmFsLmxvY2F0aW9uICYmICdodHRwczonID09IGxvY2F0aW9uLnByb3RvY29sO1xuXG4gICAgICAgICAgICBpZiAob3B0cy5ob3N0bmFtZSAmJiAhb3B0cy5wb3J0KSB7XG4gICAgICAgICAgICAgIC8vIGlmIG5vIHBvcnQgaXMgc3BlY2lmaWVkIG1hbnVhbGx5LCB1c2UgdGhlIHByb3RvY29sIGRlZmF1bHRcbiAgICAgICAgICAgICAgb3B0cy5wb3J0ID0gdGhpcy5zZWN1cmUgPyAnNDQzJyA6ICc4MCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50IHx8IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IG9wdHMuaG9zdG5hbWUgfHwgKGdsb2JhbC5sb2NhdGlvbiA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xuICAgICAgICAgICAgdGhpcy5wb3J0ID0gb3B0cy5wb3J0IHx8IChnbG9iYWwubG9jYXRpb24gJiYgbG9jYXRpb24ucG9ydCA/IGxvY2F0aW9uLnBvcnQgOiB0aGlzLnNlY3VyZSA/IDQ0MyA6IDgwKTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHt9O1xuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiB0aGlzLnF1ZXJ5KSB0aGlzLnF1ZXJ5ID0gcGFyc2Vxcy5kZWNvZGUodGhpcy5xdWVyeSk7XG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGUgPSBmYWxzZSAhPT0gb3B0cy51cGdyYWRlO1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gKG9wdHMucGF0aCB8fCAnL2VuZ2luZS5pbycpLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLyc7XG4gICAgICAgICAgICB0aGlzLmZvcmNlSlNPTlAgPSAhIW9wdHMuZm9yY2VKU09OUDtcbiAgICAgICAgICAgIHRoaXMuanNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VCYXNlNjQgPSAhIW9wdHMuZm9yY2VCYXNlNjQ7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZXNYRFIgPSAhIW9wdHMuZW5hYmxlc1hEUjtcbiAgICAgICAgICAgIHRoaXMudGltZXN0YW1wUGFyYW0gPSBvcHRzLnRpbWVzdGFtcFBhcmFtIHx8ICd0JztcbiAgICAgICAgICAgIHRoaXMudGltZXN0YW1wUmVxdWVzdHMgPSBvcHRzLnRpbWVzdGFtcFJlcXVlc3RzO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnRzID0gb3B0cy50cmFuc3BvcnRzIHx8IFsncG9sbGluZycsICd3ZWJzb2NrZXQnXTtcbiAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wb2xpY3lQb3J0ID0gb3B0cy5wb2xpY3lQb3J0IHx8IDg0MztcbiAgICAgICAgICAgIHRoaXMucmVtZW1iZXJVcGdyYWRlID0gb3B0cy5yZW1lbWJlclVwZ3JhZGUgfHwgZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJpbmFyeVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vbmx5QmluYXJ5VXBncmFkZXMgPSBvcHRzLm9ubHlCaW5hcnlVcGdyYWRlcztcbiAgICAgICAgICAgIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSBmYWxzZSAhPT0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSA/IG9wdHMucGVyTWVzc2FnZURlZmxhdGUgfHwge30gOiBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRydWUgPT09IHRoaXMucGVyTWVzc2FnZURlZmxhdGUpIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSB7fTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlck1lc3NhZ2VEZWZsYXRlICYmIG51bGwgPT0gdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQgPSAxMDI0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgICAgICAgICAgIHRoaXMucGZ4ID0gb3B0cy5wZnggfHwgbnVsbDtcbiAgICAgICAgICAgIHRoaXMua2V5ID0gb3B0cy5rZXkgfHwgbnVsbDtcbiAgICAgICAgICAgIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZSB8fCBudWxsO1xuICAgICAgICAgICAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0IHx8IG51bGw7XG4gICAgICAgICAgICB0aGlzLmNhID0gb3B0cy5jYSB8fCBudWxsO1xuICAgICAgICAgICAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzIHx8IG51bGw7XG4gICAgICAgICAgICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkID09PSB1bmRlZmluZWQgPyBudWxsIDogb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgICAgICAgICAgIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gICAgICAgICAgICB2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuICAgICAgICAgICAgaWYgKGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsKSB7XG4gICAgICAgICAgICAgIGlmIChvcHRzLmV4dHJhSGVhZGVycyAmJiBPYmplY3Qua2V5cyhvcHRzLmV4dHJhSGVhZGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTWl4IGluIGBFbWl0dGVyYC5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIEVtaXR0ZXIoU29ja2V0LnByb3RvdHlwZSk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBQcm90b2NvbCB2ZXJzaW9uLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEV4cG9zZSBkZXBzIGZvciBsZWdhY3kgY29tcGF0aWJpbGl0eVxuICAgICAgICAgICAqIGFuZCBzdGFuZGFsb25lIGJyb3dzZXIgYWNjZXNzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LlNvY2tldCA9IFNvY2tldDtcbiAgICAgICAgICBTb2NrZXQuVHJhbnNwb3J0ID0gX2RlcmVxXygnLi90cmFuc3BvcnQnKTtcbiAgICAgICAgICBTb2NrZXQudHJhbnNwb3J0cyA9IF9kZXJlcV8oJy4vdHJhbnNwb3J0cycpO1xuICAgICAgICAgIFNvY2tldC5wYXJzZXIgPSBfZGVyZXFfKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDcmVhdGVzIHRyYW5zcG9ydCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgICAgICAgICAqIEByZXR1cm4ge1RyYW5zcG9ydH1cbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUuY3JlYXRlVHJhbnNwb3J0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGRlYnVnKCdjcmVhdGluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSBjbG9uZSh0aGlzLnF1ZXJ5KTtcblxuICAgICAgICAgICAgLy8gYXBwZW5kIGVuZ2luZS5pbyBwcm90b2NvbCBpZGVudGlmaWVyXG4gICAgICAgICAgICBxdWVyeS5FSU8gPSBwYXJzZXIucHJvdG9jb2w7XG5cbiAgICAgICAgICAgIC8vIHRyYW5zcG9ydCBuYW1lXG4gICAgICAgICAgICBxdWVyeS50cmFuc3BvcnQgPSBuYW1lO1xuXG4gICAgICAgICAgICAvLyBzZXNzaW9uIGlkIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcbiAgICAgICAgICAgIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgICAgICB2YXIgdHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNbbmFtZV0oe1xuICAgICAgICAgICAgICBhZ2VudDogdGhpcy5hZ2VudCxcbiAgICAgICAgICAgICAgaG9zdG5hbWU6IHRoaXMuaG9zdG5hbWUsXG4gICAgICAgICAgICAgIHBvcnQ6IHRoaXMucG9ydCxcbiAgICAgICAgICAgICAgc2VjdXJlOiB0aGlzLnNlY3VyZSxcbiAgICAgICAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgIGZvcmNlSlNPTlA6IHRoaXMuZm9yY2VKU09OUCxcbiAgICAgICAgICAgICAganNvbnA6IHRoaXMuanNvbnAsXG4gICAgICAgICAgICAgIGZvcmNlQmFzZTY0OiB0aGlzLmZvcmNlQmFzZTY0LFxuICAgICAgICAgICAgICBlbmFibGVzWERSOiB0aGlzLmVuYWJsZXNYRFIsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcFJlcXVlc3RzOiB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzLFxuICAgICAgICAgICAgICB0aW1lc3RhbXBQYXJhbTogdGhpcy50aW1lc3RhbXBQYXJhbSxcbiAgICAgICAgICAgICAgcG9saWN5UG9ydDogdGhpcy5wb2xpY3lQb3J0LFxuICAgICAgICAgICAgICBzb2NrZXQ6IHRoaXMsXG4gICAgICAgICAgICAgIHBmeDogdGhpcy5wZngsXG4gICAgICAgICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgICAgICAgIHBhc3NwaHJhc2U6IHRoaXMucGFzc3BocmFzZSxcbiAgICAgICAgICAgICAgY2VydDogdGhpcy5jZXJ0LFxuICAgICAgICAgICAgICBjYTogdGhpcy5jYSxcbiAgICAgICAgICAgICAgY2lwaGVyczogdGhpcy5jaXBoZXJzLFxuICAgICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IHRoaXMucmVqZWN0VW5hdXRob3JpemVkLFxuICAgICAgICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZTogdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSxcbiAgICAgICAgICAgICAgZXh0cmFIZWFkZXJzOiB0aGlzLmV4dHJhSGVhZGVyc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cmFuc3BvcnQ7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGNsb25lKG9iaikge1xuICAgICAgICAgICAgdmFyIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBvW2ldID0gb2JqW2ldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJbml0aWFsaXplcyB0cmFuc3BvcnQgdG8gdXNlIGFuZCBzdGFydHMgcHJvYmUuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNwb3J0O1xuICAgICAgICAgICAgaWYgKHRoaXMucmVtZW1iZXJVcGdyYWRlICYmIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgJiYgdGhpcy50cmFuc3BvcnRzLmluZGV4T2YoJ3dlYnNvY2tldCcpICE9IC0xKSB7XG4gICAgICAgICAgICAgIHRyYW5zcG9ydCA9ICd3ZWJzb2NrZXQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgwID09PSB0aGlzLnRyYW5zcG9ydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIC8vIEVtaXQgZXJyb3Igb24gbmV4dCB0aWNrIHNvIGl0IGNhbiBiZSBsaXN0ZW5lZCB0b1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCAnTm8gdHJhbnNwb3J0cyBhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcblxuICAgICAgICAgICAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyYW5zcG9ydC5vcGVuKCk7XG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydC4gRGlzYWJsZXMgdGhlIGV4aXN0aW5nIG9uZSAoaWYgYW55KS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS5zZXRUcmFuc3BvcnQgPSBmdW5jdGlvbiAodHJhbnNwb3J0KSB7XG4gICAgICAgICAgICBkZWJ1Zygnc2V0dGluZyB0cmFuc3BvcnQgJXMnLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgICAgICAgICBkZWJ1ZygnY2xlYXJpbmcgZXhpc3RpbmcgdHJhbnNwb3J0ICVzJywgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZXQgdXAgdHJhbnNwb3J0XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblxuICAgICAgICAgICAgLy8gc2V0IHVwIHRyYW5zcG9ydCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHRyYW5zcG9ydC5vbignZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYub25EcmFpbigpO1xuICAgICAgICAgICAgfSkub24oJ3BhY2tldCcsIGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgICAgICAgICAgc2VsZi5vblBhY2tldChwYWNrZXQpO1xuICAgICAgICAgICAgfSkub24oJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgICAgICAgICAgfSkub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLm9uQ2xvc2UoJ3RyYW5zcG9ydCBjbG9zZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFByb2JlcyBhIHRyYW5zcG9ydC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS5wcm9iZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBkZWJ1ZygncHJvYmluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgICAgICAgICB2YXIgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQobmFtZSwgeyBwcm9iZTogMSB9KSxcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBvblRyYW5zcG9ydE9wZW4oKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLm9ubHlCaW5hcnlVcGdyYWRlcykge1xuICAgICAgICAgICAgICAgIHZhciB1cGdyYWRlTG9zZXNCaW5hcnkgPSAhdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiBzZWxmLnRyYW5zcG9ydC5zdXBwb3J0c0JpbmFyeTtcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSBmYWlsZWQgfHwgdXBncmFkZUxvc2VzQmluYXJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBvcGVuZWQnLCBuYW1lKTtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogJ3BpbmcnLCBkYXRhOiAncHJvYmUnIH1dKTtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0Lm9uY2UoJ3BhY2tldCcsIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCdwb25nJyA9PSBtc2cudHlwZSAmJiAncHJvYmUnID09IG1zZy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBwb25nJywgbmFtZSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGluZycsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zcG9ydCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICd3ZWJzb2NrZXQnID09IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICAgICAgICAgICAgICBkZWJ1ZygncGF1c2luZyBjdXJyZW50IHRyYW5zcG9ydCBcIiVzXCInLCBzZWxmLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYudHJhbnNwb3J0LnBhdXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ2Nsb3NlZCcgPT0gc2VsZi5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKCdjaGFuZ2luZyB0cmFuc3BvcnQgYW5kIHNlbmRpbmcgdXBncmFkZSBwYWNrZXQnKTtcblxuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogJ3VwZ3JhZGUnIH1dKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlJywgdHJhbnNwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5mbHVzaCgpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCcsIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcigncHJvYmUgZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgIGVyci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcbiAgICAgICAgICAgICAgICAgIHNlbGYuZW1pdCgndXBncmFkZUVycm9yJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBmcmVlemVUcmFuc3BvcnQoKSB7XG4gICAgICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgICAgICAgICAvLyBBbnkgY2FsbGJhY2sgY2FsbGVkIGJ5IHRyYW5zcG9ydCBzaG91bGQgYmUgaWdub3JlZCBzaW5jZSBub3dcbiAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vSGFuZGxlIGFueSBlcnJvciB0aGF0IGhhcHBlbnMgd2hpbGUgcHJvYmluZ1xuICAgICAgICAgICAgZnVuY3Rpb24gb25lcnJvcihlcnIpIHtcbiAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdwcm9iZSBlcnJvcjogJyArIGVycik7XG4gICAgICAgICAgICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICAgICAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuXG4gICAgICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yOiAlcycsIG5hbWUsIGVycik7XG5cbiAgICAgICAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlRXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uVHJhbnNwb3J0Q2xvc2UoKSB7XG4gICAgICAgICAgICAgIG9uZXJyb3IoXCJ0cmFuc3BvcnQgY2xvc2VkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1doZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgICAgICAgICAgZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICAgICAgICAgICAgb25lcnJvcihcInNvY2tldCBjbG9zZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vV2hlbiB0aGUgc29ja2V0IGlzIHVwZ3JhZGVkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9udXBncmFkZSh0bykge1xuICAgICAgICAgICAgICBpZiAodHJhbnNwb3J0ICYmIHRvLm5hbWUgIT0gdHJhbnNwb3J0Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZygnXCIlc1wiIHdvcmtzIC0gYWJvcnRpbmcgXCIlc1wiJywgdG8ubmFtZSwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb24gdGhlIHRyYW5zcG9ydCBhbmQgb24gc2VsZlxuICAgICAgICAgICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdvcGVuJywgb25UcmFuc3BvcnRPcGVuKTtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgICAgICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25UcmFuc3BvcnRDbG9zZSk7XG4gICAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGluZycsIG9udXBncmFkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyYW5zcG9ydC5vbmNlKCdvcGVuJywgb25UcmFuc3BvcnRPcGVuKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC5vbmNlKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgICAgICAgdHJhbnNwb3J0Lm9uY2UoJ2Nsb3NlJywgb25UcmFuc3BvcnRDbG9zZSk7XG5cbiAgICAgICAgICAgIHRoaXMub25jZSgnY2xvc2UnLCBvbmNsb3NlKTtcbiAgICAgICAgICAgIHRoaXMub25jZSgndXBncmFkaW5nJywgb251cGdyYWRlKTtcblxuICAgICAgICAgICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBkZWVtZWQgb3Blbi5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlYnVnKCdzb2NrZXQgb3BlbicpO1xuICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICAgICAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICd3ZWJzb2NrZXQnID09IHRoaXMudHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ29wZW4nKTtcbiAgICAgICAgICAgIHRoaXMuZmx1c2goKTtcblxuICAgICAgICAgICAgLy8gd2UgY2hlY2sgZm9yIGByZWFkeVN0YXRlYCBpbiBjYXNlIGFuIGBvcGVuYFxuICAgICAgICAgICAgLy8gbGlzdGVuZXIgYWxyZWFkeSBjbG9zZWQgdGhlIHNvY2tldFxuICAgICAgICAgICAgaWYgKCdvcGVuJyA9PSB0aGlzLnJlYWR5U3RhdGUgJiYgdGhpcy51cGdyYWRlICYmIHRoaXMudHJhbnNwb3J0LnBhdXNlKSB7XG4gICAgICAgICAgICAgIGRlYnVnKCdzdGFydGluZyB1cGdyYWRlIHByb2JlcycpO1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMudXBncmFkZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9iZSh0aGlzLnVwZ3JhZGVzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBIYW5kbGVzIGEgcGFja2V0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9uUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgICAgICAgaWYgKCdvcGVuaW5nJyA9PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICBkZWJ1Zygnc29ja2V0IHJlY2VpdmU6IHR5cGUgXCIlc1wiLCBkYXRhIFwiJXNcIicsIHBhY2tldC50eXBlLCBwYWNrZXQuZGF0YSk7XG5cbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xuXG4gICAgICAgICAgICAgIC8vIFNvY2tldCBpcyBsaXZlIC0gYW55IHBhY2tldCBjb3VudHNcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdoZWFydGJlYXQnKTtcblxuICAgICAgICAgICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnb3Blbic6XG4gICAgICAgICAgICAgICAgICB0aGlzLm9uSGFuZHNoYWtlKHBhcnNlanNvbihwYWNrZXQuZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdwb25nJzpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGluZygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdwb25nJyk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3NlcnZlciBlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgZXJyLmNvZGUgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICAgICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZGF0YScsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWJ1ZygncGFja2V0IHJlY2VpdmVkIHdpdGggc29ja2V0IHJlYWR5U3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZHNoYWtlIG9ialxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS5vbkhhbmRzaGFrZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2hhbmRzaGFrZScsIGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pZCA9IGRhdGEuc2lkO1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucXVlcnkuc2lkID0gZGF0YS5zaWQ7XG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGVzID0gdGhpcy5maWx0ZXJVcGdyYWRlcyhkYXRhLnVwZ3JhZGVzKTtcbiAgICAgICAgICAgIHRoaXMucGluZ0ludGVydmFsID0gZGF0YS5waW5nSW50ZXJ2YWw7XG4gICAgICAgICAgICB0aGlzLnBpbmdUaW1lb3V0ID0gZGF0YS5waW5nVGltZW91dDtcbiAgICAgICAgICAgIHRoaXMub25PcGVuKCk7XG4gICAgICAgICAgICAvLyBJbiBjYXNlIG9wZW4gaGFuZGxlciBjbG9zZXMgc29ja2V0XG4gICAgICAgICAgICBpZiAoJ2Nsb3NlZCcgPT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnNldFBpbmcoKTtcblxuICAgICAgICAgICAgLy8gUHJvbG9uZyBsaXZlbmVzcyBvZiBzb2NrZXQgb24gaGVhcnRiZWF0XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdoZWFydGJlYXQnLCB0aGlzLm9uSGVhcnRiZWF0KTtcbiAgICAgICAgICAgIHRoaXMub24oJ2hlYXJ0YmVhdCcsIHRoaXMub25IZWFydGJlYXQpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBSZXNldHMgcGluZyB0aW1lb3V0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9uSGVhcnRiZWF0ID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2VsZi5waW5nVGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICgnY2xvc2VkJyA9PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICAgICAgc2VsZi5vbkNsb3NlKCdwaW5nIHRpbWVvdXQnKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQgfHwgc2VsZi5waW5nSW50ZXJ2YWwgKyBzZWxmLnBpbmdUaW1lb3V0KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUGluZ3Mgc2VydmVyIGV2ZXJ5IGB0aGlzLnBpbmdJbnRlcnZhbGAgYW5kIGV4cGVjdHMgcmVzcG9uc2VcbiAgICAgICAgICAgKiB3aXRoaW4gYHRoaXMucGluZ1RpbWVvdXRgIG9yIGNsb3NlcyBjb25uZWN0aW9uLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLnNldFBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5waW5nSW50ZXJ2YWxUaW1lcik7XG4gICAgICAgICAgICBzZWxmLnBpbmdJbnRlcnZhbFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGRlYnVnKCd3cml0aW5nIHBpbmcgcGFja2V0IC0gZXhwZWN0aW5nIHBvbmcgd2l0aGluICVzbXMnLCBzZWxmLnBpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgICAgc2VsZi5waW5nKCk7XG4gICAgICAgICAgICAgIHNlbGYub25IZWFydGJlYXQoc2VsZi5waW5nVGltZW91dCk7XG4gICAgICAgICAgICB9LCBzZWxmLnBpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICogU2VuZHMgYSBwaW5nIHBhY2tldC5cbiAgICAgICAgICAqXG4gICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS5waW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zZW5kUGFja2V0KCdwaW5nJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLmVtaXQoJ3BpbmcnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsZWQgb24gYGRyYWluYCBldmVudFxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9uRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLndyaXRlQnVmZmVyLnNwbGljZSgwLCB0aGlzLnByZXZCdWZmZXJMZW4pO1xuXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSwgd2hlbiB1cGdyYWRpbmcsIHVwZ3JhZGUgcGFja2V0IGlzIHNlbnQgb3ZlcixcbiAgICAgICAgICAgIC8vIGFuZCBhIG5vbnplcm8gcHJldkJ1ZmZlckxlbiBjb3VsZCBjYXVzZSBwcm9ibGVtcyBvbiBgZHJhaW5gXG4gICAgICAgICAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gICAgICAgICAgICBpZiAoMCA9PT0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdkcmFpbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5mbHVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGbHVzaCB3cml0ZSBidWZmZXJzLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCdjbG9zZWQnICE9IHRoaXMucmVhZHlTdGF0ZSAmJiB0aGlzLnRyYW5zcG9ydC53cml0YWJsZSAmJiAhdGhpcy51cGdyYWRpbmcgJiYgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZGVidWcoJ2ZsdXNoaW5nICVkIHBhY2tldHMgaW4gc29ja2V0JywgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpO1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5zZW5kKHRoaXMud3JpdGVCdWZmZXIpO1xuICAgICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgbGVuZ3RoIG9mIHdyaXRlQnVmZmVyXG4gICAgICAgICAgICAgIC8vIHNwbGljZSB3cml0ZUJ1ZmZlciBhbmQgY2FsbGJhY2tCdWZmZXIgb24gYGRyYWluYFxuICAgICAgICAgICAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdmbHVzaCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZW5kcyBhIG1lc3NhZ2UuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZS5cbiAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICAgICAgICAgKiBAcmV0dXJuIHtTb2NrZXR9IGZvciBjaGFpbmluZy5cbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS53cml0ZSA9IFNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRQYWNrZXQoJ21lc3NhZ2UnLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYWNrZXQgdHlwZS5cbiAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5cbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUuc2VuZFBhY2tldCA9IGZ1bmN0aW9uICh0eXBlLCBkYXRhLCBvcHRpb25zLCBmbikge1xuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgZm4gPSBkYXRhO1xuICAgICAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICBmbiA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJ2Nsb3NpbmcnID09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2VkJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMuY29tcHJlc3MgPSBmYWxzZSAhPT0gb3B0aW9ucy5jb21wcmVzcztcblxuICAgICAgICAgICAgdmFyIHBhY2tldCA9IHtcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncGFja2V0Q3JlYXRlJywgcGFja2V0KTtcbiAgICAgICAgICAgIHRoaXMud3JpdGVCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgICAgICAgICAgaWYgKGZuKSB0aGlzLm9uY2UoJ2ZsdXNoJywgZm4pO1xuICAgICAgICAgICAgdGhpcy5mbHVzaCgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDbG9zZXMgdGhlIGNvbm5lY3Rpb24uXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJ29wZW5pbmcnID09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zaW5nJztcblxuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmNlKCdkcmFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICAgICAgICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbkNsb3NlKCdmb3JjZWQgY2xvc2UnKTtcbiAgICAgICAgICAgICAgZGVidWcoJ3NvY2tldCBjbG9zaW5nIC0gdGVsbGluZyB0cmFuc3BvcnQgdG8gY2xvc2UnKTtcbiAgICAgICAgICAgICAgc2VsZi50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2xlYW51cEFuZENsb3NlKCkge1xuICAgICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcigndXBncmFkZUVycm9yJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gd2FpdEZvclVwZ3JhZGUoKSB7XG4gICAgICAgICAgICAgIC8vIHdhaXQgZm9yIHVwZ3JhZGUgdG8gZmluaXNoIHNpbmNlIHdlIGNhbid0IHNlbmQgcGFja2V0cyB3aGlsZSBwYXVzaW5nIGEgdHJhbnNwb3J0XG4gICAgICAgICAgICAgIHNlbGYub25jZSgndXBncmFkZScsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICAgICAgICAgIHNlbGYub25jZSgndXBncmFkZUVycm9yJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBkZWJ1Zygnc29ja2V0IGVycm9yICVqJywgZXJyKTtcbiAgICAgICAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKCd0cmFuc3BvcnQgZXJyb3InLCBlcnIpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgY2xvc2UuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24sIGRlc2MpIHtcbiAgICAgICAgICAgIGlmICgnb3BlbmluZycgPT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ2Nsb3NpbmcnID09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICBkZWJ1Zygnc29ja2V0IGNsb3NlIHdpdGggcmVhc29uOiBcIiVzXCInLCByZWFzb24pO1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgLy8gY2xlYXIgdGltZXJzXG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAgICAgICAgICAgLy8gc3RvcCBldmVudCBmcm9tIGZpcmluZyBhZ2FpbiBmb3IgdHJhbnNwb3J0XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygnY2xvc2UnKTtcblxuICAgICAgICAgICAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgICAgICAgICAgIC8vIGlnbm9yZSBmdXJ0aGVyIHRyYW5zcG9ydCBjb21tdW5pY2F0aW9uXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgICAgICAgICAgIC8vIHNldCByZWFkeSBzdGF0ZVxuICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcblxuICAgICAgICAgICAgICAvLyBjbGVhciBzZXNzaW9uIGlkXG4gICAgICAgICAgICAgIHRoaXMuaWQgPSBudWxsO1xuXG4gICAgICAgICAgICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAgICAgICAgICAgLy8gY2xlYW4gYnVmZmVycyBhZnRlciwgc28gdXNlcnMgY2FuIHN0aWxsXG4gICAgICAgICAgICAgIC8vIGdyYWIgdGhlIGJ1ZmZlcnMgb24gYGNsb3NlYCBldmVudFxuICAgICAgICAgICAgICBzZWxmLndyaXRlQnVmZmVyID0gW107XG4gICAgICAgICAgICAgIHNlbGYucHJldkJ1ZmZlckxlbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZpbHRlcnMgdXBncmFkZXMsIHJldHVybmluZyBvbmx5IHRob3NlIG1hdGNoaW5nIGNsaWVudCB0cmFuc3BvcnRzLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gc2VydmVyIHVwZ3JhZGVzXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUuZmlsdGVyVXBncmFkZXMgPSBmdW5jdGlvbiAodXBncmFkZXMpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHVwZ3JhZGVzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICBpZiAofmluZGV4KHRoaXMudHJhbnNwb3J0cywgdXBncmFkZXNbaV0pKSBmaWx0ZXJlZFVwZ3JhZGVzLnB1c2godXBncmFkZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkVXBncmFkZXM7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkuY2FsbCh0aGlzLCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgICAgIH0sIHsgXCIuL3RyYW5zcG9ydFwiOiA0LCBcIi4vdHJhbnNwb3J0c1wiOiA1LCBcImNvbXBvbmVudC1lbWl0dGVyXCI6IDE1LCBcImRlYnVnXCI6IDE3LCBcImVuZ2luZS5pby1wYXJzZXJcIjogMTksIFwiaW5kZXhvZlwiOiAyMywgXCJwYXJzZWpzb25cIjogMjYsIFwicGFyc2Vxc1wiOiAyNywgXCJwYXJzZXVyaVwiOiAyOCB9XSwgNDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBwYXJzZXIgPSBfZGVyZXFfKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG4gICAgICAgIHZhciBFbWl0dGVyID0gX2RlcmVxXygnY29tcG9uZW50LWVtaXR0ZXInKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gVHJhbnNwb3J0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFuc3BvcnQgYWJzdHJhY3QgY29uc3RydWN0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gVHJhbnNwb3J0KG9wdHMpIHtcbiAgICAgICAgICB0aGlzLnBhdGggPSBvcHRzLnBhdGg7XG4gICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IG9wdHMuaG9zdG5hbWU7XG4gICAgICAgICAgdGhpcy5wb3J0ID0gb3B0cy5wb3J0O1xuICAgICAgICAgIHRoaXMuc2VjdXJlID0gb3B0cy5zZWN1cmU7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gICAgICAgICAgdGhpcy50aW1lc3RhbXBQYXJhbSA9IG9wdHMudGltZXN0YW1wUGFyYW07XG4gICAgICAgICAgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyA9IG9wdHMudGltZXN0YW1wUmVxdWVzdHM7XG4gICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJyc7XG4gICAgICAgICAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQgfHwgZmFsc2U7XG4gICAgICAgICAgdGhpcy5zb2NrZXQgPSBvcHRzLnNvY2tldDtcbiAgICAgICAgICB0aGlzLmVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgICAgICAgICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgICAgICAgICB0aGlzLnBmeCA9IG9wdHMucGZ4O1xuICAgICAgICAgIHRoaXMua2V5ID0gb3B0cy5rZXk7XG4gICAgICAgICAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlO1xuICAgICAgICAgIHRoaXMuY2VydCA9IG9wdHMuY2VydDtcbiAgICAgICAgICB0aGlzLmNhID0gb3B0cy5jYTtcbiAgICAgICAgICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnM7XG4gICAgICAgICAgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICAgICAgICAgIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gICAgICAgICAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaXggaW4gYEVtaXR0ZXJgLlxuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyKFRyYW5zcG9ydC5wcm90b3R5cGUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbWl0cyBhbiBlcnJvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAgICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAobXNnLCBkZXNjKSB7XG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICAgIGVyci50eXBlID0gJ1RyYW5zcG9ydEVycm9yJztcbiAgICAgICAgICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPcGVucyB0aGUgdHJhbnNwb3J0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCdjbG9zZWQnID09IHRoaXMucmVhZHlTdGF0ZSB8fCAnJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcbiAgICAgICAgICAgIHRoaXMuZG9PcGVuKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsb3NlcyB0aGUgdHJhbnNwb3J0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgVHJhbnNwb3J0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoJ29wZW5pbmcnID09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZW5kcyBtdWx0aXBsZSBwYWNrZXRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICAgICAgICAgIGlmICgnb3BlbicgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLndyaXRlKHBhY2tldHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zcG9ydCBub3Qgb3BlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gb3BlblxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICAgICAgICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHZhciBwYWNrZXQgPSBwYXJzZXIuZGVjb2RlUGFja2V0KGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpO1xuICAgICAgICAgIHRoaXMub25QYWNrZXQocGFja2V0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHdpdGggYSBkZWNvZGVkIHBhY2tldC5cbiAgICAgICAgICovXG5cbiAgICAgICAgVHJhbnNwb3J0LnByb3RvdHlwZS5vblBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIGNsb3NlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICAgICAgICAgIHRoaXMuZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIHsgXCJjb21wb25lbnQtZW1pdHRlclwiOiAxNSwgXCJlbmdpbmUuaW8tcGFyc2VyXCI6IDE5IH1dLCA1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdCA9IF9kZXJlcV8oJ3htbGh0dHByZXF1ZXN0LXNzbCcpO1xuICAgICAgICAgIHZhciBYSFIgPSBfZGVyZXFfKCcuL3BvbGxpbmcteGhyJyk7XG4gICAgICAgICAgdmFyIEpTT05QID0gX2RlcmVxXygnLi9wb2xsaW5nLWpzb25wJyk7XG4gICAgICAgICAgdmFyIHdlYnNvY2tldCA9IF9kZXJlcV8oJy4vd2Vic29ja2V0Jyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBFeHBvcnQgdHJhbnNwb3J0cy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMucG9sbGluZyA9IHBvbGxpbmc7XG4gICAgICAgICAgZXhwb3J0cy53ZWJzb2NrZXQgPSB3ZWJzb2NrZXQ7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBQb2xsaW5nIHRyYW5zcG9ydCBwb2x5bW9ycGhpYyBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgKiBEZWNpZGVzIG9uIHhociB2cyBqc29ucCBiYXNlZCBvbiBmZWF0dXJlIGRldGVjdGlvbi5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gcG9sbGluZyhvcHRzKSB7XG4gICAgICAgICAgICB2YXIgeGhyO1xuICAgICAgICAgICAgdmFyIHhkID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgeHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBqc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuXG4gICAgICAgICAgICBpZiAoZ2xvYmFsLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgIHZhciBpc1NTTCA9ICdodHRwczonID09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgICAgICAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAgICAgICAgICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgICAgICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHhkID0gb3B0cy5ob3N0bmFtZSAhPSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwb3J0ICE9IG9wdHMucG9ydDtcbiAgICAgICAgICAgICAgeHMgPSBvcHRzLnNlY3VyZSAhPSBpc1NTTDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3B0cy54ZG9tYWluID0geGQ7XG4gICAgICAgICAgICBvcHRzLnhzY2hlbWUgPSB4cztcbiAgICAgICAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcblxuICAgICAgICAgICAgaWYgKCdvcGVuJyBpbiB4aHIgJiYgIW9wdHMuZm9yY2VKU09OUCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFhIUihvcHRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghanNvbnApIHRocm93IG5ldyBFcnJvcignSlNPTlAgZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBKU09OUChvcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7IFwiLi9wb2xsaW5nLWpzb25wXCI6IDYsIFwiLi9wb2xsaW5nLXhoclwiOiA3LCBcIi4vd2Vic29ja2V0XCI6IDksIFwieG1saHR0cHJlcXVlc3Qtc3NsXCI6IDEwIH1dLCA2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBQb2xsaW5nID0gX2RlcmVxXygnLi9wb2xsaW5nJyk7XG4gICAgICAgICAgdmFyIGluaGVyaXQgPSBfZGVyZXFfKCdjb21wb25lbnQtaW5oZXJpdCcpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IEpTT05QUG9sbGluZztcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhY2hlZCByZWd1bGFyIGV4cHJlc3Npb25zLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIHJOZXdsaW5lID0gL1xcbi9nO1xuICAgICAgICAgIHZhciByRXNjYXBlZE5ld2xpbmUgPSAvXFxcXG4vZztcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEdsb2JhbCBKU09OUCBjYWxsYmFja3MuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgY2FsbGJhY2tzO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2FsbGJhY2tzIGNvdW50LlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIGluZGV4ID0gMDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE5vb3AuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBlbXB0eSgpIHt9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBKU09OUCBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIEpTT05QUG9sbGluZyhvcHRzKSB7XG4gICAgICAgICAgICBQb2xsaW5nLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gICAgICAgICAgICAvLyBkZWZpbmUgZ2xvYmFsIGNhbGxiYWNrcyBhcnJheSBpZiBub3QgcHJlc2VudFxuICAgICAgICAgICAgLy8gd2UgZG8gdGhpcyBoZXJlIChsYXppbHkpIHRvIGF2b2lkIHVubmVlZGVkIGdsb2JhbCBwb2xsdXRpb25cbiAgICAgICAgICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY29uc2lkZXIgbXVsdGlwbGUgZW5naW5lcyBpbiB0aGUgc2FtZSBwYWdlXG4gICAgICAgICAgICAgIGlmICghZ2xvYmFsLl9fX2VpbykgZ2xvYmFsLl9fX2VpbyA9IFtdO1xuICAgICAgICAgICAgICBjYWxsYmFja3MgPSBnbG9iYWwuX19fZWlvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjYWxsYmFjayBpZGVudGlmaWVyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gY2FsbGJhY2tzLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gYWRkIGNhbGxiYWNrIHRvIGpzb25wIGdsb2JhbFxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICBzZWxmLm9uRGF0YShtc2cpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0byBxdWVyeSBzdHJpbmdcbiAgICAgICAgICAgIHRoaXMucXVlcnkuaiA9IHRoaXMuaW5kZXg7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgc3B1cmlvdXMgZXJyb3JzIGZyb20gYmVpbmcgZW1pdHRlZCB3aGVuIHRoZSB3aW5kb3cgaXMgdW5sb2FkZWRcbiAgICAgICAgICAgIGlmIChnbG9iYWwuZG9jdW1lbnQgJiYgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5zY3JpcHQpIHNlbGYuc2NyaXB0Lm9uZXJyb3IgPSBlbXB0eTtcbiAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEluaGVyaXRzIGZyb20gUG9sbGluZy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGluaGVyaXQoSlNPTlBQb2xsaW5nLCBQb2xsaW5nKTtcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogSlNPTlAgb25seSBzdXBwb3J0cyBiaW5hcnkgYXMgYmFzZTY0IGVuY29kZWQgc3RyaW5nc1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2xvc2VzIHRoZSBzb2NrZXQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIEpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgICAgICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgICAgICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybSA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZS5jYWxsKHRoaXMpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBKU09OUFBvbGxpbmcucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgICAgICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gdGhpcy51cmkoKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKCdqc29ucCBwb2xsIGVycm9yJywgZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgaW5zZXJ0QXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgICAgICBpZiAoaW5zZXJ0QXQpIHtcbiAgICAgICAgICAgICAgaW5zZXJ0QXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBpbnNlcnRBdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY3JpcHQgPSBzY3JpcHQ7XG5cbiAgICAgICAgICAgIHZhciBpc1VBZ2Vja28gPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgbmF2aWdhdG9yICYmIC9nZWNrby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICAgICAgICAgIGlmIChpc1VBZ2Vja28pIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFdyaXRlcyB3aXRoIGEgaGlkZGVuIGlmcmFtZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmRcbiAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIEpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9Xcml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBmbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgdmFyIGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmlmcmFtZUlkID0gJ2Vpb19pZnJhbWVfJyArIHRoaXMuaW5kZXg7XG4gICAgICAgICAgICAgIHZhciBpZnJhbWU7XG5cbiAgICAgICAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnc29ja2V0aW8nO1xuICAgICAgICAgICAgICBmb3JtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgZm9ybS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XG4gICAgICAgICAgICAgIGZvcm0uc3R5bGUubGVmdCA9ICctMTAwMHB4JztcbiAgICAgICAgICAgICAgZm9ybS50YXJnZXQgPSBpZDtcbiAgICAgICAgICAgICAgZm9ybS5tZXRob2QgPSAnUE9TVCc7XG4gICAgICAgICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY2NlcHQtY2hhcnNldCcsICd1dGYtOCcpO1xuICAgICAgICAgICAgICBhcmVhLm5hbWUgPSAnZCc7XG4gICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYSk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgICAgICAgICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5mb3JtLmFjdGlvbiA9IHRoaXMudXJpKCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICBpbml0SWZyYW1lKCk7XG4gICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRJZnJhbWUoKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLmlmcmFtZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmZvcm0ucmVtb3ZlQ2hpbGQoc2VsZi5pZnJhbWUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYub25FcnJvcignanNvbnAgcG9sbGluZyBpZnJhbWUgcmVtb3ZhbCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gaWU2IGR5bmFtaWMgaWZyYW1lcyB3aXRoIHRhcmdldD1cIlwiIHN1cHBvcnQgKHRoYW5rcyBDaHJpcyBMYW1iYWNoZXIpXG4gICAgICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGlmcmFtZSBzcmM9XCJqYXZhc2NyaXB0OjBcIiBuYW1lPVwiJyArIHNlbGYuaWZyYW1lSWQgKyAnXCI+JztcbiAgICAgICAgICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWwpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICAgICAgaWZyYW1lLm5hbWUgPSBzZWxmLmlmcmFtZUlkO1xuICAgICAgICAgICAgICAgIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDowJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmcmFtZS5pZCA9IHNlbGYuaWZyYW1lSWQ7XG5cbiAgICAgICAgICAgICAgc2VsZi5mb3JtLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgIHNlbGYuaWZyYW1lID0gaWZyYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbml0SWZyYW1lKCk7XG5cbiAgICAgICAgICAgIC8vIGVzY2FwZSBcXG4gdG8gcHJldmVudCBpdCBmcm9tIGJlaW5nIGNvbnZlcnRlZCBpbnRvIFxcclxcbiBieSBzb21lIFVBc1xuICAgICAgICAgICAgLy8gZG91YmxlIGVzY2FwaW5nIGlzIHJlcXVpcmVkIGZvciBlc2NhcGVkIG5ldyBsaW5lcyBiZWNhdXNlIHVuZXNjYXBpbmcgb2YgbmV3IGxpbmVzIGNhbiBiZSBkb25lIHNhZmVseSBvbiBzZXJ2ZXItc2lkZVxuICAgICAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShyRXNjYXBlZE5ld2xpbmUsICdcXFxcXFxuJyk7XG4gICAgICAgICAgICB0aGlzLmFyZWEudmFsdWUgPSBkYXRhLnJlcGxhY2Uock5ld2xpbmUsICdcXFxcbicpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pZnJhbWUuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5pZnJhbWUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlmcmFtZS5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5pZnJhbWUub25sb2FkID0gY29tcGxldGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkuY2FsbCh0aGlzLCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgICAgIH0sIHsgXCIuL3BvbGxpbmdcIjogOCwgXCJjb21wb25lbnQtaW5oZXJpdFwiOiAxNiB9XSwgNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0ID0gX2RlcmVxXygneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG4gICAgICAgICAgdmFyIFBvbGxpbmcgPSBfZGVyZXFfKCcuL3BvbGxpbmcnKTtcbiAgICAgICAgICB2YXIgRW1pdHRlciA9IF9kZXJlcV8oJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG4gICAgICAgICAgdmFyIGluaGVyaXQgPSBfZGVyZXFfKCdjb21wb25lbnQtaW5oZXJpdCcpO1xuICAgICAgICAgIHZhciBkZWJ1ZyA9IF9kZXJlcV8oJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6cG9sbGluZy14aHInKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZHVsZSBleHBvcnRzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBYSFI7XG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBFbXB0eSBmdW5jdGlvblxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogWEhSIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBYSFIob3B0cykge1xuICAgICAgICAgICAgUG9sbGluZy5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICAgICAgICBpZiAoZ2xvYmFsLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgIHZhciBpc1NTTCA9ICdodHRwczonID09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgICAgICAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAgICAgICAgICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgICAgICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMueGQgPSBvcHRzLmhvc3RuYW1lICE9IGdsb2JhbC5sb2NhdGlvbi5ob3N0bmFtZSB8fCBwb3J0ICE9IG9wdHMucG9ydDtcbiAgICAgICAgICAgICAgdGhpcy54cyA9IG9wdHMuc2VjdXJlICE9IGlzU1NMO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJbmhlcml0cyBmcm9tIFBvbGxpbmcuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBpbmhlcml0KFhIUiwgUG9sbGluZyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBYSFIgc3VwcG9ydHMgYmluYXJ5XG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBYSFIucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENyZWF0ZXMgYSByZXF1ZXN0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgWEhSLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICAgICAgb3B0cy51cmkgPSB0aGlzLnVyaSgpO1xuICAgICAgICAgICAgb3B0cy54ZCA9IHRoaXMueGQ7XG4gICAgICAgICAgICBvcHRzLnhzID0gdGhpcy54cztcbiAgICAgICAgICAgIG9wdHMuYWdlbnQgPSB0aGlzLmFnZW50IHx8IGZhbHNlO1xuICAgICAgICAgICAgb3B0cy5zdXBwb3J0c0JpbmFyeSA9IHRoaXMuc3VwcG9ydHNCaW5hcnk7XG4gICAgICAgICAgICBvcHRzLmVuYWJsZXNYRFIgPSB0aGlzLmVuYWJsZXNYRFI7XG5cbiAgICAgICAgICAgIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICAgICAgICAgICAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgICAgICAgICAgIG9wdHMua2V5ID0gdGhpcy5rZXk7XG4gICAgICAgICAgICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gICAgICAgICAgICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gICAgICAgICAgICBvcHRzLmNhID0gdGhpcy5jYTtcbiAgICAgICAgICAgIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgICAgICAgICAgIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgICAgICAgICAgIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gICAgICAgICAgICBvcHRzLmV4dHJhSGVhZGVycyA9IHRoaXMuZXh0cmFIZWFkZXJzO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3Qob3B0cyk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNlbmRzIGRhdGEuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kLlxuICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgWEhSLnByb3RvdHlwZS5kb1dyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gICAgICAgICAgICB2YXIgaXNCaW5hcnkgPSB0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycgJiYgZGF0YSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIHJlcSA9IHRoaXMucmVxdWVzdCh7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhLCBpc0JpbmFyeTogaXNCaW5hcnkgfSk7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICByZXEub24oJ3N1Y2Nlc3MnLCBmbik7XG4gICAgICAgICAgICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IoJ3hociBwb3N0IGVycm9yJywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZW5kWGhyID0gcmVxO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBYSFIucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlYnVnKCd4aHIgcG9sbCcpO1xuICAgICAgICAgICAgdmFyIHJlcSA9IHRoaXMucmVxdWVzdCgpO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgcmVxLm9uKCdkYXRhJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbkRhdGEoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgIHNlbGYub25FcnJvcigneGhyIHBvbGwgZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnBvbGxYaHIgPSByZXE7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFJlcXVlc3QgY29uc3RydWN0b3JcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIFJlcXVlc3Qob3B0cykge1xuICAgICAgICAgICAgdGhpcy5tZXRob2QgPSBvcHRzLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgICAgICAgIHRoaXMudXJpID0gb3B0cy51cmk7XG4gICAgICAgICAgICB0aGlzLnhkID0gISFvcHRzLnhkO1xuICAgICAgICAgICAgdGhpcy54cyA9ICEhb3B0cy54cztcbiAgICAgICAgICAgIHRoaXMuYXN5bmMgPSBmYWxzZSAhPT0gb3B0cy5hc3luYztcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHVuZGVmaW5lZCAhPSBvcHRzLmRhdGEgPyBvcHRzLmRhdGEgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQ7XG4gICAgICAgICAgICB0aGlzLmlzQmluYXJ5ID0gb3B0cy5pc0JpbmFyeTtcbiAgICAgICAgICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBvcHRzLnN1cHBvcnRzQmluYXJ5O1xuICAgICAgICAgICAgdGhpcy5lbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gICAgICAgICAgICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgICAgICAgICAgIHRoaXMucGZ4ID0gb3B0cy5wZng7XG4gICAgICAgICAgICB0aGlzLmtleSA9IG9wdHMua2V5O1xuICAgICAgICAgICAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlO1xuICAgICAgICAgICAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0O1xuICAgICAgICAgICAgdGhpcy5jYSA9IG9wdHMuY2E7XG4gICAgICAgICAgICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnM7XG4gICAgICAgICAgICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gICAgICAgICAgICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICAgICAgICAgICAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNaXggaW4gYEVtaXR0ZXJgLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDcmVhdGVzIHRoZSBYSFIgb2JqZWN0IGFuZCBzZW5kcyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgUmVxdWVzdC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSB7IGFnZW50OiB0aGlzLmFnZW50LCB4ZG9tYWluOiB0aGlzLnhkLCB4c2NoZW1lOiB0aGlzLnhzLCBlbmFibGVzWERSOiB0aGlzLmVuYWJsZXNYRFIgfTtcblxuICAgICAgICAgICAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gICAgICAgICAgICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICAgICAgICAgICAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgICAgICAgICAgIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgICAgICAgICAgIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgICAgICAgICAgIG9wdHMuY2EgPSB0aGlzLmNhO1xuICAgICAgICAgICAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICAgICAgICAgICAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICAgICAgICAgICAgdmFyIHhociA9IHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBkZWJ1ZygneGhyIG9wZW4gJXM6ICVzJywgdGhpcy5tZXRob2QsIHRoaXMudXJpKTtcbiAgICAgICAgICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJpLCB0aGlzLmFzeW5jKTtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICAgIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMuZXh0cmFIZWFkZXJzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGhhcyB0byBiZSBkb25lIGFmdGVyIG9wZW4gYmVjYXVzZSBGaXJlZm94IGlzIHN0dXBpZFxuICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMyMTY5MDMvZ2V0LWJpbmFyeS1kYXRhLXdpdGgteG1saHR0cHJlcXVlc3QtaW4tYS1maXJlZm94LWV4dGVuc2lvblxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCdQT1NUJyA9PSB0aGlzLm1ldGhvZCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0JpbmFyeSkge1xuICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gaWU2IGNoZWNrXG4gICAgICAgICAgICAgIGlmICgnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpIHtcbiAgICAgICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYub25Mb2FkKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYub25FcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoNCAhPSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgaWYgKDIwMCA9PSB4aHIuc3RhdHVzIHx8IDEyMjMgPT0geGhyLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9uTG9hZCgpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBgZXJyb3JgIGV2ZW50IGhhbmRsZXIgdGhhdCdzIHVzZXItc2V0XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvZXMgbm90IHRocm93IGluIHRoZSBzYW1lIHRpY2sgYW5kIGdldHMgY2F1Z2h0IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVidWcoJ3hociBkYXRhICVzJywgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgeGhyLnNlbmQodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgLy8gTmVlZCB0byBkZWZlciBzaW5jZSAuY3JlYXRlKCkgaXMgY2FsbGVkIGRpcmVjdGx5IGZocm9tIHRoZSBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAvLyBhbmQgdGh1cyB0aGUgJ2Vycm9yJyBldmVudCBjYW4gb25seSBiZSBvbmx5IGJvdW5kICphZnRlciogdGhpcyBleGNlcHRpb25cbiAgICAgICAgICAgICAgLy8gb2NjdXJzLiAgVGhlcmVmb3JlLCBhbHNvLCB3ZSBjYW5ub3QgdGhyb3cgaGVyZSBhdCBhbGwuXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdsb2JhbC5kb2N1bWVudCkge1xuICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gUmVxdWVzdC5yZXF1ZXN0c0NvdW50Kys7XG4gICAgICAgICAgICAgIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF0gPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBSZXF1ZXN0LnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsZWQgaWYgd2UgaGF2ZSBkYXRhLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBSZXF1ZXN0LnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdkYXRhJywgZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm9uU3VjY2VzcygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsZWQgdXBvbiBlcnJvci5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgUmVxdWVzdC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKHRydWUpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDbGVhbnMgdXAgaG91c2UuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFJlcXVlc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoZnJvbUVycm9yKSB7XG4gICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHRoaXMueGhyIHx8IG51bGwgPT09IHRoaXMueGhyKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHhtbGh0dHByZXF1ZXN0XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgICAgICAgICB0aGlzLnhoci5vbmxvYWQgPSB0aGlzLnhoci5vbmVycm9yID0gZW1wdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZyb21FcnJvcikge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMueGhyID0gbnVsbDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2FsbGVkIHVwb24gbG9hZC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgUmVxdWVzdC5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGU7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJykuc3BsaXQoJzsnKVswXTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJykge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KHRoaXMueGhyLnJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1aThBcnIgPSBuZXcgVWludDhBcnJheSh0aGlzLnhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gMCwgbGVuZ3RoID0gdWk4QXJyLmxlbmd0aDsgaWR4IDwgbGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGFBcnJheS5wdXNoKHVpOEFycltpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGRhdGFBcnJheSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRoaXMub25FcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChudWxsICE9IGRhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy5vbkRhdGEoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENoZWNrIGlmIGl0IGhhcyBYRG9tYWluUmVxdWVzdC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgUmVxdWVzdC5wcm90b3R5cGUuaGFzWERSID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnICE9PSB0eXBlb2YgZ2xvYmFsLlhEb21haW5SZXF1ZXN0ICYmICF0aGlzLnhzICYmIHRoaXMuZW5hYmxlc1hEUjtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQWJvcnRzIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEFib3J0cyBwZW5kaW5nIHJlcXVlc3RzIHdoZW4gdW5sb2FkaW5nIHRoZSB3aW5kb3cuIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnRcbiAgICAgICAgICAgKiBtZW1vcnkgbGVha3MgKGUuZy4gd2hlbiB1c2luZyBJRSkgYW5kIHRvIGVuc3VyZSB0aGF0IG5vIHNwdXJpb3VzIGVycm9yIGlzXG4gICAgICAgICAgICogZW1pdHRlZC5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGlmIChnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIFJlcXVlc3QucmVxdWVzdHNDb3VudCA9IDA7XG4gICAgICAgICAgICBSZXF1ZXN0LnJlcXVlc3RzID0ge307XG4gICAgICAgICAgICBpZiAoZ2xvYmFsLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudCgnb251bmxvYWQnLCB1bmxvYWRIYW5kbGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiB1bmxvYWRIYW5kbGVyKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBSZXF1ZXN0LnJlcXVlc3RzKSB7XG4gICAgICAgICAgICAgIGlmIChSZXF1ZXN0LnJlcXVlc3RzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgUmVxdWVzdC5yZXF1ZXN0c1tpXS5hYm9ydCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwgeyBcIi4vcG9sbGluZ1wiOiA4LCBcImNvbXBvbmVudC1lbWl0dGVyXCI6IDE1LCBcImNvbXBvbmVudC1pbmhlcml0XCI6IDE2LCBcImRlYnVnXCI6IDE3LCBcInhtbGh0dHByZXF1ZXN0LXNzbFwiOiAxMCB9XSwgODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBUcmFuc3BvcnQgPSBfZGVyZXFfKCcuLi90cmFuc3BvcnQnKTtcbiAgICAgICAgdmFyIHBhcnNlcXMgPSBfZGVyZXFfKCdwYXJzZXFzJyk7XG4gICAgICAgIHZhciBwYXJzZXIgPSBfZGVyZXFfKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG4gICAgICAgIHZhciBpbmhlcml0ID0gX2RlcmVxXygnY29tcG9uZW50LWluaGVyaXQnKTtcbiAgICAgICAgdmFyIHllYXN0ID0gX2RlcmVxXygneWVhc3QnKTtcbiAgICAgICAgdmFyIGRlYnVnID0gX2RlcmVxXygnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBleHBvcnRzLlxuICAgICAgICAgKi9cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IFBvbGxpbmc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIFhIUjIgc3VwcG9ydGVkP1xuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgaGFzWEhSMiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0ID0gX2RlcmVxXygneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG4gICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh7IHhkb21haW46IGZhbHNlIH0pO1xuICAgICAgICAgIHJldHVybiBudWxsICE9IHhoci5yZXNwb25zZVR5cGU7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvbGxpbmcgaW50ZXJmYWNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gUG9sbGluZyhvcHRzKSB7XG4gICAgICAgICAgdmFyIGZvcmNlQmFzZTY0ID0gb3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0O1xuICAgICAgICAgIGlmICghaGFzWEhSMiB8fCBmb3JjZUJhc2U2NCkge1xuICAgICAgICAgICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBUcmFuc3BvcnQuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmhlcml0cyBmcm9tIFRyYW5zcG9ydC5cbiAgICAgICAgICovXG5cbiAgICAgICAgaW5oZXJpdChQb2xsaW5nLCBUcmFuc3BvcnQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICAgICAgICovXG5cbiAgICAgICAgUG9sbGluZy5wcm90b3R5cGUubmFtZSA9ICdwb2xsaW5nJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogT3BlbnMgdGhlIHNvY2tldCAodHJpZ2dlcnMgcG9sbGluZykuIFdlIHdyaXRlIGEgUElORyBtZXNzYWdlIHRvIGRldGVybWluZVxuICAgICAgICAgKiB3aGVuIHRoZSB0cmFuc3BvcnQgaXMgb3Blbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFBvbGxpbmcucHJvdG90eXBlLmRvT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnBvbGwoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGF1c2VzIHBvbGxpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHVwb24gYnVmZmVycyBhcmUgZmx1c2hlZCBhbmQgdHJhbnNwb3J0IGlzIHBhdXNlZFxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgUG9sbGluZy5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAob25QYXVzZSkge1xuICAgICAgICAgIHZhciBwZW5kaW5nID0gMDtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSAncGF1c2luZyc7XG5cbiAgICAgICAgICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIGRlYnVnKCdwYXVzZWQnKTtcbiAgICAgICAgICAgIHNlbGYucmVhZHlTdGF0ZSA9ICdwYXVzZWQnO1xuICAgICAgICAgICAgb25QYXVzZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLnBvbGxpbmcgfHwgIXRoaXMud3JpdGFibGUpIHtcbiAgICAgICAgICAgIHZhciB0b3RhbCA9IDA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBvbGxpbmcpIHtcbiAgICAgICAgICAgICAgZGVidWcoJ3dlIGFyZSBjdXJyZW50bHkgcG9sbGluZyAtIHdhaXRpbmcgdG8gcGF1c2UnKTtcbiAgICAgICAgICAgICAgdG90YWwrKztcbiAgICAgICAgICAgICAgdGhpcy5vbmNlKCdwb2xsQ29tcGxldGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoJ3ByZS1wYXVzZSBwb2xsaW5nIGNvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLndyaXRhYmxlKSB7XG4gICAgICAgICAgICAgIGRlYnVnKCd3ZSBhcmUgY3VycmVudGx5IHdyaXRpbmcgLSB3YWl0aW5nIHRvIHBhdXNlJyk7XG4gICAgICAgICAgICAgIHRvdGFsKys7XG4gICAgICAgICAgICAgIHRoaXMub25jZSgnZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoJ3ByZS1wYXVzZSB3cml0aW5nIGNvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF1c2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXJ0cyBwb2xsaW5nIGN5Y2xlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBQb2xsaW5nLnByb3RvdHlwZS5wb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRlYnVnKCdwb2xsaW5nJyk7XG4gICAgICAgICAgdGhpcy5wb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmRvUG9sbCgpO1xuICAgICAgICAgIHRoaXMuZW1pdCgncG9sbCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdmVybG9hZHMgb25EYXRhIHRvIGRldGVjdCBwYXlsb2Fkcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFBvbGxpbmcucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIGRlYnVnKCdwb2xsaW5nIGdvdCBkYXRhICVzJywgZGF0YSk7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socGFja2V0LCBpbmRleCwgdG90YWwpIHtcbiAgICAgICAgICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICAgICAgICAgIGlmICgnb3BlbmluZycgPT0gc2VsZi5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgIHNlbGYub25PcGVuKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGl0cyBhIGNsb3NlIHBhY2tldCwgd2UgY2xvc2UgdGhlIG9uZ29pbmcgcmVxdWVzdHNcbiAgICAgICAgICAgIGlmICgnY2xvc2UnID09IHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBieXBhc3Mgb25EYXRhIGFuZCBoYW5kbGUgdGhlIG1lc3NhZ2VcbiAgICAgICAgICAgIHNlbGYub25QYWNrZXQocGFja2V0KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gZGVjb2RlIHBheWxvYWRcbiAgICAgICAgICBwYXJzZXIuZGVjb2RlUGF5bG9hZChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAvLyBpZiBhbiBldmVudCBkaWQgbm90IHRyaWdnZXIgY2xvc2luZ1xuICAgICAgICAgIGlmICgnY2xvc2VkJyAhPSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGdvdCBkYXRhIHdlJ3JlIG5vdCBwb2xsaW5nXG4gICAgICAgICAgICB0aGlzLnBvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncG9sbENvbXBsZXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgnb3BlbicgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgIHRoaXMucG9sbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVidWcoJ2lnbm9yaW5nIHBvbGwgLSB0cmFuc3BvcnQgc3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvciBwb2xsaW5nLCBzZW5kIGEgY2xvc2UgcGFja2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgICAgIGRlYnVnKCd3cml0aW5nIGNsb3NlIHBhY2tldCcpO1xuICAgICAgICAgICAgc2VsZi53cml0ZShbeyB0eXBlOiAnY2xvc2UnIH1dKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJ29wZW4nID09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgZGVidWcoJ3RyYW5zcG9ydCBvcGVuIC0gY2xvc2luZycpO1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaW4gY2FzZSB3ZSdyZSB0cnlpbmcgdG8gY2xvc2Ugd2hpbGVcbiAgICAgICAgICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgICAgICAgICBkZWJ1ZygndHJhbnNwb3J0IG5vdCBvcGVuIC0gZGVmZXJyaW5nIGNsb3NlJyk7XG4gICAgICAgICAgICB0aGlzLm9uY2UoJ29wZW4nLCBjbG9zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgcGFja2V0c1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgUG9sbGluZy5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrZm4gPSBmdW5jdGlvbiBjYWxsYmFja2ZuKCkge1xuICAgICAgICAgICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmVtaXQoJ2RyYWluJyk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBwYXJzZXIuZW5jb2RlUGF5bG9hZChwYWNrZXRzLCB0aGlzLnN1cHBvcnRzQmluYXJ5LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgc2VsZi5kb1dyaXRlKGRhdGEsIGNhbGxiYWNrZm4pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgUG9sbGluZy5wcm90b3R5cGUudXJpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgICAgICAgdmFyIHNjaGVtYSA9IHRoaXMuc2VjdXJlID8gJ2h0dHBzJyA6ICdodHRwJztcbiAgICAgICAgICB2YXIgcG9ydCA9ICcnO1xuXG4gICAgICAgICAgLy8gY2FjaGUgYnVzdGluZyBpcyBmb3JjZWRcbiAgICAgICAgICBpZiAoZmFsc2UgIT09IHRoaXMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgICAgICAgIHF1ZXJ5W3RoaXMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgIXF1ZXJ5LnNpZCkge1xuICAgICAgICAgICAgcXVlcnkuYjY0ID0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgICAgICAgIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gICAgICAgICAgaWYgKHRoaXMucG9ydCAmJiAoJ2h0dHBzJyA9PSBzY2hlbWEgJiYgdGhpcy5wb3J0ICE9IDQ0MyB8fCAnaHR0cCcgPT0gc2NoZW1hICYmIHRoaXMucG9ydCAhPSA4MCkpIHtcbiAgICAgICAgICAgIHBvcnQgPSAnOicgKyB0aGlzLnBvcnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgcXVlcnkgPSAnPycgKyBxdWVyeTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaXB2NiA9IHRoaXMuaG9zdG5hbWUuaW5kZXhPZignOicpICE9PSAtMTtcbiAgICAgICAgICByZXR1cm4gc2NoZW1hICsgJzovLycgKyAoaXB2NiA/ICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScgOiB0aGlzLmhvc3RuYW1lKSArIHBvcnQgKyB0aGlzLnBhdGggKyBxdWVyeTtcbiAgICAgICAgfTtcbiAgICAgIH0sIHsgXCIuLi90cmFuc3BvcnRcIjogNCwgXCJjb21wb25lbnQtaW5oZXJpdFwiOiAxNiwgXCJkZWJ1Z1wiOiAxNywgXCJlbmdpbmUuaW8tcGFyc2VyXCI6IDE5LCBcInBhcnNlcXNcIjogMjcsIFwieG1saHR0cHJlcXVlc3Qtc3NsXCI6IDEwLCBcInllYXN0XCI6IDMwIH1dLCA5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgVHJhbnNwb3J0ID0gX2RlcmVxXygnLi4vdHJhbnNwb3J0Jyk7XG4gICAgICAgICAgdmFyIHBhcnNlciA9IF9kZXJlcV8oJ2VuZ2luZS5pby1wYXJzZXInKTtcbiAgICAgICAgICB2YXIgcGFyc2VxcyA9IF9kZXJlcV8oJ3BhcnNlcXMnKTtcbiAgICAgICAgICB2YXIgaW5oZXJpdCA9IF9kZXJlcV8oJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG4gICAgICAgICAgdmFyIHllYXN0ID0gX2RlcmVxXygneWVhc3QnKTtcbiAgICAgICAgICB2YXIgZGVidWcgPSBfZGVyZXFfKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OndlYnNvY2tldCcpO1xuICAgICAgICAgIHZhciBCcm93c2VyV2ViU29ja2V0ID0gZ2xvYmFsLldlYlNvY2tldCB8fCBnbG9iYWwuTW96V2ViU29ja2V0O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogR2V0IGVpdGhlciB0aGUgYFdlYlNvY2tldGAgb3IgYE1veldlYlNvY2tldGAgZ2xvYmFsc1xuICAgICAgICAgICAqIGluIHRoZSBicm93c2VyIG9yIHRoZSBXZWJTb2NrZXQtY29tcGF0aWJsZSBpbnRlcmZhY2VcbiAgICAgICAgICAgKiBleHBvc2VkIGJ5IGB3c2AgZm9yIE5vZGUgZW52aXJvbm1lbnQuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgV2ViU29ja2V0ID0gQnJvd3NlcldlYlNvY2tldCB8fCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogX2RlcmVxXygnd3MnKSk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gV1M7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBXZWJTb2NrZXQgdHJhbnNwb3J0IGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSB7T2JqZWN0fSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gV1Mob3B0cykge1xuICAgICAgICAgICAgdmFyIGZvcmNlQmFzZTY0ID0gb3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0O1xuICAgICAgICAgICAgaWYgKGZvcmNlQmFzZTY0KSB7XG4gICAgICAgICAgICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSBvcHRzLnBlck1lc3NhZ2VEZWZsYXRlO1xuICAgICAgICAgICAgVHJhbnNwb3J0LmNhbGwodGhpcywgb3B0cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSW5oZXJpdHMgZnJvbSBUcmFuc3BvcnQuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBpbmhlcml0KFdTLCBUcmFuc3BvcnQpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgV1MucHJvdG90eXBlLm5hbWUgPSAnd2Vic29ja2V0JztcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogV2ViU29ja2V0cyBzdXBwb3J0IGJpbmFyeVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgV1MucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE9wZW5zIHNvY2tldC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgV1MucHJvdG90eXBlLmRvT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgICAgICAgICAgIC8vIGxldCBwcm9iZSB0aW1lb3V0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHVyaSA9IHRoaXMudXJpKCk7XG4gICAgICAgICAgICB2YXIgcHJvdG9jb2xzID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICAgIGFnZW50OiB0aGlzLmFnZW50LFxuICAgICAgICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZTogdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gICAgICAgICAgICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICAgICAgICAgICAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgICAgICAgICAgIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgICAgICAgICAgIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgICAgICAgICAgIG9wdHMuY2EgPSB0aGlzLmNhO1xuICAgICAgICAgICAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICAgICAgICAgICAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgICAgICBvcHRzLmhlYWRlcnMgPSB0aGlzLmV4dHJhSGVhZGVycztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy53cyA9IEJyb3dzZXJXZWJTb2NrZXQgPyBuZXcgV2ViU29ja2V0KHVyaSkgOiBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzLCBvcHRzKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMud3MuYmluYXJ5VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMud3Muc3VwcG9ydHMgJiYgdGhpcy53cy5zdXBwb3J0cy5iaW5hcnkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdidWZmZXInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy53cy5iaW5hcnlUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc29ja2V0XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFdTLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy53cy5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYub25PcGVuKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy53cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICBzZWxmLm9uRGF0YShldi5kYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLndzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IoJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogT3ZlcnJpZGUgYG9uRGF0YWAgdG8gdXNlIGEgdGltZXIgb24gaU9TLlxuICAgICAgICAgICAqIFNlZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWxvdWdocmFuLzIwNTIwMDZcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2lQYWR8aVBob25lfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBXUy5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uRGF0YS5jYWxsKHNlbGYsIGRhdGEpO1xuICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogV3JpdGVzIGRhdGEgdG8gc29ja2V0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgb2YgcGFja2V0cy5cbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFdTLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChwYWNrZXRzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIGVuY29kZVBhY2tldCBlZmZpY2llbnQgYXMgaXQgdXNlcyBXUyBmcmFtaW5nXG4gICAgICAgICAgICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gICAgICAgICAgICB2YXIgdG90YWwgPSBwYWNrZXRzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdG90YWw7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgKGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgICAgICAgICAgICBwYXJzZXIuZW5jb2RlUGFja2V0KHBhY2tldCwgc2VsZi5zdXBwb3J0c0JpbmFyeSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhbHdheXMgY3JlYXRlIGEgbmV3IG9iamVjdCAoR0gtNDM3KVxuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFja2V0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gcGFja2V0Lm9wdGlvbnMuY29tcHJlc3M7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSAnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSA/IGdsb2JhbC5CdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW4gPCBzZWxmLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvL1NvbWV0aW1lcyB0aGUgd2Vic29ja2V0IGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ1dCB0aGUgYnJvd3NlciBkaWRuJ3RcbiAgICAgICAgICAgICAgICAgIC8vaGF2ZSBhIGNoYW5jZSBvZiBpbmZvcm1pbmcgdXMgYWJvdXQgaXQgeWV0LCBpbiB0aGF0IGNhc2Ugc2VuZCB3aWxsXG4gICAgICAgICAgICAgICAgICAvL3Rocm93IGFuIGVycm9yXG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFR5cGVFcnJvciBpcyB0aHJvd24gd2hlbiBwYXNzaW5nIHRoZSBzZWNvbmQgYXJndW1lbnQgb24gU2FmYXJpXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi53cy5zZW5kKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYud3Muc2VuZChkYXRhLCBvcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Zygnd2Vic29ja2V0IGNsb3NlZCBiZWZvcmUgb25jbG9zZSBldmVudCcpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAtLXRvdGFsIHx8IGRvbmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkocGFja2V0c1tpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICAgICAgICAgIHNlbGYuZW1pdCgnZmx1c2gnKTtcblxuICAgICAgICAgICAgICAvLyBmYWtlIGRyYWluXG4gICAgICAgICAgICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdkcmFpbicpO1xuICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2FsbGVkIHVwb24gY2xvc2VcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgV1MucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2xvc2VzIHNvY2tldC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgV1MucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMud3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgV1MucHJvdG90eXBlLnVyaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gICAgICAgICAgICB2YXIgc2NoZW1hID0gdGhpcy5zZWN1cmUgPyAnd3NzJyA6ICd3cyc7XG4gICAgICAgICAgICB2YXIgcG9ydCA9ICcnO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgICAgICAgICAgaWYgKHRoaXMucG9ydCAmJiAoJ3dzcycgPT0gc2NoZW1hICYmIHRoaXMucG9ydCAhPSA0NDMgfHwgJ3dzJyA9PSBzY2hlbWEgJiYgdGhpcy5wb3J0ICE9IDgwKSkge1xuICAgICAgICAgICAgICBwb3J0ID0gJzonICsgdGhpcy5wb3J0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhcHBlbmQgdGltZXN0YW1wIHRvIFVSSVxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgICAgICAgICAgcXVlcnlbdGhpcy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb21tdW5pY2F0ZSBiaW5hcnkgc3VwcG9ydCBjYXBhYmlsaXRpZXNcbiAgICAgICAgICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgICAgICAgICAgICBxdWVyeS5iNjQgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgICAgICAgICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHF1ZXJ5ID0gJz8nICsgcXVlcnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpcHY2ID0gdGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgIT09IC0xO1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVtYSArICc6Ly8nICsgKGlwdjYgPyAnWycgKyB0aGlzLmhvc3RuYW1lICsgJ10nIDogdGhpcy5ob3N0bmFtZSkgKyBwb3J0ICsgdGhpcy5wYXRoICsgcXVlcnk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBXZWJTb2NrZXQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoaXMgdHJhbnNwb3J0IGlzIGF2YWlsYWJsZS5cbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgV1MucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhV2ViU29ja2V0ICYmICEoJ19faW5pdGlhbGl6ZScgaW4gV2ViU29ja2V0ICYmIHRoaXMubmFtZSA9PT0gV1MucHJvdG90eXBlLm5hbWUpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7IFwiLi4vdHJhbnNwb3J0XCI6IDQsIFwiY29tcG9uZW50LWluaGVyaXRcIjogMTYsIFwiZGVidWdcIjogMTcsIFwiZW5naW5lLmlvLXBhcnNlclwiOiAxOSwgXCJwYXJzZXFzXCI6IDI3LCBcIndzXCI6IHVuZGVmaW5lZCwgXCJ5ZWFzdFwiOiAzMCB9XSwgMTA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIC8vIGJyb3dzZXIgc2hpbSBmb3IgeG1saHR0cHJlcXVlc3QgbW9kdWxlXG4gICAgICAgIHZhciBoYXNDT1JTID0gX2RlcmVxXygnaGFzLWNvcnMnKTtcblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgICAgdmFyIHhkb21haW4gPSBvcHRzLnhkb21haW47XG5cbiAgICAgICAgICAvLyBzY2hlbWUgbXVzdCBiZSBzYW1lIHdoZW4gdXNpZ24gWERvbWFpblJlcXVlc3RcbiAgICAgICAgICAvLyBodHRwOi8vYmxvZ3MubXNkbi5jb20vYi9pZWludGVybmFscy9hcmNoaXZlLzIwMTAvMDUvMTMveGRvbWFpbnJlcXVlc3QtcmVzdHJpY3Rpb25zLWxpbWl0YXRpb25zLWFuZC13b3JrYXJvdW5kcy5hc3B4XG4gICAgICAgICAgdmFyIHhzY2hlbWUgPSBvcHRzLnhzY2hlbWU7XG5cbiAgICAgICAgICAvLyBYRG9tYWluUmVxdWVzdCBoYXMgYSBmbG93IG9mIG5vdCBzZW5kaW5nIGNvb2tpZSwgdGhlcmVmb3JlIGl0IHNob3VsZCBiZSBkaXNhYmxlZCBhcyBhIGRlZmF1bHQuXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvZW5naW5lLmlvLWNsaWVudC9wdWxsLzIxN1xuICAgICAgICAgIHZhciBlbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gICAgICAgICAgLy8gWE1MSHR0cFJlcXVlc3QgY2FuIGJlIGRpc2FibGVkIG9uIElFXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICgndW5kZWZpbmVkJyAhPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgJiYgKCF4ZG9tYWluIHx8IGhhc0NPUlMpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgLy8gVXNlIFhEb21haW5SZXF1ZXN0IGZvciBJRTggaWYgZW5hYmxlc1hEUiBpcyB0cnVlXG4gICAgICAgICAgLy8gYmVjYXVzZSBsb2FkaW5nIGJhciBrZWVwcyBmbGFzaGluZyB3aGVuIHVzaW5nIGpzb25wLXBvbGxpbmdcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAheHNjaGVtZSAmJiBlbmFibGVzWERSKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgaWYgKCF4ZG9tYWluKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sIHsgXCJoYXMtY29yc1wiOiAyMiB9XSwgMTE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gYWZ0ZXI7XG5cbiAgICAgICAgZnVuY3Rpb24gYWZ0ZXIoY291bnQsIGNhbGxiYWNrLCBlcnJfY2IpIHtcbiAgICAgICAgICB2YXIgYmFpbCA9IGZhbHNlO1xuICAgICAgICAgIGVycl9jYiA9IGVycl9jYiB8fCBub29wO1xuICAgICAgICAgIHByb3h5LmNvdW50ID0gY291bnQ7XG5cbiAgICAgICAgICByZXR1cm4gY291bnQgPT09IDAgPyBjYWxsYmFjaygpIDogcHJveHk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBwcm94eShlcnIsIHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHByb3h5LmNvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZnRlciBjYWxsZWQgdG9vIG1hbnkgdGltZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC0tcHJveHkuY291bnQ7XG5cbiAgICAgICAgICAgIC8vIGFmdGVyIGZpcnN0IGVycm9yLCByZXN0IGFyZSBwYXNzZWQgdG8gZXJyX2NiXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGJhaWwgPSB0cnVlO1xuICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAvLyBmdXR1cmUgZXJyb3IgY2FsbGJhY2tzIHdpbGwgZ28gdG8gZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgICBjYWxsYmFjayA9IGVycl9jYjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJveHkuY291bnQgPT09IDAgJiYgIWJhaWwpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBub29wKCkge31cbiAgICAgIH0sIHt9XSwgMTI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhYnN0cmFjdGlvbiBmb3Igc2xpY2luZyBhbiBhcnJheWJ1ZmZlciBldmVuIHdoZW5cbiAgICAgICAgICogQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJyYXlidWZmZXIsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgICB2YXIgYnl0ZXMgPSBhcnJheWJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgICAgICAgICBlbmQgPSBlbmQgfHwgYnl0ZXM7XG5cbiAgICAgICAgICBpZiAoYXJyYXlidWZmZXIuc2xpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWJ1ZmZlci5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICBzdGFydCArPSBieXRlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVuZCA8IDApIHtcbiAgICAgICAgICAgIGVuZCArPSBieXRlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVuZCA+IGJ5dGVzKSB7XG4gICAgICAgICAgICBlbmQgPSBieXRlcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhcnQgPj0gYnl0ZXMgfHwgc3RhcnQgPj0gZW5kIHx8IGJ5dGVzID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBhYnYgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGVuZCAtIHN0YXJ0KTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQsIGlpID0gMDsgaSA8IGVuZDsgaSsrLCBpaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRbaWldID0gYWJ2W2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmJ1ZmZlcjtcbiAgICAgICAgfTtcbiAgICAgIH0sIHt9XSwgMTM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlclxuICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMiBOaWtsYXMgdm9uIEhlcnR6ZW5cbiAgICAgICAgICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICAgICAgICAgKi9cbiAgICAgICAgKGZ1bmN0aW9uIChjaGFycykge1xuICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICAgICAgZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAoYXJyYXlidWZmZXIpIHtcbiAgICAgICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIGxlbiA9IGJ5dGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBiYXNlNjQgPSBcIlwiO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDMpIHtcbiAgICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbKGJ5dGVzW2ldICYgMykgPDwgNCB8IGJ5dGVzW2kgKyAxXSA+PiA0XTtcbiAgICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpICsgMV0gJiAxNSkgPDwgMiB8IGJ5dGVzW2kgKyAyXSA+PiA2XTtcbiAgICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxlbiAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMSkgKyBcIj1cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgICAgICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGJhc2U2NDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAoYmFzZTY0KSB7XG4gICAgICAgICAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgICAgICAgICAgICAgbGVuID0gYmFzZTY0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIHAgPSAwLFxuICAgICAgICAgICAgICAgIGVuY29kZWQxLFxuICAgICAgICAgICAgICAgIGVuY29kZWQyLFxuICAgICAgICAgICAgICAgIGVuY29kZWQzLFxuICAgICAgICAgICAgICAgIGVuY29kZWQ0O1xuXG4gICAgICAgICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgICAgICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDJdID09PSBcIj1cIikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgICAgICAgICAgICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgICAgICAgZW5jb2RlZDEgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpXSk7XG4gICAgICAgICAgICAgIGVuY29kZWQyID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSArIDFdKTtcbiAgICAgICAgICAgICAgZW5jb2RlZDMgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpICsgMl0pO1xuICAgICAgICAgICAgICBlbmNvZGVkNCA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2kgKyAzXSk7XG5cbiAgICAgICAgICAgICAgYnl0ZXNbcCsrXSA9IGVuY29kZWQxIDw8IDIgfCBlbmNvZGVkMiA+PiA0O1xuICAgICAgICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQyICYgMTUpIDw8IDQgfCBlbmNvZGVkMyA+PiAyO1xuICAgICAgICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQzICYgMykgPDwgNiB8IGVuY29kZWQ0ICYgNjM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbiAgICAgICAgICB9O1xuICAgICAgICB9KShcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIik7XG4gICAgICB9LCB7fV0sIDE0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENyZWF0ZSBhIGJsb2IgYnVpbGRlciBldmVuIHdoZW4gdmVuZG9yIHByZWZpeGVzIGV4aXN0XG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgQmxvYkJ1aWxkZXIgPSBnbG9iYWwuQmxvYkJ1aWxkZXIgfHwgZ2xvYmFsLldlYktpdEJsb2JCdWlsZGVyIHx8IGdsb2JhbC5NU0Jsb2JCdWlsZGVyIHx8IGdsb2JhbC5Nb3pCbG9iQnVpbGRlcjtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENoZWNrIGlmIEJsb2IgY29uc3RydWN0b3IgaXMgc3VwcG9ydGVkXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgYmxvYlN1cHBvcnRlZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgYSA9IG5ldyBCbG9iKFsnaGknXSk7XG4gICAgICAgICAgICAgIHJldHVybiBhLnNpemUgPT09IDI7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2hlY2sgaWYgQmxvYiBjb25zdHJ1Y3RvciBzdXBwb3J0cyBBcnJheUJ1ZmZlclZpZXdzXG4gICAgICAgICAgICogRmFpbHMgaW4gU2FmYXJpIDYsIHNvIHdlIG5lZWQgdG8gbWFwIHRvIEFycmF5QnVmZmVycyB0aGVyZS5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXcgPSBibG9iU3VwcG9ydGVkICYmIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgYiA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShbMSwgMl0pXSk7XG4gICAgICAgICAgICAgIHJldHVybiBiLnNpemUgPT09IDI7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2hlY2sgaWYgQmxvYkJ1aWxkZXIgaXMgc3VwcG9ydGVkXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgYmxvYkJ1aWxkZXJTdXBwb3J0ZWQgPSBCbG9iQnVpbGRlciAmJiBCbG9iQnVpbGRlci5wcm90b3R5cGUuYXBwZW5kICYmIEJsb2JCdWlsZGVyLnByb3RvdHlwZS5nZXRCbG9iO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgbWFwcyBBcnJheUJ1ZmZlclZpZXdzIHRvIEFycmF5QnVmZmVyc1xuICAgICAgICAgICAqIFVzZWQgYnkgQmxvYkJ1aWxkZXIgY29uc3RydWN0b3IgYW5kIG9sZCBicm93c2VycyB0aGF0IGRpZG4ndFxuICAgICAgICAgICAqIHN1cHBvcnQgaXQgaW4gdGhlIEJsb2IgY29uc3RydWN0b3IuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIGNodW5rID0gYXJ5W2ldO1xuICAgICAgICAgICAgICBpZiAoY2h1bmsuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmID0gY2h1bmsuYnVmZmVyO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHN1YmFycmF5LCBtYWtlIGEgY29weSBzbyB3ZSBvbmx5XG4gICAgICAgICAgICAgICAgLy8gaW5jbHVkZSB0aGUgc3ViYXJyYXkgcmVnaW9uIGZyb20gdGhlIHVuZGVybHlpbmcgYnVmZmVyXG4gICAgICAgICAgICAgICAgaWYgKGNodW5rLmJ5dGVMZW5ndGggIT09IGJ1Zi5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY29weSA9IG5ldyBVaW50OEFycmF5KGNodW5rLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgY29weS5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmLCBjaHVuay5ieXRlT2Zmc2V0LCBjaHVuay5ieXRlTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICBidWYgPSBjb3B5LmJ1ZmZlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhcnlbaV0gPSBidWY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBCbG9iQnVpbGRlckNvbnN0cnVjdG9yKGFyeSwgb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgICAgIHZhciBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xuICAgICAgICAgICAgbWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBiYi5hcHBlbmQoYXJ5W2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMudHlwZSA/IGJiLmdldEJsb2Iob3B0aW9ucy50eXBlKSA6IGJiLmdldEJsb2IoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZnVuY3Rpb24gQmxvYkNvbnN0cnVjdG9yKGFyeSwgb3B0aW9ucykge1xuICAgICAgICAgICAgbWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCbG9iKGFyeSwgb3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChibG9iU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXcgPyBnbG9iYWwuQmxvYiA6IEJsb2JDb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYkJ1aWxkZXJTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEJsb2JCdWlsZGVyQ29uc3RydWN0b3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7fV0sIDE1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICAgICAgICAgKi9cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICAgICAgICAgIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIG1peGluKG9iaikge1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAgICAgKiBAcmV0dXJuIHtFbWl0dGVyfVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgICAgICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSkucHVzaChmbik7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICAgICAgICAgKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICAgICAgICogQHJldHVybiB7RW1pdHRlcn1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gICAgICAgICAgZnVuY3Rpb24gb24oKSB7XG4gICAgICAgICAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvbi5mbiA9IGZuO1xuICAgICAgICAgIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAgICAgICAgICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAgICAgKiBAcmV0dXJuIHtFbWl0dGVyfVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gICAgICAgICAgLy8gYWxsXG4gICAgICAgICAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBzcGVjaWZpYyBldmVudFxuICAgICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgICAgICAgIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAgICAgICAgIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgICAgICAgICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gICAgICAgICAgdmFyIGNiO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcGFyYW0ge01peGVkfSAuLi5cbiAgICAgICAgICogQHJldHVybiB7RW1pdHRlcn1cbiAgICAgICAgICovXG5cbiAgICAgICAgRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgICAgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICAgICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuICEhdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbiAgICAgICAgfTtcbiAgICAgIH0sIHt9XSwgMTY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uIGZuKCkge307XG4gICAgICAgICAgZm4ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgICAgICAgYS5wcm90b3R5cGUgPSBuZXcgZm4oKTtcbiAgICAgICAgICBhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGE7XG4gICAgICAgIH07XG4gICAgICB9LCB7fV0sIDE3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygnLi9kZWJ1ZycpO1xuICAgICAgICBleHBvcnRzLmxvZyA9IGxvZztcbiAgICAgICAgZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbiAgICAgICAgZXhwb3J0cy5zYXZlID0gc2F2ZTtcbiAgICAgICAgZXhwb3J0cy5sb2FkID0gbG9hZDtcbiAgICAgICAgZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG4gICAgICAgIGV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlID8gY2hyb21lLnN0b3JhZ2UubG9jYWwgOiBsb2NhbHN0b3JhZ2UoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29sb3JzLlxuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLmNvbG9ycyA9IFsnbGlnaHRzZWFncmVlbicsICdmb3Jlc3RncmVlbicsICdnb2xkZW5yb2QnLCAnZG9kZ2VyYmx1ZScsICdkYXJrb3JjaGlkJywgJ2NyaW1zb24nXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAgICAgICAgICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gICAgICAgICAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAgICAgICAgIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gICAgICAgICAgcmV0dXJuICdXZWJraXRBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgfHxcbiAgICAgICAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgICAgICAgd2luZG93LmNvbnNvbGUgJiYgKGNvbnNvbGUuZmlyZWJ1ZyB8fCBjb25zb2xlLmV4Y2VwdGlvbiAmJiBjb25zb2xlLnRhYmxlKSB8fFxuICAgICAgICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRBcmdzKCkge1xuICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICAgICAgICAgIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKSArIHRoaXMubmFtZXNwYWNlICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArIGFyZ3NbMF0gKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gICAgICAgICAgaWYgKCF1c2VDb2xvcnMpIHJldHVybiBhcmdzO1xuXG4gICAgICAgICAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICAgICAgICAgIGFyZ3MgPSBbYXJnc1swXSwgYywgJ2NvbG9yOiBpbmhlcml0J10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MsIDEpKTtcblxuICAgICAgICAgIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gICAgICAgICAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAgICAgICAgIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICAgICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgICAgdmFyIGxhc3RDID0gMDtcbiAgICAgICAgICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16JV0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAgICAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICAgICAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG4gICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gICAgICAgICAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvZygpIHtcbiAgICAgICAgICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAgICAgICAgIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gICAgICAgICAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmxvZyAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICAgICAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgICAgIHZhciByO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAgICAgICAgICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAgICAgICAgICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG4gICAgICB9LCB7IFwiLi9kZWJ1Z1wiOiAxOCB9XSwgMTg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAgICAgICAgICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAgICAgICAgICpcbiAgICAgICAgICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBkZWJ1ZztcbiAgICAgICAgZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG4gICAgICAgIGV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG4gICAgICAgIGV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuICAgICAgICBleHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuICAgICAgICBleHBvcnRzLmh1bWFuaXplID0gX2RlcmVxXygnbXMnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgICAgICAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyY2FzZWQgbGV0dGVyLCBpLmUuIFwiblwiLlxuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlvdXNseSBhc3NpZ25lZCBjb2xvci5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIHByZXZDb2xvciA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpb3VzIGxvZyB0aW1lc3RhbXAuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBwcmV2VGltZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2VsZWN0IGEgY29sb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIHNlbGVjdENvbG9yKCkge1xuICAgICAgICAgIHJldHVybiBleHBvcnRzLmNvbG9yc1twcmV2Q29sb3IrKyAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIGRlYnVnKG5hbWVzcGFjZSkge1xuXG4gICAgICAgICAgLy8gZGVmaW5lIHRoZSBgZGlzYWJsZWRgIHZlcnNpb25cbiAgICAgICAgICBmdW5jdGlvbiBkaXNhYmxlZCgpIHt9XG4gICAgICAgICAgZGlzYWJsZWQuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgLy8gZGVmaW5lIHRoZSBgZW5hYmxlZGAgdmVyc2lvblxuICAgICAgICAgIGZ1bmN0aW9uIGVuYWJsZWQoKSB7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gZW5hYmxlZDtcblxuICAgICAgICAgICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICAgICAgICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgICAgICAgICAgc2VsZi5kaWZmID0gbXM7XG4gICAgICAgICAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICAgICAgICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgICAgICAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgYGNvbG9yYCBpZiBub3Qgc2V0XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBzZWxmLnVzZUNvbG9ycykgc2VsZi51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gc2VsZi5jb2xvciAmJiBzZWxmLnVzZUNvbG9ycykgc2VsZi5jb2xvciA9IHNlbGVjdENvbG9yKCk7XG5cbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAgICAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVvXG4gICAgICAgICAgICAgIGFyZ3MgPSBbJyVvJ10uY29uY2F0KGFyZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EteiVdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGZvcm1hdCkge1xuICAgICAgICAgICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAgICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmZvcm1hdEFyZ3MpIHtcbiAgICAgICAgICAgICAgYXJncyA9IGV4cG9ydHMuZm9ybWF0QXJncy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsb2dGbiA9IGVuYWJsZWQubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgICAgICAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZW5hYmxlZC5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBmbiA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpID8gZW5hYmxlZCA6IGRpc2FibGVkO1xuXG4gICAgICAgICAgZm4ubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXG4gICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAgICAgICAgICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgICAgICAgICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgICAgICAgICB2YXIgc3BsaXQgPSAobmFtZXNwYWNlcyB8fCAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgICAgICAgICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgICAgICAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICAgICAgICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICAgICAgZXhwb3J0cy5lbmFibGUoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gICAgICAgICAgdmFyIGksIGxlbjtcbiAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvZXJjZSBgdmFsYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gICAgICAgICAqIEByZXR1cm4ge01peGVkfVxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICB9LCB7IFwibXNcIjogMjUgfV0sIDE5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIga2V5cyA9IF9kZXJlcV8oJy4va2V5cycpO1xuICAgICAgICAgIHZhciBoYXNCaW5hcnkgPSBfZGVyZXFfKCdoYXMtYmluYXJ5Jyk7XG4gICAgICAgICAgdmFyIHNsaWNlQnVmZmVyID0gX2RlcmVxXygnYXJyYXlidWZmZXIuc2xpY2UnKTtcbiAgICAgICAgICB2YXIgYmFzZTY0ZW5jb2RlciA9IF9kZXJlcV8oJ2Jhc2U2NC1hcnJheWJ1ZmZlcicpO1xuICAgICAgICAgIHZhciBhZnRlciA9IF9kZXJlcV8oJ2FmdGVyJyk7XG4gICAgICAgICAgdmFyIHV0ZjggPSBfZGVyZXFfKCd1dGY4Jyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDaGVjayBpZiB3ZSBhcmUgcnVubmluZyBhbiBhbmRyb2lkIGJyb3dzZXIuIFRoYXQgcmVxdWlyZXMgdXMgdG8gdXNlXG4gICAgICAgICAgICogQXJyYXlCdWZmZXIgd2l0aCBwb2xsaW5nIHRyYW5zcG9ydHMuLi5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIGh0dHA6Ly9naGluZGEubmV0L2pwZWctYmxvYi1hamF4LWFuZHJvaWQvXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgaXNBbmRyb2lkID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENoZWNrIGlmIHdlIGFyZSBydW5uaW5nIGluIFBoYW50b21KUy5cbiAgICAgICAgICAgKiBVcGxvYWRpbmcgYSBCbG9iIHdpdGggUGhhbnRvbUpTIGRvZXMgbm90IHdvcmsgY29ycmVjdGx5LCBhcyByZXBvcnRlZCBoZXJlOlxuICAgICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcml5YS9waGFudG9tanMvaXNzdWVzLzExMzk1XG4gICAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBpc1BoYW50b21KUyA9IC9QaGFudG9tSlMvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogV2hlbiB0cnVlLCBhdm9pZHMgdXNpbmcgQmxvYnMgdG8gZW5jb2RlIHBheWxvYWRzLlxuICAgICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB2YXIgZG9udFNlbmRCbG9icyA9IGlzQW5kcm9pZCB8fCBpc1BoYW50b21KUztcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEN1cnJlbnQgcHJvdG9jb2wgdmVyc2lvbi5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMucHJvdG9jb2wgPSAzO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUGFja2V0IHR5cGVzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIHBhY2tldHMgPSBleHBvcnRzLnBhY2tldHMgPSB7XG4gICAgICAgICAgICBvcGVuOiAwLCAvLyBub24td3NcbiAgICAgICAgICAgIGNsb3NlOiAxLCAvLyBub24td3NcbiAgICAgICAgICAgIHBpbmc6IDIsXG4gICAgICAgICAgICBwb25nOiAzLFxuICAgICAgICAgICAgbWVzc2FnZTogNCxcbiAgICAgICAgICAgIHVwZ3JhZGU6IDUsXG4gICAgICAgICAgICBub29wOiA2XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBwYWNrZXRzbGlzdCA9IGtleXMocGFja2V0cyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBQcmVtYWRlIGVycm9yIHBhY2tldC5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBlcnIgPSB7IHR5cGU6ICdlcnJvcicsIGRhdGE6ICdwYXJzZXIgZXJyb3InIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDcmVhdGUgYSBibG9iIGFwaSBldmVuIGZvciBibG9iIGJ1aWxkZXIgd2hlbiB2ZW5kb3IgcHJlZml4ZXMgZXhpc3RcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBCbG9iID0gX2RlcmVxXygnYmxvYicpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRW5jb2RlcyBhIHBhY2tldC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqICAgICA8cGFja2V0IHR5cGUgaWQ+IFsgPGRhdGE+IF1cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiAgICAgNWhlbGxvIHdvcmxkXG4gICAgICAgICAgICogICAgIDNcbiAgICAgICAgICAgKiAgICAgNFxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQmluYXJ5IGlzIGVuY29kZWQgaW4gYW4gaWRlbnRpY2FsIHByaW5jaXBsZVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBleHBvcnRzLmVuY29kZVBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCB1dGY4ZW5jb2RlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgICAgICAgICAgIHN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1dGY4ZW5jb2RlKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrID0gdXRmOGVuY29kZTtcbiAgICAgICAgICAgICAgdXRmOGVuY29kZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0gcGFja2V0LmRhdGEgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHBhY2tldC5kYXRhLmJ1ZmZlciB8fCBwYWNrZXQuZGF0YTtcblxuICAgICAgICAgICAgaWYgKGdsb2JhbC5BcnJheUJ1ZmZlciAmJiBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQmxvYiAmJiBkYXRhIGluc3RhbmNlb2YgZ2xvYmFsLkJsb2IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZUJsb2IocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtaWdodCBiZSBhbiBvYmplY3Qgd2l0aCB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogZGF0YUFzQmFzZTY0U3RyaW5nIH1cbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuYmFzZTY0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbmNvZGVCYXNlNjRPYmplY3QocGFja2V0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNlbmRpbmcgZGF0YSBhcyBhIHV0Zi04IHN0cmluZ1xuICAgICAgICAgICAgdmFyIGVuY29kZWQgPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcblxuICAgICAgICAgICAgLy8gZGF0YSBmcmFnbWVudCBpcyBvcHRpb25hbFxuICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCAhPT0gcGFja2V0LmRhdGEpIHtcbiAgICAgICAgICAgICAgZW5jb2RlZCArPSB1dGY4ZW5jb2RlID8gdXRmOC5lbmNvZGUoU3RyaW5nKHBhY2tldC5kYXRhKSkgOiBTdHJpbmcocGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soJycgKyBlbmNvZGVkKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZnVuY3Rpb24gZW5jb2RlQmFzZTY0T2JqZWN0KHBhY2tldCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIHBhY2tldCBkYXRhIGlzIGFuIG9iamVjdCB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogZGF0YUFzQmFzZTY0U3RyaW5nIH1cbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gJ2InICsgZXhwb3J0cy5wYWNrZXRzW3BhY2tldC50eXBlXSArIHBhY2tldC5kYXRhLmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobWVzc2FnZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRW5jb2RlIHBhY2tldCBoZWxwZXJzIGZvciBiaW5hcnkgdHlwZXNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICAgIHZhciBjb250ZW50QXJyYXkgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICAgICAgICAgIHZhciByZXN1bHRCdWZmZXIgPSBuZXcgVWludDhBcnJheSgxICsgZGF0YS5ieXRlTGVuZ3RoKTtcblxuICAgICAgICAgICAgcmVzdWx0QnVmZmVyWzBdID0gcGFja2V0c1twYWNrZXQudHlwZV07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICByZXN1bHRCdWZmZXJbaSArIDFdID0gY29udGVudEFycmF5W2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0QnVmZmVyLmJ1ZmZlcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgZnIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBwYWNrZXQuZGF0YSA9IGZyLnJlc3VsdDtcbiAgICAgICAgICAgICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgdHJ1ZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBmci5yZWFkQXNBcnJheUJ1ZmZlcihwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZW5jb2RlQmxvYihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkb250U2VuZEJsb2JzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICAgICAgICAgIGxlbmd0aFswXSA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbbGVuZ3RoLmJ1ZmZlciwgcGFja2V0LmRhdGFdKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGJsb2IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEVuY29kZXMgYSBwYWNrZXQgd2l0aCBiaW5hcnkgZGF0YSBpbiBhIGJhc2U2NCBzdHJpbmdcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQsIGhhcyBgdHlwZWAgYW5kIGBkYXRhYFxuICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gYmFzZTY0IGVuY29kZWQgbWVzc2FnZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnYicgKyBleHBvcnRzLnBhY2tldHNbcGFja2V0LnR5cGVdO1xuICAgICAgICAgICAgaWYgKEJsb2IgJiYgcGFja2V0LmRhdGEgaW5zdGFuY2VvZiBnbG9iYWwuQmxvYikge1xuICAgICAgICAgICAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICBmci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGI2NCA9IGZyLnJlc3VsdC5zcGxpdCgnLCcpWzFdO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UgKyBiNjQpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4gZnIucmVhZEFzRGF0YVVSTChwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBiNjRkYXRhO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYjY0ZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkocGFja2V0LmRhdGEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgLy8gaVBob25lIFNhZmFyaSBkb2Vzbid0IGxldCB5b3UgYXBwbHkgd2l0aCB0eXBlZCBhcnJheXNcbiAgICAgICAgICAgICAgdmFyIHR5cGVkID0gbmV3IFVpbnQ4QXJyYXkocGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgICB2YXIgYmFzaWMgPSBuZXcgQXJyYXkodHlwZWQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJhc2ljW2ldID0gdHlwZWRbaV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYjY0ZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYmFzaWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZSArPSBnbG9iYWwuYnRvYShiNjRkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZXNzYWdlKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRGVjb2RlcyBhIHBhY2tldC4gQ2hhbmdlcyBmb3JtYXQgdG8gQmxvYiBpZiByZXF1ZXN0ZWQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggYHR5cGVgIGFuZCBgZGF0YWAgKGlmIGFueSlcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMuZGVjb2RlUGFja2V0ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIHV0ZjhkZWNvZGUpIHtcbiAgICAgICAgICAgIC8vIFN0cmluZyBkYXRhXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLmNoYXJBdCgwKSA9PSAnYicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5kZWNvZGVCYXNlNjRQYWNrZXQoZGF0YS5zdWJzdHIoMSksIGJpbmFyeVR5cGUpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHV0ZjhkZWNvZGUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgZGF0YSA9IHV0ZjguZGVjb2RlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciB0eXBlID0gZGF0YS5jaGFyQXQoMCk7XG5cbiAgICAgICAgICAgICAgaWYgKE51bWJlcih0eXBlKSAhPSB0eXBlIHx8ICFwYWNrZXRzbGlzdFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0sIGRhdGE6IGRhdGEuc3Vic3RyaW5nKDEpIH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0gfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXNBcnJheSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBhc0FycmF5WzBdO1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBzbGljZUJ1ZmZlcihkYXRhLCAxKTtcbiAgICAgICAgICAgIGlmIChCbG9iICYmIGJpbmFyeVR5cGUgPT09ICdibG9iJykge1xuICAgICAgICAgICAgICByZXN0ID0gbmV3IEJsb2IoW3Jlc3RdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdLCBkYXRhOiByZXN0IH07XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIERlY29kZXMgYSBwYWNrZXQgZW5jb2RlZCBpbiBhIGJhc2U2NCBzdHJpbmdcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlNjQgZW5jb2RlZCBtZXNzYWdlXG4gICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGB0eXBlYCBhbmQgYGRhdGFgIChpZiBhbnkpXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBleHBvcnRzLmRlY29kZUJhc2U2NFBhY2tldCA9IGZ1bmN0aW9uIChtc2csIGJpbmFyeVR5cGUpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gcGFja2V0c2xpc3RbbXNnLmNoYXJBdCgwKV07XG4gICAgICAgICAgICBpZiAoIWdsb2JhbC5BcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBkYXRhOiB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogbXNnLnN1YnN0cigxKSB9IH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0gYmFzZTY0ZW5jb2Rlci5kZWNvZGUobXNnLnN1YnN0cigxKSk7XG5cbiAgICAgICAgICAgIGlmIChiaW5hcnlUeXBlID09PSAnYmxvYicgJiYgQmxvYikge1xuICAgICAgICAgICAgICBkYXRhID0gbmV3IEJsb2IoW2RhdGFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSwgZGF0YTogZGF0YSB9O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBFbmNvZGVzIG11bHRpcGxlIG1lc3NhZ2VzIChwYXlsb2FkKS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqICAgICA8bGVuZ3RoPjpkYXRhXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBFeGFtcGxlOlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogICAgIDExOmhlbGxvIHdvcmxkMjpoaVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogSWYgYW55IGNvbnRlbnRzIGFyZSBiaW5hcnksIHRoZXkgd2lsbCBiZSBlbmNvZGVkIGFzIGJhc2U2NCBzdHJpbmdzLiBCYXNlNjRcbiAgICAgICAgICAgKiBlbmNvZGVkIHN0cmluZ3MgYXJlIG1hcmtlZCB3aXRoIGEgYiBiZWZvcmUgdGhlIGxlbmd0aCBzcGVjaWZpZXJcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMuZW5jb2RlUGF5bG9hZCA9IGZ1bmN0aW9uIChwYWNrZXRzLCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNCaW5hcnkgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjYWxsYmFjayA9IHN1cHBvcnRzQmluYXJ5O1xuICAgICAgICAgICAgICBzdXBwb3J0c0JpbmFyeSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpc0JpbmFyeSA9IGhhc0JpbmFyeShwYWNrZXRzKTtcblxuICAgICAgICAgICAgaWYgKHN1cHBvcnRzQmluYXJ5ICYmIGlzQmluYXJ5KSB7XG4gICAgICAgICAgICAgIGlmIChCbG9iICYmICFkb250U2VuZEJsb2JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQmxvYihwYWNrZXRzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNBcnJheUJ1ZmZlcihwYWNrZXRzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcGFja2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCcwOicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRMZW5ndGhIZWFkZXIobWVzc2FnZSkge1xuICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5sZW5ndGggKyAnOicgKyBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCAhaXNCaW5hcnkgPyBmYWxzZSA6IHN1cHBvcnRzQmluYXJ5LCB0cnVlLCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFjayhudWxsLCBzZXRMZW5ndGhIZWFkZXIobWVzc2FnZSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFwKHBhY2tldHMsIGVuY29kZU9uZSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0cy5qb2luKCcnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQXN5bmMgYXJyYXkgbWFwIHVzaW5nIGFmdGVyXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBtYXAoYXJ5LCBlYWNoLCBkb25lKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGFyeS5sZW5ndGgpO1xuICAgICAgICAgICAgdmFyIG5leHQgPSBhZnRlcihhcnkubGVuZ3RoLCBkb25lKTtcblxuICAgICAgICAgICAgdmFyIGVhY2hXaXRoSW5kZXggPSBmdW5jdGlvbiBlYWNoV2l0aEluZGV4KGksIGVsLCBjYikge1xuICAgICAgICAgICAgICBlYWNoKGVsLCBmdW5jdGlvbiAoZXJyb3IsIG1zZykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IG1zZztcbiAgICAgICAgICAgICAgICBjYihlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBlYWNoV2l0aEluZGV4KGksIGFyeVtpXSwgbmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBEZWNvZGVzIGRhdGEgd2hlbiBhIHBheWxvYWQgaXMgbWF5YmUgZXhwZWN0ZWQuIFBvc3NpYmxlIGJpbmFyeSBjb250ZW50cyBhcmVcbiAgICAgICAgICAgKiBkZWNvZGVkIGZyb20gdGhlaXIgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSwgY2FsbGJhY2sgbWV0aG9kXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMuZGVjb2RlUGF5bG9hZCA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmRlY29kZVBheWxvYWRBc0JpbmFyeShkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmluYXJ5VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjYWxsYmFjayA9IGJpbmFyeVR5cGU7XG4gICAgICAgICAgICAgIGJpbmFyeVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFja2V0O1xuICAgICAgICAgICAgaWYgKGRhdGEgPT0gJycpIHtcbiAgICAgICAgICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxlbmd0aCA9ICcnLFxuICAgICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgICAgbXNnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBjaHIgPSBkYXRhLmNoYXJBdChpKTtcblxuICAgICAgICAgICAgICBpZiAoJzonICE9IGNocikge1xuICAgICAgICAgICAgICAgIGxlbmd0aCArPSBjaHI7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCcnID09IGxlbmd0aCB8fCBsZW5ndGggIT0gKG4gPSBOdW1iZXIobGVuZ3RoKSkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1zZyA9IGRhdGEuc3Vic3RyKGkgKyAxLCBuKTtcblxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggIT0gbXNnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1zZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIHBhY2tldCA9IGV4cG9ydHMuZGVjb2RlUGFja2V0KG1zZywgYmluYXJ5VHlwZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChlcnIudHlwZSA9PSBwYWNrZXQudHlwZSAmJiBlcnIuZGF0YSA9PSBwYWNrZXQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZXIgZXJyb3IgaW4gaW5kaXZpZHVhbCBwYWNrZXQgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB2YXIgcmV0ID0gY2FsbGJhY2socGFja2V0LCBpICsgbiwgbCk7XG4gICAgICAgICAgICAgICAgICBpZiAoZmFsc2UgPT09IHJldCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFkdmFuY2UgY3Vyc29yXG4gICAgICAgICAgICAgICAgaSArPSBuO1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9ICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsZW5ndGggIT0gJycpIHtcbiAgICAgICAgICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRW5jb2RlcyBtdWx0aXBsZSBtZXNzYWdlcyAocGF5bG9hZCkgYXMgYmluYXJ5LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogPDEgPSBiaW5hcnksIDAgPSBzdHJpbmc+PG51bWJlciBmcm9tIDAtOT48bnVtYmVyIGZyb20gMC05PlsuLi5dPG51bWJlclxuICAgICAgICAgICAqIDI1NT48ZGF0YT5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgICAgICogMSAzIDI1NSAxIDIgMywgaWYgdGhlIGJpbmFyeSBjb250ZW50cyBhcmUgaW50ZXJwcmV0ZWQgYXMgOCBiaXQgaW50ZWdlcnNcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheUJ1ZmZlcn0gZW5jb2RlZCBwYXlsb2FkXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBleHBvcnRzLmVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKHBhY2tldHMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgQXJyYXlCdWZmZXIoMCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCB0cnVlLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lQ2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbiAoZXJyLCBlbmNvZGVkUGFja2V0cykge1xuICAgICAgICAgICAgICB2YXIgdG90YWxMZW5ndGggPSBlbmNvZGVkUGFja2V0cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcCkge1xuICAgICAgICAgICAgICAgIHZhciBsZW47XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgbGVuID0gcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxlbiA9IHAuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYyArIGxlbi50b1N0cmluZygpLmxlbmd0aCArIGxlbiArIDI7IC8vIHN0cmluZy9iaW5hcnkgaWRlbnRpZmllciArIHNlcGFyYXRvciA9IDJcbiAgICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgICAgICAgdmFyIHJlc3VsdEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuXG4gICAgICAgICAgICAgIHZhciBidWZmZXJJbmRleCA9IDA7XG4gICAgICAgICAgICAgIGVuY29kZWRQYWNrZXRzLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgcCA9PT0gJ3N0cmluZyc7XG4gICAgICAgICAgICAgICAgdmFyIGFiID0gcDtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkocC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdbaV0gPSBwLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhYiA9IHZpZXcuYnVmZmVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgLy8gbm90IHRydWUgYmluYXJ5XG4gICAgICAgICAgICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIHRydWUgYmluYXJ5XG4gICAgICAgICAgICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGxlblN0ciA9IGFiLmJ5dGVMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlblN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSBwYXJzZUludChsZW5TdHJbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDI1NTtcblxuICAgICAgICAgICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSB2aWV3W2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdEFycmF5LmJ1ZmZlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRW5jb2RlIGFzIEJsb2JcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQmxvYiA9IGZ1bmN0aW9uIChwYWNrZXRzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHBhY2tldCwgdHJ1ZSwgdHJ1ZSwgZnVuY3Rpb24gKGVuY29kZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmluYXJ5SWRlbnRpZmllciA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgICAgICAgICAgICAgIGJpbmFyeUlkZW50aWZpZXJbMF0gPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW5jb2RlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdbaV0gPSBlbmNvZGVkLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbmNvZGVkID0gdmlldy5idWZmZXI7XG4gICAgICAgICAgICAgICAgICBiaW5hcnlJZGVudGlmaWVyWzBdID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gZW5jb2RlZCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gZW5jb2RlZC5ieXRlTGVuZ3RoIDogZW5jb2RlZC5zaXplO1xuXG4gICAgICAgICAgICAgICAgdmFyIGxlblN0ciA9IGxlbi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGhBcnkgPSBuZXcgVWludDhBcnJheShsZW5TdHIubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5TdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGxlbmd0aEFyeVtpXSA9IHBhcnNlSW50KGxlblN0cltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlbmd0aEFyeVtsZW5TdHIubGVuZ3RoXSA9IDI1NTtcblxuICAgICAgICAgICAgICAgIGlmIChCbG9iKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtiaW5hcnlJZGVudGlmaWVyLmJ1ZmZlciwgbGVuZ3RoQXJ5LmJ1ZmZlciwgZW5jb2RlZF0pO1xuICAgICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrKG51bGwsIGJsb2IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBCbG9iKHJlc3VsdHMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIERlY29kZXMgZGF0YSB3aGVuIGEgcGF5bG9hZCBpcyBtYXliZSBleHBlY3RlZC4gU3RyaW5ncyBhcmUgZGVjb2RlZCBieVxuICAgICAgICAgICAqIGludGVycHJldGluZyBlYWNoIGJ5dGUgYXMgYSBrZXkgY29kZSBmb3IgZW50cmllcyBtYXJrZWQgdG8gc3RhcnQgd2l0aCAwLiBTZWVcbiAgICAgICAgICAgKiBkZXNjcmlwdGlvbiBvZiBlbmNvZGVQYXlsb2FkQXNCaW5hcnlcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGRhdGEsIGNhbGxiYWNrIG1ldGhvZFxuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBleHBvcnRzLmRlY29kZVBheWxvYWRBc0JpbmFyeSA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBiaW5hcnlUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrID0gYmluYXJ5VHlwZTtcbiAgICAgICAgICAgICAgYmluYXJ5VHlwZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBidWZmZXJUYWlsID0gZGF0YTtcbiAgICAgICAgICAgIHZhciBidWZmZXJzID0gW107XG5cbiAgICAgICAgICAgIHZhciBudW1iZXJUb29Mb25nID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoYnVmZmVyVGFpbC5ieXRlTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB2YXIgdGFpbEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyVGFpbCk7XG4gICAgICAgICAgICAgIHZhciBpc1N0cmluZyA9IHRhaWxBcnJheVswXSA9PT0gMDtcbiAgICAgICAgICAgICAgdmFyIG1zZ0xlbmd0aCA9ICcnO1xuXG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhaWxBcnJheVtpXSA9PSAyNTUpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1zZ0xlbmd0aC5sZW5ndGggPiAzMTApIHtcbiAgICAgICAgICAgICAgICAgIG51bWJlclRvb0xvbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbXNnTGVuZ3RoICs9IHRhaWxBcnJheVtpXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChudW1iZXJUb29Mb25nKSByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcblxuICAgICAgICAgICAgICBidWZmZXJUYWlsID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMiArIG1zZ0xlbmd0aC5sZW5ndGgpO1xuICAgICAgICAgICAgICBtc2dMZW5ndGggPSBwYXJzZUludChtc2dMZW5ndGgpO1xuXG4gICAgICAgICAgICAgIHZhciBtc2cgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCAwLCBtc2dMZW5ndGgpO1xuICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgbXNnID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShtc2cpKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpUGhvbmUgU2FmYXJpIGRvZXNuJ3QgbGV0IHlvdSBhcHBseSB0byB0eXBlZCBhcnJheXNcbiAgICAgICAgICAgICAgICAgIHZhciB0eXBlZCA9IG5ldyBVaW50OEFycmF5KG1zZyk7XG4gICAgICAgICAgICAgICAgICBtc2cgPSAnJztcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbXNnICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodHlwZWRbaV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJ1ZmZlcnMucHVzaChtc2cpO1xuICAgICAgICAgICAgICBidWZmZXJUYWlsID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgbXNnTGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRvdGFsID0gYnVmZmVycy5sZW5ndGg7XG4gICAgICAgICAgICBidWZmZXJzLmZvckVhY2goZnVuY3Rpb24gKGJ1ZmZlciwgaSkge1xuICAgICAgICAgICAgICBjYWxsYmFjayhleHBvcnRzLmRlY29kZVBhY2tldChidWZmZXIsIGJpbmFyeVR5cGUsIHRydWUpLCBpLCB0b3RhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwgeyBcIi4va2V5c1wiOiAyMCwgXCJhZnRlclwiOiAxMSwgXCJhcnJheWJ1ZmZlci5zbGljZVwiOiAxMiwgXCJiYXNlNjQtYXJyYXlidWZmZXJcIjogMTMsIFwiYmxvYlwiOiAxNCwgXCJoYXMtYmluYXJ5XCI6IDIxLCBcInV0ZjhcIjogMjkgfV0sIDIwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBrZXlzIGZvciBhbiBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBrZXlzXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMob2JqKSB7XG4gICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgIHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gICAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbChvYmosIGkpKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICB9O1xuICAgICAgfSwge31dLCAyMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBpc0FycmF5ID0gX2RlcmVxXygnaXNhcnJheScpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGhhc0JpbmFyeTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENoZWNrcyBmb3IgYmluYXJ5IGRhdGEuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBSaWdodCBub3cgb25seSBCdWZmZXIgYW5kIEFycmF5QnVmZmVyIGFyZSBzdXBwb3J0ZWQuLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGFueXRoaW5nXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIGhhc0JpbmFyeShkYXRhKSB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9oYXNCaW5hcnkob2JqKSB7XG4gICAgICAgICAgICAgIGlmICghb2JqKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKGdsb2JhbC5CdWZmZXIgJiYgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlcihvYmopIHx8IGdsb2JhbC5BcnJheUJ1ZmZlciAmJiBvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBnbG9iYWwuQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iIHx8IGdsb2JhbC5GaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKF9oYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqICYmICdvYmplY3QnID09IHR5cGVvZiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLnRvSlNPTikge1xuICAgICAgICAgICAgICAgICAgb2JqID0gb2JqLnRvSlNPTigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmIF9oYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9oYXNCaW5hcnkoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwgeyBcImlzYXJyYXlcIjogMjQgfV0sIDIyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogTG9naWMgYm9ycm93ZWQgZnJvbSBNb2Rlcm5penI6XG4gICAgICAgICAqXG4gICAgICAgICAqICAgLSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY29ycy5qc1xuICAgICAgICAgKi9cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJiAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gaWYgWE1MSHR0cCBzdXBwb3J0IGlzIGRpc2FibGVkIGluIElFIHRoZW4gaXQgd2lsbCB0aHJvd1xuICAgICAgICAgIC8vIHdoZW4gdHJ5aW5nIHRvIGNyZWF0ZVxuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sIHt9XSwgMjM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgdmFyIGluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyciwgb2JqKSB7XG4gICAgICAgICAgaWYgKGluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH07XG4gICAgICB9LCB7fV0sIDI0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgICB9O1xuICAgICAgfSwge31dLCAyNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlcnMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBzID0gMTAwMDtcbiAgICAgICAgdmFyIG0gPSBzICogNjA7XG4gICAgICAgIHZhciBoID0gbSAqIDYwO1xuICAgICAgICB2YXIgZCA9IGggKiAyNDtcbiAgICAgICAgdmFyIHkgPSBkICogMzY1LjI1O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBPcHRpb25zOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsLCBvcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiB2YWwpIHJldHVybiBwYXJzZSh2YWwpO1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBsb25nKHZhbCkgOiBzaG9ydCh2YWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gICAgICAgICAgc3RyID0gJycgKyBzdHI7XG4gICAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAxMDAwMCkgcmV0dXJuO1xuICAgICAgICAgIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoc3RyKTtcbiAgICAgICAgICBpZiAoIW1hdGNoKSByZXR1cm47XG4gICAgICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgICAgICAgICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAneWVhcnMnOlxuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICBjYXNlICd5cnMnOlxuICAgICAgICAgICAgY2FzZSAneXInOlxuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgIHJldHVybiBuICogeTtcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICByZXR1cm4gbiAqIGQ7XG4gICAgICAgICAgICBjYXNlICdob3Vycyc6XG4gICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgIGNhc2UgJ2hycyc6XG4gICAgICAgICAgICBjYXNlICdocic6XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgcmV0dXJuIG4gKiBoO1xuICAgICAgICAgICAgY2FzZSAnbWludXRlcyc6XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgY2FzZSAnbWlucyc6XG4gICAgICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgIHJldHVybiBuICogbTtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIGNhc2UgJ3NlY3MnOlxuICAgICAgICAgICAgY2FzZSAnc2VjJzpcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICByZXR1cm4gbiAqIHM7XG4gICAgICAgICAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgICAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnbXNlY3MnOlxuICAgICAgICAgICAgY2FzZSAnbXNlYyc6XG4gICAgICAgICAgICBjYXNlICdtcyc6XG4gICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBzaG9ydChtcykge1xuICAgICAgICAgIGlmIChtcyA+PSBkKSByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICAgICAgICAgIGlmIChtcyA+PSBoKSByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICAgICAgICAgIGlmIChtcyA+PSBtKSByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICAgICAgICAgIGlmIChtcyA+PSBzKSByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICAgICAgICAgIHJldHVybiBtcyArICdtcyc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBsb25nKG1zKSB7XG4gICAgICAgICAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8IHBsdXJhbChtcywgaCwgJ2hvdXInKSB8fCBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fCBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fCBtcyArICcgbXMnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgICAgICAgICBpZiAobXMgPCBuKSByZXR1cm47XG4gICAgICAgICAgaWYgKG1zIDwgbiAqIDEuNSkgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbiAgICAgICAgfVxuICAgICAgfSwge31dLCAyNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBKU09OIHBhcnNlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHNlZSBCYXNlZCBvbiBqUXVlcnkjcGFyc2VKU09OIChNSVQpIGFuZCBKU09OMlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIHJ2YWxpZGNoYXJzID0gL15bXFxdLDp7fVxcc10qJC87XG4gICAgICAgICAgdmFyIHJ2YWxpZGVzY2FwZSA9IC9cXFxcKD86W1wiXFxcXFxcL2JmbnJ0XXx1WzAtOWEtZkEtRl17NH0pL2c7XG4gICAgICAgICAgdmFyIHJ2YWxpZHRva2VucyA9IC9cIlteXCJcXFxcXFxuXFxyXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZztcbiAgICAgICAgICB2YXIgcnZhbGlkYnJhY2VzID0gLyg/Ol58OnwsKSg/OlxccypcXFspKy9nO1xuICAgICAgICAgIHZhciBydHJpbUxlZnQgPSAvXlxccysvO1xuICAgICAgICAgIHZhciBydHJpbVJpZ2h0ID0gL1xccyskLztcblxuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2Vqc29uKGRhdGEpIHtcbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSB8fCAhZGF0YSkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShydHJpbUxlZnQsICcnKS5yZXBsYWNlKHJ0cmltUmlnaHQsICcnKTtcblxuICAgICAgICAgICAgLy8gQXR0ZW1wdCB0byBwYXJzZSB1c2luZyB0aGUgbmF0aXZlIEpTT04gcGFyc2VyIGZpcnN0XG4gICAgICAgICAgICBpZiAoZ2xvYmFsLkpTT04gJiYgSlNPTi5wYXJzZSkge1xuICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJ2YWxpZGNoYXJzLnRlc3QoZGF0YS5yZXBsYWNlKHJ2YWxpZGVzY2FwZSwgJ0AnKS5yZXBsYWNlKHJ2YWxpZHRva2VucywgJ10nKS5yZXBsYWNlKHJ2YWxpZGJyYWNlcywgJycpKSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdyZXR1cm4gJyArIGRhdGEpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkuY2FsbCh0aGlzLCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgICAgIH0sIHt9XSwgMjc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXG4gICAgICAgICAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9XG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCkgc3RyICs9ICcmJztcbiAgICAgICAgICAgICAgc3RyICs9IGVuY29kZVVSSUNvbXBvbmVudChpKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyBhIHNpbXBsZSBxdWVyeXN0cmluZyBpbnRvIGFuIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gcXNcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKHFzKSB7XG4gICAgICAgICAgdmFyIHFyeSA9IHt9O1xuICAgICAgICAgIHZhciBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYWlycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIHFyeVtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcXJ5O1xuICAgICAgICB9O1xuICAgICAgfSwge31dLCAyODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyBhbiBVUklcbiAgICAgICAgICpcbiAgICAgICAgICogQGF1dGhvciBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT4gKE1JVCBsaWNlbnNlKVxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIHJlID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoaHR0cHxodHRwc3x3c3x3c3MpOlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oKD86W2EtZjAtOV17MCw0fTopezIsN31bYS1mMC05XXswLDR9fFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG5cbiAgICAgICAgdmFyIHBhcnRzID0gWydzb3VyY2UnLCAncHJvdG9jb2wnLCAnYXV0aG9yaXR5JywgJ3VzZXJJbmZvJywgJ3VzZXInLCAncGFzc3dvcmQnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnYW5jaG9yJ107XG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZXVyaShzdHIpIHtcbiAgICAgICAgICB2YXIgc3JjID0gc3RyLFxuICAgICAgICAgICAgICBiID0gc3RyLmluZGV4T2YoJ1snKSxcbiAgICAgICAgICAgICAgZSA9IHN0ci5pbmRleE9mKCddJyk7XG5cbiAgICAgICAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGIpICsgc3RyLnN1YnN0cmluZyhiLCBlKS5yZXBsYWNlKC86L2csICc7JykgKyBzdHIuc3Vic3RyaW5nKGUsIHN0ci5sZW5ndGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtID0gcmUuZXhlYyhzdHIgfHwgJycpLFxuICAgICAgICAgICAgICB1cmkgPSB7fSxcbiAgICAgICAgICAgICAgaSA9IDE0O1xuXG4gICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICAgICAgdXJpLnNvdXJjZSA9IHNyYztcbiAgICAgICAgICAgIHVyaS5ob3N0ID0gdXJpLmhvc3Quc3Vic3RyaW5nKDEsIHVyaS5ob3N0Lmxlbmd0aCAtIDEpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgICAgICB1cmkuaXB2NnVyaSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHVyaTtcbiAgICAgICAgfTtcbiAgICAgIH0sIHt9XSwgMjk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgICAgLyohIGh0dHBzOi8vbXRocy5iZS91dGY4anMgdjIuMC4wIGJ5IEBtYXRoaWFzICovXG4gICAgICAgICAgOyhmdW5jdGlvbiAocm9vdCkge1xuXG4gICAgICAgICAgICAvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgYGV4cG9ydHNgXG4gICAgICAgICAgICB2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzO1xuXG4gICAgICAgICAgICAvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYFxuICAgICAgICAgICAgdmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cyAmJiBtb2R1bGU7XG5cbiAgICAgICAgICAgIC8vIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgLCBmcm9tIE5vZGUuanMgb3IgQnJvd3NlcmlmaWVkIGNvZGUsXG4gICAgICAgICAgICAvLyBhbmQgdXNlIGl0IGFzIGByb290YFxuICAgICAgICAgICAgdmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcbiAgICAgICAgICAgIGlmIChmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCkge1xuICAgICAgICAgICAgICByb290ID0gZnJlZUdsb2JhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgICAgICAgIHZhciBzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuXG4gICAgICAgICAgICAvLyBUYWtlbiBmcm9tIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZVxuICAgICAgICAgICAgZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcbiAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgIHZhciBleHRyYTtcbiAgICAgICAgICAgICAgd2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgLy8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICBleHRyYSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG4gICAgICAgICAgICAgICAgICBpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG93IHN1cnJvZ2F0ZVxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlIG5leHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRha2VuIGZyb20gaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlXG4gICAgICAgICAgICBmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG4gICAgICAgICAgICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICAgICAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAweEZGRkYpIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlIC09IDB4MTAwMDA7XG4gICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gMHhEQzAwIHwgdmFsdWUgJiAweDNGRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tTY2FsYXJWYWx1ZShjb2RlUG9pbnQpIHtcbiAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA+PSAweEQ4MDAgJiYgY29kZVBvaW50IDw9IDB4REZGRikge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdMb25lIHN1cnJvZ2F0ZSBVKycgKyBjb2RlUG9pbnQudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgKyAnIGlzIG5vdCBhIHNjYWxhciB2YWx1ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIHNoaWZ0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdHJpbmdGcm9tQ2hhckNvZGUoY29kZVBvaW50ID4+IHNoaWZ0ICYgMHgzRiB8IDB4ODApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50KSB7XG4gICAgICAgICAgICAgIGlmICgoY29kZVBvaW50ICYgMHhGRkZGRkY4MCkgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIDEtYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdGcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgc3ltYm9sID0gJyc7XG4gICAgICAgICAgICAgIGlmICgoY29kZVBvaW50ICYgMHhGRkZGRjgwMCkgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIDItYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQgPj4gNiAmIDB4MUYgfCAweEMwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgoY29kZVBvaW50ICYgMHhGRkZGMDAwMCkgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIDMtYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgIGNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50KTtcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoY29kZVBvaW50ID4+IDEyICYgMHgwRiB8IDB4RTApO1xuICAgICAgICAgICAgICAgIHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNvZGVQb2ludCAmIDB4RkZFMDAwMDApID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyA0LWJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoY29kZVBvaW50ID4+IDE4ICYgMHgwNyB8IDB4RjApO1xuICAgICAgICAgICAgICAgIHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgMTIpO1xuICAgICAgICAgICAgICAgIHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3ltYm9sICs9IHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQgJiAweDNGIHwgMHg4MCk7XG4gICAgICAgICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHV0ZjhlbmNvZGUoc3RyaW5nKSB7XG4gICAgICAgICAgICAgIHZhciBjb2RlUG9pbnRzID0gdWNzMmRlY29kZShzdHJpbmcpO1xuICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gY29kZVBvaW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgICB2YXIgY29kZVBvaW50O1xuICAgICAgICAgICAgICB2YXIgYnl0ZVN0cmluZyA9ICcnO1xuICAgICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IGNvZGVQb2ludHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGJ5dGVTdHJpbmcgKz0gZW5jb2RlQ29kZVBvaW50KGNvZGVQb2ludCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGJ5dGVTdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZWFkQ29udGludWF0aW9uQnl0ZSgpIHtcbiAgICAgICAgICAgICAgaWYgKGJ5dGVJbmRleCA+PSBieXRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgY29udGludWF0aW9uQnl0ZSA9IGJ5dGVBcnJheVtieXRlSW5kZXhdICYgMHhGRjtcbiAgICAgICAgICAgICAgYnl0ZUluZGV4Kys7XG5cbiAgICAgICAgICAgICAgaWYgKChjb250aW51YXRpb25CeXRlICYgMHhDMCkgPT0gMHg4MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250aW51YXRpb25CeXRlICYgMHgzRjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIElmIHdlIGVuZCB1cCBoZXJlLCBpdOKAmXMgbm90IGEgY29udGludWF0aW9uIGJ5dGVcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVjb2RlU3ltYm9sKCkge1xuICAgICAgICAgICAgICB2YXIgYnl0ZTE7XG4gICAgICAgICAgICAgIHZhciBieXRlMjtcbiAgICAgICAgICAgICAgdmFyIGJ5dGUzO1xuICAgICAgICAgICAgICB2YXIgYnl0ZTQ7XG4gICAgICAgICAgICAgIHZhciBjb2RlUG9pbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKGJ5dGVJbmRleCA+IGJ5dGVDb3VudCkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGJ5dGUgaW5kZXgnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChieXRlSW5kZXggPT0gYnl0ZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gUmVhZCBmaXJzdCBieXRlXG4gICAgICAgICAgICAgIGJ5dGUxID0gYnl0ZUFycmF5W2J5dGVJbmRleF0gJiAweEZGO1xuICAgICAgICAgICAgICBieXRlSW5kZXgrKztcblxuICAgICAgICAgICAgICAvLyAxLWJ5dGUgc2VxdWVuY2UgKG5vIGNvbnRpbnVhdGlvbiBieXRlcylcbiAgICAgICAgICAgICAgaWYgKChieXRlMSAmIDB4ODApID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnl0ZTE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyAyLWJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICAgICAgaWYgKChieXRlMSAmIDB4RTApID09IDB4QzApIHtcbiAgICAgICAgICAgICAgICB2YXIgYnl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IChieXRlMSAmIDB4MUYpIDw8IDYgfCBieXRlMjtcbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50ID49IDB4ODApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gMy1ieXRlIHNlcXVlbmNlIChtYXkgaW5jbHVkZSB1bnBhaXJlZCBzdXJyb2dhdGVzKVxuICAgICAgICAgICAgICBpZiAoKGJ5dGUxICYgMHhGMCkgPT0gMHhFMCkge1xuICAgICAgICAgICAgICAgIGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcbiAgICAgICAgICAgICAgICBieXRlMyA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gKGJ5dGUxICYgMHgwRikgPDwgMTIgfCBieXRlMiA8PCA2IHwgYnl0ZTM7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA+PSAweDA4MDApIHtcbiAgICAgICAgICAgICAgICAgIGNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50KTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gNC1ieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgIGlmICgoYnl0ZTEgJiAweEY4KSA9PSAweEYwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuICAgICAgICAgICAgICAgIGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcbiAgICAgICAgICAgICAgICBieXRlNCA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gKGJ5dGUxICYgMHgwRikgPDwgMHgxMiB8IGJ5dGUyIDw8IDB4MEMgfCBieXRlMyA8PCAweDA2IHwgYnl0ZTQ7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA+PSAweDAxMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgxMEZGRkYpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgVVRGLTggZGV0ZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGJ5dGVBcnJheTtcbiAgICAgICAgICAgIHZhciBieXRlQ291bnQ7XG4gICAgICAgICAgICB2YXIgYnl0ZUluZGV4O1xuICAgICAgICAgICAgZnVuY3Rpb24gdXRmOGRlY29kZShieXRlU3RyaW5nKSB7XG4gICAgICAgICAgICAgIGJ5dGVBcnJheSA9IHVjczJkZWNvZGUoYnl0ZVN0cmluZyk7XG4gICAgICAgICAgICAgIGJ5dGVDb3VudCA9IGJ5dGVBcnJheS5sZW5ndGg7XG4gICAgICAgICAgICAgIGJ5dGVJbmRleCA9IDA7XG4gICAgICAgICAgICAgIHZhciBjb2RlUG9pbnRzID0gW107XG4gICAgICAgICAgICAgIHZhciB0bXA7XG4gICAgICAgICAgICAgIHdoaWxlICgodG1wID0gZGVjb2RlU3ltYm9sKCkpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludHMucHVzaCh0bXApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB1Y3MyZW5jb2RlKGNvZGVQb2ludHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgICAgICAgdmFyIHV0ZjggPSB7XG4gICAgICAgICAgICAgICd2ZXJzaW9uJzogJzIuMC4wJyxcbiAgICAgICAgICAgICAgJ2VuY29kZSc6IHV0ZjhlbmNvZGUsXG4gICAgICAgICAgICAgICdkZWNvZGUnOiB1dGY4ZGVjb2RlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcbiAgICAgICAgICAgIC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGY4O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgIWZyZWVFeHBvcnRzLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgIGlmIChmcmVlTW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gTm9kZS5qcyBvciBSaW5nb0pTIHYwLjguMCtcbiAgICAgICAgICAgICAgICBmcmVlTW9kdWxlLmV4cG9ydHMgPSB1dGY4O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdC5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdXRmOCkge1xuICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbCh1dGY4LCBrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gdXRmOFtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcbiAgICAgICAgICAgICAgcm9vdC51dGY4ID0gdXRmODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSh0aGlzKTtcbiAgICAgICAgfSkuY2FsbCh0aGlzLCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgICAgIH0sIHt9XSwgMzA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXotXycuc3BsaXQoJycpLFxuICAgICAgICAgICAgbGVuZ3RoID0gNjQsXG4gICAgICAgICAgICBtYXAgPSB7fSxcbiAgICAgICAgICAgIHNlZWQgPSAwLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBwcmV2O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICAgICAgICAgIHZhciBlbmNvZGVkID0gJyc7XG5cbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgICAgICAgICBudW0gPSBNYXRoLmZsb29yKG51bSAvIGxlbmd0aCk7XG4gICAgICAgICAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgICAgICAgICByZXR1cm4gZW5jb2RlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICAgICAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICAgICAgICAgIHZhciBkZWNvZGVkID0gMDtcblxuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkZWNvZGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IEEgdW5pcXVlIGlkLlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24geWVhc3QoKSB7XG4gICAgICAgICAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgICAgICAgICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gICAgICAgICAgcmV0dXJuIG5vdyArICcuJyArIGVuY29kZShzZWVkKyspO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbiAgICAgICAgLy9cbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykgbWFwW2FscGhhYmV0W2ldXSA9IGk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuICAgICAgICAvL1xuICAgICAgICB5ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG4gICAgICAgIHllYXN0LmRlY29kZSA9IGRlY29kZTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSB5ZWFzdDtcbiAgICAgIH0sIHt9XSwgMzE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciB1cmwgPSBfZGVyZXFfKCcuL3VybCcpO1xuICAgICAgICB2YXIgcGFyc2VyID0gX2RlcmVxXygnc29ja2V0LmlvLXBhcnNlcicpO1xuICAgICAgICB2YXIgTWFuYWdlciA9IF9kZXJlcV8oJy4vbWFuYWdlcicpO1xuICAgICAgICB2YXIgZGVidWcgPSBfZGVyZXFfKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBleHBvcnRzLlxuICAgICAgICAgKi9cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBsb29rdXA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hbmFnZXJzIGNhY2hlLlxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgY2FjaGUgPSBleHBvcnRzLm1hbmFnZXJzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvb2tzIHVwIGFuIGV4aXN0aW5nIGBNYW5hZ2VyYCBmb3IgbXVsdGlwbGV4aW5nLlxuICAgICAgICAgKiBJZiB0aGUgdXNlciBzdW1tb25zOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgIGBpbygnaHR0cDovL2xvY2FsaG9zdC9hJyk7YFxuICAgICAgICAgKiAgIGBpbygnaHR0cDovL2xvY2FsaG9zdC9iJyk7YFxuICAgICAgICAgKlxuICAgICAgICAgKiBXZSByZXVzZSB0aGUgZXhpc3RpbmcgaW5zdGFuY2UgYmFzZWQgb24gc2FtZSBzY2hlbWUvcG9ydC9ob3N0LFxuICAgICAgICAgKiBhbmQgd2UgaW5pdGlhbGl6ZSBzb2NrZXRzIGZvciBlYWNoIG5hbWVzcGFjZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gbG9va3VwKHVyaSwgb3B0cykge1xuICAgICAgICAgIGlmICh0eXBlb2YgdXJpID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgICAgICAgdmFyIHBhcnNlZCA9IHVybCh1cmkpO1xuICAgICAgICAgIHZhciBzb3VyY2UgPSBwYXJzZWQuc291cmNlO1xuICAgICAgICAgIHZhciBpZCA9IHBhcnNlZC5pZDtcbiAgICAgICAgICB2YXIgcGF0aCA9IHBhcnNlZC5wYXRoO1xuICAgICAgICAgIHZhciBzYW1lTmFtZXNwYWNlID0gY2FjaGVbaWRdICYmIHBhdGggaW4gY2FjaGVbaWRdLm5zcHM7XG4gICAgICAgICAgdmFyIG5ld0Nvbm5lY3Rpb24gPSBvcHRzLmZvcmNlTmV3IHx8IG9wdHNbJ2ZvcmNlIG5ldyBjb25uZWN0aW9uJ10gfHwgZmFsc2UgPT09IG9wdHMubXVsdGlwbGV4IHx8IHNhbWVOYW1lc3BhY2U7XG5cbiAgICAgICAgICB2YXIgaW87XG5cbiAgICAgICAgICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgICAgICAgICAgZGVidWcoJ2lnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXMnLCBzb3VyY2UpO1xuICAgICAgICAgICAgaW8gPSBNYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICAgICAgICAgIGRlYnVnKCduZXcgaW8gaW5zdGFuY2UgZm9yICVzJywgc291cmNlKTtcbiAgICAgICAgICAgICAgY2FjaGVbaWRdID0gTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW8gPSBjYWNoZVtpZF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGlvLnNvY2tldChwYXJzZWQucGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdG9jb2wgdmVyc2lvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYGNvbm5lY3RgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5NYW5hZ2VyID0gX2RlcmVxXygnLi9tYW5hZ2VyJyk7XG4gICAgICAgIGV4cG9ydHMuU29ja2V0ID0gX2RlcmVxXygnLi9zb2NrZXQnKTtcbiAgICAgIH0sIHsgXCIuL21hbmFnZXJcIjogMzIsIFwiLi9zb2NrZXRcIjogMzQsIFwiLi91cmxcIjogMzUsIFwiZGVidWdcIjogMzksIFwic29ja2V0LmlvLXBhcnNlclwiOiA0NyB9XSwgMzI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBlaW8gPSBfZGVyZXFfKCdlbmdpbmUuaW8tY2xpZW50Jyk7XG4gICAgICAgIHZhciBTb2NrZXQgPSBfZGVyZXFfKCcuL3NvY2tldCcpO1xuICAgICAgICB2YXIgRW1pdHRlciA9IF9kZXJlcV8oJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG4gICAgICAgIHZhciBwYXJzZXIgPSBfZGVyZXFfKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG4gICAgICAgIHZhciBvbiA9IF9kZXJlcV8oJy4vb24nKTtcbiAgICAgICAgdmFyIGJpbmQgPSBfZGVyZXFfKCdjb21wb25lbnQtYmluZCcpO1xuICAgICAgICB2YXIgZGVidWcgPSBfZGVyZXFfKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50Om1hbmFnZXInKTtcbiAgICAgICAgdmFyIGluZGV4T2YgPSBfZGVyZXFfKCdpbmRleG9mJyk7XG4gICAgICAgIHZhciBCYWNrb2ZmID0gX2RlcmVxXygnYmFja28yJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElFNisgaGFzT3duUHJvcGVydHlcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBleHBvcnRzXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gTWFuYWdlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYE1hbmFnZXJgIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW5naW5lIGluc3RhbmNlIG9yIGVuZ2luZSB1cmkvb3B0c1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBNYW5hZ2VyKHVyaSwgb3B0cykge1xuICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYW5hZ2VyKSkgcmV0dXJuIG5ldyBNYW5hZ2VyKHVyaSwgb3B0cyk7XG4gICAgICAgICAgaWYgKHVyaSAmJiAnb2JqZWN0JyA9PSB0eXBlb2YgdXJpKSB7XG4gICAgICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICAgIG9wdHMucGF0aCA9IG9wdHMucGF0aCB8fCAnL3NvY2tldC5pbyc7XG4gICAgICAgICAgdGhpcy5uc3BzID0ge307XG4gICAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICAgICAgICB0aGlzLnJlY29ubmVjdGlvbihvcHRzLnJlY29ubmVjdGlvbiAhPT0gZmFsc2UpO1xuICAgICAgICAgIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gICAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheShvcHRzLnJlY29ubmVjdGlvbkRlbGF5IHx8IDEwMDApO1xuICAgICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgob3B0cy5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1MDAwKTtcbiAgICAgICAgICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gICAgICAgICAgdGhpcy5iYWNrb2ZmID0gbmV3IEJhY2tvZmYoe1xuICAgICAgICAgICAgbWluOiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KCksXG4gICAgICAgICAgICBtYXg6IHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgoKSxcbiAgICAgICAgICAgIGppdHRlcjogdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnRpbWVvdXQobnVsbCA9PSBvcHRzLnRpbWVvdXQgPyAyMDAwMCA6IG9wdHMudGltZW91dCk7XG4gICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gICAgICAgICAgdGhpcy51cmkgPSB1cmk7XG4gICAgICAgICAgdGhpcy5jb25uZWN0aW5nID0gW107XG4gICAgICAgICAgdGhpcy5sYXN0UGluZyA9IG51bGw7XG4gICAgICAgICAgdGhpcy5lbmNvZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucGFja2V0QnVmZmVyID0gW107XG4gICAgICAgICAgdGhpcy5lbmNvZGVyID0gbmV3IHBhcnNlci5FbmNvZGVyKCk7XG4gICAgICAgICAgdGhpcy5kZWNvZGVyID0gbmV3IHBhcnNlci5EZWNvZGVyKCk7XG4gICAgICAgICAgdGhpcy5hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmF1dG9Db25uZWN0KSB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wYWdhdGUgZ2l2ZW4gZXZlbnQgdG8gc29ja2V0cyBhbmQgZW1pdCBvbiBgdGhpc2BcbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLmVtaXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgZm9yICh2YXIgbnNwIGluIHRoaXMubnNwcykge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKHRoaXMubnNwcywgbnNwKSkge1xuICAgICAgICAgICAgICB0aGlzLm5zcHNbbnNwXS5lbWl0LmFwcGx5KHRoaXMubnNwc1tuc3BdLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIGBzb2NrZXQuaWRgIG9mIGFsbCBzb2NrZXRzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTb2NrZXRJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgbnNwIGluIHRoaXMubnNwcykge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKHRoaXMubnNwcywgbnNwKSkge1xuICAgICAgICAgICAgICB0aGlzLm5zcHNbbnNwXS5pZCA9IHRoaXMuZW5naW5lLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWl4IGluIGBFbWl0dGVyYC5cbiAgICAgICAgICovXG5cbiAgICAgICAgRW1pdHRlcihNYW5hZ2VyLnByb3RvdHlwZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGByZWNvbm5lY3Rpb25gIGNvbmZpZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSB0cnVlL2ZhbHNlIGlmIGl0IHNob3VsZCBhdXRvbWF0aWNhbGx5IHJlY29ubmVjdFxuICAgICAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbiA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uO1xuICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiA9ICEhdjtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgcmVjb25uZWN0aW9uIGF0dGVtcHRzIGNvbmZpZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCByZWNvbm5lY3Rpb24gYXR0ZW1wdHMgYmVmb3JlIGdpdmluZyB1cFxuICAgICAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkF0dGVtcHRzID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGRlbGF5IGJldHdlZW4gcmVjb25uZWN0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gICAgICAgICAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uRGVsYXkgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5O1xuICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5ID0gdjtcbiAgICAgICAgICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldE1pbih2KTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5yYW5kb21pemF0aW9uRmFjdG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yO1xuICAgICAgICAgIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IgPSB2O1xuICAgICAgICAgIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0Sml0dGVyKHYpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBtYXhpbXVtIGRlbGF5IGJldHdlZW4gcmVjb25uZWN0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gICAgICAgICAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uRGVsYXlNYXggPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4O1xuICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4ID0gdjtcbiAgICAgICAgICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldE1heCh2KTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgY29ubmVjdGlvbiB0aW1lb3V0LiBgZmFsc2VgIHRvIGRpc2FibGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICAgICAgICAgIHRoaXMuX3RpbWVvdXQgPSB2O1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGFydHMgdHJ5aW5nIHRvIHJlY29ubmVjdCBpZiByZWNvbm5lY3Rpb24gaXMgZW5hYmxlZCBhbmQgd2UgaGF2ZSBub3RcbiAgICAgICAgICogc3RhcnRlZCByZWNvbm5lY3RpbmcgeWV0XG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5tYXliZVJlY29ubmVjdE9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gICAgICAgICAgaWYgKCF0aGlzLnJlY29ubmVjdGluZyAmJiB0aGlzLl9yZWNvbm5lY3Rpb24gJiYgdGhpcy5iYWNrb2ZmLmF0dGVtcHRzID09PSAwKSB7XG4gICAgICAgICAgICAvLyBrZWVwcyByZWNvbm5lY3Rpb24gZnJvbSBmaXJpbmcgdHdpY2UgZm9yIHRoZSBzYW1lIHJlY29ubmVjdGlvbiBsb29wXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQgYHNvY2tldGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbmFsLCBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLm9wZW4gPSBNYW5hZ2VyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgZGVidWcoJ3JlYWR5U3RhdGUgJXMnLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgICAgICAgIGlmICh+dGhpcy5yZWFkeVN0YXRlLmluZGV4T2YoJ29wZW4nKSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgICBkZWJ1Zygnb3BlbmluZyAlcycsIHRoaXMudXJpKTtcbiAgICAgICAgICB0aGlzLmVuZ2luZSA9IGVpbyh0aGlzLnVyaSwgdGhpcy5vcHRzKTtcbiAgICAgICAgICB2YXIgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcbiAgICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcblxuICAgICAgICAgIC8vIGVtaXQgYG9wZW5gXG4gICAgICAgICAgdmFyIG9wZW5TdWIgPSBvbihzb2NrZXQsICdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbm9wZW4oKTtcbiAgICAgICAgICAgIGZuICYmIGZuKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBlbWl0IGBjb25uZWN0X2Vycm9yYFxuICAgICAgICAgIHZhciBlcnJvclN1YiA9IG9uKHNvY2tldCwgJ2Vycm9yJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGRlYnVnKCdjb25uZWN0X2Vycm9yJyk7XG4gICAgICAgICAgICBzZWxmLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHNlbGYucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICAgICAgICAgICAgc2VsZi5lbWl0QWxsKCdjb25uZWN0X2Vycm9yJywgZGF0YSk7XG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignQ29ubmVjdGlvbiBlcnJvcicpO1xuICAgICAgICAgICAgICBlcnIuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgIGZuKGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBPbmx5IGRvIHRoaXMgaWYgdGhlcmUgaXMgbm8gZm4gdG8gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgICAgICAgICBzZWxmLm1heWJlUmVjb25uZWN0T25PcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBlbWl0IGBjb25uZWN0X3RpbWVvdXRgXG4gICAgICAgICAgaWYgKGZhbHNlICE9PSB0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgICAgICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgICAgICBkZWJ1ZygnY29ubmVjdCBhdHRlbXB0IHdpbGwgdGltZW91dCBhZnRlciAlZCcsIHRpbWVvdXQpO1xuXG4gICAgICAgICAgICAvLyBzZXQgdGltZXJcbiAgICAgICAgICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBkZWJ1ZygnY29ubmVjdCBhdHRlbXB0IHRpbWVkIG91dCBhZnRlciAlZCcsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICBvcGVuU3ViLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdlcnJvcicsICd0aW1lb3V0Jyk7XG4gICAgICAgICAgICAgIHNlbGYuZW1pdEFsbCgnY29ubmVjdF90aW1lb3V0JywgdGltZW91dCk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcblxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goe1xuICAgICAgICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKG9wZW5TdWIpO1xuICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGVycm9yU3ViKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkZWJ1Zygnb3BlbicpO1xuXG4gICAgICAgICAgLy8gY2xlYXIgb2xkIHN1YnNcbiAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcblxuICAgICAgICAgIC8vIG1hcmsgYXMgb3BlblxuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgICAgICAgICB0aGlzLmVtaXQoJ29wZW4nKTtcblxuICAgICAgICAgIC8vIGFkZCBuZXcgc3Vic1xuICAgICAgICAgIHZhciBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdkYXRhJywgYmluZCh0aGlzLCAnb25kYXRhJykpKTtcbiAgICAgICAgICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdwaW5nJywgYmluZCh0aGlzLCAnb25waW5nJykpKTtcbiAgICAgICAgICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdwb25nJywgYmluZCh0aGlzLCAnb25wb25nJykpKTtcbiAgICAgICAgICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdlcnJvcicsIGJpbmQodGhpcywgJ29uZXJyb3InKSkpO1xuICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2Nsb3NlJywgYmluZCh0aGlzLCAnb25jbG9zZScpKSk7XG4gICAgICAgICAgdGhpcy5zdWJzLnB1c2gob24odGhpcy5kZWNvZGVyLCAnZGVjb2RlZCcsIGJpbmQodGhpcywgJ29uZGVjb2RlZCcpKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIGEgcGluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLm9ucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmxhc3RQaW5nID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB0aGlzLmVtaXRBbGwoJ3BpbmcnKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gYSBwYWNrZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5vbnBvbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5lbWl0QWxsKCdwb25nJywgbmV3IERhdGUoKSAtIHRoaXMubGFzdFBpbmcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUub25kYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLmRlY29kZXIuYWRkKGRhdGEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiBwYXJzZXIgZnVsbHkgZGVjb2RlcyBhIHBhY2tldC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLm9uZGVjb2RlZCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIHNvY2tldCBlcnJvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgZGVidWcoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgICB0aGlzLmVtaXRBbGwoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBzb2NrZXQgZm9yIHRoZSBnaXZlbiBgbnNwYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7U29ja2V0fVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5zb2NrZXQgPSBmdW5jdGlvbiAobnNwKSB7XG4gICAgICAgICAgdmFyIHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICAgICAgICAgIGlmICghc29ja2V0KSB7XG4gICAgICAgICAgICBzb2NrZXQgPSBuZXcgU29ja2V0KHRoaXMsIG5zcCk7XG4gICAgICAgICAgICB0aGlzLm5zcHNbbnNwXSA9IHNvY2tldDtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHNvY2tldC5vbignY29ubmVjdGluZycsIG9uQ29ubmVjdGluZyk7XG4gICAgICAgICAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNvY2tldC5pZCA9IHNlbGYuZW5naW5lLmlkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9Db25uZWN0KSB7XG4gICAgICAgICAgICAgIC8vIG1hbnVhbGx5IGNhbGwgaGVyZSBzaW5jZSBjb25uZWN0aW5nIGV2bmV0IGlzIGZpcmVkIGJlZm9yZSBsaXN0ZW5pbmdcbiAgICAgICAgICAgICAgb25Db25uZWN0aW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gb25Db25uZWN0aW5nKCkge1xuICAgICAgICAgICAgaWYgKCEgfmluZGV4T2Yoc2VsZi5jb25uZWN0aW5nLCBzb2NrZXQpKSB7XG4gICAgICAgICAgICAgIHNlbGYuY29ubmVjdGluZy5wdXNoKHNvY2tldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNvY2tldDtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gYSBzb2NrZXQgY2xvc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXRcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSBpbmRleE9mKHRoaXMuY29ubmVjdGluZywgc29ja2V0KTtcbiAgICAgICAgICBpZiAofmluZGV4KSB0aGlzLmNvbm5lY3Rpbmcuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW5nLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZXMgYSBwYWNrZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLnBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgICAgICBkZWJ1Zygnd3JpdGluZyBwYWNrZXQgJWonLCBwYWNrZXQpO1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgIGlmICghc2VsZi5lbmNvZGluZykge1xuICAgICAgICAgICAgLy8gZW5jb2RlLCB0aGVuIHdyaXRlIHRvIGVuZ2luZSB3aXRoIHJlc3VsdFxuICAgICAgICAgICAgc2VsZi5lbmNvZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVuY29kZXIuZW5jb2RlKHBhY2tldCwgZnVuY3Rpb24gKGVuY29kZWRQYWNrZXRzKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVuZ2luZS53cml0ZShlbmNvZGVkUGFja2V0c1tpXSwgcGFja2V0Lm9wdGlvbnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbGYuZW5jb2RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzUGFja2V0UXVldWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhZGQgcGFja2V0IHRvIHRoZSBxdWV1ZVxuICAgICAgICAgICAgc2VsZi5wYWNrZXRCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgcGFja2V0IGJ1ZmZlciBpcyBub24tZW1wdHksIGJlZ2lucyBlbmNvZGluZyB0aGVcbiAgICAgICAgICogbmV4dCBwYWNrZXQgaW4gbGluZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLnByb2Nlc3NQYWNrZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5wYWNrZXRCdWZmZXIubGVuZ3RoID4gMCAmJiAhdGhpcy5lbmNvZGluZykge1xuICAgICAgICAgICAgdmFyIHBhY2sgPSB0aGlzLnBhY2tldEJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQocGFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhbiB1cCB0cmFuc3BvcnQgc3Vic2NyaXB0aW9ucyBhbmQgcGFja2V0IGJ1ZmZlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGVidWcoJ2NsZWFudXAnKTtcblxuICAgICAgICAgIHZhciBzdWI7XG4gICAgICAgICAgd2hpbGUgKHN1YiA9IHRoaXMuc3Vicy5zaGlmdCgpKSBzdWIuZGVzdHJveSgpO1xuXG4gICAgICAgICAgdGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcbiAgICAgICAgICB0aGlzLmVuY29kaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sYXN0UGluZyA9IG51bGw7XG5cbiAgICAgICAgICB0aGlzLmRlY29kZXIuZGVzdHJveSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbG9zZSB0aGUgY3VycmVudCBzb2NrZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5jbG9zZSA9IE1hbmFnZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGVidWcoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKCdvcGVuaW5nJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGBvbmNsb3NlYCB3aWxsIG5vdCBmaXJlIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGFuIG9wZW4gZXZlbnQgbmV2ZXIgaGFwcGVuZWRcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgICAgICAgICBpZiAodGhpcy5lbmdpbmUpIHRoaXMuZW5naW5lLmNsb3NlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBjbG9zZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgZGVidWcoJ29uY2xvc2UnKTtcblxuICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICAgICAgICAgIHRoaXMuZW1pdCgnY2xvc2UnLCByZWFzb24pO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXR0ZW1wdCBhIHJlY29ubmVjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5yZWNvbm5lY3RpbmcgfHwgdGhpcy5za2lwUmVjb25uZWN0KSByZXR1cm4gdGhpcztcblxuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIGRlYnVnKCdyZWNvbm5lY3QgZmFpbGVkJyk7XG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdEFsbCgncmVjb25uZWN0X2ZhaWxlZCcpO1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgICAgICAgICBkZWJ1Zygnd2lsbCB3YWl0ICVkbXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0JywgZGVsYXkpO1xuXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgIGRlYnVnKCdhdHRlbXB0aW5nIHJlY29ubmVjdCcpO1xuICAgICAgICAgICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdF9hdHRlbXB0Jywgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcbiAgICAgICAgICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RpbmcnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuXG4gICAgICAgICAgICAgIC8vIGNoZWNrIGFnYWluIGZvciB0aGUgY2FzZSBzb2NrZXQgY2xvc2VkIGluIGFib3ZlIGV2ZW50c1xuICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KSByZXR1cm47XG5cbiAgICAgICAgICAgICAgc2VsZi5vcGVuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBkZWJ1ZygncmVjb25uZWN0IGF0dGVtcHQgZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RfZXJyb3InLCBlcnIuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRlYnVnKCdyZWNvbm5lY3Qgc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5vbnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHtcbiAgICAgICAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUub25yZWNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGF0dGVtcHQgPSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHM7XG4gICAgICAgICAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVNvY2tldElkcygpO1xuICAgICAgICAgIHRoaXMuZW1pdEFsbCgncmVjb25uZWN0JywgYXR0ZW1wdCk7XG4gICAgICAgIH07XG4gICAgICB9LCB7IFwiLi9vblwiOiAzMywgXCIuL3NvY2tldFwiOiAzNCwgXCJiYWNrbzJcIjogMzYsIFwiY29tcG9uZW50LWJpbmRcIjogMzcsIFwiY29tcG9uZW50LWVtaXR0ZXJcIjogMzgsIFwiZGVidWdcIjogMzksIFwiZW5naW5lLmlvLWNsaWVudFwiOiAxLCBcImluZGV4b2ZcIjogNDIsIFwic29ja2V0LmlvLXBhcnNlclwiOiA0NyB9XSwgMzM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBleHBvcnRzLlxuICAgICAgICAgKi9cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG9uO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgZm9yIHN1YnNjcmlwdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fEV2ZW50RW1pdHRlcn0gb2JqIHdpdGggYEVtaXR0ZXJgIG1peGluIG9yIGBFdmVudEVtaXR0ZXJgXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uKG9iaiwgZXYsIGZuKSB7XG4gICAgICAgICAgb2JqLm9uKGV2LCBmbik7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgIG9iai5yZW1vdmVMaXN0ZW5lcihldiwgZm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sIHt9XSwgMzQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBwYXJzZXIgPSBfZGVyZXFfKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG4gICAgICAgIHZhciBFbWl0dGVyID0gX2RlcmVxXygnY29tcG9uZW50LWVtaXR0ZXInKTtcbiAgICAgICAgdmFyIHRvQXJyYXkgPSBfZGVyZXFfKCd0by1hcnJheScpO1xuICAgICAgICB2YXIgb24gPSBfZGVyZXFfKCcuL29uJyk7XG4gICAgICAgIHZhciBiaW5kID0gX2RlcmVxXygnY29tcG9uZW50LWJpbmQnKTtcbiAgICAgICAgdmFyIGRlYnVnID0gX2RlcmVxXygnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDpzb2NrZXQnKTtcbiAgICAgICAgdmFyIGhhc0JpbiA9IF9kZXJlcV8oJ2hhcy1iaW5hcnknKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFNvY2tldDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZXZlbnRzIChibGFja2xpc3RlZCkuXG4gICAgICAgICAqIFRoZXNlIGV2ZW50cyBjYW4ndCBiZSBlbWl0dGVkIGJ5IHRoZSB1c2VyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIGV2ZW50cyA9IHtcbiAgICAgICAgICBjb25uZWN0OiAxLFxuICAgICAgICAgIGNvbm5lY3RfZXJyb3I6IDEsXG4gICAgICAgICAgY29ubmVjdF90aW1lb3V0OiAxLFxuICAgICAgICAgIGNvbm5lY3Rpbmc6IDEsXG4gICAgICAgICAgZGlzY29ubmVjdDogMSxcbiAgICAgICAgICBlcnJvcjogMSxcbiAgICAgICAgICByZWNvbm5lY3Q6IDEsXG4gICAgICAgICAgcmVjb25uZWN0X2F0dGVtcHQ6IDEsXG4gICAgICAgICAgcmVjb25uZWN0X2ZhaWxlZDogMSxcbiAgICAgICAgICByZWNvbm5lY3RfZXJyb3I6IDEsXG4gICAgICAgICAgcmVjb25uZWN0aW5nOiAxLFxuICAgICAgICAgIHBpbmc6IDEsXG4gICAgICAgICAgcG9uZzogMVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCB0byBgRW1pdHRlciNlbWl0YC5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIGVtaXQgPSBFbWl0dGVyLnByb3RvdHlwZS5lbWl0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gU29ja2V0KGlvLCBuc3ApIHtcbiAgICAgICAgICB0aGlzLmlvID0gaW87XG4gICAgICAgICAgdGhpcy5uc3AgPSBuc3A7XG4gICAgICAgICAgdGhpcy5qc29uID0gdGhpczsgLy8gY29tcGF0XG4gICAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLmlvLmF1dG9Db25uZWN0KSB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaXggaW4gYEVtaXR0ZXJgLlxuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyKFNvY2tldC5wcm90b3R5cGUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdWJzY3JpYmUgdG8gb3BlbiwgY2xvc2UgYW5kIHBhY2tldCBldmVudHNcbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUuc3ViRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnN1YnMpIHJldHVybjtcblxuICAgICAgICAgIHZhciBpbyA9IHRoaXMuaW87XG4gICAgICAgICAgdGhpcy5zdWJzID0gW29uKGlvLCAnb3BlbicsIGJpbmQodGhpcywgJ29ub3BlbicpKSwgb24oaW8sICdwYWNrZXQnLCBiaW5kKHRoaXMsICdvbnBhY2tldCcpKSwgb24oaW8sICdjbG9zZScsIGJpbmQodGhpcywgJ29uY2xvc2UnKSldO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5vcGVuID0gU29ja2V0LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgICB0aGlzLnN1YkV2ZW50cygpO1xuICAgICAgICAgIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICAgICAgICAgIGlmICgnb3BlbicgPT0gdGhpcy5pby5yZWFkeVN0YXRlKSB0aGlzLm9ub3BlbigpO1xuICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdGluZycpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgICBhcmdzLnVuc2hpZnQoJ21lc3NhZ2UnKTtcbiAgICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE92ZXJyaWRlIGBlbWl0YC5cbiAgICAgICAgICogSWYgdGhlIGV2ZW50IGlzIGluIGBldmVudHNgLCBpdCdzIGVtaXR0ZWQgbm9ybWFsbHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBuYW1lXG4gICAgICAgICAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2KSkge1xuICAgICAgICAgICAgZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgICAgdmFyIHBhcnNlclR5cGUgPSBwYXJzZXIuRVZFTlQ7IC8vIGRlZmF1bHRcbiAgICAgICAgICBpZiAoaGFzQmluKGFyZ3MpKSB7XG4gICAgICAgICAgICBwYXJzZXJUeXBlID0gcGFyc2VyLkJJTkFSWV9FVkVOVDtcbiAgICAgICAgICB9IC8vIGJpbmFyeVxuICAgICAgICAgIHZhciBwYWNrZXQgPSB7IHR5cGU6IHBhcnNlclR5cGUsIGRhdGE6IGFyZ3MgfTtcblxuICAgICAgICAgIHBhY2tldC5vcHRpb25zID0ge307XG4gICAgICAgICAgcGFja2V0Lm9wdGlvbnMuY29tcHJlc3MgPSAhdGhpcy5mbGFncyB8fCBmYWxzZSAhPT0gdGhpcy5mbGFncy5jb21wcmVzcztcblxuICAgICAgICAgIC8vIGV2ZW50IGFjayBjYWxsYmFja1xuICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGRlYnVnKCdlbWl0dGluZyBwYWNrZXQgd2l0aCBhY2sgaWQgJWQnLCB0aGlzLmlkcyk7XG4gICAgICAgICAgICB0aGlzLmFja3NbdGhpcy5pZHNdID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRCdWZmZXIucHVzaChwYWNrZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlbGV0ZSB0aGlzLmZsYWdzO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlbmRzIGEgcGFja2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLnBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgICAgICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gICAgICAgICAgdGhpcy5pby5wYWNrZXQocGFja2V0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBvcGVuYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRlYnVnKCd0cmFuc3BvcnQgaXMgb3BlbiAtIGNvbm5lY3RpbmcnKTtcblxuICAgICAgICAgIC8vIHdyaXRlIGNvbm5lY3QgcGFja2V0IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgIGlmICgnLycgIT0gdGhpcy5uc3ApIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogcGFyc2VyLkNPTk5FQ1QgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHJlYXNvblxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5vbmNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIGRlYnVnKCdjbG9zZSAoJXMpJywgcmVhc29uKTtcbiAgICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5pZDtcbiAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnLCByZWFzb24pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9ucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgICAgIGlmIChwYWNrZXQubnNwICE9IHRoaXMubnNwKSByZXR1cm47XG5cbiAgICAgICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHBhcnNlci5DT05ORUNUOlxuICAgICAgICAgICAgICB0aGlzLm9uY29ubmVjdCgpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBwYXJzZXIuRVZFTlQ6XG4gICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBwYXJzZXIuQklOQVJZX0VWRU5UOlxuICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgcGFyc2VyLkFDSzpcbiAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBwYXJzZXIuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBwYXJzZXIuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgdGhpcy5vbmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgcGFyc2VyLkVSUk9SOlxuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9uZXZlbnQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgICAgICAgdmFyIGFyZ3MgPSBwYWNrZXQuZGF0YSB8fCBbXTtcbiAgICAgICAgICBkZWJ1ZygnZW1pdHRpbmcgZXZlbnQgJWonLCBhcmdzKTtcblxuICAgICAgICAgIGlmIChudWxsICE9IHBhY2tldC5pZCkge1xuICAgICAgICAgICAgZGVidWcoJ2F0dGFjaGluZyBhY2sgY2FsbGJhY2sgdG8gZXZlbnQnKTtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5wdXNoKGFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUuYWNrID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHZhciBzZW50ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgICAgICAgICAgaWYgKHNlbnQpIHJldHVybjtcbiAgICAgICAgICAgIHNlbnQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBkZWJ1Zygnc2VuZGluZyBhY2sgJWonLCBhcmdzKTtcblxuICAgICAgICAgICAgdmFyIHR5cGUgPSBoYXNCaW4oYXJncykgPyBwYXJzZXIuQklOQVJZX0FDSyA6IHBhcnNlci5BQ0s7XG4gICAgICAgICAgICBzZWxmLnBhY2tldCh7XG4gICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgZGF0YTogYXJnc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgYWNrbm93bGVnZW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUub25hY2sgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgICAgICAgdmFyIGFjayA9IHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBhY2spIHtcbiAgICAgICAgICAgIGRlYnVnKCdjYWxsaW5nIGFjayAlcyB3aXRoICVqJywgcGFja2V0LmlkLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBhY2suYXBwbHkodGhpcywgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWJ1ZygnYmFkIGFjayAlcycsIHBhY2tldC5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgY29ubmVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUub25jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcpO1xuICAgICAgICAgIHRoaXMuZW1pdEJ1ZmZlcmVkKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLmVtaXRCdWZmZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5yZWNlaXZlQnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlbWl0LmFwcGx5KHRoaXMsIHRoaXMucmVjZWl2ZUJ1ZmZlcltpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2VuZEJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQodGhpcy5zZW5kQnVmZmVyW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBkaXNjb25uZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5vbmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGVidWcoJ3NlcnZlciBkaXNjb25uZWN0ICglcyknLCB0aGlzLm5zcCk7XG4gICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5vbmNsb3NlKCdpbyBzZXJ2ZXIgZGlzY29ubmVjdCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICAgICAgICAgKiB0aGlzIG1ldGhvZCBlbnN1cmVzIHRoZSBtYW5hZ2VyIHN0b3BzIHRyYWNraW5nIHVzIGFuZFxuICAgICAgICAgKiB0aGF0IHJlY29ubmVjdGlvbnMgZG9uJ3QgZ2V0IHRyaWdnZXJlZCBmb3IgdGhpcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlLlxuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3Vicykge1xuICAgICAgICAgICAgLy8gY2xlYW4gc3Vic2NyaXB0aW9ucyB0byBhdm9pZCByZWNvbm5lY3Rpb25zXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0aGlzLnN1YnNbaV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmlvLmRlc3Ryb3kodGhpcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXQgbWFudWFsbHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLmNsb3NlID0gU29ja2V0LnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgZGVidWcoJ3BlcmZvcm1pbmcgZGlzY29ubmVjdCAoJXMpJywgdGhpcy5uc3ApO1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBwYXJzZXIuRElTQ09OTkVDVCB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZW1vdmUgc29ja2V0IGZyb20gcG9vbFxuICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAvLyBmaXJlIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5vbmNsb3NlKCdpbyBjbGllbnQgZGlzY29ubmVjdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSBpZiBgdHJ1ZWAsIGNvbXByZXNzZXMgdGhlIHNlbmRpbmcgZGF0YVxuICAgICAgICAgKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5jb21wcmVzcyA9IGZ1bmN0aW9uIChjb21wcmVzcykge1xuICAgICAgICAgIHRoaXMuZmxhZ3MgPSB0aGlzLmZsYWdzIHx8IHt9O1xuICAgICAgICAgIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgIH0sIHsgXCIuL29uXCI6IDMzLCBcImNvbXBvbmVudC1iaW5kXCI6IDM3LCBcImNvbXBvbmVudC1lbWl0dGVyXCI6IDM4LCBcImRlYnVnXCI6IDM5LCBcImhhcy1iaW5hcnlcIjogNDEsIFwic29ja2V0LmlvLXBhcnNlclwiOiA0NywgXCJ0by1hcnJheVwiOiA1MSB9XSwgMzU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIHBhcnNldXJpID0gX2RlcmVxXygncGFyc2V1cmknKTtcbiAgICAgICAgICB2YXIgZGVidWcgPSBfZGVyZXFfKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50OnVybCcpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHVybDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVSTCBwYXJzZXIuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IEFuIG9iamVjdCBtZWFudCB0byBtaW1pYyB3aW5kb3cubG9jYXRpb24uXG4gICAgICAgICAgICogICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gdXJsKHVyaSwgbG9jKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gdXJpO1xuXG4gICAgICAgICAgICAvLyBkZWZhdWx0IHRvIHdpbmRvdy5sb2NhdGlvblxuICAgICAgICAgICAgdmFyIGxvYyA9IGxvYyB8fCBnbG9iYWwubG9jYXRpb247XG4gICAgICAgICAgICBpZiAobnVsbCA9PSB1cmkpIHVyaSA9IGxvYy5wcm90b2NvbCArICcvLycgKyBsb2MuaG9zdDtcblxuICAgICAgICAgICAgLy8gcmVsYXRpdmUgcGF0aCBzdXBwb3J0XG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIHVyaSkge1xuICAgICAgICAgICAgICBpZiAoJy8nID09IHVyaS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoJy8nID09IHVyaS5jaGFyQXQoMSkpIHtcbiAgICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdXJpID0gbG9jLmhvc3QgKyB1cmk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCEvXihodHRwcz98d3NzPyk6XFwvXFwvLy50ZXN0KHVyaSkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZygncHJvdG9jb2wtbGVzcyB1cmwgJXMnLCB1cmkpO1xuICAgICAgICAgICAgICAgIGlmICgndW5kZWZpbmVkJyAhPSB0eXBlb2YgbG9jKSB7XG4gICAgICAgICAgICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyAnLy8nICsgdXJpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB1cmkgPSAnaHR0cHM6Ly8nICsgdXJpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIHBhcnNlXG4gICAgICAgICAgICAgIGRlYnVnKCdwYXJzZSAlcycsIHVyaSk7XG4gICAgICAgICAgICAgIG9iaiA9IHBhcnNldXJpKHVyaSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSB0cmVhdCBgbG9jYWxob3N0OjgwYCBhbmQgYGxvY2FsaG9zdGAgZXF1YWxseVxuICAgICAgICAgICAgaWYgKCFvYmoucG9ydCkge1xuICAgICAgICAgICAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgICAgICBvYmoucG9ydCA9ICc4MCc7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoL14oaHR0cHx3cylzJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICAgICAgb2JqLnBvcnQgPSAnNDQzJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvYmoucGF0aCA9IG9iai5wYXRoIHx8ICcvJztcblxuICAgICAgICAgICAgdmFyIGlwdjYgPSBvYmouaG9zdC5pbmRleE9mKCc6JykgIT09IC0xO1xuICAgICAgICAgICAgdmFyIGhvc3QgPSBpcHY2ID8gJ1snICsgb2JqLmhvc3QgKyAnXScgOiBvYmouaG9zdDtcblxuICAgICAgICAgICAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICAgICAgICAgICAgb2JqLmlkID0gb2JqLnByb3RvY29sICsgJzovLycgKyBob3N0ICsgJzonICsgb2JqLnBvcnQ7XG4gICAgICAgICAgICAvLyBkZWZpbmUgaHJlZlxuICAgICAgICAgICAgb2JqLmhyZWYgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAobG9jICYmIGxvYy5wb3J0ID09IG9iai5wb3J0ID8gJycgOiAnOicgKyBvYmoucG9ydCk7XG5cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwgeyBcImRlYnVnXCI6IDM5LCBcInBhcnNldXJpXCI6IDQ1IH1dLCAzNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXhwb3NlIGBCYWNrb2ZmYC5cbiAgICAgICAgICovXG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBCYWNrb2ZmO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsaXplIGJhY2tvZmYgdGltZXIgd2l0aCBgb3B0c2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIC0gYG1pbmAgaW5pdGlhbCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbMTAwXVxuICAgICAgICAgKiAtIGBtYXhgIG1heCB0aW1lb3V0IFsxMDAwMF1cbiAgICAgICAgICogLSBgaml0dGVyYCBbMF1cbiAgICAgICAgICogLSBgZmFjdG9yYCBbMl1cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gQmFja29mZihvcHRzKSB7XG4gICAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgICAgdGhpcy5tcyA9IG9wdHMubWluIHx8IDEwMDtcbiAgICAgICAgICB0aGlzLm1heCA9IG9wdHMubWF4IHx8IDEwMDAwO1xuICAgICAgICAgIHRoaXMuZmFjdG9yID0gb3B0cy5mYWN0b3IgfHwgMjtcbiAgICAgICAgICB0aGlzLmppdHRlciA9IG9wdHMuaml0dGVyID4gMCAmJiBvcHRzLmppdHRlciA8PSAxID8gb3B0cy5qaXR0ZXIgOiAwO1xuICAgICAgICAgIHRoaXMuYXR0ZW1wdHMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiB0aGUgYmFja29mZiBkdXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBCYWNrb2ZmLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgbXMgPSB0aGlzLm1zICogTWF0aC5wb3codGhpcy5mYWN0b3IsIHRoaXMuYXR0ZW1wdHMrKyk7XG4gICAgICAgICAgaWYgKHRoaXMuaml0dGVyKSB7XG4gICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB2YXIgZGV2aWF0aW9uID0gTWF0aC5mbG9vcihyYW5kICogdGhpcy5qaXR0ZXIgKiBtcyk7XG4gICAgICAgICAgICBtcyA9IChNYXRoLmZsb29yKHJhbmQgKiAxMCkgJiAxKSA9PSAwID8gbXMgLSBkZXZpYXRpb24gOiBtcyArIGRldmlhdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWluKG1zLCB0aGlzLm1heCkgfCAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXNldCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBCYWNrb2ZmLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmF0dGVtcHRzID0gMDtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBtaW5pbXVtIGR1cmF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEJhY2tvZmYucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uIChtaW4pIHtcbiAgICAgICAgICB0aGlzLm1zID0gbWluO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIG1heGltdW0gZHVyYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgQmFja29mZi5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24gKG1heCkge1xuICAgICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGppdHRlclxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBCYWNrb2ZmLnByb3RvdHlwZS5zZXRKaXR0ZXIgPSBmdW5jdGlvbiAoaml0dGVyKSB7XG4gICAgICAgICAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XG4gICAgICAgIH07XG4gICAgICB9LCB7fV0sIDM3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2xpY2UgcmVmZXJlbmNlLlxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgc2xpY2UgPSBbXS5zbGljZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQmluZCBgb2JqYCB0byBgZm5gLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBvciBzdHJpbmdcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgZm4pIHtcbiAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGZuKSBmbiA9IG9ialtmbl07XG4gICAgICAgICAgaWYgKCdmdW5jdGlvbicgIT0gdHlwZW9mIGZuKSB0aHJvdyBuZXcgRXJyb3IoJ2JpbmQoKSByZXF1aXJlcyBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShvYmosIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9LCB7fV0sIDM4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICAgICAgICAgKi9cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICAgICAgICAgIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIG1peGluKG9iaikge1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAgICAgKiBAcmV0dXJuIHtFbWl0dGVyfVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgICAgICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSkucHVzaChmbik7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICAgICAgICAgKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICAgICAgICogQHJldHVybiB7RW1pdHRlcn1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgICAgICBmdW5jdGlvbiBvbigpIHtcbiAgICAgICAgICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9uLmZuID0gZm47XG4gICAgICAgICAgdGhpcy5vbihldmVudCwgb24pO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICAgICAgICAgKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICAgICAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgICAgICAgICAvLyBhbGxcbiAgICAgICAgICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG4gICAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gICAgICAgICAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICAgICAgICAgIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgICAgICAgICB2YXIgY2I7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICAgICAgICAgKiBAcmV0dXJuIHtFbWl0dGVyfVxuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgICBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuXG4gICAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gISF0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xuICAgICAgICB9O1xuICAgICAgfSwge31dLCAzOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgYXJndW1lbnRzWzRdWzE3XVswXS5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgfSwgeyBcIi4vZGVidWdcIjogNDAsIFwiZHVwXCI6IDE3IH1dLCA0MDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgYXJndW1lbnRzWzRdWzE4XVswXS5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgfSwgeyBcImR1cFwiOiAxOCwgXCJtc1wiOiA0NCB9XSwgNDE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgaXNBcnJheSA9IF9kZXJlcV8oJ2lzYXJyYXknKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZHVsZSBleHBvcnRzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBoYXNCaW5hcnk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDaGVja3MgZm9yIGJpbmFyeSBkYXRhLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogUmlnaHQgbm93IG9ubHkgQnVmZmVyIGFuZCBBcnJheUJ1ZmZlciBhcmUgc3VwcG9ydGVkLi5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhbnl0aGluZ1xuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYXNCaW5hcnkoZGF0YSkge1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBfaGFzQmluYXJ5KG9iaikge1xuICAgICAgICAgICAgICBpZiAoIW9iaikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmIChnbG9iYWwuQnVmZmVyICYmIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIgJiYgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlcihvYmopIHx8IGdsb2JhbC5BcnJheUJ1ZmZlciAmJiBvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBnbG9iYWwuQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iIHx8IGdsb2JhbC5GaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKF9oYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqICYmICdvYmplY3QnID09IHR5cGVvZiBvYmopIHtcbiAgICAgICAgICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9BdXRvbWF0dGljL2hhcy1iaW5hcnkvcHVsbC80XG4gICAgICAgICAgICAgICAgaWYgKG9iai50b0pTT04gJiYgJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygb2JqLnRvSlNPTikge1xuICAgICAgICAgICAgICAgICAgb2JqID0gb2JqLnRvSlNPTigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmIF9oYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9oYXNCaW5hcnkoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwgeyBcImlzYXJyYXlcIjogNDMgfV0sIDQyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBhcmd1bWVudHNbNF1bMjNdWzBdLmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICB9LCB7IFwiZHVwXCI6IDIzIH1dLCA0MzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgYXJndW1lbnRzWzRdWzI0XVswXS5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgfSwgeyBcImR1cFwiOiAyNCB9XSwgNDQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIGFyZ3VtZW50c1s0XVsyNV1bMF0uYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgIH0sIHsgXCJkdXBcIjogMjUgfV0sIDQ1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBhcmd1bWVudHNbNF1bMjhdWzBdLmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICB9LCB7IFwiZHVwXCI6IDI4IH1dLCA0NjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgICAvKmdsb2JhbCBCbG9iLEZpbGUqL1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIHJlcXVpcmVtZW50c1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIGlzQXJyYXkgPSBfZGVyZXFfKCdpc2FycmF5Jyk7XG4gICAgICAgICAgdmFyIGlzQnVmID0gX2RlcmVxXygnLi9pcy1idWZmZXInKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFJlcGxhY2VzIGV2ZXJ5IEJ1ZmZlciB8IEFycmF5QnVmZmVyIGluIHBhY2tldCB3aXRoIGEgbnVtYmVyZWQgcGxhY2Vob2xkZXIuXG4gICAgICAgICAgICogQW55dGhpbmcgd2l0aCBibG9icyBvciBmaWxlcyBzaG91bGQgYmUgZmVkIHRocm91Z2ggcmVtb3ZlQmxvYnMgYmVmb3JlIGNvbWluZ1xuICAgICAgICAgICAqIGhlcmUuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gc29ja2V0LmlvIGV2ZW50IHBhY2tldFxuICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBkZWNvbnN0cnVjdGVkIHBhY2tldCBhbmQgbGlzdCBvZiBidWZmZXJzXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgICAgICAgICB2YXIgYnVmZmVycyA9IFtdO1xuICAgICAgICAgICAgdmFyIHBhY2tldERhdGEgPSBwYWNrZXQuZGF0YTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gX2RlY29uc3RydWN0UGFja2V0KGRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gZGF0YTtcblxuICAgICAgICAgICAgICBpZiAoaXNCdWYoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSB7IF9wbGFjZWhvbGRlcjogdHJ1ZSwgbnVtOiBidWZmZXJzLmxlbmd0aCB9O1xuICAgICAgICAgICAgICAgIGJ1ZmZlcnMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdEYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIG5ld0RhdGFbaV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCdvYmplY3QnID09IHR5cGVvZiBkYXRhICYmICEoZGF0YSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0RhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgbmV3RGF0YVtrZXldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFjayA9IHBhY2tldDtcbiAgICAgICAgICAgIHBhY2suZGF0YSA9IF9kZWNvbnN0cnVjdFBhY2tldChwYWNrZXREYXRhKTtcbiAgICAgICAgICAgIHBhY2suYXR0YWNobWVudHMgPSBidWZmZXJzLmxlbmd0aDsgLy8gbnVtYmVyIG9mIGJpbmFyeSAnYXR0YWNobWVudHMnXG4gICAgICAgICAgICByZXR1cm4geyBwYWNrZXQ6IHBhY2ssIGJ1ZmZlcnM6IGJ1ZmZlcnMgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUmVjb25zdHJ1Y3RzIGEgYmluYXJ5IHBhY2tldCBmcm9tIGl0cyBwbGFjZWhvbGRlciBwYWNrZXQgYW5kIGJ1ZmZlcnNcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBldmVudCBwYWNrZXQgd2l0aCBwbGFjZWhvbGRlcnNcbiAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBidWZmZXJzIC0gYmluYXJ5IGJ1ZmZlcnMgdG8gcHV0IGluIHBsYWNlaG9sZGVyIHBvc2l0aW9uc1xuICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQsIGJ1ZmZlcnMpIHtcbiAgICAgICAgICAgIHZhciBjdXJQbGFjZUhvbGRlciA9IDA7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9yZWNvbnN0cnVjdFBhY2tldChkYXRhKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuX3BsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ1ZiA9IGJ1ZmZlcnNbZGF0YS5udW1dOyAvLyBhcHByb3ByaWF0ZSBidWZmZXIgKHNob3VsZCBiZSBuYXR1cmFsIG9yZGVyIGFueXdheSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgJiYgJ29iamVjdCcgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYWNrZXQuZGF0YSA9IF9yZWNvbnN0cnVjdFBhY2tldChwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBwYWNrZXQuYXR0YWNobWVudHMgPSB1bmRlZmluZWQ7IC8vIG5vIGxvbmdlciB1c2VmdWxcbiAgICAgICAgICAgIHJldHVybiBwYWNrZXQ7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEFzeW5jaHJvbm91c2x5IHJlbW92ZXMgQmxvYnMgb3IgRmlsZXMgZnJvbSBkYXRhIHZpYVxuICAgICAgICAgICAqIEZpbGVSZWFkZXIncyByZWFkQXNBcnJheUJ1ZmZlciBtZXRob2QuIFVzZWQgYmVmb3JlIGVuY29kaW5nXG4gICAgICAgICAgICogZGF0YSBhcyBtc2dwYWNrLiBDYWxscyBjYWxsYmFjayB3aXRoIHRoZSBibG9ibGVzcyBkYXRhLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5yZW1vdmVCbG9icyA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgZnVuY3Rpb24gX3JlbW92ZUJsb2JzKG9iaiwgY3VyS2V5LCBjb250YWluaW5nT2JqZWN0KSB7XG4gICAgICAgICAgICAgIGlmICghb2JqKSByZXR1cm4gb2JqO1xuXG4gICAgICAgICAgICAgIC8vIGNvbnZlcnQgYW55IGJsb2JcbiAgICAgICAgICAgICAgaWYgKGdsb2JhbC5CbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IgfHwgZ2xvYmFsLkZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICAgIHBlbmRpbmdCbG9icysrO1xuXG4gICAgICAgICAgICAgICAgLy8gYXN5bmMgZmlsZXJlYWRlclxuICAgICAgICAgICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVzdWx0ID09IGFycmF5YnVmZmVyXG4gICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmluZ09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluaW5nT2JqZWN0W2N1cktleV0gPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2JsZXNzRGF0YSA9IHRoaXMucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBpZiBub3RoaW5nIHBlbmRpbmcgaXRzIGNhbGxiYWNrIHRpbWVcbiAgICAgICAgICAgICAgICAgIGlmICghIC0tcGVuZGluZ0Jsb2JzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2JsZXNzRGF0YSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIob2JqKTsgLy8gYmxvYiAtPiBhcnJheWJ1ZmZlclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGFycmF5XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBfcmVtb3ZlQmxvYnMob2JqW2ldLCBpLCBvYmopO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqICYmICdvYmplY3QnID09IHR5cGVvZiBvYmogJiYgIWlzQnVmKG9iaikpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGFuZCBvYmplY3RcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGVuZGluZ0Jsb2JzID0gMDtcbiAgICAgICAgICAgIHZhciBibG9ibGVzc0RhdGEgPSBkYXRhO1xuICAgICAgICAgICAgX3JlbW92ZUJsb2JzKGJsb2JsZXNzRGF0YSk7XG4gICAgICAgICAgICBpZiAoIXBlbmRpbmdCbG9icykge1xuICAgICAgICAgICAgICBjYWxsYmFjayhibG9ibGVzc0RhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7IFwiLi9pcy1idWZmZXJcIjogNDgsIFwiaXNhcnJheVwiOiA0MyB9XSwgNDc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBkZWJ1ZyA9IF9kZXJlcV8oJ2RlYnVnJykoJ3NvY2tldC5pby1wYXJzZXInKTtcbiAgICAgICAgdmFyIGpzb24gPSBfZGVyZXFfKCdqc29uMycpO1xuICAgICAgICB2YXIgaXNBcnJheSA9IF9kZXJlcV8oJ2lzYXJyYXknKTtcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSBfZGVyZXFfKCdjb21wb25lbnQtZW1pdHRlcicpO1xuICAgICAgICB2YXIgYmluYXJ5ID0gX2RlcmVxXygnLi9iaW5hcnknKTtcbiAgICAgICAgdmFyIGlzQnVmID0gX2RlcmVxXygnLi9pcy1idWZmZXInKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdG9jb2wgdmVyc2lvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5wcm90b2NvbCA9IDQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhY2tldCB0eXBlcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy50eXBlcyA9IFsnQ09OTkVDVCcsICdESVNDT05ORUNUJywgJ0VWRU5UJywgJ0JJTkFSWV9FVkVOVCcsICdBQ0snLCAnQklOQVJZX0FDSycsICdFUlJPUiddO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYWNrZXQgdHlwZSBgY29ubmVjdGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuQ09OTkVDVCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhY2tldCB0eXBlIGBkaXNjb25uZWN0YC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5ESVNDT05ORUNUID0gMTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFja2V0IHR5cGUgYGV2ZW50YC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5FVkVOVCA9IDI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhY2tldCB0eXBlIGBhY2tgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLkFDSyA9IDM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhY2tldCB0eXBlIGBlcnJvcmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuRVJST1IgPSA0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYWNrZXQgdHlwZSAnYmluYXJ5IGV2ZW50J1xuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLkJJTkFSWV9FVkVOVCA9IDU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhY2tldCB0eXBlIGBiaW5hcnkgYWNrYC4gRm9yIGFja3Mgd2l0aCBiaW5hcnkgYXJndW1lbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLkJJTkFSWV9BQ0sgPSA2O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVyIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLkVuY29kZXIgPSBFbmNvZGVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVyIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLkRlY29kZXIgPSBEZWNvZGVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNvY2tldC5pbyBFbmNvZGVyIGluc3RhbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIEVuY29kZXIoKSB7fVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGUgYSBwYWNrZXQgYXMgYSBzaW5nbGUgc3RyaW5nIGlmIG5vbi1iaW5hcnksIG9yIGFzIGFcbiAgICAgICAgICogYnVmZmVyIHNlcXVlbmNlLCBkZXBlbmRpbmcgb24gcGFja2V0IHR5cGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBwYWNrZXQgb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gaGFuZGxlIGVuY29kaW5ncyAobGlrZWx5IGVuZ2luZS53cml0ZSlcbiAgICAgICAgICogQHJldHVybiBDYWxscyBjYWxsYmFjayB3aXRoIEFycmF5IG9mIGVuY29kaW5nc1xuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBFbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAob2JqLCBjYWxsYmFjaykge1xuICAgICAgICAgIGRlYnVnKCdlbmNvZGluZyBwYWNrZXQgJWonLCBvYmopO1xuXG4gICAgICAgICAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09IG9iai50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PSBvYmoudHlwZSkge1xuICAgICAgICAgICAgZW5jb2RlQXNCaW5hcnkob2JqLCBjYWxsYmFjayk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBlbmNvZGluZyA9IGVuY29kZUFzU3RyaW5nKG9iaik7XG4gICAgICAgICAgICBjYWxsYmFjayhbZW5jb2RpbmddKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZSBwYWNrZXQgYXMgc3RyaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gZW5jb2RlZFxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gZW5jb2RlQXNTdHJpbmcob2JqKSB7XG4gICAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICAgIHZhciBuc3AgPSBmYWxzZTtcblxuICAgICAgICAgIC8vIGZpcnN0IGlzIHR5cGVcbiAgICAgICAgICBzdHIgKz0gb2JqLnR5cGU7XG5cbiAgICAgICAgICAvLyBhdHRhY2htZW50cyBpZiB3ZSBoYXZlIHRoZW1cbiAgICAgICAgICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT0gb2JqLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09IG9iai50eXBlKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmF0dGFjaG1lbnRzO1xuICAgICAgICAgICAgc3RyICs9ICctJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gICAgICAgICAgLy8gd2UgYXBwZW5kIGl0IGZvbGxvd2VkIGJ5IGEgY29tbWEgYCxgXG4gICAgICAgICAgaWYgKG9iai5uc3AgJiYgJy8nICE9IG9iai5uc3ApIHtcbiAgICAgICAgICAgIG5zcCA9IHRydWU7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLm5zcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSB0aGUgaWRcbiAgICAgICAgICBpZiAobnVsbCAhPSBvYmouaWQpIHtcbiAgICAgICAgICAgIGlmIChuc3ApIHtcbiAgICAgICAgICAgICAgc3RyICs9ICcsJztcbiAgICAgICAgICAgICAgbnNwID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHIgKz0gb2JqLmlkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGpzb24gZGF0YVxuICAgICAgICAgIGlmIChudWxsICE9IG9iai5kYXRhKSB7XG4gICAgICAgICAgICBpZiAobnNwKSBzdHIgKz0gJywnO1xuICAgICAgICAgICAgc3RyICs9IGpzb24uc3RyaW5naWZ5KG9iai5kYXRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWJ1ZygnZW5jb2RlZCAlaiBhcyAlcycsIG9iaiwgc3RyKTtcbiAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZSBwYWNrZXQgYXMgJ2J1ZmZlciBzZXF1ZW5jZScgYnkgcmVtb3ZpbmcgYmxvYnMsIGFuZFxuICAgICAgICAgKiBkZWNvbnN0cnVjdGluZyBwYWNrZXQgaW50byBvYmplY3Qgd2l0aCBwbGFjZWhvbGRlcnMgYW5kXG4gICAgICAgICAqIGEgbGlzdCBvZiBidWZmZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gICAgICAgICAqIEByZXR1cm4ge0J1ZmZlcn0gZW5jb2RlZFxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gZW5jb2RlQXNCaW5hcnkob2JqLCBjYWxsYmFjaykge1xuXG4gICAgICAgICAgZnVuY3Rpb24gd3JpdGVFbmNvZGluZyhibG9ibGVzc0RhdGEpIHtcbiAgICAgICAgICAgIHZhciBkZWNvbnN0cnVjdGlvbiA9IGJpbmFyeS5kZWNvbnN0cnVjdFBhY2tldChibG9ibGVzc0RhdGEpO1xuICAgICAgICAgICAgdmFyIHBhY2sgPSBlbmNvZGVBc1N0cmluZyhkZWNvbnN0cnVjdGlvbi5wYWNrZXQpO1xuICAgICAgICAgICAgdmFyIGJ1ZmZlcnMgPSBkZWNvbnN0cnVjdGlvbi5idWZmZXJzO1xuXG4gICAgICAgICAgICBidWZmZXJzLnVuc2hpZnQocGFjayk7IC8vIGFkZCBwYWNrZXQgaW5mbyB0byBiZWdpbm5pbmcgb2YgZGF0YSBsaXN0XG4gICAgICAgICAgICBjYWxsYmFjayhidWZmZXJzKTsgLy8gd3JpdGUgYWxsIHRoZSBidWZmZXJzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYmluYXJ5LnJlbW92ZUJsb2JzKG9iaiwgd3JpdGVFbmNvZGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzb2NrZXQuaW8gRGVjb2RlciBpbnN0YW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGRlY29kZXJcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gRGVjb2RlcigpIHtcbiAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1peCBpbiBgRW1pdHRlcmAgd2l0aCBEZWNvZGVyLlxuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyKERlY29kZXIucHJvdG90eXBlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhbiBlY29kZWQgcGFja2V0IHN0cmluZyBpbnRvIHBhY2tldCBKU09OLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqIC0gZW5jb2RlZCBwYWNrZXRcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgRGVjb2Rlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBwYWNrZXQ7XG4gICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBvYmopIHtcbiAgICAgICAgICAgIHBhY2tldCA9IGRlY29kZVN0cmluZyhvYmopO1xuICAgICAgICAgICAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09IHBhY2tldC50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PSBwYWNrZXQudHlwZSkge1xuICAgICAgICAgICAgICAvLyBiaW5hcnkgcGFja2V0J3MganNvblxuICAgICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpO1xuXG4gICAgICAgICAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICAgICAgICAgIGlmICh0aGlzLnJlY29uc3RydWN0b3IucmVjb25QYWNrLmF0dGFjaG1lbnRzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbm9uLWJpbmFyeSBmdWxsIHBhY2tldFxuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNCdWYob2JqKSB8fCBvYmouYmFzZTY0KSB7XG4gICAgICAgICAgICAvLyByYXcgYmluYXJ5IGRhdGFcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ290IGJpbmFyeSBkYXRhIHdoZW4gbm90IHJlY29uc3RydWN0aW5nIGEgcGFja2V0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYWNrZXQgPSB0aGlzLnJlY29uc3RydWN0b3IudGFrZUJpbmFyeURhdGEob2JqKTtcbiAgICAgICAgICAgICAgaWYgKHBhY2tldCkge1xuICAgICAgICAgICAgICAgIC8vIHJlY2VpdmVkIGZpbmFsIGJ1ZmZlclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdHlwZTogJyArIG9iaik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGUgYSBwYWNrZXQgU3RyaW5nIChKU09OIGRhdGEpXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIGRlY29kZVN0cmluZyhzdHIpIHtcbiAgICAgICAgICB2YXIgcCA9IHt9O1xuICAgICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICAgIC8vIGxvb2sgdXAgdHlwZVxuICAgICAgICAgIHAudHlwZSA9IE51bWJlcihzdHIuY2hhckF0KDApKTtcbiAgICAgICAgICBpZiAobnVsbCA9PSBleHBvcnRzLnR5cGVzW3AudHlwZV0pIHJldHVybiBlcnJvcigpO1xuXG4gICAgICAgICAgLy8gbG9vayB1cCBhdHRhY2htZW50cyBpZiB0eXBlIGJpbmFyeVxuICAgICAgICAgIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PSBwLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09IHAudHlwZSkge1xuICAgICAgICAgICAgdmFyIGJ1ZiA9ICcnO1xuICAgICAgICAgICAgd2hpbGUgKHN0ci5jaGFyQXQoKytpKSAhPSAnLScpIHtcbiAgICAgICAgICAgICAgYnVmICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgIGlmIChpID09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJ1ZiAhPSBOdW1iZXIoYnVmKSB8fCBzdHIuY2hhckF0KGkpICE9ICctJykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXR0YWNobWVudHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuYXR0YWNobWVudHMgPSBOdW1iZXIoYnVmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBsb29rIHVwIG5hbWVzcGFjZSAoaWYgYW55KVxuICAgICAgICAgIGlmICgnLycgPT0gc3RyLmNoYXJBdChpICsgMSkpIHtcbiAgICAgICAgICAgIHAubnNwID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAoKytpKSB7XG4gICAgICAgICAgICAgIHZhciBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgaWYgKCcsJyA9PSBjKSBicmVhaztcbiAgICAgICAgICAgICAgcC5uc3AgKz0gYztcbiAgICAgICAgICAgICAgaWYgKGkgPT0gc3RyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHAubnNwID0gJy8nO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGxvb2sgdXAgaWRcbiAgICAgICAgICB2YXIgbmV4dCA9IHN0ci5jaGFyQXQoaSArIDEpO1xuICAgICAgICAgIGlmICgnJyAhPT0gbmV4dCAmJiBOdW1iZXIobmV4dCkgPT0gbmV4dCkge1xuICAgICAgICAgICAgcC5pZCA9ICcnO1xuICAgICAgICAgICAgd2hpbGUgKCsraSkge1xuICAgICAgICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgIGlmIChudWxsID09IGMgfHwgTnVtYmVyKGMpICE9IGMpIHtcbiAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcC5pZCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICBpZiAoaSA9PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuaWQgPSBOdW1iZXIocC5pZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbG9vayB1cCBqc29uIGRhdGFcbiAgICAgICAgICBpZiAoc3RyLmNoYXJBdCgrK2kpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBwLmRhdGEgPSBqc29uLnBhcnNlKHN0ci5zdWJzdHIoaSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWJ1ZygnZGVjb2RlZCAlcyBhcyAlaicsIHN0ciwgcCk7XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVhbGxvY2F0ZXMgYSBwYXJzZXIncyByZXNvdXJjZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgRGVjb2Rlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBtYW5hZ2VyIG9mIGEgYmluYXJ5IGV2ZW50J3MgJ2J1ZmZlciBzZXF1ZW5jZScuIFNob3VsZFxuICAgICAgICAgKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICAgICAgICAgKiBkZWNvZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gICAgICAgICAqIEByZXR1cm4ge0JpbmFyeVJlY29uc3RydWN0b3J9IGluaXRpYWxpemVkIHJlY29uc3RydWN0b3JcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIEJpbmFyeVJlY29uc3RydWN0b3IocGFja2V0KSB7XG4gICAgICAgICAgdGhpcy5yZWNvblBhY2sgPSBwYWNrZXQ7XG4gICAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGJpbmFyeSBkYXRhIHJlY2VpdmVkIGZyb20gY29ubmVjdGlvblxuICAgICAgICAgKiBhZnRlciBhIEJJTkFSWV9FVkVOVCBwYWNrZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXlCdWZmZXJ9IGJpbkRhdGEgLSB0aGUgcmF3IGJpbmFyeSBkYXRhIHJlY2VpdmVkXG4gICAgICAgICAqIEByZXR1cm4ge251bGwgfCBPYmplY3R9IHJldHVybnMgbnVsbCBpZiBtb3JlIGJpbmFyeSBkYXRhIGlzIGV4cGVjdGVkIG9yXG4gICAgICAgICAqICAgYSByZWNvbnN0cnVjdGVkIHBhY2tldCBvYmplY3QgaWYgYWxsIGJ1ZmZlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgQmluYXJ5UmVjb25zdHJ1Y3Rvci5wcm90b3R5cGUudGFrZUJpbmFyeURhdGEgPSBmdW5jdGlvbiAoYmluRGF0YSkge1xuICAgICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKGJpbkRhdGEpO1xuICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09IHRoaXMucmVjb25QYWNrLmF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICAvLyBkb25lIHdpdGggYnVmZmVyIGxpc3RcbiAgICAgICAgICAgIHZhciBwYWNrZXQgPSBiaW5hcnkucmVjb25zdHJ1Y3RQYWNrZXQodGhpcy5yZWNvblBhY2ssIHRoaXMuYnVmZmVycyk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBwYWNrZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhbnMgdXAgYmluYXJ5IHBhY2tldCByZWNvbnN0cnVjdGlvbiB2YXJpYWJsZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBCaW5hcnlSZWNvbnN0cnVjdG9yLnByb3RvdHlwZS5maW5pc2hlZFJlY29uc3RydWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMucmVjb25QYWNrID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBlcnJvcihkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IGV4cG9ydHMuRVJST1IsXG4gICAgICAgICAgICBkYXRhOiAncGFyc2VyIGVycm9yJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sIHsgXCIuL2JpbmFyeVwiOiA0NiwgXCIuL2lzLWJ1ZmZlclwiOiA0OCwgXCJjb21wb25lbnQtZW1pdHRlclwiOiA0OSwgXCJkZWJ1Z1wiOiAzOSwgXCJpc2FycmF5XCI6IDQzLCBcImpzb24zXCI6IDUwIH1dLCA0ODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcblxuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gaXNCdWY7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgb2JqIGlzIGEgYnVmZmVyIG9yIGFuIGFycmF5YnVmZmVyLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBpc0J1ZihvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWwuQnVmZmVyICYmIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIob2JqKSB8fCBnbG9iYWwuQXJyYXlCdWZmZXIgJiYgb2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwge31dLCA0OTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgYXJndW1lbnRzWzRdWzE1XVswXS5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgfSwgeyBcImR1cFwiOiAxNSB9XSwgNTA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgICAgLyohIEpTT04gdjMuMy4yIHwgaHR0cDovL2Jlc3RpZWpzLmdpdGh1Yi5pby9qc29uMyB8IENvcHlyaWdodCAyMDEyLTIwMTQsIEtpdCBDYW1icmlkZ2UgfCBodHRwOi8va2l0Lm1pdC1saWNlbnNlLm9yZyAqL1xuICAgICAgICAgIDsoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gRGV0ZWN0IHRoZSBgZGVmaW5lYCBmdW5jdGlvbiBleHBvc2VkIGJ5IGFzeW5jaHJvbm91cyBtb2R1bGUgbG9hZGVycy4gVGhlXG4gICAgICAgICAgICAvLyBzdHJpY3QgYGRlZmluZWAgY2hlY2sgaXMgbmVjZXNzYXJ5IGZvciBjb21wYXRpYmlsaXR5IHdpdGggYHIuanNgLlxuICAgICAgICAgICAgdmFyIGlzTG9hZGVyID0gdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQ7XG5cbiAgICAgICAgICAgIC8vIEEgc2V0IG9mIHR5cGVzIHVzZWQgdG8gZGlzdGluZ3Vpc2ggb2JqZWN0cyBmcm9tIHByaW1pdGl2ZXMuXG4gICAgICAgICAgICB2YXIgb2JqZWN0VHlwZXMgPSB7XG4gICAgICAgICAgICAgIFwiZnVuY3Rpb25cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJvYmplY3RcIjogdHJ1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRGV0ZWN0IHRoZSBgZXhwb3J0c2Agb2JqZWN0IGV4cG9zZWQgYnkgQ29tbW9uSlMgaW1wbGVtZW50YXRpb25zLlxuICAgICAgICAgICAgdmFyIGZyZWVFeHBvcnRzID0gb2JqZWN0VHlwZXNbdHlwZW9mIGV4cG9ydHNdICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuICAgICAgICAgICAgLy8gVXNlIHRoZSBgZ2xvYmFsYCBvYmplY3QgZXhwb3NlZCBieSBOb2RlIChpbmNsdWRpbmcgQnJvd3NlcmlmeSB2aWFcbiAgICAgICAgICAgIC8vIGBpbnNlcnQtbW9kdWxlLWdsb2JhbHNgKSwgTmFyd2hhbCwgYW5kIFJpbmdvIGFzIHRoZSBkZWZhdWx0IGNvbnRleHQsXG4gICAgICAgICAgICAvLyBhbmQgdGhlIGB3aW5kb3dgIG9iamVjdCBpbiBicm93c2Vycy4gUmhpbm8gZXhwb3J0cyBhIGBnbG9iYWxgIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBpbnN0ZWFkLlxuICAgICAgICAgICAgdmFyIHJvb3QgPSBvYmplY3RUeXBlc1t0eXBlb2Ygd2luZG93XSAmJiB3aW5kb3cgfHwgdGhpcyxcbiAgICAgICAgICAgICAgICBmcmVlR2xvYmFsID0gZnJlZUV4cG9ydHMgJiYgb2JqZWN0VHlwZXNbdHlwZW9mIG1vZHVsZV0gJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgdHlwZW9mIGdsb2JhbCA9PSBcIm9iamVjdFwiICYmIGdsb2JhbDtcblxuICAgICAgICAgICAgaWYgKGZyZWVHbG9iYWwgJiYgKGZyZWVHbG9iYWxbXCJnbG9iYWxcIl0gPT09IGZyZWVHbG9iYWwgfHwgZnJlZUdsb2JhbFtcIndpbmRvd1wiXSA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsW1wic2VsZlwiXSA9PT0gZnJlZUdsb2JhbCkpIHtcbiAgICAgICAgICAgICAgcm9vdCA9IGZyZWVHbG9iYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFB1YmxpYzogSW5pdGlhbGl6ZXMgSlNPTiAzIHVzaW5nIHRoZSBnaXZlbiBgY29udGV4dGAgb2JqZWN0LCBhdHRhY2hpbmcgdGhlXG4gICAgICAgICAgICAvLyBgc3RyaW5naWZ5YCBhbmQgYHBhcnNlYCBmdW5jdGlvbnMgdG8gdGhlIHNwZWNpZmllZCBgZXhwb3J0c2Agb2JqZWN0LlxuICAgICAgICAgICAgZnVuY3Rpb24gcnVuSW5Db250ZXh0KGNvbnRleHQsIGV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgY29udGV4dCB8fCAoY29udGV4dCA9IHJvb3RbXCJPYmplY3RcIl0oKSk7XG4gICAgICAgICAgICAgIGV4cG9ydHMgfHwgKGV4cG9ydHMgPSByb290W1wiT2JqZWN0XCJdKCkpO1xuXG4gICAgICAgICAgICAgIC8vIE5hdGl2ZSBjb25zdHJ1Y3RvciBhbGlhc2VzLlxuICAgICAgICAgICAgICB2YXIgTnVtYmVyID0gY29udGV4dFtcIk51bWJlclwiXSB8fCByb290W1wiTnVtYmVyXCJdLFxuICAgICAgICAgICAgICAgICAgU3RyaW5nID0gY29udGV4dFtcIlN0cmluZ1wiXSB8fCByb290W1wiU3RyaW5nXCJdLFxuICAgICAgICAgICAgICAgICAgT2JqZWN0ID0gY29udGV4dFtcIk9iamVjdFwiXSB8fCByb290W1wiT2JqZWN0XCJdLFxuICAgICAgICAgICAgICAgICAgRGF0ZSA9IGNvbnRleHRbXCJEYXRlXCJdIHx8IHJvb3RbXCJEYXRlXCJdLFxuICAgICAgICAgICAgICAgICAgU3ludGF4RXJyb3IgPSBjb250ZXh0W1wiU3ludGF4RXJyb3JcIl0gfHwgcm9vdFtcIlN5bnRheEVycm9yXCJdLFxuICAgICAgICAgICAgICAgICAgVHlwZUVycm9yID0gY29udGV4dFtcIlR5cGVFcnJvclwiXSB8fCByb290W1wiVHlwZUVycm9yXCJdLFxuICAgICAgICAgICAgICAgICAgTWF0aCA9IGNvbnRleHRbXCJNYXRoXCJdIHx8IHJvb3RbXCJNYXRoXCJdLFxuICAgICAgICAgICAgICAgICAgbmF0aXZlSlNPTiA9IGNvbnRleHRbXCJKU09OXCJdIHx8IHJvb3RbXCJKU09OXCJdO1xuXG4gICAgICAgICAgICAgIC8vIERlbGVnYXRlIHRvIHRoZSBuYXRpdmUgYHN0cmluZ2lmeWAgYW5kIGBwYXJzZWAgaW1wbGVtZW50YXRpb25zLlxuICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hdGl2ZUpTT04gPT0gXCJvYmplY3RcIiAmJiBuYXRpdmVKU09OKSB7XG4gICAgICAgICAgICAgICAgZXhwb3J0cy5zdHJpbmdpZnkgPSBuYXRpdmVKU09OLnN0cmluZ2lmeTtcbiAgICAgICAgICAgICAgICBleHBvcnRzLnBhcnNlID0gbmF0aXZlSlNPTi5wYXJzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIENvbnZlbmllbmNlIGFsaWFzZXMuXG4gICAgICAgICAgICAgIHZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICBnZXRDbGFzcyA9IG9iamVjdFByb3RvLnRvU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgaXNQcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgIGZvckVhY2gsXG4gICAgICAgICAgICAgICAgICB1bmRlZjtcblxuICAgICAgICAgICAgICAvLyBUZXN0IHRoZSBgRGF0ZSNnZXRVVEMqYCBtZXRob2RzLiBCYXNlZCBvbiB3b3JrIGJ5IEBZYWZmbGUuXG4gICAgICAgICAgICAgIHZhciBpc0V4dGVuZGVkID0gbmV3IERhdGUoLTM1MDk4MjczMzQ1NzMyOTIpO1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBgZ2V0VVRDRnVsbFllYXJgLCBgTW9udGhgLCBhbmQgYERhdGVgIG1ldGhvZHMgcmV0dXJuIG5vbnNlbnNpY2FsXG4gICAgICAgICAgICAgICAgLy8gcmVzdWx0cyBmb3IgY2VydGFpbiBkYXRlcyBpbiBPcGVyYSA+PSAxMC41My5cbiAgICAgICAgICAgICAgICBpc0V4dGVuZGVkID0gaXNFeHRlbmRlZC5nZXRVVENGdWxsWWVhcigpID09IC0xMDkyNTIgJiYgaXNFeHRlbmRlZC5nZXRVVENNb250aCgpID09PSAwICYmIGlzRXh0ZW5kZWQuZ2V0VVRDRGF0ZSgpID09PSAxICYmXG4gICAgICAgICAgICAgICAgLy8gU2FmYXJpIDwgMi4wLjIgc3RvcmVzIHRoZSBpbnRlcm5hbCBtaWxsaXNlY29uZCB0aW1lIHZhbHVlIGNvcnJlY3RseSxcbiAgICAgICAgICAgICAgICAvLyBidXQgY2xpcHMgdGhlIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgZGF0ZSBtZXRob2RzIHRvIHRoZSByYW5nZSBvZlxuICAgICAgICAgICAgICAgIC8vIHNpZ25lZCAzMi1iaXQgaW50ZWdlcnMgKFstMiAqKiAzMSwgMiAqKiAzMSAtIDFdKS5cbiAgICAgICAgICAgICAgICBpc0V4dGVuZGVkLmdldFVUQ0hvdXJzKCkgPT0gMTAgJiYgaXNFeHRlbmRlZC5nZXRVVENNaW51dGVzKCkgPT0gMzcgJiYgaXNFeHRlbmRlZC5nZXRVVENTZWNvbmRzKCkgPT0gNiAmJiBpc0V4dGVuZGVkLmdldFVUQ01pbGxpc2Vjb25kcygpID09IDcwODtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7fVxuXG4gICAgICAgICAgICAgIC8vIEludGVybmFsOiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5hdGl2ZSBgSlNPTi5zdHJpbmdpZnlgIGFuZCBgcGFyc2VgXG4gICAgICAgICAgICAgIC8vIGltcGxlbWVudGF0aW9ucyBhcmUgc3BlYy1jb21wbGlhbnQuIEJhc2VkIG9uIHdvcmsgYnkgS2VuIFNueWRlci5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFzKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzW25hbWVdICE9PSB1bmRlZikge1xuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIGNhY2hlZCBmZWF0dXJlIHRlc3QgcmVzdWx0LlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGlzU3VwcG9ydGVkO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lID09IFwiYnVnLXN0cmluZy1jaGFyLWluZGV4XCIpIHtcbiAgICAgICAgICAgICAgICAgIC8vIElFIDw9IDcgZG9lc24ndCBzdXBwb3J0IGFjY2Vzc2luZyBzdHJpbmcgY2hhcmFjdGVycyB1c2luZyBzcXVhcmVcbiAgICAgICAgICAgICAgICAgIC8vIGJyYWNrZXQgbm90YXRpb24uIElFIDggb25seSBzdXBwb3J0cyB0aGlzIGZvciBwcmltaXRpdmVzLlxuICAgICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWQgPSBcImFcIlswXSAhPSBcImFcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gXCJqc29uXCIpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEluZGljYXRlcyB3aGV0aGVyIGJvdGggYEpTT04uc3RyaW5naWZ5YCBhbmQgYEpTT04ucGFyc2VgIGFyZVxuICAgICAgICAgICAgICAgICAgLy8gc3VwcG9ydGVkLlxuICAgICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWQgPSBoYXMoXCJqc29uLXN0cmluZ2lmeVwiKSAmJiBoYXMoXCJqc29uLXBhcnNlXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZCA9IFwie1xcXCJhXFxcIjpbMSx0cnVlLGZhbHNlLG51bGwsXFxcIlxcXFx1MDAwMFxcXFxiXFxcXG5cXFxcZlxcXFxyXFxcXHRcXFwiXX1cIjtcbiAgICAgICAgICAgICAgICAgIC8vIFRlc3QgYEpTT04uc3RyaW5naWZ5YC5cbiAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09IFwianNvbi1zdHJpbmdpZnlcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyaW5naWZ5ID0gZXhwb3J0cy5zdHJpbmdpZnksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnlTdXBwb3J0ZWQgPSB0eXBlb2Ygc3RyaW5naWZ5ID09IFwiZnVuY3Rpb25cIiAmJiBpc0V4dGVuZGVkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaW5naWZ5U3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gQSB0ZXN0IGZ1bmN0aW9uIG9iamVjdCB3aXRoIGEgY3VzdG9tIGB0b0pTT05gIG1ldGhvZC5cbiAgICAgICAgICAgICAgICAgICAgICAodmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICB9KS50b0pTT04gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5U3VwcG9ydGVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggMy4xYjEgYW5kIGIyIHNlcmlhbGl6ZSBzdHJpbmcsIG51bWJlciwgYW5kIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByaW1pdGl2ZXMgYXMgb2JqZWN0IGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KDApID09PSBcIjBcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRkYgMy4xYjEsIGIyLCBhbmQgSlNPTiAyIHNlcmlhbGl6ZSB3cmFwcGVkIHByaW1pdGl2ZXMgYXMgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZXcgTnVtYmVyKCkpID09PSBcIjBcIiAmJiBzdHJpbmdpZnkobmV3IFN0cmluZygpKSA9PSAnXCJcIicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZGIDMuMWIxLCAyIHRocm93IGFuIGVycm9yIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAsIGB1bmRlZmluZWRgLCBvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9lcyBub3QgZGVmaW5lIGEgY2Fub25pY2FsIEpTT04gcmVwcmVzZW50YXRpb24gKHRoaXMgYXBwbGllcyB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0cyB3aXRoIGB0b0pTT05gIHByb3BlcnRpZXMgYXMgd2VsbCwgKnVubGVzcyogdGhleSBhcmUgbmVzdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoaW4gYW4gb2JqZWN0IG9yIGFycmF5KS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeShnZXRDbGFzcykgPT09IHVuZGVmICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRSA4IHNlcmlhbGl6ZXMgYHVuZGVmaW5lZGAgYXMgYFwidW5kZWZpbmVkXCJgLiBTYWZhcmkgPD0gNS4xLjcgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMyBwYXNzIHRoaXMgdGVzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeSh1bmRlZikgPT09IHVuZGVmICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgPD0gNS4xLjcgYW5kIEZGIDMuMWIzIHRocm93IGBFcnJvcmBzIGFuZCBgVHlwZUVycm9yYHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNwZWN0aXZlbHksIGlmIHRoZSB2YWx1ZSBpcyBvbWl0dGVkIGVudGlyZWx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KCkgPT09IHVuZGVmICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMSwgMiB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgbm90IGEgbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RyaW5nLCBhcnJheSwgb2JqZWN0LCBCb29sZWFuLCBvciBgbnVsbGAgbGl0ZXJhbC4gVGhpcyBhcHBsaWVzIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3RzIHdpdGggY3VzdG9tIGB0b0pTT05gIG1ldGhvZHMgYXMgd2VsbCwgdW5sZXNzIHRoZXkgYXJlIG5lc3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zaWRlIG9iamVjdCBvciBhcnJheSBsaXRlcmFscy4gWVVJIDMuMC4wYjEgaWdub3JlcyBjdXN0b20gYHRvSlNPTmBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ldGhvZHMgZW50aXJlbHkuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnkodmFsdWUpID09PSBcIjFcIiAmJiBzdHJpbmdpZnkoW3ZhbHVlXSkgPT0gXCJbMV1cIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJvdG90eXBlIDw9IDEuNi4xIHNlcmlhbGl6ZXMgYFt1bmRlZmluZWRdYCBhcyBgXCJbXVwiYCBpbnN0ZWFkIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgXCJbbnVsbF1cImAuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnkoW3VuZGVmXSkgPT0gXCJbbnVsbF1cIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWVVJIDMuMC4wYjEgZmFpbHMgdG8gc2VyaWFsaXplIGBudWxsYCBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeShudWxsKSA9PSBcIm51bGxcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRkYgMy4xYjEsIDIgaGFsdHMgc2VyaWFsaXphdGlvbiBpZiBhbiBhcnJheSBjb250YWlucyBhIGZ1bmN0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYFsxLCB0cnVlLCBnZXRDbGFzcywgMV1gIHNlcmlhbGl6ZXMgYXMgXCJbMSx0cnVlLF0sXCIuIEZGIDMuMWIzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbGlkZXMgbm9uLUpTT04gdmFsdWVzIGZyb20gb2JqZWN0cyBhbmQgYXJyYXlzLCB1bmxlc3MgdGhleVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmaW5lIGN1c3RvbSBgdG9KU09OYCBtZXRob2RzLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KFt1bmRlZiwgZ2V0Q2xhc3MsIG51bGxdKSA9PSBcIltudWxsLG51bGwsbnVsbF1cIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltcGxlIHNlcmlhbGl6YXRpb24gdGVzdC4gRkYgMy4xYjEgdXNlcyBVbmljb2RlIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZXJlIGNoYXJhY3RlciBlc2NhcGUgY29kZXMgYXJlIGV4cGVjdGVkIChlLmcuLCBgXFxiYCA9PiBgXFx1MDAwOGApLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KHsgXCJhXCI6IFt2YWx1ZSwgdHJ1ZSwgZmFsc2UsIG51bGwsIFwiXFx4MDBcXGJcXG5cXGZcXHJcXHRcIl0gfSkgPT0gc2VyaWFsaXplZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRkYgMy4xYjEgYW5kIGIyIGlnbm9yZSB0aGUgYGZpbHRlcmAgYW5kIGB3aWR0aGAgYXJndW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KG51bGwsIHZhbHVlKSA9PT0gXCIxXCIgJiYgc3RyaW5naWZ5KFsxLCAyXSwgbnVsbCwgMSkgPT0gXCJbXFxuIDEsXFxuIDJcXG5dXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEpTT04gMiwgUHJvdG90eXBlIDw9IDEuNywgYW5kIG9sZGVyIFdlYktpdCBidWlsZHMgaW5jb3JyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlcmlhbGl6ZSBleHRlbmRlZCB5ZWFycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZXcgRGF0ZSgtOC42NGUxNSkpID09ICdcIi0yNzE4MjEtMDQtMjBUMDA6MDA6MDAuMDAwWlwiJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG1pbGxpc2Vjb25kcyBhcmUgb3B0aW9uYWwgaW4gRVMgNSwgYnV0IHJlcXVpcmVkIGluIDUuMS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZXcgRGF0ZSg4LjY0ZTE1KSkgPT0gJ1wiKzI3NTc2MC0wOS0xM1QwMDowMDowMC4wMDBaXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IDw9IDExLjAgaW5jb3JyZWN0bHkgc2VyaWFsaXplcyB5ZWFycyBwcmlvciB0byAwIGFzIG5lZ2F0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3VyLWRpZ2l0IHllYXJzIGluc3RlYWQgb2Ygc2l4LWRpZ2l0IHllYXJzLiBDcmVkaXRzOiBAWWFmZmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KG5ldyBEYXRlKC02MjE5ODc1NTJlNSkpID09ICdcIi0wMDAwMDEtMDEtMDFUMDA6MDA6MDAuMDAwWlwiJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2FmYXJpIDw9IDUuMS41IGFuZCBPcGVyYSA+PSAxMC41MyBpbmNvcnJlY3RseSBzZXJpYWxpemUgbWlsbGlzZWNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlcyBsZXNzIHRoYW4gMTAwMC4gQ3JlZGl0czogQFlhZmZsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZXcgRGF0ZSgtMSkpID09ICdcIjE5NjktMTItMzFUMjM6NTk6NTkuOTk5WlwiJztcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZCA9IHN0cmluZ2lmeVN1cHBvcnRlZDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIFRlc3QgYEpTT04ucGFyc2VgLlxuICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJqc29uLXBhcnNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnNlID0gZXhwb3J0cy5wYXJzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRkYgMy4xYjEsIGIyIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGEgYmFyZSBsaXRlcmFsIGlzIHByb3ZpZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29uZm9ybWluZyBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGFsc28gY29lcmNlIHRoZSBpbml0aWFsIGFyZ3VtZW50IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIHN0cmluZyBwcmlvciB0byBwYXJzaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlKFwiMFwiKSA9PT0gMCAmJiAhcGFyc2UoZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXBsZSBwYXJzaW5nIHRlc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyc2Uoc2VyaWFsaXplZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJzZVN1cHBvcnRlZCA9IHZhbHVlW1wiYVwiXS5sZW5ndGggPT0gNSAmJiB2YWx1ZVtcImFcIl1bMF0gPT09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgPD0gNS4xLjIgYW5kIEZGIDMuMWIxIGFsbG93IHVuZXNjYXBlZCB0YWJzIGluIHN0cmluZ3MuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZVN1cHBvcnRlZCA9ICFwYXJzZSgnXCJcXHRcIicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZGIDQuMCBhbmQgNC4wLjEgYWxsb3cgbGVhZGluZyBgK2Agc2lnbnMgYW5kIGxlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVjaW1hbCBwb2ludHMuIEZGIDQuMCwgNC4wLjEsIGFuZCBJRSA5LTEwIGFsc28gYWxsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2VydGFpbiBvY3RhbCBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VTdXBwb3J0ZWQgPSBwYXJzZShcIjAxXCIpICE9PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZGIDQuMCwgNC4wLjEsIGFuZCBSaGlubyAxLjdSMy1SNCBhbGxvdyB0cmFpbGluZyBkZWNpbWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvaW50cy4gVGhlc2UgZW52aXJvbm1lbnRzLCBhbG9uZyB3aXRoIEZGIDMuMWIxIGFuZCAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHNvIGFsbG93IHRyYWlsaW5nIGNvbW1hcyBpbiBKU09OIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VTdXBwb3J0ZWQgPSBwYXJzZShcIjEuXCIpICE9PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWQgPSBwYXJzZVN1cHBvcnRlZDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1tuYW1lXSA9ICEhaXNTdXBwb3J0ZWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWhhcyhcImpzb25cIikpIHtcbiAgICAgICAgICAgICAgICAvLyBDb21tb24gYFtbQ2xhc3NdXWAgbmFtZSBhbGlhc2VzLlxuICAgICAgICAgICAgICAgIHZhciBmdW5jdGlvbkNsYXNzID0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRlQ2xhc3MgPSBcIltvYmplY3QgRGF0ZV1cIixcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyQ2xhc3MgPSBcIltvYmplY3QgTnVtYmVyXVwiLFxuICAgICAgICAgICAgICAgICAgICBzdHJpbmdDbGFzcyA9IFwiW29iamVjdCBTdHJpbmddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5Q2xhc3MgPSBcIltvYmplY3QgQXJyYXldXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvb2xlYW5DbGFzcyA9IFwiW29iamVjdCBCb29sZWFuXVwiO1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGluY29tcGxldGUgc3VwcG9ydCBmb3IgYWNjZXNzaW5nIHN0cmluZyBjaGFyYWN0ZXJzIGJ5IGluZGV4LlxuICAgICAgICAgICAgICAgIHZhciBjaGFySW5kZXhCdWdneSA9IGhhcyhcImJ1Zy1zdHJpbmctY2hhci1pbmRleFwiKTtcblxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBhZGRpdGlvbmFsIHV0aWxpdHkgbWV0aG9kcyBpZiB0aGUgYERhdGVgIG1ldGhvZHMgYXJlIGJ1Z2d5LlxuICAgICAgICAgICAgICAgIGlmICghaXNFeHRlbmRlZCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICAgICAgICAgICAgICAgIC8vIEEgbWFwcGluZyBiZXR3ZWVuIHRoZSBtb250aHMgb2YgdGhlIHllYXIgYW5kIHRoZSBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuXG4gICAgICAgICAgICAgICAgICAvLyBKYW51YXJ5IDFzdCBhbmQgdGhlIGZpcnN0IG9mIHRoZSByZXNwZWN0aXZlIG1vbnRoLlxuICAgICAgICAgICAgICAgICAgdmFyIE1vbnRocyA9IFswLCAzMSwgNTksIDkwLCAxMjAsIDE1MSwgMTgxLCAyMTIsIDI0MywgMjczLCAzMDQsIDMzNF07XG4gICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIGRheXMgYmV0d2VlbiB0aGUgVW5peCBlcG9jaCBhbmQgdGhlXG4gICAgICAgICAgICAgICAgICAvLyBmaXJzdCBkYXkgb2YgdGhlIGdpdmVuIG1vbnRoLlxuICAgICAgICAgICAgICAgICAgdmFyIGdldERheSA9IGZ1bmN0aW9uIGdldERheSh5ZWFyLCBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTW9udGhzW21vbnRoXSArIDM2NSAqICh5ZWFyIC0gMTk3MCkgKyBmbG9vcigoeWVhciAtIDE5NjkgKyAobW9udGggPSArKG1vbnRoID4gMSkpKSAvIDQpIC0gZmxvb3IoKHllYXIgLSAxOTAxICsgbW9udGgpIC8gMTAwKSArIGZsb29yKCh5ZWFyIC0gMTYwMSArIG1vbnRoKSAvIDQwMCk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBEZXRlcm1pbmVzIGlmIGEgcHJvcGVydHkgaXMgYSBkaXJlY3QgcHJvcGVydHkgb2YgdGhlIGdpdmVuXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0LiBEZWxlZ2F0ZXMgdG8gdGhlIG5hdGl2ZSBgT2JqZWN0I2hhc093blByb3BlcnR5YCBtZXRob2QuXG4gICAgICAgICAgICAgICAgaWYgKCEoaXNQcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgaXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWVtYmVycyA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIGlmICgobWVtYmVycy5fX3Byb3RvX18gPSBudWxsLCBtZW1iZXJzLl9fcHJvdG9fXyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgKnByb3RvKiBwcm9wZXJ0eSBjYW5ub3QgYmUgc2V0IG11bHRpcGxlIHRpbWVzIGluIHJlY2VudFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHZlcnNpb25zIG9mIEZpcmVmb3ggYW5kIFNlYU1vbmtleS5cbiAgICAgICAgICAgICAgICAgICAgICBcInRvU3RyaW5nXCI6IDFcbiAgICAgICAgICAgICAgICAgICAgfSwgbWVtYmVycykudG9TdHJpbmcgIT0gZ2V0Q2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgPD0gMi4wLjMgZG9lc24ndCBpbXBsZW1lbnQgYE9iamVjdCNoYXNPd25Qcm9wZXJ0eWAsIGJ1dFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHN1cHBvcnRzIHRoZSBtdXRhYmxlICpwcm90byogcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgICAgICAgaXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSBhbmQgYnJlYWsgdGhlIG9iamVjdCdzIHByb3RvdHlwZSBjaGFpbiAoc2VlIHNlY3Rpb24gOC42LjJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIHRoZSBFUyA1LjEgc3BlYykuIFRoZSBwYXJlbnRoZXNpemVkIGV4cHJlc3Npb24gcHJldmVudHMgYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVuc2FmZSB0cmFuc2Zvcm1hdGlvbiBieSB0aGUgQ2xvc3VyZSBDb21waWxlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9IHRoaXMuX19wcm90b19fLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChwcm9wZXJ0eSBpbiAodGhpcy5fX3Byb3RvX18gPSBudWxsLCB0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBwcm90b3R5cGUgY2hhaW4uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcHJvdG9fXyA9IG9yaWdpbmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIENhcHR1cmUgYSByZWZlcmVuY2UgdG8gdGhlIHRvcC1sZXZlbCBgT2JqZWN0YCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvciA9IG1lbWJlcnMuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBgY29uc3RydWN0b3JgIHByb3BlcnR5IHRvIHNpbXVsYXRlIGBPYmplY3QjaGFzT3duUHJvcGVydHlgIGluXG4gICAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXIgZW52aXJvbm1lbnRzLlxuICAgICAgICAgICAgICAgICAgICAgIGlzUHJvcGVydHkgPSBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSAodGhpcy5jb25zdHJ1Y3RvciB8fCBjb25zdHJ1Y3RvcikucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5IGluIHRoaXMgJiYgIShwcm9wZXJ0eSBpbiBwYXJlbnQgJiYgdGhpc1twcm9wZXJ0eV0gPT09IHBhcmVudFtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWVtYmVycyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1Byb3BlcnR5LmNhbGwodGhpcywgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogTm9ybWFsaXplcyB0aGUgYGZvci4uLmluYCBpdGVyYXRpb24gYWxnb3JpdGhtIGFjcm9zc1xuICAgICAgICAgICAgICAgIC8vIGVudmlyb25tZW50cy4gRWFjaCBlbnVtZXJhdGVkIGtleSBpcyB5aWVsZGVkIHRvIGEgYGNhbGxiYWNrYCBmdW5jdGlvbi5cbiAgICAgICAgICAgICAgICBmb3JFYWNoID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFRlc3RzIGZvciBidWdzIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50J3MgYGZvci4uLmluYCBhbGdvcml0aG0uIFRoZVxuICAgICAgICAgICAgICAgICAgLy8gYHZhbHVlT2ZgIHByb3BlcnR5IGluaGVyaXRzIHRoZSBub24tZW51bWVyYWJsZSBmbGFnIGZyb21cbiAgICAgICAgICAgICAgICAgIC8vIGBPYmplY3QucHJvdG90eXBlYCBpbiBvbGRlciB2ZXJzaW9ucyBvZiBJRSwgTmV0c2NhcGUsIGFuZCBNb3ppbGxhLlxuICAgICAgICAgICAgICAgICAgKFByb3BlcnRpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVPZiA9IDA7XG4gICAgICAgICAgICAgICAgICB9KS5wcm90b3R5cGUudmFsdWVPZiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgYFByb3BlcnRpZXNgIGNsYXNzLlxuICAgICAgICAgICAgICAgICAgbWVtYmVycyA9IG5ldyBQcm9wZXJ0aWVzKCk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHByb3BlcnR5IGluIG1lbWJlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGFsbCBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUHJvcGVydHkuY2FsbChtZW1iZXJzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzaXplKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFByb3BlcnRpZXMgPSBtZW1iZXJzID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBpdGVyYXRpb24gYWxnb3JpdGhtLlxuICAgICAgICAgICAgICAgICAgaWYgKCFzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEEgbGlzdCBvZiBub24tZW51bWVyYWJsZSBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC5cbiAgICAgICAgICAgICAgICAgICAgbWVtYmVycyA9IFtcInZhbHVlT2ZcIiwgXCJ0b1N0cmluZ1wiLCBcInRvTG9jYWxlU3RyaW5nXCIsIFwicHJvcGVydHlJc0VudW1lcmFibGVcIiwgXCJpc1Byb3RvdHlwZU9mXCIsIFwiaGFzT3duUHJvcGVydHlcIiwgXCJjb25zdHJ1Y3RvclwiXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSUUgPD0gOCwgTW96aWxsYSAxLjAsIGFuZCBOZXRzY2FwZSA2LjIgaWdub3JlIHNoYWRvd2VkIG5vbi1lbnVtZXJhYmxlXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb3BlcnRpZXMuXG4gICAgICAgICAgICAgICAgICAgIGZvckVhY2ggPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0Z1bmN0aW9uID0gZ2V0Q2xhc3MuY2FsbChvYmplY3QpID09IGZ1bmN0aW9uQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc1Byb3BlcnR5ID0gIWlzRnVuY3Rpb24gJiYgdHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciAhPSBcImZ1bmN0aW9uXCIgJiYgb2JqZWN0VHlwZXNbdHlwZW9mIG9iamVjdC5oYXNPd25Qcm9wZXJ0eV0gJiYgb2JqZWN0Lmhhc093blByb3BlcnR5IHx8IGlzUHJvcGVydHk7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlY2tvIDw9IDEuMCBlbnVtZXJhdGVzIHRoZSBgcHJvdG90eXBlYCBwcm9wZXJ0eSBvZiBmdW5jdGlvbnMgdW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNlcnRhaW4gY29uZGl0aW9uczsgSUUgZG9lcyBub3QuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShpc0Z1bmN0aW9uICYmIHByb3BlcnR5ID09IFwicHJvdG90eXBlXCIpICYmIGhhc1Byb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBNYW51YWxseSBpbnZva2UgdGhlIGNhbGxiYWNrIGZvciBlYWNoIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5LlxuICAgICAgICAgICAgICAgICAgICAgIGZvciAobGVuZ3RoID0gbWVtYmVycy5sZW5ndGg7IHByb3BlcnR5ID0gbWVtYmVyc1stLWxlbmd0aF07IGhhc1Byb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkgJiYgY2FsbGJhY2socHJvcGVydHkpKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8PSAyLjAuNCBlbnVtZXJhdGVzIHNoYWRvd2VkIHByb3BlcnRpZXMgdHdpY2UuXG4gICAgICAgICAgICAgICAgICAgIGZvckVhY2ggPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHNldCBvZiBpdGVyYXRlZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgICAgICAgICAgIHZhciBtZW1iZXJzID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRnVuY3Rpb24gPSBnZXRDbGFzcy5jYWxsKG9iamVjdCkgPT0gZnVuY3Rpb25DbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIGVhY2ggcHJvcGVydHkgbmFtZSB0byBwcmV2ZW50IGRvdWJsZSBlbnVtZXJhdGlvbi4gVGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgcHJvdG90eXBlYCBwcm9wZXJ0eSBvZiBmdW5jdGlvbnMgaXMgbm90IGVudW1lcmF0ZWQgZHVlIHRvIGNyb3NzLVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW52aXJvbm1lbnQgaW5jb25zaXN0ZW5jaWVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaXNGdW5jdGlvbiAmJiBwcm9wZXJ0eSA9PSBcInByb3RvdHlwZVwiKSAmJiAhaXNQcm9wZXJ0eS5jYWxsKG1lbWJlcnMsIHByb3BlcnR5KSAmJiAobWVtYmVyc1twcm9wZXJ0eV0gPSAxKSAmJiBpc1Byb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGJ1Z3MgZGV0ZWN0ZWQ7IHVzZSB0aGUgc3RhbmRhcmQgYGZvci4uLmluYCBhbGdvcml0aG0uXG4gICAgICAgICAgICAgICAgICAgIGZvckVhY2ggPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0Z1bmN0aW9uID0gZ2V0Q2xhc3MuY2FsbChvYmplY3QpID09IGZ1bmN0aW9uQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShpc0Z1bmN0aW9uICYmIHByb3BlcnR5ID09IFwicHJvdG90eXBlXCIpICYmIGlzUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSAmJiAhKGlzQ29uc3RydWN0b3IgPSBwcm9wZXJ0eSA9PT0gXCJjb25zdHJ1Y3RvclwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIE1hbnVhbGx5IGludm9rZSB0aGUgY2FsbGJhY2sgZm9yIHRoZSBgY29uc3RydWN0b3JgIHByb3BlcnR5IGR1ZSB0b1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNyb3NzLWVudmlyb25tZW50IGluY29uc2lzdGVuY2llcy5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb25zdHJ1Y3RvciB8fCBpc1Byb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSA9IFwiY29uc3RydWN0b3JcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm9yRWFjaChvYmplY3QsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gUHVibGljOiBTZXJpYWxpemVzIGEgSmF2YVNjcmlwdCBgdmFsdWVgIGFzIGEgSlNPTiBzdHJpbmcuIFRoZSBvcHRpb25hbFxuICAgICAgICAgICAgICAgIC8vIGBmaWx0ZXJgIGFyZ3VtZW50IG1heSBzcGVjaWZ5IGVpdGhlciBhIGZ1bmN0aW9uIHRoYXQgYWx0ZXJzIGhvdyBvYmplY3QgYW5kXG4gICAgICAgICAgICAgICAgLy8gYXJyYXkgbWVtYmVycyBhcmUgc2VyaWFsaXplZCwgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQgbnVtYmVycyB0aGF0XG4gICAgICAgICAgICAgICAgLy8gaW5kaWNhdGVzIHdoaWNoIHByb3BlcnRpZXMgc2hvdWxkIGJlIHNlcmlhbGl6ZWQuIFRoZSBvcHRpb25hbCBgd2lkdGhgXG4gICAgICAgICAgICAgICAgLy8gYXJndW1lbnQgbWF5IGJlIGVpdGhlciBhIHN0cmluZyBvciBudW1iZXIgdGhhdCBzcGVjaWZpZXMgdGhlIGluZGVudGF0aW9uXG4gICAgICAgICAgICAgICAgLy8gbGV2ZWwgb2YgdGhlIG91dHB1dC5cbiAgICAgICAgICAgICAgICBpZiAoIWhhcyhcImpzb24tc3RyaW5naWZ5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogQSBtYXAgb2YgY29udHJvbCBjaGFyYWN0ZXJzIGFuZCB0aGVpciBlc2NhcGVkIGVxdWl2YWxlbnRzLlxuICAgICAgICAgICAgICAgICAgdmFyIEVzY2FwZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIDkyOiBcIlxcXFxcXFxcXCIsXG4gICAgICAgICAgICAgICAgICAgIDM0OiAnXFxcXFwiJyxcbiAgICAgICAgICAgICAgICAgICAgODogXCJcXFxcYlwiLFxuICAgICAgICAgICAgICAgICAgICAxMjogXCJcXFxcZlwiLFxuICAgICAgICAgICAgICAgICAgICAxMDogXCJcXFxcblwiLFxuICAgICAgICAgICAgICAgICAgICAxMzogXCJcXFxcclwiLFxuICAgICAgICAgICAgICAgICAgICA5OiBcIlxcXFx0XCJcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBDb252ZXJ0cyBgdmFsdWVgIGludG8gYSB6ZXJvLXBhZGRlZCBzdHJpbmcgc3VjaCB0aGF0IGl0c1xuICAgICAgICAgICAgICAgICAgLy8gbGVuZ3RoIGlzIGF0IGxlYXN0IGVxdWFsIHRvIGB3aWR0aGAuIFRoZSBgd2lkdGhgIG11c3QgYmUgPD0gNi5cbiAgICAgICAgICAgICAgICAgIHZhciBsZWFkaW5nWmVyb2VzID0gXCIwMDAwMDBcIjtcbiAgICAgICAgICAgICAgICAgIHZhciB0b1BhZGRlZFN0cmluZyA9IGZ1bmN0aW9uIHRvUGFkZGVkU3RyaW5nKHdpZHRoLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYHx8IDBgIGV4cHJlc3Npb24gaXMgbmVjZXNzYXJ5IHRvIHdvcmsgYXJvdW5kIGEgYnVnIGluXG4gICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIDw9IDcuNTR1MiB3aGVyZSBgMCA9PSAtMGAsIGJ1dCBgU3RyaW5nKC0wKSAhPT0gXCIwXCJgLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGxlYWRpbmdaZXJvZXMgKyAodmFsdWUgfHwgMCkpLnNsaWNlKC13aWR0aCk7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogRG91YmxlLXF1b3RlcyBhIHN0cmluZyBgdmFsdWVgLCByZXBsYWNpbmcgYWxsIEFTQ0lJIGNvbnRyb2xcbiAgICAgICAgICAgICAgICAgIC8vIGNoYXJhY3RlcnMgKGNoYXJhY3RlcnMgd2l0aCBjb2RlIHVuaXQgdmFsdWVzIGJldHdlZW4gMCBhbmQgMzEpIHdpdGhcbiAgICAgICAgICAgICAgICAgIC8vIHRoZWlyIGVzY2FwZWQgZXF1aXZhbGVudHMuIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlXG4gICAgICAgICAgICAgICAgICAvLyBgUXVvdGUodmFsdWUpYCBvcGVyYXRpb24gZGVmaW5lZCBpbiBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLlxuICAgICAgICAgICAgICAgICAgdmFyIHVuaWNvZGVQcmVmaXggPSBcIlxcXFx1MDBcIjtcbiAgICAgICAgICAgICAgICAgIHZhciBxdW90ZSA9IGZ1bmN0aW9uIHF1b3RlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAnXCInLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlQ2hhckluZGV4ID0gIWNoYXJJbmRleEJ1Z2d5IHx8IGxlbmd0aCA+IDEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9scyA9IHVzZUNoYXJJbmRleCAmJiAoY2hhckluZGV4QnVnZ3kgPyB2YWx1ZS5zcGxpdChcIlwiKSA6IHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJDb2RlID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNoYXJhY3RlciBpcyBhIGNvbnRyb2wgY2hhcmFjdGVyLCBhcHBlbmQgaXRzIFVuaWNvZGUgb3JcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzaG9ydGhhbmQgZXNjYXBlIHNlcXVlbmNlOyBvdGhlcndpc2UsIGFwcGVuZCB0aGUgY2hhcmFjdGVyIGFzLWlzLlxuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpjYXNlIDk6Y2FzZSAxMDpjYXNlIDEyOmNhc2UgMTM6Y2FzZSAzNDpjYXNlIDkyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gRXNjYXBlc1tjaGFyQ29kZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlIDwgMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gdW5pY29kZVByZWZpeCArIHRvUGFkZGVkU3RyaW5nKDIsIGNoYXJDb2RlLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHVzZUNoYXJJbmRleCA/IHN5bWJvbHNbaW5kZXhdIDogdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArICdcIic7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogUmVjdXJzaXZlbHkgc2VyaWFsaXplcyBhbiBvYmplY3QuIEltcGxlbWVudHMgdGhlXG4gICAgICAgICAgICAgICAgICAvLyBgU3RyKGtleSwgaG9sZGVyKWAsIGBKTyh2YWx1ZSlgLCBhbmQgYEpBKHZhbHVlKWAgb3BlcmF0aW9ucy5cbiAgICAgICAgICAgICAgICAgIHZhciBzZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUocHJvcGVydHksIG9iamVjdCwgY2FsbGJhY2ssIHByb3BlcnRpZXMsIHdoaXRlc3BhY2UsIGluZGVudGF0aW9uLCBzdGFjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUsIGNsYXNzTmFtZSwgeWVhciwgbW9udGgsIGRhdGUsIHRpbWUsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHMsIHJlc3VsdHMsIGVsZW1lbnQsIGluZGV4LCBsZW5ndGgsIHByZWZpeCwgcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIE5lY2Vzc2FyeSBmb3IgaG9zdCBvYmplY3Qgc3VwcG9ydC5cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge31cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2V0Q2xhc3MuY2FsbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSBkYXRlQ2xhc3MgJiYgIWlzUHJvcGVydHkuY2FsbCh2YWx1ZSwgXCJ0b0pTT05cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IC0xIC8gMCAmJiB2YWx1ZSA8IDEgLyAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGVzIGFyZSBzZXJpYWxpemVkIGFjY29yZGluZyB0byB0aGUgYERhdGUjdG9KU09OYCBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3BlY2lmaWVkIGluIEVTIDUuMSBzZWN0aW9uIDE1LjkuNS40NC4gU2VlIHNlY3Rpb24gMTUuOS4xLjE1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciB0aGUgSVNPIDg2MDEgZGF0ZSB0aW1lIHN0cmluZyBmb3JtYXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXREYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNYW51YWxseSBjb21wdXRlIHRoZSB5ZWFyLCBtb250aCwgZGF0ZSwgaG91cnMsIG1pbnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Vjb25kcywgYW5kIG1pbGxpc2Vjb25kcyBpZiB0aGUgYGdldFVUQypgIG1ldGhvZHMgYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnVnZ3kuIEFkYXB0ZWQgZnJvbSBAWWFmZmxlJ3MgYGRhdGUtc2hpbWAgcHJvamVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gZmxvb3IodmFsdWUgLyA4NjRlNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh5ZWFyID0gZmxvb3IoZGF0ZSAvIDM2NS4yNDI1KSArIDE5NzAgLSAxOyBnZXREYXkoeWVhciArIDEsIDApIDw9IGRhdGU7IHllYXIrKyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChtb250aCA9IGZsb29yKChkYXRlIC0gZ2V0RGF5KHllYXIsIDApKSAvIDMwLjQyKTsgZ2V0RGF5KHllYXIsIG1vbnRoICsgMSkgPD0gZGF0ZTsgbW9udGgrKyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IDEgKyBkYXRlIC0gZ2V0RGF5KHllYXIsIG1vbnRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYHRpbWVgIHZhbHVlIHNwZWNpZmllcyB0aGUgdGltZSB3aXRoaW4gdGhlIGRheSAoc2VlIEVTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNS4xIHNlY3Rpb24gMTUuOS4xLjIpLiBUaGUgZm9ybXVsYSBgKEEgJSBCICsgQikgJSBCYCBpcyB1c2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gY29tcHV0ZSBgQSBtb2R1bG8gQmAsIGFzIHRoZSBgJWAgb3BlcmF0b3IgZG9lcyBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3JyZXNwb25kIHRvIHRoZSBgbW9kdWxvYCBvcGVyYXRpb24gZm9yIG5lZ2F0aXZlIG51bWJlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9ICh2YWx1ZSAlIDg2NGU1ICsgODY0ZTUpICUgODY0ZTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbmQgbWlsbGlzZWNvbmRzIGFyZSBvYnRhaW5lZCBieVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlY29tcG9zaW5nIHRoZSB0aW1lIHdpdGhpbiB0aGUgZGF5LiBTZWUgc2VjdGlvbiAxNS45LjEuMTAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPSBmbG9vcih0aW1lIC8gMzZlNSkgJSAyNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gZmxvb3IodGltZSAvIDZlNCkgJSA2MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gZmxvb3IodGltZSAvIDFlMykgJSA2MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWxsaXNlY29uZHMgPSB0aW1lICUgMWUzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXIgPSB2YWx1ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gdmFsdWUuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gdmFsdWUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gdmFsdWUuZ2V0VVRDSG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gdmFsdWUuZ2V0VVRDTWludXRlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSB2YWx1ZS5nZXRVVENTZWNvbmRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlsbGlzZWNvbmRzID0gdmFsdWUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VyaWFsaXplIGV4dGVuZGVkIHllYXJzIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAoeWVhciA8PSAwIHx8IHllYXIgPj0gMWU0ID8gKHllYXIgPCAwID8gXCItXCIgOiBcIitcIikgKyB0b1BhZGRlZFN0cmluZyg2LCB5ZWFyIDwgMCA/IC15ZWFyIDogeWVhcikgOiB0b1BhZGRlZFN0cmluZyg0LCB5ZWFyKSkgKyBcIi1cIiArIHRvUGFkZGVkU3RyaW5nKDIsIG1vbnRoICsgMSkgKyBcIi1cIiArIHRvUGFkZGVkU3RyaW5nKDIsIGRhdGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW9udGhzLCBkYXRlcywgaG91cnMsIG1pbnV0ZXMsIGFuZCBzZWNvbmRzIHNob3VsZCBoYXZlIHR3b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaWdpdHM7IG1pbGxpc2Vjb25kcyBzaG91bGQgaGF2ZSB0aHJlZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUXCIgKyB0b1BhZGRlZFN0cmluZygyLCBob3VycykgKyBcIjpcIiArIHRvUGFkZGVkU3RyaW5nKDIsIG1pbnV0ZXMpICsgXCI6XCIgKyB0b1BhZGRlZFN0cmluZygyLCBzZWNvbmRzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1pbGxpc2Vjb25kcyBhcmUgb3B0aW9uYWwgaW4gRVMgNS4wLCBidXQgcmVxdWlyZWQgaW4gNS4xLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi5cIiArIHRvUGFkZGVkU3RyaW5nKDMsIG1pbGxpc2Vjb25kcykgKyBcIlpcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZS50b0pTT04gPT0gXCJmdW5jdGlvblwiICYmIChjbGFzc05hbWUgIT0gbnVtYmVyQ2xhc3MgJiYgY2xhc3NOYW1lICE9IHN0cmluZ0NsYXNzICYmIGNsYXNzTmFtZSAhPSBhcnJheUNsYXNzIHx8IGlzUHJvcGVydHkuY2FsbCh2YWx1ZSwgXCJ0b0pTT05cIikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm90b3R5cGUgPD0gMS42LjEgYWRkcyBub24tc3RhbmRhcmQgYHRvSlNPTmAgbWV0aG9kcyB0byB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBOdW1iZXJgLCBgU3RyaW5nYCwgYERhdGVgLCBhbmQgYEFycmF5YCBwcm90b3R5cGVzLiBKU09OIDNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZXMgYWxsIGB0b0pTT05gIG1ldGhvZHMgb24gdGhlc2Ugb2JqZWN0cyB1bmxlc3MgdGhleSBhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmluZWQgZGlyZWN0bHkgb24gYW4gaW5zdGFuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTihwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGEgcmVwbGFjZW1lbnQgZnVuY3Rpb24gd2FzIHByb3ZpZGVkLCBjYWxsIGl0IHRvIG9idGFpbiB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmb3Igc2VyaWFsaXphdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrLmNhbGwob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBnZXRDbGFzcy5jYWxsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSBib29sZWFuQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBCb29sZWFucyBhcmUgcmVwcmVzZW50ZWQgbGl0ZXJhbGx5LlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09IG51bWJlckNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSlNPTiBudW1iZXJzIG11c3QgYmUgZmluaXRlLiBgSW5maW5pdHlgIGFuZCBgTmFOYCBhcmUgc2VyaWFsaXplZCBhc1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGBcIm51bGxcImAuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gLTEgLyAwICYmIHZhbHVlIDwgMSAvIDAgPyBcIlwiICsgdmFsdWUgOiBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT0gc3RyaW5nQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBTdHJpbmdzIGFyZSBkb3VibGUtcXVvdGVkIGFuZCBlc2NhcGVkLlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBxdW90ZShcIlwiICsgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhpcyBpcyBhIGxpbmVhciBzZWFyY2g7IHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mIHVuaXF1ZSBuZXN0ZWQgb2JqZWN0cy5cbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxlbmd0aCA9IHN0YWNrLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbbGVuZ3RoXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3ljbGljIHN0cnVjdHVyZXMgY2Fubm90IGJlIHNlcmlhbGl6ZWQgYnkgYEpTT04uc3RyaW5naWZ5YC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBpbmRlbnRhdGlvbiBsZXZlbCBhbmQgaW5kZW50IG9uZSBhZGRpdGlvbmFsIGxldmVsLlxuICAgICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IGluZGVudGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgIGluZGVudGF0aW9uICs9IHdoaXRlc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSBhcnJheUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBzZXJpYWxpemUgYXJyYXkgZWxlbWVudHMuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdmFsdWUubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gc2VyaWFsaXplKGluZGV4LCB2YWx1ZSwgY2FsbGJhY2ssIHByb3BlcnRpZXMsIHdoaXRlc3BhY2UsIGluZGVudGF0aW9uLCBzdGFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChlbGVtZW50ID09PSB1bmRlZiA/IFwibnVsbFwiIDogZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRzLmxlbmd0aCA/IHdoaXRlc3BhY2UgPyBcIltcXG5cIiArIGluZGVudGF0aW9uICsgcmVzdWx0cy5qb2luKFwiLFxcblwiICsgaW5kZW50YXRpb24pICsgXCJcXG5cIiArIHByZWZpeCArIFwiXVwiIDogXCJbXCIgKyByZXN1bHRzLmpvaW4oXCIsXCIpICsgXCJdXCIgOiBcIltdXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZSBvYmplY3QgbWVtYmVycy4gTWVtYmVycyBhcmUgc2VsZWN0ZWQgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWl0aGVyIGEgdXNlci1zcGVjaWZpZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcywgb3IgdGhlIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXRzZWxmLlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yRWFjaChwcm9wZXJ0aWVzIHx8IHZhbHVlLCBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzZXJpYWxpemUocHJvcGVydHksIHZhbHVlLCBjYWxsYmFjaywgcHJvcGVydGllcywgd2hpdGVzcGFjZSwgaW5kZW50YXRpb24sIHN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHVuZGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWNjb3JkaW5nIHRvIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjM6IFwiSWYgYGdhcGAge3doaXRlc3BhY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgbm90IHRoZSBlbXB0eSBzdHJpbmcsIGxldCBgbWVtYmVyYCB7cXVvdGUocHJvcGVydHkpICsgXCI6XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmUgdGhlIGNvbmNhdGVuYXRpb24gb2YgYG1lbWJlcmAgYW5kIHRoZSBgc3BhY2VgIGNoYXJhY3Rlci5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBcImBzcGFjZWAgY2hhcmFjdGVyXCIgcmVmZXJzIHRvIHRoZSBsaXRlcmFsIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hhcmFjdGVyLCBub3QgdGhlIGBzcGFjZWAge3dpZHRofSBhcmd1bWVudCBwcm92aWRlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBKU09OLnN0cmluZ2lmeWAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHF1b3RlKHByb3BlcnR5KSArIFwiOlwiICsgKHdoaXRlc3BhY2UgPyBcIiBcIiA6IFwiXCIpICsgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0cy5sZW5ndGggPyB3aGl0ZXNwYWNlID8gXCJ7XFxuXCIgKyBpbmRlbnRhdGlvbiArIHJlc3VsdHMuam9pbihcIixcXG5cIiArIGluZGVudGF0aW9uKSArIFwiXFxuXCIgKyBwcmVmaXggKyBcIn1cIiA6IFwie1wiICsgcmVzdWx0cy5qb2luKFwiLFwiKSArIFwifVwiIDogXCJ7fVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG9iamVjdCBmcm9tIHRoZSB0cmF2ZXJzZWQgb2JqZWN0IHN0YWNrLlxuICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIC8vIFB1YmxpYzogYEpTT04uc3RyaW5naWZ5YC4gU2VlIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMuXG4gICAgICAgICAgICAgICAgICBleHBvcnRzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChzb3VyY2UsIGZpbHRlciwgd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdoaXRlc3BhY2UsIGNhbGxiYWNrLCBwcm9wZXJ0aWVzLCBjbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3RUeXBlc1t0eXBlb2YgZmlsdGVyXSAmJiBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNsYXNzTmFtZSA9IGdldENsYXNzLmNhbGwoZmlsdGVyKSkgPT0gZnVuY3Rpb25DbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmaWx0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT0gYXJyYXlDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgcHJvcGVydHkgbmFtZXMgYXJyYXkgaW50byBhIG1ha2VzaGlmdCBzZXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGZpbHRlci5sZW5ndGgsIHZhbHVlOyBpbmRleCA8IGxlbmd0aDsgdmFsdWUgPSBmaWx0ZXJbaW5kZXgrK10sIChjbGFzc05hbWUgPSBnZXRDbGFzcy5jYWxsKHZhbHVlKSwgY2xhc3NOYW1lID09IHN0cmluZ0NsYXNzIHx8IGNsYXNzTmFtZSA9PSBudW1iZXJDbGFzcykgJiYgKHByb3BlcnRpZXNbdmFsdWVdID0gMSkpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNsYXNzTmFtZSA9IGdldENsYXNzLmNhbGwod2lkdGgpKSA9PSBudW1iZXJDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgYHdpZHRoYCB0byBhbiBpbnRlZ2VyIGFuZCBjcmVhdGUgYSBzdHJpbmcgY29udGFpbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYHdpZHRoYCBudW1iZXIgb2Ygc3BhY2UgY2hhcmFjdGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgod2lkdGggLT0gd2lkdGggJSAxKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh3aGl0ZXNwYWNlID0gXCJcIiwgd2lkdGggPiAxMCAmJiAod2lkdGggPSAxMCk7IHdoaXRlc3BhY2UubGVuZ3RoIDwgd2lkdGg7IHdoaXRlc3BhY2UgKz0gXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09IHN0cmluZ0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlID0gd2lkdGgubGVuZ3RoIDw9IDEwID8gd2lkdGggOiB3aWR0aC5zbGljZSgwLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIDw9IDcuNTR1MiBkaXNjYXJkcyB0aGUgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCBlbXB0eSBzdHJpbmcga2V5c1xuICAgICAgICAgICAgICAgICAgICAvLyAoYFwiXCJgKSBvbmx5IGlmIHRoZXkgYXJlIHVzZWQgZGlyZWN0bHkgd2l0aGluIGFuIG9iamVjdCBtZW1iZXIgbGlzdFxuICAgICAgICAgICAgICAgICAgICAvLyAoZS5nLiwgYCEoXCJcIiBpbiB7IFwiXCI6IDF9KWApLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplKFwiXCIsICh2YWx1ZSA9IHt9LCB2YWx1ZVtcIlwiXSA9IHNvdXJjZSwgdmFsdWUpLCBjYWxsYmFjaywgcHJvcGVydGllcywgd2hpdGVzcGFjZSwgXCJcIiwgW10pO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQdWJsaWM6IFBhcnNlcyBhIEpTT04gc291cmNlIHN0cmluZy5cbiAgICAgICAgICAgICAgICBpZiAoIWhhcyhcImpzb24tcGFyc2VcIikpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuXG4gICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogQSBtYXAgb2YgZXNjYXBlZCBjb250cm9sIGNoYXJhY3RlcnMgYW5kIHRoZWlyIHVuZXNjYXBlZFxuICAgICAgICAgICAgICAgICAgLy8gZXF1aXZhbGVudHMuXG4gICAgICAgICAgICAgICAgICB2YXIgVW5lc2NhcGVzID0ge1xuICAgICAgICAgICAgICAgICAgICA5MjogXCJcXFxcXCIsXG4gICAgICAgICAgICAgICAgICAgIDM0OiAnXCInLFxuICAgICAgICAgICAgICAgICAgICA0NzogXCIvXCIsXG4gICAgICAgICAgICAgICAgICAgIDk4OiBcIlxcYlwiLFxuICAgICAgICAgICAgICAgICAgICAxMTY6IFwiXFx0XCIsXG4gICAgICAgICAgICAgICAgICAgIDExMDogXCJcXG5cIixcbiAgICAgICAgICAgICAgICAgICAgMTAyOiBcIlxcZlwiLFxuICAgICAgICAgICAgICAgICAgICAxMTQ6IFwiXFxyXCJcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBTdG9yZXMgdGhlIHBhcnNlciBzdGF0ZS5cbiAgICAgICAgICAgICAgICAgIHZhciBJbmRleCwgU291cmNlO1xuXG4gICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogUmVzZXRzIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHRocm93cyBhIGBTeW50YXhFcnJvcmAuXG4gICAgICAgICAgICAgICAgICB2YXIgYWJvcnQgPSBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgICAgICAgICAgICAgICAgSW5kZXggPSBTb3VyY2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBTeW50YXhFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWw6IFJldHVybnMgdGhlIG5leHQgdG9rZW4sIG9yIGBcIiRcImAgaWYgdGhlIHBhcnNlciBoYXMgcmVhY2hlZFxuICAgICAgICAgICAgICAgICAgLy8gdGhlIGVuZCBvZiB0aGUgc291cmNlIHN0cmluZy4gQSB0b2tlbiBtYXkgYmUgYSBzdHJpbmcsIG51bWJlciwgYG51bGxgXG4gICAgICAgICAgICAgICAgICAvLyBsaXRlcmFsLCBvciBCb29sZWFuIGxpdGVyYWwuXG4gICAgICAgICAgICAgICAgICB2YXIgbGV4ID0gZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gU291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhckNvZGU7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChJbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpjYXNlIDEwOmNhc2UgMTM6Y2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB3aGl0ZXNwYWNlIHRva2VucywgaW5jbHVkaW5nIHRhYnMsIGNhcnJpYWdlIHJldHVybnMsIGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmVlZHMsIGFuZCBzcGFjZSBjaGFyYWN0ZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTIzOmNhc2UgMTI1OmNhc2UgOTE6Y2FzZSA5MzpjYXNlIDU4OmNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIGEgcHVuY3R1YXRvciB0b2tlbiAoYHtgLCBgfWAsIGBbYCwgYF1gLCBgOmAsIG9yIGAsYCkgYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY2hhckluZGV4QnVnZ3kgPyBzb3VyY2UuY2hhckF0KEluZGV4KSA6IHNvdXJjZVtJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBcImAgZGVsaW1pdHMgYSBKU09OIHN0cmluZzsgYWR2YW5jZSB0byB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlZ2luIHBhcnNpbmcgdGhlIHN0cmluZy4gU3RyaW5nIHRva2VucyBhcmUgcHJlZml4ZWQgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VudGluZWwgYEBgIGNoYXJhY3RlciB0byBkaXN0aW5ndWlzaCB0aGVtIGZyb20gcHVuY3R1YXRvcnMgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuZC1vZi1zdHJpbmcgdG9rZW5zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhbHVlID0gXCJAXCIsIEluZGV4Kys7IEluZGV4IDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA8IDMyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmVzY2FwZWQgQVNDSUkgY29udHJvbCBjaGFyYWN0ZXJzICh0aG9zZSB3aXRoIGEgY29kZSB1bml0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIHNwYWNlIGNoYXJhY3RlcikgYXJlIG5vdCBwZXJtaXR0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhckNvZGUgPT0gOTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgcmV2ZXJzZSBzb2xpZHVzIChgXFxgKSBtYXJrcyB0aGUgYmVnaW5uaW5nIG9mIGFuIGVzY2FwZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRyb2wgY2hhcmFjdGVyIChpbmNsdWRpbmcgYFwiYCwgYFxcYCwgYW5kIGAvYCkgb3IgVW5pY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNjYXBlIHNlcXVlbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdCgrK0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5MjpjYXNlIDM0OmNhc2UgNDc6Y2FzZSA5ODpjYXNlIDExNjpjYXNlIDExMDpjYXNlIDEwMjpjYXNlIDExNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXZpdmUgZXNjYXBlZCBjb250cm9sIGNoYXJhY3RlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gVW5lc2NhcGVzW2NoYXJDb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBgXFx1YCBtYXJrcyB0aGUgYmVnaW5uaW5nIG9mIGEgVW5pY29kZSBlc2NhcGUgc2VxdWVuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWR2YW5jZSB0byB0aGUgZmlyc3QgY2hhcmFjdGVyIGFuZCB2YWxpZGF0ZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3VyLWRpZ2l0IGNvZGUgcG9pbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW4gPSArK0luZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocG9zaXRpb24gPSBJbmRleCArIDQ7IEluZGV4IDwgcG9zaXRpb247IEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSB2YWxpZCBzZXF1ZW5jZSBjb21wcmlzZXMgZm91ciBoZXhkaWdpdHMgKGNhc2UtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNlbnNpdGl2ZSkgdGhhdCBmb3JtIGEgc2luZ2xlIGhleGFkZWNpbWFsIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY2hhckNvZGUgPj0gNDggJiYgY2hhckNvZGUgPD0gNTcgfHwgY2hhckNvZGUgPj0gOTcgJiYgY2hhckNvZGUgPD0gMTAyIHx8IGNoYXJDb2RlID49IDY1ICYmIGNoYXJDb2RlIDw9IDcwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnZhbGlkIFVuaWNvZGUgZXNjYXBlIHNlcXVlbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXZpdmUgdGhlIGVzY2FwZWQgY2hhcmFjdGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IGZyb21DaGFyQ29kZShcIjB4XCIgKyBzb3VyY2Uuc2xpY2UoYmVnaW4sIEluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW52YWxpZCBlc2NhcGUgc2VxdWVuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlID09IDM0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFuIHVuZXNjYXBlZCBkb3VibGUtcXVvdGUgY2hhcmFjdGVyIG1hcmtzIHRoZSBlbmQgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0cmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luID0gSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcHRpbWl6ZSBmb3IgdGhlIGNvbW1vbiBjYXNlIHdoZXJlIGEgc3RyaW5nIGlzIHZhbGlkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNoYXJDb2RlID49IDMyICYmIGNoYXJDb2RlICE9IDkyICYmIGNoYXJDb2RlICE9IDM0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoKytJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHN0cmluZyBhcy1pcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHNvdXJjZS5zbGljZShiZWdpbiwgSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpID09IDM0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWR2YW5jZSB0byB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIHJldHVybiB0aGUgcmV2aXZlZCBzdHJpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW50ZXJtaW5hdGVkIHN0cmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIG51bWJlcnMgYW5kIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbiA9IEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZHZhbmNlIHBhc3QgdGhlIG5lZ2F0aXZlIHNpZ24sIGlmIG9uZSBpcyBzcGVjaWZpZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA9PSA0NSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KCsrSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIGFuIGludGVnZXIgb3IgZmxvYXRpbmctcG9pbnQgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1Nykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlYWRpbmcgemVyb2VzIGFyZSBpbnRlcnByZXRlZCBhcyBvY3RhbCBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPT0gNDggJiYgKGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXggKyAxKSwgY2hhckNvZGUgPj0gNDggJiYgY2hhckNvZGUgPD0gNTcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbGxlZ2FsIG9jdGFsIGxpdGVyYWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NpZ25lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBpbnRlZ2VyIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgSW5kZXggPCBsZW5ndGggJiYgKGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpLCBjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1Nyk7IEluZGV4KyspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZsb2F0cyBjYW5ub3QgY29udGFpbiBhIGxlYWRpbmcgZGVjaW1hbCBwb2ludDsgaG93ZXZlciwgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgaXMgYWxyZWFkeSBhY2NvdW50ZWQgZm9yIGJ5IHRoZSBwYXJzZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5jaGFyQ29kZUF0KEluZGV4KSA9PSA0Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSArK0luZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgdGhlIGRlY2ltYWwgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IHBvc2l0aW9uIDwgbGVuZ3RoICYmIChjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KHBvc2l0aW9uKSwgY2hhckNvZGUgPj0gNDggJiYgY2hhckNvZGUgPD0gNTcpOyBwb3NpdGlvbisrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbGxlZ2FsIHRyYWlsaW5nIGRlY2ltYWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRleCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSBleHBvbmVudHMuIFRoZSBgZWAgZGVub3RpbmcgdGhlIGV4cG9uZW50IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZS1pbnNlbnNpdGl2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPT0gMTAxIHx8IGNoYXJDb2RlID09IDY5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KCsrSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCBwYXN0IHRoZSBzaWduIGZvbGxvd2luZyB0aGUgZXhwb25lbnQsIGlmIG9uZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3BlY2lmaWVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlID09IDQzIHx8IGNoYXJDb2RlID09IDQ1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSB0aGUgZXhwb25lbnRpYWwgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwb3NpdGlvbiA9IEluZGV4OyBwb3NpdGlvbiA8IGxlbmd0aCAmJiAoY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChwb3NpdGlvbiksIGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3KTsgcG9zaXRpb24rKyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPT0gSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWxsZWdhbCBlbXB0eSBleHBvbmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvZXJjZSB0aGUgcGFyc2VkIHZhbHVlIHRvIGEgSmF2YVNjcmlwdCBudW1iZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICtzb3VyY2Uuc2xpY2UoYmVnaW4sIEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBIG5lZ2F0aXZlIHNpZ24gbWF5IG9ubHkgcHJlY2VkZSBudW1iZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTaWduZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGB0cnVlYCwgYGZhbHNlYCwgYW5kIGBudWxsYCBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5zbGljZShJbmRleCwgSW5kZXggKyA0KSA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlLnNsaWNlKEluZGV4LCBJbmRleCArIDUpID09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4ICs9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS5zbGljZShJbmRleCwgSW5kZXggKyA0KSA9PSBcIm51bGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5yZWNvZ25pemVkIHRva2VuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHNlbnRpbmVsIGAkYCBjaGFyYWN0ZXIgaWYgdGhlIHBhcnNlciBoYXMgcmVhY2hlZCB0aGUgZW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIHRoZSBzb3VyY2Ugc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCI7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogUGFyc2VzIGEgSlNPTiBgdmFsdWVgIHRva2VuLlxuICAgICAgICAgICAgICAgICAgdmFyIGdldCA9IGZ1bmN0aW9uIGdldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cywgaGFzTWVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiJFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gVW5leHBlY3RlZCBlbmQgb2YgaW5wdXQuXG4gICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNoYXJJbmRleEJ1Z2d5ID8gdmFsdWUuY2hhckF0KDApIDogdmFsdWVbMF0pID09IFwiQFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHNlbnRpbmVsIGBAYCBjaGFyYWN0ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIG9iamVjdCBhbmQgYXJyYXkgbGl0ZXJhbHMuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiW1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZXMgYSBKU09OIGFycmF5LCByZXR1cm5pbmcgYSBuZXcgSmF2YVNjcmlwdCBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOzsgaGFzTWVtYmVycyB8fCAoaGFzTWVtYmVycyA9IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgY2xvc2luZyBzcXVhcmUgYnJhY2tldCBtYXJrcyB0aGUgZW5kIG9mIHRoZSBhcnJheSBsaXRlcmFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCJdXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgYXJyYXkgbGl0ZXJhbCBjb250YWlucyBlbGVtZW50cywgdGhlIGN1cnJlbnQgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGEgY29tbWEgc2VwYXJhdGluZyB0aGUgcHJldmlvdXMgZWxlbWVudCBmcm9tIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzTWVtYmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIixcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIl1cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmV4cGVjdGVkIHRyYWlsaW5nIGAsYCBpbiBhcnJheSBsaXRlcmFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBIGAsYCBtdXN0IHNlcGFyYXRlIGVhY2ggYXJyYXkgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVsaXNpb25zIGFuZCBsZWFkaW5nIGNvbW1hcyBhcmUgbm90IHBlcm1pdHRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiLFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZ2V0KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IFwie1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZXMgYSBKU09OIG9iamVjdCwgcmV0dXJuaW5nIGEgbmV3IEphdmFTY3JpcHQgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7OyBoYXNNZW1iZXJzIHx8IChoYXNNZW1iZXJzID0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSBjbG9zaW5nIGN1cmx5IGJyYWNlIG1hcmtzIHRoZSBlbmQgb2YgdGhlIG9iamVjdCBsaXRlcmFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCJ9XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGxpdGVyYWwgY29udGFpbnMgbWVtYmVycywgdGhlIGN1cnJlbnQgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGEgY29tbWEgc2VwYXJhdG9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzTWVtYmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIixcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIn1cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmV4cGVjdGVkIHRyYWlsaW5nIGAsYCBpbiBvYmplY3QgbGl0ZXJhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSBgLGAgbXVzdCBzZXBhcmF0ZSBlYWNoIG9iamVjdCBtZW1iZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMZWFkaW5nIGNvbW1hcyBhcmUgbm90IHBlcm1pdHRlZCwgb2JqZWN0IHByb3BlcnR5IG5hbWVzIG11c3QgYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG91YmxlLXF1b3RlZCBzdHJpbmdzLCBhbmQgYSBgOmAgbXVzdCBzZXBhcmF0ZSBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hbWUgYW5kIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCIsXCIgfHwgdHlwZW9mIHZhbHVlICE9IFwic3RyaW5nXCIgfHwgKGNoYXJJbmRleEJ1Z2d5ID8gdmFsdWUuY2hhckF0KDApIDogdmFsdWVbMF0pICE9IFwiQFwiIHx8IGxleCgpICE9IFwiOlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzW3ZhbHVlLnNsaWNlKDEpXSA9IGdldChsZXgoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gVW5leHBlY3RlZCB0b2tlbiBlbmNvdW50ZXJlZC5cbiAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBVcGRhdGVzIGEgdHJhdmVyc2VkIG9iamVjdCBtZW1iZXIuXG4gICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHNvdXJjZSwgcHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gd2Fsayhzb3VyY2UsIHByb3BlcnR5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB1bmRlZikge1xuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2VbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVtwcm9wZXJ0eV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogUmVjdXJzaXZlbHkgdHJhdmVyc2VzIGEgcGFyc2VkIEpTT04gb2JqZWN0LCBpbnZva2luZyB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIGBjYWxsYmFja2AgZnVuY3Rpb24gZm9yIGVhY2ggdmFsdWUuIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlXG4gICAgICAgICAgICAgICAgICAvLyBgV2Fsayhob2xkZXIsIG5hbWUpYCBvcGVyYXRpb24gZGVmaW5lZCBpbiBFUyA1LjEgc2VjdGlvbiAxNS4xMi4yLlxuICAgICAgICAgICAgICAgICAgdmFyIHdhbGsgPSBmdW5jdGlvbiB3YWxrKHNvdXJjZSwgcHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIiAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGBmb3JFYWNoYCBjYW4ndCBiZSB1c2VkIHRvIHRyYXZlcnNlIGFuIGFycmF5IGluIE9wZXJhIDw9IDguNTRcbiAgICAgICAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIGl0cyBgT2JqZWN0I2hhc093blByb3BlcnR5YCBpbXBsZW1lbnRhdGlvbiByZXR1cm5zIGBmYWxzZWBcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgYXJyYXkgaW5kaWNlcyAoZS5nLiwgYCFbMSwgMiwgM10uaGFzT3duUHJvcGVydHkoXCIwXCIpYCkuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGdldENsYXNzLmNhbGwodmFsdWUpID09IGFycmF5Q2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGVuZ3RoID0gdmFsdWUubGVuZ3RoOyBsZW5ndGgtLTspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKHZhbHVlLCBsZW5ndGgsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSh2YWx1ZSwgcHJvcGVydHksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbChzb3VyY2UsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAvLyBQdWJsaWM6IGBKU09OLnBhcnNlYC4gU2VlIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjIuXG4gICAgICAgICAgICAgICAgICBleHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCwgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgU291cmNlID0gXCJcIiArIHNvdXJjZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZ2V0KGxleCgpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSBKU09OIHN0cmluZyBjb250YWlucyBtdWx0aXBsZSB0b2tlbnMsIGl0IGlzIGludmFsaWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXgoKSAhPSBcIiRcIikge1xuICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHBhcnNlciBzdGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgSW5kZXggPSBTb3VyY2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sgJiYgZ2V0Q2xhc3MuY2FsbChjYWxsYmFjaykgPT0gZnVuY3Rpb25DbGFzcyA/IHdhbGsoKHZhbHVlID0ge30sIHZhbHVlW1wiXCJdID0gcmVzdWx0LCB2YWx1ZSksIFwiXCIsIGNhbGxiYWNrKSA6IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZXhwb3J0c1tcInJ1bkluQ29udGV4dFwiXSA9IHJ1bkluQ29udGV4dDtcbiAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmcmVlRXhwb3J0cyAmJiAhaXNMb2FkZXIpIHtcbiAgICAgICAgICAgICAgLy8gRXhwb3J0IGZvciBDb21tb25KUyBlbnZpcm9ubWVudHMuXG4gICAgICAgICAgICAgIHJ1bkluQ29udGV4dChyb290LCBmcmVlRXhwb3J0cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBFeHBvcnQgZm9yIHdlYiBicm93c2VycyBhbmQgSmF2YVNjcmlwdCBlbmdpbmVzLlxuICAgICAgICAgICAgICB2YXIgbmF0aXZlSlNPTiA9IHJvb3QuSlNPTixcbiAgICAgICAgICAgICAgICAgIHByZXZpb3VzSlNPTiA9IHJvb3RbXCJKU09OM1wiXSxcbiAgICAgICAgICAgICAgICAgIGlzUmVzdG9yZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICB2YXIgSlNPTjMgPSBydW5JbkNvbnRleHQocm9vdCwgcm9vdFtcIkpTT04zXCJdID0ge1xuICAgICAgICAgICAgICAgIC8vIFB1YmxpYzogUmVzdG9yZXMgdGhlIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSBnbG9iYWwgYEpTT05gIG9iamVjdCBhbmRcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBgSlNPTjNgIG9iamVjdC5cbiAgICAgICAgICAgICAgICBcIm5vQ29uZmxpY3RcIjogZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghaXNSZXN0b3JlZCkge1xuICAgICAgICAgICAgICAgICAgICBpc1Jlc3RvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5KU09OID0gbmF0aXZlSlNPTjtcbiAgICAgICAgICAgICAgICAgICAgcm9vdFtcIkpTT04zXCJdID0gcHJldmlvdXNKU09OO1xuICAgICAgICAgICAgICAgICAgICBuYXRpdmVKU09OID0gcHJldmlvdXNKU09OID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJvb3QuSlNPTiA9IHtcbiAgICAgICAgICAgICAgICBcInBhcnNlXCI6IEpTT04zLnBhcnNlLFxuICAgICAgICAgICAgICAgIFwic3RyaW5naWZ5XCI6IEpTT04zLnN0cmluZ2lmeVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFeHBvcnQgZm9yIGFzeW5jaHJvbm91cyBtb2R1bGUgbG9hZGVycy5cbiAgICAgICAgICAgIGlmIChpc0xvYWRlcikge1xuICAgICAgICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OMztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgICAgfSkuY2FsbCh0aGlzLCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgICAgIH0sIHt9XSwgNTE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gdG9BcnJheTtcblxuICAgICAgICBmdW5jdGlvbiB0b0FycmF5KGxpc3QsIGluZGV4KSB7XG4gICAgICAgICAgdmFyIGFycmF5ID0gW107XG5cbiAgICAgICAgICBpbmRleCA9IGluZGV4IHx8IDA7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gaW5kZXggfHwgMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5W2kgLSBpbmRleF0gPSBsaXN0W2ldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuICAgICAgfSwge31dIH0sIHt9LCBbMzFdKSgzMSk7XG4gIH0pO1xufVxuXG5jYy5fUkZwb3AoKTsiXX0=
