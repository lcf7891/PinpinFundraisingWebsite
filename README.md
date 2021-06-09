# 21 天用 Bootstrap 5 做募資網站版型

## [Demo連結](https://lcf7891.github.io/PinpinFundraisingWebsite/)

## gulp deploy -- TypeError: Cannot read property '0' of null

  解決方案：
  
  gulp-gh-pages 這個套件造成問題，依照指令進入 node_modules/gulp-gh-pages 安裝指定版本的 gift 即可解決。
  
  ```====
  cd node_modules/gulp-gh-pages/ → 進入指定資料夾
  npm install --save gift@0.10.2 → 安裝指定版本
  cd ../../ → 移動返回到根目錄
  gulp deploy → 重新執行 deploy
