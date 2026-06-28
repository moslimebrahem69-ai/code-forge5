import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useMemo } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Software Engineer — تعلم البرمجة واحترف هندسة البرمجيات" },
      { name: "description", content: "أكاديمية Software Engineer: مسارات تعليمية، كورسات مجانية، مشاريع عملية، ونصائح لسوق العمل بالعربية والإنجليزية." },
      { property: "og:title", content: "Software Engineer — تعلم البرمجة" },
      { property: "og:description", content: "أكاديمية برمجة عربية حديثة: مسارات، كورسات، مشاريع، ومجتمع." },
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
    heroTitle1: "تعلّم البرمجة وابدأ مستقبلك في عالم",
    heroTitle2: "Software Engineering",
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
    runBtn: "تشغيل", resetBtn: "إعادة", watch: "شاهد الآن", level: "المستوى", duration: "المدة", popularity: "الشيوع", jobs: "فرص العمل", difficulty: "الصعوبة", learnTime: "وقت التعلم",
    newsletter: "اشترك في النشرة البريدية", email: "بريدك الإلكتروني", subscribe: "اشتراك",
    rights: "جميع الحقوق محفوظة",
    backTop: "للأعلى",
  },
  en: {
    dir: "ltr",
    nav: { home: "Home", roadmaps: "Roadmaps", langs: "Languages", courses: "Courses", blog: "Blog", projects: "Projects", faq: "FAQ", contact: "Contact" },
    heroTitle1: "Learn to code and shape your future in",
    heroTitle2: "Software Engineering",
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
    runBtn: "Run", resetBtn: "Reset", watch: "Watch", level: "Level", duration: "Duration", popularity: "Popularity", jobs: "Jobs", difficulty: "Difficulty", learnTime: "Learn time",
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
  { name: "Python", icon: "fa-python", brand: "fab", color: "#3776AB", desc: { ar: "لغة عامة، رائدة في AI وعلم البيانات.", en: "General-purpose, leader in AI & data." }, difficulty: 2, time: "3-6m", jobs: 95, pop: 98 },
  { name: "JavaScript", icon: "fa-js", brand: "fab", color: "#F7DF1E", desc: { ar: "لغة الويب الأولى للمتصفح والخادم.", en: "The language of the web." }, difficulty: 2, time: "3-6m", jobs: 97, pop: 99 },
  { name: "TypeScript", icon: "fa-code", brand: "fas", color: "#3178C6", desc: { ar: "JavaScript بأنواع قوية.", en: "JavaScript with strong typing." }, difficulty: 3, time: "1-2m", jobs: 90, pop: 93 },
  { name: "Java", icon: "fa-java", brand: "fab", color: "#E76F00", desc: { ar: "لغة المؤسسات وأندرويد.", en: "Enterprise & Android." }, difficulty: 3, time: "6-9m", jobs: 90, pop: 88 },
  { name: "C", icon: "fa-c", brand: "fas", color: "#A8B9CC", desc: { ar: "أساس البرمجة منخفضة المستوى.", en: "Foundation of low-level programming." }, difficulty: 4, time: "6-9m", jobs: 70, pop: 80 },
  { name: "C++", icon: "fa-code", brand: "fas", color: "#00599C", desc: { ar: "أداء عالٍ للألعاب والأنظمة.", en: "High-performance systems & games." }, difficulty: 5, time: "9-12m", jobs: 75, pop: 82 },
  { name: "C#", icon: "fa-hashtag", brand: "fas", color: "#9B4F96", desc: { ar: "ألعاب Unity وتطبيقات .NET.", en: "Unity games & .NET apps." }, difficulty: 3, time: "4-6m", jobs: 78, pop: 80 },
  { name: "PHP", icon: "fa-php", brand: "fab", color: "#777BB4", desc: { ar: "خادم الويب الكلاسيكي.", en: "Classic server-side web." }, difficulty: 2, time: "3-5m", jobs: 70, pop: 70 },
  { name: "Go", icon: "fa-golang", brand: "fab", color: "#00ADD8", desc: { ar: "بساطة وسرعة للخوادم.", en: "Simple & fast servers." }, difficulty: 3, time: "3-5m", jobs: 80, pop: 78 },
  { name: "Rust", icon: "fa-rust", brand: "fab", color: "#DEA584", desc: { ar: "أمان الذاكرة والأداء.", en: "Memory safety & speed." }, difficulty: 5, time: "9-12m", jobs: 72, pop: 84 },
  { name: "Swift", icon: "fa-swift", brand: "fab", color: "#FA7343", desc: { ar: "تطبيقات iOS الحديثة.", en: "Modern iOS apps." }, difficulty: 3, time: "5-7m", jobs: 75, pop: 76 },
  { name: "Kotlin", icon: "fa-android", brand: "fab", color: "#7F52FF", desc: { ar: "أندرويد الحديث.", en: "Modern Android." }, difficulty: 3, time: "4-6m", jobs: 78, pop: 78 },
  { name: "Dart", icon: "fa-mobile-screen", brand: "fas", color: "#0175C2", desc: { ar: "لغة Flutter للموبايل.", en: "Flutter mobile language." }, difficulty: 2, time: "3-5m", jobs: 70, pop: 74 },
  { name: "SQL", icon: "fa-database", brand: "fas", color: "#00758F", desc: { ar: "لغة قواعد البيانات.", en: "Database language." }, difficulty: 2, time: "1-2m", jobs: 92, pop: 95 },
  { name: "HTML", icon: "fa-html5", brand: "fab", color: "#E34F26", desc: { ar: "هيكل صفحات الويب.", en: "Web page structure." }, difficulty: 1, time: "2-4w", jobs: 85, pop: 99 },
  { name: "CSS", icon: "fa-css3-alt", brand: "fab", color: "#1572B6", desc: { ar: "تصميم وتنسيق الويب.", en: "Web styling." }, difficulty: 2, time: "1-3m", jobs: 85, pop: 99 },
];

const COURSES = [
  { title: { ar: "أساسيات الويب الحديث", en: "Modern Web Fundamentals" }, cat: "Frontend", level: "Beginner", dur: "12h", grad: "from-cyan-500/30 to-blue-600/30", icon: "fa-globe", url: "https://youtube.com/playlist?list=PL7VOgFQ42C7e-lWJiV4QeqRg3GqCOgoab" },
  { title: { ar: "React من الصفر للاحتراف", en: "React from Zero to Hero" }, cat: "Frontend", level: "Intermediate", dur: "18h", grad: "from-cyan-400/30 to-violet-600/30", icon: "fa-react", brand: "fab", url: "https://youtube.com/playlist?list=PL8q8h6vqfkSVeuw14BwrtJRIg3tAwq0ds" },
  { title: { ar: "Node.js و REST APIs", en: "Node.js & REST APIs" }, cat: "Backend", level: "Intermediate", dur: "14h", grad: "from-emerald-400/30 to-teal-600/30", icon: "fa-node-js", brand: "fab", url: "https://youtu.be/pLl1aQv07D0" },
  { title: { ar: "Next.js المتقدم", en: "Advanced Next.js" }, cat: "Frontend", level: "Advanced", dur: "16h", grad: "from-slate-400/30 to-zinc-700/30", icon: "fa-n", url: "https://youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2" },
  { title: { ar: "Python للذكاء الاصطناعي", en: "Python for AI" }, cat: "AI", level: "Advanced", dur: "22h", grad: "from-yellow-400/30 to-blue-500/30", icon: "fa-brain", url: "https://youtube.com/playlist?list=PLXlHqMRg9lAbzySbK_1P6ZNAqI0ckBzqO" },
  { title: { ar: "هياكل البيانات والخوارزميات", en: "Data Structures & Algorithms" }, cat: "CS", level: "Intermediate", dur: "20h", grad: "from-violet-400/30 to-fuchsia-600/30", icon: "fa-diagram-project", url: "https://youtube.com/playlist?list=PLL2zWZTDFZzjxarUL23ydiOgibhRipGYC" },
  { title: { ar: "الأمن السيبراني", en: "Cybersecurity" }, cat: "Security", level: "Beginner", dur: "10h", grad: "from-red-400/30 to-orange-500/30", icon: "fa-shield-halved", url: "https://youtube.com/playlist?list=PLMuAdKgHarVrcZCqzJFdNlTiKz66U19Xk" },
];

const TOOLS = [
  { name: "VS Code", icon: "fa-code", color: "#007ACC" },
  { name: "Git", icon: "fa-git-alt", brand: "fab", color: "#F05032" },
  { name: "GitHub", icon: "fa-github", brand: "fab", color: "#fff" },
  { name: "Docker", icon: "fa-docker", brand: "fab", color: "#2496ED" },
  { name: "Linux", icon: "fa-linux", brand: "fab", color: "#FCC624" },
  { name: "Postman", icon: "fa-paper-plane", color: "#FF6C37" },
  { name: "Figma", icon: "fa-figma", brand: "fab", color: "#A259FF" },
  { name: "Android Studio", icon: "fa-android", brand: "fab", color: "#3DDC84" },
  { name: "PyCharm", icon: "fa-python", brand: "fab", color: "#21D789" },
  { name: "IntelliJ", icon: "fa-cube", color: "#FE2857" },
  { name: "Cursor AI", icon: "fa-i-cursor", color: "#00F5FF" },
  { name: "Claude", icon: "fa-comment-dots", color: "#D97757" },
  { name: "ChatGPT", icon: "fa-comments", color: "#10A37F" },
  { name: "Gemini", icon: "fa-gem", color: "#8B5CF6" },
];

const BLOG = [
  { title: { ar: "10 نصائح لتحسين كودك", en: "10 Tips to Improve Your Code" }, cat: "Tips", icon: "fa-lightbulb" },
  { title: { ar: "كيف تستعد لمقابلات العمل", en: "How to Prep for Interviews" }, cat: "Career", icon: "fa-briefcase" },
  { title: { ar: "خوارزميات الفرز الأساسية", en: "Essential Sorting Algorithms" }, cat: "Algorithms", icon: "fa-diagram-project" },
  { title: { ar: "أحدث أخبار الذكاء الاصطناعي", en: "Latest AI News" }, cat: "AI", icon: "fa-brain" },
];

const FAQ_ITEMS = [
  { q: { ar: "هل الكورسات مجانية؟", en: "Are courses free?" }, a: { ar: "نعم، معظم محتوى Software Engineer مجاني بالكامل.", en: "Yes, most Software Engineer content is fully free." } },
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
  "const dev = 'Software Engineer';",
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
            <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-[#0b1120] ring-1 ring-cyan-400/40 overflow-hidden">
              <span className="absolute inset-0 animate-gradient" style={{ background: "linear-gradient(135deg,#00f5ff,#8b5cf6,#00ffa3)", opacity: .25 }} />
              <i className="fa-solid fa-code text-cyan-300" />
            </span>
            <span className="font-extrabold tracking-tight">
              <span className="text-gradient">Software</span> <span className="text-white">Engineer</span>
            </span>
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
    "// build your future",
    "function start() {",
    "  const skills = ['HTML','CSS','JS'];",
    "  skills.push('React','Node','AI');",
    "  return launchCareer(skills);",
    "}",
    "",
    "start(); // 🚀",
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
          <span className="ms-3 text-[11px] text-white/60 font-mono">~/software-engineer/start.js</span>
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
      <div aria-hidden className="text-white/40 text-[10px] mt-2 text-center font-mono">{lang === "ar" ? "بيئة عمل تفاعلية" : "Live coding atmosphere"}</div>
    </div>
  );
}

function Hero({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 items-center gap-12 relative">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold glass ring-1 ring-cyan-400/30 text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {lang === "ar" ? "أكاديمية برمجة عربية حديثة" : "Modern Arabic-first coding academy"}
          </span>
          <h1 className="font-extrabold leading-[1.15] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            <span className="text-white">{t.heroTitle1} </span>
            <span className="text-gradient animate-gradient">{t.heroTitle2}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">{t.heroSub}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#roadmaps" className="btn-magnetic inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-[#0b1120] animate-pulse-glow" style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }}>
              <i className="fa-solid fa-play" /> {t.ctaStart}
            </a>
            <a href="#roadmaps" className="btn-magnetic inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white ring-1 ring-white/15 hover:ring-cyan-400/50 glass">
              <i className="fa-solid fa-route" /> {t.ctaRoadmaps}
            </a>
            <a href="https://www.facebook.com/share/1Fb8A9FZSV/" target="_blank" rel="noreferrer" className="btn-magnetic inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white ring-1 ring-blue-400/40 glass">
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
    <section id="roadmaps" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="roadmaps" title={t.roadmapsTitle} sub={t.roadmapsSub} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ROADMAPS.map((r) => (
            <article key={r.en} className="card-hover glass rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-20 blur-2xl" style={{ background: `linear-gradient(135deg,#00f5ff,#8b5cf6)` }} />
              <div className={`h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-br ${r.color} text-[#0b1120]`}>
                <i className={`${r.brand === "fab" ? "fa-brands" : "fa-solid"} ${r.icon} text-lg`} />
              </div>
              <h3 className="mt-4 font-bold text-white text-lg">{lang === "ar" ? r.ar : r.en}</h3>
              <p className="text-white/55 text-sm mt-1">{lang === "ar" ? "مسار متكامل من الأساسيات للاحتراف." : "Complete path from basics to mastery."}</p>
              <div className="mt-4">
                <div className="flex justify-between text-[11px] text-white/55 mb-1.5">
                  <span>{lang === "ar" ? "شيوع المسار" : "Path demand"}</span><span>{r.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-700 group-hover:brightness-125" style={{ width: `${r.pct}%`, background: "linear-gradient(90deg,#00f5ff,#8b5cf6)" }} />
                </div>
              </div>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-white transition">
                {lang === "ar" ? "ابدأ المسار" : "Start path"} <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguagesSection({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  return (
    <section id="languages" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="languages" title={t.langsTitle} sub={t.langsSub} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {LANGUAGES.map((L) => (
            <article key={L.name} className="card-hover glass rounded-2xl p-5 group">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 grid place-items-center rounded-xl ring-1 ring-white/10 bg-[#0b1120]" style={{ boxShadow: `0 0 30px -10px ${L.color}` }}>
                  <i className={`${L.brand} ${L.icon} text-xl`} style={{ color: L.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-white">{L.name}</h3>
                  <p className="text-[11px] text-white/50 font-mono">{L.time}</p>
                </div>
              </div>
              <p className="text-sm text-white/65 mt-3 min-h-[40px]">{L.desc[lang]}</p>
              <dl className="mt-4 space-y-2 text-[11px]">
                <Bar label={t.difficulty} value={L.difficulty * 20} color="#00f5ff" />
                <Bar label={t.jobs} value={L.jobs} color="#00ffa3" />
                <Bar label={t.popularity} value={L.pop} color="#8b5cf6" />
              </dl>
            </article>
          ))}
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

function CoursesSection({ t, lang }: { t: typeof T.ar; lang: Lang }) {
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  return (
    <section id="courses" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="courses" title={t.coursesTitle} sub={t.coursesSub} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.map((c, i) => (
            <article key={i} className="card-hover glass rounded-2xl overflow-hidden group">
              <div className={`relative h-40 bg-gradient-to-br ${c.grad} grid place-items-center`}>
                <i className={`${c.brand === "fab" ? "fa-brands" : "fa-solid"} ${c.icon} text-6xl text-white/85 drop-shadow-[0_4px_20px_rgba(0,245,255,0.4)]`} />
                <span className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase bg-black/40 backdrop-blur-md text-cyan-200 ring-1 ring-cyan-400/30">{c.cat}</span>
                <button onClick={() => setLiked(s => ({ ...s, [i]: !s[i] }))} aria-label="Bookmark" className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-xl bg-black/40 backdrop-blur-md ring-1 ring-white/10 hover:scale-110 transition">
                  <i className={`fa-${liked[i] ? "solid" : "regular"} fa-bookmark ${liked[i] ? "text-cyan-300" : "text-white/80"}`} />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-lg">{c.title[lang]}</h3>
                <p className="text-white/60 text-sm mt-1">{lang === "ar" ? "كورس عملي بمشاريع حقيقية." : "Hands-on course with real projects."}</p>
                <div className="flex items-center gap-3 mt-3 text-[11px] text-white/55 font-mono">
                  <span><i className="fa-solid fa-signal me-1 text-cyan-300" /> {c.level}</span>
                  <span><i className="fa-solid fa-clock me-1 text-violet-300" /> {c.dur}</span>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="flex-1 btn-magnetic inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-[#0b1120]" style={{ background: "linear-gradient(135deg,#00f5ff,#00ffa3)" }}>
                    <i className="fa-solid fa-play" /> {t.watch}
                  </a>
                  <button aria-label="Like" className="grid place-items-center h-10 w-10 rounded-xl ring-1 ring-white/10 hover:ring-rose-400/40 transition cursor-pointer">
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
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="blog" title={t.blogTitle} sub={t.blogSub} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BLOG.map((b, i) => (
            <article key={i} className="card-hover glass rounded-2xl p-5">
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-400/30 to-violet-500/30 ring-1 ring-white/10">
                <i className={`fa-solid ${b.icon} text-cyan-300`} />
              </div>
              <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest text-violet-300 font-mono">{b.cat}</span>
              <h3 className="mt-1 font-bold text-white leading-snug">{b.title[lang]}</h3>
              <a href="#" className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-white transition">
                {lang === "ar" ? "اقرأ المزيد" : "Read more"} <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right" />
              </a>
            </article>
          ))}
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
                <a href="#" className="text-[11px] text-white/55 hover:text-cyan-300 transition">{lang === "ar" ? "زيارة الأداة" : "Visit tool"} <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" /></a>
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
    { cmd: "", out: [lang === "ar" ? "مرحبًا بك في تيرمينال Software Engineer. اكتب help للبدء." : "Welcome to Software Engineer terminal. Type 'help' to begin."] },
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
      case "contact": out = ["facebook.com/SoftwareEngineer", "email: hello@software-engineer.dev"]; break;
      case "about": out = ["Software Engineer — Arabic-first coding academy.", "Built with passion for the next generation of devs."]; break;
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
    { n: "GitHub", icon: "fa-github", c: "#fff", url: "#" },
    { n: "LinkedIn", icon: "fa-linkedin", c: "#0A66C2", url: "#" },
    { n: "Email", icon: "fa-envelope", c: "#00F5FF", solid: true, url: "mailto:hello@software-engineer.dev" },
  ];
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="contact" title={t.contactTitle} sub={t.contactSub} />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-strong rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">{lang === "ar" ? "تابعنا على المنصات" : "Find us online"}</h3>
            <p className="text-white/65 text-sm">{lang === "ar" ? "تواصل مع مجتمع Software Engineer عبر منصاتنا." : "Connect with the Software Engineer community."}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {socials.map(s => (
                <a key={s.n} href={s.url} target={s.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card-hover glass rounded-xl p-4 flex flex-col items-center gap-2 text-center">
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
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-[#0b1120] ring-1 ring-cyan-400/40"><i className="fa-solid fa-code text-cyan-300" /></span>
            <span className="font-extrabold text-lg"><span className="text-gradient">Software</span> <span className="text-white">Engineer</span></span>
          </div>
          <p className="mt-3 text-white/60 text-sm max-w-md">{lang === "ar" ? "أكاديمية عربية لتعلم البرمجة وهندسة البرمجيات بأسلوب عصري." : "An Arabic-first academy for coding & software engineering."}</p>
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
            {[{ i: "fa-facebook", c: "#1877F2", u: "https://www.facebook.com/share/1Fb8A9FZSV/" },{ i: "fa-github", c: "#fff", u: "#" },{ i: "fa-linkedin", c: "#0A66C2", u: "#" },{ i: "fa-whatsapp", c: "#25D366", u: "#" },{ i: "fa-youtube", c: "#FF0000", u: "#" }].map((s, idx) => (
              <a key={idx} href={s.u} target={s.u.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={s.i} className="grid place-items-center h-10 w-10 rounded-xl glass hover:scale-110 transition">
                <i className={`fa-brands ${s.i}`} style={{ color: s.c }} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10">
        <div className="glass-strong rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5 text-center md:text-start">
          <div className="relative shrink-0">
            <div className="h-20 w-20 rounded-2xl grid place-items-center text-3xl font-extrabold text-[#0b1120] ring-2 ring-cyan-400/40" style={{ background: "linear-gradient(135deg,#00f5ff,#a855f7)" }}>ME</div>
            <span className="absolute -bottom-1 -end-1 grid place-items-center h-7 w-7 rounded-full bg-[#0b1120] ring-1 ring-cyan-400/50"><i className="fa-solid fa-code text-cyan-300 text-xs" /></span>
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
            <a href="https://wa.me/201017098353" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid place-items-center h-11 w-11 rounded-xl glass hover:scale-110 transition">
              <i className="fa-brands fa-whatsapp text-emerald-300 text-lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/50">
        <p>© {new Date().getFullYear()} Software Engineer — {t.rights}.</p>
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
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} lang={lang} />
        <StatsSection t={t} lang={lang} />
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
