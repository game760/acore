// 全局语言对象：包含页面所有可翻译文本，key与HTML中data-i18n属性一一对应
const translations = {
  en: {
    // 导航栏
    download: "Download",
    docs: "Documentation",
    github: "GitHub",
    support: "Support",
    language: "Language",

    // Banner区
    bannerTitle: "AzerothCore WOTLK Download Center",
    bannerDesc: "Get the latest build of AzerothCore with Playerbots support for World of Warcraft: Wrath of the Lich King",
    getStarted: "Get Started",

    // 仓库统计区
    repoStats: "Repository Statistics",
    repoStatsDesc: "AzerothCore is a powerful open-source WoW server project with active development",
    stars: "Stars",
    forks: "Forks",
    openIssues: "Open Issues",
    contributors: "Contributors",
    viewOnGithub: "View on GitHub",

    // 下载区
    downloads: "Downloads",
    mapResources: "Map Resources",
    general: "General",
    database: "Database",
    mysql: "MySQL Compatible",
    global: "Global Download",
    alternative: "Alternative Download",
    dailyBuild: "Daily Build",
    required: "Required",
    regionTip: "If global download is slow, try the alternative download link (optimized for Asia region)",

    // 下载统计区
    downloadStats: "Download Statistics",
    downloadStatsDesc: "Download counts for core resources (updated in real-time)",
    downloadLabel: "Resource Type",
    downloadCount: "Download Count",
    downloadTooltip: "Downloads: %d",

    // 地图模态框
    mapResourcesDesc: "Required map files for server operation, please download all necessary components",
    runtimeLibrary: "Runtime Library",
    runtimeDesc: "Required dependencies for Windows/Linux server execution",
    installationNotes: "Installation Notes",
    installStep1: "Extract all map files to the 'data' folder in your AzerothCore directory",
    installStep2: "Ensure the database is imported before starting the server",

    // FAQ区
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Answers to common questions about AzerothCore downloads and installation",
    faq1Question: "What systems are supported?",
    faq1Answer: "Currently, we provide builds for Windows (x64) and Linux (x64). For macOS, please build from source code via the <a href='https://github.com/azerothcore/azerothcore-wotlk' target='_blank'>GitHub repository</a>.",
    faq2Question: "Do I need to download all map resources?",
    faq2Answer: "Yes, all map components (dbc, vmaps, mmaps, maps, cameras) are required for the server to run properly. The runtime library is optional but recommended for resolving dependency issues.",
    faq3Question: "How often are builds updated?",
    faq3Answer: "We provide daily builds with the latest code changes from the official AzerothCore repository. You can check the build timestamp on the <a href='https://github.com/game760/acore/releases' target='_blank'>releases page</a>.",

    // 页脚
    footerDesc: "A community-driven project dedicated to providing a stable, customizable WoW server experience. All trademarks belong to their respective owners.",
    resources: "Resources",
    documentation: "Documentation",
    tutorials: "Tutorials",
    apiReference: "API Reference",
    community: "Community Forum",
    project: "Project",
    issues: "Issue Tracker",
    legal: "Legal",
    license: "AGPL-3.0 License",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    copyright: "© 2025 AzerothCore Community. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",

    // 下载提示
    downloadTip: "Your download will start shortly. If it doesn't, click the link again.",

    // 构建状态（核心新增翻译）
    loadingStatus: "Loading Build Status...",
    noRecords: "No Build Records",
    buildStatusNormal: "Build Normal",
    successful: "Build Successful",
    failed: "Build Failed",
    building: "Building Now",
    waiting: "Pending Build",
    buildDetails: "View Details"
  },
  zh: {
    // 导航栏
    download: "下载",
    docs: "文档",
    github: "代码仓库",
    support: "支持",
    language: "语言",

    // Banner区
    bannerTitle: "AzerothCore WOTLK 下载中心",
    bannerDesc: "获取最新版支持Playerbots的AzerothCore核心，适用于《魔兽世界：巫妖王之怒》",
    getStarted: "立即开始",

    // 仓库统计区
    repoStats: "仓库统计",
    repoStatsDesc: "AzerothCore是功能强大的开源魔兽服务器项目，拥有活跃的开发社区",
    stars: "星标",
    forks: "分支",
    openIssues: "开放问题",
    contributors: "贡献者",
    viewOnGithub: "前往GitHub查看",

    // 下载区
    downloads: "下载资源",
    mapResources: "地图资源",
    general: "通用版",
    database: "数据库",
    mysql: "兼容MySQL",
    global: "全球下载",
    alternative: "备用下载",
    dailyBuild: "每日构建",
    required: "必须下载",
    regionTip: "若全球下载速度较慢，可尝试备用下载链接（针对亚洲地区优化）",

    // 下载统计区
    downloadStats: "下载统计",
    downloadStatsDesc: "核心资源下载量（实时更新）",
    downloadLabel: "资源类型",
    downloadCount: "下载次数",
    downloadTooltip: "下载量：%d",

    // 地图模态框
    mapResourcesDesc: "服务器运行所需的地图文件，请下载所有必要组件",
    runtimeLibrary: "运行时库",
    runtimeDesc: "Windows/Linux服务器运行所需的依赖文件",
    installationNotes: "安装说明",
    installStep1: "将所有地图文件解压到AzerothCore目录下的'data'文件夹中",
    installStep2: "启动服务器前，请确保已导入数据库",

    // FAQ区
    faqTitle: "常见问题",
    faqDesc: "关于AzerothCore下载与安装的常见问题解答",
    faq1Question: "支持哪些操作系统？",
    faq1Answer: "目前提供Windows（x64）和Linux（x64）版本的构建包。macOS用户请通过<a href='https://github.com/azerothcore/azerothcore-wotlk' target='_blank'>GitHub仓库</a>从源码编译。",
    faq2Question: "必须下载所有地图资源吗？",
    faq2Answer: "是的，所有地图组件（dbc、vmaps、mmaps、maps、cameras）均为服务器正常运行必需文件。运行时库为可选组件，但建议下载以解决依赖问题。",
    faq3Question: "构建包多久更新一次？",
    faq3Answer: "我们每天提供基于AzerothCore官方仓库最新代码的构建包。您可在<a href='https://github.com/game760/acore/releases' target='_blank'>发布页面</a>查看构建时间戳。",

    // 页脚
    footerDesc: "由社区驱动的开源项目，致力于提供稳定、可定制的魔兽服务器体验。所有商标归其各自所有者所有。",
    resources: "资源",
    documentation: "官方文档",
    tutorials: "教程指南",
    apiReference: "API参考",
    community: "社区论坛",
    project: "项目",
    issues: "问题跟踪",
    legal: "法律信息",
    license: "AGPL-3.0 许可证",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    copyright: "© 2025 AzerothCore 社区。保留所有权利。",
    privacy: "隐私",
    terms: "条款",
    cookies: "Cookie",

    // 下载提示
    downloadTip: "下载即将开始，若未自动开始，请再次点击链接。",

    // 构建状态（核心新增翻译）
    loadingStatus: "加载构建状态中...",
    noRecords: "无构建记录",
    buildStatusNormal: "构建正常",
    successful: "构建成功",
    failed: "构建失败",
    building: "正在构建",
    waiting: "等待构建",
    buildDetails: "查看详情"
  }
};

// 全局当前语言变量：默认英文，可根据浏览器语言自动调整
let currentLang = "en";

// 初始化翻译：遍历所有带data-i18n属性的元素，替换为当前语言文本
function initTranslations() {
  // 处理普通文本翻译
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const translationKey = element.getAttribute("data-i18n");
    // 检查当前语言是否有对应翻译
    if (translations[currentLang] && translations[currentLang][translationKey]) {
      // 支持带HTML标签的翻译（如FAQ中的链接）
      if (element.hasAttribute("data-i18n-html")) {
        element.innerHTML = translations[currentLang][translationKey];
      } else {
        element.textContent = translations[currentLang][translationKey];
      }
    }
  });

  // 初始化时同步更新构建状态翻译
  updateAllBuildStatusTranslations();
}

// 切换语言：更新当前语言并重新初始化翻译
function changeLanguage(targetLang) {
  // 仅在语言变化时执行更新
  if (targetLang !== currentLang) {
    currentLang = targetLang;
    // 更新页面文本
    initTranslations();
    // 更新图表语言（若存在图表）
    if (typeof updateChartLanguage === "function") {
      updateChartLanguage(currentLang);
    }
    // 同步语言按钮样式（高亮当前选中语言）
    if (typeof syncLangBtnStyles === "function") {
      syncLangBtnStyles(currentLang === "zh");
    }
  }
}

// 批量更新所有构建状态文本（语言切换时调用）
function updateAllBuildStatusTranslations() {
  const buildStatusContainers = document.querySelectorAll(".build-status");
  if (buildStatusContainers.length > 0 && typeof updateBuildStatus === "function") {
    buildStatusContainers.forEach(container => {
      updateBuildStatus(container);
    });
  }
}

// 页面加载完成后初始化翻译
document.addEventListener("DOMContentLoaded", function() {
  // 可选：根据浏览器语言自动设置初始语言
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.toLowerCase().includes("zh")) {
    currentLang = "zh";
  }
  // 执行初始化
  initTranslations();
});