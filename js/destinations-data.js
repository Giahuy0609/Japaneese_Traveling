/* ==========================================================================
   10 PREFECTURES OF JAPAN — ENHANCED DATA & FLYCAM SHOWCASE
   Kyoto, Tokyo, Mount Fuji, Osaka, Nara, Hiroshima, Hokkaido, Okinawa, Kanazawa, Nagano
   ========================================================================== */

const DESTINATIONS_DATA_ENHANCED = {
  ja: {
    sectionTag: '厳選された日本の名所',
    sectionTitle: '日本の至宝・10大名所',
    sectionSubtitle: '映画のような空撮映像、絶品郷土美食、悠久の歴史スポット',
    foodTitle: '名物・至高の郷土美食',
    attractionsTitle: '必見の観光名所・名勝',
    seasonLabel: 'おすすめの季節',
    durationLabel: '推奨滞在日数',
    flycamBadge: '4K FLYCAM 空撮',
    exploreBtn: '詳細と空撮を見る',
    destinations: {
      kyoto: {
        id: 'kyoto',
        num: '01',
        title: '京都 — 千年の古都',
        subtitleJp: '千年の都・古都の雅',
        region: '01 / 関西地方',
        kanji: '京都',
        video: 'assets/video/YTSave.to_YouTube_Media_AMymdib9-8A_Travel-Kyoto-in-a-Minute-Aerial-Drone-Video-Expedia_003_1080p.mp4',
        heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
        desc: '千年以上日本の都として栄えた京都。伏見稲荷の千本鳥居、嵐山の青々とした竹林、そして静謐な枯山水の禅寺が織りなす究極の日本美をお届けします。',
        highlights: ['伏見稲荷大社', '嵐山 竹林の小径', '音羽山 清水寺', '祇園 花街'],
        season: '3月下旬～4月（桜）/ 11月（紅葉）',
        duration: '4～6日間',
        food: [
          { name: '京懐石（かいせき）', desc: '四季折々の旬の食材を芸術的に盛り付けた日本料理の最高峰。', thumb: 'assets/img/Kaiseki-Osechi-2-768x512.webp' },
          { name: '宇治抹茶と和菓子', desc: '伝統ある宇治の石臼挽き抹茶と、職人が手掛ける優美な上生菓子。', thumb: 'assets/img/images.jpg' }
        ],
        spots: [
          { name: '伏見稲荷大社', desc: '稲荷山の神聖な森へと続く一万基以上の朱色の千本鳥居。', thumb: 'assets/img/CNDL_NB_fushimi inari taisha_transviet_4.png' },
          { name: '金閣寺（鹿苑寺）', desc: '鏡湖池の水面に金色に輝く舎利殿の優美な姿。', thumb: 'assets/img/zohuea6rjofq6l6qohy5.jpg' }
        ]
      },
      tokyo: {
        id: 'tokyo',
        num: '02',
        title: '東京 — 伝統と未来の躍動',
        subtitleJp: '伝統と未来が交差する街',
        region: '02 / 関東地方',
        kanji: '東京',
        video: 'assets/video/snaptik.vn_7539024049779821829.mp4',
        heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85',
        desc: '超近代的なネオン摩天楼と、江戸の歴史的情緒が共存する巨大都市。世界屈指の美食と先端カルチャーが脈動しています。',
        highlights: ['渋谷スクランブル交差点', '浅草寺・雷門', '新宿の夜景', '秋葉原・銀座'],
        season: '通年（春・秋が快適）',
        duration: '5～7日間',
        food: [
          { name: '江戸前寿司', desc: '豊洲市場直送の新鮮な極上魚介を熟練の職人が握る伝統寿司。', thumb: 'assets/img/6d5f3dbf-edomae-sushi-e1629194763605.jpg' },
          { name: '本格醤油・豚骨ラーメン', desc: '濃厚な出汁と自家製麺が織りなす世界的人気のソウルフード。', thumb: 'assets/img/cach-nau-mi-ra-men_0b6281ab0660445eb98354f40166054e_1024x1024.jpg' }
        ],
        spots: [
          { name: '浅草寺と仲見世通り', desc: '628年創建、東京都内最古の寺院と江戸情緒香る門前町。', thumb: 'assets/img/chua-sensoji-4.webp' },
          { name: '渋谷スカイ & スクランブル交差点', desc: '地上229mから360度パノラマで東京の街並みを見渡す展望台。', thumb: 'assets/img/20230823_125802_3b72d60b_w1920.webp' }
        ]
      },
      fuji: {
        id: 'fuji',
        num: '03',
        title: '富士山 & 静岡・山梨 — 雲上の霊峰',
        subtitleJp: '雲上の霊峰・不朽の象徴',
        region: '03 / 中部地方',
        kanji: '富士山',
        video: 'assets/video/17081500_1920_1080_30fps.mp4',
        heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
        desc: '標高3,776メートル、日本の信仰と美の象徴。静謐な富士五湖の水面に映る逆さ富士と、名湯箱根温泉の絶景に癒やされます。',
        highlights: ['河口湖の逆さ富士', '新倉山浅間公園 忠霊塔', '箱根温泉郷', '白糸の滝'],
        season: '7月～9月（登山）/ 11月～3月（冠雪絶景）',
        duration: '2～3日間',
        food: [
          { name: '甲州ほうとう鍋', desc: '平打ちうどんとカボチャなどの地場野菜を味噌仕立てで煮込んだ郷土料理。', thumb: 'assets/img/Houtou.jpg' },
          { name: '静岡深蒸し茶 & 桜えび', desc: '富士山の清らかな雪解け水で育まれた名茶と駿河湾名物の桜えび。', thumb: 'assets/img/japan-shizuoka-food-suruga-bay-tea-table.jpg' }
        ],
        spots: [
          { name: '新倉山浅間公園（忠霊塔）', desc: '五重塔、桜、そして富士山が一望できる世界的に有名な日本を象徴する構図。', thumb: 'assets/img/chureito-pagoda-phu-si.png' },
          { name: '忍野八海（おしのはっかい）', desc: '富士山の雪解け水が数十年の歳月をかけて湧き出る神秘的な8つの清池。', thumb: 'assets/img/du-lich-lang-co-oshino-hakkai-1.png' }
        ]
      },
      osaka: {
        id: 'osaka',
        num: '04',
        title: '大阪 — 天下の台所と情熱の街',
        subtitleJp: '天下の台所・食と商人の都',
        region: '04 / 関西地方',
        kanji: '大阪',
        video: 'assets/video/13062665_3840_2160_30fps.mp4',
        heroImage: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1400&q=85',
        desc: '活気あふれる道頓堀のネオン、歴史薫る大阪城、そして「食い倒れ」の文化が息づく日本屈指のエンターテインメント都市。',
        highlights: ['大阪城天守閣', '道頓堀・グリコサイン', '新世界・通天閣', 'USJ'],
        season: '3月～5月 / 9月～11月',
        duration: '3～4日間',
        food: [
          { name: '本場たこ焼き & お好み焼き', desc: '外はカリッと中はトロトロ。秘伝の出汁と濃厚ソースが絡む粉もんの王様。', thumb: 'assets/img/Takoyaki_by_yomi955.jpg' },
          { name: '新世界 串カツ', desc: '揚げたて熱々の具材を「ソース二度づけ禁止」の特製ダレにくぐらせて食す逸品。', thumb: 'assets/img/KushikatsuDaruma01.jpg' }
        ],
        spots: [
          { name: '大阪城公園', desc: '豊臣秀吉が築城した豪華絢爛な名城。壮大な石垣と広大な堀に囲まれます。', thumb: 'assets/img/2018_Osaka_Castle_02.jpg' },
          { name: '道頓堀川と戎橋', desc: '夜になるときらびやかな巨大ネオンが川面に反射する大阪一の賑わい処。', thumb: 'assets/img/dia-diem-check-in-osaka-11.jpg' }
        ]
      },
      nara: {
        id: 'nara',
        num: '05',
        title: '奈良 — 神鹿と古仏が眠る古都',
        subtitleJp: '神鹿の杜・日本の黎明',
        region: '05 / 関西地方',
        kanji: '奈良',
        video: 'assets/video/17431548-hd_1920_1080_60fps.mp4',
        heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1400&q=85',
        desc: '京都よりもさらに古い歴史を誇る平城京の地。千頭以上の神鹿が悠然と歩き、世界最大級の木造建築・東大寺大仏殿が鎮座します。',
        highlights: ['東大寺 大仏殿', '奈良公園の神鹿', '春日大社', '法隆寺 五重塔'],
        season: '4月（桜）/ 10月～11月（紅葉）',
        duration: '1～2日間',
        food: [
          { name: '柿の葉寿司', desc: '鯖や鮭の押し寿司を柿の葉で包み、芳醇な香りと旨味を引き出した伝統保存食。', thumb: 'assets/img/EfBzS9mUMAABuZ9-1024x768.webp' },
          { name: '大和茶粥と葛切り', desc: '吉野本葛を使用した極上の透明感と喉越しを誇る老舗の和甘味。', thumb: 'assets/img/61VNyaGvTVL._AC_UF1000,1000_QL80_.jpg' }
        ],
        spots: [
          { name: '東大寺 盧舎那仏（奈良の大仏）', desc: '高さ約15mを誇る世界最大の金銅仏と、圧倒的な威容を誇る大仏殿。', thumb: 'assets/img/ngoi-chua-todaiji.jpg' },
          { name: '春日大社', desc: '朱塗りの社殿と約三千基におよぶ石灯籠・釣灯籠が並ぶ神秘的な古社。', thumb: 'assets/img/Kasuga-Taisha-Shrine-21.webp' }
        ]
      },
      hiroshima: {
        id: 'hiroshima',
        num: '06',
        title: '広島 & 宮島 — 平和の祈りと海上社殿',
        subtitleJp: '安芸の宮島・不屈の魂',
        region: '06 / 中国地方',
        kanji: '広島',
        video: 'assets/video/hirosima.mp4',
        heroImage: 'https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1400&q=85',
        desc: '瀬戸内海の青い海に浮かぶ厳島神社の大鳥居と、平和記念都市として世界中から人々が祈りを捧げに訪れる歴史の街。',
        highlights: ['厳島神社 海上大鳥居', '平和記念公園・原爆ドーム', '宮島 弥山', '尾道の坂道'],
        season: '10月～11月（紅葉の宮島）/ 3月～5月',
        duration: '2～3日間',
        food: [
          { name: '広島風お好み焼き', desc: 'たっぷりのキャベツ、豚肉、中華麺を薄い生地で重ね焼きにした絶品グルメ。', thumb: 'assets/img/agkaer-1760338140807.jpg' },
          { name: '瀬戸内産 焼き牡蠣', desc: '身がぷりぷりと引き締まり、濃厚な磯の風味が口いっぱいに広がる特産牡蠣。', thumb: 'assets/img/hàu.jpg' }
        ],
        spots: [
          { name: '嚴島神社（世界文化遺産）', desc: '満潮時には社殿と大鳥居がまるで海に浮かんでいるかのように見える国宝。', thumb: 'assets/img/đền.jpg' },
          { name: '原爆ドーム & 平和祈念資料館', desc: '恒久平和を世界に発信し続ける歴史的モニュメント。', thumb: 'assets/img/tuong-niemjpg.jpg' }
        ]
      },
      hokkaido: {
        id: 'hokkaido',
        num: '07',
        title: '北海道 — 雄大な北の大地と白銀の楽園',
        subtitleJp: '雄大なる大地・白銀の美',
        region: '07 / 北海道地方',
        kanji: '北海道',
        video: 'assets/video/YTSave.to_YouTube_Media_gos2UVXy8Kc_Hokkaido-Japan-in-4k-Cinematic-Autumn-Version_002_1440p.mp4',
        heroImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=85',
        desc: 'パウダースノーのスキーリゾート、富良野のラベンダー畑、そして日本一新鮮な海の幸が揃う大自然のワンダーランド。',
        highlights: ['札幌雪まつり', '富良野のラベンダー畑', '小樽運河', 'ニセコの極上パウダースノー'],
        season: '12月～2月（銀世界・スキー）/ 7月～8月（花畑避暑）',
        duration: '5～7日間',
        food: [
          { name: '極上海鮮丼（ウニ・イクラ・カニ）', desc: 'オホーツク海と太平洋の豊かな恵みを豪快に盛った贅沢な一杯。', thumb: 'assets/img/seafood-from-the-recent-hokkaido-trip-v0-0s7mco2dg2uf1.webp' },
          { name: '札幌味噌ラーメン & ジンギスカン', desc: '香ばしい味噌スープとバターコーン、特製タレで焼くヘルシーな羊肉。', thumb: 'assets/img/duowy2sv1k281.jpg' }
        ],
        spots: [
          { name: '小樽運河のガス灯', desc: '石造りの倉庫群が並び、夕暮れにはガス灯がノスタルジックに灯る名所。', thumb: 'assets/img/kênh đào.jpg' },
          { name: '美瑛の白金青い池', desc: '立ち枯れのカラマツとアルミニウム成分が生み出す奇跡のコバルトブルーの水面。', thumb: 'assets/img/35b170024280d8033dbf336c517c4b27.jpg' }
        ]
      },
      okinawa: {
        id: 'okinawa',
        num: '08',
        title: '沖縄 — エメラルドの海と琉球王国',
        subtitleJp: '琉球の風・南国の楽園',
        region: '08 / 九州・沖縄地方',
        kanji: '沖縄',
        video: 'assets/video/YTSave.to_YouTube_Media_uz31wGcyEr0_OKINAWA-JAPAN-4K-Cinematic-Drone-Shot_002_1440p.mp4',
        heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
        desc: '日本屈指の透明度を誇るサンゴ礁の海、独自の琉球王朝文化、そして温かい島人の心が迎えてくれる南国の楽園。',
        highlights: ['首里城正殿', '美ら海水族館', '古宇利島大橋', '石垣島・慶良間諸島'],
        season: '4月～10月（ビーチ・マリンアクティビティ）',
        duration: '4～5日間',
        food: [
          { name: '沖縄そば & ラフテー', desc: '豚骨と鰹節のあっさりスープに太麺、じっくり煮込んだとろける豚の角煮。', thumb: 'assets/img/normal_55265c32-ec78-441b-9d61-bea2874791b7.jpg' },
          { name: 'ゴーヤーチャンプルー & 海ぶどう', desc: '島豆腐と苦瓜の炒め物と、プチプチとした食感がたまらない「海の宝石」。', thumb: 'assets/img/mướp đắng.jpg' }
        ],
        spots: [
          { name: '沖縄美ら海水族館', desc: '巨大アクリルパネル越しに巨大なジンベエザメやナンヨウマンタが舞う圧巻の光景。', thumb: 'assets/img/thủy cung.jpg' },
          { name: '万座毛（まんざもう）', desc: '象の鼻のような奇岩と、眼下に広がるエメラルドグリーンの断崖絶壁。', thumb: 'assets/img/mũi voi.jpg' }
        ]
      },
      kanazawa: {
        id: 'kanazawa',
        num: '09',
        title: '金沢 & 石川 — 金箔と加賀百万石の工芸',
        subtitleJp: '加賀百万石・黄金の伝統',
        region: '09 / 北陸地方',
        kanji: '金沢',
        video: 'assets/video/13392254_1920_1080_30fps.mp4',
        heroImage: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1400&q=85',
        desc: '日本三名園のひとつ兼六園、風情あるひがし茶屋街、そして日本の金箔生産の99%を占める伝統美学の聖地。',
        highlights: ['日本三名園・兼六園', 'ひがし茶屋街', '金沢21世紀美術館', '近江町市場'],
        season: '11月～3月（冬の雪吊りと寒ブリ）/ 4月',
        duration: '2～3日間',
        food: [
          { name: '加賀料理 & のどぐろの塩焼き', desc: '「白身のトロ」と称される高級魚のどぐろと、伝統九谷焼に盛り付けられた会席。', thumb: 'assets/img/12430697.avif' },
          { name: '金箔ソフトクリーム', desc: '一枚の純金箔をまるごと贅沢にまとわせた金沢ならではの華やかな名物スイーツ。', thumb: 'assets/img/dát vàng.jpg' }
        ],
        spots: [
          { name: '兼六園（特別名勝）', desc: '六つの優れた景勝（広大・幽邃・人力・蒼古・水泉・眺望）を兼ね備えた名庭園。', thumb: 'assets/img/kenrokuen.jpg' },
          { name: 'ひがし茶屋街', desc: '美しい格子戸の町家が連なり、三味線の音が微かに響く江戸時代の花街の面影。', thumb: 'assets/img/kanazawa-higashi-chaya.jpg' }
        ]
      },
      nagano: {
        id: 'nagano',
        num: '10',
        title: '長野 & 日本アルプス — 雪猿の温泉と大自然',
        subtitleJp: '日本アルプス・神々の峰',
        region: '10 / 中部地方',
        kanji: '長野',
        video: 'assets/video/núi tuyết.mp4',
        heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85',
        desc: '3,000m級の日本アルプス、世界中の人々を魅了する地獄谷のスノーモンキー、そして千数百年の歴史を誇る善光寺。',
        highlights: ['地獄谷野猿公苑（スノーモンキー）', '信州 善光寺', '上高地の梓川', '白馬スキースノーボード'],
        season: '12月～3月（温泉猿・雪景色）/ 5月～10月（上高地トレッキング）',
        duration: '3～4日間',
        food: [
          { name: '信州手打ち戸隠そば', desc: '冷涼な高地と清冽な湧水で打つ、喉越しと香りが抜群の日本三大そば。', thumb: 'assets/img/web_shinshusoba-i.jpg' },
          { name: '信州牛の朴葉味噌焼き & おやき', desc: '特産のリンゴを食べて育った極上霜降り和牛と、野菜を包んで焼いた素朴な郷土食。', thumb: 'assets/img/1_JIZJ.jpg' }
        ],
        spots: [
          { name: '地獄谷野猿公苑', desc: '極寒の雪景色の中、気持ちよさそうに天然露天風呂に浸かる野生の日本ザル。', thumb: 'assets/img/Jigokudani-entrance.webp' },
          { name: '上高地（かみこうち）河童橋', desc: '穂高連峰の険しい岩峰と梓川の清流が織りなす「神降地」と称される山岳景勝地。', thumb: 'assets/img/Myojin-bashi-600x400.webp' }
        ]
      }
    }
  },

  en: {
    sectionTag: 'CURATED DESTINATIONS ACROSS JAPAN',
    sectionTitle: 'TOP 10 CROWN JEWELS OF JAPAN',
    sectionSubtitle: 'Cinematic Drone Flycam, Authentic Culinary Mastery & Sacred Highlights',
    foodTitle: 'Renowned Regional Culinary Gems',
    attractionsTitle: 'Essential Landmarks & Scenic Wonders',
    seasonLabel: 'Optimal Season',
    durationLabel: 'Recommended Stay',
    flycamBadge: '4K DRONE FLYCAM',
    exploreBtn: 'Explore Flycam & Details',
    destinations: {
      kyoto: {
        id: 'kyoto', num: '01', title: 'Kyoto — Ancient Imperial Elegance', subtitleJp: '千年の都・京都', region: '01 / KANSAI REGION', kanji: '京都',
        video: 'assets/video/YTSave.to_YouTube_Media_AMymdib9-8A_Travel-Kyoto-in-a-Minute-Aerial-Drone-Video-Expedia_003_1080p.mp4', heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
        desc: 'Imperial capital for more than a millennium. Discover thousands of vermilion torii gates at Fushimi Inari, serene bamboo groves of Arashiyama, and lantern-lit stone alleys in Gion.',
        highlights: ['Fushimi Inari Torii Path', 'Arashiyama Bamboo Forest', 'Kiyomizu-dera Cliffside', 'Gion Tea Houses'], season: 'Late March – April (Sakura) / November (Autumn Foliage)', duration: '4 – 6 Days',
        food: [{ name: 'Kyo-Kaiseki Tasting', desc: 'Multi-course culinary art form rooted in tea ceremony aesthetics.', thumb: 'assets/img/Kaiseki-Osechi-2-768x512.webp' }, { name: 'Uji Ceremonial Matcha', desc: 'Finest hand-whisked stone-ground green tea paired with delicate wagashi.', thumb: 'assets/img/images.jpg' }],
        spots: [{ name: 'Fushimi Inari Shrine', desc: 'Over 10,000 vivid vermilion torii gates winding through sacred Mount Inari.', thumb: 'assets/img/CNDL_NB_fushimi inari taisha_transviet_4.png' }, { name: 'Kinkaku-ji (Golden Pavilion)', desc: 'Zen Buddhist temple with two top floors covered completely in pure gold leaf.', thumb: 'assets/img/zohuea6rjofq6l6qohy5.jpg' }]
      },
      tokyo: {
        id: 'tokyo', num: '02', title: 'Tokyo — Neon Energy & Timeless Edo', subtitleJp: '伝統と未来・東京', region: '02 / KANTO REGION', kanji: '東京',
        video: 'assets/video/snaptik.vn_7539024049779821829.mp4', heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85',
        desc: 'Hyper-futuristic neon skylines intersect with quiet Edo shrines, world-leading gastronomy, and endless street energy.',
        highlights: ['Shibuya Scramble Crossing', 'Senso-ji Asakusa', 'Shinjuku Night Alleys', 'Ginza & Akihabara'], season: 'Year-round (Autumn & Spring optimal)', duration: '5 – 7 Days',
        food: [{ name: 'Edomae Sushi', desc: 'Master-crafted nigiri prepared fresh from Toyosu market arrivals.', thumb: 'assets/img/6d5f3dbf-edomae-sushi-e1629194763605.jpg' }, { name: 'Artisan Ramen', desc: 'Rich artisanal pork and soy broths paired with bespoke noodles.', thumb: 'assets/img/cach-nau-mi-ra-men_0b6281ab0660445eb98354f40166054e_1024x1024.jpg' }],
        spots: [{ name: 'Senso-ji Temple & Kaminarimon', desc: 'Tokyo’s oldest sacred Buddhist temple founded in 628 AD.', thumb: 'assets/img/chua-sensoji-4.webp' }, { name: 'Shibuya Sky Observatory', desc: 'Breathtaking 360-degree open-air rooftop view 229 meters above Shibuya.', thumb: 'assets/img/20230823_125802_3b72d60b_w1920.webp' }]
      },
      fuji: {
        id: 'fuji', num: '03', title: 'Mount Fuji — Beyond the Sacred Clouds', subtitleJp: '霊峰・富士山', region: '03 / CHUBU REGION', kanji: '富士山',
        video: 'assets/video/17081500_1920_1080_30fps.mp4', heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
        desc: 'Rising 3,776 meters high, Japan’s sacred volcano mirrored in pristine alpine lakes and framed by thermal onsen waters.',
        highlights: ['Lake Kawaguchiko Reflection', 'Chureito Pagoda Panorama', 'Hakone Hot Springs', 'Shiraito Waterfalls'], season: 'July – Early Sept (Climbing) / Nov – March (Clear Snow Views)', duration: '2 – 3 Days',
        food: [{ name: 'Koshu Hoto Noodle Stew', desc: 'Comforting flat noodles braised in hearty miso with sweet pumpkin.', thumb: 'assets/img/Houtou.jpg' }, { name: 'Shizuoka Green Tea & Sakura Shrimp', desc: 'Premium mountain tea paired with delicate crispy pink shrimp from Suruga Bay.', thumb: 'assets/img/japan-shizuoka-food-suruga-bay-tea-table.jpg' }],
        spots: [{ name: 'Chureito Pagoda', desc: 'Iconic five-story pagoda overlooking cherry blossoms and Mount Fuji.', thumb: 'assets/img/chureito-pagoda-phu-si.png' }, { name: 'Oshino Hakkai Springs', desc: 'Eight crystal-clear ponds fed by subterranean snowmelt from Mount Fuji.', thumb: 'assets/img/du-lich-lang-co-oshino-hakkai-1.png' }]
      },
      osaka: {
        id: 'osaka', num: '04', title: 'Osaka — The Nation’s Kitchen & Neon Soul', subtitleJp: '天下の台所・大阪', region: '04 / KANSAI REGION', kanji: '大阪',
        video: 'assets/video/13062665_3840_2160_30fps.mp4', heroImage: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1400&q=85',
        desc: 'Pulsating street food capital, historic fortress towers, and cheerful humor in the neon heart of Kansai.',
        highlights: ['Osaka Castle Keep', 'Dotonbori Canal Neon', 'Shinsekai Tsutenkaku', 'Universal Studios Japan'], season: 'March – May / September – November', duration: '3 – 4 Days',
        food: [{ name: 'Authentic Takoyaki & Okonomiyaki', desc: 'Crispy octopus spheres and savory cabbage pancakes drizzled with sweet sauce.', thumb: 'assets/img/Takoyaki_by_yomi955.jpg' }, { name: 'Shinsekai Kushikatsu', desc: 'Deep-fried golden skewers of meat and vegetables dipped once in tangy sauce.', thumb: 'assets/img/KushikatsuDaruma01.jpg' }],
        spots: [{ name: 'Osaka Castle & Moat', desc: 'Magnificent 16th-century fortress surrounded by colossal granite walls.', thumb: 'assets/img/2018_Osaka_Castle_02.jpg' }, { name: 'Dotonbori Waterfront', desc: 'Dazzling illuminated billboards and vibrant street stalls over the canal.', thumb: 'assets/img/dia-diem-check-in-osaka-11.jpg' }]
      },
      nara: {
        id: 'nara', num: '05', title: 'Nara — Sacred Deer & Ancient Temples', subtitleJp: '神鹿の杜・奈良', region: '05 / KANSAI REGION', kanji: '奈良',
        video: 'assets/video/17431548-hd_1920_1080_60fps.mp4', heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1400&q=85',
        desc: 'Japan’s first permanent capital dating back to 710 AD. Over a thousand bowing wild deer roam freely beside monumental Buddha statues.',
        highlights: ['Todai-ji Great Buddha', 'Nara Deer Park', 'Kasuga Taisha Lanterns', 'Horyu-ji Pagoda'], season: 'April (Sakura) / October – November (Autumn)', duration: '1 – 2 Days',
        food: [{ name: 'Kakinoha-zushi', desc: 'Mackerel and salmon pressed sushi wrapped inside aromatic persimmon leaves.', thumb: 'assets/img/EfBzS9mUMAABuZ9-1024x768.webp' }, { name: 'Yoshino Kudzu Jelly', desc: 'Silky translucent starch noodles served chilled with roasted soybean powder.', thumb: 'assets/img/61VNyaGvTVL._AC_UF1000,1000_QL80_.jpg' }],
        spots: [{ name: 'Todai-ji Daibutsuden', desc: 'One of the world’s largest wooden buildings housing a 15-meter bronze Buddha.', thumb: 'assets/img/ngoi-chua-todaiji.jpg' }, { name: 'Kasuga Grand Shrine', desc: 'Famous Shinto sanctuary lined with 3,000 mossy stone and bronze lanterns.', thumb: 'assets/img/Kasuga-Taisha-Shrine-21.webp' }]
      },
      hiroshima: {
        id: 'hiroshima', num: '06', title: 'Hiroshima & Miyajima — Floating Shrine of Peace', subtitleJp: '安芸の宮島・広島', region: '06 / CHUGOKU REGION', kanji: '広島',
        video: 'assets/video/hirosima.mp4', heroImage: 'https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1400&q=85',
        desc: 'The iconic floating torii gate of Itsukushima rising from the Seto Inland Sea, alongside an inspiring city of international peace.',
        highlights: ['Floating Torii of Miyajima', 'Peace Memorial Dome', 'Mount Misen Cableway', 'Onomichi Slopes'], season: 'October – November (Maple Island) / March – May', duration: '2 – 3 Days',
        food: [{ name: 'Hiroshima-style Okonomiyaki', desc: 'Layered savory pancake with noodles, fried egg, pork, and mountain cabbage.', thumb: 'assets/img/agkaer-1760338140807.jpg' }, { name: 'Grilled Miyajima Oysters', desc: 'Plump Pacific oysters grilled over charcoal with soy sauce and lemon.', thumb: 'assets/img/hàu.jpg' }],
        spots: [{ name: 'Itsukushima Shrine', desc: 'UNESCO maritime sanctuary designed to appear as if floating upon high tide.', thumb: 'assets/img/đền.jpg' }, { name: 'Atomic Bomb Dome & Memorial', desc: 'Sole remaining structure near the hypocenter, standing as an eternal beacon of peace.', thumb: 'assets/img/tuong-niemjpg.jpg' }]
      },
      hokkaido: {
        id: 'hokkaido', num: '07', title: 'Hokkaido — Grand Wilderness & Powder Snow', subtitleJp: '大自然・北海道', region: '07 / HOKKAIDO REGION', kanji: '北海道',
        video: 'assets/video/YTSave.to_YouTube_Media_gos2UVXy8Kc_Hokkaido-Japan-in-4k-Cinematic-Autumn-Version_002_1440p.mp4', heroImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=85',
        desc: 'Vast volcanic wilderness, world-famous powder snow ski slopes, summer lavender fields, and Japan’s richest marine seafood.',
        highlights: ['Sapporo Snow Festival', 'Furano Lavender Fields', 'Otaru Historical Canal', 'Niseko Powder Slopes'], season: 'Dec – Feb (Ski & Snow) / July – Aug (Cool Summer Flowers)', duration: '5 – 7 Days',
        food: [{ name: 'King Crab & Uni Seafood Bowl', desc: 'Fresh sea urchin, salmon caviar, and crab meat caught in the frigid Okhotsk sea.', thumb: 'assets/img/seafood-from-the-recent-hokkaido-trip-v0-0s7mco2dg2uf1.webp' }, { name: 'Sapporo Miso Ramen & Jingisukan', desc: 'Piping hot miso noodles with sweet corn and grilled tender lamb barbecue.', thumb: 'assets/img/duowy2sv1k281.jpg' }],
        spots: [{ name: 'Otaru Canal Gas Lamps', desc: 'Romantic stone warehouse canal lit by atmospheric gas lights at twilight.', thumb: 'assets/img/kênh đào.jpg' }, { name: 'Biei Blue Pond', desc: 'Ethereal cobalt blue lake reflecting standing withered Japanese larch trees.', thumb: 'assets/img/35b170024280d8033dbf336c517c4b27.jpg' }]
      },
      okinawa: {
        id: 'okinawa', num: '08', title: 'Okinawa — Turquoise Seas & Ryukyu Heritage', subtitleJp: '琉球の風・沖縄', region: '08 / KYUSHU & OKINAWA', kanji: '沖縄',
        video: 'assets/video/YTSave.to_YouTube_Media_uz31wGcyEr0_OKINAWA-JAPAN-4K-Cinematic-Drone-Shot_002_1440p.mp4', heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
        desc: 'Subtropical coral paradise bathed in crystal turquoise waters, unique Ryukyu kingdom traditions, and relaxed island warmth.',
        highlights: ['Shuri Castle Ruins', 'Churaumi Aquarium', 'Kouri Ocean Bridge', 'Ishigaki Coral Reefs'], season: 'April – October (Diving & Beaches)', duration: '4 – 5 Days',
        food: [{ name: 'Okinawa Soba & Rafute', desc: 'Thick wheat noodles in pork-bonito broth topped with slow-braised pork belly.', thumb: 'assets/img/normal_55265c32-ec78-441b-9d61-bea2874791b7.jpg' }, { name: 'Goya Champuru & Sea Grapes', desc: 'Bitter melon stir-fry with island tofu paired with crunchy green caviar seaweed.', thumb: 'assets/img/mướp đắng.jpg' }],
        spots: [{ name: 'Okinawa Churaumi Aquarium', desc: 'Massive Kuroshio Sea tank home to majestic whale sharks and giant manta rays.', thumb: 'assets/img/thủy cung.jpg' }, { name: 'Cape Manzamo', desc: 'Spectacular elephant-trunk cliff overlooking vibrant emerald ocean swells.', thumb: 'assets/img/mũi voi.jpg' }]
      },
      kanazawa: {
        id: 'kanazawa', num: '09', title: 'Kanazawa & Ishikawa — Gold Leaf & Castle Traditions', subtitleJp: '加賀百万石・金沢', region: '09 / HOKURIKU REGION', kanji: '金沢',
        video: 'assets/video/13392254_1920_1080_30fps.mp4', heroImage: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1400&q=85',
        desc: 'Preserved geisha districts, samurai quarters, the classical masterpiece garden Kenroku-en, and 99% of Japan’s gold leaf mastery.',
        highlights: ['Kenroku-en Landscape Garden', 'Higashi Chaya District', '21st Century Museum', 'Omicho Seafood Market'], season: 'November – March (Snow ropes & crab) / April', duration: '2 – 3 Days',
        food: [{ name: 'Nodoguro Blackthroat Seaperch', desc: 'Regarded as the "toro of white fish", grilled with sea salt to melt-in-mouth perfection.', thumb: 'assets/img/12430697.avif' }, { name: 'Pure Gold Leaf Soft Cream', desc: 'Luxurious vanilla soft cream wrapped inside a shimmering sheet of pure edible gold.', thumb: 'assets/img/dát vàng.jpg' }],
        spots: [{ name: 'Kenroku-en Garden', desc: 'One of the Three Great Gardens of Japan, celebrated for six landscape virtues.', thumb: 'assets/img/kenrokuen.jpg' }, { name: 'Higashi Chaya Teahouses', desc: 'Lattice-windowed wooden houses echoing with shamisen melodies from geisha heritage.', thumb: 'assets/img/kanazawa-higashi-chaya.jpg' }]
      },
      nagano: {
        id: 'nagano', num: '10', title: 'Nagano & The Alps — Snow Monkeys & Alpine Peaks', subtitleJp: '日本アルプス・長野', region: '10 / CHUBU REGION', kanji: '長野',
        video: 'assets/video/núi tuyết.mp4', heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85',
        desc: '3,000-meter peaks of the Japanese Northern Alps, hot spring-bathing snow monkeys, and the ancient pilgrimage temple Zenko-ji.',
        highlights: ['Jigokudani Snow Monkey Park', 'Zenko-ji 7th-century Temple', 'Kamikochi Alpine Valley', 'Hakba Valley Skiing'], season: 'Dec – March (Snow Monkeys & Ski) / May – Oct (Kamikochi Trekking)', duration: '3 – 4 Days',
        food: [{ name: 'Handmade Shinshu Soba', desc: 'Buckwheat noodles rolled and cut by hand using crystal-clear Alpine spring water.', thumb: 'assets/img/web_shinshusoba-i.jpg' }, { name: 'Apple-fed Shinshu Beef', desc: 'Tender wagyu raised on mountain apples, grilled over aromatic magnolia leaves.', thumb: 'assets/img/1_JIZJ.jpg' }],
        spots: [{ name: 'Jigokudani Monkey Park', desc: 'Wild Japanese macaques relaxing blissfully in steaming natural thermal waters.', thumb: 'assets/img/Jigokudani-entrance.webp' }, { name: 'Kamikochi Kappa Bridge', desc: 'Pristine highland sanctuary offering cinematic views across the jagged Hotaka peaks.', thumb: 'assets/img/Myojin-bashi-600x400.webp' }]
      }
    }
  },

  vi: {
    sectionTag: 'HÀNH TRÌNH CHỌN LỌC KHẮP NƯỚC NHẬT',
    sectionTitle: '10 ĐIỂM ĐẾN NỔI BẬT NHẤT NHẬT BẢN',
    sectionSubtitle: 'Thưởng ngoạn thước phim Flycam 4K, Ẩm thực tinh hoa & Danh lam thắng cảnh nổi tiếng',
    foodTitle: 'Ẩm Thực Tinh Hoa & Đặc Sản Bản Địa',
    attractionsTitle: 'Điểm Vui Chơi & Danh Thắng Nổi Tiếng',
    seasonLabel: 'Mùa lý tưởng nhất',
    durationLabel: 'Thời gian lưu trú gợi ý',
    flycamBadge: 'FLYCAM 4K SIÊU NÉT',
    exploreBtn: 'Xem Flycam & Chi Tiết',
    destinations: {
      kyoto: {
        id: 'kyoto', num: '01', title: 'Kyoto — Cố Đô Ngàn Năm Thanh Lịch', subtitleJp: '千年の都・京都', region: '01 / VÙNG KANSAI', kanji: '京都',
        video: 'assets/video/YTSave.to_YouTube_Media_AMymdib9-8A_Travel-Kyoto-in-a-Minute-Aerial-Drone-Video-Expedia_003_1080p.mp4', heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
        desc: 'Từng là kinh đô của Nhật Bản hơn một ngàn năm. Trải nghiệm hàng vạn cổng Torii đỏ rực ở Fushimi Inari, rừng trúc Arashiyama rì rào trong gió và các con phố Geisha lung linh ánh đèn lồng tại Gion.',
        highlights: ['Đền Fushimi Inari', 'Rừng Trúc Arashiyama', 'Chùa Thanh Thủy Kiyomizu-dera', 'Phố Cổ Gion'], season: 'Cuối tháng 3 – Tháng 4 (Mùa Hoa Anh Đào) / Tháng 11 (Mùa Lá Đỏ)', duration: '4 – 6 ngày',
        food: [{ name: 'Đại Tiệc Kyo-Kaiseki', desc: 'Đỉnh cao ẩm thực cung đình Nhật Bản, cân bằng mỹ vị tinh tế theo 4 mùa.', thumb: 'assets/img/Kaiseki-Osechi-2-768x512.webp' }, { name: 'Trà Đạo Uji & Bánh Wagashi', desc: 'Trà xanh Matcha danh tiếng vùng Uji kết hợp bánh ngọt truyền thống thanh tao.', thumb: 'assets/img/images.jpg' }],
        spots: [{ name: 'Đền Fushimi Inari-taisha', desc: 'Hơn 10.000 cổng Torii màu son uốn lượn xuyên qua rừng rậm núi Inari linh thiêng.', thumb: 'assets/img/CNDL_NB_fushimi inari taisha_transviet_4.png' }, { name: 'Chùa Vàng Kinkaku-ji', desc: 'Ngôi chùa thiền tông được dát kín bằng vàng lá nguyên chất soi bóng xuống hồ Kính Hồ.', thumb: 'assets/img/zohuea6rjofq6l6qohy5.jpg' }]
      },
      tokyo: {
        id: 'tokyo', num: '02', title: 'Tokyo — Giao Lộ Ánh Sáng & Tương Lai', subtitleJp: '伝統と未来・東京', region: '02 / VÙNG KANTO', kanji: '東京',
        video: 'assets/video/snaptik.vn_7539024049779821829.mp4', heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85',
        desc: 'Bản giao hưởng kỳ ảo giữa công nghệ tương lai và những ngôi đền Edo cổ xưa. Trải nghiệm nhịp sống sôi động và ẩm thực Michelin đỉnh cao thế giới.',
        highlights: ['Ngã Tư Shibuya', 'Chùa Cổ Asakusa Senso-ji', 'Hẻm Đêm Shinjuku', 'Thiên Đường Mua Sắm Ginza'], season: 'Quanh năm (Mùa Thu & Mùa Xuân đẹp nhất)', duration: '5 – 7 ngày',
        food: [{ name: 'Sushi Edomae Thượng Hạng', desc: 'Nigiri chế tác từ nguồn hải sản tươi ngon nhất đấu giá mỗi sáng tại chợ Toyosu.', thumb: 'assets/img/6d5f3dbf-edomae-sushi-e1629194763605.jpg' }, { name: 'Mì Ramen Bí Truyền', desc: 'Nước dùng hầm xương đậm đà hàng chục tiếng kết hợp sợi mì thủ công dai ngon.', thumb: 'assets/img/cach-nau-mi-ra-men_0b6281ab0660445eb98354f40166054e_1024x1024.jpg' }],
        spots: [{ name: 'Chùa Asakusa Senso-ji', desc: 'Ngôi chùa cổ kính nhất Tokyo với chiếc lồng đèn đỏ khổng lồ ở cổng Sấm Kaminarimon.', thumb: 'assets/img/chua-sensoji-4.webp' }, { name: 'Đài Quan Sát Shibuya Sky', desc: 'Tầm nhìn 360 độ từ tầng thượng cao 229 mét bao trọn toàn cảnh thủ đô Tokyo.', thumb: 'assets/img/20230823_125802_3b72d60b_w1920.webp' }]
      },
      fuji: {
        id: 'fuji', num: '03', title: 'Núi Phú Sĩ — Đỉnh Núi Thiêng Giữa Ngàn Mây', subtitleJp: '霊峰・富士山', region: '03 / VÙNG CHUBU', kanji: '富士山',
        video: 'assets/video/17081500_1920_1080_30fps.mp4', heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
        desc: 'Đỉnh núi cao 3.776 mét, biểu tượng vĩnh cửu của tinh thần và mỹ học Nhật Bản. Thư giãn tại suối nước nóng Onsen ngắm tuyết trắng soi bóng trên hồ Kawaguchiko.',
        highlights: ['Hồ Kawaguchiko', 'Chùa Chureito Đón Bình Minh', 'Suối Nước Nóng Hakone', 'Thác Nước Shiraito'], season: 'Tháng 7 – 9 (Leo núi) / Tháng 11 – 3 (Ngắm chóp tuyết phủ trong vắt)', duration: '2 – 3 ngày',
        food: [{ name: 'Mì Hầm Koshu Hoto', desc: 'Sợi mì bản to nấu trong nồi đất cùng bí đỏ, nấm và tương miso đậm vị vùng núi.', thumb: 'assets/img/Houtou.jpg' }, { name: 'Trà Xanh Shizuoka & Tôm Sakura', desc: 'Trà thượng hạng tưới mát từ tuyết Phú Sĩ kết hợp tôm anh đào giòn ngọt vị biển.', thumb: 'assets/img/japan-shizuoka-food-suruga-bay-tea-table.jpg' }],
        spots: [{ name: 'Chùa Chureito (Công Viên Arakurayama)', desc: 'Góc chụp kinh điển biểu tượng cho đất nước Nhật Bản: Chùa năm tầng, hoa anh đào và Phú Sĩ.', thumb: 'assets/img/chureito-pagoda-phu-si.png' }, { name: 'Làng Cổ Oshino Hakkai', desc: 'Tám hồ nước trong vắt như ngọc bích lọc tự nhiên qua hàng chục lớp nham thạch Phú Sĩ.', thumb: 'assets/img/du-lich-lang-co-oshino-hakkai-1.png' }]
      },
      osaka: {
        id: 'osaka', num: '04', title: 'Osaka — Nhà Bếp Thiên Hạ & Đô Thị Nhiệt Huyết', subtitleJp: '天下の台所・大阪', region: '04 / VÙNG KANSAI', kanji: '大阪',
        video: 'assets/video/13062665_3840_2160_30fps.mp4', heroImage: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1400&q=85',
        desc: 'Thành phố ẩm thực đường phố sầm uất bậc nhất với biển hiệu Glico rực sáng bên dòng kênh Dotonbori và tòa lâu đài Osaka tráng lệ.',
        highlights: ['Lâu Đài Osaka Castle', 'Phố Đêm Dotonbori', 'Khu Phố Cổ Shinsekai', 'Công Viên Giải Trí USJ'], season: 'Tháng 3 – 5 / Tháng 9 – 11', duration: '3 – 4 ngày',
        food: [{ name: 'Bánh Bạch Tuộc Takoyaki & Okonomiyaki', desc: 'Vỏ ngoài xém giòn, bên trong mềm tan ngập nhân bạch tuộc tươi tưới sốt mayonnaise.', thumb: 'assets/img/Takoyaki_by_yomi955.jpg' }, { name: 'Xiên Que Chiên Kushikatsu', desc: 'Xiên thịt và rau củ nhúng bột chiên vàng ruộm giòn tan chấm sốt bí truyền đặc quánh.', thumb: 'assets/img/KushikatsuDaruma01.jpg' }],
        spots: [{ name: 'Lâu Đài Osaka Castle', desc: 'Pháo đài cổ xây dựng từ thế kỷ 16 bao bọc bởi hào nước sâu và tường đá thành khổng lồ.', thumb: 'assets/img/2018_Osaka_Castle_02.jpg' }, { name: 'Kênh Đào Dotonbori', desc: 'Thiên đường giải trí đêm náo nhiệt ngập tràn biển quảng cáo 3D khổng lồ.', thumb: 'assets/img/dia-diem-check-in-osaka-11.jpg' }]
      },
      nara: {
        id: 'nara', num: '05', title: 'Nara — Miền Đất Hươu Thiêng & Đại Tượng Phật', subtitleJp: '神鹿の杜・奈良', region: '05 / VÙNG KANSAI', kanji: '奈良',
        video: 'assets/video/17431548-hd_1920_1080_60fps.mp4', heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1400&q=85',
        desc: 'Cố đô đầu tiên của Nhật Bản từ năm 710. Nơi đàn hươu hơn ngàn con cúi đầu chào du khách và ngôi chùa gỗ cổ khổng lồ Todai-ji ngự trị.',
        highlights: ['Đại Phật Tượng Todai-ji', 'Công Viên Hươu Nara Park', 'Đền Đèn Lồng Kasuga Taisha', 'Chùa Cổ Horyu-ji'], season: 'Tháng 4 (Mùa Hoa) / Tháng 10 – 11 (Thu Vàng)', duration: '1 – 2 ngày',
        food: [{ name: 'Sushi Gói Lá Hồng Kakinoha-zushi', desc: 'Cá hồi và cá thu ngâm giấm ép chặt được bọc trong lá hồng rừng lưu giữ vị ngọt thơm.', thumb: 'assets/img/EfBzS9mUMAABuZ9-1024x768.webp' }, { name: 'Bột Sắn Dây Yoshino Kudzu', desc: 'Món tráng miệng quý tộc trong vắt mềm mượt ăn kèm bột đậu nành rang thơm ngát.', thumb: 'assets/img/61VNyaGvTVL._AC_UF1000,1000_QL80_.jpg' }],
        spots: [{ name: 'Chùa Todai-ji (Đông Đại Tự)', desc: 'Công trình kiến trúc gỗ lớn nhất hành tinh che chở pho tượng Đại Phật đồng đen cao 15 mét.', thumb: 'assets/img/ngoi-chua-todaiji.jpg' }, { name: 'Đền Thờ Kasuga Taisha', desc: 'Đền thờ Thần đạo cổ kính được thắp sáng bởi 3.000 chiếc đèn lồng đá phủ rêu xanh.', thumb: 'assets/img/Kasuga-Taisha-Shrine-21.webp' }]
      },
      hiroshima: {
        id: 'hiroshima', num: '06', title: 'Hiroshima & Đảo Miyajima — Cổng Thần Trên Sóng Biển', subtitleJp: '安芸の宮島・広島', region: '06 / VÙNG CHUGOKU', kanji: '広島',
        video: 'assets/video/hirosima.mp4', heroImage: 'https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1400&q=85',
        desc: 'Kỳ quan cổng Torii đứng sừng sững giữa sóng nước biển nội địa Seto cùng biểu tượng phục sinh mạnh mẽ vì hòa bình thế giới.',
        highlights: ['Cổng Nổi Torii Miyajima', 'Công Viên Hòa Bình & Tòa Nhà Vòm', 'Đỉnh Núi Misen', 'Phố Dốc Cổ Onomichi'], season: 'Tháng 10 – 11 (Miyajima mùa lá phong đỏ rực) / Tháng 3 – 5', duration: '2 – 3 ngày',
        food: [{ name: 'Bánh Xèo Hiroshima-yaki', desc: 'Bánh xèo nhiều tầng xếp lớp cùng bắp cải xào, mì sợi xém cạnh và trứng ốp la béo ngậy.', thumb: 'assets/img/agkaer-1760338140807.jpg' }, { name: 'Hàu Nướng Than Vùng Biển Seto', desc: 'Những con hàu mập mạp béo ngậy nướng mỡ hành hoặc chanh thơm lừng trên than hồng.', thumb: 'assets/img/hàu.jpg' }],
        spots: [{ name: 'Đền Itsukushima Shrine', desc: 'Di sản thế giới xây dựng trên cột gỗ nổi, khi thủy triều dâng ngập trông như cung điện nổi.', thumb: 'assets/img/đền.jpg' }, { name: 'Tòa Nhà Vòm Nguyên Tử Peace Memorial', desc: 'Công trình lịch sử duy nhất còn sót lại sau thảm họa, biểu tượng cho khát vọng hòa bình bất diệt.', thumb: 'assets/img/tuong-niemjpg.jpg' }]
      },
      hokkaido: {
        id: 'hokkaido', num: '07', title: 'Hokkaido — Xứ Sở Tuyết Trắng & Đại Ngàn', subtitleJp: '大自然・北海道', region: '07 / VÙNG HOKKAIDO', kanji: '北海道',
        video: 'assets/video/YTSave.to_YouTube_Media_gos2UVXy8Kc_Hokkaido-Japan-in-4k-Cinematic-Autumn-Version_002_1440p.mp4', heroImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=85',
        desc: 'Vương quốc tuyết bông Niseko mịn màng nhất thế giới, thảm hoa oải hương ngút ngàn ở Furano và nguồn hải sản ngon số 1 nước Nhật.',
        highlights: ['Lễ Hội Băng Tuyết Sapporo', 'Đồng Hoa Oải Hương Furano', 'Kênh Đào Cổ Otaru', 'Trượt Tuyết Niseko'], season: 'Tháng 12 – 2 (Thiên đường tuyết) / Tháng 7 – 8 (Thảm hoa mùa hè mát rượi)', duration: '5 – 7 ngày',
        food: [{ name: 'Bát Cơm Hải Sản Đảo Cua Hoàng Đế & Nhím Biển', desc: 'Cua tuyết, trứng cá hồi đỏ au và nhím biển béo ngọt vừa đánh bắt từ biển lạnh.', thumb: 'assets/img/seafood-from-the-recent-hokkaido-trip-v0-0s7mco2dg2uf1.webp' }, { name: 'Mì Ramen Miso Bơ Bắp & Thịt Nướng Jingisukan', desc: 'Tô mì bốc khói nghi ngút ngậy bơ thơm cùng thịt cừu nướng chảo gang đặc trưng Hokkaido.', thumb: 'assets/img/duowy2sv1k281.jpg' }],
        spots: [{ name: 'Kênh Đào Lãng Mạn Otaru', desc: 'Dãy nhà kho cổ bằng đá dọc kênh đào thắp sáng đèn khí ga huyền ảo lúc chập tối.', thumb: 'assets/img/kênh đào.jpg' }, { name: 'Hồ Xanh Biei Blue Pond', desc: 'Mặt hồ màu xanh ngọc bích kỳ ảo phản chiếu những thân cây bạch dương khô đứng giữa làn nước.', thumb: 'assets/img/35b170024280d8033dbf336c517c4b27.jpg' }]
      },
      okinawa: {
        id: 'okinawa', num: '08', title: 'Okinawa — Thiên Đường Biển Ngọc & Vương Triều Ryukyu', subtitleJp: '琉球の風・沖縄', region: '08 / VÙNG KYUSHU & OKINAWA', kanji: '沖縄',
        video: 'assets/video/YTSave.to_YouTube_Media_uz31wGcyEr0_OKINAWA-JAPAN-4K-Cinematic-Drone-Shot_002_1440p.mp4', heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
        desc: 'Làn nước biển xanh ngọc bích nhìn thấy tận đáy, rạn san hô kỳ thú cùng nền văn hóa vương triều Ryukyu độc đáo mang đậm phong vị nhiệt đới.',
        highlights: ['Thành Cổ Shuri Castle', 'Thủy Cung Churaumi', 'Cầu Vượt Biển Kouri', 'Quần Đảo Ishigaki'], season: 'Tháng 4 – 10 (Mùa lặn biển ngắm san hô & tắm biển tuyệt nhất)', duration: '4 – 5 ngày',
        food: [{ name: 'Mì Sườn Heo Okinawa Soba & Rafute', desc: 'Mì sợi bản dày trong nước hầm xương heo ngọt lịm cùng thịt ba chỉ kho nhừ tan trong miệng.', thumb: 'assets/img/normal_55265c32-ec78-441b-9d61-bea2874791b7.jpg' }, { name: 'Mướp Đắng Xào Đậu Phụ & Rong Nho Biển', desc: 'Đặc sản trường thọ nổi tiếng với mướp đắng giòn xào trứng và rong nho nổ giòn tanh tách.', thumb: 'assets/img/mướp đắng.jpg' }],
        spots: [{ name: 'Thủy Cung Okinawa Churaumi', desc: 'Bể thủy sinh khổng lồ nơi cá mập voi dài hơn 8m cùng đàn cá đuối Manta bơi lượn tự do.', thumb: 'assets/img/thủy cung.jpg' }, { name: 'Vách Đá Mũi Manzamo', desc: 'Mỏm đá hình vòi voi độc đáo nhô ra biển ngắm những con sóng đại dương vỗ bọt trắng xóa.', thumb: 'assets/img/mũi voi.jpg' }]
      },
      kanazawa: {
        id: 'kanazawa', num: '09', title: 'Kanazawa & Ishikawa — Đô Thị Vàng Lá & Mỹ Nghệ Cổ', subtitleJp: '加賀百万石・金沢', region: '09 / VÙNG HOKURIKU', kanji: '金沢',
        video: 'assets/video/13392254_1920_1080_30fps.mp4', heroImage: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1400&q=85',
        desc: 'Vườn thượng uyển Kenroku-en danh tiếng, những con phố Geisha lát đá hàng trăm năm và vùng đất sản xuất 99% lượng vàng lá thủ công của nước Nhật.',
        highlights: ['Vườn Thượng Uyển Kenroku-en', 'Phố Trà Đạo Higashi Chaya', 'Bảo Tàng Thế Kỷ 21', 'Chợ Hải Sản Omicho'], season: 'Tháng 11 – 3 (Mùa tuyết trắng Yukizuri & cua biển) / Tháng 4', duration: '2 – 3 ngày',
        food: [{ name: 'Cá Nodoguro Nướng Muối & Ẩm Thực Kaga', desc: 'Loại cá quý hiếm được ví như „thịt bò Wagyu của biển khơi“ thơm ngậy mọng nước.', thumb: 'assets/img/12430697.avif' }, { name: 'Kem Bọc Vàng Lá Nguyên Chất', desc: 'Cây kem ốc quế phủ trọn một lá vàng thật mỏng óng ánh sang trọng bậc nhất Nhật Bản.', thumb: 'assets/img/dát vàng.jpg' }],
        spots: [{ name: 'Vườn Kenroku-en', desc: 'Một trong ba khu vườn cảnh quan đẹp nhất Nhật Bản hội tụ đủ 6 yếu tố phong thủy mỹ thuật.', thumb: 'assets/img/kenrokuen.jpg' }, { name: 'Phố Cổ Higashi Chaya-gai', desc: 'Những căn nhà gỗ truyền thống với rèm trúc nơi văng vẳng tiếng đàn Shamisen cổ kính.', thumb: 'assets/img/kanazawa-higashi-chaya.jpg' }]
      },
      nagano: {
        id: 'nagano', num: '10', title: 'Nagano & Dãy Alps — Suối Nước Nóng Khỉ Tuyết & Đỉnh Núi Chúa', subtitleJp: '日本アルプス・長野', region: '10 / VÙNG CHUBU', kanji: '長野',
        video: 'assets/video/núi tuyết.mp4', heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85',
        desc: 'Hùng vĩ giữa dãy núi tuyết Alps cao trên 3.000m, trải nghiệm bầy khỉ tuyết ngâm mình sảng khoái trong onsen bốc khói và ngôi đại cổ tự Zenko-ji 1.400 năm tuổi.',
        highlights: ['Công Viên Khỉ Tuyết Jigokudani', 'Đại Chùa Cổ Zenko-ji', 'Thung Lũng Bồng Lai Kamikochi', 'Thiên Đường Trượt Tuyết Hakuba'], season: 'Tháng 12 – 3 (Xem khỉ tuyết ngâm onsen) / Tháng 5 – 10 (Trekking Kamikochi)', duration: '3 – 4 ngày',
        food: [{ name: 'Mì Kiều Mạch Shinshu Soba', desc: 'Sợi mì kiều mạch xay tay nấu bằng nước suối đầu nguồn mát rượi thơm thanh tao.', thumb: 'assets/img/web_shinshusoba-i.jpg' }, { name: 'Bò Wagyu Nuôi Bằng Táo & Bánh Nướng Oyaki', desc: 'Thịt bò vân cẩm thạch béo mềm nướng lá mộc lan thơm lừng và bánh nướng rau củ dân dã.', thumb: 'assets/img/1_JIZJ.jpg' }],
        spots: [{ name: 'Công Viên Khỉ Tuyết Jigokudani Monkey Park', desc: 'Hình ảnh độc nhất vô nhị: Những chú khỉ tuyết má hồng ngâm suối nước nóng giữa trời tuyết rơi.', thumb: 'assets/img/Jigokudani-entrance.webp' }, { name: 'Cầu Kappa - Thung Lũng Thần Tiên Kamikochi', desc: 'Cây cầu gỗ bắc qua dòng nước trong veo nhìn thẳng lên đỉnh răng cưa Hotaka tuyết phủ.', thumb: 'assets/img/Myojin-bashi-600x400.webp' }]
      }
    }
  }
};

window.DESTINATIONS_DATA_ENHANCED = DESTINATIONS_DATA_ENHANCED;


