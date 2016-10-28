# 目的

練習使用前端框架暨技術完成 SPA 網站並提供文件整合收集服務

## Roadmap

* 於 GitHub上開啟專案並且利用 GitHub的 內建網站功能作測試
* 建立一個 SPA 網站
* 使用 Git Flow 精神
* 與 Firebase整合
* 使用純 JavaScript 開發
* 使用 TypeScript2 提昇 JavaScript 
* 使用 Vue2 框架提昇整體效能 
* 使用 less 取代 csss
* 進階功能，例如 RWD (使用 vue-strap 轉譯 bootstrap without jQuery)



### Step 1 建立環境

1. 於 GitHub上開啟 GitHub webpage repository
2. 於本地端新增一個資料夾
3. clong git， 並且 init git flow
4. npm 初始化
5. 為了未來能接上 Vue 框架，所以先安裝 Vue-Cli webpack套件
6. 執行 `npm run build` 讓目前的系統建置一次，產生dist資料夾
7. 先 commit 目前狀態至 all brach 並且 push到 server端看結果
   ![](https://img42.com/j4sT6)
> Code可以從 git tag 0.0.1 reset 回來 (先 fork 回自己專案下)   



### Step 2 網頁樣板開發

說明：
本SPA採用一般傳統三列式網頁開發：上方導覽列，中間內容列，下方版權列，中間內容列會依照內容的不同才出現左側選單按鈕

1. 使用 VSCode (Visure Studio Code) 開啟專案資料夾
2. 開始寫 Code， Code 都是參考 Semantic-UI 的 CSS做出來的
3. 三個欄位就分成3個 `Vue`檔在 `main.js`中再 import這三個檔案，可參考 `App.vue`的方式
4. 要額外使用 `npm` 安裝 `style-loader`的方式建置
5. 將會用到的 `CSS`檔用 import 的方式 import 於 `main.js` 檔中 
6. 某些需要使用 jQuery的部件，我們就參考 vue-semantic 產生 js 檔代替
7. 變更 `webpack.config.js` 設定檔的內容，讓其他的 `vue`檔也能被轉譯成 `js`檔



