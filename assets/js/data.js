/* KIM — data layer.
 * Format rule: integers get thousand separators and no decimals;
 * non-integers keep exactly one decimal place (rounded).
 * Every value carries an explicit unit.
 * Language rule: any user-facing text is stored per-language (en/zh/id);
 * proper nouns (company names, document titles, official acronyms) stay identical.
 */
function fmt(v) {
  if (v === null || v === undefined || v === '') return '-';
  if (typeof v === 'string') return v;
  if (Number.isInteger(v)) return v.toLocaleString('en-US');
  var r = Math.round(v * 10) / 10;
  return r.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}
function fmtNum(v) { return fmt(v); }

function L(obj) { return obj ? (obj[CURRENT_LANG] !== undefined ? obj[CURRENT_LANG] : obj.en) : ''; }

var D = {
  meta: {
    asOf: '2026-09-26',
    source: 'Megatama project files (latest version per type)'
  },

  estate: {
    company: 'PT Megatama Putra Sejahtera (MPS)',
    group: 'Batavia Prosperindo Group',
    founded: '2012-10-23',
    deed: 'Akta No. 48',
    holding: 'PT Prima Jaya Permai (incl. Citraduta Sukses Semesta, Teguh Anindyaguna, Bintang Anugrah Permai)',
    location: { en: 'Purwakarta (Desa Karangmukti / Desa Cibodas, Kec. Bungursari), West Java, Indonesia — Karawang corridor', zh: '西爪哇省普尔瓦卡塔（Karangmukti / Cibodas 村，Bungursari 区）— 加拉旺走廊', id: 'Purwakarta (Desa Karangmukti / Desa Cibodas, Kec. Bungursari), Jawa Barat, Indonesia — koridor Karawang' },
    interchange: 'Simpang Susun Campaka, KM 77+800 — Cipali (Cikopo–Palimanan) Toll Road',
    licensedTotal: { v: 652, u: 'ha' },
    industrial: { v: 461, u: 'ha' },
    whsResCom: { v: 191, u: 'ha' },
    masterplanArea: { v: 522.3, u: 'ha' },
    agriEstate: { v: 100, u: 'ha', note: 'tenant purchased 12.8 ha+ since 2021' },
    landUse: [
      { key: 'lu_landbank', share: 55.5, pct: true },
      { key: 'lu_sellable', share: 19.6, pct: true },
      { key: 'lu_wtp', share: 1.1, pct: true },
      { key: 'lu_agri', share: 20.8, pct: true },
      { key: 'lu_other', share: 2.9, pct: true }
    ],
    masterplans: [
      { version: 'R6', designer: 'Indokoei', area: 522.3, status: 'rev' },
      { version: 'Rev 1d', designer: 'Indokoei', area: 522.3, status: 'rev' },
      { version: 'Ultimate (DED completed)', designer: 'Indokoei', area: 522.3, status: 'current' }
    ],
    infra: [
      { key: 'ut_elec', supplier: 'PLN', current: 60, target: 360, unit: 'MW', noteKey: 'n_elec' },
      { key: 'ut_water', supplier: 'PDAM (JV Tirta Tama Sejahtera)', current: 3000, target: 16500, unit: 'm³/day', noteKey: 'n_water' },
      { key: 'ut_ww', supplier: 'Third party (WWTP)', current: 5500, target: 13500, unit: 'm³/day', noteKey: 'n_ww' },
      { key: 'ut_gas', supplier: 'PGN', current: null, target: null, unit: 'bar', noteKey: 'n_gas' },
      { key: 'ut_road', supplier: '—', current: null, target: null, unit: 'm', noteKey: 'n_road' },
      { key: 'ut_substation', supplier: 'PLN', current: null, target: null, unit: 'km', noteKey: 'n_sub' },
      { key: 'ut_interchange', supplier: 'Pemkab / PT.PP', current: null, target: null, unit: '—', noteKey: 'n_interchange' }
    ],
    logistics: [
      { key: 'log_jakarta', dist: 80, distU: 'km', time: '1.5 h', noteKey: 'log_jakarta_note', routeKey: 'log_route_jakarta' },
      { key: 'log_shia', dist: 115, distU: 'km', time: '2.25 h', noteKey: '', routeKey: 'log_route_shia' },
      { key: 'log_halim', dist: 80, distU: 'km', time: '1.5 h', noteKey: '', routeKey: 'log_route_halim' },
      { key: 'log_priok', dist: 90, distU: 'km', time: '2 h', noteKey: '', routeKey: 'log_route_priok' },
      { key: 'log_patimban', dist: 60, distU: 'km', time: '1.5 h', noteKey: 'log_patimban_note', routeKey: 'log_route_patimban' },
      { key: 'log_km72', dist: 7, distU: 'km', time: '15 min', noteKey: 'log_km72_note', routeKey: 'log_route_km72' },
      { key: 'log_km778', dist: 3, distU: 'km', time: '<5 min', noteKey: 'log_km778_note', routeKey: 'log_route_km778' }
    ]
  },

  technical: {
    fs: {
      date: '2025-08-28',
      consultant: 'Provalindo',
      invInclLand: { v: 1061324287000, u: 'IDR' },
      invExclLand: { v: 628803535000, u: 'IDR' },
      npv: { v: 47063168000, u: 'IDR' },
      npvRate: { v: 10.8, u: '%' },
      irr: { v: 15.5, u: '%' },
      payback: { v: 6.2, u: 'years' },
      debt: { v: 305000000000, u: 'IDR' },
      debtPct: { v: 70, u: '%' },
      tenor: { v: 6.0, u: 'years' },
      grace: { v: 1.5, u: 'years' }
    },
    costUltimate: {
      total: { v: 2053254161380, u: 'IDR' },
      contingency: { v: 97774007684, u: 'IDR' },
      contingencyPct: { v: 5, u: '%' },
      categories: 12,
      note: 'cost_cats_note'
    },
    rab: {
      exclVAT: { v: 428222661250, u: 'IDR' },
      inclVAT: { v: 473349243988, u: 'IDR' }
    },
    hgb: {
      date: '2025-09-12',
      parcels: [
        { name: 'P1', area: 10.3 },
        { name: 'P2', area: 10.8 },
        { name: 'P3', area: 10.2 },
        { name: 'P4', area: 10.2 },
        { name: 'P5', area: 11.4 },
        { name: 'P6', area: 11.5 },
        { name: 'P7', area: 11.0 }
      ],
      totalRaw: { v: 75.4, u: 'ha' }
    },
    docs: [
      { name: 'Feasibility Study Report', date: '2025-08-28', desc: 'Provalindo · 59 pages · Desa Karangmukti, Purwakarta' },
      { name: 'Final DED Report (071025)', date: '2025-10-07', desc: 'Indokoei · 332 pages · Ultimate / R6 / Rev 1d basis' },
      { name: 'Survey Report', date: '—', desc: 'Indokoei' },
      { name: 'Development Costs Summary (Ultimate)', date: '—', desc: '3 options · 12 work categories' },
      { name: 'Cost Estimate 260326', date: '2026-03-26', desc: 'multi-option cost estimate (incl. Haier 20 ha set) · FX 16,500' },
      { name: 'M-IR-01 / M-IR-02', date: '—', desc: 'road / railway technical' },
      { name: 'Railways Clarification', date: '—', desc: 'crossing estate' },
      { name: 'Land Plot Maps', date: '—', desc: 'parcel layout' },
      { name: 'Blockplan (xlsx)', date: '—', desc: 'block plan' },
      { name: 'Grading (Indokoei)', date: '—', desc: 'earthwork design' },
      { name: 'HGB Siap Pakai 12092025', date: '2025-09-12', desc: '7 parcels · 75.4 ha ready' }
    ],
    parcels: [
      { name: '55 ha (1,712 m × 328 m)', delivery: 'land leveling ~4 months after downpayment' },
      { name: '76 ha', delivery: '6–8 months (seller estimate)' },
      { name: '82 ha', delivery: '6–8 months (seller estimate)' }
    ]
  },

  legal: {
    statusCounts: { obtained: 8, ongoing: 8, pending: 3 },
    permits: [
      { name: { en: 'Company establishment', zh: '公司设立', id: 'Pendirian perusahaan' }, number: 'Akta No. 48', issuer: 'Notary Merry Eddy', date: '2012-10-23', status: 'obtained' },
      { name: { en: 'SKKLH — environmental feasibility', zh: 'SKKLH — 环境可行性批准', id: 'SKKLH — kelayakan lingkungan' }, number: 'Kep.660.1/Kep.367-DLHII/2025', issuer: 'Bupati Purwakarta', date: '2025 · app. 004/MPS-DIR/IX/2025', status: 'obtained' },
      { name: { en: 'PBG — drainage', zh: 'PBG — 排水工程', id: 'PBG — drainase' }, number: 'SK-PBG-321413-18122025-007', issuer: 'Pemkab Purwakarta', date: '2025-12-18', status: 'obtained' },
      { name: { en: 'PBG — road', zh: 'PBG — 道路工程', id: 'PBG — jalan' }, number: 'SK-PBG-321413-02012026-002', issuer: 'Pemkab Purwakarta', date: '2026-01-02', status: 'obtained' },
      { name: { en: 'PBG — marketing building', zh: 'PBG — 营销办公楼', id: 'PBG — gedung pemasaran' }, number: 'SK-PBG-321413-02012026-001', issuer: 'Pemkab Purwakarta', date: '2026-01-02 · 1,000 m² · 2 floors', status: 'obtained' },
      { name: { en: 'Interchange permit extension', zh: '立交许可续期', id: 'Perpanjangan izin simpang susun' }, number: '—', issuer: 'Pemkab', date: '2025-12 · valid to 2029-01', status: 'obtained' },
      { name: { en: 'Pemkab cooperation agreement', zh: '县政府合作协议', id: 'Kesepakatan bersama Pemkab' }, number: '—', issuer: 'Pemkab Purwakarta', date: '2026-01-30', status: 'obtained' },
      { name: { en: 'HGB ready batch', zh: 'HGB 就绪批地', id: 'Kapling siap HGB' }, number: '—', issuer: 'BPN', date: '2025-09-12 · 7 parcels · 75.4 ha', status: 'obtained' },
      { name: { en: 'AMDAL follow-up (12 items)', zh: 'AMDAL 整改（12 项）', id: 'Tindak lanjut AMDAL (12 item)' }, number: '—', issuer: 'DLH Jabar', date: 'matrix', status: 'ongoing' },
      { name: { en: 'KKPR consolidation (522 ha, single name)', zh: 'KKPR 整合（522 公顷，单一名称）', id: 'Konsolidasi KKPR (522 ha, satu nama)' }, number: '—', issuer: 'ATR/BPN, DPMPTSP, Kemenperin', date: '—', status: 'ongoing' },
      { name: { en: 'SHGB', zh: 'SHGB', id: 'SHGB' }, number: '—', issuer: 'BPN Purwakarta', date: '—', status: 'ongoing' },
      { name: { en: 'SIPSDA', zh: 'SIPSDA', id: 'SIPSDA' }, number: '—', issuer: '—', date: '—', status: 'ongoing' },
      { name: { en: 'Irrigation diversion', zh: '灌溉改迁', id: 'Pengalihan irigasi' }, number: '—', issuer: '—', date: '—', status: 'ongoing' },
      { name: { en: 'KAI land lease', zh: 'KAI 土地租用', id: 'Sewa lahan KAI' }, number: '—', issuer: 'KAI', date: 'negotiation', status: 'ongoing' },
      { name: { en: 'Land dispute settlement', zh: '土地纠纷处理', id: 'Penyelesaian sengketa lahan' }, number: '—', issuer: '—', date: '—', status: 'ongoing' },
      { name: { en: 'Interchange land acquisition & tender', zh: '立交征地与招标', id: 'Pembebasan lahan & tender simpang susun' }, number: '—', issuer: 'Pemkab', date: 'tender', status: 'ongoing' },
      { name: { en: 'IUKI', zh: 'IUKI', id: 'IUKI' }, number: '—', issuer: '—', date: '—', status: 'pending' },
      { name: { en: 'IPKI', zh: 'IPKI', id: 'IPKI' }, number: '—', issuer: '—', date: '—', status: 'pending' },
      { name: { en: 'PKKPR Karawang', zh: 'PKKPR Karawang', id: 'PKKPR Karawang' }, number: '—', issuer: 'Pemda Karawang', date: '—', status: 'pending' }
    ],
    amdal: [
      { no: 1, issue: { en: 'KKPR not yet under one name', zh: 'KKPR 尚未统一为一个名称', id: 'KKPR belum satu nama' }, agencies: 'ATR/BPN, DPMPTSP, Kemenperin', action: { en: 'Consolidate KKPR into one document in the name of PT Megatama (522 ha)', zh: '将 KKPR 整合为 PT Megatama 名下单一文件（522 公顷）', id: 'Konsolidasi KKPR menjadi 1 atas nama PT Megatama seluas 522 ha' }, pic: 'Legal Team PT Megatama', deadline: { en: '< 7 days', zh: '7 天内', id: '< 7 hari' }, status: 'ongoing' },
      { no: 2, issue: { en: 'Karawang location designation not a KPI (industrial priority)', zh: 'Karawang 选址认定不属于 KPI（工业优先区）', id: 'Penetapan lokasi Karawang bukan KPI' }, agencies: 'ATR/BPN, Pemda Karawang', action: { en: 'Revise RTRW or attach industrial land justification to PKKPR', zh: '修订 RTRW 或在 PKKPR 中附上工业用地论证', id: 'Revisi RTRW atau lampirkan justifikasi lahan industri pada PKKPR' }, pic: 'Tim Tata Ruang', deadline: { en: '< 10 days', zh: '10 天内', id: '< 10 hari' }, status: 'ongoing' },
      { no: 3, issue: { en: 'Protected rice fields (LSD) still present', zh: '仍存在受保护稻田（LSD）', id: 'Masih terdapat LSD (Lahan Sawah Dilindungi)' }, agencies: 'ATR/BPN, DLH, Gubernur Jabar', action: { en: 'Consult Governor and ATR/BPN; submit recommendation letter', zh: '向省长及 ATR/BPN 咨询并提交推荐函', id: 'Konsultasi ke Gubernur dan Kementerian ATR/BPN, sampaikan surat rekomendasi' }, pic: 'Manajemen Proyek', deadline: { en: '< 5 days', zh: '5 天内', id: '< 5 hari' }, status: 'ongoing' },
      { no: 4, issue: { en: 'Shapefile and land area inconsistent', zh: 'Shapefile 与土地面积不一致', id: 'Shapefile dan luas lahan tidak konsisten' }, agencies: 'Konsultan AMDAL, ATR/BPN', action: { en: 'Align shapefile, KKPR and masterplan documents', zh: '统一 shapefile、KKPR 与总规文件', id: 'Sesuaikan shapefile, KKPR, dan dokumen masterplan' }, pic: 'Tim GIS', deadline: { en: '< 3 days', zh: '3 天内', id: '< 3 hari' }, status: 'ongoing' },
      { no: 5, issue: { en: 'RKL-RPL responsibilities not separated between manager and tenants', zh: 'RKL-RPL 未区分园区管理方与租户责任', id: 'Tidak ada pemisahan tanggung jawab RKL-RPL pengelola dan tenant' }, agencies: 'DLH Jabar, Konsultan AMDAL', action: { en: 'Revise RKL-RPL matrix: distinguish PT Megatama vs tenant activities', zh: '修订 RKL-RPL 矩阵：区分 PT Megatama 与租户活动', id: 'Revisi matriks RKL-RPL: bedakan kegiatan PT Megatama dan tenant' }, pic: 'Konsultan AMDAL', deadline: { en: '< 10 days', zh: '10 天内', id: '< 10 hari' }, status: 'ongoing' },
      { no: 6, issue: { en: 'RKL/RPL indicators not measurable', zh: 'RKL/RPL 指标不可量化', id: 'Indikator RKL/RPL tidak terukur' }, agencies: 'DLH Jabar, Ahli', action: { en: 'Add quantitative indicators, quality-standard parameters and monitoring methods', zh: '增加定量指标、质量标准参数与监测方法', id: 'Tambahkan indikator kuantitatif, parameter baku mutu, dan metode pemantauan' }, pic: 'Konsultan Teknis', deadline: { en: '< 10 days', zh: '10 天内', id: '< 10 hari' }, status: 'ongoing' },
      { no: 7, issue: { en: 'Environmental baseline irrelevant or incomplete', zh: '环境基线不相关或不完整', id: 'Rona lingkungan tidak relevan atau tidak lengkap' }, agencies: 'DLH, Ahli', action: { en: 'Remove irrelevant baseline (e.g. volcano); add farmer socio-economic data', zh: '删除不相关基线（如火山）；补充农民社会经济数据', id: 'Hapus rona tak relevan (misalnya gunung berapi); tambahkan data sosial-ekonomi petani' }, pic: 'Tim Sosial & Lingkungan', deadline: { en: '< 5 days', zh: '5 天内', id: '< 5 hari' }, status: 'ongoing' },
      { no: 8, issue: { en: 'Wastewater, IPAL and pond not clear', zh: '污水、污水处理厂（IPAL）与蓄水池不明确', id: 'Air limbah, IPAL, dan pond belum jelas' }, agencies: 'Ahli Kimia-Fisika', action: { en: 'Detail IPAL capacity, pond distribution, raw water volume and recycling', zh: '细化 IPAL 容量、蓄水池分布、原水量与回用', id: 'Rinci kapasitas IPAL, alur distribusi pond, volume air baku & daur ulang' }, pic: 'Tim Teknis', deadline: { en: '< 7 days', zh: '7 天内', id: '< 7 hari' }, status: 'ongoing' },
      { no: 9, issue: { en: 'Social impact on farmers not yet assessed', zh: '对农民的社会影响尚未评估', id: 'Dampak sosial terhadap petani belum dikaji' }, agencies: 'Dinas Pertanian, DLH', action: { en: 'Add livelihood-change analysis and farmer mitigation plan', zh: '增加生计变化分析及农民缓解计划', id: 'Tambah analisis perubahan mata pencaharian dan rencana mitigasi petani' }, pic: 'Tim Sosial', deadline: { en: '< 7 days', zh: '7 天内', id: '< 7 hari' }, status: 'ongoing' },
      { no: 10, issue: { en: 'Document still refers to IMB instead of PB-G', zh: '文件中仍使用 IMB 而非 PB-G', id: 'Izin yang disebutkan masih IMB, belum PB-G' }, agencies: 'Pemkab, Konsultan AMDAL', action: { en: 'Change terminology from IMB to Persetujuan Bangunan Gedung (PB-G)', zh: '将文件术语由 IMB 改为 Persetujuan Bangunan Gedung (PB-G)', id: 'Ubah istilah dalam dokumen dari IMB menjadi Persetujuan Bangunan Gedung (PB-G)' }, pic: 'Legal & Teknis', deadline: { en: '< 3 days', zh: '3 天内', id: '< 3 hari' }, status: 'ongoing' },
      { no: 11, issue: { en: 'Traffic plan incomplete', zh: '交通规划不完整', id: 'Rencana lalu lintas belum lengkap' }, agencies: 'Dishub, DLH, PU', action: { en: 'Add traffic-impact calculation and operating hours; coordinate with Dishub', zh: '增加交通影响测算与运营时段；与交通局（Dishub）协调', id: 'Tambah perhitungan dampak lalu lintas; atur jam operasional; koordinasi dengan Dishub' }, pic: 'Konsultan Lalin', deadline: { en: '< 7 days', zh: '7 天内', id: '< 7 hari' }, status: 'ongoing' },
      { no: 12, issue: { en: 'Inter-agency coordination incomplete', zh: '机构间协调不完整', id: 'Koordinasi antar instansi belum lengkap' }, agencies: 'Semua instansi', action: { en: 'Prepare clarification request letters to each agency with specific responses', zh: '向各机构发出澄清申请函并附具体回应', id: 'Susun surat permohonan klarifikasi/respons resmi ke setiap instansi dengan tanggapan spesifik' }, pic: 'Manajemen Proyek', deadline: { en: '< 5 days', zh: '5 天内', id: '< 5 hari' }, status: 'ongoing' }
    ],
    regulations: [
      { ref: 'PP 20/2024', scope: { en: 'Kawasan Industri (new regulation)', zh: '工业园区（新条例）', id: 'Kawasan Industri (regulasi baru)' } },
      { ref: 'PP 22/2021', scope: { en: 'Environmental permitting (AMDAL)', zh: '环境许可（AMDAL）', id: 'Perizinan lingkungan (AMDAL)' } },
      { ref: 'PP 28/2025', scope: { en: 'Risk-based licensing', zh: '风险分级许可', id: 'Perizinan berbasis risiko' } },
      { ref: 'UU 6/2023 (Cipta Kerja)', scope: { en: 'Omnibus law — business licensing', zh: '综合就业法——营业许可', id: 'Omnibus law — perizinan usaha' } },
      { ref: 'Tata Cara IUKI / IPKI (2019)', scope: { en: 'Industrial enterprise & zone licenses', zh: '工业企业与园区许可', id: 'Izin usaha & izin kawasan industri' } },
      { ref: 'Peraturan Kawasan (2022-08)', scope: { en: 'Estate regulation (internal by-law)', zh: '园区条例（内部规章）', id: 'Peraturan kawasan (internal)' } },
      { ref: 'UU 28/2002', scope: { en: 'Building permit basis (PBG)', zh: '建筑许可依据（PBG）', id: 'Dasar PBG' } }
    ]
  },

  financial: {
    fs: {
      invInclLand: { v: 1061324287000, u: 'IDR' },
      invExclLand: { v: 628803535000, u: 'IDR' },
      npv: { v: 47063168000, u: 'IDR' },
      npvRate: { v: 10.8, u: '%' },
      irr: { v: 15.5, u: '%' },
      payback: { v: 6.2, u: 'years' }
    },
    fm: {
      price: { v: 1650000, u: 'IDR/m²' },
      devCostMin: { v: 460210.7, u: 'IDR/m²' },
      devCostMax: { v: 490570.1, u: 'IDR/m²' },
      landMin: { v: 475000, u: 'IDR/m²' },
      landMax: { v: 550000, u: 'IDR/m²' },
      irrP: { v: 18.6, u: '%' },
      irrE: { v: 19.2, u: '%' },
      gm: { v: 30.1, u: '%' },
      irrTarget: '18–20%',
      period: '2026-04 → 2041-03'
    },
    pricing: {
      internalSim: { v: '1,526,250 – 1,812,422', u: 'IDR/m²', noteKey: 'pn_sim_note' },
      marketAvg: { v: 125, u: 'USD/m²', noteKey: 'pn_avg_note' },
      forecastKey: 'pn_forecast',
      forecast: { v: 141, u: 'USD/m²', noteKey: 'pn_forecast_note' },
      fx: '16,500'
    },
    funding: {
      need: { v: 10616000000, u: 'IDR' },
      gap: { v: 6457000000, u: 'IDR' },
      balance: { v: 4159000000, u: 'IDR' },
      asOf: '2026-04-06'
    }
  },

  marketing: {
    stages: [
      { key: 'p_stage1' },
      { key: 'p_stage2' },
      { key: 'p_stage3' },
      { key: 'p_stage4' },
      { key: 'p_stage5' },
      { key: 'p_stage6' },
      { key: 'p_stage7' }
    ],
    clients: [
      {
        name: 'Liando',
        stage: 6,
        stageText: 'liando_stage',
        history: {
          en: ['NDA executed (2025-02)', 'Term Sheet (2025-10)', 'MOU + PIA signed 2025-12-15', 'MoD signed 2025-12-19', 'DD 60 days from 2025-12-15; extension requested 2026-03', 'ODI: Singapore entity RMB 40,000,000 approved; project ODI in process'],
          zh: ['保密协议签署（2025-02）', '条款清单（2025-10）', 'MOU + PIA 签署 2025-12-15', 'MoD 签署 2025-12-19', '尽调自 2025-12-15 起 60 天；2026-03 申请延期', 'ODI：新加坡实体人民币 40,000,000 已批；项目 ODI 办理中'],
          id: ['NDA dieksekusi (2025-02)', 'Term Sheet (2025-10)', 'MOU + PIA ditandatangani 2025-12-15', 'MoD ditandatangani 2025-12-19', 'DD 60 hari sejak 2025-12-15; perpanjangan diminta 2026-03', 'ODI: entitas Singapura RMB 40,000,000 disetujui; ODI proyek dalam proses']
        },
        pending: { en: 'CSPA / PPJB negotiation', zh: 'CSPA/PPJB 谈判', id: 'Negosiasi CSPA/PPJB' }
      },
      {
        name: 'CATL',
        stage: 5,
        stageText: 'catl_stage',
        history: {
          en: ['Engagement 2026-05', 'Requirements 2026-05-24', 'Executed quotation letter 002_MPS-DIR/V/2026 (2026-05-20)', 'Meeting 2026-05-26 (electricity / water / gas / EIA)', 'Parcel options 55 / 76 / 82 ha'],
          zh: ['接洽 2026-05', '需求清单 2026-05-24', '执行报价函 002_MPS-DIR/V/2026（2026-05-20）', '会议 2026-05-26（电/水/气/环评）', '地块方案 55 / 76 / 82 公顷'],
          id: ['Kontak 2026-05', 'Kebutuhan 2026-05-24', 'Surat penawaran dieksekusi 002_MPS-DIR/V/2026 (2026-05-20)', 'Rapat 2026-05-26 (listrik/air/gas/AMDAL)', 'Opsi kapling 55 / 76 / 82 ha']
        },
        pending: { en: 'Formal transaction negotiation', zh: '正式交易谈判', id: 'Negosiasi transaksi resmi' }
      },
      {
        name: 'Sembcorp',
        stage: 3,
        stageText: 'semcorp_stage',
        history: {
          en: ['Indicative FM 2025-02', 'Deal FM 2025-08', 'Final report 2025-09 (Colliers Purwakarta market research)', '2026-09-16: new park marketing materials (Sembcorp Purwakarta) — market intelligence, no transaction progress'],
          zh: ['意向财务模型 2025-02', '交易财务模型 2025-08', '最终报告 2025-09（Colliers Purwakarta 市场研究）', '2026-09-16：新增其园区营销资料（Sembcorp Purwakarta 园区）——属市场情报，无交易进展'],
          id: ['FM indikatif 2025-02', 'FM deal 2025-08', 'Laporan akhir 2025-09 (riset pasar Colliers Purwakarta)', '2026-09-16: materi pemasaran taman baru (Sembcorp Purwakarta) — intelijen pasar, tanpa progres transaksi']
        },
        pending: { en: 'Deal status unconfirmed — 2026-09 files are marketing materials of Sembcorp’s own Purwakarta park (competitor intel)', zh: '交易状态未确认——2026-09 文件为其自家 Purwakarta 园区营销资料（竞品情报）', id: 'Status deal belum dikonfirmasi — berkas 2026-09 adalah materi pemasaran taman Purwakarta milik Sembcorp (intel pesaing)' }
      }
    ],
    requirements: [
      { client: 'CATL', itemKey: 'r_construction', value: '2027-04' },
      { client: 'CATL', itemKey: 'r_production', value: '2028-02' },
      { client: 'CATL', itemKey: 'r_land', value: '125–150 acres (≈ 51–61 ha)' },
      { client: 'CATL', itemKey: 'r_power', value: '5 MW → 90 MW (≥120 MW raised at 2026-05-26 meeting)' },
      { client: 'CATL', itemKey: 'r_water', value: '8,250 m³/day' },
      { client: 'CATL', itemKey: 'r_gas', value: '180,000 Nm³/day' },
      { client: 'CATL', itemKey: 'r_ww_dom', value: '300 → 450 T/day' },
      { client: 'CATL', itemKey: 'r_ww_ind', value: '300 → 375 T/day' },
      { client: 'CATL', itemKey: 'r_rain', value: '30,000 → 102,000 m³/h' },
      { client: 'Liando', itemKey: 'r_land_area', value: '80–100 ha' },
      { client: 'Liando', itemKey: 'r_price', value: 'IDR 500,000 – 560,000 / m²' },
      { client: 'Liando', itemKey: 'r_payment', value: '30 / 10 / 25 / 20 / 15 (%)' },
      { client: 'Liando', itemKey: 'r_exclusivity', value: '90 days after ODI application submission (per MOU)' }
    ],
    agreements: [
      { name: 'NDA', party: 'Liando', date: '2025-02', status: 'executed' },
      { name: 'Term Sheet', party: 'Liando', date: '2025-10', status: 'signed' },
      { name: 'MOU', party: 'Liando', date: '2025-12-15', status: 'signed' },
      { name: 'PIA', party: 'Liando', date: '2025-12-15', status: 'signed' },
      { name: 'MoD', party: 'Liando', date: '2025-12-19', status: 'signed' },
      { name: 'Quotation letter 002_MPS-DIR/V/2026', party: 'CATL', date: '2026-05-20', status: 'executed' },
      { name: 'MoU', party: 'PLN', date: '—', status: 'signed' },
      { name: 'JV establishment (Tirta Tama Sejahtera)', party: 'PDAM', date: '—', status: 'established' }
    ],
    collateral: [
      { name: 'Company Profile (EN)', audience: 'Liando', date: '2025-02', status: 'sent' },
      { name: 'Company Profile v5', audience: 'general', date: '2026-03', status: 'current' },
      { name: 'Company Profile EN / CN', audience: 'CATL', date: '2026-05', status: 'sent' },
      { name: 'Location video (mp4)', audience: 'general', date: '—', status: 'available' },
      { name: 'Location map', audience: 'general', date: '—', status: 'available' },
      { name: 'Competitor comparison deck', audience: 'internal', date: '—', status: 'internal' }
    ],
    intel: [
      { name: 'Purwakarta Industrial Market Research', source: 'Colliers', date: '2025-09' },
      { name: 'Summary Market Research — Jakarta–Patimban corridor', source: 'project file', date: '—' },
      { name: 'Competitor land prices (Kompetitor jalan)', source: 'project file', date: '—' },
      { name: 'Regional price forecast 2024–2028', source: 'project file', date: '—' },
      { name: 'Sembcorp Purwakarta park — marketing deck (industrial 355.6 ha + residential/commercial 168 ha; Phase 1 100.65 ha)', source: 'Sembcorp materials (2026-09-16)', date: '2026-09-16' },
      { name: 'Purwakarta regional facts — 2026 minimum wage IDR 5,052,856; talent pool 1.05M', source: 'Sembcorp materials (2026-09-16)', date: '2026-09-16' }
    ],
    meetings: [
      { date: '2025-09', topicKey: 'm_liando_qa' },
      { date: '2025-10', topicKey: 'm_liando_mom' },
      { date: '2025-12-19', topicKey: 'm_liando_mod' },
      { date: '2026-05', topicKey: 'm_catl_visit' },
      { date: '2026-05-26', topicKey: 'm_catl_meet' }
    ]
  },
  competitor: {
    priceSeries: {
      years: [2020, 2021, 2022, 2023, 2024, '2025E'],
      regencies: [
        { key: 'reg_bekasi', color: '#6b7280', width: 2, data: [196.0, 215.9, 201.1, 200.3, 196.0, 200.5] },
        { key: 'reg_karawang', color: '#34558b', width: 2, data: [155.0, 159.0, 155.7, 161.4, 170.8, 186.1] },
        { key: 'reg_purwakarta', color: '#0e6b5c', width: 3.5, data: [125.0, 125.0, 129.6, 134.0, 137.7, 140.9] },
        { key: 'reg_subang', color: '#d97706', width: 2, data: [125.0, 127.5, 131.3, 135.3, 139.3, null] }
      ]
    },
    insights: ['cmp_insight_1', 'cmp_insight_2', 'cmp_insight_3', 'cmp_insight_4'],
    estates: [
      { name: 'GIIC', dev: 'Greenland International Industrial Center', region: 'Bekasi', net: 1540, yop: 2008, takeUp: '—', asking: 'USD 229', tenants: '—' },
      { name: 'Delta Silicon', dev: 'Delta Silicon', region: 'Bekasi', net: null, yop: null, takeUp: '—', asking: 'USD 155', tenants: '—' },
      { name: 'MM2100', dev: 'MM2100', region: 'Bekasi', net: null, yop: null, takeUp: '—', asking: 'USD 198', tenants: '—' },
      { name: 'Jababeka Industrial Estate', dev: 'Jababeka', region: 'Bekasi', net: null, yop: null, takeUp: '—', asking: 'USD 201', tenants: '—' },
      { name: 'Bekasi Fajar Industrial Estate', dev: 'Bekasi Fajar', region: 'Bekasi', net: null, yop: null, takeUp: '—', asking: 'USD 198', tenants: '—' },
      { name: 'Kota Bukit Indah (Indotaisei)', dev: 'Indotaisei Indah Development', region: 'Karawang', net: null, yop: null, takeUp: '100% (H1 2025)', asking: 'USD 155', tenants: '—', note: 'township; awaiting Phase 3' },
      { name: 'Suryacipta City of Industry', dev: 'Suryacipta Swadaya', region: 'Karawang', net: 980, yop: 1997, takeUp: '97.6% (H1 2025)', asking: 'USD 150', tenants: 'Daihatsu · Isuzu · Bridgestone' },
      { name: 'KIIC', dev: 'Sinar Mas Land & Itochu', region: 'Karawang', net: null, yop: null, takeUp: '97.6% (H1 2025)', asking: 'IDR 3,000,000', tenants: '—', note: 'toll exit KM 54' },
      { name: 'Artha Industrial Hill', dev: 'Artha Industrial Hills', region: 'Karawang', net: null, yop: null, takeUp: '54.3% (H1 2025)', asking: 'USD 165', tenants: '—', note: 'largest unsold land in Karawang' },
      { name: 'KNIC', dev: 'CFLD International', region: 'Karawang', net: null, yop: null, takeUp: '83.3% (early 2025)', asking: 'USD 175', tenants: '—', note: 'EV battery hub' },
      { name: 'KIM (Mitrakarawang)', dev: 'Mitra Karawangjaya', region: 'Karawang', net: 350, yop: 1992, takeUp: '100% (since 2015)', asking: '—', tenants: 'Honda · Chemco · United Steel', note: 'different entity from KIM – Megatama' },
      { name: 'Kota Bukit Indah (Besland Pertiwi)', dev: 'Besland Pertiwi', region: 'Purwakarta', net: 519.75, yop: 1991, takeUp: '100%', asking: '— (rental factories)', tenants: 'Nissan · Indofood · Indomobil' },
      { name: 'Jatiluhur Industrial Smart City', dev: 'Multi Optima Sentosa', region: 'Purwakarta', net: 630, yop: 2023, takeUp: '5 companies', asking: 'USD 125', tenants: 'Wings Group (F&B)' },
      { name: 'PIIP', dev: 'Asri Pelangi Nusa', region: 'Purwakarta', net: 245, yop: '2026F', takeUp: '16% (1 company)', asking: 'USD 107', tenants: 'Handal Indonesia Motor' },
      { name: 'Subang Smartpolitan', dev: 'Suryacipta Swadaya', region: 'Subang', net: 1901.9, yop: '2026F', takeUp: '8% (6 companies)', asking: 'USD 125', tenants: 'BYD (anchor, EV)', note: 'Patimban proximity' }
    ],
    cluster: [
      { name: 'Kota Bukit Indah (Besland Pertiwi)', sc: '0.08', water: '0.70', ww: '0.70', elec: '1,327', road: '45 / 20', wcap: '60,000', wwcap: '28,000', ecap: '250 MVA', gas: 'PGN' },
      { name: 'Jatiluhur Industrial Smart City', sc: '0.07', water: '0.70', ww: '0.70', elec: '1,327', road: '50 / 40', wcap: '21,600', wwcap: '10,000', ecap: '420 MVA', gas: 'PGN' },
      { name: 'PIIP', sc: '—', water: '—', ww: '—', elec: '—', road: '42 / 32', wcap: '19,000', wwcap: '10,000', ecap: '140 MVA', gas: 'PGN' },
      { name: 'Subang Smartpolitan', sc: '0.08', water: '0.80', ww: '0.80', elec: '1,306', road: '60 / 45', wcap: '86,400', wwcap: '71,280', ecap: '480 MVA', gas: 'PGN' }
    ],
    kimBenchmark: { sc: '—', water: '1', ww: '—', elec: '996 – 1,114', road: '34.5 / 22', wcap: '16,500', wwcap: '13,500', ecap: '60 → 360 MW', gas: 'PGN' },
    positioning: [
      { name: 'GIIC', usd: 229 }, { name: 'KIIC', usd: 209 }, { name: 'Jababeka', usd: 201 },
      { name: 'MM2100', usd: 198 }, { name: 'Bekasi Fajar', usd: 198 }, { name: 'KNIC', usd: 175 },
      { name: 'Artha', usd: 165 }, { name: 'KBI (Indotaisei)', usd: 155 }, { name: 'Delta Silicon', usd: 155 },
      { name: 'Suryacipta', usd: 150 }, { name: 'JISC', usd: 125 }, { name: 'Subang Smartpolitan', usd: 125 },
      { name: 'PIIP', usd: 107 }, { name: 'KIM – Megatama', usd: 100, km: true }
    ]
  }
};
