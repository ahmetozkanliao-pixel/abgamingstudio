(function () {
  const host = location.hostname;
  if (host === "www.abgamingstudios.com" || (host === "abgamingstudios.com" && location.protocol === "http:")) {
    location.replace("https://abgamingstudios.com" + location.pathname + location.search + location.hash);
  }
})();

const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>',
  about: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c.7-5 3.4-7 8-7s7.3 2 8 7"/></svg>',
  game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 8h8c4 0 6 3 6 7s-2 6-4 6c-2.5 0-3-3-6-3s-3.5 3-6 3c-2 0-4-2-4-6s2-7 6-7Z"/><path d="M7 13h4M9 11v4"/><circle cx="17" cy="12" r=".6" fill="currentColor"/><circle cx="19" cy="15" r=".6" fill="currentColor"/></svg>',
  news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 8h10M7 12h6M7 16h8"/></svg>',
  contact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A7 7 0 0 1 3 13V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>',
};

const BASE = location.hostname.endsWith("github.io")
  ? "/" + location.pathname.split("/").filter(Boolean)[0]
  : "";

const I18N = {
  tr: {
    nav_home: "Anasayfa",
    nav_about: "Hakkımızda",
    nav_games: "Oyunlar",
    nav_news: "Haberler",
    nav_contact: "İletişim",
    dock_aria: "Ana menü",
    footer_rights: "AB Gaming Studios. Tüm hakları saklıdır.",
    footer_short: "AB Gaming Studios.",
    lang_aria: "Dil seçimi",

    hero_eyebrow: "BAĞIMSIZ OYUN STÜDYOSU",
    hero_title: "BİZ<br>YAPA-<br>RIZ<span>.</span>",
    hero_title_mob: "BİZ YAPARIZ<span>.</span>",
    hero_lead: "Rekabet, bağ kurmak<br>ve saf eğlence için oyunlar.",
    hero_k1: "OYNA",
    hero_k2: "KUR",
    hero_k3: "REKABET ET",
    hero_k4: "BİRLİKTE",
    hero_play: "SEN OYNA<span>.</span>",
    hero_first: "İLK OYUNUMUZ",
    hero_manifesto: "İYİ OYUNLAR<br>DAHA PARLAK İNSANLAR",
    hero_arcade: "3 boyutlu atari makinesi",

    home_title: "AB Gaming Studios — Yeni Nesil Oyunlar",
    home_game_eyebrow: "İlk oyunumuz",
    home_game_p: "Futbol bilgisi, hız ve bire bir rekabet aynı oyunda. Web tarayıcı, App Store ve Google Play için geliştiriliyor.",
    home_p1: "OYUNCU 1",
    home_p2: "OYUNCU 2",
    home_q: "Cevabın hazır mı?",
    home_show_eyebrow: "1v1 futbol bilgi oyunu",
    home_show_h3: "Bilgine güveniyorsan, rakibini çağır.",
    home_show_p: "Aynı anda gelen sorular, saniyeler içinde verilen cevaplar ve maç sonuna kadar değişen skor.",
    home_cta: "3‑2‑1'i İncele →",
    home_approach_eyebrow: "Bizim oyun anlayışımız",
    home_approach_h2: "Fikirden<br>rekabete.",
    home_approach_p: "Oyuncuyu kalabalık kurallarla yormayan, ilk saniyeden anlaşılır ve uzun süre akılda kalan deneyimler kuruyoruz.",
    home_t1_h: "Net Mekanik",
    home_t1_p: "Oyuncunun hızla kavradığı, ustalaştıkça derinleşen oyun sistemleri.",
    home_t2_h: "Gerçek Rekabet",
    home_t2_p: "Arkadaşları aynı ekranda buluşturan, paylaşmaya değer mücadeleler.",
    home_t3_h: "Her Yerde Oyun",
    home_t3_p: "Web ve mobil platformlarda kolayca erişilen akıcı deneyimler.",

    about_title: "Hakkımızda — AB Gaming Studios",
    about_status: "İstanbul, Türkiye",
    about_eyebrow: "Hakkımızda",
    about_h1: "Oyuncuyu ilk saniyede yakalayan fikirler.",
    about_p: "AB Gaming Studios, iki kurucunun oyun tutkusundan doğdu. Kolay öğrenilen, tekrar tekrar oynanan ve insanları gerçek rekabette buluşturan dijital oyunlar geliştiriyoruz. Tek bir türe kilitli değiliz; her oyun kendi dünyasından çıkar.",
    about_founders_aria: "Kurucu ortaklar",
    about_founders_eyebrow: "Kurucu ortaklar",
    about_founders_h2: "İki kişi.<br>Bir stüdyo.",
    about_founders_lead: "AB Gaming Studios’u birlikte kurduk. Oyun ve rekabet aynı masada dursun diye. Karar tek kişilik değil; ikimiz de kurucu ortağız.",
    about_role: "Kurucu ortak",
    about_ahmet_p: "Oyunun ne hissettirdiğini kuran tarafım. Kısa, net ve bir kez daha oynanmak isteyen deneyimler peşindeyim. İlk oyunumuz bunun başlangıcı; sıradaki fikirler başka türlerden gelecek.",
    about_bahri_p: "Stüdyonun ayakta durmasını ve oyunun insanlara ulaşmasını birlikte üstleniyoruz. Üretim, görünürlük ve sıradaki adım aynı masada konuşulur. Kurucu ortak olarak bu işi Ahmet ile omuz omuza götürüyorum.",
    about_vision_eyebrow: "Vizyonumuz",
    about_vision_h: "Yerelden doğan, dünyanın her yerinde oynanan oyunlar.",
    about_vision_p: "Güçlü fikir, rafine tasarım ve akıcı oyun deneyimini tek potada buluşturuyoruz.",
    about_approach_eyebrow: "Yaklaşımımız",
    about_approach_h: "Önce oyun hissi.",
    about_approach_p: "Her projede ilk sorumuz aynı: Oyuncu bunu neden bir kez daha oynamak istesin? Mekanikleri, görsel dili ve teknolojiyi bu cevabın etrafında kuruyoruz.",
    about_stat1: "Kurucu ortak",
    about_stat2: "Geliştirilmekte olan oyun",
    about_stat3: "Hedef platform",

    games_title: "Oyunlar — AB Gaming Studios",
    games_status: "Oyunlar: 3‑2‑1 · FBC",
    games_eyebrow: "Oyunlarımız",
    games_list_aria: "Oyun listesi",
    games_cta: "İncele",
    games_play_short: "Oyna",
    games_soon: "Yakında",
    games_lead: "Arkadaşını düelloya davet et. Aynı anda gelen futbol sorularında hızlı ve doğru cevaplarla öne geç. Maç bitene kadar her saniye önemli.",
    games_fbc_lead: "Blokları kır, topu kontrol et, skorunu yükselt. Hızlı tempolu, bağımlılık yapan bir futbol puzzle deneyimi.",
    games_play: "Tarayıcıda Oyna →",
    games_ios: "iOS · Yakında",
    games_android: "Android · Yakında",

    news_title: "Haberler — AB Gaming Studios",
    news_status: "Stüdyodan son gelişmeler",
    news_eyebrow: "Haberler",
    news_h1: "Stüdyodan.",
    news_p: "Geliştirme süreci, yeni özellikler ve 3‑2‑1 evreninden duyurular.",
    news_t1: "14 EYLÜL 2026",
    news_h2_1: "3‑2‑1 için ilk düdük yaklaşıyor.",
    news_p1: "Futbol bilgi oyunumuzun web, iOS ve Android hazırlıkları devam ediyor. İlk test sürecine dair detayları yakında paylaşacağız.",
    news_t2: "GELİŞTİRME GÜNLÜĞÜ",
    news_h2_2: "1v1 rekabetin ritmini tasarlamak",
    news_p2: "Hız ile bilgi arasındaki dengeyi nasıl kuruyoruz?",
    news_t3: "STÜDYO",
    news_h2_3: "AB Gaming Studios kuruldu",
    news_p3: "Yeni nesil, erişilebilir oyunlar için yolculuk başladı.",

    contact_title: "İletişim — AB Gaming Studios",
    contact_status: "Mesajlara açığız",
    contact_eyebrow: "İletişim",
    contact_h1: "Birlikte<br>oynayalım.",
    contact_p: "İş birlikleri, basın talepleri ve 3‑2‑1 hakkındaki sorularınız için bize ulaşın.",
    contact_email: "E-posta",
    contact_studio: "Stüdyo",
    contact_studio_v: "İstanbul, Türkiye",
    contact_social: "Sosyal",
    contact_name: "Adınız",
    contact_name_ph: "Ad Soyad",
    contact_email_ph: "ornek@email.com",
    contact_message: "Mesajınız",
    contact_message_ph: "Nasıl yardımcı olabiliriz?",
    contact_send: "Mesaj Gönder →",
    contact_sent: "Mesajınız hazır ✓",

    privacy_fbc_title: "Gizlilik Politikası — Futbol Blok Kırma",
    privacy_fbc_status: "App Store gizlilik",
    privacy_fbc_eyebrow: "Gizlilik",
    privacy_fbc_h1: "Futbol Blok Kırma",
    privacy_fbc_updated: "Son güncelleme: 17 Eylül 2026. AB Gaming Studios.",
    privacy_fbc_h_data: "Topladığımız veri",
    privacy_fbc_p_data: "Oyun verileri (hesap adı, e-posta, şifre özeti, maç kaydı, puan) yalnızca senin cihazında saklanır. Sunucuya hesap veya oyun istatistiği göndermeyiz.",
    privacy_fbc_h_contact: "İletişim formu",
    privacy_fbc_p_contact: "Ayarlardaki iletişim formu, cihazındaki e-posta uygulamasını açar. Mesajı göndermeyi sen seçersin.",
    privacy_fbc_h_track: "Takip",
    privacy_fbc_p_track: "Reklam kimliği (IDFA) kullanmayız, analitik SDK’sı yoktur, üçüncü taraf izleme yoktur.",
    privacy_fbc_h_delete: "Hesap silme",
    privacy_fbc_p_delete: "Kayıtlı hesabını Ayarlar → Hesabı sil ile kaldırabilirsin. Bu işlem bu cihazdaki hesap, maç ve kariyer kaydını siler.",
    privacy_fbc_h_kids: "Çocuklar",
    privacy_fbc_p_kids: "Oyun 4+ yaş için tasarlanmıştır. Bilerek 13 yaş altından kişisel veri toplamayız.",
    privacy_fbc_h_reach: "İletişim",
    privacy_fbc_p_reach: "Gizlilik soruları için merhaba@abgamingstudio.com adresine yazın.",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_games: "Games",
    nav_news: "News",
    nav_contact: "Contact",
    dock_aria: "Main menu",
    footer_rights: "AB Gaming Studios. All rights reserved.",
    footer_short: "AB Gaming Studios.",
    lang_aria: "Language",

    hero_eyebrow: "INDEPENDENT GAME STUDIO",
    hero_title: "WE<br>CREATE<span>.</span>",
    hero_title_mob: "WE CREATE<span>.</span>",
    hero_lead: "Games made for competition,<br>connection and pure fun.",
    hero_k1: "PLAY",
    hero_k2: "BUILD",
    hero_k3: "COMPETE",
    hero_k4: "TOGETHER",
    hero_play: "YOU PLAY<span>.</span>",
    hero_first: "OUR FIRST GAME",
    hero_manifesto: "GOOD GAMES<br>BRIGHTER PEOPLE",
    hero_arcade: "3D arcade machine",

    home_title: "AB Gaming Studios — Next-Gen Games",
    home_game_eyebrow: "Our first game",
    home_game_p: "Football knowledge, speed and one-on-one competition in one game. Built for web, App Store and Google Play.",
    home_p1: "PLAYER 1",
    home_p2: "PLAYER 2",
    home_q: "Ready with your answer?",
    home_show_eyebrow: "1v1 football trivia",
    home_show_h3: "Trust your knowledge. Call your rival.",
    home_show_p: "Questions land at the same time, answers in seconds, and the score shifts until the final whistle.",
    home_cta: "Explore 3‑2‑1 →",
    home_approach_eyebrow: "How we make games",
    home_approach_h2: "From idea<br>to rivalry.",
    home_approach_p: "We build experiences that are clear from the first second, free of rule clutter, and hard to forget.",
    home_t1_h: "Clear Mechanics",
    home_t1_p: "Systems players grasp fast, then master deeper over time.",
    home_t2_h: "Real Competition",
    home_t2_p: "Rivalries worth sharing, bringing friends onto the same screen.",
    home_t3_h: "Play Anywhere",
    home_t3_p: "Smooth experiences across web and mobile.",

    about_title: "About — AB Gaming Studios",
    about_status: "Istanbul, Türkiye",
    about_eyebrow: "About",
    about_h1: "Ideas that grab players in the first second.",
    about_p: "AB Gaming Studios was born from two founders’ love of games. We build digital games that are easy to learn, replayed often, and bring people into real competition. We’re not locked to one genre; each game brings its own world.",
    about_founders_aria: "Founders",
    about_founders_eyebrow: "Founders",
    about_founders_h2: "Two people.<br>One studio.",
    about_founders_lead: "We built AB Gaming Studios together so play and competition stay at the same table. Decisions aren’t solo — we’re both founders.",
    about_role: "Co-founder",
    about_ahmet_p: "I shape how the game feels. Short, sharp experiences you want to play again. Our first title is the start; the next ideas will come from other genres.",
    about_bahri_p: "We share keeping the studio standing and getting games to people. Production, visibility and the next step are decided together. Shoulder to shoulder with Ahmet.",
    about_vision_eyebrow: "Our vision",
    about_vision_h: "Games born local, played everywhere.",
    about_vision_p: "Strong ideas, refined design and fluid play in one craft.",
    about_approach_eyebrow: "Our approach",
    about_approach_h: "Feel first.",
    about_approach_p: "Every project starts with the same question: why play this again? Mechanics, visuals and tech orbit that answer.",
    about_stat1: "Co-founders",
    about_stat2: "Game in development",
    about_stat3: "Target platforms",

    games_title: "Games — AB Gaming Studios",
    games_status: "Games: 3‑2‑1 · FBC",
    games_eyebrow: "Our games",
    games_list_aria: "Game list",
    games_cta: "View",
    games_play_short: "Play",
    games_soon: "Coming soon",
    games_lead: "Challenge a friend. Answer football questions at the same time — speed and accuracy decide who leads. Every second counts until the match ends.",
    games_fbc_lead: "Break the blocks, control the ball, climb the score. A fast, addictive football puzzle experience.",
    games_play: "Play in browser →",
    games_ios: "iOS · Soon",
    games_android: "Android · Soon",

    news_title: "News — AB Gaming Studios",
    news_status: "Latest from the studio",
    news_eyebrow: "News",
    news_h1: "From the studio.",
    news_p: "Dev updates, new features and news from the 3‑2‑1 universe.",
    news_t1: "14 SEP 2026",
    news_h2_1: "First whistle for 3‑2‑1 is near.",
    news_p1: "Web, iOS and Android prep for our football trivia game continues. We’ll share first-test details soon.",
    news_t2: "DEV LOG",
    news_h2_2: "Designing the rhythm of 1v1 rivalry",
    news_p2: "How we balance speed and knowledge?",
    news_t3: "STUDIO",
    news_h2_3: "AB Gaming Studios is here",
    news_p3: "The journey for next-gen, accessible games has begun.",

    contact_title: "Contact — AB Gaming Studios",
    contact_status: "Open to messages",
    contact_eyebrow: "Contact",
    contact_h1: "Let’s play<br>together.",
    contact_p: "Reach us for partnerships, press and questions about 3‑2‑1.",
    contact_email: "Email",
    contact_studio: "Studio",
    contact_studio_v: "Istanbul, Türkiye",
    contact_social: "Social",
    contact_name: "Your name",
    contact_name_ph: "Full name",
    contact_email_ph: "you@email.com",
    contact_message: "Your message",
    contact_message_ph: "How can we help?",
    contact_send: "Send message →",
    contact_sent: "Message ready ✓",

    privacy_fbc_title: "Privacy Policy — Futbol Blok Kırma",
    privacy_fbc_status: "App Store privacy",
    privacy_fbc_eyebrow: "Privacy",
    privacy_fbc_h1: "Futbol Blok Kırma",
    privacy_fbc_updated: "Last updated: 17 September 2026. AB Gaming Studios.",
    privacy_fbc_h_data: "Data we collect",
    privacy_fbc_p_data: "Game data (account name, email, password hash, match save, scores) stays on your device only. We do not send accounts or gameplay stats to a server.",
    privacy_fbc_h_contact: "Contact form",
    privacy_fbc_p_contact: "The in-app contact form opens your device’s mail app. You choose whether to send the message.",
    privacy_fbc_h_track: "Tracking",
    privacy_fbc_p_track: "We do not use advertising identifiers (IDFA), analytics SDKs, or third-party tracking.",
    privacy_fbc_h_delete: "Delete account",
    privacy_fbc_p_delete: "You can remove a registered account in Settings → Delete account. This clears the account, matches, and career record on this device.",
    privacy_fbc_h_kids: "Children",
    privacy_fbc_p_kids: "The game is designed for ages 4+. We do not knowingly collect personal data from children under 13.",
    privacy_fbc_h_reach: "Contact",
    privacy_fbc_p_reach: "For privacy questions, write to merhaba@abgamingstudio.com.",
  },
};

function getLang() {
  try {
    const saved = localStorage.getItem("ab-lang");
    if (saved === "tr" || saved === "en") return saved;
  } catch (_) {}
  return "tr";
}

function setStoredLang(lang) {
  try {
    localStorage.setItem("ab-lang", lang);
  } catch (_) {}
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.tr;
  document.documentElement.lang = lang === "en" ? "en" : "tr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });

  const page = document.body.dataset.page;
  const titleKey = page ? `${page}_title` : null;
  if (titleKey && dict[titleKey]) document.title = dict[titleKey];

  document.querySelectorAll(".ab-lang, .lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  renderDock(lang);
  setStoredLang(lang);
  document.dispatchEvent(new CustomEvent("ab:lang", { detail: { lang } }));
}

function renderDock(lang) {
  const dict = I18N[lang] || I18N.tr;
  const nav = [
    [dict.nav_home, `${BASE}/`, "home"],
    [dict.nav_about, `${BASE}/hakkimizda/`, "about"],
    [dict.nav_games, `${BASE}/oyunlar/`, "game"],
    [dict.nav_news, `${BASE}/haberler/`, "news"],
    [dict.nav_contact, `${BASE}/iletisim/`, "contact"],
  ];
  const path = location.pathname.replace(/\/index\.html$/, "/");
  const home = BASE + "/";
  const dock = document.querySelector("#dock");
  if (!dock) return;
  dock.setAttribute("aria-label", dict.dock_aria);
  dock.innerHTML = nav
    .map(([label, url, icon]) => {
      const active =
        url === home
          ? path === home || path === BASE || path === BASE + "/"
          : path.startsWith(url);
      return `<a href="${url}" class="${active ? "active" : ""}">${icons[icon]}<span>${label}</span></a>`;
    })
    .join("");
}

function bindLangSwitch() {
  document.querySelectorAll(".ab-lang, .lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyI18n(btn.dataset.lang));
  });
}

const yearEl = document.querySelector("#year");
if (yearEl && !yearEl.textContent.trim()) yearEl.append(new Date().getFullYear());

bindLangSwitch();
applyI18n(getLang());

window.AB = { applyI18n, getLang, I18N };
