export const profile = {
  name: "Veli Konukcu",
  role: "Yazılım Mühendisi & Web Geliştirici",
  tagline:
    "Merhaba ben JavaScript - NodeJs veya Python - Django ile backend, JavaScript - React - MaterialUI ile frontend, MySql ve MongoDB ile veritabanı projeleri geliştirebilirim.",
  location: "İzmir, Türkiye",
  email: "hacivelikonukcu@gmail.com",
  github: "https://github.com/VeliKonukcu",
  linkedin: "https://www.linkedin.com/in/velikonukcu/",
  resumeUrl: "#",
};

export const about = {
  heading: "Hakkımda",
  paragraphs: [
    "Merhaba, ben Veli Konukcu.",
    "Yazılım geliştirme, web teknolojileri ve yapay zekâ alanlarında modern, güvenilir ve kullanıcı odaklı çözümler geliştiriyorum. Web uygulamalarından kurumsal yazılımlara, veri analizi projelerinden yapay zekâ tabanlı uygulamalara kadar farklı alanlarda teknolojiyi iş süreçlerine değer katacak şekilde kullanmayı hedefliyorum.",
    "2023 yılında yoğun bir yazılım uzmanlığı eğitimiyle profesyonel yazılım geliştirme yolculuğuma başladım. Bu süreçte HTML, CSS, JavaScript, React, Node.js, Python ve Django gibi güncel teknolojiler üzerinde çalışarak gerçek projeler geliştirdim. Ardından Yazılım Mühendisliği yüksek lisans eğitimime devam ederek veri bilimi, makine öğrenmesi, derin öğrenme ve doğal dil işleme alanlarında uzmanlaştım.",
    "Python ekosisteminde NumPy, Pandas, Matplotlib, TensorFlow ve Keras gibi teknolojilerle yapay zekâ uygulamaları geliştiriyor; kullanıcı deneyimini ön planda tutan, ölçeklenebilir ve sürdürülebilir yazılım çözümleri üretiyorum.",
    "Her projede kalite, şeffaf iletişim ve zamanında teslim ilkelerini benimseyerek müşterilerime uzun vadeli ve güvenilir teknoloji çözümleri sunmayı amaçlıyorum.",
  ],
  stats: [
    { value: "Yazılım Uzmanlığı Eğitimi", label: "" },
    { value: "Yazılım Mühendisliği Yüksek Lisansı", label: "" },
    { value: "Yapay Zekâ & Web Teknolojileri", label: "" },
  ],
};

export const skills = [
  {
    category: "Diller",
    items: ["JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "EJS",
      "PUG",
      "React",
      "Vite",
      "Material UI",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "MySql", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Data Science",
    items: [
      "Python",
      "Tensorflow",
      "Keras",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Scikit-Learn",
    ],
  },
];

export const projects = [
  {
    title: "Neural Machine Translation",
    description:
      "İngilizce kelimeleri ve cümleleri anlamlı ve uyumlu şekilde Türkçe' ye çevirebilen derin öğrenme modeli.",
    tags: ["Python", "Numpy", "Pandas", "tensorflow", "keras"],
    demo: "https://github.com/VeliKonukcu/Neural-Machine-Translation.git",
    source: "https://github.com/VeliKonukcu/Neural-Machine-Translation.git",
  },
  {
    title: "Shopping Site",
    description:
      "Bu projede frontend olarak EJS ve Bootstrap kullandım. Backend olarak NodeJs, Express ve MongoDB aracı olan Mongoose kullandım.",
    tags: [
      "Node.js",
      "JavaScript",
      "Express",
      "Ejs",
      "Bootstarp",
      "MongoDB",
      "Mongoose",
    ],
    demo: "https://github.com/VeliKonukcu/NodeJs-EJS-MongoDB",
    source: "https://github.com/VeliKonukcu/NodeJs-EJS-MongoDB",
  },
  {
    title: "Pizza Hot",
    description:
      "Bu projede hazır nodeJs api ve React' ın useReducer ve useContext araçları ile bir pizza firmasının sipariş sitesini tasarladım.",
    tags: ["React"],
    demo: "https://pizzahot-project.vercel.app/",
    source: "https://github.com/VeliKonukcu/PizzaHot-Project",
  },
  {
    title: "Course App",
    description:
      "Bu projede hazır Nodejs api ve React Router kütüphanesi ile web sayfası geliştirdim.",
    tags: ["Vite", "React", "ReactRouter"],
    demo: "https://github.com/VeliKonukcu/React-Router",
    source: "https://github.com/VeliKonukcu/React-Router",
  },
];

export const experience = [
  {
    role: "Freelance Developer",
    company: "Freelance",
    period: "2025 — Present",
    points: [
      "React ve NodeJs kullanarak birçok projede katkıda bulundum.",
      "Sıfırdan Full Stack proje geliştirdim.",
    ],
  },
];

export const navLinks = [
  { label: "Hakkımda", href: "#about" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Projeler", href: "#projects" },
  { label: "Deneyim", href: "#experience" },
  { label: "İletişim", href: "#contact" },
];
