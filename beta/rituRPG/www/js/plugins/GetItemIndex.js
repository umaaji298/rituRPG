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

  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)

    if (command === pluginName) {
      //取得する予定のItemIDをv4に格納する
      // ItemID命名規則　: (フレームno[0origin] + 1) * 10 + 重複回数(オフセット)(0origin)

      var num = $gameVariables.value(1)
      var offset = $gameVariables.value(num + 121)
      var item_id = String((num + 1) * 10 + offset)

      //var item_id = index_list[current_num] + index + 1; //旧仕様：連続データにできるが変更耐性が弱い
      $gameVariables.setValue(4, item_id)

      //console.log('GetItemIndex id', item_id)

    }
  }

})()