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
      //アイテム取得数
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
    // 1origin
    // sp_00は開始時に取得する
    var bonusList = [1, 7, 15, 25, 35, 40, 47, 52, 57, 62, 63, 70, 80, 90, 95, 99, 100, 107, 110, 120, 130, 140, 150, 160, 165, 170, 175, 185, 190, 191, 193, 194, 196, 197]
    var cls_rank = bonusList.indexOf(total_num)
    //ランクアップのタイミングかどうか
    $gameVariables.setValue(12, cls_rank)
    return cls_rank
  }

  function createClsUpMsg(total_num, rank) {
    var clsList = ["無職", "お客さん", "下忍", "荒武者", "大剣士", "ハンター", "ギャル", "ギャル！", "コレクター", "勇者", "リツプロ", "先に進む者", "聖闘士", "ママ", "としあき", "ママン", "開眼", "真実を知るもの", "えっちさん", "教授", "夫", "クリエイター", "プロデューサー", "プロフェッサー", "おかん", "真実の先を知るもの", "淫獣", "こども", "生徒", "トリッパー", "メカニック", "踏破者", "調和者", "覇者", "りつ姉"]
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
          msg = `ヤッター！お小遣いを貰った。
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]超合金 \x1bC[0]を買うんだ。`
          break
        }
      case 9:
        {
          i_id = $dataWeapons[10]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `\x1bC[18](チ カ ラ ガ ホ シ イ ニャ…？)
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]覚醒アイテム \x1bC[0]を得た。`
          break
        }
      case 10:
        {
          i_id = $dataWeapons[11]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `りつ姉とは…これにゃあ！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を得た。`
          break
        }
      case 11:
        {
          i_id = $dataWeapons[12]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `RPGはさらなる闘争を求める！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を得た。`
          break
        }
      case 12:
        {
          i_id = $dataWeapons[13]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `限界突破！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を覚えた。`
          break
        }
      case 13:
        {
          i_id = $dataWeapons[14]
          $gameParty.gainItem($dataWeapons[14], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[15], 1) // アイテム取得
          msg = `たのしい
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]絵描き歌 \x1bC[0]を習得した。`
          break
        }
      case 14:
        {
          i_id = $dataWeapons[16]
          $gameParty.gainItem(i_id, 1) // アイテム取得
          msg = `ヒミツの写真を見てしまった！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を取得した。`
          break
        }
      case 15:
        {
          i_id = $dataWeapons[17]
          $gameParty.gainItem($dataWeapons[17], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[18], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[19], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[20], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[21], 1) // アイテム取得

          msg = `お腹すいたよりつ姉！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]レシピ集 \x1bC[0]を取得した。`
          break
        }
      case 16:
        {
          i_id = $dataWeapons[22]
          $gameParty.gainItem(i_id, 1) // アイテム取得          
          msg = `gff...
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を見た！`
          break

        }
      case 17:
        {
          i_id = $dataWeapons[23]
          $gameParty.gainItem(i_id, 1) // アイテム取得          
          msg = `・・・。
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]真実 \x1bC[0]を知った・・・。`
          break

        }
      case 18:
        { //fixme
          i_id = $dataWeapons[24]
          $gameParty.gainItem(i_id, 1) // アイテム取得          
          msg = `・・・。
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]秘密の写真 \x1bC[0]を見た・・・。`
          break

        }
      case 19:
        {
          i_id = $dataWeapons[25]
          $gameParty.gainItem($dataWeapons[25], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[26], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[27], 1) // アイテム取得
          msg = `りつ姉の生態を把握した。
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]りつねえが来た！`
          break

        }
      case 20:
        {
          i_id = $dataWeapons[28]
          $gameParty.gainItem($dataWeapons[28], 1) // アイテム取得          
          msg = `我が家にりつ姉がやってきた！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を得た。`
          break

        }
      case 21:
        {
          i_id = $dataWeapons[29]
          $gameParty.gainItem($dataWeapons[29], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[30], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[31], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[32], 1) // アイテム取得
          msg = `12.i話が開始された！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]趣味のアニメ \x1bC[0]を見た。`
          break
        }
      case 22:
        {
          i_id = $dataWeapons[32]
          $gameParty.gainItem($dataWeapons[33], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[34], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[35], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[36], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[37], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[38], 1) // アイテム取得
          msg = `新シリーズが開始された！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]学園編 \x1bC[0]を見た。`
          break
        }
      case 23:
        {
          i_id = $dataWeapons[39]
          $gameParty.gainItem($dataWeapons[39], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[40], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[41], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[42], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[43], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[44], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[45], 1) // アイテム取得
          msg = `今夜は拡大版！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]りつねえが来た！SP`
          break
        }
      case 24:
        {
          i_id = $dataWeapons[46]
          $gameParty.gainItem($dataWeapons[46], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[47], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[48], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[49], 1) // アイテム取得
          msg = `酒のアテどうするかな…
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]今月号のレシピ集 \x1bC[0]を開いた。`
          break
        }
      case 25:
        {
          i_id = $dataWeapons[50]
          $gameParty.gainItem($dataWeapons[50], 1) // アイテム取得
          msg = `・・・！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]真実 \x1bC[0]を知ってしまった。`
          break
        }
      case 26:
        {
          i_id = $dataWeapons[51]
          $gameParty.gainItem($dataWeapons[51], 1) // アイテム取得
          msg = `ひみつの本から災いのカードがばらまかれた！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を得た。`
          break
        }
      case 27:
        {
          i_id = $dataWeapons[52]
          $gameParty.gainItem($dataWeapons[52], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[53], 1) // アイテム取得
          msg = `お小遣いをもらった！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]おかし \x1bC[0]おいしかった。`
          break
        }
      case 28:
        {
          i_id = $dataWeapons[54]
          $gameParty.gainItem($dataWeapons[54], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[55], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[56], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[57], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[58], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[59], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[60], 1) // アイテム取得
          msg = `りつ先生がこの世界の仕組みについて教えてくれた！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]知識 \x1bC[0]を得た！`
          break
        }
      case 29:
        {
          i_id = $dataWeapons[61]
          $gameParty.gainItem($dataWeapons[61], 1) // アイテム取得
          msg = `最終世界に到達した！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]金言 \x1bC[0]を得た。`
          break
        }
      case 30:
        {
          i_id = $dataWeapons[62]
          $gameParty.gainItem($dataWeapons[62], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[63], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[64], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[65], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[66], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[67], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[68], 1) // アイテム取得
          msg = `時空を跳躍し未来を垣間見たぜドク！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]未来 \x1bC[0]を見た！`
          break
        }
      case 31:
        {
          i_id = $dataWeapons[69]
          $gameParty.gainItem($dataWeapons[69], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[70], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[71], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[72], 1) // アイテム取得
          $gameParty.gainItem($dataWeapons[73], 1) // アイテム取得
          msg = `異世界に転移した！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]幻の姉 \x1bC[0]を発見！`
          break
        }
      case 32:
        {
          i_id = $dataWeapons[74]
          $gameParty.gainItem($dataWeapons[74], 1) // アイテム取得
          msg = `あと一息だ！
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name}`
          break
        }
      case 33:
        {
          i_id = $dataWeapons[75]
          $gameParty.gainItem($dataWeapons[75], 1) // アイテム取得
          msg = `俺は
\x1bC[17]すぺしゃる \x1bC[1]\x1bi[${i_id.iconIndex}]${i_id.name} \x1bC[0]を得た！`
          break
        }
      case 34:
        {
          i_id = $dataWeapons[76]
          $gameParty.gainItem($dataWeapons[76], 1) // アイテム取得          
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