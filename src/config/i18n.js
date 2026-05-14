// ============================================================
// LANGUAGE / i18n CONFIG
// Supported: vi (default), en, th, zh, ru, lo, km
// Add new languages by adding a key to each string below.
// ============================================================

export const LANGUAGES = [
  { code: 'vi', label: 'Tiếng Việt', flag: 'VN' },
  { code: 'en', label: 'English',    flag: 'EN' },
  { code: 'th', label: 'ภาษาไทย',    flag: 'TH' },
  { code: 'zh', label: '中文',        flag: 'CN' },
  { code: 'ru', label: 'Русский',    flag: 'RU' },
  { code: 'lo', label: 'ລາວ',        flag: 'LO' },
  { code: 'km', label: 'ខ្មែរ',       flag: 'KH' },
];

export const DEFAULT_LANG = 'vi';

export const T = {
  // ── Nav ──────────────────────────────────────────────────
  nav_deconstruct: {
    vi: 'Deconstruct', en: 'Deconstruct', th: 'แยกคำ', zh: '拆词', ru: 'Разбор', lo: 'ແຍກຄຳ', km: 'បំបែកពាក្យ',
  },
  nav_study: {
    vi: 'Gốc Từ', en: 'Root Words', th: 'รากศัพท์', zh: '词根', ru: 'Корни', lo: 'ຮາກຄຳ', km: 'ឫសពាក្យ',
  },
  nav_quiz: {
    vi: 'Quiz', en: 'Quiz', th: 'แบบทดสอบ', zh: '测验', ru: 'Тест', lo: 'ຄຳຖາມ', km: 'តេស្ត',
  },
  nav_about: {
    vi: 'About', en: 'About', th: 'เกี่ยวกับ', zh: '关于', ru: 'О нас', lo: 'ກ່ຽວກັບ', km: 'អំពី',
  },

  // ── Deconstruct page ────────────────────────────────────
  dec_title: {
    vi: 'Phân tích từ', en: 'Deconstruct a Word', th: 'แยกวิเคราะห์คำ', zh: '拆解单词',
    ru: 'Разбор слова', lo: 'ວິເຄາະຄຳສັບ', km: 'វិភាគពាក្យ',
  },
  dec_subtitle: {
    vi: 'Kéo hoặc nhấn các khối chữ vào đúng ô Tiền tố / Gốc từ / Hậu tố',
    en: 'Drag or tap the letter blocks into the correct Prefix / Root / Suffix slots',
    th: 'ลากหรือแตะบล็อกตัวอักษรไปยังช่องคำนำหน้า / รากศัพท์ / คำต่อท้าย',
    zh: '将字母块拖放到正确的前缀 / 词根 / 后缀槽中',
    ru: 'Перетащите или нажмите блоки букв в нужные ячейки',
    lo: 'ລາກຫຼືແຕະກ້ອນຕົວອັກສອນໄປໃສ່ຊ່ອງທີ່ຖືກຕ້ອງ',
    km: 'អូស ឬចុចប្លុកអក្សរទៅក្នុងប្រអប់ត្រឹមត្រូវ',
  },
  dec_hint_label: {
    vi: 'Gợi ý', en: 'Hint', th: 'คำใบ้', zh: '提示', ru: 'Подсказка', lo: 'ຄຳໃບ້', km: 'ힹ',
  },
  dec_drop_here: {
    vi: 'Thả vào đây', en: 'Drop here', th: 'วางที่นี่', zh: '拖放到此处',
    ru: 'Бросьте сюда', lo: 'ວາງທີ່ນີ້', km: 'ទម្លាក់ទីនេះ',
  },
  dec_pool_label: {
    vi: 'Khối chữ — kéo hoặc nhấn vào ô bên trên',
    en: 'Letter blocks — drag or tap into a slot above',
    th: 'บล็อกตัวอักษร — ลากหรือแตะไปยังช่องด้านบน',
    zh: '字母块 — 拖动或点击到上方槽',
    ru: 'Блоки букв — перетащите или нажмите в ячейку выше',
    lo: 'ກ້ອນຕົວອັກສອນ — ລາກຫຼືແຕະໄປໃສ່ຊ່ອງຂ້າງເທິງ',
    km: 'ប្លុកអក្សរ — អូស ឬចុចទៅប្រអប់ខាងលើ',
  },
  dec_pool_done: {
    vi: 'Tất cả khối đã được đặt', en: 'All blocks placed',
    th: 'วางบล็อกทั้งหมดแล้ว', zh: '所有块已放置',
    ru: 'Все блоки расставлены', lo: 'ວາງທຸກກ້ອນແລ້ວ', km: 'ប្លុកទាំងអស់ត្រូវបានដាក់',
  },
  dec_result_correct: {
    vi: 'Chính xác! Bạn đã phân tích đúng cấu trúc từ.',
    en: 'Correct! You have analysed the word structure perfectly.',
    th: 'ถูกต้อง! คุณวิเคราะห์โครงสร้างคำได้อย่างสมบูรณ์',
    zh: '正确！你完美地分析了单词结构。',
    ru: 'Правильно! Вы отлично разобрали структуру слова.',
    lo: 'ຖືກຕ້ອງ! ທ່ານໄດ້ວິເຄາະໂຄງສ້າງຄຳສຳເລັດ.',
    km: 'ត្រឹមត្រូវ! អ្នកបានវិភាគរចនាសម្ព័ន្ធពាក្យបានត្រឹមត្រូវ។',
  },
  dec_result_wrong: {
    vi: 'Chưa đúng. Thử lại hoặc nhấn "Xem đáp án".',
    en: 'Not quite. Try again or tap "Reveal answer".',
    th: 'ยังไม่ถูก ลองอีกครั้งหรือแตะ "เฉลย"',
    zh: '不太对。再试一次或点击"显示答案"。',
    ru: 'Не совсем. Попробуйте ещё или нажмите «Ответ».',
    lo: 'ຍັງບໍ່ຖືກ. ລອງໃໝ່ ຫຼືກົດ "ສະແດງຄຳຕອບ".',
    km: 'មិនទាន់ត្រូវ។ សាកល្បងម្តងទៀត ឬចុច "បង្ហាញចម្លើយ"។',
  },
  dec_btn_check: {
    vi: 'Kiểm tra', en: 'Check', th: 'ตรวจสอบ', zh: '检查', ru: 'Проверить', lo: 'ກວດສອບ', km: 'ពិនិត្យ',
  },
  dec_btn_reveal: {
    vi: 'Xem đáp án', en: 'Reveal answer', th: 'เฉลย', zh: '显示答案', ru: 'Ответ', lo: 'ສະແດງຄຳຕອບ', km: 'បង្ហាញចម្លើយ',
  },
  dec_btn_reset: {
    vi: 'Làm lại', en: 'Reset', th: 'ลองใหม่', zh: '重置', ru: 'Сбросить', lo: 'ເຮັດໃໝ່', km: 'កំណត់ឡើងវិញ',
  },
  dec_btn_next: {
    vi: 'Từ tiếp theo', en: 'Next word', th: 'คำถัดไป', zh: '下一个词', ru: 'Следующее', lo: 'ຄຳຕໍ່ໄປ', km: 'ពាក្យបន្ទាប់',
  },
  dec_difficulty_all:    { vi: 'Tất cả', en: 'All',    th: 'ทั้งหมด', zh: '全部',   ru: 'Все',     lo: 'ທັງໝົດ', km: 'ទាំងអស់' },
  dec_difficulty_easy:   { vi: 'Dễ',     en: 'Easy',   th: 'ง่าย',    zh: '简单',   ru: 'Лёгкий',  lo: 'ງ່າຍ',   km: 'ងាយ'    },
  dec_difficulty_medium: { vi: 'Trung bình', en: 'Medium', th: 'ปานกลาง', zh: '中等', ru: 'Средний', lo: 'ກາງ',  km: 'មធ្យម'  },
  dec_difficulty_hard:   { vi: 'Khó',    en: 'Hard',   th: 'ยาก',     zh: '困难',   ru: 'Сложный', lo: 'ຍາກ',   km: 'លំបាក'  },

  // ── Segment type labels ──────────────────────────────────
  seg_prefix: {
    vi: 'Tiền tố', en: 'Prefix', th: 'คำนำหน้า', zh: '前缀', ru: 'Префикс', lo: 'ຄຳນຳໜ້າ', km: 'បុព្វបទ',
  },
  seg_root: {
    vi: 'Gốc từ', en: 'Root', th: 'รากศัพท์', zh: '词根', ru: 'Корень', lo: 'ຮາກຄຳ', km: 'ឫស',
  },
  seg_suffix: {
    vi: 'Hậu tố', en: 'Suffix', th: 'คำต่อท้าย', zh: '后缀', ru: 'Суффикс', lo: 'ຄຳຕໍ່ທ້າຍ', km: 'បច្ច័យ',
  },
  seg_connector: {
    vi: 'Liên kết', en: 'Connector', th: 'ตัวเชื่อม', zh: '连接词', ru: 'Связка', lo: 'ຕົວເຊື່ອມ', km: 'តភ្ជាប់',
  },

  // ── Study page ───────────────────────────────────────────
  study_title: {
    vi: 'Học Gốc Từ', en: 'Root Words', th: 'รากศัพท์', zh: '学习词根', ru: 'Корни слов', lo: 'ຮຽນຮາກຄຳ', km: 'រៀនឫសពាក្យ',
  },
  study_subtitle: {
    vi: 'gốc từ Latin và Hy Lạp — hiểu gốc, biết ngàn từ',
    en: 'Latin and Greek roots — know the root, know a thousand words',
    th: 'รากศัพท์ภาษาละตินและกรีก — รู้รากศัพท์ รู้พันคำ',
    zh: '拉丁语和希腊语词根 — 知其根，通其词',
    ru: 'Корни латинского и греческого — знай корень, знай тысячи слов',
    lo: 'ຮາກຄຳພາສາລາຕິນ ແລະ ກເຣັກ — ຮູ້ຮາກ ຮູ້ພັນຄຳ',
    km: 'ឫសពាក្យឡាទីន និងក្រិច — ដឹងឫស ដឹងពាក្យរាប់ពាន់',
  },
  study_search_placeholder: {
    vi: 'Tìm gốc từ, nghĩa tiếng Anh hoặc dịch...',
    en: 'Search roots, meanings or translations...',
    th: 'ค้นหารากศัพท์ ความหมาย หรือคำแปล...',
    zh: '搜索词根、含义或翻译...',
    ru: 'Поиск корней, значений или переводов...',
    lo: 'ຄົ້ນຫາຮາກຄຳ, ຄວາມໝາຍ ຫຼື ຄຳແປ...',
    km: 'ស្វែងរកឫស ន័យ ឬការបកប្រែ...',
  },
  study_no_results: {
    vi: 'Không tìm thấy gốc từ nào.', en: 'No root words found.',
    th: 'ไม่พบรากศัพท์', zh: '未找到词根。', ru: 'Корни не найдены.',
    lo: 'ບໍ່ພົບຮາກຄຳ.', km: 'រកមិនឃើញឫសពាក្យ។',
  },
  study_examples: {
    vi: 'Ví dụ', en: 'Examples', th: 'ตัวอย่าง', zh: '示例', ru: 'Примеры', lo: 'ຕົວຢ່າງ', km: 'ឧទាហរណ៍',
  },
  study_origin: {
    vi: 'Nguồn gốc', en: 'Origin', th: 'ที่มา', zh: '起源', ru: 'Происхождение', lo: 'ຕົ້ນກຳເນີດ', km: 'ប្រភព',
  },
  study_meaning_en: {
    vi: 'Nghĩa (EN)', en: 'Meaning', th: 'ความหมาย (EN)', zh: '英文含义', ru: 'Значение (EN)', lo: 'ຄວາມໝາຍ (EN)', km: 'ន័យ (EN)',
  },
  study_meaning_native: {
    vi: 'Tiếng Việt', en: 'Translation', th: 'ภาษาไทย', zh: '中文', ru: 'Перевод', lo: 'ພາສາລາວ', km: 'ភាសាខ្មែរ',
  },
  study_stats_roots:    { vi: 'Gốc từ',        en: 'Root words',  th: 'รากศัพท์', zh: '词根',   ru: 'Корней',     lo: 'ຮາກຄຳ',   km: 'ឫសពាក្យ'     },
  study_stats_examples: { vi: 'Từ vựng ví dụ', en: 'Example words', th: 'คำตัวอย่าง', zh: '示例词', ru: 'Примеров', lo: 'ຄຳຕົວຢ່າງ', km: 'ពាក្យគំរូ' },
  study_stats_origins:  { vi: 'Ngôn ngữ gốc',  en: 'Source languages', th: 'ภาษาต้นทาง', zh: '起源语言', ru: 'Источников', lo: 'ພາສາຕົ້ນກຳເນີດ', km: 'ភាសាដើម' },
  study_close:          { vi: 'Đóng', en: 'Close', th: 'ปิด', zh: '关闭', ru: 'Закрыть', lo: 'ປິດ', km: 'បិទ' },

  // ── Quiz page ─────────────────────────────────────────────
  quiz_title: {
    vi: 'Trắc Nghiệm', en: 'Multiple Choice Quiz', th: 'แบบทดสอบ', zh: '多项选择测验',
    ru: 'Тест с выбором', lo: 'ທົດສອບຫຼາຍທາງເລືອກ', km: 'ប្រលងជ្រើសរើស',
  },
  quiz_subtitle: {
    vi: 'Chọn nghĩa đúng của tiền tố / hậu tố',
    en: 'Choose the correct meaning of the prefix / suffix',
    th: 'เลือกความหมายที่ถูกต้องของคำนำหน้า / คำต่อท้าย',
    zh: '选择前缀/后缀的正确含义',
    ru: 'Выберите правильное значение префикса/суффикса',
    lo: 'ເລືອກຄວາມໝາຍທີ່ຖືກຕ້ອງຂອງຄຳນຳໜ້າ / ຄຳຕໍ່ທ້າຍ',
    km: 'ជ្រើសរើសន័យត្រឹមត្រូវនៃបុព្វបទ / បច្ច័យ',
  },
  quiz_question_label: {
    vi: 'Nghĩa của', en: 'What does', th: 'ความหมายของ', zh: '的含义', ru: 'Что означает', lo: 'ຄວາມໝາຍຂອງ', km: 'ន័យនៃ',
  },
  quiz_question_suffix: {
    vi: 'là gì?', en: 'mean?', th: 'คืออะไร?', zh: '是什么？', ru: '?', lo: 'ແມ່ນຫຍັງ?', km: 'គឺជាអ្វី?',
  },
  quiz_correct: {
    vi: 'Chính xác!', en: 'Correct!', th: 'ถูกต้อง!', zh: '正确！', ru: 'Правильно!', lo: 'ຖືກຕ້ອງ!', km: 'ត្រឹមត្រូវ!',
  },
  quiz_wrong: {
    vi: 'Sai rồi.', en: 'Wrong.', th: 'ผิด', zh: '错误。', ru: 'Неверно.', lo: 'ຜິດ.', km: 'ខុស។',
  },
  quiz_correct_was: {
    vi: 'Đáp án đúng là:', en: 'The correct answer was:', th: 'คำตอบที่ถูกต้องคือ:', zh: '正确答案是：',
    ru: 'Правильный ответ:', lo: 'ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ:', km: 'ចម្លើយត្រូវគឺ:',
  },
  quiz_next: {
    vi: 'Câu tiếp theo', en: 'Next question', th: 'คำถามถัดไป', zh: '下一题', ru: 'Следующий вопрос', lo: 'ຄຳຖາມຕໍ່ໄປ', km: 'សំណួរបន្ទាប់',
  },
  quiz_score: {
    vi: 'Điểm', en: 'Score', th: 'คะแนน', zh: '分数', ru: 'Счёт', lo: 'ຄະແນນ', km: 'ពិន្ទុ',
  },
  quiz_filter_all:    { vi: 'Tất cả',           en: 'All',    th: 'ทั้งหมด', zh: '全部', ru: 'Все',     lo: 'ທັງໝົດ', km: 'ទាំងអស់' },
  quiz_filter_prefix: { vi: 'Tiền tố',           en: 'Prefix', th: 'คำนำหน้า', zh: '前缀', ru: 'Префикс', lo: 'ຄຳນຳໜ້າ', km: 'បុព្វបទ' },
  quiz_filter_suffix: { vi: 'Hậu tố',            en: 'Suffix', th: 'คำต่อท้าย', zh: '后缀', ru: 'Суффикс', lo: 'ຄຳຕໍ່ທ້າຍ', km: 'បច្ច័យ' },
  quiz_summary_title: { vi: 'Kết quả',  en: 'Results', th: 'ผลลัพธ์', zh: '结果', ru: 'Результаты', lo: 'ຜົນລັບ', km: 'លទ្ធផល' },
  quiz_summary_score: { vi: 'đúng',     en: 'correct', th: 'ถูก',     zh: '正确', ru: 'правильных', lo: 'ຖືກ',   km: 'ត្រូវ'  },
  quiz_restart:       { vi: 'Làm lại',  en: 'Restart', th: 'ลองใหม่', zh: '重新开始', ru: 'Заново', lo: 'ເຮັດໃໝ່', km: 'ចាប់ផ្តើមឡើងវិញ' },
  quiz_only_prefix:   { vi: 'Chỉ Tiền tố', en: 'Prefix only', th: 'คำนำหน้าเท่านั้น', zh: '只前缀', ru: 'Только префиксы', lo: 'ຄຳນຳໜ້າເທົ່ານັ້ນ', km: 'បុព្វបទតែប៉ុណ្ណោះ' },
  quiz_only_suffix:   { vi: 'Chỉ Hậu tố',  en: 'Suffix only', th: 'คำต่อท้ายเท่านั้น', zh: '只后缀', ru: 'Только суффиксы', lo: 'ຄຳຕໍ່ທ້າຍເທົ່ານັ້ນ', km: 'បច្ច័យតែប៉ុណ្ណោះ' },
  quiz_examples_label:{ vi: 'Ví dụ trong từ này', en: 'Seen in', th: 'พบในคำ', zh: '示例词', ru: 'Примеры слов', lo: 'ຕົວຢ່າງ', km: 'ឧទាហរណ៍' },
  quiz_mnemonic_label:{ vi: 'Ghi nhớ', en: 'Mnemonic', th: 'วิธีจำ', zh: '记忆技巧', ru: 'Запомнить', lo: 'ວິທີຈຳ', km: 'ល្បិចចាំ' },

  // ── About page ───────────────────────────────────────────
  about_app_title:  { vi: 'Về ứng dụng', en: 'About this app', th: 'เกี่ยวกับแอป', zh: '关于本应用', ru: 'О приложении', lo: 'ກ່ຽວກັບແອັບ', km: 'អំពីកម្មវិធី' },
  about_games:      { vi: 'Game học khác', en: 'Other learning games', th: 'เกมเรียนรู้อื่นๆ', zh: '其他学习游戏', ru: 'Другие игры', lo: 'ເກມຮຽນຮູ້ອື່ນ', km: 'ហ្គេមសិក្សាផ្សេង' },
  about_games_sub:  { vi: 'Các game học tiếng Anh khác bạn có thể thử', en: 'Other English learning games you can try', th: 'เกมเรียนภาษาอังกฤษอื่นๆ', zh: '你可以尝试的其他英语学习游戏', ru: 'Другие игры для изучения английского', lo: 'ເກມຮຽນພາສາອັງກິດອື່ນໆ', km: 'ហ្គេមរៀនភាសាអង់គ្លេសផ្សេងទៀត' },
  about_resources:  { vi: 'Tài liệu học', en: 'Study resources', th: 'แหล่งข้อมูลการเรียน', zh: '学习资源', ru: 'Учебные ресурсы', lo: 'ແຫຼ່ງຂໍ້ມູນ', km: 'ធនធានសិក្សា' },
  about_resources_sub: { vi: 'Tài nguyên học từ vựng được khuyến nghị', en: 'Recommended vocabulary resources', th: 'แหล่งเรียนรู้คำศัพท์ที่แนะนำ', zh: '推荐的词汇学习资源', ru: 'Рекомендуемые ресурсы по словарному запасу', lo: 'ແຫຼ່ງຮຽນຮູ້ຄຳສັບທີ່ແນະນຳ', km: 'ធនធានសព្ទវគ្គដែលណែនាំ' },
};

// Helper: get translation for a key in a given language (fallback to 'en' then 'vi')
export function t(key, lang) {
  const entry = T[key];
  if (!entry) return key;
  return entry[lang] || entry['en'] || entry['vi'] || key;
}
