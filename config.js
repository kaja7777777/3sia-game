// 3SIA 實境解謎遊戲：設定檔
// ------------------------------------------------------------
// firebase：Firebase 專案「3sia-game」（專案 ID：sia-game）的網頁應用程式設定
// admins：可以進後台編輯的 Google 帳號（要和 Firebase 安全規則裡的名單一致）
// 想先離線試玩：把 apiKey 改成空字串 ""，網站會進入「示範模式」
// ------------------------------------------------------------
window.GAME_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAhyeMEdvCJN7eLcGX-f4qiU3P16MKfByU",
    authDomain: "sia-game.firebaseapp.com",
    projectId: "sia-game",
    storageBucket: "sia-game.firebasestorage.app",
    messagingSenderId: "86484446492",
    appId: "1:86484446492:web:cf5f23db262eae4f7e9ed9"
  },
  admins: [
    "ais3juniormoe@gmail.com"
  ]
};
