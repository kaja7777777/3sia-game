# 3SIA 實境解謎遊戲系統（獨立版）

同學打開網址就能玩，**不用登入**。你用自己的 Google 帳號登入後台，就能即時編輯題目、劇情、圖片、地圖和風格。

## 目前已架好的版本

| 項目 | 內容 |
|---|---|
| 遊戲網址（給同學） | https://kaja7777777.github.io/3sia-game/ |
| 後台網址（給管理員） | https://kaja7777777.github.io/3sia-game/#admin |
| Firebase 專案 | 3sia-game（專案 ID：`sia-game`，資料庫在台灣 asia-east1） |
| 管理員帳號 | ais3juniormoe@gmail.com |
| 網站原始碼 | https://github.com/kaja7777777/3sia-game |

後台登入會跳出 Google 登入視窗；如果瀏覽器擋住彈出視窗，請允許 `kaja7777777.github.io` 的彈出視窗後再按一次。

下面的「正式架設」步驟已經全部完成，留著是給之後要重新架一套（例如換帳號）時參考。

---

通用說明：
- 遊戲網址：`https://你的帳號.github.io/3sia-game/`
- 後台網址：遊戲網址後面加上 `#admin`，例如 `https://你的帳號.github.io/3sia-game/#admin`

| 檔案 | 用途 |
|---|---|
| `index.html` | 整個網站（玩家畫面＋後台） |
| `config.js` | 填 Firebase 金鑰和管理員 email |
| `firestore.rules` | 資料庫安全規則（貼到 Firebase） |

---

## 先試玩：示範模式（不用任何設定）

直接用電腦瀏覽器打開 `index.html`，網站會自動進入**示範模式**，並載入範例遊戲「消失的伺服器金鑰」。

- 示範模式的資料只存在這台電腦的瀏覽器裡，**不能給同學用**，只適合你先熟悉操作。
- 開兩個分頁：一個打開 `index.html#admin` 改內容，另一個打開 `index.html` 當玩家，就能看到改了會即時同步。
- 範例遊戲的現場遊戲碼和答案（這份說明放在公開的 GitHub 上，正式活動請換成自己的題目和答案）：

| 關卡 | 現場遊戲碼 | 答案 |
|---|---|---|
| 1 凱撒的密信 | 1294 | SECURITY |
| 2 看似加密的字串 | 5807 | AIS3{base64_is_not_encryption} |
| 3 十六進位的密語 | 3361 | HACK |
| 4 真假登入頁 | 7742 | B |

---

## 正式架設（第一次大約 20 分鐘）

### 步驟 1：建立 Firebase 專案
1. 用你的 Google 帳號打開 <https://console.firebase.google.com>，按「建立專案」，名稱例如 `3sia-game`。Google Analytics 可以關掉。
2. 選免費的 **Spark 方案**就好，不用綁信用卡。

### 步驟 2：開啟 Firestore 資料庫
1. 左側選單「建構 → Firestore Database」→「建立資料庫」。
2. 位置選 `asia-east1（台灣）`，模式選「正式版模式」。
3. 建好後切到「規則」分頁，把 `firestore.rules` 的內容整份貼上，**把 `your-email@gmail.com` 改成你的 Gmail**，再按「發布」。

### 步驟 3：開啟 Google 登入（只有後台會用到）
1. 左側選單「建構 → Authentication」→「開始使用」。
2. 「登入方式」分頁 → 選 **Google** → 啟用 → 填支援 email → 儲存。

### 步驟 4：取得網站設定，填進 config.js
1. 點左上角齒輪「專案設定」→ 往下找「你的應用程式」→ 點 `</>`（網頁）圖示，註冊一個網頁應用程式（不用勾 Hosting）。
2. 畫面會出現一段 `firebaseConfig = { apiKey: ..., ... }`，把裡面的 6 個值複製到 `config.js` 對應的位置。
3. 把 `config.js` 的 `admins` 改成你的 Gmail，要和規則裡的名單一致。

> `apiKey` 不是密碼，放在公開網站上是正常的。真正保護資料的是步驟 2 的安全規則。

### 步驟 5：把網站放上 GitHub Pages
1. 到 <https://github.com> 註冊或登入，按右上「＋ → New repository」，名稱填 `3sia-game`，設成 **Public**。
2. 進到 repository，按「Add file → Upload files」，把 `index.html` 和 `config.js` 拖進去，按「Commit changes」。
3. 到「Settings → Pages」，Source 選「Deploy from a branch」，Branch 選 `main`、資料夾選 `/ (root)`，儲存。
4. 等 1～2 分鐘，網址會是 `https://你的帳號.github.io/3sia-game/`。

### 步驟 6：允許 GitHub 網址登入後台
1. 回到 Firebase「Authentication → 設定 → 已授權網域」。
2. 按「新增網域」，填 `你的帳號.github.io`（不用加 https 和路徑）。

### 步驟 7：開始建立遊戲
1. 打開 `https://你的帳號.github.io/3sia-game/#admin`，按「用 Google 登入」。
2. 按「載入範例遊戲」先看看，或按「＋ 新遊戲」從頭做。
3. 編輯完後按「設為開放中」，同學打開遊戲網址就會看到這個遊戲。

---

## 每次辦活動的流程

1. 後台「＋ 新遊戲」，或把上次的遊戲「複製」一份再修改。
2. **基本內容**：遊戲名稱、說明、開頭劇情、結尾劇情、破關頁文字。
3. **題目**：3～15 題。每題填劇情、題目、提示、現場遊戲碼（4 位數）、解題碼（答案），再上傳圖片。
4. **地圖**：上傳校園平面圖，選一題，點地圖放上圖釘。
5. **風格**：輸入指令改外觀，例如：
   ```
   主題 駭客
   主色 #ff6b35
   字體 Noto Serif TC
   圓角 4
   ```
   輸入 `說明` 可以看全部指令。可用主題有：保險庫、駭客、偵探、深海、霓虹、校園。
6. **QR 碼與連結**：把每關的現場卡截圖印出，貼在各個地點。
7. 按「設為開放中」。
8. 活動開始前按「重置所有玩家進度」，把測試時留下的紀錄清掉。

## 小提醒

- **防作弊**：玩家手機只會拿到答案的雜湊值，明文答案只有管理員讀得到。
- **隊伍進度**存在各自手機的瀏覽器裡，換手機或清除瀏覽紀錄會重來。
- **圖片**會自動壓縮成 1400px 以內的 JPG，存在 Firestore 裡，所以不需要付費的 Storage 功能。
- **免費額度**：Firestore 每天 5 萬次讀取、2 萬次寫入、總共 1 GiB 儲存。一般營隊 40～100 人遠遠用不完。
- 要新增管理員：`config.js` 的 `admins` 和 Firebase 規則裡的名單都要加。改完規則記得按「發布」，改完 `config.js` 要重新上傳到 GitHub。
- 想換題目內容**不需要**重新上傳網站，直接在後台改就好。只有 `config.js` 或 `index.html` 有變動時才要重新上傳。
