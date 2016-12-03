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