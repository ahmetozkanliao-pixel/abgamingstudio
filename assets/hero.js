(() => {
  const hero = document.querySelector("#abHero");
  const arcade = document.querySelector("#abHero .arcade-mount");
  if (!hero) return;

  if (arcade) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    hero.addEventListener("pointermove", (event) => {
      if (reduce.matches) return;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      arcade.style.transform = `translate3d(${x * 9}px, ${y * 7}px, 0) rotateY(${x * 2.2}deg) rotateX(${-y * 1.4}deg)`;
    });
    hero.addEventListener("pointerleave", () => {
      arcade.style.transform = "translate3d(0,0,0) rotateY(0) rotateX(0)";
    });
  }

  const copy = {
    tr: {
      eyebrow: "BAĞIMSIZ OYUN STÜDYOSU",
      title: "BİZ<br>YARATIRIZ<span>.</span>",
      lead: "Rekabet, bağ kurmak<br>ve saf eğlence için oyunlar.",
      k1: "OYNA",
      k2: "KUR",
      k3: "REKABET ET",
      k4: "BİRLİKTE",
      play: "SEN OYNA<span>.</span>",
      first: "İLK OYUNUMUZ",
      manifesto: "İYİ OYUNLAR<br>DAHA PARLAK İNSANLAR",
    },
    en: {
      eyebrow: "INDEPENDENT GAME STUDIO",
      title: "WE<br>CREATE<span>.</span>",
      lead: "Games made for competition,<br>connection and pure fun.",
      k1: "PLAY",
      k2: "BUILD",
      k3: "COMPETE",
      k4: "TOGETHER",
      play: "YOU PLAY<span>.</span>",
      first: "OUR FIRST GAME",
      manifesto: "GOOD GAMES<br>BRIGHTER PEOPLE",
    },
  };

  const buttons = [...hero.querySelectorAll(".ab-lang")];

  function setLang(lang) {
    const dict = copy[lang] || copy.tr;
    hero.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    hero.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    buttons.forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    document.documentElement.lang = lang === "en" ? "en" : "tr";
    try {
      localStorage.setItem("ab-lang", lang);
    } catch (_) {}
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  let start = "tr";
  try {
    const saved = localStorage.getItem("ab-lang");
    if (saved === "tr" || saved === "en") start = saved;
  } catch (_) {}
  setLang(start);
})();
