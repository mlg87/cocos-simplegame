var landing_INITIALIZED = false

var ucCb = function() {
  var scene = new UnderConstructionScene()
  cc.director.pushScene(scene)
}

var LandingLayer = cc.Layer.extend({
  sprite:null,
  ctor: function() {
    //////////////////////////////
    // 1. super init first
    this._super()

    var size = cc.winSize

    /////////////////////////////
    // 2. add a menu item with "X" image, which is clicked to quit the program
    //    you may modify it.
    // ask the window size

    /////////////////////////////
    // 3. add your codes below...
    // add a label shows "Hello World"
    // create and initialize a label
    // var landingLabel = new cc.LabelTTF("Welcome to the Jungle", "Arial", 38)
    // // position the label on the center of the screen
    // landingLabel.x = size.width / 2
    // landingLabel.y = size.height / 2 + 200
    // landingLabel.setColor(cc.color.RED)
    // // add the label as a child to this layer
    // this.addChild(landingLabel, 5)

    // create black background layerColor
    var blackBkgd = new cc.LayerColor(cc.color.BLACK)
    this.addChild(blackBkgd)

    // add "HelloWorld" splash screen"
    // this.sprite = new cc.Sprite(res.ManUtd_png)
    // this.sprite.attr({
    //     x: size.width / 2,
    //     y: size.height / 2,
    //     opacity: 55,
    // })
    // this.addChild(this.sprite, 0)

    // build menu
    var landingMenuItem1 = new cc.MenuItemFont('Play', ucCb)
    var landingMenuItem2 = new cc.MenuItemFont('High Scores', ucCb)
    var landingMenuItem3 = new cc.MenuItemFont('Settings', ucCb)

    var menu = new cc.Menu(landingMenuItem1, landingMenuItem2, landingMenuItem3)
    menu.alignItemsVerticallyWithPadding(size.height * .1)
    this.addChild(menu, 10)

    return true
  }
})

var LandingScene = cc.Scene.extend({
  onEnter: function() {
    this._super()

    if (!landing_INITIALIZED) {
      landing_INITIALIZED = true
      this.addChild(new LandingLayer())
    }
  },
  // resets the 'state'
  // onExit: function() {
  //   console.log('EXIT: LND BEFORE', landing_INITIALIZED);
  //   landing_INITIALIZED = false
  //   console.log('EXIT: LND AFTER', landing_INITIALIZED);
  // }
})
