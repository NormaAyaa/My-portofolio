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

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  organizer: string;
  credentialId: string;
  date: string;
  hours: string;
  description: string;
  skills: string[];
  image: string;
  verified: boolean;
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
  category: 'ai' | 'web' | 'other';
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
    { num: "20", lbl: "GitHub Repos" },
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

export const certificatesList: CertificateItem[] = [
  {
    id: "kemnaker-plan-web-ai",
    title: "Pelatihan Web Programming dengan Pemanfaatan AI",
    issuer: "Kementerian Ketenagakerjaan Republik Indonesia & Yayasan Plan International Indonesia",
    organizer: "Balai Besar Pelatihan Vokasi dan Produktivitas (BBPVP) Semarang",
    credentialId: "PLAN/BOOTCAMPWP/202601",
    date: "30 Oktober 2026",
    hours: "112 Jam Pelatihan (112 Learning Hours)",
    description:
      "Sertifikat kelulusan resmi Future Innovators Bootcamp yang diselenggarakan oleh Plan Indonesia bersama BBPVP Semarang Kemnaker RI. Pelatihan komprehensif selama 112 jam ini membekali peserta dengan keterampilan rekayasa web modern, integrasi automasi AI, prompt engineering, arsitektur aplikasi berbasis data, dan kolaborasi project standar industri.",
    skills: [
      "Web Programming",
      "Pemanfaatan AI",
      "Frontend & Backend",
      "Prompt Engineering",
      "Problem Solving",
      "112 Jam Bersertifikat",
    ],
    image: "/sertifikat-kemnaker-plan-ai.jpg",
    verified: true,
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
      "Integrasi GPT-3/4, Qwen, Hugging Face, LangChain, LangGraph; RAG pipeline, dan multi-document question answering.",
    tags: [
      { name: "LangChain", highlight: true },
      { name: "OpenAI", highlight: true },
      { name: "Qwen LLM" },
      { name: "Hugging Face" },
    ],
  },
  {
    icon: "🔍",
    title: "Explainable AI",
    description:
      "Hybrid SHAP + LIME untuk interpretabilitas model — membuat AI transparan dan dapat dipercaya stakeholder bisnis dan medis.",
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
      "EDA, statistical hypothesis testing, Tukey test, dan visualisasi insight actionable untuk pengambilan keputusan.",
    tags: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "PowerBI" },
      { name: "RStudio" },
    ],
  },
  {
    icon: "🖥️",
    title: "App & Web Development",
    description:
      "UI interaktif Streamlit, web application modern dengan Next.js / React / TypeScript, serta desktop software Java.",
    tags: [
      { name: "Streamlit", highlight: true },
      { name: "FastAPI" },
      { name: "Next.js / React" },
      { name: "TypeScript" },
    ],
  },
  {
    icon: "🗄️",
    title: "Database & Engineering",
    description:
      "Desain relational database PostgreSQL & MySQL, optimasi query SQL, serta workflow Git/GitHub CI/CD.",
    tags: [
      { name: "SQL", highlight: true },
      { name: "PostgreSQL" },
      { name: "Docker" },
      { name: "Git / GitHub" },
    ],
  },
];

export const projectsList: ProjectItem[] = [
  // ── AI & Machine Learning ──
  {
    title: "Credit Card Default – ANN + Hybrid XAI",
    emoji: "🧠",
    category: "ai",
    badge: { text: "Thesis · XAI 81.7%", class: "b1" },
    description:
      "Model klasifikasi risiko credit default dengan Artificial Neural Network (ANN), XGBoost feature selection, SMOTE handling imbalance, dan Hybrid XAI (SHAP + LIME) dengan akurasi 81.7% — project skripsi S1 UNNES.",
    stack: ["Python", "ANN", "XGBoost", "SHAP", "LIME", "SMOTE"],
    githubUrl: "https://github.com/NormaAyaa/Default--Credit-Card",
    demoUrl: "https://default--credit-card.streamlit.app/",
  },
  {
    title: "AI-Triase-UGD (Emergency Room Triage)",
    emoji: "🏥",
    category: "ai",
    badge: { text: "Agentic AI · Healthcare", class: "b2" },
    description:
      "Sistem triage cerdas untuk IGD/UGD rumah sakit menggunakan LangGraph Agent + Google Gemini 2.0 Flash dengan framework ESI 1–5. Dilengkapi scoring gejala, analisis tanda vital, dan alokasi bed otomatis.",
    stack: ["LangGraph", "Gemini 2.0 Flash", "Streamlit", "Python", "Healthcare AI"],
    githubUrl: "https://github.com/NormaAyaa/AI-Triase-UGD",
    demoUrl: "https://ai-triase-ugd.streamlit.app/",
  },
  {
    title: "RetainAI – Employee Retention Prediction",
    emoji: "💼",
    category: "ai",
    badge: { text: "Ensemble ML · HR Tech", class: "b3" },
    description:
      "Platform AI prediksi risiko resign karyawan menggunakan ensemble ML (Random Forest, XGBoost, Gradient Boosting), dashboard analitik risiko interaktif, Explainable AI, dan smart candidate matching.",
    stack: ["Streamlit", "Random Forest", "XGBoost", "XAI", "Python"],
    githubUrl: "https://github.com/NormaAyaa/RetainAI-Streamlit",
    demoUrl: "https://retainai-app.streamlit.app/",
  },
  {
    title: "Deep Fake Image Detector",
    emoji: "🕵️",
    category: "ai",
    badge: { text: "Deep Learning · CV", class: "b4" },
    description:
      "Sistem deteksi manipulasi gambar deepfake berbasis Deep Learning dan Computer Vision untuk mendeteksi keaslian citra visual dan mengidentifikasi konten artifisial buatan AI.",
    stack: ["Deep Learning", "PyTorch", "Computer Vision", "Streamlit"],
    githubUrl: "https://github.com/NormaAyaa/Deep-Fake-Detector",
    demoUrl: "https://deepfake-detector-ai.streamlit.app/",
  },
  {
    title: "Chatbot Hybrid (Local Qwen + OpenAI)",
    emoji: "🤖",
    category: "ai",
    badge: { text: "Dual LLM · Local & Cloud", class: "b1" },
    description:
      "Sistem chatbot multi-model yang mengintegrasikan LLM offline lokal (Qwen) untuk inferensi hemat biaya tanpa internet serta OpenAI API untuk reasoning kompleks performa tinggi.",
    stack: ["Qwen LLM", "OpenAI API", "Python", "Streamlit"],
    githubUrl: "https://github.com/NormaAyaa/CHATBOT-LOKAL-AND-OPENAI",
  },
  {
    title: "CHAT-MULTI-PDF (RAG & Multi-Doc Analysis)",
    emoji: "📄",
    category: "ai",
    badge: { text: "RAG · LangChain", class: "b2" },
    description:
      "Sistem analisis multi-dokumen PDF berbasis LLM & Retrieval-Augmented Generation (RAG) dengan keyword search dan NLP pipeline menggunakan LangChain dan OpenAI GPT-3. (Project PT. DataIns).",
    stack: ["LangChain", "OpenAI GPT-3", "RAG Pipeline", "Streamlit", "NLP"],
    githubUrl: "https://github.com/NormaAyaa/CHAT-MULTI-PDF",
  },
  {
    title: "Klasifikasi Kematangan Mangga Kent (CNN)",
    emoji: "🥭",
    category: "ai",
    badge: { text: "Computer Vision · CNN", class: "b3" },
    description:
      "Model klasifikasi citra otomatis menggunakan Convolutional Neural Network (CNN) untuk menentukan tingkat kematangan buah mangga Kent dengan akurasi tinggi.",
    stack: ["CNN", "TensorFlow/Keras", "Computer Vision", "Jupyter"],
    githubUrl: "https://github.com/NormaAyaa/Klasifikasi-Kematangan-Buah-Mangga-Kent-CNN",
  },
  {
    title: "Network Intrusion Detection System (DL)",
    emoji: "🛡️",
    category: "ai",
    badge: { text: "Cybersecurity · DL", class: "b4" },
    description:
      "Penerapan metode Deep Learning dan Machine Learning untuk Network Intrusion Detection System (NIDS) guna mendeteksi ancaman intrusi dan anomali pada lalu lintas jaringan secara real-time.",
    stack: ["Deep Learning", "Cybersecurity", "Anomaly Detection", "Python"],
    githubUrl: "https://github.com/NormaAyaa/METHOD-BASED-OF-DEEP-LEARNING-ON-NETWORK-INTRUSION-DETECTION-Machine-Learning-",
  },

  // ── Web & Enterprise Systems ──
  {
    title: "Finance Management Batik Larasati",
    emoji: "📊",
    category: "web",
    badge: { text: "Web App · Enterprise", class: "b1" },
    description:
      "Sistem informasi manajemen keuangan dan operasional bisnis Batik Larasati berbasis web modern untuk tracking arus kas, inventaris kain batik, dan pencatatan laba rugi.",
    stack: ["TypeScript", "Next.js / React", "Tailwind CSS", "Finance"],
    githubUrl: "https://github.com/NormaAyaa/finance-batik-larasati",
  },
  {
    title: "K6 Cemerlang Jaya Accounting System",
    emoji: "🏢",
    category: "web",
    badge: { text: "Web App · Accounting", class: "b2" },
    description:
      "Aplikasi web akuntansi dan operasional perusahaan untuk pencatatan transaksi terstruktur, jurnal umum, buku besar, neraca keuangan, dan automasi pembukuan.",
    stack: ["TypeScript", "Web Engineering", "SQL Database", "Accounting"],
    githubUrl: "https://github.com/NormaAyaa/K6-Cemerlangg-Jaya",
  },
  {
    title: "Portal HRIS (Human Resource Info System)",
    emoji: "👥",
    category: "web",
    badge: { text: "HR Tech · Portal", class: "b3" },
    description:
      "Portal web HRIS untuk manajemen data karyawan terpusat, monitoring absensi, pengelolaan cuti, dan struktur payroll perusahaan dengan antarmuka yang responsif.",
    stack: ["JavaScript", "HRIS System", "REST API", "Web Platform"],
    githubUrl: "https://github.com/NormaAyaa/app3-portal-hris",
  },
  {
    title: "Sistem Informasi Manajemen Klinik Gigi",
    emoji: "🦷",
    category: "web",
    badge: { text: "Healthcare · Web", class: "b4" },
    description:
      "Aplikasi web manajemen klinik gigi untuk reservasi janji temu pasien, rekam medis dental elektronik, inventaris obat, serta riwayat tindakan dokter secara rapi.",
    stack: ["JavaScript", "Clinical Database", "Healthcare App"],
    githubUrl: "https://github.com/NormaAyaa/Klinik-Gigi",
  },

  // ── Desktop & Data Science ──
  {
    title: "Aplikasi Desktop Penitipan Kucing (Pet Care)",
    emoji: "🐱",
    category: "other",
    badge: { text: "Desktop App · Java", class: "b1" },
    description:
      "Aplikasi desktop manajemen penitipan hewan peliharaan (kucing) yang dibangun menggunakan Java GUI dan NetBeans IDE, dilengkapi database relasional untuk pencatatan kandang dan paket layanan.",
    stack: ["Java", "Swing GUI", "NetBeans IDE", "MySQL"],
    githubUrl: "https://github.com/NormaAyaa/apk-dekstop-penitipan-kucing",
  },
  {
    title: "Analisis Statistik & Distribusi Normal",
    emoji: "📈",
    category: "other",
    badge: { text: "Data Science · Stats", class: "b2" },
    description:
      "Eksplorasi komputasi statistik untuk pengujian hipotesis, pemodelan kurva distribusi normal data, dan analisis variansi data kuantitatif menggunakan Jupyter Notebook.",
    stack: ["Python", "SciPy", "Statistical Modeling", "Jupyter Notebook"],
    githubUrl: "https://github.com/NormaAyaa/Distribusi-Normal",
  },
];
