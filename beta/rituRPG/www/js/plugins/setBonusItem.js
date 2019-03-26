/*:
 * @plugindesc ボーナスアイテム設定
 * @author umaaji298
 *
 * @help プラグインコマンド
 * SetBonusItem
 *
 */

;
(function () {
  'use strict'

  var pluginName = 'SetBonusItem'



  // プラグインコマンドの定義
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand

  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args)

    if (command === pluginName) {
      var total_num = $gameVariables.value(15)

      //全取得数チェック
      var rank = chkBonus(total_num)
      if (rank != -1) {
        createClsUpMsg(total_num, rank)
        createBonusMsg(rank)
      }

    }
  }

  function chkBonus(total_num) {
    var bonusList = [1, 7, 15, 25, 35, 40, 47, 54, 57, 58, 70, 80, 90, 95, 99, 100, 107, 115, 120, 121]
    var cls_rank = bonusList.indexOf(total_num)
    $gameVariables.setValue(12, cls_rank)
    return cls_rank
  }

  function createClsUpMsg(total_num, rank) {
    var clsList = ["無職", "お客さん", "下忍", "荒武者", "大剣士", "ハンター", "ギャル", "ギャル！", "勇者", "リツプロ", "先に進む者", "聖闘士", "ママ", "としあき", "ママン", "開眼", "真実を知るもの", "えっちさん", "教授", "覇者", "りつ姉"]
    var cls_no = rank + 1 // 0:無職は初期状態のため、1start
    var msg = `\x1bC[0]トータル \x1bC[3]${total_num} \x1bC[0]姉達成！\nクラスが \x1bC[1]${clsList[cls_no-1]} \x1bC[0]から \x1bC[2]${clsList[cls_no]} \x1bC[0]に進化したぞ。`

    $gameVariables.setValue(13, msg)
  }

  function createBonusMsg(rank) {
    var cls_no = rank + 1 // 0:無職は初期状態のため、1start
    var msg = ""
    var i_id = 0

    //ランク保存
    $gameVariables.setValue(7, cls_no)

    switch (cls_no) {
      case 1:
        {
          i_id = $dataWeapons[2]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `入隊おめでとう！ ボーナスとして
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]が配属されたぞ。`
          break
        }
      case 2:
        {
          i_id = $dataWeapons[3]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `クラスUPおめでとう！ ボーナスとして
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]が支給されたぞ。`
          break
        }
      case 3:
        {
          i_id = $dataWeapons[4]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `クラスUPおめでとう！ ボーナスとして
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]が支給されたぞ。
ただちに装備したまえ。`
          break
        }
      case 4:
        {
          i_id = $dataWeapons[5]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `りつ姉を心で理解した。
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を覚えた。`
          break
        }
      case 5:
        {
          i_id = $dataWeapons[6]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `調子に乗って
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を行った。`
          break
        }
      case 6:
        {
          i_id = $dataWeapons[7]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `天啓により
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]ほんとうのスィーツ \x1bC[0]を得た！`
          break
        }
      case 7:
        {
          i_id = $dataWeapons[8]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `天啓により
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]真のスィーツ \x1bC[0]を得た！！`
          break
        }
      case 8:
        {
          i_id = $dataWeapons[9]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `\x1bC[18](チ カ ラ ガ ホ シ イ ニャ…？)
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]覚醒アイテム \x1bC[0]を得た。`
          break
        }
      case 9:
        {
          i_id = $dataWeapons[10]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `りつ姉とは…これにゃあ！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を得た。`
          break
        }
      case 10:
        {
          i_id = $dataWeapons[11]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `RPGはさらなる闘争を求める！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を得た。`
          break
        }
      case 11:
        {
          i_id = $dataWeapons[12]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `限界突破！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を覚えた。`
          break
        }
      case 12:
        {
          i_id = $dataWeapons[13]
          $gameParty.gainItem($dataWeapons[13], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[14], 1) // アイテム取得
          msg = `たのしい
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]絵描き歌 \x1bC[0]を習得した。`
          break
        }
      case 13:
        {
          i_id = $dataWeapons[15]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `ヒミツの写真を見てしまった！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を取得した。`
          break
        }
      case 14:
        {
          i_id = $dataWeapons[16]
          $gameParty.gainItem($dataWeapons[16], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[17], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[18], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[19], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[20], 1) // アイテム取得

          msg = `お腹すいたよりつ姉！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]レシピ集 \x1bC[0]を取得した。`
          break
        }
      case 15:
        {
          i_id = $dataWeapons[21]
          $gameParty.gainItem(i_id, 1) // アイテム取得          
          msg = `gff...
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を見た！`
          break

        }
      case 16:
        {
          i_id = $dataWeapons[22]
          $gameParty.gainItem(i_id, 1) // アイテム取得          
          msg = `・・・。
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]真実 \x1bC[0]を知った・・・。`
          break

        }
      case 17:
        { //fixme
          i_id = $dataWeapons[23]
          $gameParty.gainItem(i_id, 1) // アイテム取得          
          msg = `・・・。
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]秘密の写真 \x1bC[0]を見た・・・。`
          break

        }
      case 18:
        {
          i_id = $dataWeapons[24]
          $gameParty.gainItem($dataWeapons[24], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[25], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[26], 1) // アイテム取得
          msg = `りつ姉の生態を把握した。
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]りつねえが来た！`
          break

        }
      case 19:
        {
          i_id = $dataWeapons[27]
          $gameParty.gainItem($dataWeapons[27], 1) // アイテム取得          
          msg = `りつ姉の全てを理解した！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を得た。`
          break

        }
      case 20:
        {
          i_id = $dataWeapons[28]
          $gameParty.gainItem($dataWeapons[28], 1) // アイテム取得          
          $gameParty.gainItem($dataWeapons[29], 1) // アイテム取得          
          msg = `俺は
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]になった。`
          break
        }
      default:
        break;
    }
    //console.log(msg)

    $gameVariables.setValue(14, msg)
  }
})()