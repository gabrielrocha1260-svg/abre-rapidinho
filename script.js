/* =========================================================
   Convite · Amanda Moreira
   Telas: convite → (cortina "boa.") → temporada · ou → recusa
   ========================================================= */
(() => {
  "use strict";

  /* ---------- Configuração ----------
     Coloque seu número com DDI e DDD, só dígitos. Ex.: "5511912345678".
     Vazio: o WhatsApp abre e pede pra escolher o contato. */
  const CONFIG = {
    whatsapp: "",
  };

  /* ---------- As cinco rodadas ---------- */
  const DATES = [
    {
      id: "gastronomia",
      round: "01",
      cat: "tranquilo",
      tag: "Tranquilo",
      kicker: "Missão 01 · Clássico dos sabores",
      title: "Tour gastronômico valendo pontos",
      line: "Eu escolho um lugar: se você gostar, 1 a 0 pra mim. Depois é a sua vez.",
      desc: "Funciona assim: eu escolho o primeiro lugar e, se você gostar, é 1 a 0 pra mim. Aí você escolhe o próximo e, se eu gostar, 1 a 0 pra você. Salgado, lanche, sobremesa: a gente vai alternando até não caber mais nada. Empate também vale, desde que a comida seja boa.",
      reply: "Aviso que eu jogo pra ganhar. Mas aceito perder se a sobremesa for boa.",
      msg: "Topo o tour gastronômico valendo pontos. Quem escolhe primeiro?",
      art: "food",
    },
    {
      id: "revolucao",
      round: "02",
      cat: "resenha",
      tag: "Pela resenha",
      kicker: "Missão 02 · Assembleia extraordinária",
      title: "Organizar uma revolução comunista",
      line: "Primeira pauta: e a propriedade privada desse coração, camarada?",
      desc: "Uma missão histórica com prioridades ridículas: fundar um comitê revolucionário de dois membros, pintar cartazes em cartolina, escrever um manifesto à mão e aprovar tudo por unanimidade. O sistema provavelmente continua de pé, mas a assembleia promete.",
      reply: "Comitê central: você e eu. Quórum garantido, pauta aprovada por unanimidade.",
      msg: "Topo a revolução. Bora escrever o manifesto, camarada?",
      art: "manifesto",
    },
    {
      id: "corinthians",
      round: "03",
      cat: "resenha",
      tag: "Pela resenha",
      kicker: "Missão 03 · Clássico da temporada",
      title: "Assistir ao Corinthians e passar raiva juntos",
      line: "Se ganhar, a gente comemora. Se perder, a gente reclama do juiz junto.",
      desc: "Noventa minutos de tensão, reclamação com a arbitragem e aquele acréscimo que não acaba nunca. Se ganhar, a gente comemora. Se perder, passa raiva junto. Em qualquer cenário, sai uma história pra contar.",
      reply: "Não garanto o resultado. Garanto a companhia até o último minuto de acréscimo.",
      msg: "Escolhi o jogo do Corinthians. Vamos passar raiva juntos?",
      art: "match",
    },
    {
      id: "lego",
      round: "04",
      cat: "longo",
      tag: "Longa duração",
      kicker: "Missão 04 · Obra de longo prazo",
      title: "Montar um Lego de 500 mil peças",
      line: "Previsão de entrega: três anos. Previsão de diversão: alta.",
      desc: "Começa como passatempo e vira obra de engenharia. Talvez a gente leve três anos pra terminar, depois de passar uma tarde inteira procurando a mesma pecinha. Pelo menos é um ótimo motivo pra continuar marcando encontros.",
      reply: "O manual tem 4 mil páginas. A gente lê a primeira e improvisa o resto.",
      msg: "Escolhi o Lego de 500 mil peças. Primeira peça quando?",
      art: "bricks",
    },
    {
      id: "luan",
      round: "05",
      cat: "longo",
      tag: "Longa duração",
      kicker: "Missão 05 · Maratona sertaneja",
      title: "Ouvir todas as músicas do Luan Santana",
      line: "Parece rápido. Não é. Vai precisar de vários encontros.",
      desc: "A gente começa achando que fecha numa tarde e termina percebendo que a discografia não acaba. Os clássicos, as que a gente nem sabia que existiam, e alguma hora alguém vai começar a cantar junto. Zerar a missão vai exigir mais de um encontro.",
      reply: "Se a gente não terminar hoje, tem que marcar o próximo. É regra do desafio.",
      msg: "Escolhi a maratona do Luan Santana. Faixa 1 quando?",
      art: "music",
    },
  ];

  const CATS = [
    { id: "todos", label: "Todas as rodadas" },
    { id: "tranquilo", label: "Tranquilo" },
    { id: "resenha", label: "Pela resenha" },
    { id: "longo", label: "Longa duração" },
  ];

  /* ---------- Ilustrações (SVG originais, sem escudos) ---------- */
  const W = "#f5f5f2", R = "#e3121b", G = "#2a2a2a", G2 = "#6b6b6b";
  const svgWrap = (inner, label) =>
    `<svg viewBox="0 0 320 180" role="img" aria-label="${label}" preserveAspectRatio="xMidYMid slice">` +
    `<rect width="320" height="180" fill="#0a0a0a"/>` + inner + `</svg>`;

  const ART = {
    food: () => svgWrap(`
      <text x="160" y="28" text-anchor="middle" font-family="DM Sans, sans-serif" font-weight="700" font-size="9" letter-spacing="2" fill="${G2}">PLACAR DO TOUR</text>
      <g transform="translate(84 38)">
        <rect width="152" height="52" rx="8" fill="#050505" stroke="${G2}"/>
        <text x="24" y="31" text-anchor="middle" font-family="DM Sans, sans-serif" font-weight="700" font-size="10" letter-spacing="1.5" fill="${G2}">EU</text>
        <text x="58" y="38" text-anchor="middle" font-family="Anton, sans-serif" font-size="30" fill="${W}">0</text>
        <text x="76" y="34" text-anchor="middle" font-family="Anton, sans-serif" font-size="16" fill="${R}">×</text>
        <text x="94" y="38" text-anchor="middle" font-family="Anton, sans-serif" font-size="30" fill="${W}">0</text>
        <text x="128" y="31" text-anchor="middle" font-family="DM Sans, sans-serif" font-weight="700" font-size="10" letter-spacing="1.5" fill="${G2}">VOCÊ</text>
      </g>
      <path d="M50 150 H270" stroke="${G}" stroke-width="2" stroke-dasharray="4 6"/>
      <g fill="none" stroke="${W}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M80 140 c-10 0 -14 -7 -10 -15 l10 -18 l10 18 c4 8 0 15 -10 15 z"/>
        <path d="M144 118 h32 a5 5 0 0 0 -5 -9 h-22 a5 5 0 0 0 -5 9 z"/><path d="M143 124 h34"/><path d="M144 130 h32 a3 3 0 0 1 -3 8 h-26 a3 3 0 0 1 -3 -8z"/>
        <path d="M234 120 l6 22 l6 -22"/><circle cx="240" cy="112" r="9"/>
      </g>
      <circle cx="80" cy="150" r="5" fill="${R}"/><circle cx="160" cy="150" r="5" fill="${W}"/><circle cx="240" cy="150" r="5" fill="${R}"/>
      <g font-family="DM Sans, sans-serif" font-weight="700" font-size="8.5" letter-spacing="1" fill="${G2}" text-anchor="middle">
        <text x="80" y="170">MINHA VEZ</text><text x="160" y="170">SUA VEZ</text><text x="240" y="170">MINHA VEZ</text>
      </g>`,
      "Placar eu zero a zero você, com três paradas alternadas"),

    manifesto: () => svgWrap(`
      <path d="M0 180 L230 0 H320 V36 L100 180 Z" fill="${R}"/>
      <g transform="translate(286 140) scale(.62)" fill="none" stroke="${W}" stroke-width="3.5" stroke-linejoin="round">
        <path d="M0 -30 L8.8 -12 L28.5 -9.3 L14.3 4.6 L17.6 24.3 L0 15 L-17.6 24.3 L-14.3 4.6 L-28.5 -9.3 L-8.8 -12 Z"/>
      </g>
      <text x="22" y="32" font-family="DM Sans, sans-serif" font-weight="700" font-size="9" letter-spacing="2" fill="${G2}">MANIFESTO Nº 1 · PAUTA ÚNICA</text>
      <g font-family="Anton, sans-serif" font-size="23" fill="${W}">
        <text x="22" y="60">E A PROPRIEDADE</text>
        <text x="22" y="86">PRIVADA DESSE</text>
        <text x="22" y="112">CORAÇÃO,</text>
        <text x="22" y="140">CAMARADA?</text>
      </g>
      <path transform="translate(246 128) scale(.9)" d="M10 18 C-6 6 2 -4 10 3 C18 -4 26 6 10 18 Z" fill="${W}"/>`,
      "Cartaz: e a propriedade privada desse coração, camarada?"),

    match: () => svgWrap(`
      <g stroke="${G}" stroke-width="2" fill="none">
        <rect x="14" y="14" width="292" height="152" rx="2"/>
        <path d="M160 14 V166"/><circle cx="160" cy="90" r="34"/>
        <rect x="14" y="56" width="40" height="68"/><rect x="266" y="56" width="40" height="68"/>
      </g>
      <g transform="translate(92 40)">
        <rect width="136" height="60" rx="8" fill="#050505" stroke="${G2}"/>
        <text x="40" y="44" text-anchor="middle" font-family="Anton, sans-serif" font-size="36" fill="${W}">0</text>
        <text x="68" y="40" text-anchor="middle" font-family="Anton, sans-serif" font-size="20" fill="${R}">×</text>
        <text x="96" y="44" text-anchor="middle" font-family="Anton, sans-serif" font-size="36" fill="${W}">0</text>
      </g>
      <g transform="translate(130 112)">
        <rect width="60" height="22" rx="4" fill="${R}"/>
        <text x="30" y="16" text-anchor="middle" font-family="Anton, sans-serif" font-size="14" fill="${W}">45+9'</text>
      </g>
      <circle cx="160" cy="90" r="3" fill="${W}"/>`,
      "Placar zero a zero com nove minutos de acréscimo"),

    bricks: () => {
      let s = "";
      const brick = (x, y, w, fill, studs) => {
        let b = `<rect x="${x}" y="${y}" width="${w}" height="26" rx="3" fill="${fill}" stroke="#0a0a0a" stroke-width="2"/>`;
        for (let i = 0; i < studs; i++) b += `<rect x="${x + 7 + i * 20}" y="${y - 6}" width="12" height="7" rx="2" fill="${fill}" stroke="#0a0a0a" stroke-width="2"/>`;
        return b;
      };
      const rows = [
        [[40, 140, 80, W, 4], [120, 140, 80, G2, 4], [200, 140, 80, W, 4]],
        [[80, 108, 80, G2, 4], [160, 108, 80, W, 4]],
        [[120, 76, 80, W, 4]],
      ];
      rows.flat().forEach(r => { s += brick(...r); });
      s += `<g transform="translate(222 52)"><rect width="40" height="26" rx="3" fill="none" stroke="${R}" stroke-width="2" stroke-dasharray="4 4"/>
            <text x="20" y="19" text-anchor="middle" font-family="Anton, sans-serif" font-size="16" fill="${R}">?</text></g>`;
      s += `<text x="20" y="30" font-family="Anton, sans-serif" font-size="14" fill="${W}" letter-spacing="1">PEÇA 12 DE 500.000</text>`;
      return svgWrap(s, "Peças de montar empilhadas, faltando uma");
    },

    music: () => {
      let bars = "";
      const hs = [22, 48, 34, 70, 56, 88, 40, 64, 30, 76, 52, 26, 60, 44];
      hs.forEach((h, i) => {
        bars += `<rect class="eq" style="--d:${(i % 5) * 0.12}s" x="${118 + i * 13}" y="${140 - h}" width="8" height="${h}" rx="2" fill="${i === 5 ? R : W}"/>`;
      });
      return svgWrap(`
        <g transform="translate(64 96)">
          <circle r="50" fill="#141414" stroke="${G}" stroke-width="2"/>
          <circle r="38" fill="none" stroke="${G}"/><circle r="28" fill="none" stroke="${G}"/>
          <circle r="14" fill="${R}"/><circle r="3" fill="#0a0a0a"/>
        </g>
        ${bars}
        <path d="M118 146 H300" stroke="${G}" stroke-width="2"/>
        <text x="20" y="30" font-family="Anton, sans-serif" font-size="14" fill="${W}" letter-spacing="1">FAIXA 01 DE MUITAS</text>`,
        "Disco e equalizador");
    },
  };

  /* ---------- Atalhos ---------- */
  const $ = (s, el = document) => el.querySelector(s);
  const live = $("#live");
  const say = (t) => { live.textContent = ""; requestAnimationFrame(() => { live.textContent = t; }); };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const waLink = (text) => {
    const n = (CONFIG.whatsapp || "").replace(/\D/g, "");
    return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
  };

  /* ---------- Telas ---------- */
  const screens = {
    invite: $("#screen-invite"),
    catalog: $("#screen-catalog"),
    declined: $("#screen-declined"),
  };

  function show(name, { push = true } = {}) {
    Object.entries(screens).forEach(([k, el]) => { el.hidden = k !== name; });
    document.body.dataset.screen = name;
    window.scrollTo(0, 0);
    const f = $("[data-focus]", screens[name]);
    if (f) f.focus({ preventScroll: true });
    if (push) { try { history.pushState({ s: name }, "", name === "invite" ? location.pathname : `#${name}`); } catch (_) {} }
    if (name === "catalog") kickScore();
  }

  addEventListener("popstate", (e) => {
    const s = (e.state && e.state.s) || "invite";
    if (dlg.open) dlg.close();
    show(s, { push: false });
  });

  /* ---------- Botão "não" que foge ---------- */
  const btnNo = $("#btnNo");
  const noSlot = $(".no-slot");
  const choices = $(".choices");
  const quip = $("#quip");
  const declineWrap = $("#declineWrap");
  const QUIPS = [
    "Eita, o \"não\" criou perninha e calçou chuteira.",
    "Opa, o juiz marcou impedimento nesse \"não\".",
    "Esse lance vai pro VAR.",
    "O \"não\" tá correndo mais que lateral em contra-ataque.",
    "Calma, ainda tem acréscimo.",
    "O \"sim\" segue livre na área, só pra constar.",
  ];
  let tries = 0;

  let runT;
  function dodge() {
    tries++;
    choices.classList.add("has-legs");
    btnNo.classList.add("running");
    clearTimeout(runT);
    runT = setTimeout(() => btnNo.classList.remove("running"), 650);
    const box = choices.getBoundingClientRect();
    const slot = noSlot.getBoundingClientRect();
    const b = btnNo.getBoundingClientRect();
    const yes = $("#btnYes").getBoundingClientRect();
    const pad = 10;
    const maxX = Math.max(0, box.width - b.width);
    const hits = (l, t) => !(l + b.width < yes.left - pad || l > yes.right + pad || t + b.height < yes.top - pad || t > yes.bottom + pad);
    // procura um lugar novo: longe de onde está e nunca em cima do "sim"
    let dx = 0, dy = 0;
    for (let k = 0; k < 40; k++) {
      const l = box.left + Math.random() * maxX;
      const t = slot.top + (Math.random() - 0.3) * 56;
      if (hits(l, t)) continue;
      if (Math.hypot(l - b.left, t - b.top) < 50 && k < 30) continue;
      dx = l - slot.left; dy = t - slot.top; break;
    }
    btnNo.style.transform = `translate(${dx.toFixed(0)}px, ${dy.toFixed(0)}px) rotate(${(Math.random() * 10 - 5).toFixed(1)}deg)`;

    quip.textContent = QUIPS[(tries - 1) % QUIPS.length];
    quip.classList.remove("pop"); void quip.offsetWidth; quip.classList.add("pop");
    if (tries >= 3) declineWrap.hidden = false;
  }

  btnNo.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") dodge(); });
  btnNo.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") { e.preventDefault(); dodge(); } });
  btnNo.addEventListener("click", (e) => { e.preventDefault(); dodge(); });

  $("#btnDeclineForReal").addEventListener("click", () => show("declined"));
  $("#btnBack").addEventListener("click", () => {
    tries = 0; btnNo.style.transform = ""; choices.classList.remove("has-legs"); btnNo.classList.remove("running"); quip.textContent = ""; declineWrap.hidden = true;
    show("invite");
  });

  /* ---------- "Sim" + cortina ---------- */
  const curtain = $("#curtain");
  $("#btnYes").addEventListener("click", () => {
    say("Boa.");
    if (reduced) { show("catalog"); return; }
    curtain.classList.remove("run"); void curtain.offsetWidth; curtain.classList.add("run");
    setTimeout(() => show("catalog"), 620);
    setTimeout(() => curtain.classList.remove("run"), 1600);
  });

  /* ---------- Placar ---------- */
  let scored = false;
  function kickScore() {
    const d = $("#scoreYes");
    if (scored) { d.textContent = "1"; return; }
    scored = true;
    if (reduced) { d.textContent = "1"; return; }
    setTimeout(() => {
      d.classList.add("go");
      setTimeout(() => { d.textContent = "1"; }, 330);
    }, 700);
  }

  /* ---------- Filtros e cartões ---------- */
  const chips = $("#chips");
  const cards = $("#cards");
  let current = "todos";

  CATS.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip"; b.textContent = c.label;
    b.dataset.cat = c.id; b.setAttribute("aria-pressed", String(c.id === current));
    b.addEventListener("click", () => { current = c.id; renderChips(); renderCards(); say(`${c.label}: ${visible().length} rodada(s).`); });
    chips.appendChild(b);
  });
  const renderChips = () => chips.querySelectorAll(".chip").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === current)));
  const visible = () => DATES.filter((d) => current === "todos" || d.cat === current);

  function renderCards() {
    cards.innerHTML = "";
    visible().forEach((d, i) => {
      const li = document.createElement("li");
      li.style.setProperty("--i", i);
      li.innerHTML = `
        <button class="card" type="button" data-id="${d.id}" aria-haspopup="dialog">
          <span class="card__top"><span class="card__round">Rodada <b>${d.round}</b></span><span class="tag tag--dark">${d.tag}</span></span>
          <span class="card__art">${ART[d.art]()}</span>
          <span class="card__body">
            <span class="card__kicker">${d.kicker}</span>
            <span class="card__title">${d.title}</span>
            <span class="card__line">${d.line}</span>
            <span class="card__cta">Ver a jogada <span aria-hidden="true">→</span></span>
          </span>
        </button>`;
      cards.appendChild(li);
    });
  }
  cards.addEventListener("click", (e) => {
    const b = e.target.closest(".card");
    if (b) open(b.dataset.id, b);
  });

  /* ---------- Detalhe ---------- */
  const dlg = $("#detail");
  let opener = null;

  function open(id, from) {
    const d = DATES.find((x) => x.id === id);
    if (!d) return;
    opener = from;
    $("#detailPh").innerHTML = ART[d.art]();
    $("#detailTag").textContent = `Rodada ${d.round} · ${d.tag}`;
    $("#detailTitle").textContent = d.title;
    $("#detailDesc").textContent = d.desc;
    $("#detailReply").textContent = d.reply;
    $("#btnWhats").href = waLink(`Oi! Vi o convite. ${d.msg}`);
    const warn = $("#whatsWarn");
    warn.hidden = !!CONFIG.whatsapp;
    warn.textContent = CONFIG.whatsapp ? "" : "O WhatsApp vai pedir pra escolher o contato: é só escolher o meu.";
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    $("#btnWhats").focus();
  }

  dlg.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) { dlg.close(); return; }
    // clique no fundo escurecido fecha
    const r = dlg.getBoundingClientRect();
    if (e.target === dlg && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dlg.close();
  });
  dlg.addEventListener("close", () => { if (opener) opener.focus(); });

  /* ---------- Sugerir outro ---------- */
  $("#btnSuggest").href = waLink("Oi! Vi o convite. Tenho outra ideia de rolê: ");
  if (!CONFIG.whatsapp) {
    const w = $("#suggestWarn");
    w.hidden = false;
    w.textContent = "Abre o WhatsApp: é só escolher o meu contato.";
  }

  /* ---------- Início ---------- */
  renderCards();
  const start = (location.hash || "").slice(1);
  try { history.replaceState({ s: "invite" }, "", location.pathname + location.search); } catch (_) {}
  if (start === "catalog") { show("catalog"); }
})();
