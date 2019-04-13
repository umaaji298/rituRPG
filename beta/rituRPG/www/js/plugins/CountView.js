/*:
 * @plugindesc 画像を何回表示したか
 * @author umaaji298
 *
 * @help プラグインコマンド
 * CountView
 *
 */

;
(function () {
  'use strict'

  var pluginName = 'CountView'
  //カウンター最大数 : 1枚しか同音がないものは0となる
  var count_max = [6, 5, 2, 1, 5, 4, 6, 3, 1, 2, 1, 4, 4, 1, 4, 5, 3, 4, 2, 3, 5, 0, 2, 4, 1, 1, 0, 2, 0, 1, 5, 3, 0, 3, 5, 3, 0, 1, 1, 5, 0, 3, 1, 3, 0, 0, 1, 0, 2, 1, 0, 0, 2, 3, 3, 1, 4, 2, 0, 0, 0, 1]


  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)

    if (command === pluginName) {
      //ハード後半モードかどうか
      var story_final = $gameVariables.value(80)

      if (story_final > 0) {
        //画像表示回数をV[no+121]に記録する
        countCheck()
      } else {
        //normalモードは単純に詰み防止乱数を消しこんで対応
        countCheck_normal()

      }

    }
  }

  function countCheck_normal() {
    // 難易度調整用周回乱数消去
    // rand#5変数を消しこむ
    $gameVariables.setValue(5, $gameVariables.value(5).filter(n => n !== $gameVariables.value(1)))
  }

  function countCheck() {
    //スロット文字(no)取得
    var current_num = $gameVariables.value(1);
    var counter_id = current_num + 121
    //現在の重複カウント数取得
    var count = $gameVariables.value(counter_id);
    //個別最大カウント数取得
    var max = count_max[current_num]

    var next = count + 1

    if (next <= max) {
      //最大数を超えない場合は加算
      $gameVariables.setValue(counter_id, next)
    } else {
      //debug用 変数を１つ進める
      if ($gameVariables.value(20) > 0) {
        console.log("debug next call")
        var next_s = current_num + 1
        if (next_s > 62) {
          next_s = 0
        }
        $gameVariables.setValue(1, next_s)
      }
    }

    // console.log(
    //   'CountClick v1,before,after',
    //   $gameVariables.value(1),
    //   count, $gameVariables.value(counter_id)
    // )

  }

})()