---
description: Apply "Golden Rule" Security and Quality standards to a web project
---

# 1. Server Security Configuration (Netlify)

Create a `netlify.toml` file in the root to enforce security headers.

```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=(), payment=()"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; frame-src https://www.google.com; connect-src 'self';"
```

# 2. SEO Foundation

Create a `robots.txt` file in the root.

```txt
User-agent: *
Allow: /
# Add Sitemap: https://yourdomain.com/sitemap.xml if available
```

# 3. HTML Security (CSP & Links)

- Add the following meta tag to the `<head>` of your HTML files:
  ```html
  <meta
    http-equiv="Content-Security-Policy"
    content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; frame-src https://www.google.com; connect-src 'self';"
  />
  ```
- Scan all `<a>` tags with `target="_blank"`. Ensure they have `rel="noopener noreferrer"`.

# 4. JavaScript Refactor (Quality)

- **Remove Inline Listeners:** Identify any `onclick="..."` attributes in your HTML or template strings.
- **Implement Event Delegation:** Replace them with a document-level `click` listener in your `app.js`:
  ```javascript
  document.addEventListener("click", (e) => {
    // Example for a button with data-action="my-action"
    const btn = e.target.closest("[data-action='my-action']");
    if (btn) {
      // Handle click
    }
  });
  ```
