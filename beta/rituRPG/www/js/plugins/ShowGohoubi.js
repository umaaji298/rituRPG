/*:
 * @plugindesc ごほうびの表示
 * @author umaaji298
 *
 * @help プラグインコマンド
 * ShowGohoubi
 *
 */

;
(function () {
  'use strict'

  var pluginName = 'ShowGohoubi'

  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)

    if (command === pluginName) {
      //表示するpicture/filename.pngを決定する
      // pngファイル名の命名規則　: (フレームno[0origin] + 1) * 10 + 重複回数(オフセット)(0origin)

      var num = $gameVariables.value(1)
      var offset = $gameVariables.value(num + 121)
      var filename = String((num + 1) * 10 + offset)

      $gameScreen.showPicture(50, String(filename), 0, 250, 250, 100, 100, 255, 0);
      //console.log("showGohoubi", filename, ".png")
    }
  }
})()