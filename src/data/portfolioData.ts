export interface StatItem {
  num: string;
  lbl: string;
}

export interface ContactLink {
  type: string;
  label: string;
  val: string;
  href: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  tag: string;
  role: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  stats: StatItem[];
  location: string;
  educationSummary: string;
  workSummary: string;
  contacts: ContactLink[];
}

export interface EducationItem {
  title: string;
  sub: string;
  badge: string;
  badgeStyle?: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  description: string;
  tags: Array<{ name: string; highlight?: boolean }>;
}

export interface ProjectItem {
  title: string;
  description: string;
  emoji: string;
  badge: {
    text: string;
    class: 'b1' | 'b2' | 'b3' | 'b4';
  };
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Norma Zuhrotul Hayati",
  tag: "Open to Work",
  role: "AI & Data Engineer",
  description:
    "AI & Data Engineer who turns messy data into smart decisions. Fresh graduate from UNNES, passionate about Machine Learning, LLMs, and Explainable AI — building systems that are not just intelligent, but trustworthy. ✨",
  quote: '"Turning data into insight, insight into impact."',
  quoteAuthor: "— Norma, 2025",
  location: "📍 Semarang, Indonesia",
  educationSummary: "🎓 S1 Teknik Informatika, UNNES",
  workSummary: "💼 Data Science Intern @ PT. DataIns",
  stats: [
    { num: "3.65", lbl: "GPA · Honours" },
    { num: "7+", lbl: "GitHub Repos" },
    { num: "81.7%", lbl: "Akurasi Thesis" },
    { num: "6 bln", lbl: "Internship" },
  ],
  contacts: [
    {
      type: "email",
      label: "Email",
      val: "normasucicd@gmail.com",
      href: "mailto:normasucicd@gmail.com",
      icon: "✉️",
    },
    {
      type: "github",
      label: "GitHub",
      val: "github.com/NormaAyaa",
      href: "https://github.com/NormaAyaa",
      icon: "⌥",
    },
    {
      type: "phone",
      label: "Phone",
      val: "+62 888 0266 1893",
      href: "https://wa.me/6288802661893",
      icon: "📞",
    },
  ],
};

export const educationHistory: EducationItem[] = [
  {
    title: "S1 Teknik Informatika",
    sub: "Universitas Negeri Semarang · 2021–2025",
    badge: "GPA 3.65 · With Honours 🎓",
  },
  {
    title: "Data Science Intern",
    sub: "PT. DataIns, Yogyakarta · Aug 2023 – Jan 2024",
    badge: "LLM · NLP · Streamlit 💻",
    badgeStyle: "background:var(--blue-light);color:var(--brown);border-color:rgba(184,212,232,.5)",
  },
  {
    title: "SMAN 7 Semarang",
    sub: "IPA · 2018–2021 · Nilai Akhir 83.53",
    badge: "Matematika & IPA 🌿",
    badgeStyle: "background:#e8f5e8;color:var(--green-dark);border-color:rgba(143,173,106,.3)",
  },
];

export const skillsList: SkillCategory[] = [
  {
    icon: "🤖",
    title: "Machine Learning & Deep Learning",
    description:
      "ANN, XGBoost, SMOTE, hyperparameter tuning, evaluasi model end-to-end dari preprocessing hingga deployment.",
    tags: [
      { name: "PyTorch", highlight: true },
      { name: "TensorFlow", highlight: true },
      { name: "Scikit-learn" },
      { name: "XGBoost" },
    ],
  },
  {
    icon: "💬",
    title: "LLM & NLP",
    description:
      "Integrasi GPT-3, Hugging Face, LangChain; PDF analysis, RAG pipeline, dan keyword search via API.",
    tags: [
      { name: "LangChain", highlight: true },
      { name: "OpenAI", highlight: true },
      { name: "Hugging Face" },
      { name: "NLP" },
    ],
  },
  {
    icon: "🔍",
    title: "Explainable AI",
    description:
      "Hybrid SHAP + LIME untuk interpretabilitas model — membuat AI transparan dan dapat dipercaya stakeholder.",
    tags: [
      { name: "SHAP", highlight: true },
      { name: "LIME", highlight: true },
      { name: "XAI" },
    ],
  },
  {
    icon: "📊",
    title: "Data Analysis & Viz",
    description:
      "EDA, statistical testing, Tukey Test, dan visualisasi insight yang actionable untuk keputusan bisnis.",
    tags: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "PowerBI" },
      { name: "RStudio" },
    ],
  },
  {
    icon: "🖥️",
    title: "App Development",
    description:
      "UI interaktif dengan Streamlit, web dengan HTML/CSS/JS, serta desktop app Java dan NetBeans IDE.",
    tags: [
      { name: "Streamlit", highlight: true },
      { name: "FastAPI" },
      { name: "Next.js" },
      { name: "HTML/CSS" },
    ],
  },
  {
    icon: "🗄️",
    title: "Database & Programming",
    description:
      "Desain relational database, SQL query optimization, dan pengembangan multi-bahasa pemrograman.",
    tags: [
      { name: "SQL", highlight: true },
      { name: "Python" },
      { name: "R" },
      { name: "TypeScript" },
      { name: "JavaScript" },
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    title: "Credit Card Default – ANN + XAI",
    emoji: "🧠",
    badge: { text: "Thesis · XAI", class: "b1" },
    description:
      "Model prediksi credit risk dengan ANN, XGBoost feature selection, SMOTE, dan Hybrid XAI (SHAP + LIME). Akurasi 81.7% — project skripsi S1.",
    stack: ["Python", "ANN", "XGBoost", "SHAP", "LIME"],
    githubUrl: "https://github.com/NormaAyaa/Default--Credit-Card",
    demoUrl: "https://default--credit-card.streamlit.app/",
  },
  {
    title: "CHAT-MULTI-PDF",
    emoji: "💬",
    badge: { text: "LLM · Internship", class: "b2" },
    description:
      "Sistem analisis dokumen PDF berbasis LLM dengan keyword search dan NLP pipeline menggunakan LangChain dan OpenAI GPT-3. Dibuat saat internship PT. DataIns.",
    stack: ["LangChain", "OpenAI GPT-3", "Streamlit", "Python"],
    githubUrl: "https://github.com/NormaAyaa/CHAT-MULTI-PDF",
  },
  {
    title: "RetainAI – Streamlit",
    emoji: "🤖",
    badge: { text: "AI · Streamlit", class: "b3" },
    description:
      "Aplikasi AI berbasis Streamlit untuk customer retention analysis, dengan UI interaktif dan integrasi model machine learning secara real-time.",
    stack: ["Streamlit", "Python", "ML"],
    githubUrl: "https://github.com/NormaAyaa/RetainAI-Streamlit",
    demoUrl: "https://retainai-app.streamlit.app/",
  },
  {
    title: "Deep Fake Detector",
    emoji: "🕵️",
    badge: { text: "Deep Learning", class: "b4" },
    description:
      "Sistem deteksi deepfake menggunakan deep learning — mengidentifikasi konten gambar yang dimanipulasi AI dengan model klasifikasi neural network.",
    stack: ["Deep Learning", "Python", "Computer Vision"],
    githubUrl: "https://github.com/NormaAyaa/Deep-Fake-Detector",
    demoUrl: "https://deepfake-detector-ai.streamlit.app/",
  },
  {
    title: "AI-Triase-UGD",
    emoji: "🏥",
    badge: { text: "Healthcare AI", class: "b1" },
    description:
      "Sistem AI untuk triage pasien di UGD — membantu tenaga medis memprioritaskan penanganan pasien secara cerdas dan cepat.",
    stack: ["Python", "ML", "Healthcare AI"],
    githubUrl: "https://github.com/NormaAyaa/AI-Triase-UGD",
    demoUrl: "https://ai-triase-ugd.streamlit.app/",
  },
  {
    title: "Default Credit Card",
    emoji: "💳",
    badge: { text: "ML · Finance", class: "b2" },
    description:
      "Analisis dan prediksi credit card default dengan EDA mendalam dan model baseline machine learning sebagai fondasi riset thesis utama.",
    stack: ["Python", "Scikit-learn", "Pandas", "EDA"],
    githubUrl: "https://github.com/NormaAyaa/Default--Credit-Card",
    demoUrl: "https://default--credit-card.streamlit.app/",
  },
];
