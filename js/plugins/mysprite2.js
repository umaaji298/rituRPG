/*:
 * @plugindesc sprite表示2
 * @author sample2
 *
 * @help
 * ヘルプの内容
 */
;(function() {
  var cul = Spriteset_Map.prototype.createUpperLayer
  Spriteset_Map.prototype.createUpperLayer = function() {
    // 既存処理の呼び出し
    cul.call(this)
    // スプライトの作成
    sA = new Sprite()
    // ピクチャのロード、「img/sprite」の「sprite_card.png」を、色相変化なし、補完なしでロード。
    sA.bitmap = ImageManager.loadBitmap('img/sprite/', 'single', 0, false)
    // スプライトの初期マスクを設定、(スプライト画像のx=0,y=0を始点に、縦100:横100のマスクを設定
    sA.setFrame(0, 0, 150, 150)
    // スプライト内の表示位置を設定
    sA.position.x = 400
    sA.position.y = 300
    // 画像の中央位置を設定0～1
    sA.anchor.x = 0.5
    sA.anchor.y = 0.5
    // 独自プロパティの設定
    sA._delay_ = 0 // コマ落としのためのディレイカウント
    // createUpperLayerのスプライトとして、生成したスプライトを追加
    this.addChild(sA)
  }

  // あとで処理を追加する位置
  // Scene_Map update に処理を追加する
  var s_m_update = Scene_Map.prototype.update
  Scene_Map.prototype.update = function() {
    s_m_update.call(this)
    // 現在表示しているスプライト描画をしたフレームを加算
    sA._delay_++
    // 描画フレームが3を超えた場合(スプライトを切り替えてから4フレーム目の場合)
    if (sA._delay_ > 30) {
      sA._delay_ = 0 // フレームカウントをリセット
      // スプライトのビットマップから画像の縦サイズを取得
      var maxW = sA.bitmap.width
      // スプライトのフレームの枠の高さ開始位置を取得し、100を加算して次の画像を表示
      var frameX = sA._frame.x + 150
      // フレームが画像を飛び出してしまうなら、先頭に戻す
      if (maxW <= frameX) {
        frameX = 0
      }
      // スプライトのフレームを再設定し、画像を切り替える
      sA.setFrame(frameX, 0, 150, 150)
    }
  }
})()
