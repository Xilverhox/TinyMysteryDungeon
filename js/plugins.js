// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Oggy_1_3_1_MemoryLeakPatch","status":true,"description":"","parameters":{}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"200","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"MadeWithMvPlus","status":true,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Fade Out Time MV":"40","Fade In Time MV":"40","Wait Time MV":"60","Skip MV":"true","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160","Skip":"true"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.17 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"314","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"10","Actor MaxHP":"200","Actor MaxMP":"100","Actor Parameter":"99","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"false","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"9","Menu TP Bar":"false","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.39 Have more control over the flow of the battle system\r\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.7 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.2","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"39","Reflect Animation":"126","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 16","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"36","Flinch Distance":"4","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"90","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"true","Timed Buffs":"true","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"false","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"使用者","Ally Help Text":"Ally","Allies Help Text":"味方全体","Enemy Help Text":"Enemy","Enemies Help Text":"敵全体","All Help Text":"%1","Random Help Text":"敵ランダム%2体","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.14 (Requires YEP_BattleEngineCore.js) This plugin lets\r\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"true","Frame Speed":"12","Show State Overlay":"false","---Shadows---":"","Show Shadow":"true","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"0","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.02","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","---Motions---":"","Attack Motion":"thrust","Weapon Image Index":"0","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"v1.10 (Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"v1.10 (Requires YEP_BattleEngineCore.js) Visual functions\r\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.04 A simple battle status window that shows the\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"16","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"7","Param Current Max":"false","Adjust Columns":"true","---Actor Switching---":"","Left / Right":"true","PageUp / PageDown":"true","Allow Turn Skip":"true","---Front View---":"","Show Animations":"true","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"-16"}},
{"name":"YEP_AutoPassiveStates","status":true,"description":"v1.11 This plugin allows for some states to function as\r\npassives for actors, enemies, skills, and equips.","parameters":{"Actor Passives":"0","Enemy Passives":"0","Global Passives":"0"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"SAN_MapGenerator","status":true,"description":"自動マップ生成 ver1.12\r\n自動的にマップを生成しイベントを配置します。","parameters":{"WallHight":"1","MinRoomSize":"5","MaxRoomSize":"10","ShowOuterWall":"ON"}},
{"name":"YEP_GabWindow","status":true,"description":"v1.04 The Gab Window functions as a window for random\njibber jabber that does not require a message window.","parameters":{"---General---":"","Gab Font Name":"GameFont","Gab Font Size":"28","Character X Pos":"36","Character Y Pos":"60","Base Wait Time":"90","Time Per Character":"4","Fade Rate":"16","Anti-Repeat":"true","---Map---":"","Map Y Location":"72","Map Dim Color 1":"rgba(0, 0, 0, 0.6)","Map Dim Color 2":"rgba(0, 0, 0, 0.3)","---Battle---":"","Battle Y Location":"24","Battle Dim Color 1":"rgba(0, 0, 0, 0.6)","Battle Dim Color 2":"rgba(0, 0, 0, 0)"}},
{"name":"NoGameover","status":true,"description":"ゲームオーバーにならないよ。","parameters":{"Switch ID":"30"}},
{"name":"FpsSyncOption","status":true,"description":"v1.00 Adds a command to the options to enable turning on\r\nor off the Monitor FPS Sync.","parameters":{"Command Name":"FPSシンク","Default Value":"true"}},
{"name":"TinyMysteryDungeon","status":true,"description":"小さな不思議の迷宮専用プラグイン","parameters":{}},
{"name":"tradeshop","status":true,"description":"メダルや貝殻など、特定のアイテムをお金の代わりに使えるショップを作成することができます","parameters":{"tradeShopSwitchId":"20","tradeItemId":"6","tradeItemTanni":"本"}},
{"name":"scrollText","status":true,"description":"","parameters":{}}
];
