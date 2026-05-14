// DECONSTRUCT GAME — each segment has meaning translations per language
// segments[].meanings: { en, vi, th, zh, ru, lo, km }
// word-level translations: { vi, th, zh, ru, lo, km }

export const DECONSTRUCT_WORDS = [
  // EASY
  {
    id:"unhappy", word:"unhappy", difficulty:"easy",
    translations:{ vi:"không hạnh phúc", th:"ไม่มีความสุข", zh:"不快乐", ru:"несчастный", lo:"ບໍ່ສຸກ", km:"មិនសប្បាយ" },
    hint:{ vi:"UN- làm đảo ngược ý nghĩa từ gốc.", en:"UN- reverses the root word meaning.", th:"UN- ทำให้ตรงข้ามกับคำรากศัพท์", zh:"UN- 使词根意思相反。", ru:"UN- меняет значение корня на противоположное.", lo:"UN- ເຮັດໃຫ້ຄວາມໝາຍກົງກັນຂ້າມ", km:"UN- ផ្ទុយន័យ" },
    segments:[
      { type:"prefix", letters:"un",    meanings:{ en:"not",     vi:"không",      th:"ไม่",       zh:"不",     ru:"не",       lo:"ບໍ່",    km:"មិន" } },
      { type:"root",   letters:"happy", meanings:{ en:"joyful",  vi:"hạnh phúc",  th:"มีความสุข", zh:"快乐",   ru:"радостный",lo:"ສຸກ",   km:"សប្បាយ" } },
    ],
  },
  {
    id:"remake", word:"remake", difficulty:"easy",
    translations:{ vi:"làm lại", th:"ทำใหม่", zh:"重做", ru:"переделать", lo:"ເຮັດໃໝ່", km:"ធ្វើឡើងវិញ" },
    hint:{ vi:"RE- có nghĩa là làm gì đó lại.", en:"RE- means doing something again.", th:"RE- หมายถึงทำสิ่งใดอีกครั้ง", zh:"RE- 意味着再次做某事。", ru:"RE- означает делать что-то снова.", lo:"RE- ໝາຍຄວາມວ່າເຮັດອີກ", km:"RE- មានន័យថាធ្វើម្តងទៀត" },
    segments:[
      { type:"prefix", letters:"re",   meanings:{ en:"again",  vi:"lại",    th:"อีกครั้ง", zh:"再",  ru:"снова",    lo:"ອີກ",  km:"ម្តងទៀត" } },
      { type:"root",   letters:"make", meanings:{ en:"create", vi:"tạo ra", th:"สร้าง",    zh:"创造",ru:"создавать",lo:"ສ້າງ", km:"បង្កើត" } },
    ],
  },
  {
    id:"kindness", word:"kindness", difficulty:"easy",
    translations:{ vi:"lòng tốt", th:"ความกรุณา", zh:"善良", ru:"доброта", lo:"ຄວາມໃຈດີ", km:"ចិត្តល្អ" },
    hint:{ vi:"-NESS biến tính từ thành danh từ.", en:"-NESS turns an adjective into a noun.", th:"-NESS เปลี่ยนคำคุณศัพท์เป็นคำนาม", zh:"-NESS 把形容词变成名词。", ru:"-NESS превращает прилагательное в существительное.", lo:"-NESS ປ່ຽນ adjective ເປັນ noun", km:"-NESS ប្រែ adjective ជា noun" },
    segments:[
      { type:"root",   letters:"kind", meanings:{ en:"caring",   vi:"tốt bụng",   th:"ใจดี",     zh:"善良",   ru:"добрый",      lo:"ໃຈດີ",  km:"ចិត្ត" } },
      { type:"suffix", letters:"ness", meanings:{ en:"state of", vi:"trạng thái", th:"สภาวะของ", zh:"状态",   ru:"состояние",   lo:"ສະພາບ", km:"ស្ថានភាព" } },
    ],
  },
  {
    id:"teacher", word:"teacher", difficulty:"easy",
    translations:{ vi:"giáo viên", th:"ครู", zh:"老师", ru:"учитель", lo:"ຄູ", km:"គ្រូ" },
    hint:{ vi:"-ER có nghĩa là người làm gì đó.", en:"-ER means one who does something.", th:"-ER หมายถึงผู้ที่ทำสิ่งนั้น", zh:"-ER 表示做某事的人。", ru:"-ER означает тот, кто делает.", lo:"-ER ໝາຍຄວາມວ່າຜູ້ທີ່ເຮັດ", km:"-ER មានន័យថាអ្នកធ្វើ" },
    segments:[
      { type:"root",   letters:"teach", meanings:{ en:"instruct", vi:"dạy",   th:"สอน",    zh:"教",   ru:"учить",    lo:"ສອນ",  km:"បង្រៀន" } },
      { type:"suffix", letters:"er",    meanings:{ en:"one who",  vi:"người", th:"ผู้ที่",  zh:"者",   ru:"тот, кто", lo:"ຜູ້",   km:"អ្នក" } },
    ],
  },
  {
    id:"preview", word:"preview", difficulty:"easy",
    translations:{ vi:"xem trước", th:"ตัวอย่าง", zh:"预览", ru:"предварительный просмотр", lo:"ເບິ່ງລ່ວງໜ້າ", km:"ព្រីវ្យូ" },
    hint:{ vi:"PRE- có nghĩa là trước.", en:"PRE- means before.", th:"PRE- หมายถึงก่อน", zh:"PRE- 意思是之前。", ru:"PRE- означает до, заранее.", lo:"PRE- ໝາຍຄວາມວ່າກ່ອນ", km:"PRE- មានន័យថាមុន" },
    segments:[
      { type:"prefix", letters:"pre",  meanings:{ en:"before", vi:"trước", th:"ก่อน",   zh:"前",   ru:"до",      lo:"ກ່ອນ", km:"មុន" } },
      { type:"root",   letters:"view", meanings:{ en:"see",    vi:"xem",   th:"มอง",    zh:"看",   ru:"смотреть",lo:"ເບິ່ງ",km:"មើល" } },
    ],
  },

  // MEDIUM
  {
    id:"biology", word:"biology", difficulty:"medium",
    translations:{ vi:"sinh học", th:"ชีววิทยา", zh:"生物学", ru:"биология", lo:"ຊີວະວິທະຍາ", km:"ជីវវិទ្យា" },
    hint:{ vi:"BIO = sự sống + LOGY = nghiên cứu về.", en:"BIO = life + LOGY = study of.", th:"BIO = ชีวิต + LOGY = การศึกษา", zh:"BIO = 生命 + LOGY = 学科。", ru:"BIO = жизнь + LOGY = наука о.", lo:"BIO = ຊີວິດ + LOGY = ການສຶກສາ", km:"BIO = ជីវិត + LOGY = ការសិក្សា" },
    segments:[
      { type:"root",   letters:"bio", meanings:{ en:"life",     vi:"sự sống",     th:"ชีวิต",       zh:"生命",   ru:"жизнь",      lo:"ຊີວິດ",       km:"ជីវិត" } },
      { type:"root",   letters:"log", meanings:{ en:"study",    vi:"nghiên cứu",  th:"การศึกษา",    zh:"学",     ru:"наука",      lo:"ການສຶກສາ",    km:"ការសិក្សា" } },
      { type:"suffix", letters:"y",   meanings:{ en:"subject",  vi:"môn học",     th:"วิชา",        zh:"学科",   ru:"предмет",    lo:"ວິຊາ",        km:"មុខវិជ្ជា" } },
    ],
  },
  {
    id:"telephone", word:"telephone", difficulty:"medium",
    translations:{ vi:"điện thoại", th:"โทรศัพท์", zh:"电话", ru:"телефон", lo:"ໂທລະສັບ", km:"ទូរស័ព្ទ" },
    hint:{ vi:"TELE = xa + PHONE = âm thanh.", en:"TELE = far + PHONE = sound.", th:"TELE = ไกล + PHONE = เสียง", zh:"TELE = 远 + PHONE = 声音。", ru:"TELE = далеко + PHONE = звук.", lo:"TELE = ໄກ + PHONE = ສຽງ", km:"TELE = ឆ្ងាយ + PHONE = សំឡេង" },
    segments:[
      { type:"prefix", letters:"tele",  meanings:{ en:"far",   vi:"xa",        th:"ไกล",    zh:"远",   ru:"далеко", lo:"ໄກ",    km:"ឆ្ងាយ" } },
      { type:"root",   letters:"phone", meanings:{ en:"sound", vi:"âm thanh",  th:"เสียง",  zh:"声音", ru:"звук",   lo:"ສຽງ",   km:"សំឡេង" } },
    ],
  },
  {
    id:"invisible", word:"invisible", difficulty:"medium",
    translations:{ vi:"vô hình", th:"มองไม่เห็น", zh:"不可见", ru:"невидимый", lo:"ມອງບໍ່ເຫັນ", km:"មើលមិនឃើញ" },
    hint:{ vi:"IN- phủ định + VIS = nhìn + -IBLE = có thể.", en:"IN- (not) + VIS (see) + -IBLE (able to).", th:"IN- (ไม่) + VIS (มอง) + -IBLE (สามารถ)", zh:"IN-(不) + VIS(看) + -IBLE(能)。", ru:"IN-(не) + VIS(видеть) + -IBLE(можно).", lo:"IN- (ບໍ່) + VIS (ເຫັນ) + -IBLE (ສາມາດ)", km:"IN-(មិន) + VIS(មើល) + -IBLE(អាច)" },
    segments:[
      { type:"prefix", letters:"in",   meanings:{ en:"not",    vi:"không",    th:"ไม่",      zh:"不",   ru:"не",       lo:"ບໍ່",  km:"មិន" } },
      { type:"root",   letters:"vis",  meanings:{ en:"see",    vi:"nhìn thấy",th:"มองเห็น",  zh:"看",   ru:"видеть",   lo:"ເຫັນ", km:"មើល" } },
      { type:"suffix", letters:"ible", meanings:{ en:"able to",vi:"có thể",   th:"สามารถ",  zh:"能",   ru:"можно",    lo:"ສາມາດ",km:"អាច" } },
    ],
  },
  {
    id:"transport", word:"transport", difficulty:"medium",
    translations:{ vi:"vận chuyển", th:"ขนส่ง", zh:"运输", ru:"транспорт", lo:"ຂົນສົ່ງ", km:"ដឹកជញ្ជូន" },
    hint:{ vi:"TRANS = qua + PORT = mang.", en:"TRANS = across + PORT = carry.", th:"TRANS = ข้าม + PORT = ถือ", zh:"TRANS = 穿越 + PORT = 携带。", ru:"TRANS = через + PORT = нести.", lo:"TRANS = ຂ້າມ + PORT = ຖື", km:"TRANS = ឆ្ពោះ + PORT = ដឹក" },
    segments:[
      { type:"prefix", letters:"trans", meanings:{ en:"across", vi:"qua, xuyên",th:"ข้าม",   zh:"穿越", ru:"через",    lo:"ຂ້າມ", km:"ឆ្ពោះ" } },
      { type:"root",   letters:"port",  meanings:{ en:"carry",  vi:"mang",      th:"ถือ",    zh:"携带", ru:"нести",    lo:"ຖື",   km:"ដឹក" } },
    ],
  },
  {
    id:"predict", word:"predict", difficulty:"medium",
    translations:{ vi:"dự đoán", th:"ทำนาย", zh:"预测", ru:"предсказывать", lo:"ທຳນາຍ", km:"ព្យាករណ៍" },
    hint:{ vi:"PRE = trước + DICT = nói.", en:"PRE = before + DICT = say.", th:"PRE = ก่อน + DICT = พูด", zh:"PRE = 之前 + DICT = 说。", ru:"PRE = до + DICT = говорить.", lo:"PRE = ກ່ອນ + DICT = ເວົ້າ", km:"PRE = មុន + DICT = និយាយ" },
    segments:[
      { type:"prefix", letters:"pre",  meanings:{ en:"before", vi:"trước", th:"ก่อน", zh:"前",  ru:"до",        lo:"ກ່ອນ", km:"មុន" } },
      { type:"root",   letters:"dict", meanings:{ en:"say",    vi:"nói",   th:"พูด",  zh:"说",  ru:"говорить",  lo:"ເວົ້າ",km:"និយាយ" } },
    ],
  },
  {
    id:"audible", word:"audible", difficulty:"medium",
    translations:{ vi:"nghe được", th:"ได้ยิน", zh:"听得见的", ru:"слышимый", lo:"ໄດ້ຍິນ", km:"ឮបាន" },
    hint:{ vi:"AUD = nghe + -IBLE = có thể.", en:"AUD = hear + -IBLE = able to.", th:"AUD = ได้ยิน + -IBLE = สามารถ", zh:"AUD = 听 + -IBLE = 能。", ru:"AUD = слышать + -IBLE = можно.", lo:"AUD = ໄດ້ຍິນ + -IBLE = ສາມາດ", km:"AUD = ឮ + -IBLE = អាច" },
    segments:[
      { type:"root",   letters:"aud",  meanings:{ en:"hear",    vi:"nghe",   th:"ได้ยิน",  zh:"听",  ru:"слышать",lo:"ໄດ້ຍິນ",km:"ឮ" } },
      { type:"suffix", letters:"ible", meanings:{ en:"able to", vi:"có thể", th:"สามารถ", zh:"能",   ru:"можно",  lo:"ສາມາດ",km:"អាច" } },
    ],
  },
  {
    id:"manuscript", word:"manuscript", difficulty:"medium",
    translations:{ vi:"bản thảo viết tay", th:"ต้นฉบับ", zh:"手稿", ru:"рукопись", lo:"ຕົ້ນສະບັບ", km:"ព្រឹត្តិបត្រ" },
    hint:{ vi:"MANU = tay + SCRIPT = viết.", en:"MANU = hand + SCRIPT = write.", th:"MANU = มือ + SCRIPT = เขียน", zh:"MANU = 手 + SCRIPT = 写。", ru:"MANU = рука + SCRIPT = писать.", lo:"MANU = ມື + SCRIPT = ຂຽນ", km:"MANU = ដៃ + SCRIPT = សរសេរ" },
    segments:[
      { type:"root", letters:"manu",   meanings:{ en:"hand",  vi:"tay",  th:"มือ",   zh:"手",  ru:"рука",    lo:"ມື",  km:"ដៃ" } },
      { type:"root", letters:"script", meanings:{ en:"write", vi:"viết", th:"เขียน", zh:"写",  ru:"писать",  lo:"ຂຽນ", km:"សរសេរ" } },
    ],
  },

  // HARD
  {
    id:"geography", word:"geography", difficulty:"hard",
    translations:{ vi:"địa lý học", th:"ภูมิศาสตร์", zh:"地理学", ru:"география", lo:"ພູມສາດ", km:"ភូមិសាស្ត្រ" },
    hint:{ vi:"GEO = trái đất + GRAPH = mô tả + -Y = môn học.", en:"GEO = earth + GRAPH = write/describe + -Y = field.", th:"GEO = โลก + GRAPH = บรรยาย + -Y = วิชา", zh:"GEO = 地球 + GRAPH = 描述 + -Y = 学科。", ru:"GEO = земля + GRAPH = описать + -Y = предмет.", lo:"GEO = ໂລກ + GRAPH = ອະທິບາຍ + -Y = ວິຊາ", km:"GEO = ផែនដី + GRAPH = ពណ៌នា + -Y = មុខវិជ្ជា" },
    segments:[
      { type:"root",   letters:"geo",   meanings:{ en:"earth",           vi:"trái đất", th:"โลก",     zh:"地球", ru:"земля",   lo:"ໂລກ",    km:"ផែនដី" } },
      { type:"root",   letters:"graph", meanings:{ en:"write / describe", vi:"mô tả",   th:"บรรยาย",  zh:"描述", ru:"описать", lo:"ອະທິບາຍ",km:"ពណ៌នា" } },
      { type:"suffix", letters:"y",     meanings:{ en:"field of",        vi:"lĩnh vực", th:"วิชา",    zh:"学科", ru:"область", lo:"ສາຂາ",   km:"ផ្នែក" } },
    ],
  },
  {
    id:"contradictory", word:"contradictory", difficulty:"hard",
    translations:{ vi:"mâu thuẫn", th:"ขัดแย้ง", zh:"矛盾的", ru:"противоречивый", lo:"ຂັດແຍ້ງ", km:"ផ្ទុយគ្នា" },
    hint:{ vi:"CONTRA = chống lại + DICT = nói + -ORY = tính chất.", en:"CONTRA = against + DICT = say + -ORY = relating to.", th:"CONTRA = ต่อต้าน + DICT = พูด + -ORY = เกี่ยวกับ", zh:"CONTRA = 反对 + DICT = 说 + -ORY = 性质。", ru:"CONTRA = против + DICT = говорить + -ORY = свойство.", lo:"CONTRA = ຕ້ານ + DICT = ເວົ້າ + -ORY = ລັກສະນະ", km:"CONTRA = ប្រឆាំង + DICT = និយាយ + -ORY = លក្ខណៈ" },
    segments:[
      { type:"prefix", letters:"contra", meanings:{ en:"against",     vi:"chống lại",    th:"ต่อต้าน",    zh:"反对", ru:"против",      lo:"ຕ້ານ",      km:"ប្រឆាំង" } },
      { type:"root",   letters:"dict",   meanings:{ en:"say",         vi:"nói",           th:"พูด",        zh:"说",   ru:"говорить",    lo:"ເວົ້າ",     km:"និយាយ" } },
      { type:"suffix", letters:"ory",    meanings:{ en:"relating to", vi:"liên quan đến", th:"เกี่ยวกับ",  zh:"相关", ru:"свойство",    lo:"ກ່ຽວກັບ",  km:"ទាក់ទង" } },
    ],
  },
  {
    id:"autobiography", word:"autobiography", difficulty:"hard",
    translations:{ vi:"tự truyện", th:"อัตชีวประวัติ", zh:"自传", ru:"автобиография", lo:"ຊີວະປະຫວັດຕົນເອງ", km:"ជីវប្រវត្តិខ្លួនឯង" },
    hint:{ vi:"AUTO = tự + BIO = sự sống + GRAPH = viết + -Y.", en:"AUTO = self + BIO = life + GRAPH = write + -Y.", th:"AUTO = ตนเอง + BIO = ชีวิต + GRAPH = เขียน + -Y", zh:"AUTO = 自 + BIO = 生命 + GRAPH = 写 + -Y。", ru:"AUTO = сам + BIO = жизнь + GRAPH = писать + -Y.", lo:"AUTO = ຕົວເອງ + BIO = ຊີວິດ + GRAPH = ຂຽນ + -Y", km:"AUTO = ខ្លួន + BIO = ជីវិត + GRAPH = សរសេរ + -Y" },
    segments:[
      { type:"prefix", letters:"auto",  meanings:{ en:"self",         vi:"tự",         th:"ตนเอง",  zh:"自",   ru:"сам",       lo:"ຕົວເອງ",km:"ខ្លួន" } },
      { type:"root",   letters:"bio",   meanings:{ en:"life",         vi:"cuộc sống",  th:"ชีวิต",  zh:"生命", ru:"жизнь",     lo:"ຊີວິດ",  km:"ជីវិត" } },
      { type:"root",   letters:"graph", meanings:{ en:"write",        vi:"viết",       th:"เขียน",  zh:"写",   ru:"писать",    lo:"ຂຽນ",   km:"សរសេរ" } },
      { type:"suffix", letters:"y",     meanings:{ en:"noun marker",  vi:"danh từ hóa",th:"นาม",    zh:"名词", ru:"существ.",   lo:"ຄຳນາມ", km:"នាម" } },
    ],
  },
  {
    id:"unrecognizable", word:"unrecognizable", difficulty:"hard",
    translations:{ vi:"không thể nhận ra", th:"จำไม่ได้", zh:"无法辨认", ru:"неузнаваемый", lo:"ຮູ້ຈັກບໍ່ໄດ້", km:"ស្គាល់មិនបាន" },
    hint:{ vi:"UN- + RE- + COGN = biết + -IZ + -ABLE.", en:"UN- + RE- + COGN = know + -IZ + -ABLE.", th:"UN- + RE- + COGN = รู้จัก + -IZ + -ABLE", zh:"UN- + RE- + COGN = 知道 + -IZ + -ABLE。", ru:"UN- + RE- + COGN = знать + -IZ + -ABLE.", lo:"UN- + RE- + COGN = ຮູ້ + -IZ + -ABLE", km:"UN- + RE- + COGN = ដឹង + -IZ + -ABLE" },
    segments:[
      { type:"prefix", letters:"un",   meanings:{ en:"not",        vi:"không",       th:"ไม่",      zh:"不",  ru:"не",         lo:"ບໍ່",   km:"មិន" } },
      { type:"prefix", letters:"re",   meanings:{ en:"again",      vi:"lại",         th:"อีกครั้ง", zh:"再",  ru:"снова",      lo:"ອີກ",  km:"ម្តងទៀត" } },
      { type:"root",   letters:"cogn", meanings:{ en:"know",       vi:"biết/nhận ra",th:"รู้จัก",   zh:"知道",ru:"знать",      lo:"ຮູ້",   km:"ដឹង" } },
      { type:"suffix", letters:"iz",   meanings:{ en:"verb maker", vi:"động từ hóa", th:"กริยา",    zh:"动词",ru:"глаголообр.",lo:"ຄຳກິລິຍາ",km:"កិរិយាស័ព្ទ" } },
      { type:"suffix", letters:"able", meanings:{ en:"able to",    vi:"có thể",      th:"สามารถ",   zh:"能",  ru:"можно",      lo:"ສາມາດ",km:"អាច" } },
    ],
  },
  {
    id:"chronological", word:"chronological", difficulty:"hard",
    translations:{ vi:"theo thứ tự thời gian", th:"ตามลำดับเวลา", zh:"按时间顺序", ru:"хронологический", lo:"ຕາມລຳດັບເວລາ", km:"តាមលំដាប់ពេលវេលា" },
    hint:{ vi:"CHRON = thời gian + LOG = trật tự + -ICAL.", en:"CHRON = time + LOG = order/reason + -ICAL.", th:"CHRON = เวลา + LOG = ลำดับ + -ICAL", zh:"CHRON = 时间 + LOG = 顺序 + -ICAL。", ru:"CHRON = время + LOG = порядок + -ICAL.", lo:"CHRON = ເວລາ + LOG = ລຳດັບ + -ICAL", km:"CHRON = ពេលវេលា + LOG = លំដាប់ + -ICAL" },
    segments:[
      { type:"root",   letters:"chron", meanings:{ en:"time",        vi:"thời gian",   th:"เวลา",       zh:"时间", ru:"время",    lo:"ເວລາ",     km:"ពេលវេលា" } },
      { type:"root",   letters:"log",   meanings:{ en:"order/reason",vi:"trật tự",     th:"ลำดับ",       zh:"顺序", ru:"порядок",  lo:"ລຳດັບ",    km:"លំដាប់" } },
      { type:"suffix", letters:"ical",  meanings:{ en:"relating to", vi:"liên quan đến",th:"เกี่ยวกับ",  zh:"相关", ru:"свойство", lo:"ກ່ຽວກັບ",  km:"ទាក់ទង" } },
    ],
  },
  {
    id:"biodiversity", word:"biodiversity", difficulty:"hard",
    translations:{ vi:"đa dạng sinh học", th:"ความหลากหลายทางชีวภาพ", zh:"生物多样性", ru:"биоразнообразие", lo:"ຄວາມຫລາກຫລາຍທາງຊີວະ", km:"ជីវវ័ន្ដភាព" },
    hint:{ vi:"BIO = sự sống + DI = khác + VERS = xoay + -ITY.", en:"BIO = life + DI = different + VERS = turn + -ITY.", th:"BIO = ชีวิต + DI = ต่าง + VERS = หมุน + -ITY", zh:"BIO = 生命 + DI = 不同 + VERS = 转 + -ITY。", ru:"BIO = жизнь + DI = разный + VERS = повернуть + -ITY.", lo:"BIO = ຊີວິດ + DI = ຕ່າງ + VERS = ໝູນ + -ITY", km:"BIO = ជីវិត + DI = ខុស + VERS = វិល + -ITY" },
    segments:[
      { type:"root",   letters:"bio",  meanings:{ en:"life",      vi:"sự sống",    th:"ชีวิต",   zh:"生命", ru:"жизнь",   lo:"ຊີວິດ",km:"ជីវិត" } },
      { type:"prefix", letters:"di",   meanings:{ en:"different", vi:"khác nhau",  th:"แตกต่าง", zh:"不同", ru:"разный",  lo:"ຕ່າງ",km:"ខុស" } },
      { type:"root",   letters:"vers", meanings:{ en:"turn",      vi:"xoay",       th:"หมุน",    zh:"转",   ru:"поворот", lo:"ໝູນ",km:"វិល" } },
      { type:"suffix", letters:"ity",  meanings:{ en:"state of",  vi:"trạng thái", th:"สภาวะ",   zh:"状态", ru:"состояние",lo:"ສະພາບ",km:"ស្ថានភាព" } },
    ],
  },
];
