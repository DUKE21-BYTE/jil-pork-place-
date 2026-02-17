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

    { id: "m1", name: "1/4 Pork + Ugali + Greens", portion: "Standard", priceKsh: 250, category: "Pork Meals", desc: "Wet Fry or Dry Fry.", image: "images/image-02.jpg" },
    { id: "cm1", name: "Combo: 1/4 Pork + Soda", portion: "Meal + 300ml Soda", priceKsh: 300, category: "Deals", desc: "1/4 Pork + Ugali + Greens + Soda.", image: "images/pork-soda-combo.jpg" },
    { id: "m2", name: "1/2 kg Pork + Ugali + Greens", portion: "Large", priceKsh: 500, category: "Pork Meals", desc: "Great for hungry appetite.", image: "images/image-03.jpg" },
    { id: "m3", name: "1 kg Pork + Ugali + Greens", portion: "Platter", priceKsh: 1000, category: "Pork Meals", desc: "Sharing platter (Wet/Dry).", image: "images/image-04.jpg" },
    { id: "f1", name: "Fries (Plate)", portion: "1 plate", priceKsh: 130, category: "Fries", desc: "Crispy fries.", image: "images/fries-plate.jpg" },
    { id: "f2", name: "Fries + 1/4 Pork", portion: "Mix", priceKsh: 350, category: "Fries", desc: "Fries with tasty pork.", image: "images/image-05.jpg" },
    { id: "f3", name: "Fries Mix 1kg Pork", portion: "1kg Platter", priceKsh: 1400, category: "Fries", desc: "Massive pork & fries mix.", image: "images/pork-mixed-chipo.jpg" },
    { id: "s1", name: "Extra Greens / Ugali", portion: "Side", priceKsh: 50, category: "Sides", desc: "Fresh greens or hot ugali.", image: "images/greens.jpg" },
    { id: "d1", name: "Soda (300ml)", portion: "300ml", priceKsh: 50, category: "Drinks", desc: "Coke, Fanta, Sprite, etc.", image: "images/coke-soda.jpg" },
    { id: "d2", name: "Minute Maid (400ml)", portion: "400ml", priceKsh: 80, category: "Drinks", desc: "Refreshing fruit juice.", image: "images/minute-maid.png" },
    { id: "c1", name: "1/4 Kienyeji Chicken", portion: "1/4 Chicken+Ugali", priceKsh: 400, category: "Chicken", desc: "KSh 350 (Chicken) + KSh 50 (Ugali). Order: 0707906991", image: "images/kienyeji-chicken-update.jpg", whatsapp: "254707906991" },
  ],

  butchery: [
    { id: "b1", name: "Pork Ribs", variant: "Unskinned", pricePerKgKsh: 680, desc: "Raw ribs (unskinned).", image: "images/pork-ribs-new.jpg" },
    { id: "b2", name: "Pork Ribs", variant: "Skinned", pricePerKgKsh: 800, desc: "Raw ribs (skin removed).", image: "images/image-01.jpg" },
    { id: "b3", name: "Pork Steak (Fat Free)", variant: "Prime Cut", pricePerKgKsh: 920, desc: "Tender steak cuts.", image: "images/pork-steak-new.png" },
    { id: "b4", name: "Pork Belly", variant: "Whole", pricePerKgKsh: 680, desc: "Perfect for roasting.", image: "images/pork-belly-update.jpg" },
    { id: "b5", name: "Pork Shoulder", variant: "Whole/Cut", pricePerKgKsh: 680, desc: "Fresh shoulder cut.", image: "images/pork-leg.jpg" },
  ],

  topSellerIds: ["m1", "m3", "c1"],
});

const STATE = {
  cart: [],
};

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
          <button class="btn btn--primary" data-action="add-cart" data-id="${item.id}">Add +</button>
          <a class="btn btn--ghost" href="${waLink(msg, item.whatsapp)}" target="_blank" rel="noopener noreferrer">Order Now</a>
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
          <button class="btn btn--primary" data-action="add-cart" data-id="${item.id}">Add +</button>
          <a class="btn btn--ghost" href="${waLink(msg)}" target="_blank" rel="noopener noreferrer">Order Now</a>
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
  // Match specific day OR "Everyday"
  const found = DATA.hours.find((h) => h.day === key) || DATA.hours.find((h) => h.day === "Everyday");
  el.textContent = found ? `Today: ${found.time}` : "See hours in Location.";
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

  // Init Cart UI
  updateCartUI();
}

/* ---------------- Cart Logic ---------------- */
function addToCart(itemId) {
  const item = DATA.menu.find(i => i.id === itemId) || DATA.butchery.find(i => i.id === itemId);
  if (!item) return;

  STATE.cart.push(item);
  updateCartUI();

  // Simple toast feedback
  const btn = document.activeElement;
  if (btn && btn.tagName === "BUTTON") {
    const old = btn.textContent;
    btn.textContent = "Added!";
    setTimeout(() => btn.textContent = old, 1000);
  }
}

function updateCartUI() {
  let float = qs("#cartFloat");
  if (!float && STATE.cart.length > 0) {
    float = document.createElement("a");
    float.id = "cartFloat";
    float.className = "cart-float";
    float.href = "#order";
    document.body.appendChild(float);
  }

  if (float) {
    const count = STATE.cart.length;
    if (count === 0) {
      float.remove();
    } else {
      float.textContent = `View Order (${count})`;
    }
  }

  // If we are on the order page, refresh the summary
  if (getRoute() === "order") {
    populateOrderForm();
  }
}

function populateOrderForm() {
  const ta = qs("textarea[name='order']");
  if (!ta) return;

  // If cart is empty, don't overwrite if user has typed something custom
  if (STATE.cart.length === 0) return;

  const lines = STATE.cart.map(item => {
    const price = item.priceKsh || item.pricePerKgKsh;
    const pUnit = item.priceKsh ? "" : "/kg";
    return `• ${item.name} (${formatKsh(price)}${pUnit})`;
  });

  const total = STATE.cart.reduce((sum, item) => sum + (item.priceKsh || item.pricePerKgKsh), 0);

  const text = [
    "I'd like to order:",
    ...lines,
    "",
    `Estimated Total: ${formatKsh(total)}`,
    "(Plus delivery fee if applicable)"
  ].join("\n");

  ta.value = text;

  // Optional: Scroll to form
  ta.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Ensure global access for onclick
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

  // Event Delegation for dynamic buttons
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action='add-cart']");
    if (btn) {
      const id = btn.dataset.id;
      if (id) addToCart(id);
    }
  });

  // Wire interactions
  wireForms();
  wireMobileMenu();
  wireGlobalButtons();

  // Live menu filtering
  const searchInput = qs("#menuSearch");
  if (searchInput) searchInput.addEventListener("input", renderMenu);
  
  const categorySelect = qs("#menuCategory");
  if (categorySelect) categorySelect.addEventListener("change", renderMenu);

  // Route handling
  const onRoute = () => {
    const route = getRoute();
    showRoute(route);
    // ensure menu grid updates if user comes to menu
    if (route === "menu") renderMenu();
    
    // Close mobile menu on route change
    const links = qs("#navLinks");
    if (links) links.classList.remove("is-open");
  };

  window.addEventListener("hashchange", onRoute);
  onRoute();
}

function wireMobileMenu() {
  const toggle = qs("#navToggle");
  const links = qs("#navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen);
    
    // Animate icon (simple change)
    toggle.innerHTML = isOpen 
      ? `<svg class="icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>` // Close (X)
      : `<svg class="icon" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`; // Hamburger
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!links.contains(e.target) && !toggle.contains(e.target) && links.classList.contains("is-open")) {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
    }
  });
}

document.addEventListener("DOMContentLoaded", boot);
