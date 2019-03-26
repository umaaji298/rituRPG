/*:
 * @plugindesc #4に現在のアイテムIDを設定
 * @author umaaji298
 *
 * @help プラグインコマンド
 * GetItemIndex
 *
 */

;
(function () {
  'use strict'

  var pluginName = 'CheckSubSpriteFrame'
  var sub_index = [0, 3, 5, 8, 10, 14, 16, 20, 22, 24, 25, 26, 28, 32, 33, 36, 40, 44, 47, 50, 52, 56, 57, 59, 62, 63, 65, 66, 68, 69, 70, 73, 75, 76, 80, 83, 86, 87, 88, 89, 95, 96, 98, 99, 101, 102, 103, 104, 105, 106, 108, 109, 110, 112, 114, 116, 117]

  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)

    if (command === pluginName) {
      //スロット文字(no)取得 0-56
      var current_num = $gameVariables.value(1);
      //現在の重複カウント数からindexを算出 (0 origin)
      var index = $gameVariables.value(current_num + 21);

      var item_id = sub_index[current_num] + index + 1; //1origin
      $gameVariables.setValue(4, item_id)

      //console.log('GetItemIndex id', item_id)

    }
  }

})()