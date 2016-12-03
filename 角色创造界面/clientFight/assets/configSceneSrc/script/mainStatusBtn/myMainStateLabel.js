cc.Class({
    extends: cc.Component,

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
    onLoad: function () {

    },
    
    plus: function(){
        this.getComponent(cc.Label).string++;
        console.log("this.getComponent(cc.Label).string!=0: " + (this.getComponent(cc.Label).string!=0));
        if(this.getComponent(cc.Label).string!=0){
        cc.find('Canvas/config/basePoint/btnList/plusList').getComponent('myBtnList').show();
       
        }
    },
    
    
    minus: function(){
        this.getComponent(cc.Label).string--;
        console.log("this.getComponent(cc.Label).string<=0: " + (this.getComponent(cc.Label).string<=0));
        if(this.getComponent(cc.Label).string<=0){
        cc.find('Canvas/config/basePoint/btnList/plusList').getComponent('myBtnList').hide();
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
