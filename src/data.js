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
    "2023 yılında aldığım özel yazılım kursu sürecinde HTML, CSS, Bootstrap, JavaScript, React, NodeJs, Python ve Django gibi teknolojiler öğrendim ve proje geliştirme fırsatı buldum.",
    "2024 yılında başladığım yazılım mühendisliği yüksek lisans eğitimi sürecinde ise veri bilimi, veri analizi, veri görselleştirme, yapay zeka, makine öğrenmesi ve derin öğrenme gibi birçok alanda eğitim aldım ve Python ile geliştirdiğimiz projelerde numpy, pandas, mathplotlib, seaborn, keras ve tensorflow gibi kütüphaneler öğrendim. Bitirme projesi olarak doğal dil işleme tekniklerini kullanarak İngilizce - Türkçe çeviri yapan derin öğrenme modeli geliştirdim.",
  ],
  stats: [
    { value: "1+", label: "Deneyim yılı" },
    { value: "4+", label: "Tamamlanan proje" },
    { value: "4+", label: "Mutlu Müşteri" },
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
  // {
  //   category: "Tools & Cloud",
  //   items: ["Git", "Docker", "AWS", "Vercel"],
  // },
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
    demo: "https://github.com/VeliKonukcu/PizzaHot-Project",
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
