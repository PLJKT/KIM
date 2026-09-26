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
    asOf: '2026-05-26',
    source: 'Megatama project files (latest version per type)'
  },

  estate: {
    company: 'PT Megatama Putra Sejahtera (MPS)',
    group: 'Batavia Prosperindo Group',
    founded: '2012-10-23',
    deed: 'Akta No. 48',
    holding: 'PT Prima Jaya Permai (incl. Citraduta Sukses Semesta, Teguh Anindyaguna, Bintang Anugrah Permai)',
    location: 'Bungursari & Campaka, Purwakarta, Jawa Barat, Indonesia',
    interchange: 'Simpang Susun Campaka, KM 77+800 (Purwakarta–Bandung Toll)',
    licensedTotal: { v: 652, u: 'ha' },
    industrial: { v: 461, u: 'ha' },
    whsResCom: { v: 191, u: 'ha' },
    masterplanArea: { v: 522.3, u: 'ha' },
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
      { key: 'ut_gas', supplier: 'PGN', current: null, target: null, unit: 'bar', noteKey: 'n_gas' },
      { key: 'ut_road', supplier: '—', current: null, target: null, unit: 'm', noteKey: 'n_road' },
      { key: 'ut_substation', supplier: 'PLN', current: null, target: null, unit: 'km', noteKey: 'n_sub' },
      { key: 'ut_interchange', supplier: 'Pemkab / PT.PP', current: null, target: null, unit: '—', noteKey: 'n_interchange' }
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
      payback: { v: 6.2, u: 'years' }
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
      { name: 'Feasibility Study Report', date: '2025-08-28', desc: 'Provalindo · 59 pages' },
      { name: 'Detail Engineering Design (DED)', date: '—', desc: 'Indokoei · 332 pages' },
      { name: 'Survey Report', date: '—', desc: 'Indokoei' },
      { name: 'Development Costs Summary (Ultimate)', date: '—', desc: '3 options · 12 work categories' },
      { name: 'Cost Estimate 260326', date: '2026-03-26', desc: 'multi-option cost estimate' },
      { name: 'M-IR-01 / M-IR-02', date: '—', desc: 'road / railway technical' },
      { name: 'Railways Clarification', date: '—', desc: 'crossing estate' },
      { name: 'Land Plot Maps', date: '—', desc: 'parcel layout' },
      { name: 'Blockplan (xlsx)', date: '—', desc: 'block plan' },
      { name: 'Grading (Indokoei)', date: '—', desc: 'earthwork design' },
      { name: 'HGB Siap Pakai 12092025', date: '2025-09-12', desc: '7 parcels · 75.4 ha ready' }
    ],
    parcels: [
      { name: '55 ha', delivery: '4–6 months' },
      { name: '76 ha', delivery: '6–8 months' },
      { name: '82 ha', delivery: '6–8 months' }
    ]
  },

  legal: {
    statusCounts: { obtained: 8, ongoing: 8, pending: 3 },
    permits: [
      { name: { en: 'Company establishment', zh: '公司设立', id: 'Pendirian perusahaan' }, number: 'Akta No. 48', issuer: 'Notary Merry Eddy', date: '2012-10-23', status: 'obtained' },
      { name: { en: 'SKKLH — environmental feasibility', zh: 'SKKLH — 环境可行性批准', id: 'SKKLH — kelayakan lingkungan' }, number: '660.1/Kep.367-DLHII/2025', issuer: 'Bupati Purwakarta', date: '2025 · app. 004/MPS-DIR/IX/2025', status: 'obtained' },
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
      devCostMin: { v: 460000, u: 'IDR/m²' },
      devCostMax: { v: 490000, u: 'IDR/m²' },
      landMin: { v: 475000, u: 'IDR/m²' },
      landMax: { v: 550000, u: 'IDR/m²' },
      irrTarget: '18–20%',
      period: '2026-04 → 2041-03'
    },
    pricing: {
      internalSim: { v: '1,530,000 – 1,810,000', u: 'IDR/m²', noteKey: 'pn_sim_note' },
      marketAvg: { v: 125, u: 'USD/m²', noteKey: 'pn_avg_note' },
      forecastKey: 'pn_forecast',
      fx: '16,300 – 16,500'
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
        name: 'Semcorp',
        stage: 3,
        stageText: 'semcorp_stage',
        history: {
          en: ['Indicative FM 2025-02', 'Deal FM 2025-08', 'Final report 2025-09 (Colliers Purwakarta market research)'],
          zh: ['意向财务模型 2025-02', '交易财务模型 2025-08', '最终报告 2025-09（Colliers Purwakarta 市场研究）'],
          id: ['FM indikatif 2025-02', 'FM deal 2025-08', 'Laporan akhir 2025-09 (riset pasar Colliers Purwakarta)']
        },
        pending: { en: 'No files after 2025-09 — suspected dormant', zh: '2025-09 后无新文件——疑似搁置', id: 'Tanpa berkas setelah 2025-09 — diduga terhenti' }
      }
    ],
    requirements: [
      { client: 'CATL', itemKey: 'r_construction', value: '2027-04' },
      { client: 'CATL', itemKey: 'r_production', value: '2028-02' },
      { client: 'CATL', itemKey: 'r_land', value: '125–150 acres (≈ 51–61 ha)' },
      { client: 'CATL', itemKey: 'r_power', value: '5 MW → 90 MW' },
      { client: 'CATL', itemKey: 'r_water', value: '8,250 m³/day' },
      { client: 'CATL', itemKey: 'r_gas', value: '180,000 Nm³/day' },
      { client: 'Liando', itemKey: 'r_land_area', value: '80–100 ha' },
      { client: 'Liando', itemKey: 'r_payment', value: '30 / 10 / 25 / 20 / 15 (%)' },
      { client: 'Liando', itemKey: 'r_exclusivity', value: '90 days' }
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
      { name: 'Regional price forecast 2024–2028', source: 'project file', date: '—' }
    ],
    meetings: [
      { date: '2025-09', topicKey: 'm_liando_qa' },
      { date: '2025-10', topicKey: 'm_liando_mom' },
      { date: '2025-12-19', topicKey: 'm_liando_mod' },
      { date: '2026-05', topicKey: 'm_catl_visit' },
      { date: '2026-05-26', topicKey: 'm_catl_meet' }
    ]
  }
};
