const translations = {
  zh: {
    skip: "跳到主要内容",
    navHome: "首页",
    navFeatures: "功能",
    navPrivacy: "隐私",
    navFaq: "常见问题",
    navSupport: "支持",
    appStore: "App Store 下载",
    comingSoon: "即将上线",
    brandChinese: "闪光日子",
    heroTitle: "让每一天，<br>都有<span class=\"hero-highlight\">值得期待</span>的理由。",
    heroSubtitle: "一款专注于记录人生重要日子的高品质倒计时应用。",
    appTitle: "闪光日子",
    appTagline: "让每一个重要的日子发光",
    wedding: "结婚纪念日",
    travel: "旅行纪念日",
    daysLeft: "天<br>还有",
    whyTitle: "为什么选择 Lumiday ✦",
    whySubtitle: "生活由值得期待的时刻组成。",
    designTitle: "精美设计",
    designBody: "每一个界面都精心打磨，完美适配 Apple 设备。",
    privacyTitle: "隐私优先",
    privacyBody: "所有数据只保存在你的设备，不账号、不追踪。",
    meaningTitle: "意义非凡",
    meaningBody: "记录那些真正重要的日子，让生活更有期待。",
    momentsTitle: "为每一个重要时刻而设计 ✦",
    homeTitle: "首页",
    homeBody: "所有重要的日子，一目了然。",
    todayTitle: "今天",
    todayBody: "专注当下，珍惜每一天。",
    todayText: "就是今天",
    widgetTitle: "小组件",
    widgetBody: "桌面随时可见，不错过每一刻。",
    themeTitle: "主题",
    themeBody: "多种星光主题，随心选择。",
    privacySectionTitle: "你的回忆，只属于你。",
    privacySectionBody: "真正重要的纪念，不应该属于服务器。",
    privacyPoint1: "无需账号",
    privacyPointBody1: "打开即可记录。",
    privacyPoint2: "不追踪",
    privacyPointBody2: "不建立用户画像。",
    privacyPoint3: "无广告",
    privacyPointBody3: "不打扰重要时刻。",
    privacyPoint4: "本地保存",
    privacyPointBody4: "数据留在你的设备中。",
    faqTitle: "常见问题 ✦",
    faqQ1: "支持离线使用吗？",
    faqA1: "支持，所有功能都可以离线使用。",
    faqQ2: "支持小组件吗？",
    faqA2: "支持，提供多种尺寸的精美小组件。",
    faqQ3: "需要注册账号吗？",
    faqA3: "不需要，打开即可直接使用。",
    faqQ4: "数据会被上传吗？",
    faqA4: "不会，所有数据都只保存在你的设备中。",
    privacyPolicy: "隐私政策",
    backHome: "返回首页",
    contact: "联系方式",
    footerLine: "生活，会因为有所期待而更加美好。",
    rights: "保留所有权利。"
  },
  en: {
    skip: "Skip to main content",
    navHome: "Home",
    navFeatures: "Features",
    navPrivacy: "Privacy",
    navFaq: "FAQ",
    navSupport: "Support",
    appStore: "Download on App Store",
    comingSoon: "Coming soon",
    brandChinese: "Lumiday",
    heroTitle: "Give every day<br>something to look forward to.",
    heroSubtitle: "A beautifully designed countdown app for life’s important moments.",
    appTitle: "Lumiday",
    appTagline: "Let every important day glow",
    wedding: "Anniversary",
    travel: "Travel Day",
    daysLeft: "days<br>left",
    whyTitle: "Why Lumiday ✦",
    whySubtitle: "Life is made of moments worth anticipating.",
    designTitle: "Beautiful Design",
    designBody: "Every screen is carefully polished and made for Apple devices.",
    privacyTitle: "Privacy First",
    privacyBody: "Your data stays on your device. No account, no tracking.",
    meaningTitle: "Made Meaningful",
    meaningBody: "Keep the days that truly matter close, and make life feel more anticipated.",
    momentsTitle: "Designed for Every Important Moment ✦",
    homeTitle: "Home",
    homeBody: "See every important day at a glance.",
    todayTitle: "Today",
    todayBody: "Focus on now and cherish each day.",
    todayText: "Today",
    widgetTitle: "Widgets",
    widgetBody: "Keep moments visible on your Home Screen.",
    themeTitle: "Themes",
    themeBody: "Choose from luminous starlight themes.",
    privacySectionTitle: "Your memories belong only to you.",
    privacySectionBody: "The moments that matter should not belong to a server.",
    privacyPoint1: "No account required",
    privacyPointBody1: "Open and start recording.",
    privacyPoint2: "No tracking",
    privacyPointBody2: "No user profiles.",
    privacyPoint3: "No ads",
    privacyPointBody3: "No interruptions.",
    privacyPoint4: "Local storage",
    privacyPointBody4: "Your data stays on your device.",
    faqTitle: "FAQ ✦",
    faqQ1: "Does Lumiday work offline?",
    faqA1: "Yes. All core features can be used offline.",
    faqQ2: "Does Lumiday support widgets?",
    faqA2: "Yes. Lumiday includes beautiful widgets in multiple sizes.",
    faqQ3: "Do I need an account?",
    faqA3: "No. Open the app and start using it right away.",
    faqQ4: "Will my data be uploaded?",
    faqA4: "No. Your app data is stored only on your device.",
    privacyPolicy: "Privacy Policy",
    backHome: "Back to Home",
    contact: "Contact",
    footerLine: "Life becomes brighter when there is something to look forward to.",
    rights: "All rights reserved."
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.zh;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  translatable.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem("lumiday-language", lang);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("lumiday-language");
const defaultLanguage = document.body.dataset.defaultLanguage;
setLanguage(defaultLanguage || (savedLanguage === "en" ? "en" : "zh"));

const revealElements = document.querySelectorAll(".reveal");
const showInitialRevealElements = () => {
  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      element.classList.add("visible");
    }
  });
};

showInitialRevealElements();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}
