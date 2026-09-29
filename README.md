# KIM Information System — Kawasan Industri Megatama

Trilingual information system for **PT Megatama Putra Sejahtera** (Kawasan Industri Megatama), covering 6 dashboards: General & Master Plan, Technical Data, Legal & Permits, Financials, Marketing & Collaboration, and Competitor Analysis.

三语信息系统（英语默认 / 中文 / 印尼语），涵盖 6 大板块：总览与总规、技术数据、许可与合规、财务、营销与协作、竞品分析。

Sistem informasi trilingual (EN default / ZH / ID) dengan 6 dashboard: Umum & Master Plan, Data Teknis, Hukum & Perizinan, Keuangan, Pemasaran & Kolaborasi, Analisis Kompetitor.

---

## Features / 功能 / Fitur

- **Trilingual UI** — English (default), 中文, Bahasa Indonesia. Content strictly follows the selected language; proper nouns (company names, document titles, official acronyms) stay unchanged.
- **6 independent dashboards**:
  - `dashboard-1-general.html` — estate profile, master plan versions, land use, infrastructure specification, **location & logistics map** (Jakarta–Cikampek–Purwakarta–Subang–Patimban corridor, toll/rail/port/airport access)
  - `dashboard-2-technical.html` — FS highlights, development cost, HGB-ready parcels, document library
  - `dashboard-3-legal.html` — permit register by status, AMDAL follow-up matrix (12 items), applicable regulations
  - `dashboard-4-financial.html` — FS KPIs, financial model deal basis, pricing benchmarks, funding position
  - `dashboard-5-marketing.html` — client pipeline (Liando / CATL / Sembcorp), agreements, collateral, market intelligence, meetings
  - `dashboard-6-competitor.html` — competitor & market analysis based on Colliers Purwakarta Industrial Market Research (2025-09): corridor land price trends, 15 reviewed estates, Purwakarta cluster utility benchmark, asking-price positioning vs KIM
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
├── dashboard-6-competitor.html    # M6 Competitor Analysis
└── assets/
    ├── css/style.css
    └── js/
        ├── i18n.js                # EN / ZH / ID dictionaries
        ├── data.js                # Data layer (values + units, per-language text)
        ├── auth.js                # Access gate
        └── app.js                 # Shared chrome + chart helper
```

## Data source / 数据来源 / Sumber data

All figures come from the Megatama project file folder (latest version per type, as of 2026-09-26). Sources include: Feasibility Study (Provalindo, 2025-08-28), Development Costs Summary (Ultimate), Cost Estimate 260326, interchange RAB, HGB-ready parcel list, AMDAL follow-up matrix, financial model deal basis, and third-party engagement records. AMDAL matrix source: `Matriks_Tindak_Lanjut_AMDAL_Megatama.xlsx` (authoritative).

### v2 corrections / 更正记录 / Catatan koreksi

Re-scan of the source folder (2026-09-26) fixed and verified the following:

| # | Item | Before | After (verified) |
|---|------|--------|------------------|
| 1 | Client name | Semcorp | **Sembcorp** (胜科集团) — all dashboards & pipeline |
| 2 | Sembcorp status | "suspected dormant" | Deal status unconfirmed; 2026-09-16 files are Sembcorp's own Purwakarta park marketing materials (market intelligence) |
| 3 | Interchange | "Purwakarta–Bandung Toll" | **Cipali (Cikopo–Palimanan) Toll, KM 77+800 (Campaka)** |
| 4 | Location | Bungursari & Campaka | Desa Karangmukti / Desa Cibodas, Kec. Bungursari, Purwakarta (Karawang corridor) |
| 5 | Infrastructure | missing waste water row | Added waste water: 5,500 → 13,500 m³/day (third-party WWTP) |
| 6 | FS detail | — | Added interchange loan IDR 305,000,000,000 (70% of interchange investment); tenor 6.0 y + grace 1.5 y |
| 7 | FM dev cost | 460,000–490,000 | 460,210.7 – 490,570.1 IDR/m² (model values) |
| 8 | FM extra KPIs | — | Added PIRR 18.6%, EIRR 19.2%, gross margin 30.1% |
| 9 | Internal price sim | 1,530,000–1,810,000 | 1,526,250 – 1,812,422 IDR/m² |
| 10 | FX | 16,300–16,500 | 16,500 (model assumption) |
| 11 | CATL power | 5 MW → 90 MW | 5 MW → 90 MW (raised to ≥120 MW at 2026-05-26 meeting) |
| 12 | CATL utilities | — | Added domestic 300→450, industrial 300→375 T/day, rainwater 30,000→102,000 m³/h |
| 13 | Liando exclusivity | "90 days" | 90 days after ODI application submission (per signed MOU) |
| 14 | Market intel | — | Added Sembcorp Purwakarta park deck (355.6 ha industrial + 168 ha res/com; Phase 1 100.65 ha) & regional facts, 2026-09-16 |
| 15 | DED doc | — | Final DED Report (071025), Indokoei, 332 pages |
| 16 | Land use note | "(522.34 ha)" | gross 5,099,024 m² (per FS table) |
| 17 | Layout | messy | Rebuilt unified design system (cards, sticky headers, scroll tables, aligned KPI/chart grids) |

- Estate Regulation remains **2022-08** (document text; folder filename `200815_...` is an internal code, not the date).
- All other values (FS NPV/IRR/payback, Ultimate cost Rp2,053,254,161,380, RAB, funding, 652/461/191 ha, 522.3 ha master plan, 75.4 ha HGB parcels) verified against source files and kept.

## Run / 运行 / Menjalankan

Open `index.html` in a browser (ECharts loads from CDN — internet required), or serve the folder:

```bash
python -m http.server 8000
```

## License / 许可

Internal project of PT Megatama Putra Sejahtera. Data is confidential to the project team; distribute with care.
