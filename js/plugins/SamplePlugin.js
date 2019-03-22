//=====================================
// SamplePlugin.js
//=====================================
// Copyright (c) 2017 Tsumio
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2017/5/24 公開
// ----------------------------------------------------------------------------
// [Blog]   : http://ntgame.wpblog.jp/
// [Twitter]: https://twitter.com/TsumioNtGame
//=============================================================================
/*:
 * @plugindesc プラグイン制作講座のサンプルです
 * @author ツミオ
 * 
 * 

 * @help プラグインコマンド
 * このプラグインにプラグインコマンドはありません。
 * 
 * 
 * 
 * 
 * 利用規約：
 * 作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 * についても制限はありません。
 * 自由に使用してください。
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
    if (command === 'Go_SampleScene') {
      SceneManager.push(Scene_Sample)
    }
  }

  //-----------------------------------------------------------------------------
  //  Scene_Sampleクラスの定義
  //-----------------------------------------------------------------------------

  function Scene_Sample() {
    this.initialize.apply(this, arguments)
  }
  Scene_Sample.prototype = Object.create(Scene_Base.prototype)
  Scene_Sample.prototype.constructor = Scene_Sample

  //初期化
  Scene_Sample.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this)
  }
  //中身を作る
  Scene_Sample.prototype.create = function() {
    Scene_Base.prototype.create.call(this)
    //createSprite実行
    this.createSprite()
  }

  //オリジナルのスプライトを作成するためのメソッド
  Scene_Sample.prototype.createSprite = function() {
    //Bitpmapの作成
    // var bitmap = ImageManager.loadParallax('BlueSky')
    var bitmap = ImageManager.loadBitmap('img/sprite/', 'single', 0, false)
    //スプライト生成
    this.sprite = new Sprite(bitmap)
    //addChild
    this.addChild(this.sprite)
  }
})()
