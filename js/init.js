document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;//横縦に２０pxの蛇の大きさ
const FPS = 15;
const MIN = 5;//蛇本体の長さの初期値、どんどん長くなる

let px = py = SIZE/2;//プレイヤーのx座標とy座標（蛇１０こ分なのでちょうど中心）
let xd = yd = 0;
let snake = [];
let tail = MIN;//りんごを食べた分+1、じぶんにぶつかると戻る
let appleX = appleY = 15;//りんごの座標位置（蛇の右下）
let appleX1 = appleY1 = 5;//りんごの座標位置（蛇の右下）
// addEventListenerは警報機だと思うと良い、今回はキーダウン（押した瞬間だけ1回反応）
