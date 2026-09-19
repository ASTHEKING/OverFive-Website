const STORAGE = {
  theme: "overfive_theme",
  lang: "overfive_lang",
  intro: "overfive_intro_done"
};

const i18n = {
  fa: {
    nav_home: "خانه",
    nav_features: "ویژگی‌ها",
    nav_download: "دانلود",
    nav_about: "درباره",
    nav_why: "چرا OverFive؟",
    nav_servers: "سرورها",
    nav_downloads: "دانلودها",
    nav_gallery: "گالری",
    why_card1_title: "رابط کاربری مدرن",
    why_card1_desc: "تمیز، سریع و قابل گسترش.",
    why_card2_title: "امنیت",
    why_card2_desc: "حفاظت بهتر از کاربران و فایل‌ها.",
    why_card3_title: "جامعه فارسی",
    why_card3_desc: "پشتیبانی بهتر برای سرورهای RP فارسی.",
    cta_header: "دانلود لانچر",
    hero_title: "OverFive",
    hero_subtitle: "فراتر از FiveM",
    hero_desc: "لانچر نسل جدید برای سرورهای RolePlay",
    cta_download: "دانلود لانچر",
    cta_servers: "مشاهده سرورها",
    features_title: "چرا OverFive؟",
    feature1_title: "سرعت آتشین",
    feature1_desc: "کشینگ هوشمند و CDN بازی و سرورها را در چند ثانیه بالا می‌آورد.",
    feature1_list_1: "آپدیت‌های دلتا با حجم کم",
    feature1_list_2: "بوت سریع با پروفایل‌های ذخیره‌شده",
    feature1_list_3: "تنظیم هوشمند منابع برای FPS نرم‌تر",
    feature1_note: "یادداشت: زمان لانچ به سرعت اینترنت وابسته است.",
    feature2_title: "سلامت فایل امن",
    feature2_desc: "چک‌سلامت و آنتی‌چیت داخلی، فایل‌ها را پاک و ایمن نگه می‌دهد.",
    feature2_list_1: "Integrity check در هر اجرا",
    feature2_list_2: "قرنطینه خودکار برای فایل مشکوک",
    feature2_list_3: "نسخه‌بندی مودها با امضا",
    feature2_note: "یادداشت: لیست مودهای تایید شده همیشه به‌روز است.",
    feature3_title: "کشف سرور هوشمند",
    feature3_desc: "جستجوی سریع با فیلتر نقش، زبان و پینگ برای بهترین RP.",
    feature3_list_1: "فیلتر بر اساس RP / Freeroam / Hardcore",
    feature3_list_2: "پینگ و ظرفیت زنده",
    feature3_list_3: "پروفایل سرور با گالری و قوانین",
    feature3_note: "یادداشت: داده‌ها از API تاییدشده می‌آید.",
    feature4_title: "تجربه واقعی RP",
    feature4_desc: "از چک‌لیست رول‌پلی تا ویس و مودهای پیشنهادی، آماده‌ای.",
    feature4_list_1: "سطوح سرور: Casual / Serious / Hardcore",
    feature4_list_2: "مودهای پیشنهادی برای هر سرور",
    feature4_list_3: "فرآیند سریع گزارش و فیدبک",
    feature4_note: "یادداشت: قوانین قبل از ورود نمایش داده می‌شود.",
    about_title: "درباره",
    about_intro: "OverFive یک لانچر حرفه‌ای برای سرورهای RP فارسی است: سریع، امن و مدرن.",
    about_badge: "درباره OverFive",
    about_title2: "لانچر نسل بعدی برای RP فارسی",
    about_desc: "OverFive ساخته شد تا ورود به RP را سریع و حرفه‌ای کند؛ از اولین اجرا تا جوین، ساده و یکپارچه.",
    about_stat_fast: "سریع",
    about_stat_fast_label: "لانچ زیر ۱۰ ثانیه",
    about_stat_safe: "ایمن",
    about_stat_safe_label: "چک سلامت + آنتی‌چیت",
    about_stat_persian: "فارسی",
    about_stat_persian_label: "ساخته شده برای RP فارسی",
    about_glass1_title: "چرا OverFive ساخته شد؟",
    about_glass1_text: "برای اینکه ورود به RP ساده، سریع و بدون دردسر باشد.",
    about_glass2_title: "چه چیزی ما را متمایز می‌کند؟",
    about_glass2_text: "تمرکز روی تجربه کاربری، سلامت فایل و داده زنده سرورها.",
    about_glass3_title: "هدف ما",
    about_glass3_text: "یک اکوسیستم حرفه‌ای برای سرورهای رول‌پلی فارسی.",
    about_split1_title: "تجربه کاربری فارسی‌اول",
    about_split1_text: "RTL کامل، تایپوگرافی تمیز و میانبرهای عمل‌های اصلی.",
    about_split2_title: "جامعه RP‌محور",
    about_split2_text: "از قوانین تا مودها، همه‌چیز برای نیازهای RP چیده شده.",
    about_split3_title: "پایداری ۲۴/۷",
    about_split3_text: "پایش همیشگی و آپدیت بدون دان‌تایم.",
    about_split4_title: "کارایی هوشمند",
    about_split4_text: "تنظیم منابع و پیش‌لود برای ورود سریع.",
    about_team1_name: "بنیان‌گذار",
    about_team1_role: "محصول / چشم‌انداز",
    about_team1_desc: "مسیر محصول و تجربه لانچر را هدایت می‌کند.",
    about_team2_name: "هسته توسعه",
    about_team2_role: "لانچر / بک‌اند",
    about_team2_desc: "متمرکز بر کارایی، امنیت و آپدیت‌های پایدار.",
    about_team3_name: "جامعه",
    about_team3_role: "پشتیبانی / مدیریت",
    about_team3_desc: "پشتیبانی مستقیم و مدیریت بازخورد.",
    about_phase1_label: "فاز ۱",
    about_phase1_date: "اکنون",
    about_phase1_title: "لانچر و صیقل UI",
    about_phase1_text: "پایداری، تجربه کاربری و جزئیات RTL در اولویت است.",
    about_phase2_label: "فاز ۲",
    about_phase2_date: "بعدی",
    about_phase2_title: "جستجوی سرور + پشتیبانی مود",
    about_phase2_text: "لیست‌های غنی‌تر سرور و مدیریت هوشمند مود.",
    about_phase3_label: "فاز ۳",
    about_phase3_date: "به‌زودی",
    about_phase3_title: "سیستم رتبه و پروفایل",
    about_phase3_text: "پروفایل رول‌پلی، اچیومنت و آمار شخصی.",
    about_phase4_label: "فاز ۴",
    about_phase4_date: "آینده",
    about_phase4_title: "اکوسیستم یکپارچه",
    about_phase4_text: "لانچر، پرتال سرور و جامعه در یک جریان.",
    about_cta_title: "برای RP آماده‌ای؟",
    about_cta_text: "لانچر را بگیر و در چند دقیقه به بهترین سرورهای RP وصل شو.",
    about_cta_button: "دانلود لانچر",
    download_title: "دانلود",
    download_intro: "آخرین نسخه لانچر OverFive را بگیر و سریع وارد RP شو.",
    download_size_label: "حجم:",
    download_release_label: "انتشار:",
    download_platform_label: "پلتفرم:",
    download_button: "دانلود لانچر OverFive",
    download_pack_label: "دانلود بسته",
    download_pack_sub: "لانچر + آنتی‌چیت (ZIP)",
    download_pack_hint: "یک فایل ZIP شامل لانچر و آنتی‌چیت.",
    servers_title: "سرورها",
    servers_subtitle: "در یک کلیک بهترین سرور RP را فیلتر و پیدا کن.",
    gallery_title: "گالری",
    gallery_subtitle: "جدیدترین تصاویر لانچر و سرورها.",
    servers_search_label: "جستجو",
    servers_search_placeholder: "جستجوی سرورها...",
    servers_status_label: "وضعیت سرور",
    servers_status_all: "همه",
    servers_status_online: "آنلاین",
    servers_status_offline: "آفلاین",
    servers_mode_label: "حالت",
    servers_mode_rp: "RP",
    servers_mode_freeroam: "آزاد",
    servers_lang_label: "زبان",
    servers_lang_fa: "فارسی",
    servers_lang_en: "انگلیسی",
    servers_sort_label: "مرتب‌سازی",
    servers_sort_players: "بازیکن (زیاد به کم)",
    servers_sort_ping: "پینگ (کم به زیاد)",
    servers_sort_rating: "امتیاز (زیاد به کم)",
    servers_sort_name: "نام (A-Z)",
    servers_filter_hint: "داده‌ها به صورت زنده و بارگذاری می‌شوند.",
    servers_results_label: "سرور پیدا شد",
    servers_refresh: "به‌روزرسانی سرورها",
    footer_desc: "لانچر نسل جدید برای سرورهای رول‌پلی",
    footer_made: "ساخته شده با 3> توسط The Boyz",
    footer_copyright: "(c) 2026 OverFive. تمامی حقوق محفوظ است.",
    intro_tag: "لانچ. اتصال. فرمانروایی.",
    skip: "رد کردن",
    theme_label: "تم",
    lang_label: "زبان"
  },
  en: {
    nav_home: "Home",
    nav_features: "Features",
    nav_download: "Download",
    nav_about: "About",
    nav_why: "Why OverFive?",
    nav_servers: "Servers",
    nav_downloads: "Downloads",
    nav_gallery: "Gallery",
    why_card1_title: "Modern UI",
    why_card1_desc: "Clean, fast, and expandable.",
    why_card2_title: "Security",
    why_card2_desc: "Better protection for users and files.",
    why_card3_title: "Persian Community",
    why_card3_desc: "Better support for Persian RP servers.",
    cta_header: "Download Launcher",
    hero_title: "OverFive",
    hero_subtitle: "Beyond FiveM",
    hero_desc: "Next-gen launcher for RolePlay servers",
    cta_download: "Download Launcher",
    cta_servers: "Browse Servers",
    features_title: "Why OverFive?",
    feature1_title: "Lightning Fast",
    feature1_desc: "Smart caching and CDN tuning launch the game and servers in seconds.",
    feature1_list_1: "Delta updates with minimal size",
    feature1_list_2: "Quick boot with saved profiles",
    feature1_list_3: "Smart resource tuning for smoother FPS",
    feature1_note: "Note: Launch time depends on your connection.",
    feature2_title: "Secure File Health",
    feature2_desc: "Integrity checks and built-in anti-cheat keep files clean and safe.",
    feature2_list_1: "Integrity check every launch",
    feature2_list_2: "Auto quarantine for suspicious files",
    feature2_list_3: "Mod versioning with signatures",
    feature2_note: "Note: Verified mod lists stay up to date.",
    feature3_title: "Smart Server Discovery",
    feature3_desc: "Fast search with role, language, and ping filters to find the best RP.",
    feature3_list_1: "Filter by RP / Freeroam / Hardcore",
    feature3_list_2: "Live ping and capacity",
    feature3_list_3: "Server profiles with gallery and rules",
    feature3_note: "Note: Data comes from verified APIs.",
    feature4_title: "Real RP Experience",
    feature4_desc: "From roleplay checklists to voice and recommended mods, you are ready.",
    feature4_list_1: "Server tiers: Casual / Serious / Hardcore",
    feature4_list_2: "Recommended mods per server",
    feature4_list_3: "Fast report and feedback flow",
    feature4_note: "Note: Rules show before you join.",
    about_title: "About",
    about_intro: "OverFive is a pro launcher for Persian RP servers: fast, safe, and modern.",
    about_badge: "About OverFive",
    about_title2: "Next-gen launcher for Persian RP",
    about_desc: "OverFive was built to make RP entry faster and more professional. From first run to server join, it is simple and unified.",
    about_stat_fast: "Fast",
    about_stat_fast_label: "Launch under 10 seconds",
    about_stat_safe: "Safe",
    about_stat_safe_label: "Integrity checks + anti-cheat",
    about_stat_persian: "Persian",
    about_stat_persian_label: "Built for Persian RP",
    about_glass1_title: "Why was OverFive built?",
    about_glass1_text: "To make RP entry simple, fast, and hassle-free.",
    about_glass2_title: "What makes us different?",
    about_glass2_text: "We focus on UX, file safety, and live server data.",
    about_glass3_title: "Our goal",
    about_glass3_text: "A professional ecosystem for Persian RolePlay servers.",
    about_split1_title: "Persian-first UI/UX",
    about_split1_text: "Full RTL, clean typography, and shortcuts for key actions.",
    about_split2_title: "RP-first community",
    about_split2_text: "From rules to mods, everything fits RP needs.",
    about_split3_title: "24/7 stability",
    about_split3_text: "Always-on monitoring and zero-downtime updates.",
    about_split4_title: "Smart performance",
    about_split4_text: "Resource tuning and preloads for fast entry.",
    about_team1_name: "Founder",
    about_team1_role: "Product / Vision",
    about_team1_desc: "Leads product direction and the launcher experience.",
    about_team2_name: "Core Dev",
    about_team2_role: "Launcher / Backend",
    about_team2_desc: "Focused on performance, security, and reliable updates.",
    about_team3_name: "Community",
    about_team3_role: "Support / Moderation",
    about_team3_desc: "Direct support and feedback management.",
    about_phase1_label: "Phase 1",
    about_phase1_date: "Now",
    about_phase1_title: "Launcher and UI polish",
    about_phase1_text: "Stability, UX, and RTL details are the priority.",
    about_phase2_label: "Phase 2",
    about_phase2_date: "Next",
    about_phase2_title: "Server search + mod support",
    about_phase2_text: "Richer server lists and smarter mod handling.",
    about_phase3_label: "Phase 3",
    about_phase3_date: "Soon",
    about_phase3_title: "Rank and profile system",
    about_phase3_text: "Roleplay profiles, achievements, and personal stats.",
    about_phase4_label: "Phase 4",
    about_phase4_date: "Later",
    about_phase4_title: "Unified ecosystem",
    about_phase4_text: "Launcher, server portal, and community in one flow.",
    about_cta_title: "Ready to jump into RP?",
    about_cta_text: "Download the launcher and join top RP servers in minutes.",
    about_cta_button: "Download Launcher",
    download_title: "Download",
    download_intro: "Get the latest OverFive Launcher and jump into RP fast.",
    download_size_label: "Size:",
    download_release_label: "Release:",
    download_platform_label: "Platform:",
    download_button: "Download OverFive Launcher",
    download_pack_label: "Download Pack",
    download_pack_sub: "Launcher + Anti-Cheat (ZIP)",
    download_pack_hint: "Single ZIP containing launcher and anti-cheat.",
    servers_title: "Servers",
    servers_subtitle: "Filter, sort, and find the best RP server in one click.",
    gallery_title: "Gallery",
    gallery_subtitle: "Latest shots from OverFive servers and launcher.",
    servers_refresh: "Refresh servers",
    servers_search_label: "Search",
    servers_search_placeholder: "Search servers...",
    servers_status_label: "Server status",
    servers_status_all: "All",
    servers_status_online: "Online",
    servers_status_offline: "Offline",
    servers_mode_label: "Mode",
    servers_mode_rp: "RP",
    servers_mode_freeroam: "Freeroam",
    servers_lang_label: "Language",
    servers_lang_fa: "Persian",
    servers_lang_en: "English",
    servers_sort_label: "Sort",
    servers_sort_players: "Players (high to low)",
    servers_sort_ping: "Ping (low to high)",
    servers_sort_rating: "Rating (high to low)",
    servers_sort_name: "Name (A-Z)",
    servers_filter_hint: "Live data loads securely from the OverFive API.",
    servers_results_label: "servers found",
    footer_desc: "Next-gen launcher for RolePlay servers",
    footer_made: "Made with <3 by The Boyz",
    footer_copyright: "(c) 2026 OverFive. All rights reserved.",
    intro_tag: "Launch. Connect. Rule.",
    skip: "Skip",
    theme_label: "Theme",
    lang_label: "Language"
  }
};

const i18nOverrides = {
  fa: {
    nav_gallery: "گالری",
    nav_downloads: "دانلودها",
    download_title: "دانلود",
    download_intro: "آخرین نسخه لانچر OverFive را دریافت کنید و سریع وارد RP شوید.",
    download_size_label: "حجم:",
    download_size_value: "۹ مگابایت",
    download_release_label: "انتشار:",
    download_release_value: "۱۴۰۴/۰۸/۲۶",
    download_platform_label: "پلتفرم:",
    download_platform_value: "ویندوز",
    download_button: "دانلود لانچر OverFive",
    download_pack_label: "دانلود بسته",
    download_pack_sub: "لانچر + آنتی‌چیت (ZIP)",
    download_pack_hint: "یک فایل ZIP شامل لانچر و آنتی‌چیت.",
    gallery_title: "گالری",
    gallery_subtitle: "جدیدترین تصاویر لانچر و سرورها."
  },
  en: {
    nav_gallery: "Gallery",
    download_pack_label: "Download Pack",
    download_pack_sub: "Launcher + Anti-Cheat (ZIP)",
    download_pack_hint: "Single ZIP containing launcher and anti-cheat.",
    download_size_value: "9 MB",
    download_release_value: "2025-11-17",
    download_platform_value: "Windows",
    gallery_title: "Gallery",
    gallery_subtitle: "Latest shots from OverFive servers and launcher."
  }
};
Object.assign(i18n.fa, i18nOverrides.fa);
Object.assign(i18n.en, i18nOverrides.en);

const faFix = {
  nav_gallery: "\u06af\u0627\u0644\u0631\u06cc",
  gallery_title: "\u06af\u0627\u0644\u0631\u06cc",
  gallery_subtitle: "\u062c\u062f\u06cc\u062f\u062a\u0631\u06cc\u0646 \u062a\u0635\u0627\u0648\u06cc\u0631 \u0644\u0627\u0646\u0686\u0631 \u0648 \u0633\u0631\u0648\u0631\u0647\u0627.",
  download_pack_label: "\u062f\u0627\u0646\u0644\u0648\u062f \u0628\u0633\u062a\u0647",
  download_pack_sub: "\u0644\u0627\u0646\u0686\u0631 + \u0622\u0646\u062a\u06cc\u200c\u0686\u06cc\u062a (ZIP)",
  download_pack_hint: "\u06cc\u06a9 \u0641\u0627\u06cc\u0644 ZIP \u0634\u0627\u0645\u0644 \u0644\u0627\u0646\u0686\u0631 \u0648 \u0622\u0646\u062a\u06cc\u200c\u0686\u06cc\u062a.",
  servers_refresh: "\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0633\u0631\u0648\u0631\u0647\u0627"
};
Object.assign(i18n.fa, faFix);

// Portfolio version: no installer is distributed; keep both languages accurate.
Object.assign(i18n.fa, {
  cta_header: "نمایش دمو لانچر",
  cta_download: "نمایش دمو لانچر",
  about_cta_text: "این وب‌سایت نسخه نمایشی یک پروژه منتشرنشده است؛ فایل لانچر ارائه نمی‌شود.",
  about_cta_button: "نمایش دمو لانچر",
  download_intro: "این وب‌سایت یک پروژه نمونه منتشرنشده است. لانچر برای دانلود در دسترس نیست.",
  download_demo_title: "لانچر OverFive — نسخه نمایشی وب‌سایت",
  download_demo_badge: "نمونه کار",
  download_pack_label: "دانلود غیرفعال است",
  download_pack_sub: "فقط برای نمایش نمونه کار",
  download_pack_hint: "هیچ فایل نصب یا بسته آنتی‌چیت در این نسخه نمایشی ارائه نمی‌شود."
});
Object.assign(i18n.en, {
  cta_header: "View Launcher Demo",
  cta_download: "View Launcher Demo",
  about_cta_text: "This website is an unlaunched portfolio demonstration; no launcher download is provided.",
  about_cta_button: "View Launcher Demo",
  download_intro: "This is an unlaunched portfolio demonstration. The launcher is not available for download.",
  download_demo_title: "OverFive Launcher — Website Demo",
  download_demo_badge: "Portfolio demonstration",
  download_pack_label: "Download unavailable",
  download_pack_sub: "Portfolio demo only",
  download_pack_hint: "No installer or anti-cheat package is provided with this demo."
});

const defaultConfig = {
  background_color: '#0E0E0E',
  surface_color: '#1A1A1A',
  text_color: '#EDEDED',
  primary_action: '#FF7A00',
  secondary_action: '#2A2A2A',
  font_family: '',
  font_size: 16,
  hero_title: 'OverFive',
  hero_subtitle: 'Beyond FiveM',
  hero_description: 'Next-gen launcher for RolePlay servers',
  cta_download: 'Download Launcher',
  cta_servers: 'Browse Servers',
  feature1_title: 'Lightning Fast',
  feature2_title: 'Secure File Health',
  feature3_title: 'Smart Server Discovery',
  feature4_title: 'Real RP Experience'
};

function safeSetStyle(el, styles){
  if(!el) return;
  for (const [k,v] of Object.entries(styles)) el.style[k] = v;
}

window.addEventListener("load", () => {
  document.documentElement.classList.add("is-loaded");
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.remove();
  }
});

function applyTheme(theme){
  const html = document.documentElement;
  html.setAttribute("data-theme", theme);
  try { localStorage.setItem(STORAGE.theme, theme); } catch {}
}

function getInitialTheme(){
  try {
    const saved = localStorage.getItem(STORAGE.theme);
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyLanguage(lang){
  const html = document.documentElement;
  const dict = i18n[lang] || i18n.fa;

  if (lang === "en") {
    html.lang = "en";
    html.dir = "ltr";
  } else {
    html.lang = "fa";
    html.dir = "rtl";
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const text = dict[key];
    if (typeof text === "string") el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const text = dict[key];
    if (typeof text === "string") el.setAttribute("placeholder", text);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    if (!key) return;
    const text = dict[key];
    if (typeof text === "string") el.setAttribute("aria-label", text);
  });

  if (typeof syncCustomSelectLabels === "function") {
    syncCustomSelectLabels();
  }

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.setAttribute("aria-label", dict.theme_label);

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.setAttribute("aria-label", dict.lang_label);

  try { localStorage.setItem(STORAGE.lang, lang); } catch {}
  try { document.dispatchEvent(new CustomEvent("overfive:langchange", { detail: { lang } })); } catch {}
}

function syncCustomSelectLabels(){
  document.querySelectorAll("[data-select]").forEach(wrapper => {
    const native = wrapper.querySelector("select");
    const label = wrapper.querySelector("[data-select-label]");
    const options = Array.from(wrapper.querySelectorAll(".select-option"));
    if (!native || !label || !options.length) return;

    let selected = options.find(opt => opt.dataset.value === native.value);
    if (!selected) {
      selected = options[0];
      if (selected?.dataset.value) native.value = selected.dataset.value;
    }

    options.forEach(opt => {
      const isSelected = opt === selected;
      opt.classList.toggle("is-selected", isSelected);
      opt.setAttribute("aria-selected", isSelected ? "true" : "false");
    });

    if (selected) label.textContent = selected.textContent;
  });
}

function initCustomSelects(){
  document.querySelectorAll("[data-select]").forEach(wrapper => {
    if (wrapper.dataset.selectInit === "1") return;
    const trigger = wrapper.querySelector(".select-trigger");
    const native = wrapper.querySelector("select");
    const options = Array.from(wrapper.querySelectorAll(".select-option"));
    if (!trigger || !native || !options.length) return;

    wrapper.dataset.selectInit = "1";

    const close = () => {
      wrapper.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const open = wrapper.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    options.forEach(opt => {
      opt.addEventListener("click", () => {
        const value = opt.dataset.value || "";
        if (value) native.value = value;
        native.dispatchEvent(new Event("change", { bubbles: true }));
        syncCustomSelectLabels();
        close();
      });
    });

    native.addEventListener("change", () => {
      syncCustomSelectLabels();
    });

    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });

    syncCustomSelectLabels();
  });
}

function getInitialLanguage(){
  try {
    const saved = localStorage.getItem(STORAGE.lang);
    if (saved === "fa" || saved === "en") return saved;
  } catch {}
  return (document.documentElement.lang || "fa").startsWith("en") ? "en" : "fa";
}

function onConfigChange(config = {}) {
  const customFont = config.font_family;
  const baseSize = Number(config.font_size || defaultConfig.font_size);

  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryAction = config.primary_action || defaultConfig.primary_action;
  const secondaryAction = config.secondary_action || defaultConfig.secondary_action;

  const fontValue = customFont && customFont.trim()
    ? `${customFont}, var(--font-base)`
    : "var(--font-base)";
  document.documentElement.style.setProperty("--font-custom", fontValue);

  safeSetStyle(document.body, { color: textColor });

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    heroTitle.style.fontFamily = `'Orbitron', ${fontValue}`;
    heroTitle.style.fontSize = (baseSize * 4) + 'px';
    heroTitle.style.color = textColor;
    if (!heroTitle.hasAttribute('data-i18n')) {
      heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
    }
  }

  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle) {
    heroSubtitle.style.fontSize = (baseSize * 2) + 'px';
    if (!heroSubtitle.hasAttribute('data-i18n')) {
      heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
    }
  }

  const heroDescription = document.getElementById('hero-description');
  if (heroDescription) {
    heroDescription.style.fontSize = (baseSize * 1.125) + 'px';
    if (!heroDescription.hasAttribute('data-i18n')) {
      heroDescription.textContent = config.hero_description || defaultConfig.hero_description;
    }
  }

  const ctaDownload = document.getElementById('cta-download');
  if (ctaDownload) {
    safeSetStyle(ctaDownload, { backgroundColor: primaryAction, color: backgroundColor });
    if (!ctaDownload.hasAttribute('data-i18n')) {
      ctaDownload.textContent = config.cta_download || defaultConfig.cta_download;
    }
  }

  const ctaServers = document.getElementById('cta-servers');
  if (ctaServers) {
    safeSetStyle(ctaServers, { backgroundColor: secondaryAction, color: textColor, borderColor: primaryAction });
    if (!ctaServers.hasAttribute('data-i18n')) {
      ctaServers.textContent = config.cta_servers || defaultConfig.cta_servers;
    }
  }

  const headerCta = document.getElementById('header-cta');
  safeSetStyle(headerCta, { backgroundColor: primaryAction, color: backgroundColor });

  const f1 = document.getElementById('feature1-title');
  if (f1 && !f1.hasAttribute('data-i18n')) f1.textContent = config.feature1_title || defaultConfig.feature1_title;
  const f2 = document.getElementById('feature2-title');
  if (f2 && !f2.hasAttribute('data-i18n')) f2.textContent = config.feature2_title || defaultConfig.feature2_title;
  const f3 = document.getElementById('feature3-title');
  if (f3 && !f3.hasAttribute('data-i18n')) f3.textContent = config.feature3_title || defaultConfig.feature3_title;
  const f4 = document.getElementById('feature4-title');
  if (f4 && !f4.hasAttribute('data-i18n')) f4.textContent = config.feature4_title || defaultConfig.feature4_title;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      { get: () => config.background_color || defaultConfig.background_color,
        set: (value) => { config.background_color = value; window.elementSdk?.setConfig({ background_color: value }); } },
      { get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => { config.surface_color = value; window.elementSdk?.setConfig({ surface_color: value }); } },
      { get: () => config.text_color || defaultConfig.text_color,
        set: (value) => { config.text_color = value; window.elementSdk?.setConfig({ text_color: value }); } },
      { get: () => config.primary_action || defaultConfig.primary_action,
        set: (value) => { config.primary_action = value; window.elementSdk?.setConfig({ primary_action: value }); } },
      { get: () => config.secondary_action || defaultConfig.secondary_action,
        set: (value) => { config.secondary_action = value; window.elementSdk?.setConfig({ secondary_action: value }); } }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => { config.font_family = value; window.elementSdk?.setConfig({ font_family: value }); }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => { config.font_size = value; window.elementSdk?.setConfig({ font_size: value }); }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ['hero_title', config.hero_title || defaultConfig.hero_title],
    ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
    ['hero_description', config.hero_description || defaultConfig.hero_description],
    ['cta_download', config.cta_download || defaultConfig.cta_download],
    ['cta_servers', config.cta_servers || defaultConfig.cta_servers],
    ['feature1_title', config.feature1_title || defaultConfig.feature1_title],
    ['feature2_title', config.feature2_title || defaultConfig.feature2_title],
    ['feature3_title', config.feature3_title || defaultConfig.feature3_title],
    ['feature4_title', config.feature4_title || defaultConfig.feature4_title]
  ]);
}

function runIntroIfNeeded(){
  const intro = document.getElementById("intro");
  if (!intro) return;

  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const already = (() => { try { return sessionStorage.getItem(STORAGE.intro) === "1"; } catch { return false; } })();

  const skip = () => {
    try { sessionStorage.setItem(STORAGE.intro, "1"); } catch {}
    intro.setAttribute("aria-hidden","true");
  };

  const skipBtn = document.getElementById("intro-skip");
  if (skipBtn) skipBtn.addEventListener("click", skip);

  if (reduced || already){
    skip();
    return;
  }

  intro.classList.add("is-running");

  setTimeout(() => intro.classList.add("is-ignite"), 900);

  setTimeout(() => intro.classList.add("is-reveal"), 2000);

  setTimeout(() => {
    const introLogo = document.getElementById("intro-logo");
    const headerLogo = document.getElementById("header-logo-target");
    if (!introLogo || !headerLogo) {
      intro.classList.add("is-fadeout");
      setTimeout(skip, 350);
      return;
    }

    const a = introLogo.getBoundingClientRect();
    const b = headerLogo.getBoundingClientRect();

    const dx = (b.left + b.width/2) - (a.left + a.width/2);
    const dy = (b.top + b.height/2) - (a.top + a.height/2);
    const scale = b.width / a.width;

    intro.classList.add("is-fly");
    introLogo.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;

    setTimeout(() => {
      intro.classList.add("is-fadeout");
      setTimeout(skip, 380);
    }, 520);
  }, 2450);
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(getInitialTheme());
  applyLanguage(getInitialLanguage());
  initCustomSelects();

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn){
    themeBtn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(cur === "dark" ? "light" : "dark");
    });
  }

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn){
    langBtn.addEventListener("click", () => {
      const cur = (document.documentElement.lang || "fa").startsWith("en") ? "en" : "fa";
      applyLanguage(cur === "fa" ? "en" : "fa");
    });
  }

  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const closeNav = () => navMenu?.classList.remove("is-open");
  if (navToggle && navMenu){
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("is-open");
    });
    navMenu.querySelectorAll("a.nav-link").forEach(a => {
      a.addEventListener("click", closeNav);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeNav();
    });
  }

  const heroIcon = document.querySelector(".hero-icon");
  if (heroIcon){
    setTimeout(() => heroIcon.classList.add("magic"), 250);
  }

  onConfigChange({ ...defaultConfig });

  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      onConfigChange,
      mapToCapabilities,
      mapToEditPanelValues
    });
  }

  document.querySelectorAll('a.nav-link[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  runIntroIfNeeded();
});
(() => {
  const grid = document.getElementById("serversGrid");
  const search = document.getElementById("serverSearch");
  const sortBy = document.getElementById("sortBy");
  const resultCount = document.getElementById("resultCount");
  const filtersForm = document.getElementById("serversFilters");
  const refreshBtn = document.getElementById("serversRefresh");

  if (!grid || !filtersForm) return;

  const placeholder = document.getElementById("serversPlaceholder") || document.createElement("div");
  placeholder.classList.add("servers-placeholder");
  placeholder.id = placeholder.id || "serversPlaceholder";

  const state = {
    status: "all",
    mode: new Set(),
    lang: new Set(),
    q: "",
    sort: "players"
  };
  let servers = [];

  const FALLBACK_IMAGE = "assets/gallery/server-1.jpg";
  const msg = {
    en: {
      loading: "Loading servers...",
      none: "No servers match your filters.",
      empty: "No servers found from the API.",
      error: "Unable to load servers. Please try again.",
      fallback: "Using sample data while the live API is blocked.",
      refresh: "Refresh servers"
    },
    fa: {
      loading: "در حال بارگذاری سرورها...",
      none: "هیچ سروری با فیلترهای شما پیدا نشد.",
      empty: "سروری از API دریافت نشد.",
      error: "خطا در دریافت سرورها. لطفا دوباره تلاش کنید.",
      fallback: "داده نمونه نمایش داده شد؛ API در دسترس نبود.",
      refresh: "به‌روزرسانی سرورها"
    }
  };

  const getLang = () => (document.documentElement.lang || "fa").startsWith("en") ? "en" : "fa";
  const t = (key) => msg[getLang()]?.[key] || msg.en[key] || "";
  let lastStatusKey = null;

  function setStatus(keyOrText, tone = "muted") {
    const hasKey = Boolean(msg.en[keyOrText]);
    const message = hasKey ? t(keyOrText) : keyOrText;
    lastStatusKey = hasKey ? keyOrText : null;

    if (!message) {
      placeholder.hidden = true;
      placeholder.textContent = "";
      return;
    }

    placeholder.hidden = false;
    placeholder.textContent = message;
    placeholder.classList.toggle("is-error", tone === "error");
    placeholder.classList.toggle("is-muted", tone === "muted");

    grid.innerHTML = "";
    grid.appendChild(placeholder);
    if (resultCount) resultCount.textContent = "0";
  }

  const cleanText = (value, fallback = "") => {
    if (value === undefined || value === null) return fallback;
    const cleaned = String(value)
      .replace(/\^[0-9]/g, "")
      .replace(/[<>]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return cleaned || fallback;
  };

  const safeNumber = (value, fallback = 0) => {
    const num = Number(value);
    return Number.isFinite(num) ? num : fallback;
  };

  const safeUrl = (value) => {
    if (!value) return "";
    try {
      const url = new URL(value, window.location.href);
      if (url.protocol === "http:" || url.protocol === "https:") {
        return url.href;
      }
    } catch {}
    return "";
  };

  const detectLang = (value = "") => {
    const v = value.toLowerCase();
    if (v.includes("fa") || v.includes("ir") || v.includes("persian")) return "fa";
    if (v.includes("en")) return "en";
    return "en";
  };

  const detectMode = (value = "") => {
    const v = value.toLowerCase();
    if (v.includes("free")) return "freeroam";
    if (v.includes("rp")) return "rp";
    return "rp";
  };

  function normalizeServers(payload) {
    const source = Array.isArray(payload) ? payload : Array.isArray(payload?.value) ? payload.value : [];
    const seen = new Set();

    return source.reduce((list, item, idx) => {
      if (!item || typeof item !== "object") return list;

      const data = item.Data || {};
      const vars = data.vars || {};
      const endpoint = cleanText(item.EndPoint || item.endpoint || "", "");
      if (endpoint && seen.has(endpoint)) return list;
      if (endpoint) seen.add(endpoint);

      const name = cleanText(vars.sv_projectName || data.hostname || endpoint || `Server ${idx + 1}`, "Unknown server");
      const description = cleanText(vars.sv_projectDesc || data.mapname || data.gametype || vars.gametype || endpoint, "No description yet.");
      const players = safeNumber(data.clients, 0);
      const maxPlayers = safeNumber(vars.sv_maxClients || data.svMaxclients || data.svMaxClients, 0);
      const ping = safeNumber(data.ping || vars.ping, 0);
      const rating = Math.max(0, Math.min(5, safeNumber(vars.rating, 0)));
      const status = players > 0 ? "online" : "offline";
      const mode = detectMode(vars.tags || data.gametype || vars.gametype || "");
      const lang = detectLang(vars.language || vars.locale || "");
      const map = cleanText(vars.mapname || data.mapname || "", "");
      const locale = cleanText(vars.locale || "", "");
      const tags = cleanText(vars.tags || "", "");
      const owner = cleanText(vars.OWNER || vars.Owner || "", "");
      const banner = "";
      const website = safeUrl(vars.website || vars.Discord || vars.discord);
      const discord = safeUrl(vars.Discord || vars.discord);

      list.push({
        id: endpoint || `srv-${idx}`,
        endpoint,
        name,
        description,
        status,
        mode,
        lang,
        map,
        locale,
        tags,
        owner,
        players,
        maxPlayers,
        ping,
        rating,
        banner,
        website,
        discord
      });

      return list;
    }, []);
  }

  function buildBadge(text, className) {
    const span = document.createElement("span");
    span.className = className;
    span.textContent = text;
    return span;
  }

  function buildCard(server) {
    const card = document.createElement("article");
    card.className = "server-card";
    card.dataset.name = server.name.toLowerCase();
    card.dataset.status = server.status;
    card.dataset.mode = server.mode;
    card.dataset.lang = server.lang;
    card.dataset.players = String(server.players);
    card.dataset.max = String(server.maxPlayers);
    card.dataset.ping = String(server.ping);
    card.dataset.rating = String(server.rating);

    const media = document.createElement("div");
    media.className = "server-media";

    const img = document.createElement("img");
    img.src = server.banner || FALLBACK_IMAGE;
    img.alt = `Server screenshot: ${server.name}`;
    img.loading = "lazy";
    img.width = 640;
    img.height = 360;
    img.referrerPolicy = "no-referrer";
    img.addEventListener("error", () => { img.src = FALLBACK_IMAGE; });
    media.appendChild(img);

    const badges = document.createElement("div");
    badges.className = "server-badges";
    badges.appendChild(buildBadge(server.status === "online" ? "Online" : "Offline", `badge-status ${server.status}`));
    badges.appendChild(buildBadge(server.mode === "freeroam" ? "Freeroam" : "RP", "badge-pill"));
    badges.appendChild(buildBadge(server.lang === "fa" ? "Persian" : "English", "badge-pill"));
    if (server.locale) badges.appendChild(buildBadge(server.locale, "badge-pill"));
    media.appendChild(badges);

    const body = document.createElement("div");
    body.className = "server-body";

    const head = document.createElement("div");
    head.className = "server-head";

    const nameEl = document.createElement("h2");
    nameEl.className = "server-name";
    nameEl.textContent = server.name;
    head.appendChild(nameEl);

    const ratingBox = document.createElement("div");
    ratingBox.className = "server-rating";
    const ratingLabel = server.rating ? `Rating ${server.rating.toFixed(1)} out of 5` : "Rating not available";
    ratingBox.setAttribute("aria-label", ratingLabel);

    const stars = document.createElement("span");
    stars.className = "stars";
    const fill = Math.max(0, Math.min(100, (server.rating || 0) * 20));
    stars.style.setProperty("--fill", `${fill}%`);
    ratingBox.appendChild(stars);

    const ratingNum = document.createElement("span");
    ratingNum.className = "rating-num";
    ratingNum.textContent = server.rating ? server.rating.toFixed(1) : "N/A";
    ratingBox.appendChild(ratingNum);

    head.appendChild(ratingBox);
    body.appendChild(head);

    const desc = document.createElement("p");
    desc.className = "server-desc";
    desc.textContent = server.description;
    body.appendChild(desc);

    const kv = document.createElement("dl");
    kv.className = "server-kv";

    const playersItem = document.createElement("div");
    const playersDt = document.createElement("dt");
    playersDt.textContent = "Players";
    const playersDd = document.createElement("dd");
    playersDd.textContent = server.maxPlayers > 0 ? `${server.players} / ${server.maxPlayers}` : `${server.players}`;
    playersItem.appendChild(playersDt);
    playersItem.appendChild(playersDd);
    kv.appendChild(playersItem);

    const pingItem = document.createElement("div");
    const pingDt = document.createElement("dt");
    pingDt.textContent = "Ping";
    const pingDd = document.createElement("dd");
    pingDd.textContent = server.ping ? `${server.ping} ms` : "N/A";
    pingItem.appendChild(pingDt);
    pingItem.appendChild(pingDd);
    kv.appendChild(pingItem);

    const mapItem = document.createElement("div");
    const mapDt = document.createElement("dt");
    mapDt.textContent = "Map";
    const mapDd = document.createElement("dd");
    mapDd.textContent = server.map || "N/A";
    mapItem.appendChild(mapDt);
    mapItem.appendChild(mapDd);
    kv.appendChild(mapItem);

    const siteItem = document.createElement("div");
    const siteDt = document.createElement("dt");
    siteDt.textContent = "Website";
    const siteDd = document.createElement("dd");
    if (server.website) {
      const link = document.createElement("a");
      link.className = "link";
      link.href = server.website;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.textContent = "Open";
      link.setAttribute("aria-label", `View server ${server.name}`);
      siteDd.appendChild(link);
    } else if (server.discord) {
      const link = document.createElement("a");
      link.className = "link";
      link.href = server.discord;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.textContent = "Discord";
      link.setAttribute("aria-label", `Discord for ${server.name}`);
      siteDd.appendChild(link);
    } else {
      siteDd.textContent = "N/A";
    }
    siteItem.appendChild(siteDt);
    siteItem.appendChild(siteDd);
    kv.appendChild(siteItem);

    body.appendChild(kv);

    const tagsRow = document.createElement("div");
    tagsRow.className = "server-tags";
    if (server.owner) {
      const o = document.createElement("span");
      o.textContent = `Owner: ${server.owner}`;
      tagsRow.appendChild(o);
    }
    if (server.tags) {
      const t = document.createElement("span");
      t.textContent = `Tags: ${server.tags}`;
      tagsRow.appendChild(t);
    }
    if (tagsRow.childNodes.length) body.appendChild(tagsRow);

    const actions = document.createElement("div");
    actions.className = "server-actions";

    const joinBtn = document.createElement("button");
    joinBtn.className = "btn-join";
    joinBtn.type = "button";
    joinBtn.textContent = "Join Server";
    joinBtn.setAttribute("aria-label", `Join Server ${server.name}`);
    joinBtn.disabled = server.status === "offline";
    actions.appendChild(joinBtn);

    const ghostBtn = document.createElement("button");
    ghostBtn.className = "btn-ghost";
    ghostBtn.type = "button";
    ghostBtn.textContent = "Details";
    ghostBtn.setAttribute("aria-label", `More about ${server.name}`);
    actions.appendChild(ghostBtn);

    body.appendChild(actions);

    card.appendChild(media);
    card.appendChild(body);

    return card;
  }

  function matches(server) {
    if (state.status !== "all" && server.status !== state.status) return false;
    if (state.mode.size && !state.mode.has(server.mode)) return false;
    if (state.lang.size && !state.lang.has(server.lang)) return false;

    if (state.q) {
      const target = `${server.name} ${server.description} ${server.endpoint}`.toLowerCase();
      if (!target.includes(state.q)) return false;
    }

    return true;
  }

  function sortServers(list) {
    const key = state.sort;
    if (key === "players") return list.sort((a, b) => b.players - a.players);
    if (key === "ping") return list.sort((a, b) => (a.ping || 9999) - (b.ping || 9999));
    if (key === "rating") return list.sort((a, b) => b.rating - a.rating);
    if (key === "name") return list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }

  function render(list) {
    if (!list.length) {
      setStatus("none");
      return;
    }

    placeholder.hidden = true;
    grid.innerHTML = "";

    const frag = document.createDocumentFragment();
    sortServers(list.slice()).forEach(server => {
      frag.appendChild(buildCard(server));
    });
    grid.appendChild(frag);
    if (resultCount) resultCount.textContent = String(list.length);
  }

  function applyFilters() {
    if (!servers.length) return;
    const filtered = servers.filter(matches);
    render(filtered);
  }

  function bindFilters() {
    filtersForm.querySelectorAll('.chip[data-filter="status"]').forEach(btn => {
      btn.addEventListener("click", () => {
        filtersForm.querySelectorAll('.chip[data-filter="status"]').forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        state.status = btn.dataset.value;
        applyFilters();
      });
    });

    filtersForm.querySelectorAll('input[name="mode"]').forEach(cb => {
      cb.addEventListener("change", () => {
        cb.checked ? state.mode.add(cb.value) : state.mode.delete(cb.value);
        applyFilters();
      });
    });

    filtersForm.querySelectorAll('input[name="lang"]').forEach(cb => {
      cb.addEventListener("change", () => {
        cb.checked ? state.lang.add(cb.value) : state.lang.delete(cb.value);
        applyFilters();
      });
    });

    search?.addEventListener("input", () => {
      state.q = (search.value || "").trim().toLowerCase();
      applyFilters();
    });

    sortBy?.addEventListener("change", () => {
      state.sort = sortBy.value;
      applyFilters();
    });
  }

  async function loadServers() {
    grid.setAttribute("aria-busy", "true");
    setStatus("loading");

    try {
      const resLocal = await fetch("assets/js/sample-servers.json", { cache: "no-cache" });
      if (!resLocal.ok) throw new Error("sample not found");
      const payloadLocal = await resLocal.json();
      servers = normalizeServers(payloadLocal);
      if (!servers.length) {
        setStatus("empty");
        return;
      }
      setStatus("");
      applyFilters();
    } catch (err) {
      console.error("Failed to load servers", err);
      setStatus("error", "error");
    } finally {
      grid.removeAttribute("aria-busy");
    }
  }

  document.addEventListener("overfive:langchange", () => {
    if (lastStatusKey) setStatus(lastStatusKey);
    if (refreshBtn) refreshBtn.textContent = t("refresh");
    applyFilters();
  });

  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      loadServers();
    });
    refreshBtn.textContent = t("refresh");
  }

  bindFilters();
  loadServers();
})();

(() => {
})();

(() => {
  const grid = document.getElementById("galleryGrid");
  const status = document.getElementById("galleryStatus");
  const lightbox = document.getElementById("lightbox");
  if (!grid || !status || !lightbox) return;

  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const backdrop = document.getElementById("lightboxBackdrop");

  // These images are bundled with the portfolio site. They can be shown even
  // when gallery.html is opened via file://, where browsers often block fetch().
  const bundledImages = [
  {
    "src": "assets/gallery/server-1.jpg",
    "title": "server-1",
    "alt": "server-1"
  },
  {
    "src": "assets/gallery/server-2.jpg",
    "title": "server-2",
    "alt": "server-2"
  },
  {
    "src": "assets/gallery/server-3.jpg",
    "title": "server-3",
    "alt": "server-3"
  }
];

  const setStatus = (message) => {
    status.textContent = message || "";
    status.hidden = !message;
  };

  const openLightbox = (item) => {
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt || item.title || "";
    lightboxCaption.textContent = item.title || "";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  [closeBtn, backdrop].forEach((el) => el?.addEventListener("click", closeLightbox));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });

  const normalize = (data) => {
    const list = Array.isArray(data?.images) ? data.images : Array.isArray(data) ? data : [];
    return list.map((item, index) => {
      const src = typeof item === "string" ? item : item?.src;
      return {
        src,
        title: typeof item === "string" ? `Shot ${index + 1}` : item?.title || `Shot ${index + 1}`,
        alt: typeof item === "string" ? `Gallery item ${index + 1}` : item?.alt || item?.title || `Gallery item ${index + 1}`
      };
    }).filter((item) => item.src);
  };

  const buildCard = (item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "gallery-card";
    card.setAttribute("aria-label", item.title || item.alt || "View image");
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt || item.title || "";
    image.loading = "lazy";
    image.decoding = "async";
    const caption = document.createElement("span");
    caption.className = "gallery-card__caption";
    caption.textContent = item.title || "Screenshot";
    card.append(image, caption);
    card.addEventListener("click", () => openLightbox(item));
    return card;
  };

  const renderGallery = (items) => {
    grid.replaceChildren(...items.map(buildCard));
    setStatus(items.length ? "" : "No gallery images available.");
  };

  // Show bundled images immediately without any network dependency.
  renderGallery(normalize(bundledImages));

  // Hosted websites can load an updated manifest containing additional photos.
  // When opening from disk or if the manifest is unavailable, keep the built-in
  // gallery visible instead of showing a loading/error message.
  if (window.location.protocol === "file:") return;
  fetch("assets/gallery/manifest.json", { cache: "no-cache" })
    .then((response) => {
      if (!response.ok) throw new Error(`Gallery manifest returned HTTP ${response.status}`);
      return response.json();
    })
    .then((payload) => {
      const items = normalize(payload);
      if (items.length) renderGallery(items);
    })
    .catch((error) => {
      console.warn("Using bundled gallery images:", error);
    });
})();

(() => {
  const refreshBtn = document.getElementById("downloadRefresh");
  if (!refreshBtn) return;
  refreshBtn.addEventListener("click", () => {
    window.location.reload();
  });
})();
