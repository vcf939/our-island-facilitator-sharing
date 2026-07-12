# GitHub Pages 上線說明

## 建議 Repo 名稱

`our-island-workshop`

或中文也可以，但英文 repo 名稱較方便分享網址。

## 建議設定方式

1. 在 GitHub 建立新 repository。
2. 將本專案中的 `docs/` 資料夾與 `我們的島_教師推廣啟動包/` 一起放進 repo。
3. 到 repository 的 `Settings`。
4. 找到 `Pages`。
5. Source 選擇 `Deploy from a branch`。
6. Branch 選擇 `main`，資料夾選擇 `/docs`。
7. 儲存後等待 GitHub 產生網址。

## 公開聲明

目前網站定位為引導師個人共學分享，不是至善基金會官方網站，也不是官方授權教材頁。網站公開內容只揭露：

1. 相關內容引用自至善基金會《我們的島》桌遊素材。
2. 引導師 Vincent 個人簡介。

## 回饋表連結

目前首頁中的回饋按鈕先連到 `feedback.html`，裡面已整理成可建立 Google Form 的回饋題目架構。

正式 Google Form 建好後，請把 `docs/index.html` 中這段：

```html
<a class="button" href="feedback.html">查看回饋表</a>
```

改成正式表單網址，例如：

```html
<a class="button" href="https://forms.gle/你的表單">填寫推廣回饋</a>
```

## 技能包更新方式

1. 更新根目錄的 `我們的島_教師推廣啟動包/`。
2. 將最新版 `.md` 複製到 `docs/downloads/skill-pack/`。
3. 重新製作 `docs/downloads/我們的島_教師推廣啟動包_v新版.zip`。
4. 更新首頁下載連結與版本號。

## 建議後續

- 建立 Google Form 收集推廣回饋。
- 每月整理 1-3 則推廣案例放到 `docs/cases/`。
- 每季更新一次技能包版本。
