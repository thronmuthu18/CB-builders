# CB BUILDERS — Architecture & Construction Company Website

Official website repository for **CB BUILDERS**, a premier Architecture & Construction company based in Tirunelveli, Tamil Nadu.

---

## 🏗️ Overview & Tech Stack

This website showcases CB BUILDERS' comprehensive building solutions, including turnkey residential construction, commercial projects, interior design, elevation models, painting, steps, and portico/tiles work.

- **Frontend Core**: HTML5, Vanilla CSS3 (Custom Variables & Modern Flexbox/Grid), Modern ES6+ JavaScript.
- **Iconography & Typography**: Font Awesome 6, Google Fonts (`Playfair Display`, `Inter`).
- **Interactive UI**: Swiper.js (Full-width hero slider & testimonials carousel), AOS.js (Scroll animations).
- **Branding**: Vector SVG Logo System & Favicon in `assets/branding/`.

---

## 📁 Organized Project Structure

```
CB_BUILDERS_COMPLETE_PROJECT/
├── assets/
│   ├── branding/
│   │   ├── cb-builders-logo.svg      # SVG Primary Logo Asset
│   │   ├── cb-builders-icon.svg      # SVG Emblem Icon Asset
│   │   └── favicon.svg               # SVG Favicon Asset
│   ├── css/
│   │   └── styles.css                # Production CSS Design System
│   ├── js/
│   │   └── script.js                 # Modular JS Logic & Security Handlers
│   └── images/
│       ├── about/                    # About section images
│       ├── bedroom/                  # Model Bedroom projects (bed1 - bed30)
│       ├── ceiling/                  # Model Ceiling projects (celling 1 - celling 45)
│       ├── cupboards/                # Cupboard interior projects (a1 - a23)
│       ├── doors/                    # Interior Door projects (door1 - door30)
│       ├── elevation/                # Home Elevation projects (home 1 - home 54)
│       ├── interior/                 # General Interior projects (interior1 - interior33)
│       ├── kitchen/                  # Model Kitchen projects (kitchen1 - kitchen24)
│       ├── painting/                 # Painting projects (paint1 - paint30)
│       ├── steps/                    # Staircase Step projects (step1 - step27)
│       └── tiles/                    # Portico & Tiles projects (tiles2 - tiles18, portico1 - portico10)
├── favicon.svg                       # Root Favicon Fallback
├── index.html                        # Main Production Document
├── package.json                      # Local Development Command Configuration
├── .env.example                      # Template Environment Variables
├── .gitignore                        # Git Exclusion Rules
└── README.md                         # Project Documentation
```

---

## 🚀 Development & Local Execution

### Option 1: Direct Browser Access
Double-click `index.html` to open directly in any modern web browser.

### Option 2: Local HTTP Server (Python)
```bash
python -m http.server 8080
```
Open `http://localhost:8080` in your browser.

### Option 3: Node.js / npm
```bash
npm start
# OR
npm run dev
```

---

## 🔐 Security & Optimization Hardening

1. **XSS Protection**: Contact form input data is sanitized prior to processing or WhatsApp API redirection.
2. **Rate Limiting**: Anti-spam throttling prevents rapid repeated submissions.
3. **Tabnabbing Security**: All external `target="_blank"` links include `rel="noopener noreferrer"`.
4. **No Secrets Exposed**: Zero API keys or private credentials committed. Template secrets documented in `.env.example`.
5. **Responsive Performance**: Below-the-fold images optimized with `loading="lazy"`. Full viewport horizontal overflow prevention (`overflow-x: hidden`).

---

## 📱 Tested Responsive Viewports

- **Mobile Viewports**: 320px, 360px, 375px, 390px, 414px, 480px
- **Tablet Viewports**: 768px, 1024px
- **Desktop Viewports**: 1280px, 1440px, 1920px

---

## 📞 Contact Information

- **Company**: CB BUILDERS
- **Address**: M.K.P. Nagar, Palayamkottai, Tirunelveli, Tamil Nadu
- **Phone / WhatsApp**: [+91 63825 39787](tel:+916382539787)
- **Email**: [sudalaimuthusudalai754@gmail.com](mailto:sudalaimuthusudalai754@gmail.com)