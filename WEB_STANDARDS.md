# Golden Security & Quality Standards

This document outlines the mandatory specifications applied to this project to ensure maximum security, performance, and code quality. These standards should be applied to all future web projects.

## 1. Security (The "Zero Trust" Layer)

### A. Production Headers (Hosting Config)

**File:** `netlify.toml` (or equivalent for Vercel/Firebase)
**Purpose:** strict server-side security instructions for the browser.
**Specs:**

- `X-Frame-Options: DENY` (Anti-Clickjacking)
- `X-Content-Type-Options: nosniff` (Prevent MIME-sniffing)
- `Referrer-Policy: strict-origin-when-cross-origin` (Privacy)
- `Permissions-Policy` (Disable unused hardware access like camera/mic)
- `Content-Security-Policy` (Backup for the meta tag)

### B. Content Security Policy (CSP)

**File:** `index.html` (`<head>`)
**Purpose:** Whitelist exactly what the browser is allowed to load.
**Specs:**

- Default: `self` (Only load files from our own domain)
- Styles/Scripts: `self` + `unsafe-inline` (Required for some critical CSS/JS, but minized)
- Images: `self` + `data:` (Allow base64 images)
- Frames: Whitelist specific external frames (e.g., `https://www.google.com` for Maps)

### C. Link Hygiene

**File:** All HTML files
**Purpose:** Prevent reverse-tabnabbing attacks from external links.
**Specs:**

- All `target="_blank"` links MUST have `rel="noopener noreferrer"`.

## 2. Quality (The "KISS" Layer)

### A. JavaScript Architecture

**File:** `app.js` / `main.js`
**Purpose:** Decouple logic from UI and prevent memory leaks.
**Specs:**

- **No Inline Events:** Do NOT use `onclick="..."` in HTML.
  - _Bad:_ `<button onclick="addToCart(1)">`
  - _Good:_ `<button data-action="add-cart" data-id="1">`
- **Event Delegation:** Use a single global listener for dynamic elements.
- **No Global Pollution:** Avoid attaching functions to `window` unless absolutely necessary (e.g., debugging).

### B. SEO Standards

**File:** Root directory
**Purpose:** Ensure visibility to search engines.
**Specs:**

- `robots.txt`: Explicitly allow crawling and point to the sitemap.
- `meta description`: Unique, compelling summary for every page.
- `title`: Descriptive `<title>` tag.

## 3. Implementation Checklist for New Projects

1. [ ] Add `netlify.toml` / server config.
2. [ ] Add `robots.txt`.
3. [ ] Add CSP `<meta>` tag.
4. [ ] Audit external links for `rel="noopener noreferrer"`.
5. [ ] Refactor inline JS to Event Delegation.
