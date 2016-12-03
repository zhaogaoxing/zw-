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