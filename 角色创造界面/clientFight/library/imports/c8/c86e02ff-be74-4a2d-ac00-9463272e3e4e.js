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