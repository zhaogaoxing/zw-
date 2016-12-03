require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myHeadTexture":[function(require,module,exports){
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
},{}],"myHeroTexture":[function(require,module,exports){
"use strict";
cc._RFpush(module, '7d5956psSdLmJQKsr6YeInG', 'myHeroTexture');
// heroChooseSceneSrc\script\HeroTexture\myHeroTexture.js

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

    show: function show(frameIndex) {
        var anim = this.getComponent(cc.Animation);
        console.log('角色选择界面第' + (frameIndex + 1) + "角色动画初始化中");
        anim.stop();
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
},{"socket.io":"socket.io"}],"myUserNameInput":[function(require,module,exports){
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

},{}]},{},["socket.io","myUserNameInput","myLogin","myPasswordInput","myHeroInfoIO","myServer_01","myMsgBox","myHeroTexture","mySocketIO","myHeadTexture"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6L3poYW9nYW94aW5nL2NvY29zY3JlYXRvci9Db2Nvc0NyZWF0b3IvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvaGVyb0Nob29zZVNjZW5lU3JjL3NjcmlwdC9IZWFkVGV4dHVyZS9teUhlYWRUZXh0dXJlLmpzIiwiYXNzZXRzL2hlcm9DaG9vc2VTY2VuZVNyYy9zY3JpcHQvSGVyb0luZm9JTy9teUhlcm9JbmZvSU8uanMiLCJhc3NldHMvaGVyb0Nob29zZVNjZW5lU3JjL3NjcmlwdC9IZXJvVGV4dHVyZS9teUhlcm9UZXh0dXJlLmpzIiwiYXNzZXRzL2xvZ2luU2NlbmVTcmMvc2NyaXB0L2xvZ2luL215TG9naW4uanMiLCJhc3NldHMvbXNnQm94U3JjL3NjcmlwdC9teU1zZ0JveC5qcyIsImFzc2V0cy9sb2dpblNjZW5lU3JjL3NjcmlwdC9FZGl0Qm94L215UGFzc3dvcmRJbnB1dC5qcyIsImFzc2V0cy9zZXJ2ZXJTY2VuZVNyYy9zY3JpcHQvbXlTZXJ2ZXJfMDEuanMiLCJhc3NldHMvbG9naW5TY2VuZVNyYy9zY3JpcHQvbG9naW4vbXlTb2NrZXRJTy5qcyIsImFzc2V0cy9sb2dpblNjZW5lU3JjL3NjcmlwdC9FZGl0Qm94L215VXNlck5hbWVJbnB1dC5qcyIsImFzc2V0cy9sb2dpblNjZW5lU3JjL3NjcmlwdC9sb2dpbi9zb2NrZXQuaW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdmZWM0OGpZd0N0TFdxQmdETHlPMVBZdCcsICdteUhlYWRUZXh0dXJlJyk7XG4vLyBoZXJvQ2hvb3NlU2NlbmVTcmNcXHNjcmlwdFxcSGVhZFRleHR1cmVcXG15SGVhZFRleHR1cmUuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBoZWFkVGV4dHVyZXM6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIHNob3c6IGZ1bmN0aW9uIHNob3coZnJhbWVJbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZygn56ysJyArIChmcmFtZUluZGV4ICsgMSkgKyAn5Liq5aS05YOP5Yid5aeL5YyW5LitJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWRUZXh0dXJlcyk7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmhlYWRUZXh0dXJlc1tmcmFtZUluZGV4XTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0NWNhZVBYdUZSQkZaS3hVMXFzSkthSCcsICdteUhlcm9JbmZvSU8nKTtcbi8vIGhlcm9DaG9vc2VTY2VuZVNyY1xcc2NyaXB0XFxIZXJvSW5mb0lPXFxteUhlcm9JbmZvSU8uanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgc2hvdzogZnVuY3Rpb24gc2hvdyhoZXJvSW5mbykge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGhlcm9JbmZvW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBsaW5lID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpdGVtIGluIGxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSArICcgJyArIGxpbmVbaXRlbV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gLy8gZm9yKHZhciBpdGVtIG9mIHRoaXMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgLy8gICAgIHZhciBzdWJDaGlsZCA9IGl0ZW0uZ2V0Q2hpbGRyZW4oKTtcbiAgICAgICAgICAgIC8vICAgICBmb3IodmFyIGl0ZW0yIG9mIHN1YkNoaWxkKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coaXRlbTIpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvclsncmV0dXJuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yWydyZXR1cm4nXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBoZXJvSW5mby5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBoZXJvSW5mb0l0ZW0gPSBoZXJvSW5mb1tpbmRleF07XG4gICAgICAgICAgICB2YXIgY2hpbGRJbmZvSXRlbSA9IHRoaXMuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGlsZEluZm9JdGVtWydoZXJvTmFtZV8wJysoaW5kZXgrMSldKTtcblxuICAgICAgICAgICAgY2hpbGRJbmZvSXRlbS5nZXRDaGlsZEJ5TmFtZSgnaGVyb05hbWVfMCcgKyAoaW5kZXggKyAxKSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBoZXJvSW5mb0l0ZW1bJ2hlcm9OYW1lJ107XG4gICAgICAgICAgICBjaGlsZEluZm9JdGVtLmdldENoaWxkQnlOYW1lKCdoZXJvTGV2ZWxfMCcgKyAoaW5kZXggKyAxKSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBoZXJvSW5mb0l0ZW1bJ2hlcm9MZXZlbCddO1xuICAgICAgICAgICAgY2hpbGRJbmZvSXRlbS5nZXRDaGlsZEJ5TmFtZSgncHJvZmVzc2lvbl8wJyArIChpbmRleCArIDEpKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGhlcm9JbmZvSXRlbVsncHJvZmVzc2lvbiddO1xuICAgICAgICAgICAgY2hpbGRJbmZvSXRlbS5nZXRDaGlsZEJ5TmFtZSgnbG9naW5UaW1lc18wJyArIChpbmRleCArIDEpKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGhlcm9JbmZvSXRlbVsnbG9naW5UaW1lcyddO1xuXG4gICAgICAgICAgICBjaGlsZEluZm9JdGVtLmdldENoaWxkQnlOYW1lKCdoZXJvVGV4dHVyZV8wJyArIChpbmRleCArIDEpKS5nZXRDb21wb25lbnQoJ215SGVyb1RleHR1cmUnKS5zaG93KGhlcm9JbmZvSXRlbVsnaGVyb1RleHR1cmUnXSk7XG4gICAgICAgICAgICBjaGlsZEluZm9JdGVtLmdldENoaWxkQnlOYW1lKCdoZWFkVGV4dHVyZV8wJyArIChpbmRleCArIDEpKS5nZXRDb21wb25lbnQoJ215SGVhZFRleHR1cmUnKS5zaG93KGhlcm9JbmZvSXRlbVsnaGVhZFRleHR1cmUnXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMubm9kZS5nZXRDaGlsZHJlbigpO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgd2luZG93LnNvY2tldC5vbignaGVyb0Nob29zZScsIGZ1bmN0aW9uIChoZXJvSW5mbykge1xuICAgICAgICAgICAgaWYgKGhlcm9JbmZvKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaGVyb0luZm8pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm9uZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5zaG93KGhlcm9JbmZvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnNvY2tldC5lbWl0KCdoZXJvQ2hvb3NlJyk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnN2Q1OTU2cHNTZExtSlFLc3I2WWVJbkcnLCAnbXlIZXJvVGV4dHVyZScpO1xuLy8gaGVyb0Nob29zZVNjZW5lU3JjXFxzY3JpcHRcXEhlcm9UZXh0dXJlXFxteUhlcm9UZXh0dXJlLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KGZyYW1lSW5kZXgpIHtcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZygn6KeS6Imy6YCJ5oup55WM6Z2i56ysJyArIChmcmFtZUluZGV4ICsgMSkgKyBcIuinkuiJsuWKqOeUu+WIneWni+WMluS4rVwiKTtcbiAgICAgICAgYW5pbS5zdG9wKCk7XG4gICAgICAgIGFuaW0ucGxheSgnd2Fsa18nICsgZnJhbWVJbmRleCArICdfNScpO1xuICAgIH1cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczNWY0ODROK1gxSnNhTkVXSkFyT0xCRycsICdteUxvZ2luJyk7XG4vLyBsb2dpblNjZW5lU3JjXFxzY3JpcHRcXGxvZ2luXFxteUxvZ2luLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gc2VydmVyRmVlZGJhY2sgOiB7XG4gICAgICAgIC8vICAgICBkZWZhdWx0IDogbnVsbCxcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAvLyB9LFxuXG4gICAgICAgIG1zZ0JveDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIHVzZXJOYW1lSW5wdXQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkSW5wdXQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3JUZXh0OiAn55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vJyxcbiAgICAgICAgZW1wdHlUZXh0OiAn55So5oi35ZCN5oiW5a+G56CB5LiN6IO95Li656m6J1xuICAgIH0sXG5cbiAgICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KHVzZXJOYW1lLCBwYXNzd29yZCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2cocGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICh1c2VyTmFtZSA9PSAnJyB8fCBwYXNzd29yZCA9PSAnJykgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh1c2VyTmFtZVswXSA9PSAn6K+3JykgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgZ2V0VXNlck5hbWU6IGZ1bmN0aW9uIGdldFVzZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyTmFtZUlucHV0LnN0cmluZztcbiAgICB9LFxuXG4gICAgZ2V0UGFzc3dvcmQ6IGZ1bmN0aW9uIGdldFBhc3N3b3JkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXNzd29yZElucHV0LmdldENvbXBvbmVudCgnbXlQYXNzd29yZElucHV0JykucGFzc3dvcmRUZXh0O1xuICAgIH0sXG5cbiAgICBsb2dpbjogZnVuY3Rpb24gbG9naW4oKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0aGlzLmdldFVzZXJOYW1lKCksIHRoaXMuZ2V0UGFzc3dvcmQoKSkpIHtcbiAgICAgICAgICAgIHRoaXMubXNnQm94SGFuZGxlci5wcmVBdXRvSGlkZSh0aGlzLmVtcHR5VGV4dCk7XG4gICAgICAgICAgICAvL3RoaXMuc2VydmVyRmVlZGJhY2suc3RyaW5nID0gdGhpcy5lbXB0eVRleHQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdsb2dpbicsIHtcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdGhpcy5nZXRVc2VyTmFtZSgpLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmdldFBhc3N3b3JkKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuXG4gICAgICAgIHRoaXMubXNnQm94SGFuZGxlciA9IHRoaXMubXNnQm94LmdldENvbXBvbmVudCgnbXlNc2dCb3gnKTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc29ja2V0Lm9uKCdsb2dpbicsIGZ1bmN0aW9uIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2MpO1xuXG4gICAgICAgICAgICAgICAgLy9zZWxmLnNlcnZlckZlZWRiYWNrLnN0cmluZyA9ICcnO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc2VydmVyU2NlbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zZWxmLnNlcnZlckZlZWRiYWNrLnN0cmluZyA9IHNlbGYuZXJyb3JUZXh0O1xuICAgICAgICAgICAgICAgIHNlbGYubXNnQm94SGFuZGxlci5wcmVBdXRvSGlkZShzZWxmLmVycm9yVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzY3YjgzRDE2Y2RJaHBaMkJCSkxkTnI2JywgJ215TXNnQm94Jyk7XG4vLyBtc2dCb3hTcmNcXHNjcmlwdFxcbXlNc2dCb3guanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBtc2c6IHtcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5tc2cgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21zZycpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXNnLnN0cmluZyk7XG4gICAgfSxcblxuICAgIHByZVNob3c6IGZ1bmN0aW9uIHByZVNob3cobXNnKSB7XG4gICAgICAgIHRoaXMubXNnLnN0cmluZyA9IG1zZztcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgncHJlU2hvdycpO1xuICAgIH0sXG5cbiAgICBwcmVBdXRvSGlkZTogZnVuY3Rpb24gcHJlQXV0b0hpZGUobXNnKSB7XG4gICAgICAgIHRoaXMubXNnLnN0cmluZyA9IG1zZztcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgncHJlQXV0b0hpZGUnKTtcbiAgICB9LFxuXG4gICAgcG9zdFNob3c6IGZ1bmN0aW9uIHBvc3RTaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG59KTtcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczYjgyNEEvTTZWSjhxRzdoUEQ1eDJpeicsICdteVBhc3N3b3JkSW5wdXQnKTtcbi8vIGxvZ2luU2NlbmVTcmNcXHNjcmlwdFxcRWRpdEJveFxcbXlQYXNzd29yZElucHV0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGV4dDogJ+ivt+i+k+WFpeWvhueggScsXG4gICAgICAgIC8vIHBhc3N3b3JkSW5wdXQ6e1xuICAgICAgICAvLyAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgdHlwZSA6IGNjLkxhYmVsLFxuICAgICAgICAvLyB9LFxuXG4gICAgICAgIHBhc3N3b3JkVGV4dDogJycsXG5cbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBkZWxQbGFjZUhvbGRlcjogZnVuY3Rpb24gZGVsUGxhY2VIb2xkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkSW5wdXQuc3RyaW5nWzBdID09ICfor7cnKSB7XG4gICAgICAgICAgICAvL+i/meenjeaWueW8j+ivt+S4jeimgeaooeS7vz0gPeaIkei0quWbvuaWueS+v1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnN0cmluZyA9ICcnOyAvL+W8gOWktOS4uuivt+WwseaEj+WRs+edgOayoeaciei+k+WFpeS6hiDpgqPkuYjmiJHku6zmuIXnqbrlkKdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZXN1bWVQbGFjZUhvbGRlcjogZnVuY3Rpb24gcmVzdW1lUGxhY2VIb2xkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkSW5wdXQuc3RyaW5nLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvL+ayoeaciei+k+WFpSBcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC5zdHJpbmcgPSB0aGlzLnRleHQ7IC8v5oiR5Lus5bCx5bCGICfor7fovpPlhaXnlKjmiLflkI0nIOWbnuaYvlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGlzQ29udGFpbjogZnVuY3Rpb24gaXNDb250YWluKGV2ZW50KSB7XG4gICAgICAgIC8v5bCG6byg5qCH54K55Ye755qE5Z2Q5qCH6L2s5YyW5Li66L6T5YWl5qGG55qE5Z2Q5qCHKOi+k+WFpeahhuW3puS4i+inkuS4uigwLDApKVxuICAgICAgICB2YXIgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICAvL+WmguaenHjmiJZ5IOWFtuS4reS4gOS4quWwj+S6jjAg6YKj5bCx54K55Zyo5bem5LiL6KeS55qE5aSW6Z2i5LqGXG4gICAgICAgIGlmIChwb2ludC54IDwgMCB8fCBwb2ludC55IDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvL+iOt+WPlui+k+WFpeahhueahOWwuuWvuCAocmVjdC53aWR0aCxyZWN0LmhlaWdodClcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLm5vZGUuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgLy/lpoLmnpx45oiWeSDlhbbkuK3kuIDkuKrlpKfkuo7ovpPlhaXmoYbnmoTlrr3miJbpq5gg6YKj5bCx54K55Zyo5Y+z5LiK6KeS5aSW6Z2i5LqGXG4gICAgICAgIGlmIChwb2ludC54ID4gcmVjdC53aWR0aCB8fCBwb2ludC55ID4gcmVjdC5oZWlnaHQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8v5o6S6Zmk5LiK6L+w5oOF5Ya15bCx54K55Zyo6L6T5YWl5qGG5LiK5LqGXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuXG4gICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXNzd29yZFRleHQpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLk1PVVNFLCAvL+i/meS4quWQrOm8oOagh+eahOeCueWHuyDnnIvmnInmsqHooqvpgInkuK1cbiAgICAgICAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmZvY3VzID0gc2VsZi5pc0NvbnRhaW4oZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVsUGxhY2VIb2xkZXIoKTsgLy/muIXnqbogJ+ivt+i+k+WFpeeUqOaIt+WQjScg5Yik5pat5Zyo5Ye95pWw6YeM5a6M5oiQXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzdW1lUGxhY2VIb2xkZXIoKTsgLy/mgaLlpI0gJ+ivt+i+k+WFpeeUqOaIt+WQjScg5Yik5pat5Zyo5Ye95pWw6YeM5a6M5oiQXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2VsZi5ub2RlKTtcblxuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsIC8v6L+Z5Liq5ZCs6L6T5YWl55qE5piv5LuA5LmIXG4gICAgICAgICAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5mb2N1cykgcmV0dXJuOyAvL+WmguaenOivpei+k+WFpeahhuayoeacieiiq+mAieS4rSDlsLHkuI3nrqHkuoZcbiAgICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PSBjYy5LRVkuYmFja3NwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c6L6T6L+b5p2l55qE5piv5Yig6Zmk6ZSuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGFzc3dvcmRUZXh0ID0gc2VsZi5wYXNzd29yZFRleHQuc2xpY2UoMCwgLTEpOyAvL+WIoOecn+ato+eahOWvhueggVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnBhc3N3b3JkSW5wdXQuc3RyaW5nID0gc2VsZi5wYXNzd29yZElucHV0LnN0cmluZy5zbGljZSgwLCAtMSk7IC8v5YigICog5Y+3XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8g4oaRIHNsaWNlKOW8gOWni+S9jee9riznu5PmnZ/kvY3nva4pIOi0n+WPt+ihqOekuuS7juWQjuW+gOWJjeaVsFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLnBhc3N3b3JkVGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleUNvZGUpOyAvL+WtmOecn+ato+eahOWvhueggVxuICAgICAgICAgICAgICAgIHNlbGYucGFzc3dvcmRJbnB1dC5zdHJpbmcgKz0gJyonOyAvL+WbnuaYviAqIOWPt1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzU0Y2VjSjZ5anRENzc2YWowSW9SVVgxJywgJ215U2VydmVyXzAxJyk7XG4vLyBzZXJ2ZXJTY2VuZVNyY1xcc2NyaXB0XFxteVNlcnZlcl8wMS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdoZXJvQ2hvb3NlU2NlbmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYTFhZWJpRi82aENDSmtqUmxhVzFGVTQnLCAnbXlTb2NrZXRJTycpO1xuLy8gbG9naW5TY2VuZVNyY1xcc2NyaXB0XFxsb2dpblxcbXlTb2NrZXRJTy5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICB3aW5kb3cuaW8gPSBTb2NrZXRJTztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5pbyA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMTg4OTNpSjc5TkFWSnlxWUhKSkYybDgnLCAnbXlVc2VyTmFtZUlucHV0Jyk7XG4vLyBsb2dpblNjZW5lU3JjXFxzY3JpcHRcXEVkaXRCb3hcXG15VXNlck5hbWVJbnB1dC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRleHQ6ICfor7fovpPlhaXnlKjmiLflkI0nLFxuICAgICAgICAvLyB1c2VyTmFtZUlucHV0OntcbiAgICAgICAgLy8gICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgIHR5cGUgOiBjYy5MYWJlbCxcbiAgICAgICAgLy8gfSxcblxuICAgICAgICBmb2N1czogZmFsc2VcbiAgICB9LFxuXG4gICAgZGVsUGxhY2VIb2xkZXI6IGZ1bmN0aW9uIGRlbFBsYWNlSG9sZGVyKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyTmFtZUlucHV0LnN0cmluZ1swXSA9PSAn6K+3Jykge1xuICAgICAgICAgICAgLy/ov5nnp43mlrnlvI/or7fkuI3opoHmqKHku789ID3miJHotKrlm77mlrnkvr9cbiAgICAgICAgICAgIHRoaXMudXNlck5hbWVJbnB1dC5zdHJpbmcgPSAnJzsgLy/lvIDlpLTkuLror7flsLHmhI/lkbPnnYDmsqHmnInovpPlhaXkuoYg6YKj5LmI5oiR5Lus5riF56m65ZCnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzdW1lUGxhY2VIb2xkZXI6IGZ1bmN0aW9uIHJlc3VtZVBsYWNlSG9sZGVyKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyTmFtZUlucHV0LnN0cmluZy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgLy/msqHmnInovpPlhaUgXG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lSW5wdXQuc3RyaW5nID0gdGhpcy50ZXh0OyAvL+aIkeS7rOWwseWwhiAn6K+36L6T5YWl55So5oi35ZCNJyDlm57mmL5cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpc0NvbnRhaW46IGZ1bmN0aW9uIGlzQ29udGFpbihldmVudCkge1xuICAgICAgICAvL+Wwhum8oOagh+eCueWHu+eahOWdkOagh+i9rOWMluS4uui+k+WFpeahhueahOWdkOaghyjovpPlhaXmoYblt6bkuIvop5LkuLooMCwwKSlcbiAgICAgICAgdmFyIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZShldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgLy/lpoLmnpx45oiWeSDlhbbkuK3kuIDkuKrlsI/kuo4wIOmCo+WwseeCueWcqOW3puS4i+inkueahOWklumdouS6hlxuICAgICAgICBpZiAocG9pbnQueCA8IDAgfHwgcG9pbnQueSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy/ojrflj5bovpPlhaXmoYbnmoTlsLrlr7ggKHJlY3Qud2lkdGgscmVjdC5oZWlnaHQpXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgIC8v5aaC5p6ceOaIlnkg5YW25Lit5LiA5Liq5aSn5LqO6L6T5YWl5qGG55qE5a695oiW6auYIOmCo+WwseeCueWcqOWPs+S4iuinkuWklumdouS6hlxuICAgICAgICBpZiAocG9pbnQueCA+IHJlY3Qud2lkdGggfHwgcG9pbnQueSA+IHJlY3QuaGVpZ2h0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlOyAvL+aOkumZpOS4iui/sOaDheWGteWwseeCueWcqOi+k+WFpeahhuS4iuS6hlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcblxuICAgICAgICB0aGlzLnVzZXJOYW1lSW5wdXQgPSB0aGlzLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuTU9VU0UsIC8v6L+Z5Liq5ZCs6byg5qCH55qE54K55Ye7IOeci+acieayoeiiq+mAieS4rVxuICAgICAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZm9jdXMgPSBzZWxmLmlzQ29udGFpbihldmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZWxQbGFjZUhvbGRlcigpOyAvL+a4heepuiAn6K+36L6T5YWl55So5oi35ZCNJyDliKTmlq3lnKjlh73mlbDph4zlrozmiJBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXN1bWVQbGFjZUhvbGRlcigpOyAvL+aBouWkjSAn6K+36L6T5YWl55So5oi35ZCNJyDliKTmlq3lnKjlh73mlbDph4zlrozmiJBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuXG4gICAgICAgIGNjLmV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcih7XG4gICAgICAgICAgICBldmVudDogY2MuRXZlbnRMaXN0ZW5lci5LRVlCT0FSRCwgLy/ov5nkuKrlkKzovpPlhaXnmoTmmK/ku4DkuYhcbiAgICAgICAgICAgIG9uS2V5UHJlc3NlZDogZnVuY3Rpb24gb25LZXlQcmVzc2VkKGtleUNvZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmZvY3VzKSByZXR1cm47IC8v5aaC5p6c6K+l6L6T5YWl5qGG5rKh5pyJ6KKr6YCJ5LitIOWwseS4jeeuoeS6hlxuICAgICAgICAgICAgICAgIGlmIChrZXlDb2RlID09IGNjLktFWS5iYWNrc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzovpPov5vmnaXnmoTmmK/liKDpmaTplK5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi51c2VyTmFtZUlucHV0LnN0cmluZyA9IHNlbGYudXNlck5hbWVJbnB1dC5zdHJpbmcuc2xpY2UoMCwgLTEpOyAvL+mCo+S5iOaIkeS7rOWwseaKiuacgOWQjuS4gOS4quWIoOaOiVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIOKGkSBzbGljZSjlvIDlp4vkvY3nva4s57uT5p2f5L2N572uKSDotJ/lj7fooajnpLrku47lkI7lvoDliY3mlbBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi51c2VyTmFtZUlucHV0LnN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleUNvZGUpOyAvL+WmguaenOS9oOWFtuS7lueahOi+k+WFpeaIkeS7rOWwseaLvOWIsOi+k+WFpeahhlxuICAgICAgICAgICAgfSB9LCAvLyAgIOKGkSAg6L+Z5Liq5pivamF2YXNjcmlwdOWGhee9ruWvueixoSBmcm9tQ2hhckNvZGXlj6/ku6XlsIZhc2NpaS0+5a2X56ymXG4gICAgICAgIHNlbGYubm9kZSk7XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMDA0NTMrY01vaEdscTRqY09QeXRJMkQnLCAnc29ja2V0LmlvJyk7XG4vLyBsb2dpblNjZW5lU3JjXFxzY3JpcHRcXGxvZ2luXFxzb2NrZXQuaW8uanNcblxuaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcblxuICAoZnVuY3Rpb24gKGYpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKFtdLCBmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGc7aWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZyA9IHdpbmRvdztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBnID0gZ2xvYmFsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBnID0gc2VsZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGcgPSB0aGlzO1xuICAgICAgfWcuaW8gPSBmKCk7XG4gICAgfVxuICB9KShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlZmluZSwgbW9kdWxlLCBleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LCBuLCByKSB7XG4gICAgICBmdW5jdGlvbiBzKG8sIHUpIHtcbiAgICAgICAgaWYgKCFuW29dKSB7XG4gICAgICAgICAgaWYgKCF0W29dKSB7XG4gICAgICAgICAgICB2YXIgYSA9IHR5cGVvZiByZXF1aXJlID09IFwiZnVuY3Rpb25cIiAmJiByZXF1aXJlO2lmICghdSAmJiBhKSByZXR1cm4gYShvLCAhMCk7aWYgKGkpIHJldHVybiBpKG8sICEwKTt2YXIgZiA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBvICsgXCInXCIpO3Rocm93IChmLmNvZGUgPSBcIk1PRFVMRV9OT1RfRk9VTkRcIiwgZik7XG4gICAgICAgICAgfXZhciBsID0gbltvXSA9IHsgZXhwb3J0czoge30gfTt0W29dWzBdLmNhbGwobC5leHBvcnRzLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG4gPSB0W29dWzFdW2VdO3JldHVybiBzKG4gPyBuIDogZSk7XG4gICAgICAgICAgfSwgbCwgbC5leHBvcnRzLCBlLCB0LCBuLCByKTtcbiAgICAgICAgfXJldHVybiBuW29dLmV4cG9ydHM7XG4gICAgICB9dmFyIGkgPSB0eXBlb2YgcmVxdWlyZSA9PSBcImZ1bmN0aW9uXCIgJiYgcmVxdWlyZTtmb3IgKHZhciBvID0gMDsgbyA8IHIubGVuZ3RoOyBvKyspIHMocltvXSk7cmV0dXJuIHM7XG4gICAgfSkoeyAxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygnLi9saWIvJyk7XG4gICAgICB9LCB7IFwiLi9saWIvXCI6IDIgfV0sIDI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKCcuL3NvY2tldCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHBvcnRzIHBhcnNlclxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMucGFyc2VyID0gX2RlcmVxXygnZW5naW5lLmlvLXBhcnNlcicpO1xuICAgICAgfSwgeyBcIi4vc29ja2V0XCI6IDMsIFwiZW5naW5lLmlvLXBhcnNlclwiOiAxOSB9XSwgMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIHRyYW5zcG9ydHMgPSBfZGVyZXFfKCcuL3RyYW5zcG9ydHMnKTtcbiAgICAgICAgICB2YXIgRW1pdHRlciA9IF9kZXJlcV8oJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG4gICAgICAgICAgdmFyIGRlYnVnID0gX2RlcmVxXygnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpzb2NrZXQnKTtcbiAgICAgICAgICB2YXIgaW5kZXggPSBfZGVyZXFfKCdpbmRleG9mJyk7XG4gICAgICAgICAgdmFyIHBhcnNlciA9IF9kZXJlcV8oJ2VuZ2luZS5pby1wYXJzZXInKTtcbiAgICAgICAgICB2YXIgcGFyc2V1cmkgPSBfZGVyZXFfKCdwYXJzZXVyaScpO1xuICAgICAgICAgIHZhciBwYXJzZWpzb24gPSBfZGVyZXFfKCdwYXJzZWpzb24nKTtcbiAgICAgICAgICB2YXIgcGFyc2VxcyA9IF9kZXJlcV8oJ3BhcnNlcXMnKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZHVsZSBleHBvcnRzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBTb2NrZXQ7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBOb29wIGZ1bmN0aW9uLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBub29wKCkge31cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNvY2tldCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXJpIG9yIG9wdGlvbnNcbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBTb2NrZXQodXJpLCBvcHRzKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU29ja2V0KSkgcmV0dXJuIG5ldyBTb2NrZXQodXJpLCBvcHRzKTtcblxuICAgICAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICAgICAgICAgIGlmICh1cmkgJiYgJ29iamVjdCcgPT0gdHlwZW9mIHVyaSkge1xuICAgICAgICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICAgICAgICB1cmkgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodXJpKSB7XG4gICAgICAgICAgICAgIHVyaSA9IHBhcnNldXJpKHVyaSk7XG4gICAgICAgICAgICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICAgICAgICAgICAgb3B0cy5zZWN1cmUgPSB1cmkucHJvdG9jb2wgPT0gJ2h0dHBzJyB8fCB1cmkucHJvdG9jb2wgPT0gJ3dzcyc7XG4gICAgICAgICAgICAgIG9wdHMucG9ydCA9IHVyaS5wb3J0O1xuICAgICAgICAgICAgICBpZiAodXJpLnF1ZXJ5KSBvcHRzLnF1ZXJ5ID0gdXJpLnF1ZXJ5O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRzLmhvc3QpIHtcbiAgICAgICAgICAgICAgb3B0cy5ob3N0bmFtZSA9IHBhcnNldXJpKG9wdHMuaG9zdCkuaG9zdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWN1cmUgPSBudWxsICE9IG9wdHMuc2VjdXJlID8gb3B0cy5zZWN1cmUgOiBnbG9iYWwubG9jYXRpb24gJiYgJ2h0dHBzOicgPT0gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgICAgICAgICAgIGlmIChvcHRzLmhvc3RuYW1lICYmICFvcHRzLnBvcnQpIHtcbiAgICAgICAgICAgICAgLy8gaWYgbm8gcG9ydCBpcyBzcGVjaWZpZWQgbWFudWFsbHksIHVzZSB0aGUgcHJvdG9jb2wgZGVmYXVsdFxuICAgICAgICAgICAgICBvcHRzLnBvcnQgPSB0aGlzLnNlY3VyZSA/ICc0NDMnIDogJzgwJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQgfHwgZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhvc3RuYW1lID0gb3B0cy5ob3N0bmFtZSB8fCAoZ2xvYmFsLmxvY2F0aW9uID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG4gICAgICAgICAgICB0aGlzLnBvcnQgPSBvcHRzLnBvcnQgfHwgKGdsb2JhbC5sb2NhdGlvbiAmJiBsb2NhdGlvbi5wb3J0ID8gbG9jYXRpb24ucG9ydCA6IHRoaXMuc2VjdXJlID8gNDQzIDogODApO1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnkgfHwge307XG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIHRoaXMucXVlcnkpIHRoaXMucXVlcnkgPSBwYXJzZXFzLmRlY29kZSh0aGlzLnF1ZXJ5KTtcbiAgICAgICAgICAgIHRoaXMudXBncmFkZSA9IGZhbHNlICE9PSBvcHRzLnVwZ3JhZGU7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSAob3B0cy5wYXRoIHx8ICcvZW5naW5lLmlvJykucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJztcbiAgICAgICAgICAgIHRoaXMuZm9yY2VKU09OUCA9ICEhb3B0cy5mb3JjZUpTT05QO1xuICAgICAgICAgICAgdGhpcy5qc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuICAgICAgICAgICAgdGhpcy5mb3JjZUJhc2U2NCA9ICEhb3B0cy5mb3JjZUJhc2U2NDtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlc1hEUiA9ICEhb3B0cy5lbmFibGVzWERSO1xuICAgICAgICAgICAgdGhpcy50aW1lc3RhbXBQYXJhbSA9IG9wdHMudGltZXN0YW1wUGFyYW0gfHwgJ3QnO1xuICAgICAgICAgICAgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyA9IG9wdHMudGltZXN0YW1wUmVxdWVzdHM7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydHMgPSBvcHRzLnRyYW5zcG9ydHMgfHwgWydwb2xsaW5nJywgJ3dlYnNvY2tldCddO1xuICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJyc7XG4gICAgICAgICAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgICAgICAgICB0aGlzLnBvbGljeVBvcnQgPSBvcHRzLnBvbGljeVBvcnQgfHwgODQzO1xuICAgICAgICAgICAgdGhpcy5yZW1lbWJlclVwZ3JhZGUgPSBvcHRzLnJlbWVtYmVyVXBncmFkZSB8fCBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYmluYXJ5VHlwZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm9ubHlCaW5hcnlVcGdyYWRlcyA9IG9wdHMub25seUJpbmFyeVVwZ3JhZGVzO1xuICAgICAgICAgICAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IGZhbHNlICE9PSBvcHRzLnBlck1lc3NhZ2VEZWZsYXRlID8gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSB8fCB7fSA6IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodHJ1ZSA9PT0gdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSkgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IHt9O1xuICAgICAgICAgICAgaWYgKHRoaXMucGVyTWVzc2FnZURlZmxhdGUgJiYgbnVsbCA9PSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCA9IDEwMjQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICAgICAgICAgICAgdGhpcy5wZnggPSBvcHRzLnBmeCB8fCBudWxsO1xuICAgICAgICAgICAgdGhpcy5rZXkgPSBvcHRzLmtleSB8fCBudWxsO1xuICAgICAgICAgICAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlIHx8IG51bGw7XG4gICAgICAgICAgICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQgfHwgbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY2EgPSBvcHRzLmNhIHx8IG51bGw7XG4gICAgICAgICAgICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnMgfHwgbnVsbDtcbiAgICAgICAgICAgIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICAgICAgICAgICAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgICAgICAgICAgIHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG4gICAgICAgICAgICBpZiAoZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwpIHtcbiAgICAgICAgICAgICAgaWYgKG9wdHMuZXh0cmFIZWFkZXJzICYmIE9iamVjdC5rZXlzKG9wdHMuZXh0cmFIZWFkZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNaXggaW4gYEVtaXR0ZXJgLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgRW1pdHRlcihTb2NrZXQucHJvdG90eXBlKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFByb3RvY29sIHZlcnNpb24uXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRXhwb3NlIGRlcHMgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgICogYW5kIHN0YW5kYWxvbmUgYnJvd3NlciBhY2Nlc3MuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQuU29ja2V0ID0gU29ja2V0O1xuICAgICAgICAgIFNvY2tldC5UcmFuc3BvcnQgPSBfZGVyZXFfKCcuL3RyYW5zcG9ydCcpO1xuICAgICAgICAgIFNvY2tldC50cmFuc3BvcnRzID0gX2RlcmVxXygnLi90cmFuc3BvcnRzJyk7XG4gICAgICAgICAgU29ja2V0LnBhcnNlciA9IF9kZXJlcV8oJ2VuZ2luZS5pby1wYXJzZXInKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENyZWF0ZXMgdHJhbnNwb3J0IG9mIHRoZSBnaXZlbiB0eXBlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAgICAgICAgICogQHJldHVybiB7VHJhbnNwb3J0fVxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS5jcmVhdGVUcmFuc3BvcnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgZGVidWcoJ2NyZWF0aW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IGNsb25lKHRoaXMucXVlcnkpO1xuXG4gICAgICAgICAgICAvLyBhcHBlbmQgZW5naW5lLmlvIHByb3RvY29sIGlkZW50aWZpZXJcbiAgICAgICAgICAgIHF1ZXJ5LkVJTyA9IHBhcnNlci5wcm90b2NvbDtcblxuICAgICAgICAgICAgLy8gdHJhbnNwb3J0IG5hbWVcbiAgICAgICAgICAgIHF1ZXJ5LnRyYW5zcG9ydCA9IG5hbWU7XG5cbiAgICAgICAgICAgIC8vIHNlc3Npb24gaWQgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICAgICAgICAgICAgaWYgKHRoaXMuaWQpIHF1ZXJ5LnNpZCA9IHRoaXMuaWQ7XG5cbiAgICAgICAgICAgIHZhciB0cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c1tuYW1lXSh7XG4gICAgICAgICAgICAgIGFnZW50OiB0aGlzLmFnZW50LFxuICAgICAgICAgICAgICBob3N0bmFtZTogdGhpcy5ob3N0bmFtZSxcbiAgICAgICAgICAgICAgcG9ydDogdGhpcy5wb3J0LFxuICAgICAgICAgICAgICBzZWN1cmU6IHRoaXMuc2VjdXJlLFxuICAgICAgICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgICAgZm9yY2VKU09OUDogdGhpcy5mb3JjZUpTT05QLFxuICAgICAgICAgICAgICBqc29ucDogdGhpcy5qc29ucCxcbiAgICAgICAgICAgICAgZm9yY2VCYXNlNjQ6IHRoaXMuZm9yY2VCYXNlNjQsXG4gICAgICAgICAgICAgIGVuYWJsZXNYRFI6IHRoaXMuZW5hYmxlc1hEUixcbiAgICAgICAgICAgICAgdGltZXN0YW1wUmVxdWVzdHM6IHRoaXMudGltZXN0YW1wUmVxdWVzdHMsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcFBhcmFtOiB0aGlzLnRpbWVzdGFtcFBhcmFtLFxuICAgICAgICAgICAgICBwb2xpY3lQb3J0OiB0aGlzLnBvbGljeVBvcnQsXG4gICAgICAgICAgICAgIHNvY2tldDogdGhpcyxcbiAgICAgICAgICAgICAgcGZ4OiB0aGlzLnBmeCxcbiAgICAgICAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgICAgICAgcGFzc3BocmFzZTogdGhpcy5wYXNzcGhyYXNlLFxuICAgICAgICAgICAgICBjZXJ0OiB0aGlzLmNlcnQsXG4gICAgICAgICAgICAgIGNhOiB0aGlzLmNhLFxuICAgICAgICAgICAgICBjaXBoZXJzOiB0aGlzLmNpcGhlcnMsXG4gICAgICAgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQsXG4gICAgICAgICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlOiB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLFxuICAgICAgICAgICAgICBleHRyYUhlYWRlcnM6IHRoaXMuZXh0cmFIZWFkZXJzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zcG9ydDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIG9baV0gPSBvYmpbaV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEluaXRpYWxpemVzIHRyYW5zcG9ydCB0byB1c2UgYW5kIHN0YXJ0cyBwcm9iZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc3BvcnQ7XG4gICAgICAgICAgICBpZiAodGhpcy5yZW1lbWJlclVwZ3JhZGUgJiYgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyAmJiB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZignd2Vic29ja2V0JykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0ID0gJ3dlYnNvY2tldCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKDAgPT09IHRoaXMudHJhbnNwb3J0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgLy8gRW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gaXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdlcnJvcicsICdObyB0cmFuc3BvcnRzIGF2YWlsYWJsZScpO1xuICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuXG4gICAgICAgICAgICAvLyBSZXRyeSB3aXRoIHRoZSBuZXh0IHRyYW5zcG9ydCBpZiB0aGUgdHJhbnNwb3J0IGlzIGRpc2FibGVkIChqc29ucDogZmFsc2UpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0LiBEaXNhYmxlcyB0aGUgZXhpc3Rpbmcgb25lIChpZiBhbnkpLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLnNldFRyYW5zcG9ydCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQpIHtcbiAgICAgICAgICAgIGRlYnVnKCdzZXR0aW5nIHRyYW5zcG9ydCAlcycsIHRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgIGRlYnVnKCdjbGVhcmluZyBleGlzdGluZyB0cmFuc3BvcnQgJXMnLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNldCB1cCB0cmFuc3BvcnRcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXG4gICAgICAgICAgICAvLyBzZXQgdXAgdHJhbnNwb3J0IGxpc3RlbmVyc1xuICAgICAgICAgICAgdHJhbnNwb3J0Lm9uKCdkcmFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbkRyYWluKCk7XG4gICAgICAgICAgICB9KS5vbigncGFja2V0JywgZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgICAgICAgICBzZWxmLm9uUGFja2V0KHBhY2tldCk7XG4gICAgICAgICAgICB9KS5vbignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICB9KS5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYub25DbG9zZSgndHJhbnNwb3J0IGNsb3NlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUHJvYmVzIGEgdHJhbnNwb3J0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLnByb2JlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICAgICAgICAgIHZhciB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydChuYW1lLCB7IHByb2JlOiAxIH0pLFxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uVHJhbnNwb3J0T3BlbigpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYub25seUJpbmFyeVVwZ3JhZGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVwZ3JhZGVMb3Nlc0JpbmFyeSA9ICF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmIHNlbGYudHJhbnNwb3J0LnN1cHBvcnRzQmluYXJ5O1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IGZhaWxlZCB8fCB1cGdyYWRlTG9zZXNCaW5hcnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIG9wZW5lZCcsIG5hbWUpO1xuICAgICAgICAgICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiAncGluZycsIGRhdGE6ICdwcm9iZScgfV0pO1xuICAgICAgICAgICAgICB0cmFuc3BvcnQub25jZSgncGFja2V0JywgZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoJ3BvbmcnID09IG1zZy50eXBlICYmICdwcm9iZScgPT0gbXNnLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIHBvbmcnLCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYudXBncmFkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHNlbGYuZW1pdCgndXBncmFkaW5nJywgdHJhbnNwb3J0KTtcbiAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNwb3J0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gJ3dlYnNvY2tldCcgPT0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgICAgICAgICAgIGRlYnVnKCdwYXVzaW5nIGN1cnJlbnQgdHJhbnNwb3J0IFwiJXNcIicsIHNlbGYudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgc2VsZi50cmFuc3BvcnQucGF1c2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICgnY2xvc2VkJyA9PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoJ2NoYW5naW5nIHRyYW5zcG9ydCBhbmQgc2VuZGluZyB1cGdyYWRlIHBhY2tldCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiAndXBncmFkZScgfV0pO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGUnLCB0cmFuc3BvcnQpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZ3JhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZsdXNoKCk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkJywgbmFtZSk7XG4gICAgICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdwcm9iZSBlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgZXJyLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuICAgICAgICAgICAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlRXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZyZWV6ZVRyYW5zcG9ydCgpIHtcbiAgICAgICAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgIC8vIEFueSBjYWxsYmFjayBjYWxsZWQgYnkgdHJhbnNwb3J0IHNob3VsZCBiZSBpZ25vcmVkIHNpbmNlIG5vd1xuICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGNsZWFudXAoKTtcblxuICAgICAgICAgICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9IYW5kbGUgYW55IGVycm9yIHRoYXQgaGFwcGVucyB3aGlsZSBwcm9iaW5nXG4gICAgICAgICAgICBmdW5jdGlvbiBvbmVycm9yKGVycikge1xuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ3Byb2JlIGVycm9yOiAnICsgZXJyKTtcbiAgICAgICAgICAgICAgZXJyb3IudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG5cbiAgICAgICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3I6ICVzJywgbmFtZSwgZXJyKTtcblxuICAgICAgICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGVFcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gb25UcmFuc3BvcnRDbG9zZSgpIHtcbiAgICAgICAgICAgICAgb25lcnJvcihcInRyYW5zcG9ydCBjbG9zZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vV2hlbiB0aGUgc29ja2V0IGlzIGNsb3NlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgICAgICAgICBmdW5jdGlvbiBvbmNsb3NlKCkge1xuICAgICAgICAgICAgICBvbmVycm9yKFwic29ja2V0IGNsb3NlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9XaGVuIHRoZSBzb2NrZXQgaXMgdXBncmFkZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgICAgICAgICAgZnVuY3Rpb24gb251cGdyYWRlKHRvKSB7XG4gICAgICAgICAgICAgIGlmICh0cmFuc3BvcnQgJiYgdG8ubmFtZSAhPSB0cmFuc3BvcnQubmFtZSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKCdcIiVzXCIgd29ya3MgLSBhYm9ydGluZyBcIiVzXCInLCB0by5uYW1lLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICAgICAgICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9SZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ29wZW4nLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgICAgICAgICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgICAgICAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvblRyYW5zcG9ydENsb3NlKTtcbiAgICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcigndXBncmFkaW5nJywgb251cGdyYWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJhbnNwb3J0Lm9uY2UoJ29wZW4nLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgICAgICAgICAgdHJhbnNwb3J0Lm9uY2UoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgICAgICAgICB0cmFuc3BvcnQub25jZSgnY2xvc2UnLCBvblRyYW5zcG9ydENsb3NlKTtcblxuICAgICAgICAgICAgdGhpcy5vbmNlKCdjbG9zZScsIG9uY2xvc2UpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCd1cGdyYWRpbmcnLCBvbnVwZ3JhZGUpO1xuXG4gICAgICAgICAgICB0cmFuc3BvcnQub3BlbigpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGRlZW1lZCBvcGVuLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVidWcoJ3NvY2tldCBvcGVuJyk7XG4gICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gICAgICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gJ3dlYnNvY2tldCcgPT0gdGhpcy50cmFuc3BvcnQubmFtZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICAgICAgICAgICAgdGhpcy5mbHVzaCgpO1xuXG4gICAgICAgICAgICAvLyB3ZSBjaGVjayBmb3IgYHJlYWR5U3RhdGVgIGluIGNhc2UgYW4gYG9wZW5gXG4gICAgICAgICAgICAvLyBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlZCB0aGUgc29ja2V0XG4gICAgICAgICAgICBpZiAoJ29wZW4nID09IHRoaXMucmVhZHlTdGF0ZSAmJiB0aGlzLnVwZ3JhZGUgJiYgdGhpcy50cmFuc3BvcnQucGF1c2UpIHtcbiAgICAgICAgICAgICAgZGVidWcoJ3N0YXJ0aW5nIHVwZ3JhZGUgcHJvYmVzJyk7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy51cGdyYWRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JlKHRoaXMudXBncmFkZXNbaV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEhhbmRsZXMgYSBwYWNrZXQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUub25QYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgICAgICAgICBpZiAoJ29wZW5pbmcnID09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgIGRlYnVnKCdzb2NrZXQgcmVjZWl2ZTogdHlwZSBcIiVzXCIsIGRhdGEgXCIlc1wiJywgcGFja2V0LnR5cGUsIHBhY2tldC5kYXRhKTtcblxuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG5cbiAgICAgICAgICAgICAgLy8gU29ja2V0IGlzIGxpdmUgLSBhbnkgcGFja2V0IGNvdW50c1xuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2hlYXJ0YmVhdCcpO1xuXG4gICAgICAgICAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdvcGVuJzpcbiAgICAgICAgICAgICAgICAgIHRoaXMub25IYW5kc2hha2UocGFyc2Vqc29uKHBhY2tldC5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3BvbmcnOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQaW5nKCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3BvbmcnKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignc2VydmVyIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgICBlcnIuY29kZSA9IHBhY2tldC5kYXRhO1xuICAgICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ21lc3NhZ2UnOlxuICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdkYXRhJywgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlYnVnKCdwYWNrZXQgcmVjZWl2ZWQgd2l0aCBzb2NrZXQgcmVhZHlTdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsZWQgdXBvbiBoYW5kc2hha2UgY29tcGxldGlvbi5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kc2hha2Ugb2JqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9uSGFuZHNoYWtlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnaGFuZHNoYWtlJywgZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5xdWVyeS5zaWQgPSBkYXRhLnNpZDtcbiAgICAgICAgICAgIHRoaXMudXBncmFkZXMgPSB0aGlzLmZpbHRlclVwZ3JhZGVzKGRhdGEudXBncmFkZXMpO1xuICAgICAgICAgICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgICAgICAgICAgIHRoaXMucGluZ1RpbWVvdXQgPSBkYXRhLnBpbmdUaW1lb3V0O1xuICAgICAgICAgICAgdGhpcy5vbk9wZW4oKTtcbiAgICAgICAgICAgIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgICAgICAgICAgIGlmICgnY2xvc2VkJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuc2V0UGluZygpO1xuXG4gICAgICAgICAgICAvLyBQcm9sb25nIGxpdmVuZXNzIG9mIHNvY2tldCBvbiBoZWFydGJlYXRcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2hlYXJ0YmVhdCcsIHRoaXMub25IZWFydGJlYXQpO1xuICAgICAgICAgICAgdGhpcy5vbignaGVhcnRiZWF0JywgdGhpcy5vbkhlYXJ0YmVhdCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFJlc2V0cyBwaW5nIHRpbWVvdXQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUub25IZWFydGJlYXQgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBzZWxmLnBpbmdUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKCdjbG9zZWQnID09IHNlbGYucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICBzZWxmLm9uQ2xvc2UoJ3BpbmcgdGltZW91dCcpO1xuICAgICAgICAgICAgfSwgdGltZW91dCB8fCBzZWxmLnBpbmdJbnRlcnZhbCArIHNlbGYucGluZ1RpbWVvdXQpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBQaW5ncyBzZXJ2ZXIgZXZlcnkgYHRoaXMucGluZ0ludGVydmFsYCBhbmQgZXhwZWN0cyByZXNwb25zZVxuICAgICAgICAgICAqIHdpdGhpbiBgdGhpcy5waW5nVGltZW91dGAgb3IgY2xvc2VzIGNvbm5lY3Rpb24uXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUuc2V0UGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgICAgICAgICAgIHNlbGYucGluZ0ludGVydmFsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZGVidWcoJ3dyaXRpbmcgcGluZyBwYWNrZXQgLSBleHBlY3RpbmcgcG9uZyB3aXRoaW4gJXNtcycsIHNlbGYucGluZ1RpbWVvdXQpO1xuICAgICAgICAgICAgICBzZWxmLnBpbmcoKTtcbiAgICAgICAgICAgICAgc2VsZi5vbkhlYXJ0YmVhdChzZWxmLnBpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIH0sIHNlbGYucGluZ0ludGVydmFsKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgKiBTZW5kcyBhIHBpbmcgcGFja2V0LlxuICAgICAgICAgICpcbiAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnNlbmRQYWNrZXQoJ3BpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYuZW1pdCgncGluZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhbGxlZCBvbiBgZHJhaW5gIGV2ZW50XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUub25EcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGVCdWZmZXIuc3BsaWNlKDAsIHRoaXMucHJldkJ1ZmZlckxlbik7XG5cbiAgICAgICAgICAgIC8vIHNldHRpbmcgcHJldkJ1ZmZlckxlbiA9IDAgaXMgdmVyeSBpbXBvcnRhbnRcbiAgICAgICAgICAgIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAgICAgICAgICAgLy8gYW5kIGEgbm9uemVybyBwcmV2QnVmZmVyTGVuIGNvdWxkIGNhdXNlIHByb2JsZW1zIG9uIGBkcmFpbmBcbiAgICAgICAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgICAgICAgICAgIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWluJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZsdXNoIHdyaXRlIGJ1ZmZlcnMuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJ2Nsb3NlZCcgIT0gdGhpcy5yZWFkeVN0YXRlICYmIHRoaXMudHJhbnNwb3J0LndyaXRhYmxlICYmICF0aGlzLnVwZ3JhZGluZyAmJiB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICBkZWJ1ZygnZmx1c2hpbmcgJWQgcGFja2V0cyBpbiBzb2NrZXQnLCB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCk7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy53cml0ZUJ1ZmZlcik7XG4gICAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgY3VycmVudCBsZW5ndGggb2Ygd3JpdGVCdWZmZXJcbiAgICAgICAgICAgICAgLy8gc3BsaWNlIHdyaXRlQnVmZmVyIGFuZCBjYWxsYmFja0J1ZmZlciBvbiBgZHJhaW5gXG4gICAgICAgICAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoO1xuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2ZsdXNoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNlbmRzIGEgbWVzc2FnZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlLlxuICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgICAgICAgICAqIEByZXR1cm4ge1NvY2tldH0gZm9yIGNoYWluaW5nLlxuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBTb2NrZXQucHJvdG90eXBlLndyaXRlID0gU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZFBhY2tldCgnbWVzc2FnZScsIG1zZywgb3B0aW9ucywgZm4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNlbmRzIGEgcGFja2V0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHBhY2tldCB0eXBlLlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS5zZW5kUGFja2V0ID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIG9wdGlvbnMsIGZuKSB7XG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgICAgICAgICAgICBmbiA9IGRhdGE7XG4gICAgICAgICAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgIGZuID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgnY2xvc2luZycgPT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdjbG9zZWQnID09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gICAgICAgICAgICB2YXIgcGFja2V0ID0ge1xuICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdwYWNrZXRDcmVhdGUnLCBwYWNrZXQpO1xuICAgICAgICAgICAgdGhpcy53cml0ZUJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgICAgICAgICBpZiAoZm4pIHRoaXMub25jZSgnZmx1c2gnLCBmbik7XG4gICAgICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgnb3BlbmluZycgPT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NpbmcnO1xuXG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICBpZiAodGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2UoJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgICAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICAgICAgICBzZWxmLm9uQ2xvc2UoJ2ZvcmNlZCBjbG9zZScpO1xuICAgICAgICAgICAgICBkZWJ1Zygnc29ja2V0IGNsb3NpbmcgLSB0ZWxsaW5nIHRyYW5zcG9ydCB0byBjbG9zZScpO1xuICAgICAgICAgICAgICBzZWxmLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhbnVwQW5kQ2xvc2UoKSB7XG4gICAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGUnLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yVXBncmFkZSgpIHtcbiAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgdXBncmFkZSB0byBmaW5pc2ggc2luY2Ugd2UgY2FuJ3Qgc2VuZCBwYWNrZXRzIHdoaWxlIHBhdXNpbmcgYSB0cmFuc3BvcnRcbiAgICAgICAgICAgICAgc2VsZi5vbmNlKCd1cGdyYWRlJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgICAgICAgICAgc2VsZi5vbmNlKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGVycm9yXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFNvY2tldC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGRlYnVnKCdzb2NrZXQgZXJyb3IgJWonLCBlcnIpO1xuICAgICAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoJ3RyYW5zcG9ydCBlcnJvcicsIGVycik7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBjbG9zZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbiwgZGVzYykge1xuICAgICAgICAgICAgaWYgKCdvcGVuaW5nJyA9PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2luZycgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgIGRlYnVnKCdzb2NrZXQgY2xvc2Ugd2l0aCByZWFzb246IFwiJXNcIicsIHJlYXNvbik7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICAvLyBjbGVhciB0aW1lcnNcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ0ludGVydmFsVGltZXIpO1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcblxuICAgICAgICAgICAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCdjbG9zZScpO1xuXG4gICAgICAgICAgICAgIC8vIGVuc3VyZSB0cmFuc3BvcnQgd29uJ3Qgc3RheSBvcGVuXG4gICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cbiAgICAgICAgICAgICAgLy8gaWdub3JlIGZ1cnRoZXIgdHJhbnNwb3J0IGNvbW11bmljYXRpb25cbiAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgICAgICAgLy8gc2V0IHJlYWR5IHN0YXRlXG4gICAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuXG4gICAgICAgICAgICAgIC8vIGNsZWFyIHNlc3Npb24gaWRcbiAgICAgICAgICAgICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgcmVhc29uLCBkZXNjKTtcblxuICAgICAgICAgICAgICAvLyBjbGVhbiBidWZmZXJzIGFmdGVyLCBzbyB1c2VycyBjYW4gc3RpbGxcbiAgICAgICAgICAgICAgLy8gZ3JhYiB0aGUgYnVmZmVycyBvbiBgY2xvc2VgIGV2ZW50XG4gICAgICAgICAgICAgIHNlbGYud3JpdGVCdWZmZXIgPSBbXTtcbiAgICAgICAgICAgICAgc2VsZi5wcmV2QnVmZmVyTGVuID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlsdGVycyB1cGdyYWRlcywgcmV0dXJuaW5nIG9ubHkgdGhvc2UgbWF0Y2hpbmcgY2xpZW50IHRyYW5zcG9ydHMuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXIgdXBncmFkZXNcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgU29ja2V0LnByb3RvdHlwZS5maWx0ZXJVcGdyYWRlcyA9IGZ1bmN0aW9uICh1cGdyYWRlcykge1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkVXBncmFkZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdXBncmFkZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmICh+aW5kZXgodGhpcy50cmFuc3BvcnRzLCB1cGdyYWRlc1tpXSkpIGZpbHRlcmVkVXBncmFkZXMucHVzaCh1cGdyYWRlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRVcGdyYWRlcztcbiAgICAgICAgICB9O1xuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwgeyBcIi4vdHJhbnNwb3J0XCI6IDQsIFwiLi90cmFuc3BvcnRzXCI6IDUsIFwiY29tcG9uZW50LWVtaXR0ZXJcIjogMTUsIFwiZGVidWdcIjogMTcsIFwiZW5naW5lLmlvLXBhcnNlclwiOiAxOSwgXCJpbmRleG9mXCI6IDIzLCBcInBhcnNlanNvblwiOiAyNiwgXCJwYXJzZXFzXCI6IDI3LCBcInBhcnNldXJpXCI6IDI4IH1dLCA0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIHBhcnNlciA9IF9kZXJlcV8oJ2VuZ2luZS5pby1wYXJzZXInKTtcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSBfZGVyZXFfKCdjb21wb25lbnQtZW1pdHRlcicpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICAgICAgICovXG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BvcnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyYW5zcG9ydCBhYnN0cmFjdCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBUcmFuc3BvcnQob3B0cykge1xuICAgICAgICAgIHRoaXMucGF0aCA9IG9wdHMucGF0aDtcbiAgICAgICAgICB0aGlzLmhvc3RuYW1lID0gb3B0cy5ob3N0bmFtZTtcbiAgICAgICAgICB0aGlzLnBvcnQgPSBvcHRzLnBvcnQ7XG4gICAgICAgICAgdGhpcy5zZWN1cmUgPSBvcHRzLnNlY3VyZTtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgICAgICAgICB0aGlzLnRpbWVzdGFtcFBhcmFtID0gb3B0cy50aW1lc3RhbXBQYXJhbTtcbiAgICAgICAgICB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzID0gb3B0cy50aW1lc3RhbXBSZXF1ZXN0cztcbiAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSAnJztcbiAgICAgICAgICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudCB8fCBmYWxzZTtcbiAgICAgICAgICB0aGlzLnNvY2tldCA9IG9wdHMuc29ja2V0O1xuICAgICAgICAgIHRoaXMuZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAgICAgICAgIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICAgICAgICAgIHRoaXMucGZ4ID0gb3B0cy5wZng7XG4gICAgICAgICAgdGhpcy5rZXkgPSBvcHRzLmtleTtcbiAgICAgICAgICB0aGlzLnBhc3NwaHJhc2UgPSBvcHRzLnBhc3NwaHJhc2U7XG4gICAgICAgICAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0O1xuICAgICAgICAgIHRoaXMuY2EgPSBvcHRzLmNhO1xuICAgICAgICAgIHRoaXMuY2lwaGVycyA9IG9wdHMuY2lwaGVycztcbiAgICAgICAgICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gICAgICAgICAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgICAgICAgICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1peCBpbiBgRW1pdHRlcmAuXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIoVHJhbnNwb3J0LnByb3RvdHlwZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVtaXRzIGFuIGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICAgICAqIEByZXR1cm4ge1RyYW5zcG9ydH0gZm9yIGNoYWluaW5nXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIFRyYW5zcG9ydC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChtc2csIGRlc2MpIHtcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gICAgICAgICAgZXJyLnR5cGUgPSAnVHJhbnNwb3J0RXJyb3InO1xuICAgICAgICAgIGVyci5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9wZW5zIHRoZSB0cmFuc3BvcnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIFRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoJ2Nsb3NlZCcgPT0gdGhpcy5yZWFkeVN0YXRlIHx8ICcnID09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuICAgICAgICAgICAgdGhpcy5kb09wZW4oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xvc2VzIHRoZSB0cmFuc3BvcnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICgnb3BlbmluZycgPT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFRyYW5zcG9ydC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYWNrZXRzKSB7XG4gICAgICAgICAgaWYgKCdvcGVuJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGUocGFja2V0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNwb3J0IG5vdCBvcGVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgdXBvbiBvcGVuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gICAgICAgICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lbWl0KCdvcGVuJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgdmFyIHBhY2tldCA9IHBhcnNlci5kZWNvZGVQYWNrZXQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSk7XG4gICAgICAgICAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2l0aCBhIGRlY29kZWQgcGFja2V0LlxuICAgICAgICAgKi9cblxuICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgICAgIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gY2xvc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gICAgICAgICAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICAgICAgICB9O1xuICAgICAgfSwgeyBcImNvbXBvbmVudC1lbWl0dGVyXCI6IDE1LCBcImVuZ2luZS5pby1wYXJzZXJcIjogMTkgfV0sIDU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0ID0gX2RlcmVxXygneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG4gICAgICAgICAgdmFyIFhIUiA9IF9kZXJlcV8oJy4vcG9sbGluZy14aHInKTtcbiAgICAgICAgICB2YXIgSlNPTlAgPSBfZGVyZXFfKCcuL3BvbGxpbmctanNvbnAnKTtcbiAgICAgICAgICB2YXIgd2Vic29ja2V0ID0gX2RlcmVxXygnLi93ZWJzb2NrZXQnKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEV4cG9ydCB0cmFuc3BvcnRzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5wb2xsaW5nID0gcG9sbGluZztcbiAgICAgICAgICBleHBvcnRzLndlYnNvY2tldCA9IHdlYnNvY2tldDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFBvbGxpbmcgdHJhbnNwb3J0IHBvbHltb3JwaGljIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAqIERlY2lkZXMgb24geGhyIHZzIGpzb25wIGJhc2VkIG9uIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBwb2xsaW5nKG9wdHMpIHtcbiAgICAgICAgICAgIHZhciB4aHI7XG4gICAgICAgICAgICB2YXIgeGQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciB4cyA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG5cbiAgICAgICAgICAgIGlmIChnbG9iYWwubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgdmFyIGlzU1NMID0gJ2h0dHBzOicgPT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgICAgICAgIHZhciBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgICAgICAgICAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgICAgICAgICAgIGlmICghcG9ydCkge1xuICAgICAgICAgICAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgeGQgPSBvcHRzLmhvc3RuYW1lICE9IGxvY2F0aW9uLmhvc3RuYW1lIHx8IHBvcnQgIT0gb3B0cy5wb3J0O1xuICAgICAgICAgICAgICB4cyA9IG9wdHMuc2VjdXJlICE9IGlzU1NMO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcHRzLnhkb21haW4gPSB4ZDtcbiAgICAgICAgICAgIG9wdHMueHNjaGVtZSA9IHhzO1xuICAgICAgICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuXG4gICAgICAgICAgICBpZiAoJ29wZW4nIGluIHhociAmJiAhb3B0cy5mb3JjZUpTT05QKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgWEhSKG9wdHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCFqc29ucCkgdGhyb3cgbmV3IEVycm9yKCdKU09OUCBkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IEpTT05QKG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2FsbCh0aGlzLCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgICAgIH0sIHsgXCIuL3BvbGxpbmctanNvbnBcIjogNiwgXCIuL3BvbGxpbmcteGhyXCI6IDcsIFwiLi93ZWJzb2NrZXRcIjogOSwgXCJ4bWxodHRwcmVxdWVzdC1zc2xcIjogMTAgfV0sIDY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIFBvbGxpbmcgPSBfZGVyZXFfKCcuL3BvbGxpbmcnKTtcbiAgICAgICAgICB2YXIgaW5oZXJpdCA9IF9kZXJlcV8oJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gSlNPTlBQb2xsaW5nO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2FjaGVkIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgck5ld2xpbmUgPSAvXFxuL2c7XG4gICAgICAgICAgdmFyIHJFc2NhcGVkTmV3bGluZSA9IC9cXFxcbi9nO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogR2xvYmFsIEpTT05QIGNhbGxiYWNrcy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBjYWxsYmFja3M7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsYmFja3MgY291bnQuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTm9vcC5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIGVtcHR5KCkge31cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEpTT05QIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5cbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gSlNPTlBQb2xsaW5nKG9wdHMpIHtcbiAgICAgICAgICAgIFBvbGxpbmcuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG5cbiAgICAgICAgICAgIC8vIGRlZmluZSBnbG9iYWwgY2FsbGJhY2tzIGFycmF5IGlmIG5vdCBwcmVzZW50XG4gICAgICAgICAgICAvLyB3ZSBkbyB0aGlzIGhlcmUgKGxhemlseSkgdG8gYXZvaWQgdW5uZWVkZWQgZ2xvYmFsIHBvbGx1dGlvblxuICAgICAgICAgICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjb25zaWRlciBtdWx0aXBsZSBlbmdpbmVzIGluIHRoZSBzYW1lIHBhZ2VcbiAgICAgICAgICAgICAgaWYgKCFnbG9iYWwuX19fZWlvKSBnbG9iYWwuX19fZWlvID0gW107XG4gICAgICAgICAgICAgIGNhbGxiYWNrcyA9IGdsb2JhbC5fX19laW87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhbGxiYWNrIGlkZW50aWZpZXJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBjYWxsYmFja3MubGVuZ3RoO1xuXG4gICAgICAgICAgICAvLyBhZGQgY2FsbGJhY2sgdG8ganNvbnAgZ2xvYmFsXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgIHNlbGYub25EYXRhKG1zZyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gYXBwZW5kIHRvIHF1ZXJ5IHN0cmluZ1xuICAgICAgICAgICAgdGhpcy5xdWVyeS5qID0gdGhpcy5pbmRleDtcblxuICAgICAgICAgICAgLy8gcHJldmVudCBzcHVyaW91cyBlcnJvcnMgZnJvbSBiZWluZyBlbWl0dGVkIHdoZW4gdGhlIHdpbmRvdyBpcyB1bmxvYWRlZFxuICAgICAgICAgICAgaWYgKGdsb2JhbC5kb2N1bWVudCAmJiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNjcmlwdCkgc2VsZi5zY3JpcHQub25lcnJvciA9IGVtcHR5O1xuICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSW5oZXJpdHMgZnJvbSBQb2xsaW5nLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgaW5oZXJpdChKU09OUFBvbGxpbmcsIFBvbGxpbmcpO1xuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBKU09OUCBvbmx5IHN1cHBvcnRzIGJpbmFyeSBhcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBKU09OUFBvbGxpbmcucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDbG9zZXMgdGhlIHNvY2tldC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgICAgICAgICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKTtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlLmNhbGwodGhpcyk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIEpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9Qb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgICAgICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICAgICAgICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSB0aGlzLnVyaSgpO1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IoJ2pzb25wIHBvbGwgZXJyb3InLCBlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBpbnNlcnRBdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgIGlmIChpbnNlcnRBdCkge1xuICAgICAgICAgICAgICBpbnNlcnRBdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGluc2VydEF0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjcmlwdCA9IHNjcmlwdDtcblxuICAgICAgICAgICAgdmFyIGlzVUFnZWNrbyA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2dlY2tvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgICAgICAgICAgaWYgKGlzVUFnZWNrbykge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogV3JpdGVzIHdpdGggYSBoaWRkZW4gaWZyYW1lLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZFxuICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb1dyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICAgIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgICB2YXIgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWZyYW1lSWQgPSAnZWlvX2lmcmFtZV8nICsgdGhpcy5pbmRleDtcbiAgICAgICAgICAgICAgdmFyIGlmcmFtZTtcblxuICAgICAgICAgICAgICBmb3JtLmNsYXNzTmFtZSA9ICdzb2NrZXRpbyc7XG4gICAgICAgICAgICAgIGZvcm0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICBmb3JtLnN0eWxlLnRvcCA9ICctMTAwMHB4JztcbiAgICAgICAgICAgICAgZm9ybS5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xuICAgICAgICAgICAgICBmb3JtLnRhcmdldCA9IGlkO1xuICAgICAgICAgICAgICBmb3JtLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjY2VwdC1jaGFyc2V0JywgJ3V0Zi04Jyk7XG4gICAgICAgICAgICAgIGFyZWEubmFtZSA9ICdkJztcbiAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChhcmVhKTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICAgICAgICB0aGlzLmFyZWEgPSBhcmVhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZvcm0uYWN0aW9uID0gdGhpcy51cmkoKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgICAgIGluaXRJZnJhbWUoKTtcbiAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdElmcmFtZSgpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuZm9ybS5yZW1vdmVDaGlsZChzZWxmLmlmcmFtZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKCdqc29ucCBwb2xsaW5nIGlmcmFtZSByZW1vdmFsIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBpZTYgZHluYW1pYyBpZnJhbWVzIHdpdGggdGFyZ2V0PVwiXCIgc3VwcG9ydCAodGhhbmtzIENocmlzIExhbWJhY2hlcilcbiAgICAgICAgICAgICAgICB2YXIgaHRtbCA9ICc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIG5hbWU9XCInICsgc2VsZi5pZnJhbWVJZCArICdcIj4nO1xuICAgICAgICAgICAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbCk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgICAgICAgICBpZnJhbWUubmFtZSA9IHNlbGYuaWZyYW1lSWQ7XG4gICAgICAgICAgICAgICAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0OjAnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWZyYW1lLmlkID0gc2VsZi5pZnJhbWVJZDtcblxuICAgICAgICAgICAgICBzZWxmLmZvcm0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgICAgc2VsZi5pZnJhbWUgPSBpZnJhbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXRJZnJhbWUoKTtcblxuICAgICAgICAgICAgLy8gZXNjYXBlIFxcbiB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY29udmVydGVkIGludG8gXFxyXFxuIGJ5IHNvbWUgVUFzXG4gICAgICAgICAgICAvLyBkb3VibGUgZXNjYXBpbmcgaXMgcmVxdWlyZWQgZm9yIGVzY2FwZWQgbmV3IGxpbmVzIGJlY2F1c2UgdW5lc2NhcGluZyBvZiBuZXcgbGluZXMgY2FuIGJlIGRvbmUgc2FmZWx5IG9uIHNlcnZlci1zaWRlXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKHJFc2NhcGVkTmV3bGluZSwgJ1xcXFxcXG4nKTtcbiAgICAgICAgICAgIHRoaXMuYXJlYS52YWx1ZSA9IGRhdGEucmVwbGFjZShyTmV3bGluZSwgJ1xcXFxuJyk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlmcmFtZS5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgICB0aGlzLmlmcmFtZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuaWZyYW1lLnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmlmcmFtZS5vbmxvYWQgPSBjb21wbGV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwgeyBcIi4vcG9sbGluZ1wiOiA4LCBcImNvbXBvbmVudC1pbmhlcml0XCI6IDE2IH1dLCA3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3QgPSBfZGVyZXFfKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbiAgICAgICAgICB2YXIgUG9sbGluZyA9IF9kZXJlcV8oJy4vcG9sbGluZycpO1xuICAgICAgICAgIHZhciBFbWl0dGVyID0gX2RlcmVxXygnY29tcG9uZW50LWVtaXR0ZXInKTtcbiAgICAgICAgICB2YXIgaW5oZXJpdCA9IF9kZXJlcV8oJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG4gICAgICAgICAgdmFyIGRlYnVnID0gX2RlcmVxXygnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nLXhocicpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IFhIUjtcbiAgICAgICAgICBtb2R1bGUuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEVtcHR5IGZ1bmN0aW9uXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBlbXB0eSgpIHt9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBYSFIgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIFhIUihvcHRzKSB7XG4gICAgICAgICAgICBQb2xsaW5nLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgICAgICAgIGlmIChnbG9iYWwubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgdmFyIGlzU1NMID0gJ2h0dHBzOicgPT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgICAgICAgIHZhciBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgICAgICAgICAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgICAgICAgICAgIGlmICghcG9ydCkge1xuICAgICAgICAgICAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy54ZCA9IG9wdHMuaG9zdG5hbWUgIT0gZ2xvYmFsLmxvY2F0aW9uLmhvc3RuYW1lIHx8IHBvcnQgIT0gb3B0cy5wb3J0O1xuICAgICAgICAgICAgICB0aGlzLnhzID0gb3B0cy5zZWN1cmUgIT0gaXNTU0w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEluaGVyaXRzIGZyb20gUG9sbGluZy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGluaGVyaXQoWEhSLCBQb2xsaW5nKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFhIUiBzdXBwb3J0cyBiaW5hcnlcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFhIUi5wcm90b3R5cGUuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ3JlYXRlcyBhIHJlcXVlc3QuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBYSFIucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgICAgICBvcHRzLnVyaSA9IHRoaXMudXJpKCk7XG4gICAgICAgICAgICBvcHRzLnhkID0gdGhpcy54ZDtcbiAgICAgICAgICAgIG9wdHMueHMgPSB0aGlzLnhzO1xuICAgICAgICAgICAgb3B0cy5hZ2VudCA9IHRoaXMuYWdlbnQgfHwgZmFsc2U7XG4gICAgICAgICAgICBvcHRzLnN1cHBvcnRzQmluYXJ5ID0gdGhpcy5zdXBwb3J0c0JpbmFyeTtcbiAgICAgICAgICAgIG9wdHMuZW5hYmxlc1hEUiA9IHRoaXMuZW5hYmxlc1hEUjtcblxuICAgICAgICAgICAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gICAgICAgICAgICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICAgICAgICAgICAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgICAgICAgICAgIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgICAgICAgICAgIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgICAgICAgICAgIG9wdHMuY2EgPSB0aGlzLmNhO1xuICAgICAgICAgICAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICAgICAgICAgICAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICAgICAgICAgICAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgICAgICAgICAgIG9wdHMuZXh0cmFIZWFkZXJzID0gdGhpcy5leHRyYUhlYWRlcnM7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVxdWVzdChvcHRzKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU2VuZHMgZGF0YS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmQuXG4gICAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBYSFIucHJvdG90eXBlLmRvV3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZm4pIHtcbiAgICAgICAgICAgIHZhciBpc0JpbmFyeSA9IHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyAmJiBkYXRhICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgcmVxID0gdGhpcy5yZXF1ZXN0KHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEsIGlzQmluYXJ5OiBpc0JpbmFyeSB9KTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHJlcS5vbignc3VjY2VzcycsIGZuKTtcbiAgICAgICAgICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgIHNlbGYub25FcnJvcigneGhyIHBvc3QgZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNlbmRYaHIgPSByZXE7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFhIUi5wcm90b3R5cGUuZG9Qb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVidWcoJ3hociBwb2xsJyk7XG4gICAgICAgICAgICB2YXIgcmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICByZXEub24oJ2RhdGEnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICBzZWxmLm9uRGF0YShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKCd4aHIgcG9sbCBlcnJvcicsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucG9sbFhociA9IHJlcTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUmVxdWVzdCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gUmVxdWVzdChvcHRzKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZCA9IG9wdHMubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgICAgICAgdGhpcy51cmkgPSBvcHRzLnVyaTtcbiAgICAgICAgICAgIHRoaXMueGQgPSAhIW9wdHMueGQ7XG4gICAgICAgICAgICB0aGlzLnhzID0gISFvcHRzLnhzO1xuICAgICAgICAgICAgdGhpcy5hc3luYyA9IGZhbHNlICE9PSBvcHRzLmFzeW5jO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkICE9IG9wdHMuZGF0YSA/IG9wdHMuZGF0YSA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudDtcbiAgICAgICAgICAgIHRoaXMuaXNCaW5hcnkgPSBvcHRzLmlzQmluYXJ5O1xuICAgICAgICAgICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IG9wdHMuc3VwcG9ydHNCaW5hcnk7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgICAgICAgICAgIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICAgICAgICAgICAgdGhpcy5wZnggPSBvcHRzLnBmeDtcbiAgICAgICAgICAgIHRoaXMua2V5ID0gb3B0cy5rZXk7XG4gICAgICAgICAgICB0aGlzLnBhc3NwaHJhc2UgPSBvcHRzLnBhc3NwaHJhc2U7XG4gICAgICAgICAgICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQ7XG4gICAgICAgICAgICB0aGlzLmNhID0gb3B0cy5jYTtcbiAgICAgICAgICAgIHRoaXMuY2lwaGVycyA9IG9wdHMuY2lwaGVycztcbiAgICAgICAgICAgIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgICAgICAgICAgIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gICAgICAgICAgICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1peCBpbiBgRW1pdHRlcmAuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBFbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENyZWF0ZXMgdGhlIFhIUiBvYmplY3QgYW5kIHNlbmRzIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBSZXF1ZXN0LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IHsgYWdlbnQ6IHRoaXMuYWdlbnQsIHhkb21haW46IHRoaXMueGQsIHhzY2hlbWU6IHRoaXMueHMsIGVuYWJsZXNYRFI6IHRoaXMuZW5hYmxlc1hEUiB9O1xuXG4gICAgICAgICAgICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgICAgICAgICAgIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gICAgICAgICAgICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICAgICAgICAgICAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICAgICAgICAgICAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICAgICAgICAgICAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gICAgICAgICAgICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gICAgICAgICAgICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gICAgICAgICAgICB2YXIgeGhyID0gdGhpcy54aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cyk7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGRlYnVnKCd4aHIgb3BlbiAlczogJXMnLCB0aGlzLm1ldGhvZCwgdGhpcy51cmkpO1xuICAgICAgICAgICAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmksIHRoaXMuYXN5bmMpO1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5leHRyYUhlYWRlcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaGFzIHRvIGJlIGRvbmUgYWZ0ZXIgb3BlbiBiZWNhdXNlIEZpcmVmb3ggaXMgc3R1cGlkXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzIxNjkwMy9nZXQtYmluYXJ5LWRhdGEtd2l0aC14bWxodHRwcmVxdWVzdC1pbi1hLWZpcmVmb3gtZXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoJ1BPU1QnID09IHRoaXMubWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQmluYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBpZTYgY2hlY2tcbiAgICAgICAgICAgICAgaWYgKCd3aXRoQ3JlZGVudGlhbHMnIGluIHhocikge1xuICAgICAgICAgICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICBpZiAoMjAwID09IHhoci5zdGF0dXMgfHwgMTIyMyA9PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub25Mb2FkKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lcyBub3QgdGhyb3cgaW4gdGhlIHNhbWUgdGljayBhbmQgZ2V0cyBjYXVnaHQgaGVyZVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IoeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWJ1ZygneGhyIGRhdGEgJXMnLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICB4aHIuc2VuZCh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAvLyBOZWVkIHRvIGRlZmVyIHNpbmNlIC5jcmVhdGUoKSBpcyBjYWxsZWQgZGlyZWN0bHkgZmhyb20gdGhlIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgIC8vIGFuZCB0aHVzIHRoZSAnZXJyb3InIGV2ZW50IGNhbiBvbmx5IGJlIG9ubHkgYm91bmQgKmFmdGVyKiB0aGlzIGV4Y2VwdGlvblxuICAgICAgICAgICAgICAvLyBvY2N1cnMuICBUaGVyZWZvcmUsIGFsc28sIHdlIGNhbm5vdCB0aHJvdyBoZXJlIGF0IGFsbC5cbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ2xvYmFsLmRvY3VtZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBSZXF1ZXN0LnJlcXVlc3RzQ291bnQrKztcbiAgICAgICAgICAgICAgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XSA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFJlcXVlc3QucHJvdG90eXBlLm9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc3VjY2VzcycpO1xuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhbGxlZCBpZiB3ZSBoYXZlIGRhdGEuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIFJlcXVlc3QucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2RhdGEnLCBkYXRhKTtcbiAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhbGxlZCB1cG9uIGVycm9yLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBSZXF1ZXN0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAodHJ1ZSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENsZWFucyB1cCBob3VzZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgUmVxdWVzdC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uIChmcm9tRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICgndW5kZWZpbmVkJyA9PSB0eXBlb2YgdGhpcy54aHIgfHwgbnVsbCA9PT0gdGhpcy54aHIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8geG1saHR0cHJlcXVlc3RcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICAgICAgICAgIHRoaXMueGhyLm9ubG9hZCA9IHRoaXMueGhyLm9uZXJyb3IgPSBlbXB0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZnJvbUVycm9yKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdsb2JhbC5kb2N1bWVudCkge1xuICAgICAgICAgICAgICBkZWxldGUgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy54aHIgPSBudWxsO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsZWQgdXBvbiBsb2FkLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBSZXF1ZXN0LnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBjb250ZW50VHlwZTtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKS5zcGxpdCgnOycpWzBdO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkodGhpcy54aHIucmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVpOEFyciA9IG5ldyBVaW50OEFycmF5KHRoaXMueGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggPSAwLCBsZW5ndGggPSB1aThBcnIubGVuZ3RoOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUFycmF5LnB1c2godWk4QXJyW2lkeF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgZGF0YUFycmF5KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG51bGwgIT0gZGF0YSkge1xuICAgICAgICAgICAgICB0aGlzLm9uRGF0YShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2hlY2sgaWYgaXQgaGFzIFhEb21haW5SZXF1ZXN0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBSZXF1ZXN0LnByb3RvdHlwZS5oYXNYRFIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBnbG9iYWwuWERvbWFpblJlcXVlc3QgJiYgIXRoaXMueHMgJiYgdGhpcy5lbmFibGVzWERSO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgUmVxdWVzdC5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQWJvcnRzIHBlbmRpbmcgcmVxdWVzdHMgd2hlbiB1bmxvYWRpbmcgdGhlIHdpbmRvdy4gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudFxuICAgICAgICAgICAqIG1lbW9yeSBsZWFrcyAoZS5nLiB3aGVuIHVzaW5nIElFKSBhbmQgdG8gZW5zdXJlIHRoYXQgbm8gc3B1cmlvdXMgZXJyb3IgaXNcbiAgICAgICAgICAgKiBlbWl0dGVkLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgaWYgKGdsb2JhbC5kb2N1bWVudCkge1xuICAgICAgICAgICAgUmVxdWVzdC5yZXF1ZXN0c0NvdW50ID0gMDtcbiAgICAgICAgICAgIFJlcXVlc3QucmVxdWVzdHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChnbG9iYWwuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIHVubG9hZEhhbmRsZXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIHVubG9hZEhhbmRsZXIoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIFJlcXVlc3QucmVxdWVzdHMpIHtcbiAgICAgICAgICAgICAgaWYgKFJlcXVlc3QucmVxdWVzdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBSZXF1ZXN0LnJlcXVlc3RzW2ldLmFib3J0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7IFwiLi9wb2xsaW5nXCI6IDgsIFwiY29tcG9uZW50LWVtaXR0ZXJcIjogMTUsIFwiY29tcG9uZW50LWluaGVyaXRcIjogMTYsIFwiZGVidWdcIjogMTcsIFwieG1saHR0cHJlcXVlc3Qtc3NsXCI6IDEwIH1dLCA4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIFRyYW5zcG9ydCA9IF9kZXJlcV8oJy4uL3RyYW5zcG9ydCcpO1xuICAgICAgICB2YXIgcGFyc2VxcyA9IF9kZXJlcV8oJ3BhcnNlcXMnKTtcbiAgICAgICAgdmFyIHBhcnNlciA9IF9kZXJlcV8oJ2VuZ2luZS5pby1wYXJzZXInKTtcbiAgICAgICAgdmFyIGluaGVyaXQgPSBfZGVyZXFfKCdjb21wb25lbnQtaW5oZXJpdCcpO1xuICAgICAgICB2YXIgeWVhc3QgPSBfZGVyZXFfKCd5ZWFzdCcpO1xuICAgICAgICB2YXIgZGVidWcgPSBfZGVyZXFfKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gUG9sbGluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgWEhSMiBzdXBwb3J0ZWQ/XG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBoYXNYSFIyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3QgPSBfZGVyZXFfKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbiAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KHsgeGRvbWFpbjogZmFsc2UgfSk7XG4gICAgICAgICAgcmV0dXJuIG51bGwgIT0geGhyLnJlc3BvbnNlVHlwZTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUG9sbGluZyBpbnRlcmZhY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBQb2xsaW5nKG9wdHMpIHtcbiAgICAgICAgICB2YXIgZm9yY2VCYXNlNjQgPSBvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQ7XG4gICAgICAgICAgaWYgKCFoYXNYSFIyIHx8IGZvcmNlQmFzZTY0KSB7XG4gICAgICAgICAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIFRyYW5zcG9ydC5jYWxsKHRoaXMsIG9wdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaGVyaXRzIGZyb20gVHJhbnNwb3J0LlxuICAgICAgICAgKi9cblxuICAgICAgICBpbmhlcml0KFBvbGxpbmcsIFRyYW5zcG9ydCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyYW5zcG9ydCBuYW1lLlxuICAgICAgICAgKi9cblxuICAgICAgICBQb2xsaW5nLnByb3RvdHlwZS5uYW1lID0gJ3BvbGxpbmcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPcGVucyB0aGUgc29ja2V0ICh0cmlnZ2VycyBwb2xsaW5nKS4gV2Ugd3JpdGUgYSBQSU5HIG1lc3NhZ2UgdG8gZGV0ZXJtaW5lXG4gICAgICAgICAqIHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBvcGVuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgUG9sbGluZy5wcm90b3R5cGUuZG9PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMucG9sbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXVzZXMgcG9sbGluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgdXBvbiBidWZmZXJzIGFyZSBmbHVzaGVkIGFuZCB0cmFuc3BvcnQgaXMgcGF1c2VkXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBQb2xsaW5nLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIChvblBhdXNlKSB7XG4gICAgICAgICAgdmFyIHBlbmRpbmcgPSAwO1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdwYXVzaW5nJztcblxuICAgICAgICAgIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICAgICAgZGVidWcoJ3BhdXNlZCcpO1xuICAgICAgICAgICAgc2VsZi5yZWFkeVN0YXRlID0gJ3BhdXNlZCc7XG4gICAgICAgICAgICBvblBhdXNlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMucG9sbGluZyB8fCAhdGhpcy53cml0YWJsZSkge1xuICAgICAgICAgICAgdmFyIHRvdGFsID0gMDtcblxuICAgICAgICAgICAgaWYgKHRoaXMucG9sbGluZykge1xuICAgICAgICAgICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgICAgICAgICB0b3RhbCsrO1xuICAgICAgICAgICAgICB0aGlzLm9uY2UoJ3BvbGxDb21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZygncHJlLXBhdXNlIHBvbGxpbmcgY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMud3JpdGFibGUpIHtcbiAgICAgICAgICAgICAgZGVidWcoJ3dlIGFyZSBjdXJyZW50bHkgd3JpdGluZyAtIHdhaXRpbmcgdG8gcGF1c2UnKTtcbiAgICAgICAgICAgICAgdG90YWwrKztcbiAgICAgICAgICAgICAgdGhpcy5vbmNlKCdkcmFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZygncHJlLXBhdXNlIHdyaXRpbmcgY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXVzZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhcnRzIHBvbGxpbmcgY3ljbGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIFBvbGxpbmcucHJvdG90eXBlLnBvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGVidWcoJ3BvbGxpbmcnKTtcbiAgICAgICAgICB0aGlzLnBvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZG9Qb2xsKCk7XG4gICAgICAgICAgdGhpcy5lbWl0KCdwb2xsJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE92ZXJsb2FkcyBvbkRhdGEgdG8gZGV0ZWN0IHBheWxvYWRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgUG9sbGluZy5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgZGVidWcoJ3BvbGxpbmcgZ290IGRhdGEgJXMnLCBkYXRhKTtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhwYWNrZXQsIGluZGV4LCB0b3RhbCkge1xuICAgICAgICAgICAgLy8gaWYgaXRzIHRoZSBmaXJzdCBtZXNzYWdlIHdlIGNvbnNpZGVyIHRoZSB0cmFuc3BvcnQgb3BlblxuICAgICAgICAgICAgaWYgKCdvcGVuaW5nJyA9PSBzZWxmLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbk9wZW4oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgaXRzIGEgY2xvc2UgcGFja2V0LCB3ZSBjbG9zZSB0aGUgb25nb2luZyByZXF1ZXN0c1xuICAgICAgICAgICAgaWYgKCdjbG9zZScgPT0gcGFja2V0LnR5cGUpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGJ5cGFzcyBvbkRhdGEgYW5kIGhhbmRsZSB0aGUgbWVzc2FnZVxuICAgICAgICAgICAgc2VsZi5vblBhY2tldChwYWNrZXQpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBkZWNvZGUgcGF5bG9hZFxuICAgICAgICAgIHBhcnNlci5kZWNvZGVQYXlsb2FkKGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUsIGNhbGxiYWNrKTtcblxuICAgICAgICAgIC8vIGlmIGFuIGV2ZW50IGRpZCBub3QgdHJpZ2dlciBjbG9zaW5nXG4gICAgICAgICAgaWYgKCdjbG9zZWQnICE9IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgLy8gaWYgd2UgZ290IGRhdGEgd2UncmUgbm90IHBvbGxpbmdcbiAgICAgICAgICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdwb2xsQ29tcGxldGUnKTtcblxuICAgICAgICAgICAgaWYgKCdvcGVuJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5wb2xsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWJ1ZygnaWdub3JpbmcgcG9sbCAtIHRyYW5zcG9ydCBzdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yIHBvbGxpbmcsIHNlbmQgYSBjbG9zZSBwYWNrZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBQb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICAgICAgZGVidWcoJ3dyaXRpbmcgY2xvc2UgcGFja2V0Jyk7XG4gICAgICAgICAgICBzZWxmLndyaXRlKFt7IHR5cGU6ICdjbG9zZScgfV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgnb3BlbicgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICBkZWJ1ZygndHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nJyk7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgICAgICAgICAgLy8gaGFuZHNoYWtpbmcgaXMgaW4gcHJvZ3Jlc3MgKEdILTE2NClcbiAgICAgICAgICAgIGRlYnVnKCd0cmFuc3BvcnQgbm90IG9wZW4gLSBkZWZlcnJpbmcgY2xvc2UnKTtcbiAgICAgICAgICAgIHRoaXMub25jZSgnb3BlbicsIGNsb3NlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyaXRlcyBhIHBhY2tldHMgcGF5bG9hZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGRyYWluIGNhbGxiYWNrXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBQb2xsaW5nLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChwYWNrZXRzKSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICB2YXIgY2FsbGJhY2tmbiA9IGZ1bmN0aW9uIGNhbGxiYWNrZm4oKSB7XG4gICAgICAgICAgICBzZWxmLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuZW1pdCgnZHJhaW4nKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHBhcnNlci5lbmNvZGVQYXlsb2FkKHBhY2tldHMsIHRoaXMuc3VwcG9ydHNCaW5hcnksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBzZWxmLmRvV3JpdGUoZGF0YSwgY2FsbGJhY2tmbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBQb2xsaW5nLnByb3RvdHlwZS51cmkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICAgICAgICB2YXIgc2NoZW1hID0gdGhpcy5zZWN1cmUgPyAnaHR0cHMnIDogJ2h0dHAnO1xuICAgICAgICAgIHZhciBwb3J0ID0gJyc7XG5cbiAgICAgICAgICAvLyBjYWNoZSBidXN0aW5nIGlzIGZvcmNlZFxuICAgICAgICAgIGlmIChmYWxzZSAhPT0gdGhpcy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgICAgICAgcXVlcnlbdGhpcy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiAhcXVlcnkuc2lkKSB7XG4gICAgICAgICAgICBxdWVyeS5iNjQgPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgICAgICAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgICAgICAgICBpZiAodGhpcy5wb3J0ICYmICgnaHR0cHMnID09IHNjaGVtYSAmJiB0aGlzLnBvcnQgIT0gNDQzIHx8ICdodHRwJyA9PSBzY2hlbWEgJiYgdGhpcy5wb3J0ICE9IDgwKSkge1xuICAgICAgICAgICAgcG9ydCA9ICc6JyArIHRoaXMucG9ydDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpcHY2ID0gdGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgIT09IC0xO1xuICAgICAgICAgIHJldHVybiBzY2hlbWEgKyAnOi8vJyArIChpcHY2ID8gJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyA6IHRoaXMuaG9zdG5hbWUpICsgcG9ydCArIHRoaXMucGF0aCArIHF1ZXJ5O1xuICAgICAgICB9O1xuICAgICAgfSwgeyBcIi4uL3RyYW5zcG9ydFwiOiA0LCBcImNvbXBvbmVudC1pbmhlcml0XCI6IDE2LCBcImRlYnVnXCI6IDE3LCBcImVuZ2luZS5pby1wYXJzZXJcIjogMTksIFwicGFyc2Vxc1wiOiAyNywgXCJ4bWxodHRwcmVxdWVzdC1zc2xcIjogMTAsIFwieWVhc3RcIjogMzAgfV0sIDk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBUcmFuc3BvcnQgPSBfZGVyZXFfKCcuLi90cmFuc3BvcnQnKTtcbiAgICAgICAgICB2YXIgcGFyc2VyID0gX2RlcmVxXygnZW5naW5lLmlvLXBhcnNlcicpO1xuICAgICAgICAgIHZhciBwYXJzZXFzID0gX2RlcmVxXygncGFyc2VxcycpO1xuICAgICAgICAgIHZhciBpbmhlcml0ID0gX2RlcmVxXygnY29tcG9uZW50LWluaGVyaXQnKTtcbiAgICAgICAgICB2YXIgeWVhc3QgPSBfZGVyZXFfKCd5ZWFzdCcpO1xuICAgICAgICAgIHZhciBkZWJ1ZyA9IF9kZXJlcV8oJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6d2Vic29ja2V0Jyk7XG4gICAgICAgICAgdmFyIEJyb3dzZXJXZWJTb2NrZXQgPSBnbG9iYWwuV2ViU29ja2V0IHx8IGdsb2JhbC5Nb3pXZWJTb2NrZXQ7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBHZXQgZWl0aGVyIHRoZSBgV2ViU29ja2V0YCBvciBgTW96V2ViU29ja2V0YCBnbG9iYWxzXG4gICAgICAgICAgICogaW4gdGhlIGJyb3dzZXIgb3IgdGhlIFdlYlNvY2tldC1jb21wYXRpYmxlIGludGVyZmFjZVxuICAgICAgICAgICAqIGV4cG9zZWQgYnkgYHdzYCBmb3IgTm9kZSBlbnZpcm9ubWVudC5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBXZWJTb2NrZXQgPSBCcm93c2VyV2ViU29ja2V0IHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IG51bGwgOiBfZGVyZXFfKCd3cycpKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZHVsZSBleHBvcnRzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBXUztcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFdlYlNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0b3IuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHtPYmplY3R9IGNvbm5lY3Rpb24gb3B0aW9uc1xuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiBXUyhvcHRzKSB7XG4gICAgICAgICAgICB2YXIgZm9yY2VCYXNlNjQgPSBvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQ7XG4gICAgICAgICAgICBpZiAoZm9yY2VCYXNlNjQpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IG9wdHMucGVyTWVzc2FnZURlZmxhdGU7XG4gICAgICAgICAgICBUcmFuc3BvcnQuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJbmhlcml0cyBmcm9tIFRyYW5zcG9ydC5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGluaGVyaXQoV1MsIFRyYW5zcG9ydCk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBXUy5wcm90b3R5cGUubmFtZSA9ICd3ZWJzb2NrZXQnO1xuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBXZWJTb2NrZXRzIHN1cHBvcnQgYmluYXJ5XG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBXUy5wcm90b3R5cGUuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogT3BlbnMgc29ja2V0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBXUy5wcm90b3R5cGUuZG9PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdXJpID0gdGhpcy51cmkoKTtcbiAgICAgICAgICAgIHZhciBwcm90b2NvbHMgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgICAgYWdlbnQ6IHRoaXMuYWdlbnQsXG4gICAgICAgICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlOiB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgICAgICAgICAgIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gICAgICAgICAgICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICAgICAgICAgICAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICAgICAgICAgICAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICAgICAgICAgICAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gICAgICAgICAgICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gICAgICAgICAgICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgICAgIG9wdHMuaGVhZGVycyA9IHRoaXMuZXh0cmFIZWFkZXJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLndzID0gQnJvd3NlcldlYlNvY2tldCA/IG5ldyBXZWJTb2NrZXQodXJpKSA6IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbHMsIG9wdHMpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy53cy5iaW5hcnlUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy53cy5zdXBwb3J0cyAmJiB0aGlzLndzLnN1cHBvcnRzLmJpbmFyeSkge1xuICAgICAgICAgICAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy53cy5iaW5hcnlUeXBlID0gJ2J1ZmZlcic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgV1MucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLndzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbk9wZW4oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLndzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICAgIHNlbGYub25EYXRhKGV2LmRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMud3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHNlbGYub25FcnJvcignd2Vic29ja2V0IGVycm9yJywgZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBPdmVycmlkZSBgb25EYXRhYCB0byB1c2UgYSB0aW1lciBvbiBpT1MuXG4gICAgICAgICAgICogU2VlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9tbG91Z2hyYW4vMjA1MjAwNlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIG5hdmlnYXRvciAmJiAvaVBhZHxpUGhvbmV8aVBvZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIFdTLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFRyYW5zcG9ydC5wcm90b3R5cGUub25EYXRhLmNhbGwoc2VsZiwgZGF0YSk7XG4gICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBXcml0ZXMgZGF0YSB0byBzb2NrZXQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBvZiBwYWNrZXRzLlxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgV1MucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gZW5jb2RlUGFja2V0IGVmZmljaWVudCBhcyBpdCB1c2VzIFdTIGZyYW1pbmdcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgZm9yIGVuY29kZVBheWxvYWRcbiAgICAgICAgICAgIHZhciB0b3RhbCA9IHBhY2tldHMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b3RhbDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAoZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgICAgICAgICAgIHBhcnNlci5lbmNvZGVQYWNrZXQocGFja2V0LCBzZWxmLnN1cHBvcnRzQmluYXJ5LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBjcmVhdGUgYSBuZXcgb2JqZWN0IChHSC00MzcpXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWNrZXQub3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBwYWNrZXQub3B0aW9ucy5jb21wcmVzcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9ICdzdHJpbmcnID09IHR5cGVvZiBkYXRhID8gZ2xvYmFsLkJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpIDogZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbiA8IHNlbGYucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vU29tZXRpbWVzIHRoZSB3ZWJzb2NrZXQgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnV0IHRoZSBicm93c2VyIGRpZG4ndFxuICAgICAgICAgICAgICAgICAgLy9oYXZlIGEgY2hhbmNlIG9mIGluZm9ybWluZyB1cyBhYm91dCBpdCB5ZXQsIGluIHRoYXQgY2FzZSBzZW5kIHdpbGxcbiAgICAgICAgICAgICAgICAgIC8vdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gVHlwZUVycm9yIGlzIHRocm93biB3aGVuIHBhc3NpbmcgdGhlIHNlY29uZCBhcmd1bWVudCBvbiBTYWZhcmlcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLndzLnNlbmQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi53cy5zZW5kKGRhdGEsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKCd3ZWJzb2NrZXQgY2xvc2VkIGJlZm9yZSBvbmNsb3NlIGV2ZW50Jyk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC0tdG90YWwgfHwgZG9uZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KShwYWNrZXRzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgICAgICAgICAgc2VsZi5lbWl0KCdmbHVzaCcpO1xuXG4gICAgICAgICAgICAgIC8vIGZha2UgZHJhaW5cbiAgICAgICAgICAgICAgLy8gZGVmZXIgdG8gbmV4dCB0aWNrIHRvIGFsbG93IFNvY2tldCB0byBjbGVhciB3cml0ZUJ1ZmZlclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ2RyYWluJyk7XG4gICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDYWxsZWQgdXBvbiBjbG9zZVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBXUy5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZS5jYWxsKHRoaXMpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDbG9zZXMgc29ja2V0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBXUy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy53cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBXUy5wcm90b3R5cGUudXJpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICAgICAgICAgIHZhciBzY2hlbWEgPSB0aGlzLnNlY3VyZSA/ICd3c3MnIDogJ3dzJztcbiAgICAgICAgICAgIHZhciBwb3J0ID0gJyc7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gICAgICAgICAgICBpZiAodGhpcy5wb3J0ICYmICgnd3NzJyA9PSBzY2hlbWEgJiYgdGhpcy5wb3J0ICE9IDQ0MyB8fCAnd3MnID09IHNjaGVtYSAmJiB0aGlzLnBvcnQgIT0gODApKSB7XG4gICAgICAgICAgICAgIHBvcnQgPSAnOicgKyB0aGlzLnBvcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aW1lc3RhbXAgdG8gVVJJXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgICAgICAgICBxdWVyeVt0aGlzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbW11bmljYXRlIGJpbmFyeSBzdXBwb3J0IGNhcGFiaWxpdGllc1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICAgICAgICAgIHF1ZXJ5LmI2NCA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgICAgICAgICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgICAgICAgICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcXVlcnkgPSAnPycgKyBxdWVyeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGlwdjYgPSB0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTE7XG4gICAgICAgICAgICByZXR1cm4gc2NoZW1hICsgJzovLycgKyAoaXB2NiA/ICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScgOiB0aGlzLmhvc3RuYW1lKSArIHBvcnQgKyB0aGlzLnBhdGggKyBxdWVyeTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmVhdHVyZSBkZXRlY3Rpb24gZm9yIFdlYlNvY2tldC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgdGhpcyB0cmFuc3BvcnQgaXMgYXZhaWxhYmxlLlxuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBXUy5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gISFXZWJTb2NrZXQgJiYgISgnX19pbml0aWFsaXplJyBpbiBXZWJTb2NrZXQgJiYgdGhpcy5uYW1lID09PSBXUy5wcm90b3R5cGUubmFtZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkuY2FsbCh0aGlzLCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgICAgIH0sIHsgXCIuLi90cmFuc3BvcnRcIjogNCwgXCJjb21wb25lbnQtaW5oZXJpdFwiOiAxNiwgXCJkZWJ1Z1wiOiAxNywgXCJlbmdpbmUuaW8tcGFyc2VyXCI6IDE5LCBcInBhcnNlcXNcIjogMjcsIFwid3NcIjogdW5kZWZpbmVkLCBcInllYXN0XCI6IDMwIH1dLCAxMDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgLy8gYnJvd3NlciBzaGltIGZvciB4bWxodHRwcmVxdWVzdCBtb2R1bGVcbiAgICAgICAgdmFyIGhhc0NPUlMgPSBfZGVyZXFfKCdoYXMtY29ycycpO1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICB2YXIgeGRvbWFpbiA9IG9wdHMueGRvbWFpbjtcblxuICAgICAgICAgIC8vIHNjaGVtZSBtdXN0IGJlIHNhbWUgd2hlbiB1c2lnbiBYRG9tYWluUmVxdWVzdFxuICAgICAgICAgIC8vIGh0dHA6Ly9ibG9ncy5tc2RuLmNvbS9iL2llaW50ZXJuYWxzL2FyY2hpdmUvMjAxMC8wNS8xMy94ZG9tYWlucmVxdWVzdC1yZXN0cmljdGlvbnMtbGltaXRhdGlvbnMtYW5kLXdvcmthcm91bmRzLmFzcHhcbiAgICAgICAgICB2YXIgeHNjaGVtZSA9IG9wdHMueHNjaGVtZTtcblxuICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0IGhhcyBhIGZsb3cgb2Ygbm90IHNlbmRpbmcgY29va2llLCB0aGVyZWZvcmUgaXQgc2hvdWxkIGJlIGRpc2FibGVkIGFzIGEgZGVmYXVsdC5cbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9lbmdpbmUuaW8tY2xpZW50L3B1bGwvMjE3XG4gICAgICAgICAgdmFyIGVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgICAgICAgICAvLyBYTUxIdHRwUmVxdWVzdCBjYW4gYmUgZGlzYWJsZWQgb24gSUVcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJiAoIXhkb21haW4gfHwgaGFzQ09SUykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAvLyBVc2UgWERvbWFpblJlcXVlc3QgZm9yIElFOCBpZiBlbmFibGVzWERSIGlzIHRydWVcbiAgICAgICAgICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS95dWppb3Nha2Evc29ja2UuaW8taWU4LWxvYWRpbmctZXhhbXBsZVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICYmICF4c2NoZW1lICYmIGVuYWJsZXNYRFIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICBpZiAoIXhkb21haW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSwgeyBcImhhcy1jb3JzXCI6IDIyIH1dLCAxMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBhZnRlcjtcblxuICAgICAgICBmdW5jdGlvbiBhZnRlcihjb3VudCwgY2FsbGJhY2ssIGVycl9jYikge1xuICAgICAgICAgIHZhciBiYWlsID0gZmFsc2U7XG4gICAgICAgICAgZXJyX2NiID0gZXJyX2NiIHx8IG5vb3A7XG4gICAgICAgICAgcHJveHkuY291bnQgPSBjb3VudDtcblxuICAgICAgICAgIHJldHVybiBjb3VudCA9PT0gMCA/IGNhbGxiYWNrKCkgOiBwcm94eTtcblxuICAgICAgICAgIGZ1bmN0aW9uIHByb3h5KGVyciwgcmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAocHJveHkuY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FmdGVyIGNhbGxlZCB0b28gbWFueSB0aW1lcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLS1wcm94eS5jb3VudDtcblxuICAgICAgICAgICAgLy8gYWZ0ZXIgZmlyc3QgZXJyb3IsIHJlc3QgYXJlIHBhc3NlZCB0byBlcnJfY2JcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgYmFpbCA9IHRydWU7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgIC8vIGZ1dHVyZSBlcnJvciBjYWxsYmFja3Mgd2lsbCBnbyB0byBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICAgIGNhbGxiYWNrID0gZXJyX2NiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm94eS5jb3VudCA9PT0gMCAmJiAhYmFpbCkge1xuICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICAgICAgfSwge31dLCAxMjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFic3RyYWN0aW9uIGZvciBzbGljaW5nIGFuIGFycmF5YnVmZmVyIGV2ZW4gd2hlblxuICAgICAgICAgKiBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcnJheWJ1ZmZlciwgc3RhcnQsIGVuZCkge1xuICAgICAgICAgIHZhciBieXRlcyA9IGFycmF5YnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICAgICAgICAgIGVuZCA9IGVuZCB8fCBieXRlcztcblxuICAgICAgICAgIGlmIChhcnJheWJ1ZmZlci5zbGljZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5YnVmZmVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgIHN0YXJ0ICs9IGJ5dGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZW5kIDwgMCkge1xuICAgICAgICAgICAgZW5kICs9IGJ5dGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZW5kID4gYnl0ZXMpIHtcbiAgICAgICAgICAgIGVuZCA9IGJ5dGVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGFydCA+PSBieXRlcyB8fCBzdGFydCA+PSBlbmQgfHwgYnl0ZXMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGFidiA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZW5kIC0gc3RhcnQpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydCwgaWkgPSAwOyBpIDwgZW5kOyBpKyssIGlpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpaV0gPSBhYnZbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQuYnVmZmVyO1xuICAgICAgICB9O1xuICAgICAgfSwge31dLCAxMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogYmFzZTY0LWFycmF5YnVmZmVyXG4gICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICAgICAgICAgKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gICAgICAgICAqL1xuICAgICAgICAoZnVuY3Rpb24gKGNoYXJzKSB7XG4gICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChhcnJheWJ1ZmZlcikge1xuICAgICAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgbGVuID0gYnl0ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJhc2U2NCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykge1xuICAgICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07XG4gICAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soYnl0ZXNbaV0gJiAzKSA8PCA0IHwgYnl0ZXNbaSArIDFdID4+IDRdO1xuICAgICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyIHwgYnl0ZXNbaSArIDJdID4+IDZdO1xuICAgICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGVuICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgXCI9PVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYmFzZTY0O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBleHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIChiYXNlNjQpIHtcbiAgICAgICAgICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICAgICAgICAgICAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgcCA9IDAsXG4gICAgICAgICAgICAgICAgZW5jb2RlZDEsXG4gICAgICAgICAgICAgICAgZW5jb2RlZDIsXG4gICAgICAgICAgICAgICAgZW5jb2RlZDMsXG4gICAgICAgICAgICAgICAgZW5jb2RlZDQ7XG5cbiAgICAgICAgICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgICAgICAgICAgICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICAgICAgICBlbmNvZGVkMSA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2ldKTtcbiAgICAgICAgICAgICAgZW5jb2RlZDIgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpICsgMV0pO1xuICAgICAgICAgICAgICBlbmNvZGVkMyA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2kgKyAyXSk7XG4gICAgICAgICAgICAgIGVuY29kZWQ0ID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSArIDNdKTtcblxuICAgICAgICAgICAgICBieXRlc1twKytdID0gZW5jb2RlZDEgPDwgMiB8IGVuY29kZWQyID4+IDQ7XG4gICAgICAgICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDIgJiAxNSkgPDwgNCB8IGVuY29kZWQzID4+IDI7XG4gICAgICAgICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDMgJiAzKSA8PCA2IHwgZW5jb2RlZDQgJiA2MztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiKTtcbiAgICAgIH0sIHt9XSwgMTQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ3JlYXRlIGEgYmxvYiBidWlsZGVyIGV2ZW4gd2hlbiB2ZW5kb3IgcHJlZml4ZXMgZXhpc3RcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBCbG9iQnVpbGRlciA9IGdsb2JhbC5CbG9iQnVpbGRlciB8fCBnbG9iYWwuV2ViS2l0QmxvYkJ1aWxkZXIgfHwgZ2xvYmFsLk1TQmxvYkJ1aWxkZXIgfHwgZ2xvYmFsLk1vekJsb2JCdWlsZGVyO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2hlY2sgaWYgQmxvYiBjb25zdHJ1Y3RvciBpcyBzdXBwb3J0ZWRcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBibG9iU3VwcG9ydGVkID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBhID0gbmV3IEJsb2IoWydoaSddKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuc2l6ZSA9PT0gMjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDaGVjayBpZiBCbG9iIGNvbnN0cnVjdG9yIHN1cHBvcnRzIEFycmF5QnVmZmVyVmlld3NcbiAgICAgICAgICAgKiBGYWlscyBpbiBTYWZhcmkgNiwgc28gd2UgbmVlZCB0byBtYXAgdG8gQXJyYXlCdWZmZXJzIHRoZXJlLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIGJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyA9IGJsb2JTdXBwb3J0ZWQgJiYgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBiID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KFsxLCAyXSldKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGIuc2l6ZSA9PT0gMjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDaGVjayBpZiBCbG9iQnVpbGRlciBpcyBzdXBwb3J0ZWRcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBibG9iQnVpbGRlclN1cHBvcnRlZCA9IEJsb2JCdWlsZGVyICYmIEJsb2JCdWlsZGVyLnByb3RvdHlwZS5hcHBlbmQgJiYgQmxvYkJ1aWxkZXIucHJvdG90eXBlLmdldEJsb2I7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBtYXBzIEFycmF5QnVmZmVyVmlld3MgdG8gQXJyYXlCdWZmZXJzXG4gICAgICAgICAgICogVXNlZCBieSBCbG9iQnVpbGRlciBjb25zdHJ1Y3RvciBhbmQgb2xkIGJyb3dzZXJzIHRoYXQgZGlkbid0XG4gICAgICAgICAgICogc3VwcG9ydCBpdCBpbiB0aGUgQmxvYiBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIG1hcEFycmF5QnVmZmVyVmlld3MoYXJ5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgY2h1bmsgPSBhcnlbaV07XG4gICAgICAgICAgICAgIGlmIChjaHVuay5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHZhciBidWYgPSBjaHVuay5idWZmZXI7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgc3ViYXJyYXksIG1ha2UgYSBjb3B5IHNvIHdlIG9ubHlcbiAgICAgICAgICAgICAgICAvLyBpbmNsdWRlIHRoZSBzdWJhcnJheSByZWdpb24gZnJvbSB0aGUgdW5kZXJseWluZyBidWZmZXJcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmsuYnl0ZUxlbmd0aCAhPT0gYnVmLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmsuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICBjb3B5LnNldChuZXcgVWludDhBcnJheShidWYsIGNodW5rLmJ5dGVPZmZzZXQsIGNodW5rLmJ5dGVMZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgIGJ1ZiA9IGNvcHkuYnVmZmVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFyeVtpXSA9IGJ1ZjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIEJsb2JCdWlsZGVyQ29uc3RydWN0b3IoYXJ5LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICAgICAgdmFyIGJiID0gbmV3IEJsb2JCdWlsZGVyKCk7XG4gICAgICAgICAgICBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGJiLmFwcGVuZChhcnlbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy50eXBlID8gYmIuZ2V0QmxvYihvcHRpb25zLnR5cGUpIDogYmIuZ2V0QmxvYigpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmdW5jdGlvbiBCbG9iQ29uc3RydWN0b3IoYXJ5LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoYXJ5LCBvcHRpb25zIHx8IHt9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGJsb2JTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyA/IGdsb2JhbC5CbG9iIDogQmxvYkNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChibG9iQnVpbGRlclN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gQmxvYkJ1aWxkZXJDb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfSkuY2FsbCh0aGlzLCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgICAgIH0sIHt9XSwgMTU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gICAgICAgICAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICAgICAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICAgICAgICAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKS5wdXNoKGZuKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gICAgICAgICAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAgICAgKiBAcmV0dXJuIHtFbWl0dGVyfVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgICAgICAgICBmdW5jdGlvbiBvbigpIHtcbiAgICAgICAgICAgIHNlbGYub2ZmKGV2ZW50LCBvbik7XG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9uLmZuID0gZm47XG4gICAgICAgICAgdGhpcy5vbihldmVudCwgb24pO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICAgICAgICAgKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICAgICAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgICAgICAgICAvLyBhbGxcbiAgICAgICAgICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gICAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gICAgICAgICAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICAgICAgICAgIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgICAgICAgICB2YXIgY2I7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICAgICAgICAgKiBAcmV0dXJuIHtFbWl0dGVyfVxuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgICBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gICAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gISF0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xuICAgICAgICB9O1xuICAgICAgfSwge31dLCAxNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gZm4oKSB7fTtcbiAgICAgICAgICBmbi5wcm90b3R5cGUgPSBiLnByb3RvdHlwZTtcbiAgICAgICAgICBhLnByb3RvdHlwZSA9IG5ldyBmbigpO1xuICAgICAgICAgIGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gYTtcbiAgICAgICAgfTtcbiAgICAgIH0sIHt9XSwgMTc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAgICAgICAgICpcbiAgICAgICAgICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKCcuL2RlYnVnJyk7XG4gICAgICAgIGV4cG9ydHMubG9nID0gbG9nO1xuICAgICAgICBleHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuICAgICAgICBleHBvcnRzLnNhdmUgPSBzYXZlO1xuICAgICAgICBleHBvcnRzLmxvYWQgPSBsb2FkO1xuICAgICAgICBleHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbiAgICAgICAgZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZSAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2UgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbCA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb2xvcnMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuY29sb3JzID0gWydsaWdodHNlYWdyZWVuJywgJ2ZvcmVzdGdyZWVuJywgJ2dvbGRlbnJvZCcsICdkb2RnZXJibHVlJywgJ2RhcmtvcmNoaWQnLCAnY3JpbXNvbiddO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICAgICAgICAgKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAgICAgICAgICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gICAgICAgICAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgICAgICAgICByZXR1cm4gJ1dlYmtpdEFwcGVhcmFuY2UnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSB8fFxuICAgICAgICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAgICAgICB3aW5kb3cuY29uc29sZSAmJiAoY29uc29sZS5maXJlYnVnIHx8IGNvbnNvbGUuZXhjZXB0aW9uICYmIGNvbnNvbGUudGFibGUpIHx8XG4gICAgICAgICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdEFyZ3MoKSB7XG4gICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gICAgICAgICAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpICsgdGhpcy5uYW1lc3BhY2UgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpICsgYXJnc1swXSArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgICAgICAgICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuIGFyZ3M7XG5cbiAgICAgICAgICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gICAgICAgICAgYXJncyA9IFthcmdzWzBdLCBjLCAnY29sb3I6IGluaGVyaXQnXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncywgMSkpO1xuXG4gICAgICAgICAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgICAgICAgICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gICAgICAgICAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICB2YXIgbGFzdEMgPSAwO1xuICAgICAgICAgIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXolXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgICAgICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgICAgICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbiAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAgICAgICAgICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gbG9nKCkge1xuICAgICAgICAgIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gICAgICAgICAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgICAgICAgICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUubG9nICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICAgICAgICAgKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICAgICAgICAgKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICAgIH0sIHsgXCIuL2RlYnVnXCI6IDE4IH1dLCAxODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICAgICAgICAgKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGRlYnVnO1xuICAgICAgICBleHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbiAgICAgICAgZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbiAgICAgICAgZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG4gICAgICAgIGV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgICAgIGV4cG9ydHMuaHVtYW5pemUgPSBfZGVyZXFfKCdtcycpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICAgICAgICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXJjYXNlZCBsZXR0ZXIsIGkuZS4gXCJuXCIuXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aW91c2x5IGFzc2lnbmVkIGNvbG9yLlxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgcHJldkNvbG9yID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlvdXMgbG9nIHRpbWVzdGFtcC5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIHByZXZUaW1lO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWxlY3QgYSBjb2xvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0Q29sb3IoKSB7XG4gICAgICAgICAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW3ByZXZDb2xvcisrICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gZGVidWcobmFtZXNwYWNlKSB7XG5cbiAgICAgICAgICAvLyBkZWZpbmUgdGhlIGBkaXNhYmxlZGAgdmVyc2lvblxuICAgICAgICAgIGZ1bmN0aW9uIGRpc2FibGVkKCkge31cbiAgICAgICAgICBkaXNhYmxlZC5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyBkZWZpbmUgdGhlIGBlbmFibGVkYCB2ZXJzaW9uXG4gICAgICAgICAgZnVuY3Rpb24gZW5hYmxlZCgpIHtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSBlbmFibGVkO1xuXG4gICAgICAgICAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgICAgICAgICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgICAgICAgICBzZWxmLmRpZmYgPSBtcztcbiAgICAgICAgICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgICAgICAgICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICAgICAgICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgICAgICAgICAgLy8gYWRkIHRoZSBgY29sb3JgIGlmIG5vdCBzZXRcbiAgICAgICAgICAgIGlmIChudWxsID09IHNlbGYudXNlQ29sb3JzKSBzZWxmLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBzZWxmLmNvbG9yICYmIHNlbGYudXNlQ29sb3JzKSBzZWxmLmNvbG9yID0gc2VsZWN0Q29sb3IoKTtcblxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgICAgICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJW9cbiAgICAgICAgICAgICAgYXJncyA9IFsnJW8nXS5jb25jYXQoYXJncyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16JV0pL2csIGZ1bmN0aW9uIChtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAgICAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgICAgICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuZm9ybWF0QXJncykge1xuICAgICAgICAgICAgICBhcmdzID0gZXhwb3J0cy5mb3JtYXRBcmdzLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxvZ0ZuID0gZW5hYmxlZC5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICAgICAgICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbmFibGVkLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIGZuID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSkgPyBlbmFibGVkIDogZGlzYWJsZWQ7XG5cbiAgICAgICAgICBmbi5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cbiAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICAgICAgICAgKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICAgICAgICAgIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICAgICAgICAgIHZhciBzcGxpdCA9IChuYW1lc3BhY2VzIHx8ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICAgICAgICAgIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICAgICAgICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgICAgICAgICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgICAgICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgICAgICBleHBvcnRzLmVuYWJsZSgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgaSwgbGVuO1xuICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29lcmNlIGB2YWxgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge01peGVkfSB2YWxcbiAgICAgICAgICogQHJldHVybiB7TWl4ZWR9XG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0sIHsgXCJtc1wiOiAyNSB9XSwgMTk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBrZXlzID0gX2RlcmVxXygnLi9rZXlzJyk7XG4gICAgICAgICAgdmFyIGhhc0JpbmFyeSA9IF9kZXJlcV8oJ2hhcy1iaW5hcnknKTtcbiAgICAgICAgICB2YXIgc2xpY2VCdWZmZXIgPSBfZGVyZXFfKCdhcnJheWJ1ZmZlci5zbGljZScpO1xuICAgICAgICAgIHZhciBiYXNlNjRlbmNvZGVyID0gX2RlcmVxXygnYmFzZTY0LWFycmF5YnVmZmVyJyk7XG4gICAgICAgICAgdmFyIGFmdGVyID0gX2RlcmVxXygnYWZ0ZXInKTtcbiAgICAgICAgICB2YXIgdXRmOCA9IF9kZXJlcV8oJ3V0ZjgnKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENoZWNrIGlmIHdlIGFyZSBydW5uaW5nIGFuIGFuZHJvaWQgYnJvd3Nlci4gVGhhdCByZXF1aXJlcyB1cyB0byB1c2VcbiAgICAgICAgICAgKiBBcnJheUJ1ZmZlciB3aXRoIHBvbGxpbmcgdHJhbnNwb3J0cy4uLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogaHR0cDovL2doaW5kYS5uZXQvanBlZy1ibG9iLWFqYXgtYW5kcm9pZC9cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBpc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2hlY2sgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gUGhhbnRvbUpTLlxuICAgICAgICAgICAqIFVwbG9hZGluZyBhIEJsb2Igd2l0aCBQaGFudG9tSlMgZG9lcyBub3Qgd29yayBjb3JyZWN0bHksIGFzIHJlcG9ydGVkIGhlcmU6XG4gICAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FyaXlhL3BoYW50b21qcy9pc3N1ZXMvMTEzOTVcbiAgICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIGlzUGhhbnRvbUpTID0gL1BoYW50b21KUy9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBXaGVuIHRydWUsIGF2b2lkcyB1c2luZyBCbG9icyB0byBlbmNvZGUgcGF5bG9hZHMuXG4gICAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBkb250U2VuZEJsb2JzID0gaXNBbmRyb2lkIHx8IGlzUGhhbnRvbUpTO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ3VycmVudCBwcm90b2NvbCB2ZXJzaW9uLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5wcm90b2NvbCA9IDM7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBQYWNrZXQgdHlwZXMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgcGFja2V0cyA9IGV4cG9ydHMucGFja2V0cyA9IHtcbiAgICAgICAgICAgIG9wZW46IDAsIC8vIG5vbi13c1xuICAgICAgICAgICAgY2xvc2U6IDEsIC8vIG5vbi13c1xuICAgICAgICAgICAgcGluZzogMixcbiAgICAgICAgICAgIHBvbmc6IDMsXG4gICAgICAgICAgICBtZXNzYWdlOiA0LFxuICAgICAgICAgICAgdXBncmFkZTogNSxcbiAgICAgICAgICAgIG5vb3A6IDZcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIHBhY2tldHNsaXN0ID0ga2V5cyhwYWNrZXRzKTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFByZW1hZGUgZXJyb3IgcGFja2V0LlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIGVyciA9IHsgdHlwZTogJ2Vycm9yJywgZGF0YTogJ3BhcnNlciBlcnJvcicgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENyZWF0ZSBhIGJsb2IgYXBpIGV2ZW4gZm9yIGJsb2IgYnVpbGRlciB3aGVuIHZlbmRvciBwcmVmaXhlcyBleGlzdFxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIEJsb2IgPSBfZGVyZXFfKCdibG9iJyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBFbmNvZGVzIGEgcGFja2V0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogICAgIDxwYWNrZXQgdHlwZSBpZD4gWyA8ZGF0YT4gXVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogRXhhbXBsZTpcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqICAgICA1aGVsbG8gd29ybGRcbiAgICAgICAgICAgKiAgICAgM1xuICAgICAgICAgICAqICAgICA0XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBCaW5hcnkgaXMgZW5jb2RlZCBpbiBhbiBpZGVudGljYWwgcHJpbmNpcGxlXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIHV0ZjhlbmNvZGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2sgPSBzdXBwb3J0c0JpbmFyeTtcbiAgICAgICAgICAgICAgc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHV0ZjhlbmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2sgPSB1dGY4ZW5jb2RlO1xuICAgICAgICAgICAgICB1dGY4ZW5jb2RlID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBwYWNrZXQuZGF0YSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcGFja2V0LmRhdGEuYnVmZmVyIHx8IHBhY2tldC5kYXRhO1xuXG4gICAgICAgICAgICBpZiAoZ2xvYmFsLkFycmF5QnVmZmVyICYmIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChCbG9iICYmIGRhdGEgaW5zdGFuY2VvZiBnbG9iYWwuQmxvYikge1xuICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlQmxvYihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG1pZ2h0IGJlIGFuIG9iamVjdCB3aXRoIHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBkYXRhQXNCYXNlNjRTdHJpbmcgfVxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5iYXNlNjQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZUJhc2U2NE9iamVjdChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2VuZGluZyBkYXRhIGFzIGEgdXRmLTggc3RyaW5nXG4gICAgICAgICAgICB2YXIgZW5jb2RlZCA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuXG4gICAgICAgICAgICAvLyBkYXRhIGZyYWdtZW50IGlzIG9wdGlvbmFsXG4gICAgICAgICAgICBpZiAodW5kZWZpbmVkICE9PSBwYWNrZXQuZGF0YSkge1xuICAgICAgICAgICAgICBlbmNvZGVkICs9IHV0ZjhlbmNvZGUgPyB1dGY4LmVuY29kZShTdHJpbmcocGFja2V0LmRhdGEpKSA6IFN0cmluZyhwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygnJyArIGVuY29kZWQpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmdW5jdGlvbiBlbmNvZGVCYXNlNjRPYmplY3QocGFja2V0LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gcGFja2V0IGRhdGEgaXMgYW4gb2JqZWN0IHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBkYXRhQXNCYXNlNjRTdHJpbmcgfVxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnYicgKyBleHBvcnRzLnBhY2tldHNbcGFja2V0LnR5cGVdICsgcGFja2V0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZXNzYWdlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBFbmNvZGUgcGFja2V0IGhlbHBlcnMgZm9yIGJpbmFyeSB0eXBlc1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gZW5jb2RlQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHBhY2tldC5kYXRhO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDEgKyBkYXRhLmJ5dGVMZW5ndGgpO1xuXG4gICAgICAgICAgICByZXN1bHRCdWZmZXJbMF0gPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHJlc3VsdEJ1ZmZlcltpICsgMV0gPSBjb250ZW50QXJyYXlbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHRCdWZmZXIuYnVmZmVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBlbmNvZGVCbG9iQXNBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICBmci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHBhY2tldC5kYXRhID0gZnIucmVzdWx0O1xuICAgICAgICAgICAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCB0cnVlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGZyLnJlYWRBc0FycmF5QnVmZmVyKHBhY2tldC5kYXRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBlbmNvZGVCbG9iKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRvbnRTZW5kQmxvYnMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0FycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgICAgICAgICAgbGVuZ3RoWzBdID0gcGFja2V0c1twYWNrZXQudHlwZV07XG4gICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtsZW5ndGguYnVmZmVyLCBwYWNrZXQuZGF0YV0pO1xuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soYmxvYik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRW5jb2RlcyBhIHBhY2tldCB3aXRoIGJpbmFyeSBkYXRhIGluIGEgYmFzZTY0IHN0cmluZ1xuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCwgaGFzIGB0eXBlYCBhbmQgYGRhdGFgXG4gICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfSBiYXNlNjQgZW5jb2RlZCBtZXNzYWdlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICdiJyArIGV4cG9ydHMucGFja2V0c1twYWNrZXQudHlwZV07XG4gICAgICAgICAgICBpZiAoQmxvYiAmJiBwYWNrZXQuZGF0YSBpbnN0YW5jZW9mIGdsb2JhbC5CbG9iKSB7XG4gICAgICAgICAgICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgIGZyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYjY0ID0gZnIucmVzdWx0LnNwbGl0KCcsJylbMV07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVzc2FnZSArIGI2NCk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybiBmci5yZWFkQXNEYXRhVVJMKHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGI2NGRhdGE7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBiNjRkYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShwYWNrZXQuZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAvLyBpUGhvbmUgU2FmYXJpIGRvZXNuJ3QgbGV0IHlvdSBhcHBseSB3aXRoIHR5cGVkIGFycmF5c1xuICAgICAgICAgICAgICB2YXIgdHlwZWQgPSBuZXcgVWludDhBcnJheShwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICAgIHZhciBiYXNpYyA9IG5ldyBBcnJheSh0eXBlZC5sZW5ndGgpO1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmFzaWNbaV0gPSB0eXBlZFtpXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBiNjRkYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBiYXNpYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlICs9IGdsb2JhbC5idG9hKGI2NGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG1lc3NhZ2UpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBEZWNvZGVzIGEgcGFja2V0LiBDaGFuZ2VzIGZvcm1hdCB0byBCbG9iIGlmIHJlcXVlc3RlZC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBgdHlwZWAgYW5kIGBkYXRhYCAoaWYgYW55KVxuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5kZWNvZGVQYWNrZXQgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgdXRmOGRlY29kZSkge1xuICAgICAgICAgICAgLy8gU3RyaW5nIGRhdGFcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJyB8fCBkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEuY2hhckF0KDApID09ICdiJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmRlY29kZUJhc2U2NFBhY2tldChkYXRhLnN1YnN0cigxKSwgYmluYXJ5VHlwZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodXRmOGRlY29kZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBkYXRhID0gdXRmOC5kZWNvZGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIHR5cGUgPSBkYXRhLmNoYXJBdCgwKTtcblxuICAgICAgICAgICAgICBpZiAoTnVtYmVyKHR5cGUpICE9IHR5cGUgfHwgIXBhY2tldHNsaXN0W3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSwgZGF0YTogZGF0YS5zdWJzdHJpbmcoMSkgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhc0FycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGFzQXJyYXlbMF07XG4gICAgICAgICAgICB2YXIgcmVzdCA9IHNsaWNlQnVmZmVyKGRhdGEsIDEpO1xuICAgICAgICAgICAgaWYgKEJsb2IgJiYgYmluYXJ5VHlwZSA9PT0gJ2Jsb2InKSB7XG4gICAgICAgICAgICAgIHJlc3QgPSBuZXcgQmxvYihbcmVzdF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0sIGRhdGE6IHJlc3QgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRGVjb2RlcyBhIHBhY2tldCBlbmNvZGVkIGluIGEgYmFzZTY0IHN0cmluZ1xuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGJhc2U2NCBlbmNvZGVkIG1lc3NhZ2VcbiAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggYHR5cGVgIGFuZCBgZGF0YWAgKGlmIGFueSlcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMuZGVjb2RlQmFzZTY0UGFja2V0ID0gZnVuY3Rpb24gKG1zZywgYmluYXJ5VHlwZSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBwYWNrZXRzbGlzdFttc2cuY2hhckF0KDApXTtcbiAgICAgICAgICAgIGlmICghZ2xvYmFsLkFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IHR5cGUsIGRhdGE6IHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBtc2cuc3Vic3RyKDEpIH0gfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBiYXNlNjRlbmNvZGVyLmRlY29kZShtc2cuc3Vic3RyKDEpKTtcblxuICAgICAgICAgICAgaWYgKGJpbmFyeVR5cGUgPT09ICdibG9iJyAmJiBCbG9iKSB7XG4gICAgICAgICAgICAgIGRhdGEgPSBuZXcgQmxvYihbZGF0YV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBkYXRhOiBkYXRhIH07XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEVuY29kZXMgbXVsdGlwbGUgbWVzc2FnZXMgKHBheWxvYWQpLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogICAgIDxsZW5ndGg+OmRhdGFcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiAgICAgMTE6aGVsbG8gd29ybGQyOmhpXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBJZiBhbnkgY29udGVudHMgYXJlIGJpbmFyeSwgdGhleSB3aWxsIGJlIGVuY29kZWQgYXMgYmFzZTY0IHN0cmluZ3MuIEJhc2U2NFxuICAgICAgICAgICAqIGVuY29kZWQgc3RyaW5ncyBhcmUgbWFya2VkIHdpdGggYSBiIGJlZm9yZSB0aGUgbGVuZ3RoIHNwZWNpZmllclxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICAgICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5lbmNvZGVQYXlsb2FkID0gZnVuY3Rpb24gKHBhY2tldHMsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdXBwb3J0c0JpbmFyeSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgICAgICAgICAgIHN1cHBvcnRzQmluYXJ5ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGlzQmluYXJ5ID0gaGFzQmluYXJ5KHBhY2tldHMpO1xuXG4gICAgICAgICAgICBpZiAoc3VwcG9ydHNCaW5hcnkgJiYgaXNCaW5hcnkpIHtcbiAgICAgICAgICAgICAgaWYgKEJsb2IgJiYgIWRvbnRTZW5kQmxvYnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iKHBhY2tldHMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyKHBhY2tldHMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFwYWNrZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soJzA6Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldExlbmd0aEhlYWRlcihtZXNzYWdlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLmxlbmd0aCArICc6JyArIG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGVuY29kZU9uZShwYWNrZXQsIGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgICAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsICFpc0JpbmFyeSA/IGZhbHNlIDogc3VwcG9ydHNCaW5hcnksIHRydWUsIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrKG51bGwsIHNldExlbmd0aEhlYWRlcihtZXNzYWdlKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHRzLmpvaW4oJycpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBc3luYyBhcnJheSBtYXAgdXNpbmcgYWZ0ZXJcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIG1hcChhcnksIGVhY2gsIGRvbmUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoYXJ5Lmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IGFmdGVyKGFyeS5sZW5ndGgsIGRvbmUpO1xuXG4gICAgICAgICAgICB2YXIgZWFjaFdpdGhJbmRleCA9IGZ1bmN0aW9uIGVhY2hXaXRoSW5kZXgoaSwgZWwsIGNiKSB7XG4gICAgICAgICAgICAgIGVhY2goZWwsIGZ1bmN0aW9uIChlcnJvciwgbXNnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gbXNnO1xuICAgICAgICAgICAgICAgIGNiKGVycm9yLCByZXN1bHQpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGVhY2hXaXRoSW5kZXgoaSwgYXJ5W2ldLCBuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIERlY29kZXMgZGF0YSB3aGVuIGEgcGF5bG9hZCBpcyBtYXliZSBleHBlY3RlZC4gUG9zc2libGUgYmluYXJ5IGNvbnRlbnRzIGFyZVxuICAgICAgICAgICAqIGRlY29kZWQgZnJvbSB0aGVpciBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLCBjYWxsYmFjayBtZXRob2RcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5kZWNvZGVQYXlsb2FkID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuZGVjb2RlUGF5bG9hZEFzQmluYXJ5KGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBiaW5hcnlUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrID0gYmluYXJ5VHlwZTtcbiAgICAgICAgICAgICAgYmluYXJ5VHlwZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYWNrZXQ7XG4gICAgICAgICAgICBpZiAoZGF0YSA9PSAnJykge1xuICAgICAgICAgICAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gJycsXG4gICAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgICBtc2c7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIGNociA9IGRhdGEuY2hhckF0KGkpO1xuXG4gICAgICAgICAgICAgIGlmICgnOicgIT0gY2hyKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9IGNocjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJycgPT0gbGVuZ3RoIHx8IGxlbmd0aCAhPSAobiA9IE51bWJlcihsZW5ndGgpKSkge1xuICAgICAgICAgICAgICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbXNnID0gZGF0YS5zdWJzdHIoaSArIDEsIG4pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCAhPSBtc2cubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobXNnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgcGFja2V0ID0gZXhwb3J0cy5kZWNvZGVQYWNrZXQobXNnLCBiaW5hcnlUeXBlLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGVyci50eXBlID09IHBhY2tldC50eXBlICYmIGVyci5kYXRhID09IHBhY2tldC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlciBlcnJvciBpbiBpbmRpdmlkdWFsIHBhY2tldCAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHZhciByZXQgPSBjYWxsYmFjayhwYWNrZXQsIGkgKyBuLCBsKTtcbiAgICAgICAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gcmV0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWR2YW5jZSBjdXJzb3JcbiAgICAgICAgICAgICAgICBpICs9IG47XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxlbmd0aCAhPSAnJykge1xuICAgICAgICAgICAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBFbmNvZGVzIG11bHRpcGxlIG1lc3NhZ2VzIChwYXlsb2FkKSBhcyBiaW5hcnkuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiA8MSA9IGJpbmFyeSwgMCA9IHN0cmluZz48bnVtYmVyIGZyb20gMC05PjxudW1iZXIgZnJvbSAwLTk+Wy4uLl08bnVtYmVyXG4gICAgICAgICAgICogMjU1PjxkYXRhPlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogRXhhbXBsZTpcbiAgICAgICAgICAgKiAxIDMgMjU1IDEgMiAzLCBpZiB0aGUgYmluYXJ5IGNvbnRlbnRzIGFyZSBpbnRlcnByZXRlZCBhcyA4IGJpdCBpbnRlZ2Vyc1xuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICAgICAgICAgICAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBlbmNvZGVkIHBheWxvYWRcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAocGFja2V0cywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghcGFja2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBBcnJheUJ1ZmZlcigwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGVuY29kZU9uZShwYWNrZXQsIGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgICAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsIHRydWUsIHRydWUsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmVDYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uIChlcnIsIGVuY29kZWRQYWNrZXRzKSB7XG4gICAgICAgICAgICAgIHZhciB0b3RhbExlbmd0aCA9IGVuY29kZWRQYWNrZXRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBsZW4gPSBwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbGVuID0gcC5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjICsgbGVuLnRvU3RyaW5nKCkubGVuZ3RoICsgbGVuICsgMjsgLy8gc3RyaW5nL2JpbmFyeSBpZGVudGlmaWVyICsgc2VwYXJhdG9yID0gMlxuICAgICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICAgICAgICB2YXIgcmVzdWx0QXJyYXkgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XG5cbiAgICAgICAgICAgICAgdmFyIGJ1ZmZlckluZGV4ID0gMDtcbiAgICAgICAgICAgICAgZW5jb2RlZFBhY2tldHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIHZhciBpc1N0cmluZyA9IHR5cGVvZiBwID09PSAnc3RyaW5nJztcbiAgICAgICAgICAgICAgICB2YXIgYWIgPSBwO1xuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShwLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmlld1tpXSA9IHAuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGFiID0gdmlldy5idWZmZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAvLyBub3QgdHJ1ZSBiaW5hcnlcbiAgICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gdHJ1ZSBiaW5hcnlcbiAgICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbGVuU3RyID0gYWIuYnl0ZUxlbmd0aC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuU3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IHBhcnNlSW50KGxlblN0cltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMjU1O1xuXG4gICAgICAgICAgICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShhYik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IHZpZXdbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0QXJyYXkuYnVmZmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBFbmNvZGUgYXMgQmxvYlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iID0gZnVuY3Rpb24gKHBhY2tldHMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCB0cnVlLCBmdW5jdGlvbiAoZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIHZhciBiaW5hcnlJZGVudGlmaWVyID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgICAgICAgICAgICAgYmluYXJ5SWRlbnRpZmllclswXSA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmNvZGVkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShlbmNvZGVkLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmlld1tpXSA9IGVuY29kZWQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVuY29kZWQgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgIGJpbmFyeUlkZW50aWZpZXJbMF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBsZW4gPSBlbmNvZGVkIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBlbmNvZGVkLmJ5dGVMZW5ndGggOiBlbmNvZGVkLnNpemU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGVuU3RyID0gbGVuLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aEFyeSA9IG5ldyBVaW50OEFycmF5KGxlblN0ci5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlblN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgbGVuZ3RoQXJ5W2ldID0gcGFyc2VJbnQobGVuU3RyW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVuZ3RoQXJ5W2xlblN0ci5sZW5ndGhdID0gMjU1O1xuXG4gICAgICAgICAgICAgICAgaWYgKEJsb2IpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2JpbmFyeUlkZW50aWZpZXIuYnVmZmVyLCBsZW5ndGhBcnkuYnVmZmVyLCBlbmNvZGVkXSk7XG4gICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2sobnVsbCwgYmxvYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFwKHBhY2tldHMsIGVuY29kZU9uZSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEJsb2IocmVzdWx0cykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogRGVjb2RlcyBkYXRhIHdoZW4gYSBwYXlsb2FkIGlzIG1heWJlIGV4cGVjdGVkLiBTdHJpbmdzIGFyZSBkZWNvZGVkIGJ5XG4gICAgICAgICAgICogaW50ZXJwcmV0aW5nIGVhY2ggYnl0ZSBhcyBhIGtleSBjb2RlIGZvciBlbnRyaWVzIG1hcmtlZCB0byBzdGFydCB3aXRoIDAuIFNlZVxuICAgICAgICAgICAqIGRlc2NyaXB0aW9uIG9mIGVuY29kZVBheWxvYWRBc0JpbmFyeVxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gZGF0YSwgY2FsbGJhY2sgbWV0aG9kXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGV4cG9ydHMuZGVjb2RlUGF5bG9hZEFzQmluYXJ5ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJpbmFyeVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2sgPSBiaW5hcnlUeXBlO1xuICAgICAgICAgICAgICBiaW5hcnlUeXBlID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGJ1ZmZlclRhaWwgPSBkYXRhO1xuICAgICAgICAgICAgdmFyIGJ1ZmZlcnMgPSBbXTtcblxuICAgICAgICAgICAgdmFyIG51bWJlclRvb0xvbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlIChidWZmZXJUYWlsLmJ5dGVMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHZhciB0YWlsQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJUYWlsKTtcbiAgICAgICAgICAgICAgdmFyIGlzU3RyaW5nID0gdGFpbEFycmF5WzBdID09PSAwO1xuICAgICAgICAgICAgICB2YXIgbXNnTGVuZ3RoID0gJyc7XG5cbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGFpbEFycmF5W2ldID09IDI1NSkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBpZiAobXNnTGVuZ3RoLmxlbmd0aCA+IDMxMCkge1xuICAgICAgICAgICAgICAgICAgbnVtYmVyVG9vTG9uZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtc2dMZW5ndGggKz0gdGFpbEFycmF5W2ldO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG51bWJlclRvb0xvbmcpIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuXG4gICAgICAgICAgICAgIGJ1ZmZlclRhaWwgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCAyICsgbXNnTGVuZ3RoLmxlbmd0aCk7XG4gICAgICAgICAgICAgIG1zZ0xlbmd0aCA9IHBhcnNlSW50KG1zZ0xlbmd0aCk7XG5cbiAgICAgICAgICAgICAgdmFyIG1zZyA9IHNsaWNlQnVmZmVyKGJ1ZmZlclRhaWwsIDAsIG1zZ0xlbmd0aCk7XG4gICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBtc2cgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KG1zZykpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlQaG9uZSBTYWZhcmkgZG9lc24ndCBsZXQgeW91IGFwcGx5IHRvIHR5cGVkIGFycmF5c1xuICAgICAgICAgICAgICAgICAgdmFyIHR5cGVkID0gbmV3IFVpbnQ4QXJyYXkobXNnKTtcbiAgICAgICAgICAgICAgICAgIG1zZyA9ICcnO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBtc2cgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh0eXBlZFtpXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnVmZmVycy5wdXNoKG1zZyk7XG4gICAgICAgICAgICAgIGJ1ZmZlclRhaWwgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCBtc2dMZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdG90YWwgPSBidWZmZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIGJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbiAoYnVmZmVyLCBpKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKGV4cG9ydHMuZGVjb2RlUGFja2V0KGJ1ZmZlciwgYmluYXJ5VHlwZSwgdHJ1ZSksIGksIHRvdGFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7IFwiLi9rZXlzXCI6IDIwLCBcImFmdGVyXCI6IDExLCBcImFycmF5YnVmZmVyLnNsaWNlXCI6IDEyLCBcImJhc2U2NC1hcnJheWJ1ZmZlclwiOiAxMywgXCJibG9iXCI6IDE0LCBcImhhcy1iaW5hcnlcIjogMjEsIFwidXRmOFwiOiAyOSB9XSwgMjA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGtleXMgZm9yIGFuIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7QXJyYXl9IGtleXNcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhvYmopIHtcbiAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgdmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICAgICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKG9iaiwgaSkpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH07XG4gICAgICB9LCB7fV0sIDIxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgdmFyIGlzQXJyYXkgPSBfZGVyZXFfKCdpc2FycmF5Jyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gaGFzQmluYXJ5O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2hlY2tzIGZvciBiaW5hcnkgZGF0YS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFJpZ2h0IG5vdyBvbmx5IEJ1ZmZlciBhbmQgQXJyYXlCdWZmZXIgYXJlIHN1cHBvcnRlZC4uXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gYW55dGhpbmdcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZnVuY3Rpb24gaGFzQmluYXJ5KGRhdGEpIHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gX2hhc0JpbmFyeShvYmopIHtcbiAgICAgICAgICAgICAgaWYgKCFvYmopIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAoZ2xvYmFsLkJ1ZmZlciAmJiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgZ2xvYmFsLkFycmF5QnVmZmVyICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGdsb2JhbC5CbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IgfHwgZ2xvYmFsLkZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoX2hhc0JpbmFyeShvYmpbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmogJiYgJ29iamVjdCcgPT0gdHlwZW9mIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChvYmoudG9KU09OKSB7XG4gICAgICAgICAgICAgICAgICBvYmogPSBvYmoudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgJiYgX2hhc0JpbmFyeShvYmpba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2hhc0JpbmFyeShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7IFwiaXNhcnJheVwiOiAyNCB9XSwgMjI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZHVsZSBleHBvcnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBMb2dpYyBib3Jyb3dlZCBmcm9tIE1vZGVybml6cjpcbiAgICAgICAgICpcbiAgICAgICAgICogICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb3JzLmpzXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBpZiBYTUxIdHRwIHN1cHBvcnQgaXMgZGlzYWJsZWQgaW4gSUUgdGhlbiBpdCB3aWxsIHRocm93XG4gICAgICAgICAgLy8gd2hlbiB0cnlpbmcgdG8gY3JlYXRlXG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSwge31dLCAyMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICB2YXIgaW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJyLCBvYmopIHtcbiAgICAgICAgICBpZiAoaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfTtcbiAgICAgIH0sIHt9XSwgMjQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgIH07XG4gICAgICB9LCB7fV0sIDI1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVycy5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIHMgPSAxMDAwO1xuICAgICAgICB2YXIgbSA9IHMgKiA2MDtcbiAgICAgICAgdmFyIGggPSBtICogNjA7XG4gICAgICAgIHZhciBkID0gaCAqIDI0O1xuICAgICAgICB2YXIgeSA9IGQgKiAzNjUuMjU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIE9wdGlvbnM6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIHZhbCkgcmV0dXJuIHBhcnNlKHZhbCk7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGxvbmcodmFsKSA6IHNob3J0KHZhbCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgICAgICAgICBzdHIgPSAnJyArIHN0cjtcbiAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDEwMDAwKSByZXR1cm47XG4gICAgICAgICAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhzdHIpO1xuICAgICAgICAgIGlmICghbWF0Y2gpIHJldHVybjtcbiAgICAgICAgICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICAgICAgICAgIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd5ZWFycyc6XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIGNhc2UgJ3lycyc6XG4gICAgICAgICAgICBjYXNlICd5cic6XG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgcmV0dXJuIG4gKiB5O1xuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgIHJldHVybiBuICogZDtcbiAgICAgICAgICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgY2FzZSAnaHJzJzpcbiAgICAgICAgICAgIGNhc2UgJ2hyJzpcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICByZXR1cm4gbiAqIGg7XG4gICAgICAgICAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICBjYXNlICdtaW5zJzpcbiAgICAgICAgICAgIGNhc2UgJ21pbic6XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgcmV0dXJuIG4gKiBtO1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgY2FzZSAnc2Vjcyc6XG4gICAgICAgICAgICBjYXNlICdzZWMnOlxuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgIHJldHVybiBuICogcztcbiAgICAgICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgICAgICAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgICAgICAgICBjYXNlICdtc2Vjcyc6XG4gICAgICAgICAgICBjYXNlICdtc2VjJzpcbiAgICAgICAgICAgIGNhc2UgJ21zJzpcbiAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIHNob3J0KG1zKSB7XG4gICAgICAgICAgaWYgKG1zID49IGQpIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gICAgICAgICAgaWYgKG1zID49IGgpIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gICAgICAgICAgaWYgKG1zID49IG0pIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gICAgICAgICAgaWYgKG1zID49IHMpIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gICAgICAgICAgcmV0dXJuIG1zICsgJ21zJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvbmcobXMpIHtcbiAgICAgICAgICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHwgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8IHBsdXJhbChtcywgbSwgJ21pbnV0ZScpIHx8IHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8IG1zICsgJyBtcyc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICAgICAgICAgIGlmIChtcyA8IG4pIHJldHVybjtcbiAgICAgICAgICBpZiAobXMgPCBuICogMS41KSByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZTtcbiAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xuICAgICAgICB9XG4gICAgICB9LCB7fV0sIDI2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEpTT04gcGFyc2UuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAc2VlIEJhc2VkIG9uIGpRdWVyeSNwYXJzZUpTT04gKE1JVCkgYW5kIEpTT04yXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgcnZhbGlkY2hhcnMgPSAvXltcXF0sOnt9XFxzXSokLztcbiAgICAgICAgICB2YXIgcnZhbGlkZXNjYXBlID0gL1xcXFwoPzpbXCJcXFxcXFwvYmZucnRdfHVbMC05YS1mQS1GXXs0fSkvZztcbiAgICAgICAgICB2YXIgcnZhbGlkdG9rZW5zID0gL1wiW15cIlxcXFxcXG5cXHJdKlwifHRydWV8ZmFsc2V8bnVsbHwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWytcXC1dP1xcZCspPy9nO1xuICAgICAgICAgIHZhciBydmFsaWRicmFjZXMgPSAvKD86Xnw6fCwpKD86XFxzKlxcWykrL2c7XG4gICAgICAgICAgdmFyIHJ0cmltTGVmdCA9IC9eXFxzKy87XG4gICAgICAgICAgdmFyIHJ0cmltUmlnaHQgPSAvXFxzKyQvO1xuXG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZWpzb24oZGF0YSkge1xuICAgICAgICAgICAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiBkYXRhIHx8ICFkYXRhKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKHJ0cmltTGVmdCwgJycpLnJlcGxhY2UocnRyaW1SaWdodCwgJycpO1xuXG4gICAgICAgICAgICAvLyBBdHRlbXB0IHRvIHBhcnNlIHVzaW5nIHRoZSBuYXRpdmUgSlNPTiBwYXJzZXIgZmlyc3RcbiAgICAgICAgICAgIGlmIChnbG9iYWwuSlNPTiAmJiBKU09OLnBhcnNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocnZhbGlkY2hhcnMudGVzdChkYXRhLnJlcGxhY2UocnZhbGlkZXNjYXBlLCAnQCcpLnJlcGxhY2UocnZhbGlkdG9rZW5zLCAnXScpLnJlcGxhY2UocnZhbGlkYnJhY2VzLCAnJykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oJ3JldHVybiAnICsgZGF0YSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwge31dLCAyNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXBpbGVzIGEgcXVlcnlzdHJpbmdcbiAgICAgICAgICogUmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH1cbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBzdHIgPSAnJztcblxuICAgICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoKSBzdHIgKz0gJyYnO1xuICAgICAgICAgICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBxc1xuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAocXMpIHtcbiAgICAgICAgICB2YXIgcXJ5ID0ge307XG4gICAgICAgICAgdmFyIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgcXJ5W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBxcnk7XG4gICAgICAgIH07XG4gICAgICB9LCB7fV0sIDI4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAvKipcbiAgICAgICAgICogUGFyc2VzIGFuIFVSSVxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXV0aG9yIFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPiAoTUlUIGxpY2Vuc2UpXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgcmUgPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShodHRwfGh0dHBzfHdzfHdzcyk6XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPygoPzpbYS1mMC05XXswLDR9Oil7Miw3fVthLWYwLTldezAsNH18W146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcblxuICAgICAgICB2YXIgcGFydHMgPSBbJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXTtcblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xuICAgICAgICAgIHZhciBzcmMgPSBzdHIsXG4gICAgICAgICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxuICAgICAgICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcblxuICAgICAgICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgYikgKyBzdHIuc3Vic3RyaW5nKGIsIGUpLnJlcGxhY2UoLzovZywgJzsnKSArIHN0ci5zdWJzdHJpbmcoZSwgc3RyLmxlbmd0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG0gPSByZS5leGVjKHN0ciB8fCAnJyksXG4gICAgICAgICAgICAgIHVyaSA9IHt9LFxuICAgICAgICAgICAgICBpID0gMTQ7XG5cbiAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB1cmlbcGFydHNbaV1dID0gbVtpXSB8fCAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgICAgICB1cmkuc291cmNlID0gc3JjO1xuICAgICAgICAgICAgdXJpLmhvc3QgPSB1cmkuaG9zdC5zdWJzdHJpbmcoMSwgdXJpLmhvc3QubGVuZ3RoIC0gMSkucmVwbGFjZSgvOy9nLCAnOicpO1xuICAgICAgICAgICAgdXJpLmF1dGhvcml0eSA9IHVyaS5hdXRob3JpdHkucmVwbGFjZSgnWycsICcnKS5yZXBsYWNlKCddJywgJycpLnJlcGxhY2UoLzsvZywgJzonKTtcbiAgICAgICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdXJpO1xuICAgICAgICB9O1xuICAgICAgfSwge31dLCAyOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgICAvKiEgaHR0cHM6Ly9tdGhzLmJlL3V0ZjhqcyB2Mi4wLjAgYnkgQG1hdGhpYXMgKi9cbiAgICAgICAgICA7KGZ1bmN0aW9uIChyb290KSB7XG5cbiAgICAgICAgICAgIC8vIERldGVjdCBmcmVlIHZhcmlhYmxlcyBgZXhwb3J0c2BcbiAgICAgICAgICAgIHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHM7XG5cbiAgICAgICAgICAgIC8vIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgXG4gICAgICAgICAgICB2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzICYmIG1vZHVsZTtcblxuICAgICAgICAgICAgLy8gRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAsIGZyb20gTm9kZS5qcyBvciBCcm93c2VyaWZpZWQgY29kZSxcbiAgICAgICAgICAgIC8vIGFuZCB1c2UgaXQgYXMgYHJvb3RgXG4gICAgICAgICAgICB2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuICAgICAgICAgICAgaWYgKGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsKSB7XG4gICAgICAgICAgICAgIHJvb3QgPSBmcmVlR2xvYmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgICAgICAgdmFyIHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgICAgICAgICAgIC8vIFRha2VuIGZyb20gaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlXG4gICAgICAgICAgICBmdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgICAgdmFyIGV4dHJhO1xuICAgICAgICAgICAgICB3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAgIGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcbiAgICAgICAgICAgICAgICAgIGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBsb3cgc3Vycm9nYXRlXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGUgbmV4dFxuICAgICAgICAgICAgICAgICAgICAvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyLS07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcbiAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgICAgdmFyIG91dHB1dCA9ICcnO1xuICAgICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDB4RkZGRikge1xuICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCkge1xuICAgICAgICAgICAgICBpZiAoY29kZVBvaW50ID49IDB4RDgwMCAmJiBjb2RlUG9pbnQgPD0gMHhERkZGKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xvbmUgc3Vycm9nYXRlIFUrJyArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArICcgaXMgbm90IGEgc2NhbGFyIHZhbHVlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVCeXRlKGNvZGVQb2ludCwgc2hpZnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQgPj4gc2hpZnQgJiAweDNGIHwgMHg4MCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGVuY29kZUNvZGVQb2ludChjb2RlUG9pbnQpIHtcbiAgICAgICAgICAgICAgaWYgKChjb2RlUG9pbnQgJiAweEZGRkZGRjgwKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gMS1ieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBzeW1ib2wgPSAnJztcbiAgICAgICAgICAgICAgaWYgKChjb2RlUG9pbnQgJiAweEZGRkZGODAwKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gMi1ieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgc3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKGNvZGVQb2ludCA+PiA2ICYgMHgxRiB8IDB4QzApO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRkYwMDAwKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gMy1ieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgY2hlY2tTY2FsYXJWYWx1ZShjb2RlUG9pbnQpO1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQgPj4gMTIgJiAweDBGIHwgMHhFMCk7XG4gICAgICAgICAgICAgICAgc3ltYm9sICs9IGNyZWF0ZUJ5dGUoY29kZVBvaW50LCA2KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgoY29kZVBvaW50ICYgMHhGRkUwMDAwMCkgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIDQtYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQgPj4gMTggJiAweDA3IHwgMHhGMCk7XG4gICAgICAgICAgICAgICAgc3ltYm9sICs9IGNyZWF0ZUJ5dGUoY29kZVBvaW50LCAxMik7XG4gICAgICAgICAgICAgICAgc3ltYm9sICs9IGNyZWF0ZUJ5dGUoY29kZVBvaW50LCA2KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzeW1ib2wgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKGNvZGVQb2ludCAmIDB4M0YgfCAweDgwKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXRmOGVuY29kZShzdHJpbmcpIHtcbiAgICAgICAgICAgICAgdmFyIGNvZGVQb2ludHMgPSB1Y3MyZGVjb2RlKHN0cmluZyk7XG4gICAgICAgICAgICAgIHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICAgICAgICAgIHZhciBjb2RlUG9pbnQ7XG4gICAgICAgICAgICAgIHZhciBieXRlU3RyaW5nID0gJyc7XG4gICAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gY29kZVBvaW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgYnl0ZVN0cmluZyArPSBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gYnl0ZVN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYWRDb250aW51YXRpb25CeXRlKCkge1xuICAgICAgICAgICAgICBpZiAoYnl0ZUluZGV4ID49IGJ5dGVDb3VudCkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGJ5dGUgaW5kZXgnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBjb250aW51YXRpb25CeXRlID0gYnl0ZUFycmF5W2J5dGVJbmRleF0gJiAweEZGO1xuICAgICAgICAgICAgICBieXRlSW5kZXgrKztcblxuICAgICAgICAgICAgICBpZiAoKGNvbnRpbnVhdGlvbkJ5dGUgJiAweEMwKSA9PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkJ5dGUgJiAweDNGO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gSWYgd2UgZW5kIHVwIGhlcmUsIGl04oCZcyBub3QgYSBjb250aW51YXRpb24gYnl0ZVxuICAgICAgICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBjb250aW51YXRpb24gYnl0ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWNvZGVTeW1ib2woKSB7XG4gICAgICAgICAgICAgIHZhciBieXRlMTtcbiAgICAgICAgICAgICAgdmFyIGJ5dGUyO1xuICAgICAgICAgICAgICB2YXIgYnl0ZTM7XG4gICAgICAgICAgICAgIHZhciBieXRlNDtcbiAgICAgICAgICAgICAgdmFyIGNvZGVQb2ludDtcblxuICAgICAgICAgICAgICBpZiAoYnl0ZUluZGV4ID4gYnl0ZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgYnl0ZSBpbmRleCcpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGJ5dGVJbmRleCA9PSBieXRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBSZWFkIGZpcnN0IGJ5dGVcbiAgICAgICAgICAgICAgYnl0ZTEgPSBieXRlQXJyYXlbYnl0ZUluZGV4XSAmIDB4RkY7XG4gICAgICAgICAgICAgIGJ5dGVJbmRleCsrO1xuXG4gICAgICAgICAgICAgIC8vIDEtYnl0ZSBzZXF1ZW5jZSAobm8gY29udGludWF0aW9uIGJ5dGVzKVxuICAgICAgICAgICAgICBpZiAoKGJ5dGUxICYgMHg4MCkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBieXRlMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIDItYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgICAgICBpZiAoKGJ5dGUxICYgMHhFMCkgPT0gMHhDMCkge1xuICAgICAgICAgICAgICAgIHZhciBieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gKGJ5dGUxICYgMHgxRikgPDwgNiB8IGJ5dGUyO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPj0gMHg4MCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyAzLWJ5dGUgc2VxdWVuY2UgKG1heSBpbmNsdWRlIHVucGFpcmVkIHN1cnJvZ2F0ZXMpXG4gICAgICAgICAgICAgIGlmICgoYnl0ZTEgJiAweEYwKSA9PSAweEUwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuICAgICAgICAgICAgICAgIGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSAoYnl0ZTEgJiAweDBGKSA8PCAxMiB8IGJ5dGUyIDw8IDYgfCBieXRlMztcbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50ID49IDB4MDgwMCkge1xuICAgICAgICAgICAgICAgICAgY2hlY2tTY2FsYXJWYWx1ZShjb2RlUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyA0LWJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICAgICAgaWYgKChieXRlMSAmIDB4RjgpID09IDB4RjApIHtcbiAgICAgICAgICAgICAgICBieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG4gICAgICAgICAgICAgICAgYnl0ZTMgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuICAgICAgICAgICAgICAgIGJ5dGU0ID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSAoYnl0ZTEgJiAweDBGKSA8PCAweDEyIHwgYnl0ZTIgPDwgMHgwQyB8IGJ5dGUzIDw8IDB4MDYgfCBieXRlNDtcbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50ID49IDB4MDEwMDAwICYmIGNvZGVQb2ludCA8PSAweDEwRkZGRikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBVVEYtOCBkZXRlY3RlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYnl0ZUFycmF5O1xuICAgICAgICAgICAgdmFyIGJ5dGVDb3VudDtcbiAgICAgICAgICAgIHZhciBieXRlSW5kZXg7XG4gICAgICAgICAgICBmdW5jdGlvbiB1dGY4ZGVjb2RlKGJ5dGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgYnl0ZUFycmF5ID0gdWNzMmRlY29kZShieXRlU3RyaW5nKTtcbiAgICAgICAgICAgICAgYnl0ZUNvdW50ID0gYnl0ZUFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgYnl0ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgdmFyIGNvZGVQb2ludHMgPSBbXTtcbiAgICAgICAgICAgICAgdmFyIHRtcDtcbiAgICAgICAgICAgICAgd2hpbGUgKCh0bXAgPSBkZWNvZGVTeW1ib2woKSkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50cy5wdXNoKHRtcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHVjczJlbmNvZGUoY29kZVBvaW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICAgICAgICB2YXIgdXRmOCA9IHtcbiAgICAgICAgICAgICAgJ3ZlcnNpb24nOiAnMi4wLjAnLFxuICAgICAgICAgICAgICAnZW5jb2RlJzogdXRmOGVuY29kZSxcbiAgICAgICAgICAgICAgJ2RlY29kZSc6IHV0ZjhkZWNvZGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNvbWUgQU1EIGJ1aWxkIG9wdGltaXplcnMsIGxpa2Ugci5qcywgY2hlY2sgZm9yIHNwZWNpZmljIGNvbmRpdGlvbiBwYXR0ZXJuc1xuICAgICAgICAgICAgLy8gbGlrZSB0aGUgZm9sbG93aW5nOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0Zjg7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiAhZnJlZUV4cG9ydHMubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKGZyZWVNb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBOb2RlLmpzIG9yIFJpbmdvSlMgdjAuOC4wK1xuICAgICAgICAgICAgICAgIGZyZWVNb2R1bGUuZXhwb3J0cyA9IHV0Zjg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgdmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0Lmhhc093blByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB1dGY4KSB7XG4gICAgICAgICAgICAgICAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKHV0ZjgsIGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSB1dGY4W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuICAgICAgICAgICAgICByb290LnV0ZjggPSB1dGY4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKHRoaXMpO1xuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwge31dLCAzMDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJyksXG4gICAgICAgICAgICBsZW5ndGggPSA2NCxcbiAgICAgICAgICAgIG1hcCA9IHt9LFxuICAgICAgICAgICAgc2VlZCA9IDAsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIHByZXY7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHNwZWNpZmllZCBudW1iZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBudW1iZXIuXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBlbmNvZGUobnVtKSB7XG4gICAgICAgICAgdmFyIGVuY29kZWQgPSAnJztcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGVuY29kZWQgPSBhbHBoYWJldFtudW0gJSBsZW5ndGhdICsgZW5jb2RlZDtcbiAgICAgICAgICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgICAgICAgICB9IHdoaWxlIChudW0gPiAwKTtcblxuICAgICAgICAgIHJldHVybiBlbmNvZGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiB0aGUgaW50ZWdlciB2YWx1ZSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIHN0cmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gICAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBpbnRlZ2VyIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZSBzdHJpbmcuXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gICAgICAgICAgdmFyIGRlY29kZWQgPSAwO1xuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVjb2RlZCA9IGRlY29kZWQgKiBsZW5ndGggKyBtYXBbc3RyLmNoYXJBdChpKV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRlY29kZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiB5ZWFzdCgpIHtcbiAgICAgICAgICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICAgICAgICAgIGlmIChub3cgIT09IHByZXYpIHJldHVybiBzZWVkID0gMCwgcHJldiA9IG5vdztcbiAgICAgICAgICByZXR1cm4gbm93ICsgJy4nICsgZW5jb2RlKHNlZWQrKyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1xuICAgICAgICAvLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuICAgICAgICAvL1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBFeHBvc2UgdGhlIGB5ZWFzdGAsIGBlbmNvZGVgIGFuZCBgZGVjb2RlYCBmdW5jdGlvbnMuXG4gICAgICAgIC8vXG4gICAgICAgIHllYXN0LmVuY29kZSA9IGVuY29kZTtcbiAgICAgICAgeWVhc3QuZGVjb2RlID0gZGVjb2RlO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuICAgICAgfSwge31dLCAzMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIHVybCA9IF9kZXJlcV8oJy4vdXJsJyk7XG4gICAgICAgIHZhciBwYXJzZXIgPSBfZGVyZXFfKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG4gICAgICAgIHZhciBNYW5hZ2VyID0gX2RlcmVxXygnLi9tYW5hZ2VyJyk7XG4gICAgICAgIHZhciBkZWJ1ZyA9IF9kZXJlcV8oJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGxvb2t1cDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFuYWdlcnMgY2FjaGUuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBjYWNoZSA9IGV4cG9ydHMubWFuYWdlcnMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9va3MgdXAgYW4gZXhpc3RpbmcgYE1hbmFnZXJgIGZvciBtdWx0aXBsZXhpbmcuXG4gICAgICAgICAqIElmIHRoZSB1c2VyIHN1bW1vbnM6XG4gICAgICAgICAqXG4gICAgICAgICAqICAgYGlvKCdodHRwOi8vbG9jYWxob3N0L2EnKTtgXG4gICAgICAgICAqICAgYGlvKCdodHRwOi8vbG9jYWxob3N0L2InKTtgXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIHJldXNlIHRoZSBleGlzdGluZyBpbnN0YW5jZSBiYXNlZCBvbiBzYW1lIHNjaGVtZS9wb3J0L2hvc3QsXG4gICAgICAgICAqIGFuZCB3ZSBpbml0aWFsaXplIHNvY2tldHMgZm9yIGVhY2ggbmFtZXNwYWNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBsb29rdXAodXJpLCBvcHRzKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB1cmkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9wdHMgPSB1cmk7XG4gICAgICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICAgICAgICB2YXIgcGFyc2VkID0gdXJsKHVyaSk7XG4gICAgICAgICAgdmFyIHNvdXJjZSA9IHBhcnNlZC5zb3VyY2U7XG4gICAgICAgICAgdmFyIGlkID0gcGFyc2VkLmlkO1xuICAgICAgICAgIHZhciBwYXRoID0gcGFyc2VkLnBhdGg7XG4gICAgICAgICAgdmFyIHNhbWVOYW1lc3BhY2UgPSBjYWNoZVtpZF0gJiYgcGF0aCBpbiBjYWNoZVtpZF0ubnNwcztcbiAgICAgICAgICB2YXIgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHwgb3B0c1snZm9yY2UgbmV3IGNvbm5lY3Rpb24nXSB8fCBmYWxzZSA9PT0gb3B0cy5tdWx0aXBsZXggfHwgc2FtZU5hbWVzcGFjZTtcblxuICAgICAgICAgIHZhciBpbztcblxuICAgICAgICAgIGlmIChuZXdDb25uZWN0aW9uKSB7XG4gICAgICAgICAgICBkZWJ1ZygnaWdub3Jpbmcgc29ja2V0IGNhY2hlIGZvciAlcycsIHNvdXJjZSk7XG4gICAgICAgICAgICBpbyA9IE1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFjYWNoZVtpZF0pIHtcbiAgICAgICAgICAgICAgZGVidWcoJ25ldyBpbyBpbnN0YW5jZSBmb3IgJXMnLCBzb3VyY2UpO1xuICAgICAgICAgICAgICBjYWNoZVtpZF0gPSBNYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbyA9IGNhY2hlW2lkXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW8uc29ja2V0KHBhcnNlZC5wYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm90b2NvbCB2ZXJzaW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgY29ubmVjdGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5jb25uZWN0ID0gbG9va3VwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHBvc2UgY29uc3RydWN0b3JzIGZvciBzdGFuZGFsb25lIGJ1aWxkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLk1hbmFnZXIgPSBfZGVyZXFfKCcuL21hbmFnZXInKTtcbiAgICAgICAgZXhwb3J0cy5Tb2NrZXQgPSBfZGVyZXFfKCcuL3NvY2tldCcpO1xuICAgICAgfSwgeyBcIi4vbWFuYWdlclwiOiAzMiwgXCIuL3NvY2tldFwiOiAzNCwgXCIuL3VybFwiOiAzNSwgXCJkZWJ1Z1wiOiAzOSwgXCJzb2NrZXQuaW8tcGFyc2VyXCI6IDQ3IH1dLCAzMjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIGVpbyA9IF9kZXJlcV8oJ2VuZ2luZS5pby1jbGllbnQnKTtcbiAgICAgICAgdmFyIFNvY2tldCA9IF9kZXJlcV8oJy4vc29ja2V0Jyk7XG4gICAgICAgIHZhciBFbWl0dGVyID0gX2RlcmVxXygnY29tcG9uZW50LWVtaXR0ZXInKTtcbiAgICAgICAgdmFyIHBhcnNlciA9IF9kZXJlcV8oJ3NvY2tldC5pby1wYXJzZXInKTtcbiAgICAgICAgdmFyIG9uID0gX2RlcmVxXygnLi9vbicpO1xuICAgICAgICB2YXIgYmluZCA9IF9kZXJlcV8oJ2NvbXBvbmVudC1iaW5kJyk7XG4gICAgICAgIHZhciBkZWJ1ZyA9IF9kZXJlcV8oJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6bWFuYWdlcicpO1xuICAgICAgICB2YXIgaW5kZXhPZiA9IF9kZXJlcV8oJ2luZGV4b2YnKTtcbiAgICAgICAgdmFyIEJhY2tvZmYgPSBfZGVyZXFfKCdiYWNrbzInKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSUU2KyBoYXNPd25Qcm9wZXJ0eVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGV4cG9ydHNcbiAgICAgICAgICovXG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgTWFuYWdlcmAgY29uc3RydWN0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbmdpbmUgaW5zdGFuY2Ugb3IgZW5naW5lIHVyaS9vcHRzXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIE1hbmFnZXIodXJpLCBvcHRzKSB7XG4gICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hbmFnZXIpKSByZXR1cm4gbmV3IE1hbmFnZXIodXJpLCBvcHRzKTtcbiAgICAgICAgICBpZiAodXJpICYmICdvYmplY3QnID09IHR5cGVvZiB1cmkpIHtcbiAgICAgICAgICAgIG9wdHMgPSB1cmk7XG4gICAgICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgICAgICAgb3B0cy5wYXRoID0gb3B0cy5wYXRoIHx8ICcvc29ja2V0LmlvJztcbiAgICAgICAgICB0aGlzLm5zcHMgPSB7fTtcbiAgICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICAgICAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgICAgICAgIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0cyhvcHRzLnJlY29ubmVjdGlvbkF0dGVtcHRzIHx8IEluZmluaXR5KTtcbiAgICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KG9wdHMucmVjb25uZWN0aW9uRGVsYXkgfHwgMTAwMCk7XG4gICAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICAgICAgICAgIHRoaXMucmFuZG9taXphdGlvbkZhY3RvcihvcHRzLnJhbmRvbWl6YXRpb25GYWN0b3IgfHwgMC41KTtcbiAgICAgICAgICB0aGlzLmJhY2tvZmYgPSBuZXcgQmFja29mZih7XG4gICAgICAgICAgICBtaW46IHRoaXMucmVjb25uZWN0aW9uRGVsYXkoKSxcbiAgICAgICAgICAgIG1heDogdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heCgpLFxuICAgICAgICAgICAgaml0dGVyOiB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3IoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMudGltZW91dChudWxsID09IG9wdHMudGltZW91dCA/IDIwMDAwIDogb3B0cy50aW1lb3V0KTtcbiAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgICAgICAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICAgICAgICB0aGlzLmNvbm5lY3RpbmcgPSBbXTtcbiAgICAgICAgICB0aGlzLmxhc3RQaW5nID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmVuY29kaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcbiAgICAgICAgICB0aGlzLmVuY29kZXIgPSBuZXcgcGFyc2VyLkVuY29kZXIoKTtcbiAgICAgICAgICB0aGlzLmRlY29kZXIgPSBuZXcgcGFyc2VyLkRlY29kZXIoKTtcbiAgICAgICAgICB0aGlzLmF1dG9Db25uZWN0ID0gb3B0cy5hdXRvQ29ubmVjdCAhPT0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuYXV0b0Nvbm5lY3QpIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BhZ2F0ZSBnaXZlbiBldmVudCB0byBzb2NrZXRzIGFuZCBlbWl0IG9uIGB0aGlzYFxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUuZW1pdEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICBmb3IgKHZhciBuc3AgaW4gdGhpcy5uc3BzKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGhpcy5uc3BzLCBuc3ApKSB7XG4gICAgICAgICAgICAgIHRoaXMubnNwc1tuc3BdLmVtaXQuYXBwbHkodGhpcy5uc3BzW25zcF0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgYHNvY2tldC5pZGAgb2YgYWxsIHNvY2tldHNcbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVNvY2tldElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKHZhciBuc3AgaW4gdGhpcy5uc3BzKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGhpcy5uc3BzLCBuc3ApKSB7XG4gICAgICAgICAgICAgIHRoaXMubnNwc1tuc3BdLmlkID0gdGhpcy5lbmdpbmUuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaXggaW4gYEVtaXR0ZXJgLlxuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyKE1hbmFnZXIucHJvdG90eXBlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYHJlY29ubmVjdGlvbmAgY29uZmlnLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRydWUvZmFsc2UgaWYgaXQgc2hvdWxkIGF1dG9tYXRpY2FsbHkgcmVjb25uZWN0XG4gICAgICAgICAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb247XG4gICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSByZWNvbm5lY3Rpb24gYXR0ZW1wdHMgY29uZmlnLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IHJlY29ubmVjdGlvbiBhdHRlbXB0cyBiZWZvcmUgZ2l2aW5nIHVwXG4gICAgICAgICAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uQXR0ZW1wdHMgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzID0gdjtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgZGVsYXkgYmV0d2VlbiByZWNvbm5lY3Rpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAgICAgICAgICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb25EZWxheSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXk7XG4gICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICAgICAgICAgIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0TWluKHYpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLnJhbmRvbWl6YXRpb25GYWN0b3IgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3I7XG4gICAgICAgICAgdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHY7XG4gICAgICAgICAgdGhpcy5iYWNrb2ZmICYmIHRoaXMuYmFja29mZi5zZXRKaXR0ZXIodik7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIG1heGltdW0gZGVsYXkgYmV0d2VlbiByZWNvbm5lY3Rpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAgICAgICAgICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb25EZWxheU1heCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXg7XG4gICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICAgICAgICAgIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0TWF4KHYpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBjb25uZWN0aW9uIHRpbWVvdXQuIGBmYWxzZWAgdG8gZGlzYWJsZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgICAgdGhpcy5fdGltZW91dCA9IHY7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXJ0cyB0cnlpbmcgdG8gcmVjb25uZWN0IGlmIHJlY29ubmVjdGlvbiBpcyBlbmFibGVkIGFuZCB3ZSBoYXZlIG5vdFxuICAgICAgICAgKiBzdGFydGVkIHJlY29ubmVjdGluZyB5ZXRcbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLm1heWJlUmVjb25uZWN0T25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIE9ubHkgdHJ5IHRvIHJlY29ubmVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RpbmdcbiAgICAgICAgICBpZiAoIXRoaXMucmVjb25uZWN0aW5nICYmIHRoaXMuX3JlY29ubmVjdGlvbiAmJiB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGtlZXBzIHJlY29ubmVjdGlvbiBmcm9tIGZpcmluZyB0d2ljZSBmb3IgdGhlIHNhbWUgcmVjb25uZWN0aW9uIGxvb3BcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9uYWwsIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGZcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUub3BlbiA9IE1hbmFnZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICBkZWJ1ZygncmVhZHlTdGF0ZSAlcycsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgICAgICAgaWYgKH50aGlzLnJlYWR5U3RhdGUuaW5kZXhPZignb3BlbicpKSByZXR1cm4gdGhpcztcblxuICAgICAgICAgIGRlYnVnKCdvcGVuaW5nICVzJywgdGhpcy51cmkpO1xuICAgICAgICAgIHRoaXMuZW5naW5lID0gZWlvKHRoaXMudXJpLCB0aGlzLm9wdHMpO1xuICAgICAgICAgIHZhciBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuICAgICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgLy8gZW1pdCBgb3BlbmBcbiAgICAgICAgICB2YXIgb3BlblN1YiA9IG9uKHNvY2tldCwgJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9ub3BlbigpO1xuICAgICAgICAgICAgZm4gJiYgZm4oKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGVtaXQgYGNvbm5lY3RfZXJyb3JgXG4gICAgICAgICAgdmFyIGVycm9yU3ViID0gb24oc29ja2V0LCAnZXJyb3InLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgZGVidWcoJ2Nvbm5lY3RfZXJyb3InKTtcbiAgICAgICAgICAgIHNlbGYuY2xlYW51cCgpO1xuICAgICAgICAgICAgc2VsZi5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gICAgICAgICAgICBzZWxmLmVtaXRBbGwoJ2Nvbm5lY3RfZXJyb3InLCBkYXRhKTtcbiAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdDb25uZWN0aW9uIGVycm9yJyk7XG4gICAgICAgICAgICAgIGVyci5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgZm4oZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIE9ubHkgZG8gdGhpcyBpZiB0aGVyZSBpcyBubyBmbiB0byBoYW5kbGUgdGhlIGVycm9yXG4gICAgICAgICAgICAgIHNlbGYubWF5YmVSZWNvbm5lY3RPbk9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGVtaXQgYGNvbm5lY3RfdGltZW91dGBcbiAgICAgICAgICBpZiAoZmFsc2UgIT09IHRoaXMuX3RpbWVvdXQpIHtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICAgICAgICAgIGRlYnVnKCdjb25uZWN0IGF0dGVtcHQgd2lsbCB0aW1lb3V0IGFmdGVyICVkJywgdGltZW91dCk7XG5cbiAgICAgICAgICAgIC8vIHNldCB0aW1lclxuICAgICAgICAgICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGRlYnVnKCdjb25uZWN0IGF0dGVtcHQgdGltZWQgb3V0IGFmdGVyICVkJywgdGltZW91dCk7XG4gICAgICAgICAgICAgIG9wZW5TdWIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2Vycm9yJywgJ3RpbWVvdXQnKTtcbiAgICAgICAgICAgICAgc2VsZi5lbWl0QWxsKCdjb25uZWN0X3RpbWVvdXQnLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuXG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh7XG4gICAgICAgICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdWJzLnB1c2gob3BlblN1Yik7XG4gICAgICAgICAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBvcGVuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRlYnVnKCdvcGVuJyk7XG5cbiAgICAgICAgICAvLyBjbGVhciBvbGQgc3Vic1xuICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuXG4gICAgICAgICAgLy8gbWFyayBhcyBvcGVuXG4gICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICAgICAgICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuXG4gICAgICAgICAgLy8gYWRkIG5ldyBzdWJzXG4gICAgICAgICAgdmFyIHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2RhdGEnLCBiaW5kKHRoaXMsICdvbmRhdGEnKSkpO1xuICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ3BpbmcnLCBiaW5kKHRoaXMsICdvbnBpbmcnKSkpO1xuICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ3BvbmcnLCBiaW5kKHRoaXMsICdvbnBvbmcnKSkpO1xuICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2Vycm9yJywgYmluZCh0aGlzLCAnb25lcnJvcicpKSk7XG4gICAgICAgICAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnY2xvc2UnLCBiaW5kKHRoaXMsICdvbmNsb3NlJykpKTtcbiAgICAgICAgICB0aGlzLnN1YnMucHVzaChvbih0aGlzLmRlY29kZXIsICdkZWNvZGVkJywgYmluZCh0aGlzLCAnb25kZWNvZGVkJykpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gYSBwaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUub25waW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMubGFzdFBpbmcgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIHRoaXMuZW1pdEFsbCgncGluZycpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgdXBvbiBhIHBhY2tldC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLm9ucG9uZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmVtaXRBbGwoJ3BvbmcnLCBuZXcgRGF0ZSgpIC0gdGhpcy5sYXN0UGluZyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5vbmRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMuZGVjb2Rlci5hZGQoZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHBhcnNlciBmdWxseSBkZWNvZGVzIGEgcGFja2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUub25kZWNvZGVkID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgICAgIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBkZWJ1ZygnZXJyb3InLCBlcnIpO1xuICAgICAgICAgIHRoaXMuZW1pdEFsbCgnZXJyb3InLCBlcnIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtTb2NrZXR9XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLnNvY2tldCA9IGZ1bmN0aW9uIChuc3ApIHtcbiAgICAgICAgICB2YXIgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gICAgICAgICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldCA9IG5ldyBTb2NrZXQodGhpcywgbnNwKTtcbiAgICAgICAgICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc29ja2V0Lm9uKCdjb25uZWN0aW5nJywgb25Db25uZWN0aW5nKTtcbiAgICAgICAgICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc29ja2V0LmlkID0gc2VsZi5lbmdpbmUuaWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b0Nvbm5lY3QpIHtcbiAgICAgICAgICAgICAgLy8gbWFudWFsbHkgY2FsbCBoZXJlIHNpbmNlIGNvbm5lY3RpbmcgZXZuZXQgaXMgZmlyZWQgYmVmb3JlIGxpc3RlbmluZ1xuICAgICAgICAgICAgICBvbkNvbm5lY3RpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBvbkNvbm5lY3RpbmcoKSB7XG4gICAgICAgICAgICBpZiAoISB+aW5kZXhPZihzZWxmLmNvbm5lY3RpbmcsIHNvY2tldCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5jb25uZWN0aW5nLnB1c2goc29ja2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc29ja2V0O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgdXBvbiBhIHNvY2tldCBjbG9zZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTb2NrZXR9IHNvY2tldFxuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICAgIHZhciBpbmRleCA9IGluZGV4T2YodGhpcy5jb25uZWN0aW5nLCBzb2NrZXQpO1xuICAgICAgICAgIGlmICh+aW5kZXgpIHRoaXMuY29ubmVjdGluZy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RpbmcubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyaXRlcyBhIHBhY2tldC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgICAgIGRlYnVnKCd3cml0aW5nIHBhY2tldCAlaicsIHBhY2tldCk7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgaWYgKCFzZWxmLmVuY29kaW5nKSB7XG4gICAgICAgICAgICAvLyBlbmNvZGUsIHRoZW4gd3JpdGUgdG8gZW5naW5lIHdpdGggcmVzdWx0XG4gICAgICAgICAgICBzZWxmLmVuY29kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0LCBmdW5jdGlvbiAoZW5jb2RlZFBhY2tldHMpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGYuZW5naW5lLndyaXRlKGVuY29kZWRQYWNrZXRzW2ldLCBwYWNrZXQub3B0aW9ucyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VsZi5lbmNvZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NQYWNrZXRRdWV1ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFkZCBwYWNrZXQgdG8gdGhlIHF1ZXVlXG4gICAgICAgICAgICBzZWxmLnBhY2tldEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBwYWNrZXQgYnVmZmVyIGlzIG5vbi1lbXB0eSwgYmVnaW5zIGVuY29kaW5nIHRoZVxuICAgICAgICAgKiBuZXh0IHBhY2tldCBpbiBsaW5lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUucHJvY2Vzc1BhY2tldFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnBhY2tldEJ1ZmZlci5sZW5ndGggPiAwICYmICF0aGlzLmVuY29kaW5nKSB7XG4gICAgICAgICAgICB2YXIgcGFjayA9IHRoaXMucGFja2V0QnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tldChwYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkZWJ1ZygnY2xlYW51cCcpO1xuXG4gICAgICAgICAgdmFyIHN1YjtcbiAgICAgICAgICB3aGlsZSAoc3ViID0gdGhpcy5zdWJzLnNoaWZ0KCkpIHN1Yi5kZXN0cm95KCk7XG5cbiAgICAgICAgICB0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xuICAgICAgICAgIHRoaXMuZW5jb2RpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmxhc3RQaW5nID0gbnVsbDtcblxuICAgICAgICAgIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIE1hbmFnZXIucHJvdG90eXBlLmNsb3NlID0gTWFuYWdlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkZWJ1ZygnZGlzY29ubmVjdCcpO1xuICAgICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoJ29wZW5pbmcnID09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgLy8gYG9uY2xvc2VgIHdpbGwgbm90IGZpcmUgYmVjYXVzZVxuICAgICAgICAgICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICAgICAgICAgIGlmICh0aGlzLmVuZ2luZSkgdGhpcy5lbmdpbmUuY2xvc2UoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGNsb3NlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICBkZWJ1Zygnb25jbG9zZScpO1xuXG4gICAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gICAgICAgICAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbik7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW9uICYmICF0aGlzLnNraXBSZWNvbm5lY3QpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdHRlbXB0IGEgcmVjb25uZWN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnJlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpIHJldHVybiB0aGlzO1xuXG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgICAgICAgICAgZGVidWcoJ3JlY29ubmVjdCBmYWlsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0QWxsKCdyZWNvbm5lY3RfZmFpbGVkJyk7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGVsYXkgPSB0aGlzLmJhY2tvZmYuZHVyYXRpb24oKTtcbiAgICAgICAgICAgIGRlYnVnKCd3aWxsIHdhaXQgJWRtcyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHQnLCBkZWxheSk7XG5cbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KSByZXR1cm47XG5cbiAgICAgICAgICAgICAgZGVidWcoJ2F0dGVtcHRpbmcgcmVjb25uZWN0Jyk7XG4gICAgICAgICAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0X2F0dGVtcHQnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgICAgICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdGluZycsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG5cbiAgICAgICAgICAgICAgLy8gY2hlY2sgYWdhaW4gZm9yIHRoZSBjYXNlIHNvY2tldCBjbG9zZWQgaW4gYWJvdmUgZXZlbnRzXG4gICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpIHJldHVybjtcblxuICAgICAgICAgICAgICBzZWxmLm9wZW4oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGRlYnVnKCdyZWNvbm5lY3QgYXR0ZW1wdCBlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdF9lcnJvcicsIGVyci5kYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGVidWcoJ3JlY29ubmVjdCBzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcblxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goe1xuICAgICAgICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZWNvbm5lY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBNYW5hZ2VyLnByb3RvdHlwZS5vbnJlY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgYXR0ZW1wdCA9IHRoaXMuYmFja29mZi5hdHRlbXB0cztcbiAgICAgICAgICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlU29ja2V0SWRzKCk7XG4gICAgICAgICAgdGhpcy5lbWl0QWxsKCdyZWNvbm5lY3QnLCBhdHRlbXB0KTtcbiAgICAgICAgfTtcbiAgICAgIH0sIHsgXCIuL29uXCI6IDMzLCBcIi4vc29ja2V0XCI6IDM0LCBcImJhY2tvMlwiOiAzNiwgXCJjb21wb25lbnQtYmluZFwiOiAzNywgXCJjb21wb25lbnQtZW1pdHRlclwiOiAzOCwgXCJkZWJ1Z1wiOiAzOSwgXCJlbmdpbmUuaW8tY2xpZW50XCI6IDEsIFwiaW5kZXhvZlwiOiA0MiwgXCJzb2NrZXQuaW8tcGFyc2VyXCI6IDQ3IH1dLCAzMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gb247XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlciBmb3Igc3Vic2NyaXB0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R8RXZlbnRFbWl0dGVyfSBvYmogd2l0aCBgRW1pdHRlcmAgbWl4aW4gb3IgYEV2ZW50RW1pdHRlcmBcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gb24ob2JqLCBldiwgZm4pIHtcbiAgICAgICAgICBvYmoub24oZXYsIGZuKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgb2JqLnJlbW92ZUxpc3RlbmVyKGV2LCBmbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSwge31dLCAzNDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIHBhcnNlciA9IF9kZXJlcV8oJ3NvY2tldC5pby1wYXJzZXInKTtcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSBfZGVyZXFfKCdjb21wb25lbnQtZW1pdHRlcicpO1xuICAgICAgICB2YXIgdG9BcnJheSA9IF9kZXJlcV8oJ3RvLWFycmF5Jyk7XG4gICAgICAgIHZhciBvbiA9IF9kZXJlcV8oJy4vb24nKTtcbiAgICAgICAgdmFyIGJpbmQgPSBfZGVyZXFfKCdjb21wb25lbnQtYmluZCcpO1xuICAgICAgICB2YXIgZGVidWcgPSBfZGVyZXFfKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50OnNvY2tldCcpO1xuICAgICAgICB2YXIgaGFzQmluID0gX2RlcmVxXygnaGFzLWJpbmFyeScpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICAgICAgICovXG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gU29ja2V0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBldmVudHMgKGJsYWNrbGlzdGVkKS5cbiAgICAgICAgICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgZXZlbnRzID0ge1xuICAgICAgICAgIGNvbm5lY3Q6IDEsXG4gICAgICAgICAgY29ubmVjdF9lcnJvcjogMSxcbiAgICAgICAgICBjb25uZWN0X3RpbWVvdXQ6IDEsXG4gICAgICAgICAgY29ubmVjdGluZzogMSxcbiAgICAgICAgICBkaXNjb25uZWN0OiAxLFxuICAgICAgICAgIGVycm9yOiAxLFxuICAgICAgICAgIHJlY29ubmVjdDogMSxcbiAgICAgICAgICByZWNvbm5lY3RfYXR0ZW1wdDogMSxcbiAgICAgICAgICByZWNvbm5lY3RfZmFpbGVkOiAxLFxuICAgICAgICAgIHJlY29ubmVjdF9lcnJvcjogMSxcbiAgICAgICAgICByZWNvbm5lY3Rpbmc6IDEsXG4gICAgICAgICAgcGluZzogMSxcbiAgICAgICAgICBwb25nOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IHRvIGBFbWl0dGVyI2VtaXRgLlxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgZW1pdCA9IEVtaXR0ZXIucHJvdG90eXBlLmVtaXQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBTb2NrZXRgIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBTb2NrZXQoaW8sIG5zcCkge1xuICAgICAgICAgIHRoaXMuaW8gPSBpbztcbiAgICAgICAgICB0aGlzLm5zcCA9IG5zcDtcbiAgICAgICAgICB0aGlzLmpzb24gPSB0aGlzOyAvLyBjb21wYXRcbiAgICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMuaW8uYXV0b0Nvbm5lY3QpIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1peCBpbiBgRW1pdHRlcmAuXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIoU29ja2V0LnByb3RvdHlwZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN1YnNjcmliZSB0byBvcGVuLCBjbG9zZSBhbmQgcGFja2V0IGV2ZW50c1xuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5zdWJFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3VicykgcmV0dXJuO1xuXG4gICAgICAgICAgdmFyIGlvID0gdGhpcy5pbztcbiAgICAgICAgICB0aGlzLnN1YnMgPSBbb24oaW8sICdvcGVuJywgYmluZCh0aGlzLCAnb25vcGVuJykpLCBvbihpbywgJ3BhY2tldCcsIGJpbmQodGhpcywgJ29ucGFja2V0JykpLCBvbihpbywgJ2Nsb3NlJywgYmluZCh0aGlzLCAnb25jbG9zZScpKV07XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFwiT3BlbnNcIiB0aGUgc29ja2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9wZW4gPSBTb2NrZXQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSByZXR1cm4gdGhpcztcblxuICAgICAgICAgIHRoaXMuc3ViRXZlbnRzKCk7XG4gICAgICAgICAgdGhpcy5pby5vcGVuKCk7IC8vIGVuc3VyZSBvcGVuXG4gICAgICAgICAgaWYgKCdvcGVuJyA9PSB0aGlzLmlvLnJlYWR5U3RhdGUpIHRoaXMub25vcGVuKCk7XG4gICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0aW5nJyk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlbmRzIGEgYG1lc3NhZ2VgIGV2ZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgICAgIGFyZ3MudW5zaGlmdCgnbWVzc2FnZScpO1xuICAgICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT3ZlcnJpZGUgYGVtaXRgLlxuICAgICAgICAgKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAgICAgICAgICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXYpKSB7XG4gICAgICAgICAgICBlbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgICB2YXIgcGFyc2VyVHlwZSA9IHBhcnNlci5FVkVOVDsgLy8gZGVmYXVsdFxuICAgICAgICAgIGlmIChoYXNCaW4oYXJncykpIHtcbiAgICAgICAgICAgIHBhcnNlclR5cGUgPSBwYXJzZXIuQklOQVJZX0VWRU5UO1xuICAgICAgICAgIH0gLy8gYmluYXJ5XG4gICAgICAgICAgdmFyIHBhY2tldCA9IHsgdHlwZTogcGFyc2VyVHlwZSwgZGF0YTogYXJncyB9O1xuXG4gICAgICAgICAgcGFja2V0Lm9wdGlvbnMgPSB7fTtcbiAgICAgICAgICBwYWNrZXQub3B0aW9ucy5jb21wcmVzcyA9ICF0aGlzLmZsYWdzIHx8IGZhbHNlICE9PSB0aGlzLmZsYWdzLmNvbXByZXNzO1xuXG4gICAgICAgICAgLy8gZXZlbnQgYWNrIGNhbGxiYWNrXG4gICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgZGVidWcoJ2VtaXR0aW5nIHBhY2tldCB3aXRoIGFjayBpZCAlZCcsIHRoaXMuaWRzKTtcbiAgICAgICAgICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgcGFja2V0LmlkID0gdGhpcy5pZHMrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHBhY2tldCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVsZXRlIHRoaXMuZmxhZ3M7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgICAgIHBhY2tldC5uc3AgPSB0aGlzLm5zcDtcbiAgICAgICAgICB0aGlzLmlvLnBhY2tldChwYWNrZXQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYG9wZW5gLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGVidWcoJ3RyYW5zcG9ydCBpcyBvcGVuIC0gY29ubmVjdGluZycpO1xuXG4gICAgICAgICAgLy8gd3JpdGUgY29ubmVjdCBwYWNrZXQgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgaWYgKCcvJyAhPSB0aGlzLm5zcCkge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBwYXJzZXIuQ09OTkVDVCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gcmVhc29uXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgZGVidWcoJ2Nsb3NlICglcyknLCByZWFzb24pO1xuICAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmlkO1xuICAgICAgICAgIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcsIHJlYXNvbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aXRoIHNvY2tldCBwYWNrZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUub25wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgICAgICAgaWYgKHBhY2tldC5uc3AgIT0gdGhpcy5uc3ApIHJldHVybjtcblxuICAgICAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgcGFyc2VyLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgIHRoaXMub25jb25uZWN0KCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHBhcnNlci5FVkVOVDpcbiAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHBhcnNlci5CSU5BUllfRVZFTlQ6XG4gICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBwYXJzZXIuQUNLOlxuICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHBhcnNlci5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHBhcnNlci5ESVNDT05ORUNUOlxuICAgICAgICAgICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBwYXJzZXIuRVJST1I6XG4gICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUub25ldmVudCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgICAgICB2YXIgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICAgICAgICAgIGRlYnVnKCdlbWl0dGluZyBldmVudCAlaicsIGFyZ3MpO1xuXG4gICAgICAgICAgaWYgKG51bGwgIT0gcGFja2V0LmlkKSB7XG4gICAgICAgICAgICBkZWJ1ZygnYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudCcpO1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuYWNrKHBhY2tldC5pZCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9kdWNlcyBhbiBhY2sgY2FsbGJhY2sgdG8gZW1pdCB3aXRoIGFuIGV2ZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5hY2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgdmFyIHNlbnQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gcHJldmVudCBkb3VibGUgY2FsbGJhY2tzXG4gICAgICAgICAgICBpZiAoc2VudCkgcmV0dXJuO1xuICAgICAgICAgICAgc2VudCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGRlYnVnKCdzZW5kaW5nIGFjayAlaicsIGFyZ3MpO1xuXG4gICAgICAgICAgICB2YXIgdHlwZSA9IGhhc0JpbihhcmdzKSA/IHBhcnNlci5CSU5BUllfQUNLIDogcGFyc2VyLkFDSztcbiAgICAgICAgICAgIHNlbGYucGFja2V0KHtcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICBkYXRhOiBhcmdzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5vbmFjayA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgICAgICB2YXIgYWNrID0gdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGFjaykge1xuICAgICAgICAgICAgZGVidWcoJ2NhbGxpbmcgYWNrICVzIHdpdGggJWonLCBwYWNrZXQuaWQsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGFjay5hcHBseSh0aGlzLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlYnVnKCdiYWQgYWNrICVzJywgcGFja2V0LmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgU29ja2V0LnByb3RvdHlwZS5vbmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0Jyk7XG4gICAgICAgICAgdGhpcy5lbWl0QnVmZmVyZWQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW1pdCBidWZmZXJlZCBldmVudHMgKHJlY2VpdmVkIGFuZCBlbWl0dGVkKS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUuZW1pdEJ1ZmZlcmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnJlY2VpdmVCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVtaXQuYXBwbHkodGhpcywgdGhpcy5yZWNlaXZlQnVmZmVyW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG5cbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5zZW5kQnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh0aGlzLnNlbmRCdWZmZXJbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGRpc2Nvbm5lY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLm9uZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkZWJ1Zygnc2VydmVyIGRpc2Nvbm5lY3QgKCVzKScsIHRoaXMubnNwKTtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLm9uY2xvc2UoJ2lvIHNlcnZlciBkaXNjb25uZWN0Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB1cG9uIGZvcmNlZCBjbGllbnQvc2VydmVyIHNpZGUgZGlzY29ubmVjdGlvbnMsXG4gICAgICAgICAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gICAgICAgICAqIHRoYXQgcmVjb25uZWN0aW9ucyBkb24ndCBnZXQgdHJpZ2dlcmVkIGZvciB0aGlzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHByaXZhdGUuXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICAgICAgICAvLyBjbGVhbiBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIHJlY29ubmVjdGlvbnNcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3Vic1tpXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaW8uZGVzdHJveSh0aGlzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzY29ubmVjdHMgdGhlIHNvY2tldCBtYW51YWxseS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIFNvY2tldC5wcm90b3R5cGUuY2xvc2UgPSBTb2NrZXQucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBkZWJ1ZygncGVyZm9ybWluZyBkaXNjb25uZWN0ICglcyknLCB0aGlzLm5zcCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHBhcnNlci5ESVNDT05ORUNUIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlbW92ZSBzb2NrZXQgZnJvbSBwb29sXG4gICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICB0aGlzLm9uY2xvc2UoJ2lvIGNsaWVudCBkaXNjb25uZWN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBjb21wcmVzcyBmbGFnLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gICAgICAgICAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBTb2NrZXQucHJvdG90eXBlLmNvbXByZXNzID0gZnVuY3Rpb24gKGNvbXByZXNzKSB7XG4gICAgICAgICAgdGhpcy5mbGFncyA9IHRoaXMuZmxhZ3MgfHwge307XG4gICAgICAgICAgdGhpcy5mbGFncy5jb21wcmVzcyA9IGNvbXByZXNzO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgfSwgeyBcIi4vb25cIjogMzMsIFwiY29tcG9uZW50LWJpbmRcIjogMzcsIFwiY29tcG9uZW50LWVtaXR0ZXJcIjogMzgsIFwiZGVidWdcIjogMzksIFwiaGFzLWJpbmFyeVwiOiA0MSwgXCJzb2NrZXQuaW8tcGFyc2VyXCI6IDQ3LCBcInRvLWFycmF5XCI6IDUxIH1dLCAzNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgcGFyc2V1cmkgPSBfZGVyZXFfKCdwYXJzZXVyaScpO1xuICAgICAgICAgIHZhciBkZWJ1ZyA9IF9kZXJlcV8oJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6dXJsJyk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gdXJsO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVVJMIHBhcnNlci5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gQW4gb2JqZWN0IG1lYW50IHRvIG1pbWljIHdpbmRvdy5sb2NhdGlvbi5cbiAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgRGVmYXVsdHMgdG8gd2luZG93LmxvY2F0aW9uLlxuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBmdW5jdGlvbiB1cmwodXJpLCBsb2MpIHtcbiAgICAgICAgICAgIHZhciBvYmogPSB1cmk7XG5cbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gICAgICAgICAgICB2YXIgbG9jID0gbG9jIHx8IGdsb2JhbC5sb2NhdGlvbjtcbiAgICAgICAgICAgIGlmIChudWxsID09IHVyaSkgdXJpID0gbG9jLnByb3RvY29sICsgJy8vJyArIGxvYy5ob3N0O1xuXG4gICAgICAgICAgICAvLyByZWxhdGl2ZSBwYXRoIHN1cHBvcnRcbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgdXJpKSB7XG4gICAgICAgICAgICAgIGlmICgnLycgPT0gdXJpLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgIGlmICgnLycgPT0gdXJpLmNoYXJBdCgxKSkge1xuICAgICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgdXJpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB1cmkgPSBsb2MuaG9zdCArIHVyaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIS9eKGh0dHBzP3x3c3M/KTpcXC9cXC8vLnRlc3QodXJpKSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKCdwcm90b2NvbC1sZXNzIHVybCAlcycsIHVyaSk7XG4gICAgICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBsb2MpIHtcbiAgICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArICcvLycgKyB1cmk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHVyaSA9ICdodHRwczovLycgKyB1cmk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gcGFyc2VcbiAgICAgICAgICAgICAgZGVidWcoJ3BhcnNlICVzJywgdXJpKTtcbiAgICAgICAgICAgICAgb2JqID0gcGFyc2V1cmkodXJpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gICAgICAgICAgICBpZiAoIW9iai5wb3J0KSB7XG4gICAgICAgICAgICAgIGlmICgvXihodHRwfHdzKSQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgICAgIG9iai5wb3J0ID0gJzgwJztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgvXihodHRwfHdzKXMkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgICAgICBvYmoucG9ydCA9ICc0NDMnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9iai5wYXRoID0gb2JqLnBhdGggfHwgJy8nO1xuXG4gICAgICAgICAgICB2YXIgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoJzonKSAhPT0gLTE7XG4gICAgICAgICAgICB2YXIgaG9zdCA9IGlwdjYgPyAnWycgKyBvYmouaG9zdCArICddJyA6IG9iai5ob3N0O1xuXG4gICAgICAgICAgICAvLyBkZWZpbmUgdW5pcXVlIGlkXG4gICAgICAgICAgICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAnOicgKyBvYmoucG9ydDtcbiAgICAgICAgICAgIC8vIGRlZmluZSBocmVmXG4gICAgICAgICAgICBvYmouaHJlZiA9IG9iai5wcm90b2NvbCArICc6Ly8nICsgaG9zdCArIChsb2MgJiYgbG9jLnBvcnQgPT0gb2JqLnBvcnQgPyAnJyA6ICc6JyArIG9iai5wb3J0KTtcblxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7IFwiZGVidWdcIjogMzksIFwicGFyc2V1cmlcIjogNDUgfV0sIDM2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHBvc2UgYEJhY2tvZmZgLlxuICAgICAgICAgKi9cblxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IEJhY2tvZmY7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWxpemUgYmFja29mZiB0aW1lciB3aXRoIGBvcHRzYC5cbiAgICAgICAgICpcbiAgICAgICAgICogLSBgbWluYCBpbml0aWFsIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIFsxMDBdXG4gICAgICAgICAqIC0gYG1heGAgbWF4IHRpbWVvdXQgWzEwMDAwXVxuICAgICAgICAgKiAtIGBqaXR0ZXJgIFswXVxuICAgICAgICAgKiAtIGBmYWN0b3JgIFsyXVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBCYWNrb2ZmKG9wdHMpIHtcbiAgICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgICB0aGlzLm1zID0gb3B0cy5taW4gfHwgMTAwO1xuICAgICAgICAgIHRoaXMubWF4ID0gb3B0cy5tYXggfHwgMTAwMDA7XG4gICAgICAgICAgdGhpcy5mYWN0b3IgPSBvcHRzLmZhY3RvciB8fCAyO1xuICAgICAgICAgIHRoaXMuaml0dGVyID0gb3B0cy5qaXR0ZXIgPiAwICYmIG9wdHMuaml0dGVyIDw9IDEgPyBvcHRzLmppdHRlciA6IDA7XG4gICAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIHRoZSBiYWNrb2ZmIGR1cmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEJhY2tvZmYucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBtcyA9IHRoaXMubXMgKiBNYXRoLnBvdyh0aGlzLmZhY3RvciwgdGhpcy5hdHRlbXB0cysrKTtcbiAgICAgICAgICBpZiAodGhpcy5qaXR0ZXIpIHtcbiAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHZhciBkZXZpYXRpb24gPSBNYXRoLmZsb29yKHJhbmQgKiB0aGlzLmppdHRlciAqIG1zKTtcbiAgICAgICAgICAgIG1zID0gKE1hdGguZmxvb3IocmFuZCAqIDEwKSAmIDEpID09IDAgPyBtcyAtIGRldmlhdGlvbiA6IG1zICsgZGV2aWF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gTWF0aC5taW4obXMsIHRoaXMubWF4KSB8IDA7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc2V0IHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEJhY2tvZmYucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuYXR0ZW1wdHMgPSAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIG1pbmltdW0gZHVyYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgQmFja29mZi5wcm90b3R5cGUuc2V0TWluID0gZnVuY3Rpb24gKG1pbikge1xuICAgICAgICAgIHRoaXMubXMgPSBtaW47XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgbWF4aW11bSBkdXJhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBCYWNrb2ZmLnByb3RvdHlwZS5zZXRNYXggPSBmdW5jdGlvbiAobWF4KSB7XG4gICAgICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgaml0dGVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEJhY2tvZmYucHJvdG90eXBlLnNldEppdHRlciA9IGZ1bmN0aW9uIChqaXR0ZXIpIHtcbiAgICAgICAgICB0aGlzLmppdHRlciA9IGppdHRlcjtcbiAgICAgICAgfTtcbiAgICAgIH0sIHt9XSwgMzc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTbGljZSByZWZlcmVuY2UuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBzbGljZSA9IFtdLnNsaWNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kIGBvYmpgIHRvIGBmbmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGZuIG9yIHN0cmluZ1xuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBmbikge1xuICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZm4pIGZuID0gb2JqW2ZuXTtcbiAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyAhPSB0eXBlb2YgZm4pIHRocm93IG5ldyBFcnJvcignYmluZCgpIHJlcXVpcmVzIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG9iaiwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH0sIHt9XSwgMzg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gICAgICAgICAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICAgICAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICAgICAgICAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKS5wdXNoKGZuKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gICAgICAgICAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAgICAgKiBAcmV0dXJuIHtFbWl0dGVyfVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgICAgICAgIGZ1bmN0aW9uIG9uKCkge1xuICAgICAgICAgICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcbiAgICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb24uZm4gPSBmbjtcbiAgICAgICAgICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gICAgICAgICAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICAgICAgICogQHJldHVybiB7RW1pdHRlcn1cbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgRW1pdHRlci5wcm90b3R5cGUub2ZmID0gRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAgICAgICAgIC8vIGFsbFxuICAgICAgICAgIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgICAgICAgICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gICAgICAgICAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICAgICAgICAgIHZhciBjYjtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgICAgICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICAgICAgICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gICAgICAgICAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICAgIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XG5cbiAgICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiAhIXRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG4gICAgICAgIH07XG4gICAgICB9LCB7fV0sIDM5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBhcmd1bWVudHNbNF1bMTddWzBdLmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICB9LCB7IFwiLi9kZWJ1Z1wiOiA0MCwgXCJkdXBcIjogMTcgfV0sIDQwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBhcmd1bWVudHNbNF1bMThdWzBdLmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICB9LCB7IFwiZHVwXCI6IDE4LCBcIm1zXCI6IDQ0IH1dLCA0MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIHZhciBpc0FycmF5ID0gX2RlcmVxXygnaXNhcnJheScpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGhhc0JpbmFyeTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENoZWNrcyBmb3IgYmluYXJ5IGRhdGEuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBSaWdodCBub3cgb25seSBCdWZmZXIgYW5kIEFycmF5QnVmZmVyIGFyZSBzdXBwb3J0ZWQuLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGFueXRoaW5nXG4gICAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIGhhc0JpbmFyeShkYXRhKSB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9oYXNCaW5hcnkob2JqKSB7XG4gICAgICAgICAgICAgIGlmICghb2JqKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKGdsb2JhbC5CdWZmZXIgJiYgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlciAmJiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgZ2xvYmFsLkFycmF5QnVmZmVyICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGdsb2JhbC5CbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IgfHwgZ2xvYmFsLkZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoX2hhc0JpbmFyeShvYmpbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmogJiYgJ29iamVjdCcgPT0gdHlwZW9mIG9iaikge1xuICAgICAgICAgICAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvaGFzLWJpbmFyeS9wdWxsLzRcbiAgICAgICAgICAgICAgICBpZiAob2JqLnRvSlNPTiAmJiAnZnVuY3Rpb24nID09IHR5cGVvZiBvYmoudG9KU09OKSB7XG4gICAgICAgICAgICAgICAgICBvYmogPSBvYmoudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgJiYgX2hhc0JpbmFyeShvYmpba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2hhc0JpbmFyeShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7IFwiaXNhcnJheVwiOiA0MyB9XSwgNDI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIGFyZ3VtZW50c1s0XVsyM11bMF0uYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgIH0sIHsgXCJkdXBcIjogMjMgfV0sIDQzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBhcmd1bWVudHNbNF1bMjRdWzBdLmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICB9LCB7IFwiZHVwXCI6IDI0IH1dLCA0NDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgYXJndW1lbnRzWzRdWzI1XVswXS5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgfSwgeyBcImR1cFwiOiAyNSB9XSwgNDU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIGFyZ3VtZW50c1s0XVsyOF1bMF0uYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgIH0sIHsgXCJkdXBcIjogMjggfV0sIDQ2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAgIC8qZ2xvYmFsIEJsb2IsRmlsZSovXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2R1bGUgcmVxdWlyZW1lbnRzXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICB2YXIgaXNBcnJheSA9IF9kZXJlcV8oJ2lzYXJyYXknKTtcbiAgICAgICAgICB2YXIgaXNCdWYgPSBfZGVyZXFfKCcuL2lzLWJ1ZmZlcicpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUmVwbGFjZXMgZXZlcnkgQnVmZmVyIHwgQXJyYXlCdWZmZXIgaW4gcGFja2V0IHdpdGggYSBudW1iZXJlZCBwbGFjZWhvbGRlci5cbiAgICAgICAgICAgKiBBbnl0aGluZyB3aXRoIGJsb2JzIG9yIGZpbGVzIHNob3VsZCBiZSBmZWQgdGhyb3VnaCByZW1vdmVCbG9icyBiZWZvcmUgY29taW5nXG4gICAgICAgICAgICogaGVyZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBzb2NrZXQuaW8gZXZlbnQgcGFja2V0XG4gICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGRlY29uc3RydWN0ZWQgcGFja2V0IGFuZCBsaXN0IG9mIGJ1ZmZlcnNcbiAgICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgICAqL1xuXG4gICAgICAgICAgZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgICAgICAgIHZhciBidWZmZXJzID0gW107XG4gICAgICAgICAgICB2YXIgcGFja2V0RGF0YSA9IHBhY2tldC5kYXRhO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YSkge1xuICAgICAgICAgICAgICBpZiAoIWRhdGEpIHJldHVybiBkYXRhO1xuXG4gICAgICAgICAgICAgIGlmIChpc0J1ZihkYXRhKSkge1xuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IHsgX3BsYWNlaG9sZGVyOiB0cnVlLCBudW06IGJ1ZmZlcnMubGVuZ3RoIH07XG4gICAgICAgICAgICAgICAgYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0RhdGEgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgbmV3RGF0YVtpXSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoJ29iamVjdCcgPT0gdHlwZW9mIGRhdGEgJiYgIShkYXRhIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3RGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBuZXdEYXRhW2tleV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYWNrID0gcGFja2V0O1xuICAgICAgICAgICAgcGFjay5kYXRhID0gX2RlY29uc3RydWN0UGFja2V0KHBhY2tldERhdGEpO1xuICAgICAgICAgICAgcGFjay5hdHRhY2htZW50cyA9IGJ1ZmZlcnMubGVuZ3RoOyAvLyBudW1iZXIgb2YgYmluYXJ5ICdhdHRhY2htZW50cydcbiAgICAgICAgICAgIHJldHVybiB7IHBhY2tldDogcGFjaywgYnVmZmVyczogYnVmZmVycyB9O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBSZWNvbnN0cnVjdHMgYSBiaW5hcnkgcGFja2V0IGZyb20gaXRzIHBsYWNlaG9sZGVyIHBhY2tldCBhbmQgYnVmZmVyc1xuICAgICAgICAgICAqXG4gICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGJ1ZmZlcnMgLSBiaW5hcnkgYnVmZmVycyB0byBwdXQgaW4gcGxhY2Vob2xkZXIgcG9zaXRpb25zXG4gICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSByZWNvbnN0cnVjdGVkIHBhY2tldFxuICAgICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBleHBvcnRzLnJlY29uc3RydWN0UGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCwgYnVmZmVycykge1xuICAgICAgICAgICAgdmFyIGN1clBsYWNlSG9sZGVyID0gMDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gX3JlY29uc3RydWN0UGFja2V0KGRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5fcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmID0gYnVmZmVyc1tkYXRhLm51bV07IC8vIGFwcHJvcHJpYXRlIGJ1ZmZlciAoc2hvdWxkIGJlIG5hdHVyYWwgb3JkZXIgYW55d2F5KVxuICAgICAgICAgICAgICAgIHJldHVybiBidWY7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgZGF0YVtpXSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSAmJiAnb2JqZWN0JyA9PSB0eXBlb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhY2tldC5kYXRhID0gX3JlY29uc3RydWN0UGFja2V0KHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICAgICAgICAgICAgcmV0dXJuIHBhY2tldDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQXN5bmNocm9ub3VzbHkgcmVtb3ZlcyBCbG9icyBvciBGaWxlcyBmcm9tIGRhdGEgdmlhXG4gICAgICAgICAgICogRmlsZVJlYWRlcidzIHJlYWRBc0FycmF5QnVmZmVyIG1ldGhvZC4gVXNlZCBiZWZvcmUgZW5jb2RpbmdcbiAgICAgICAgICAgKiBkYXRhIGFzIG1zZ3BhY2suIENhbGxzIGNhbGxiYWNrIHdpdGggdGhlIGJsb2JsZXNzIGRhdGEuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAgICovXG5cbiAgICAgICAgICBleHBvcnRzLnJlbW92ZUJsb2JzID0gZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBfcmVtb3ZlQmxvYnMob2JqLCBjdXJLZXksIGNvbnRhaW5pbmdPYmplY3QpIHtcbiAgICAgICAgICAgICAgaWYgKCFvYmopIHJldHVybiBvYmo7XG5cbiAgICAgICAgICAgICAgLy8gY29udmVydCBhbnkgYmxvYlxuICAgICAgICAgICAgICBpZiAoZ2xvYmFsLkJsb2IgJiYgb2JqIGluc3RhbmNlb2YgQmxvYiB8fCBnbG9iYWwuRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgICAgICAgcGVuZGluZ0Jsb2JzKys7XG5cbiAgICAgICAgICAgICAgICAvLyBhc3luYyBmaWxlcmVhZGVyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZXN1bHQgPT0gYXJyYXlidWZmZXJcbiAgICAgICAgICAgICAgICAgIGlmIChjb250YWluaW5nT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5pbmdPYmplY3RbY3VyS2V5XSA9IHRoaXMucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvYmxlc3NEYXRhID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgcGVuZGluZyBpdHMgY2FsbGJhY2sgdGltZVxuICAgICAgICAgICAgICAgICAgaWYgKCEgLS1wZW5kaW5nQmxvYnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soYmxvYmxlc3NEYXRhKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihvYmopOyAvLyBibG9iIC0+IGFycmF5YnVmZmVyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZW1vdmVCbG9icyhvYmpbaV0sIGksIG9iaik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmogJiYgJ29iamVjdCcgPT0gdHlwZW9mIG9iaiAmJiAhaXNCdWYob2JqKSkge1xuICAgICAgICAgICAgICAgICAgLy8gYW5kIG9iamVjdFxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgICAgICBfcmVtb3ZlQmxvYnMob2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwZW5kaW5nQmxvYnMgPSAwO1xuICAgICAgICAgICAgdmFyIGJsb2JsZXNzRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBfcmVtb3ZlQmxvYnMoYmxvYmxlc3NEYXRhKTtcbiAgICAgICAgICAgIGlmICghcGVuZGluZ0Jsb2JzKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2JsZXNzRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkuY2FsbCh0aGlzLCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbiAgICAgIH0sIHsgXCIuL2lzLWJ1ZmZlclwiOiA0OCwgXCJpc2FycmF5XCI6IDQzIH1dLCA0NzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIGRlYnVnID0gX2RlcmVxXygnZGVidWcnKSgnc29ja2V0LmlvLXBhcnNlcicpO1xuICAgICAgICB2YXIganNvbiA9IF9kZXJlcV8oJ2pzb24zJyk7XG4gICAgICAgIHZhciBpc0FycmF5ID0gX2RlcmVxXygnaXNhcnJheScpO1xuICAgICAgICB2YXIgRW1pdHRlciA9IF9kZXJlcV8oJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG4gICAgICAgIHZhciBiaW5hcnkgPSBfZGVyZXFfKCcuL2JpbmFyeScpO1xuICAgICAgICB2YXIgaXNCdWYgPSBfZGVyZXFfKCcuL2lzLWJ1ZmZlcicpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm90b2NvbCB2ZXJzaW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLnByb3RvY29sID0gNDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFja2V0IHR5cGVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLnR5cGVzID0gWydDT05ORUNUJywgJ0RJU0NPTk5FQ1QnLCAnRVZFTlQnLCAnQklOQVJZX0VWRU5UJywgJ0FDSycsICdCSU5BUllfQUNLJywgJ0VSUk9SJ107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhY2tldCB0eXBlIGBjb25uZWN0YC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5DT05ORUNUID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFja2V0IHR5cGUgYGRpc2Nvbm5lY3RgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLkRJU0NPTk5FQ1QgPSAxO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYWNrZXQgdHlwZSBgZXZlbnRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBleHBvcnRzLkVWRU5UID0gMjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFja2V0IHR5cGUgYGFja2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuQUNLID0gMztcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFja2V0IHR5cGUgYGVycm9yYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZXhwb3J0cy5FUlJPUiA9IDQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhY2tldCB0eXBlICdiaW5hcnkgZXZlbnQnXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuQklOQVJZX0VWRU5UID0gNTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFja2V0IHR5cGUgYGJpbmFyeSBhY2tgLiBGb3IgYWNrcyB3aXRoIGJpbmFyeSBhcmd1bWVudHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuQklOQVJZX0FDSyA9IDY7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXIgY29uc3RydWN0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuRW5jb2RlciA9IEVuY29kZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXIgY29uc3RydWN0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIGV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc29ja2V0LmlvIEVuY29kZXIgaW5zdGFuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwdWJsaWNcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gRW5jb2RlcigpIHt9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZSBhIHBhY2tldCBhcyBhIHNpbmdsZSBzdHJpbmcgaWYgbm9uLWJpbmFyeSwgb3IgYXMgYVxuICAgICAgICAgKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHBhY2tldCBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBoYW5kbGUgZW5jb2RpbmdzIChsaWtlbHkgZW5naW5lLndyaXRlKVxuICAgICAgICAgKiBAcmV0dXJuIENhbGxzIGNhbGxiYWNrIHdpdGggQXJyYXkgb2YgZW5jb2RpbmdzXG4gICAgICAgICAqIEBhcGkgcHVibGljXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVuY29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChvYmosIGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGVidWcoJ2VuY29kaW5nIHBhY2tldCAlaicsIG9iaik7XG5cbiAgICAgICAgICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT0gb2JqLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09IG9iai50eXBlKSB7XG4gICAgICAgICAgICBlbmNvZGVBc0JpbmFyeShvYmosIGNhbGxiYWNrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGVuY29kaW5nID0gZW5jb2RlQXNTdHJpbmcob2JqKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKFtlbmNvZGluZ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlIHBhY2tldCBhcyBzdHJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfSBlbmNvZGVkXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBlbmNvZGVBc1N0cmluZyhvYmopIHtcbiAgICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgICAgdmFyIG5zcCA9IGZhbHNlO1xuXG4gICAgICAgICAgLy8gZmlyc3QgaXMgdHlwZVxuICAgICAgICAgIHN0ciArPSBvYmoudHlwZTtcblxuICAgICAgICAgIC8vIGF0dGFjaG1lbnRzIGlmIHdlIGhhdmUgdGhlbVxuICAgICAgICAgIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PSBvYmoudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT0gb2JqLnR5cGUpIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouYXR0YWNobWVudHM7XG4gICAgICAgICAgICBzdHIgKz0gJy0nO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYSBuYW1lc3BhY2Ugb3RoZXIgdGhhbiBgL2BcbiAgICAgICAgICAvLyB3ZSBhcHBlbmQgaXQgZm9sbG93ZWQgYnkgYSBjb21tYSBgLGBcbiAgICAgICAgICBpZiAob2JqLm5zcCAmJiAnLycgIT0gb2JqLm5zcCkge1xuICAgICAgICAgICAgbnNwID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0ciArPSBvYmoubnNwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IHRoZSBpZFxuICAgICAgICAgIGlmIChudWxsICE9IG9iai5pZCkge1xuICAgICAgICAgICAgaWYgKG5zcCkge1xuICAgICAgICAgICAgICBzdHIgKz0gJywnO1xuICAgICAgICAgICAgICBuc3AgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0ciArPSBvYmouaWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8ganNvbiBkYXRhXG4gICAgICAgICAgaWYgKG51bGwgIT0gb2JqLmRhdGEpIHtcbiAgICAgICAgICAgIGlmIChuc3ApIHN0ciArPSAnLCc7XG4gICAgICAgICAgICBzdHIgKz0ganNvbi5zdHJpbmdpZnkob2JqLmRhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlYnVnKCdlbmNvZGVkICVqIGFzICVzJywgb2JqLCBzdHIpO1xuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlIHBhY2tldCBhcyAnYnVmZmVyIHNlcXVlbmNlJyBieSByZW1vdmluZyBibG9icywgYW5kXG4gICAgICAgICAqIGRlY29uc3RydWN0aW5nIHBhY2tldCBpbnRvIG9iamVjdCB3aXRoIHBsYWNlaG9sZGVycyBhbmRcbiAgICAgICAgICogYSBsaXN0IG9mIGJ1ZmZlcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQHJldHVybiB7QnVmZmVyfSBlbmNvZGVkXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBlbmNvZGVBc0JpbmFyeShvYmosIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgICBmdW5jdGlvbiB3cml0ZUVuY29kaW5nKGJsb2JsZXNzRGF0YSkge1xuICAgICAgICAgICAgdmFyIGRlY29uc3RydWN0aW9uID0gYmluYXJ5LmRlY29uc3RydWN0UGFja2V0KGJsb2JsZXNzRGF0YSk7XG4gICAgICAgICAgICB2YXIgcGFjayA9IGVuY29kZUFzU3RyaW5nKGRlY29uc3RydWN0aW9uLnBhY2tldCk7XG4gICAgICAgICAgICB2YXIgYnVmZmVycyA9IGRlY29uc3RydWN0aW9uLmJ1ZmZlcnM7XG5cbiAgICAgICAgICAgIGJ1ZmZlcnMudW5zaGlmdChwYWNrKTsgLy8gYWRkIHBhY2tldCBpbmZvIHRvIGJlZ2lubmluZyBvZiBkYXRhIGxpc3RcbiAgICAgICAgICAgIGNhbGxiYWNrKGJ1ZmZlcnMpOyAvLyB3cml0ZSBhbGwgdGhlIGJ1ZmZlcnNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBiaW5hcnkucmVtb3ZlQmxvYnMob2JqLCB3cml0ZUVuY29kaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNvY2tldC5pbyBEZWNvZGVyIGluc3RhbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gZGVjb2RlclxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBEZWNvZGVyKCkge1xuICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWl4IGluIGBFbWl0dGVyYCB3aXRoIERlY29kZXIuXG4gICAgICAgICAqL1xuXG4gICAgICAgIEVtaXR0ZXIoRGVjb2Rlci5wcm90b3R5cGUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGFuIGVjb2RlZCBwYWNrZXQgc3RyaW5nIGludG8gcGFja2V0IEpTT04uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvYmogLSBlbmNvZGVkIHBhY2tldFxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBEZWNvZGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgdmFyIHBhY2tldDtcbiAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIG9iaikge1xuICAgICAgICAgICAgcGFja2V0ID0gZGVjb2RlU3RyaW5nKG9iaik7XG4gICAgICAgICAgICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT0gcGFja2V0LnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09IHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICAgIC8vIGJpbmFyeSBwYWNrZXQncyBqc29uXG4gICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG5ldyBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCk7XG5cbiAgICAgICAgICAgICAgLy8gbm8gYXR0YWNobWVudHMsIGxhYmVsZWQgYmluYXJ5IGJ1dCBubyBiaW5hcnkgZGF0YSB0byBmb2xsb3dcbiAgICAgICAgICAgICAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvci5yZWNvblBhY2suYXR0YWNobWVudHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBub24tYmluYXJ5IGZ1bGwgcGFja2V0XG4gICAgICAgICAgICAgIHRoaXMuZW1pdCgnZGVjb2RlZCcsIHBhY2tldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0J1ZihvYmopIHx8IG9iai5iYXNlNjQpIHtcbiAgICAgICAgICAgIC8vIHJhdyBiaW5hcnkgZGF0YVxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnb3QgYmluYXJ5IGRhdGEgd2hlbiBub3QgcmVjb25zdHJ1Y3RpbmcgYSBwYWNrZXQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhY2tldCA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YShvYmopO1xuICAgICAgICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVjZWl2ZWQgZmluYWwgYnVmZmVyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biB0eXBlOiAnICsgb2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZSBhIHBhY2tldCBTdHJpbmcgKEpTT04gZGF0YSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gZGVjb2RlU3RyaW5nKHN0cikge1xuICAgICAgICAgIHZhciBwID0ge307XG4gICAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgICAgLy8gbG9vayB1cCB0eXBlXG4gICAgICAgICAgcC50eXBlID0gTnVtYmVyKHN0ci5jaGFyQXQoMCkpO1xuICAgICAgICAgIGlmIChudWxsID09IGV4cG9ydHMudHlwZXNbcC50eXBlXSkgcmV0dXJuIGVycm9yKCk7XG5cbiAgICAgICAgICAvLyBsb29rIHVwIGF0dGFjaG1lbnRzIGlmIHR5cGUgYmluYXJ5XG4gICAgICAgICAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09IHAudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT0gcC50eXBlKSB7XG4gICAgICAgICAgICB2YXIgYnVmID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAoc3RyLmNoYXJBdCgrK2kpICE9ICctJykge1xuICAgICAgICAgICAgICBidWYgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgaWYgKGkgPT0gc3RyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnVmICE9IE51bWJlcihidWYpIHx8IHN0ci5jaGFyQXQoaSkgIT0gJy0nKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBhdHRhY2htZW50cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5hdHRhY2htZW50cyA9IE51bWJlcihidWYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGxvb2sgdXAgbmFtZXNwYWNlIChpZiBhbnkpXG4gICAgICAgICAgaWYgKCcvJyA9PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgICAgICAgICAgcC5uc3AgPSAnJztcbiAgICAgICAgICAgIHdoaWxlICgrK2kpIHtcbiAgICAgICAgICAgICAgdmFyIGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICBpZiAoJywnID09IGMpIGJyZWFrO1xuICAgICAgICAgICAgICBwLm5zcCArPSBjO1xuICAgICAgICAgICAgICBpZiAoaSA9PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcC5uc3AgPSAnLyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbG9vayB1cCBpZFxuICAgICAgICAgIHZhciBuZXh0ID0gc3RyLmNoYXJBdChpICsgMSk7XG4gICAgICAgICAgaWYgKCcnICE9PSBuZXh0ICYmIE51bWJlcihuZXh0KSA9PSBuZXh0KSB7XG4gICAgICAgICAgICBwLmlkID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAoKytpKSB7XG4gICAgICAgICAgICAgIHZhciBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgaWYgKG51bGwgPT0gYyB8fCBOdW1iZXIoYykgIT0gYykge1xuICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwLmlkICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgIGlmIChpID09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5pZCA9IE51bWJlcihwLmlkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBsb29rIHVwIGpzb24gZGF0YVxuICAgICAgICAgIGlmIChzdHIuY2hhckF0KCsraSkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHAuZGF0YSA9IGpzb24ucGFyc2Uoc3RyLnN1YnN0cihpKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlYnVnKCdkZWNvZGVkICVzIGFzICVqJywgc3RyLCBwKTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWFsbG9jYXRlcyBhIHBhcnNlcidzIHJlc291cmNlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAgICAgKi9cblxuICAgICAgICBEZWNvZGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3Rvci5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gICAgICAgICAqIGJlIGNvbnN0cnVjdGVkIHdoZW5ldmVyIGEgcGFja2V0IG9mIHR5cGUgQklOQVJZX0VWRU5UIGlzXG4gICAgICAgICAqIGRlY29kZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAgICAgICAgICogQHJldHVybiB7QmluYXJ5UmVjb25zdHJ1Y3Rvcn0gaW5pdGlhbGl6ZWQgcmVjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICovXG5cbiAgICAgICAgZnVuY3Rpb24gQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpIHtcbiAgICAgICAgICB0aGlzLnJlY29uUGFjayA9IHBhY2tldDtcbiAgICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gYmluYXJ5IGRhdGEgcmVjZWl2ZWQgZnJvbSBjb25uZWN0aW9uXG4gICAgICAgICAqIGFmdGVyIGEgQklOQVJZX0VWRU5UIHBhY2tldC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtCdWZmZXIgfCBBcnJheUJ1ZmZlcn0gYmluRGF0YSAtIHRoZSByYXcgYmluYXJ5IGRhdGEgcmVjZWl2ZWRcbiAgICAgICAgICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gcmV0dXJucyBudWxsIGlmIG1vcmUgYmluYXJ5IGRhdGEgaXMgZXhwZWN0ZWQgb3JcbiAgICAgICAgICogICBhIHJlY29uc3RydWN0ZWQgcGFja2V0IG9iamVjdCBpZiBhbGwgYnVmZmVycyBoYXZlIGJlZW4gcmVjZWl2ZWQuXG4gICAgICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAgICAgKi9cblxuICAgICAgICBCaW5hcnlSZWNvbnN0cnVjdG9yLnByb3RvdHlwZS50YWtlQmluYXJ5RGF0YSA9IGZ1bmN0aW9uIChiaW5EYXRhKSB7XG4gICAgICAgICAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gICAgICAgICAgaWYgKHRoaXMuYnVmZmVycy5sZW5ndGggPT0gdGhpcy5yZWNvblBhY2suYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvbmUgd2l0aCBidWZmZXIgbGlzdFxuICAgICAgICAgICAgdmFyIHBhY2tldCA9IGJpbmFyeS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHBhY2tldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFucyB1cCBiaW5hcnkgcGFja2V0IHJlY29uc3RydWN0aW9uIHZhcmlhYmxlcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGFwaSBwcml2YXRlXG4gICAgICAgICAqL1xuXG4gICAgICAgIEJpbmFyeVJlY29uc3RydWN0b3IucHJvdG90eXBlLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5yZWNvblBhY2sgPSBudWxsO1xuICAgICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGVycm9yKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogZXhwb3J0cy5FUlJPUixcbiAgICAgICAgICAgIGRhdGE6ICdwYXJzZXIgZXJyb3InXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSwgeyBcIi4vYmluYXJ5XCI6IDQ2LCBcIi4vaXMtYnVmZmVyXCI6IDQ4LCBcImNvbXBvbmVudC1lbWl0dGVyXCI6IDQ5LCBcImRlYnVnXCI6IDM5LCBcImlzYXJyYXlcIjogNDMsIFwianNvbjNcIjogNTAgfV0sIDQ4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuXG4gICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBpc0J1ZjtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiBvYmogaXMgYSBidWZmZXIgb3IgYW4gYXJyYXlidWZmZXIuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgICAgICAgKi9cblxuICAgICAgICAgIGZ1bmN0aW9uIGlzQnVmKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbC5CdWZmZXIgJiYgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlcihvYmopIHx8IGdsb2JhbC5BcnJheUJ1ZmZlciAmJiBvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgICB9LCB7fV0sIDQ5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBhcmd1bWVudHNbNF1bMTVdWzBdLmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICB9LCB7IFwiZHVwXCI6IDE1IH1dLCA1MDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgICAvKiEgSlNPTiB2My4zLjIgfCBodHRwOi8vYmVzdGllanMuZ2l0aHViLmlvL2pzb24zIHwgQ29weXJpZ2h0IDIwMTItMjAxNCwgS2l0IENhbWJyaWRnZSB8IGh0dHA6Ly9raXQubWl0LWxpY2Vuc2Uub3JnICovXG4gICAgICAgICAgOyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBEZXRlY3QgdGhlIGBkZWZpbmVgIGZ1bmN0aW9uIGV4cG9zZWQgYnkgYXN5bmNocm9ub3VzIG1vZHVsZSBsb2FkZXJzLiBUaGVcbiAgICAgICAgICAgIC8vIHN0cmljdCBgZGVmaW5lYCBjaGVjayBpcyBuZWNlc3NhcnkgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBgci5qc2AuXG4gICAgICAgICAgICB2YXIgaXNMb2FkZXIgPSB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZDtcblxuICAgICAgICAgICAgLy8gQSBzZXQgb2YgdHlwZXMgdXNlZCB0byBkaXN0aW5ndWlzaCBvYmplY3RzIGZyb20gcHJpbWl0aXZlcy5cbiAgICAgICAgICAgIHZhciBvYmplY3RUeXBlcyA9IHtcbiAgICAgICAgICAgICAgXCJmdW5jdGlvblwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIm9iamVjdFwiOiB0cnVlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBEZXRlY3QgdGhlIGBleHBvcnRzYCBvYmplY3QgZXhwb3NlZCBieSBDb21tb25KUyBpbXBsZW1lbnRhdGlvbnMuXG4gICAgICAgICAgICB2YXIgZnJlZUV4cG9ydHMgPSBvYmplY3RUeXBlc1t0eXBlb2YgZXhwb3J0c10gJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGBnbG9iYWxgIG9iamVjdCBleHBvc2VkIGJ5IE5vZGUgKGluY2x1ZGluZyBCcm93c2VyaWZ5IHZpYVxuICAgICAgICAgICAgLy8gYGluc2VydC1tb2R1bGUtZ2xvYmFsc2ApLCBOYXJ3aGFsLCBhbmQgUmluZ28gYXMgdGhlIGRlZmF1bHQgY29udGV4dCxcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgYHdpbmRvd2Agb2JqZWN0IGluIGJyb3dzZXJzLiBSaGlubyBleHBvcnRzIGEgYGdsb2JhbGAgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIGluc3RlYWQuXG4gICAgICAgICAgICB2YXIgcm9vdCA9IG9iamVjdFR5cGVzW3R5cGVvZiB3aW5kb3ddICYmIHdpbmRvdyB8fCB0aGlzLFxuICAgICAgICAgICAgICAgIGZyZWVHbG9iYWwgPSBmcmVlRXhwb3J0cyAmJiBvYmplY3RUeXBlc1t0eXBlb2YgbW9kdWxlXSAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiB0eXBlb2YgZ2xvYmFsID09IFwib2JqZWN0XCIgJiYgZ2xvYmFsO1xuXG4gICAgICAgICAgICBpZiAoZnJlZUdsb2JhbCAmJiAoZnJlZUdsb2JhbFtcImdsb2JhbFwiXSA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsW1wid2luZG93XCJdID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWxbXCJzZWxmXCJdID09PSBmcmVlR2xvYmFsKSkge1xuICAgICAgICAgICAgICByb290ID0gZnJlZUdsb2JhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHVibGljOiBJbml0aWFsaXplcyBKU09OIDMgdXNpbmcgdGhlIGdpdmVuIGBjb250ZXh0YCBvYmplY3QsIGF0dGFjaGluZyB0aGVcbiAgICAgICAgICAgIC8vIGBzdHJpbmdpZnlgIGFuZCBgcGFyc2VgIGZ1bmN0aW9ucyB0byB0aGUgc3BlY2lmaWVkIGBleHBvcnRzYCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jdGlvbiBydW5JbkNvbnRleHQoY29udGV4dCwgZXhwb3J0cykge1xuICAgICAgICAgICAgICBjb250ZXh0IHx8IChjb250ZXh0ID0gcm9vdFtcIk9iamVjdFwiXSgpKTtcbiAgICAgICAgICAgICAgZXhwb3J0cyB8fCAoZXhwb3J0cyA9IHJvb3RbXCJPYmplY3RcIl0oKSk7XG5cbiAgICAgICAgICAgICAgLy8gTmF0aXZlIGNvbnN0cnVjdG9yIGFsaWFzZXMuXG4gICAgICAgICAgICAgIHZhciBOdW1iZXIgPSBjb250ZXh0W1wiTnVtYmVyXCJdIHx8IHJvb3RbXCJOdW1iZXJcIl0sXG4gICAgICAgICAgICAgICAgICBTdHJpbmcgPSBjb250ZXh0W1wiU3RyaW5nXCJdIHx8IHJvb3RbXCJTdHJpbmdcIl0sXG4gICAgICAgICAgICAgICAgICBPYmplY3QgPSBjb250ZXh0W1wiT2JqZWN0XCJdIHx8IHJvb3RbXCJPYmplY3RcIl0sXG4gICAgICAgICAgICAgICAgICBEYXRlID0gY29udGV4dFtcIkRhdGVcIl0gfHwgcm9vdFtcIkRhdGVcIl0sXG4gICAgICAgICAgICAgICAgICBTeW50YXhFcnJvciA9IGNvbnRleHRbXCJTeW50YXhFcnJvclwiXSB8fCByb290W1wiU3ludGF4RXJyb3JcIl0sXG4gICAgICAgICAgICAgICAgICBUeXBlRXJyb3IgPSBjb250ZXh0W1wiVHlwZUVycm9yXCJdIHx8IHJvb3RbXCJUeXBlRXJyb3JcIl0sXG4gICAgICAgICAgICAgICAgICBNYXRoID0gY29udGV4dFtcIk1hdGhcIl0gfHwgcm9vdFtcIk1hdGhcIl0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVKU09OID0gY29udGV4dFtcIkpTT05cIl0gfHwgcm9vdFtcIkpTT05cIl07XG5cbiAgICAgICAgICAgICAgLy8gRGVsZWdhdGUgdG8gdGhlIG5hdGl2ZSBgc3RyaW5naWZ5YCBhbmQgYHBhcnNlYCBpbXBsZW1lbnRhdGlvbnMuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbmF0aXZlSlNPTiA9PSBcIm9iamVjdFwiICYmIG5hdGl2ZUpTT04pIHtcbiAgICAgICAgICAgICAgICBleHBvcnRzLnN0cmluZ2lmeSA9IG5hdGl2ZUpTT04uc3RyaW5naWZ5O1xuICAgICAgICAgICAgICAgIGV4cG9ydHMucGFyc2UgPSBuYXRpdmVKU09OLnBhcnNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gQ29udmVuaWVuY2UgYWxpYXNlcy5cbiAgICAgICAgICAgICAgdmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgIGdldENsYXNzID0gb2JqZWN0UHJvdG8udG9TdHJpbmcsXG4gICAgICAgICAgICAgICAgICBpc1Byb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgZm9yRWFjaCxcbiAgICAgICAgICAgICAgICAgIHVuZGVmO1xuXG4gICAgICAgICAgICAgIC8vIFRlc3QgdGhlIGBEYXRlI2dldFVUQypgIG1ldGhvZHMuIEJhc2VkIG9uIHdvcmsgYnkgQFlhZmZsZS5cbiAgICAgICAgICAgICAgdmFyIGlzRXh0ZW5kZWQgPSBuZXcgRGF0ZSgtMzUwOTgyNzMzNDU3MzI5Mik7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGBnZXRVVENGdWxsWWVhcmAsIGBNb250aGAsIGFuZCBgRGF0ZWAgbWV0aG9kcyByZXR1cm4gbm9uc2Vuc2ljYWxcbiAgICAgICAgICAgICAgICAvLyByZXN1bHRzIGZvciBjZXJ0YWluIGRhdGVzIGluIE9wZXJhID49IDEwLjUzLlxuICAgICAgICAgICAgICAgIGlzRXh0ZW5kZWQgPSBpc0V4dGVuZGVkLmdldFVUQ0Z1bGxZZWFyKCkgPT0gLTEwOTI1MiAmJiBpc0V4dGVuZGVkLmdldFVUQ01vbnRoKCkgPT09IDAgJiYgaXNFeHRlbmRlZC5nZXRVVENEYXRlKCkgPT09IDEgJiZcbiAgICAgICAgICAgICAgICAvLyBTYWZhcmkgPCAyLjAuMiBzdG9yZXMgdGhlIGludGVybmFsIG1pbGxpc2Vjb25kIHRpbWUgdmFsdWUgY29ycmVjdGx5LFxuICAgICAgICAgICAgICAgIC8vIGJ1dCBjbGlwcyB0aGUgdmFsdWVzIHJldHVybmVkIGJ5IHRoZSBkYXRlIG1ldGhvZHMgdG8gdGhlIHJhbmdlIG9mXG4gICAgICAgICAgICAgICAgLy8gc2lnbmVkIDMyLWJpdCBpbnRlZ2VycyAoWy0yICoqIDMxLCAyICoqIDMxIC0gMV0pLlxuICAgICAgICAgICAgICAgIGlzRXh0ZW5kZWQuZ2V0VVRDSG91cnMoKSA9PSAxMCAmJiBpc0V4dGVuZGVkLmdldFVUQ01pbnV0ZXMoKSA9PSAzNyAmJiBpc0V4dGVuZGVkLmdldFVUQ1NlY29uZHMoKSA9PSA2ICYmIGlzRXh0ZW5kZWQuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgPT0gNzA4O1xuICAgICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHt9XG5cbiAgICAgICAgICAgICAgLy8gSW50ZXJuYWw6IERldGVybWluZXMgd2hldGhlciB0aGUgbmF0aXZlIGBKU09OLnN0cmluZ2lmeWAgYW5kIGBwYXJzZWBcbiAgICAgICAgICAgICAgLy8gaW1wbGVtZW50YXRpb25zIGFyZSBzcGVjLWNvbXBsaWFudC4gQmFzZWQgb24gd29yayBieSBLZW4gU255ZGVyLlxuICAgICAgICAgICAgICBmdW5jdGlvbiBoYXMobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNbbmFtZV0gIT09IHVuZGVmKSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gY2FjaGVkIGZlYXR1cmUgdGVzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gaGFzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaXNTdXBwb3J0ZWQ7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJidWctc3RyaW5nLWNoYXItaW5kZXhcIikge1xuICAgICAgICAgICAgICAgICAgLy8gSUUgPD0gNyBkb2Vzbid0IHN1cHBvcnQgYWNjZXNzaW5nIHN0cmluZyBjaGFyYWN0ZXJzIHVzaW5nIHNxdWFyZVxuICAgICAgICAgICAgICAgICAgLy8gYnJhY2tldCBub3RhdGlvbi4gSUUgOCBvbmx5IHN1cHBvcnRzIHRoaXMgZm9yIHByaW1pdGl2ZXMuXG4gICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZCA9IFwiYVwiWzBdICE9IFwiYVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PSBcImpzb25cIikge1xuICAgICAgICAgICAgICAgICAgLy8gSW5kaWNhdGVzIHdoZXRoZXIgYm90aCBgSlNPTi5zdHJpbmdpZnlgIGFuZCBgSlNPTi5wYXJzZWAgYXJlXG4gICAgICAgICAgICAgICAgICAvLyBzdXBwb3J0ZWQuXG4gICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZCA9IGhhcyhcImpzb24tc3RyaW5naWZ5XCIpICYmIGhhcyhcImpzb24tcGFyc2VcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkID0gXCJ7XFxcImFcXFwiOlsxLHRydWUsZmFsc2UsbnVsbCxcXFwiXFxcXHUwMDAwXFxcXGJcXFxcblxcXFxmXFxcXHJcXFxcdFxcXCJdfVwiO1xuICAgICAgICAgICAgICAgICAgLy8gVGVzdCBgSlNPTi5zdHJpbmdpZnlgLlxuICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJqc29uLXN0cmluZ2lmeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJpbmdpZnkgPSBleHBvcnRzLnN0cmluZ2lmeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVN1cHBvcnRlZCA9IHR5cGVvZiBzdHJpbmdpZnkgPT0gXCJmdW5jdGlvblwiICYmIGlzRXh0ZW5kZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJpbmdpZnlTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBBIHRlc3QgZnVuY3Rpb24gb2JqZWN0IHdpdGggYSBjdXN0b20gYHRvSlNPTmAgbWV0aG9kLlxuICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLnRvSlNPTiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnlTdXBwb3J0ZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCAzLjFiMSBhbmQgYjIgc2VyaWFsaXplIHN0cmluZywgbnVtYmVyLCBhbmQgYm9vbGVhblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJpbWl0aXZlcyBhcyBvYmplY3QgbGl0ZXJhbHMuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnkoMCkgPT09IFwiMFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMSwgYjIsIGFuZCBKU09OIDIgc2VyaWFsaXplIHdyYXBwZWQgcHJpbWl0aXZlcyBhcyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KG5ldyBOdW1iZXIoKSkgPT09IFwiMFwiICYmIHN0cmluZ2lmeShuZXcgU3RyaW5nKCkpID09ICdcIlwiJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRkYgMy4xYjEsIDIgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIHZhbHVlIGlzIGBudWxsYCwgYHVuZGVmaW5lZGAsIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkb2VzIG5vdCBkZWZpbmUgYSBjYW5vbmljYWwgSlNPTiByZXByZXNlbnRhdGlvbiAodGhpcyBhcHBsaWVzIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3RzIHdpdGggYHRvSlNPTmAgcHJvcGVydGllcyBhcyB3ZWxsLCAqdW5sZXNzKiB0aGV5IGFyZSBuZXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpdGhpbiBhbiBvYmplY3Qgb3IgYXJyYXkpLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KGdldENsYXNzKSA9PT0gdW5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFIDggc2VyaWFsaXplcyBgdW5kZWZpbmVkYCBhcyBgXCJ1bmRlZmluZWRcImAuIFNhZmFyaSA8PSA1LjEuNyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZGIDMuMWIzIHBhc3MgdGhpcyB0ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KHVuZGVmKSA9PT0gdW5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8PSA1LjEuNyBhbmQgRkYgMy4xYjMgdGhyb3cgYEVycm9yYHMgYW5kIGBUeXBlRXJyb3JgcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc3BlY3RpdmVseSwgaWYgdGhlIHZhbHVlIGlzIG9taXR0ZWQgZW50aXJlbHkuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnkoKSA9PT0gdW5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZGIDMuMWIxLCAyIHRocm93IGFuIGVycm9yIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBub3QgYSBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHJpbmcsIGFycmF5LCBvYmplY3QsIEJvb2xlYW4sIG9yIGBudWxsYCBsaXRlcmFsLiBUaGlzIGFwcGxpZXMgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdHMgd2l0aCBjdXN0b20gYHRvSlNPTmAgbWV0aG9kcyBhcyB3ZWxsLCB1bmxlc3MgdGhleSBhcmUgbmVzdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNpZGUgb2JqZWN0IG9yIGFycmF5IGxpdGVyYWxzLiBZVUkgMy4wLjBiMSBpZ25vcmVzIGN1c3RvbSBgdG9KU09OYFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWV0aG9kcyBlbnRpcmVseS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeSh2YWx1ZSkgPT09IFwiMVwiICYmIHN0cmluZ2lmeShbdmFsdWVdKSA9PSBcIlsxXVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm90b3R5cGUgPD0gMS42LjEgc2VyaWFsaXplcyBgW3VuZGVmaW5lZF1gIGFzIGBcIltdXCJgIGluc3RlYWQgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBcIltudWxsXVwiYC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeShbdW5kZWZdKSA9PSBcIltudWxsXVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBZVUkgMy4wLjBiMSBmYWlscyB0byBzZXJpYWxpemUgYG51bGxgIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KG51bGwpID09IFwibnVsbFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMSwgMiBoYWx0cyBzZXJpYWxpemF0aW9uIGlmIGFuIGFycmF5IGNvbnRhaW5zIGEgZnVuY3Rpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgWzEsIHRydWUsIGdldENsYXNzLCAxXWAgc2VyaWFsaXplcyBhcyBcIlsxLHRydWUsXSxcIi4gRkYgMy4xYjNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsaWRlcyBub24tSlNPTiB2YWx1ZXMgZnJvbSBvYmplY3RzIGFuZCBhcnJheXMsIHVubGVzcyB0aGV5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZpbmUgY3VzdG9tIGB0b0pTT05gIG1ldGhvZHMuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnkoW3VuZGVmLCBnZXRDbGFzcywgbnVsbF0pID09IFwiW251bGwsbnVsbCxudWxsXVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW1wbGUgc2VyaWFsaXphdGlvbiB0ZXN0LiBGRiAzLjFiMSB1c2VzIFVuaWNvZGUgZXNjYXBlIHNlcXVlbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlcmUgY2hhcmFjdGVyIGVzY2FwZSBjb2RlcyBhcmUgZXhwZWN0ZWQgKGUuZy4sIGBcXGJgID0+IGBcXHUwMDA4YCkuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnkoeyBcImFcIjogW3ZhbHVlLCB0cnVlLCBmYWxzZSwgbnVsbCwgXCJcXHgwMFxcYlxcblxcZlxcclxcdFwiXSB9KSA9PSBzZXJpYWxpemVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMSBhbmQgYjIgaWdub3JlIHRoZSBgZmlsdGVyYCBhbmQgYHdpZHRoYCBhcmd1bWVudHMuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnkobnVsbCwgdmFsdWUpID09PSBcIjFcIiAmJiBzdHJpbmdpZnkoWzEsIDJdLCBudWxsLCAxKSA9PSBcIltcXG4gMSxcXG4gMlxcbl1cIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSlNPTiAyLCBQcm90b3R5cGUgPD0gMS43LCBhbmQgb2xkZXIgV2ViS2l0IGJ1aWxkcyBpbmNvcnJlY3RseVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VyaWFsaXplIGV4dGVuZGVkIHllYXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KG5ldyBEYXRlKC04LjY0ZTE1KSkgPT0gJ1wiLTI3MTgyMS0wNC0yMFQwMDowMDowMC4wMDBaXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbWlsbGlzZWNvbmRzIGFyZSBvcHRpb25hbCBpbiBFUyA1LCBidXQgcmVxdWlyZWQgaW4gNS4xLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KG5ldyBEYXRlKDguNjRlMTUpKSA9PSAnXCIrMjc1NzYwLTA5LTEzVDAwOjAwOjAwLjAwMFpcIicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggPD0gMTEuMCBpbmNvcnJlY3RseSBzZXJpYWxpemVzIHllYXJzIHByaW9yIHRvIDAgYXMgbmVnYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvdXItZGlnaXQgeWVhcnMgaW5zdGVhZCBvZiBzaXgtZGlnaXQgeWVhcnMuIENyZWRpdHM6IEBZYWZmbGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnkobmV3IERhdGUoLTYyMTk4NzU1MmU1KSkgPT0gJ1wiLTAwMDAwMS0wMS0wMVQwMDowMDowMC4wMDBaXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgPD0gNS4xLjUgYW5kIE9wZXJhID49IDEwLjUzIGluY29ycmVjdGx5IHNlcmlhbGl6ZSBtaWxsaXNlY29uZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVzIGxlc3MgdGhhbiAxMDAwLiBDcmVkaXRzOiBAWWFmZmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KG5ldyBEYXRlKC0xKSkgPT0gJ1wiMTk2OS0xMi0zMVQyMzo1OTo1OS45OTlaXCInO1xuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5U3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlzU3VwcG9ydGVkID0gc3RyaW5naWZ5U3VwcG9ydGVkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gVGVzdCBgSlNPTi5wYXJzZWAuXG4gICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSBcImpzb24tcGFyc2VcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyc2UgPSBleHBvcnRzLnBhcnNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMSwgYjIgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYSBiYXJlIGxpdGVyYWwgaXMgcHJvdmlkZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb25mb3JtaW5nIGltcGxlbWVudGF0aW9ucyBzaG91bGQgYWxzbyBjb2VyY2UgdGhlIGluaXRpYWwgYXJndW1lbnQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgc3RyaW5nIHByaW9yIHRvIHBhcnNpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2UoXCIwXCIpID09PSAwICYmICFwYXJzZShmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltcGxlIHBhcnNpbmcgdGVzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZShzZXJpYWxpemVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnNlU3VwcG9ydGVkID0gdmFsdWVbXCJhXCJdLmxlbmd0aCA9PSA1ICYmIHZhbHVlW1wiYVwiXVswXSA9PT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8PSA1LjEuMiBhbmQgRkYgMy4xYjEgYWxsb3cgdW5lc2NhcGVkIHRhYnMgaW4gc3RyaW5ncy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlU3VwcG9ydGVkID0gIXBhcnNlKCdcIlxcdFwiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRkYgNC4wIGFuZCA0LjAuMSBhbGxvdyBsZWFkaW5nIGArYCBzaWducyBhbmQgbGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWNpbWFsIHBvaW50cy4gRkYgNC4wLCA0LjAuMSwgYW5kIElFIDktMTAgYWxzbyBhbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjZXJ0YWluIG9jdGFsIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZVN1cHBvcnRlZCA9IHBhcnNlKFwiMDFcIikgIT09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRkYgNC4wLCA0LjAuMSwgYW5kIFJoaW5vIDEuN1IzLVI0IGFsbG93IHRyYWlsaW5nIGRlY2ltYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9pbnRzLiBUaGVzZSBlbnZpcm9ubWVudHMsIGFsb25nIHdpdGggRkYgMy4xYjEgYW5kIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsc28gYWxsb3cgdHJhaWxpbmcgY29tbWFzIGluIEpTT04gb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZVN1cHBvcnRlZCA9IHBhcnNlKFwiMS5cIikgIT09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZCA9IHBhcnNlU3VwcG9ydGVkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzW25hbWVdID0gISFpc1N1cHBvcnRlZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaGFzKFwianNvblwiKSkge1xuICAgICAgICAgICAgICAgIC8vIENvbW1vbiBgW1tDbGFzc11dYCBuYW1lIGFsaWFzZXMuXG4gICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uQ2xhc3MgPSBcIltvYmplY3QgRnVuY3Rpb25dXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGVDbGFzcyA9IFwiW29iamVjdCBEYXRlXVwiLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXJDbGFzcyA9IFwiW29iamVjdCBOdW1iZXJdXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ0NsYXNzID0gXCJbb2JqZWN0IFN0cmluZ11cIixcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlDbGFzcyA9IFwiW29iamVjdCBBcnJheV1cIixcbiAgICAgICAgICAgICAgICAgICAgYm9vbGVhbkNsYXNzID0gXCJbb2JqZWN0IEJvb2xlYW5dXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgaW5jb21wbGV0ZSBzdXBwb3J0IGZvciBhY2Nlc3Npbmcgc3RyaW5nIGNoYXJhY3RlcnMgYnkgaW5kZXguXG4gICAgICAgICAgICAgICAgdmFyIGNoYXJJbmRleEJ1Z2d5ID0gaGFzKFwiYnVnLXN0cmluZy1jaGFyLWluZGV4XCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGFkZGl0aW9uYWwgdXRpbGl0eSBtZXRob2RzIGlmIHRoZSBgRGF0ZWAgbWV0aG9kcyBhcmUgYnVnZ3kuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0V4dGVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgICAgICAgICAgICAgICAgLy8gQSBtYXBwaW5nIGJldHdlZW4gdGhlIG1vbnRocyBvZiB0aGUgeWVhciBhbmQgdGhlIG51bWJlciBvZiBkYXlzIGJldHdlZW5cbiAgICAgICAgICAgICAgICAgIC8vIEphbnVhcnkgMXN0IGFuZCB0aGUgZmlyc3Qgb2YgdGhlIHJlc3BlY3RpdmUgbW9udGguXG4gICAgICAgICAgICAgICAgICB2YXIgTW9udGhzID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XTtcbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuIHRoZSBVbml4IGVwb2NoIGFuZCB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IGRheSBvZiB0aGUgZ2l2ZW4gbW9udGguXG4gICAgICAgICAgICAgICAgICB2YXIgZ2V0RGF5ID0gZnVuY3Rpb24gZ2V0RGF5KHllYXIsIG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNb250aHNbbW9udGhdICsgMzY1ICogKHllYXIgLSAxOTcwKSArIGZsb29yKCh5ZWFyIC0gMTk2OSArIChtb250aCA9ICsobW9udGggPiAxKSkpIC8gNCkgLSBmbG9vcigoeWVhciAtIDE5MDEgKyBtb250aCkgLyAxMDApICsgZmxvb3IoKHllYXIgLSAxNjAxICsgbW9udGgpIC8gNDAwKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSW50ZXJuYWw6IERldGVybWluZXMgaWYgYSBwcm9wZXJ0eSBpcyBhIGRpcmVjdCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW5cbiAgICAgICAgICAgICAgICAvLyBvYmplY3QuIERlbGVnYXRlcyB0byB0aGUgbmF0aXZlIGBPYmplY3QjaGFzT3duUHJvcGVydHlgIG1ldGhvZC5cbiAgICAgICAgICAgICAgICBpZiAoIShpc1Byb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICBpc1Byb3BlcnR5ID0gZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZW1iZXJzID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChtZW1iZXJzLl9fcHJvdG9fXyA9IG51bGwsIG1lbWJlcnMuX19wcm90b19fID0ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSAqcHJvdG8qIHByb3BlcnR5IGNhbm5vdCBiZSBzZXQgbXVsdGlwbGUgdGltZXMgaW4gcmVjZW50XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdmVyc2lvbnMgb2YgRmlyZWZveCBhbmQgU2VhTW9ua2V5LlxuICAgICAgICAgICAgICAgICAgICAgIFwidG9TdHJpbmdcIjogMVxuICAgICAgICAgICAgICAgICAgICB9LCBtZW1iZXJzKS50b1N0cmluZyAhPSBnZXRDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8PSAyLjAuMyBkb2Vzbid0IGltcGxlbWVudCBgT2JqZWN0I2hhc093blByb3BlcnR5YCwgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3VwcG9ydHMgdGhlIG11dGFibGUgKnByb3RvKiBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgICBpc1Byb3BlcnR5ID0gZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXB0dXJlIGFuZCBicmVhayB0aGUgb2JqZWN0J3MgcHJvdG90eXBlIGNoYWluIChzZWUgc2VjdGlvbiA4LjYuMlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgdGhlIEVTIDUuMSBzcGVjKS4gVGhlIHBhcmVudGhlc2l6ZWQgZXhwcmVzc2lvbiBwcmV2ZW50cyBhblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdW5zYWZlIHRyYW5zZm9ybWF0aW9uIGJ5IHRoZSBDbG9zdXJlIENvbXBpbGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsID0gdGhpcy5fX3Byb3RvX18sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHByb3BlcnR5IGluICh0aGlzLl9fcHJvdG9fXyA9IG51bGwsIHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19wcm90b19fID0gb3JpZ2luYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSBhIHJlZmVyZW5jZSB0byB0aGUgdG9wLWxldmVsIGBPYmplY3RgIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gbWVtYmVycy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgdG8gc2ltdWxhdGUgYE9iamVjdCNoYXNPd25Qcm9wZXJ0eWAgaW5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBvdGhlciBlbnZpcm9ubWVudHMuXG4gICAgICAgICAgICAgICAgICAgICAgaXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9ICh0aGlzLmNvbnN0cnVjdG9yIHx8IGNvbnN0cnVjdG9yKS5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHkgaW4gdGhpcyAmJiAhKHByb3BlcnR5IGluIHBhcmVudCAmJiB0aGlzW3Byb3BlcnR5XSA9PT0gcGFyZW50W3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzUHJvcGVydHkuY2FsbCh0aGlzLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBOb3JtYWxpemVzIHRoZSBgZm9yLi4uaW5gIGl0ZXJhdGlvbiBhbGdvcml0aG0gYWNyb3NzXG4gICAgICAgICAgICAgICAgLy8gZW52aXJvbm1lbnRzLiBFYWNoIGVudW1lcmF0ZWQga2V5IGlzIHlpZWxkZWQgdG8gYSBgY2FsbGJhY2tgIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgIGZvckVhY2ggPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgdmFyIHNpemUgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnRpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgbWVtYmVycyxcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTtcblxuICAgICAgICAgICAgICAgICAgLy8gVGVzdHMgZm9yIGJ1Z3MgaW4gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQncyBgZm9yLi4uaW5gIGFsZ29yaXRobS4gVGhlXG4gICAgICAgICAgICAgICAgICAvLyBgdmFsdWVPZmAgcHJvcGVydHkgaW5oZXJpdHMgdGhlIG5vbi1lbnVtZXJhYmxlIGZsYWcgZnJvbVxuICAgICAgICAgICAgICAgICAgLy8gYE9iamVjdC5wcm90b3R5cGVgIGluIG9sZGVyIHZlcnNpb25zIG9mIElFLCBOZXRzY2FwZSwgYW5kIE1vemlsbGEuXG4gICAgICAgICAgICAgICAgICAoUHJvcGVydGllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZU9mID0gMDtcbiAgICAgICAgICAgICAgICAgIH0pLnByb3RvdHlwZS52YWx1ZU9mID0gMDtcblxuICAgICAgICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBgUHJvcGVydGllc2AgY2xhc3MuXG4gICAgICAgICAgICAgICAgICBtZW1iZXJzID0gbmV3IFByb3BlcnRpZXMoKTtcbiAgICAgICAgICAgICAgICAgIGZvciAocHJvcGVydHkgaW4gbWVtYmVycykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgYWxsIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gYE9iamVjdC5wcm90b3R5cGVgLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eS5jYWxsKG1lbWJlcnMsIHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNpemUrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgUHJvcGVydGllcyA9IG1lbWJlcnMgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlIGl0ZXJhdGlvbiBhbGdvcml0aG0uXG4gICAgICAgICAgICAgICAgICBpZiAoIXNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQSBsaXN0IG9mIG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gYE9iamVjdC5wcm90b3R5cGVgLlxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzID0gW1widmFsdWVPZlwiLCBcInRvU3RyaW5nXCIsIFwidG9Mb2NhbGVTdHJpbmdcIiwgXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLCBcImlzUHJvdG90eXBlT2ZcIiwgXCJoYXNPd25Qcm9wZXJ0eVwiLCBcImNvbnN0cnVjdG9yXCJdO1xuICAgICAgICAgICAgICAgICAgICAvLyBJRSA8PSA4LCBNb3ppbGxhIDEuMCwgYW5kIE5ldHNjYXBlIDYuMiBpZ25vcmUgc2hhZG93ZWQgbm9uLWVudW1lcmFibGVcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvcGVydGllcy5cbiAgICAgICAgICAgICAgICAgICAgZm9yRWFjaCA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSBnZXRDbGFzcy5jYWxsKG9iamVjdCkgPT0gZnVuY3Rpb25DbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzUHJvcGVydHkgPSAhaXNGdW5jdGlvbiAmJiB0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yICE9IFwiZnVuY3Rpb25cIiAmJiBvYmplY3RUeXBlc1t0eXBlb2Ygb2JqZWN0Lmhhc093blByb3BlcnR5XSAmJiBvYmplY3QuaGFzT3duUHJvcGVydHkgfHwgaXNQcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2Vja28gPD0gMS4wIGVudW1lcmF0ZXMgdGhlIGBwcm90b3R5cGVgIHByb3BlcnR5IG9mIGZ1bmN0aW9ucyB1bmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2VydGFpbiBjb25kaXRpb25zOyBJRSBkb2VzIG5vdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGlzRnVuY3Rpb24gJiYgcHJvcGVydHkgPT0gXCJwcm90b3R5cGVcIikgJiYgaGFzUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIE1hbnVhbGx5IGludm9rZSB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggbm9uLWVudW1lcmFibGUgcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChsZW5ndGggPSBtZW1iZXJzLmxlbmd0aDsgcHJvcGVydHkgPSBtZW1iZXJzWy0tbGVuZ3RoXTsgaGFzUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSAmJiBjYWxsYmFjayhwcm9wZXJ0eSkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaXplID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2FmYXJpIDw9IDIuMC40IGVudW1lcmF0ZXMgc2hhZG93ZWQgcHJvcGVydGllcyB0d2ljZS5cbiAgICAgICAgICAgICAgICAgICAgZm9yRWFjaCA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgc2V0IG9mIGl0ZXJhdGVkIHByb3BlcnRpZXMuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG1lbWJlcnMgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGdW5jdGlvbiA9IGdldENsYXNzLmNhbGwob2JqZWN0KSA9PSBmdW5jdGlvbkNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgZWFjaCBwcm9wZXJ0eSBuYW1lIHRvIHByZXZlbnQgZG91YmxlIGVudW1lcmF0aW9uLiBUaGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBwcm90b3R5cGVgIHByb3BlcnR5IG9mIGZ1bmN0aW9ucyBpcyBub3QgZW51bWVyYXRlZCBkdWUgdG8gY3Jvc3MtXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnZpcm9ubWVudCBpbmNvbnNpc3RlbmNpZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShpc0Z1bmN0aW9uICYmIHByb3BlcnR5ID09IFwicHJvdG90eXBlXCIpICYmICFpc1Byb3BlcnR5LmNhbGwobWVtYmVycywgcHJvcGVydHkpICYmIChtZW1iZXJzW3Byb3BlcnR5XSA9IDEpICYmIGlzUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gYnVncyBkZXRlY3RlZDsgdXNlIHRoZSBzdGFuZGFyZCBgZm9yLi4uaW5gIGFsZ29yaXRobS5cbiAgICAgICAgICAgICAgICAgICAgZm9yRWFjaCA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSBnZXRDbGFzcy5jYWxsKG9iamVjdCkgPT0gZnVuY3Rpb25DbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGlzRnVuY3Rpb24gJiYgcHJvcGVydHkgPT0gXCJwcm90b3R5cGVcIikgJiYgaXNQcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpICYmICEoaXNDb25zdHJ1Y3RvciA9IHByb3BlcnR5ID09PSBcImNvbnN0cnVjdG9yXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gTWFudWFsbHkgaW52b2tlIHRoZSBjYWxsYmFjayBmb3IgdGhlIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgZHVlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY3Jvc3MtZW52aXJvbm1lbnQgaW5jb25zaXN0ZW5jaWVzLlxuICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbnN0cnVjdG9yIHx8IGlzUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5ID0gXCJjb25zdHJ1Y3RvclwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JFYWNoKG9iamVjdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBQdWJsaWM6IFNlcmlhbGl6ZXMgYSBKYXZhU2NyaXB0IGB2YWx1ZWAgYXMgYSBKU09OIHN0cmluZy4gVGhlIG9wdGlvbmFsXG4gICAgICAgICAgICAgICAgLy8gYGZpbHRlcmAgYXJndW1lbnQgbWF5IHNwZWNpZnkgZWl0aGVyIGEgZnVuY3Rpb24gdGhhdCBhbHRlcnMgaG93IG9iamVjdCBhbmRcbiAgICAgICAgICAgICAgICAvLyBhcnJheSBtZW1iZXJzIGFyZSBzZXJpYWxpemVkLCBvciBhbiBhcnJheSBvZiBzdHJpbmdzIGFuZCBudW1iZXJzIHRoYXRcbiAgICAgICAgICAgICAgICAvLyBpbmRpY2F0ZXMgd2hpY2ggcHJvcGVydGllcyBzaG91bGQgYmUgc2VyaWFsaXplZC4gVGhlIG9wdGlvbmFsIGB3aWR0aGBcbiAgICAgICAgICAgICAgICAvLyBhcmd1bWVudCBtYXkgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIG51bWJlciB0aGF0IHNwZWNpZmllcyB0aGUgaW5kZW50YXRpb25cbiAgICAgICAgICAgICAgICAvLyBsZXZlbCBvZiB0aGUgb3V0cHV0LlxuICAgICAgICAgICAgICAgIGlmICghaGFzKFwianNvbi1zdHJpbmdpZnlcIikpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBBIG1hcCBvZiBjb250cm9sIGNoYXJhY3RlcnMgYW5kIHRoZWlyIGVzY2FwZWQgZXF1aXZhbGVudHMuXG4gICAgICAgICAgICAgICAgICB2YXIgRXNjYXBlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgOTI6IFwiXFxcXFxcXFxcIixcbiAgICAgICAgICAgICAgICAgICAgMzQ6ICdcXFxcXCInLFxuICAgICAgICAgICAgICAgICAgICA4OiBcIlxcXFxiXCIsXG4gICAgICAgICAgICAgICAgICAgIDEyOiBcIlxcXFxmXCIsXG4gICAgICAgICAgICAgICAgICAgIDEwOiBcIlxcXFxuXCIsXG4gICAgICAgICAgICAgICAgICAgIDEzOiBcIlxcXFxyXCIsXG4gICAgICAgICAgICAgICAgICAgIDk6IFwiXFxcXHRcIlxuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWw6IENvbnZlcnRzIGB2YWx1ZWAgaW50byBhIHplcm8tcGFkZGVkIHN0cmluZyBzdWNoIHRoYXQgaXRzXG4gICAgICAgICAgICAgICAgICAvLyBsZW5ndGggaXMgYXQgbGVhc3QgZXF1YWwgdG8gYHdpZHRoYC4gVGhlIGB3aWR0aGAgbXVzdCBiZSA8PSA2LlxuICAgICAgICAgICAgICAgICAgdmFyIGxlYWRpbmdaZXJvZXMgPSBcIjAwMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgdmFyIHRvUGFkZGVkU3RyaW5nID0gZnVuY3Rpb24gdG9QYWRkZWRTdHJpbmcod2lkdGgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBgfHwgMGAgZXhwcmVzc2lvbiBpcyBuZWNlc3NhcnkgdG8gd29yayBhcm91bmQgYSBidWcgaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmEgPD0gNy41NHUyIHdoZXJlIGAwID09IC0wYCwgYnV0IGBTdHJpbmcoLTApICE9PSBcIjBcImAuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobGVhZGluZ1plcm9lcyArICh2YWx1ZSB8fCAwKSkuc2xpY2UoLXdpZHRoKTtcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBEb3VibGUtcXVvdGVzIGEgc3RyaW5nIGB2YWx1ZWAsIHJlcGxhY2luZyBhbGwgQVNDSUkgY29udHJvbFxuICAgICAgICAgICAgICAgICAgLy8gY2hhcmFjdGVycyAoY2hhcmFjdGVycyB3aXRoIGNvZGUgdW5pdCB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAzMSkgd2l0aFxuICAgICAgICAgICAgICAgICAgLy8gdGhlaXIgZXNjYXBlZCBlcXVpdmFsZW50cy4gVGhpcyBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIGBRdW90ZSh2YWx1ZSlgIG9wZXJhdGlvbiBkZWZpbmVkIGluIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMuXG4gICAgICAgICAgICAgICAgICB2YXIgdW5pY29kZVByZWZpeCA9IFwiXFxcXHUwMFwiO1xuICAgICAgICAgICAgICAgICAgdmFyIHF1b3RlID0gZnVuY3Rpb24gcXVvdGUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICdcIicsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VDaGFySW5kZXggPSAhY2hhckluZGV4QnVnZ3kgfHwgbGVuZ3RoID4gMTA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2xzID0gdXNlQ2hhckluZGV4ICYmIChjaGFySW5kZXhCdWdneSA/IHZhbHVlLnNwbGl0KFwiXCIpIDogdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hhckNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2hhcmFjdGVyIGlzIGEgY29udHJvbCBjaGFyYWN0ZXIsIGFwcGVuZCBpdHMgVW5pY29kZSBvclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3J0aGFuZCBlc2NhcGUgc2VxdWVuY2U7IG90aGVyd2lzZSwgYXBwZW5kIHRoZSBjaGFyYWN0ZXIgYXMtaXMuXG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OmNhc2UgOTpjYXNlIDEwOmNhc2UgMTI6Y2FzZSAxMzpjYXNlIDM0OmNhc2UgOTI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBFc2NhcGVzW2NoYXJDb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPCAzMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB1bmljb2RlUHJlZml4ICsgdG9QYWRkZWRTdHJpbmcoMiwgY2hhckNvZGUudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gdXNlQ2hhckluZGV4ID8gc3ltYm9sc1tpbmRleF0gOiB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ1wiJztcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBSZWN1cnNpdmVseSBzZXJpYWxpemVzIGFuIG9iamVjdC4gSW1wbGVtZW50cyB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIGBTdHIoa2V5LCBob2xkZXIpYCwgYEpPKHZhbHVlKWAsIGFuZCBgSkEodmFsdWUpYCBvcGVyYXRpb25zLlxuICAgICAgICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShwcm9wZXJ0eSwgb2JqZWN0LCBjYWxsYmFjaywgcHJvcGVydGllcywgd2hpdGVzcGFjZSwgaW5kZW50YXRpb24sIHN0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSwgY2xhc3NOYW1lLCB5ZWFyLCBtb250aCwgZGF0ZSwgdGltZSwgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcywgcmVzdWx0cywgZWxlbWVudCwgaW5kZXgsIGxlbmd0aCwgcHJlZml4LCByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gTmVjZXNzYXJ5IGZvciBob3N0IG9iamVjdCBzdXBwb3J0LlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7fVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBnZXRDbGFzcy5jYWxsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09IGRhdGVDbGFzcyAmJiAhaXNQcm9wZXJ0eS5jYWxsKHZhbHVlLCBcInRvSlNPTlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gLTEgLyAwICYmIHZhbHVlIDwgMSAvIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGF0ZXMgYXJlIHNlcmlhbGl6ZWQgYWNjb3JkaW5nIHRvIHRoZSBgRGF0ZSN0b0pTT05gIG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzcGVjaWZpZWQgaW4gRVMgNS4xIHNlY3Rpb24gMTUuOS41LjQ0LiBTZWUgc2VjdGlvbiAxNS45LjEuMTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIHRoZSBJU08gODYwMSBkYXRlIHRpbWUgc3RyaW5nIGZvcm1hdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldERheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hbnVhbGx5IGNvbXB1dGUgdGhlIHllYXIsIG1vbnRoLCBkYXRlLCBob3VycywgbWludXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWNvbmRzLCBhbmQgbWlsbGlzZWNvbmRzIGlmIHRoZSBgZ2V0VVRDKmAgbWV0aG9kcyBhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBidWdneS4gQWRhcHRlZCBmcm9tIEBZYWZmbGUncyBgZGF0ZS1zaGltYCBwcm9qZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSBmbG9vcih2YWx1ZSAvIDg2NGU1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHllYXIgPSBmbG9vcihkYXRlIC8gMzY1LjI0MjUpICsgMTk3MCAtIDE7IGdldERheSh5ZWFyICsgMSwgMCkgPD0gZGF0ZTsgeWVhcisrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG1vbnRoID0gZmxvb3IoKGRhdGUgLSBnZXREYXkoeWVhciwgMCkpIC8gMzAuNDIpOyBnZXREYXkoeWVhciwgbW9udGggKyAxKSA8PSBkYXRlOyBtb250aCsrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0gMSArIGRhdGUgLSBnZXREYXkoeWVhciwgbW9udGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBgdGltZWAgdmFsdWUgc3BlY2lmaWVzIHRoZSB0aW1lIHdpdGhpbiB0aGUgZGF5IChzZWUgRVNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA1LjEgc2VjdGlvbiAxNS45LjEuMikuIFRoZSBmb3JtdWxhIGAoQSAlIEIgKyBCKSAlIEJgIGlzIHVzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBjb21wdXRlIGBBIG1vZHVsbyBCYCwgYXMgdGhlIGAlYCBvcGVyYXRvciBkb2VzIG5vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvcnJlc3BvbmQgdG8gdGhlIGBtb2R1bG9gIG9wZXJhdGlvbiBmb3IgbmVnYXRpdmUgbnVtYmVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKHZhbHVlICUgODY0ZTUgKyA4NjRlNSkgJSA4NjRlNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGFuZCBtaWxsaXNlY29uZHMgYXJlIG9idGFpbmVkIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVjb21wb3NpbmcgdGhlIHRpbWUgd2l0aGluIHRoZSBkYXkuIFNlZSBzZWN0aW9uIDE1LjkuMS4xMC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VycyA9IGZsb29yKHRpbWUgLyAzNmU1KSAlIDI0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBmbG9vcih0aW1lIC8gNmU0KSAlIDYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBmbG9vcih0aW1lIC8gMWUzKSAlIDYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IHRpbWUgJSAxZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhciA9IHZhbHVlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSB2YWx1ZS5nZXRVVENNb250aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSB2YWx1ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPSB2YWx1ZS5nZXRVVENIb3VycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSB2YWx1ZS5nZXRVVENNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IHZhbHVlLmdldFVUQ1NlY29uZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWxsaXNlY29uZHMgPSB2YWx1ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXJpYWxpemUgZXh0ZW5kZWQgeWVhcnMgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICh5ZWFyIDw9IDAgfHwgeWVhciA+PSAxZTQgPyAoeWVhciA8IDAgPyBcIi1cIiA6IFwiK1wiKSArIHRvUGFkZGVkU3RyaW5nKDYsIHllYXIgPCAwID8gLXllYXIgOiB5ZWFyKSA6IHRvUGFkZGVkU3RyaW5nKDQsIHllYXIpKSArIFwiLVwiICsgdG9QYWRkZWRTdHJpbmcoMiwgbW9udGggKyAxKSArIFwiLVwiICsgdG9QYWRkZWRTdHJpbmcoMiwgZGF0ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb250aHMsIGRhdGVzLCBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMgc2hvdWxkIGhhdmUgdHdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpZ2l0czsgbWlsbGlzZWNvbmRzIHNob3VsZCBoYXZlIHRocmVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRcIiArIHRvUGFkZGVkU3RyaW5nKDIsIGhvdXJzKSArIFwiOlwiICsgdG9QYWRkZWRTdHJpbmcoMiwgbWludXRlcykgKyBcIjpcIiArIHRvUGFkZGVkU3RyaW5nKDIsIHNlY29uZHMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWlsbGlzZWNvbmRzIGFyZSBvcHRpb25hbCBpbiBFUyA1LjAsIGJ1dCByZXF1aXJlZCBpbiA1LjEuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiLlwiICsgdG9QYWRkZWRTdHJpbmcoMywgbWlsbGlzZWNvbmRzKSArIFwiWlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlLnRvSlNPTiA9PSBcImZ1bmN0aW9uXCIgJiYgKGNsYXNzTmFtZSAhPSBudW1iZXJDbGFzcyAmJiBjbGFzc05hbWUgIT0gc3RyaW5nQ2xhc3MgJiYgY2xhc3NOYW1lICE9IGFycmF5Q2xhc3MgfHwgaXNQcm9wZXJ0eS5jYWxsKHZhbHVlLCBcInRvSlNPTlwiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb3RvdHlwZSA8PSAxLjYuMSBhZGRzIG5vbi1zdGFuZGFyZCBgdG9KU09OYCBtZXRob2RzIHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYE51bWJlcmAsIGBTdHJpbmdgLCBgRGF0ZWAsIGFuZCBgQXJyYXlgIHByb3RvdHlwZXMuIEpTT04gM1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlcyBhbGwgYHRvSlNPTmAgbWV0aG9kcyBvbiB0aGVzZSBvYmplY3RzIHVubGVzcyB0aGV5IGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmaW5lZCBkaXJlY3RseSBvbiBhbiBpbnN0YW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9KU09OKHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSByZXBsYWNlbWVudCBmdW5jdGlvbiB3YXMgcHJvdmlkZWQsIGNhbGwgaXQgdG8gb2J0YWluIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBzZXJpYWxpemF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2suY2FsbChvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdldENsYXNzLmNhbGwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09IGJvb2xlYW5DbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEJvb2xlYW5zIGFyZSByZXByZXNlbnRlZCBsaXRlcmFsbHkuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT0gbnVtYmVyQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBKU09OIG51bWJlcnMgbXVzdCBiZSBmaW5pdGUuIGBJbmZpbml0eWAgYW5kIGBOYU5gIGFyZSBzZXJpYWxpemVkIGFzXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYFwibnVsbFwiYC5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPiAtMSAvIDAgJiYgdmFsdWUgPCAxIC8gMCA/IFwiXCIgKyB2YWx1ZSA6IFwibnVsbFwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PSBzdHJpbmdDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFN0cmluZ3MgYXJlIGRvdWJsZS1xdW90ZWQgYW5kIGVzY2FwZWQuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1b3RlKFwiXCIgKyB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgc2VyaWFsaXplIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGlzIGlzIGEgbGluZWFyIHNlYXJjaDsgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2YgdW5pcXVlIG5lc3RlZCBvYmplY3RzLlxuICAgICAgICAgICAgICAgICAgICAgIGZvciAobGVuZ3RoID0gc3RhY2subGVuZ3RoOyBsZW5ndGgtLTspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tsZW5ndGhdID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDeWNsaWMgc3RydWN0dXJlcyBjYW5ub3QgYmUgc2VyaWFsaXplZCBieSBgSlNPTi5zdHJpbmdpZnlgLlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IGluZGVudGF0aW9uIGxldmVsIGFuZCBpbmRlbnQgb25lIGFkZGl0aW9uYWwgbGV2ZWwuXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gaW5kZW50YXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZW50YXRpb24gKz0gd2hpdGVzcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09IGFycmF5Q2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZSBhcnJheSBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzZXJpYWxpemUoaW5kZXgsIHZhbHVlLCBjYWxsYmFjaywgcHJvcGVydGllcywgd2hpdGVzcGFjZSwgaW5kZW50YXRpb24sIHN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGVsZW1lbnQgPT09IHVuZGVmID8gXCJudWxsXCIgOiBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdHMubGVuZ3RoID8gd2hpdGVzcGFjZSA/IFwiW1xcblwiICsgaW5kZW50YXRpb24gKyByZXN1bHRzLmpvaW4oXCIsXFxuXCIgKyBpbmRlbnRhdGlvbikgKyBcIlxcblwiICsgcHJlZml4ICsgXCJdXCIgOiBcIltcIiArIHJlc3VsdHMuam9pbihcIixcIikgKyBcIl1cIiA6IFwiW11cIjtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgc2VyaWFsaXplIG9iamVjdCBtZW1iZXJzLiBNZW1iZXJzIGFyZSBzZWxlY3RlZCBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlaXRoZXIgYSB1c2VyLXNwZWNpZmllZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzLCBvciB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdHNlbGYuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JFYWNoKHByb3BlcnRpZXMgfHwgdmFsdWUsIGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNlcmlhbGl6ZShwcm9wZXJ0eSwgdmFsdWUsIGNhbGxiYWNrLCBwcm9wZXJ0aWVzLCB3aGl0ZXNwYWNlLCBpbmRlbnRhdGlvbiwgc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdW5kZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBY2NvcmRpbmcgdG8gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMzogXCJJZiBgZ2FwYCB7d2hpdGVzcGFjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpcyBub3QgdGhlIGVtcHR5IHN0cmluZywgbGV0IGBtZW1iZXJgIHtxdW90ZShwcm9wZXJ0eSkgKyBcIjpcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZSB0aGUgY29uY2F0ZW5hdGlvbiBvZiBgbWVtYmVyYCBhbmQgdGhlIGBzcGFjZWAgY2hhcmFjdGVyLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIFwiYHNwYWNlYCBjaGFyYWN0ZXJcIiByZWZlcnMgdG8gdGhlIGxpdGVyYWwgc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIsIG5vdCB0aGUgYHNwYWNlYCB7d2lkdGh9IGFyZ3VtZW50IHByb3ZpZGVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYEpTT04uc3RyaW5naWZ5YC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocXVvdGUocHJvcGVydHkpICsgXCI6XCIgKyAod2hpdGVzcGFjZSA/IFwiIFwiIDogXCJcIikgKyBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRzLmxlbmd0aCA/IHdoaXRlc3BhY2UgPyBcIntcXG5cIiArIGluZGVudGF0aW9uICsgcmVzdWx0cy5qb2luKFwiLFxcblwiICsgaW5kZW50YXRpb24pICsgXCJcXG5cIiArIHByZWZpeCArIFwifVwiIDogXCJ7XCIgKyByZXN1bHRzLmpvaW4oXCIsXCIpICsgXCJ9XCIgOiBcInt9XCI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgb2JqZWN0IGZyb20gdGhlIHRyYXZlcnNlZCBvYmplY3Qgc3RhY2suXG4gICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgLy8gUHVibGljOiBgSlNPTi5zdHJpbmdpZnlgLiBTZWUgRVMgNS4xIHNlY3Rpb24gMTUuMTIuMy5cbiAgICAgICAgICAgICAgICAgIGV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHNvdXJjZSwgZmlsdGVyLCB3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgd2hpdGVzcGFjZSwgY2FsbGJhY2ssIHByb3BlcnRpZXMsIGNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdFR5cGVzW3R5cGVvZiBmaWx0ZXJdICYmIGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgoY2xhc3NOYW1lID0gZ2V0Q2xhc3MuY2FsbChmaWx0ZXIpKSA9PSBmdW5jdGlvbkNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZpbHRlcjtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PSBhcnJheUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBwcm9wZXJ0eSBuYW1lcyBhcnJheSBpbnRvIGEgbWFrZXNoaWZ0IHNldC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gZmlsdGVyLmxlbmd0aCwgdmFsdWU7IGluZGV4IDwgbGVuZ3RoOyB2YWx1ZSA9IGZpbHRlcltpbmRleCsrXSwgKGNsYXNzTmFtZSA9IGdldENsYXNzLmNhbGwodmFsdWUpLCBjbGFzc05hbWUgPT0gc3RyaW5nQ2xhc3MgfHwgY2xhc3NOYW1lID09IG51bWJlckNsYXNzKSAmJiAocHJvcGVydGllc1t2YWx1ZV0gPSAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgoY2xhc3NOYW1lID0gZ2V0Q2xhc3MuY2FsbCh3aWR0aCkpID09IG51bWJlckNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBgd2lkdGhgIHRvIGFuIGludGVnZXIgYW5kIGNyZWF0ZSBhIHN0cmluZyBjb250YWluaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgd2lkdGhgIG51bWJlciBvZiBzcGFjZSBjaGFyYWN0ZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh3aWR0aCAtPSB3aWR0aCAlIDEpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHdoaXRlc3BhY2UgPSBcIlwiLCB3aWR0aCA+IDEwICYmICh3aWR0aCA9IDEwKTsgd2hpdGVzcGFjZS5sZW5ndGggPCB3aWR0aDsgd2hpdGVzcGFjZSArPSBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT0gc3RyaW5nQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlc3BhY2UgPSB3aWR0aC5sZW5ndGggPD0gMTAgPyB3aWR0aCA6IHdpZHRoLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmEgPD0gNy41NHUyIGRpc2NhcmRzIHRoZSB2YWx1ZXMgYXNzb2NpYXRlZCB3aXRoIGVtcHR5IHN0cmluZyBrZXlzXG4gICAgICAgICAgICAgICAgICAgIC8vIChgXCJcImApIG9ubHkgaWYgdGhleSBhcmUgdXNlZCBkaXJlY3RseSB3aXRoaW4gYW4gb2JqZWN0IG1lbWJlciBsaXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIChlLmcuLCBgIShcIlwiIGluIHsgXCJcIjogMX0pYCkuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemUoXCJcIiwgKHZhbHVlID0ge30sIHZhbHVlW1wiXCJdID0gc291cmNlLCB2YWx1ZSksIGNhbGxiYWNrLCBwcm9wZXJ0aWVzLCB3aGl0ZXNwYWNlLCBcIlwiLCBbXSk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFB1YmxpYzogUGFyc2VzIGEgSlNPTiBzb3VyY2Ugc3RyaW5nLlxuICAgICAgICAgICAgICAgIGlmICghaGFzKFwianNvbi1wYXJzZVwiKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBBIG1hcCBvZiBlc2NhcGVkIGNvbnRyb2wgY2hhcmFjdGVycyBhbmQgdGhlaXIgdW5lc2NhcGVkXG4gICAgICAgICAgICAgICAgICAvLyBlcXVpdmFsZW50cy5cbiAgICAgICAgICAgICAgICAgIHZhciBVbmVzY2FwZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIDkyOiBcIlxcXFxcIixcbiAgICAgICAgICAgICAgICAgICAgMzQ6ICdcIicsXG4gICAgICAgICAgICAgICAgICAgIDQ3OiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgOTg6IFwiXFxiXCIsXG4gICAgICAgICAgICAgICAgICAgIDExNjogXCJcXHRcIixcbiAgICAgICAgICAgICAgICAgICAgMTEwOiBcIlxcblwiLFxuICAgICAgICAgICAgICAgICAgICAxMDI6IFwiXFxmXCIsXG4gICAgICAgICAgICAgICAgICAgIDExNDogXCJcXHJcIlxuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWw6IFN0b3JlcyB0aGUgcGFyc2VyIHN0YXRlLlxuICAgICAgICAgICAgICAgICAgdmFyIEluZGV4LCBTb3VyY2U7XG5cbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBSZXNldHMgdGhlIHBhcnNlciBzdGF0ZSBhbmQgdGhyb3dzIGEgYFN5bnRheEVycm9yYC5cbiAgICAgICAgICAgICAgICAgIHZhciBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICAgICAgICAgICAgICBJbmRleCA9IFNvdXJjZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFN5bnRheEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAvLyBJbnRlcm5hbDogUmV0dXJucyB0aGUgbmV4dCB0b2tlbiwgb3IgYFwiJFwiYCBpZiB0aGUgcGFyc2VyIGhhcyByZWFjaGVkXG4gICAgICAgICAgICAgICAgICAvLyB0aGUgZW5kIG9mIHRoZSBzb3VyY2Ugc3RyaW5nLiBBIHRva2VuIG1heSBiZSBhIHN0cmluZywgbnVtYmVyLCBgbnVsbGBcbiAgICAgICAgICAgICAgICAgIC8vIGxpdGVyYWwsIG9yIEJvb2xlYW4gbGl0ZXJhbC5cbiAgICAgICAgICAgICAgICAgIHZhciBsZXggPSBmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTaWduZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OmNhc2UgMTA6Y2FzZSAxMzpjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHdoaXRlc3BhY2UgdG9rZW5zLCBpbmNsdWRpbmcgdGFicywgY2FycmlhZ2UgcmV0dXJucywgbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmZWVkcywgYW5kIHNwYWNlIGNoYXJhY3RlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjM6Y2FzZSAxMjU6Y2FzZSA5MTpjYXNlIDkzOmNhc2UgNTg6Y2FzZSA0NDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgYSBwdW5jdHVhdG9yIHRva2VuIChge2AsIGB9YCwgYFtgLCBgXWAsIGA6YCwgb3IgYCxgKSBhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjaGFySW5kZXhCdWdneSA/IHNvdXJjZS5jaGFyQXQoSW5kZXgpIDogc291cmNlW0luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYFwiYCBkZWxpbWl0cyBhIEpTT04gc3RyaW5nOyBhZHZhbmNlIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmVnaW4gcGFyc2luZyB0aGUgc3RyaW5nLiBTdHJpbmcgdG9rZW5zIGFyZSBwcmVmaXhlZCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW50aW5lbCBgQGAgY2hhcmFjdGVyIHRvIGRpc3Rpbmd1aXNoIHRoZW0gZnJvbSBwdW5jdHVhdG9ycyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5kLW9mLXN0cmluZyB0b2tlbnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFsdWUgPSBcIkBcIiwgSW5kZXgrKzsgSW5kZXggPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlIDwgMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuZXNjYXBlZCBBU0NJSSBjb250cm9sIGNoYXJhY3RlcnMgKHRob3NlIHdpdGggYSBjb2RlIHVuaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhhbiB0aGUgc3BhY2UgY2hhcmFjdGVyKSBhcmUgbm90IHBlcm1pdHRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyQ29kZSA9PSA5Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSByZXZlcnNlIHNvbGlkdXMgKGBcXGApIG1hcmtzIHRoZSBiZWdpbm5pbmcgb2YgYW4gZXNjYXBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udHJvbCBjaGFyYWN0ZXIgKGluY2x1ZGluZyBgXCJgLCBgXFxgLCBhbmQgYC9gKSBvciBVbmljb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2NhcGUgc2VxdWVuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KCsrSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDkyOmNhc2UgMzQ6Y2FzZSA0NzpjYXNlIDk4OmNhc2UgMTE2OmNhc2UgMTEwOmNhc2UgMTAyOmNhc2UgMTE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldml2ZSBlc2NhcGVkIGNvbnRyb2wgY2hhcmFjdGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSBVbmVzY2FwZXNbY2hhckNvZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBcXHVgIG1hcmtzIHRoZSBiZWdpbm5pbmcgb2YgYSBVbmljb2RlIGVzY2FwZSBzZXF1ZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZHZhbmNlIHRvIHRoZSBmaXJzdCBjaGFyYWN0ZXIgYW5kIHZhbGlkYXRlIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvdXItZGlnaXQgY29kZSBwb2ludC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbiA9ICsrSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwb3NpdGlvbiA9IEluZGV4ICsgNDsgSW5kZXggPCBwb3NpdGlvbjsgSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBIHZhbGlkIHNlcXVlbmNlIGNvbXByaXNlcyBmb3VyIGhleGRpZ2l0cyAoY2FzZS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluc2Vuc2l0aXZlKSB0aGF0IGZvcm0gYSBzaW5nbGUgaGV4YWRlY2ltYWwgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1NyB8fCBjaGFyQ29kZSA+PSA5NyAmJiBjaGFyQ29kZSA8PSAxMDIgfHwgY2hhckNvZGUgPj0gNjUgJiYgY2hhckNvZGUgPD0gNzApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEludmFsaWQgVW5pY29kZSBlc2NhcGUgc2VxdWVuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldml2ZSB0aGUgZXNjYXBlZCBjaGFyYWN0ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gZnJvbUNoYXJDb2RlKFwiMHhcIiArIHNvdXJjZS5zbGljZShiZWdpbiwgSW5kZXgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnZhbGlkIGVzY2FwZSBzZXF1ZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPT0gMzQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW4gdW5lc2NhcGVkIGRvdWJsZS1xdW90ZSBjaGFyYWN0ZXIgbWFya3MgdGhlIGVuZCBvZiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW4gPSBJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wdGltaXplIGZvciB0aGUgY29tbW9uIGNhc2Ugd2hlcmUgYSBzdHJpbmcgaXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY2hhckNvZGUgPj0gMzIgJiYgY2hhckNvZGUgIT0gOTIgJiYgY2hhckNvZGUgIT0gMzQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdCgrK0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgc3RyaW5nIGFzLWlzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gc291cmNlLnNsaWNlKGJlZ2luLCBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuY2hhckNvZGVBdChJbmRleCkgPT0gMzQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZHZhbmNlIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgcmV0dXJuIHRoZSByZXZpdmVkIHN0cmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbnRlcm1pbmF0ZWQgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgbnVtYmVycyBhbmQgbGl0ZXJhbHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luID0gSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkdmFuY2UgcGFzdCB0aGUgbmVnYXRpdmUgc2lnbiwgaWYgb25lIGlzIHNwZWNpZmllZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlID09IDQ1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaWduZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoKytJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgYW4gaW50ZWdlciBvciBmbG9hdGluZy1wb2ludCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVhZGluZyB6ZXJvZXMgYXJlIGludGVycHJldGVkIGFzIG9jdGFsIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA9PSA0OCAmJiAoY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCArIDEpLCBjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1NykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElsbGVnYWwgb2N0YWwgbGl0ZXJhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgdGhlIGludGVnZXIgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBJbmRleCA8IGxlbmd0aCAmJiAoY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCksIGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3KTsgSW5kZXgrKyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmxvYXRzIGNhbm5vdCBjb250YWluIGEgbGVhZGluZyBkZWNpbWFsIHBvaW50OyBob3dldmVyLCB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSBpcyBhbHJlYWR5IGFjY291bnRlZCBmb3IgYnkgdGhlIHBhcnNlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpID09IDQ2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICsrSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSB0aGUgZGVjaW1hbCBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgcG9zaXRpb24gPCBsZW5ndGggJiYgKGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQocG9zaXRpb24pLCBjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1Nyk7IHBvc2l0aW9uKyspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09IEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElsbGVnYWwgdHJhaWxpbmcgZGVjaW1hbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIGV4cG9uZW50cy4gVGhlIGBlYCBkZW5vdGluZyB0aGUgZXhwb25lbnQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlLWluc2Vuc2l0aXZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA9PSAxMDEgfHwgY2hhckNvZGUgPT0gNjkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoKytJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHBhc3QgdGhlIHNpZ24gZm9sbG93aW5nIHRoZSBleHBvbmVudCwgaWYgb25lIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzcGVjaWZpZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPT0gNDMgfHwgY2hhckNvZGUgPT0gNDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBleHBvbmVudGlhbCBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHBvc2l0aW9uID0gSW5kZXg7IHBvc2l0aW9uIDwgbGVuZ3RoICYmIChjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KHBvc2l0aW9uKSwgY2hhckNvZGUgPj0gNDggJiYgY2hhckNvZGUgPD0gNTcpOyBwb3NpdGlvbisrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbGxlZ2FsIGVtcHR5IGV4cG9uZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXggPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29lcmNlIHRoZSBwYXJzZWQgdmFsdWUgdG8gYSBKYXZhU2NyaXB0IG51bWJlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gK3NvdXJjZS5zbGljZShiZWdpbiwgSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgbmVnYXRpdmUgc2lnbiBtYXkgb25seSBwcmVjZWRlIG51bWJlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NpZ25lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYHRydWVgLCBgZmFsc2VgLCBhbmQgYG51bGxgIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlLnNsaWNlKEluZGV4LCBJbmRleCArIDQpID09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2Uuc2xpY2UoSW5kZXgsIEluZGV4ICsgNSkgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXggKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlLnNsaWNlKEluZGV4LCBJbmRleCArIDQpID09IFwibnVsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbnJlY29nbml6ZWQgdG9rZW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgc2VudGluZWwgYCRgIGNoYXJhY3RlciBpZiB0aGUgcGFyc2VyIGhhcyByZWFjaGVkIHRoZSBlbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgdGhlIHNvdXJjZSBzdHJpbmcuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIjtcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBQYXJzZXMgYSBKU09OIGB2YWx1ZWAgdG9rZW4uXG4gICAgICAgICAgICAgICAgICB2YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRzLCBoYXNNZW1iZXJzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCIkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBVbmV4cGVjdGVkIGVuZCBvZiBpbnB1dC5cbiAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgoY2hhckluZGV4QnVnZ3kgPyB2YWx1ZS5jaGFyQXQoMCkgOiB2YWx1ZVswXSkgPT0gXCJAXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgc2VudGluZWwgYEBgIGNoYXJhY3Rlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2Ugb2JqZWN0IGFuZCBhcnJheSBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCJbXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlcyBhIEpTT04gYXJyYXksIHJldHVybmluZyBhIG5ldyBKYXZhU2NyaXB0IGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7OyBoYXNNZW1iZXJzIHx8IChoYXNNZW1iZXJzID0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSBjbG9zaW5nIHNxdWFyZSBicmFja2V0IG1hcmtzIHRoZSBlbmQgb2YgdGhlIGFycmF5IGxpdGVyYWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIl1cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBhcnJheSBsaXRlcmFsIGNvbnRhaW5zIGVsZW1lbnRzLCB0aGUgY3VycmVudCB0b2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgYmUgYSBjb21tYSBzZXBhcmF0aW5nIHRoZSBwcmV2aW91cyBlbGVtZW50IGZyb20gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNNZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiLFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuZXhwZWN0ZWQgdHJhaWxpbmcgYCxgIGluIGFycmF5IGxpdGVyYWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgYCxgIG11c3Qgc2VwYXJhdGUgZWFjaCBhcnJheSBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWxpc2lvbnMgYW5kIGxlYWRpbmcgY29tbWFzIGFyZSBub3QgcGVybWl0dGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCIsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChnZXQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gXCJ7XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlcyBhIEpTT04gb2JqZWN0LCByZXR1cm5pbmcgYSBuZXcgSmF2YVNjcmlwdCBvYmplY3QuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDs7IGhhc01lbWJlcnMgfHwgKGhhc01lbWJlcnMgPSB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBIGNsb3NpbmcgY3VybHkgYnJhY2UgbWFya3MgdGhlIGVuZCBvZiB0aGUgb2JqZWN0IGxpdGVyYWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIn1cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvYmplY3QgbGl0ZXJhbCBjb250YWlucyBtZW1iZXJzLCB0aGUgY3VycmVudCB0b2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgYmUgYSBjb21tYSBzZXBhcmF0b3IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNNZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiLFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwifVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuZXhwZWN0ZWQgdHJhaWxpbmcgYCxgIGluIG9iamVjdCBsaXRlcmFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBIGAsYCBtdXN0IHNlcGFyYXRlIGVhY2ggb2JqZWN0IG1lbWJlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlYWRpbmcgY29tbWFzIGFyZSBub3QgcGVybWl0dGVkLCBvYmplY3QgcHJvcGVydHkgbmFtZXMgbXVzdCBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkb3VibGUtcXVvdGVkIHN0cmluZ3MsIGFuZCBhIGA6YCBtdXN0IHNlcGFyYXRlIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFtZSBhbmQgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIixcIiB8fCB0eXBlb2YgdmFsdWUgIT0gXCJzdHJpbmdcIiB8fCAoY2hhckluZGV4QnVnZ3kgPyB2YWx1ZS5jaGFyQXQoMCkgOiB2YWx1ZVswXSkgIT0gXCJAXCIgfHwgbGV4KCkgIT0gXCI6XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNbdmFsdWUuc2xpY2UoMSldID0gZ2V0KGxleCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBVbmV4cGVjdGVkIHRva2VuIGVuY291bnRlcmVkLlxuICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWw6IFVwZGF0ZXMgYSB0cmF2ZXJzZWQgb2JqZWN0IG1lbWJlci5cbiAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoc291cmNlLCBwcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB3YWxrKHNvdXJjZSwgcHJvcGVydHksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHVuZGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlW3Byb3BlcnR5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIC8vIEludGVybmFsOiBSZWN1cnNpdmVseSB0cmF2ZXJzZXMgYSBwYXJzZWQgSlNPTiBvYmplY3QsIGludm9raW5nIHRoZVxuICAgICAgICAgICAgICAgICAgLy8gYGNhbGxiYWNrYCBmdW5jdGlvbiBmb3IgZWFjaCB2YWx1ZS4gVGhpcyBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIGBXYWxrKGhvbGRlciwgbmFtZSlgIG9wZXJhdGlvbiBkZWZpbmVkIGluIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjIuXG4gICAgICAgICAgICAgICAgICB2YXIgd2FsayA9IGZ1bmN0aW9uIHdhbGsoc291cmNlLCBwcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gYGZvckVhY2hgIGNhbid0IGJlIHVzZWQgdG8gdHJhdmVyc2UgYW4gYXJyYXkgaW4gT3BlcmEgPD0gOC41NFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgaXRzIGBPYmplY3QjaGFzT3duUHJvcGVydHlgIGltcGxlbWVudGF0aW9uIHJldHVybnMgYGZhbHNlYFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBhcnJheSBpbmRpY2VzIChlLmcuLCBgIVsxLCAyLCAzXS5oYXNPd25Qcm9wZXJ0eShcIjBcIilgKS5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0Q2xhc3MuY2FsbCh2YWx1ZSkgPT0gYXJyYXlDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGxlbmd0aC0tOykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUodmFsdWUsIGxlbmd0aCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKHZhbHVlLCBwcm9wZXJ0eSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHNvdXJjZSwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIC8vIFB1YmxpYzogYEpTT04ucGFyc2VgLiBTZWUgRVMgNS4xIHNlY3Rpb24gMTUuMTIuMi5cbiAgICAgICAgICAgICAgICAgIGV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0LCB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBTb3VyY2UgPSBcIlwiICsgc291cmNlO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBnZXQobGV4KCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBhIEpTT04gc3RyaW5nIGNvbnRhaW5zIG11bHRpcGxlIHRva2VucywgaXQgaXMgaW52YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxleCgpICE9IFwiJFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgcGFyc2VyIHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICBJbmRleCA9IFNvdXJjZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayAmJiBnZXRDbGFzcy5jYWxsKGNhbGxiYWNrKSA9PSBmdW5jdGlvbkNsYXNzID8gd2FsaygodmFsdWUgPSB7fSwgdmFsdWVbXCJcIl0gPSByZXN1bHQsIHZhbHVlKSwgXCJcIiwgY2FsbGJhY2spIDogcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBleHBvcnRzW1wicnVuSW5Db250ZXh0XCJdID0gcnVuSW5Db250ZXh0O1xuICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZyZWVFeHBvcnRzICYmICFpc0xvYWRlcikge1xuICAgICAgICAgICAgICAvLyBFeHBvcnQgZm9yIENvbW1vbkpTIGVudmlyb25tZW50cy5cbiAgICAgICAgICAgICAgcnVuSW5Db250ZXh0KHJvb3QsIGZyZWVFeHBvcnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEV4cG9ydCBmb3Igd2ViIGJyb3dzZXJzIGFuZCBKYXZhU2NyaXB0IGVuZ2luZXMuXG4gICAgICAgICAgICAgIHZhciBuYXRpdmVKU09OID0gcm9vdC5KU09OLFxuICAgICAgICAgICAgICAgICAgcHJldmlvdXNKU09OID0gcm9vdFtcIkpTT04zXCJdLFxuICAgICAgICAgICAgICAgICAgaXNSZXN0b3JlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHZhciBKU09OMyA9IHJ1bkluQ29udGV4dChyb290LCByb290W1wiSlNPTjNcIl0gPSB7XG4gICAgICAgICAgICAgICAgLy8gUHVibGljOiBSZXN0b3JlcyB0aGUgb3JpZ2luYWwgdmFsdWUgb2YgdGhlIGdsb2JhbCBgSlNPTmAgb2JqZWN0IGFuZFxuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGBKU09OM2Agb2JqZWN0LlxuICAgICAgICAgICAgICAgIFwibm9Db25mbGljdFwiOiBmdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFpc1Jlc3RvcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzUmVzdG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByb290LkpTT04gPSBuYXRpdmVKU09OO1xuICAgICAgICAgICAgICAgICAgICByb290W1wiSlNPTjNcIl0gPSBwcmV2aW91c0pTT047XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZUpTT04gPSBwcmV2aW91c0pTT04gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcm9vdC5KU09OID0ge1xuICAgICAgICAgICAgICAgIFwicGFyc2VcIjogSlNPTjMucGFyc2UsXG4gICAgICAgICAgICAgICAgXCJzdHJpbmdpZnlcIjogSlNPTjMuc3RyaW5naWZ5XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEV4cG9ydCBmb3IgYXN5bmNocm9ub3VzIG1vZHVsZSBsb2FkZXJzLlxuICAgICAgICAgICAgaWYgKGlzTG9hZGVyKSB7XG4gICAgICAgICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04zO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDoge30pO1xuICAgICAgfSwge31dLCA1MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSB0b0FycmF5O1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvQXJyYXkobGlzdCwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgICAgIGluZGV4ID0gaW5kZXggfHwgMDtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSBpbmRleCB8fCAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyYXlbaSAtIGluZGV4XSA9IGxpc3RbaV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG4gICAgICB9LCB7fV0gfSwge30sIFszMV0pKDMxKTtcbiAgfSk7XG59XG5cbmNjLl9SRnBvcCgpOyJdfQ==
