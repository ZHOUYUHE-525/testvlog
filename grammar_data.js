// grammar_data.js
const GRAMMAR_DB = [
    {
"id": "shi_sentence",
"title": {
"cn": "“是”字句",
"en": "The 'Shi' Sentence",
"ru": "Предложение с глаголом-связкой «是»"
},
"level": "HSK 1",
"category_id": "cat_special",
"keywords": "shi, 是, be, am, is, are",
"short_desc": {
"cn": "用于等同两个事物，或说明身份、职业和国籍。",
"en": "Used to equate two things or indicate identity, profession, and nationality.",
"ru": "Используется для отождествления двух предметов или указания личности, профессии и гражданства."
},
"details": {
"structure": {
    "cn": "A + 是 + B",
    "en": "A + shì + B",
    "ru": "A + 是 + B"
},
"rules": [
{
"cn": "表示等同关系（A = B）：用于介绍姓名或确认事物。",
"ru": "Выражает эквивалентность (A = B): используется для представления имен или подтверждения предметов.",
"en": "Expresses equivalence (A = B): used to introduce names or confirm things."
},
{
"cn": "表示分类关系：说明 A 属于 B 这种类别（职业、国籍等）。",
"ru": "Выражает классификацию: указывает на то, что А принадлежит к категории В (профессия, национальность и т.д.).",
"en": "Expresses classification: indicates that A belongs to category B (profession, nationality, etc.)."
},
{
"cn": "否定形式：在“是”之前加上“不”。注意拼音变调为“bú shì”。",
"ru": "Отрицательная форма: добавьте «不» перед «是». Обратите внимание на изменение тона: «bú shì».",
"en": "Negative form: add '不' before '是'. Note the tone change to 'bú shì'."
},
{
"cn": "字源小知识：上面是“日”（太阳），下面是“正”（正确/正）。朝着太阳的方向走，代表“正确”、“是”。",
"en": "Etymology: The top is '日' (sun) and the bottom is '正' (correct/upright). Walking towards the sun represents 'correctness'.",
"ru": "Этимология: верхняя часть — «日» (солнце), нижняя — «正» (правильный). Идти по направлению к солнцу означает «правильность»."
},
],
"mistakes": {
"w": "我老师。 / 我不老师。",
"r": "我是老师。 / 我不是老师。",
"reason": {
"cn": "汉语中连接两个名词通常不能省略“是”。",
"ru": "В китайском языке нельзя опускать связку «是» между двумя существительными.",
"en": "In Chinese, the linking word '是' is usually not omitted between two nouns.",
}
},
"examples": [
{
"hz": "我是老师。",
"py": "Wǒ shì lǎoshī.",
"en": "I am a teacher.",
"ru": "Я — учитель."
},
{
"hz": "他是中国人。",
"py": "Tā shì Zhōngguó rén.",
"en": "He is Chinese.",
"ru": "Он — китаец."
},
{
"hz": "这是猫。",
"py": "Zhè shì māo.",
"en": "This is a cat.",
"ru": "Это кот."
},
{
"hz": "我不是学生。",
"py": "Wǒ bú shì xuésheng.",
"en": "I am not a student.",
"ru": "Я не студент."
}
],
"img_url": ""
}
},

{
    "id": "particle_de",
    "title": {
        "cn": "结构助词“的”",
        "en": "The Structural Particle 'de'",
        "ru": "Структурная частица «的»"
    },
    "level": "HSK 1",
    "category_id": "cat_word",
    "keywords": "de, 的, possession, quality, word order",
    "short_desc": {
        "cn": "定语和中心语之间的“粘合剂”，表示所属、性质、或动词修饰。",
        "en": "The 'glue' between a modifier and a noun, showing possession, quality, or verbal modification.",
        "ru": "«Клей» между определением и существительным, выражающий принадлежность, качество или действие."
    },
    "details": {
        "structure": {
    "cn": "修饰语 + 的 + 中心语",
    "en": "Modifier + de + Noun",
    "ru": "опред. + 的 + сущ."
},
        "rules": [
            {
                "cn": "表示所属关系 (Possession)：说明“东西是谁的”。",
                "en": "Possession: Indicating who the object belongs to.",
                "ru": "Притяжательность: указывает, кому принадлежит предмет."
            },
            {
                "cn": "表示性质特征 (Qualitative)：说明“东西是什么样的”。",
                "en": "Qualitative: Indicating the characteristics of the object.",
                "ru": "Качественная характеристика: описывает свойства предмета."
            },
            {
                "cn": "表示动作修饰 (Verbal)：说明“动作产生的人或事物”。",
                "en": "Verbal modification: Indicating the person or thing related to an action.",
                "ru": "Отглагольное определение: указывает на человека или предмет, связанных с действием."
            }
        ],
        "notes": {
            "cn": "请务必记住以下细节：<br><b>1. 关于“的”的省略：</b><br>• 亲近的人(妈妈)、所属机构(公司)、名词修饰名词(中国菜)、单音节形容词(好人)——<b>通常不用“的”</b>。<br><b>2. 关于必须带“的”：</b><br>• 带有副词修饰时(非常好的老师)、双音节形容词(漂亮的猫)、动词短语(我买的书)——<b>必须带“的”</b>。",
            "en": "Key details to remember:<br><b>1. Omitting 'de':</b><br>• Close relations (mom), organizations (company), noun-modifiers (Chinese food), monosyllabic adjectives (Good man) — <b>usually no 'de'</b>.<br><b>2. Must use 'de':</b><br>• With adverbs (Very good teacher), disyllabic adjectives (Pretty cat), verb phrases (The book I bought) — <b>'de' is mandatory</b>.",
            "ru": "Важные детали (согласно схеме):<br><b>1. Когда «的» опускается:</b><br>• Близкие люди (мама), организации (компания), существительное-определение (китайская кухня), односложные прилагательные (хороший человек) — <b>обычно без «的»</b>.<br><b>2. Когда «的» обязательно:</b><br>• С наречием степени (очень хороший учитель), двусложные прилагательные (красивая кошка), глагольные фразы (книга, которую я купил) — <b>«的» обязательно</b>."
        },
        "mistakes": {
            "w": "① 好的朋友 (✘) <br>② 非常高水平 (✘) <br>③ 菜我做 (✘)",
            "r": "① 好朋友 (✔) <br>② 非常高的水平 (✔) <br>③ 我做的菜 (✔)",
            "reason": {
                "cn": "① 单音节形容词修饰名词通常不加“的”。<br>② 当形容词前面有“非常/很”时，必须加“的”。<br>③ 汉语语序是‘修饰语+的+中心语’，不能像俄语或英语那样把动作放在名词后。",
                "en": "① Monosyllabic adjectives usually don't take 'de'.<br>② When there's an adverb like 'very', 'de' is mandatory.<br>③ Chinese word order is 'Modifier + 的 + Noun'; you cannot put the action after the noun like in English/Russian.",
                "ru": "① Односложные прилагательные обычно не требуют «的».<br>② Если перед прилагательным стоит наречие (очень), «的» обязательно.<br>③ Порядок слов в китайском: «Определение + 的 + Существительное»; нельзя ставить действие после существительного, как в русском языке."
            }
        },
        "examples": [
            { "hz": "老师的手写字。", "py": "Lǎoshī de shǒuxièzì.", "en": "Teacher's handwriting.", "ru": "Почерк учителя." },
            { "hz": "很高的人。", "py": "Hěn gāo de rén.", "en": "A very tall person.", "ru": "Очень высокий человек." },
            { "hz": "妈妈做的菜。", "py": "Māma zuò de cài.", "en": "The dish my mom cooked.", "ru": "Блюдо, которое приготовила мама." },
            { "hz": "中国菜。", "py": "Zhōngguó cài.", "en": "Chinese food.", "ru": "Китайская кухня." }
        ],
        "img_url": ""
    }
},
{
"id": "question_ma",
"title": {
"cn": "是非疑问句“吗”",
"en": "Yes-No Questions with 'ma'",
"ru": "Общий вопрос с частицей «吗»"
},
"level": "HSK 1",
"category_id": "cat_sent_type",
"keywords": "ma, 吗, question, yes no",
"short_desc": {
"cn": "在陈述句末尾加上“吗”，将其变为一个询问“对不对”的疑问句。",
"en": "Add 'ma' to the end of a statement to turn it into a yes-no question.",
"ru": "Добавьте «吗» в конец повествовательного предложения, чтобы превратить его в общий вопрос."
},
"details": {
"structure": {
    "cn": "陈述句 + 吗？",
    "en": "Statement + ma?",
    "ru": "повеств. предл. + 吗？"
},
"rules": [
{
"cn": "基本逻辑：陈述句的语序完全不变，只需在句末加上“吗”。",
"en": "Basic logic: The word order remains the same; just add 'ma' at the end.",
"ru": "Основная логика: порядок слов остается неизменным, просто добавьте «吗» в конце."
},
{
"cn": "字形结构：左边是“口”（表示提问），右边是“马”（表示读音）。",
"en": "Character structure: Left is '口' (asking), right is '马' (phonetic).",
"ru": "Структура иероглифа: слева — «口» (рот, указывает на вопрос), справа — «马» (лошадь, указывает на чтение)."
},
{
"cn": "读音：语气助词，读轻声。",
"en": "Pronunciation: A modal particle, pronounced in the neutral tone.",
"ru": "Произношение: модальная частица, читается нейтральным тоном."
}
],
"notes": {
"cn": "<b>如何回答“吗”字句：</b><br>• 肯定回答：通常重复谓语动词或使用“是的”、“对”。<br>• 否定回答：使用“不/没有 + 动词”或“不是”、“不对”。<br><br><b>注意：</b>如果句子中已经有了疑问词（如：谁、什么、哪儿），就绝对不能再加“吗”。",
"en": "<b>How to answer:</b><br>• Affirmative: Repeat the verb or use '是的' (Yes) / '对' (Correct).<br>• Negative: Use '不/没有 + Verb' or '不是' / '不对' (No/Incorrect).<br><br><b>Note:</b> If the sentence already contains a question word (who, what, where), do NOT add 'ma'.",
"ru": "<b>Как отвечать:</b><br>• Утвердительно: повторите глагол или используйте «是的» (да) / «对» (верно).<br>• Отрицательно: используйте «不/没有 + глагол» или «不是» / «不对» (нет/неверно).<br><br><b>Важно:</b> если в предложении уже есть вопросительное слово (кто, что, где), «吗» добавлять нельзя."
},
"mistakes": {
"w": "① 你是谁吗？ (✘) <br>② 你喝茶。? (✘)",
"r": "① 你是谁？ (✔) <br>② 你喝茶吗？ (✔)",
"reason": {
"cn": "① “谁”已经是疑问词，不能再加“吗”。<br>② 汉语不能像俄语那样仅靠语调变成疑问句，必须添加“吗”。",
"en": "① '谁' (who) is already a question word; adding 'ma' is redundant.<br>② Unlike English, Chinese cannot form a question solely through intonation; 'ma' is required.",
"ru": "① «谁» (кто) уже является вопросительным словом, добавлять «吗» нельзя.<br>② В китайском языке нельзя превратить предложение в вопрос только за счет интонации (как в русском); необходимо добавить «吗»."
}
},
"examples": [
{
"hz": "你是学生吗？",
"py": "Nǐ shì xuésheng ma?",
"en": "Are you a student?",
"ru": "Ты студент?"
},
{
"hz": "你是Alice吗？",
"py": "Nǐ shì Alice ma?",
"en": "Are you Alice?",
"ru": "Ты Элис?"
},
{
"hz": "你喜欢喝茶吗？",
"py": "Nǐ xǐhuan hē chá ma?",
"en": "Do you like drinking tea?",
"ru": "Тебе нравится пить чай?"
},
{
"hz": "他认识你吗？",
"py": "Tā rènshi nǐ ma?",
"en": "Does he know you?",
"ru": "Он тебя знает?"
}
],
"img_url": ""
}
},


{
    "id": "yǒu_sentence",
    "title": {
        "cn": "“有”字句",
        "en": "The 'yǒu' Sentence (Possession)",
        "ru": "Предложение с глаголом «有» (обладать)"
    },
    "level": "HSK 1",
    "category_id": "cat_special",
    "keywords": "you, 有, have, possess, mei you",
    "short_desc": {
        "cn": "表示人或事物拥有某物。",
        "en": "Indicates that a person or thing possesses something.",
        "ru": "Указывает на то, что человек или предмет чем-то владеет."
    },
    "details": {
        "structure": {
    "cn": "A + 有 + B / A + 没有 + B",
    "en": "A + yǒu + B / A + méiyǒu + B",
    "ru": "A + 有 + B / A + 没有 + B"
},
        "rules": [
            {
                "cn": "基本意义：表示“拥有”，相当于英语的 'to have'。",
                "en": "Basic meaning: Indicates 'possession', equivalent to 'to have' in English.",
                "ru": "Основное значение: выражает «обладание», эквивалентно английскому «to have»."
            },
            {
                "cn": "字源小知识：上面是“手”(ナ)，下面是“肉”(月)。手里拿着肉，表示“拥有”。",
                "en": "Etymology: The top part is 'hand' (ナ) and the bottom is 'meat' (月). Holding meat in hand means 'to possess'.",
                "ru": "Происхождение иероглифа: верхняя часть — «рука» (ナ), нижняя — «мясо» (月). Держать мясо в руке означает «владеть»."
            }
        ],
        "notes": {
            "cn": "<b>1. 否定形式：</b><br>“有”的否定形式是唯一的，必须用“没有”，绝对不能说“不有”。<br><b>2. 疑问形式：</b><br>在句尾加“吗”，例如：“你有钱吗？”",
            "en": "<b>1. Negative Form:</b><br>The only negative form of '有' is '没有' (méiyǒu). You can NEVER say 'bù yǒu'.<br><b>2. Question Form:</b><br>Add 'ma' at the end, e.g., 'Nǐ yǒu qián ma?' (Do you have money?)",
            "ru": "<b>1. Отрицательная форма:</b><br>Единственная форма отрицания для «有» — это «没有» (méiyǒu). НИКОГДА не говорите «bù yǒu».<br><b>2. Вопросительная форма:</b><br>Добавьте «吗» в конце, например: «Nǐ yǒu qián ma?» (У тебя есть деньги?)"
        },
        "mistakes": {
            "w": "我不有猫。 (✘) / 我不有弟弟。 (✘)",
            "r": "我没有猫。 (✔) / 我没有弟弟。 (✔)",
            "reason": {
                "cn": "“有”是汉语中唯一一个只能用“没”来否定的动词。",
                "en": "'有' is the only verb in Chinese that can only be negated with '没' (méi).",
                "ru": "«有» — единственный глагол в китайском языке, который можно отрицать только с помощью «没» (méi)."
            }
        },
        "examples": [
            {
                "hz": "我有姐姐。",
                "py": "Wǒ yǒu jiějie.",
                "en": "I have an older sister.",
                "ru": "У меня есть старшая сестра."
            },
            {
                "hz": "他没有钱。",
                "py": "Tā méiyǒu qián.",
                "en": "He doesn't have money.",
                "ru": "У него нет денег."
            },
            {
                "hz": "你有猫吗？",
                "py": "Nǐ yǒu māo ma?",
                "en": "Do you have a cat?",
                "ru": "У тебя есть кошка?"
            },
            {
                "hz": "我有汉语老师。",
                "py": "Wǒ yǒu Hànyǔ lǎoshī.",
                "en": "I have a Chinese teacher.",
                "ru": "У меня есть учитель китайского языка."
            },
            {
                "hz": "她有一个弟弟和一个妹妹。",
                "py": "Tā yǒu yí ge dìdi hé yí ge mèimei.",
                "en": "She has a younger brother and a younger sister.",
                "ru": "У неё есть младший брат и младшая сестра."
            }
        ],
        "img_url": ""
    }
},
{
"id": "num_yiao",
    "group_tag": "shuci", // 添加这一行
    "group_name": { "cn": "数词", "en": "Numbers", "ru": "Числительные" }, // 添加这一行
    "title": {
"cn": "数字“1”的读音 (yī vs yāo)",
"en": "Pronunciation of '1' (yī vs yāo)",
"ru": "Произношение «1» (yī vs yāo)"
},
"level": "HSK 1",
"category_id": "cat_word",
"keywords": "1, yi, yao, phone number",
"short_desc": {
"cn": "普通计数读yī，编号（电话、房间等）读yāo。",
"en": "Read as 'yī' for counting; read as 'yāo' for serial numbers (phone, room, etc.).",
"ru": "Читается как «yī» при счете; как «yāo» в номерах (телефона, комнаты и т. д.)."
},
"details": {
"rules": [
{
"cn": "普通数字、数学计算、日期、金钱中读 yī。",
"en": "Read as 'yī' in general numbers, math, dates, and money.",
"ru": "Читается как «yī» в обычных числах, математике, датах и деньгах."
},
{
"cn": "为了听得更清楚，电话号码、房间号、公交线路中的“1”读作 yāo。",
"en": "For clarity, '1' is read as 'yāo' in phone numbers, room numbers, and bus lines.",
"ru": "Для ясности «1» читается как «yāo» в номерах телефонов, комнат и маршрутов автобусов."
}
],
"mistakes": {
"w": "我的房间号是一（yī）零一。",
"r": "我的房间号是一（yāo）零一。",
"reason": {
"cn": "房间号属于序列号，1应读作yāo。",
"en": "Room numbers are serial numbers; '1' should be read as 'yāo'.",
"ru": "Номера комнат — это серийные номера; «1» должно читаться как «yāo»."
}
},
"examples": [
{ "hz": "一百一十一。", "py": "Yī bǎi yī shí yī.", "en": "One hundred and eleven.", "ru": "Сто одиннадцать." },
{ "hz": "电话是：138...", "py": "Diànhuà shì: yāo sān bā...", "en": "The phone number is 138...", "ru": "Номер телефона: 138..." },
{ "hz": "九一一房间。", "py": "Jiǔ yāo yāo fángjiān.", "en": "Room 911.", "ru": "Комната 911." }
]
}
},
{
"id": "num_er_liang",
    "group_tag": "shuci", // 添加这一行
    "group_name": { "cn": "数词", "en": "Numbers", "ru": "Числительные" }, // 添加这一行
    "title": {
"cn": "二 vs 两",
"en": "二 (èr) vs 两 (liǎng)",
"ru": "二 (èr) vs 两 (liǎng)"
},
"level": "HSK 1",
"category_id": "cat_word",
"keywords": "er, liang, 2",
"short_desc": {
"cn": "计数、序数用“二”；量词前、度量衡前通常用“两”。",
"en": "Use 'èr' for counting/ranking; use 'liǎng' before measure words.",
"ru": "Используйте «èr» для счета/порядка; «liǎng» перед счетными словами."
},
"details": {
"rules": [
{
"cn": "计数（一、二、三）、序数（第二）、小数、分数、电话号码必须用“二”。",
"en": "Use 'èr' for counting (1, 2, 3), ordinal numbers (2nd), decimals, fractions, and phone numbers.",
"ru": "Используйте «èr» для простого счета, порядковых числительных, дробей и номеров телефонов."
},
{
"cn": "在量词前（个人、个星期）表示数量，通常用“两”。",
"en": "Use 'liǎng' before measure words (people, weeks) to indicate quantity.",
"ru": "Используйте «liǎng» перед счетными словами для указания количества."
},
{
"cn": "在“百、千、万”前，两者皆可，但“千、万”前更常用“两”。",
"en": "Before 100, 1000, 10000, both are okay, but 'liǎng' is more common for 1000/10000.",
"ru": "Перед 100, 1000, 10000 можно оба, но для 1000/10000 чаще используется «liǎng»."
}
],
"mistakes": {
"w": "二个人 / 二个星期。",
"r": "两个人 / 两个星期。",
"reason": {
"cn": "表示数量且后接量词时，必须用“两”。",
"en": "When indicating quantity followed by a measure word, 'liǎng' must be used.",
"ru": "При указании количества перед счетным словом должно использоваться «liǎng»."
}
},
"examples": [
{ "hz": "第二课。", "py": "Dì-èr kè.", "en": "Lesson two.", "ru": "Второй урок." },
{ "hz": "两个朋友。", "py": "Liǎng ge péngyou.", "en": "Two friends.", "ru": "Два друга." },
{ "hz": "两千块钱。", "py": "Liǎng qiān kuài qián.", "en": "Two thousand yuan.", "ru": "Две тысячи юаней." }
]
}
},
{
"id": "num_hundreds",
    "group_tag": "shuci", // 添加这一行
    "group_name": { "cn": "数词", "en": "Numbers", "ru": "Числительные" }, // 添加这一行
    "title": {
"cn": "百位数的读法 (100-999)",
"en": "Reading Hundreds (100-999)",
"ru": "Чтение сотен (100-999)"
},
"level": "HSK 1",
"category_id": "cat_word",
"keywords": "100, hundred, bai, ling",
"short_desc": {
"cn": "满百必须读“一百”；中间有0必须读“零”。",
"en": "Must say 'yī bǎi' (not just 'bǎi'); mid-zeros must be read as 'líng'.",
"ru": "Нужно говорить «yī bǎi»; ноль в середине читается как «líng»."
},
"details": {
"rules": [
{
"cn": "100必须读“一百(yìbǎi)”，不能只说“百”。",
"en": "100 must be read as 'yī bǎi', never just 'bǎi'.",
"ru": "100 должно читаться как «yī bǎi», а не просто «bǎi»."
},
{
"cn": "数字中间有一个或连续两个0，只读一个“零(líng)”。",
"en": "One or more consecutive zeros in the middle are read as one 'líng'.",
"ru": "Один или несколько нулей подряд в середине читаются как один «líng»."
},
{
"cn": "110读作“一百一十”，末尾的“一”不能省。",
"en": "110 is read as 'yī bǎi yī shí'; don't omit the 'yī' in 'yī shí'.",
"ru": "110 читается как «yī bǎi yī shí»; нельзя опускать «yī» перед «shí»."
}
],
"mistakes": {
"w": "二百八 (for 208) / 百五 (for 105)。",
"r": "二百零八 / 一百零五。",
"reason": {
"cn": "中间的零必须读出来，否则会产生歧义。",
"en": "The middle zero must be pronounced, otherwise it's ambiguous.",
"ru": "Ноль в середине должен произноситься, иначе возникает двусмысленность."
}
},
"examples": [
{ "hz": "208：二百零八。", "py": "Èr bǎi líng bā.", "en": "Two hundred and eight.", "ru": "Двести восемь." },
{ "hz": "999：九百九十九。", "py": "Jiǔ bǎi jiǔ shí jiǔ.", "en": "Nine hundred and ninety-nine.", "ru": "Девятьсот девяносто девять." },
{ "hz": "110：一百一十。", "py": "Yī bǎi yī shí.", "en": "One hundred and ten.", "ru": "Сто десять." }
]
}
},
{
"id": "num_thousands",
    "group_tag": "shuci", // 添加这一行
    "group_name": { "cn": "数词", "en": "Numbers", "ru": "Числительные" }, // 添加这一行
    "title": {
"cn": "千位数的读法 (1000-9999)",
"en": "Reading Thousands (1000-9999)",
"ru": "Чтение тысяч (1000-9999)"
},
"level": "HSK 1",
"category_id": "cat_word",
"keywords": "1000, thousand, qian",
"short_desc": {
"cn": "满千必须读“一千”；中间有零规则同百位数。",
"en": "Must say 'yī qiān'; zero rules are the same as hundreds.",
"ru": "Нужно говорить «yī qiān»; правила для нулей такие же, как в сотнях."
},
"details": {

"rules": [
{
"cn": "1000读作“一千(yìqiān)”。",
"en": "1000 is read as 'yī qiān'.",
"ru": "1000 читается как «yī qiān»."
},
{
"cn": "如果中间有0，必须读出“零”。",
"en": "If there is a zero in the middle, 'líng' must be read.",
"ru": "Если в середине есть ноль, нужно читать «líng»."
},
{
"cn": "末尾的零不需要读。",
"en": "Zeros at the very end are not read.",
"ru": "Нули в самом конце не читаются."
}
],
"examples": [
{ "hz": "1005：一千零五。", "py": "Yī qiān líng wǔ.", "en": "One thousand and five.", "ru": "Одна тысяча пять." },
{ "hz": "8000：八千。", "py": "Bā qiān.", "en": "Eight thousand.", "ru": "Восемь тысяч." },
{ "hz": "2400：两千四百。", "py": "Liǎng qiān sì bǎi.", "en": "Two thousand four hundred.", "ru": "Две тысячи четыреста." }
]
}
},
{
"id": "num_wan",
    "group_tag": "shuci", // 添加这一行
    "group_name": { "cn": "数词", "en": "Numbers", "ru": "Числительные" }, // 添加这一行
    "title": {
"cn": "“万”的读法 (10,000)",
"en": "The unit '万' (Wàn - 10,000)",
"ru": "Разряд «万» (Wàn - 10,000)"
},
"level": "HSK 1",
"category_id": "cat_word",
"keywords": "10000, wan, ten thousand",
"short_desc": {
"cn": "汉语计数以“四位”为一级，10,000读作“一万”。",
"en": "Chinese counts in units of four digits; 10,000 is 'yī wàn'.",
"ru": "Китайский счет идет разрядами по 4 цифры; 10,000 — это «yī wàn»."
},
"details": {
"rules": [
{
"cn": "汉语没有“十千”的说法，10,000必须进位读作“一万”。",
"en": "There is no 'ten thousand' in Chinese; it must be 'yī wàn'.",
"ru": "В китайском нет понятия «десять тысяч»; это должно быть «yī wàn»."
},
{
"cn": "逻辑差异：英语/俄语是千进制（10,000 = 10k），汉语是万进制。",
"en": "Logic difference: Western/Russian systems use 3-digit groups (10k); Chinese uses 4-digit groups.",
"ru": "Разница логики: в русском разряды по 3 цифры (10 тысяч); в китайском по 4 цифры."
},
{
"cn": "50,000 读作“五万”。",
"en": "50,000 is 'wǔ wàn'.",
"ru": "50,000 — это «wǔ wàn»."
}
],
"mistakes": {
"w": "十千 / Ten thousand (in Chinese words).",
"r": "一万。",
"reason": {
"cn": "汉语中“千”位满十必须进位到“万”。",
"en": "In Chinese, ten 'thousands' must be converted to one 'wàn'.",
"ru": "В китайском языке десять «тысяч» должны превращаться в одну «wàn»."
}
},
"examples": [
{ "hz": "10,000：一万。", "py": "Yī wàn.", "en": "Ten thousand.", "ru": "Десять тысяч (одна «вань»)." },
{ "hz": "25,000：两万五千。", "py": "Liǎng wàn wǔ qiān.", "en": "Twenty-five thousand.", "ru": "Двадцать пять тысяч." },
{ "hz": "100,000：十万。", "py": "Shí wàn.", "en": "One hundred thousand.", "ru": "Сто тысяч (десять «вань»)." }
]
}
},
{
    "id": "ne_elliptical",
    "group_tag": "ne",
    "group_name": { "cn": "助词“呢”", "en": "Particle 'ne'", "ru": "Частица «呢»" },
    "title": { "cn": "“呢”(1)：省略疑问句", "en": "'ne' (1): Elliptical Questions", "ru": "«呢» (1): Сокращенный вопрос" },
    "level": "HSK 1",
    "category_id": "cat_word",
    "keywords": "ne, 呢, what about",
    "short_desc": {
        "cn": "在已知语境下反问同样的问题，避免重复。",
        "en": "Used to ask the same question back in a known context to avoid repetition.",
        "ru": "Используется для переспроса в известном контексте, чтобы избежать повторов."
    },
    "details": {
        "structure": {
    "cn": "... + 呢？",
    "en": "... + 呢?",
    "ru": "... + 呢？"
},
        "rules": [
            {
                "cn": "当说话人想把刚刚提到的问题回传给对方，或者询问与上文相关的人或事物时使用。",
                "en": "Used when the speaker wants to return the same question to the listener or ask about related persons/things based on the previous context.",
                "ru": "Используется, когда говорящий хочет вернуть тот же вопрос собеседнику или спросить о связанных людях/предметах на основе предыдущего контекста."
            }
        ],
        "examples": [
            {
                "hz": "A：我叫李月，你呢？\nB：我叫大卫。",
                "py": "A: Wǒ jiào Lǐ Yuè, nǐ ne?\nB: Wǒ jiào Dàwèi.",
                "en": "A: My name is Li Yue, and you?\nB: My name is David.",
                "ru": "А: Меня зовут Ли Юэ, а тебя?\nБ: Меня зовут Дэвид."
            },
            {
                "hz": "A：我是学生，你呢？\nB：我是老师。",
                "py": "A: Wǒ shì xuésheng, nǐ ne?\nB: Wǒ shì lǎoshī.",
                "en": "A: I am a student, and you?\nB: I am a teacher.",
                "ru": "А: Я студент, а ты?\nБ: Я учитель."
            },
            {
                "hz": "A：我很好，你呢？\nB：我也很好。",
                "py": "A: Wǒ hěn hǎo, nǐ ne?\nB: Wǒ yě hěn hǎo.",
                "en": "A: I am very well, and you?\nB: I am also very well.",
                "ru": "А: У меня всё хорошо, а у тебя?\nБ: У меня тоже всё хорошо."
            }
        ]
    }
},
    {
        "id": "ne_location",
        "group_tag": "ne",
        "group_name": { "cn": "助词“呢”", "en": "Particle 'ne'", "ru": "Частица «呢»" },
        "title": { "cn": "“呢”(2)：询问处所", "en": "'ne' (2): Asking for Location", "ru": "«呢» (2): Вопрос о местонахождении" },
        "level": "HSK 2",
        "category_id": "cat_word",
        "keywords": "ne, 呢, where is",
        "short_desc": {
            "cn": "单独使用，询问人或物在什么地方。",
            "en": "Used alone to ask where someone or something is.",
            "ru": "Используется самостоятельно, чтобы спросить, где находится человек или предмет."
        },
        "details": {
            "structure": {
    "cn": "名词/代词 + 呢？",
    "en": "Noun/Pron. + ne?",
    "ru": "сущ./мест. + 呢？"
},
            "rules": [
                { "cn": "在没有上下文的情况下，直接问“人/物 + 呢？”，表示“在哪里？”。", "ru": "Без контекста фраза «Кто/Что + 呢?» означает «Где ...?»." }
            ],
            "examples": [
                { "hz": "妈妈呢？", "py": "Māma ne?", "en": "Where is Mom?", "ru": "Где мама?" },
                { "hz": "我的书呢？", "py": "Wǒ de shū ne?", "en": "Where is my book?", "ru": "Где моя книга?" }
            ]
        }
    },
    {
"id": "ne_special_q",
"group_tag": "ne",
"group_name": { "cn": "助词“呢”", "en": "Particle 'ne'", "ru": "Частица «呢»" },
"title": { "cn": "“呢”(3)：特指疑问句末尾（语气委婉）", "en": "'ne' (3): Softer Tone in Special Questions", "ru": "«呢» (3): Смягчение интонации в специальных вопросах" },
"level": "HSK 2",
"category_id": "cat_word",
"keywords": "ne, 呢, special question, soft tone",
"short_desc": {
"cn": "放在特指疑问句（带疑问词的句子）末尾，使语气更舒缓、委婉。",
"en": "Placed at the end of special questions to make the tone more gentle and less blunt.",
"ru": "Ставится в конце специальных вопросов для смягчения общей интонации."
},
"details": {
"rules": [
{
"cn": "常用于带有“谁、什么、几、哪儿、怎么”等疑问词的句子。它不改变句意，但能拉近说话人的距离，避免语气过于生硬。",
"en": "Often used in sentences with question words like 'who, what, how many, where, how'. It doesn't change the meaning but makes the speaker sound more friendly and less abrupt.",
"ru": "Часто используется в предложениях с вопросительными словами (кто, что, сколько, где, как). Она не меняет смысл, но делает тон речи более мягким и вежливым."
}
],
"examples": [
{
"hz": "A：这是谁的书呢？\nB：是我朋友的。",
"py": "A: Zhè shì shéi de shū ne?\nB: Shì wǒ péngyou de.",
"en": "A: Whose book is this (I wonder)?\nB: It's my friend's.",
"ru": "А: Чья же это книга?\nБ: Моего друга."
},
{
"hz": "A：我们几点去医院呢？\nB：我也不知道。",
"py": "A: Wǒmen jǐ diǎn qù yīyuàn ne?\nB: Wǒ yě bù zhīdào.",
"en": "A: What time are we going to the hospital?\nB: I don't know either.",
"ru": "А: В котором же часу мы пойдем в больницу?\nБ: Я тоже не знаю."
}
]
}
},
{
"id": "ne_fact_emphasis",
"group_tag": "ne",
"group_name": { "cn": "助词“呢”", "en": "Particle 'ne'", "ru": "Частица «呢»" },
"title": { "cn": "“呢”(4)：陈述句末尾（强调事实）", "en": "'ne' (4): Drawing Attention to a Fact", "ru": "«呢» (4): Подчеркивание факта в повествовании" },
"level": "HSK 1",
"category_id": "cat_word",
"keywords": "ne, 呢, emphasize fact, ongoing",
"short_desc": {
"cn": "用于陈述句末尾，提醒听话者注意某个事实，或强调动作、状态正在持续。",
"en": "Used at the end of a statement to draw the listener's attention to a fact or emphasize an ongoing state.",
"ru": "Используется в конце повествовательных предложений, чтобы обратить внимание слушателя на некий факт."
},
"details": {
"rules": [
{
"cn": "说话人认为听话者可能忽略了某个事实，通过加“呢”来提醒对方。它也常用来表示“动作正在进行”或“状态正在持续”。",
"en": "Used when the speaker thinks the listener might be unaware of a fact. It also emphasizes that an action or state is currently continuing.",
"ru": "Используется, когда говорящий считает, что слушатель не осознает какой-то факт. Также часто указывает на то, что действие или состояние продолжается в данный момент."
}
],
"examples": [
{
"hz": "我还没吃饭呢！",
"py": "Wǒ hái méi chī fàn ne!",
"en": "I haven't eaten yet! (Drawing attention to this fact)",
"ru": "Я вообще-то еще не поел!"
},
{
"hz": "我在家呢，你来吧！",
"py": "Wǒ zài jiā ne, nǐ lái ba!",
"en": "I'm at home (now), come over!",
"ru": "Я дома, приходи!"
},
{
"hz": "我们有五个人呢！",
"py": "Wǒmen yǒu wǔ ge rén ne!",
"en": "There are five of us! (Emphasizing the number)",
"ru": "Нас вообще-то пять человек!"
}
]
}
},
{
    "id": "measure_word_basic",
    "title": {
        "cn": "名量词与名量结构",
        "en": "Nominal Measure Words",
        "ru": "Именные счетные слова"
    },
    "level": "HSK 1",
    "category_id": "cat_word",
    "keywords": "measure word, ge, kou, tian, nian, 量词",
    "short_desc": {
        "cn": "指明人或事物的数量时，数词和名词之间必须使用量词。",
        "en": "When specifying the quantity of people or things, a measure word is required between the number and the noun.",
        "ru": "При указании количества людей или предметов между числительным и существительным необходимо счетное слово."
    },
    "details": {
        "structure": {
            "cn": "数 + 量 + 名",
            "en": "Num. + MW + Noun",
            "ru": "числ. + сч. сл. + сущ."
        },
        "rules": [
            {
                "cn": "基本用法：汉语中不能直接说“三个老师”，必须在数词后紧跟量词，再接名词。",
                "en": "Basic usage: Numbers cannot modify nouns directly; a measure word must follow the number first.",
                "ru": "Основное правило: числительные не могут определять существительные напрямую; сначала за числом должно следовать счетное слово."
            },
            {
                "cn": "常用词选择：指人、水果或一般物品用“个”；指家庭成员人数用“口”。",
                "en": "Word choice: Use '个' (gè) for people, fruit, or general items; use '口' (kǒu) for the number of family members.",
                "ru": "Выбор слова: используйте «个» (gè) для людей, фруктов или обычных предметов; «口» (kǒu) — для количества членов семьи."
            }
        ],
        "notes": {
            "cn": "<b>注意：时间名词的差异</b><br>• <b>天 (день) / 年 (год)</b>：它们本身就是量词，直接接数词：三天、两年。<br>• <b>月 (месяц) / 星期 (неделя)</b>：它们是普通名词，必须加量词：一个月、两个星期。",
            "en": "<b>Note: Time Noun Differences</b><br>• <b>天 (day) / 年 (year)</b>: These are MWs themselves, used directly with numbers: sān tiān, liǎng nián.<br>• <b>月 (month) / 星期 (week)</b>: These are common nouns and require a MW: yí ge yuè, liǎng ge xīngqī.",
            "ru": "<b>Важно: разница в обозначении времени</b><br>• <b>天 (день) / 年 (год)</b>: сами являются счетными словами, используются напрямую с числами: sān tiān, liǎng nián.<br>• <b>月 (месяц) / 星期 (неделя)</b>: обычные существительные, требуют счетное слово: yí ge yuè, liǎng ge xīngqī."
        },
        "mistakes": {
            "w": "三学生 (✘) / 三个天 (✘) / 两星期 (✘)",
            "r": "三个学生 (✔) / 三天 (✔) / 两个星期 (✔)",
            "reason": {
                "cn": "普通名词前不能漏掉量词；已经是量词的名词前不能多加“个”。",
                "en": "Don't omit MWs before common nouns; don't add 'ge' before words that are already MWs.",
                "ru": "Нельзя пропускать сч. слово перед обычными сущ.; нельзя добавлять «个» перед словами, которые сами являются счетными."
            }
        },
        "examples": [
            { "hz": "三口人。", "py": "sān kǒu rén", "en": "Three family members.", "ru": "Три члена семьи." },
            { "hz": "五个苹果。", "py": "wǔ gè píngguǒ", "en": "Five apples.", "ru": "Пять яблок." },
            { "hz": "五年零八天。", "py": "wǔ nián líng bā tiān", "en": "Five years and eight days.", "ru": "Пять лет и восемь дней." },
            { "hz": "四个星期。", "py": "sì gè xīngqī", "en": "Four weeks.", "ru": "Четыре недели." }
        ]
    }
},
{
    "id": "time_date_basic",
    // 1. 设置大类的唯一标识
    "group_tag": "time_expression", 
    // 2. 设置大类在侧边栏显示的名字
    "group_name": {
        "cn": "时间表达",
        "en": "Time Expressions",
        "ru": "Выражение времени"
    },
    // 3. 设置这个具体小类的名字
    "title": {
        "cn": "日期（年月日星期）",
        "en": "Date (Year/Month/Day/Week)",
        "ru": "Дата (год/месяц/день/неделя)"
    },
    "level": "HSK 1",
    "category_id": "cat_word",
    "keywords": "date, week, year, month, 星期, 日, 号",
    "short_desc": {
        "cn": "汉语日期的表达顺序是从大到小：年→月→日/号→星期。",
        "en": "Chinese date order goes from largest to smallest: Year → Month → Day → Weekday.",
        "ru": "Порядок даты в китайском языке — от большего к меньшему: год → месяц → число → день недели."
    },
    "details": {
        "structure": {
            "cn": "年 + 月 + 日/号 + 星期",
            "en": "Year + Month + Day + Weekday",
            "ru": "год + мес. + число + дн. нед."
        },
        "rules": [
            {
                "cn": "顺序原则：必须遵循“大单位在前，小单位在后”的逻辑，这与英语和俄语相反。",
                "en": "Order Principle: Must follow the logic of 'large units first, small units last', which is opposite to English and Russian.",
                "ru": "Принцип порядка: необходимо соблюдать логику «от большего к меньшему», что противоположно русскому и английскому языкам."
            },
            {
                "cn": "日 vs 号：在口语中常用“号”，在书面语中常用“日”。",
                "en": "日 vs 号: '号' (hào) is commonly used in spoken Chinese, while '日' (rì) is used in written Chinese.",
                "ru": "日 (rì) против 号 (hào): «号» обычно используется в устной речи, а «日» — в официальной и письменной."
            }
        ],
        "notes": {
            "cn": "<b>1. 月份 :</b> 直接用“数字 + 月”，如一月、十二月。<br><b>2. 星期 :</b> <br>• 常用：星期一至星期六，周日读“星期日”或“星期天”。<br>• 同义词：<b>关于“星期”的同义词：</b><br>• <b>星期 (xīngqī)</b>：最标准、通用的表达。口语和书面语皆可，通常需要量词：一个星期。<br>• <b>周 (zhōu)</b>：最初较正式，现已变得非常日常。<b>注意：</b>“周”不需要量词，直接说“一周”、“两周”。<br>• <b>礼拜 (lǐbài)</b>：最初带有宗教色彩，现在是生活化口语，在部分地区常用。通常需要量词：一个礼拜。",
            "en": "<b>1. Months:</b> Simply use 'Number + 月', e.g., January (一月), December (十二月).<br><b>2. Weeks:</b> <br>• Common: 星期一 to 星期六; Sunday is 星期日 or 星期天.<br>• Synonyms: <b>Synonyms for 'Week':</b><br>• <b>星期 (xīngqī)</b>: The standard and most common term. Requires a measure word: 'yí ge xīngqī'.<br>• <b>周 (zhōu)</b>: Originally formal, now very common in daily life. <b>Note:</b> It does NOT need a measure word: 'yī zhōu', 'liǎng zhōu'.<br>• <b>礼拜 (lǐbài)</b>: Originally had religious connotations; now a colloquial term frequently used in certain regions. Requires a measure word: 'yí ge lǐbài'.",
            "ru": "<b>1. Месяцы:</b> просто «число + 月», например: январь (一月), декабрь (十二月).<br><b>2. Недели:</b> <br>• Обычные: с 星期一 по 星期六; воскресенье — 星期日 или 星期天.<br>• Синонимы: <b>Синонимы слова «неделя»:</b><br>• <b>星期 (xīngqī)</b>: стандартный и самый частый термин. Требует счетное слово: «yí ge xīngqī».<br>• <b>周 (zhōu)</b>: изначально официальный, сейчас стал повседневным. <b>Важно:</b> используется БЕЗ счетного слова: «yī zhōu», «liǎng zhōu».<br>• <b>礼拜 (lǐbài)</b>: изначально имел религиозный оттенок, сейчас — разговорный вариант, часто используемый в некоторых регионах. Требует счетное слово: «yí ge lǐbài»."
        },
        "mistakes": {
            "w": "① 五月十六号1992年 (顺序错) <br>② 星期七 (✘)",
            "r": "① 1992年五月十六号 (✔) <br>② 星期日 / 星期天 (✔)",
            "reason": {
                "cn": "① 汉语必须先说年份。② 星期天不能用数字7表示。",
                "en": "① Chinese must state the year first. ② Sunday cannot be represented by the digit 7.",
                "ru": "① В китайском сначала всегда идет год. ② Воскресенье нельзя обозначать цифрой 7."
            }
        },
        "examples": [
            {
                "hz": "今天2024年10月22号，星期二。",
                "py": "Jīntiān èr líng èr sì nián shí yuè èrshí'èr hào, xīngqī'èr.",
                "en": "Today is Tuesday, October 22, 2024.",
                "ru": "Сегодня вторник, 22 октября 2024 года."
            },
            {
                "hz": "A：明天是几月几号？\nB：明天是9月8号。",
                "py": "A: Míngtiān shì jǐ yuè jǐ hào?\nB: Míngtiān shì jiǔ yuè bā hào.",
                "en": "A: What is the date tomorrow?\nB: Tomorrow is September 8.",
                "ru": "А: Какое завтра число?\nБ: Завтра 8 сентября."
            },
            {
                "hz": "A：你的生日是几月几号？\nB：我的生日是12月20号。",
                "py": "A: Nǐ de shēngrì shì jǐ yuè jǐ hào?\nB: Wǒ de shēngrì shì shí'èr yuè èrshí hào.",
                "en": "A: When is your birthday?\nB: My birthday is December 20.",
                "ru": "А: Какого числа твой день рождения?\nБ: Мой день рождения 20 декабря."
            }
        ]
    }
},
{
"id": "nominal_predicate",
"title": {
"cn": "名词谓语句",
"en": "Nominal-Predicate Sentences",
"ru": "Предложения с именным сказуемым"
},
"level": "HSK 1",
"category_id": "cat_sent_type",
"keywords": "nominal predicate, time, age, price, 名词谓语句",
"short_desc": {
"cn": "谓语直接由名词性成分充当，常用于表达时间、日期、年龄、价格或籍贯。",
"en": "Sentences where the predicate is a noun or noun phrase, typically used for time, date, age, price, or origin.",
"ru": "Предложения, в которых сказуемое выражено существительным или именной фразой. Обычно используются для обозначения времени, даты, возраста, цены или места рождения."
},
"details": {
"structure": {
"cn": "主语 + 名词性成分",
"en": "Subj. + Noun/Noun Phrase",
"ru": "Подлежащее + Сущ./Именная фраза"
},
"rules": [
{
"cn": "功能限制：主要用于说明事实，如时间（现在八点）、日期（今天五号）、年龄（他二十岁）、价格（这个十块）。",
"en": "Functional limits: Mainly used for stating facts like time, date, age, or price.",
"ru": "Ограничения: используется в основном для констатации фактов, таких как время, дата, возраст или цена."
},
{
"cn": "口语化：这种句式在口语中非常简洁，肯定句中不需要动词“是”。",
"en": "Colloquialism: This structure is concise and does not require the verb 'shì' (to be) in affirmative sentences.",
"ru": "Разговорный стиль: эта конструкция лаконична и не требует глагола «是» (быть) в утвердительных предложениях."
}
],
"notes": {
"cn": "<b>1. 否定式必须加“是”：</b><br>名词谓语句的肯定式没有“是”，但<b>否定式必须使用“不是”</b>。此时它就变成了“是”字句。<br><b>2. 谓语前不能加副词：</b><br>不能直接在名词谓语前加“很”、“都”等副词。如果需要加，必须先补上“是”。",
"en": "<b>1. Negation requires 'shì':</b><br>While the affirmative has no 'shì', the <b>negative form must use 'bú shì'</b>.<br><b>2. No adverbs before nouns:</b><br>You cannot place adverbs like 'hěn' (very) or 'dōu' (all) directly before the noun predicate. You must add 'shì' first.",
"ru": "<b>1. В отрицании обязательно «是»:</b><br>В утверждении «是» нет, но <b>в отрицании обязательно используется «不是»</b>.<br><b>2. Никаких наречий перед существительным:</b><br>Нельзя ставить наречия (очень, все) напрямую перед именным сказуемым. Сначала нужно добавить «是»."
},
"mistakes": {
"w": "① 他不二十岁。 (✘) <br>② 我很不二十岁。 (✘) <br>③ 明天是星期六。 (✔ 但不算典型的名词谓语句)",
"r": "① 他不是二十岁。 (✔) <br>② 我二十岁。 (✔ 肯定式不加是) <br>③ 明天星期六。 (✔ 典型用法)",
"reason": {
"cn": "① 否定名词必须用“不是”；② 名词前不能直接受程度副词修饰。",
"ru": "① Для отрицания существительного нужно «不是»; ② Существительные не могут определяться наречиями степени напрямую."
}
},
"examples": [
{ "hz": "现在十点。", "py": "Xiànzài shí diǎn.", "en": "It's 10 o'clock now.", "ru": "Сейчас 10 часов." },
{ "hz": "今天星期三。", "py": "Jīntiān xīngqīsān.", "en": "Today is Wednesday.", "ru": "Сегодня среда." },
{ "hz": "他今年二十一岁。", "py": "Tā jīnnián èrshíyī suì.", "en": "He is 21 years old this year.", "ru": "Ему в этом году 21 год." },
{ "hz": "这个苹果三块钱。", "py": "Zhège píngguǒ sān kuài qián.", "en": "This apple is 3 yuan.", "ru": "Это яблоко стоит 3 юаня." }
]
}
},

];