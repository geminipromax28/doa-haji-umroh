/**
 * Data Lengkap Doa & Zikir Haji dan Umrah
 * Berdasarkan Buku Doa dan Dzikir Manasik Haji dan Umrah
 * Kementerian Haji dan Umrah Republik Indonesia (Edisi Resmi 2026)
 * Total 82 Doa & Zikir mencakup seluruh Bab II s.d. Bab XIV.
 */

const KATEGORI_DOA = [
  { id: 'semua', label: 'Semua Doa', icon: 'book-open' },
  { id: 'perjalanan', label: '1. Perjalanan', icon: 'plane' },
  { id: 'ihram', label: '2. Niat & Ihram', icon: 'heart' },
  { id: 'talbiyah', label: '3. Talbiyah', icon: 'volume-2' },
  { id: 'makkah', label: '4. Masuk Makkah', icon: 'compass' },
  { id: 'thawaf', label: '5. Thawaf (Lengkap)', icon: 'rotate-cw' },
  { id: 'sai', label: '6. Sa\'i (Lengkap)', icon: 'footprints' },
  { id: 'tahallul', label: '7. Tahallul', icon: 'scissors' },
  { id: 'arafah', label: '8. Wukuf Arafah', icon: 'sun' },
  { id: 'muzdalifah', label: '9. Muzdalifah', icon: 'moon' },
  { id: 'mina', label: '10. Mina & Jamrah', icon: 'mountain' },
  { id: 'thawaf_wada', label: '11. Thawaf Wada\'', icon: 'refresh-cw' },
  { id: 'madinah', label: '12. Ziarah Madinah', icon: 'landmark' },
  { id: 'kepulangan', label: '13. Tiba di Rumah', icon: 'home' },
  { id: 'favorit', label: 'Doa Tersimpan', icon: 'bookmark' }
];

const DATA_DOA = [
  // ==========================================
  // BAB II: DOA DALAM PERJALANAN KEBERANGKATAN
  // ==========================================
  {
    id: 'perjalanan-1',
    bab: 'BAB II - DOA DALAM PERJALANAN',
    kategori: 'perjalanan',
    halamanBuku: 6,
    judul: 'A. Doa Sebelum Keluar Rumah',
    deskripsi: 'Dibaca ketika bersiap-siap meninggalkan rumah sebelum melangkahkan kaki keluar.',
    arab: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ الَّذِي هَدَانِي بِالْإِسْلَامِ، وَأَرْشَدَنِي إِلَىٰ أَدَاءِ مَنَاسِكِي حَاجًّا بِبَيْتِهِ وَمُعْتَمِرًا بِمَشَاعِرِهِ. اللّٰهُمَّ صَلِّ عَلَى النَّبِيِّ الْأُمِّيِّ وَعَلَىٰ آلِهِ وَأَصْحَابِهِ أَجْمَعِينَ.',
    latin: 'Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhil-ladzī hadānī bil-islām, wa arsyadanī ilā adā’i manāsikī ḥājjan bibaitihī wa mu‘tamiran bimasya‘irih. Allāhumma ṣalli ‘alan-nabiyyil-ummiyyi wa ‘alā ālihī wa aṣ-ḥābihī ajma‘īn.',
    arti: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah yang telah memberiku petunjuk dengan Islam, dan membimbingku untuk menunaikan manasik berhaji di Baitullah dan berumrah di tempat-tempat syiarnya. Ya Allah, limpahkanlah rahmat kepada Nabi yang ummi dan kepada keluarga serta segenap sahabatnya.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['keberangkatan', 'keluar rumah', 'persiapan']
  },
  {
    id: 'perjalanan-2',
    bab: 'BAB II - DOA DALAM PERJALANAN',
    kategori: 'perjalanan',
    halamanBuku: 8,
    judul: 'B. Doa Keluar Rumah',
    deskripsi: 'Dibaca saat melangkahkan kaki keluar dari pintu rumah menuju perjalanan haji/umrah.',
    arab: 'بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ. اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ، أَوْ أَزِلَّ أَوْ أُزَلَّ، أَوْ أَظْلِمَ أَوْ أُظْلَمَ، أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ.',
    latin: 'Bismillāhi tawakkaltu ‘alallāh, lā ḥaula wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm. Allāhumma innī a‘ūdzu bika an aḍilla au uḍalla, au azilla au uzalla, au aẓlima au uẓlama, au ajhala au yujhala ‘alayya.',
    arti: 'Dengan nama Allah, aku bertawakal kepada Allah, tiada daya dan upaya melainkan dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung. Ya Allah, sungguh aku berlindung kepada-Mu dari tersesat atau disesatkan, tergelincir atau digelincirkan, berbuat zalim atau dizalimi, berbuat bodoh atau dibodohi.',
    sumber: 'HR. Abu Dawud no. 5094, Tirmidzi no. 3426 & Kemenhaj RI',
    tags: ['keluar rumah', 'perlindungan', 'tawakal']
  },
  {
    id: 'perjalanan-3',
    bab: 'BAB II - DOA DALAM PERJALANAN',
    kategori: 'perjalanan',
    halamanBuku: 9,
    judul: 'C. Doa Setelah Duduk di Kendaraan / Pesawat',
    deskripsi: 'Dibaca setelah duduk mantap di kursi bus, mobil, atau pesawat terbang.',
    arab: 'بِسْمِ اللّٰهِ مَجْرَاهَا وَمُرْسَاهَا إِنَّ رَبِّي لَغَفُورٌ رَحِيمٌ. وَمَا قَدَرُوا اللّٰهَ حَقَّ قَدْرِهِ وَالْأَرْضُ جَمِيعًا قَبْضَتُهُ يَوْمَ الْقِيَامَةِ وَالسَّمَاوَاتُ مَطْوِيَّاتٌ بِيَمِينِهِ سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يُشْرِكُونَ.',
    latin: 'Bismillāhi majrēhā wa mursāhā inna rabbī laghafūrur-raḥīm. Wa mā qadarullāha ḥaqqa qadrihī wal-arḍu jamī‘an qabḍatuhū yaumal-qiyāmati was-samāwātu maṭwiyyātum biyamīnihī subḥānahū wa ta‘ālā ‘ammā yusyrikūn.',
    arti: 'Dengan nama Allah di waktu berangkat dan berlabuh. Sesungguhnya Tuhanku benar-benar Maha Pengampun lagi Maha Penyayang. Dan mereka tidak mengagungkan Allah dengan penghormatan yang semestinya, padahal bumi seluruhnya dalam genggaman-Nya pada hari kiamat dan langit digulung dengan kekuasaan-Nya. Maha Suci dan Maha Tinggi Dia dari apa yang mereka persekutukan.',
    sumber: 'QS. Hud: 41 & Az-Zumar: 67, Kemenhaj RI',
    tags: ['pesawat', 'kendaraan', 'duduk']
  },
  {
    id: 'perjalanan-4',
    bab: 'BAB II - DOA DALAM PERJALANAN',
    kategori: 'perjalanan',
    halamanBuku: 11,
    judul: 'D. Doa Sewaktu Kendaraan / Pesawat Mulai Berjalan',
    deskripsi: 'Dibaca saat kendaraan bergerak maju atau pesawat mulai melaju di landasan (take-off).',
    arab: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ. اللّٰهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هٰذَا الْبِرَّ وَالتَّقْوَىٰ، وَمِنَ الْعَمَلِ مَا تَرْضَىٰ. اللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هٰذَا وَاطْوِ عَنَّا بُعْدَهُ. اللّٰهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الْأَهْلِ.',
    latin: 'Subḥānal-ladzī sakh-khara lanā hādzā wa mā kunnā lahū muqrinīn, wa innā ilā rabbinā lamunqalibūn. Allāhumma innā nas-aluka fī safarinā hādzal-birra wat-taqwā, wa minal-‘amali mā tarḍā. Allāhumma hawwin ‘alainā safaranā hādzā waṭwi ‘annā bu‘dah. Allāhumma antaṣ-ṣāḥibu fis-safari wal-khalīfatu fil-ahl.',
    arti: 'Maha Suci Tuhan yang telah menundukkan semua ini bagi kami padahal kami sebelumnya tidak mampu menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami. Ya Allah, kami memohon kebaikan dan takwa dalam perjalanan kami ini, serta amal perbuatan yang Engkau ridhai. Ya Allah, permudahkanlah perjalanan kami ini dan dekatkanlah jaraknya yang jauh. Ya Allah, Engkaulah pendamping dalam perjalanan dan pelindung keluarga yang ditinggalkan.',
    sumber: 'HR. Muslim no. 1342 & Kemenhaj RI',
    tags: ['kendaraan jalan', 'safar', 'take-off']
  },
  {
    id: 'perjalanan-5',
    bab: 'BAB II - DOA DALAM PERJALANAN',
    kategori: 'perjalanan',
    halamanBuku: 13,
    judul: 'E. Doa Ketika Mendekati Tempat Tujuan',
    deskripsi: 'Dibaca saat pesawat atau bus mulai mendekati kota tujuan (Jeddah / Madinah / Makkah).',
    arab: 'اللّٰهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ أَهْلِهَا وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا وَشَرِّ مَا فِيهَا.',
    latin: 'Allāhumma innī as-aluka khairahā wa khaira ahlihā wa khaira mā fīhā, wa a‘ūdzu bika min syarrihā wa syarri ahlihā wa syarri mā fīhā.',
    arti: 'Ya Allah, sungguh aku memohon kepada-Mu kebaikan negeri/kota ini, kebaikan penduduknya, dan kebaikan apa yang ada di dalamnya. Dan aku berlindung kepada-Mu dari keburukannya, keburukan penduduknya, dan keburukan apa yang ada di dalamnya.',
    sumber: 'HR. At-Thabrani & Ibnu Hibban, Kemenhaj RI',
    tags: ['mendekati tujuan', 'mendarat', 'ketibaan']
  },
  {
    id: 'perjalanan-6',
    bab: 'BAB II - DOA DALAM PERJALANAN',
    kategori: 'perjalanan',
    halamanBuku: 14,
    judul: 'F. Doa Ketika Tiba di Tempat Tujuan',
    deskripsi: 'Dibaca saat kaki pertama kali menginjakkan tanah di bandara atau pemondokan.',
    arab: 'الْحَمْدُ لِلّٰهِ الَّذِي بَلَّغَنِي هٰذَا الْمَكَانَ سَالِمًا غَانِمًا. اللّٰهُمَّ اجْعَلْ لِي فِيهَا قَرَارًا وَرِزْقًا حَسَنًا، وَتَقَبَّلْ مِنِّي مَنَاسِكِي.',
    latin: 'Al-ḥamdu lillāhil-ladzī ballaghanī hādzal-makāna sāliman ghānimā. Allāhummaj-‘al lī fīhā qarāran wa rizqan ḥasanā, wa taqabbal minnī manāsikī.',
    arti: 'Segala puji bagi Allah yang telah menyampaikan aku ke tempat ini dalam keadaan selamat dan beroleh berkah. Ya Allah, jadikanlah bagiku di tempat ini ketenangan dan rezeki yang baik, serta terimalah dariku ibadah manasikku.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['tiba tujuan', 'kedatangan', 'syukur']
  },

  // ==========================================
  // BAB III: NIAT IHRAM
  // ==========================================
  {
    id: 'ihram-1',
    bab: 'BAB III - NIAT IHRAM',
    kategori: 'ihram',
    halamanBuku: 16,
    judul: 'A. Niat Umrah',
    deskripsi: 'Dilafalkan di Miqat setelah mengenakan pakaian ihram dan menunaikan salat sunat ihram.',
    arab: 'لَبَّيْكَ اللّٰهُمَّ عُمْرَةً\n(أَوْ: نَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا لِلّٰهِ تَعَالَى)',
    latin: 'Labbaika Allāhumma ‘umratan.\n(Atau: Nawaitul-‘umrata wa aḥramtu bihā lillāhi ta‘ālā)',
    arti: 'Aku sambut panggilan-Mu ya Allah untuk berumrah. (Atau: Aku berniat umrah dan berihram karenanya karena Allah Ta\'ala).',
    sumber: 'HR. Muslim & Kemenhaj RI',
    tags: ['niat', 'umrah', 'miqat']
  },
  {
    id: 'ihram-2',
    bab: 'BAB III - NIAT IHRAM',
    kategori: 'ihram',
    halamanBuku: 16,
    judul: 'B. Niat Haji (Tamattu\')',
    deskripsi: 'Dilafalkan saat memulai ihram haji pada tanggal 8 Dzulhijjah dari pemondokan Makkah.',
    arab: 'لَبَّيْكَ اللّٰهُمَّ حَجًّا\n(أَوْ: نَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلّٰهِ تَعَالَى)',
    latin: 'Labbaika Allāhumma ḥajjan.\n(Atau: Nawaitul-ḥajja wa aḥramtu bihī lillāhi ta‘ālā)',
    arti: 'Aku sambut panggilan-Mu ya Allah untuk berhaji. (Atau: Aku berniat haji dan berihram karenanya karena Allah Ta\'ala).',
    sumber: 'HR. Bukhari & Muslim, Kemenhaj RI',
    tags: ['niat', 'haji', 'tamattu']
  },
  {
    id: 'ihram-3',
    bab: 'BAB III - NIAT IHRAM',
    kategori: 'ihram',
    halamanBuku: 17,
    judul: 'C. Niat Haji Ifrad',
    deskripsi: 'Bagi jemaah yang berniat mendahulukan ibadah haji terlebih dahulu, baru kemudian umrah.',
    arab: 'نَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلّٰهِ تَعَالَى، لَبَّيْكَ اللّٰهُمَّ حَجًّا.',
    latin: 'Nawaitul-ḥajja wa aḥramtu bihī lillāhi ta‘ālā, labbaika Allāhumma ḥajjan.',
    arti: 'Aku berniat haji dan berihram karenanya karena Allah Ta\'ala. Aku sambut panggilan-Mu ya Allah untuk berhaji.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['niat', 'ifrad', 'haji']
  },
  {
    id: 'ihram-4',
    bab: 'BAB III - NIAT IHRAM',
    kategori: 'ihram',
    halamanBuku: 17,
    judul: 'D. Niat Haji Qiran',
    deskripsi: 'Bagi jemaah yang berniat menggabungkan pelaksanaan ibadah haji dan umrah sekaligus dalam satu ihram.',
    arab: 'نَوَيْتُ الْحَجَّ وَالْعُمْرَةَ وَأَحْرَمْتُ بِهِمَا لِلّٰهِ تَعَالَى، لَبَّيْكَ اللّٰهُمَّ حَجًّا وَعُمْرَةً.',
    latin: 'Nawaitul-ḥajja wal-‘umrata wa aḥramtu bihimā lillāhi ta‘ālā, labbaika Allāhumma ḥajjan wa ‘umratan.',
    arti: 'Aku berniat haji dan umrah serta berihram untuk keduanya karena Allah Ta\'ala. Aku sambut panggilan-Mu ya Allah untuk berhaji dan berumrah.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['niat', 'qiran', 'haji umrah']
  },
  {
    id: 'ihram-5',
    bab: 'BAB III - NIAT IHRAM',
    kategori: 'ihram',
    halamanBuku: 18,
    judul: 'E. Niat Ihram dengan Isytirat (Bagi Lansia & Sakit)',
    deskripsi: 'Sangat dianjurkan bagi jemaah risiko tinggi, lemah, atau sakit agar bila terhalang dapat bertahallul tanpa membayar dam.',
    arab: 'نَوَيْتُ الْحَجَّ (أَوِ الْعُمْرَةَ) وَأَحْرَمْتُ بِهِ لِلّٰهِ تَعَالَى، فَإِنْ حَبَسَنِي حَابِسٌ فَمَحِلِّي حَيْثُ حَبَسْتَنِي.',
    latin: 'Nawaitul-ḥajja (awil-‘umrata) wa aḥramtu bihī lillāhi ta‘ālā, fa-in ḥabasanī ḥābisun famahillī ḥaitsu ḥabastanī.',
    arti: 'Aku berniat haji (atau umrah) dan berihram karenanya karena Allah Ta\'ala. Jika ada sesuatu halangan yang menghalangiku (sakit/lemah), maka tempat tahallulku adalah di mana Engkau menahanku.',
    sumber: 'HR. Bukhari no. 5089 & Muslim no. 1207, Kemenhaj RI',
    tags: ['isytirat', 'lansia', 'sakit', 'keringanan']
  },
  {
    id: 'ihram-6',
    bab: 'BAB III - NIAT IHRAM',
    kategori: 'ihram',
    halamanBuku: 19,
    judul: 'F. Doa Setelah Berihram (Doa Imam Al-Ghazali)',
    deskripsi: 'Dibaca setelah melafalkan niat ihram untuk meneguhkan keikhlasan lahir batin dalam menjaga larangan ihram.',
    arab: 'اَللّٰهُمَّ أُحَرِّمُ لَكَ شَعْرِي وَبَشَرِي وَجَسَدِي وَجَمِيعَ جَوَارِحِي مِنْ كُلِّ شَيْءٍ حَرَّمْتَهُ عَلَى الْمُحْرِمِ، أَبْتَغِي بِذٰلِكَ وَجْهَكَ الْكَرِيمَ، يَا رَبَّ الْعَالَمِينَ.',
    latin: 'Allāhumma uḥarrimu laka sya‘rī wa basyarī wa jasadī wa jamī‘a jawāriḥī min kulli syai-in ḥarramtahū ‘alal-muḥrim, abtaghī bidzālika wajhakal-karīm, yā rabbal-‘ālamīn.',
    arti: 'Ya Allah, sungguh telah aku haramkan karena-Mu rambutku, kulitku, jasadku, dan segenap anggota badanku dari segala hal yang Engkau haramkan bagi orang yang berihram, demi mencari wajah-Mu Yang Maha Mulia, wahai Tuhan semesta alam.',
    sumber: 'Imam Al-Ghazali (Ihya Ulumiddin 1/327), Kemenhaj RI',
    tags: ['setelah ihram', 'ghazali', 'kesucian']
  },

  // ==========================================
  // BAB IV: BACAAN TALBIYAH DAN SALAWAT
  // ==========================================
  {
    id: 'talbiyah-1',
    bab: 'BAB IV - TALBIYAH DAN SALAWAT',
    kategori: 'talbiyah',
    halamanBuku: 22,
    judul: 'A. Bacaan Kalimat Talbiyah Resmi',
    deskripsi: 'Dikumandangkan terus menerus dengan lantang sejak berihram hingga melempar Jamrah Aqabah atau memulai Thawaf.',
    arab: 'لَبَّيْكَ اللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ.',
    latin: 'Labbaikallāhumma labbaīk, labbaīka lā syarīka laka labbaīk, innal-ḥamda wan-ni‘mata laka wal-mulk, lā syarīka lak.',
    arti: 'Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan hanyalah kepunyaan-Mu, tiada sekutu bagi-Mu.',
    sumber: 'HR. Bukhari no. 1549 & Muslim no. 1184, Kemenhaj RI',
    tags: ['talbiyah', 'syiar haji', 'inti ibadah']
  },
  {
    id: 'talbiyah-2',
    bab: 'BAB IV - TALBIYAH DAN SALAWAT',
    kategori: 'talbiyah',
    halamanBuku: 23,
    judul: 'B. Bacaan Salawat atas Nabi SAW',
    deskripsi: 'Dibaca mengiringi kumandang talbiyah sebagai penghormatan kepada baginda Rasulullah SAW.',
    arab: 'اللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    latin: 'Allāhumma ṣalli wa sallim ‘alā sayyidinā Muḥammadin wa ‘alā āli sayyidinā Muḥammad, kamā ṣallaita ‘alā Ibrāhīma wa ‘alā āli Ibrāhīm, innaka ḥamīdum majīd.',
    arti: 'Ya Allah, limpahkanlah rahmat dan keselamatan kepada junjungan kami Nabi Muhammad dan kepada keluarga Nabi Muhammad, sebagaimana Engkau telah melimpahkan rahmat kepada Nabi Ibrahim dan keluarganya. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['salawat', 'ibrahimiyah']
  },
  {
    id: 'talbiyah-3',
    bab: 'BAB IV - TALBIYAH DAN SALAWAT',
    kategori: 'talbiyah',
    halamanBuku: 23,
    judul: 'C. Doa Sesudah Salawat dan Talbiyah',
    deskripsi: 'Dianjurkan dibaca setiap kali selesai mengumandangkan lafal talbiyah dan salawat.',
    arab: 'اللّٰهُمَّ إِنَّا نَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ، وَنَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ. رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.',
    latin: 'Allāhumma innā nas-aluka riḍāka wal-jannah, wa na‘ūdzu bika min sakhaṭika wan-nār. Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ‘adzāban-nār.',
    arti: 'Ya Allah, sesungguhnya kami memohon kepada-Mu keridhaan-Mu dan surga, dan kami berlindung kepada-Mu dari kemurkaan-Mu dan siksa neraka. Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.',
    sumber: 'HR. Asy-Syafi\'i & Kemenhaj RI',
    tags: ['sesudah talbiyah', 'surga', 'ridha']
  },

  // ==========================================
  // BAB V: DOA-DOA DI MAKKAH AL-MUKARRAMAH
  // ==========================================
  {
    id: 'makkah-1',
    bab: 'BAB V - DOA DI MAKKAH',
    kategori: 'makkah',
    halamanBuku: 25,
    judul: 'A. Doa Memasuki Kota Suci Makkah',
    deskripsi: 'Dibaca saat kendaraan mulai melintasi batas gerbang tanah haram Kota Makkah.',
    arab: 'اللّٰهُمَّ هٰذَا حَرَمُكَ وَأَمْنُكَ، فَحَرِّمْ لَحْمِي وَدَمِي وَشَعْرِي وَبَشَرِي عَلَى النَّارِ، وَآمِنِّي مِنْ عَذَابِكَ يَوْمَ تَبْعَثُ عِبَادَكَ، وَاجْعَلْنِي مِنْ أَوْلِيَائِكَ وَأَهْلِ طَاعَتِكَ.',
    latin: 'Allāhumma hādzā ḥaramuka wa amnuka, faḥarrim laḥmī wa damī wa sya‘rī wa basyarī ‘alan-nār, wa āminnī min ‘adzābika yauma tab‘atsu ‘ibādak, waj‘alnī min auliyā-ika wa ahli ṭā‘atik.',
    arti: 'Ya Allah, kota ini adalah tanah haram-Mu dan tempat aman-Mu, maka haramkanlah dagingku, darahku, rambutku, dan kulitku dari api neraka. Selamatkanlah aku dari siksa-Mu pada hari Engkau membangkitkan hamba-hamba-Mu, dan jadikanlah aku termasuk kekasih-kekasih-Mu dan orang-orang yang taat kepada-Mu.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['masuk makkah', 'tanah haram', 'keamanan']
  },
  {
    id: 'makkah-2',
    bab: 'BAB V - DOA DI MAKKAH',
    kategori: 'makkah',
    halamanBuku: 26,
    judul: 'B. Doa Masuk Masjid (Secara Umum)',
    deskripsi: 'Dibaca saat melangkahkan kaki kanan memasuki masjid mana pun di tanah suci.',
    arab: 'بِسْمِ اللّٰهِ وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللّٰهِ. اللّٰهُمَّ اغْفِرْ لِي ذُنُوبِي وَافْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.',
    latin: 'Bismillāhi waṣ-ṣalātu was-salāmu ‘alā rasūlillāh. Allāhummagh-fir lī dzunūbī waftaḥ lī abwāba raḥmatik.',
    arti: 'Dengan nama Allah, serta salawat dan salam tercurah kepada Rasulullah. Ya Allah, ampunilah dosa-dosaku dan bukakanlah untukku pintu-pintu rahmat-Mu.',
    sumber: 'HR. Ibnu Majah no. 771 & Muslim no. 713, Kemenhaj RI',
    tags: ['masuk masjid', 'pintu rahmat']
  },
  {
    id: 'makkah-3',
    bab: 'BAB V - DOA DI MAKKAH',
    kategori: 'makkah',
    halamanBuku: 27,
    judul: 'C. Doa Keluar Masjid',
    deskripsi: 'Dibaca saat melangkahkan kaki kiri keluar dari pintu masjid.',
    arab: 'بِسْمِ اللّٰهِ وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللّٰهِ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ، اللّٰهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ.',
    latin: 'Bismillāhi waṣ-ṣalātu was-salāmu ‘alā rasūlillāh. Allāhumma innī as-aluka min faḍlik, Allāhumma‘-ṣimnī minasy-syaiṭānir-rajīm.',
    arti: 'Dengan nama Allah, serta salawat dan salam atas Rasulullah. Ya Allah, sesungguhnya aku memohon karunia-Mu. Ya Allah, peliharalah aku dari godaan setan yang terkutuk.',
    sumber: 'HR. Muslim no. 713 & Abu Dawud no. 465, Kemenhaj RI',
    tags: ['keluar masjid', 'karunia']
  },
  {
    id: 'makkah-4',
    bab: 'BAB V - DOA DI MAKKAH',
    kategori: 'makkah',
    halamanBuku: 27,
    judul: 'D. Doa Memasuki Masjidil Haram',
    deskripsi: 'Dibaca saat melangkahkan kaki kanan memasuki pelataran pintu gerbang Masjidil Haram.',
    arab: 'اللّٰهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ فَحَيِّنَا رَبَّنَا بِالسَّلَامِ وَأَدْخِلْنَا الْجَنَّةَ دَارَ السَّلَامِ تَبَارَكْتَ وَتَعَالَيْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ. اللّٰهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.',
    latin: 'Allāhumma antas-salāmu wa minkas-salāmu faḥayyinā rabbanā bis-salām, wa adkhilnal-jannata dāras-salām, tabārakta wa ta‘ālaita yā dzal-jalāli wal-ikrām. Allāhummaf-taḥ lī abwāba raḥmatik.',
    arti: 'Ya Allah, Engkau adalah sumber keselamatan dan dari-Mu lah datangnya keselamatan. Maka hidupkanlah kami wahai Tuhan kami dengan keselamatan, dan masukkanlah kami ke surga tempat kesejahteraan. Maha Berkah Engkau dan Maha Tinggi wahai Tuhan Pemilik Keagungan dan Kemuliaan. Ya Allah, bukakanlah pintu-pintu rahmat-Mu untukku.',
    sumber: 'HR. Asy-Syafi\'i & Al-Baihaqi, Kemenhaj RI',
    tags: ['masjidil haram', 'keselamatan', 'rahmat']
  },
  {
    id: 'makkah-5',
    bab: 'BAB V - DOA DI MAKKAH',
    kategori: 'makkah',
    halamanBuku: 28,
    judul: 'E. Doa Ketika Melihat Ka\'bah Pertama Kali',
    deskripsi: 'Dibaca seraya mengangkat kedua tangan saat pandangan mata tertuju ke Ka\'bah yang agung.',
    arab: 'اللّٰهُمَّ زِدْ هٰذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً، وَزِدْ مَنْ شَرَّفَهُ وَعَظَّمَهُ وَكَرَّمَهُ مِمَّنْ حَجَّهُ أَوِ اعْتَمَرَهُ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَبِرًّا.',
    latin: 'Allāhumma zid hādzal-baita tasyrīfan wa ta‘ẓīman wa takrīman wa mahābah, wa zid man syarrafahū wa ‘aẓ-ẓamahū wa karramahū mimman ḥajjahū awi‘-tamarahū tasyrīfan wa ta‘ẓīman wa takrīman wa birrā.',
    arti: 'Ya Allah, tambahkanlah kemuliaan, keagungan, kehormatan, dan kewibawaan pada Rumah (Ka\'bah) ini. Dan tambahkanlah pula kemuliaan, kehormatan, keagungan, dan kebaikan bagi orang-orang yang memuliakan dan mengagungkannya dari kalangan yang menunaikan haji atau umrah.',
    sumber: 'Imam Asy-Syafi\'i (Al-Umm 2/136), Kemenhaj RI',
    tags: ['melihat kabah', 'mustajab', 'baitullah']
  },
  {
    id: 'makkah-6',
    bab: 'BAB V - DOA DI MAKKAH',
    kategori: 'makkah',
    halamanBuku: 29,
    judul: 'F. Doa Melintasi Maqam Ibrahim',
    deskripsi: 'Dibaca ketika berjalan melintasi Maqam Nabi Ibrahim AS di pelataran mataf.',
    arab: 'رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَلْ لِي مِنْ لَدُنْكَ سُلْطَانًا نَصِيرًا. وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا.',
    latin: 'Rabbi adkhilnī mudkhala ṣidqin wa akhrijnī mukhraja ṣidqin waj‘al lī min ladunka sulṭānan naṣīrā. Wa qul jā’al-ḥaqqu wa zahaqal-bāṭilu innal-bāṭila kāna zahūqā.',
    arti: 'Ya Tuhanku, masukkanlah aku ke tempat masuk yang benar dan keluarkanlah aku ke tempat keluar yang benar, dan berikanlah kepadaku dari sisi-Mu kekuasaan yang menolong. Dan katakanlah: Kebenaran telah datang dan yang batil telah lenyap. Sungguh yang batil itu pasti lenyap.',
    sumber: 'QS. Al-Isra\': 80-81 & Kemenhaj RI',
    tags: ['maqam ibrahim', 'kebenaran', 'pertolongan']
  },

  // ==========================================
  // BAB VI: DOA THAWAF
  // ==========================================
  {
    id: 'thawaf-0',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 31,
    judul: 'Doa Menghadap Hajar Aswad (Istilam Awal Putaran)',
    deskripsi: 'Dibaca pada awal setiap putaran saat menghadap dan melambaikan tangan kanan ke arah Hajar Aswad.',
    arab: 'بِسْمِ اللّٰهِ، وَاللّٰهُ أَكْبَرُ، اللّٰهُمَّ إِيمَانًا بِكَ وَتَصْدِيقًا بِكِتَابِكَ وَوَفَاءً بِعَهْدِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ.',
    latin: 'Bismillāhi, wallāhu akbar, Allāhumma īmānam bika wa taṣdīqam bikitābika wa wafā’am bi‘ahdika wattibā‘al lisunnati nabiyyika Muḥammadin ṣallallāhu ‘alaihi wa sallam.',
    arti: 'Dengan nama Allah, dan Allah Maha Besar. Ya Allah, aku berthawaf ini karena beriman kepada-Mu, membenarkan kitab-Mu, menepati janji-Mu, dan mengikuti sunnah Nabi-Mu Muhammad SAW.',
    sumber: 'HR. Asy-Syafi\'i & Al-Baihaqi, Kemenhaj RI',
    tags: ['istilam', 'hajar aswad', 'awal putaran']
  },
  {
    id: 'thawaf-1',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 33,
    judul: 'A. Doa Thawaf: Putaran Pertama',
    deskripsi: 'Dibaca selama mengitari Ka\'bah pada putaran pertama dari Hajar Aswad hingga Rukun Yamani.',
    arab: 'سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ. وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ. اللّٰهُمَّ إِيمَانًا بِكَ، وَتَصْدِيقًا بِكِتَابِكَ، وَوَفَاءً بِعَهْدِكَ، وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ وَالْمُعَافَاةَ الدَّائِمَةَ فِي الدِّينِ وَالدُّنْيَا وَالْآخِرَةِ، وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ.',
    latin: 'Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar, wa lā ḥaula wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm. Waṣ-ṣalātu was-salāmu ‘alā rasūlillāhi ṣallallāhu ‘alaihi wa sallam. Allāhumma īmānam bika, wa taṣdīqam bikitābika, wa wafā’am bi‘ahdika, wattibā‘al lisunnati nabiyyika Muḥammadin ṣallallāhu ‘alaihi wa sallam. Allāhumma innī as-alukal-‘afwa wal-‘āfiyata wal-mu‘āfātad-dā’imata fid-dīni wad-dunyā wal-ākhirah, wal-fauza bil-jannati wan-najāta minan-nār.',
    arti: 'Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, Allah Maha Besar. Tiada daya dan kekuatan melainkan dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung. Salawat dan salam atas Rasulullah SAW. Ya Allah, aku berthawaf ini karena beriman kepada-Mu, membenarkan kitab-Mu, memenuhi janji-Mu, dan mengikuti sunnah Nabi-Mu Muhammad SAW. Ya Allah, sesungguhnya aku memohon ampunan, kesehatan, dan perlindungan yang kekal dalam urusan agama, dunia, dan akhirat, serta keberuntungan meraih surga dan keselamatan dari api neraka.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['thawaf', 'putaran 1', 'iman', 'surga']
  },
  {
    id: 'thawaf-yamani',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 37,
    judul: 'Doa Antara Rukun Yamani dan Hajar Aswad (Doa Sapu Jagat)',
    deskripsi: 'Selalu dibaca oleh Rasulullah SAW pada setiap putaran thawaf di antara Rukun Yamani hingga Hajar Aswad.',
    arab: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ، وَأَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ، يَا عَزِيزُ يَا غَفَّارُ، يَا رَبَّ الْعَالَمِينَ.',
    latin: 'Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ‘adzāban-nār, wa adkhilnal-jannata ma‘al-abrār, yā ‘azīzu yā ghaffār, yā rabbal-‘ālamīn.',
    arti: 'Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa api neraka. Dan masukkanlah kami ke dalam surga bersama orang-orang yang berbuat baik, wahai Tuhan Yang Maha Perkasa, Maha Pengampun, dan Tuhan semesta alam.',
    sumber: 'HR. Abu Dawud no. 1892 & QS. Al-Baqarah: 201, Kemenhaj RI',
    tags: ['rukun yamani', 'sapu jagat', 'wajib dihafal']
  },
  {
    id: 'thawaf-2',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 39,
    judul: 'B. Doa Thawaf: Putaran Kedua',
    deskripsi: 'Dibaca selama putaran kedua, memohon naungan Arsy Allah pada hari kiamat.',
    arab: 'اللّٰهُمَّ إِنَّ هٰذَا الْبَيْتَ بَيْتُكَ، وَالْحَرَمَ حَرَمُكَ، وَالْأَمْنَ أَمْنُكَ، وَالْعَبْدَ عَبْدُكَ، وَأَنَا عَبْدُكَ وَابْنُ عَبْدِكَ، وَهٰذَا مَقَامُ الْعَائِذِ بِكَ مِنَ النَّارِ. فَحَرِّمْ لُحُومَنَا وَبَشَرَتَنَا عَلَى النَّارِ. اللّٰهُمَّ حَبِّبْ إِلَيْنَا الْإِيمَانَ وَزَيِّنْهُ فِي قُلُوبِنَا وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ وَاجْعَلْنَا مِنَ الرَّاشِدِينَ. اللّٰهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ، اللّٰهُمَّ ارْزُقْنِيَ الْجَنَّةَ بِغَيْرِ حِسَابٍ.',
    latin: 'Allāhumma inna hādzal-baita baituk, wal-ḥarama ḥaramuk, wal-amna amnuk, wal-‘abda ‘abduk, wa ana ‘abduka wabnu ‘abdik, wa hādzā maqāmul-‘ā’idzi bika minan-nār. Faḥarrim luḥūmanā wa basyaratana ‘alan-nār. Allāhumma ḥabbib ilainal-īmāna wa zayyinhu fī qulūbinā wa karrih ilainal-kufra wal-fusūqa wal-‘iṣyāna waj‘alnā minar-rāsyidīn. Allāhumma qinī ‘adzābaka yauma tab‘atsu ‘ibādak, Allāhummar-zuqniyal-jannata bighairi ḥisāb.',
    arti: 'Ya Allah, sesungguhnya Rumah ini adalah Rumah-Mu, tanah haram ini tanah haram-Mu, keamanan ini keamanan-Mu, dan hamba ini adalah hamba-Mu. Dan ini adalah tempat berlindung kepada-Mu dari api neraka. Maka haramkanlah daging dan kulit kami dari api neraka. Ya Allah, cintakanlah kami pada keimanan dan jadikanlah ia indah dalam hati kami, bencilah kepada kami kekafiran, kefasikan, dan kedurhakaan, serta jadikanlah kami golongan orang yang mendapat petunjuk. Ya Allah, selamatkanlah aku dari azab-Mu pada hari Engkau membangkitkan hamba-hamba-Mu, dan karuniakanlah surga tanpa hisab.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['thawaf', 'putaran 2', 'keimanan', 'tanpa hisab']
  },
  {
    id: 'thawaf-3',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 42,
    judul: 'C. Doa Thawaf: Putaran Ketiga',
    deskripsi: 'Memohon perlindungan dari keraguan hati, riya\', kemunafikan, dan bencana dunia akhirat.',
    arab: 'اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الشَّكِّ وَالشِّرْكِ وَالشِّقَاقِ وَالنِّفَاقِ وَسُوءِ الْأَخْلَاقِ وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ وَالْوَلَدِ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ، وَأَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ. اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فِتْنَةِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ.',
    latin: 'Allāhumma innī a‘ūdzu bika minasy-syakki wasy-syirki wasy-syiqāqi wan-nifāqi wa sū’il-akhlāqi wa sū’il-munqalabi fil-māli wal-ahli wal-walad. Allāhumma innī as-aluka riḍāka wal-jannah, wa a‘ūdzu bika min sakhaṭika wan-nār. Allāhumma innī a‘ūdzu bika min fitnatil-qabri, wa a‘ūdzu bika min fitnatil-maḥyā wal-mamāt.',
    arti: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari keraguan, kemusyrikan, permusuhan, kemunafikan, akhlak yang buruk, serta nasib buruk dalam harta, keluarga, dan keturunan. Ya Allah, aku memohon keridhaan-Mu dan surga, dan aku berlindung kepada-Mu dari murka-Mu dan siksa neraka. Ya Allah, aku berlindung kepada-Mu dari fitnah kubur, serta fitnah kehidupan dan kematian.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['thawaf', 'putaran 3', 'perlindungan', 'fitnah kubur']
  },
  {
    id: 'thawaf-4',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 44,
    judul: 'D. Doa Thawaf: Putaran Keempat',
    deskripsi: 'Memohon haji yang mabrur, dosa yang diampuni, dan perdagangan yang tidak merugi.',
    arab: 'اللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا، وَسَعْيًا مَشْكُورًا، وَذَنْبًا مَغْفُورًا، وَعَمَلًا صَالِحًا مَقْبُولًا، وَتِجَارَةً لَنْ تَبُورَ. يَا عَالِمَ مَا فِي الصُّدُورِ، أَخْرِجْنِي مِنَ الظُّلُمَاتِ إِلَى النُّورِ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ، وَالسَّلَامَةَ مِنْ كُلِّ إِثْمٍ، وَالْغَنِيمَةَ مِنْ كُلِّ بِرٍّ، وَالْفَوْزَ بِالْجَنَّةِ، وَالنَّجَاةَ مِنَ النَّارِ.',
    latin: 'Allāhummaj-‘alhu ḥajjan mabrūrā, wa sa‘yan masykūrā, wa dzamban maghfūrā, wa ‘amalan ṣāliḥan maqbūlā, wa tijāratan lan tabūr. Yā ‘ālima mā fiṣ-ṣudūr, akhrijnī minaẓ-ẓulumāti ilan-nūr. Allāhumma innī as-aluka mūjibāti raḥmatik, wa ‘azā’ima maghfiratik, was-salāmata min kulli itsm, wal-ghanīmata min kulli birr, wal-fauza bil-jannati, wan-najāta minan-nār.',
    arti: 'Ya Allah, jadikanlah ibadah ini haji yang mabrur, sa\'i yang disyukuri, dosa yang diampuni, amal saleh yang diterima, dan perniagaan yang tidak akan merugi. Wahai Dzat Yang Maha Mengetahui rahasia di dalam dada, keluarkanlah aku dari kegelapan menuju cahaya yang terang. Ya Allah, aku memohon hal-hal yang mendatangkan rahmat-Mu, ketetapan ampunan-Mu, keselamatan dari segala dosa, perolehan setiap kebajikan, keberuntungan masuk surga, dan keselamatan dari siksa api neraka.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['thawaf', 'putaran 4', 'haji mabrur', 'ampunan']
  },
  {
    id: 'thawaf-5',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 49,
    judul: 'E. Doa Thawaf: Putaran Kelima',
    deskripsi: 'Memohon naungan Arsy Allah dan minum dari telaga Haudh Rasulullah SAW.',
    arab: 'اللّٰهُمَّ أَظِلَّنِي تَحْتَ ظِلِّ عَرْشِكَ يَوْمَ لَا ظِلَّ إِلَّا ظِلُّكَ، وَلَا بَاقِيَ إِلَّا وَجْهُكَ، وَاسْقِنِي مِنْ حَوْضِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ شَرْبَةً هَنِيئَةً مَرِيئَةً لَا أَظْمَأُ بَعْدَهَا أَبَدًا. اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَكَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ.',
    latin: 'Allāhumma aẓillanī taḥta ẓilli ‘arsyika yauma lā ẓilla illā ẓilluk, wa lā bāqiya illā wajhuk, wasqinī min ḥauḍi nabiyyika Muḥammadin ṣallallāhu ‘alaihi wa sallama syarbatan hanī’atam marī’atal lā aẓma’u ba‘dahā abadā. Allāhumma innī as-aluka min khairi mā sa’alaka minhu nabiyyuka Muḥammadun ṣallallāhu ‘alaihi wa sallam, wa a‘ūdzu bika min syarri masta‘ādzaka minhu nabiyyuka Muḥammadun ṣallallāhu ‘alaihi wa sallam.',
    arti: 'Ya Allah, naungilah aku di bawah naungan Arsy-Mu pada hari yang tiada naungan selain naungan-Mu, dan tiada yang kekal selain Zat-Mu. Dan berilah aku minum dari telaga Nabi-Mu Muhammad SAW dengan seteguk minuman yang segar dan nikmat, yang sesudahnya aku tidak akan haus selama-lamanya. Ya Allah, aku memohon kepada-Mu kebaikan yang dimohonkan oleh Nabi-Mu Muhammad SAW, dan aku berlindung kepada-Mu dari keburukan yang dimohonkan perlindungan darinya oleh Nabi-Mu Muhammad SAW.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['thawaf', 'putaran 5', 'naungan arsy', 'telaga nabi']
  },
  {
    id: 'thawaf-6',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 52,
    judul: 'F. Doa Thawaf: Putaran Keenam',
    deskripsi: 'Memohon pelunasan hak-hak kepada Allah dan kepada sesama manusia, serta kemudahan rezeki halal.',
    arab: 'اللّٰهُمَّ إِنَّ لَكَ عَلَيَّ حُقُوقًا كَثِيرَةً فِيمَا بَيْنِي وَبَيْنَكَ، وَحُقُوقًا كَثِيرَةً فِيمَا بَيْنِي وَبَيْنَ خَلْقِكَ. اللّٰهُمَّ مَا كَانَ لَكَ مِنْهَا فَاغْفِرْهُ لِي، وَمَا كَانَ لِخَلْقِكَ فَتَحَمَّلْهُ عَنِّي، وَأَغْنِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ، وَبِفَضْلِكَ عَمَّنْ سِوَاكَ، يَا وَاسِعَ الْمَغْفِرَةِ.',
    latin: 'Allāhumma inna laka ‘alayya ḥuqūqan katsīratan fīmā bainī wa bainak, wa ḥuqūqan katsīratan fīmā bainī wa baina khalqik. Allāhumma mā kāna laka minhā faghfirhu lī, wa mā kāna likhalqika fataḥammalhu ‘annī, wa aghninī biḥalālika ‘an ḥarāmik, wa biṭā‘atika ‘an ma‘ṣiyatik, wa bifaḍlika ‘amman siwāk, yā wāsi‘al-maghfirah.',
    arti: 'Ya Allah, sesungguhnya Engkau memiliki banyak hak atasku dalam hubungan antara aku dan Engkau, dan hak-hak yang banyak dalam hubungan antara aku dan sesama makhluk-Mu. Ya Allah, apa yang menjadi hak-Mu dari dosa itu maka ampunilah untukku, dan apa yang menjadi hak sesama makhluk-Mu maka tanggungkanlah dariku. Dan cukupkanlah aku dengan rezeki yang halal dari yang haram, dengan ketaatan kepada-Mu dari maksiat kepada-Mu, dan dengan karunia-Mu dari selain-Mu, wahai Dzat Yang Maha Luas Ampunan-Nya.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['thawaf', 'putaran 6', 'hak sesama', 'rezeki halal']
  },
  {
    id: 'thawaf-7',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 56,
    judul: 'G. Doa Thawaf: Putaran Ketujuh',
    deskripsi: 'Puncak doa thawaf memohon husnul khatimah, istiqamah iman, dan kelapangan dada.',
    arab: 'اللّٰهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا كَامِلًا، وَيَقِينًا صَادِقًا، وَرِزْقًا وَاسِعًا، وَقَلْبًا خَاشِعًا، وَلِسَانًا ذَاكِرًا، وَتَوْبَةً نَصُوحًا، وَتَوْبَةً قَبْلَ الْمَوْتِ، وَرَاحَةً عِنْدَ الْمَوْتِ، وَمَغْفِرَةً وَرَحْمَةً بَعْدَ الْمَوْتِ، وَالْعَفْوَ عِنْدَ الْحِسَابِ، وَالْفَوْزَ بِالْجَنَّةِ، وَالنَّجَاةَ مِنَ النَّارِ، بِرَحْمَتِكَ يَا عَزِيزُ يَا غَفَّارُ. رَبِّ زِدْنِي عِلْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ.',
    latin: 'Allāhumma innī as-aluka īmānan kamilā, wa yaqīnan ṣādiqā, wa rizqan wāsi‘ā, wa qalban khāsyi‘ā, wa lisānan dzākirā, wa taubatan naṣūḥā, wa taubatan qablal-maut, wa rāḥatan ‘indal-maut, wa maghfiratan wa raḥmatan ba‘dal-maut, wal-‘afwa ‘indal-ḥisāb, wal-fauza bil-jannati, wan-najāta minan-nār, biraḥmatika yā ‘azīzu yā ghaffār. Rabbi zidnī ‘ilmā, wa al-ḥiqnī biṣ-ṣāliḥīn.',
    arti: 'Ya Allah, sungguh aku memohon kepada-Mu keimanan yang sempurna, keyakinan yang benar, rezeki yang luas berkah, hati yang khusyuk, lisan yang senantiasa berdzikir, taubat yang semurni-murninya, taubat sebelum mati, ketenangan saat sakaratul maut, ampunan dan rahmat setelah mati, kemaafan pada saat hisab, keberuntungan meraih surga, dan keselamatan dari siksa neraka, dengan rahmat-Mu wahai Tuhan Yang Maha Perkasa lagi Maha Pengampun. Wahai Tuhanku, tambahkanlah ilmuku dan pertemukanlah aku dengan orang-orang yang saleh.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['thawaf', 'putaran 7', 'husnul khatimah', 'taubat']
  },
  {
    id: 'thawaf-sesudah',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 59,
    judul: 'H. Doa Sesudah Thawaf (Di Multazam)',
    deskripsi: 'Dibaca setelah selesai 7 putaran thawaf di depan Multazam (antara Hajar Aswad dan pintu Ka\'bah).',
    arab: 'اللّٰهُمَّ يَا رَبَّ الْبَيْتِ الْعَتِيقِ، أَعْتِقْ رِقَابَنَا وَرِقَابَ آبَائِنَا وَأُمَّهَاتِنَا وَإِخْوَانِنَا وَأَوْلَادِنَا مِنَ النَّارِ، يَا ذَا الْجُودِ وَالْكَرَمِ وَالْفَضْلِ وَالْمَنِّ وَالْعَطَاءِ وَالْإِحْسَانِ. اللّٰهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الْأُمُورِ كُلِّهَا، وَأَجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الْآخِرَةِ. اللّٰهُمَّ إِنِّي عَبْدُكَ وَابْنُ عَبْدِكَ وَاقِفٌ تَحْتَ بَابِكَ، مُلْتَزِمٌ بِأَعْتَابِكَ، مُتَذَلِّلٌ بَيْنَ يَدَيْكَ، أَرْجُو رَحْمَتَكَ وَأَخْشَىٰ عَذَابَكَ، يَا قَدِيمَ الْإِحْسَانِ.',
    latin: 'Allāhumma yā rabbal-baitil-‘atīq, a‘tiq riqābanā wa riqāba ābā’inā wa ummahātinā wa ikhwāninā wa aulādinā minan-nār, yā dzal-jūdi wal-karami wal-faḍli wal-manni wal-‘aṭā’i wal-iḥsān. Allāhumma aḥsin ‘āqibatanā fil-umūri kullihā, wa ajirnā min khizyid-dunyā wa ‘adzābil-ākhirah. Allāhumma innī ‘abduka wabnu ‘abdika wāqifun taḥta bābik, multazimun bi-a‘tābik, mutadzallilun baina yadaik, arjū raḥmataka wa akhsyā ‘adzābak, yā qadīmal-iḥsān.',
    arti: 'Ya Allah, wahai Tuhan Pemilik Rumah yang Kuno (Ka\'bah), bebaskanlah tengkuk kami, tengkuk ayah-ayah kami, ibu-ibu kami, saudara-saudara kami, dan anak-anak kami dari api neraka, wahai Dzat Pemilik Kedermawanan, Kemuliaan, Keutamaan, Anugerah, Pemberian, dan Kebaikan. Ya Allah, perbaguslah kesudahan kami dalam segala urusan, dan selamatkanlah kami dari kehinaan dunia dan siksa akhirat. Ya Allah, sesungguhnya aku adalah hamba-Mu, anak hamba-Mu, berdiri di bawah pintu-Mu, bersimpuh di ambang pintu-Mu, tunduk di hadapan-Mu, mengharapkan rahmat-Mu dan takut akan azab-Mu, wahai Dzat Yang Maha Kekal Kebajikan-Nya.',
    sumber: 'Imam Asy-Syafi\'i & Imam Al-Ghazali, Kemenhaj RI',
    tags: ['sesudah thawaf', 'multazam', 'pembebasan neraka']
  },
  {
    id: 'thawaf-maqam',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 63,
    judul: 'I. Doa Setelah Salat Sunat di Belakang Maqam Ibrahim',
    deskripsi: 'Dibaca seusai salat sunat thawaf 2 rakaat di belakang Maqam Ibrahim AS.',
    arab: 'اللّٰهُمَّ إِنَّكَ تَعْلَمُ سِرِّي وَعَلَانِيَتِي فَاقْبَلْ مَعْذِرَتِي، وَتَعْلَمُ حَاجَتِي فَأَعْطِنِي سُؤْلِي، وَتَعْلَمُ مَا فِي نَفْسِي فَاغْفِرْ لِي ذُنُوبِي. اللّٰهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا يُبَاشِرُ قَلْبِي، وَيَقِينًا صَادِقًا حَتَّىٰ أَعْلَمَ أَنَّهُ لَا يُصِيبُنِي إِلَّا مَا كَتَبْتَ لِي، وَرِضًا بِمَا قَسَمْتَ لِي، يَا أَرْحَمَ الرَّاحِمِينَ.',
    latin: 'Allāhumma innaka ta‘lamu sirrī wa ‘alāniyatī faqbal ma‘dziratī, wa ta‘lamu ḥājatī fa-a‘ṭinī su’lī, wa ta‘lamu mā fī nafsī faghfir lī dzunūbī. Allāhumma innī as-aluka īmānan yubāsyiru qalbī, wa yaqīnan ṣādiqan ḥattā a‘lama annahū lā yuṣībunī illā mā katabta lī, wa riḍan bimā qasamta lī, yā arḥamar-rāḥimīn.',
    arti: 'Ya Allah, sungguh Engkau mengetahui apa yang kurahasiakan dan apa yang kunyatakan, maka terimalah penyesalanku. Engkau mengetahui hajat keperluanku, maka kabulkanlah permohonanku. Dan Engkau mengetahui apa yang ada dalam diriku, maka ampunilah dosa-dosaku. Ya Allah, sesungguhnya aku memohon keimanan yang meresap ke dalam lubuk hatiku, keyakinan yang sungguh-sungguh sehingga aku menyadari bahwa tidak ada yang menimpaku melainkan apa yang telah Engkau tetapkan untukku, serta kerelaan hati menerima apa yang Engkau bagikan untukku, wahai Dzat Yang Maha Pengasih dari segala yang mengasihi.',
    sumber: 'HR. Al-Azraqi & Al-Baihaqi, Kemenhaj RI',
    tags: ['salat thawaf', 'maqam ibrahim', 'ridha']
  },
  {
    id: 'thawaf-zamzam',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 69,
    judul: 'J. Doa Ketika Minum Air Zamzam',
    deskripsi: 'Dibaca menghadap kiblat sesudah salat sunat di Maqam Ibrahim sebelum menuju tempat Sa\'i.',
    arab: 'اللّٰهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا وَاسِعًا، وَشِفَاءً مِنْ كُلِّ دَاءٍ وَسَقَمٍ، بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ.',
    latin: 'Allāhumma innī as-aluka ‘ilman nāfi‘an, wa rizqan wāsi‘an, wa syifā’an min kulli dā’in wa saqamin, biraḥmatika yā arḥamar-rāḥimīn.',
    arti: 'Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang lapang, dan kesembuhan dari segala penyakit dan mara bahaya, dengan rahmat-Mu wahai Dzat Yang Maha Pengasih lagi Maha Penyayang.',
    sumber: 'HR. Ad-Daruquthni & Al-Hakim no. 1739, Kemenhaj RI',
    tags: ['zamzam', 'kesembuhan', 'rezeki', 'ilmu']
  },
  {
    id: 'thawaf-hijir',
    bab: 'BAB VI - DOA THAWAF',
    kategori: 'thawaf',
    halamanBuku: 70,
    judul: 'K. Doa Setelah Salat Sunat Mutlak di Hijir Ismail',
    deskripsi: 'Dibaca saat berkesempatan salat sunat mutlak dan berdoa di dalam Hijir Ismail (bawah pancuran talang emas/Mizab).',
    arab: 'اللّٰهُمَّ أَنْتَ رَبِّي لَا إِلٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ بِهِ عِبَادُكَ الصَّالِحُونَ، يَا رَبَّ الْبَيْتِ الْحَرَامِ.',
    latin: 'Allāhumma anta rabbī lā ilāha illā anta khalaqtanī wa ana ‘abduk, wa ana ‘alā ‘ahdika wa wa‘dika mastata‘tu, a‘ūdzu bika min syarri mā ṣana‘tu, abū’u laka bini‘matika ‘alayya wa abū’u bidzambī faghfir lī fa-innahū lā yaghfirudz-dzunūba illā ant. Allāhumma innī as-aluka min khairi mā sa’alaka bihī ‘ibādukaṣ-ṣāliḥūn, yā rabbal-baitil-ḥarām.',
    arti: 'Ya Allah, Engkaulah Tuhanku, tiada Tuhan selain Engkau yang telah menciptakanku, dan aku adalah hamba-Mu. Aku senantiasa memegang janji-Mu semampuku. Aku berlindung kepada-Mu dari keburukan apa yang kuperbuat. Aku mengakui nikmat-Mu atasku dan aku mengakui dosaku, maka ampunilah aku karena tiada yang mengampuni dosa selain Engkau. Ya Allah, aku memohon kebaikan yang dimohonkan oleh hamba-hamba-Mu yang saleh, wahai Tuhan Pemilik Baitul Haram.',
    sumber: 'Sayyidul Istighfar & Kemenhaj RI',
    tags: ['hijir ismail', 'mizab', 'talang emas', 'mustajab']
  },

  // ==========================================
  // BAB VII: DOA SA'I
  // ==========================================
  {
    id: 'sai-1',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 72,
    judul: 'A. Doa Hendak Mendaki Bukit Shafa (Memulai Sa\'i)',
    deskripsi: 'Dibaca ketika hendak menaiki Bukit Shafa sebelum memulai perjalanan pertama menuju Marwah.',
    arab: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللّٰهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللّٰهَ شَاكِرٌ عَلِيمٌ. أَبْدَأُ بِمَا بَدَأَ اللّٰهُ بِهِ.',
    latin: 'Innaṣ-ṣafā wal-marwata min sya‘ā’irillāhi faman ḥajjal-baita awi‘-tamara falā junāḥa ‘alaihi ay-yaṭṭawwafa bihimā, wa man taṭawwa‘a khairan fa-innallāha syākirun ‘alīm. Abda’u bimā bada’allāhu bih.',
    arti: 'Sesungguhnya Shafa dan Marwah adalah sebagian dari syiar-syiar Allah. Maka barangsiapa beribadah haji ke Baitullah atau berumrah, tiada dosa baginya mengerjakan sa\'i di antara keduanya. Dan barangsiapa mengerjakan kebaikan dengan kerelaan hati, maka sesungguhnya Allah Maha Menilai kebaikan lagi Maha Mengetahui. Aku memulai dengan apa yang Allah mulai dengannya.',
    sumber: 'QS. Al-Baqarah: 158 & HR. Muslim no. 1218, Kemenhaj RI',
    tags: ['bukit shafa', 'awal sai', 'bacaan quran']
  },
  {
    id: 'sai-2',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 73,
    judul: 'B. Doa di Atas Bukit Shafa Ketika Menghadap Ka\'bah',
    deskripsi: 'Dibaca di atas bukit Shafa sambil menghadap ke arah Ka\'bah seraya bertakbir 3 kali.',
    arab: 'اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ وَلِلّٰهِ الْحَمْدُ. لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ.',
    latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu yuḥyī wa yumītu wa huwa ‘alā kulli syai-in qadīr. Lā ilāha illallāhu waḥdah, anjaza wa‘dah, wa naṣara ‘abdah, wa hazamal-aḥzāba waḥdah.',
    arti: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar, dan segala puji hanya milik Allah. Tiada Tuhan selain Allah semata yang tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan bagi-Nya segala puji, Dia Yang menghidupkan dan mematikan, dan Dia Maha Kuasa atas segala sesuatu. Tiada Tuhan selain Allah semata, Dia yang telah menepati janji-Nya, menolong hamba-Nya, dan mengalahkan musuh-musuh sendirian.',
    sumber: 'HR. Muslim no. 1218, Kemenhaj RI',
    tags: ['atas shafa', 'takbir', 'tauhid']
  },
  {
    id: 'sai-round-1',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 75,
    judul: 'C. Doa Sa\'i: Perjalanan Pertama (Shafa ke Marwah)',
    deskripsi: 'Dibaca saat melangkah pada putaran pertama dari Bukit Shafa menuju Bukit Marwah.',
    arab: 'اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، كَبِيرًا وَالْحَمْدُ لِلّٰهِ كَثِيرًا. اللّٰهُمَّ حَبِّبْ إِلَيْنَا الْإِيمَانَ وَزَيِّنْهُ فِي قُلُوبِنَا، وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ وَاجْعَلْنَا مِنَ الرَّاشِدِينَ. اللّٰهُمَّ اسْتَعْمِلْنِي بِسُنَّةِ نَبِيِّكَ، وَتَوَفَّنِي عَلَىٰ مِلَّتِهِ، وَأَعِذْنِي مِنْ مُضِلَّاتِ الْفِتَنِ.',
    latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar, kabīran wal-ḥamdu lillāhi katsīrā. Allāhumma ḥabbib ilainal-īmāna wa zayyinhu fī qulūbinā, wa karrih ilainal-kufra wal-fusūqa wal-‘iṣyāna waj‘alnā minar-rāsyidīn. Allāhummas-ta‘milnī bisunnati nabiyyik, wa tawaffanī ‘alā millatih, wa a‘idznī min muḍillātil-fitan.',
    arti: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dengan segala kebesaran-Nya, dan segala puji yang banyak bagi Allah. Ya Allah, tanamkanlah kecintaan pada iman dalam hati kami dan hiasilah hati kami dengannya. Bencilah kepada kami kekafiran, kefasikan, dan kedurhakaan, serta jadikanlah kami golongan yang mendapat petunjuk. Ya Allah, bimbinglah aku mengamalkan sunnah Nabi-Mu, wafatkanlah aku dalam agamanya, dan lindungilah aku dari fitnah yang menyesatkan.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['sai', 'putaran 1', 'shafa ke marwah']
  },
  {
    id: 'sai-pilar',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 77,
    judul: 'D. Doa di Antara Dua Pilar Hijau / Lampu Hijau',
    deskripsi: 'Dibaca saat melintasi pilar lampu hijau (disunnahkan lari-lari kecil bagi jemaah laki-laki pada setiap putaran Sa\'i).',
    arab: 'رَبِّ اغْفِرْ وَارْحَمْ وَاعْفُ وَتَكَرَّمْ وَتَجَاوَزْ عَمَّا تَعْلَمُ، إِنَّكَ تَعْلَمُ مَا لَا نَعْلَمُ، إِنَّكَ أَنْتَ اللّٰهُ الْأَعَزُّ الْأَكْرَمُ.',
    latin: 'Rabbigh-fir war-ḥam wa‘-fu wa takarram wa tajāwaz ‘ammā ta‘lam, innaka ta‘lamu mā lā na‘lam, innaka antallāhul-a‘azzul-akram.',
    arti: 'Wahai Tuhanku, ampunilah, sayangilah, maafkanlah, bermurah hatilah, dan hapuskanlah dosa yang Engkau ketahui. Sesungguhnya Engkau mengetahui apa yang tidak kami ketahui. Sungguh Engkaulah Allah Yang Maha Perkasa lagi Maha Pemurah.',
    sumber: 'Atsar Abdullah bin Mas\'ud & Ibnu Umar RA, Kemenhaj RI',
    tags: ['lampu hijau', 'pilar hijau', 'lari kecil']
  },
  {
    id: 'sai-keluar-lampu',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 79,
    judul: 'E. Doa Setelah Keluar dari Lampu Hijau',
    deskripsi: 'Dibaca saat kembali berjalan normal seusai melintasi batas lampu hijau Sa\'i.',
    arab: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ، وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ.',
    latin: 'Rabbanā taqabbal minnā innaka antas-samī‘ul-‘alīm, wa tub ‘alainā innaka antat-tawwābur-raḥīm.',
    arti: 'Wahai Tuhan kami, terimalah amal dari kami, sesungguhnya Engkaulah Yang Maha Mendengar lagi Maha Mengetahui, dan terimalah taubat kami, sesungguhnya Engkaulah Yang Maha Penerima Taubat lagi Maha Penyayang.',
    sumber: 'QS. Al-Baqarah: 127-128 & Kemenhaj RI',
    tags: ['keluar lampu hijau', 'penerimaan']
  },
  {
    id: 'sai-dekat-marwah',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 80,
    judul: 'F. Doa Ketika Mendekati Bukit Marwah',
    deskripsi: 'Dibaca saat langkah kaki mulai mendekati landasan Bukit Marwah.',
    arab: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللّٰهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللّٰهَ شَاكِرٌ عَلِيمٌ.',
    latin: 'Innaṣ-ṣafā wal-marwata min sya‘ā’irillāhi faman ḥajjal-baita awi‘-tamara falā junāḥa ‘alaihi ay-yaṭṭawwafa bihimā, wa man taṭawwa‘a khairan fa-innallāha syākirun ‘alīm.',
    arti: 'Sesungguhnya Shafa dan Marwah adalah sebagian dari syiar-syiar Allah. Maka barangsiapa beribadah haji ke Baitullah atau berumrah, tidak ada dosa baginya mengerjakan sa\'i di antara keduanya. Dan barangsiapa mengerjakan kebajikan dengan sukarela, sesungguhnya Allah Maha Mensyukuri lagi Maha Mengetahui.',
    sumber: 'QS. Al-Baqarah: 158 & Kemenhaj RI',
    tags: ['mendekati marwah', 'syiar allah']
  },
  {
    id: 'sai-round-2',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 81,
    judul: 'G. Doa Sa\'i: Perjalanan Kedua (Marwah ke Shafa)',
    deskripsi: 'Dibaca saat melangkah pada putaran kedua dari Bukit Marwah kembali menuju Bukit Shafa.',
    arab: 'اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ وَلِلّٰهِ الْحَمْدُ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ وَالسَّلَامَةَ مِنْ كُلِّ إِثْمٍ وَالْغَنِيمَةَ مِنْ كُلِّ بِرٍّ وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ. اللّٰهُمَّ ارْفَعْ عَنَّا الْجَهْدَ وَالْجُوعَ وَالْعُرْيَ وَاكْشِفْ عَنَّا مِنَ الْبَلَاءِ مَا لَا يَكْشِفُهُ غَيْرُكَ.',
    latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Allāhumma innī as-aluka mūjibāti raḥmatika wa ‘azā’ima maghfiratika was-salāmata min kulli itsm, wal-ghanīmata min kulli birr, wal-fauza bil-jannati wan-najāta minan-nār. Allāhummar-fa‘ ‘annal-jahda wal-jū‘a wal-‘urya wak-syif ‘annā minal-balā’i mā lā yaksyifuhū ghairuk.',
    arti: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan segala puji milik Allah. Ya Allah, sungguh aku memohon sebab-sebab rahmat-Mu, ampunan-Mu yang pasti, keselamatan dari segala dosa, perolehan setiap kebajikan, keberuntungan meraih surga dan selamat dari neraka. Ya Allah, angkatlah dari kami kesusahan, kelaparan, dan ketiadaan pakaian, serta singkirkanlah bencana yang tiada mampu menyingkirkannya selain Engkau.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['sai', 'putaran 2', 'marwah ke shafa']
  },
  {
    id: 'sai-dekat-shafa',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 86,
    judul: 'I. Doa Ketika Mendekati Bukit Shafa',
    deskripsi: 'Dibaca saat langkah kaki mulai mendekati dasar bukit Shafa dari arah Marwah.',
    arab: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللّٰهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللّٰهَ شَاكِرٌ عَلِيمٌ.',
    latin: 'Innaṣ-ṣafā wal-marwata min sya‘ā’irillāhi faman ḥajjal-baita awi‘-tamara falā junāḥa ‘alaihi ay-yaṭṭawwafa bihimā, wa man taṭawwa‘a khairan fa-innallāha syākirun ‘alīm.',
    arti: 'Sesungguhnya Shafa dan Marwah adalah sebagian dari syiar-syiar Allah. Maka barangsiapa beribadah haji ke Baitullah atau berumrah, tidak ada dosa baginya mengerjakan sa\'i di antara keduanya. Dan barangsiapa mengerjakan kebajikan dengan sukarela, sesungguhnya Allah Maha Mensyukuri lagi Maha Mengetahui.',
    sumber: 'QS. Al-Baqarah: 158 & Kemenhaj RI',
    tags: ['mendekati shafa', 'syiar allah']
  },
  {
    id: 'sai-round-3',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 87,
    judul: 'J. Doa Sa\'i: Perjalanan Ketiga (Shafa ke Marwah)',
    deskripsi: 'Dibaca pada putaran ketiga memohon cahaya hati dan kemudahan hisab.',
    arab: 'اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ وَلِلّٰهِ الْحَمْدُ. رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ الْخَيْرَ كُلَّهُ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ.',
    latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Rabbanā atmim lanā nūranā waghfir lanā innaka ‘alā kulli syai-in qadīr. Allāhumma innī as-alukal-khaira kullahū ‘ājilihī wa ājilihī mā ‘alimtu minhu wa mā lam a‘lam, wa a‘ūdzu bika minasy-syarri kullihī ‘ājilihī wa ājilihī mā ‘alimtu minhu wa mā lam a‘lam.',
    arti: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan segala puji milik Allah. Wahai Tuhan kami, sempurnakanlah bagi kami cahaya kami dan ampunilah kami, sesungguhnya Engkau Maha Kuasa atas segala sesuatu. Ya Allah, sesungguhnya aku memohon segala kebaikan yang segera (di dunia) maupun yang tertunda (di akhirat), yang kuketahui maupun yang tidak kuketahui. Dan aku berlindung dari segala keburukan yang segera maupun tertunda, yang kuketahui maupun yang tidak kuketahui.',
    sumber: 'QS. At-Tahrim: 8 & HR. Ibnu Majah no. 3846, Kemenhaj RI',
    tags: ['sai', 'putaran 3', 'cahaya', 'kebaikan']
  },
  {
    id: 'sai-round-4',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 94,
    judul: 'N. Doa Sa\'i: Perjalanan Keempat (Marwah ke Shafa)',
    deskripsi: 'Dibaca pada putaran keempat memohon kesabaran dan istiqamah dalam kebaikan.',
    arab: 'اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ وَلِلّٰهِ الْحَمْدُ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا تَعْلَمُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا تَعْلَمُ، وَأَسْتَغْفِرُكَ مِنْ كُلِّ مَا تَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ. لَا إِلٰهَ إِلَّا اللّٰهُ الْمَلِكُ الْحَقُّ الْمُبِينُ، مُحَمَّدٌ رَسُولُ اللّٰهِ صَادِقُ الْوَعْدِ الْأَمِينُ.',
    latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Allāhumma innī as-aluka min khairi mā ta‘lam, wa a‘ūdzu bika min syarri mā ta‘lam, wa astaghfiruka min kulli mā ta‘lam, innaka anta ‘allāmul-ghuyūb. Lā ilāha illallāhul-malikul-ḥaqqul-mubīn, Muḥammadur-rasūlullāhi ṣādiqul-wa‘dil-amīn.',
    arti: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan segala puji milik Allah. Ya Allah, aku memohon kepada-Mu dari kebaikan yang Engkau ketahui, aku berlindung kepada-Mu dari keburukan yang Engkau ketahui, dan aku memohon ampunan-Mu atas segala dosa yang Engkau ketahui, sungguh Engkau Maha Mengetahui hal-hal gaib. Tiada Tuhan selain Allah Raja Yang Maha Benar lagi Nyata, Nabi Muhammad utusan Allah yang senantiasa menepati janji lagi terpercaya.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['sai', 'putaran 4', 'istighfar', 'ilmu gaib']
  },
  {
    id: 'sai-round-5',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 100,
    judul: 'Q. Doa Sa\'i: Perjalanan Kelima (Shafa ke Marwah)',
    deskripsi: 'Dibaca pada putaran kelima memohon kebersihan jiwa dari sifat tercela.',
    arab: 'اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ وَلِلّٰهِ الْحَمْدُ. سُبْحَانَكَ مَا شَكَرْنَاكَ حَقَّ شُكْرِكَ يَا اللّٰهُ، سُبْحَانَكَ مَا ذَكَرْنَاكَ حَقَّ ذِكْرِكَ يَا اللّٰهُ. اللّٰهُمَّ طَهِّرْ قُلُوبَنَا مِنَ النِّفَاقِ، وَأَعْمَالَنَا مِنَ الرِّيَاءِ، وَأَلْسِنَتَنَا مِنَ الْكَذِبِ، وَأَعْيُنَنَا مِنَ الْخِيَانَةِ، إِنَّكَ تَعْلَمُ خَائِنَةَ الْأَعْيُنِ وَمَا تُخْفِي الصُّدُورُ.',
    latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Subḥānaka mā syakarnāka ḥaqqa syukrika yā Allāh, subḥānaka mā dzakarnāka ḥaqqa dzikrika yā Allāh. Allāhumma ṭahhir qulūbanā minan-nifāq, wa a‘mālanā minar-riyā’, wa alsinatanā minal-kadzib, wa a‘yunanā minal-khiyānah, innaka ta‘lamu khā’inatal-a‘yuni wa mā tukhfiṣ-ṣudūr.',
    arti: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan segala puji milik Allah. Maha Suci Engkau, kami belum mampu bersyukur kepada-Mu dengan sebenar-benarnya syukur ya Allah. Maha Suci Engkau, kami belum mampu berdzikir kepada-Mu dengan sebenar-benarnya zikir ya Allah. Ya Allah, bersihkanlah hati kami dari kemunafikan, amal kami dari riya\', lisan kami dari dusta, dan mata kami dari khianat, sesungguhnya Engkau mengetahui pandangan mata yang khianat dan apa yang disembunyikan oleh dada.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['sai', 'putaran 5', 'kebersihan hati', 'ikhlas']
  },
  {
    id: 'sai-round-6',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 105,
    judul: 'U. Doa Sa\'i: Perjalanan Keenam (Marwah ke Shafa)',
    deskripsi: 'Dibaca pada putaran keenam memohon kemudahan sakaratul maut dan hisab yang ringan.',
    arab: 'اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ وَلِلّٰهِ الْحَمْدُ. لَا إِلٰهَ إِلَّا اللّٰهُ الْمَلِكُ الْحَقُّ الْمُبِينُ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ الرِّضَا بَعْدَ الْقَضَاءِ، وَبَرْدَ الْعَيْشِ بَعْدَ الْمَوْتِ، وَلَذَّةَ النَّظَرِ إِلَىٰ وَجْهِكَ الْكَرِيمِ، وَالشَّوْقَ إِلَىٰ لِقَائِكَ فِي غَيْرِ ضَرَّاءَ مُضِرَّةٍ وَلَا فِتْنَةٍ مُضِلَّةٍ، وَأَعُوذُ بِكَ أَنْ أَظْلِمَ أَوْ أُظْلَمَ.',
    latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar wa lillāhil-ḥamd. Lā ilāha illallāhul-malikul-ḥaqqul-mubīn. Allāhumma innī as-alukar-riḍā ba‘dal-qaḍā’, wa bardal-‘aisyi ba‘dal-maut, wa ladz-dzatan-naẓari ilā wajhikal-karīm, wasy-syauqa ilā liqā’ika fī ghairi ḍarrā’a muḍirratin wa lā fitnatin muḍillah, wa a‘ūdzu bika an aẓlima au uẓlam.',
    arti: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dan segala puji bagi Allah. Tiada Tuhan selain Allah Raja Yang Benar lagi Nyata. Ya Allah, aku memohon kerelaan hati menerima takdir-Mu, kesejukan hidup setelah kematian, kelezatan memandang wajah-Mu Yang Maha Mulia, dan kerinduan berjumpa dengan-Mu tanpa marabahaya yang membinasakan dan tanpa fitnah yang menyesatkan, dan aku berlindung kepada-Mu dari berbuat zalim atau dizalimi.',
    sumber: 'HR. An-Nasa\'i no. 1305 & Ahmad, Kemenhaj RI',
    tags: ['sai', 'putaran 6', 'memandang allah', 'kerinduan']
  },
  {
    id: 'sai-round-7',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 111,
    judul: 'X. Doa Sa\'i: Perjalanan Ketujuh (Shafa ke Marwah)',
    deskripsi: 'Putaran penutup ibadah Sa\'i, berakhir di Bukit Marwah dengan penuh rasa syukur.',
    arab: 'اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلّٰهِ كَثِيرًا. اللّٰهُمَّ حَبِّبْ إِلَيَّ الْإِيمَانَ وَزَيِّنْهُ فِي قَلْبِي، وَكَرِّهْ إِلَيَّ الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ وَاجْعَلْنِي مِنَ الرَّاشِدِينَ. اللّٰهُمَّ اخْتِمْ بِالصَّالِحَاتِ آجَالَنَا، وَحَقِّقْ بِالزِّيَادَةِ آمَالَنَا، وَاقْرِنْ بِالْعَافِيَةِ غُدُوَّنَا وَآصَالَنَا، وَاجْعَلْ إِلَىٰ رَحْمَتِكَ مَصِيرَنَا وَمَآلَنَا.',
    latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar kabīran wal-ḥamdu lillāhi katsīrā. Allāhumma ḥabbib ilayyal-īmāna wa zayyinhu fī qalbī, wa karrih ilayyal-kufra wal-fusūqa wal-‘iṣyāna waj‘alnī minar-rāsyidīn. Allāhumma kh-tim biṣ-ṣāliḥāti ājālanā, wa ḥaqqiq biz-ziyādati āmālanā, waqrin bil-‘āfiyati ghuduwwanā wa āṣālanā, waj‘al ilā raḥmatika maṣīranā wa ma’ālanā.',
    arti: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar dengan segala kebesaran-Nya, dan puji syukur yang banyak bagi Allah. Ya Allah, tanamkanlah kecintaan pada iman dalam hatiku dan hiasilah ia di dalamnya, bencilah kepadaku kekafiran, kefasikan, dan kemaksiatan, serta jadikanlah aku golongan yang terbimbing. Ya Allah, sudahilah usia kami dengan amal-amal kebajikan, wujudkanlah harapan kami dengan tambahan karunia-Mu, sertakanlah kesehatan dalam pagi dan petang kami, dan jadikanlah tujuan akhir kepulangan kami menuju limpahan rahmat-Mu.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['sai', 'putaran 7', 'akhir usia', 'kebajikan']
  },
  {
    id: 'sai-selesai',
    bab: 'BAB VII - DOA SA\'I',
    kategori: 'sai',
    halamanBuku: 117,
    judul: 'AB. Doa di Bukit Marwah Sesudah Selesai Sa\'i',
    deskripsi: 'Dibaca di atas Bukit Marwah menghadap Ka\'bah sebagai penutup seluruh rangkaian 7 perjalanan Sa\'i.',
    arab: 'اللّٰهُمَّ رَبَّنَا تَقَبَّلْ مِنَّا وَعَافِنَا وَاعْفُ عَنَّا، وَعَلَىٰ طَاعَتِكَ وَشُكْرِكَ أَعِنَّا، وَعَلَىٰ غَيْرِكَ لَا تَكِلْنَا، وَعَلَىٰ الْإِيمَانِ وَالْإِسْلَامِ الْكَامِلِ جَمِيعًا تَوَفَّنَا وَأَنْتَ رَاضٍ عَنَّا. اللّٰهُمَّ ارْحَمْنِي بِتَرْكِ الْمَعَاصِي أَبَدًا مَا أَبْقَيْتَنِي، وَارْحَمْنِي أَنْ أَتَكَلَّفَ مَا لَا يَعْنِينِي، وَارْزُقْنِي حُسْنَ النَّظَرِ فِيمَا يُرْضِيكَ عَنِّي، يَا أَرْحَمَ الرَّاحِمِينَ.',
    latin: 'Allāhumma rabbanā taqabbal minnā wa ‘āfinā wa‘fu ‘annā, wa ‘alā ṭā‘atika wa syukrika a‘innā, wa ‘alā ghairika lā takilnā, wa ‘alal-īmāni wal-islāmil-kāmili jamī‘an tawaffanā wa anta rāḍin ‘annā. Allāhummar-ḥamnī bitarkil-ma‘āṣī abadām mā abqaitanī, war-ḥamnī an atakallafa mā lā ya‘nīnī, war-zuqnī ḥusnan-naẓari fīmā yurḍīka ‘annī, yā arḥamar-rāḥimīn.',
    arti: 'Ya Allah wahai Tuhan kami, terimalah amal ibadah kami, berikanlah kami keselamatan, maafkanlah kesalahan kami, tolonglah kami untuk senantiasa taat dan bersyukur kepada-Mu, janganlah Engkau serahkan urusan kami kepada selain-Mu, dan wafatkanlah kami semua dalam iman dan Islam yang sempurna sementara Engkau ridha kepada kami. Ya Allah, limpahkanlah rahmat agar aku sanggup meninggalkan maksiat selama Engkau memberi hidup kepadaku, dan berilah aku rezeki memandang indah apa yang membuat-Mu ridha kepadaku, wahai Dzat Yang Maha Pengasih lagi Maha Penyayang.',
    sumber: 'Imam Al-Ghazali & Imam An-Nawawi, Kemenhaj RI',
    tags: ['selesai sai', 'bukit marwah', 'ridha allah']
  },

  // ==========================================
  // BAB VIII: DOA BERCUKUR (TAHALLUL)
  // ==========================================
  {
    id: 'tahallul-1',
    bab: 'BAB VIII - DOA BERCUKUR (TAHALLUL)',
    kategori: 'tahallul',
    halamanBuku: 120,
    judul: 'A. Doa Ketika Mencukur / Menggunting Rambut (Tahallul)',
    deskripsi: 'Dibaca saat memotong minimal 3 helai rambut (atau mencukur habis bagi laki-laki) sebagai tanda pelepasan ihram.',
    arab: 'اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ، اللّٰهُ أَكْبَرُ. الْحَمْدُ لِلّٰهِ عَلَىٰ مَا هَدَانَا، وَالْحَمْدُ لِلّٰهِ عَلَىٰ مَا أَنْعَمَنَا بِهِ عَلَيْنَا. اللّٰهُمَّ هٰذِهِ نَاصِيَتِي فَتَقَبَّلْ مِنِّي وَاغْفِرْ ذُنُوبِي. اللّٰهُمَّ اجْعَلْ لِي بِكُلِّ شَعْرَةٍ نُورًا يَوْمَ الْقِيَامَةِ.',
    latin: 'Allāhu akbar, Allāhu akbar, Allāhu akbar. Al-ḥamdu lillāhi ‘alā mā hadānā, wal-ḥamdu lillāhi ‘alā mā an‘amanā bihī ‘alainā. Allāhumma hādzihī nāṣiyatī fataqabbal minnī wagh-fir dzunūbī. Allāhummaj-‘al lī bikulli sya‘ratin nūran yaumal-qiyāmah.',
    arti: 'Allah Maha Besar, Allah Maha Besar, Allah Maha Besar. Segala puji bagi Allah atas petunjuk yang Dia berikan kepada kami, dan segala puji bagi Allah atas segala nikmat yang dicurahkan-Nya kepada kami. Ya Allah, inilah ubun-ubunku maka terimalah dariku dan ampunilah dosa-dosaku. Ya Allah, jadikanlah untuk setiap helai rambut yang terpotong ini seberkas cahaya pada hari kiamat.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['tahallul', 'potong rambut', 'cahaya kiamat']
  },
  {
    id: 'tahallul-2',
    bab: 'BAB VIII - DOA BERCUKUR (TAHALLUL)',
    kategori: 'tahallul',
    halamanBuku: 122,
    judul: 'B. Doa Setelah Selesai Mencukur / Menggunting Rambut',
    deskripsi: 'Dibaca seusai tahallul sebagai tanda sah dan selesainya rangkaian ibadah umrah / tahallul awal.',
    arab: 'الْحَمْدُ لِلّٰهِ الَّذِي قَضَىٰ عَنَّا نُسُكَنَا. اللّٰهُمَّ زِدْنَا إِيمَانًا وَيَقِينًا وَعَوْنًا، وَاغْفِرْ لَنَا وَلِآبَائِنَا وَأُمَّهَاتِنَا وَلِجَمِيعِ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ.',
    latin: 'Al-ḥamdu lillāhil-ladzī qaḍā ‘annā nusukanā. Allāhumma zidnā īmānan wa yaqīnan wa ‘aunā, wagh-fir lanā wa li-ābā’inā wa ummahātinā wa lijamī‘il-muslimīna wal-muslimāt.',
    arti: 'Segala puji bagi Allah yang telah menyempurnakan ibadah manasik kami. Ya Allah, tambahkanlah kepada kami keimanan, keyakinan, dan pertolongan-Mu, serta ampunilah kami, kedua orang tua kami, dan seluruh kaum muslimin dan muslimat.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['setelah tahallul', 'syukur manasik', 'doa orang tua']
  },

  // ==========================================
  // BAB IX: DOA BERANGKAT DAN SELAMA DI ARAFAH
  // ==========================================
  {
    id: 'arafah-niat',
    bab: 'BAB IX - DOA DAN ZIKIR DI ARAFAH',
    kategori: 'arafah',
    halamanBuku: 123,
    judul: 'A. Niat Haji Tamattu\' di Pemondokan Makkah Menuju Arafah',
    deskripsi: 'Dilafalkan pada pagi hari tanggal 8 Dzulhijjah (Hari Tarwiyah) saat bersiap berangkat dari pemondokan Makkah ke Arafah.',
    arab: 'لَبَّيْكَ اللّٰهُمَّ حَجًّا، نَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلّٰهِ تَعَالَى.',
    latin: 'Labbaika Allāhumma ḥajjan, nawaitul-ḥajja wa aḥramtu bihī lillāhi ta‘ālā.',
    arti: 'Aku penuhi panggilan-Mu ya Allah untuk berhaji. Aku berniat haji dan berihram karenanya karena Allah Ta\'ala.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['niat haji', 'tarwiyah', 'berangkat arafah']
  },
  {
    id: 'arafah-berangkat',
    bab: 'BAB IX - DOA DAN ZIKIR DI ARAFAH',
    kategori: 'arafah',
    halamanBuku: 124,
    judul: 'B. Doa Ketika Berangkat Menuju Padang Arafah',
    deskripsi: 'Dibaca di dalam kendaraan saat bus mulai melaju meninggalkan Makkah menuju Arafah.',
    arab: 'اللّٰهُمَّ إِلَيْكَ تَوَجَّهْتُ، وَلِوَجْهِكَ الْكَرِيمِ أَرَدْتُ، فَاجْعَلْ ذَنْبِي مَغْفُورًا، وَحَجِّي مَبْرُورًا، وَارْحَمْنِي وَلَا تُخَيِّبْنِي، إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.',
    latin: 'Allāhumma ilaika tawajjahtu, wa liwajhikal-karīmi aradtu, faj‘al dzambī maghfūrā, wa ḥajjī mabrūrā, war-ḥamnī wa lā tukhayyibnī, innaka ‘alā kulli syai-in qadīr.',
    arti: 'Ya Allah, kepada-Mu lah aku menghadapkan diriku, dan karena wajah-Mu Yang Maha Mulia lah aku bermaksud. Maka jadikanlah dosaku diampuni, hajiku mabrur, kasihanilah aku dan janganlah Engkau kecewakan aku, sesungguhnya Engkau Maha Kuasa atas segala sesuatu.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['berangkat arafah', 'haji mabrur']
  },
  {
    id: 'arafah-talbiyah',
    bab: 'BAB IX - DOA DAN ZIKIR DI ARAFAH',
    kategori: 'arafah',
    halamanBuku: 124,
    judul: 'C. Bacaan Talbiyah dan Salawat dalam Perjalanan Menuju Arafah',
    deskripsi: 'Dikumandangkan terus menerus oleh rombongan jemaah di dalam bus sepanjang perjalanan menuju Arafah.',
    arab: 'لَبَّيْكَ اللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ. اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ.',
    latin: 'Labbaikallāhumma labbaīk, labbaīka lā syarīka laka labbaīk, innal-ḥamda wan-ni‘mata laka wal-mulk, lā syarīka lak. Allāhumma ṣalli ‘alā sayyidinā Muḥammadin wa ‘alā āli sayyidinā Muḥammad.',
    arti: 'Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Tiada sekutu bagi-Mu. Segala puji, nikmat, dan kekuasaan hanyalah kepunyaan-Mu. Ya Allah limpahkanlah salawat atas junjungan kami Nabi Muhammad dan keluarganya.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['talbiyah arafah', 'perjalanan', 'salawat']
  },
  {
    id: 'arafah-masuk',
    bab: 'BAB IX - DOA DAN ZIKIR DI ARAFAH',
    kategori: 'arafah',
    halamanBuku: 127,
    judul: 'D. Doa Ketika Masuk Kawasan Arafah',
    deskripsi: 'Dibaca saat bus melintasi batas rambu tanda masuk Padang Arafah.',
    arab: 'اللّٰهُمَّ إِلَيْكَ أَقْبَلْتُ وَبِكَ اعْتَصَمْتُ وَعَلَيْكَ تَوَكَّلْتُ. اللّٰهُمَّ اجْعَلْنِي مِمَّنْ تُبَاهِي بِهِ الْيَوْمَ مَلَائِكَتَكَ، إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.',
    latin: 'Allāhumma ilaika aqbaltu wa bika‘-taṣamtu wa ‘alaika tawakkaltu. Allāhummaj-‘alnī mimman tubāhī bihil-yauma malā’ikatak, innaka ‘alā kulli syai-in qadīr.',
    arti: 'Ya Allah, kepada-Mu lah aku menuju, kepada-Mu lah aku berpegang teguh, dan kepada-Mu lah aku bertawakal. Ya Allah, jadikanlah aku termasuk orang yang Engkau banggakan pada hari ini di hadapan para malaikat-Mu, sesungguhnya Engkau Maha Kuasa atas segala sesuatu.',
    sumber: 'HR. Ahmad & Ibnu Hibban, Kemenhaj RI',
    tags: ['masuk arafah', 'kebanggaan malaikat']
  },
  {
    id: 'arafah-rahmah',
    bab: 'BAB IX - DOA DAN ZIKIR DI ARAFAH',
    kategori: 'arafah',
    halamanBuku: 127,
    judul: 'E. Doa Ketika Melihat Jabal Rahmah',
    deskripsi: 'Dibaca saat memandang bukit Jabal Rahmah di tengah padang Arafah (tempat pertemuan Adam dan Hawa).',
    arab: 'اللّٰهُمَّ اغْفِرْ لِي وَتُبْ عَلَيَّ وَأَعْطِنِي سُؤْلِي، وَوَجِّهْ لِيَ الْخَيْرَ أَيْنَمَا تَوَجَّهْتُ. سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ.',
    latin: 'Allāhummagh-fir lī wa tub ‘alayya wa a‘ṭinī su’lī, wa wajjih liyal-khaira aynamā tawajjaht. Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar.',
    arti: 'Ya Allah, ampunilah aku, terimalah taubatku, kabulkanlah permohonanku, dan arahkanlah kebaikan untukku ke mana saja aku menghadap. Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, dan Allah Maha Besar.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['jabal rahmah', 'kasih sayang', 'taubat']
  },
  {
    id: 'arafah-inti',
    bab: 'BAB IX - DOA DAN ZIKIR DI ARAFAH',
    kategori: 'arafah',
    halamanBuku: 128,
    judul: 'F. Zikir dan Doa Inti Wukuf di Arafah (Haji Mabrur)',
    deskripsi: 'Puncak ibadah haji (al-hajju \'arafah) dibaca sejak tergelincir matahari 9 Dzulhijjah hingga maghrib.',
    arab: 'لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. اللّٰهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا. اللّٰهُمَّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَأَعُوذُ بِكَ مِنْ وَسَاوِسِ الصَّدْرِ، وَشَتَاتِ الْأَمْرِ، وَفِتْنَةِ الْقَبْرِ.',
    latin: 'Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu yuḥyī wa yumītu wa huwa ‘alā kulli syai-in qadīr. Allāhummaj-‘al fī qalbī nūrā, wa fī sam‘ī nūrā, wa fī baṣarī nūrā. Allāhummasy-raḥ lī ṣadrī, wa yassir lī amrī, wa a‘ūdzu bika min wasāwisiṣ-ṣadri, wa syatātil-amri, wa fitnatil-qabr.',
    arti: 'Tiada Tuhan selain Allah semata yang tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan bagi-Nya segala puji, Dia Yang menghidupkan dan mematikan, dan Dia Maha Kuasa atas segala sesuatu. Ya Allah, jadikanlah cahaya dalam hatiku, cahaya dalam pendengaranku, dan cahaya dalam pandanganku. Ya Allah, lapangkanlah dadaku, mudahkanlah urusanku, dan aku berlindung kepada-Mu dari bisikan hati yang ragu, urusan yang tercerai berai, dan siksa kubur.',
    sumber: 'HR. Tirmidzi no. 3585 & HR. Ahmad, Kemenhaj RI',
    tags: ['wukuf arafah', 'inti haji', 'sayyidul doa', 'mustajab']
  },
  {
    id: 'arafah-munajat',
    bab: 'BAB IX - DOA DAN ZIKIR DI ARAFAH',
    kategori: 'arafah',
    halamanBuku: 132,
    judul: 'G. Doa Munajat & Keridhaan Hari Arafah',
    deskripsi: 'Dibaca menjelang terbenam matahari di Padang Arafah dengan menengadahkan kedua tangan berderai air mata.',
    arab: 'اللّٰهُمَّ إِنَّكَ تَرَىٰ مَكَانِي، وَتَسْمَعُ كَلَامِي، وَتَعْلَمُ سِرِّي وَعَلَانِيَتِي، لَا يَخْفَىٰ عَلَيْكَ شَيْءٌ مِنْ أَمْرِي، أَنَا الْبَائِسُ الْفَقِيرُ، الْمُسْتَغِيثُ الْمُسْتَجِيرُ، الْوَجِلُ الْمُشْفِقُ، الْمُقِرُّ الْمُعْتَرِفُ بِذَنْبِهِ، أَسْأَلُكَ مَسْأَلَةَ الْمِسْكِينِ، وَأَبْتَهِلُ إِلَيْكَ ابْتِهَالَ الْمُذْنِبِ الذَّلِيلِ، وَأَدْعُوكَ دُعَاءَ مَنْ خَضَعَتْ لَكَ رَقَبَتُهُ، وَفَاضَتْ لَكَ عَبْرَتُهُ، وَذَلَّ لَكَ جَسَدُهُ، وَرَغِمَ لَكَ أَنْفُهُ. اللّٰهُمَّ لَا تَجْعَلْنِي بِدُعَائِكَ رَبِّ شَقِيًّا، وَكُنْ بِي رَؤُوفًا رَحِيمًا، يَا خَيْرَ الْمَسْؤُولِينَ، وَيَا خَيْرَ الْمُعْطِينَ.',
    latin: 'Allāhumma innaka tarā makānī, wa tasma‘u kalāmī, wa ta‘lamu sirrī wa ‘alāniyatī, lā yakhfā ‘alaika syai-um min amrī, anal-bā’isul-faqīr, al-mustaghītsul-mustajīr, al-wajilul-musyfiq, al-muqirrul-mu‘tarifu bidzambih, as-aluka mas-alatal-miskīn, wa abtahilu ilaika-btihālal-mudznibidz-dzalīl, wa ad‘ūka du‘ā’a man khaḍa‘at laka raqabatuh, wa fāḍat laka ‘abratuh, wa dzalla laka jasaduh, wa raghima laka anfuh. Allāhumma lā taj‘alnī bidu‘ā’ika rabbi syaqiyyā, wa kum bī ra’ūfar raḥīmā, yā khairal-mas’ūlīn, wa yā khairal-mu‘ṭīn.',
    arti: 'Ya Allah, sungguh Engkau melihat tempat berdiriku ini, mendengar perkataanku, dan mengetahui apa yang kurahasiakan dan kunyatakan. Tiada sesuatu pun dari urusanku yang tersembunyi bagi-Mu. Aku adalah hamba yang malang lagi faqir, yang memohon pertolongan dan perlindungan, yang cemas lagi gentar, yang mengakui segala dosanya. Aku memohon kepada-Mu seperti permohonan orang miskin, aku bersimpuh kepada-Mu seperti kepasrahan orang berdosa yang hina, dan aku berdoa kepada-Mu seperti doa orang yang tunduk tengkuknya kepada-Mu, bercucuran air matanya untuk-Mu, rebah jasadnya di hadapan-Mu, dan tersungkur wajahnya demi keagungan-Mu. Ya Allah, janganlah Engkau jadikan aku orang yang celaka dalam berdoa kepada-Mu wahai Tuhanku, dan limpahkanlah kasih sayang serta rahmat kepadaku, wahai Sebaik-baik Dzat Yang Dimohon dan Sebaik-baik Dzat Yang Memberi.',
    sumber: 'HR. At-Thabrani dalam Al-Mu\'jam Al-Kabir & Kemenhaj RI',
    tags: ['munajat arafah', 'air mata', 'mustajab', 'taubat nasuha']
  },

  // ==========================================
  // BAB X: ZIKIR DAN DOA SELAMA DI MUZDALIFAH
  // ==========================================
  {
    id: 'muzdalifah-1',
    bab: 'BAB X - DOA DAN ZIKIR DI MUZDALIFAH',
    kategori: 'muzdalifah',
    halamanBuku: 157,
    judul: 'A. Talbiyah & Salawat Menuju Muzdalifah',
    deskripsi: 'Dikumandangkan setelah matahari terbenam pada 9 Dzulhijjah dalam perjalanan bergerak dari Arafah ke Muzdalifah.',
    arab: 'لَبَّيْكَ اللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ. إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لَا شَرِيكَ لَكَ. اللّٰهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ.',
    latin: 'Labbaikallāhumma labbaīk, labbaīka lā syarīka laka labbaīk. Innal-ḥamda wan-ni‘mata laka wal-mulka lā syarīka lak. Allāhumma ṣalli ‘alā sayyidinā Muḥammadin wa ‘alā āli sayyidinā Muḥammad.',
    arti: 'Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Tiada sekutu bagi-Mu. Segala puji, nikmat, dan kekuasaan hanyalah kepunyaan-Mu. Ya Allah limpahkanlah salawat atas junjungan kami Nabi Muhammad dan keluarganya.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['talbiyah', 'perjalanan muzdalifah', 'mabit']
  },
  {
    id: 'muzdalifah-2',
    bab: 'BAB X - DOA DAN ZIKIR DI MUZDALIFAH',
    kategori: 'muzdalifah',
    halamanBuku: 159,
    judul: 'B. Doa Ketika Sampai di Muzdalifah (Masy\'aril Haram)',
    deskripsi: 'Dibaca saat tiba di Muzdalifah sebelum melaksanakan salat Maghrib dan Isya jamak qashar.',
    arab: 'اللّٰهُمَّ إِنَّ هٰذِهِ مُزْدَلِفَةُ، جُمِعَتْ فِيهَا أَلْسِنَةٌ مُخْتَلِفَةٌ، تَسْأَلُكَ حَوَائِجَ مُتَنَوِّعَةً، فَاجْعَلْنِي مِمَّنْ دَعَاكَ فَاسْتَجَبْتَ لَهُ، وَتَوَكَّلَ عَلَيْكَ فَكَفَيْتَهُ، يَا أَرْحَمَ الرَّاحِمِينَ.',
    latin: 'Allāhumma inna hādzihī Muzdalifah, jumi‘at fīhā alsinatum mukhtalifah, tas-aluka ḥawā’ija mutanawwi‘ah, faj‘alnī mimman da‘āka fastajabta lah, wa tawakkala ‘alaika fakafaitah, yā arḥamar-rāḥimīn.',
    arti: 'Ya Allah, sungguh ini adalah Muzdalifah, tempat berkumpulnya lisan dari berbagai bahasa yang berbeda, memohon hajat yang beraneka ragam kepada-Mu. Maka jadikanlah aku termasuk orang yang berdoa kepada-Mu lalu Engkau kabulkan doanya, dan orang yang bertawakal kepada-Mu lalu Engkau cukupkan kebutuhannya, wahai Dzat Yang Maha Pengasih lagi Maha Penyayang.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['tiba muzdalifah', 'masy\'aril haram', 'pengabulan']
  },
  {
    id: 'muzdalifah-3',
    bab: 'BAB X - DOA DAN ZIKIR DI MUZDALIFAH',
    kategori: 'muzdalifah',
    halamanBuku: 161,
    judul: 'C. Doa Memungut Batu Kerikil di Muzdalifah',
    deskripsi: 'Dibaca saat mengambil kerikil sebesar biji kacang untuk melontar jamrah di Mina.',
    arab: 'اللّٰهُمَّ احْفَظْنِي مِنْ كُلِّ سُوءٍ، وَتَقَبَّلْ مِنِّي نُسُكِي، وَاجْعَلْ هٰذِهِ الْحَصَيَاتِ كَفَّارَةً لِذُنُوبِي، وَطَهِّرْنِي بِهَا يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.',
    latin: 'Allāhummaḥ-faẓnī min kulli sū’, wa taqabbal minnī nusukī, waj‘al hādzihil-ḥaṣayāti kaffāratan lidzunūbī, wa ṭahhirnī bihā yā dzal-jalāli wal-ikrām.',
    arti: 'Ya Allah, peliharalah aku dari segala keburukan, terimalah ibadah manasikku, dan jadikanlah batu-batu kerikil ini sebagai pelebur dosa-dosaku, serta bersihkanlah diriku karenanya wahai Tuhan Pemilik Keagungan dan Kemuliaan.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['ambil kerikil', 'batu jamrah', 'muzdalifah']
  },
  {
    id: 'muzdalifah-4',
    bab: 'BAB X - DOA DAN ZIKIR DI MUZDALIFAH',
    kategori: 'muzdalifah',
    halamanBuku: 162,
    judul: 'D. Doa pada Batas Akhir Muzdalifah Menuju Mina',
    deskripsi: 'Dibaca saat fajar 10 Dzulhijjah setelah selesai mabit ketika mulai melangkah meninggalkan Muzdalifah.',
    arab: 'اللّٰهُمَّ كَمَا وَقَفْتَنَا فِيهِ وَأَرَيْتَنَا إِيَّاهُ، فَوَفِّقْنَا لِذِكْرِكَ كَمَا هَدَيْتَنَا، وَاغْفِرْ لَنَا وَارْحَمْنَا كَمَا وَعَدْتَنَا بِقَوْلِكَ وَقَوْلُكَ الْحَقُّ: فَإِذَا أَفَضْتُمْ مِنْ عَرَفَاتٍ فَاذْكُرُوا اللّٰهَ عِنْدَ الْمَشْعَرِ الْحَرَامِ.',
    latin: 'Allāhumma kamā waqaftanā fīhi wa araitanā iyyāh, fawaffiqnā lidzikrika kamā hadaitanā, waghfir lanā war-ḥamnā kamā wa‘adtanā biqaulika wa qaulukal-ḥaqq: Fa-idzā afaḍtum min ‘Arafātin fadzkurullāha ‘indal-masy‘aril-ḥarām.',
    arti: 'Ya Allah, sebagaimana Engkau telah menghentikan kami di tempat ini dan memperlihatkannya kepada kami, maka berilah kami taufik untuk berdzikir mengingat-Mu sebagaimana Engkau memberi kami petunjuk. Dan ampunilah kami serta sayangilah kami sebagaimana janji-Mu dalam firman-Mu yang haq: "Maka apabila kamu telah bertolak dari Arafat, berdzikirlah kepada Allah di Masy\'aril Haram".',
    sumber: 'QS. Al-Baqarah: 198 & Kemenhaj RI',
    tags: ['batas muzdalifah', 'menuju mina', 'fajar nahr']
  },

  // ==========================================
  // BAB XI: DOA DAN ZIKIR SELAMA DI MINA
  // ==========================================
  {
    id: 'mina-1',
    bab: 'BAB XI - DOA DAN ZIKIR DI MINA',
    kategori: 'mina',
    halamanBuku: 164,
    judul: 'A. Doa Ketika Tiba di Mina',
    deskripsi: 'Dibaca saat memasuki perkemahan Mina pada hari raya Idul Adha (10 Dzulhijjah).',
    arab: 'اللّٰهُمَّ هٰذَا مِنًى، فَامْنُنْ عَلَيَّ بِمَا مَنَنْتَ بِهِ عَلَىٰ أَوْلِيَائِكَ وَأَهْلِ طَاعَتِكَ، وَأَعِذْنِي مِنْ شَرِّ مَا تَعْلَمُ، يَا رَبَّ الْعَالَمِينَ.',
    latin: 'Allāhumma hādzā Minā, famnun ‘alayya bimā mananta bihī ‘alā auliyā-ika wa ahli ṭā‘atik, wa a‘idznī min syarri mā ta‘lam, yā rabbal-‘ālamīn.',
    arti: 'Ya Allah, tempat ini adalah Mina, maka anugerahkanlah karunia kepadaku sebagaimana Engkau telah menganugerahkannya kepada para kekasih-Mu dan orang-orang yang taat kepada-Mu. Dan lindungilah aku dari keburukan yang Engkau ketahui, wahai Tuhan semesta alam.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['masuk mina', 'perkemahan mina', 'karunia']
  },
  {
    id: 'mina-2',
    bab: 'BAB XI - DOA DAN ZIKIR DI MINA',
    kategori: 'mina',
    halamanBuku: 166,
    judul: 'B. Doa Ketika Melontar Jamrah Aqabah (10 Dzulhijjah)',
    deskripsi: 'Dibaca pada setiap lemparan dari 7 butir kerikil yang dilontarkan ke tiang Jamrah Aqabah.',
    arab: 'بِسْمِ اللّٰهِ وَاللّٰهُ أَكْبَرُ، رَجْمًا لِلشَّيْطَانِ وَرِضًا لِلرَّحْمٰنِ. اللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا، وَذَنْبًا مَغْفُورًا، وَسَعْيًا مَشْكُورًا.',
    latin: 'Bismillāhi wallāhu akbar, rajman lisysyaiṭāni wa riḍan lir-raḥmān. Allāhummaj-‘alhu ḥajjan mabrūrā, wa dzamban maghfūrā, wa sa‘yan masykūrā.',
    arti: 'Dengan nama Allah dan Allah Maha Besar, sebagai lemparan kutukan bagi setan dan mencari keridhaan Allah Yang Maha Pengasih. Ya Allah, jadikanlah ibadah haji ini haji yang mabrur, dosa yang diampuni, dan amal usaha yang disyukuri.',
    sumber: 'HR. Ahmad & Ibnu Majah, Kemenhaj RI',
    tags: ['jamrah aqabah', '10 dzulhijjah', 'lempar kerikil']
  },
  {
    id: 'mina-3',
    bab: 'BAB XI - DOA DAN ZIKIR DI MINA',
    kategori: 'mina',
    halamanBuku: 168,
    judul: 'C. Doa Ketika Melontar Jamrah Hari Tasyriq (11, 12, 13 Dzulhijjah)',
    deskripsi: 'Dibaca pada setiap lemparan saat melontar Jamrah Ula, Wusta, dan Aqabah berturut-turut.',
    arab: 'بِسْمِ اللّٰهِ، اَللّٰهُ أَكْبَرُ، رَغْمًا لِلشَّيْطَانِ وَحِزْبِهِ. اللّٰهُمَّ إِيمَانًا بِكِتَابِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ.',
    latin: 'Bismillāhi, Allāhu akbar, raghman lisysyaiṭāni wa ḥizbih. Allāhumma īmānam bikitābika wattibā‘al lisunnati nabiyyika Muḥammadin ṣallallāhu ‘alaihi wa sallam.',
    arti: 'Dengan nama Allah, Allah Maha Besar, penolakan hina terhadap setan dan golongannya. Ya Allah, aku melempar ini karena iman kepada kitab-Mu dan mengikuti sunnah Nabi-Mu Muhammad SAW.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['tasyriq', 'jamrah ula wusta', 'sunnah nabi']
  },
  {
    id: 'mina-4',
    bab: 'BAB XI - DOA DAN ZIKIR DI MINA',
    kategori: 'mina',
    halamanBuku: 169,
    judul: 'D. Doa Sesudah Melontar Jamrah Sughra (Ula) dan Wusta',
    deskripsi: 'Disunnahkan bergeser sedikit ke samping, menghadap kiblat dan mengangkat kedua tangan berdoa panjang.',
    arab: 'الْحَمْدُ لِلّٰهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ. اللّٰهُمَّ لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَىٰ نَفْسِكَ. اللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا، وَعَمَلًا مَشْكُورًا، وَاغْفِرْ لِي وَلِوَالِدَيَّ وَلِإِخْوَانِي الْمُسْلِمِينَ.',
    latin: 'Al-ḥamdu lillāhi ḥamdan katsīran ṭayyiban mubārakan fīh. Allāhumma lā uḥṣī tsanā’an ‘alaika anta kamā atsnaita ‘alā nafsik. Allāhummaj-‘alhu ḥajjan mabrūrā, wa ‘amalan masykūrā, wagh-fir lī wa liwālidayya wa li-ikhwānil-muslimīn.',
    arti: 'Segala puji bagi Allah dengan pujian yang banyak, baik, lagi penuh berkah di dalamnya. Ya Allah, aku tidak sanggup menghitung sanjungan atas-Mu, Engkau adalah sebagaimana sanjungan-Mu atas Zat-Mu sendiri. Ya Allah, jadikanlah haji ini haji mabrur, amal yang disyukuri, dan ampunilah aku, kedua orang tuaku, dan saudara-saudaraku kaum muslimin.',
    sumber: 'Sunnah Nabi SAW (HR. Bukhari no. 1751), Kemenhaj RI',
    tags: ['sesudah melontar', 'menghadap kiblat', 'mustajab']
  },
  {
    id: 'mina-5',
    bab: 'BAB XI - DOA DAN ZIKIR DI MINA',
    kategori: 'mina',
    halamanBuku: 171,
    judul: 'E. Doa Bercukur (Tahallul Awal) Setelah Melontar Jamrah',
    deskripsi: 'Dibaca saat mencukur atau memotong rambut seusai melontar Jamrah Aqabah pada 10 Dzulhijjah.',
    arab: 'الْحَمْدُ لِلّٰهِ الَّذِي بَلَّغَنَا مَنَاسِكَنَا، اللّٰهُمَّ ثَبِّتْنَا عَلَىٰ دِينِكَ، وَتَقَبَّلْ مِنَّا طَاعَتَنَا، وَارْزُقْنَا كُلَّ خَيْرٍ فِي دِينِنَا وَدُنْيَانَا.',
    latin: 'Al-ḥamdu lillāhil-ladzī ballaghanā manāsikanā, Allāhumma tsabbitnā ‘alā dīnika, wa taqabbal minnā ṭā‘atanā, war-zuqnā kulla khairin fī dīninā wa dunyānā.',
    arti: 'Segala puji bagi Allah yang telah menyampaikan kami pada manasik kami. Ya Allah, teguhkanlah kami di atas agama-Mu, terimalah ketaatan kami, dan berilah kami rezeki segala kebaikan dalam urusan agama dan dunia kami.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['tahallul awal', 'cukur mina', '10 dzulhijjah']
  },
  {
    id: 'mina-6',
    bab: 'BAB XI - DOA DAN ZIKIR DI MINA',
    kategori: 'mina',
    halamanBuku: 173,
    judul: 'F. Bacaan Zikir dan Tasbih Selama Mabit di Mina',
    deskripsi: 'Dianjurkan diperbanyak selama berdiam diri (mabit) di tenda Mina pada malam-malam Tasyriq.',
    arab: 'سُبْحَانَ اللّٰهِ، وَالْحَمْدُ لِلّٰهِ، وَلَا إِلٰهَ إِلَّا اللّٰهُ، وَاللّٰهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ. رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.',
    latin: 'Subḥānallāh, wal-ḥamdu lillāh, wa lā ilāha illallāh, wallāhu akbar, wa lā ḥaula wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm. Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ‘adzāban-nār.',
    arti: 'Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, Allah Maha Besar, dan tiada daya dan upaya kecuali dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung. Wahai Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat serta peliharalah kami dari siksa api neraka.',
    sumber: 'QS. Al-Baqarah: 200-201 & Kemenhaj RI',
    tags: ['zikir mina', 'mabit', 'tasyriq']
  },

  // ==========================================
  // BAB XII: DOA THAWAF WADA'
  // ==========================================
  {
    id: 'wada-1',
    bab: 'BAB XII - THAWAF WADA\'',
    kategori: 'thawaf_wada',
    halamanBuku: 176,
    judul: 'A. Doa Thawaf Wada\' (Dibaca Setiap Putaran)',
    deskripsi: 'Dibaca mengelilingi Ka\'bah pada 7 putaran Thawaf Wada\' (thawaf perpisahan sebelum meninggalkan Makkah).',
    arab: 'بِسْمِ اللّٰهِ، اَللّٰهُ أَكْبَرُ. سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ. وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ. اللّٰهُمَّ إِيمَانًا بِكَ وَتَصْدِيقًا بِكِتَابِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ. اللّٰهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هٰذَا الْوَدَاعِ، وَلَا تَجْعَلْهُ آخِرَ الْعَهْدِ بِبَيْتِكَ الْحَرَامِ.',
    latin: 'Bismillāhi, Allāhu akbar. Subḥānallāhi wal-ḥamdu lillāhi wa lā ilāha illallāhu wallāhu akbar, wa lā ḥaula wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm. Waṣ-ṣalātu was-salāmu ‘alā rasūlillāhi ṣallallāhu ‘alaihi wa sallam. Allāhumma īmānam bika wa taṣdīqam bikitābika wattibā‘al lisunnati nabiyyik. Allāhumma innī as-aluka khaira hādzal-wadā‘, wa lā taj‘alhu ākhiral-‘ahdi bibaitikal-ḥarām.',
    arti: 'Dengan nama Allah, Allah Maha Besar. Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, Allah Maha Besar, dan tiada daya dan upaya kecuali dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung. Salawat dan salam semoga tercurah kepada Rasulullah SAW. Ya Allah, aku beribadah dengan iman kepada-Mu, membenarkan kitab-Mu, dan mengikuti sunnah Nabi-Mu. Ya Allah, aku memohon kebaikan perpisahan ini, dan janganlah Engkau jadikan ini sebagai pertemuan terakhirku dengan Rumah Suci-Mu (Ka\'bah).',
    sumber: 'Imam Al-Ghazali (Ihya Ulumiddin 1/329) & Kemenhaj RI',
    tags: ['thawaf wada', 'perpisahan kabah', 'wada']
  },
  {
    id: 'wada-2',
    bab: 'BAB XII - THAWAF WADA\'',
    kategori: 'thawaf_wada',
    halamanBuku: 181,
    judul: 'B. Doa Sesudah Selesai Thawaf Wada\' (Di Depan Pintu Ka\'bah)',
    deskripsi: 'Dibaca dengan khusyuk menghadap Ka\'bah seusai salat sunat 2 rakaat thawaf wada\'.',
    arab: 'اللّٰهُمَّ إِنَّ الْبَيْتَ بَيْتُكَ، وَالْعَبْدَ عَبْدُكَ، وَابْنُ عَبْدِكَ وَابْنُ أَمَتِكَ، حَمَلْتَنِي عَلَىٰ مَا سَخَّرْتَ لِي مِنْ خَلْقِكَ، حَتَّىٰ سَيَّرْتَنِي فِي بِلَادِكَ، وَبَلَّغْتَنِي بِنِعْمَتِكَ حَتَّىٰ أَعَنْتَنِي عَلَىٰ قَضَاءِ مَنَاسِكِي. اللّٰهُمَّ فَلَا تَجْعَلْ هٰذَا آخِرَ الْعَهْدِ مِنْ بَيْتِكَ الْحَرَامِ، وَإِنْ جَعَلْتَهُ فَأَعْوِضْنِي عَنْهُ الْجَنَّةَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ.',
    latin: 'Allāhumma innal-baita baituk, wal-‘abda ‘abduk, wabnu ‘abdika wabnu amatik, ḥamaltanī ‘alā mā sakh-kharta lī min khalqik, ḥattā sayyartanī fī bilādik, wa ballaghtanī bini‘matika ḥattā a‘antanī ‘alā qaḍā’i manāsikī. Allāhumma falā taj‘al hādzā ākhiral-‘ahdi min baitikal-ḥarām, wa in ja‘altahū fa-a‘wiḍnī ‘anhul-jannata biraḥmatika yā arḥamar-rāḥimīn.',
    arti: 'Ya Allah, Rumah ini adalah Rumah-Mu, hamba ini adalah hamba-Mu, anak hamba-Mu yang laki-laki dan anak hamba-Mu yang perempuan. Engkau telah membawaku di atas apa yang Engkau tundukkan dari makhluk-Mu, hingga Engkau memperjalankan aku melintasi negeri-Mu, dan Engkau menyampaikanku dengan nikmat-Mu hingga Engkau menolongku menuntaskan ibadah manasikku. Ya Allah, maka janganlah Engkau jadikan kunjungan ini saat terakhirku dengan Rumah Suci-Mu, dan jika Engkau menjadikannya yang terakhir maka gantikanlah bagiku dengan surga-Mu, dengan rahmat-Mu wahai Dzat Yang Maha Pengasih lagi Maha Penyayang.',
    sumber: 'Imam Asy-Syafi\'i & Imam Al-Baihaqi, Kemenhaj RI',
    tags: ['sesudah wada', 'perpisahan', 'surga', 'kembali ke tanah suci']
  },

  // ==========================================
  // BAB XIII: DOA ZIARAH DI MADINAH AL-MUNAWWARAH
  // ==========================================
  {
    id: 'madinah-masuk',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 185,
    judul: 'A. Doa Memasuki Kota Suci Madinah Munawwarah',
    deskripsi: 'Dibaca saat kendaraan mulai memasuki perbatasan tanah haram Kota Madinah.',
    arab: 'اللّٰهُمَّ هٰذَا حَرَمُ رَسُولِكَ وَحِمَاهُ، فَاجْعَلْهُ لِي وِقَايَةً مِنَ النَّارِ، وَأَمَانًا مِنَ الْعَذَابِ وَسُوءِ الْحِسَابِ. اللّٰهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ، وَارْزُقْنِي فِي زِيَارَةِ قَبْرِ نَبِيِّكَ مَا رَزَقْتَهُ أَوْلِيَاءَكَ وَأَهْلَ طَاعَتِكَ.',
    latin: 'Allāhumma hādzā ḥaramu rasūlika wa ḥimāh, faj‘alhu lī wiqāyatan minan-nār, wa amānam minal-‘adzābi wa sū’il-ḥisāb. Allāhummaf-taḥ lī abwāba raḥmatik, war-zuqnī fī ziyārati qabri nabiyyika mā razaqtahū auliyā’aka wa ahla ṭā‘atik.',
    arti: 'Ya Allah, kota ini adalah tanah haram Rasul-Mu dan benteng perlindungan-Nya, maka jadikanlah ia bagiku perisai dari api neraka, serta pengaman dari siksa dan hisab yang buruk. Ya Allah, bukakanlah pintu-pintu rahmat-Mu untukku, dan berilah aku dalam menziarahi makam Nabi-Mu apa yang telah Engkau karuniakan kepada para kekasih-Mu dan orang-orang yang taat kepada-Mu.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['masuk madinah', 'haram nabawi', 'makam nabi']
  },
  {
    id: 'madinah-nabawi',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 185,
    judul: 'B. Doa Memasuki Masjid Nabawi',
    deskripsi: 'Dibaca saat melangkahkan kaki kanan memasuki Masjid Nabawi (biasanya melalui pintu Bab As-Salam).',
    arab: 'بِسْمِ اللّٰهِ وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللّٰهِ. اللّٰهُمَّ اغْفِرْ لِي ذُنُوبِي وَافْتَحْ لِي أَبْوَابَ رَحْمَتِكَ. رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَلْ لِي مِنْ لَدُنْكَ سُلْطَانًا نَصِيرًا.',
    latin: 'Bismillāhi waṣ-ṣalātu was-salāmu ‘alā rasūlillāh. Allāhummagh-fir lī dzunūbī waftaḥ lī abwāba raḥmatik. Rabbi adkhilnī mudkhala ṣidqin wa akhrijnī mukhraja ṣidqin waj‘al lī min ladunka sulṭānan naṣīrā.',
    arti: 'Dengan nama Allah, serta salawat dan salam atas Rasulullah. Ya Allah, ampunilah dosa-dosaku dan bukakanlah untukku pintu-pintu rahmat-Mu. Wahai Tuhanku, masukkanlah aku ke tempat masuk yang benar dan keluarkanlah aku ke tempat keluar yang benar, dan berikanlah kepadaku dari sisi-Mu kekuasaan yang menolong.',
    sumber: 'HR. Muslim & QS. Al-Isra\': 80, Kemenhaj RI',
    tags: ['masuk nabawi', 'bab salam', 'rahmat']
  },
  {
    id: 'madinah-rasul',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 187,
    judul: 'C. Salam di Depan Makam Rasulullah SAW',
    deskripsi: 'Dibaca dengan suara pelan penuh sopan santun dan takzim saat berdiri berhadapan dengan makam mulia Nabi Muhammad SAW.',
    arab: 'السَّلَامُ عَلَيْكَ يَا رَسُولَ اللّٰهِ، السَّلَامُ عَلَيْكَ يَا خِيْرَةَ اللّٰهِ مِنْ خَلْقِهِ، السَّلَامُ عَلَيْكَ يَا حَبِيبَ اللّٰهِ، أَشْهَدُ أَنَّكَ قَدْ بَلَّغْتَ الرِّسَالَةَ، وَأَدَّيْتَ الْأَمَانَةَ، وَنَصَحْتَ الْأُمَّةَ، وَجَاهَدْتَ فِي اللّٰهِ حَقَّ جِهَادِهِ، فَجَزَاكَ اللّٰهُ عَنَّا أَفْضَلَ مَا جَزَىٰ نَبِيًّا عَنْ أُمَّتِهِ. اللّٰهُمَّ آتِهِ الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ.',
    latin: 'As-salāmu ‘alaika yā rasūlallāh, as-salāmu ‘alaika yā khīratallāhi min khalqih, as-salāmu ‘alaika yā ḥabīballāh, asy-hadu annaka qad ballaghtar-risālah, wa addaital-amānah, wa naṣaḥtal-ummah, wa jāhadta fillāhi ḥaqqa jihādih, fajazākallāhu ‘annā afḍala mā jazā nabiyyan ‘an ummatih. Allāhumma ātihil-wasīlata wal-faḍīlata wab‘atshu maqāmam maḥmūdanil-ladzī wa‘adtah.',
    arti: 'Salam sejahtera atasmu wahai Rasulullah. Salam sejahtera atasmu wahai manusia pilihan Allah dari segenap ciptaan-Nya. Salam sejahtera atasmu wahai kekasih Allah. Aku bersaksi sungguh engkau telah menyampaikan risalah, menunaikan amanah, memberi nasihat kepada umat, dan berjuang di jalan Allah dengan sebenar-benarnya perjuangan. Maka semoga Allah membalasmu dari kami dengan balasan paling mulia yang pernah diberikan kepada seorang Nabi atas umatnya. Ya Allah, karuniakanlah kepadanya wasilah dan keutamaan, dan bangkitkanlah ia pada kedudukan terpuji yang telah Engkau janjikan.',
    sumber: 'Imam An-Nawawi (Al-Idhah fī Manāsikil-Hajj) & Kemenhaj RI',
    tags: ['makam rasulullah', 'salam nabi', 'nabawi', 'wasilah']
  },
  {
    id: 'madinah-abubakar',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 190,
    judul: 'D. Salam di Depan Makam Sayyidina Abu Bakar Ash-Shiddiq RA',
    deskripsi: 'Bergeser satu langkah ke sebelah kanan makam Rasulullah SAW untuk memberi salam kepada khalifah pertama.',
    arab: 'السَّلَامُ عَلَيْكَ يَا خَلِيفَةَ رَسُولِ اللّٰهِ، السَّلَامُ عَلَيْكَ يَا صَاحِبَ رَسُولِ اللّٰهِ فِي الْغَارِ، السَّلَامُ عَلَيْكَ يَا أَبَا بَكْرٍ الصِّدِّيقَ، جَزَاكَ اللّٰهُ عَنْ أُمَّةِ مُحَمَّدٍ خَيْرَ الْجَزَاءِ.',
    latin: 'As-salāmu ‘alaika yā khalīfata rasūlillāh, as-salāmu ‘alaika yā ṣāḥiba rasūlillāhi fil-ghār, as-salāmu ‘alaika yā Abā Bakriniṣ-Ṣiddīq, jazākallāhu ‘an ummati Muḥammadin khairal-jazā’.',
    arti: 'Salam sejahtera atasmu wahai pengganti (khalifah) Rasulullah. Salam sejahtera atasmu wahai sahabat setia Rasulullah di dalam gua. Salam sejahtera atasmu wahai Abu Bakar Ash-Shiddiq. Semoga Allah membalasmu atas perjuanganmu bagi umat Nabi Muhammad dengan sebaik-baik balasan.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['abu bakar', 'makam sahabat', 'khalifah']
  },
  {
    id: 'madinah-umar',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 191,
    judul: 'E. Salam di Depan Makam Sayyidina Umar bin Khattab RA',
    deskripsi: 'Bergeser satu langkah lagi ke kanan untuk menyampaikan salam kepada Amirul Mukminin kedua.',
    arab: 'السَّلَامُ عَلَيْكَ يَا أَمِيرَ الْمُؤْمِنِينَ، السَّلَامُ عَلَيْكَ يَا عُمَرَ بْنَ الْخَطَّابِ، السَّلَامُ عَلَيْكَ يَا مُظْهِرَ الْإِسْلَامِ وَالْفَارُوقَ، جَزَاكَ اللّٰهُ عَنَّا وَعَنْ أُمَّةِ الْإِسْلَامِ خَيْرَ الْجَزَاءِ.',
    latin: 'As-salāmu ‘alaika yā amīral-mu’minīn, as-salāmu ‘alaika yā ‘Umarabnal-Khaṭṭāb, as-salāmu ‘alaika yā muẓhiral-islāmi wal-fārūq, jazākallāhu ‘annā wa ‘an ummatil-islāmi khairal-jazā’.',
    arti: 'Salam sejahtera atasmu wahai Amirul Mukminin. Salam sejahtera atasmu wahai Umar bin Khattab. Salam sejahtera atasmu wahai penegak syiar Islam yang memisahkan kebenaran dari kebatilan (Al-Faruq). Semoga Allah membalas jasamu dari kami dan dari segenap umat Islam dengan balasan terbaik.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['umar bin khattab', 'al faruq', 'khalifah']
  },
  {
    id: 'madinah-raudhah',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 192,
    judul: 'F. Doa di Taman Surga (Raudhah Syarifah)',
    deskripsi: 'Dibaca saat menunaikan salat dan munajat di Raudhah antara mimbar dan makam Rasulullah SAW.',
    arab: 'الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ حَمْدًا يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيدَهُ. يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَلِعَظِيمِ سُلْطَانِكَ. اللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ. اللّٰهُمَّ إِنَّ هٰذِهِ رَوْضَةٌ مِنْ رِيَاضِ الْجَنَّةِ، فَأَسْأَلُكَ أَنْ تُحَرِّمَ جَسَدِي عَلَى النَّارِ، وَأَنْ تَغْفِرَ ذَنْبِي، وَأَنْ تُفَرِّجَ كَرْبِي، وَأَنْ تَقْضِيَ حَاجَتِي، يَا أَرْحَمَ الرَّاحِمِينَ.',
    latin: 'Al-ḥamdu lillāhi rabbil-‘ālamīna ḥamdan yuwāfī ni‘amahū wa yukāfi’u mazīdah. Yā rabbanā lakal-ḥamdu kamā yambaghī lijalāli wajhika wa li‘aẓīmi sulṭānik. Allāhumma ṣalli wa sallim ‘alā sayyidinā Muḥammadin wa ‘alā āli sayyidinā Muḥammad. Allāhumma inna hādzihī rauḍatum min riyāḍil-jannati, fa-as-aluka an tuḥarrima jasadī ‘alan-nār, wa an taghfira dzambī, wa an tufarrija karbī, wa an taqḍiya ḥājatī, yā arḥamar-rāḥimīn.',
    arti: 'Segala puji bagi Allah Tuhan semesta alam, pujian yang sebanding dengan nikmat-nikmat-Nya dan menjamin tambahannya. Wahai Tuhan kami, bagi-Mu segala puji sebagaimana layaknya bagi keagungan Zat-Mu dan kebesaran kekuasaan-Mu. Ya Allah limpahkanlah salawat dan salam kepada junjungan kami Nabi Muhammad dan keluarganya. Ya Allah, sungguh tempat ini adalah taman dari taman-taman surga, maka aku memohon kepada-Mu agar Engkau mengharamkan jasadku dari api neraka, mengampuni dosaku, melapangkan kesusahanku, dan mengabulkan segala hajatku, wahai Dzat Yang Maha Pengasih dari segala yang mengasihi.',
    sumber: 'HR. Bukhari no. 1196 & Kemenhaj RI',
    tags: ['raudhah', 'taman surga', 'mustajab', 'nabawi']
  },
  {
    id: 'madinah-baqi',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 200,
    judul: 'G. Doa Salam Waktu Ziarah di Makam Baqi\'',
    deskripsi: 'Dibaca saat menziarahi makam para sahabat dan keluarga Nabi (Ahlul Bait) di Pemakaman Baqi\'.',
    arab: 'السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ، وَإِنَّا إِنْ شَاءَ اللّٰهُ بِكُمْ لَاحِقُونَ. يَرْحَمُ اللّٰهُ الْمُسْتَقْدِمِينَ مِنَّا وَالْمُسْتَأْخِرِينَ. نَسْأَلُ اللّٰهَ لَنَا وَلَكُمُ الْعَافِيَةَ. اللّٰهُمَّ لَا تَحْرِمْنَا أَجْرَهُمْ وَلَا تَفْتِنَّا بَعْدَهُمْ وَاغْفِرْ لَنَا وَلَهُمْ.',
    latin: 'As-salāmu ‘alaikum dāra qaumim mu’minīn, wa innā in syā’allāhu bikum lāḥiqūn. Yarḥamullāhul-mustaqdimīna minnā wal-musta’khirīn. Nas-alullāha lanā wa lakumul-‘āfiyah. Allāhumma lā taḥrimnā ajrahum wa lā taftinnā ba‘dahum wagh-fir lanā wa lahum.',
    arti: 'Semoga keselamatan tercurah atas kalian wahai para penghuni kubur kaum beriman. Dan sesungguhnya kami, insya Allah, akan menyusul kalian. Semoga Allah merahmati orang-orang terdahulu di antara kita dan orang-orang yang terkemudian. Kami memohon keselamatan bagi kami dan bagi kalian. Ya Allah, janganlah Engkau halangi kami dari pahala mereka, janganlah Engkau timbulkan fitnah sesudah mereka, dan ampunilah kami serta mereka.',
    sumber: 'HR. Muslim no. 974, Kemenhaj RI',
    tags: ['baqi', 'ziarah makam', 'ahlul bait']
  },
  {
    id: 'madinah-utsman',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 201,
    judul: 'H. Doa Salam Kepada Sayyidina Utsman bin Affan RA',
    deskripsi: 'Dibaca saat berdiri di depan makam Sayyidina Utsman bin Affan RA di tengah Pemakaman Baqi\'.',
    arab: 'السَّلَامُ عَلَيْكَ يَا ذَا النُّورَيْنِ، السَّلَامُ عَلَيْكَ يَا عُثْمَانَ بْنَ عَفَّانَ، السَّلَامُ عَلَيْكَ يَا ثَالِثَ الْخُلَفَاءِ الرَّاشِدِينَ، السَّلَامُ عَلَيْكَ يَا جَامِعَ الْقُرْآنِ. جَزَاكَ اللّٰهُ عَنْ أُمَّةِ مُحَمَّدٍ خَيْرَ الْجَزَاءِ.',
    latin: 'As-salāmu ‘alaika yā dzan-nūrain, as-salāmu ‘alaika yā ‘Utsmānabna ‘Affān, as-salāmu ‘alaika yā tsālitsal-khulafā’ir-rāsyidīn, as-salāmu ‘alaika yā jāmi‘al-qur’ān. Jazākallāhu ‘an ummati Muḥammadin khairal-jazā’.',
    arti: 'Salam sejahtera atasmu wahai pemilik dua cahaya (Dzun Nurain). Salam sejahtera atasmu wahai Utsman bin Affan. Salam sejahtera atasmu wahai khalifah rasyidin yang ketiga. Salam sejahtera atasmu wahai penghimpun mushaf Al-Qur\'an. Semoga Allah membalas jasamu dari umat Nabi Muhammad dengan balasan yang sebaik-baiknya.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['utsman bin affan', 'dzun nurain', 'baqi']
  },
  {
    id: 'madinah-uhud',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 203,
    judul: 'I. Salam Kepada Sayyidina Hamzah & Mush\'ab bin Umair RA',
    deskripsi: 'Dibaca saat menziarahi makam Singa Allah Sayyidina Hamzah dan Mush\'ab bin Umair di kaki Gunung Uhud.',
    arab: 'السَّلَامُ عَلَيْكَ يَا سَيِّدَ الشُّهَدَاءِ، السَّلَامُ عَلَيْكَ يَا حَمْزَةَ بْنَ عَبْدِ الْمُطَّلِبِ يَا عَمَّ رَسُولِ اللّٰهِ وَأَسَدَ اللّٰهِ وَأَسَدَ رَسُولِهِ. السَّلَامُ عَلَيْكَ يَا مُصْعَبَ بْنَ عُمَيْرٍ. جَزَاكُمَا اللّٰهُ عَنِ الْإِسْلَامِ وَأَهْلِهِ أَفْضَلَ الْجَزَاءِ.',
    latin: 'As-salāmu ‘alaika yā sayyidasy-syuhadā’, as-salāmu ‘alaika yā Ḥamzatabna ‘Abdil-Muṭṭalib yā ‘amma rasūlillāhi wa asadallāhi wa asada rasūlih. As-salāmu ‘alaika yā Muṣ‘ababna ‘Umair. Jazākumallāhu ‘anil-islāmi wa ahlihī afḍalal-jazā’.',
    arti: 'Salam sejahtera atasmu wahai penghulu para syuhada. Salam sejahtera atasmu wahai Hamzah bin Abdul Muthalib, paman Rasulullah, singa Allah dan singa Rasul-Nya. Salam sejahtera atasmu wahai Mush\'ab bin Umair. Semoga Allah membalas kalian berdua atas jasa bagi agama Islam dan kaumnya dengan balasan yang paling utama.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['hamzah', 'singa allah', 'uhud', 'mus\'ab']
  },
  {
    id: 'madinah-syuhada-uhud',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 204,
    judul: 'J. Doa Kepada Seluruh Syuhada Perang Uhud',
    deskripsi: 'Dibaca di depan kompleks pemakaman syuhada Uhud (70 sahabat yang gugur).',
    arab: 'السَّلَامُ عَلَيْكُمْ يَا شُهَدَاءَ أُحُدٍ، سَلَامٌ عَلَيْكُمْ بِمَا صَبَرْتُمْ فَنِعْمَ عُقْبَى الدَّارِ. أَشْهَدُ أَنَّكُمْ جَاهَدْتُمْ فِي اللّٰهِ حَقَّ جِهَادِهِ، حَتَّىٰ أَتَاكُمُ الْيَقِينُ. اللّٰهُمَّ اجْزِهِمْ عَنَّا أَفْضَلَ مَا جَزَيْتَ بِهِ شُهَدَاءَ أُمَّةِ مُحَمَّدٍ، وَاحْشُرْنَا فِي زُمْرَتِهِمْ.',
    latin: 'As-salāmu ‘alaikum yā syuhadā’a Uḥud, salāmun ‘alaikum bimā ṣabartum fani‘ma ‘uqbad-dār. Asy-hadu annakum jāhadtum fillāhi ḥaqqa jihādih, ḥattā atākumul-yaqīn. Allāhummaj-zihim ‘annā afḍala mā jazaita bihī syuhadā’a ummati Muḥammad, waḥ-syurnā fī zumratihim.',
    arti: 'Salam sejahtera atas kalian wahai para syuhada Uhud, keselamatan atas kalian berkat kesabaran kalian, maka alangkah nikmatnya tempat kesudahan itu. Aku bersaksi bahwa kalian telah berjihad di jalan Allah dengan sebenar-benarnya jihad hingga kematian menjemput kalian. Ya Allah, balaslah mereka dari kami dengan balasan paling mulia yang pernah Engkau berikan kepada para syuhada umat Nabi Muhammad, dan kumpulkanlah kami dalam rombongan mereka.',
    sumber: 'QS. Ar-Ra\'d: 24 & Kemenhaj RI',
    tags: ['syuhada uhud', 'jihad', 'kesabaran']
  },
  {
    id: 'madinah-wada',
    bab: 'BAB XIII - ZIARAH MADINAH MUNAWWARAH',
    kategori: 'madinah',
    halamanBuku: 205,
    judul: 'K. Doa Ketika Meninggalkan Madinah / Selesai Ziarah Wada\'',
    deskripsi: 'Dibaca di Masjid Nabawi saat bersiap meninggalkan Madinah menuju Makkah atau kembali ke tanah air.',
    arab: 'اللّٰهُمَّ لَا تَجْعَلْ هٰذَا آخِرَ الْعَهْدِ بِحَرَمِ رَسُولِكَ وَمَسْجِدِهِ، وَيَسِّرْ لِيَ الْعَوْدَ إِلَيْهِ سَبِيلًا سَهْلَةً سَالِمًا غَانِمًا. اللّٰهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَارْزُقْنِي شَفَاعَتَهُ يَوْمَ الْقِيَامَةِ، وَأَسْأَلُكَ الْمَوْتَ فِي بَلَدِهِ، يَا أَرْحَمَ الرَّاحِمِينَ.',
    latin: 'Allāhumma lā taj‘al hādzā ākhiral-‘ahdi biḥarami rasūlika wa masjidih, wa yassir liyal-‘auda ilaihi sabīlan sahlatan sāliman ghānimā. Allāhumma ṣalli ‘alā sayyidinā Muḥammadin war-zuqnī syafā‘atahū yaumal-qiyāmah, wa as-alukal-mauta fī baladih, yā arḥamar-rāḥimīn.',
    arti: 'Ya Allah, janganlah Engkau jadikan perjumpaan ini sebagai kali terakhirku dengan tanah haram Rasul-Mu dan masjid-Nya. Dan mudahkanlah jalanku untuk kembali lagi ke sini dalam keadaan selamat dan memperoleh berkah. Ya Allah, limpahkanlah rahmat kepada junjungan kami Nabi Muhammad, berilah aku syafaatnya pada hari kiamat, dan aku memohon kematian di negerinya (Madinah), wahai Dzat Yang Maha Pengasih lagi Maha Penyayang.',
    sumber: 'Imam Malik & Imam An-Nawawi, Kemenhaj RI',
    tags: ['ziarah wada', 'perpisahan madinah', 'syafaat']
  },

  // ==========================================
  // BAB XIV: DOA KETIKA TIBA DI RUMAH / KAMPUNG HALAMAN
  // ==========================================
  {
    id: 'pulang-1',
    bab: 'BAB XIV - TIBA DI RUMAH / KAMPUNG HALAMAN',
    kategori: 'kepulangan',
    halamanBuku: 207,
    judul: 'A. Doa Tiba di Kampung Halaman (Setelah Salat Sunat Safar)',
    deskripsi: 'Dibaca seusai salat sunat 2 rakaat di masjid terdekat dari rumah sebagai tanda syukur telah tiba dengan selamat.',
    arab: 'الْحَمْدُ لِلّٰهِ الَّذِي نَصَرَنِي بِقَضَاءِ نُسُكِي، وَحَفَظَنِي مِنْ وَعْثَاءِ السَّفَرِ حَتَّىٰ أَعُودَ إِلَىٰ أَهْلِي. اللّٰهُمَّ بَارِكْ فِي حَيَاتِي بَعْدَ الْحَجِّ، وَاجْعَلْنِي مِنَ الصَّالِحِينَ.',
    latin: 'Al-ḥamdu lillāhil-ladzī naṣaranī biqaḍā’i nusukī, wa ḥafaẓanī min wa‘tsā’is-safari ḥattā a‘ūda ilā ahlī. Allāhumma bārik fī ḥayātī ba‘dal-ḥajj, waj‘alnī minaṣ-ṣāliḥīn.',
    arti: 'Segala puji bagi Allah yang telah menolongku menyelesaikan ibadah manasikku, dan telah memeliharaku dari kelelahan perjalanan sehingga aku kembali kepada keluargaku. Ya Allah, berkahilah hidupku setelah menunaikan haji, dan jadikanlah aku termasuk golongan orang-orang yang saleh.',
    sumber: 'Buku Doa & Dzikir Kemenhaj RI',
    tags: ['tiba kampung halaman', 'selesai haji', 'syukur selamat']
  },
  {
    id: 'pulang-2',
    bab: 'BAB XIV - TIBA DI RUMAH / KAMPUNG HALAMAN',
    kategori: 'kepulangan',
    halamanBuku: 209,
    judul: 'B. Doa Memasuki Rumah Setelah Pulang Haji / Umrah',
    deskripsi: 'Dibaca saat melangkahkan kaki memasuki pintu rumah berjumpa kembali dengan sanak keluarga.',
    arab: 'تَوْبًا تَوْبًا، لِرَبِّنَا أَوْبًا، لَا يُغَادِرُ عَلَيْنَا حَوْبًا. الْحَمْدُ لِلّٰهِ الَّذِي رَزَقَنَا الْعَوْدَ سَالِمِينَ، غَانِمِينَ، مَبْرُورِينَ.',
    latin: 'Tauban taubā, lirabbinā aubā, lā yughādiru ‘alainā ḥaubā. Al-ḥamdu lillāhil-ladzī razaqanal-‘auda sālimīn, ghānimīn, mabrūrīn.',
    arti: 'Kami bertaubat, kami bertaubat, kepada Tuhan kami kami kembali, taubat yang tidak meninggalkan dosa lagi bagi kami. Segala puji bagi Allah yang telah menganugerahkan kepulangan kepada kami dalam keadaan selamat, beruntung pahala, dan meraih haji yang mabrur.',
    sumber: 'HR. Ibnu Abbas RA & Ahmad, Kemenhaj RI',
    tags: ['masuk rumah', 'taubat', 'haji mabrur']
  }
];
