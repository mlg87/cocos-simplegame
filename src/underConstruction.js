var underConstruction_INITIALIZED = false

var ucCb = function() {
  underConstruction_INITIALIZED = false
  console.log('about the pop the scene', underConstruction_INITIALIZED)
  cc.director.popScene()
}

var UnderConstructionLayer = cc.Layer.extend({
  sprite:null,
  ctor: function() {
    //////////////////////////////
    // 1. super init first
    this._super()

    var size = cc.winSize

    // create black background layerColor
    var blackBkgd = new cc.LayerColor(cc.color.BLACK)
    this.addChild(blackBkgd)

    // this.sprite = new cc.Sprite(res.UnderConstruction_png)
    //
    // this.addChild(this.sprite, 50)

    var ucMenuItem1 = new cc.MenuItemFont('Go Back', ucCb)

    var menu = new cc.Menu(ucMenuItem1)
    menu.alignItemsVerticallyWithPadding(size.height * .1)
    this.addChild(menu, 10)

    return true
  }
})

var UnderConstructionScene = cc.Scene.extend({
  onEnter: function() {
    this._super()

    if (!underConstruction_INITIALIZED) {
      underConstruction_INITIALIZED = true
      this.addChild(new UnderConstructionLayer())
    }
  },
  // resets the 'state'
  // onExit: function() {
  //   console.log('EXIT: UC BEFORE:', underConstruction_INITIALIZED);
  //   underConstruction_INITIALIZED = false
  //   console.log('EXIT: UC AFTER', underConstruction_INITIALIZED);
  // }
})
