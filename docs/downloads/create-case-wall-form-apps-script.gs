function createOurIslandCaseWallForm() {
  const form = FormApp.create('《我們的島》推廣案例牆投稿表');
  form.setDescription(
    '本表單為引導師 Vincent 個人共學整理使用，用於蒐集老師推廣《我們的島》反歧視桌遊後，願意整理成案例牆的現場故事。' +
    '本表單不是至善基金會官方表單，也不是官方授權教材頁的一部分。請避免填寫可辨識學生個資。'
  );
  form.setConfirmationMessage('謝謝您的案例分享。整理成案例牆前，建議會再確認匿名或具名方式，以及是否需要刪修可辨識資訊。');
  form.setProgressBar(true);

  form.addSectionHeaderItem().setTitle('區塊 1：投稿者與公開方式');
  form.addTextItem().setTitle('投稿者姓名或暱稱').setRequired(true);
  form.addTextItem().setTitle('服務單位或場域，選填');
  form.addTextItem().setTitle('聯絡方式，選填');
  form.addMultipleChoiceItem()
    .setTitle('案例牆公開方式')
    .setChoiceValues(['願意具名公開', '願意匿名公開', '先提供給 Vincent 整理，公開前再確認', '暫不公開，只作為內部共學參考'])
    .setRequired(true);
  form.addParagraphTextItem().setTitle('公開時希望保留或隱去哪些資訊？');

  form.addSectionHeaderItem().setTitle('區塊 2：案例基本資料');
  form.addTextItem().setTitle('案例標題，若還沒想到可先簡寫').setRequired(true);
  form.addCheckboxItem()
    .setTitle('使用場域')
    .setChoiceValues(['國小', '國中', '高中職', '大專', '社福', '社區', '教師共備', '家長活動', '其他'])
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle('參與對象')
    .setChoiceValues(['學生', '教師', '社工/助人工作者', '家長', '社區民眾', '混合對象', '其他'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('活動時間長度')
    .setChoiceValues(['30 分鐘內', '31-60 分鐘', '61-90 分鐘', '91-120 分鐘', '半天', '一天', '其他'])
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle('使用版本')
    .setChoiceValues(['完整體驗', '短版體驗', '議題討論版', '教師共備版', '班級經營版', '其他'])
    .setRequired(true);

  form.addSectionHeaderItem().setTitle('區塊 3：案例故事');
  form.addParagraphTextItem()
    .setTitle('為什麼想在這個場域使用《我們的島》或技能包？')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('你怎麼帶？請簡述流程、使用的工具或調整方式。')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('現場最關鍵的一刻是什麼？可以是一句話、一個反應或一個轉折。')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('過程中遇到什麼卡點、風險或情緒？你怎麼處理？')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('這次經驗讓你學到什麼？')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('如果再帶一次，你會怎麼調整？');

  form.addSectionHeaderItem().setTitle('區塊 4：給下一位老師');
  form.addParagraphTextItem()
    .setTitle('一句話給下一位想推廣的老師')
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle('你希望案例牆呈現哪些重點？')
    .setChoiceValues(['流程設計', '情境處理', '學生反應', '教師提問', '情緒照顧', '風險提醒', '教材調整', '後續行動', '其他']);
  form.addParagraphTextItem()
    .setTitle('其他補充，或希望 Vincent 整理案例時注意的地方');

  Logger.log('案例牆表單編輯網址：' + form.getEditUrl());
  Logger.log('案例牆表單填寫網址：' + form.getPublishedUrl());
}
