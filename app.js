/**
 * Aplikasi Doa & Zikir Haji dan Umrah
 * Interaktif, Aksesibel untuk Lansia, Ramah Ibadah Lapangan
 */

// State Aplikasi
const state = {
  kategoriAktif: 'semua',
  searchQuery: '',
  favoritList: JSON.parse(localStorage.getItem('haji_doa_favorit') || '[]'),
  
  // Preferensi Aksesibilitas
  fontSizeLevel: parseInt(localStorage.getItem('haji_font_level') || '2'), // 0: Kecil, 1: Sedang, 2: Besar, 3: Ekstra Besar (Lansia)
  fontArabic: localStorage.getItem('haji_font_arabic') || "'Amiri', serif",
  viewMode: localStorage.getItem('haji_view_mode') || 'lengkap', // 'lengkap', 'arab_saja', 'latin_arti'
  theme: localStorage.getItem('haji_theme') || 'warm', // 'warm', 'clean', 'night'
  
  // Audio State
  audioActiveId: null,
  isPlaying: false,
  audioRepeat: 1, // 1x, 3x, loop (999)
  currentRepeatCount: 0,
  audioSpeed: 1.0,
  
  // Mode Ibadah (Tawaf & Sa'i Companion)
  worshipModeActive: false,
  worshipType: 'thawaf', // 'thawaf' or 'sai'
  worshipRound: 1, // 1 to 7
  worshipDzikirCount: 0,
  wakeLock: null,
  worshipAudioPlaying: false,
  worshipAudioRepeat: 1, // 1x, 3x, loop (999)
  worshipRepeatCount: 0
};

// Font size mapping (sangat ramah lansia pada level 2 dan 3)
const FONT_SCALES = [
  { label: 'Kecil', arabic: '24px', arabicLine: '2.0', latin: '14px', trans: '13px' },
  { label: 'Sedang', arabic: '28px', arabicLine: '2.2', latin: '16px', trans: '15px' },
  { label: 'Besar (Nyaman)', arabic: '34px', arabicLine: '2.4', latin: '18px', trans: '17px' },
  { label: 'Ekstra Besar (Lansia)', arabic: '42px', arabicLine: '2.6', latin: '21px', trans: '19px' }
];

// Inisialisasi Aplikasi Saat Halaman Selesai Dimuat
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  applyFontSize(state.fontSizeLevel);
  applyArabicFont(state.fontArabic);
  applyViewMode(state.viewMode);

  renderKategoriChips();
  renderDoaList();
  setupEventListeners();
  initLucideIcons();
  setupAudioVoices();
});

// Utility render icons
function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 1. Render Menu Kategori / Bab
function renderKategoriChips() {
  const container = document.getElementById('kategori-container');
  if (!container) return;

  container.innerHTML = KATEGORI_DOA.map(kat => {
    const isActive = state.kategoriAktif === kat.id;
    const count = kat.id === 'semua' 
      ? DATA_DOA.length 
      : kat.id === 'favorit'
        ? state.favoritList.length
        : DATA_DOA.filter(d => d.kategori === kat.id).length;

    return `
      <button 
        onclick="setKategori('${kat.id}')"
        class="flex-shrink-0 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
          isActive 
            ? 'bg-[#2D4F38] text-white border-[#2D4F38] shadow-md shadow-[#2D4F38]/20' 
            : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
        }"
      >
        <i data-lucide="${kat.icon}" class="w-4 h-4"></i>
        <span>${kat.label}</span>
        <span class="text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[var(--bg-chip)] text-[var(--text-subtle)]'}">
          ${count}
        </span>
      </button>
    `;
  }).join('');

  initLucideIcons();
}

function setKategori(katId) {
  state.kategoriAktif = katId;
  renderKategoriChips();
  renderDoaList();
  // Scroll smooth ke atas daftar doa
  const listEl = document.getElementById('doa-list-container');
  if (listEl) {
    listEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// 2. Render List Doa
function renderDoaList() {
  const container = document.getElementById('doa-list-container');
  const emptyState = document.getElementById('empty-state');
  if (!container) return;

  // Filter Data
  let filtered = DATA_DOA.filter(doa => {
    // Filter Kategori
    if (state.kategoriAktif === 'favorit') {
      if (!state.favoritList.includes(doa.id)) return false;
    } else if (state.kategoriAktif !== 'semua') {
      if (doa.kategori !== state.kategoriAktif) return false;
    }

    // Filter Search
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const matchJudul = doa.judul.toLowerCase().includes(q);
      const matchLatin = doa.latin.toLowerCase().includes(q);
      const matchArti = doa.arti.toLowerCase().includes(q);
      const matchBab = doa.bab.toLowerCase().includes(q);
      const matchTags = doa.tags && doa.tags.some(t => t.toLowerCase().includes(q));
      if (!matchJudul && !matchLatin && !matchArti && !matchBab && !matchTags) return false;
    }

    return true;
  });

  const countEl = document.getElementById('total-doa-count');
  if (countEl) {
    countEl.textContent = `${filtered.length} dari ${DATA_DOA.length} Doa Ditampilkan`;
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  container.innerHTML = filtered.map(doa => {
    const isFav = state.favoritList.includes(doa.id);
    const isCurrentlyPlaying = state.audioActiveId === doa.id && state.isPlaying;

    return `
      <article class="sacred-card p-5 sm:p-7 relative overflow-hidden transition-all duration-300 ${isCurrentlyPlaying ? 'ring-2 ring-[#B38E46]' : ''}" id="doa-card-${doa.id}">
        <!-- Header Kartu Doa -->
        <div class="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-[var(--border-subtle)]">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-[var(--text-main)] leading-snug">
              ${doa.judul}
            </h3>
            <p class="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
              ${doa.deskripsi}
            </p>
          </div>

          <!-- Aksi Cepat: Simpan & Salin -->
          <div class="flex items-center gap-1.5 flex-shrink-0">
            <button 
              onclick="toggleFavorit('${doa.id}')" 
              class="p-2.5 rounded-full transition-colors ${isFav ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' : 'text-[var(--text-subtle)] hover:bg-[var(--bg-chip)]'}"
              title="${isFav ? 'Hapus dari tersimpan' : 'Simpan doa ini'}"
            >
              <i data-lucide="${isFav ? 'bookmark-check' : 'bookmark'}" class="w-5 h-5"></i>
            </button>
            <button 
              onclick="copyDoaText('${doa.id}')" 
              class="p-2.5 rounded-full text-[var(--text-subtle)] hover:bg-[var(--bg-chip)] transition-colors"
              title="Salin Teks Doa"
            >
              <i data-lucide="copy" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <!-- Bagian Lafal Arab -->
        <div class="my-5 p-4 sm:p-6 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)]">
          <p class="font-arabic mb-2 select-text" style="font-family: ${state.fontArabic}; font-size: var(--arabic-size); line-height: var(--arabic-line-height);">
            ${doa.arab}
          </p>
        </div>

        <!-- Bagian Transliterasi Latin -->
        <div class="my-4 ${state.viewMode === 'arab_saja' ? 'hidden' : ''}">
          <div class="text-xs font-bold uppercase tracking-wider text-[#2D4F38] dark:text-[#93CFA9] mb-1 flex items-center gap-1">
            <i data-lucide="languages" class="w-3.5 h-3.5"></i> Bacaan Latin
          </div>
          <p class="font-latin-reading italic font-medium leading-relaxed">
            "${doa.latin}"
          </p>
        </div>

        <!-- Bagian Terjemahan Arti -->
        <div class="mt-4 pt-3 border-t border-dashed border-[var(--border-subtle)] ${state.viewMode === 'arab_saja' ? 'hidden' : ''}">
          <div class="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)] mb-1">
            Artinya:
          </div>
          <p class="font-translation">
            ${doa.arti}
          </p>
          <div class="mt-3 flex items-center justify-between text-xs text-[var(--text-subtle)]">
            <span class="flex items-center gap-1">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-[#2D4F38]"></i> ${doa.sumber}
            </span>
          </div>
        </div>

        <!-- Footer Tombol Aksi Doa: Audio Play & Mode Pelafalan -->
        <div class="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between flex-wrap gap-3">
          <button 
            onclick="playAudioDoa('${doa.id}')"
            class="btn-touch-large text-sm px-5 py-2.5 rounded-xl transition-all ${
              isCurrentlyPlaying
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-[#2D4F38] hover:bg-[#223D2B] text-white shadow-sm'
            }"
          >
            <i data-lucide="${isCurrentlyPlaying ? 'pause' : 'volume-2'}" class="w-4 h-4"></i>
            <span>${isCurrentlyPlaying ? 'Jeda Suara Doa' : 'Dengarkan Suara Doa'}</span>
            ${isCurrentlyPlaying ? `
              <div class="flex items-center gap-1 ml-2">
                <span class="sound-wave-bar bg-white"></span>
                <span class="sound-wave-bar bg-white"></span>
                <span class="sound-wave-bar bg-white"></span>
              </div>
            ` : ''}
          </button>

          <div class="flex items-center gap-2">
            <button 
              onclick="openPracticeModal('${doa.id}')"
              class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-[var(--border-strong)] text-[var(--text-muted)] hover:bg-[var(--bg-chip)] transition-all flex items-center gap-1.5"
            >
              <i data-lucide="maximize-2" class="w-4 h-4"></i>
              <span>Fokus Baca Layar Penuh</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  initLucideIcons();
}

// 3. Audio Player Engine (Web Speech Synthesis & Voice Fallbacks)
let synth = window.speechSynthesis;
let currentUtterance = null;
let arabicVoices = [];

function setupAudioVoices() {
  if (!synth) return;
  function updateVoices() {
    const voices = synth.getVoices();
    arabicVoices = voices.filter(v => v.lang.startsWith('ar') || v.lang.includes('SA') || v.name.toLowerCase().includes('arabic'));
  }
  updateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = updateVoices;
  }
}

function playAudioDoa(id) {
  const doa = DATA_DOA.find(d => d.id === id);
  if (!doa) return;

  // Jika sedang main doa yang sama, toggle pause/play
  if (state.audioActiveId === id && state.isPlaying) {
    pauseAudio();
    return;
  }

  // Set doa baru
  state.audioActiveId = id;
  state.currentRepeatCount = 1;
  speakDoa(doa);
}

function speakDoa(doa) {
  if (!synth) {
    alert('Browser Anda tidak mendukung fitur pemutar suara otomatis.');
    return;
  }

  synth.cancel(); // Hentikan yang sebelumnya

  const textToSpeak = doa.arab;
  currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
  currentUtterance.lang = 'ar-SA';
  currentUtterance.rate = state.audioSpeed;

  if (arabicVoices.length > 0) {
    currentUtterance.voice = arabicVoices[0];
  }

  currentUtterance.onstart = () => {
    state.isPlaying = true;
    updateFloatingPlayer(doa);
    renderDoaList();
  };

  currentUtterance.onend = () => {
    if (state.currentRepeatCount < state.audioRepeat) {
      state.currentRepeatCount++;
      setTimeout(() => {
        if (state.isPlaying && state.audioActiveId === doa.id) {
          speakDoa(doa);
        }
      }, 800);
    } else {
      state.isPlaying = false;
      renderDoaList();
      hideFloatingPlayer();
    }
  };

  currentUtterance.onerror = (e) => {
    console.warn('Speech error:', e);
    state.isPlaying = false;
    renderDoaList();
  };

  synth.speak(currentUtterance);
}

function pauseAudio() {
  if (synth && state.isPlaying) {
    synth.cancel();
    state.isPlaying = false;
    renderDoaList();
    const playBtn = document.getElementById('player-play-btn');
    if (playBtn) playBtn.innerHTML = '<i data-lucide="play" class="w-5 h-5"></i>';
    initLucideIcons();
  }
}

function resumeAudio() {
  if (state.audioActiveId) {
    const doa = DATA_DOA.find(d => d.id === state.audioActiveId);
    if (doa) {
      speakDoa(doa);
    }
  }
}

function stopAudio() {
  if (synth) {
    synth.cancel();
    state.isPlaying = false;
    state.audioActiveId = null;
    hideFloatingPlayer();
    renderDoaList();
  }
}

function setAudioRepeat(count) {
  state.audioRepeat = count;
  const badge = document.getElementById('player-repeat-badge');
  if (badge) {
    badge.textContent = count === 999 ? '∞' : `${count}x`;
  }
}

function setAudioSpeed(speed) {
  state.audioSpeed = speed;
  const label = document.getElementById('player-speed-label');
  if (label) {
    label.textContent = `${speed}x`;
  }
  if (state.isPlaying && state.audioActiveId) {
    const doa = DATA_DOA.find(d => d.id === state.audioActiveId);
    if (doa) speakDoa(doa);
  }
}

function updateFloatingPlayer(doa) {
  const player = document.getElementById('floating-player');
  if (!player) return;

  player.classList.remove('translate-y-40', 'opacity-0', 'pointer-events-none');
  document.getElementById('player-title').textContent = doa.judul;
  const katObj = KATEGORI_DOA.find(k => k.id === doa.kategori);
  document.getElementById('player-category').textContent = katObj ? katObj.label.replace(/^\d+\.\s*/, '') : 'Doa Manasik';
  document.getElementById('player-counter-badge').textContent = `Putaran ${state.currentRepeatCount} dari ${state.audioRepeat === 999 ? '∞' : state.audioRepeat}x`;
  
  const playBtn = document.getElementById('player-play-btn');
  if (playBtn) {
    playBtn.innerHTML = '<i data-lucide="pause" class="w-5 h-5"></i>';
  }
  initLucideIcons();
}

function hideFloatingPlayer() {
  const player = document.getElementById('floating-player');
  if (player) {
    player.classList.add('translate-y-40', 'opacity-0', 'pointer-events-none');
  }
}

// 4. Pengaturan Aksesibilitas: Font Size, Arab Font, View Mode & Theme
function changeFontSize(delta) {
  let newLevel = state.fontSizeLevel + delta;
  if (newLevel < 0) newLevel = 0;
  if (newLevel >= FONT_SCALES.length) newLevel = FONT_SCALES.length - 1;
  applyFontSize(newLevel);
}

function applyFontSize(level) {
  state.fontSizeLevel = level;
  localStorage.setItem('haji_font_level', level.toString());
  
  const scale = FONT_SCALES[level];
  document.documentElement.style.setProperty('--arabic-size', scale.arabic);
  document.documentElement.style.setProperty('--arabic-line-height', scale.arabicLine);
  document.documentElement.style.setProperty('--latin-size', scale.latin);
  document.documentElement.style.setProperty('--trans-size', scale.trans);

  const labelElem = document.getElementById('font-scale-indicator');
  if (labelElem) {
    labelElem.textContent = scale.label;
  }
}

function applyArabicFont(fontFamily) {
  state.fontArabic = fontFamily;
  localStorage.setItem('haji_font_arabic', fontFamily);
  document.documentElement.style.setProperty('--font-arabic', fontFamily);
  renderDoaList();
}

function applyViewMode(mode) {
  state.viewMode = mode;
  localStorage.setItem('haji_view_mode', mode);
  
  // Update tombol active di modal settings
  ['lengkap', 'arab_saja', 'latin_arti'].forEach(m => {
    const btn = document.getElementById(`btn-mode-${m}`);
    if (btn) {
      if (m === mode) {
        btn.classList.add('bg-[#2D4F38]', 'text-white');
        btn.classList.remove('bg-[var(--bg-chip)]', 'text-[var(--text-main)]');
      } else {
        btn.classList.remove('bg-[#2D4F38]', 'text-white');
        btn.classList.add('bg-[var(--bg-chip)]', 'text-[var(--text-main)]');
      }
    }
  });

  renderDoaList();
}

function applyTheme(themeName) {
  state.theme = themeName;
  localStorage.setItem('haji_theme', themeName);
  document.body.className = '';
  if (themeName === 'clean') {
    document.body.classList.add('theme-clean');
  } else if (themeName === 'night') {
    document.body.classList.add('theme-night');
  }
}

// 5. Bookmark & Salin Teks
function toggleFavorit(id) {
  if (state.favoritList.includes(id)) {
    state.favoritList = state.favoritList.filter(item => item !== id);
    showToast('Doa dihapus dari koleksi tersimpan');
  } else {
    state.favoritList.push(id);
    showToast('✓ Doa berhasil disimpan ke favorit');
  }
  localStorage.setItem('haji_doa_favorit', JSON.stringify(state.favoritList));
  renderKategoriChips();
  renderDoaList();
}

function copyDoaText(id) {
  const doa = DATA_DOA.find(d => d.id === id);
  if (!doa) return;

  const fullText = `${doa.judul}\n\n${doa.arab}\n\nLatin:\n${doa.latin}\n\nArtinya:\n${doa.arti}\n\n(Sumber: ${doa.sumber})`;
  navigator.clipboard.writeText(fullText).then(() => {
    showToast('Teks doa lengkap berhasil disalin ke clipboard');
  }).catch(() => {
    showToast('Gagal menyalin teks');
  });
}

// 6. Mode Lapangan: Companion Thawaf & Sa'i (Worship Companion)
function openWorshipMode(type = 'thawaf') {
  state.worshipModeActive = true;
  state.worshipType = type;
  state.worshipRound = 1;
  state.worshipDzikirCount = 0;
  state.worshipAudioPlaying = false;
  state.worshipRepeatCount = 0;

  // Request Wake Lock agar layar tidak mati saat ibadah
  requestWakeLock();

  const modal = document.getElementById('worship-mode-modal');
  if (modal) {
    modal.classList.remove('hidden');
    renderWorshipContent();
  }
}

function closeWorshipMode() {
  state.worshipModeActive = false;
  stopWorshipAudio();
  releaseWakeLock();
  const modal = document.getElementById('worship-mode-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function getActiveWorshipPrayer() {
  if (state.worshipType === 'thawaf') {
    return DATA_DOA.find(d => d.id === `thawaf-${state.worshipRound}`) || DATA_DOA.find(d => d.id === 'thawaf-1');
  } else {
    return DATA_DOA.find(d => d.id === `sai-round-${state.worshipRound}`) || DATA_DOA.find(d => d.id === 'sai-round-1');
  }
}

function toggleWorshipAudio() {
  const activePrayer = getActiveWorshipPrayer();
  if (!activePrayer) return;

  if (state.worshipAudioPlaying) {
    stopWorshipAudio();
  } else {
    state.worshipRepeatCount = 1;
    playWorshipAudio(activePrayer);
  }
}

function playWorshipAudio(doa) {
  if (!synth) {
    alert('Browser Anda tidak mendukung fitur pemutar suara.');
    return;
  }
  synth.cancel();

  const textToSpeak = doa.arab;
  currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
  currentUtterance.lang = 'ar-SA';
  currentUtterance.rate = state.audioSpeed;

  if (arabicVoices.length > 0) {
    currentUtterance.voice = arabicVoices[0];
  }

  currentUtterance.onstart = () => {
    state.worshipAudioPlaying = true;
    updateWorshipAudioBtnState();
  };

  currentUtterance.onend = () => {
    if (state.worshipAudioPlaying && state.worshipRepeatCount < state.worshipAudioRepeat) {
      state.worshipRepeatCount++;
      setTimeout(() => {
        if (state.worshipAudioPlaying && state.worshipModeActive) {
          playWorshipAudio(doa);
        }
      }, 1000);
    } else {
      state.worshipAudioPlaying = false;
      updateWorshipAudioBtnState();
    }
  };

  currentUtterance.onerror = () => {
    state.worshipAudioPlaying = false;
    updateWorshipAudioBtnState();
  };

  synth.speak(currentUtterance);
}

function stopWorshipAudio() {
  if (synth) {
    synth.cancel();
  }
  state.worshipAudioPlaying = false;
  updateWorshipAudioBtnState();
}

function toggleWorshipAudioRepeat() {
  state.worshipAudioRepeat = state.worshipAudioRepeat === 1 ? 3 : state.worshipAudioRepeat === 3 ? 999 : 1;
  updateWorshipRepeatLabel();
}

function updateWorshipRepeatLabel() {
  const label = document.getElementById('worship-repeat-label');
  if (label) {
    label.textContent = state.worshipAudioRepeat === 999 ? '∞' : `${state.worshipAudioRepeat}x`;
  }
}

function toggleWorshipAudioSpeed() {
  state.audioSpeed = state.audioSpeed === 1.0 ? 0.8 : state.audioSpeed === 0.8 ? 1.2 : 1.0;
  updateWorshipSpeedLabel();
  if (state.worshipAudioPlaying) {
    const doa = getActiveWorshipPrayer();
    if (doa) playWorshipAudio(doa);
  }
}

function updateWorshipSpeedLabel() {
  const label = document.getElementById('worship-speed-label');
  if (label) {
    label.textContent = `${state.audioSpeed}x`;
  }
}

function updateWorshipAudioBtnState() {
  const btn = document.getElementById('worship-audio-btn');
  const label = document.getElementById('worship-audio-label');
  if (!btn || !label) return;

  const typeName = state.worshipType === 'thawaf' ? 'Thawaf' : 'Sa\'i';

  if (state.worshipAudioPlaying) {
    btn.classList.add('bg-amber-600', 'text-white', 'border-amber-600');
    btn.classList.remove('bg-[var(--bg-card-subtle)]', 'text-[var(--text-main)]');
    btn.innerHTML = `
      <i data-lucide="pause" class="w-4 h-4"></i>
      <span id="worship-audio-label">Jeda Audio Putaran Ke-${state.worshipRound}</span>
      <div class="flex items-center gap-1 ml-1.5">
        <span class="sound-wave-bar bg-white"></span>
        <span class="sound-wave-bar bg-white"></span>
        <span class="sound-wave-bar bg-white"></span>
      </div>
    `;
  } else {
    btn.classList.remove('bg-amber-600', 'text-white', 'border-amber-600');
    btn.classList.add('bg-[var(--bg-card-subtle)]', 'text-[var(--text-main)]');
    btn.innerHTML = `
      <i data-lucide="volume-2" class="w-4 h-4 text-[#B38E46]"></i>
      <span id="worship-audio-label">Dengarkan Audio Doa Putaran Ke-${state.worshipRound}</span>
    `;
  }
  initLucideIcons();
}

function setWorshipRound(round) {
  state.worshipRound = round;
  state.worshipDzikirCount = 0;
  vibrateDevice([50]);
  renderWorshipContent();
  if (state.worshipAudioPlaying) {
    playWorshipAudio(getActiveWorshipPrayer());
  }
}

function nextWorshipRound() {
  if (state.worshipRound < 7) {
    state.worshipRound++;
    state.worshipDzikirCount = 0;
    vibrateDevice([80, 50, 80]); // Haptic getar ganti putaran
    renderWorshipContent();
    if (state.worshipAudioPlaying) {
      playWorshipAudio(getActiveWorshipPrayer());
    }
  } else {
    showToast('Alhamdulillah, selesai 7 putaran! Lanjutkan dengan salat sunat & minum zamzam.');
  }
}

function incrementWorshipDzikir() {
  state.worshipDzikirCount++;
  vibrateDevice([35]); // Haptic getar halus tiap hitungan tasbih
  const countEl = document.getElementById('worship-dzikir-num');
  if (countEl) {
    countEl.textContent = state.worshipDzikirCount;
  }
}

function renderWorshipContent() {
  const titleEl = document.getElementById('worship-title');
  const arabicEl = document.getElementById('worship-arab');
  const latinEl = document.getElementById('worship-latin');
  const transEl = document.getElementById('worship-trans');
  const guideEl = document.getElementById('worship-guide');
  const extraDoaBox = document.getElementById('worship-extra-doa');

  const isThawaf = state.worshipType === 'thawaf';
  if (titleEl) {
    titleEl.textContent = isThawaf ? 'Mode Pendamping Thawaf' : 'Mode Pendamping Sa\'i';
  }

  // Pilih doa yang sesuai dengan putaran aktif 1 s.d. 7
  let activePrayer = null;
  if (isThawaf) {
    activePrayer = DATA_DOA.find(d => d.id === `thawaf-${state.worshipRound}`);
  } else {
    activePrayer = DATA_DOA.find(d => d.id === `sai-round-${state.worshipRound}`);
  }

  if (activePrayer) {
    arabicEl.textContent = activePrayer.arab;
    latinEl.textContent = activePrayer.latin;
    transEl.textContent = activePrayer.arti;
  }

  if (guideEl) {
    if (isThawaf) {
      guideEl.innerHTML = `<strong>Putaran Ke-${state.worshipRound}</strong>: Mulai dari garis Hajar Aswad berlawanan arah jarum jam. Bacalah doa putaran ini, dan akhiri tiap putaran dengan doa Sapu Jagat di antara Rukun Yamani & Hajar Aswad.`;
    } else {
      const arah = state.worshipRound % 2 !== 0 ? 'Bukit Shafa menuju Bukit Marwah' : 'Bukit Marwah menuju Bukit Shafa';
      guideEl.innerHTML = `<strong>Perjalanan Ke-${state.worshipRound}</strong>: Bergerak dari <strong>${arah}</strong>. Saat melintasi dua pilar lampu hijau, jemaah laki-laki disunnahkan lari-lari kecil seraya membaca doa pilar hijau.`;
    }
  }

  // Tampilkan doa tambahan yang relevan (Sapu Jagat untuk Thawaf, Lampu Hijau untuk Sa'i)
  if (extraDoaBox) {
    if (isThawaf) {
      const sapuJagat = DATA_DOA.find(d => d.id === 'thawaf-yamani');
      extraDoaBox.innerHTML = `
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 text-left mt-4">
          <div class="text-xs font-bold uppercase text-amber-700 dark:text-amber-400 mb-1">
            📍 Di Antara Rukun Yamani & Hajar Aswad (Doa Sapu Jagat):
          </div>
          <p class="font-arabic text-right mb-1 text-lg font-bold">${sapuJagat.arab}</p>
          <p class="text-xs font-medium italic text-stone-700 dark:text-stone-300">"${sapuJagat.latin}"</p>
        </div>
      `;
    } else {
      const pilarHijau = DATA_DOA.find(d => d.id === 'sai-pilar');
      extraDoaBox.innerHTML = `
        <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-left mt-4">
          <div class="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300 mb-1">
            🟢 Di Bawah Lampu Hijau (Lari Kecil Pria):
          </div>
          <p class="font-arabic text-right mb-1 text-lg font-bold">${pilarHijau.arab}</p>
          <p class="text-xs font-medium italic text-stone-700 dark:text-stone-300">"${pilarHijau.latin}"</p>
        </div>
      `;
    }
  }

  // Render Stepper 1-7
  const stepper = document.getElementById('worship-stepper');
  if (stepper) {
    stepper.innerHTML = [1, 2, 3, 4, 5, 6, 7].map(num => `
      <button 
        onclick="setWorshipRound(${num})"
        class="w-10 h-10 rounded-full font-bold text-sm transition-all ${
          num === state.worshipRound 
            ? 'bg-[#B38E46] text-white ring-4 ring-[#B38E46]/30 scale-110 shadow-lg' 
            : num < state.worshipRound
              ? 'bg-[#2D4F38] text-white'
              : 'bg-[var(--bg-chip)] text-[var(--text-muted)]'
        }"
      >
        ${num < state.worshipRound ? '✓' : num}
      </button>
    `).join('');
  }

  document.getElementById('worship-dzikir-num').textContent = state.worshipDzikirCount;
  updateWorshipAudioBtnState();
  updateWorshipRepeatLabel();
  updateWorshipSpeedLabel();
  initLucideIcons();
}

// 7. Screen Wake Lock API (Layar tidak mati di lapangan)
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      state.wakeLock = await navigator.wakeLock.request('screen');
      const badge = document.getElementById('wakelock-badge');
      if (badge) badge.classList.remove('hidden');
    }
  } catch (err) {
    console.log('Wake Lock request error:', err);
  }
}

function releaseWakeLock() {
  if (state.wakeLock !== null) {
    state.wakeLock.release();
    state.wakeLock = null;
    const badge = document.getElementById('wakelock-badge');
    if (badge) badge.classList.add('hidden');
  }
}

// 8. Haptic Feedback
function vibrateDevice(pattern) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

// 9. Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
  }, 2600);
}

// 10. Modal Baca Layar Penuh (Practice Modal)
function openPracticeModal(id) {
  const doa = DATA_DOA.find(d => d.id === id);
  if (!doa) return;

  const modal = document.getElementById('practice-modal');
  document.getElementById('practice-title').textContent = doa.judul;
  document.getElementById('practice-arab').textContent = doa.arab;
  document.getElementById('practice-latin').textContent = doa.latin;
  document.getElementById('practice-arti').textContent = doa.arti;
  document.getElementById('practice-sumber').textContent = doa.sumber;
  
  // Set tombol audio modal
  const playBtn = document.getElementById('practice-audio-btn');
  playBtn.onclick = () => playAudioDoa(doa.id);

  modal.classList.remove('hidden');
  initLucideIcons();
}

function closePracticeModal() {
  const modal = document.getElementById('practice-modal');
  if (modal) modal.classList.add('hidden');
}

// 11. Modal Pengaturan / Aksesibilitas Drawer
function toggleSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) {
    modal.classList.toggle('hidden');
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Input Pencarian
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderDoaList();
    });
  }

  // Tombol Audio Player Bar
  const playBtn = document.getElementById('player-play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (state.isPlaying) {
        pauseAudio();
      } else {
        resumeAudio();
      }
    });
  }

  const stopBtn = document.getElementById('player-stop-btn');
  if (stopBtn) {
    stopBtn.addEventListener('click', stopAudio);
  }

  // Re-request wake lock if tab becomes visible again
  document.addEventListener('visibilitychange', async () => {
    if (state.wakeLock !== null && document.visibilityState === 'visible' && state.worshipModeActive) {
      await requestWakeLock();
    }
  });
}
