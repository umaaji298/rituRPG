/*:
 * @plugindesc 情報表示用文字列の組み立て
 * @author umaaji298
 *
 * @help プラグインコマンド
 * SetInfomation
 *
 */

;
(function () {
  'use strict'

  var pluginName = 'SetInfomation'
  var char_list = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "が", "ぐ", "げ", "ご", "ざ", "ぜ", "だ", "ど", "ば", "び", "ぶ", "べ", "ぴ", "ぺ", "ぽ", "姉"]


  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)

    if (command === pluginName) {
      //情報画面の取得状態表示用
      //V17/V18：取得済み文字列のカラーを描画
      //v78 : 全数表示を描画
      // var ishard = $gameVariables.value(19);
      var isHard_final = $gameVariables.value(80);

      if (isHard_final > 0) {
        setInfo()
      } else {
        setInfo_normal()

      }

    }
  }


  function setInfo() {
    var total = $gameVariables.value(15);
    var char_current1 = ''
    var char_current2 = ""
    var info = ""

    var color_list = [7, 0, 27, 24, 24, 24, 24, 18, 18, 18]
    var nokoriList = $gameVariables.value(81)

    //console.log("setinfo", nokoriList)


    for (var i = 0; i < 46; i++) {


      char_current1 += `\x1bC[${color_list[nokoriList[i]]}]${char_list[i]}`
    }
    $gameVariables.setValue(17, char_current1)

    for (var i = 46; i < 62; i++) {
      char_current2 += `\x1bC[${color_list[nokoriList[i]]}]${char_list[i]}`
    }
    $gameVariables.setValue(18, char_current2)


    if (total == 197) {
      //コンプリート時はアイコン表示
      info = `\x1bi[87]\x1bC[10]\x1bV[15]\x1bC[0]/\x1bC[18]197`
    } else {
      info = `\x1bC[0]\x1bV[15]/\x1bC[18]197`
    }
    $gameVariables.setValue(78, info)
  }

  function setInfo_normal() {
    var total = $gameVariables.value(15);
    var get_id_list = $gameVariables.value(79);
    var char_current1 = ''
    var char_current2 = ""
    var info = ""

    for (var i = 0; i < 46; i++) {
      if (get_id_list[i] == 1) {
        //グレーアウト
        char_current1 += `\x1bC[19]${char_list[i]}`
      } else {
        char_current1 += `\x1bC[0]${char_list[i]}`
      }
    }
    $gameVariables.setValue(17, char_current1)

    for (var i = 46; i < 62; i++) {
      if (get_id_list[i] == 1) {
        //グレーアウト
        char_current2 += `\x1bC[19]${char_list[i]}`
      } else {
        char_current2 += `\x1bC[0]${char_list[i]}`
      }
    }
    $gameVariables.setValue(18, char_current2)


    if (total == 62) {
      //コンプリート時はアイコン表示
      info = `\x1bi[87]\x1bC[10]\x1bV[15]\x1bC[0]/\x1bC[0]62`
    } else {
      info = `\x1bC[0]\x1bV[15]/\x1bC[0]62`
    }
    $gameVariables.setValue(78, info)
  }

})()