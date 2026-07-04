// Static content mirror for MCP tools. Keep in sync with src/routes/index.tsx.
// Pure data only — no imports, no I/O — so the MCP entry stays import-safe.

export const COURSES = [
  { title_ar: "أساسيات الويب الحديث", title_en: "Modern Web Fundamentals", category: "Frontend", level: "Beginner", duration: "12h", url: "https://youtube.com/playlist?list=PL7VOgFQ42C7e-lWJiV4QeqRg3GqCOgoab" },
  { title_ar: "React من الصفر للاحتراف", title_en: "React from Zero to Hero", category: "Frontend", level: "Intermediate", duration: "18h", url: "https://youtube.com/playlist?list=PL8q8h6vqfkSVeuw14BwrtJRIg3tAwq0ds" },
  { title_ar: "Node.js و REST APIs", title_en: "Node.js & REST APIs", category: "Backend", level: "Intermediate", duration: "14h", url: "https://youtu.be/pLl1aQv07D0" },
  { title_ar: "Next.js المتقدم", title_en: "Advanced Next.js", category: "Frontend", level: "Advanced", duration: "16h", url: "https://youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2" },
  { title_ar: "Python للذكاء الاصطناعي", title_en: "Python for AI", category: "AI", level: "Advanced", duration: "22h", url: "https://youtube.com/playlist?list=PLXlHqMRg9lAbzySbK_1P6ZNAqI0ckBzqO" },
  { title_ar: "هياكل البيانات والخوارزميات", title_en: "Data Structures & Algorithms", category: "CS", level: "Intermediate", duration: "20h", url: "https://youtube.com/playlist?list=PLL2zWZTDFZzjxarUL23ydiOgibhRipGYC" },
  { title_ar: "الأمن السيبراني", title_en: "Cybersecurity", category: "Security", level: "Beginner", duration: "10h", url: "https://youtube.com/playlist?list=PLMuAdKgHarVrcZCqzJFdNlTiKz66U19Xk" },
];

export const ROADMAPS = [
  { name_en: "Frontend", name_ar: "الواجهات الأمامية", url: "https://www.freecodecamp.org/learn/front-end-development-libraries-v9/" },
  { name_en: "Backend", name_ar: "الواجهات الخلفية", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis-v9/" },
  { name_en: "Full Stack", name_ar: "Full Stack", url: "https://www.freecodecamp.org/learn/full-stack-developer-v9/" },
  { name_en: "Python", name_ar: "Python", url: "https://www.freecodecamp.org/learn/python-v9/" },
  { name_en: "Java", name_ar: "Java", url: "https://www.freecodecamp.org/news/the-java-handbook/" },
  { name_en: "C++", name_ar: "C++", url: "https://elzero.org/study/cplusplus-study-plan/" },
  { name_en: "C#", name_ar: "C#", url: "https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/" },
  { name_en: "JavaScript", name_ar: "JavaScript", url: "https://www.freecodecamp.org/learn/javascript-v9/" },
  { name_en: "React", name_ar: "React", url: "https://www.freecodecamp.org/news/react-for-beginners-handbook/" },
  { name_en: "Node.js", name_ar: "Node.js", url: "https://www.freecodecamp.org/news/get-started-with-nodejs/" },
  { name_en: "Flutter", name_ar: "Flutter", url: "https://bamboogeeks.dev/courses/flutter-academy_ar/8736" },
  { name_en: "AI", name_ar: "الذكاء الاصطناعي", url: "https://www.freecodecamp.org/learn/learn-rag-mcp-fundamentals" },
  { name_en: "Machine Learning", name_ar: "تعلم الآلة", url: "https://www.freecodecamp.org/learn/introduction-to-algorithms-and-data-structures" },
  { name_en: "Cyber Security", name_ar: "الأمن السيبراني", url: "https://tryhackme.com/" },
  { name_en: "Data Science", name_ar: "علم البيانات", url: "https://www.freecodecamp.org/learn/relational-databases-v9/" },
];

export const LANGUAGES = [
  { name: "Python", difficulty: 2, learn_time: "3-6m", jobs_score: 95, popularity: 98 },
  { name: "JavaScript", difficulty: 2, learn_time: "3-6m", jobs_score: 97, popularity: 99 },
  { name: "TypeScript", difficulty: 3, learn_time: "1-2m", jobs_score: 90, popularity: 93 },
  { name: "Java", difficulty: 3, learn_time: "6-9m", jobs_score: 90, popularity: 88 },
  { name: "C", difficulty: 4, learn_time: "6-9m", jobs_score: 70, popularity: 80 },
  { name: "C++", difficulty: 5, learn_time: "9-12m", jobs_score: 75, popularity: 82 },
  { name: "C#", difficulty: 3, learn_time: "4-6m", jobs_score: 78, popularity: 80 },
  { name: "PHP", difficulty: 2, learn_time: "3-5m", jobs_score: 70, popularity: 70 },
  { name: "Go", difficulty: 3, learn_time: "3-5m", jobs_score: 80, popularity: 78 },
  { name: "Rust", difficulty: 5, learn_time: "9-12m", jobs_score: 72, popularity: 84 },
  { name: "Swift", difficulty: 3, learn_time: "5-7m", jobs_score: 75, popularity: 76 },
  { name: "Kotlin", difficulty: 3, learn_time: "4-6m", jobs_score: 78, popularity: 78 },
  { name: "Dart", difficulty: 2, learn_time: "3-5m", jobs_score: 70, popularity: 74 },
  { name: "SQL", difficulty: 2, learn_time: "1-2m", jobs_score: 92, popularity: 95 },
  { name: "HTML", difficulty: 1, learn_time: "2-4w", jobs_score: 85, popularity: 99 },
  { name: "CSS", difficulty: 2, learn_time: "1-3m", jobs_score: 85, popularity: 99 },
];
