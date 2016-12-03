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
    
    show: function(heroInfo){
        for(var line of heroInfo)
            for(var item in line){
                console.log(item +' '+line[item]);
            }
            
        // for(var item of this.children){
        //     var subChild = item.getChildren();
        //     for(var item2 of subChild){
        //         console.log(item2);
        //     }
        // }
        
        for(var index = 0; index < heroInfo.length; index++){
            var heroInfoItem = heroInfo[index];
            var childInfoItem = this.children[index];
            //console.log(childInfoItem['heroName_0'+(index+1)]);
            
            childInfoItem.getChildByName('heroName_0'+(index+1)).getComponent(cc.Label).string = heroInfoItem['heroName'];
            childInfoItem.getChildByName('heroLevel_0'+(index+1)).getComponent(cc.Label).string = heroInfoItem['heroLevel'];
            childInfoItem.getChildByName('profession_0'+(index+1)).getComponent(cc.Label).string = heroInfoItem['profession'];
            childInfoItem.getChildByName('loginTimes_0'+(index+1)).getComponent(cc.Label).string = heroInfoItem['loginTimes'];
            
            childInfoItem.getChildByName('heroTexture_0'+(index+1)).getComponent('myHeroTexture').show(heroInfoItem['heroTexture']);
            childInfoItem.getChildByName('headTexture_0'+(index+1)).getComponent('myHeadTexture').show(heroInfoItem['headTexture']);
        }
            
    },
    
    init: function(){
        this.children = this.node.getChildren();
    },

    // use this for initialization
    onLoad: function () {
        
        this.init();
        
        let self = this;
        
        window.socket.on('heroChoose',function(heroInfo){
            if(heroInfo){
                console.log(heroInfo);
            }else{
                console.log('none');
            }
            self.show(heroInfo);
        });
        
        window.socket.emit('heroChoose');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
