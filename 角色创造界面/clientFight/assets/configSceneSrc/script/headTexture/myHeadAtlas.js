cc.Class({
    extends: cc.Component,

    properties: {
        heroTexture: {
            default:0,
            notify: function(){
                this.changeHeadTexture();       
            }
        },
        eye: {
            default:0,
            notify: function(){
                this.changeHeadTexture();       
            }
        },
        mouse: {
            default:0,
            notify: function(){
                this.changeHeadTexture();       
            }
        },
        
        realTexture: {
            default: '000',
            type: String,
        }
    },

    // use this for initialization
    onLoad: function () {
        
    },
    
    start: function(){
        let self = this;
        socket.on('getHeroTexture',function(heroTexture){
            self.heroTexture = heroTexture;
        })
        socket.emit('getHeroTexture');
    },
    
    changeHeadTexture: function(){
        
      if(this.eye < 0)    this.eye = 4;
      else if(this.eye > 4) this.eye = 0;
      if(this.mouse < 0)  this.mouse = 4;
      else if(this.mouse >4) this.mouse = 0;
      
      this.realTexture = ''.concat(this.heroTexture,this.eye,this.mouse);
        
      var realUrl = cc.url.raw("headTextureSrc/raw/girl".concat(this.heroTexture,this.eye,this.mouse,".png"));
      console.log("headTextureSrc/raw/girl".concat(this.heroTexture,this.eye,this.mouse,".png"));
      
      var texture = cc.textureCache.addImage(realUrl);
      
      console.log(this.getComponent(cc.Sprite));
      
      this.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
