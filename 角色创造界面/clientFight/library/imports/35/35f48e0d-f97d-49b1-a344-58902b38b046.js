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