/* ==========================================================================
   JAPAN SAMURAI — INTERNATIONALIZATION (i18n) ENGINE
   Languages: Japanese (ja - default), English (en), Vietnamese (vi)
   ========================================================================== */

(function () {
  'use strict';

  const I18N_DATA = {
    ja: {
      langName: '日本語',
      langShort: 'JA',
      flag: '🇯🇵',

      // Header
      navPrologue: '序章',
      navSamurai: '侍の精神',
      navDestinations: '厳選の地',
      navCulture: '日本文化',
      navGeisha: '芸者の美学',
      navStudio: '書道体験',
      replayBtn: '再見',
      audioOn: '音声 ON',
      audioOff: '音声 OFF',

      // Intro Overlay
      skipIntro: 'スキップ',
      enterWithSound: '音声付きで入場',
      startHint: 'または画面をクリックして入場',
      greetingSub: '心洗われる美しき旅へ',
      samuraiTag: '武士の魂',
      samuraiCaptionTitle: '侍の覚悟',
      exploreJapanBtn: '日本を旅する',
      introQuoteLines: [
        '千日の稽古を短とし、万日の稽古を廉とす。',
        'いかに実力があろうとも、うぬぼれてはならぬ。',
        '常に精進を重ねよ。',
        '真の成功に至るには、誰もが苦練を乗り越えねばならぬ。',
      ],

      // Hero Section
      heroChapter: '第一章 / 序章',
      heroSubtitle: '日本の心を旅する',
      heroTitle: '日本の心を<br>旅する',
      heroDesc: '古の侍の城郭から、光り輝くネオンの都市まで。研ぎ澄まされた禅の静寂と、息をのむ現代の技が息づく神聖な地への旅路。',
      heroBtnDestinations: '名所を巡る',
      heroBtnSamurai: '侍の道を知る',
      heroScroll: 'スクロールして探索',

      // Samurai Section
      samuraiSectionTag: '伝統と規律',
      samuraiSectionTitle: '侍の道・不滅の精神',
      samuraiSectionSubtitle: '侍の精神と不滅の美学',
      samuraiPhilosophyBadge: '武士の道・武士道精神',
      samuraiQuote: '「真の勝利とは、己に打ち克つこと。刃は激しき炎より鍛えられ、静寂なる自制をもて振るわれる。」',
      samuraiText: '単なる神話や映画の伝説を超えて、歴史上の侍たちは学者であり、歌人、禅の実践者、そして優れた戦略家でした。7世紀以上にわたり、彼らの重んじた「武士道」の精神は、日本の美意識、刀鍛冶、城郭建築、そして人々の高潔な道徳観を育みました。',
      samuraiReadMoreBtn: '武士道について詳しく見る',

      // Virtues
      virtueGiName: '義（GI）',
      virtueGiMeaning: '正義と道義',
      virtueYuName: '勇（YU）',
      virtueYuMeaning: '勇気と果敢',
      virtueJinName: '仁（JIN）',
      virtueJinMeaning: '慈悲と思いやり',
      virtueReiName: '礼（REI）',
      virtueReiMeaning: '礼節と敬意',
      virtueMakotoName: '誠（MAKOTO）',
      virtueMakotoMeaning: '誠実と至誠',
      virtueMeiyoName: '名誉（MEIYO）',
      virtueMeiyoMeaning: '名誉と誇り',
      virtueChugiName: '忠義（CHUGI）',
      virtueChugiMeaning: '忠誠と献身',

      // Destinations Section
      destSectionTag: '厳選された日本の名所',
      destSectionTitle: '日本の至宝・10大名所',
      destSectionSubtitle: '映画のような空撮映像、絶品郷土美食、悠久の歴史スポット',

      // Kyoto
      kyotoRegion: '01 / 関西地方',
      kyotoTitle: '京都',
      kyotoSubtitle: '千年の都・古都の雅',
      kyotoDesc: '千年の雅が息づく古都へ。伏見稲荷大社の朱色の千本鳥居をくぐり、祇園の灯籠揺れる石畳を歩き、二千を超える寺社仏閣と静謐な禅の庭園で時を超えた美を体感してください。',
      kyotoHl1: '伏見稲荷大社',
      kyotoHl2: '嵐山 竹林の小径',
      kyotoHl3: '音羽山 清水寺',
      kyotoHl4: '祇園のお茶屋',
      kyotoBtn: '京都を詳しく見る',

      // Tokyo
      tokyoRegion: '02 / 関東地方',
      tokyoTitle: '東京',
      tokyoSubtitle: '伝統と未来が交差する街',
      tokyoDesc: '躍動するネオンのエネルギーと、静けさに満ちた江戸の聖域が交錯する都市。渋谷スクランブル交差点、新宿の路地裏、そして明治神宮の神聖な杜の静けさが織りなす感動の体験。',
      tokyoHl1: '渋谷交差点',
      tokyoHl2: '新宿思い出横丁',
      tokyoHl3: '浅草寺・雷門',
      tokyoHl4: '銀座の美食',
      tokyoBtn: '東京を詳しく見る',

      // Fuji
      fujiRegion: '03 / 中部地方',
      fujiTitle: '富士山',
      fujiSubtitle: '雲上の霊峰・不朽の象徴',
      fujiDesc: '標高3,776メートル、天高くそびえる日本の美と信仰の象徴。河口湖に映る秀麗な逆さ富士を愛で、天然露天風呂に浸かり、新倉山浅間公園の忠霊塔から朝日に染まる絶景をお楽しみください。',
      fujiHl1: '河口湖',
      fujiHl2: '新倉山 忠霊塔',
      fujiHl3: '箱根温泉',
      fujiHl4: '富士五湖',
      fujiBtn: '富士山を詳しく見る',

      // Culture Section
      cultureSectionTag: '文化の真髄',
      cultureSectionTitle: '心に響く日本の伝統',
      cultureSectionSubtitle: '魂に響く日本の伝統と美意識',

      // Culture 1: Tea
      culture1Cat: '01 / 禅の静寂と心',
      culture1Title: '茶道',
      culture1Subtitle: '茶道・一期一会',
      culture1Body1: '千利休が大成した16世紀の禅の思想に根ざす「茶道」は、抹茶を点てる所作を通じて今この瞬間に心を研ぎ澄ます瞑想の儀式です。「和・敬・清・寂」の四規に基づく精神が息づいています。',
      culture1Body2: '「一期一会」— 一生に一度の出会いとして、誠心誠意のおもてなしを。',

      // Culture 2: Sakura
      culture2Cat: '02 / 自然と無常の美',
      culture2Title: '桜花と花見',
      culture2Subtitle: '桜花と「もののあわれ」',
      culture2Body1: '春、日本列島を桜前線が駆け抜けます。単なる景観の美しさを超え、桜は散りゆく美しさに心を寄せる「もののあわれ」の情緒を体現しています。',
      culture2Body2: '千年以上にわたり、天皇、歌人、庶民に至るまで、満開の桜の下に集い「花見」を楽しむ伝統が大切に受け継がれています。',

      // Culture 3: Architecture
      culture3Cat: '03 / 木組の技と調和',
      culture3Title: '和風建築',
      culture3Subtitle: '木と紙の呼吸・和風建築',
      culture3Body1: '一本の釘も使わずに組み上げられる五重塔や町家は、地震の揺れを逃す精緻な「木組」の技によって支えられています。障子や襖は室内と庭園の四季を優美につなぎます。',
      culture3Body2: '宮島の厳島神社から京都の静穏な楼閣まで、建築は自然の環境と調和しながら呼吸を共にしています。',

      // Culture 4: Calligraphy
      culture4Cat: '04 / 筆墨の芸術',
      culture4Title: '書道',
      culture4Subtitle: '筆と墨の一瞬・書道',
      culture4Body1: '「書道」は単に文字を書くことではなく、精神を集中させる動の瞑想です。和紙に墨が触れた瞬間、決して消すことも修正することもできません。一筆一筆に書き手の呼吸、リズム、心の境地が宿ります。',
      culture4Body2: '文房四宝と呼ばれる「筆」「墨」「硯」「紙」を通じて生み出される、一瞬の美の結晶です。',

      // Geisha Section (芸者の美学)
      geishaSectionTag: '花街の美学',
      geishaSectionTitle: '芸者・雅の極み',
      geishaSectionSubtitle: '祇園の石畳に息づく、一期一会の美と所作',
      geishaLead: '京都・祇園の花街で脈々と受け継がれる芸者の世界は、単なる華やかさではありません。幼い頃から研鑽を積み、舞・三味線・茶道・華道・会話に至るまで、あらゆる芸を究めることで「おもてなし」という美学を完成させます。',
      geishaQuote: '「一瞬の所作に、一生分の稽古を。」— 花街に流れる不易の心',
      geishaPillar1Kanji: '舞',
      geishaPillar1Title: '京舞',
      geishaPillar1Subtitle: '京舞・四季を映す袖',
      geishaPillar1Body: '祇園甲部の井上流に代表される京舞は、扇と袖の微細な動きで四季の移ろいを描き出します。一振りの扇が月となり、川となり、風となる。',
      geishaPillar2Kanji: '装',
      geishaPillar2Title: '着物と結髪',
      geishaPillar2Subtitle: '西陣織と日本髪の美',
      geishaPillar2Body: '西陣織の着物、季節を映す帯、重さ数キロの日本髪と簪。装いは自己表現ではなく、客への敬意と季節への応答として整えられます。',
      geishaPillar3Kanji: '道',
      geishaPillar3Title: '三味線と箏',
      geishaPillar3Subtitle: '置屋・お茶屋の伝統',
      geishaPillar3Body: '置屋に暮らす舞妓は、言葉遣い、座敷作法、茶道、華道、三味線を日々磨きます。姉さんと呼ばれる先輩の背中から、技と心を写し取っていきます。',
      geishaPillar4Kanji: '客',
      geishaPillar4Title: 'お座敷文化',
      geishaPillar4Subtitle: 'お茶屋が結ぶ一夜',
      geishaPillar4Body: 'お茶屋の取りなしによって生まれる座敷は、一期一会の場。盃を交わし、唄と舞を楽しみ、季節の懐石を味わう時間そのものが文化です。',
      geishaCtaTitle: '芸者の世界を、もっと深く',
      geishaCtaDesc: '祇園の街歩き、舞妓の舞の鑑賞、本物のお茶屋文化まで。花街の魅力を特集記事でご紹介します。',
      geishaCtaBtn: '芸者の世界をもっと詳しく見る',
      geishaPhilosophyBadge: '花街の心・一期一会',
      geishaHeroCaption: '紅葉の庭に、一期一会の静けさ。',
      geishaStrip1: '舞の舞台',
      geishaStrip2: '三味線の調べ',
      geishaStrip3: '祇園の石畳',
      geishaStrip4: 'お茶屋の灯',
      geishaPillar1BodyShort: '扇と袖で四季を描く、井上流の京舞。',
      geishaPillar2BodyShort: '西陣織の着物と、季節を映す簪。',
      geishaPillar3BodyShort: '置屋で舞・三味線・作法を日々磨く。',
      geishaPillar4BodyShort: 'お茶屋が結ぶ、一期一会の一夜。',

      // Culture 5: Katana
      culture5Cat: '05 / 名誉と鋼の魂',
      culture5Title: '日本刀と武士の歴史',
      culture5Subtitle: '不滅の誇り・日本刀と甲冑',
      culture5Body1: '日本刀は「武士の魂」と称されました。玉鋼を何度も折り返し鍛錬することで、強靭な硬さと折れない柔軟性を併せ持つ至高の美が生まれます。',
      culture5Body2: '今日でも、居合道や剣道などの古武道、金沢や会津などの歴史ある城下町、そして礼節を重んじる心の中に侍の誇りが受け継がれています。',

      // Culture 6: Geisha
      culture6Cat: '06 / 花街の雅と修練',
      culture6Title: '芸者の世界',
      culture6Subtitle: '一生分の稽古・一瞬の所作',
      culture6Body1: '京都·祇園の花街で脈々と受け継がれる芸の世界。舞、三味線、茶道、華道、会話に至るまで、幼い頃から研鑽を積み「おもてなし」の美学を究めます。',
      culture6Body2: 'お茶屋が結ぶ「一期一会」の一夜 — 華やかさの裏に、日々の厳しい稽古と伝統への献身があります。',

      // Brush Studio
      studioSectionTag: '体験型工房',
      studioSectionTitle: '名匠の筆使い',
      studioSectionSubtitle: 'バーチャル書道体験・あなたの筆跡',
      studioColorTitle: '墨の色',
      studioStencilsTitle: 'お手本の漢字',
      studioBtnSplatter: '墨しぶき',
      studioBtnClear: '和紙を清める',

      // Modal
      modalLabelSeason: '最適な季節',
      modalLabelDuration: '推奨滞在日数',
      modalLabelRituals: 'おすすめの体験',

      // Footer
      footerBrandSub: '日本の心を旅する',
      footerAbout: '日本の伝統工芸、悠久の侍の精神、そして日出ずる国の美しい名所を、映画のような映像美とともにお届けします。',
      footerColDest: '目的地',
      footerLinkKyoto: '京都 — 千年の古都',
      footerLinkTokyo: '東京 — 伝統と未来',
      footerLinkFuji: '富士山 — 聖なる霊峰',
      footerLinkNara: '奈良と金沢',
      footerColCulture: '日本文化',
      footerLinkTea: '茶道の精神 (一期一会)',
      footerLinkSakura: '桜ともののあわれ',
      footerLinkBushido: '武士道精神',
      footerLinkStudio: 'バーチャル書道工房',
      footerColControls: 'メニュー',
      footerReplay: '↺ イントロを再見する',
      footerTop: '↑ ページ先頭へ',
      footerCopyright: '© 2026 日本トラベル体験。日本の伝統文化と映画的な映像美の融合。',
      footerCredits: '洗練されたデザインと先端のウェブ技術で構築。',

      modalData: {
        kyoto: {
          title: '京都 — 千年の古都',
          subtitleJp: '千年の都・京都',
          region: '01 / 関西地方',
          description: '日本の文化の中心地へ。千年以上もの間、都として栄えた京都。静謐な枯山水の禅寺、祇園の灯籠揺れる石畳、そして二千を超える寺社仏閣が、古き良き日本の優雅な精神を今に伝えています。',
          season: '3月下旬～4月（桜）/ 11月（紅葉）',
          duration: '推奨滞在：4～6日間',
          rituals: '大徳寺での座禅体験、宇治での本格茶道体験、夕暮れの八坂の塔散策。'
        },
        tokyo: {
          title: '東京 — 伝統と未来の躍動',
          subtitleJp: '伝統と未来・東京',
          region: '02 / 関東地方',
          description: '超近代的なネオンの摩天楼と、時を超えた江戸の伝統が交錯する街。そびえ立つ建築群、世界最高峰の食文化、ビル群の懐に抱かれた静寂な神社の杜、そして疾走する新幹線が織りなす感動の体験。',
          season: '通年 / 春と秋が最適',
          duration: '推奨滞在：5～7日間',
          rituals: '築地・豊洲での朝の散策、夕暮れの渋谷スクランブル交差点、明治神宮の静寂な杜歩き。'
        },
        fuji: {
          title: '富士山 — 雲上の霊峰',
          subtitleJp: '霊峰・富士山',
          region: '03 / 中部地方',
          description: '標高3,776メートル、天高くそびえる日本の美と信仰の象徴。古来より巡礼の地として、また芸術の源として崇められてきた美しい円錐形の姿は、富士五湖の静かな湖面にその神々しい影を映し出します。',
          season: '7月～9月上旬（登山適期）/ 10月～5月（冠雪の絶景）',
          duration: '推奨滞在：2～3日間',
          rituals: '新倉山浅間公園（忠霊塔）からの日の出、富士山を望む天然露天風呂、河口湖での遊覧船。'
        }
      }
    },

    en: {
      langName: 'English',
      langShort: 'EN',
      flag: '🇬🇧',

      // Header
      navPrologue: 'PROLOGUE',
      navSamurai: 'THE SAMURAI',
      navDestinations: 'DESTINATIONS',
      navCulture: 'CULTURE',
      navGeisha: 'GEISHA',
      navStudio: 'BRUSH STUDIO',
      replayBtn: 'REPLAY',
      audioOn: 'SOUND ON',
      audioOff: 'SOUND OFF',

      // Intro Overlay
      skipIntro: 'SKIP INTRO',
      enterWithSound: 'ENTER WITH SOUND',
      startHint: 'Or click anywhere to enter',
      greetingSub: 'Hello, Welcome to Japan',
      samuraiTag: 'THE WARRIOR’S SPIRIT',
      samuraiCaptionTitle: 'SAMURAI RESOLVE',
      exploreJapanBtn: 'EXPLORE JAPAN',
      introQuoteLines: [
        'A thousand days of training: learn it briefly. Ten thousand days: master it deeply.',
        'However great your skill, never fall into pride.',
        'Refine yourself, ceaselessly.',
        'On the path to true success, everyone must first overcome hardship.',
      ],

      // Hero Section
      heroChapter: 'CHAPTER 01 / PROLOGUE',
      heroSubtitle: 'JOURNEY INTO JAPAN',
      heroTitle: 'DISCOVER THE<br>SPIRIT OF JAPAN',
      heroDesc: 'From ancient samurai fortresses to luminous neon metropolises. Journey across a sacred land where meditative Zen mindfulness breathes alongside peerless visionary modern craft.',
      heroBtnDestinations: 'EXPLORE DESTINATIONS',
      heroBtnSamurai: 'THE SAMURAI WAY',
      heroScroll: 'SCROLL TO EXPLORE',

      // Samurai Section
      samuraiSectionTag: 'HERITAGE & DISCIPLINE',
      samuraiSectionTitle: 'THE WAY OF THE SAMURAI',
      samuraiSectionSubtitle: 'The Immortal Aesthetics of Bushido',
      samuraiPhilosophyBadge: 'BUSHIDO PHILOSOPHY',
      samuraiQuote: '“True victory is victory over oneself. The blade is forged through fire, but wielded with quiet restraint.”',
      samuraiText: 'Beyond anime mythology and cinematic legends, the historical Samurai were scholars, poets, Zen practitioners, and master strategists. For over seven centuries, their code of Bushido (The Way of the Warrior) shaped Japanese aesthetics, swordsmithing, castle architecture, and moral character.',
      samuraiReadMoreBtn: 'Read More About Samurai',

      // Virtues
      virtueGiName: 'GI (Rectitude)',
      virtueGiMeaning: 'Rectitude & Justice',
      virtueYuName: 'YU (Courage)',
      virtueYuMeaning: 'Heroic Courage',
      virtueJinName: 'JIN (Benevolence)',
      virtueJinMeaning: 'Benevolence & Compassion',
      virtueReiName: 'REI (Respect)',
      virtueReiMeaning: 'Politeness & Respect',
      virtueMakotoName: 'MAKOTO (Honesty)',
      virtueMakotoMeaning: 'Honesty & Sincerity',
      virtueMeiyoName: 'MEIYO (Honor)',
      virtueMeiyoMeaning: 'Honor & Dignity',
      virtueChugiName: 'CHUGI (Loyalty)',
      virtueChugiMeaning: 'Loyalty & Devotion',

      // Destinations Section
      destSectionTag: 'CURATED JOURNEYS',
      destSectionTitle: 'FEATURED DESTINATIONS',
      destSectionSubtitle: 'Handcrafted Journeys Across Japan',

      // Kyoto
      kyotoRegion: '01 / KANSAI REGION',
      kyotoTitle: 'KYOTO',
      kyotoSubtitle: 'Ancient Capital Elegance',
      kyotoDesc: 'Step back into the golden age of imperial Japan. Walk beneath thousands of vermilion torii gates at Fushimi Inari, wander lantern-lit cobblestone streets in Gion, and discover two thousand ancient Buddhist temples and quiet Zen gardens.',
      kyotoHl1: 'Fushimi Inari Shrine',
      kyotoHl2: 'Arashiyama Bamboo Grove',
      kyotoHl3: 'Kiyomizu-dera Temple',
      kyotoHl4: 'Gion Teahouses',
      kyotoBtn: 'EXPLORE KYOTO',

      // Tokyo
      tokyoRegion: '02 / KANTO REGION',
      tokyoTitle: 'TOKYO',
      tokyoSubtitle: 'Tradition Meets the Future',
      tokyoDesc: 'A breathless symphony of electric neon energy and quiet Edo sanctuaries. Stand at the legendary Shibuya Crossing, dive into the cyberpunk alleyways of Shinjuku, and find sudden stillness beneath the sacred towering trees of Meiji Jingu shrine.',
      tokyoHl1: 'Shibuya Crossing',
      tokyoHl2: 'Shinjuku Omoide Yokocho',
      tokyoHl3: 'Senso-ji Asakusa',
      tokyoHl4: 'Ginza Gastronomy',
      tokyoBtn: 'EXPLORE TOKYO',

      // Fuji
      fujiRegion: '03 / CHUBU REGION',
      fujiTitle: 'MOUNT FUJI',
      fujiSubtitle: 'Sacred Peak Beyond the Clouds',
      fujiDesc: 'Japan’s eternal sacred peak soaring 3,776 meters into the heavens. Gaze upon its symmetrical snow crown reflected on Lake Kawaguchiko, soak in steaming open-air mineral onsen baths, and watch the sun rise from the iconic Chureito Pagoda.',
      fujiHl1: 'Lake Kawaguchiko',
      fujiHl2: 'Chureito Pagoda',
      fujiHl3: 'Hakone Onsen',
      fujiHl4: 'Fuji Five Lakes',
      fujiBtn: 'EXPLORE FUJI',

      // Culture Section
      cultureSectionTag: 'CULTURAL PILLARS',
      cultureSectionTitle: 'MORE THAN A DESTINATION',
      cultureSectionSubtitle: 'Timeless Traditions & Aesthetics of Japan',

      // Culture 1: Tea
      culture1Cat: '01 / ZEN MINDFULNESS',
      culture1Title: 'THE WAY OF TEA',
      culture1Subtitle: 'Chado & Ichigo Ichie',
      culture1Body1: 'Rooted in 16th-century Zen philosophy guided by master Sen no Rikyu, Chado transforms the preparation of powdered green matcha tea into a meditative ritual of presence. Governed by four timeless principles: Wa (Harmony), Kei (Respect), Sei (Purity), and Jaku (Tranquility).',
      culture1Body2: '“Ichigo Ichie” — Cherish each encounter, for it occurs only once in a lifetime.',

      // Culture 2: Sakura
      culture2Cat: '02 / NATURE & EPHEMERALITY',
      culture2Title: 'SAKURA SEASON',
      culture2Subtitle: 'Cherry Blossoms & Mono no Aware',
      culture2Body1: 'Every spring, the bloom of cherry blossoms sweeps north across the Japanese archipelago. More than a scenic spectacle, Sakura embodies the concept of Mono no aware — the profound, poignant appreciation of the fleeting transience of life and natural beauty.',
      culture2Body2: 'Gathering under the canopy for Hanami (flower viewing) has been celebrated by emperors, poets, and villagers alike for over a millennium.',

      // Culture 3: Architecture
      culture3Cat: '03 / MASTER JOINERY & HARMONY',
      culture3Title: 'TRADITIONAL ARCHITECTURE',
      culture3Subtitle: 'Breath of Wood & Paper',
      culture3Body1: 'Built without a single metal nail, Japan’s centuries-old pagodas and machiya townhouses rely on complex interlocking wooden joinery (Kigumi) that flexes harmlessly through earthquakes. Sliding translucent shoji screens dissolve the boundary between indoors and the changing garden seasons.',
      culture3Body2: 'From the floating torii of Miyajima to Kyoto\'s serene pavilions, structures live in quiet communion with their natural environment.',

      // Culture 4: Calligraphy
      culture4Cat: '04 / THE ART OF THE BRUSH',
      culture4Title: 'JAPANESE CALLIGRAPHY',
      culture4Subtitle: 'Ink in Motion · Shodo',
      culture4Body1: 'Shodo is not merely writing; it is physical meditation in motion. Once ink meets absorbent washi paper, it cannot be erased, retouched, or disguised. Each brushstroke captures the artist’s breath, rhythm, pressure, and state of mind in that unrepeatable moment.',
      culture4Body2: 'United through the "Four Treasures of the Study": Brush (Fude), Ink stick (Sumi), Ink stone (Suzuri), and Paper (Washi).',

      // Geisha Section
      geishaSectionTag: 'AESTHETICS OF THE FLOWER DISTRICT',
      geishaSectionTitle: 'GEISHA — THE CRAFT OF GRACE',
      geishaSectionSubtitle: 'Beauty and accomplishment on the stone lanes of Gion',
      geishaLead: 'In Kyoto\u2019s Gion flower district, the world of the geiko is far more than spectacle. From childhood, apprentices train in dance, shamisen, tea ceremony, flower arrangement and conversation \u2014 mastering every art in order to perfect the aesthetics of hospitality.',
      geishaQuote: '\u201cA lifetime of practice lives inside a single gesture.\u201d \u2014 the enduring spirit of the flower district',
      geishaPillar1Kanji: '舞',
      geishaPillar1Title: 'Kyomai Dance',
      geishaPillar1Subtitle: 'The Inoue school \u2014 sleeves that paint the seasons',
      geishaPillar1Body: 'Led by the Inoue school of Gion Kobu, kyomai portrays the passing seasons through minute movements of fan and sleeve. A single folded fan becomes the moon, a river, a gust of wind.',
      geishaPillar2Kanji: '装',
      geishaPillar2Title: 'Kimono & Coiffure',
      geishaPillar2Subtitle: 'Nishijin silk and the traditional coiffure',
      geishaPillar2Body: 'A Nishijin kimono, an obi that echoes the current season, and a weighted traditional coiffure pinned with kanzashi. The attire is not self-expression but a gesture of respect toward guests and the season itself.',
      geishaPillar3Kanji: '道',
      geishaPillar3Title: 'Shamisen & Koto',
      geishaPillar3Subtitle: 'The okiya and ochaya tradition',
      geishaPillar3Body: 'A maiko living in an okiya refines speech, seating etiquette, tea, flowers and shamisen day after day, learning technique and heart by watching her senior sister, the oneesan.',
      geishaPillar4Kanji: '客',
      geishaPillar4Title: 'The Ozashiki',
      geishaPillar4Subtitle: 'One evening arranged by the ochaya',
      geishaPillar4Body: 'The ozashiki gathering, arranged through an ochaya teahouse, is a once-in-a-lifetime encounter: shared sake, song and dance, and a seasonal kaiseki meal \u2014 the time itself is the culture.',
      geishaCtaTitle: 'Go deeper into the world of the geisha',
      geishaCtaDesc: 'Gion walks, maiko dance performances and authentic ochaya culture \u2014 explore our feature articles on the flower district.',
      geishaCtaBtn: 'DISCOVER THE WORLD OF THE GEISHA',
      geishaPhilosophyBadge: 'The heart of the flower district \u2014 ichigo ichie',
      geishaHeroCaption: 'Over an autumn garden, the stillness of one meeting.',
      geishaStrip1: 'The dance stage',
      geishaStrip2: 'The sound of the shamisen',
      geishaStrip3: 'The stone lanes of Gion',
      geishaStrip4: 'Lanterns of the teahouse',
      geishaPillar1BodyShort: 'The Inoue school paints the seasons with fan and sleeve.',
      geishaPillar2BodyShort: 'Nishijin kimono, and kanzashi that follow the season.',
      geishaPillar3BodyShort: 'Daily practice of dance, shamisen and etiquette at the okiya.',
      geishaPillar4BodyShort: 'A once-in-a-lifetime evening arranged by the ochaya.',

      // Culture 5: Katana
      culture5Cat: '05 / HONOR & STEEL',
      culture5Title: 'SAMURAI HISTORY & SWORDS',
      culture5Subtitle: 'Immortal Pride · Katana & Armor',
      culture5Body1: 'The Katana was regarded as the "soul of the samurai." Forged through weeks of folding tamahagane steel thousands of times by sacred smiths, a Japanese sword balances supreme hardness with resilient flexibility.',
      culture5Body2: 'Today, authentic samurai lineage endures through traditional martial arts (Iaido, Kendo), historical preservation districts in Kanazawa and Aizu, and an indelible cultural standard of dedication and respect.',

      // Culture 6: Geisha
      culture6Cat: '06 / ELEGANCE & DISCIPLINE',
      culture6Title: 'THE WORLD OF GEISHA',
      culture6Subtitle: 'A lifetime of practice · A single gesture',
      culture6Body1: 'The world of the geisha has been passed down through generations in Kyoto\'s Gion flower district. From dance and shamisen to tea ceremony, flower arrangement and conversation, they perfect the aesthetics of hospitality through decades of dedication since childhood.',
      culture6Body2: 'An ozashiki evening bound by ichigo ichie — behind the glamour lies rigorous daily training and devotion to tradition.',

      // Brush Studio
      studioSectionTag: 'HANDS-ON EXPERIENCE',
      studioSectionTitle: 'BRUSH OF THE MASTER',
      studioSectionSubtitle: 'Interactive Calligraphy Studio',
      studioColorTitle: 'INK COLOR',
      studioStencilsTitle: 'KANJI STENCILS',
      studioBtnSplatter: 'INK SPLATTER',
      studioBtnClear: 'CLEAR WASHI',

      // Modal
      modalLabelSeason: 'OPTIMAL SEASON',
      modalLabelDuration: 'RECOMMENDED STAY',
      modalLabelRituals: 'ESSENTIAL EXPERIENCES',

      // Footer
      footerBrandSub: 'Discover the Spirit of Japan',
      footerAbout: 'A cinematic celebration of Japanese craftsmanship, historic samurai heritage, and extraordinary destinations across the land of the rising sun.',
      footerColDest: 'DESTINATIONS',
      footerLinkKyoto: 'Kyoto — Ancient Elegance',
      footerLinkTokyo: 'Tokyo — Neon Energy',
      footerLinkFuji: 'Mount Fuji — Sacred Peak',
      footerLinkNara: 'Nara & Kanazawa',
      footerColCulture: 'CULTURE',
      footerLinkTea: 'The Way of Tea (Chado)',
      footerLinkSakura: 'Sakura & Mono no Aware',
      footerLinkBushido: 'Bushido Philosophy',
      footerLinkStudio: 'Calligraphy Studio',
      footerColControls: 'CONTROLS',
      footerReplay: '↺ Replay Opening Intro',
      footerTop: '↑ Back to Top',
      footerCopyright: '© 2026 JAPAN TRAVEL EXPERIENCE. Inspired by authentic Japanese culture & cinematic aesthetics.',
      footerCredits: 'Design System & Pure Vanilla Web Technologies.',

      modalData: {
        kyoto: {
          title: 'Kyoto — Ancient Elegance',
          subtitleJp: '千年の都・京都',
          region: '01 / KANSAI REGION',
          description: 'Immerse yourself in Japan’s cultural heartland. Kyoto was the imperial capital of Japan for more than a millennium. Here, tranquil Zen stone gardens, lantern-lit stone alleys in Gion, and over two thousand Buddhist temples and Shinto shrines preserve the graceful spirit of ancient Japan.',
          season: 'Late March – April (Sakura) / November (Momiji Foliage)',
          duration: '4 – 6 Days recommended',
          rituals: 'Zen meditation at Daitoku-ji, Traditional Tea Ceremony in Uji, Twilight walk past Yasaka Pagoda.'
        },
        tokyo: {
          title: 'Tokyo — Neon Energy',
          subtitleJp: '伝統と未来・東京',
          region: '02 / KANTO REGION',
          description: 'Where hyper-futuristic neon skylines meet timeless Edo heritage. Tokyo is a sensory marvel of towering architecture, Michelin-starred culinary artistry, tranquil shrine groves nestled beneath skyscrapers, and high-speed Shinkansen bullet trains.',
          season: 'Year-round / Autumn & Spring optimal',
          duration: '5 – 7 Days recommended',
          rituals: 'Morning market visit in Tsukiji, Early dusk at Shibuya Crossing, Serenity walk through Meiji Jingu forest.'
        },
        fuji: {
          title: 'Mount Fuji — Beyond the Clouds',
          subtitleJp: '霊峰・富士山',
          region: '03 / CHUBU REGION',
          description: 'Soaring 3,776 meters into the heavens, Mount Fuji is the ultimate symbol of Japan’s sacred natural grandeur. Revered for millennia as a spiritual pilgrimage site and poetic muse, its symmetrical snow-capped cone reflects upon the tranquil waters of the Five Lakes.',
          season: 'July – Early September (Climbing) / Oct – May (Snow Peak Views)',
          duration: '2 – 3 Days recommended',
          rituals: 'Sunrise view from Chureito Pagoda, Onsen hot spring bath with Fuji panorama, Lake Kawaguchiko boat glide.'
        }
      }
    },

    vi: {
      langName: 'Tiếng Việt',
      langShort: 'VI',
      flag: '🇻🇳',

      // Header
      navPrologue: 'LỜI MỞ ĐẦU',
      navSamurai: 'TINH THẦN SAMURAI',
      navDestinations: 'ĐIỂM ĐẾN',
      navCulture: 'VĂN HÓA',
      navGeisha: 'GEISHA',
      navStudio: 'PHÒNG THƯ PHÁP',
      replayBtn: 'XEM LẠI',
      audioOn: 'ÂM THANH BẬT',
      audioOff: 'ÂM THANH TẮT',

      // Intro Overlay
      skipIntro: 'BỎ QUA',
      enterWithSound: 'VÀO CÙNG ÂM THANH',
      startHint: 'Hoặc nhấp bất kỳ đâu để vào trang',
      greetingSub: 'Chào mừng bạn đến với Nhật Bản',
      samuraiTag: 'TINH THẦN CHIẾN BINH',
      samuraiCaptionTitle: 'Ý CHÍ SAMURAI',
      exploreJapanBtn: 'KHÁM PHÁ NHẬT BẢN',
      introQuoteLines: [
        'Ngàn ngày rèn luyện là ngắn, vạn ngày rèn luyện là sâu.',
        'Dù thực lực đến đâu, cũng chớ nên tự mãn.',
        'Hãy không ngừng tu luyện.',
        'Muốn tới thành công đích thực, ai cũng phải vượt qua gian khổ rèn luyện.',
      ],

      // Hero Section
      heroChapter: 'CHƯƠNG 01 / LỜI MỞ ĐẦU',
      heroSubtitle: 'HÀNH TRÌNH CHẠM VÀO TÂM HỒN NHẬT BẢN',
      heroTitle: 'KHÁM PHÁ<br>TINH HOA NHẬT BẢN',
      heroDesc: 'Từ những pháo đài samurai cổ kính đến các đô thị rực rỡ ánh đèn neon. Hành trình xuyên qua vùng đất thiêng nơi sự tĩnh lặng của thiền định hòa quyện cùng nghệ thuật và công nghệ hiện đại đỉnh cao.',
      heroBtnDestinations: 'KHÁM PHÁ ĐIỂM ĐẾN',
      heroBtnSamurai: 'CON ĐƯỜNG SAMURAI',
      heroScroll: 'CUỘN ĐỂ KHÁM PHÁ',

      // Samurai Section
      samuraiSectionTag: 'DI SẢN & KỶ LUẬT',
      samuraiSectionTitle: 'CON ĐƯỜNG SAMURAI & TINH THẦN BẤT DIỆT',
      samuraiSectionSubtitle: 'Tinh Thần Võ Sĩ Đạo & Mỹ Học Bất Diệt',
      samuraiPhilosophyBadge: 'ĐẠO VÕ SĨ・TRIẾT LÝ BUSHIDO',
      samuraiQuote: '“Chiến thắng chân thực nhất là chiến thắng chính bản thân mình. Lưỡi kiếm được tôi luyện trong lửa đỏ, nhưng được vung lên bằng sự điềm tĩnh và kiềm chế.”',
      samuraiText: 'Vượt trên cả những huyền thoại điện ảnh, các Samurai lịch sử từng là những học giả, nhà thơ, thiền sư và bậc thầy chiến lược. Suốt hơn bảy thế kỷ, quy tắc Võ Sĩ Đạo (Bushido) của họ đã định hình mỹ học Nhật Bản, nghệ thuật rèn kiếm, kiến trúc lâu đài và phẩm giá đạo đức con người.',
      samuraiReadMoreBtn: 'Xem Thêm Về Samurai',

      // Virtues
      virtueGiName: 'NGHĨA (GI)',
      virtueGiMeaning: 'Chính Trực & Công Lý',
      virtueYuName: 'DŨNG (YU)',
      virtueYuMeaning: 'Dũng Cảm & Quả Cảm',
      virtueJinName: 'NHÂN (JIN)',
      virtueJinMeaning: 'Nhân Từ & Bác Ái',
      virtueReiName: 'LỄ (REI)',
      virtueReiMeaning: 'Lễ Độ & Tôn Kính',
      virtueMakotoName: 'THÀNH (MAKOTO)',
      virtueMakotoMeaning: 'Chân Thành & Trung Thực',
      virtueMeiyoName: 'DANH DỰ (MEIYO)',
      virtueMeiyoMeaning: 'Danh Dự & Khí Tiết',
      virtueChugiName: 'TRUNG NGHĨA (CHUGI)',
      virtueChugiMeaning: 'Trung Thành & Tận Tụy',

      // Destinations Section
      destSectionTag: 'HÀNH TRÌNH CHỌN LỌC',
      destSectionTitle: 'ĐIỂM ĐẾN NỔI BẬT',
      destSectionSubtitle: 'Những Hành Trình Độc Đáo Khắp Nhật Bản',

      // Kyoto
      kyotoRegion: '01 / VÙNG KANSAI',
      kyotoTitle: 'KYOTO',
      kyotoSubtitle: 'Cố Đô Ngàn Năm Cổ Kính',
      kyotoDesc: 'Trở về thời kỳ hoàng kim của cố đô Nhật Bản. Dạo bước dưới hàng ngàn cổng torii đỏ rực tại Fushimi Inari, lang thang trên những con phố lát đá lung linh ánh đèn lồng ở Gion, và khám phá hơn hai ngàn ngôi chùa thiền tịnh ngàn năm tuổi.',
      kyotoHl1: 'Đền Fushimi Inari',
      kyotoHl2: 'Rừng Trúc Arashiyama',
      kyotoHl3: 'Chùa Kiyomizu-dera',
      kyotoHl4: 'Phố Trà Đạo Gion',
      kyotoBtn: 'XEM CHI TIẾT KYOTO',

      // Tokyo
      tokyoRegion: '02 / VÙNG KANTO',
      tokyoTitle: 'TOKYO',
      tokyoSubtitle: 'Giao Lộ Truyền Thống & Tương Lai',
      tokyoDesc: 'Bản giao hưởng đầy ấn tượng giữa ánh sáng neon hiện đại và những thánh địa Edo tĩnh lặng. Đứng giữa ngã tư Shibuya huyền thoại, khám phá những con hẻm Shinjuku huyền ảo và tìm lại sự an yên dưới bóng cây cổ thụ tại đền Meiji Jingu.',
      tokyoHl1: 'Ngã Tư Shibuya',
      tokyoHl2: 'Ngõ Omoide Shinjuku',
      tokyoHl3: 'Chùa Asakusa Senso-ji',
      tokyoHl4: 'Ẩm Thực Thượng Hạng Ginza',
      tokyoBtn: 'XEM CHI TIẾT TOKYO',

      // Fuji
      fujiRegion: '03 / VÙNG CHUBU',
      fujiTitle: 'NÚI PHÚ SĨ',
      fujiSubtitle: 'Đỉnh Núi Thiêng Giữa Ngàn Mây',
      fujiDesc: 'Đỉnh núi thiêng cao 3.776 mét vươn tới trời xanh, biểu tượng trường tồn của vẻ đẹp và đức tin Nhật Bản. Ngắm nhìn bóng núi tuyết soi bóng trên hồ Kawaguchiko, ngâm mình trong suối khoáng nóng onsen và đón bình minh từ chùa Chureito tuyệt mỹ.',
      fujiHl1: 'Hồ Kawaguchiko',
      fujiHl2: 'Chùa Chureito',
      fujiHl3: 'Suối Nước Nóng Hakone',
      fujiHl4: 'Phú Sĩ Ngũ Hồ',
      fujiBtn: 'XEM CHI TIẾT PHÚ SĨ',

      // Culture Section
      cultureSectionTag: 'TRỤ CỘT VĂN HÓA',
      cultureSectionTitle: 'HƠN CẢ MỘT ĐIỂM ĐẾN',
      cultureSectionSubtitle: 'Tinh Hoa Truyền Thống & Mỹ Học Nhật Bản',

      // Culture 1: Tea
      culture1Cat: '01 / THIỀN ĐỊNH & TĨNH TÂM',
      culture1Title: 'TRÀ ĐẠO',
      culture1Subtitle: 'Trà Đạo · Nhất Kỳ Nhất Hội',
      culture1Body1: 'Bắt nguồn từ triết lý Thiền tông thế kỷ 16 do thiền sư Sen no Rikyu khởi xướng, Trà Đạo biến việc pha và thưởng thức bột trà xanh matcha thành một nghi lễ thiền tịnh tĩnh tại. Đạo này tuân theo bốn nguyên tắc vĩnh cửu: Hòa, Kính, Thanh, Tịch.',
      culture1Body2: '“Nhất Kỳ Nhất Hội” (Ichigo Ichie) — Trân trọng từng lần gặp gỡ, bởi mỗi khoảnh khắc chỉ xuất hiện duy nhất một lần trong đời.',

      // Culture 2: Sakura
      culture2Cat: '02 / THIÊN NHIÊN & VÔ THƯỜNG',
      culture2Title: 'MÙA HOA ANH ĐÀO',
      culture2Subtitle: 'Hoa Anh Đào & "Mono no Aware"',
      culture2Body1: 'Mỗi độ xuân về, làn sóng hoa anh đào nở rộ khắp quần đảo Nhật Bản. Hơn cả một cảnh sắc lộng lẫy, Sakura là biểu tượng sống động của "Mono no aware" — sự cảm nhận sâu sắc, bồi hồi trước vẻ đẹp phù du và mong manh của cuộc đời.',
      culture2Body2: 'Tập tục quây quần dưới tán hoa Hanami (thưởng hoa) đã được các bậc thiên hoàng, thi nhân và thường dân yêu mến suốt hơn một thiên niên kỷ.',

      // Culture 3: Architecture
      culture3Cat: '03 / NGHỆ THUẬT GHÉP GỖ & HÀI HÒA',
      culture3Title: 'KIẾN TRÚC TRUYỀN THỐNG',
      culture3Subtitle: 'Hơi Thở Của Gỗ & Giấy',
      culture3Body1: 'Được dựng lên mà không cần dùng đến một chiếc đinh kim loại nào, các ngôi chùa nhiều tầng và nhà phố cổ machiya dựa trên kỹ thuật mộng gỗ phức tạp (Kigumi) dẻo dai trước động đất. Những cánh cửa trượt shoji mờ ảo xóa nhòa ranh giới giữa không gian sống và bốn mùa hoa lá.',
      culture3Body2: 'Từ cổng torii nổi trên mặt nước ở Miyajima đến các ngôi đình tĩnh lặng tại Kyoto, kiến trúc Nhật Bản luôn hòa quyện cùng thiên nhiên cây cỏ.',

      // Culture 4: Calligraphy
      culture4Cat: '04 / NGHỆ THUẬT NÉT CỌ',
      culture4Title: 'NGHỆ THUẬT THƯ PHÁP',
      culture4Subtitle: 'Khoảnh Khắc Của Bút & Mực · Shodo',
      culture4Body1: 'Thư pháp Shodo không đơn thuần là viết chữ; đó là sự thiền định trong chuyển động. Một khi mực đã chạm vào giấy washi thấm hút, nét vẽ không thể xóa bỏ, sửa chữa hay che đậy. Từng nét cọ lưu giữ hơi thở, nhịp điệu, lực ấn và tâm cảnh của người viết trong khoảnh khắc bất biến.',
      culture4Body2: 'Gắn liền cùng "Văn Phòng Tứ Bảo": Bút lông (Fude), Thỏi mực (Sumi), Nghiên mực (Suzuri) và Giấy truyền thống (Washi).',

      // Geisha Section
      geishaSectionTag: 'MỸ HỌC HOA PHỐ',
      geishaSectionTitle: 'GEISHA — ĐỈNH CAO CỦA SỰ TINH TẾ',
      geishaSectionSubtitle: 'Sắc đẹp và sự tinh tế trên những con phố đá Gion',
      geishaLead: 'Ở hoa phố Gion của Kyoto, thế giới của các geiko không chỉ là vẻ hào nhoáng. Từ thuở nhỏ, các học trò đã rèn luyện vũ đạo, đàn shamisen, trà đạo, cắm hoa và kỹ năng trò chuyện \u2014 làm chủ mọi bộ môn nghệ thuật để hoàn thiện mỹ học của sự tiếp đãi.',
      geishaQuote: '\u201cCả đời khổ luyện nằm trong một động tác ngắn ngủi.\u201d \u2014 tinh thần bất biến của hoa phố',
      geishaPillar1Kanji: '舞',
      geishaPillar1Title: 'Điệu vũ Kyomai',
      geishaPillar1Subtitle: 'Trường phái Inoue \u2014 tay áo vẽ nên bốn mùa',
      geishaPillar1Body: 'Dưới trường phái Inoue của Gion Kobu, Kyomai khắc họa bốn mùa qua từng chuyển động nhỏ của quạt và tay áo. Một chiếc quạt khép lại có thể hóa thành vầng trăng, dòng sông hay cơn gió.',
      geishaPillar2Kanji: '装',
      geishaPillar2Title: 'Kimono & Búi tóc',
      geishaPillar2Subtitle: 'Lụa Nishijin và mái tóc truyền thống',
      geishaPillar2Body: 'Kimono lụa Nishijin, đai obi phản chiếu mùa hiện tại, cùng mỗi búi tóc truyền thống nặng hàng kilôgam cài trâm kanzashi. Trang phục không phải để tự thể hiện, mà là sự kính trọng dành cho thực khách và cho mùa đang đến.',
      geishaPillar3Kanji: '道',
      geishaPillar3Title: 'Shamisen & Koto',
      geishaPillar3Subtitle: 'Truyền thống okiya và ochaya',
      geishaPillar3Body: 'Một maiko sống trong okiya rèn luyện lời ăn tiếng nói, phép tắc tiếp khách, trà đạo, cắm hoa và đàn shamisen mỗi ngày, học kỹ thuật lẫn tấm lòng từ người chị \u2014 vị oneesan của mình.',
      geishaPillar4Kanji: '客',
      geishaPillar4Title: 'Văn hóa Ozashiki',
      geishaPillar4Subtitle: 'Một đêm do ochaya se duyên',
      geishaPillar4Body: 'Buổi tiệc ozashiki được quán trà ochaya thu xếp là một cuộc gặp gỡ một đời một lần: cùng nâng chén sake, thưởng thức ca múa và bữa kaiseki theo mùa \u2014 chính khoảng thời gian ấy là văn hóa.',
      geishaCtaTitle: 'Đi sâu hơn vào thế giới geisha',
      geishaCtaDesc: 'Dạo bước Gion, xem maiko biểu diễn và trải nghiệm văn hóa ochaya đích thực \u2014 khám phá các bài viết chuyên đề về hoa phố.',
      geishaCtaBtn: 'KHÁM PHÁ THẾ GIỚI GEISHA',
      geishaPhilosophyBadge: 'Tâm hoa phố — ichigo ichie',
      geishaHeroCaption: 'Bên vườn momiji, cái tĩnh lặng của một lần gặp gỡ.',
      geishaStrip1: 'Sân khấu múa',
      geishaStrip2: 'Tiếng đàn shamisen',
      geishaStrip3: 'Đá lát Gion',
      geishaStrip4: 'Đèn lồng quán trà',
      geishaPillar1BodyShort: 'Trường phái Inoue vẽ bốn mùa bằng quạt và tay áo.',
      geishaPillar2BodyShort: 'Kimono lụa Nishijin và trâm cài theo mùa.',
      geishaPillar3BodyShort: 'Ngày ngày luyện múa, đàn và phép tắc tại okiya.',
      geishaPillar4BodyShort: 'Một đêm một đời do ochaya thu xếp.',

      // Culture 5: Katana
      culture5Cat: '05 / DANH DỰ & THÉP THIÊNG',
      culture5Title: 'LỊCH SỬ SAMURAI & KIẾM THUẬT',
      culture5Subtitle: 'Khí Tiết Bất Diệt · Katana & Giáp Trụ',
      culture5Body1: 'Thanh kiếm Katana từng được tôn sùng là "linh hồn của Samurai." Được các nghệ nhân linh thiêng rèn đúc qua nhiều tuần ròng bằng cách gấp thép tamahagane hàng ngàn lần, kiếm Nhật đạt tới độ cứng tột cùng nhưng vẫn giữ được sự dẻo dai khó gãy.',
      culture5Body2: 'Ngày nay, dòng dõi Samurai chân chính vẫn được tiếp nối qua các môn võ truyền thống (Iaido, Kendo), các khu phố lịch sử cổ kính tại Kanazawa, Aizu và chuẩn mực đạo đức kiên định tôn trọng lẫn nhau.',

      // Culture 6: Geisha
      culture6Cat: '06 / NHÃ QUYỀN & KỸ ĐỘ',
      culture6Title: 'THẾ GIỚI GEISHA',
      culture6Subtitle: 'Cả đời tu hành · Một khoảnh khắc tài hoa',
      culture6Body1: 'Thế giới Geisha được truyền đời qua các khu phố hoa (hanamachi) ở Gion, Kyoto. Từ múa, shamisen, trà đạo, cắm hoa đến hội thoại, họ tu luyện nghệ thuật của sự hiếu khách (omotenashi) suốt hàng chục năm từ thuở nhỏ.',
      culture6Body2: 'Một đêm tiệc trà gắn kết bằng "ichigo ichie" — sau sự lộng lẫy là những giờ luyện tập khắc khổ mỗi ngày và sự cống hiến trọn vẹn cho truyền thống.',

      // Brush Studio
      studioSectionTag: 'TRẢI NGHIỆM THỰC TẾ',
      studioSectionTitle: 'NÉT BÚT BẬC THẦY',
      studioSectionSubtitle: 'Phòng Thư Pháp Ảo · Tự Tay Viết Thư Pháp',
      studioColorTitle: 'MÀU MỰC',
      studioStencilsTitle: 'MẪU CHỮ HÁN',
      studioBtnSplatter: 'VẨY MỰC',
      studioBtnClear: 'LÀM SẠCH GIẤY',

      // Modal
      modalLabelSeason: 'THỜI ĐIỂM LÝ TƯỞNG',
      modalLabelDuration: 'THỜI GIAN LƯU TRÚ',
      modalLabelRituals: 'TRẢI NGHIỆM GỢI Ý',

      // Footer
      footerBrandSub: 'Hành Trình Khám Phá Nhật Bản',
      footerAbout: 'Hành trình tôn vinh nghệ thuật thủ công tinh xảo, di sản Samurai huyền thoại và những điểm đến ngoạn mục khắp xứ sở mặt trời mọc.',
      footerColDest: 'ĐIỂM ĐẾN',
      footerLinkKyoto: 'Kyoto — Cố Đô Ngàn Năm',
      footerLinkTokyo: 'Tokyo — Sôi Động Hiện Đại',
      footerLinkFuji: 'Núi Phú Sĩ — Đỉnh Núi Thiêng',
      footerLinkNara: 'Nara & Kanazawa',
      footerColCulture: 'VĂN HÓA',
      footerLinkTea: 'Tinh Thần Trà Đạo (Nhất Kỳ Nhất Hội)',
      footerLinkSakura: 'Hoa Anh Đào & Triết Lý Vô Thường',
      footerLinkBushido: 'Triết Lý Võ Sĩ Đạo Bushido',
      footerLinkStudio: 'Phòng Thư Pháp Trực Tiếp',
      footerColControls: 'ĐIỀU HƯỚNG',
      footerReplay: '↺ Xem Lại Giới Thiệu',
      footerTop: '↑ Lên Đầu Trang',
      footerCopyright: '© 2026 TRẢI NGHIỆM DU LỊCH NHẬT BẢN. Lấy cảm hứng từ văn hóa Nhật Bản và mỹ học điện ảnh.',
      footerCredits: 'Được xây dựng bằng hệ thống thiết kế hiện đại và công nghệ web thuần túy.',

      modalData: {
        kyoto: {
          title: 'Kyoto — Cố Đô Ngàn Năm',
          subtitleJp: '千年の都・京都',
          region: '01 / VÙNG KANSAI',
          description: 'Đắm mình vào trung tâm văn hóa của xứ sở mặt trời mọc. Kyoto từng là kinh đô của Nhật Bản trong suốt hơn một thiên niên kỷ. Nơi đây, những khu vườn thiền đá thanh tịnh, các ngõ nhỏ lát đá lung linh đèn lồng ở Gion và hơn hai ngàn ngôi đền chùa gìn giữ vẹn nguyên vẻ thanh tao của nước Nhật cổ kính.',
          season: 'Cuối tháng 3 – Tháng 4 (Mùa hoa anh đào) / Tháng 11 (Mùa lá đỏ Momiji)',
          duration: 'Gợi ý lưu trú: 4 – 6 ngày',
          rituals: 'Trải nghiệm thiền định tại chùa Daitoku-ji, Thưởng thức trà đạo truyền thống tại Uji, Dạo bước ngắm tháp Yasaka lúc hoàng hôn buông xuống.'
        },
        tokyo: {
          title: 'Tokyo — Giao Lộ Truyền Thống & Tương Lai',
          subtitleJp: '伝統と未来・東京',
          region: '02 / VÙNG KANTO',
          description: 'Nơi những tòa nhà chọc trời bừng sáng ánh đèn neon gặp gỡ di sản văn hóa Edo bất biến cùng thời gian. Tokyo là một kỳ quan đầy cảm xúc với kiến trúc đồ sộ, ẩm thực đạt sao Michelin đẳng cấp, những ngôi đền thanh tịnh ẩn mình dưới bóng cao ốc và các đoàn tàu cao tốc Shinkansen lướt nhanh.',
          season: 'Quanh năm / Đẹp nhất vào mùa Xuân và mùa Thu',
          duration: 'Gợi ý lưu trú: 5 – 7 ngày',
          rituals: 'Khám phá chợ sớm Tsukiji/Toyosu, Hòa mình vào ngã tư Shibuya lúc chập tối, Dạo bước tĩnh tâm trong rừng cây đền Meiji Jingu.'
        },
        fuji: {
          title: 'Núi Phú Sĩ — Đỉnh Núi Thiêng Giữa Ngàn Mây',
          subtitleJp: '霊峰・富士山',
          region: '03 / VÙNG CHUBU',
          description: 'Vươn cao 3.776 mét lên bầu trời xanh thẳm, Núi Phú Sĩ là biểu tượng vĩ đại nhất cho sự uy nghiêm và thiêng liêng của thiên nhiên Nhật Bản. Được tôn sùng từ ngàn đời như một thánh địa hành hương và nguồn cảm hứng thơ ca bất tận, đỉnh núi tuyết hình nón tuyệt mỹ phản chiếu rạng rỡ trên mặt nước phẳng lặng của Phú Sĩ Ngũ Hồ.',
          season: 'Tháng 7 – Đầu tháng 9 (Mùa leo núi) / Tháng 10 – Tháng 5 (Ngắm đỉnh núi phủ tuyết)',
          duration: 'Gợi ý lưu trú: 2 – 3 ngày',
          rituals: 'Ngắm bình minh từ chùa Chureito, Ngâm suối nước nóng Onsen ngắm toàn cảnh núi Phú Sĩ, Du ngoạn thuyền êm đềm trên hồ Kawaguchiko.'
        }
      }
    }
  };

  // State
  let currentLang = 'vi';

  try {
    const saved = localStorage.getItem('site_lang');
    if (saved && I18N_DATA[saved]) {
      currentLang = saved;
    }
  } catch (e) {
    currentLang = 'vi';
  }

  function applyLanguage(lang) {
    if (!I18N_DATA[lang]) lang = 'vi';
    currentLang = lang;

    try {
      localStorage.setItem('site_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;

    const data = I18N_DATA[lang];

    // Update Dropdown UI
    const currentLabel = document.querySelector('.lang-current-label');
    if (currentLabel) {
      currentLabel.textContent = data.langName;
    }

    const options = document.querySelectorAll('.lang-option');
    options.forEach(opt => {
      const optLang = opt.getAttribute('data-lang');
      opt.classList.toggle('active', optLang === lang);
    });

    // Update all elements with data-i18n
    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (data[key] !== undefined) {
        if (typeof data[key] === 'string' && data[key].includes('<')) {
          el.innerHTML = data[key];
        } else {
          el.textContent = data[key];
        }
      }
    });

    // Update audio button label according to audio mute state
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (audioBtn) {
      const textSpan = audioBtn.querySelector('.audio-status-text');
      const bgMusic = document.getElementById('intro-bg-music');
      const isMuted = bgMusic ? bgMusic.muted : audioBtn.classList.contains('muted');
      if (textSpan) {
        textSpan.textContent = isMuted ? data.audioOff : data.audioOn;
      }
    }

    // Update JapanTravelApp destinationData if instantiated
    if (window.japanApp && data.modalData) {
      window.japanApp.destinationData = data.modalData;
    }

    // Dispatch event so other modules can react if needed
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, data } }));
  }

  function initDropdown() {
    const wrapper = document.getElementById('lang-dropdown-wrapper');
    const toggleBtn = document.getElementById('lang-toggle-btn');
    const menu = document.getElementById('lang-dropdown-menu');
    if (!wrapper || !toggleBtn || !menu) return;

    // Toggle button click
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = wrapper.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Option selection
    const options = menu.querySelectorAll('.lang-option');
    options.forEach(opt => {
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        const selectedLang = this.getAttribute('data-lang');
        if (selectedLang) {
          applyLanguage(selectedLang);
        }
        wrapper.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wrapper.classList.contains('open')) {
        wrapper.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.focus();
      }
    });
  }

  // Expose global methods and data
  window.i18n = {
    setLanguage: applyLanguage,
    getCurrentLanguage: function () { return currentLang; },
    getData: function (lang) { return I18N_DATA[lang || currentLang]; },
    getAllData: function () { return I18N_DATA; }
  };

  // Helper for destination modal
  window.getDestinationData = function (destKey) {
    const lang = currentLang;
    if (I18N_DATA[lang] && I18N_DATA[lang].modalData && I18N_DATA[lang].modalData[destKey]) {
      return I18N_DATA[lang].modalData[destKey];
    }
    return I18N_DATA.ja.modalData[destKey];
  };

  // Initialize on DOMContentLoaded or immediately if ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initDropdown();
      applyLanguage(currentLang);
    });
  } else {
    initDropdown();
    applyLanguage(currentLang);
  }
})();

