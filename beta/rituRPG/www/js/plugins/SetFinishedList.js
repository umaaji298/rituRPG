/*:
 * @plugindesc 取得済み数字の保存 normal/hard前半のみ使用
 * @author umaaji298
 *
 * @help プラグインコマンド
 * SetFinishedList
 *
 */

;
(function () {
  'use strict'

  var pluginName = 'SetFinishedList'


  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)

    if (command === pluginName) {
      var current = $gameVariables.value(1);
      var finished_list = $gameVariables.value(79)

      finished_list[current] = 1;

      $gameVariables.setValue(79, finished_list)
    }
  }
})()