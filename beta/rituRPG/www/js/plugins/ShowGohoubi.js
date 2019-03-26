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
  var count_max = [3, 2, 3, 2, 4, 2, 4, 2, 2, 1, 1, 2, 4, 1, 3, 4, 4, 3, 3, 2, 4, 1, 2, 3, 1, 2, 1, 2, 1, 1, 3, 2, 1, 4, 3, 3, 1, 1, 1, 6, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 4]

  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)

    if (command === pluginName) {
      var num = $gameVariables.value(1)
      var offset = $gameVariables.value(num + 21)
      // pngファイル名の命名規則　: あ 行 * 10 + 同音オフセット 1origin
      var filename = String((num + 1) * 10 + offset)

      $gameScreen.showPicture(50, String(filename), 0, 250, 250, 100, 100, 255, 0);
    }
  }
})()