/*:
 * @plugindesc サブ文字描画用スプライトID設定
 * @author umaaji298
 *
 * @help プラグインコマンド
 * CheckSubSpriteFrame
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

      chkSpriteFrame($gameVariables.value(1))
      console.log(
        'CheckSubSpriteFrame v1,v2,v3,v4',
        $gameVariables.value(1),
        $gameVariables.value(2),
        $gameVariables.value(3),
        $gameVariables.value(4)
      )

    }
  }

  function chkSpriteFrame(currentID) {
    // 補助文字が必要なもののリスト
    // 0 : なし 1:小文字 2:２文字目 3:-1文字目
    var fixlist = [3, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 1, 2, 2, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 2, 2, 2, 0, 1, 0, 0, 0, 2, 0, 0, ]
    var subCType = fixlist[currentID];

    $gameVariables.setValue(11, subCType)

    switch (subCType) {
      case 0:
        {
          //補助文字描画なし
          $gameVariables.setValue(2, 0)
          $gameVariables.setValue(3, 0)
          $gameVariables.setValue(4, 0)
          break
        }
      case 1:
        {
          //小文字描画
          var spliteid = [0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0]

          $gameVariables.setValue(2, spliteid[currentID])
          $gameVariables.setValue(3, 0)
          $gameVariables.setValue(4, 0)
          break
        }
      case 2:
        {
          var spliteid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 6, 7, 8, 0, 0, 0, 0, 0, 9, 0, 0]
          $gameVariables.setValue(2, 0)
          $gameVariables.setValue(3, spliteid[currentID])
          $gameVariables.setValue(4, 0)
          break
        }
      case 3:
        {
          var spliteid = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

          $gameVariables.setValue(2, 0)
          $gameVariables.setValue(3, 0)
          $gameVariables.setValue(4, spliteid[currentID])
          break
        }
      default:
        break
    }
  }
})()