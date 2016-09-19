/*:
 * @plugindesc 小さな不思議の迷宮専用プラグイン
 * @author Silver.Fox　present kotonoha
 * @help このゲーム専用に作成された初期読み込み用プラグイン
 */

(function() {
// エンカウント率調整
    Game_Player.prototype.makeEncounterCount = function() {
    var n = $gameMap.encounterStep();
    this._encounterCount = Math.randomInt(5) + n;
    };
// クリティカルのダメージ率調整
    Game_Action.prototype.applyCritical = function(damage) {
        return damage * 2;
    };
//YEP_BattleEnginecoreのウェイト調整
Window_BattleLog.prototype.messageSpeed = function() {
    return 8;
};

})();