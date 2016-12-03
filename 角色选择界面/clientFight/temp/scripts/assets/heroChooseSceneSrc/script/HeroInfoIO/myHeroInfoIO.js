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