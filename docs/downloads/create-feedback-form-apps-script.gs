function createOurIslandFeedbackForm() {
  const form = FormApp.create('《我們的島》推廣回饋與案例共學表');
  form.setDescription(
    '本表單為引導師 Vincent 個人共學整理使用，用於蒐集老師推廣《我們的島》反歧視桌遊與使用技能包後的經驗。' +
    '本表單不是至善基金會官方表單，也不是官方授權教材頁的一部分。請避免填寫可辨識學生個資。'
  );
  form.setConfirmationMessage('謝謝您的分享。這份回饋將協助整理下一版技能包與案例共學材料。若您同意公開案例，整理前會再確認匿名或具名方式。');
  form.setProgressBar(true);

  const sheet = SpreadsheetApp.create('《我們的島》推廣回饋與案例共學表 回覆');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  form.addSectionHeaderItem().setTitle('區塊 1：填寫者與場域');
  form.addTextItem().setTitle('填寫者姓名或暱稱').setRequired(true);
  form.addMultipleChoiceItem().setTitle('服務單位或場域類型').setChoiceValues(['國小', '國中', '高中職', '大專', '社福', '社區', '其他']).setRequired(true);
  form.addTextItem().setTitle('縣市或地區');
  form.addCheckboxItem().setTitle('身份').setChoiceValues(['導師', '科任/領域教師', '輔導老師', '行政人員', '社工', '志工', '家長', '公民夥伴', '其他']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('是否願意後續被聯繫').setChoiceValues(['願意', '暫不', '只願意匿名分享']).setRequired(true);
  form.addTextItem().setTitle('聯絡方式，選填');

  form.addSectionHeaderItem().setTitle('區塊 2：這次如何使用');
  form.addDateItem().setTitle('使用日期');
  form.addMultipleChoiceItem().setTitle('活動長度').setChoiceValues(['30 分鐘內', '31-60 分鐘', '61-90 分鐘', '91-120 分鐘', '半天', '一天', '其他']).setRequired(true);
  form.addCheckboxItem().setTitle('參與對象與年齡層').setChoiceValues(['國小低年級', '國小中高年級', '國中', '高中職', '大專', '教師', '社工/助人工作者', '家長', '社區民眾', '其他']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('參與人數').setChoiceValues(['10 人以下', '11-20 人', '21-30 人', '31-40 人', '41 人以上']).setRequired(true);
  form.addCheckboxItem().setTitle('使用版本').setChoiceValues(['完整體驗', '短版體驗', '議題討論版', '教師共備版', '班級經營版', '其他']).setRequired(true);
  form.addCheckboxItem().setTitle('使用了哪些技能包').setChoiceValues(['三種推廣版本', '一頁式教學設計單', '開場與安全聲明話術', '敏感情境回應卡', 'ORID 反思題庫', '第一步承諾卡', '校園歧視情境分類清單', '師長版情境卡', '技能包使用路徑', '歧視事件情緒地圖', '事件後副作用與修復檢核', '其他']);
  form.addCheckboxItem().setTitle('這次活動目標').setChoiceValues(['反歧視理解', '霸凌預防', '班級經營', '生命教育', '公民教育', '輔導活動', '教師共備', '社工/社區倡議', '其他']).setRequired(true);

  form.addSectionHeaderItem().setTitle('區塊 3：現場發生了什麼');
  form.addParagraphTextItem().setTitle('最有反應的一刻是什麼？').setRequired(true);
  form.addParagraphTextItem().setTitle('有沒有一句讓你印象深刻的學生/參與者發言？');
  form.addCheckboxItem().setTitle('參與者比較容易進入的是哪一段？').setChoiceValues(['角色', '線索', '結局', '沉澱提問', '校園情境討論', '行動承諾', '其他']);
  form.addCheckboxItem().setTitle('現場出現哪些情緒？').setChoiceValues(['好奇', '興奮', '尷尬', '防衛', '沉默', '憤怒', '難過', '理解', '放心', '困惑', '其他']);
  form.addParagraphTextItem().setTitle('你如何回應這些情緒或衝突？');

  form.addSectionHeaderItem().setTitle('區塊 4：卡點與風險');
  form.addCheckboxItem().setTitle('這次最大的困難是什麼？').setChoiceValues(['時間不足', '規則不熟', '班級氣氛', '敏感議題', '學生衝突', '師長觀點', '行政支持不足', '資源不足', '其他']).setRequired(true);
  form.addParagraphTextItem().setTitle('是否出現歧視、嘲笑、貼標籤或霸凌相關片段？你怎麼處理？');
  form.addParagraphTextItem().setTitle('是否有參與者感到受傷、沉默、退出或過度激動？後續如何照顧？');
  form.addParagraphTextItem().setTitle('如果再帶一次，你會提前做什麼安全設計？');

  form.addSectionHeaderItem().setTitle('區塊 5：技能包使用回饋');
  form.addParagraphTextItem().setTitle('哪些工具最有幫助？為什麼？').setRequired(true);
  form.addParagraphTextItem().setTitle('哪些工具不夠清楚或不容易使用？');
  form.addCheckboxItem().setTitle('你希望下一版增加什麼？').setChoiceValues(['更多校園情境', '不同年段版本', '家長溝通版本', '行政說明版本', '短版流程', '更多師長情境', '更多修復對話範例', '其他']);
  form.addScaleItem().setTitle('這份技能包是否提升你推廣的意願？').setBounds(1, 5).setLabels('還沒有', '很有幫助').setRequired(true);
  form.addScaleItem().setTitle('這份技能包是否提升你實際帶領的信心？').setBounds(1, 5).setLabels('還沒有', '很有幫助').setRequired(true);

  form.addSectionHeaderItem().setTitle('區塊 6：案例分享同意');
  form.addMultipleChoiceItem().setTitle('是否願意將你的經驗整理成案例牆？').setChoiceValues(['願意具名', '願意匿名', '暫不公開']).setRequired(true);
  form.addParagraphTextItem().setTitle('若公開，請寫下你希望保留或隱去的資訊');
  form.addParagraphTextItem().setTitle('一句話給下一位想推廣的老師');
  form.addCheckboxItem().setTitle('下一步你想做什麼？').setChoiceValues(['再帶一次', '找同伴共備', '改成班級課程', '邀請社工/輔導合作', '和行政討論推廣', '先暫停整理', '其他']);

  Logger.log('表單編輯網址：' + form.getEditUrl());
  Logger.log('表單填寫網址：' + form.getPublishedUrl());
  Logger.log('回覆試算表網址：' + sheet.getUrl());
}
