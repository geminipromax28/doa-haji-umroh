/**
 * Data Lengkap Doa & Zikir Haji dan Umrah
 * Berdasarkan Buku Doa dan Dzikir Manasik Haji dan Umrah
 * Kementerian Haji dan Umrah Republik Indonesia
 */

const KATEGORI_DOA = [
  {
    "id": "semua",
    "label": "Semua Doa",
    "icon": "book-open"
  },
  {
    "id": "perjalanan",
    "label": "1. Perjalanan",
    "icon": "plane"
  },
  {
    "id": "ihram",
    "label": "2. Niat & Ihram",
    "icon": "heart"
  },
  {
    "id": "talbiyah",
    "label": "3. Talbiyah",
    "icon": "volume-2"
  },
  {
    "id": "makkah",
    "label": "4. Masuk Makkah",
    "icon": "compass"
  },
  {
    "id": "thawaf",
    "label": "5. Thawaf (Lengkap)",
    "icon": "rotate-cw"
  },
  {
    "id": "sai",
    "label": "6. Sa'i (Lengkap)",
    "icon": "footprints"
  },
  {
    "id": "tahallul",
    "label": "7. Tahallul",
    "icon": "scissors"
  },
  {
    "id": "arafah",
    "label": "8. Wukuf Arafah",
    "icon": "sun"
  },
  {
    "id": "muzdalifah",
    "label": "9. Muzdalifah",
    "icon": "moon"
  },
  {
    "id": "mina",
    "label": "10. Mina & Jamrah",
    "icon": "mountain"
  },
  {
    "id": "thawaf_wada",
    "label": "11. Thawaf Wada'",
    "icon": "refresh-cw"
  },
  {
    "id": "madinah",
    "label": "12. Ziarah Madinah",
    "icon": "landmark"
  },
  {
    "id": "kepulangan",
    "label": "13. Tiba di Rumah",
    "icon": "home"
  },
  {
    "id": "favorit",
    "label": "Doa Tersimpan",
    "icon": "bookmark"
  }
];

const DATA_DOA = [
  {
    "id": "perjalanan-1",
    "bab": "BAB II - DOA DALAM PERJALANAN",
    "kategori": "perjalanan",
    "halamanBuku": 6,
    "judul": "A. Doa Sebelum Keluar Rumah",
    "deskripsi": "Dibaca ketika bersiap-siap meninggalkan rumah sebelum melangkahkan kaki keluar.",
    "arab": "اَلْحَمْدُ لِلَّهِ الَّذِيْ هَدَانِيْ بِالْإِسْلَامِ وَأَرْشَدَنِيْ إِلَى أَدَاءِ مَنَاسِكِيْ حَاجًّا بِبَيْتِهِ وَمُعْتَمِرًا بِمَشَاعِرِهِ، اَللَّهُمَّ صَلِّ عَلَى النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَأَصْحَابِهِ أَجْمَعِيْنَ. اَللَّهُمَّ بِكَ انْتَشَرْتُ وَإِلَيْكَ تَوَجَّهْتُ وَبِكَ اعْتَصَمْتُ، اَللَّهُمَّ أَنْتَ ثِقَتِيْ وَرَجَائِيْ، اَللَّهُمَّ فَاكْفِنِيْ مَا هَمَّنِيْ وَمَا لَا أَهْتَمُّ لَهُ، اَللَّهُمَّ زَوِّدْنِي التَّقْوَى، وَاغْفِرْ لِيْ ذَنْبِيْ وَوَجِّهْنِيْ لِلْخَيْرِ أَيْنَمَا تَوَجَّهْتُ.",
    "latin": "Al-ḥamdu lillāhil-ladzī hadānī bil-islāmi wa arsyadanī ilā adā'i manāsikī ḥājjam bibaitihī wa mu‘tamiram bimasya‘irih, allāhumma ṣalli ‘alan-nabiyyil-ummiyyi wa ‘alā ālihī wa aṣ-ḥābihī ajma‘īn. Allāhumma bika-ntasyartu wa ilaika tawajjahtu wa bika‘taṣamtu, allāhumma anta tsiqatī wa rajā'ī, allāhumma fakfinī mā hammanī wa mā lā ahtammu lah, allāhumma zawwidnit-taqwā, waghfir lī dzanbī wa wajjihnī lil-khairi aynamā tawajjaht.",
    "arti": "Segala puji bagi Allah yang telah memberi petunjuk kepadaku dengan Islam dan memberi bimbingan kepadaku untuk menunaikan manasik hajiku di rumah-Nya dan mengerjakan umrah di tempat lambang-lambang (masya'ir) keagungan-Nya. Ya Allah, berilah salawat atas Nabi yang tidak bisa baca dan tulis (ummi) beserta keluarga dan para sahabatnya. Ya Allah, bersama-Mu aku bertebaran, kepada-Mu aku menghadap dan dengan-Mu aku berpegang teguh. Ya Allah, Engkau kepercayaanku dan harapanku, maka Ya Allah lindungilah aku dari sesuatu yang menyusahkan dan sesuatu yang tidak aku perlukan. Ya Allah, bekalilah aku dengan takwa dan ampunilah dosaku serta hadapkanlah wajahku pada hal-hal yang baik kemana-pun aku menghadapkan.",
    "sumber": "HR. At-Tabrani no. 775 & HR. Ibnu Sinni no. 495",
    "tags": [
      "keberangkatan",
      "keluar rumah",
      "persiapan"
    ]
  },
  {
    "id": "perjalanan-2",
    "bab": "BAB II - DOA DALAM PERJALANAN",
    "kategori": "perjalanan",
    "halamanBuku": 8,
    "judul": "B. Doa Keluar Rumah",
    "deskripsi": "Dibaca saat melangkahkan kaki keluar dari pintu rumah menuju perjalanan haji/umrah.",
    "arab": "بِسْمِ اللَّهِ آمَنْتُ بِاللَّهِ، بِسْمِ اللَّهِ تَوَجَّهْتُ لِلَّهِ، بِسْمِ اللَّهِ اعْتَصَمْتُ بِاللَّهِ، بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيْمِ.",
    "latin": "Bismillāhi āmantu billāh, bismillāhi tawajjahtu lillāh, bismillāhi‘taṣamtu billāh, bismillāhi tawakkaltu ‘alallāhi wa lā ḥaula wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm.",
    "arti": "Dengan nama Allah aku beriman kepada Allah. Dengan nama Allah aku hadapkan diriku kepada Allah. Dengan nama Allah aku berlindung kepada Allah. Dengan nama Allah aku berserah diri kepada Allah, tiada daya upaya dan tiada kekuatan melainkan atas izin Allah yang Maha Luhur lagi Maha Agung.",
    "sumber": "HR. Abu Daud no. 5095 (Shahih)",
    "tags": [
      "keluar rumah",
      "perlindungan",
      "tawakal"
    ]
  },
  {
    "id": "perjalanan-3",
    "bab": "BAB II - DOA DALAM PERJALANAN",
    "kategori": "perjalanan",
    "halamanBuku": 9,
    "judul": "C. Doa Setelah Duduk di Kendaraan / Pesawat",
    "deskripsi": "Dibaca setelah duduk mantap di kursi bus, mobil, atau pesawat terbang.",
    "arab": "بِسْمِ اللَّهِ الْمَالِكِ الرَّحْمٰنِ. وَمَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ وَالْأَرْضُ جَمِيْعًا قَبْضَتُهُ يَوْمَ الْقِيَامَةِ وَالسَّمٰوَاتُ مَطْوِيَّاتٌ بِيَمِيْنِهِ سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يُشْرِكُوْنَ. بِسْمِ اللَّهِ مَجْر۪ىٰهَا وَمُرْسٰىهَا إِنَّ رَبِّيْ لَغَفُوْرٌ رَّحِيْمٌ.",
    "latin": "Bismillāhil-mālikir-raḥmān. Wa mā qadarullāha ḥaqqa qadrihī wal-arḍu jamī‘an qabḍatuhū yaumal-qiyāmati was-samāwātu maṭwiyyātum biyamīnih, subḥānahū wa ta‘ālā ‘ammā yusyrikūn. Bismillāhi majrēhā wa mursāhā inna rabbī laghafūrur raḥīm.",
    "arti": "Dengan Nama Allah Yang Maha Penguasa lagi Maha Pengasih. Tiada mengagungkan Allah sebagaimana semestinya, padahal bumi seluruhnya dalam genggaman-Nya pada hari kiamat dan langit digulung dengan kekuasaan-Nya. Maha Suci dan Maha Tinggi Dia dari apa yang mereka persekutukan. Dengan Nama Allah di waktu berangkat dan berlabuh. Sesungguhnya Tuhan-ku benar-benar Maha Pengampun lagi Maha Penyayang.",
    "sumber": "HR. At-Tabrani (Ad-Du'a no. 803, 804), QS. Az-Zumar: 67 & QS. Hud: 41",
    "tags": [
      "pesawat",
      "kendaraan",
      "duduk"
    ]
  },
  {
    "id": "perjalanan-4",
    "bab": "BAB II - DOA DALAM PERJALANAN",
    "kategori": "perjalanan",
    "halamanBuku": 11,
    "judul": "D. Doa Sewaktu Kendaraan / Pesawat Mulai Berjalan",
    "deskripsi": "Dibaca saat kendaraan bergerak maju atau pesawat mulai melaju di landasan (take-off).",
    "arab": "بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيْمِ. اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ. سُبْحَانَ الَّذِيْ سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِيْنَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُوْنَ. اَللَّهُمَّ إِنَّا نَسْأَلُكَ فِيْ سَفَرِنَا هٰذَا الْبِرَّ وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى. اَللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هٰذَا وَاطْوِ عَنَّا بُعْدَهُ. اَللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيْفَةُ فِي الْأَهْلِ. اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوْءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ وَالْوَلَدِ.",
    "latin": "Bismillāhir-raḥmānir-raḥīm. Allāhu akbar, allāhu akbar, allāhu akbar. Subḥānal-ladzī sakh-khara lanā hādzā wa mā kunnā lahū muqrinīna wa innā ilā rabbinā lamunqalibūn. Allāhumma innā nas'aluka fī safarinā hādzal-birra wat-taqwā wa minal-‘amali mā tarḍā. Allāhumma hawwin ‘alainā safaranā hādzā waṭwi ‘annā bu‘dah. Allāhumma antaṣ-ṣāḥibu fis-safari wal-khalīfatu fil-ahl. Allāhumma innī a‘ūdzu bika miw-wa‘tsā'is-safari wa ka'ābatil-manẓari wa sū'il-munqalabi fil-māli wal-ahli wal-walad.",
    "arti": "Dengan Nama Allah Yang Maha Pemurah lagi Maha Penyayang. Allah Maha Besar, Allah Maha Besar, Allah Maha Besar. Maha Suci Allah Yang telah menggerakkan untuk kami kendaraan ini padahal kami tiada kuasa menggerakkannya. Dan sesungguhnya kepada Tuhan, kami pasti akan kembali. Ya Allah, kami memohon kepada-Mu dalam perjalanan ini kebaikan dan takwa serta amal perbuatan yang Engkau ridai. Ya Allah, mudahkanlah perjalanan ini dan dekatkan-lah jaraknya bagi kami. Ya Allah, Engkaulah teman dalam bepergian dan pelindung terhadap keluarga yang ditinggalkan. Ya Allah, kami berlindung kepada-Mu dari kelelahan dalam bepergian, pemandangan yang menyedihkan, dan kepulangan yang menyusahkan dalam harta benda, keluarga, dan anak.",
    "sumber": "HR. Muslim no. 1342, Ibnu Hibban no. 2696",
    "tags": [
      "kendaraan jalan",
      "safar",
      "take-off"
    ]
  },
  {
    "id": "perjalanan-5",
    "bab": "BAB II - DOA DALAM PERJALANAN",
    "kategori": "perjalanan",
    "halamanBuku": 13,
    "judul": "E. Doa Ketika Mendekati Tempat Tujuan",
    "deskripsi": "Dibaca saat pesawat atau bus mulai mendekati kota tujuan (Jeddah / Madinah / Makkah).",
    "arab": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ مِنْ خَيْرِ هٰذِهِ الْأَرْضِ وَخَيْرِ مَا جَمَعْتَ فِيْهَا وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا جَمَعْتَ فِيْهَا، اَللَّهُمَّ ارْزُقْنَا جَنَاهَا، وَأَعِذْنَا مِنْ وَبَاهَا، وَحَبِّبْنَا إِلَىٰ أَهْلِهَا، وَحَبِّبْ صَالِحِيْ أَهْلِهَا إِلَيْنَا.",
    "latin": "Allāhumma innī as'aluka min khairi hādzihil-arḍi wa khairi mā jama‘ta fīhā wa a‘ūdzu bika min syarrihā wa syarri mā jama‘ta fīhā, allāhummar-zuqnā janāhā, wa a‘idznā miw-wabāhā, wa ḥabbibnā ilā ahlihā, wa ḥabbib ṣāliḥī ahlihā ilainā.",
    "arti": "Ya Allah, aku mohon yang terbaik dari bumi ini dan segala kebaikan yang terhimpun di dalamnya dan aku berlindung kepada-Mu dari keburukannya dan segala keburukan yang terhimpun di dalamnya. Ya Allah, berilah kami perlindungan, dan lindungilah kami dari wabahnya, buatlah kami dapat menyintai penduduknya dan penduduknya yang solih menyintai kami.",
    "sumber": "HR. Ibnu Sinni no. 527",
    "tags": [
      "mendekati tujuan",
      "mendarat",
      "ketibaan"
    ]
  },
  {
    "id": "perjalanan-6",
    "bab": "BAB II - DOA DALAM PERJALANAN",
    "kategori": "perjalanan",
    "halamanBuku": 14,
    "judul": "F. Doa Ketika Tiba di Tempat Tujuan",
    "deskripsi": "Dibaca saat kaki pertama kali menginjakkan tanah di bandara atau pemondokan.",
    "arab": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيْهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ أَهْلُهَا وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا وَشَرِّ مَا فِيْهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ.",
    "latin": "Allāhumma innī as'aluka khairahā wa khaira mā fīhā wa khaira mā ursilat bihī ahluhā wa a‘ūdzu bika min syarrihā wa syarri ahlihā wa syarri mā fīhā wa syarri mā ursilat bih.",
    "arti": "Ya Allah, aku memohon pada-Mu kebaikan negeri ini dan kebaikan penduduknya serta kebaikan yang ada di dalamnya. Dan aku berlindung pada-Mu dari kejahatan negeri ini dan kejahatan penduduknya.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 14-15",
    "tags": [
      "tiba tujuan",
      "kedatangan",
      "syukur"
    ]
  },
  {
    "id": "ihram-1",
    "bab": "BAB III - NIAT IHRAM",
    "kategori": "ihram",
    "halamanBuku": 16,
    "judul": "A. Niat Umrah",
    "deskripsi": "Dilafalkan di Miqat setelah mengenakan pakaian ihram dan menunaikan salat sunat ihram.",
    "arab": "لَبَّيْكَ اللَّهُمَّ عُمْرَةً. (أَوْ: نَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا لِلَّهِ تَعَالَى)",
    "latin": "Labbaika allāhumma ‘umratan. (Au: Nawaitul-‘umrata wa aḥramtu bihā lillāhi ta‘ālā).",
    "arti": "Aku sambut panggilan-Mu ya Allah untuk ber-umrah. (Atau membaca: Aku berniat umrah dengan berihram karena Allah Ta'ala).",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 16",
    "tags": [
      "niat",
      "umrah",
      "miqat"
    ]
  },
  {
    "id": "ihram-2",
    "bab": "BAB III - NIAT IHRAM",
    "kategori": "ihram",
    "halamanBuku": 16,
    "judul": "B. Niat Haji (Tamattu')",
    "deskripsi": "Dilafalkan saat memulai ihram haji pada tanggal 8 Dzulhijjah dari pemondokan Makkah.",
    "arab": "لَبَّيْكَ اللَّهُمَّ حَجًّا. (أَوْ: نَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلَّهِ تَعَالَى)",
    "latin": "Labbaika allāhumma ḥajjan. (Au: Nawaitul-ḥajja wa aḥramtu bihī lillāhi ta‘ālā).",
    "arti": "Aku sambut panggilan-Mu ya Allah untuk berhaji. (Atau: Aku niat haji dengan berihram karena Allah Ta'ala).",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 16",
    "tags": [
      "niat",
      "haji",
      "tamattu"
    ]
  },
  {
    "id": "ihram-3",
    "bab": "BAB III - NIAT IHRAM",
    "kategori": "ihram",
    "halamanBuku": 17,
    "judul": "C. Niat Haji Ifrad",
    "deskripsi": "Bagi jemaah yang berniat mendahulukan ibadah haji terlebih dahulu, baru kemudian umrah.",
    "arab": "لَبَّيْكَ اللَّهُمَّ حَجًّا. (أَوْ مَقْرُوْءًا: نَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلَّهِ تَعَالَى)",
    "latin": "Labbaika allāhumma ḥajjan. (Au: Nawaitul-ḥajja wa aḥramtu bihī lillāhi ta‘ālā).",
    "arti": "Aku sambut panggilan-Mu ya Allah untuk berhaji. (Atau membaca: Aku niat haji dengan berihram karena Allah Ta'ala).",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 17",
    "tags": [
      "niat",
      "ifrad",
      "haji"
    ]
  },
  {
    "id": "ihram-4",
    "bab": "BAB III - NIAT IHRAM",
    "kategori": "ihram",
    "halamanBuku": 17,
    "judul": "D. Niat Haji Qiran",
    "deskripsi": "Bagi jemaah yang berniat menggabungkan pelaksanaan ibadah haji dan umrah sekaligus dalam satu ihram.",
    "arab": "لَبَّيْكَ اللَّهُمَّ حَجًّا وَعُمْرَةً. (أَوْ: نَوَيْتُ الْحَجَّ وَالْعُمْرَةَ وَأَحْرَمْتُ بِهِمَا لِلَّهِ تَعَالَى)",
    "latin": "Labbaika allāhumma ḥajjan wa ‘umratan. (Au: Nawaitul-ḥajja wal-‘umrata wa aḥramtu bihimā lillāhi ta‘ālā).",
    "arti": "Aku datang memenuhi panggilan-Mu ya Allah untuk berhaji dan umrah. (Atau membaca: Aku niat haji dan umrah, dengan berihram untuk haji dan umrah karena Allah).",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 17-18",
    "tags": [
      "niat",
      "qiran",
      "haji umrah"
    ]
  },
  {
    "id": "ihram-5",
    "bab": "BAB III - NIAT IHRAM",
    "kategori": "ihram",
    "halamanBuku": 18,
    "judul": "E. Niat Ihram dengan Isytirat (Bagi Lansia & Sakit)",
    "deskripsi": "Sangat dianjurkan bagi jemaah risiko tinggi, lemah, atau sakit agar bila terhalang dapat bertahallul tanpa membayar dam.",
    "arab": "لَبَّيْكَ اللَّهُمَّ حَجًّا (عُمْرَةً) فَإِنْ حَبَسَنِيْ حَابِسٌ فَمَحِلِّيْ حَيْثُ حَبَسْتَنِيْ.",
    "latin": "Labbaika allāhumma ḥajjan (‘umratan) fa in ḥabasanī ḥābisun famaḥillī ḥaitsu ḥabastanī.",
    "arti": "Aku sambut panggilan-Mu ya Allah untuk berhaji (berumrah). Tetapi jika aku terhalang oleh sesuatu, ya Allah, maka aku akan bertahallul di tempat aku terhalang itu.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 18-19",
    "tags": [
      "isytirat",
      "lansia",
      "sakit",
      "keringanan"
    ]
  },
  {
    "id": "ihram-6",
    "bab": "BAB III - NIAT IHRAM",
    "kategori": "ihram",
    "halamanBuku": 19,
    "judul": "F. Doa Setelah Berihram (Doa Imam Al-Ghazali)",
    "deskripsi": "Dibaca setelah melafalkan niat ihram untuk meneguhkan keikhlasan lahir batin dalam menjaga larangan ihram.",
    "arab": "اَللَّهُمَّ أُحَرِّمُ شَعْرِيْ وَبَشَرِيْ وَجَسَدِيْ وَجَمِيْعَ جَوَارِحِيْ مِنْ كُلِّ شَيْءٍ حَرَّمْتَهُ عَلَى الْمُحْرِمِ أَبْتَغِيْ بِذٰلِكَ وَجْهَكَ الْكَرِيْمَ يَارَبَّ الْعَالَمِيْنَ.",
    "latin": "Allāhumma uḥarrimu sya‘rī wa basyarī wa jasadī wa jamī‘a jawāriḥī min kulli syai'in ḥarramtahū ‘alal-muḥrimi abtaghī bidzālika wajhakal-karīma yā rabbal-‘ālamīn.",
    "arti": "Ya Allah, aku haramkan rambut, kulit, tubuh, dan seluruh anggota tubuhku dari semua yang Engkau haramkan bagi seorang yang sedang berihram, demi mengharapkan diri-Mu semata, wahai Tuhan pemelihara alam semesta.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 19-21",
    "tags": [
      "setelah ihram",
      "ghazali",
      "kesucian"
    ]
  },
  {
    "id": "talbiyah-1",
    "bab": "BAB IV - TALBIYAH DAN SALAWAT",
    "kategori": "talbiyah",
    "halamanBuku": 22,
    "judul": "A. Bacaan Kalimat Talbiyah Resmi",
    "deskripsi": "Dikumandangkan terus menerus dengan lantang sejak berihram hingga melempar Jamrah Aqabah atau memulai Thawaf.",
    "arab": "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيْكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لَا شَرِيْكَ لَكَ.",
    "latin": "Labbaika allāhumma labbaīk, labbaīka lā syarīka laka labbaīk, innal-ḥamda wan-ni‘mata laka wal-mulka lā syarīka lak.",
    "arti": "Aku sambut panggilan-Mu ya Allah, aku sambut panggilan-Mu, aku sambut panggilan-Mu tidak ada sekutu bagi-Mu, aku sambut panggilan-Mu. Segala puji, kemuliaan, dan segenap kekuasaan adalah milik-Mu, tidak ada sekutu bagi-Mu.",
    "sumber": "HR. Al-Bukhari no. 1549 (Hadits Shahih)",
    "tags": [
      "talbiyah",
      "syiar haji",
      "inti ibadah"
    ]
  },
  {
    "id": "talbiyah-2",
    "bab": "BAB IV - TALBIYAH DAN SALAWAT",
    "kategori": "talbiyah",
    "halamanBuku": 23,
    "judul": "B. Bacaan Salawat atas Nabi SAW",
    "deskripsi": "Dibaca mengiringi kumandang talbiyah sebagai penghormatan kepada baginda Rasulullah SAW.",
    "arab": "اَللَّهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ.",
    "latin": "Allāhumma ṣalli wa sallim ‘alā sayyidinā muḥammadiw wa ‘alā āli sayyidinā muḥammad.",
    "arti": "Ya Allah, limpahkan rahmat dan keselamatan kepada Nabi Muhammad SAW beserta keluarganya.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 23",
    "tags": [
      "salawat",
      "ibrahimiyah"
    ]
  },
  {
    "id": "talbiyah-3",
    "bab": "BAB IV - TALBIYAH DAN SALAWAT",
    "kategori": "talbiyah",
    "halamanBuku": 23,
    "judul": "C. Doa Sesudah Salawat dan Talbiyah",
    "deskripsi": "Dianjurkan dibaca setiap kali selesai mengumandangkan lafal talbiyah dan salawat.",
    "arab": "اَللَّهُمَّ إِنَّا نَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ وَنَعُوْذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ. اَللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
    "latin": "Allāhumma innā nas'aluka riḍāka wal-jannata wa na‘ūdzu bika min sakhaṭika wan-nār. Allāhumma rabbanā ātinā fid-dunyā ḥasanataw wa fil-ākhirati ḥasanataw wa qinā ‘adzāban-nār.",
    "arti": "Ya Allah, sesungguhnya kami memohon keridaan-Mu dan surga, kami berlindung pada-Mu dari murka-Mu dan siksa neraka. Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat serta hindarkanlah kami dari siksa neraka.",
    "sumber": "HR. Al-Bukhari no. 6389 (Hadits Shahih)",
    "tags": [
      "sesudah talbiyah",
      "surga",
      "ridha"
    ]
  },
  {
    "id": "makkah-1",
    "bab": "BAB V - DOA DI MAKKAH",
    "kategori": "makkah",
    "halamanBuku": 25,
    "judul": "A. Doa Memasuki Kota Suci Makkah",
    "deskripsi": "Dibaca saat kendaraan mulai melintasi batas gerbang tanah haram Kota Makkah.",
    "arab": "اَللَّهُمَّ هٰذَا حَرَمُكَ وَأَمْنُكَ فَحَرِّمْ لَحْمِيْ وَدَمِيْ وَشَعْرِيْ وَبَشَرِيْ عَلَى النَّارِ وَآمِنِّيْ مِنْ عَذَابِكَ يَوْمَ تَبْعَثُ عِبَادَكَ وَاجْعَلْنِيْ مِنْ أَوْلِيَائِكَ وَأَهْلِ طَاعَتِكَ. اَللَّهُمَّ لَا تَجْعَلْ مَنَايَانَا بِهَا حَتَّىٰ تُخْرِجَنَا مِنْهَا.",
    "latin": "Allāhumma hādzā ḥaramuka wa amnuka faḥarrim laḥmī wa damī wa sya‘rī wa basyarī ‘alan-nāri wa āminnī min ‘adzābika yauma tab‘atsu ‘ibādaka waj‘alnī min auliyā'ika wa ahli ṭā‘atik. Allāhumma lā taj‘al manāyānā bihā ḥattā tukhrijanā minhā.",
    "arti": "Ya Allah, kota ini adalah Tanah Haram-Mu dan tempat aman-Mu, maka hindarkanlah daging, darah, rambut, dan kulitku dari neraka. Dan selamatkanlah diriku dari siksa-Mu pada hari Engkau membangkitkan kembali hamba-hamba-Mu, dan jadikanlah aku termasuk orang-orang yang selalu dekat dan taat kepada-Mu. Ya Allah, janganlah Engkau jadikan kematian kami padanya sampai Engkau mengeluarkan kami daripadanya.",
    "sumber": "Imam al-Ghazali, Ihya 'Ulumuddin, 1/328 & HR. Ahmad no. 4778",
    "tags": [
      "masuk makkah",
      "tanah haram",
      "keamanan"
    ]
  },
  {
    "id": "makkah-2",
    "bab": "BAB V - DOA DI MAKKAH",
    "kategori": "makkah",
    "halamanBuku": 26,
    "judul": "B. Doa Masuk Masjid (Secara Umum)",
    "deskripsi": "Dibaca saat melangkahkan kaki kanan memasuki masjid mana pun di tanah suci.",
    "arab": "رَبِّ اغْفِرْ لِيْ ذُنُوْبِيْ وَافْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ.",
    "latin": "Rabbigh-fir lī dzunūbī waftaḥ lī abwāba raḥmatik.",
    "arti": "Ya Allah ampunilah dosa-dosaku dan bukakanlah pintu-pintu rahmat-Mu.",
    "sumber": "HR. At-Tirmidzi no. 314 (Shahih)",
    "tags": [
      "masuk masjid",
      "pintu rahmat"
    ]
  },
  {
    "id": "makkah-3",
    "bab": "BAB V - DOA DI MAKKAH",
    "kategori": "makkah",
    "halamanBuku": 27,
    "judul": "C. Doa Keluar Masjid",
    "deskripsi": "Dibaca saat melangkahkan kaki kiri keluar dari pintu masjid.",
    "arab": "رَبِّ افْتَحْ لِيْ بَابَ فَضْلِكَ.",
    "latin": "Rabbif-taḥ lī bāba faḍlik.",
    "arti": "Ya Tuhanku, bukakanlah bagiku pintu keutamaan-Mu.",
    "sumber": "HR. At-Tirmidzi no. 315 (Hasan)",
    "tags": [
      "keluar masjid",
      "karunia"
    ]
  },
  {
    "id": "makkah-4",
    "bab": "BAB V - DOA DI MAKKAH",
    "kategori": "makkah",
    "halamanBuku": 27,
    "judul": "D. Doa Memasuki Masjidil Haram",
    "deskripsi": "Dibaca saat melangkahkan kaki kanan memasuki pelataran pintu gerbang Masjidil Haram.",
    "arab": "اَللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، فَحَيِّنَا رَبَّنَا بِالسَّلَامِ وَأَدْخِلْنَا الْجَنَّةَ دَارَ السَّلَامِ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ. رَبِّ اغْفِرْ لِيْ ذُنُوْبِيْ وَافْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ. بِسْمِ اللَّهِ وَالْحَمْدُ لِلَّهِ وَالصَّلَاةُ وَالسَّلَامُ عَلَىٰ رَسُوْلِ اللَّهِ.",
    "latin": "Allāhumma antas-salāmu wa minkas-salāmu faḥayyinā rabbanā bis-salāmi wa adkhilnal-jannata dāras-salāmi tabārakta yā dzal-jalāli wal-ikrām. Rabbigh-fir lī dzunūbī waftaḥ lī abwāba raḥmatik. Bismillāhi wal-ḥamdu lillāhi waṣ-ṣalātu was-salāmu ‘alā rasūlillāh.",
    "arti": "Ya Allah, Engkau sumber keselamatan dan dari-Mulah datangnya keselamatan, hidupkanlah kami wahai Tuhan kami dengan keselamatan, dan tempatkanlah kami pada surga, negeri keselamatan. Maha banyak anugerah-Mu dan Maha Tinggi Engkau wahai Tuhan yang memiliki keagungan dan kehormatan. Ya Allah ampunilah dosa-dosaku dan bukakanlah pintu-pintu rahmat-Mu. (Aku masuk masjid ini) dengan Nama Allah disertai segala puji bagi Allah, serta salawat dan salamat untuk Rasulullah SAW.",
    "sumber": "HR. Al-Azraqi no. 348 & HR. At-Tirmidzi no. 314",
    "tags": [
      "masjidil haram",
      "keselamatan",
      "rahmat"
    ]
  },
  {
    "id": "makkah-5",
    "bab": "BAB V - DOA DI MAKKAH",
    "kategori": "makkah",
    "halamanBuku": 28,
    "judul": "E. Doa Ketika Melihat Ka'bah Pertama Kali",
    "deskripsi": "Dibaca seraya mengangkat kedua tangan saat pandangan mata tertuju ke Ka'bah yang agung.",
    "arab": "اَللَّهُمَّ زِدْ هٰذَا الْبَيْتَ تَشْرِيْفًا وَتَعْظِيْمًا وَتَكْرِيْمًا وَمَهَابَةً، وَزِدْ مَنْ شَرَّفَهُ وَعَظَّمَهُ وَكَرَّمَهُ مِمَّنْ حَجَّهُ أَوِ اعْتَمَرَهُ تَشْرِيْفًا وَتَعْظِيْمًا وَتَكْرِيْمًا وَبِرًّا.",
    "latin": "Allāhumma zid hādzal-baita tasyrīfaw wa ta‘ẓīmaw wa takrīmaw wa mahābah, wa zid man syarrafahū wa ‘aẓẓamahū wa karramahū mimman ḥajjahū awi‘tamarahū tasyrīfaw wa ta‘ẓīmaw wa takrīmaw wa birrā.",
    "arti": "Ya Allah, tambahkanlah kemuliaan, keagungan, kehormatan, dan wibawa pada Bait (Ka'bah) ini. Dan tambahkan pula pada orang-orang yang memuliakan, mengagungkan, dan menghormatinya di antara mereka yang berhaji atau yang berumrah dengan kemuliaan, keagungan, kehormatan, dan kebaikan.",
    "sumber": "HR. Al-Azraqi no. 350 (Mursal Shahih)",
    "tags": [
      "melihat kabah",
      "mustajab",
      "baitullah"
    ]
  },
  {
    "id": "makkah-6",
    "bab": "BAB V - DOA DI MAKKAH",
    "kategori": "makkah",
    "halamanBuku": 29,
    "judul": "F. Doa Melintasi Maqam Ibrahim",
    "deskripsi": "Dibaca ketika berjalan melintasi Maqam Nabi Ibrahim AS di pelataran mataf.",
    "arab": "رَبِّ أَدْخِلْنِيْ مُدْخَلَ صِدْقٍ وَأَخْرِجْنِيْ مُخْرَجَ صِدْقٍ وَاجْعَلْ لِيْ مِنْ لَدُنْكَ سُلْطَانًا نَصِيْرًا. وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوْقًا.",
    "latin": "Rabbi adkhilnī mudkhala ṣidqiw wa akhrijnī mukhraja ṣidqiw waj‘al lī mil ladunka sulṭānan naṣīrā. Wa qul jā'al-ḥaqqu wa zahaqal-bāṭilu innal-bāṭila kāna zahūqā.",
    "arti": "Ya Tuhanku, masukkan aku ketempat masuk yang benar, dan keluarkan (pula) aku ketempat keluar yang benar dan berikanlah kepadaku dari sisi-Mu kekuasaan yang dapat menolong (ku). Dan katakanlah, \"kebenaran telah datang dan yang batil telah lenyap\". Sungguh yang batil itu pasti lenyap.",
    "sumber": "QS. Al-Isra': 80-81 & HR. Al-Bukhari no. 2478",
    "tags": [
      "maqam ibrahim",
      "kebenaran",
      "pertolongan"
    ]
  },
  {
    "id": "thawaf-0",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 31,
    "judul": "Doa Menghadap Hajar Aswad (Istilam Awal Putaran)",
    "deskripsi": "Dibaca pada awal setiap putaran saat menghadap dan melambaikan tangan kanan ke arah Hajar Aswad.",
    "arab": "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ.",
    "latin": "Bismillāhi wallāhu akbar.",
    "arti": "Dengan nama Allah dan Allah Maha Besar.",
    "sumber": "HR. Al-Bukhari no. 1612 & Muslim no. 1277",
    "tags": [
      "istilam",
      "hajar aswad",
      "awal putaran"
    ]
  },
  {
    "id": "thawaf-1",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 33,
    "judul": "A. Doa Thawaf: Putaran Pertama",
    "deskripsi": "Dibaca selama mengitari Ka'bah pada putaran pertama dari Hajar Aswad hingga Rukun Yamani.",
    "arab": "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيْمِ. اَللَّهُمَّ إِيْمَانًا بِكَ وَتَصْدِيْقًا بِكِتَابِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ. اَللَّهُمَّ قَنِّعْنِيْ بِمَا رَزَقْتَنِيْ وَبَارِكْ لِيْ فِيْهِ وَاخْلُفْ عَلَى كُلِّ غَائِبَةٍ لِيْ بِخَيْرٍ. اَللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُوْرًا وَسَعْيًا مَشْكُوْرًا وَذَنْبًا مَغْفُوْرًا. اَللَّهُمَّ اغْفِرْ وَارْحَمْ وَاعْفُ عَمَّا تَعْلَمُ إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ. اَللَّهُمَّ آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
    "latin": "Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar wa lā ḥaula wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm. Allāhumma īmānam bika wa taṣdīqam bikitābika wattibā‘al lisunnati nabiyyika muḥammadin ṣallallāhu ‘alaihi wa sallam. Allāhumma qanni‘nī bimā razaqtanī wa bārik lī fīhi wakhluf ‘alā kulli ghā'ibatin lī bikhair. Allāhummaj‘alhu ḥajjam mabrūraw wa sa‘yam masykūraw wa dzambam maghfūrā. Allāhummagh-fir warḥam wa‘fu ‘ammā ta‘lamu innaka antal-a‘azzul-akram. Allāhumma ātinā fid-dunyā ḥasanataw wa fil-ākhirati ḥasanataw wa qinā ‘adzāban-nār.",
    "arti": "Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, dan Allah Maha Besar. Tiada daya dan kekuatan kecuali dengan pertolongan Allah yang Maha Luhur lagi Maha Agung. Ya Allah, aku bertawaf ini karena beriman kepada-Mu, membenarkan kitab-Mu, dan mengikuti sunnah Nabi-Mu Muhammad SAW. Ya Allah, cukupkanlah aku dengan rezeki yang Engkau berikan, berkahilah apa yang ada padaku, dan gantilah segala yang luput dariku dengan kebaikan. Ya Allah, jadikanlah hajiku mabrur, sa'iku diterima, dan dosaku diampuni. Ya Allah ampunilah, sayangilah, dan maafkanlah apa yang Engkau ketahui, sungguh Engkau Maha Perkasa lagi Maha Mulia. Ya Allah berilah kami kebaikan di dunia dan kebaikan di akhirat serta peliharalah kami dari siksa neraka.",
    "sumber": "HR. Al-Fakihi no. 575, Al-Baihaqi no. 9252 & Ihya 'Ulumuddin 1/329",
    "tags": [
      "thawaf",
      "putaran 1",
      "iman",
      "surga"
    ]
  },
  {
    "id": "thawaf-yamani",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 37,
    "judul": "Doa Antara Rukun Yamani dan Hajar Aswad (Doa Sapu Jagat)",
    "deskripsi": "Selalu dibaca oleh Rasulullah SAW pada setiap putaran thawaf di antara Rukun Yamani hingga Hajar Aswad.",
    "arab": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ. وَأَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ يَا عَزِيْزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِيْنَ.",
    "latin": "Rabbanā ātinā fid-dunyā ḥasanataw wa fil-ākhirati ḥasanataw wa qinā ‘adzāban-nār. Wa adkhilnal-jannata ma‘al-abrāri yā ‘azīzu yā ghaffāru yā rabbal-‘ālamīn.",
    "arti": "Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan hindarkanlah kami dari siksa neraka. Dan masukkanlah kami ke dalam surga bersama orang-orang yang berbuat baik, wahai Tuhan Yang Maha Perkasa, Maha Pengampun, dan Tuhan Yang Menguasai seluruh alam.",
    "sumber": "HR. Abu Daud no. 1892 & Buku Doa Kemenhaj RI Hal 37",
    "tags": [
      "rukun yamani",
      "sapu jagat",
      "wajib dihafal"
    ]
  },
  {
    "id": "thawaf-2",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 39,
    "judul": "B. Doa Thawaf: Putaran Kedua",
    "deskripsi": "Dibaca selama putaran kedua, memohon naungan Arsy Allah pada hari kiamat.",
    "arab": "اَللَّهُمَّ إِنَّ هٰذَا الْبَيْتَ بَيْتُكَ وَهٰذَا الْحَرَمَ حَرَمُكَ وَهٰذَا الْأَمْنَ أَمْنُكَ وَهٰذَا مَقَامُ الْعَائِذِ بِكَ مِنَ النَّارِ. اَللَّهُمَّ حَبِّبْ إِلَيْنَا الْإِيْمَانَ وَزَيِّنْهُ فِيْ قُلُوْبِنَا وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوْقَ وَالْعِصْيَانَ وَاجْعَلْنَا مِنَ الرَّاشِدِيْنَ. اَللَّهُمَّ قِنِيْ عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ، وَأَدْخِلْنَا الْجَنَّةَ بِغَيْرِ حِسَابٍ.",
    "latin": "Allāhumma inna hādzal-baita baituka wa hādzal-ḥarama ḥaramuka wa hādzal-amna amnuka wa hādzā maqāmul-‘ā'idzi bika minan-nār. Allāhumma ḥabbib ilainal-īmāna wa zayyinhu fī qulūbinā wa karrih ilainal-kufra wal-fusūqa wal-‘iṣyāna waj‘alnā minar-rāsyidīn. Allāhumma qinī ‘adzābaka yauma tab‘atsu ‘ibādaka, wa adkhilnal-jannata bighairi ḥisāb.",
    "arti": "Ya Allah, sesungguhnya rumah ini adalah rumah-Mu, tanah suci ini tanah suci-Mu, keamanan ini keamanan-Mu, dan tempat ini adalah tempat perlindungan hamba kepada-Mu dari siksa neraka. Ya Allah, jadikanlah kami mencintai keimanan dan hiasilah ia di dalam kalbu kami, dan jadikanlah kami membenci kekufuran, kefasikan, dan kedurhakaan, dan jadikanlah kami termasuk orang-orang yang mendapat petunjuk. Ya Allah lindungilah aku dari siksa-Mu pada hari Engkau membangkitkan hamba-hamba-Mu, dan masukkanlah kami ke surga tanpa hisab.",
    "sumber": "Imam al-Ghazali, Ihya 'Ulumuddin, 1/329 & Buku Doa Kemenhaj Hal 39",
    "tags": [
      "thawaf",
      "putaran 2",
      "keimanan",
      "tanpa hisab"
    ]
  },
  {
    "id": "thawaf-3",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 42,
    "judul": "C. Doa Thawaf: Putaran Ketiga",
    "deskripsi": "Memohon perlindungan dari keraguan hati, riya', kemunafikan, dan bencana dunia akhirat.",
    "arab": "اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الشِّرْكِ وَالشَّكِّ وَالْكُفْرِ وَالنِّفَاقِ وَالشِّقَاقِ وَسُوْءِ الْأَخْلَاقِ وَسُوْءِ الْمَنْظَرِ فِي الْأَهْلِ وَالْمَالِ وَالْوَلَدِ. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ وَأَعُوْذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ. اَللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ فِتْنَةِ الْقَبْرِ وَأَعُوْذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ.",
    "latin": "Allāhumma innī a‘ūdzu bika minasy-syirki wasy-syakki wal-kufri wan-nifāqi wasy-syiqāqi wa sū'il-akhlāqi wa sū'il-manẓari fil-ahli wal-māli wal-walad. Allāhumma innī as'aluka riḍāka wal-jannata wa a‘ūdzu bika min sakhaṭika wan-nār. Allāhumma innī a‘ūdzu bika min fitnatil-qabri wa a‘ūdzu bika min fitnatil-maḥyā wal-mamāt.",
    "arti": "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari perbuatan syirik, keragu-raguan, kekufuran, kemunafikan, perpecahan, akhlak yang buruk, dan pemandangan yang menyedihkan dalam keluarga, harta benda, dan anak. Ya Allah, aku mohon keridaan-Mu dan surga-Mu, serta berlindung dari murka-Mu dan neraka-Mu. Ya Allah, aku berlindung kepada-Mu dari fitnah kubur serta fitnah kehidupan dan kematian.",
    "sumber": "Imam al-Ghazali, Ihya 'Ulumuddin, 1/329, HR. An-Nasa'i no. 5471 & Buku Doa Kemenhaj Hal 42",
    "tags": [
      "thawaf",
      "putaran 3",
      "perlindungan",
      "fitnah kubur"
    ]
  },
  {
    "id": "thawaf-4",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 44,
    "judul": "D. Doa Thawaf: Putaran Keempat",
    "deskripsi": "Memohon haji yang mabrur, dosa yang diampuni, dan perdagangan yang tidak merugi.",
    "arab": "اَللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُوْرًا وَسَعْيًا مَشْكُوْرًا وَذَنْبًا مَغْفُوْرًا. اَللَّهُمَّ اغْفِرْ وَارْحَمْ وَاعْفُ عَمَّا تَعْلَمُ إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ. اَللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ. يَا عَالِمَ مَا فِي الصُّدُوْرِ أَخْرِجْنِيْ يَا اَللَّهُ مِنَ الظُّلُمَاتِ إِلَى النُّوْرِ. اَللَّهُمَّ إِنَّا نَسْأَلُكَ مُوْجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ وَالسَّلَامَةَ مِنْ كُلِّ إِثْمٍ وَالْغَنِيْمَةَ مِنْ كُلِّ بِرٍّ وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ بِعَوْنِكَ مِنَ النَّارِ.",
    "latin": "Allāhummaj‘alhu ḥajjam mabrūraw wa sa‘yam masykūraw wa dzambam maghfūrā. Allāhummagh-fir warḥam wa‘fu ‘ammā ta‘lamu innaka antal-a‘azzul-akram. Allāhumma rabbanā ātinā fid-dunyā ḥasanataw wa fil-ākhirati ḥasanataw wa qinā ‘adzāban-nār. Yā ‘ālima mā fiṣ-ṣudūri akhrijnī yallāhu minaẓ-ẓulumāti ilan-nūr. Allāhumma innā nas'aluka mūjibāti raḥmatika wa ‘azā'ima maghfiratika was-salāmata min kulli itsmiw wal-ghanīmata min kulli birriw wal-fauza bil-jannati wan-najāta bi‘aunika minan-nār.",
    "arti": "Ya Allah, jadikanlah hajiku mabrur, sa'iku diterima, dan dosaku diampuni. Ya Allah ampunilah, kasihanilah, dan maafkanlah apa yang Engkau ketahui, sungguh Engkau Maha Perkasa lagi Maha Pemurah. Wahai Tuhan kami berilah kami kebaikan di dunia dan akhirat serta selamatkan kami dari azab neraka. Wahai Dzat yang mengetahui isi hati, keluarkanlah aku dari kegelapan menuju cahaya yang terang. Ya Allah, sesungguhnya kami memohon hal-hal yang mendatangkan rahmat-Mu, ketetapan ampunan-Mu, keselamatan dari setiap dosa, perolehan setiap kebajikan, keberuntungan surga, dan keselamatan dengan pertolongan-Mu dari neraka.",
    "sumber": "Imam Syafi'i, Al-Umm 2/230, HR. Al-Hakim no. 1925 & Buku Doa Kemenhaj Hal 44-45",
    "tags": [
      "thawaf",
      "putaran 4",
      "haji mabrur",
      "ampunan"
    ]
  },
  {
    "id": "thawaf-5",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 49,
    "judul": "E. Doa Thawaf: Putaran Kelima",
    "deskripsi": "Memohon naungan Arsy Allah dan minum dari telaga Haudh Rasulullah SAW.",
    "arab": "اَللَّهُمَّ أَظِلَّنَا تَحْتَ عَرْشِكَ يَوْمَ لَا ظِلَّ إِلَّا ظِلُّكَ. اَللَّهُمَّ اسْقِنِيْ بِكَأْسِ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ شَرْبَةً لَا أَظْمَأُ بَعْدَهَا أَبَدًا. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ عَبْدُكَ وَنَبِيُّكَ مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا عَاذَ مِنْهُ عَبْدُكَ وَنَبِيُّكَ. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوْذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ.",
    "latin": "Allāhumma aẓillanā taḥta ‘arsyika yauma lā ẓilla illā ẓilluk. Allāhummas-qinī bika'si muḥammadin ṣallallāhu ‘alaihi wa sallama syarbatal lā aẓma'u ba‘dahā abadā. Allāhumma innī as'aluka min khairi mā sa'alaka ‘abduka wa nabiyyuka muḥammadun ṣallallāhu ‘alaihi wa sallam, wa a‘ūdzu bika min syarri ma ‘ādza minhu ‘abduka wa nabiyyuk. Allāhumma innī as'alukal-jannata wa mā qarraba ilaihā min qaulin au ‘amal, wa a‘ūdzu bika minan-nāri wa mā qarraba ilaihā min qaulin au ‘amal.",
    "arti": "Ya Allah, naungilah kami di bawah naungan Arasy-Mu pada hari tiada naungan selain naungan-Mu. Ya Allah, berilah aku minum dari telaga Nabi Muhammad SAW dengan satu tegukan yang membuatku tidak akan pernah haus lagi selamanya. Ya Allah, aku mohon kebaikan yang dimohonkan hamba dan Nabi-Mu Muhammad SAW, dan aku berlindung dari keburukan yang dimohonkan perlindungan daripadanya oleh hamba dan Nabi-Mu. Ya Allah, aku memohon surga dan apa saja yang mendekatkan kepadanya berupa perkataan atau perbuatan, dan aku berlindung dari neraka dan apa saja yang mendekatkan kepadanya berupa perkataan atau perbuatan.",
    "sumber": "Imam al-Ghazali, Ihya 'Ulumuddin, 1/329 & Buku Doa Kemenhaj Hal 49",
    "tags": [
      "thawaf",
      "putaran 5",
      "naungan arsy",
      "telaga nabi"
    ]
  },
  {
    "id": "thawaf-6",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 52,
    "judul": "F. Doa Thawaf: Putaran Keenam",
    "deskripsi": "Memohon pelunasan hak-hak kepada Allah dan kepada sesama manusia, serta kemudahan rezeki halal.",
    "arab": "اَللَّهُمَّ إِنَّ لَكَ عَلَيَّ حُقُوْقًا كَثِيْرَةً فِيْمَا بَيْنِيْ وَبَيْنَكَ وَحُقُوْقًا كَثِيْرَةً فِيْمَا بَيْنِيْ وَبَيْنَ خَلْقِكَ. اَللَّهُمَّ مَا كَانَ لَكَ مِنْهَا فَاغْفِرْهُ لِيْ وَمَا كَانَ لِخَلْقِكَ فَتَحَمَّلْهُ عَنِّيْ وَأَغْنِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ وَبِفَضْلِكَ عَمَّنْ سِوَاكَ يَا وَاسِعَ الْمَغْفِرَةِ.",
    "latin": "Allāhumma inna laka ‘alayya ḥuqūqan katsīratan fīmā bainī wa bainaka wa ḥuqūqan katsīratan fīmā bainī wa baina khalqik. Allāhumma mā kāna laka minhā faghfirhu lī wa mā kāna likhalqika fataḥammalhu ‘annī wa aghninī biḥalālika ‘an ḥarāmika wa biṭā‘atika ‘an ma‘ṣiyatika wa bifaḍlika ‘amman siwāka yā wāsi‘al-maghfirah.",
    "arti": "Ya Allah, sesungguhnya Engkau memiliki hak-hak yang banyak atasku dalam urusan antara aku dengan Engkau, dan hak-hak yang banyak antara aku dengan sesama makhluk-Mu. Ya Allah, apa yang menjadi hak-Mu dari dosa-dosaku itu maka ampunilah bagiku, dan apa yang menjadi hak sesama makhluk-Mu maka tanggungkanlah dariku. Cukupkanlah aku dengan rezeki yang halal dari yang haram, dengan ketaatan kepada-Mu dari maksiat, dan dengan karunia-Mu dari selain-Mu wahai Dzat Yang Maha Luas Ampunan-Nya.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 52-53",
    "tags": [
      "thawaf",
      "putaran 6",
      "hak sesama",
      "rezeki halal"
    ]
  },
  {
    "id": "thawaf-7",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 56,
    "judul": "G. Doa Thawaf: Putaran Ketujuh",
    "deskripsi": "Puncak doa thawaf memohon husnul khatimah, istiqamah iman, dan kelapangan dada.",
    "arab": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ إِيْمَانًا كَامِلًا وَيَقِيْنًا صَادِقًا وَعِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَحَلَالًا طَيِّبًا وَقَلْبًا خَاشِعًا وَلِسَانًا ذَاكِرًا وَتَوْبَةً نَصُوْحًا وَتَوْبَةً قَبْلَ الْمَوْتِ وَمَغْفِرَةً وَرَحْمَةً بَعْدَ الْمَوْتِ. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الرَّاحَةَ عِنْدَ الْمَوْتِ، وَالْعَفْوَ عِنْدَ الْحِسَابِ، وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ بِرَحْمَتِكَ يَا عَزِيْزُ يَا غَفَّارُ. رَبِّ زِدْنِيْ عِلْمًا وَأَلْحِقْنِيْ بِالصَّالِحِيْنَ.",
    "latin": "Allāhumma innī as'aluka īmānan kamilaw wa yaqīnan ṣādiqaw wa ‘ilman nāfi‘aw wa rizqaw wāsi‘aw wa ḥalālan ṭayyibaw wa qalban khāsyi‘aw wa lisānan dzākiraw wa taubatan naṣūḥaw wa taubatan qablal-mauti wa maghfirataw wa raḥmatam ba‘dal-maut. Allāhumma innī as'alukar-rāḥata ‘indal-maut, wal-‘afwa ‘indal-ḥisāb, wal-fauza bil-jannati wan-najāta minan-nāri biraḥmatika yā ‘azīzu yā ghaffār. Rabbi zidnī ‘ilmaw wa alḥiqnī biṣ-ṣāliḥīn.",
    "arti": "Ya Allah, aku memohon kepada-Mu keimanan yang sempurna, keyakinan yang benar, ilmu yang bermanfaat, rezeki yang luas dan halal lagi baik, hati yang khusyuk, lisan yang senantiasa berzikir, tobat yang tulus, tobat sebelum kematian datang, serta ampunan dan rahmat setelah mati. Ya Allah, aku mohon ketenteraman saat kematian tiba, kemaafan ketika hisab ditegakkan, keberuntungan masuk surga, dan keselamatan dari neraka dengan rahmat-Mu wahai Tuhan Yang Maha Perkasa lagi Maha Pengampun. Ya Tuhanku tambahkanlah ilmuku dan gabungkanlah aku bersama golongan orang-orang yang saleh.",
    "sumber": "HR. Al-Azraqi no. 407 (Hasan) & Buku Doa Kemenhaj RI Hal 56-57",
    "tags": [
      "thawaf",
      "putaran 7",
      "husnul khatimah",
      "taubat"
    ]
  },
  {
    "id": "thawaf-sesudah",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 59,
    "judul": "H. Doa Sesudah Thawaf (Di Multazam)",
    "deskripsi": "Dibaca setelah selesai 7 putaran thawaf di depan Multazam (antara Hajar Aswad dan pintu Ka'bah).",
    "arab": "اَللَّهُمَّ يَا رَبَّ الْبَيْتِ الْعَتِيْقِ أَعْتِقْ رِقَابَنَا وَرِقَابَ آبَائِنَا وَأُمَّهَاتِنَا وَإِخْوَانِنَا وَذُرِّيَّاتِنَا مِنَ النَّارِ يَا ذَا الْجُوْدِ وَالْكَرَمِ وَالْفَضْلِ وَالْمَنِّ وَالْعَطَاءِ وَالْإِحْسَانِ. اَللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الْأُمُوْرِ كُلِّهَا وَأَجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الْآخِرَةِ. اَللَّهُمَّ إِنِّيْ عَبْدُكَ وَابْنُ عَبْدِكَ وَاقِفٌ تَحْتَ بَابِكَ مُلْتَزِمٌ بِأَعْتَابِكَ مُتَذَلِّلٌ بَيْنَ يَدَيْكَ أَرْجُوْ رَحْمَتَكَ وَأَخْشَىٰ عَذَابَكَ يَا قَدِيْمَ الْإِحْسَانِ.",
    "latin": "Allāhumma yā rabbal-baitil-‘atīqi a‘tiq riqābanā wa riqāba ābā'inā wa ummahātinā wa ikhwāninā wa dzurriyyātinā minan-nāri yā dzal-jūdi wal-karami wal-faḍli wal-manni wal-‘aṭā'i wal-iḥsān. Allāhumma aḥsin ‘āqibatanā fil-umūri kullihā wa ajirnā min khizyid-dunyā wa ‘adzābil-ākhirah. Allāhumma innī ‘abduka wabnu ‘abdika wāqifun taḥta bābika multazimun bi'a‘tābika mutadzallilun baina yadaika arjū raḥmataka wa akhsyā ‘adzābaka yā qadīmal-iḥsān.",
    "arti": "Ya Allah, Pemilik Baitullah yang mulia, bebaskanlah tengkuk kami, tengkuk ayah bunda kami, saudara-saudara kami, dan keturunan kami dari siksa neraka, wahai Pemilik kemurahan, kemuliaan, karunia, dan kebajikan. Ya Allah, jadikanlah kesudahan segala urusan kami berujung baik, dan selamatkan kami dari kehinaan dunia dan azab akhirat. Ya Allah, aku adalah hamba-Mu anak dari hamba-Mu, berdiri di bawah pintu-Mu, bersimpuh di pelataran-Mu, merendahkan diri di hadapan-Mu mengharap rahmat-Mu dan takut akan azab-Mu wahai Dzat Yang Maha Abadi Kebaikan-Nya.",
    "sumber": "Imam an-Nawawi, Al-Adzkar hal. 288 & Buku Doa Kemenhaj Hal 59-62",
    "tags": [
      "sesudah thawaf",
      "multazam",
      "pembebasan neraka"
    ]
  },
  {
    "id": "thawaf-maqam",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 63,
    "judul": "I. Doa Setelah Salat Sunat di Belakang Maqam Ibrahim",
    "deskripsi": "Dibaca seusai salat sunat thawaf 2 rakaat di belakang Maqam Ibrahim AS.",
    "arab": "اَللَّهُمَّ يَسِّرْ لِيَ الْيُسْرَىٰ وَجَنِّبْنِي الْعُسْرَىٰ وَاغْفِرْ لِيْ فِي الْآخِرَةِ وَالْأُوْلَىٰ وَاعْصِمْنِيْ بِأَلْطَافِكَ حَتَّىٰ لَا أَعْصِيَكَ وَأَعِنِّيْ عَلَىٰ طَاعَتِكَ بِتَوْفِيْقِكَ وَجَنِّبْنِيْ مَعَاصِيْكَ وَاجْعَلْنِيْ مِمَّنْ يُحِبُّكَ وَيُحِبُّ مَلَائِكَتَكَ وَرُسُلَكَ وَيُحِبُّ عِبَادَكَ الصَّالِحِيْنَ.",
    "latin": "Allāhumma yassir liyal-yusrā wa jannibniyal-‘usrā waghfir lī fil-ākhirati wal-ūlā wa‘ṣimnī bi'alṭāfika ḥattā lā a‘ṣiyaka wa a‘innī ‘alā ṭā‘atika bitaufīqika wa jannibnī ma‘āṣīka waj‘alnī mimman yuḥibbuka wa yuḥibbu malā'ikataka wa rusulaka wa yuḥibbu ‘ibādakaṣ-ṣāliḥīn.",
    "arti": "Ya Allah mudahkanlah bagiku jalan kemudahan, jauhkanlah aku dari jalan kesukaran, ampunilah dosaku di akhirat dan di dunia. Lindungilah aku dengan kelembutan-Mu agar aku tidak bermaksiat kepada-Mu. Tolonglah aku untuk taat kepada-Mu dengan taufik-Mu, jauhkan aku dari maksiat kepada-Mu, dan jadikanlah aku termasuk orang yang mencintai-Mu, mencintai para malaikat-Mu, para rasul-Mu, dan hamba-hamba-Mu yang saleh.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 64-65",
    "tags": [
      "salat thawaf",
      "maqam ibrahim",
      "ridha"
    ]
  },
  {
    "id": "thawaf-zamzam",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 69,
    "judul": "J. Doa Ketika Minum Air Zamzam",
    "deskripsi": "Dibaca menghadap kiblat sesudah salat sunat di Maqam Ibrahim sebelum menuju tempat Sa'i.",
    "arab": "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ، وَسَقَمٍ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ.",
    "latin": "Allāhumma innī as'aluka ‘ilman nāfi‘aw wa rizqaw wāsi‘aw wa syifā'am min kulli dā'iw wa saqamim biraḥmatika yā arḥamar-rāḥimīn.",
    "arti": "Ya Allah, aku mohon pada-Mu ilmu pengetahuan yang bermanfaat, rizqi yang luas dan kesembuhan dari segala penyakit dan kepedihan dengan rahmat-Mu ya Allah Tuhan Yang Maha Pengasih dari segenap yang pengasih.",
    "sumber": "HR. Dar al-Quthni no. 2712 & Al-Hakim no. 1739 (Shahih)",
    "tags": [
      "zamzam",
      "kesembuhan",
      "rezeki",
      "ilmu"
    ]
  },
  {
    "id": "thawaf-hijir",
    "bab": "BAB VI - DOA THAWAF",
    "kategori": "thawaf",
    "halamanBuku": 70,
    "judul": "K. Doa Setelah Salat Sunat Mutlak di Hijir Ismail",
    "deskripsi": "Dibaca saat berkesempatan salat sunat mutlak dan berdoa di dalam Hijir Ismail (bawah pancuran talang emas/Mizab).",
    "arab": "اَللَّهُمَّ أَنْتَ رَبِّيْ لَا إِلٰهَ إِلَّا أَنْتَ خَلَقْتَنِيْ وَأَنَا عَبْدُكَ وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ. أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوْءُ لَكَ بِذَنْبِيْ فَاغْفِرْ لِيْ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ بِهِ عِبَادُكَ الصَّالِحُوْنَ وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَكَ مِنْهُ عِبَادُكَ الصَّالِحُوْنَ.",
    "latin": "Allāhumma anta rabbī lā ilāha illā anta khalaqtanī wa anā ‘abduka wa anā ‘alā ‘ahdika wa wa‘dika mastata‘tu. A‘ūdzu bika min syarri mā ṣana‘tu abū'u laka bini‘matika ‘alayya wa abū'u laka bidzambī faghfir lī fa'innahū lā yaghfirudz-dzunūba illā anta. Allāhumma innī as'aluka min khairi mā sa'alaka bihī ‘ibādukaṣ-ṣāliḥūn, wa a‘ūdzu bika min syarri masta‘ādzaka minhu ‘ibādukaṣ-ṣāliḥūn.",
    "arti": "Ya Allah Engkaulah Pemeliharaku. Tiada Tuhan selain Engkau yang telah menciptakan aku. Aku adalah hamba-Mu dan aku terikat pada janji dan ikrar-Mu semampuku. Aku berlindung kepada-Mu dari keburukan apa yang aku perbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku kepada-Mu, maka ampunilah aku karena tidak ada yang mengampuni dosa selain Engkau. Ya Allah, aku mohon kebaikan sebagaimana yang diminta oleh hamba-hamba-Mu yang saleh, dan aku berlindung dari keburukan yang dimohonkan perlindungan daripadanya oleh hamba-hamba-Mu yang saleh.",
    "sumber": "HR. Al-Bukhari no. 6306 (Sayyidul Istighfar) & Manasik al-Hajj hal. 21",
    "tags": [
      "hijir ismail",
      "mizab",
      "talang emas",
      "mustajab"
    ]
  },
  {
    "id": "sai-1",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 72,
    "judul": "A. Doa Hendak Mendaki Bukit Shafa (Memulai Sa'i)",
    "deskripsi": "Dibaca ketika hendak menaiki Bukit Shafa sebelum memulai perjalanan pertama menuju Marwah.",
    "arab": "بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيْمِ وَرَسُوْلُهُ. إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ، فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا، وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيْمٌ. أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ وَرَسُوْلُهُ.",
    "latin": "Bismillāhir-raḥmānir-raḥīmi wa rasūluh. Innaṣ-ṣafā wal-marwata min sya‘ā'irillāh, faman ḥajjal-baita awi‘tamara falā junāḥa ‘alaihi ay-yaṭṭawwafa bihimā, wa man taṭawwa‘a khairan fa'innallāha syākirun ‘alīm. Abda'u bimā bada'allāhu bihī wa rasūluh.",
    "arti": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Sesungguhnya Shafa dan Marwah merupakan sebagian syiar (agama) Allah. Maka barang siapa beribadah haji ke Baitullah atau berumrah, tidak ada dosa baginya mengerjakan sa'i antara keduanya. Dan barang siapa dengan kerelaan hati mengerjakan kebajikan maka Allah Maha Mensyukuri, Maha Mengetahui. Aku memulai sa'i dengan apa yang Allah dan Rasul-Nya memulai.",
    "sumber": "HR. Muslim no. 1218 (Shahih) & QS. Al-Baqarah: 158",
    "tags": [
      "bukit shafa",
      "awal sai",
      "bacaan quran"
    ]
  },
  {
    "id": "sai-2",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 73,
    "judul": "B. Doa di Atas Bukit Shafa Ketika Menghadap Ka'bah",
    "deskripsi": "Dibaca di atas bukit Shafa sambil menghadap ke arah Ka'bah seraya bertakbir 3 kali.",
    "arab": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ. اللَّهُ أَكْبَرُ عَلَىٰ مَا هَدَانَا، الْحَمْدُ لِلَّهِ عَلَىٰ مَا أَوْلَانَا. لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ. أَنْجَزَ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَهَزَمَ الْأَحْزَابَ وَحْدَهُ. لَا إِلٰهَ إِلَّا اللَّهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ مُخْلِصِيْنَ لَهُ الدِّيْنَ وَلَوْ كَرِهَ الْكَافِرُوْنَ، وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِيْنَ.",
    "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Allāhu akbaru ‘alā mā hadānā, al-ḥamdu lillāhi ‘alā mā awlānā. Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu wa huwa ‘alā kulli syai'in qadīr. Anjaza wa‘dahū wa naṣara ‘abdahū wa hazamal-aḥzāba waḥdah. Lā ilāha illallāhu wa lā na‘budu illā iyyāhu mukhliṣīna lahud-dīna walau karihal-kāfirūn, wal-ḥamdu lillāhi rabbil-‘ālamīn.",
    "arti": "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar. Segala puji bagi Allah, Allah Maha Besar, atas petunjuk yang diberikan-Nya kepada kami, segala puji bagi Allah atas karunia yang telah dianugerahkan-Nya kepada kami, tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan pujian, Dia berkuasa atas segala sesuatu. Dia telah menepati janji-Nya, menolong hamba-Nya dan mengalahkan sendiri musuh-musuh-Nya. Tidak ada Tuhan selain Allah dan kami tidak menyembah kecuali kepada-Nya dengan memurnikan kepatuhan semata kepada-Nya walaupun orang-orang kafir membenci. Dan segala puji bagi Allah, Tuhan semesta Alam.",
    "sumber": "HR. Muslim no. 1218 & Imam al-Ghazali, Ihya 'Ulumuddin 1/331",
    "tags": [
      "atas shafa",
      "takbir",
      "tauhid"
    ]
  },
  {
    "id": "sai-round-1",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 75,
    "judul": "C. Doa Sa'i: Perjalanan Pertama (Shafa ke Marwah)",
    "deskripsi": "Dibaca saat melangkah pada putaran pertama dari Bukit Shafa menuju Bukit Marwah.",
    "arab": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ كَبِيْرًا، وَالْحَمْدُ لِلَّهِ كَثِيْرًا، وَسُبْحَانَ اللَّهِ الْعَظِيْمِ وَبِحَمْدِهِ الْكَرِيْمِ بُكْرَةً وَأَصِيْلًا. وَمِنَ اللَّيْلِ فَاسْجُدْ لَهُ وَسَبِّحْهُ لَيْلًا طَوِيْلًا. لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ، لَا شَيْءَ قَبْلَهُ وَلَا بَعْدَهُ، يُحْيِيْ وَيُمِيْتُ وَهُوَ حَيٌّ دَائِمٌ لَا يَمُوْتُ أَبَدًا بِيَدِهِ الْخَيْرُ وَإِلَيْهِ الْمَصِيْرُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ.",
    "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbar, Allāhu akbaru kabīrā, wal-ḥamdu lillāhi katsīrā, wa subḥānallāhil-‘aẓīmi wa biḥamdihil-karīmi bukratan wa aṣīlā. Wa minal-laili fasjud lahū wa sabbiḥhu lailan ṭawīlā. Lā ilāha illallāhu waḥdah, anjaza wa‘dah, wa naṣara ‘abdah, wa hazamal-aḥzāba waḥdah, lā syai'a qablahū wa lā ba‘dah, yuḥyī wa yumītu wa huwa ḥayyun dā'imul lā yamūtu abadā, biyadihil-khairu wa ilaihil-maṣīru wa huwa ‘alā kulli syai'in qadīr.",
    "arti": "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dengan segala kebesaran-Nya, segala puji bagi Allah sebanyak-banyaknya, dan Maha Suci Allah Yang Maha Agung serta pujian bagi-Nya Yang Maha Mulia di pagi dan petang hari. Dan pada sebagian malam, bersujudlah kepada-Nya dan bertasbihlah kepada-Nya di malam yang panjang. Tiada Tuhan selain Allah Yang Maha Esa, Dia menepati janji-Nya, menolong hamba-Nya, dan mengalahkan musuh-musuh-Nya sendirian, tiada sesuatu sebelum-Nya dan sesudah-Nya. Dia Yang Menghidupkan dan Mematikan, dan Dia Maha Hidup abadi tidak pernah mati, di tangan-Nyalah segala kebajikan dan kepada-Nyalah tempat kembali, dan Dia Maha Kuasa atas segala sesuatu.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 75-76",
    "tags": [
      "sai",
      "putaran 1",
      "shafa ke marwah"
    ]
  },
  {
    "id": "sai-pilar",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 77,
    "judul": "D. Doa di Antara Dua Pilar Hijau / Lampu Hijau",
    "deskripsi": "Dibaca saat melintasi pilar lampu hijau (disunnahkan lari-lari kecil bagi jemaah laki-laki pada setiap putaran Sa'i).",
    "arab": "رَبِّ اغْفِرْ وَارْحَمْ وَاعْفُ وَتَكَرَّمْ وَتَجَاوَزْ عَمَّا تَعْلَمُ، إِنَّكَ تَعْلَمُ مَا لَا نَعْلَمُ، إِنَّكَ أَنْتَ اللَّهُ الْأَعَزُّ الْأَكْرَمُ.",
    "latin": "Rabbigh-fir warḥam wa‘fu wa takarram wa tajāwaz ‘ammā ta‘lam, innaka ta‘lamu mā lā na‘lam, innaka antallāhul-a‘azzul-akram.",
    "arti": "Ya Tuhanku ampunilah, sayangilah, maafkanlah, bermurahlah dan hapuskanlah apa-apa yang Engkau ketahui. Sesungguhnya Engkau mengetahui apa-apa yang kami tidak ketahui. Sesungguhnya Engkaulah Allah Yang Maha Perkasa lagi Maha Mulia.",
    "sumber": "HR. Ibnu Abi Syaibah & Al-Baihaqi, Sunan Kubra 5/96",
    "tags": [
      "lampu hijau",
      "pilar hijau",
      "lari kecil"
    ]
  },
  {
    "id": "sai-keluar-lampu",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 79,
    "judul": "E. Doa Setelah Keluar dari Lampu Hijau",
    "deskripsi": "Dibaca saat kembali berjalan normal seusai melintasi batas lampu hijau Sa'i.",
    "arab": "رَبَّنَا تَقَبَّلْ مِنَّا وَعَافِنَا وَاعْفُ عَنَّا وَعَلَىٰ طَاعَتِكَ وَشُكْرِكَ أَعِنَّا.",
    "latin": "Rabbanā taqabbal minnā wa ‘āfinā wa‘fu ‘annā wa ‘alā ṭā‘atika wa syukrika a‘innā.",
    "arti": "Ya Tuhan kami terimalah amalan dari kami, berilah kesehatan kepada kami, maafkanlah kesalahan kami, dan tolonglah kami untuk senantiasa taat dan bersyukur kepada-Mu.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 79",
    "tags": [
      "keluar lampu hijau",
      "penerimaan"
    ]
  },
  {
    "id": "sai-dekat-marwah",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 80,
    "judul": "F. Doa Ketika Mendekati Bukit Marwah",
    "deskripsi": "Dibaca saat langkah kaki mulai mendekati landasan Bukit Marwah.",
    "arab": "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ، فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا، وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيْمٌ.",
    "latin": "Innaṣ-ṣafā wal-marwata min sya‘ā'irillāh, faman ḥajjal-baita awi‘tamara falā junāḥa ‘alaihi ay-yaṭṭawwafa bihimā, wa man taṭawwa‘a khairan fa'innallāha syākirun ‘alīm.",
    "arti": "Sesungguhnya Shafa dan Marwah adalah sebagian syiar (agama) Allah. Maka barang siapa beribadah haji ke Baitullah atau berumrah, tidak ada dosa baginya mengerjakan sa'i antara keduanya. Dan barang siapa dengan kerelaan hati mengerjakan kebajikan maka Allah Maha Mensyukuri, Maha Mengetahui.",
    "sumber": "QS. Al-Baqarah: 158 & HR. Muslim no. 1218",
    "tags": [
      "mendekati marwah",
      "syiar allah"
    ]
  },
  {
    "id": "sai-round-2",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 81,
    "judul": "G. Doa Sa'i: Perjalanan Kedua (Marwah ke Shafa)",
    "deskripsi": "Dibaca saat melangkah pada putaran kedua dari Bukit Marwah kembali menuju Bukit Shafa.",
    "arab": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ، لَا إِلٰهَ إِلَّا اللَّهُ الْوَاحِدُ الْفَرْدُ الصَّمَدُ. وَقُلِ الْحَمْدُ لِلَّهِ الَّذِيْ لَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُنْ لَهُ شَرِيْكٌ فِي الْمُلْكِ وَلَمْ يَكُنْ لَهُ وَلِيٌّ مِنَ الذُّلِّ وَكَبِّرْهُ تَكْبِيْرًا. اَللَّهُمَّ إِنَّكَ قُلْتَ فِيْ كِتَابِكَ الْمُنَزَّلِ: اُدْعُوْنِيْ أَسْتَجِبْ لَكُمْ، دَعَوْنَاكَ رَبَّنَا فَاغْفِرْ لَنَا كَمَا أَمَرْتَنَا إِنَّكَ لَا تُخْلِفُ الْمِيْعَادَ.",
    "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd, lā ilāha illallāhul-wāḥidul-farduṣ-ṣamad. Wa qulil-ḥamdu lillāhil-ladzī lam yattakhidz waladaw wa lam yakul lahū syarīkun fil-mulki wa lam yakul lahū waliyyum minadz-dzulli wa kabbirhu takbīrā. Allāhumma innaka qulta fī kitābikal-munazzal: ud‘ūnī astajib lakum, da‘aunāka rabbanā faghfir lanā kamā amartanā innaka lā tukhliful-mī‘ād.",
    "arti": "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan bagi Allah segala puji. Tiada Tuhan selain Allah Yang Maha Esa, Tunggal, tempat bergantung segala makhluk. Dan katakanlah, \"Segala puji bagi Allah yang tidak mempunyai anak dan tidak mempunyai sekutu dalam kerajaan-Nya dan Dia bukan pula hina yang memerlukan penolong dan agungkanlah Dia dengan pengagungan yang sebesar-besarnya\". Ya Allah sesungguhnya Engkau telah berfirman dalam kitab-Mu: \"Berdoalah kepada-Ku niscaya Aku kabulkan untukmu\", kami telah memohon kepada-Mu wahai Tuhan kami, maka ampunilah kami sebagaimana Engkau perintahkan kami, sungguh Engkau tidak pernah menyalahi janji.",
    "sumber": "QS. Al-Isra': 111, QS. Ghafir: 60 & Buku Doa Kemenhaj Hal 81-83",
    "tags": [
      "sai",
      "putaran 2",
      "marwah ke shafa"
    ]
  },
  {
    "id": "sai-dekat-shafa",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 86,
    "judul": "I. Doa Ketika Mendekati Bukit Shafa",
    "deskripsi": "Dibaca saat langkah kaki mulai mendekati dasar bukit Shafa dari arah Marwah.",
    "arab": "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ، فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا، وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيْمٌ.",
    "latin": "Innaṣ-ṣafā wal-marwata min sya‘ā'irillāh, faman ḥajjal-baita awi‘tamara falā junāḥa ‘alaihi ay-yaṭṭawwafa bihimā, wa man taṭawwa‘a khairan fa'innallāha syākirun ‘alīm.",
    "arti": "Sesungguhnya Shafa dan Marwah adalah sebagian syiar (agama) Allah. Maka barang siapa beribadah haji ke Baitullah atau berumrah, tidak ada dosa baginya mengerjakan sa'i antara keduanya. Dan barang siapa dengan kerelaan hati mengerjakan kebajikan maka Allah Maha Mensyukuri, Maha Mengetahui.",
    "sumber": "QS. Al-Baqarah: 158 & Buku Doa Kemenhaj Hal 86",
    "tags": [
      "mendekati shafa",
      "syiar allah"
    ]
  },
  {
    "id": "sai-round-3",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 87,
    "judul": "J. Doa Sa'i: Perjalanan Ketiga (Shafa ke Marwah)",
    "deskripsi": "Dibaca pada putaran ketiga memohon cahaya hati dan kemudahan hisab.",
    "arab": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ. رَبَّنَا أَتْمِمْ لَنَا نُوْرَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْخَيْرَ كُلَّهُ عَاجِلَهُ وَآجِلَهُ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَعُوْذُ بِكَ مِنَ الشَّرِّ كُلِّهِ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوْذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ.",
    "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Rabbanā atmim lanā nūranā waghfir lanā innaka ‘alā kulli syai'in qadīr. Allāhumma innī as'alukal-khaira kullahū ‘ājilahū wa ājilahū mā ‘alimtu minhu wa mā lam a‘lam, wa a‘ūdzu bika minasy-syarri kullihī ‘ājilihī wa ājilihī mā ‘alimtu minhu wa mā lam a‘lam, wa as'alukal-jannata wa mā qarraba ilaihā min qaulin au ‘amal, wa a‘ūdzu bika minan-nāri wa mā qarraba ilaihā min qaulin au ‘amal.",
    "arti": "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan bagi Allah segala puji. Wahai Tuhan kami sempurnakanlah bagi kami cahaya kami dan ampunilah kami, sesungguhnya Engkau Maha Kuasa atas segala sesuatu. Ya Allah, aku mohon kepada-Mu segala kebaikan yang disegerakan maupun yang ditangguhkan, apa yang aku ketahui maupun yang tidak aku ketahui. Dan aku berlindung kepada-Mu dari segala keburukan yang disegerakan maupun yang ditangguhkan, apa yang aku ketahui maupun yang tidak aku ketahui. Dan aku memohon kepada-Mu surga dan apa saja yang mendekatkan kepadanya berupa ucapan atau amalan, dan aku berlindung kepada-Mu dari neraka dan apa saja yang mendekatkan kepadanya berupa ucapan atau amalan.",
    "sumber": "QS. At-Tahrim: 8, HR. Ibnu Majah no. 3846 & Buku Doa Kemenhaj Hal 87-89",
    "tags": [
      "sai",
      "putaran 3",
      "cahaya",
      "kebaikan"
    ]
  },
  {
    "id": "sai-round-4",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 94,
    "judul": "N. Doa Sa'i: Perjalanan Keempat (Marwah ke Shafa)",
    "deskripsi": "Dibaca pada putaran keempat memohon kesabaran dan istiqamah dalam kebaikan.",
    "arab": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ مِنْ خَيْرِ مَا تَعْلَمُ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا تَعْلَمُ، وَأَسْتَغْفِرُكَ مِنْ كُلِّ مَا تَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوْبِ. لَا إِلٰهَ إِلَّا اللَّهُ الْمَلِكُ الْحَقُّ الْمُبِيْنُ، مُحَمَّدٌ رَسُوْلُ اللَّهِ صَادِقُ الْوَعْدِ الْأَمِيْنُ. اَللَّهُمَّ كَمَا هَدَيْتَنِيْ لِلْإِسْلَامِ فَأَسْأَلُكَ أَلَّا تَنْزِعَهُ مِنِّيْ حَتَّىٰ تَتَوَفَّانِيْ وَأَنَا مُسْلِمٌ.",
    "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Allāhumma innī as'aluka min khairi mā ta‘lam, wa a‘ūdzu bika min syarri mā ta‘lam, wa astaghfiruka min kulli mā ta‘lam, innaka anta ‘allāmul-ghuyūb. Lā ilāha illallāhul-malikul-ḥaqqul-mubīn, muḥammadur rasūlullāhi ṣādiqul-wa‘dil-amīn. Allāhumma kamā hadaitanī lil-islāmi fa as'aluka allā tanzi‘ahū minnī ḥattā tatawaffānī wa anā muslim.",
    "arti": "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan bagi Allah segala puji. Ya Allah, aku memohon kepada-Mu kebaikan yang Engkau ketahui, dan aku berlindung kepada-Mu dari keburukan yang Engkau ketahui, serta aku memohon ampunan kepada-Mu dari segala apa yang Engkau ketahui, sungguh Engkaulah Yang Maha Mengetahui hal-hal yang gaib. Tiada Tuhan selain Allah Raja Yang Maha Benar lagi Nyata, Muhammad utusan Allah yang benar janjinya lagi terpercaya. Ya Allah sebagaimana Engkau telah memberiku petunjuk kepada Islam, maka aku memohon agar Engkau tidak mencabutnya dariku hingga Engkau mewafatkanku dalam keadaan berserah diri (muslim).",
    "sumber": "Imam Malik, Al-Muwatta' no. 804 & Buku Doa Kemenhaj Hal 94-96",
    "tags": [
      "sai",
      "putaran 4",
      "istighfar",
      "ilmu gaib"
    ]
  },
  {
    "id": "sai-round-5",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 100,
    "judul": "Q. Doa Sa'i: Perjalanan Kelima (Shafa ke Marwah)",
    "deskripsi": "Dibaca pada putaran kelima memohon kebersihan jiwa dari sifat tercela.",
    "arab": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ. سُبْحَانَكَ مَا شَكَرْنَاكَ حَقَّ شُكْرِكَ يَا اَللَّهُ، سُبْحَانَكَ مَا أَعْلَى شَأْنَكَ يَا اَللَّهُ. اَللَّهُمَّ حَبِّبْ إِلَيْنَا الْإِيْمَانَ وَزَيِّنْهُ فِيْ قُلُوْبِنَا وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوْقَ وَالْعِصْيَانَ وَاجْعَلْنَا مِنَ الرَّاشِدِيْنَ. اَللَّهُمَّ قِنِيْ عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ، اَللَّهُمَّ اهْدِنَا بِالْهُدَىٰ وَزَيِّنَّا بِالتَّقْوَىٰ وَاغْفِرْ لَنَا فِي الْآخِرَةِ وَالْأُوْلَىٰ.",
    "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Subḥānaka mā syakarnāka ḥaqqa syukrika yallāh, subḥānaka mā a‘lā sya'naka yallāh. Allāhumma ḥabbib ilainal-īmāna wa zayyinhu fī qulūbinā wa karrih ilainal-kufra wal-fusūqa wal-‘iṣyāna waj‘alnā minar-rāsyidīn. Allāhumma qinī ‘adzābaka yauma tab‘atsu ‘ibādak, allāhummah-dinā bil-hudā wa zayyinnā bit-taqwā waghfir lanā fil-ākhirati wal-ūlā.",
    "arti": "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan bagi Allah segala puji. Maha Suci Engkau tidaklah kami mampu bersyukur kepada-Mu dengan hak syukur yang semestinya ya Allah, Maha Suci Engkau betapa luhur kedudukan-Mu ya Allah. Ya Allah jadikanlah kami mencintai keimanan dan hiasilah ia dalam kalbu kami, dan jadikanlah kami membenci kekufuran, kefasikan, dan kemaksiatan serta jadikanlah kami termasuk orang-orang yang mendapat petunjuk. Ya Allah lindungilah aku dari azab-Mu pada hari Engkau membangkitkan hamba-hamba-Mu. Ya Allah bimbinglah kami dengan petunjuk-Mu, hiasilah kami dengan takwa, dan ampunilah kami di akhirat dan di dunia.",
    "sumber": "QS. Al-Hujurat: 7 & Buku Doa Kemenhaj Hal 100-102",
    "tags": [
      "sai",
      "putaran 5",
      "kebersihan hati",
      "ikhlas"
    ]
  },
  {
    "id": "sai-round-6",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 105,
    "judul": "U. Doa Sa'i: Perjalanan Keenam (Marwah ke Shafa)",
    "deskripsi": "Dibaca pada putaran keenam memohon kemudahan sakaratul maut dan hisab yang ringan.",
    "arab": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ، لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ صَدَقَ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَهَزَمَ الْأَحْزَابَ وَحْدَهُ، لَا إِلٰهَ إِلَّا اللَّهُ مُخْلِصِيْنَ لَهُ الدِّيْنَ وَلَوْ كَرِهَ الْكَافِرُوْنَ. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْهُدَىٰ وَالتُّقَىٰ وَالْعَفَافَ وَالْغِنَىٰ. اَللَّهُمَّ لَكَ الْحَمْدُ كَالَّذِيْ نَقُوْلُ وَخَيْرًا مِمَّا نَقُوْلُ. اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ وَأَعُوْذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ.",
    "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd, lā ilāha illallāhu waḥdah, ṣadaqa wa‘dah, wa naṣara ‘abdah, wa hazamal-aḥzāba waḥdah, lā ilāha illallāhu mukhliṣīna lahud-dīna walau karihal-kāfirūn. Allāhumma innī as'alukal-hudā wat-tuqā wal-‘afāfa wal-ghinā. Allāhumma lakal-ḥamdu kalladzī naqūlu wa khairam mimmā naqūl. Allāhumma innī as'aluka riḍāka wal-jannata wa a‘ūdzu bika min sakhaṭika wan-nār.",
    "arti": "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan bagi Allah segala puji. Tiada Tuhan selain Allah Yang Maha Esa, Dia telah menepati janji-Nya, menolong hamba-Nya, dan mengalahkan musuh-musuh-Nya sendirian, tiada Tuhan selain Allah dengan memurnikan ketaatan kepada-Nya walaupun orang-orang kafir membenci. Ya Allah aku memohon kepada-Mu petunjuk, ketakwaan, kehormatan diri, dan kecukupan hidup. Ya Allah bagi-Mu segala puji sebagaimana yang kami ucapkan dan lebih baik dari apa yang kami ucapkan. Ya Allah aku mohon keridaan-Mu dan surga-Mu serta berlindung dari murka-Mu dan neraka-Mu.",
    "sumber": "HR. Muslim no. 2721 & Buku Doa Kemenhaj Hal 105-107",
    "tags": [
      "sai",
      "putaran 6",
      "memandang allah",
      "kerinduan"
    ]
  },
  {
    "id": "sai-round-7",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 111,
    "judul": "X. Doa Sa'i: Perjalanan Ketujuh (Shafa ke Marwah)",
    "deskripsi": "Putaran penutup ibadah Sa'i, berakhir di Bukit Marwah dengan penuh rasa syukur.",
    "arab": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ كَبِيْرًا، وَالْحَمْدُ لِلَّهِ كَثِيْرًا. اَللَّهُمَّ حَبِّبْ إِلَيَّ الْإِيْمَانَ وَزَيِّنْهُ فِيْ قَلْبِيْ وَكَرِّهْ إِلَيَّ الْكُفْرَ وَالْفُسُوْقَ وَالْعِصْيَانَ وَاجْعَلْنِيْ مِنَ الرَّاشِدِيْنَ. اَللَّهُمَّ اخْتِمْ لِيْ بِخَيْرٍ، وَأَسْأَلُكَ حَجًّا مَبْرُوْرًا وَسَعْيًا مَشْكُوْرًا وَذَنْبًا مَغْفُوْرًا وَتِجَارَةً لَنْ تَبُوْرَ يَا عَزِيْزُ يَا غَفُوْرُ.",
    "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbaru kabīrā, wal-ḥamdu lillāhi katsīrā. Allāhumma ḥabbib ilayyal-īmāna wa zayyinhu fī qalbī wa karrih ilayyal-kufra wal-fusūqa wal-‘iṣyāna waj‘alnī minar-rāsyidīn. Allāhumma-khtim lī bikhair, wa as'aluka ḥajjam mabrūraw wa sa‘yam masykūraw wa dzambam maghfūraw wa tijāratal lan tabūra yā ‘azīzu yā ghafūr.",
    "arti": "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dengan sebesar-besarnya, dan segala puji bagi Allah sebanyak-banyaknya. Ya Allah jadikanlah aku mencintai keimanan dan indahkanlah ia dalam hatiku, serta bencikanlah kepadaku kekafiran, kefasikan, dan kedurhakaan, serta jadikanlah aku termasuk golongan orang yang terbimbing. Ya Allah akhirilah hidupku dengan husnul khatimah, dan aku memohon kepada-Mu haji yang mabrur, sa'i yang diterima, dosa yang diampuni, dan perniagaan yang tidak akan rugi wahai Tuhan Yang Maha Perkasa lagi Maha Pengampun.",
    "sumber": "QS. Fatir: 29, QS. Al-Hujurat: 7 & Buku Doa Kemenhaj Hal 111-113",
    "tags": [
      "sai",
      "putaran 7",
      "akhir usia",
      "kebajikan"
    ]
  },
  {
    "id": "sai-selesai",
    "bab": "BAB VII - DOA SA'I",
    "kategori": "sai",
    "halamanBuku": 117,
    "judul": "AB. Doa di Bukit Marwah Sesudah Selesai Sa'i",
    "deskripsi": "Dibaca di atas Bukit Marwah menghadap Ka'bah sebagai penutup seluruh rangkaian 7 perjalanan Sa'i.",
    "arab": "اَللَّهُمَّ رَبَّنَا تَقَبَّلْ مِنَّا وَعَافِنَا وَاعْفُ عَنَّا وَعَلَىٰ طَاعَتِكَ وَشُكْرِكَ أَعِنَّا وَعَلَىٰ غَيْرِكَ لَا تَكِلْنَا وَعَلَى الْإِيْمَانِ وَالْإِسْلَامِ الْكَامِلِ جَمِيْعًا تَوَفَّنَا وَأَنْتَ رَاضٍ عَنَّا. اَللَّهُمَّ ارْحَمْنِيْ بِتَرْكِ الْمَعَاصِيْ أَبَدًا مَا أَبْقَيْتَنِيْ وَارْحَمْنِيْ أَنْ أَتَكَلَّفَ مَالَا يَعْنِيْنِيْ وَارْزُقْنِيْ حُسْنَ النَّظَرِ فِيْمَا يُرْضِيْكَ عَنِّيْ يَا أَرْحَمَ الرَّاحِمِيْنَ.",
    "latin": "Allāhumma rabbanā taqabbal minnā wa ‘āfinā wa‘fu ‘annā wa ‘alā ṭā‘atika wa syukrika a‘innā wa ‘alā ghairika lā takilnā wa ‘alal-īmāni wal-islāmil-kāmili jamī‘an tawaffanā wa anta rāḍin ‘annā. Allāhummar-ḥamnī bitarkil-ma‘āṣī abadām mā abqaitanī war-ḥamnī an atakallafa mālā ya‘nīnī war-zuqnī ḥusnan-naẓari fīmā yurḍīka ‘annī yā arḥamar-rāḥimīn.",
    "arti": "Ya Allah wahai Tuhan kami, terimalah amalan dari kami, berilah kesehatan kepada kami, maafkanlah kami, tolonglah kami untuk senantiasa taat dan bersyukur kepada-Mu, janganlah Engkau serahkan kami kepada selain-Mu, dan wafatkanlah kami semua dalam keadaan iman dan Islam yang sempurna sementara Engkau rida kepada kami. Ya Allah belas kasihanilah aku dengan meninggalkan maksiat selamanya selama Engkau masih menghidupkanku, kasihanilah aku agar tidak menyibukkan diri dengan hal yang tidak berguna bagiku, dan anugerahilah aku pandangan yang baik pada apa yang membuat-Mu rida kepadaku wahai Dzat Yang Maha Pengasih dari segala yang mengasihi.",
    "sumber": "Manasik al-Hajj wal-'Umrah hal. 39 & Buku Doa Kemenhaj Hal 117-119",
    "tags": [
      "selesai sai",
      "bukit marwah",
      "ridha allah"
    ]
  },
  {
    "id": "tahallul-1",
    "bab": "BAB VIII - DOA BERCUKUR (TAHALLUL)",
    "kategori": "tahallul",
    "halamanBuku": 120,
    "judul": "A. Doa Ketika Mencukur / Menggunting Rambut (Tahallul)",
    "deskripsi": "Dibaca saat memotong minimal 3 helai rambut (atau mencukur habis bagi laki-laki) sebagai tanda pelepasan ihram.",
    "arab": "اَلْحَمْدُ لِلَّهِ عَلَىٰ مَا هَدَانَا وَالْحَمْدُ لِلَّهِ عَلَىٰ مَا أَنْعَمَنَا بِهِ عَلَيْنَا. اَللَّهُمَّ هٰذِهِ نَاصِيَتِيْ فَتَقَبَّلْ مِنِّيْ وَاغْفِرْ ذُنُوْبِيْ. اَللَّهُمَّ اغْفِرْ لِلْمُحَلِّقِيْنَ وَلِلْمُقَصِّرِيْنَ. يَا وَاسِعَ الْمَغْفِرَةِ. اَللَّهُمَّ اثْبُتْ لِيْ بِكُلِّ شَعْرَةٍ حَسَنَةً وَامْحُ عَنِّيْ بِهَا سَيِّئَةً وَارْفَعْ لِيْ بِهَا عِنْدَكَ دَرَجَةً.",
    "latin": "Al-ḥamdu lillāhi ‘alā mā hadānā wal-ḥamdu lillāhi ‘alā mā an‘amanā bihī ‘alainā. Allāhumma hādzihī nāṣiyatī fataqabbal minnī waghfir dzunūbī. Allāhummagh-fir lil-muḥalliqīna wa lil-muqaṣṣirīn. Yā wāsi‘al-maghfirah. Allāhumma-tsbut lī bikulli sya‘ratin ḥasanataw wam-ḥu ‘annī bihā sayyi'ataw war-fa‘ lī bihā ‘indaka darajah.",
    "arti": "Segala puji bagi Allah atas petunjuk yang telah diberikan-Nya kepada kami, dan segala puji bagi Allah atas segala nikmat yang telah dianugerahkan-Nya kepada kami. Ya Allah, inilah ubun-ubun kepalaku, maka terimalah amalku dan ampunilah dosa-dosaku. Ya Allah ampunilah orang-orang yang mencukur habis kepalanya dan yang memendekkan rambutnya, wahai Dzat Yang Maha Luas Ampunan-Nya. Ya Allah tetapkanlah bagiku pahala kebaikan untuk setiap helai rambut, hapuskanlah dariku dengannya satu keburukan, dan tinggikanlah derajatku di sisi-Mu.",
    "sumber": "Imam an-Nawawi, Al-Adzkar hal. 296 & HR. Al-Bukhari no. 1728 (Shahih)",
    "tags": [
      "tahallul",
      "potong rambut",
      "cahaya kiamat"
    ]
  },
  {
    "id": "tahallul-2",
    "bab": "BAB VIII - DOA BERCUKUR (TAHALLUL)",
    "kategori": "tahallul",
    "halamanBuku": 122,
    "judul": "B. Doa Setelah Selesai Mencukur / Menggunting Rambut",
    "deskripsi": "Dibaca seusai tahallul sebagai tanda sah dan selesainya rangkaian ibadah umrah / tahallul awal.",
    "arab": "اَلْحَمْدُ لِلَّهِ الَّذِيْ قَضَى عَنَّا نُسُكَنَا. اَللَّهُمَّ زِدْنَا إِيْمَانًا وَيَقِيْنًا وَتَوْفِيْقًا وَعَوْنًا وَاغْفِرْ لَنَا وَلِآبَائِنَا وَأُمَّهَاتِنَا وَلِلْمُسْلِمِيْنَ أَجْمَعِيْنَ.",
    "latin": "Al-ḥamdu lillāhil-ladzī qaḍā ‘annā nusukanā. Allāhumma zidnā īmānaw wa yaqīnaw wa taufīqaw wa ‘aunaw waghfir lanā wa li'ābā'inā wa ummahātinā wa lil-muslimīna ajma‘īn.",
    "arti": "Segala puji bagi Allah yang telah menyelesaikan manasik ibadah kami. Ya Allah tambahkanlah bagi kami keimanan, keyakinan, taufik, dan pertolongan-Mu, serta ampunilah kami, ayah bunda kami, dan segenap kaum muslimin seluruhnya.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 122",
    "tags": [
      "setelah tahallul",
      "syukur manasik",
      "doa orang tua"
    ]
  },
  {
    "id": "arafah-niat",
    "bab": "BAB IX - DOA DAN ZIKIR DI ARAFAH",
    "kategori": "arafah",
    "halamanBuku": 123,
    "judul": "A. Niat Haji Tamattu' di Pemondokan Makkah Menuju Arafah",
    "deskripsi": "Dilafalkan pada pagi hari tanggal 8 Dzulhijjah (Hari Tarwiyah) saat bersiap berangkat dari pemondokan Makkah ke Arafah.",
    "arab": "نَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلَّهِ تَعَالَى، لَبَّيْكَ اللَّهُمَّ حَجًّا.",
    "latin": "Nawaitul-ḥajja wa aḥramtu bihī lillāhi ta‘ālā, labbaika allāhumma ḥajjā.",
    "arti": "Aku berniat haji dan berihram karena Allah Ta'ala. Aku sambut panggilan-Mu ya Allah untuk berhaji.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 123",
    "tags": [
      "niat haji",
      "tarwiyah",
      "berangkat arafah"
    ]
  },
  {
    "id": "arafah-berangkat",
    "bab": "BAB IX - DOA DAN ZIKIR DI ARAFAH",
    "kategori": "arafah",
    "halamanBuku": 124,
    "judul": "B. Doa Ketika Berangkat Menuju Padang Arafah",
    "deskripsi": "Dibaca di dalam kendaraan saat bus mulai melaju meninggalkan Makkah menuju Arafah.",
    "arab": "اَللَّهُمَّ إِلَيْكَ تَوَجَّهْتُ وَلِوَجْهِكَ الْكَرِيْمِ أَرَدْتُ، فَاجْعَلْ ذَنْبِيْ مَغْفُوْرًا وَحَجِّيْ مَبْرُوْرًا، وَارْحَمْنِيْ وَلَا تُخَيِّبْنِيْ، إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ.",
    "latin": "Allāhumma ilaika tawajjahtu wa liwajhikal-karīmi aradtu, faj‘al dzambī maghfūraw wa ḥajjī mabrūrā, war-ḥamnī wa lā tukhayyibnī, innaka ‘alā kulli syai'in qadīr.",
    "arti": "Ya Allah, kepada-Mu aku menghadap dan hanya wajah-Mu Yang Mulia yang aku tuju, maka jadikanlah dosaku terampuni dan hajiku mabrur, kasihanilah aku dan janganlah Engkau hampakan harapanku, sungguh Engkau Maha Kuasa atas segala sesuatu.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 124",
    "tags": [
      "berangkat arafah",
      "haji mabrur"
    ]
  },
  {
    "id": "arafah-talbiyah",
    "bab": "BAB IX - DOA DAN ZIKIR DI ARAFAH",
    "kategori": "arafah",
    "halamanBuku": 124,
    "judul": "C. Bacaan Talbiyah dan Salawat dalam Perjalanan Menuju Arafah",
    "deskripsi": "Dikumandangkan terus menerus oleh rombongan jemaah di dalam bus sepanjang perjalanan menuju Arafah.",
    "arab": "لَبَّيْكَ اللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ. اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ.",
    "latin": "Labbaikallāhumma labbaīk, labbaīka lā syarīka laka labbaīk, innal-ḥamda wan-ni‘mata laka wal-mulk, lā syarīka lak. Allāhumma ṣalli ‘alā sayyidinā Muḥammadin wa ‘alā āli sayyidinā Muḥammad.",
    "arti": "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Tiada sekutu bagi-Mu. Segala puji, nikmat, dan kekuasaan hanyalah kepunyaan-Mu. Ya Allah limpahkanlah salawat atas junjungan kami Nabi Muhammad dan keluarganya.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI",
    "tags": [
      "talbiyah arafah",
      "perjalanan",
      "salawat"
    ]
  },
  {
    "id": "arafah-masuk",
    "bab": "BAB IX - DOA DAN ZIKIR DI ARAFAH",
    "kategori": "arafah",
    "halamanBuku": 127,
    "judul": "D. Doa Ketika Masuk Kawasan Arafah",
    "deskripsi": "Dibaca saat bus melintasi batas rambu tanda masuk Padang Arafah.",
    "arab": "اَللَّهُمَّ إِلَيْكَ تَوَجَّهْتُ وَبِكَ اعْتَصَمْتُ وَعَلَيْكَ تَوَكَّلْتُ. اَللَّهُمَّ اجْعَلْنِيْ مِمَّنْ تُبَاهِيْ بِهِ الْيَوْمَ مَلَائِكَتَكَ، إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ.",
    "latin": "Allāhumma ilaika tawajjahtu wa bika‘taṣamtu wa ‘alaika tawakkalt. Allāhummaj‘alnī mimman tubāhī bihil-yauma malā'ikatak, innaka ‘alā kulli syai'in qadīr.",
    "arti": "Ya Allah kepada-Mu aku menghadap, dengan-Mu aku berpegang teguh, dan kepada-Mu aku berserah diri. Ya Allah jadikanlah aku termasuk hamba yang Engkau banggakan hari ini di hadapan para malaikat-Mu, sungguh Engkau Maha Kuasa atas segala sesuatu.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 127",
    "tags": [
      "masuk arafah",
      "kebanggaan malaikat"
    ]
  },
  {
    "id": "arafah-rahmah",
    "bab": "BAB IX - DOA DAN ZIKIR DI ARAFAH",
    "kategori": "arafah",
    "halamanBuku": 127,
    "judul": "E. Doa Ketika Melihat Jabal Rahmah",
    "deskripsi": "Dibaca saat memandang bukit Jabal Rahmah di tengah padang Arafah (tempat pertemuan Adam dan Hawa).",
    "arab": "اَللَّهُمَّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَتُبْ عَلَيَّ وَأَعْطِنِيْ سُؤْلِيْ وَوَجِّهْ لِيَ الْخَيْرَ أَيْنَمَا تَوَجَّهْتُ. سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ.",
    "latin": "Allāhummagh-fir lī war-ḥamnī wa tub ‘alayya wa a‘ṭinī su'lī wa wajjih liyal-khaira aynamā tawajjaht. Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar.",
    "arti": "Ya Allah ampunilah aku, kasihanilah aku, terimalah tobatku, berikanlah permohonanku, dan hadapkanlah kebaikan kepadaku kemana pun aku menghadap. Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, dan Allah Maha Besar.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 127-128",
    "tags": [
      "jabal rahmah",
      "kasih sayang",
      "taubat"
    ]
  },
  {
    "id": "arafah-inti",
    "bab": "BAB IX - DOA DAN ZIKIR DI ARAFAH",
    "kategori": "arafah",
    "halamanBuku": 128,
    "judul": "F. Zikir dan Doa Inti Wukuf di Arafah (Haji Mabrur)",
    "deskripsi": "Puncak ibadah haji (al-hajju 'arafah) dibaca sejak tergelincir matahari 9 Dzulhijjah hingga maghrib.",
    "arab": "لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِيْ وَيُمِيْتُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ. اَللَّهُمَّ اجْعَلْ فِيْ قَلْبِيْ نُوْرًا وَفِيْ سَمْعِيْ نُوْرًا وَفِيْ بَصَرِيْ نُوْرًا. اَللَّهُمَّ اشْرَحْ لِيْ صَدْرِيْ وَيَسِّرْ لِيْ أَمْرِيْ.",
    "latin": "Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu yuḥyī wa yumītu wa huwa ‘alā kulli syai'in qadīr. Allāhummaj‘al fī qalbī nūraw wa fī sam‘ī nūraw wa fī baṣarī nūrā. Allāhummasy-raḥ lī ṣadrī wa yassir lī amrī.",
    "arti": "Tiada Tuhan selain Allah Yang Maha Esa tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala puji, Dia Menghidupkan dan Mematikan dan Dia Maha Kuasa atas segala sesuatu. Ya Allah jadikanlah di dalam hatiku cahaya, pada pendengaranku cahaya, dan pada penglihatanku cahaya. Ya Allah lapangkanlah dadaku dan mudahkanlah urusanku.",
    "sumber": "HR. At-Tirmidzi no. 3585 & HR. Ahmad (Doa Terbaik Hari Arafah)",
    "tags": [
      "wukuf arafah",
      "inti haji",
      "sayyidul doa",
      "mustajab"
    ]
  },
  {
    "id": "arafah-munajat",
    "bab": "BAB IX - DOA DAN ZIKIR DI ARAFAH",
    "kategori": "arafah",
    "halamanBuku": 132,
    "judul": "G. Doa Munajat & Keridhaan Hari Arafah",
    "deskripsi": "Dibaca menjelang terbenam matahari di Padang Arafah dengan menengadahkan kedua tangan berderai air mata.",
    "arab": "اللّٰهُمَّ إِنَّكَ تَرَىٰ مَكَانِي، وَتَسْمَعُ كَلَامِي، وَتَعْلَمُ سِرِّي وَعَلَانِيَتِي، لَا يَخْفَىٰ عَلَيْكَ شَيْءٌ مِنْ أَمْرِي، أَنَا الْبَائِسُ الْفَقِيرُ، الْمُسْتَغِيثُ الْمُسْتَجِيرُ، الْوَجِلُ الْمُشْفِقُ، الْمُقِرُّ الْمُعْتَرِفُ بِذَنْبِهِ، أَسْأَلُكَ مَسْأَلَةَ الْمِسْكِينِ، وَأَبْتَهِلُ إِلَيْكَ ابْتِهَالَ الْمُذْنِبِ الذَّلِيلِ، وَأَدْعُوكَ دُعَاءَ مَنْ خَضَعَتْ لَكَ رَقَبَتُهُ، وَفَاضَتْ لَكَ عَبْرَتُهُ، وَذَلَّ لَكَ جَسَدُهُ، وَرَغِمَ لَكَ أَنْفُهُ. اللّٰهُمَّ لَا تَجْعَلْنِي بِدُعَائِكَ رَبِّ شَقِيًّا، وَكُنْ بِي رَؤُوفًا رَحِيمًا، يَا خَيْرَ الْمَسْؤُولِينَ، وَيَا خَيْرَ الْمُعْطِينَ.",
    "latin": "Allāhumma innaka tarā makānī, wa tasma‘u kalāmī, wa ta‘lamu sirrī wa ‘alāniyatī, lā yakhfā ‘alaika syai-um min amrī, anal-bā’isul-faqīr, al-mustaghītsul-mustajīr, al-wajilul-musyfiq, al-muqirrul-mu‘tarifu bidzambih, as-aluka mas-alatal-miskīn, wa abtahilu ilaika-btihālal-mudznibidz-dzalīl, wa ad‘ūka du‘ā’a man khaḍa‘at laka raqabatuh, wa fāḍat laka ‘abratuh, wa dzalla laka jasaduh, wa raghima laka anfuh. Allāhumma lā taj‘alnī bidu‘ā’ika rabbi syaqiyyā, wa kum bī ra’ūfar raḥīmā, yā khairal-mas’ūlīn, wa yā khairal-mu‘ṭīn.",
    "arti": "Ya Allah, sungguh Engkau melihat tempat berdiriku ini, mendengar perkataanku, dan mengetahui apa yang kurahasiakan dan kunyatakan. Tiada sesuatu pun dari urusanku yang tersembunyi bagi-Mu. Aku adalah hamba yang malang lagi faqir, yang memohon pertolongan dan perlindungan, yang cemas lagi gentar, yang mengakui segala dosanya. Aku memohon kepada-Mu seperti permohonan orang miskin, aku bersimpuh kepada-Mu seperti kepasrahan orang berdosa yang hina, dan aku berdoa kepada-Mu seperti doa orang yang tunduk tengkuknya kepada-Mu, bercucuran air matanya untuk-Mu, rebah jasadnya di hadapan-Mu, dan tersungkur wajahnya demi keagungan-Mu. Ya Allah, janganlah Engkau jadikan aku orang yang celaka dalam berdoa kepada-Mu wahai Tuhanku, dan limpahkanlah kasih sayang serta rahmat kepadaku, wahai Sebaik-baik Dzat Yang Dimohon dan Sebaik-baik Dzat Yang Memberi.",
    "sumber": "HR. At-Thabrani dalam Al-Mu'jam Al-Kabir & Kemenhaj RI",
    "tags": [
      "munajat arafah",
      "air mata",
      "mustajab",
      "taubat nasuha"
    ]
  },
  {
    "id": "muzdalifah-1",
    "bab": "BAB X - DOA DAN ZIKIR DI MUZDALIFAH",
    "kategori": "muzdalifah",
    "halamanBuku": 157,
    "judul": "A. Talbiyah & Salawat Menuju Muzdalifah",
    "deskripsi": "Dikumandangkan setelah matahari terbenam pada 9 Dzulhijjah dalam perjalanan bergerak dari Arafah ke Muzdalifah.",
    "arab": "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيْكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لَا شَرِيْكَ لَكَ. اَللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ.",
    "latin": "Labbaika allāhumma labbaīk, labbaīka lā syarīka laka labbaīk, innal-ḥamda wan-ni‘mata laka wal-mulka lā syarīka lak. Allāhumma ṣalli ‘alā sayyidinā muḥammadiw wa ‘alā āli sayyidinā muḥammad.",
    "arti": "Aku sambut panggilan-Mu ya Allah, tiada sekutu bagi-Mu. Segala puji, kenikmatan, dan kekuasaan hanyalah milik-Mu. Ya Allah limpahkanlah salawat atas junjungan kami Nabi Muhammad beserta segenap keluarganya.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 157-158",
    "tags": [
      "talbiyah",
      "perjalanan muzdalifah",
      "mabit"
    ]
  },
  {
    "id": "muzdalifah-2",
    "bab": "BAB X - DOA DAN ZIKIR DI MUZDALIFAH",
    "kategori": "muzdalifah",
    "halamanBuku": 159,
    "judul": "B. Doa Ketika Sampai di Muzdalifah (Masy'aril Haram)",
    "deskripsi": "Dibaca saat tiba di Muzdalifah sebelum melaksanakan salat Maghrib dan Isya jamak qashar.",
    "arab": "اَللَّهُمَّ إِنَّ هٰذِهِ مُزْدَلِفَةُ جُمِعَتْ فِيْهَا أَلْسِنَةٌ مُخْتَلِفَةٌ تَسْأَلُكَ حَوَائِجَ مُتَنَوِّعَةً، فَاجْعَلْنِيْ مِمَّنْ دَعَاكَ فَاسْتَجَبْتَ لَهُ وَتَوَكَّلَ عَلَيْكَ فَكَفَيْتَهُ، يَا أَرْحَمَ الرَّاحِمِيْنَ.",
    "latin": "Allāhumma inna hādzihī muzdalifatu jumi‘at fīhā alsinatum mukhtalifatun tas'aluka ḥawā'ija mutanawwi‘atan, faj‘alnī mimman da‘āka fastajabta lahū wa tawakkala ‘alaika fakafaitah, yā arḥamar-rāḥimīn.",
    "arti": "Ya Allah sesungguhnya ini Muzdalifah, telah berkumpul padanya beragam lisan manusia yang memohon kepada-Mu berbagai hajat yang beraneka macam, maka jadikanlah aku termasuk orang yang berdoa kepada-Mu lalu Engkau kabulkan doanya, dan orang yang berserah diri kepada-Mu lalu Engkau cukupkan kebutuhannya wahai Tuhan Yang Maha Pengasih.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI, Hal 159-160",
    "tags": [
      "tiba muzdalifah",
      "masy'aril haram",
      "pengabulan"
    ]
  },
  {
    "id": "muzdalifah-3",
    "bab": "BAB X - DOA DAN ZIKIR DI MUZDALIFAH",
    "kategori": "muzdalifah",
    "halamanBuku": 161,
    "judul": "C. Doa Memungut Batu Kerikil di Muzdalifah",
    "deskripsi": "Dibaca saat mengambil kerikil sebesar biji kacang untuk melontar jamrah di Mina.",
    "arab": "اللّٰهُمَّ احْفَظْنِي مِنْ كُلِّ سُوءٍ، وَتَقَبَّلْ مِنِّي نُسُكِي، وَاجْعَلْ هٰذِهِ الْحَصَيَاتِ كَفَّارَةً لِذُنُوبِي، وَطَهِّرْنِي بِهَا يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.",
    "latin": "Allāhummaḥ-faẓnī min kulli sū’, wa taqabbal minnī nusukī, waj‘al hādzihil-ḥaṣayāti kaffāratan lidzunūbī, wa ṭahhirnī bihā yā dzal-jalāli wal-ikrām.",
    "arti": "Ya Allah, peliharalah aku dari segala keburukan, terimalah ibadah manasikku, dan jadikanlah batu-batu kerikil ini sebagai pelebur dosa-dosaku, serta bersihkanlah diriku karenanya wahai Tuhan Pemilik Keagungan dan Kemuliaan.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI",
    "tags": [
      "ambil kerikil",
      "batu jamrah",
      "muzdalifah"
    ]
  },
  {
    "id": "muzdalifah-4",
    "bab": "BAB X - DOA DAN ZIKIR DI MUZDALIFAH",
    "kategori": "muzdalifah",
    "halamanBuku": 162,
    "judul": "D. Doa pada Batas Akhir Muzdalifah Menuju Mina",
    "deskripsi": "Dibaca saat fajar 10 Dzulhijjah setelah selesai mabit ketika mulai melangkah meninggalkan Muzdalifah.",
    "arab": "اللّٰهُمَّ كَمَا وَقَفْتَنَا فِيهِ وَأَرَيْتَنَا إِيَّاهُ، فَوَفِّقْنَا لِذِكْرِكَ كَمَا هَدَيْتَنَا، وَاغْفِرْ لَنَا وَارْحَمْنَا كَمَا وَعَدْتَنَا بِقَوْلِكَ وَقَوْلُكَ الْحَقُّ: فَإِذَا أَفَضْتُمْ مِنْ عَرَفَاتٍ فَاذْكُرُوا اللّٰهَ عِنْدَ الْمَشْعَرِ الْحَرَامِ.",
    "latin": "Allāhumma kamā waqaftanā fīhi wa araitanā iyyāh, fawaffiqnā lidzikrika kamā hadaitanā, waghfir lanā war-ḥamnā kamā wa‘adtanā biqaulika wa qaulukal-ḥaqq: Fa-idzā afaḍtum min ‘Arafātin fadzkurullāha ‘indal-masy‘aril-ḥarām.",
    "arti": "Ya Allah, sebagaimana Engkau telah menghentikan kami di tempat ini dan memperlihatkannya kepada kami, maka berilah kami taufik untuk berdzikir mengingat-Mu sebagaimana Engkau memberi kami petunjuk. Dan ampunilah kami serta sayangilah kami sebagaimana janji-Mu dalam firman-Mu yang haq: \"Maka apabila kamu telah bertolak dari Arafat, berdzikirlah kepada Allah di Masy'aril Haram\".",
    "sumber": "QS. Al-Baqarah: 198 & Kemenhaj RI",
    "tags": [
      "batas muzdalifah",
      "menuju mina",
      "fajar nahr"
    ]
  },
  {
    "id": "mina-1",
    "bab": "BAB XI - DOA DAN ZIKIR DI MINA",
    "kategori": "mina",
    "halamanBuku": 164,
    "judul": "A. Doa Ketika Tiba di Mina",
    "deskripsi": "Dibaca saat memasuki perkemahan Mina pada hari raya Idul Adha (10 Dzulhijjah).",
    "arab": "اَللَّهُمَّ هٰذِهِ مِنًى فَامْنُنْ عَلَيَّ بِمَا مَنَنْتَ بِهِ عَلَىٰ أَوْلِيَائِكَ وَأَهْلِ طَاعَتِكَ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا عَاذَ مِنْهُ عِبَادُكَ الصَّالِحُوْنَ.",
    "latin": "Allāhumma hādzihī minan famnun ‘alayya bimā mananta bihī ‘alā auliyā'ika wa ahli ṭā‘atik, wa a‘ūdzu bika min syarri ma ‘ādza minhu ‘ibādukaṣ-ṣāliḥūn.",
    "arti": "Ya Allah, tempat ini adalah Mina, anugerahilah aku apa yang Engkau telah anugerahkan kepada orang-orang yang dekat dan taat kepada-Mu, dan aku berlindung kepada-Mu dari keburukan yang dimohonkan perlindungan daripadanya oleh hamba-hamba-Mu yang saleh.",
    "sumber": "Manasik al-Hajj wa al-'Umrah hal. 72 & Buku Doa Kemenhaj Hal 164",
    "tags": [
      "masuk mina",
      "perkemahan mina",
      "karunia"
    ]
  },
  {
    "id": "mina-2",
    "bab": "BAB XI - DOA DAN ZIKIR DI MINA",
    "kategori": "mina",
    "halamanBuku": 166,
    "judul": "B. Doa Ketika Melontar Jamrah Aqabah (10 Dzulhijjah)",
    "deskripsi": "Dibaca pada setiap lemparan dari 7 butir kerikil yang dilontarkan ke tiang Jamrah Aqabah.",
    "arab": "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ، رَجْمًا لِلشَّيَاطِيْنِ وَرِضًا لِلرَّحْمٰنِ، اَللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُوْرًا وَسَعْيًا مَشْكُوْرًا وَذَنْبًا مَغْفُوْرًا.",
    "latin": "Bismillāhi wallāhu akbar, rajmal lisysyayāṭīni wa riḍal lir-raḥmān, allāhummaj‘alhu ḥajjam mabrūraw wa sa‘yam masykūraw wa dzambam maghfūrā.",
    "arti": "Dengan nama Allah dan Allah Maha Besar, sebagai lemparan bagi setan dan mencari rida Allah Yang Maha Pengasih. Ya Allah jadikanlah hajiku mabrur, sa'iku diterima, dan dosaku diampuni.",
    "sumber": "HR. Al-Baihaqi & Ahmad, Sunan Kubra 5/129 & Buku Doa Kemenhaj Hal 166",
    "tags": [
      "jamrah aqabah",
      "10 dzulhijjah",
      "lempar kerikil"
    ]
  },
  {
    "id": "mina-3",
    "bab": "BAB XI - DOA DAN ZIKIR DI MINA",
    "kategori": "mina",
    "halamanBuku": 168,
    "judul": "C. Doa Ketika Melontar Jamrah Hari Tasyriq (11, 12, 13 Dzulhijjah)",
    "deskripsi": "Dibaca pada setiap lemparan saat melontar Jamrah Ula, Wusta, dan Aqabah berturut-turut.",
    "arab": "بِسْمِ اللّٰهِ، اَللّٰهُ أَكْبَرُ، رَغْمًا لِلشَّيْطَانِ وَحِزْبِهِ. اللّٰهُمَّ إِيمَانًا بِكِتَابِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ.",
    "latin": "Bismillāhi, Allāhu akbar, raghman lisysyaiṭāni wa ḥizbih. Allāhumma īmānam bikitābika wattibā‘al lisunnati nabiyyika Muḥammadin ṣallallāhu ‘alaihi wa sallam.",
    "arti": "Dengan nama Allah, Allah Maha Besar, penolakan hina terhadap setan dan golongannya. Ya Allah, aku melempar ini karena iman kepada kitab-Mu dan mengikuti sunnah Nabi-Mu Muhammad SAW.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI",
    "tags": [
      "tasyriq",
      "jamrah ula wusta",
      "sunnah nabi"
    ]
  },
  {
    "id": "mina-4",
    "bab": "BAB XI - DOA DAN ZIKIR DI MINA",
    "kategori": "mina",
    "halamanBuku": 169,
    "judul": "D. Doa Sesudah Melontar Jamrah Sughra (Ula) dan Wusta",
    "deskripsi": "Disunnahkan bergeser sedikit ke samping, menghadap kiblat dan mengangkat kedua tangan berdoa panjang.",
    "arab": "الْحَمْدُ لِلّٰهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ. اللّٰهُمَّ لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَىٰ نَفْسِكَ. اللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا، وَعَمَلًا مَشْكُورًا، وَاغْفِرْ لِي وَلِوَالِدَيَّ وَلِإِخْوَانِي الْمُسْلِمِينَ.",
    "latin": "Al-ḥamdu lillāhi ḥamdan katsīran ṭayyiban mubārakan fīh. Allāhumma lā uḥṣī tsanā’an ‘alaika anta kamā atsnaita ‘alā nafsik. Allāhummaj-‘alhu ḥajjan mabrūrā, wa ‘amalan masykūrā, wagh-fir lī wa liwālidayya wa li-ikhwānil-muslimīn.",
    "arti": "Segala puji bagi Allah dengan pujian yang banyak, baik, lagi penuh berkah di dalamnya. Ya Allah, aku tidak sanggup menghitung sanjungan atas-Mu, Engkau adalah sebagaimana sanjungan-Mu atas Zat-Mu sendiri. Ya Allah, jadikanlah haji ini haji mabrur, amal yang disyukuri, dan ampunilah aku, kedua orang tuaku, dan saudara-saudaraku kaum muslimin.",
    "sumber": "Sunnah Nabi SAW (HR. Bukhari no. 1751), Kemenhaj RI",
    "tags": [
      "sesudah melontar",
      "menghadap kiblat",
      "mustajab"
    ]
  },
  {
    "id": "mina-5",
    "bab": "BAB XI - DOA DAN ZIKIR DI MINA",
    "kategori": "mina",
    "halamanBuku": 171,
    "judul": "E. Doa Bercukur (Tahallul Awal) Setelah Melontar Jamrah",
    "deskripsi": "Dibaca saat mencukur atau memotong rambut seusai melontar Jamrah Aqabah pada 10 Dzulhijjah.",
    "arab": "الْحَمْدُ لِلّٰهِ الَّذِي بَلَّغَنَا مَنَاسِكَنَا، اللّٰهُمَّ ثَبِّتْنَا عَلَىٰ دِينِكَ، وَتَقَبَّلْ مِنَّا طَاعَتَنَا، وَارْزُقْنَا كُلَّ خَيْرٍ فِي دِينِنَا وَدُنْيَانَا.",
    "latin": "Al-ḥamdu lillāhil-ladzī ballaghanā manāsikanā, Allāhumma tsabbitnā ‘alā dīnika, wa taqabbal minnā ṭā‘atanā, war-zuqnā kulla khairin fī dīninā wa dunyānā.",
    "arti": "Segala puji bagi Allah yang telah menyampaikan kami pada manasik kami. Ya Allah, teguhkanlah kami di atas agama-Mu, terimalah ketaatan kami, dan berilah kami rezeki segala kebaikan dalam urusan agama dan dunia kami.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI",
    "tags": [
      "tahallul awal",
      "cukur mina",
      "10 dzulhijjah"
    ]
  },
  {
    "id": "mina-6",
    "bab": "BAB XI - DOA DAN ZIKIR DI MINA",
    "kategori": "mina",
    "halamanBuku": 173,
    "judul": "F. Bacaan Zikir dan Tasbih Selama Mabit di Mina",
    "deskripsi": "Dianjurkan diperbanyak selama berdiam diri (mabit) di tenda Mina pada malam-malam Tasyriq.",
    "arab": "سُبْحَانَ اللّٰهِ، وَالْحَمْدُ لِلّٰهِ، وَلَا إِلٰهَ إِلَّا اللّٰهُ، وَاللّٰهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ. رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
    "latin": "Subḥānallāh, wal-ḥamdu lillāh, wa lā ilāha illallāh, wallāhu akbar, wa lā ḥaula wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm. Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ‘adzāban-nār.",
    "arti": "Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, Allah Maha Besar, dan tiada daya dan upaya kecuali dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung. Wahai Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat serta peliharalah kami dari siksa api neraka.",
    "sumber": "QS. Al-Baqarah: 200-201 & Kemenhaj RI",
    "tags": [
      "zikir mina",
      "mabit",
      "tasyriq"
    ]
  },
  {
    "id": "wada-1",
    "bab": "BAB XII - THAWAF WADA'",
    "kategori": "thawaf_wada",
    "halamanBuku": 176,
    "judul": "A. Doa Thawaf Wada' (Dibaca Setiap Putaran)",
    "deskripsi": "Dibaca mengelilingi Ka'bah pada 7 putaran Thawaf Wada' (thawaf perpisahan sebelum meninggalkan Makkah).",
    "arab": "بِسْمِ اللَّهِ، اَللَّهُ أَكْبَرُ، سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيْمِ. وَالصَّلَاةُ وَالسَّلَامُ عَلَىٰ رَسُوْلِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ. اَللَّهُمَّ إِيْمَانًا بِكَ وَتَصْدِيْقًا بِكِتَابِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ.",
    "latin": "Bismillāhi, allāhu akbar, subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar wa lā ḥaula wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm. Waṣ-ṣalātu was-salāmu ‘alā rasūlillāhi ṣallallāhu ‘alaihi wa sallam. Allāhumma īmānam bika wa taṣdīqam bikitābika wattibā‘al lisunnati nabiyyika muḥammadin ṣallallāhu ‘alaihi wa sallam.",
    "arti": "Dengan nama Allah, Allah Maha Besar. Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, Allah Maha Besar, tiada daya dan kekuatan kecuali pertolongan Allah Yang Maha Tinggi lagi Maha Agung. Salawat dan salam atas Rasulullah SAW. Ya Allah, aku berthawaf ini karena beriman kepada-Mu, membenarkan kitab-Mu, dan mengikuti sunnah Nabi-Mu Muhammad SAW.",
    "sumber": "Imam al-Ghazali, Ihya 'Ulumuddin 1/329 & Buku Doa Kemenhaj Hal 176",
    "tags": [
      "thawaf wada",
      "perpisahan kabah",
      "wada"
    ]
  },
  {
    "id": "wada-2",
    "bab": "BAB XII - THAWAF WADA'",
    "kategori": "thawaf_wada",
    "halamanBuku": 181,
    "judul": "B. Doa Sesudah Selesai Thawaf Wada' (Di Depan Pintu Ka'bah)",
    "deskripsi": "Dibaca dengan khusyuk menghadap Ka'bah seusai salat sunat 2 rakaat thawaf wada'.",
    "arab": "اللّٰهُمَّ إِنَّ الْبَيْتَ بَيْتُكَ، وَالْعَبْدَ عَبْدُكَ، وَابْنُ عَبْدِكَ وَابْنُ أَمَتِكَ، حَمَلْتَنِي عَلَىٰ مَا سَخَّرْتَ لِي مِنْ خَلْقِكَ، حَتَّىٰ سَيَّرْتَنِي فِي بِلَادِكَ، وَبَلَّغْتَنِي بِنِعْمَتِكَ حَتَّىٰ أَعَنْتَنِي عَلَىٰ قَضَاءِ مَنَاسِكِي. اللّٰهُمَّ فَلَا تَجْعَلْ هٰذَا آخِرَ الْعَهْدِ مِنْ بَيْتِكَ الْحَرَامِ، وَإِنْ جَعَلْتَهُ فَأَعْوِضْنِي عَنْهُ الْجَنَّةَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ.",
    "latin": "Allāhumma innal-baita baituk, wal-‘abda ‘abduk, wabnu ‘abdika wabnu amatik, ḥamaltanī ‘alā mā sakh-kharta lī min khalqik, ḥattā sayyartanī fī bilādik, wa ballaghtanī bini‘matika ḥattā a‘antanī ‘alā qaḍā’i manāsikī. Allāhumma falā taj‘al hādzā ākhiral-‘ahdi min baitikal-ḥarām, wa in ja‘altahū fa-a‘wiḍnī ‘anhul-jannata biraḥmatika yā arḥamar-rāḥimīn.",
    "arti": "Ya Allah, Rumah ini adalah Rumah-Mu, hamba ini adalah hamba-Mu, anak hamba-Mu yang laki-laki dan anak hamba-Mu yang perempuan. Engkau telah membawaku di atas apa yang Engkau tundukkan dari makhluk-Mu, hingga Engkau memperjalankan aku melintasi negeri-Mu, dan Engkau menyampaikanku dengan nikmat-Mu hingga Engkau menolongku menuntaskan ibadah manasikku. Ya Allah, maka janganlah Engkau jadikan kunjungan ini saat terakhirku dengan Rumah Suci-Mu, dan jika Engkau menjadikannya yang terakhir maka gantikanlah bagiku dengan surga-Mu, dengan rahmat-Mu wahai Dzat Yang Maha Pengasih lagi Maha Penyayang.",
    "sumber": "Imam Asy-Syafi'i & Imam Al-Baihaqi, Kemenhaj RI",
    "tags": [
      "sesudah wada",
      "perpisahan",
      "surga",
      "kembali ke tanah suci"
    ]
  },
  {
    "id": "madinah-masuk",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 185,
    "judul": "A. Doa Memasuki Kota Suci Madinah Munawwarah",
    "deskripsi": "Dibaca saat kendaraan mulai memasuki perbatasan tanah haram Kota Madinah.",
    "arab": "اَللَّهُمَّ هٰذَا حَرَمُ رَسُوْلِكَ فَاجْعَلْهُ لِيْ وِقَايَةً مِنَ النَّارِ وَأَمَانَةً مِنَ الْعَذَابِ وَسُوْءِ الْحِسَابِ.",
    "latin": "Allāhumma hādzā ḥaramu rasūlika faj‘alhu lī wiqāyatam minan-nāri wa amānatam minal-‘adzābi wa sū'il-ḥisāb.",
    "arti": "Ya Allah, negeri ini adalah tanah haram Rasul-Mu, jadikanlah penjaga bagiku dari siksa neraka, dan pengaman dari siksa dan buruknya perhitungan amal.",
    "sumber": "Imam al-Ghazali, Ihya 'Ulumuddin 1/339 & Buku Doa Kemenhaj Hal 185",
    "tags": [
      "masuk madinah",
      "haram nabawi",
      "makam nabi"
    ]
  },
  {
    "id": "madinah-nabawi",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 185,
    "judul": "B. Doa Memasuki Masjid Nabawi",
    "deskripsi": "Dibaca saat melangkahkan kaki kanan memasuki Masjid Nabawi (biasanya melalui pintu Bab As-Salam).",
    "arab": "بِسْمِ اللَّهِ وَعَلَىٰ مِلَّةِ رَسُوْلِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ. رَبِّ أَدْخِلْنِيْ مُدْخَلَ صِدْقٍ وَأَخْرِجْنِيْ مُخْرَجَ صِدْقٍ وَاجْعَلْ لِيْ مِنْ لَدُنْكَ سُلْطَانًا نَصِيْرًا. اَللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَافْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ.",
    "latin": "Bismillāhi wa ‘alā millati rasūlillāhi ṣallallāhu ‘alaihi wa sallam. Rabbi adkhilnī mudkhala ṣidqiw wa akhrijnī mukhraja ṣidqiw waj‘al lī mil ladunka sulṭānan naṣīrā. Allāhumma ṣalli ‘alā sayyidinā muḥammadiw waftaḥ lī abwāba raḥmatik.",
    "arti": "Dengan nama Allah dan atas agama Rasulullah SAW. Wahai Tuhanku masukkanlah aku ke tempat masuk yang benar dan keluarkanlah aku ke tempat keluar yang benar serta berikanlah kepadaku dari sisi-Mu kekuasaan yang menolong. Ya Allah limpahkanlah salawat atas junjungan kami Nabi Muhammad dan bukakanlah untukku pintu-pintu rahmat-Mu.",
    "sumber": "QS. Al-Isra': 80 & Buku Doa Kemenhaj Hal 185-186",
    "tags": [
      "masuk nabawi",
      "bab salam",
      "rahmat"
    ]
  },
  {
    "id": "madinah-rasul",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 187,
    "judul": "C. Salam di Depan Makam Rasulullah SAW",
    "deskripsi": "Dibaca dengan suara pelan penuh sopan santun dan takzim saat berdiri berhadapan dengan makam mulia Nabi Muhammad SAW.",
    "arab": "السَّلَامُ عَلَيْكَ يَا رَسُولَ اللّٰهِ، السَّلَامُ عَلَيْكَ يَا خِيْرَةَ اللّٰهِ مِنْ خَلْقِهِ، السَّلَامُ عَلَيْكَ يَا حَبِيبَ اللّٰهِ، أَشْهَدُ أَنَّكَ قَدْ بَلَّغْتَ الرِّسَالَةَ، وَأَدَّيْتَ الْأَمَانَةَ، وَنَصَحْتَ الْأُمَّةَ، وَجَاهَدْتَ فِي اللّٰهِ حَقَّ جِهَادِهِ، فَجَزَاكَ اللّٰهُ عَنَّا أَفْضَلَ مَا جَزَىٰ نَبِيًّا عَنْ أُمَّتِهِ. اللّٰهُمَّ آتِهِ الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ.",
    "latin": "As-salāmu ‘alaika yā rasūlallāh, as-salāmu ‘alaika yā khīratallāhi min khalqih, as-salāmu ‘alaika yā ḥabīballāh, asy-hadu annaka qad ballaghtar-risālah, wa addaital-amānah, wa naṣaḥtal-ummah, wa jāhadta fillāhi ḥaqqa jihādih, fajazākallāhu ‘annā afḍala mā jazā nabiyyan ‘an ummatih. Allāhumma ātihil-wasīlata wal-faḍīlata wab‘atshu maqāmam maḥmūdanil-ladzī wa‘adtah.",
    "arti": "Salam sejahtera atasmu wahai Rasulullah. Salam sejahtera atasmu wahai manusia pilihan Allah dari segenap ciptaan-Nya. Salam sejahtera atasmu wahai kekasih Allah. Aku bersaksi sungguh engkau telah menyampaikan risalah, menunaikan amanah, memberi nasihat kepada umat, dan berjuang di jalan Allah dengan sebenar-benarnya perjuangan. Maka semoga Allah membalasmu dari kami dengan balasan paling mulia yang pernah diberikan kepada seorang Nabi atas umatnya. Ya Allah, karuniakanlah kepadanya wasilah dan keutamaan, dan bangkitkanlah ia pada kedudukan terpuji yang telah Engkau janjikan.",
    "sumber": "Imam An-Nawawi (Al-Idhah fī Manāsikil-Hajj) & Kemenhaj RI",
    "tags": [
      "makam rasulullah",
      "salam nabi",
      "nabawi",
      "wasilah"
    ]
  },
  {
    "id": "madinah-abubakar",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 190,
    "judul": "D. Salam di Depan Makam Sayyidina Abu Bakar Ash-Shiddiq RA",
    "deskripsi": "Bergeser satu langkah ke sebelah kanan makam Rasulullah SAW untuk memberi salam kepada khalifah pertama.",
    "arab": "السَّلَامُ عَلَيْكَ يَا خَلِيفَةَ رَسُولِ اللّٰهِ، السَّلَامُ عَلَيْكَ يَا صَاحِبَ رَسُولِ اللّٰهِ فِي الْغَارِ، السَّلَامُ عَلَيْكَ يَا أَبَا بَكْرٍ الصِّدِّيقَ، جَزَاكَ اللّٰهُ عَنْ أُمَّةِ مُحَمَّدٍ خَيْرَ الْجَزَاءِ.",
    "latin": "As-salāmu ‘alaika yā khalīfata rasūlillāh, as-salāmu ‘alaika yā ṣāḥiba rasūlillāhi fil-ghār, as-salāmu ‘alaika yā Abā Bakriniṣ-Ṣiddīq, jazākallāhu ‘an ummati Muḥammadin khairal-jazā’.",
    "arti": "Salam sejahtera atasmu wahai pengganti (khalifah) Rasulullah. Salam sejahtera atasmu wahai sahabat setia Rasulullah di dalam gua. Salam sejahtera atasmu wahai Abu Bakar Ash-Shiddiq. Semoga Allah membalasmu atas perjuanganmu bagi umat Nabi Muhammad dengan sebaik-baik balasan.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI",
    "tags": [
      "abu bakar",
      "makam sahabat",
      "khalifah"
    ]
  },
  {
    "id": "madinah-umar",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 191,
    "judul": "E. Salam di Depan Makam Sayyidina Umar bin Khattab RA",
    "deskripsi": "Bergeser satu langkah lagi ke kanan untuk menyampaikan salam kepada Amirul Mukminin kedua.",
    "arab": "السَّلَامُ عَلَيْكَ يَا أَمِيرَ الْمُؤْمِنِينَ، السَّلَامُ عَلَيْكَ يَا عُمَرَ بْنَ الْخَطَّابِ، السَّلَامُ عَلَيْكَ يَا مُظْهِرَ الْإِسْلَامِ وَالْفَارُوقَ، جَزَاكَ اللّٰهُ عَنَّا وَعَنْ أُمَّةِ الْإِسْلَامِ خَيْرَ الْجَزَاءِ.",
    "latin": "As-salāmu ‘alaika yā amīral-mu’minīn, as-salāmu ‘alaika yā ‘Umarabnal-Khaṭṭāb, as-salāmu ‘alaika yā muẓhiral-islāmi wal-fārūq, jazākallāhu ‘annā wa ‘an ummatil-islāmi khairal-jazā’.",
    "arti": "Salam sejahtera atasmu wahai Amirul Mukminin. Salam sejahtera atasmu wahai Umar bin Khattab. Salam sejahtera atasmu wahai penegak syiar Islam yang memisahkan kebenaran dari kebatilan (Al-Faruq). Semoga Allah membalas jasamu dari kami dan dari segenap umat Islam dengan balasan terbaik.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI",
    "tags": [
      "umar bin khattab",
      "al faruq",
      "khalifah"
    ]
  },
  {
    "id": "madinah-raudhah",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 192,
    "judul": "F. Doa di Taman Surga (Raudhah Syarifah)",
    "deskripsi": "Dibaca saat menunaikan salat dan munajat di Raudhah antara mimbar dan makam Rasulullah SAW.",
    "arab": "الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ حَمْدًا يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيدَهُ. يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَلِعَظِيمِ سُلْطَانِكَ. اللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ. اللّٰهُمَّ إِنَّ هٰذِهِ رَوْضَةٌ مِنْ رِيَاضِ الْجَنَّةِ، فَأَسْأَلُكَ أَنْ تُحَرِّمَ جَسَدِي عَلَى النَّارِ، وَأَنْ تَغْفِرَ ذَنْبِي، وَأَنْ تُفَرِّجَ كَرْبِي، وَأَنْ تَقْضِيَ حَاجَتِي، يَا أَرْحَمَ الرَّاحِمِينَ.",
    "latin": "Al-ḥamdu lillāhi rabbil-‘ālamīna ḥamdan yuwāfī ni‘amahū wa yukāfi’u mazīdah. Yā rabbanā lakal-ḥamdu kamā yambaghī lijalāli wajhika wa li‘aẓīmi sulṭānik. Allāhumma ṣalli wa sallim ‘alā sayyidinā Muḥammadin wa ‘alā āli sayyidinā Muḥammad. Allāhumma inna hādzihī rauḍatum min riyāḍil-jannati, fa-as-aluka an tuḥarrima jasadī ‘alan-nār, wa an taghfira dzambī, wa an tufarrija karbī, wa an taqḍiya ḥājatī, yā arḥamar-rāḥimīn.",
    "arti": "Segala puji bagi Allah Tuhan semesta alam, pujian yang sebanding dengan nikmat-nikmat-Nya dan menjamin tambahannya. Wahai Tuhan kami, bagi-Mu segala puji sebagaimana layaknya bagi keagungan Zat-Mu dan kebesaran kekuasaan-Mu. Ya Allah limpahkanlah salawat dan salam kepada junjungan kami Nabi Muhammad dan keluarganya. Ya Allah, sungguh tempat ini adalah taman dari taman-taman surga, maka aku memohon kepada-Mu agar Engkau mengharamkan jasadku dari api neraka, mengampuni dosaku, melapangkan kesusahanku, dan mengabulkan segala hajatku, wahai Dzat Yang Maha Pengasih dari segala yang mengasihi.",
    "sumber": "HR. Bukhari no. 1196 & Kemenhaj RI",
    "tags": [
      "raudhah",
      "taman surga",
      "mustajab",
      "nabawi"
    ]
  },
  {
    "id": "madinah-baqi",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 200,
    "judul": "G. Doa Salam Waktu Ziarah di Makam Baqi'",
    "deskripsi": "Dibaca saat menziarahi makam para sahabat dan keluarga Nabi (Ahlul Bait) di Pemakaman Baqi'.",
    "arab": "السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ، وَإِنَّا إِنْ شَاءَ اللّٰهُ بِكُمْ لَاحِقُونَ. يَرْحَمُ اللّٰهُ الْمُسْتَقْدِمِينَ مِنَّا وَالْمُسْتَأْخِرِينَ. نَسْأَلُ اللّٰهَ لَنَا وَلَكُمُ الْعَافِيَةَ. اللّٰهُمَّ لَا تَحْرِمْنَا أَجْرَهُمْ وَلَا تَفْتِنَّا بَعْدَهُمْ وَاغْفِرْ لَنَا وَلَهُمْ.",
    "latin": "As-salāmu ‘alaikum dāra qaumim mu’minīn, wa innā in syā’allāhu bikum lāḥiqūn. Yarḥamullāhul-mustaqdimīna minnā wal-musta’khirīn. Nas-alullāha lanā wa lakumul-‘āfiyah. Allāhumma lā taḥrimnā ajrahum wa lā taftinnā ba‘dahum wagh-fir lanā wa lahum.",
    "arti": "Semoga keselamatan tercurah atas kalian wahai para penghuni kubur kaum beriman. Dan sesungguhnya kami, insya Allah, akan menyusul kalian. Semoga Allah merahmati orang-orang terdahulu di antara kita dan orang-orang yang terkemudian. Kami memohon keselamatan bagi kami dan bagi kalian. Ya Allah, janganlah Engkau halangi kami dari pahala mereka, janganlah Engkau timbulkan fitnah sesudah mereka, dan ampunilah kami serta mereka.",
    "sumber": "HR. Muslim no. 974, Kemenhaj RI",
    "tags": [
      "baqi",
      "ziarah makam",
      "ahlul bait"
    ]
  },
  {
    "id": "madinah-utsman",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 201,
    "judul": "H. Doa Salam Kepada Sayyidina Utsman bin Affan RA",
    "deskripsi": "Dibaca saat berdiri di depan makam Sayyidina Utsman bin Affan RA di tengah Pemakaman Baqi'.",
    "arab": "السَّلَامُ عَلَيْكَ يَا ذَا النُّورَيْنِ، السَّلَامُ عَلَيْكَ يَا عُثْمَانَ بْنَ عَفَّانَ، السَّلَامُ عَلَيْكَ يَا ثَالِثَ الْخُلَفَاءِ الرَّاشِدِينَ، السَّلَامُ عَلَيْكَ يَا جَامِعَ الْقُرْآنِ. جَزَاكَ اللّٰهُ عَنْ أُمَّةِ مُحَمَّدٍ خَيْرَ الْجَزَاءِ.",
    "latin": "As-salāmu ‘alaika yā dzan-nūrain, as-salāmu ‘alaika yā ‘Utsmānabna ‘Affān, as-salāmu ‘alaika yā tsālitsal-khulafā’ir-rāsyidīn, as-salāmu ‘alaika yā jāmi‘al-qur’ān. Jazākallāhu ‘an ummati Muḥammadin khairal-jazā’.",
    "arti": "Salam sejahtera atasmu wahai pemilik dua cahaya (Dzun Nurain). Salam sejahtera atasmu wahai Utsman bin Affan. Salam sejahtera atasmu wahai khalifah rasyidin yang ketiga. Salam sejahtera atasmu wahai penghimpun mushaf Al-Qur'an. Semoga Allah membalas jasamu dari umat Nabi Muhammad dengan balasan yang sebaik-baiknya.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI",
    "tags": [
      "utsman bin affan",
      "dzun nurain",
      "baqi"
    ]
  },
  {
    "id": "madinah-uhud",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 203,
    "judul": "I. Salam Kepada Sayyidina Hamzah & Mush'ab bin Umair RA",
    "deskripsi": "Dibaca saat menziarahi makam Singa Allah Sayyidina Hamzah dan Mush'ab bin Umair di kaki Gunung Uhud.",
    "arab": "السَّلَامُ عَلَيْكَ يَا سَيِّدَ الشُّهَدَاءِ، السَّلَامُ عَلَيْكَ يَا حَمْزَةَ بْنَ عَبْدِ الْمُطَّلِبِ يَا عَمَّ رَسُولِ اللّٰهِ وَأَسَدَ اللّٰهِ وَأَسَدَ رَسُولِهِ. السَّلَامُ عَلَيْكَ يَا مُصْعَبَ بْنَ عُمَيْرٍ. جَزَاكُمَا اللّٰهُ عَنِ الْإِسْلَامِ وَأَهْلِهِ أَفْضَلَ الْجَزَاءِ.",
    "latin": "As-salāmu ‘alaika yā sayyidasy-syuhadā’, as-salāmu ‘alaika yā Ḥamzatabna ‘Abdil-Muṭṭalib yā ‘amma rasūlillāhi wa asadallāhi wa asada rasūlih. As-salāmu ‘alaika yā Muṣ‘ababna ‘Umair. Jazākumallāhu ‘anil-islāmi wa ahlihī afḍalal-jazā’.",
    "arti": "Salam sejahtera atasmu wahai penghulu para syuhada. Salam sejahtera atasmu wahai Hamzah bin Abdul Muthalib, paman Rasulullah, singa Allah dan singa Rasul-Nya. Salam sejahtera atasmu wahai Mush'ab bin Umair. Semoga Allah membalas kalian berdua atas jasa bagi agama Islam dan kaumnya dengan balasan yang paling utama.",
    "sumber": "Buku Doa & Dzikir Kemenhaj RI",
    "tags": [
      "hamzah",
      "singa allah",
      "uhud",
      "mus'ab"
    ]
  },
  {
    "id": "madinah-syuhada-uhud",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 204,
    "judul": "J. Doa Kepada Seluruh Syuhada Perang Uhud",
    "deskripsi": "Dibaca di depan kompleks pemakaman syuhada Uhud (70 sahabat yang gugur).",
    "arab": "السَّلَامُ عَلَيْكُمْ يَا شُهَدَاءَ أُحُدٍ، سَلَامٌ عَلَيْكُمْ بِمَا صَبَرْتُمْ فَنِعْمَ عُقْبَى الدَّارِ. أَشْهَدُ أَنَّكُمْ جَاهَدْتُمْ فِي اللّٰهِ حَقَّ جِهَادِهِ، حَتَّىٰ أَتَاكُمُ الْيَقِينُ. اللّٰهُمَّ اجْزِهِمْ عَنَّا أَفْضَلَ مَا جَزَيْتَ بِهِ شُهَدَاءَ أُمَّةِ مُحَمَّدٍ، وَاحْشُرْنَا فِي زُمْرَتِهِمْ.",
    "latin": "As-salāmu ‘alaikum yā syuhadā’a Uḥud, salāmun ‘alaikum bimā ṣabartum fani‘ma ‘uqbad-dār. Asy-hadu annakum jāhadtum fillāhi ḥaqqa jihādih, ḥattā atākumul-yaqīn. Allāhummaj-zihim ‘annā afḍala mā jazaita bihī syuhadā’a ummati Muḥammad, waḥ-syurnā fī zumratihim.",
    "arti": "Salam sejahtera atas kalian wahai para syuhada Uhud, keselamatan atas kalian berkat kesabaran kalian, maka alangkah nikmatnya tempat kesudahan itu. Aku bersaksi bahwa kalian telah berjihad di jalan Allah dengan sebenar-benarnya jihad hingga kematian menjemput kalian. Ya Allah, balaslah mereka dari kami dengan balasan paling mulia yang pernah Engkau berikan kepada para syuhada umat Nabi Muhammad, dan kumpulkanlah kami dalam rombongan mereka.",
    "sumber": "QS. Ar-Ra'd: 24 & Kemenhaj RI",
    "tags": [
      "syuhada uhud",
      "jihad",
      "kesabaran"
    ]
  },
  {
    "id": "madinah-wada",
    "bab": "BAB XIII - ZIARAH MADINAH MUNAWWARAH",
    "kategori": "madinah",
    "halamanBuku": 205,
    "judul": "K. Doa Ketika Meninggalkan Madinah / Selesai Ziarah Wada'",
    "deskripsi": "Dibaca di Masjid Nabawi saat bersiap meninggalkan Madinah menuju Makkah atau kembali ke tanah air.",
    "arab": "اللّٰهُمَّ لَا تَجْعَلْ هٰذَا آخِرَ الْعَهْدِ بِحَرَمِ رَسُولِكَ وَمَسْجِدِهِ، وَيَسِّرْ لِيَ الْعَوْدَ إِلَيْهِ سَبِيلًا سَهْلَةً سَالِمًا غَانِمًا. اللّٰهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَارْزُقْنِي شَفَاعَتَهُ يَوْمَ الْقِيَامَةِ، وَأَسْأَلُكَ الْمَوْتَ فِي بَلَدِهِ، يَا أَرْحَمَ الرَّاحِمِينَ.",
    "latin": "Allāhumma lā taj‘al hādzā ākhiral-‘ahdi biḥarami rasūlika wa masjidih, wa yassir liyal-‘auda ilaihi sabīlan sahlatan sāliman ghānimā. Allāhumma ṣalli ‘alā sayyidinā Muḥammadin war-zuqnī syafā‘atahū yaumal-qiyāmah, wa as-alukal-mauta fī baladih, yā arḥamar-rāḥimīn.",
    "arti": "Ya Allah, janganlah Engkau jadikan perjumpaan ini sebagai kali terakhirku dengan tanah haram Rasul-Mu dan masjid-Nya. Dan mudahkanlah jalanku untuk kembali lagi ke sini dalam keadaan selamat dan memperoleh berkah. Ya Allah, limpahkanlah rahmat kepada junjungan kami Nabi Muhammad, berilah aku syafaatnya pada hari kiamat, dan aku memohon kematian di negerinya (Madinah), wahai Dzat Yang Maha Pengasih lagi Maha Penyayang.",
    "sumber": "Imam Malik & Imam An-Nawawi, Kemenhaj RI",
    "tags": [
      "ziarah wada",
      "perpisahan madinah",
      "syafaat"
    ]
  },
  {
    "id": "pulang-1",
    "bab": "BAB XIV - TIBA DI RUMAH / KAMPUNG HALAMAN",
    "kategori": "kepulangan",
    "halamanBuku": 207,
    "judul": "A. Doa Tiba di Kampung Halaman (Setelah Salat Sunat Safar)",
    "deskripsi": "Dibaca seusai salat sunat 2 rakaat di masjid terdekat dari rumah sebagai tanda syukur telah tiba dengan selamat.",
    "arab": "اَلْحَمْدُ لِلَّهِ الَّذِيْ نَصَرَنِيْ بِقَضَاءِ نُسُكِيْ وَحَفَظَنِيْ مِنْ وَعْثَاءِ السَّفَرِ حَتَّىٰ أَعُوْدَ إِلَىٰ أَهْلِيْ. اَللَّهُمَّ بَارِكْ فِيْ حَيَاتِيْ بَعْدَ الْحَجِّ وَاجْعَلْنِيْ مِنَ الصَّالِحِيْنَ. لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ، آيِبُوْنَ تَائِبُوْنَ عَابِدُوْنَ سَاجِدُوْنَ لِرَبِّنَا حَامِدُوْنَ صَدَقَ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَهَزَمَ الْأَحْزَابَ وَحْدَهُ.",
    "latin": "Al-ḥamdu lillāhil-ladzī naṣaranī biqaḍā'i nusukī wa ḥafaẓanī miw-wa‘tsā'is-safari ḥattā a‘ūda ilā ahlī. Allāhumma bārik fī ḥayātī ba‘dal-ḥajji waj‘alnī minaṣ-ṣāliḥīn. Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu wa huwa ‘alā kulli syai'in qadīr, ā'ibūna tā'ibūna ‘ābidūna sājidūna lirabbinā ḥāmidūn, ṣadaqa wa‘dahū wa naṣara ‘abdahū wa hazamal-aḥzāba waḥdah.",
    "arti": "Segala puji bagi Allah yang telah memberikan pertolongan kepadaku dengan melaksanakan ibadah haji dan telah menjaga diriku dari kesulitan bepergian, sehingga aku dapat kembali lagi kepada keluargaku. Ya Allah, berkatilah kehidupanku setelah melaksanakan haji ini dan jadikanlah aku termasuk orang-orang saleh. Tiada Tuhan selain Allah Yang Maha Esa tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala puji, dan Dia Maha Kuasa atas segala sesuatu. Kami kembali dengan bertobat, beribadah, bersujud dan memuji kepada Tuhan kami. Dia telah menepati janji-Nya, menolong hamba-Nya dan mengalahkan sendiri musuh-musuh-Nya.",
    "sumber": "HR. Al-Bukhari no. 1797 & Buku Doa Kemenhaj RI Hal 207-208",
    "tags": [
      "tiba kampung halaman",
      "selesai haji",
      "syukur selamat"
    ]
  },
  {
    "id": "pulang-2",
    "bab": "BAB XIV - TIBA DI RUMAH / KAMPUNG HALAMAN",
    "kategori": "kepulangan",
    "halamanBuku": 209,
    "judul": "B. Doa Memasuki Rumah Setelah Pulang Haji / Umrah",
    "deskripsi": "Dibaca saat melangkahkan kaki memasuki pintu rumah berjumpa kembali dengan sanak keluarga.",
    "arab": "تَوْبًا تَوْبًا، لِرَبِّنَا أَوْبًا، لَا يُغَادِرُ عَلَيْنَا حَوْبًا. الْحَمْدُ لِلّٰهِ الَّذِي رَزَقَنَا الْعَوْدَ سَالِمِينَ، غَانِمِينَ، مَبْرُورِينَ.",
    "latin": "Tauban taubā, lirabbinā aubā, lā yughādiru ‘alainā ḥaubā. Al-ḥamdu lillāhil-ladzī razaqanal-‘auda sālimīn, ghānimīn, mabrūrīn.",
    "arti": "Kami bertaubat, kami bertaubat, kepada Tuhan kami kami kembali, taubat yang tidak meninggalkan dosa lagi bagi kami. Segala puji bagi Allah yang telah menganugerahkan kepulangan kepada kami dalam keadaan selamat, beruntung pahala, dan meraih haji yang mabrur.",
    "sumber": "HR. Ibnu Abbas RA & Ahmad, Kemenhaj RI",
    "tags": [
      "masuk rumah",
      "taubat",
      "haji mabrur"
    ]
  }
];
