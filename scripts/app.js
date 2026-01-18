"use strict";

/**
 * ✅ EDIT THESE 4 THINGS ONLY (then the whole site updates):
 * 1) WhatsApp number  (format: 2547XXXXXXXX)
 * 2) Call number      (format: 2547XXXXXXXX)
 * 3) Google Maps query
 * 4) Address text
 */
const CONTACT = Object.freeze({
  businessName: "Jil Pork Place",
  area: "Ruaka",
  whatsapp: "254723959492",
  call: "254719419410",
  googleMapsQuery: "Jil Pork Place Ruaka",
  addressText: "Ruaka, Kenya",
  tiktok: "https://www.tiktok.com/@j.i.l.pork.place?is_from_webapp=1&sender_device=pc",
  facebook: "https://www.facebook.com/profile.php?id=61586075008977",
});

const DATA = Object.freeze({
  hours: [
    { day: "Everyday", time: "8:00 AM – 10:00 PM" },
  ],

  menu: [
    { id: "m1", name: "Pork + Ugali + Greens", portion: "1/4 portion", priceKsh: 250, category: "Pork + Ugali", desc: "Classic combo.", image: "images/image-02.jpg" },
    { id: "m2", name: "Pork + Ugali + Greens", portion: "1/2 portion", priceKsh: 450, category: "Pork + Ugali", desc: "Larger portion to share.", image: "images/image-03.jpg" },
    { id: "m3", name: "Wet Fry Pork", portion: "1 kg", priceKsh: 1200, category: "Pork Fry", desc: "Juicy/Saucy pork fry.", image: "images/image-04.jpg" },
    { id: "m4", name: "Dry Fry Pork", portion: "1 kg", priceKsh: 1200, category: "Pork Fry", desc: "Crispy dry fry.", image: "images/image-05.jpg" },
    { id: "m5", name: "Choma (Roast) Pork", portion: "1 kg", priceKsh: 1200, category: "Pork Choma", desc: "BBQ roasted pork.", image: "images/image-06.jpg" },
    { id: "m6", name: "Accompaniments", portion: "Ugali / Greens", priceKsh: 50, category: "Sides", desc: "Extra ugali or greens.", image: "images/image-07.jpg" },
    { id: "m7", name: "Soft Drinks", portion: "300ml / 500ml", priceKsh: 70, category: "Drinks", desc: "Soda (Coke, Fanta, etc).", image: "images/image-08.jpg" },
    { id: "c1", name: "1/4 Kienyeji Chicken", portion: "1/4 Chicken+Ugali", priceKsh: 400, category: "Chicken", desc: "KSh 350 (Chicken) + KSh 50 (Ugali). Order: 0707906991", image: "images/kienyeji-chicken-update.jpg", whatsapp: "254707906991" },
  ],

  butchery: [
    { id: "b1", name: "Pork Ribs", variant: "Unskinned", pricePerKgKsh: 680, desc: "Raw ribs (unskinned).", image: "images/pork-ribs-new.jpg" },
    { id: "b2", name: "Pork Ribs", variant: "Skinned", pricePerKgKsh: 800, desc: "Raw ribs (skin removed).", image: "images/image-01.jpg" },
    { id: "b3", name: "Pork Steak", variant: "Prime Cut", pricePerKgKsh: 800, desc: "Tender steak cuts.", image: "images/pork-steak-update.jpg" },
    { id: "b4", name: "Pork Belly", variant: "Whole", pricePerKgKsh: 680, desc: "Perfect for roasting.", image: "images/pork-belly-update.jpg" },
    { id: "b5", name: "Pork Leg", variant: "Whole/Cut", pricePerKgKsh: 680, desc: "Fresh leg cut.", image: "images/pork-leg.jpg" },
  ],

  topSellerIds: ["m1", "m3", "c1"],
});

/* ---------------- Utils ---------------- */
const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));
const formatKsh = (n) => `KSh ${Number(n).toLocaleString("en-KE")}`;
const enc = (s) => encodeURIComponent(String(s ?? ""));
const waLink = (msg, phone = CONTACT.whatsapp) => `https://wa.me/${phone}?text=${enc(msg)}`;
const callLink = () => `tel:${CONTACT.call}`;

function clamp(text, max = 120) {
  const t = String(text ?? "");
  return t.length <= max ? t : `${t.slice(0, max - 1).trim()}…`;
}

/* ---------------- Routing (one HTML) ---------------- */
function getRoute() {
  const h = (location.hash || "#home").replace("#", "").trim();
  return h || "home";
}

function showRoute(route) {
  const pages = qsa(".route");
  pages.forEach((p) => {
    const isTarget = p.getAttribute("data-page") === route;
    p.hidden = !isTarget;
  });

  qsa(".nav__link").forEach((a) => {
    a.classList.toggle("is-active", a.getAttribute("data-route") === route);
  });

  // nice UX: scroll to top on navigation
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------------- UI Builders ---------------- */
function menuCard(item) {
  const msg = [
    `Hi ${CONTACT.businessName}, I'd like to order:`,
    `• Item: ${item.name}`,
    `• Portion: ${item.portion}`,
    `• Price: ${formatKsh(item.priceKsh)}`,
    `Pickup/Delivery: ____`,
    `My location (if delivery): ____`,
  ].join("\n");

  const imgHtml = item.image
    ? `<div class="card__media"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>`
    : '';

  return `
    <article class="card">
      ${imgHtml}
      <div class="card__top">
        <div>
          <div class="pill">${item.category}</div>
          <h3>${item.name}</h3>
          <p class="muted">${item.portion}</p>
        </div>
        <div class="price">${formatKsh(item.priceKsh)}</div>
      </div>
      <div class="card__body">
        <p>${clamp(item.desc, 120)}</p>
        <div class="card__actions">
          <a class="btn btn--primary" href="${waLink(msg, item.whatsapp)}" target="_blank" rel="noopener">Order This</a>
          <a class="btn btn--ghost" href="#order">Quick Order</a>
        </div>
      </div>
    </article>
  `;
}

function butcheryCard(item) {
  const msg = [
    `Hi ${CONTACT.businessName}, I'd like raw pork:`,
    `• Cut: ${item.name}`,
    `• Type: ${item.variant}`,
    `• Price: ${formatKsh(item.pricePerKgKsh)} per kg`,
    `Weight (kg): ____`,
    `Pickup time: ____`,
  ].join("\n");

  const imgHtml = item.image
    ? `<div class="card__media"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>`
    : '';

  return `
    <article class="card">
      ${imgHtml}
      <div class="card__top">
        <div>
          <div class="pill">Raw Pork</div>
          <h3>${item.name}</h3>
          <p class="muted">${item.variant}</p>
        </div>
        <div class="price">${formatKsh(item.pricePerKgKsh)}/kg</div>
      </div>
      <div class="card__body">
        <p>${clamp(item.desc, 120)}</p>
        <div class="card__actions">
          <a class="btn btn--primary" href="${waLink(msg)}" target="_blank" rel="noopener">Order on WhatsApp</a>
          <a class="btn btn--ghost" href="#order">Quick Order</a>
        </div>
      </div>
    </article>
  `;
}

/* ---------------- Renderers ---------------- */
function renderTopSellers() {
  const host = qs("#topSellers");
  if (!host) return;

  const map = new Map(DATA.menu.map((m) => [m.id, m]));
  const top = DATA.topSellerIds.map((id) => map.get(id)).filter(Boolean);
  host.innerHTML = top.map(menuCard).join("");
}

function renderHoursPreview() {
  const el = qs("#hoursPreview");
  if (!el) return;

  const today = new Date().getDay(); // 0 Sun..6 Sat
  const map = { 0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat" };
  const key = map[today];
  const found = DATA.hours.find((h) => h.day === key);
  el.textContent = found ? `Today (${found.day}): ${found.time}` : "See hours in Location.";
}

function renderMenu() {
  const grid = qs("#menuGrid");
  if (!grid) return;

  const search = (qs("#menuSearch")?.value || "").trim().toLowerCase();
  const cat = qs("#menuCategory")?.value || "all";

  const filtered = DATA.menu.filter((x) => {
    const text = `${x.name} ${x.portion} ${x.category} ${x.desc}`.toLowerCase();
    const matchesSearch = !search || text.includes(search);
    const matchesCat = cat === "all" || x.category === cat;
    return matchesSearch && matchesCat;
  });

  grid.innerHTML = filtered.map(menuCard).join("");
}

function fillMenuCategories() {
  const select = qs("#menuCategory");
  if (!select) return;

  const cats = Array.from(new Set(DATA.menu.map((m) => m.category))).sort();
  cats.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });
}

function renderButchery() {
  const grid = qs("#butcheryGrid");
  if (!grid) return;
  grid.innerHTML = DATA.butchery.map(butcheryCard).join("");
}

function renderLocation() {
  const addr = qs("#addressText");
  if (addr) addr.textContent = CONTACT.addressText;

  const q = encodeURIComponent(CONTACT.googleMapsQuery);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${q}`;

  const btn = qs("#mapsBtn");
  if (btn) btn.href = mapsUrl;

  const frame = qs("#mapsFrame");
  if (frame) frame.src = `https://www.google.com/maps?q=${q}&output=embed`;

  const list = qs("#hoursList");
  if (list) {
    list.innerHTML = DATA.hours.map((h) => `<li><span>${h.day}</span><em>${h.time}</em></li>`).join("");
  }
}

/* ---------------- Forms ---------------- */
function wireForms() {
  // Butchery request
  const cutForm = qs("#cutForm");
  if (cutForm) {
    const hint = qs("#cutFormHint");
    const setHint = (t) => { if (hint) hint.textContent = t; };

    cutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(cutForm);
      const cut = String(fd.get("cut") || "").trim();
      const weight = String(fd.get("weight") || "").trim();
      const skin = String(fd.get("skin") || "").trim();
      const time = String(fd.get("time") || "").trim();
      const notes = String(fd.get("notes") || "").trim();

      if (!cut || !weight) {
        setHint("Please add cut type and weight.");
        return;
      }

      const msg = [
        `Hi ${CONTACT.businessName}, I'd like a raw pork cut request:`,
        `• Cut: ${cut}`,
        `• Weight: ${weight} kg`,
        `• Skinned/Unskinned: ${skin || "No preference"}`,
        `• Pickup time: ${time || "Not sure yet"}`,
        `• Notes: ${notes || "None"}`,
      ].join("\n");

      window.open(waLink(msg), "_blank", "noopener");
      setHint("Opening WhatsApp…");
    });
  }

  // Quick order form
  const orderForm = qs("#quickOrderForm");
  if (orderForm) {
    const hint = qs("#orderFormHint");
    const setHint = (t) => { if (hint) hint.textContent = t; };

    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(orderForm);
      const name = String(fd.get("name") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const order = String(fd.get("order") || "").trim();
      const service = String(fd.get("service") || "").trim();
      const location = String(fd.get("location") || "").trim();

      if (!name || !order) {
        setHint("Please add your name and order details.");
        return;
      }

      const msg = [
        `Hi ${CONTACT.businessName}, quick order:`,
        `• Name: ${name}`,
        phone ? `• My phone: ${phone}` : null,
        `• Order: ${order}`,
        `• Service: ${service || "Pickup"}`,
        `• Location: ${location || "—"}`,
      ].filter(Boolean).join("\n");

      window.open(waLink(msg), "_blank", "noopener");
      setHint("Opening WhatsApp…");
    });
  }
}

/* ---------------- Global CTAs + Footer + Sticky ---------------- */
function wireGlobalButtons() {
  const defaultMsg = `Hi ${CONTACT.businessName}, I'd like to order.`;
  const wa = waLink(defaultMsg);
  const call = callLink();

  const waCta = qs("#waCta");
  const waCta2 = qs("#waCta2");
  [waCta, waCta2].filter(Boolean).forEach((a) => {
    a.href = wa; a.target = "_blank"; a.rel = "noopener";
  });

  const calls = [qs("#callCta"), qs("#callCta2"), qs("#callCta3"), qs("#callCta4")].filter(Boolean);
  calls.forEach((a) => (a.href = call));

  // Footer
  const year = qs("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const footerWa = qs("#footerWa");
  if (footerWa) { footerWa.href = wa; footerWa.target = "_blank"; footerWa.rel = "noopener"; }

  const footerTt = qs("#footerTikTok");
  if (footerTt) { footerTt.href = CONTACT.tiktok; footerTt.target = "_blank"; footerTt.rel = "noopener"; }

  const footerFb = qs("#footerFb");
  if (footerFb) { footerFb.href = CONTACT.facebook; footerFb.target = "_blank"; footerFb.rel = "noopener"; }

  const footerCall = qs("#footerCall");
  if (footerCall) footerCall.href = call;

  // New Big Buttons (Socials)
  const tiktokBtn = qs("#tiktokBtn");
  if (tiktokBtn) { tiktokBtn.href = CONTACT.tiktok; tiktokBtn.target = "_blank"; tiktokBtn.rel = "noopener"; }

  const fbBtn = qs("#fbBtn");
  if (fbBtn) { fbBtn.href = CONTACT.facebook; fbBtn.target = "_blank"; fbBtn.rel = "noopener"; }

  // Sticky bar
  const sticky = qs("#stickyBar");
  if (sticky) {
    sticky.innerHTML = `
      <a class="btn btn--primary" href="${wa}" target="_blank" rel="noopener">WhatsApp Order</a>
      <a class="btn btn--ghost" href="${call}">Call</a>
    `;
  }
}

/* ---------------- Boot ---------------- */
function boot() {
  // Init menu category select
  fillMenuCategories();

  // Render all sections once
  renderTopSellers();
  renderHoursPreview();
  renderMenu();
  renderButchery();
  renderLocation();

  // Wire interactions
  wireForms();
  wireGlobalButtons();

  // Live menu filtering
  qs("#menuSearch")?.addEventListener("input", renderMenu);
  qs("#menuCategory")?.addEventListener("change", renderMenu);

  // Route handling
  const onRoute = () => {
    const route = getRoute();
    showRoute(route);
    // ensure menu grid updates if user comes to menu
    if (route === "menu") renderMenu();
  };

  window.addEventListener("hashchange", onRoute);
  onRoute();
}

document.addEventListener("DOMContentLoaded", boot);
