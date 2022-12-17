// 加数字的条目是声调特定汉字。如果没有，则回落到无数字的条目，并可选加入声调标注。
// 拟声字、含义有趣的字是加分项，生僻字和多音字是减分项甚至可能不予采用。
export const PinyinToHanziDict = {
    a: '啊',
    ai: '哎',
    an: '安', an1: '安', an3: '俺', an4: '暗',
    ang: '昂', ang2: '昂',
    o: '噢',
    e: '呃', e1: '呃',
    ei: '欸',
    en: '嗯',
    er: '而', er2: '而', er3: '尔', er4: '二',
    i: '噫', i1: '咿', i2: '咦', i4: '噫',
    ia: '呀',
    ian: '言', ian1: '烟', ian2: '言', ian3: '眼', ian4: '厌',
    iang: '央', iang1: '央', iang2: '阳', iang3: '痒', iang4: '样',
    ie: '耶', ie3: '也',
    in: '淫', in1: '阴', in2: '淫', in3: '引', in4: '印',
    ing: '嘤', ing1: '嘤',
    io: '哟',
    iu: '呦', iu3: '有', iu4: '呦',
    u: '呜', u1: '呜', u2: '唔',
    uai: '歪', uai1: '歪', uai3: '崴', uai4: '外',
    uan: '弯', uan1: '弯', uan2: '完', uan3: '晚', uan4: '万',
    uang: '汪', uang1: '汪', uang2: '王', uang3: '往', uang4: '忘',
    uei: '喂', uei1: '微', uei3: '尾', uei4: '喂',
    uen: '温', uen1: '温', uen2: '文', uen3: '稳', uen4: '问',
    ueng: '嗡', ueng1: '嗡', ueng4: '瓮',
    uo: '喔', uo1: '窝', uo3: '我', uo4: '喔',
    ua: '哇', ua3: '瓦', ua4: '哇',
    me: '么', me1: '么',
    miao: '喵', miao1: '喵',
    fa: '发', fa2: '罚', fa3: '法',
    fan: '翻', fan1: '翻', fan2: '烦', fan3: '反', fan4: '犯',
    fang: '方', fang1: '方', fang2: '房', fang3: '仿', fang4: '放',
    fei: '非', fei1: '非', fei2: '肥', fei3: '匪', fei4: '废',
    fen: '分', fen1: '分', fen2: '坟', fen3: '粉', fen4: '份',
    feng: '风', feng1: '风', feng2: '逢', feng3: '讽', feng4: '奉',
    fu: '敷', fu1: '敷', fu2: '服', fu3: '腐', fu4: '负',
    da: '哒', da1: '哒', da2: '答', da3: '打', da4: '大',
    dai: '呆', dai1: '呆', dai3: '逮', dai4: '带',
    dan: '单', dan1: '单', dan3: '胆', dan4: '蛋',
    dang: '当', dang1: '当', dang3: '挡', dang4: '荡',
    de: '的',
    dei: '得',
    deng: '灯', deng1: '灯', deng3: '等', deng4: '瞪',
    di: '嘀', di3: '底', di4: '蒂',
    dia: '嗲', dia3: '嗲',
    dian: '颠', dian1: '颠', dian3: '点', dian4: '电',
    die: '跌', die1: '跌', die2: '叠',
    ding: '叮', ding1: '叮', ding3: '顶', ding4: '定',
    du: '嘟', du1: '嘟', du2: '独', du3: '堵', du4: '杜',
    duan: '端', duan1: '端', duan3: '短', duan4: '断',
    dui: '对', dui3: '怼', dui4: '对',
    dun: '吨', dun1: '吨', dun4: '顿',
    ta: '他', ta1: '他', ta3: '塔', ta4: '踏',
    tai: '胎', tai1: '胎', tai2: '台', tai4: '太',
    tan: '瘫', tan1: '瘫', tan2: '谭', tan3: '毯', tan4: '探',
    tang: '汤', tang1: '汤', tang2: '糖', tang3: '躺', tang4: '烫',
    te: '特', te4: '特',
    tei: '忒', tei1: '忒',
    teng: '疼', teng2: '疼',
    ti: '踢', ti1: '踢', ti2: '提', ti3: '体', ti4: '替',
    tian: '天', tian1: '天', tian2: '甜', tian3: '舔',
    tie: '贴', tie1: '贴', tie3: '铁',
    ting: '听', ting1: '听', ting2: '停', ting3: '挺',
    tu: '凸', tu1: '凸', tu2: '图', tu3: '土', tu4: '兔',
    tuan: '湍', tuan1: '湍', tuan2: '团',
    tui: '推', tui1: '推', tui2: '颓', tui3: '腿', tui4: '退',
    tun: '吞', tun2: '臀',
    na: '呐', na4: '呐',
    nai: '奶', nai3: '奶', nai4: '奈',
    nan: '喃', nan2: '喃',
    nang: '囊', nang2: '囊',
    ne: '呢', ne1: '呢',
    nei: '内', nei3: '馁', nei4: '内',
    nen: '嫩', nen4: '嫩',
    neng: '能', neng2: '能',
    ni: '妮', ni1: '妮', ni2: '尼', ni3: '你', ni4: '逆',
    nian: '蔫', nian1: '蔫', nian2: '年', nian3: '碾', nian4: '念',
    niang: '娘', niang2: '娘', niang4: '酿',
    nie: '捏', nie1: '捏', nie4: '孽',
    nin: '您', nin2: '您',
    ning: '宁', ning2: '宁', ning3: '拧',
    nu: '奴', nu2: '奴', nu3: '努', nu4: '怒',
    nuan: '暖', nuan3: '暖',
    la: '啦', la1: '啦', la3: '喇', la4: '蜡',
    lai: '来', lai2: '来', lai4: '籁',
    lan: '蓝', lan2: '蓝', lan3: '懒', lan4: '烂',
    lang: '狼', lang2: '狼', lang3: '朗', lang4: '浪',
    le: '了',
    lei: '嘞', lei1: '嘞', lei2: '雷', lei3: '蕾', lei4: '泪',
    leng: '楞', leng2: '楞', leng3: '冷', leng4: '愣',
    li: '里', li2: '离', li3: '里', li4: '丽',
    lia: '俩', lia3: '俩',
    lian: '链', lian2: '连', lian3: '脸', lian4: '链',
    liang: '良', liang2: '良', liang3: '两', liang4: '亮',
    lie: '咧', lie4: '烈',
    lin: '拎', lin1: '拎', lin2: '林', lin3: '凛',
    ling: '零', ling2: '零', ling3: '领', ling4: '令',
    lu: '噜', lu1: '噜', lu2: '芦', lu3: '鲁', lu4: '路',
    luan: '峦', luan2: '峦', luan3: '卵', luan4: '乱',
    lun: '抡', lun1: '抡', lun2: '轮', lun4: '论',
    ga: '嘎', ga4: '尬',
    gai: '该', gai1: '该', gai3: '改', gai4: '盖',
    gan: '干', gan1: '甘', gan3: '敢',
    gang: '刚', gang1: '刚', gang3: '港', gang4: '杠',
    ge: '鸽', ge1: '鸽', ge2: '嗝', ge3: '葛', ge4: '个',
    gei: '给', gei3: '给',
    gen: '哏', gen1: '根', gen4: '哏',
    geng: '更', geng3: '梗',
    gu: '咕', gu1: '咕', gu3: '谷', gu4: '故',
    gua: '呱', gua1: '呱',
    guai: '乖', guai1: '乖', guai3: '拐', guai4: '怪',
    guan: '关', guan1: '关', guan3: '管', guan4: '灌',
    guang: '光', guang1: '光', guang3: '广', guang4: '逛',
    gui: '龟', gui1: '龟', gui3: '鬼', gui4: '跪',
    gun: '棍', gun3: '滚', gun4: '棍',
    ka: '咔', ka1: '咔', ka3: '卡',
    kai: '开', kai1: '开', kai3: '凯', kai4: '忾',
    kan: '看', kan1: '刊', kan3: '坎',
    kang: '康', kang1: '康', kang2: '扛', kang4: '亢',
    ke: '咳', ke1: '科', ke2: '咳', ke3: '可', ke4: '客',
    kei: '剋', kei1: '剋',
    ken: '肯', ken3: '肯',
    keng: '吭', keng1: '吭',
    ku: '哭', ku1: '哭', ku3: '苦', ku4: '库',
    kua: '夸', kua1: '夸', kua3: '垮', kua4: '胯',
    kuai: '快', kuai4: '快',
    kuan: '宽', kuan1: '宽', kuan3: '款',
    kuang: '哐', kuang1: '哐', kuang2: '狂', kuang4: '框',
    kui: '亏', kui1: '亏', kui2: '葵', kui4: '愧',
    kun: '捆', kun1: '昆', kun3: '捆', kun4: '困',
    ha: '哈',
    hai: '嗨', hai2: '孩', hai3: '海',
    han: '憨', han1: '憨', han2: '含', han3: '喊', han4: '汗',
    hang: '杭', hang2: '杭', hang4: '沆',
    he: '呵', he1: '呵', he2: '合', he4: '嗬',
    hei: '嘿',
    hen: '很', hen3: '很', hen4: '恨',
    heng: '哼',
    hu: '呼', hu1: '呼', hu2: '胡', hu3: '唬', hu4: '互',
    hua: '花', hua1: '花', hua2: '滑', hua4: '化',
    huai: '怀', huai2: '怀', huai4: '坏',
    huan: '环', huan2: '环', huan3: '缓', huan4: '换',
    huang: '慌', huang1: '慌', huang2: '黄', huang3: '谎', huang4: '晃',
    hui: '灰', hui1: '灰', hui2: '回', hui3: '毁', hui4: '汇',
    hun: '混', hun1: '昏',
    xi: '嘻', xi1: '嘻', xi2: '习', xi3: '洗', xi4: '戏',
    xia: '吓', xia1: '虾', xia2: '霞', xia4: '吓',
    xian: '先', xian1: '先', xian2: '闲', xian3: '显', xian4: '线',
    xiang: '香', xiang1: '香', xiang2: '翔', xiang3: '想', xiang4: '象',
    xie: '些', xie1: '些', xie2: '斜', xie3: '写', xie4: '谢',
    xin: '心', xin1: '心', xin4: '信',
    xing: '星', xing1: '星', xing2: '刑', xing3: '醒', xing4: '性',
    sha: '啥', sha1: '沙', sha2: '啥', sha3: '傻', sha4: '煞',
    shai: '筛', shai1: '筛', shai4: '晒',
    shan: '山', shan1: '山', shan3: '闪', shan4: '善',
    shang: '上', shang1: '伤', shang3: '赏', shang4: '上',
    she: '舍', she1: '奢', she2: '蛇', she4: '射',
    shei: '谁', shei2: '谁',
    shen: '深', shen1: '深', shen2: '神', shen3: '审', shen4: '慎',
    sheng: '生', sheng1: '生', sheng2: '绳', sheng3: '省', sheng4: '圣',
    shu: '书', shu1: '书', shu2: '熟', shu3: '属', shu4: '树',
    shua: '刷', shua1: '刷', shua3: '耍',
    shuai: '摔', shuai1: '摔', shuai3: '甩', shuai4: '帅',
    shuan: '拴', shuan1: '拴', shuan4: '涮',
    shuang: '双', shuang1: '双', shuang3: '爽',
    shui: '水', shui3: '水', shui4: '睡',
    shun: '吮', shun3: '吮', shun4: '瞬',
    ran: '然', ran2: '然', ran3: '冉',
    rang: '嚷', rang1: '嚷', rang2: '瓤', rang3: '攘', rang4: '让',
    re: '惹', re3: '惹', re4: '热',
    ren: '人', ren2: '人', ren3: '忍', ren4: '认',
    reng: '扔', reng1: '扔', reng2: '仍', reng3: '忍', reng4: '认',
    ru: '如', ru2: '如', ru3: '乳', ru4: '入',
    ruan: '软', ruan3: '软',
    rui: '蕊', rui3: '蕊', rui4: '瑞',
    run: '润', run4: '润',
};

// Special case ju-, qu-, xu- is handled by src/pinyin.ts: pinyin.parts
export const PinyinParseSpecialCases:
    { [Key in ValidPinyin]?: [StrictInitial, Final] } = {
    ng: ['', 'en'],
    wa: ['', 'ua'],
    wai: ['', 'uai'],
    wan: ['', 'uan'],
    wang: ['', 'uang'],
    wei: ['', 'ui'],
    wen: ['', 'un'],
    weng: ['', 'ueng'], // imaginary final
    wo: ['', 'uo'],
    wu: ['', 'u'],
    ya: ['', 'ia'],
    yan: ['', 'ian'],
    yang: ['', 'iang'],
    yao: ['', 'iao'],
    ye: ['', 'ie'],
    yi: ['', 'i'],
    yin: ['', 'in'],
    ying: ['', 'ing'],
    yo: ['', 'io'], // imaginary final
    yong: ['', 'iong'],
    you: ['', 'iu'],
    yü: ['', 'ü'],
    yüan: ['', 'üan'],
    yüe: ['', 'üe'],
    yün: ['', 'ün'],
    zhi: ['zh', '-'],
    chi: ['ch', '-'],
    shi: ['sh', '-'],
    ri: ['r', '-'],
    zi: ['z', '-'],
    ci: ['c', '-'],
    si: ['s', '-'],
};

export const PostProcessSpecialCases: { [key: string]: DefinedPronunciation } = {
    eng: 'en',      // oooo
    ue: 'e',        // ooo
    ui: 'uei',      // oooo
    uia: 'ia',      // oo
    uian: 'ian',    // ooo
    uie: 'ie',      // oo
    uin: 'in',      // oo   uen ?
    uing: 'ing',    // oooo
    uu: 'u',        // oooo
    un: 'uen',      // oooo
    fai: 'uai',     // ooo
    fe: 'he',       // oooo
    fi: 'fei',      // ooo
    fia: 'ia',      // o
    fian: 'ian',    // o
    fie: 'ie',      // o
    fin: 'fen',     // oooo
    fing: 'ing',    // oo
    den: 'dun',     // ooo
    tia: 'dia',     // oooo
    nia: 'miao',    // 喵！
    nun: 'nen',     // ooo
    hi: 'xi',       // oooo
    hia: 'xia',     // oooo
    hian: 'xian',   // oooo
    hiang: 'xiang', // oooo
    hie: 'xie',     // oooo
    hin: 'xin',     // ooo  hin3 = hen3 ?
    hing: 'xing',   // oooo
    ra: 'a',        // ooo
    rai: 'ai',      // oo
    rei: 'ei',      // ooo
    rer: 'ren',     // ooo
    rua: 'ua',      // oo
    ruai: 'uai',    // oo
    ruang: 'uang',  // oo   rang ruan
};

export type DefinedPronunciation = keyof typeof PinyinToHanziDict;
export type StrictInitial =
    | ''
    | 'b' | 'p' | 'm' | 'f' | 'd' | 't' | 'n' | 'l'
    | 'g' | 'k' | 'h' | 'j' | 'q' | 'x'
    | 'zh' | 'ch' | 'sh' | 'r' | 'z' | 'c' | 's'
    ;
export type Initial = StrictInitial | 'y' | 'w';
export type Final =
    | '-'
    | 'a' | 'ai' | 'an' | 'ang' | 'ao'
    | 'e' | 'ei' | 'en' | 'eng' | 'er'
    | 'i' | 'ia' | 'ian' | 'iang' | 'iao' | 'ie' | 'in' | 'ing' | 'io' | 'iong' | 'iu'
    | 'o' | 'ong' | 'ou'
    | 'u' | 'ua' | 'uai' | 'uan' | 'uang' | 'ueng' | 'ui' | 'un' | 'uo'
    | 'ü' | 'üan' | 'üe' | 'ün'
    | 'ng'
    ;
export type Tone = 0 | 1 | 2 | 3 | 4;
export type ValidPinyin = typeof AllPinyins[number];
export type ValidPinyinWithTone = `${typeof AllPinyins[number]}${Tone}`;

const AllPinyins = [
    'a',
    'ai',
    'an',
    'ang',
    'ao',
    'ba',
    'bai',
    'ban',
    'bang',
    'bao',
    'bei',
    'ben',
    'beng',
    'bi',
    'bian',
    'biao',
    'bie',
    'bin',
    'bing',
    'bo',
    'bu',
    'ca',
    'cai',
    'can',
    'cang',
    'cao',
    'ce',
    'cen',
    'ceng',
    'cha',
    'chai',
    'chan',
    'chang',
    'chao',
    'che',
    'chen',
    'cheng',
    'chi',
    'chong',
    'chou',
    'chu',
    'chua',
    'chuai',
    'chuan',
    'chuang',
    'chui',
    'chun',
    'chuo',
    'ci',
    'cong',
    'cou',
    'cu',
    'cuan',
    'cui',
    'cun',
    'cuo',
    'da',
    'dai',
    'dan',
    'dang',
    'dao',
    'de',
    'dei',
    'den',
    'deng',
    'di',
    'dia',
    'dian',
    'diao',
    'die',
    'ding',
    'diu',
    'dong',
    'dou',
    'du',
    'duan',
    'dui',
    'dun',
    'duo',
    'e',
    'ei',
    'en',
    'eng',
    'er',
    'fa',
    'fan',
    'fang',
    'fei',
    'fen',
    'feng',
    'fiao',
    'fo',
    'fou',
    'fu',
    'ga',
    'gai',
    'gan',
    'gang',
    'gao',
    'ge',
    'gei',
    'gen',
    'geng',
    'gong',
    'gou',
    'gu',
    'gua',
    'guai',
    'guan',
    'guang',
    'gui',
    'gun',
    'guo',
    'ha',
    'hai',
    'han',
    'hang',
    'hao',
    'he',
    'hei',
    'hen',
    'heng',
    'hong',
    'hou',
    'hu',
    'hua',
    'huai',
    'huan',
    'huang',
    'hui',
    'hun',
    'huo',
    'ji',
    'jia',
    'jian',
    'jiang',
    'jiao',
    'jie',
    'jin',
    'jing',
    'jiong',
    'jiu',
    'ju',
    'jü',
    'juan',
    'jüan',
    'jue',
    'jüe',
    'jun',
    'jün',
    'ka',
    'kai',
    'kan',
    'kang',
    'kao',
    'ke',
    'kei',
    'ken',
    'keng',
    'kong',
    'kou',
    'ku',
    'kua',
    'kuai',
    'kuan',
    'kuang',
    'kui',
    'kun',
    'kuo',
    'la',
    'lai',
    'lan',
    'lang',
    'lao',
    'le',
    'lei',
    'leng',
    'li',
    'lia',
    'lian',
    'liang',
    'liao',
    'lie',
    'lin',
    'ling',
    'liu',
    'lo',
    'long',
    'lou',
    'lu',
    'luan',
    'lve',
    'lüe',
    'lun',
    'luo',
    'lv',
    'lü',
    'ma',
    'mai',
    'man',
    'mang',
    'mao',
    'me',
    'mei',
    'men',
    'meng',
    'mi',
    'mian',
    'miao',
    'mie',
    'min',
    'ming',
    'miu',
    'mo',
    'mou',
    'mu',
    'na',
    'nai',
    'nan',
    'nang',
    'nao',
    'ne',
    'nei',
    'nen',
    'neng',
    'ng',
    'ni',
    'nian',
    'niang',
    'niao',
    'nie',
    'nin',
    'ning',
    'niu',
    'nong',
    'nou',
    'nu',
    'nuan',
    'nve',
    'nüe',
    'nun',
    'nuo',
    'nv',
    'nü',
    'o',
    'ou',
    'pa',
    'pai',
    'pan',
    'pang',
    'pao',
    'pei',
    'pen',
    'peng',
    'pi',
    'pian',
    'piao',
    'pie',
    'pin',
    'ping',
    'po',
    'pou',
    'pu',
    'qi',
    'qia',
    'qian',
    'qiang',
    'qiao',
    'qie',
    'qin',
    'qing',
    'qiong',
    'qiu',
    'qu',
    'qü',
    'quan',
    'qüan',
    'que',
    'qüe',
    'qun',
    'qün',
    'ran',
    'rang',
    'rao',
    're',
    'ren',
    'reng',
    'ri',
    'rong',
    'rou',
    'ru',
    'rua',
    'ruan',
    'rui',
    'run',
    'ruo',
    'sa',
    'sai',
    'san',
    'sang',
    'sao',
    'se',
    'sen',
    'seng',
    'sha',
    'shai',
    'shan',
    'shang',
    'shao',
    'she',
    'shei',
    'shen',
    'sheng',
    'shi',
    'shou',
    'shu',
    'shua',
    'shuai',
    'shuan',
    'shuang',
    'shui',
    'shun',
    'shuo',
    'si',
    'song',
    'sou',
    'su',
    'suan',
    'sui',
    'sun',
    'suo',
    'ta',
    'tai',
    'tan',
    'tang',
    'tao',
    'te',
    'tei',
    'teng',
    'ti',
    'tian',
    'tiao',
    'tie',
    'ting',
    'tong',
    'tou',
    'tu',
    'tuan',
    'tui',
    'tun',
    'tuo',
    'wa',
    'wai',
    'wan',
    'wang',
    'wei',
    'wen',
    'weng',
    'wo',
    'wu',
    'xi',
    'xia',
    'xian',
    'xiang',
    'xiao',
    'xie',
    'xin',
    'xing',
    'xiong',
    'xiu',
    'xu',
    'xü',
    'xuan',
    'xüan',
    'xue',
    'xüe',
    'xun',
    'xün',
    'ya',
    'yan',
    'yang',
    'yao',
    'ye',
    'yi',
    'yin',
    'ying',
    'yo',
    'yong',
    'you',
    'yu',
    'yü',
    'yuan',
    'yüan',
    'yue',
    'yüe',
    'yun',
    'yün',
    'za',
    'zai',
    'zan',
    'zang',
    'zao',
    'ze',
    'zei',
    'zen',
    'zeng',
    'zha',
    'zhai',
    'zhan',
    'zhang',
    'zhao',
    'zhe',
    'zhei',
    'zhen',
    'zheng',
    'zhi',
    'zhong',
    'zhou',
    'zhu',
    'zhua',
    'zhuai',
    'zhuan',
    'zhuang',
    'zhui',
    'zhun',
    'zhuo',
    'zi',
    'zong',
    'zou',
    'zu',
    'zuan',
    'zui',
    'zun',
    'zuo',
] as const;
export const AllPinyinSet = new Set(AllPinyins);
