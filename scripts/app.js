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
    { day: "Mon - Sat", time: "8:00 AM – 9:00 PM" },
    { day: "Sun", time: "8:00 AM – 7:00 PM" },
  ],

  menu: [
    { id: "m1",  name: "1/4 Pork + Ugali + Greens",      portion: "Standard",         priceKsh: 250,  category: "Pork Meals",   desc: "Wet Fry or Dry Fry.",                                              image: "images/pork-ugali-greens-clean.jpg" },
    { id: "m6",  name: "1/4 Fry Pork (No Ugali)",         portion: "Meat Only",         priceKsh: 230,  category: "Pork Meals",   desc: "1/4 Fry Pork without Ugali.",                                      image: "images/fatty-dry-fry.jpg" },
    { id: "cm1", name: "Combo: 1/4 Pork + Soda",          portion: "Meal + 300ml Soda", priceKsh: 300,  category: "Deals",        desc: "1/4 Pork + Ugali + Greens + Soda.",                                image: "images/pork-soda-combo.jpg" },
    { id: "m2",  name: "1/2 kg Pork + Ugali + Greens",    portion: "Large",             priceKsh: 500,  category: "Pork Meals",   desc: "Great for hungry appetite.",                                       image: "images/image-13.jpg" },
    { id: "m5",  name: "3/4 kg Pork + Ugali + Greens",    portion: "Extra Large",       priceKsh: 750,  category: "Pork Meals",   desc: "Perfect for sharing or large appetite.",                           image: "images/pork.jpg" },
    { id: "m3",  name: "1 kg Pork + Ugali + Greens",      portion: "Platter",           priceKsh: 1000, category: "Pork Meals",   desc: "Sharing platter (Wet/Dry).",                                       image: "images/image-03.jpg" },
    { id: "m4",  name: "Fatty Pork (Dry Fry)",             portion: "Standard",          priceKsh: 250,  category: "Pork Meals",   desc: "Rich and flavorful fatty pork dry fry with ugali and greens.",     image: "images/fatty-dry-fry.jpg" },
    { id: "f1",  name: "Fries (Plate)",                    portion: "1 plate",           priceKsh: 130,  category: "Fries",        desc: "Crispy fries.",                                                    image: "images/fries-plate.jpg" },
    { id: "f2",  name: "Fries + 1/4 Pork",                portion: "Mix",               priceKsh: 350,  category: "Fries",        desc: "Fries with tasty pork.",                                           image: "images/pork-fries-featured.jpg" },
    { id: "f3",  name: "1kg Pork Mix Chipo Platter",       portion: "1kg Platter",       priceKsh: 1400, category: "Fries",        desc: "Massive pork & fries mix.",                                        image: "images/pork-mixed-chipo.jpg" },
    { id: "c1",  name: "1/4 Kienyeji Chicken + Ugali",    portion: "Standard",          priceKsh: 400,  category: "Chicken Menu", desc: "Wet Fry Kienyeji chicken served with ugali and greens.",            image: "images/kienyeji-chicken-update.jpg" },
    { id: "c2",  name: "1/4 Kienyeji Chicken (Dry Fry)",  portion: "1/4 Chicken",       priceKsh: 350,  category: "Chicken Menu", desc: "Tasty dry fried Kienyeji chicken. Ugali extra.",                   image: "images/kienyeji-dry-fry.png" },
    { id: "c3",  name: "1/4 Kienyeji Chicken (Boiled)",   portion: "With Soup",         priceKsh: 350,  category: "Chicken Menu", desc: "Healthy boiled Kienyeji chicken with nourishing soup.",             image: "images/kienyeji-boiled.jpg" },
    { id: "c4",  name: "1/4 Kienyeji Chicken (Stir Fry)", portion: "1/4 Chicken",       priceKsh: 400,  category: "Chicken Menu", desc: "Expertly stir fried Kienyeji chicken with fresh vegetables.",      image: "images/kienyeji-stir-fry.jpg" },
    { id: "c5",  name: "1/4 Kienyeji Chicken (Wet Fry)",  portion: "1/4 Chicken",       priceKsh: 350,  category: "Chicken Menu", desc: "Rich and tasty Wet Fry Kienyeji chicken. Ugali extra.",             image: "images/wetfry.jpg" },
    { id: "bf1", name: "Beef + Ugali + Greens",            portion: "Meal",              priceKsh: 350,  category: "Beef",         desc: "Tasty beef stew served with greens and ugali.",                    image: "images/image-11.jpg" },
    { id: "bf2", name: "Beef + Fries",                     portion: "Mix",               priceKsh: 400,  category: "Beef",         desc: "Delicious beef stew served with our signature crispy fries.",      image: "images/beef-fries.jpg" },
    { id: "d1",  name: "Soda (300ml)",                     portion: "300ml",             priceKsh: 50,   category: "Drinks",       desc: "Coke, Fanta, Sprite, etc.",                                        image: "images/coke-soda.jpg" },
    { id: "d3",  name: "Dasani Water (500ml)",             portion: "500ml",             priceKsh: 50,   category: "Drinks",       desc: "Chilled bottled water.",                                           image: "images/dasani-water.png" },
    { id: "s1",  name: "Extra Ugali",                      portion: "Side",              priceKsh: 40,   category: "Sides",        desc: "Hot extra ugali.",                                                 image: "images/extra-ugali.png" },
    { id: "s2",  name: "Extra Vegetables",                 portion: "Side",              priceKsh: 40,   category: "Sides",        desc: "Fresh greens.",                                                    image: "images/greens.jpg" },
  ],

  butchery: [
    { id: "b1", name: "Pork Ribs",             variant: "Unskinned",   pricePerKgKsh: 680,  desc: "Raw ribs (unskinned).",                  image: "images/pork-ribs-new.jpg" },
    { id: "b2", name: "Pork Ribs",             variant: "Skinned",     pricePerKgKsh: 800,  desc: "Raw ribs (skin removed).",               image: "images/image-01.jpg" },
    { id: "b3", name: "Pork Steak (Fat Free)", variant: "Prime Cut",   pricePerKgKsh: 920,  desc: "Tender steak cuts.",                     image: "images/pork-steak-new.png" },
    { id: "b4", name: "Pork Belly",            variant: "Whole",       pricePerKgKsh: 680,  desc: "Perfect for roasting.",                  image: "images/pork-belly-update.jpg" },
    { id: "b5", name: "Pork Shoulder",         variant: "Whole/Cut",   pricePerKgKsh: 680,  desc: "Fresh shoulder cut.",                    image: "images/pork-leg.jpg" },
    { id: "b7", name: "Pork Chops",            variant: "Select Cut",  pricePerKgKsh: 920,  desc: "Premium pork chops cut fresh daily.",    image: "images/pork-chops.jpg" },
    { id: "b8", name: "Pork Fillet",           variant: "Lean Cut",    pricePerKgKsh: 920,  desc: "Extra tender and lean pork fillet.",     image: "images/pork-fillet.jpg" },
    { id: "b6", name: "Raw Kienyeji Chicken",  variant: "1 kg",        pricePerKgKsh: 1300, desc: "Fresh raw kienyeji chicken.",            image: "images/raw-kienyeji-chicken.jpg" },
  ],

  topSellerIds: ["f2", "f3", "m1", "m3", "c1", "c4", "bf1"],
});

const STATE = {
  cart: [],
  platter: (() => {
    try { return JSON.parse(localStorage.getItem("jil_platter") || "[]"); }
    catch { return []; }
  })(),
};

/* ---------------- Utils ---------------- */
const qs  = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));
const formatKsh = (n) => `KSh ${Number(n).toLocaleString("en-KE")}`;
const enc = (s) => encodeURIComponent(String(s ?? ""));
const waLink  = (msg, phone = CONTACT.whatsapp) => `https://wa.me/${phone}?text=${enc(msg)}`;
const CALL_LINK = `tel:${CONTACT.call}`;

function clamp(text, max = 120) {
  const t = String(text ?? "");
  return t.length <= max ? t : `${t.slice(0, max - 1).trim()}…`;
}

/**
 * Shared helper: build the image HTML block used by both menuCard and butcheryCard.
 */
function buildImgHtml(item) {
  return item.image
    ? `<div class="card__media"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>`
    : "";
}

/**
 * Shared helper: find-or-increment an item in a cart/platter list.
 * Returns the list (mutated in-place) for chaining convenience.
 */
function upsertItem(list, item) {
  const existing = list.find((e) => e.item.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    list.push({ item, qty: 1 });
  }
  return list;
}

/**
 * Shared helper: create a hint-setter closure for a form hint element.
 * Avoids repeating the same pattern three times in wireForms().
 */
function createHintSetter(hintId) {
  const el = qs(`#${hintId}`);
  return (text) => { if (el) el.textContent = text; };
}

/* ---------------- Routing (one HTML) ---------------- */
function getRoute() {
  const h = (location.hash || "#home").replace("#", "").trim();
  return h || "home";
}

function showRoute(route) {
  qsa(".route").forEach((p) => {
    p.hidden = p.getAttribute("data-page") !== route;
  });

  qsa(".nav__link").forEach((a) => {
    a.classList.toggle("is-active", a.getAttribute("data-route") === route);
  });

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

  return `
    <article class="card">
      ${buildImgHtml(item)}
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
          <a class="btn btn--ghost" href="${waLink(msg)}" target="_blank" rel="noopener noreferrer">Order Now</a>
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

  return `
    <article class="card">
      ${buildImgHtml(item)}
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

function renderChickenHome() {
  const host = qs("#chickenMenu");
  if (!host) return;

  const chicken = DATA.menu.filter((i) => i.category === "Chicken Menu");
  host.innerHTML = chicken.slice(0, 3).map(menuCard).join("");
}

function renderHoursPreview() {
  const el = qs("#hoursPreview");
  if (!el) return;

  const isSunday = new Date().getDay() === 0;
  const time = isSunday ? "8:00 AM – 7:00 PM" : "8:00 AM – 9:00 PM";
  el.textContent = `Today: ${time}`;
}


function renderMenu() {
  const grid = qs("#menuGrid");
  if (!grid) return;

  const search = (qs("#menuSearch")?.value || "").trim().toLowerCase();
  const cat    = qs("#menuCategory")?.value || "all";

  const filtered = DATA.menu.filter((x) => {
    const text = `${x.name} ${x.portion} ${x.category} ${x.desc}`.toLowerCase();
    return (!search || text.includes(search)) && (cat === "all" || x.category === cat);
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
  // Butchery request form
  const cutForm = qs("#cutForm");
  if (cutForm) {
    const setHint = createHintSetter("cutFormHint");
    cutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd     = new FormData(cutForm);
      const cut    = String(fd.get("cut")    || "").trim();
      const weight = String(fd.get("weight") || "").trim();
      const skin   = String(fd.get("skin")   || "").trim();
      const time   = String(fd.get("time")   || "").trim();
      const notes  = String(fd.get("notes")  || "").trim();

      if (!cut || !weight) { setHint("Please add cut type and weight."); return; }

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
    const setHint = createHintSetter("orderFormHint");
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd       = new FormData(orderForm);
      const name     = String(fd.get("name")     || "").trim();
      const phone    = String(fd.get("phone")    || "").trim();
      const order    = String(fd.get("order")    || "").trim();
      const service  = String(fd.get("service")  || "").trim();
      const location = String(fd.get("location") || "").trim();

      if (!name || !order) { setHint("Please add your name and order details."); return; }

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
      STATE.cart = [];
      updateCartUI();
    });
  }

  // Catering form
  const cateringForm = qs("#cateringForm");
  if (cateringForm) {
    const setHint = createHintSetter("cateringFormHint");
    cateringForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd      = new FormData(cateringForm);
      const name    = String(fd.get("name")    || "").trim();
      const guests  = String(fd.get("guests")  || "").trim();
      const type    = String(fd.get("type")    || "").trim();
      const details = String(fd.get("details") || "").trim();

      if (!name || !details) { setHint("Please add name and details."); return; }

      const msg = [
        `Hi ${CONTACT.businessName}, I'd like a catering/bulk quote:`,
        `• Name/Organizer: ${name}`,
        `• Guest Count: ${guests || "N/A"}`,
        `• Needs: ${type}`,
        `• Details: ${details}`,
      ].join("\n");

      window.open(waLink(msg), "_blank", "noopener");
      setHint("Opening WhatsApp…");
    });
  }
}

/* ---------------- Global CTAs + Footer + Sticky Bar ---------------- */
function wireGlobalButtons() {
  const defaultMsg = `Hi ${CONTACT.businessName}, I'd like to order.`;
  const wa = waLink(defaultMsg);

  // WhatsApp CTAs
  [qs("#waCta"), qs("#waCta2")].filter(Boolean).forEach((a) => {
    a.href = wa; a.target = "_blank"; a.rel = "noopener noreferrer";
  });

  // Call CTAs
  [qs("#callCta"), qs("#callCta2"), qs("#callCta3"), qs("#callCta4")].filter(Boolean).forEach((a) => {
    a.href = CALL_LINK;
  });

  // Footer
  const year = qs("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const footerWa = qs("#footerWa");
  if (footerWa) { footerWa.href = wa; footerWa.target = "_blank"; footerWa.rel = "noopener noreferrer"; }

  const footerTt = qs("#footerTikTok");
  if (footerTt) { footerTt.href = CONTACT.tiktok; footerTt.target = "_blank"; footerTt.rel = "noopener noreferrer"; }

  const footerFb = qs("#footerFb");
  if (footerFb) { footerFb.href = CONTACT.facebook; footerFb.target = "_blank"; footerFb.rel = "noopener noreferrer"; }

  const footerCall = qs("#footerCall");
  if (footerCall) footerCall.href = CALL_LINK;

  // Social section buttons
  const tiktokBtn = qs("#tiktokBtn");
  if (tiktokBtn) { tiktokBtn.href = CONTACT.tiktok; tiktokBtn.target = "_blank"; tiktokBtn.rel = "noopener noreferrer"; }

  const fbBtn = qs("#fbBtn");
  if (fbBtn) { fbBtn.href = CONTACT.facebook; fbBtn.target = "_blank"; fbBtn.rel = "noopener noreferrer"; }

  // Sticky bar (mobile — WhatsApp + Call quick actions)
  const stickyBar = qs("#stickyBar");
  if (stickyBar) {
    stickyBar.innerHTML = `
      <a class="btn btn--primary" href="${wa}" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
      <a class="btn btn--ghost" href="${CALL_LINK}">Call Now</a>
    `;
  }

  updateCartUI();
}

/* ---------------- Cart Logic ---------------- */
function addToCart(itemId) {
  const item = DATA.menu.find((i) => i.id === itemId) || DATA.butchery.find((i) => i.id === itemId);
  if (!item) return;

  upsertItem(STATE.cart, item);
  updateCartUI();

  // Toast feedback
  const btn = document.activeElement;
  if (btn && btn.tagName === "BUTTON" && btn.textContent !== "Added!") {
    const old = btn.textContent;
    btn.textContent = "Added!";
    setTimeout(() => { if (btn.textContent === "Added!") btn.textContent = old; }, 1000);
  }
}

function updateCartUI() {
  let float = qs("#cartFloat");
  const totalCount = STATE.cart.reduce((sum, e) => sum + e.qty, 0);

  if (!float && totalCount > 0) {
    float = document.createElement("a");
    float.id = "cartFloat";
    float.className = "cart-float";
    float.href = "#order";
    document.body.appendChild(float);
  }

  if (float) {
    if (totalCount === 0) {
      float.remove();
    } else {
      float.textContent = `View Order (${totalCount})`;
    }
  }

  if (getRoute() === "order") populateOrderForm();
}

function populateOrderForm() {
  const ta = qs("textarea[name='order']");
  if (!ta || STATE.cart.length === 0) return;

  const lines = STATE.cart.map(({ item, qty }) => {
    const price = item.priceKsh || item.pricePerKgKsh;
    const pUnit = item.priceKsh ? "" : "/kg";
    const qtyStr = qty > 1 ? ` x${qty}` : "";
    return `• ${item.name}${qtyStr} (${formatKsh(price)}${pUnit})`;
  });

  const total = STATE.cart.reduce((sum, { item, qty }) => sum + (item.priceKsh || item.pricePerKgKsh) * qty, 0);

  ta.value = [
    "I'd like to order:",
    ...lines,
    "",
    `Estimated Total: ${formatKsh(total)}`,
    "(Plus delivery fee if applicable)",
  ].join("\n");

  ta.scrollIntoView({ behavior: "smooth", block: "center" });
}

/* ---------------- Platter Builder ---------------- */
function renderPlatterOptions() {
  const host = qs("#platterOptions");
  if (!host) return;

  const platterItems = DATA.menu.filter((m) =>
    ["Fries", "Chicken Menu", "Pork Meals", "Beef", "Sides"].includes(m.category)
  );

  host.innerHTML = platterItems.map((item) => `
    <article class="card card--soft" style="display:flex;align-items:center;justify-content:space-between;padding:12px;gap:10px;">
      <div style="flex:1;">
        <h3 style="margin:0;font-size:15px;">${item.name}</h3>
        <p class="muted" style="margin:2px 0 0;font-size:13px;">${formatKsh(item.priceKsh)}</p>
      </div>
      <button class="btn btn--primary" style="padding:8px 12px;" data-action="add-platter" data-id="${item.id}">Add</button>
    </article>
  `).join("");
}

function addToPlatter(itemId, btn) {
  const item = DATA.menu.find((i) => i.id === itemId);
  if (!item) return;

  upsertItem(STATE.platter, item);
  localStorage.setItem("jil_platter", JSON.stringify(STATE.platter));
  updatePlatterUI();

  if (btn && btn.textContent !== "Added!") {
    const old = btn.textContent;
    btn.textContent = "Added!";
    setTimeout(() => { if (btn.textContent === "Added!") btn.textContent = old; }, 800);
  }
}

function removePlatterItem(index) {
  STATE.platter.splice(index, 1);
  localStorage.setItem("jil_platter", JSON.stringify(STATE.platter));
  updatePlatterUI();
}

function clearPlatter() {
  STATE.platter = [];
  localStorage.setItem("jil_platter", JSON.stringify(STATE.platter));
  updatePlatterUI();
}

function updatePlatterUI() {
  const list  = qs("#platterSummaryList");
  const total = qs("#platterTotal");
  if (!list || !total) return;

  if (STATE.platter.length === 0) {
    list.innerHTML = '<li class="muted" style="list-style-type:none;">No items added yet.</li>';
    total.textContent = "KSh 0";
    return;
  }

  let sum = 0;
  list.innerHTML = STATE.platter.map((p, i) => {
    sum += p.item.priceKsh * p.qty;
    return `<li>${p.qty}x ${p.item.name} <button class="btn btn--ghost" style="padding:2px 6px;font-size:10px;margin-left:6px;" data-action="remove-platter" data-index="${i}">X</button></li>`;
  }).join("");

  total.textContent = formatKsh(sum);
}

function wirePlatterBtn() {
  const btn      = qs("#orderPlatterBtn");
  const clearBtn = qs("#clearPlatterBtn");

  if (clearBtn) clearBtn.addEventListener("click", clearPlatter);

  if (btn) {
    btn.addEventListener("click", () => {
      if (STATE.platter.length === 0) {
        alert("Please add items to your platter first!");
        return;
      }

      let sum = 0;
      const lines = STATE.platter.map((p) => {
        sum += p.item.priceKsh * p.qty;
        return `• ${p.qty}x ${p.item.name}`;
      });

      const msg = [
        `Hi ${CONTACT.businessName}, I've built a Custom Platter online:`,
        ...lines,
        ``,
        `Total Estimated: ${formatKsh(sum)}`,
      ].join("\n");

      window.open(waLink(msg), "_blank", "noopener");
    });
  }
}

/* ---------------- Boot ---------------- */
function boot() {
  fillMenuCategories();

  renderTopSellers();
  renderChickenHome();
  renderHoursPreview();
  renderMenu();
  renderButchery();
  renderLocation();
  renderPlatterOptions();
  updatePlatterUI();
  wirePlatterBtn();

  // Event delegation — handles cart adds, platter adds, and platter removes
  document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.matches(".btn[data-action='add-cart']")) {
      const id = el.getAttribute("data-id");
      if (id) addToCart(id);
      return;
    }

    if (el.matches(".btn[data-action='add-platter']")) {
      const id = el.getAttribute("data-id");
      if (id) addToPlatter(id, el);
      return;
    }

    if (el.matches(".btn[data-action='remove-platter']")) {
      const index = parseInt(el.getAttribute("data-index"), 10);
      if (!isNaN(index)) removePlatterItem(index);
    }
  });

  // Hero slideshow (lightweight, guarded against duplicate intervals)
  let currentSlide = 0;
  const slides = qsa("#heroSlideshow .media-card");
  if (slides.length > 1 && !window._slideshowTimer) {
    window._slideshowTimer = setInterval(() => {
      slides[currentSlide].classList.remove("slide-active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("slide-active");
    }, 2500);
  }

  wireForms();
  wireMobileMenu();
  wireGlobalButtons();

  // Live menu filtering
  qs("#menuSearch")?.addEventListener("input", renderMenu);
  qs("#menuCategory")?.addEventListener("change", renderMenu);

  // Route handling
  const onRoute = () => {
    const route = getRoute();

    if (route === "chicken") {
      // Filter menu to chicken category and show menu page
      const select = qs("#menuCategory");
      if (select) select.value = "Chicken Menu";
      showRoute("menu");
      renderMenu();
    } else {
      showRoute(route);
      if (route === "menu") renderMenu();
      if (route === "order") populateOrderForm();
    }

    closeMobileMenu();
  };

  window.addEventListener("hashchange", onRoute);
  onRoute();
}

/**
 * Close the mobile menu and reset the toggle button state.
 */
function closeMobileMenu() {
  const toggle  = qs("#navToggle");
  const links   = qs("#navLinks");
  const overlay = qs("#navOverlay");

  if (links && links.classList.contains("is-open")) {
    links.classList.remove("is-open");
    if (overlay) overlay.classList.remove("is-active");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
    }
  }
}

function wireMobileMenu() {
  const toggle  = qs("#navToggle");
  const links   = qs("#navLinks");
  const overlay = qs("#navOverlay");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    if (overlay) overlay.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.innerHTML = isOpen
      ? `<svg class="icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`
      : `<svg class="icon" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
  });

  if (overlay) overlay.addEventListener("click", closeMobileMenu);

  qsa(".nav__link").forEach((link) => link.addEventListener("click", closeMobileMenu));
}

document.addEventListener("DOMContentLoaded", boot);
