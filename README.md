# KIM Information System — Kawasan Industri Megatama

Trilingual information system for **PT Megatama Putra Sejahtera** (Kawasan Industri Megatama), covering 5 dashboards: General & Master Plan, Technical Data, Legal & Permits, Financials, and Marketing & Collaboration.

三语信息系统（英语默认 / 中文 / 印尼语），涵盖 5 大板块：总览与总规、技术数据、许可与合规、财务、营销与协作。

Sistem informasi trilingual (EN default / ZH / ID) dengan 5 dashboard: Umum & Master Plan, Data Teknis, Hukum & Perizinan, Keuangan, Pemasaran & Kolaborasi.

---

## Features / 功能 / Fitur

- **Trilingual UI** — English (default), 中文, Bahasa Indonesia. Content strictly follows the selected language; proper nouns (company names, document titles, official acronyms) stay unchanged.
- **5 independent dashboards**:
  - `dashboard-1-general.html` — estate profile, master plan versions, land use, infrastructure specification
  - `dashboard-2-technical.html` — FS highlights, development cost, HGB-ready parcels, document library
  - `dashboard-3-legal.html` — permit register by status, AMDAL follow-up matrix (12 items), applicable regulations
  - `dashboard-4-financial.html` — FS KPIs, financial model deal basis, pricing benchmarks, funding position
  - `dashboard-5-marketing.html` — client pipeline (Liando / CATL / Semcorp), agreements, collateral, market intelligence, meetings
- **Client-side access gate** — default credentials: `admin` / `admin@123`. Change them in `assets/js/auth.js`.
  - ⚠️ NOTE: this is a convenience gate, **not a security boundary**. The repository is public; any visitor can read the source and bypass the login. Do not store truly confidential data in a public repo without real server-side authentication.
- **Data rules**:
  - Latest version per type only — older duplicates of the same content are ignored.
  - Every value carries a unit; integers use thousand separators without decimals, other numbers keep one decimal place (rounded).
- Static site — open `index.html` directly or serve via GitHub Pages.

## Structure / 结构 / Struktur

```
KIM/
├── index.html                     # Login + overview
├── dashboard-1-general.html       # M1 General & Master Plan
├── dashboard-2-technical.html     # M2 Technical Data
├── dashboard-3-legal.html         # M3 Legal & Permits
├── dashboard-4-financial.html     # M4 Financials
├── dashboard-5-marketing.html     # M5 Marketing & Collaboration
└── assets/
    ├── css/style.css
    └── js/
        ├── i18n.js                # EN / ZH / ID dictionaries
        ├── data.js                # Data layer (values + units, per-language text)
        ├── auth.js                # Access gate
        └── app.js                 # Shared chrome + chart helper
```

## Data source / 数据来源 / Sumber data

All figures come from the Megatama project file folder (latest version per type, as of 2026-05-26). Sources include: Feasibility Study (Provalindo, 2025-08-28), Development Costs Summary (Ultimate), Cost Estimate 260326, interchange RAB, HGB-ready parcel list, AMDAL follow-up matrix, financial model deal basis, and third-party engagement records. AMDAL matrix source: `Matriks_Tindak_Lanjut_AMDAL_Megatama.xlsx` (authoritative).

## Run / 运行 / Menjalankan

Open `index.html` in a browser (ECharts loads from CDN — internet required), or serve the folder:

```bash
python -m http.server 8000
```

## License / 许可

Internal project of PT Megatama Putra Sejahtera. Data is confidential to the project team; distribute with care.
