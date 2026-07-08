import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useMemo } from "react";
import webFundamentalsBg from "@/assets/web-fundamentals-bg.png.asset.json";
import reactCourseBg from "@/assets/react-course.png.asset.json";
import nodejsCourseBg from "@/assets/nodejs-course.png.asset.json";
import nextjsCourseBg from "@/assets/nextjs-course.png.asset.json";
import pythonCourseBg from "@/assets/python-course.png.asset.json";
import dsaCourseBg from "@/assets/dsa-course.png.asset.json";
import cybersecCourseBg from "@/assets/cybersec-course.png.asset.json";
import langPython from "@/assets/langs/python.jpg.asset.json";
import langJavaScript from "@/assets/langs/javascript.jpg.asset.json";
import langTypeScript from "@/assets/langs/typescript.jpg.asset.json";
import langJava from "@/assets/langs/java.jpg.asset.json";
import langC from "@/assets/langs/c.jpg.asset.json";
import langCpp from "@/assets/langs/cpp.jpg.asset.json";
import langCsharp from "@/assets/langs/csharp.jpg.asset.json";
import langPhp from "@/assets/langs/php.jpg.asset.json";
import langGo from "@/assets/langs/go.jpg.asset.json";
import langRust from "@/assets/langs/rust.jpg.asset.json";
import langSwift from "@/assets/langs/swift.jpg.asset.json";
import langKotlin from "@/assets/langs/kotlin.jpg.asset.json";
import langDart from "@/assets/langs/dart.jpg.asset.json";
import langSql from "@/assets/langs/sql.jpg.asset.json";
import langHtml from "@/assets/langs/html.jpg.asset.json";
import langCss from "@/assets/langs/css.jpg.asset.json";
import * as THREE from "three";

const LANG_BG: Record<string, string> = {
  Python: langPython.url,
  JavaScript: langJavaScript.url,
  TypeScript: langTypeScript.url,
  Java: langJava.url,
  C: langC.url,
  "C++": langCpp.url,
  "C#": langCsharp.url,
  PHP: langPhp.url,
  Go: langGo.url,
  Rust: langRust.url,
  Swift: langSwift.url,
  Kotlin: langKotlin.url,
  Dart: langDart.url,
  SQL: langSql.url,
  HTML: langHtml.url,
  CSS: langCss.url,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Code Forge" },
      { name: "description", content: "Code Forge: مسارات تعليمية، كورسات مجانية، مشاريع عملية، ونصائح لسوق العمل بالعربية والإنجليزية." },
      { property: "og:title", content: "Code Forge" },
      { property: "og:description", content: "Code Forge: مسارات تعليمية، كورسات مجانية، مشاريع عملية، ونصائح لسوق العمل بالعربية والإنجليزية." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

// ============ i18n ============
type Lang = "ar" | "en";
const T = {
  ar: {
    dir: "rtl",
    nav: { home: "الرئيسية", roadmaps: "مسارات التعلم", langs: "لغات البرمجة", courses: "الكورسات", blog: "المقالات", projects: "المشاريع", faq: "الأسئلة الشائعة", contact: "تواصل معنا" },
    heroTitle1: "تعلم البرمجه من الصفر مع",
    heroTitle2: "Code Forge",
    heroSub: "تعلّم البرمجة من الصفر حتى الاحتراف مع شروحات مبسّطة، مسارات تعليمية، كورسات مجانية، مشاريع عملية، ونصائح لسوق العمل.",
    ctaStart: "ابدأ التعلم", ctaRoadmaps: "استكشف المسارات", ctaFb: "Join Facebook Page", ctaCourses: "Watch Courses",
    roadmapsTitle: "مسارات التعلم", roadmapsSub: "اختر مسارك وابدأ رحلتك خطوة بخطوة.",
    langsTitle: "لغات البرمجة", langsSub: "كل لغة مع نظرة سريعة على صعوبتها وفرص العمل.",
    coursesTitle: "أحدث الكورسات", coursesSub: "كورسات مختارة بعناية لتطوّر مهاراتك.",
    blogTitle: "المدونة", blogSub: "نصائح، خوارزميات، مقابلات عمل، وأخبار الذكاء الاصطناعي.",
    toolsTitle: "أدوات المبرمج", toolsSub: "الأدوات التي يستخدمها مهندسو البرمجيات حول العالم.",
    statsTitle: "أرقامنا تتحدث",
    terminalTitle: "تيرمينال تفاعلي", terminalSub: "جرّب الأوامر: help · courses · roadmaps · languages · about · clear",
    playgroundTitle: "محرر تجريبي مباشر", playgroundSub: "اكتب HTML/CSS/JS وشاهد النتيجة فورًا.",
    faqTitle: "الأسئلة الشائعة",
    contactTitle: "تواصل معنا", contactSub: "نحن هنا لمساعدتك في أي وقت.",
    runBtn: "تشغيل", resetBtn: "إعادة", watch: "شاهد الآن", level: "المستوى", duration: "المدة", popularity: "الشيوع", jobs: "فرص العمل", difficulty: "الصعوبة", learnTime: "وقت التعلم", usage: "الاستخدامات", flipHint: "مرّر للاطلاع على التفاصيل",
    newsletter: "اشترك في النشرة البريدية", email: "بريدك الإلكتروني", subscribe: "اشتراك",
    rights: "جميع الحقوق محفوظة",
    backTop: "للأعلى",
  },
  en: {
    dir: "ltr",
    nav: { home: "Home", roadmaps: "Roadmaps", langs: "Languages", courses: "Courses", blog: "Blog", projects: "Projects", faq: "FAQ", contact: "Contact" },
    heroTitle1: "Learn programming from scratch with",
    heroTitle2: "Code Forge",
    heroSub: "Master programming from zero to pro with clear guides, learning paths, free courses, real projects, and career advice.",
    ctaStart: "Start Learning", ctaRoadmaps: "Explore Roadmaps", ctaFb: "Join Facebook Page", ctaCourses: "Watch Courses",
    roadmapsTitle: "Learning Roadmaps", roadmapsSub: "Pick your path and start step by step.",
    langsTitle: "Programming Languages", langsSub: "Each language with a quick look at difficulty and jobs.",
    coursesTitle: "Latest Courses", coursesSub: "Hand-picked courses to grow your skills.",
    blogTitle: "Blog", blogSub: "Tips, algorithms, interviews, and AI news.",
    toolsTitle: "Developer Tools", toolsSub: "Tools used by software engineers worldwide.",
    statsTitle: "Numbers that speak",
    terminalTitle: "Interactive Terminal", terminalSub: "Try: help · courses · roadmaps · languages · about · clear",
    playgroundTitle: "Live Code Playground", playgroundSub: "Write HTML/CSS/JS and preview instantly.",
    faqTitle: "Frequently Asked Questions",
    contactTitle: "Contact Us", contactSub: "We're here to help anytime.",
    runBtn: "Run", resetBtn: "Reset", watch: "Watch", level: "Level", duration: "Duration", popularity: "Popularity", jobs: "Jobs", difficulty: "Difficulty", learnTime: "Learn time", usage: "Used for", flipHint: "Hover to see details",
    newsletter: "Subscribe to newsletter", email: "Your email", subscribe: "Subscribe",
    rights: "All rights reserved",
    backTop: "Top",
  },
};

// ============ Data ============
const ROADMAPS = [
  { en: "Frontend", ar: "الواجهات الأمامية", icon: "fa-code", color: "from-cyan-400 to-blue-500", pct: 85, url: "https://www.freecodecamp.org/learn/front-end-development-libraries-v9/" },
  { en: "Backend", ar: "الواجهات الخلفية", icon: "fa-server", color: "from-emerald-400 to-teal-500", pct: 78, url: "https://www.freecodecamp.org/learn/back-end-development-and-apis-v9/" },
  { en: "Full Stack", ar: "Full Stack", icon: "fa-layer-group", color: "from-violet-400 to-fuchsia-500", pct: 92, url: "https://www.freecodecamp.org/learn/full-stack-developer-v9/" },
  { en: "Python", ar: "Python", icon: "fa-python", color: "from-yellow-300 to-blue-500", pct: 95, brand: "fab", url: "https://www.freecodecamp.org/learn/python-v9/" },
  { en: "Java", ar: "Java", icon: "fa-java", color: "from-orange-400 to-red-500", pct: 80, brand: "fab", url: "https://www.freecodecamp.org/news/the-java-handbook/" },
  { en: "C++", ar: "C++", icon: "fa-code", color: "from-blue-400 to-indigo-600", pct: 70, url: "https://elzero.org/study/cplusplus-study-plan/" },
  { en: "C#", ar: "C#", icon: "fa-hashtag", color: "from-violet-500 to-purple-700", pct: 72, url: "https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/" },
  { en: "JavaScript", ar: "JavaScript", icon: "fa-js", color: "from-yellow-300 to-amber-500", pct: 96, brand: "fab", url: "https://www.freecodecamp.org/learn/javascript-v9/" },
  { en: "React", ar: "React", icon: "fa-react", color: "from-cyan-300 to-blue-500", pct: 90, brand: "fab", url: "https://www.freecodecamp.org/news/react-for-beginners-handbook/" },
  { en: "Node.js", ar: "Node.js", icon: "fa-node-js", color: "from-emerald-400 to-green-600", pct: 88, brand: "fab", url: "https://www.freecodecamp.org/news/get-started-with-nodejs/" },
  { en: "Flutter", ar: "Flutter", icon: "fa-mobile-screen", color: "from-sky-400 to-blue-600", pct: 76, url: "https://bamboogeeks.dev/courses/flutter-academy_ar/8736" },
  { en: "AI", ar: "الذكاء الاصطناعي", icon: "fa-brain", color: "from-fuchsia-400 to-violet-600", pct: 91, url: "https://www.freecodecamp.org/learn/learn-rag-mcp-fundamentals" },
  { en: "Machine Learning", ar: "تعلم الآلة", icon: "fa-robot", color: "from-pink-400 to-rose-500", pct: 84, url: "https://www.freecodecamp.org/learn/introduction-to-algorithms-and-data-structures" },
  { en: "Cyber Security", ar: "الأمن السيبراني", icon: "fa-shield-halved", color: "from-red-400 to-orange-500", pct: 82, url: "https://tryhackme.com/" },
  { en: "Data Science", ar: "علم البيانات", icon: "fa-chart-line", color: "from-teal-400 to-cyan-500", pct: 87, url: "https://www.freecodecamp.org/learn/relational-databases-v9/" },
  { en: "Mechatronics", ar: "ميكاترونكس", icon: "fa-gears", color: "from-amber-400 to-orange-600", pct: 65, url: "https://www.coursera.org/" },
  { en: "Embedded Systems", ar: "الأنظمة المدمجة", icon: "fa-microchip", color: "from-lime-400 to-green-600", pct: 68, url: "https://www.edx.org/learn/embedded-systems" },
  { en: "Arduino", ar: "Arduino", icon: "fa-bolt", color: "from-cyan-400 to-teal-500", pct: 60, url: "https://docs.arduino.cc/" },
  { en: "ESP32", ar: "ESP32", icon: "fa-wifi", color: "from-blue-400 to-indigo-500", pct: 62, url: "https://www.espressif.com/en/support/documents/technical-documents" },
  { en: "IoT", ar: "إنترنت الأشياء", icon: "fa-network-wired", color: "from-emerald-400 to-cyan-500", pct: 74, url: "https://randomnerdtutorials.com/" },
];

const LANGUAGES = [
  { name: "Python", icon: "fa-python", brand: "fab", color: "#3776AB", desc: { ar: "لغة عامة، رائدة في AI وعلم البيانات.", en: "General-purpose, leader in AI & data." }, use: { ar: "الذكاء الاصطناعي، تحليل البيانات، أتمتة، خوادم ويب.", en: "AI, data analysis, automation, web backends." }, difficulty: 2, time: "3-6m", jobs: 95, pop: 98 },
  { name: "JavaScript", icon: "fa-js", brand: "fab", color: "#F7DF1E", desc: { ar: "لغة الويب الأولى للمتصفح والخادم.", en: "The language of the web." }, use: { ar: "مواقع تفاعلية، تطبيقات ويب، Node.js للخوادم.", en: "Interactive sites, web apps, Node.js backends." }, difficulty: 2, time: "3-6m", jobs: 97, pop: 99 },
  { name: "TypeScript", icon: "fa-code", brand: "fas", color: "#3178C6", desc: { ar: "JavaScript بأنواع قوية.", en: "JavaScript with strong typing." }, use: { ar: "تطبيقات كبيرة، فرق عمل، React/Next.js آمن.", en: "Large apps, teams, safe React/Next.js." }, difficulty: 3, time: "1-2m", jobs: 90, pop: 93 },
  { name: "Java", icon: "fa-java", brand: "fab", color: "#E76F00", desc: { ar: "لغة المؤسسات وأندرويد.", en: "Enterprise & Android." }, use: { ar: "أنظمة البنوك، خوادم Spring، تطبيقات أندرويد.", en: "Banking systems, Spring servers, Android apps." }, difficulty: 3, time: "6-9m", jobs: 90, pop: 88 },
  { name: "C", icon: "fa-c", brand: "fas", color: "#A8B9CC", desc: { ar: "أساس البرمجة منخفضة المستوى.", en: "Foundation of low-level programming." }, use: { ar: "أنظمة تشغيل، أنظمة مدمجة، تعريفات hardware.", en: "OS kernels, embedded systems, drivers." }, difficulty: 4, time: "6-9m", jobs: 70, pop: 80 },
  { name: "C++", icon: "fa-code", brand: "fas", color: "#00599C", desc: { ar: "أداء عالٍ للألعاب والأنظمة.", en: "High-performance systems & games." }, use: { ar: "محركات ألعاب، تداول عالي التردد، تطبيقات ثقيلة.", en: "Game engines, HFT, heavy apps." }, difficulty: 5, time: "9-12m", jobs: 75, pop: 82 },
  { name: "C#", icon: "fa-hashtag", brand: "fas", color: "#9B4F96", desc: { ar: "ألعاب Unity وتطبيقات .NET.", en: "Unity games & .NET apps." }, use: { ar: "ألعاب Unity، تطبيقات ويندوز، ASP.NET.", en: "Unity games, Windows apps, ASP.NET." }, difficulty: 3, time: "4-6m", jobs: 78, pop: 80 },
  { name: "PHP", icon: "fa-php", brand: "fab", color: "#777BB4", desc: { ar: "خادم الويب الكلاسيكي.", en: "Classic server-side web." }, use: { ar: "WordPress، Laravel، مواقع e-commerce.", en: "WordPress, Laravel, e-commerce sites." }, difficulty: 2, time: "3-5m", jobs: 70, pop: 70 },
  { name: "Go", icon: "fa-golang", brand: "fab", color: "#00ADD8", desc: { ar: "بساطة وسرعة للخوادم.", en: "Simple & fast servers." }, use: { ar: "الميكروسيرفس، أدوات DevOps، Docker/K8s.", en: "Microservices, DevOps tools, Docker/K8s." }, difficulty: 3, time: "3-5m", jobs: 80, pop: 78 },
  { name: "Rust", icon: "fa-rust", brand: "fab", color: "#DEA584", desc: { ar: "أمان الذاكرة والأداء.", en: "Memory safety & speed." }, use: { ar: "أنظمة، محركات متصفح، WebAssembly، Blockchain.", en: "Systems, browser engines, WASM, blockchain." }, difficulty: 5, time: "9-12m", jobs: 72, pop: 84 },
  { name: "Swift", icon: "fa-swift", brand: "fab", color: "#FA7343", desc: { ar: "تطبيقات iOS الحديثة.", en: "Modern iOS apps." }, use: { ar: "تطبيقات iPhone و iPad و macOS.", en: "iPhone, iPad, macOS apps." }, difficulty: 3, time: "5-7m", jobs: 75, pop: 76 },
  { name: "Kotlin", icon: "fa-android", brand: "fab", color: "#7F52FF", desc: { ar: "أندرويد الحديث.", en: "Modern Android." }, use: { ar: "تطبيقات أندرويد، Server-side مع Ktor.", en: "Android apps, server-side with Ktor." }, difficulty: 3, time: "4-6m", jobs: 78, pop: 78 },
  { name: "Dart", icon: "fa-mobile-screen", brand: "fas", color: "#0175C2", desc: { ar: "لغة Flutter للموبايل.", en: "Flutter mobile language." }, use: { ar: "تطبيقات Flutter لكل المنصات.", en: "Cross-platform Flutter apps." }, difficulty: 2, time: "3-5m", jobs: 70, pop: 74 },
  { name: "SQL", icon: "fa-database", brand: "fas", color: "#00758F", desc: { ar: "لغة قواعد البيانات.", en: "Database language." }, use: { ar: "استعلام البيانات، تحليلات، أي تطبيق يحتاج تخزين.", en: "Querying data, analytics, any storage need." }, difficulty: 2, time: "1-2m", jobs: 92, pop: 95 },
  { name: "HTML", icon: "fa-html5", brand: "fab", color: "#E34F26", desc: { ar: "هيكل صفحات الويب.", en: "Web page structure." }, use: { ar: "بنية أي صفحة ويب على الإطلاق.", en: "The structure of every web page." }, difficulty: 1, time: "2-4w", jobs: 85, pop: 99 },
  { name: "CSS", icon: "fa-css3-alt", brand: "fab", color: "#1572B6", desc: { ar: "تصميم وتنسيق الويب.", en: "Web styling." }, use: { ar: "تنسيق، ألوان، تخطيطات responsive، وأنيميشن.", en: "Styling, colors, responsive layouts, animations." }, difficulty: 2, time: "1-3m", jobs: 85, pop: 99 },
];

const COURSES = [
  { title: { ar: "أساسيات الويب الحديث", en: "Modern Web Fundamentals" }, cat: "Frontend", level: "Beginner", dur: "12h", grad: "from-cyan-500/30 to-blue-600/30", icon: "fa-globe", bg: webFundamentalsBg.url, url: "https://youtube.com/playlist?list=PL7VOgFQ42C7e-lWJiV4QeqRg3GqCOgoab" },
  { title: { ar: "React من الصفر للاحتراف", en: "React from Zero to Hero" }, cat: "Frontend", level: "Intermediate", dur: "18h", grad: "from-cyan-400/30 to-violet-600/30", icon: "fa-react", brand: "fab", bg: reactCourseBg.url, url: "https://youtube.com/playlist?list=PL8q8h6vqfkSVeuw14BwrtJRIg3tAwq0ds" },
  { title: { ar: "Node.js و REST APIs", en: "Node.js & REST APIs" }, cat: "Backend", level: "Intermediate", dur: "14h", grad: "from-emerald-400/30 to-teal-600/30", icon: "fa-node-js", brand: "fab", bg: nodejsCourseBg.url, url: "https://youtu.be/pLl1aQv07D0" },
  { title: { ar: "Next.js المتقدم", en: "Advanced Next.js" }, cat: "Frontend", level: "Advanced", dur: "16h", grad: "from-slate-400/30 to-zinc-700/30", icon: "fa-n", bg: nextjsCourseBg.url, url: "https://youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2" },
  { title: { ar: "Python للذكاء الاصطناعي", en: "Python for AI" }, cat: "AI", level: "Advanced", dur: "22h", grad: "from-yellow-400/30 to-blue-500/30", icon: "fa-brain", bg: pythonCourseBg.url, url: "https://youtube.com/playlist?list=PLXlHqMRg9lAbzySbK_1P6ZNAqI0ckBzqO" },
  { title: { ar: "هياكل البيانات والخوارزميات", en: "Data Structures & Algorithms" }, cat: "CS", level: "Intermediate", dur: "20h", grad: "from-violet-400/30 to-fuchsia-600/30", icon: "fa-diagram-project", bg: dsaCourseBg.url, url: "https://youtube.com/playlist?list=PLL2zWZTDFZzjxarUL23ydiOgibhRipGYC" },
  { title: { ar: "الأمن السيبراني", en: "Cybersecurity" }, cat: "Security", level: "Beginner", dur: "10h", grad: "from-red-400/30 to-orange-500/30", icon: "fa-shield-halved", bg: cybersecCourseBg.url, url: "https://youtube.com/playlist?list=PLMuAdKgHarVrcZCqzJFdNlTiKz66U19Xk" },
];

const TOOLS = [
  { name: "VS Code", icon: "fa-code", color: "#007ACC", url: "https://code.visualstudio.com/" },
  { name: "Git", icon: "fa-git-alt", brand: "fab", color: "#F05032", url: "https://git-scm.com/" },
  { name: "Docker", icon: "fa-docker", brand: "fab", color: "#2496ED", url: "https://www.docker.com/" },
  { name: "Linux", icon: "fa-linux", brand: "fab", color: "#FCC624", url: "https://www.linux.org/" },
  { name: "Postman", icon: "fa-paper-plane", color: "#FF6C37", url: "https://www.postman.com/" },
  { name: "Figma", icon: "fa-figma", brand: "fab", color: "#A259FF", url: "https://www.figma.com/" },
  { name: "Android Studio", icon: "fa-android", brand: "fab", color: "#3DDC84", url: "https://developer.android.com/studio" },
  { name: "PyCharm", icon: "fa-python", brand: "fab", color: "#21D789", url: "https://www.jetbrains.com/pycharm/" },
  { name: "IntelliJ", icon: "fa-cube", color: "#FE2857", url: "https://www.jetbrains.com/idea/" },
  { name: "Cursor", icon: "fa-i-cursor", color: "#00F5FF", url: "https://cursor.com/" },
];


const BLOG = [
  {
    title: { ar: "10 نصائح عملية لتحسين كودك", en: "10 Practical Tips to Improve Your Code" },
    cat: "Tips", icon: "fa-lightbulb",
    body: {
      ar: "الكود الجيد ليس مجرد كود يعمل، بل كود يفهمه أي مطور بعد ستة أشهر. ابدأ باختيار أسماء متغيرات تشرح النية بدل التعليقات: اسم مثل activeUsersCount أفضل من x مع تعليق طويل. قسّم الدوال الطويلة إلى دوال صغيرة تفعل شيئًا واحدًا فقط؛ لو احتجت لكلمة 'و' في وصف الدالة فهي تفعل أكثر من اللازم. تجنّب التكرار عبر استخراج المشترك في دالة أو ملف مساعد. اهتم بمعالجة الأخطاء بدل ابتلاعها في try/catch فارغ. اكتب اختبارات لأي منطق حساس قبل النشر. استخدم Git commits قصيرة ووصفية بدل commit ضخم كل يومين. قِس الأداء قبل التحسين المسبق، فمعظم بطء التطبيقات يأتي من مكان لا تتوقعه. تعلّم اختصارات محررك يوميًا فهي توفّر ساعات أسبوعيًا. وأخيرًا اقرأ كودًا أفضل من كودك: مشاريع مفتوحة المصدر هي أفضل معلّم.",
      en: "Good code isn't code that works — it's code any developer will understand six months later. Start with variable names that show intent instead of comments: activeUsersCount beats x + a paragraph of docs. Split long functions into small ones that do one thing; if you need 'and' to describe a function, it does too much. Kill duplication early. Handle errors — never swallow them in empty try/catch. Write tests for anything critical before shipping. Keep git commits small and descriptive instead of one massive daily dump. Measure before you optimize; slowness usually hides where you least expect. Learn editor shortcuts daily — they save hours weekly. Finally, read code better than yours: open source is the best mentor.",
    },
  },
  {
    title: { ar: "كيف تستعد لمقابلات العمل التقنية", en: "How to Prepare for Technical Interviews" },
    cat: "Career", icon: "fa-briefcase",
    body: {
      ar: "المقابلة التقنية عبارة عن ثلاث معارك: الخوارزميات، تصميم النظام، والسلوكيات. للخوارزميات، حل مسألة أو مسألتين يوميًا على LeetCode مع التركيز على الأنماط بدل الحفظ: النافذة المنزلقة، المؤشرين، BFS/DFS، البرمجة الديناميكية، وHash Maps. لتصميم النظام، افهم أساسيات الـScalability والـCaching وقواعد البيانات وRate Limiting، وارسم دائمًا قبل الكلام. للسلوكيات، جهّز 5 قصص من حياتك بصيغة STAR (الموقف، المهمة، الإجراء، النتيجة). لا تُهمل مشروعًا واحدًا تعرفه من الداخل لتشرحه بثقة. تدرّب على شرح تفكيرك بصوت عالٍ حتى وأنت وحيد. راجع أساسيات HTTP، وGit، وSQL. حضّر ثلاث أسئلة ذكية للمُقابِل عن الفريق والتقنيات والتحديات — هذا يُظهر أنك مهتم فعلًا.",
      en: "A tech interview is three battles: algorithms, system design, and behavioral. For algorithms, solve 1–2 LeetCode problems daily focusing on patterns not memorization: sliding window, two pointers, BFS/DFS, DP, hash maps. For system design, learn the basics of scalability, caching, databases, and rate limiting — always draw before speaking. For behavioral, prep 5 STAR stories (Situation, Task, Action, Result). Own one project so deeply you can explain every choice. Practice thinking out loud even alone. Review HTTP, Git, and SQL. Bring three sharp questions about the team, stack, and challenges — it shows real interest.",
    },
  },
  {
    title: { ar: "خوارزميات الفرز الأساسية ومتى تستخدم كلًا منها", en: "Essential Sorting Algorithms & When to Use Each" },
    cat: "Algorithms", icon: "fa-diagram-project",
    body: {
      ar: "الفرز هو المدخل الأمثل لفهم تحليل التعقيد. Bubble Sort و Insertion Sort سهلا الفهم بأداء O(n²) — استخدمهما فقط لبيانات صغيرة جدًا أو شبه مرتّبة. Merge Sort يقسم البيانات ويدمجها بأداء O(n log n) مضمون، مع استقرار ممتاز لكنه يحتاج ذاكرة إضافية O(n). Quick Sort في المتوسط أسرع من Merge لكنه حساس لاختيار الـpivot؛ استخدم pivot عشوائي لتجنّب أسوأ حالة O(n²). Heap Sort يعطي O(n log n) دائمًا بدون ذاكرة إضافية وهو ممتاز للأنظمة محدودة الذاكرة. Radix Sort يعمل بلا مقارنات ويصلح للأعداد الصحيحة بأداء O(n·k). المكتبات الحديثة (JS's sort, Python's sorted) تستخدم Timsort — هجين ذكي بين Merge و Insertion يستفيد من الترتيب الجزئي في البيانات الحقيقية.",
      en: "Sorting is the perfect gateway to complexity analysis. Bubble & Insertion are O(n²) — use only for tiny or nearly-sorted data. Merge Sort splits and merges at guaranteed O(n log n), stable but needs O(n) extra memory. Quick Sort is faster on average but pivot-sensitive; use a random pivot to avoid O(n²) worst case. Heap Sort gives guaranteed O(n log n) with no extra memory — great for memory-limited systems. Radix Sort is comparison-free at O(n·k) for integers. Modern libraries (JS's sort, Python's sorted) use Timsort — a smart Merge/Insertion hybrid that exploits partial ordering in real data.",
    },
  },
  {
    title: { ar: "الذكاء الاصطناعي عام 2026: ما الذي تغيّر فعلًا", en: "AI in 2026: What Actually Changed" },
    cat: "AI", icon: "fa-brain",
    body: {
      ar: "بعد سنوات من الضجيج، استقر مشهد الذكاء الاصطناعي على ثلاث ثورات حقيقية للمطوّرين. أولًا: الوكلاء (Agents) الذين ينفّذون مهام متعددة الخطوات بدل مجرد الإجابة — تخيّل وكيلًا يفتح تذكرة، يقرأ الكود، ويقترح حلًا. ثانيًا: RAG أصبح المعيار الصناعي لدمج بياناتك الخاصة مع النماذج بدون تدريب من الصفر. ثالثًا: أدوات الكود مثل Cursor و Windsurf غيّرت طريقة الكتابة لدرجة أن السرعة تضاعفت لدى فرق كثيرة. لكن الأهم هو ما لم يتغيّر: النماذج ما زالت تُخطئ في المنطق الدقيق، وتحتاج تحقّقًا بشريًا. النصيحة العملية: استخدم الأدوات في مشاريعك الحقيقية اليوم بدل الاكتفاء بمشاهدة الفيديوهات — الفارق بين مطور 2026 والمطور التقليدي هو مَن يعرف كيف يتعاون مع الآلة.",
      en: "After years of hype, AI settled into three real revolutions for developers. First: agents that execute multi-step tasks instead of just answering — imagine one that opens a ticket, reads code, proposes a fix. Second: RAG became the industry standard to fuse your own data with models without training from scratch. Third: code tools like Cursor and Windsurf changed how we write so much that many teams doubled their velocity. What didn't change matters most: models still miss subtle logic and need human review. Practical advice: use these tools in real projects today instead of just watching videos — the gap between a 2026 dev and a traditional one is who knows how to collaborate with the machine.",
    },
  },
];

const FAQ_ITEMS = [
  { q: { ar: "هل الكورسات مجانية؟", en: "Are courses free?" }, a: { ar: "نعم، معظم محتوى Code Forge مجاني بالكامل.", en: "Yes, most Code Forge content is fully free." } },
  { q: { ar: "من أين أبدأ كمبتدئ؟", en: "Where to start as a beginner?" }, a: { ar: "ابدأ بمسار الواجهات الأمامية (HTML, CSS, JS) ثم اختر تخصصك.", en: "Start with Frontend (HTML, CSS, JS), then pick a specialization." } },
  { q: { ar: "هل تقدمون شهادات؟", en: "Do you provide certificates?" }, a: { ar: "نوفّر شهادات إتمام رمزية لبعض المسارات.", en: "We provide symbolic completion certificates for some tracks." } },
  { q: { ar: "كم وقت أحتاج لتعلم البرمجة؟", en: "How long to learn coding?" }, a: { ar: "من 6 إلى 12 شهرًا للوصول لمستوى احترافي بالعمل المنتظم.", en: "6–12 months of consistent work to reach a professional level." } },
];

// ============ Background ============
function MatrixBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);
    const chars = "01アイウエオカキクケコ<>/={}();[]→λπΣ∞";
    const fontSize = 14 * dpr;
    let cols = Math.floor(canvas.width / fontSize);
    let drops = new Array(cols).fill(0).map(() => Math.random() * -50);
    const onResize = () => { cols = Math.floor(canvas.width / fontSize); drops = new Array(cols).fill(0).map(() => Math.random() * -50); };
    window.addEventListener("resize", onResize);
    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 60) return;
      last = t;
      ctx.fillStyle = "rgba(11,17,32,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;
      for (let i = 0; i < cols; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const hue = (i * 7) % 360;
        ctx.fillStyle = i % 9 === 0 ? `hsla(${180 + (hue % 80)}, 100%, 70%, 0.9)` : "rgba(0,245,255,0.35)";
        ctx.fillText(text, x, y);
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("resize", onResize); };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(60% 40% at 50% 0%, rgba(0,245,255,0.12), transparent 70%), radial-gradient(50% 40% at 80% 80%, rgba(139,92,246,0.14), transparent 70%), linear-gradient(180deg,#0b1120,#0f172a 60%,#0b1120)" }} />
      <canvas ref={ref} className="absolute inset-0 opacity-40" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(0,245,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <FloatingSnippets />
    </div>
  );
}

const SNIPPETS = [
  "const dev = 'Code Forge';",
  "function build() { return 'future'; }",
  "<div class='hero'>👨‍💻</div>",
  "SELECT * FROM developers;",
  "git commit -m 'ship it 🚀'",
  "print('Hello, World!')",
  "import torch as t",
  "npm run dev",
  "export default App;",
  "if (passion) keepLearning();",
];
function FloatingSnippets() {
  const items = useMemo(() => Array.from({ length: 14 }, (_, i) => ({
    text: SNIPPETS[i % SNIPPETS.length],
    left: Math.random() * 100,
    dur: 18 + Math.random() * 22,
    delay: -Math.random() * 30,
    size: 11 + Math.random() * 4,
  })), []);
  return (
    <div className="absolute inset-0">
      {items.map((it, i) => (
        <div key={i} className="absolute font-mono whitespace-nowrap text-cyan-300/30"
          style={{ left: `${it.left}%`, fontSize: `${it.size}px`, top: "-10%", animation: `drift ${it.dur}s linear ${it.delay}s infinite` }}>
          {it.text}
        </div>
      ))}
    </div>
  );
}

// ============ Components ============
function MosLogo({ size = 36, showText = false }: { size?: number; showText?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2" aria-label="Moslim Ebrahim">
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" role="img">
        <defs>
          <linearGradient id="me-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#00f5ff" />
            <stop offset="0.55" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#00ffa3" />
          </linearGradient>
        </defs>
        <rect x="2.5" y="2.5" width="43" height="43" rx="12" fill="#0b1120" stroke="url(#me-grad)" strokeWidth="1.5" />
        <path d="M14 30 L8 24 L14 18" stroke="url(#me-grad)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M34 18 L40 24 L34 30" stroke="url(#me-grad)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M28 14 L20 34" stroke="url(#me-grad)" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
      {showText && (
        <span className="font-extrabold tracking-tight text-white leading-none">
          Moslim<span className="text-gradient"> Ebrahim</span>
        </span>
      )}
    </span>
  );
}

function CodeForgeLogo({ size = 40, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Code Forge">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" className="drop-shadow-[0_0_18px_rgba(0,245,255,0.35)]">
        <defs>
          <linearGradient id="cf-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#00f5ff" />
            <stop offset="0.55" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#00ffa3" />
          </linearGradient>
          <linearGradient id="cf-spark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#00ffa3" />
            <stop offset="1" stopColor="#00f5ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* diamond frame */}
        <path d="M32 4 L60 32 L32 60 L4 32 Z" fill="#0b1120" stroke="url(#cf-grad)" strokeWidth="2.2" strokeLinejoin="round" />
        {/* left bracket */}
        <path d="M22 26 L14 32 L22 38" stroke="url(#cf-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* right bracket */}
        <path d="M42 26 L50 32 L42 38" stroke="url(#cf-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* anvil base */}
        <path d="M24 44 L40 44 L38 48 L26 48 Z" fill="url(#cf-grad)" opacity="0.85" />
        <rect x="30" y="48" width="4" height="4" fill="url(#cf-grad)" opacity="0.85" />
        {/* hammer head */}
        <rect x="30" y="14" width="14" height="6" rx="1.5" fill="url(#cf-grad)" transform="rotate(-25 37 17)" />
        {/* forward slash spark */}
        <path d="M36 22 L28 36" stroke="url(#cf-spark)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {showText && (
        <span className="font-extrabold tracking-tight text-white leading-none text-lg sm:text-xl">
          Code<span className="text-gradient"> Forge</span>
        </span>
      )}
    </span>
  );
}


function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setW((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-transparent"><div className="h-full" style={{ width: `${w}%`, background: "linear-gradient(90deg,#00f5ff,#00ffa3,#8b5cf6)" }} /></div>;
}

function Navbar({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: typeof T.ar }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { id: "home", label: t.nav.home },
    { id: "roadmaps", label: t.nav.roadmaps },
    { id: "languages", label: t.nav.langs },
    { id: "courses", label: t.nav.courses },
    { id: "blog", label: t.nav.blog },
    { id: "projects", label: t.nav.projects },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`glass-strong rounded-2xl px-4 sm:px-5 py-3 flex items-center gap-3 ${scrolled ? "shadow-[0_10px_40px_-15px_rgba(0,245,255,0.35)]" : ""}`}>
          <a href="#home" className="flex items-center gap-2 shrink-0 group">
            <CodeForgeLogo size={38} />
          </a>
          <ul className="hidden lg:flex items-center gap-1 mx-auto">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="relative px-3 py-2 text-sm text-white/80 hover:text-white transition group">
                  {l.label}
                  <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-center transition-transform" style={{ background: "linear-gradient(90deg,#00f5ff,#8b5cf6)" }} />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 ms-auto lg:ms-0">
            <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/10 hover:ring-cyan-400/50 transition" aria-label="Switch language">
              <i className="fa-solid fa-language" /> {lang === "ar" ? "EN" : "AR"}
            </button>
            <a href="#courses" className="hidden md:inline-flex btn-magnetic items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-[#0b1120]" style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }}>
              <i className="fa-solid fa-rocket" /> {t.ctaStart}
            </a>
            <button onClick={() => setOpen(v => !v)} className="lg:hidden grid place-items-center h-10 w-10 rounded-xl ring-1 ring-white/10" aria-label="Menu">
              <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 grid grid-cols-2 gap-1">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-sm text-white/85 hover:bg-white/5">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function HeroLaptop({ lang }: { lang: Lang }) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const code = useMemo(() => [
    "// portfolio.js — Moslim Ebrahim",
    "const me = {",
    "  name: 'Moslim Ebrahim',",
    "  stack: ['React','Node','Next.js'],",
    "  focus: 'Web & Software',",
    "};",
    "",
    "buildProjects(me); // 🚀",
  ].join("\n"), []);
  useEffect(() => {
    let i = 0;
    setTyped("");
    setDone(false);
    const id = setInterval(() => {
      i++;
      setTyped(code.slice(0, i));
      if (i >= code.length) { clearInterval(id); setTimeout(() => setDone(true), 400); }
    }, 28);
    return () => clearInterval(id);
  }, [code]);
  return (
    <div className="relative mx-auto w-full max-w-2xl" dir="ltr">
      <div className="relative rounded-[22px] p-3 glass-strong shadow-[0_40px_120px_-30px_rgba(0,245,255,0.35)] animate-float">
        <div className="flex items-center gap-1.5 px-2 pb-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ms-3 text-[11px] text-white/60 font-mono">~/moslim/portfolio.js</span>
        </div>
        <div className="rounded-xl bg-[#070b16]/90 ring-1 ring-cyan-400/20 p-4 font-mono text-[12.5px] leading-6 min-h-[230px] overflow-hidden">
          <pre className="whitespace-pre-wrap"><span className="text-cyan-300">{typed}</span><span className="inline-block w-2 h-4 align-[-2px] bg-cyan-300 animate-blink" /></pre>
          {done && (
            <div className="mt-3 space-y-1 text-[12px]">
              <div className="text-white/60">$ npm run build</div>
              <div className="text-fuchsia-300">▸ compiling modules...</div>
              <div className="text-cyan-300">▸ optimizing bundles...</div>
              <div className="text-emerald-300 font-bold">✔ Build Successful — ready in 1.42s</div>
            </div>
          )}
        </div>
      </div>
      {/* floating chips */}
      <div className="absolute -top-6 -left-6 glass rounded-2xl px-3 py-2 text-xs font-mono text-cyan-300 hidden sm:flex items-center gap-2 animate-float" style={{ animationDelay: "-1s" }}>
        <i className="fa-brands fa-react text-cyan-300" /> React
      </div>
      <div className="absolute -bottom-5 -right-4 glass rounded-2xl px-3 py-2 text-xs font-mono text-emerald-300 hidden sm:flex items-center gap-2 animate-float" style={{ animationDelay: "-2.5s" }}>
        <i className="fa-brands fa-node-js text-emerald-300" /> Node.js
      </div>
      <div className="absolute top-1/2 -right-8 glass rounded-2xl px-3 py-2 text-xs font-mono text-fuchsia-300 hidden md:flex items-center gap-2 animate-float" style={{ animationDelay: "-4s" }}>
        <i className="fa-solid fa-brain text-fuchsia-300" /> AI
      </div>
      <div aria-hidden className="text-white/40 text-[10px] mt-2 text-center font-mono">{lang === "ar" ? "بيئة كتابتي اليومية" : "My daily coding setup"}</div>
    </div>
  );
}

function Hero({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  return (
    <section id="home" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 items-center gap-10 lg:gap-12 relative">
        <div className="space-y-5 sm:space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold glass ring-1 ring-cyan-400/30 text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {lang === "ar" ? "مطوّر ومصمم مواقع — Moslim Ebrahim" : "Developer & web designer — Moslim Ebrahim"}
          </span>
          <h1 className="font-extrabold leading-[1.15] text-[2rem] sm:text-5xl lg:text-6xl tracking-tight">
            <span className="text-white">{t.heroTitle1} </span>
            <span className="text-gradient animate-gradient">{t.heroTitle2}</span>
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">{t.heroSub}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#roadmaps" className="btn-magnetic inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-[#0b1120] animate-pulse-glow" style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }}>
              <i className="fa-solid fa-play" /> {t.ctaStart}
            </a>
            <a href="#roadmaps" className="btn-magnetic inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white ring-1 ring-white/15 hover:ring-cyan-400/50 glass">
              <i className="fa-solid fa-route" /> {t.ctaRoadmaps}
            </a>
            <a href="https://www.facebook.com/share/1Fb8A9FZSV/" target="_top" rel="noopener" className="btn-magnetic inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white ring-1 ring-blue-400/40 glass">
              <i className="fa-brands fa-facebook text-blue-400" /> {t.ctaFb}
            </a>
            <a href="#courses" className="btn-magnetic inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white ring-1 ring-violet-400/40 glass">
              <i className="fa-solid fa-circle-play text-violet-300" /> {t.ctaCourses}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-white/60">
            <span className="flex items-center gap-2"><i className="fa-solid fa-shield-halved text-emerald-300" /> {lang === "ar" ? "محتوى موثوق" : "Trusted content"}</span>
            <span className="flex items-center gap-2"><i className="fa-solid fa-bolt text-cyan-300" /> {lang === "ar" ? "تحديث مستمر" : "Always fresh"}</span>
            <span className="flex items-center gap-2"><i className="fa-solid fa-users text-violet-300" /> {lang === "ar" ? "مجتمع نشط" : "Active community"}</span>
          </div>
        </div>
        <HeroLaptop lang={lang} />
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {kicker && <div className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-cyan-300 font-mono">// {kicker}</div>}
      <h2 className="text-3xl sm:text-4xl font-extrabold"><span className="text-white">{title.split(" ").slice(0,-1).join(" ")} </span><span className="text-gradient">{title.split(" ").slice(-1)}</span></h2>
      {sub && <p className="mt-3 text-white/65">{sub}</p>}
    </div>
  );
}

function RoadmapsSection({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  return (
    <section id="roadmaps" className="py-16 sm:py-20 relative">
      <div className="absolute inset-x-0 top-0 h-40 -z-0 pointer-events-none" style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(0,245,255,0.10), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-4 relative">
        <SectionTitle kicker="roadmaps" title={t.roadmapsTitle} sub={t.roadmapsSub} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {ROADMAPS.map((r, idx) => (
            <article
              key={r.en}
              className="card-hover glass rounded-2xl p-5 sm:p-6 relative overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-60" style={{ background: `linear-gradient(135deg,#00f5ff,#8b5cf6)` }} />
              <div className="relative flex items-start justify-between gap-3">
                <div className={`h-12 w-12 shrink-0 rounded-2xl grid place-items-center bg-gradient-to-br ${r.color} text-[#0b1120] shadow-lg`}>
                  <i className={`${r.brand === "fab" ? "fa-brands" : "fa-solid"} ${r.icon} text-xl`} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300/80 ring-1 ring-cyan-400/20 rounded-full px-2 py-0.5">
                  {r.pct}%
                </span>
              </div>
              <h3 className="mt-4 font-extrabold text-white text-xl tracking-tight leading-tight">
                {lang === "ar" ? r.ar : r.en}
              </h3>
              <p className="text-white/60 text-[13px] mt-1.5 leading-relaxed">
                {lang === "ar" ? "خطة تعلّم متكاملة من الأساسيات وحتى المشاريع الحقيقية." : "A full learning plan from fundamentals to real-world projects."}
              </p>
              <div className="mt-5">
                <div className="flex justify-between text-[11px] text-white/55 mb-1.5 font-medium">
                  <span>{lang === "ar" ? "شيوع المسار في السوق" : "Market demand"}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-700 group-hover:brightness-125" style={{ width: `${r.pct}%`, background: "linear-gradient(90deg,#00f5ff,#8b5cf6,#00ffa3)" }} />
                </div>
              </div>
              <a href={r.url} target="_top" rel="noopener" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-white transition group/link">
                {lang === "ar" ? "ابدأ المسار" : "Start path"}
                <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right transition-transform group-hover/link:-translate-x-1 ltr:group-hover/link:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguagesSection({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  const [flipped, setFlipped] = useState<string | null>(null);
  const diffLabel = (d: number) =>
    lang === "ar"
      ? ["", "سهلة جدًا", "سهلة", "متوسطة", "صعبة", "صعبة جدًا"][d]
      : ["", "Very Easy", "Easy", "Medium", "Hard", "Very Hard"][d];
  return (
    <section id="languages" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="languages" title={t.langsTitle} sub={t.langsSub} />
        <p className="text-center text-xs text-white/50 -mt-6 mb-6 font-mono">
          <i className="fa-solid fa-arrows-rotate me-1" /> {t.flipHint}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {LANGUAGES.map((L) => {
            const isFlipped = flipped === L.name;
            return (
              <div
                key={L.name}
                className={`flip-card h-[240px] ${isFlipped ? "is-flipped" : ""}`}
                onClick={() => setFlipped(isFlipped ? null : L.name)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped(isFlipped ? null : L.name); } }}
                aria-label={L.name}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <article className="flip-face glass p-5 flex flex-col justify-between relative overflow-hidden" style={{ boxShadow: `inset 0 0 40px -20px ${L.color}` }}>
                    <div
                      className="absolute inset-0 -z-10"
                      style={{
                        backgroundImage: `url(${LANG_BG[L.name] ?? ""})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.28,
                      }}
                      aria-hidden
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1120]/40 via-[#0b1120]/55 to-[#0b1120]/85" aria-hidden />
                    <div className="flex items-center gap-3">
                      <div className="h-14 w-14 grid place-items-center rounded-xl ring-1 ring-white/10 bg-[#0b1120]/70 backdrop-blur-sm" style={{ boxShadow: `0 0 30px -10px ${L.color}` }}>
                        <i className={`${L.brand} ${L.icon} text-2xl`} style={{ color: L.color }} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-white text-lg leading-tight drop-shadow">{L.name}</h3>
                        <p className="text-[11px] text-white/60 font-mono mt-0.5"><i className="fa-regular fa-clock me-1" />{L.time}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/85 leading-relaxed drop-shadow">{L.desc[lang]}</p>
                    <div className="flex items-center justify-between text-[11px] text-white/60 font-mono">
                      <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ background: L.color }} /> {L.name}</span>
                      <span className="inline-flex items-center gap-1 text-cyan-300"><i className="fa-solid fa-arrows-rotate" /> {lang === "ar" ? "اقلب" : "flip"}</span>
                    </div>
                  </article>
                  {/* Back */}
                  <article className="flip-face flip-back glass-strong p-5 flex flex-col justify-between" style={{ boxShadow: `inset 0 0 60px -20px ${L.color}, 0 0 40px -20px ${L.color}` }}>
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-white text-base flex items-center gap-2">
                        <i className={`${L.brand} ${L.icon} text-lg`} style={{ color: L.color }} />
                        {L.name}
                      </h4>
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ring-1" style={{ color: L.color, borderColor: `${L.color}66` }}>
                        {diffLabel(L.difficulty)}
                      </span>
                    </div>
                    <dl className="space-y-2 text-[11px]">
                      <Bar label={t.difficulty} value={L.difficulty * 20} color="#00f5ff" />
                      <Bar label={t.jobs} value={L.jobs} color="#00ffa3" />
                    </dl>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45 font-mono mb-1">{t.usage}</p>
                      <p className="text-xs text-white/80 leading-relaxed">{L.use[lang]}</p>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Bar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-white/60 mb-1"><span>{label}</span><span>{value}%</span></div>
      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}, #ffffff33)` }} />
      </div>
    </div>
  );
}

function CoursesThreeBG() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 1000);
    camera.position.z = 40;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Particle field
    const count = 900;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const c1 = new THREE.Color(0x00f5ff);
    const c2 = new THREE.Color(0xa855f7);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      const mix = Math.random();
      const col = c1.clone().lerp(c2, mix);
      colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({ size: 0.35, vertexColors: true, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Floating torus knots
    const knots: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const g = new THREE.TorusKnotGeometry(3 + i, 0.35, 120, 16);
      const m = new THREE.MeshBasicMaterial({ color: i === 0 ? 0x00f5ff : i === 1 ? 0xa855f7 : 0x00ffa3, wireframe: true, transparent: true, opacity: 0.25 });
      const k = new THREE.Mesh(g, m);
      k.position.set((i - 1) * 22, (i % 2 === 0 ? 1 : -1) * 8, -10);
      scene.add(k);
      knots.push(k);
    }

    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const dt = clock.getDelta();
      const t = clock.getElapsedTime();
      points.rotation.y += dt * 0.05;
      points.rotation.x += dt * 0.02;
      knots.forEach((k, i) => {
        k.rotation.x = t * (0.3 + i * 0.1);
        k.rotation.y = t * (0.2 + i * 0.15);
        k.position.y += Math.sin(t + i) * 0.005;
      });
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      geo.dispose(); mat.dispose();
      knots.forEach(k => { k.geometry.dispose(); (k.material as THREE.Material).dispose(); });
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={ref} aria-hidden className="absolute inset-0 -z-0 pointer-events-none opacity-70" />;
}

function CoursesSection({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const onCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (0.5 - y) * 12;
    const ry = (x - 0.5) * 14;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onCardLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };
  return (
    <section id="courses" className="relative py-20 overflow-hidden">
      <CoursesThreeBG />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <SectionTitle kicker="courses" title={t.coursesTitle} sub={t.coursesSub} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
          {COURSES.map((c, i) => (
            <article
              key={i}
              onMouseMove={onCardMove}
              onMouseLeave={onCardLeave}
              className="course-card group relative glass rounded-2xl overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${i * 80}ms`,
                transform: "perspective(1200px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
                transformStyle: "preserve-3d",
                transition: "transform 200ms ease-out, box-shadow 300ms ease",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(0,245,255,0.18), transparent 45%)" }}
              />
              <div className={`relative h-44 bg-gradient-to-br ${c.grad} grid place-items-center overflow-hidden`}>
                {c.bg ? (
                  <img
                    src={c.bg}
                    alt={c.title[lang]}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                ) : (
                  <i className={`${c.brand === "fab" ? "fa-brands" : "fa-solid"} ${c.icon} text-6xl text-white/85 drop-shadow-[0_4px_20px_rgba(0,245,255,0.4)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)" }} />
                <span className="absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase bg-black/50 backdrop-blur-md text-cyan-200 ring-1 ring-cyan-400/40">{c.cat}</span>
                <button onClick={() => setLiked(s => ({ ...s, [i]: !s[i] }))} aria-label="Bookmark" className="absolute top-3 right-3 z-10 grid place-items-center h-9 w-9 rounded-xl bg-black/50 backdrop-blur-md ring-1 ring-white/10 hover:scale-110 hover:ring-cyan-400/50 transition">
                  <i className={`fa-${liked[i] ? "solid" : "regular"} fa-bookmark ${liked[i] ? "text-cyan-300" : "text-white/80"}`} />
                </button>
              </div>
              <div className="relative p-5" style={{ transform: "translateZ(30px)" }}>
                <h3 className="font-bold text-white text-lg">{c.title[lang]}</h3>
                <p className="text-white/60 text-sm mt-1">{lang === "ar" ? "كورس عملي بمشاريع حقيقية." : "Hands-on course with real projects."}</p>
                <div className="flex items-center gap-3 mt-3 text-[11px] text-white/55 font-mono">
                  <span><i className="fa-solid fa-signal me-1 text-cyan-300" /> {c.level}</span>
                  <span><i className="fa-solid fa-clock me-1 text-violet-300" /> {c.dur}</span>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <a href={c.url} target="_top" rel="noopener" className="flex-1 btn-magnetic inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-[#0b1120] transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }}>
                    <i className="fa-solid fa-play" /> {t.watch}
                  </a>
                  <button aria-label="Like" className="grid place-items-center h-10 w-10 rounded-xl ring-1 ring-white/10 hover:ring-rose-400/40 hover:scale-110 transition cursor-pointer">
                    <i className="fa-regular fa-heart text-rose-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="blog" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="blog" title={t.blogTitle} sub={t.blogSub} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BLOG.map((b, i) => {
            const isOpen = open === i;
            return (
              <article key={i} className={`card-hover glass rounded-2xl p-5 flex flex-col ${isOpen ? "sm:col-span-2 lg:col-span-4" : ""}`}>
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-400/30 to-violet-500/30 ring-1 ring-white/10">
                  <i className={`fa-solid ${b.icon} text-cyan-300`} />
                </div>
                <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest text-violet-300 font-mono">{b.cat}</span>
                <h3 className="mt-1 font-bold text-white leading-snug text-base">{b.title[lang]}</h3>
                {isOpen && (
                  <p className="mt-3 text-sm text-white/75 leading-relaxed whitespace-pre-line">{b.body[lang]}</p>
                )}
                <button onClick={() => setOpen(isOpen ? null : i)} className="mt-3 self-start inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-white transition">
                  {isOpen ? (lang === "ar" ? "إغلاق" : "Close") : (lang === "ar" ? "اقرأ المزيد" : "Read more")}
                  <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ToolsSection({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="tools" title={t.toolsTitle} sub={t.toolsSub} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {TOOLS.map((tool) => (
            <article key={tool.name} className="card-hover glass rounded-2xl p-4 flex items-center gap-3 group">
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-[#0b1120] ring-1 ring-white/10 shrink-0" style={{ boxShadow: `0 0 24px -10px ${tool.color}` }}>
                <i className={`${tool.brand || "fa-solid"} ${tool.icon} text-lg`} style={{ color: tool.color }} />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-white text-sm truncate">{tool.name}</h3>
                <a href={tool.url} target="_top" rel="noopener" className="text-[11px] text-white/55 hover:text-cyan-300 transition">{lang === "ar" ? "زيارة الأداة" : "Visit tool"} <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver((ents) => {
      if (ents[0].isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const step = (n: number) => {
          const p = Math.min(1, (n - start) / dur);
          setV(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function StatsSection({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  const stats = [
    { n: 100, label: lang === "ar" ? "درس" : "Lessons", icon: "fa-graduation-cap" },
    { n: 1000, label: lang === "ar" ? "متعلم" : "Students", icon: "fa-users" },
    { n: 50, label: lang === "ar" ? "مسار" : "Roadmaps", icon: "fa-route" },
    { n: 500, label: lang === "ar" ? "مقال" : "Articles", icon: "fa-newspaper" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 -z-0 opacity-30" style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(0,245,255,0.3), transparent 70%)" }} />
          <h2 className="sr-only">{t.statsTitle}</h2>
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-2xl grid place-items-center bg-gradient-to-br from-cyan-400/30 to-violet-500/30 ring-1 ring-cyan-400/30 mb-3">
                  <i className={`fa-solid ${s.icon} text-cyan-300`} />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-gradient"><Counter to={s.n} /></div>
                <div className="text-sm text-white/65 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Terminal({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  const [history, setHistory] = useState<{ cmd: string; out: string[] }[]>([
    { cmd: "", out: [lang === "ar" ? "مرحبًا بك في تيرمينال Code Forge. اكتب help للبدء." : "Welcome to Code Forge terminal. Type 'help' to begin."] },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [history]);
  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    let out: string[] = [];
    switch (cmd) {
      case "help": out = ["Available: help, courses, roadmaps, languages, contact, about, clear"]; break;
      case "courses": out = ["▸ Modern Web Fundamentals", "▸ React from Zero to Hero", "▸ Node.js & REST APIs", "▸ Python for AI"]; break;
      case "roadmaps": out = ["▸ Frontend  ▸ Backend  ▸ Full Stack  ▸ AI  ▸ Cybersecurity  ▸ IoT"]; break;
      case "languages": out = ["▸ Python  ▸ JavaScript  ▸ TypeScript  ▸ Java  ▸ C/C++  ▸ Go  ▸ Rust  ▸ Swift  ▸ Kotlin"]; break;
      case "contact": out = ["facebook.com/CodeForge", "email: hello@codeforge.dev"]; break;
      case "about": out = ["Code Forge — Arabic-first coding academy.", "Built with passion for the next generation of devs."]; break;
      case "clear": setHistory([]); return;
      case "": out = []; break;
      default: out = [`command not found: ${raw}. type 'help'`];
    }
    setHistory(h => [...h, { cmd: raw, out }]);
  };
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle kicker="terminal" title={t.terminalTitle} sub={t.terminalSub} />
        <div className="glass-strong rounded-2xl overflow-hidden ring-1 ring-cyan-400/20 shadow-[0_30px_80px_-30px_rgba(0,245,255,0.4)]" dir="ltr">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ms-3 text-[11px] text-white/50 font-mono">guest@software-engineer:~$</span>
          </div>
          <div className="bg-[#06090f]/80 p-5 font-mono text-sm min-h-[280px] max-h-[420px] overflow-auto">
            {history.map((h, i) => (
              <div key={i} className="mb-2">
                {h.cmd && <div className="text-white/90"><span className="text-emerald-400">➜</span> <span className="text-cyan-300">~</span> {h.cmd}</div>}
                {h.out.map((line, j) => <div key={j} className="text-white/75">{line}</div>)}
              </div>
            ))}
            <form onSubmit={(e) => { e.preventDefault(); run(input); setInput(""); }} className="flex items-center gap-2 mt-1">
              <span className="text-emerald-400">➜</span><span className="text-cyan-300">~</span>
              <input autoFocus value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 bg-transparent outline-none text-white placeholder:text-white/30" placeholder="type command..." aria-label="terminal input" />
            </form>
            <div ref={endRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Playground({ t }: { t: typeof T.ar }) {
  const [html, setHtml] = useState('<h1 style="font-family:system-ui">Hello, Engineer 👨‍💻</h1>\n<p>Build the future.</p>');
  const [css, setCss] = useState("body{background:#0b1120;color:#fff;padding:24px;font-family:sans-serif}h1{color:#00f5ff}");
  const [js, setJs] = useState("document.body.innerHTML += '<p style=\"color:#00ffa3\">JS is running ✓</p>'");
  const [srcDoc, setSrcDoc] = useState("");
  const run = () => setSrcDoc(`<style>${css}</style>${html}<script>${js}<\/script>`);
  useEffect(() => { run(); /* eslint-disable-next-line */ }, []);
  const reset = () => {
    setHtml('<h1 style="font-family:system-ui">Hello, Engineer 👨‍💻</h1>\n<p>Build the future.</p>');
    setCss("body{background:#0b1120;color:#fff;padding:24px;font-family:sans-serif}h1{color:#00f5ff}");
    setJs("document.body.innerHTML += '<p style=\"color:#00ffa3\">JS is running ✓</p>'");
  };
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="playground" title={t.playgroundTitle} sub={t.playgroundSub} />
        <div className="grid lg:grid-cols-2 gap-4" dir="ltr">
          <div className="space-y-3">
            {[
              { label: "HTML", v: html, set: setHtml, color: "#E34F26" },
              { label: "CSS", v: css, set: setCss, color: "#1572B6" },
              { label: "JS", v: js, set: setJs, color: "#F7DF1E" },
            ].map((e) => (
              <div key={e.label} className="glass rounded-2xl overflow-hidden">
                <div className="px-4 py-2 text-xs font-mono border-b border-white/5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: e.color }} /> {e.label}
                </div>
                <textarea value={e.v} onChange={(ev) => e.set(ev.target.value)} spellCheck={false} className="w-full bg-[#06090f]/70 text-cyan-200 font-mono text-xs p-4 outline-none resize-none" rows={e.label === "HTML" ? 5 : 4} />
              </div>
            ))}
            <div className="flex gap-2">
              <button onClick={run} className="btn-magnetic flex-1 rounded-xl px-4 py-3 font-bold text-[#0b1120]" style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }}>
                <i className="fa-solid fa-play me-2" /> {t.runBtn}
              </button>
              <button onClick={reset} className="rounded-xl px-4 py-3 font-bold text-white ring-1 ring-white/10 hover:ring-white/30">
                <i className="fa-solid fa-rotate-left me-2" /> {t.resetBtn}
              </button>
            </div>
          </div>
          <div className="glass rounded-2xl overflow-hidden min-h-[400px]">
            <div className="px-4 py-2 text-xs font-mono border-b border-white/5 text-white/60">Live Preview</div>
            <iframe title="preview" srcDoc={srcDoc} sandbox="allow-scripts" className="w-full h-[420px] bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle kicker="faq" title={t.faqTitle} sub={lang === "ar" ? "إجابات على أكثر الأسئلة شيوعًا." : "Answers to common questions."} />
        <div className="space-y-3">
          {FAQ_ITEMS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-start" aria-expanded={isOpen}>
                  <span className="font-bold text-white">{f.q[lang]}</span>
                  <i className={`fa-solid fa-chevron-down text-cyan-300 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-white/70 leading-relaxed">{f.a[lang]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  const [sent, setSent] = useState(false);
  const socials = [
    { n: "Facebook", icon: "fa-facebook", c: "#1877F2", url: "https://www.facebook.com/share/1Fb8A9FZSV/" },
    { n: "WhatsApp", icon: "fa-whatsapp", c: "#25D366", url: "https://wa.me/201017098353" },
    { n: "Phone", icon: "fa-phone", c: "#00F5FF", solid: true, url: "tel:+201017098353" },
    { n: "Email", icon: "fa-envelope", c: "#00F5FF", solid: true, url: "mailto:hello@moslimebrahim.dev" },
  ];
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="contact" title={t.contactTitle} sub={t.contactSub} />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-strong rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">{lang === "ar" ? "تابعنا على المنصات" : "Find us online"}</h3>
            <p className="text-white/65 text-sm">{lang === "ar" ? "تواصل مع مجتمع Code Forge عبر منصاتنا." : "Connect with the Code Forge community."}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {socials.map(s => (
                <a key={s.n} href={s.url} target="_top" rel="noopener" className="card-hover glass rounded-xl p-4 flex flex-col items-center gap-2 text-center">
                  <i className={`${s.solid ? "fa-solid" : "fa-brands"} ${s.icon} text-2xl`} style={{ color: s.c }} />
                  <span className="text-xs font-bold text-white">{s.n}</span>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }} className="glass-strong rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">{lang === "ar" ? "أرسل لنا رسالة" : "Send us a message"}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label={lang === "ar" ? "الاسم" : "Name"} type="text" />
              <Field label={lang === "ar" ? "البريد" : "Email"} type="email" />
            </div>
            <Field label={lang === "ar" ? "الموضوع" : "Subject"} type="text" />
            <div>
              <label className="text-xs text-white/60">{lang === "ar" ? "الرسالة" : "Message"}</label>
              <textarea rows={4} className="mt-1 w-full bg-white/[0.04] ring-1 ring-white/10 focus:ring-cyan-400/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition" />
            </div>
            <button className="btn-magnetic w-full rounded-xl px-4 py-3 font-bold text-[#0b1120]" style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }}>
              <i className="fa-solid fa-paper-plane me-2" /> {lang === "ar" ? "إرسال" : "Send"}
            </button>
            {sent && <div className="text-emerald-300 text-sm text-center" role="status"><i className="fa-solid fa-check-circle" /> {lang === "ar" ? "تم الإرسال بنجاح!" : "Sent successfully!"}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-xs text-white/60">{label}</label>
      <input type={type} className="mt-1 w-full bg-white/[0.04] ring-1 ring-white/10 focus:ring-cyan-400/50 rounded-xl px-4 py-2.5 text-sm text-white outline-none transition" />
    </div>
  );
}

function Footer({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  return (
    <footer className="pt-16 pb-8 border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <CodeForgeLogo size={40} />
          </div>
          <p className="mt-3 text-white/60 text-sm max-w-md">{lang === "ar" ? "Code Forge — منصة عربية لتعلّم البرمجة وهندسة البرمجيات بأسلوب عصري." : "Code Forge — an Arabic-first platform for coding & software engineering."}</p>
          <form className="mt-5 flex gap-2 max-w-md">
            <input type="email" placeholder={t.email} className="flex-1 bg-white/[0.04] ring-1 ring-white/10 focus:ring-cyan-400/50 rounded-xl px-4 py-2.5 text-sm text-white outline-none" />
            <button className="rounded-xl px-4 py-2.5 font-bold text-[#0b1120] text-sm" style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }}>{t.subscribe}</button>
          </form>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3">{lang === "ar" ? "روابط سريعة" : "Quick Links"}</h4>
          <ul className="space-y-2 text-sm text-white/65">
            {["home","roadmaps","languages","courses","faq"].map(k => (
              <li key={k}><a href={`#${k}`} className="hover:text-cyan-300 transition">{(t.nav as any)[k === "languages" ? "langs" : k] || k}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3">{lang === "ar" ? "تابعنا" : "Social"}</h4>
          <div className="flex flex-wrap gap-2">
            {[{ i: "fa-facebook", c: "#1877F2", u: "https://www.facebook.com/share/1Fb8A9FZSV/", brand: true },{ i: "fa-whatsapp", c: "#25D366", u: "https://wa.me/201017098353", brand: true },{ i: "fa-envelope", c: "#00F5FF", u: "mailto:hello@moslimebrahim.dev", brand: false },{ i: "fa-phone", c: "#00ffa3", u: "tel:+201017098353", brand: false }].map((s, idx) => (
              <a key={idx} href={s.u} target="_top" rel="noopener" aria-label={s.i} className="grid place-items-center h-10 w-10 rounded-xl glass hover:scale-110 transition">
                <i className={`${s.brand ? "fa-brands" : "fa-solid"} ${s.i}`} style={{ color: s.c }} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10">
        <div className="glass-strong rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5 text-center md:text-start">
          <div className="relative shrink-0">
            <div className="h-20 w-20 rounded-2xl grid place-items-center bg-[#0b1120] ring-2 ring-cyan-400/40"><MosLogo size={56} /></div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <h3 className="text-lg font-extrabold text-white">{lang === "ar" ? "عن المطوّر — Moslim Ebrahim" : "About the Developer — Moslim Ebrahim"}</h3>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 ring-1 ring-cyan-400/30 rounded-full px-2 py-0.5">{lang === "ar" ? "مصمم ومطوّر" : "Designer & Developer"}</span>
            </div>
            <p className="mt-2 text-sm text-white/70 max-w-2xl">{lang === "ar" ? "أنا مسلم إبراهيم، أتعلم مجال البرمجة ولديّ خبرة في تصميم المواقع وتطويرها، وأمتلك العديد من المشاريع والتطبيقات." : "I'm Moslim Ebrahim, a self-taught developer with experience in web design and development, and a portfolio of projects and applications."}</p>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+201017098353" className="btn-magnetic inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-[#0b1120]" style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }}>
              <i className="fa-solid fa-phone" /> 01017098353
            </a>
            <a href="https://wa.me/201017098353" target="_top" rel="noopener" aria-label="WhatsApp" className="grid place-items-center h-11 w-11 rounded-xl glass hover:scale-110 transition">
              <i className="fa-brands fa-whatsapp text-emerald-300 text-lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/50">
        <p>© {new Date().getFullYear()} Code Forge — {t.rights}.</p>
        <p className="font-mono">{lang === "ar" ? "تصميم وتطوير " : "Designed & developed by "}<a href="tel:+201017098353" className="text-cyan-300 hover:text-white transition">Moslim Ebrahim</a></p>
      </div>
    </footer>
  );
}

function BackToTop({ t }: { t: typeof T.ar }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 end-6 z-40 grid place-items-center h-12 w-12 rounded-full text-[#0b1120] font-bold shadow-[0_10px_30px_-5px_rgba(0,245,255,0.6)] transition ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }} aria-label={t.backTop}>
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}

// ============ Main ============
function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const t = T[lang];
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} lang={lang} />
        <RoadmapsSection t={t} lang={lang} />
        <LanguagesSection t={t} lang={lang} />
        <CoursesSection t={t} lang={lang} />
        <Terminal t={t} lang={lang} />
        <Playground t={t} />
        <BlogSection t={t} lang={lang} />
        <ToolsSection t={t} lang={lang} />
        <FAQ t={t} lang={lang} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} lang={lang} />
      <BackToTop t={t} />
    </div>
  );
}
