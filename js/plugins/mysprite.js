/*:
 * @plugindesc sprite表示
 * @author sample
 *
 * @help
 * ヘルプの内容
 */

;(function() {
  var N = 'SamplePlugin'
  var param = PluginManager.parameters(N)

  //-----------------------------------------------------------------------------
  // プラグインコマンドの設定
  //-----------------------------------------------------------------------------
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'DrawMySprite') {
      myDraw()
      // addUpdate(sA)
    }
    if (command === 'UpdateMySprite') {
    }
  }

  //----
  //本体
  //-----
  function myDraw() {
    var bitmap = ImageManager.loadBitmap('img/sprite/', 'single', 0, false)
    var maxW = bitmap.width
    var sprite = new Sprite(bitmap)
    // スプライトのビットマップから画像の横サイズを取得
    // スプライトの初期マスクを設定、(スプライト画像のx=0,y=0を始点に、縦100:横100のマスクを設定
    sprite.setFrame(0, 0, 150, 150)
    // スプライト内の表示位置を設定
    sprite.position.x = 400
    sprite.position.y = 300
    // 画像の中央位置を設定0～1
    sprite.anchor.x = 0.5
    sprite.anchor.y = 0.5
    SceneManager._scene.addChild(sprite)

    $gameVariables.setValue(10, 0)
    $gameVariables.setValue(11, 0)

    // あとで処理を追加する位置
    // Scene_Map update に処理を追加する
    var s_m_update = Scene_Map.prototype.update
    Scene_Map.prototype.update = function() {
      s_m_update.call(this)
      // 現在表示しているスプライト描画をしたフレームを加算
      // sA._mydelay_++
      // mydelay++
      var mydelay = $gameVariables.value(10) + 1

      // 描画フレームが30を超えた場合(スプライトを切り替えてから31フレーム目の場合)
      // if (sA._mydelay_ > 30) {
      if (mydelay > 30) {
        // sA._mydelay_ = 0 // フレームカウントをリセット
        $gameVariables.setValue(10, 0)
        var mydelay2 = $gameVariables.value(11) + 1
        if (mydelay2 > 1) {
          mydelay2 = 0
          $gameVariables.setValue(11, 0)
        }

        // スプライトのフレームの枠の高さ開始位置を取得し、150を加算して次の画像を表示
        var frameX = mydelay2 * 150
        // フレームが画像を飛び出してしまうなら、先頭に戻す
        if (maxW <= frameX) {
          frameX = 0
        }
        // スプライトのフレームを再設定し、画像を切り替える
        sprite.setFrame(frameX, 0, 150, 150)
      } else {
        $gameVariables.setValue(10, mydelay)
      }
    }
  }
})()
