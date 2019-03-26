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
  var sub_index = [0, 3, 5, 8, 10, 14, 16, 20, 22, 24, 25, 26, 28, 32, 33, 36, 40, 44, 47, 50, 52, 56, 57, 59, 62, 63, 65, 66, 68, 69, 70, 73, 75, 76, 80, 83, 86, 87, 88, 89, 95, 96, 98, 99, 101, 102, 103, 104, 105, 106, 108, 109, 110, 112, 114, 116, 117]
  var alllist = [
    [1, 17],
    [57, 5],
    [23, 34],
    [0, 17],
    [57, 22],
    [57, 17],
    [17, 18],
    [57, 10],
    [48, 17],
    [48, 17],
    [57, 17],
    [57, 64],
    [57, 9],
    [43, 38],
    [57, 17],
    [57, 17],
    [57, 17],
    [60, 17],
    [9, 3],
    [36, 2],
    [57, 17],
    [47, 17],
    [57, 17],
    [57, 17],
    [57, 17],
    [57, 17],
    [35, 17],
    [57, 58],
    [61, 17],
    [57, 11],
    [57, 7],
    [59, 17],
    [57, 17],
    [57, 17],
    [57, 54],
    [2, 52],
    [57, 17],
    [57, 17],
    [56, 45],
    [30, 38],
    [57, 17],
    [57, 45],
    [57, 45],
    [57, 45],
    [57, 17],
    [57, 39],
    [57, 65],
    [57, 17],
    [57, 17],
    [57, 17],
    [57, 17],
    [57, 12],
    [57, 17],
    [17, 17],
    [57, 59],
    [10, 8],
    [18, 17],
    [57, 3],
    [57, 48],
    [57, 17],
    [57, 41],
    [57, 9],
    [57, 66],
    [57, 17],
    [18, 11],
    [7, 17],
    [33, 17],
    [15, 17],
    [57, 42],
    [57, 11],
    [57, 17],
    [57, 45],
    [57, 30],
    [57, 17],
    [57, 17],
    [57, 17],
    [57, 17],
    [57, 17],
    [57, 46],
    [57, 11],
    [57, 17],
    [57, 7],
    [57, 2],
    [57, 17],
    [57, 30],
    [40, 6],
    [3, 17],
    [57, 17],
    [13, 17],
    [57, 17],
    [17, 17],
    [57, 17],
    [25, 17],
    [57, 16],
    [57, 7],
    [57, 17],
    [57, 17],
    [57, 0],
    [62, 17],
    [5, 45],
    [57, 20],
    [57, 17],
    [63, 17],
    [17, 17],
    [0, 17],
    [57, 17],
    [57, 17],
    [33, 45],
    [57, 17],
    [57, 17],
    [57, 17],
    [57, 33],
    [1, 17],
    [57, 6],
    [57, 0],
    [57, 5],
    [57, 12],
    [57, 17],
    [57, 17],
    [57, 17],
    [57, 40]
  ]

  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)

    if (command === pluginName) {
      //スロット文字(no)取得 (0-56)
      var current_num = $gameVariables.value(1);
      //現在の重複カウント数からindexを算出 (0 origin)
      var index = $gameVariables.value(current_num + 21);

      //滅茶苦茶大事なlog
      // console.log(
      //   'CheckSubSpriteFrame v1,count,v2,v3',
      //   $gameVariables.value(1),
      //   index, $gameVariables.value(2),
      //   $gameVariables.value(3)
      // )

      chkSpriteFrame(current_num, index)
    }
  }

  function chkSpriteFrame(num, index) {
    //TODO sub_index[num] + index 外部変数化
    var currentSpliteflameNo = alllist[sub_index[num] + index]
    $gameVariables.setValue(2, currentSpliteflameNo[0])
    $gameVariables.setValue(3, currentSpliteflameNo[1])

  }

})()