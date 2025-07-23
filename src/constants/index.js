import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  medigenius,
  realestate,
  tripguide,
  threejs,
  python,
  numpy,
  pandas
} from "../assets";





export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
  {
    title: "Deep Learning Enthusiast",
    icon: mobile, // or any other suitable icon you have
  },
  {
    title: "AI Researcher",
    icon: backend, // reuse if no other available, or import a new one
  },
];

const technologies = [
  { name: "python", icon: python },
  { name: "numpy", icon: numpy },
  { name: "pandas", icon: pandas},
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];
// const technologies1 = [
//   { name: "Python", icon: python },
//   { name: "NumPy", icon: numpy },
//   { name: "Pandas", icon: pandas },
//   { name: "Matplotlib", icon: matplotlib },
//   { name: "Seaborn", icon: seaborn },
//   { name: "Scikit-Learn", icon: scikitlearn },
//   { name: "TensorFlow", icon: tensorflow },
//   { name: "Keras", icon: keras },
//   { name: "PyTorch", icon: pytorch },
//   { name: "OpenCV", icon: opencv },
//   { name: "Java", icon: java },
//   { name: "JavaScript", icon: javascript },
//   { name: "React JS", icon: reactjs },
//   { name: "Node JS", icon: nodejs },
//   { name: "MongoDB", icon: mongodb },
//   { name: "MySQL", icon: mysql },
//   { name: "Git", icon: git },
//   { name: "VS Code", icon: vscode },
// ];


const experiences = [
  {
    title: "Python Developer Intern",
    company_name: "Nodeprix Technology LLP",
    icon: backend,
    iconBg: "#383E56",
    date: "Jun 2025 - Present",
    points: [
      "Developed a real-time Copy Trading backend using Python, Django, Redis, and Docker.",
      "Implemented SmartConnect API and WebSocket listeners for master-client communication.",
      "Achieved sub-50ms latency across multithreaded sessions supporting multiple clients.",
      "Built scalable APIs and improved backend system performance.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Indian Space Research Organisation (ISRO)",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Researched PRN code optimization techniques using Machine Learning.",
      "Enhanced satellite signal efficiency and accuracy through optimized algorithms.",
      "Collaborated with a national research team to deploy real-world satellite signal models.",
    ],
  },
  {
    title: "Data Analysis Intern",
    company_name: "Grownited Pvt. Ltd.",
    icon: backend,
    iconBg: "#383E56",
    date: "Jun 2024 - Jul 2024",
    points: [
      "Worked on data analysis pipelines using Pandas, NumPy, and Tableau.",
      "Cleaned, processed, and visualized user and business data to provide insights.",
      "Created reports that influenced internal strategy and product design decisions.",
    ],
  },
]
//     designation: "Tech Lead",
//     company: "Nodeprix",
//     image: "https://randomuser.me/api/portraits/men/31.jpg",
//   },
//   {
//     testimonial:
//       "Khushi displayed exceptional research skills during her tenure with ISRO's satellite systems team.",
//     name: "Dr. R. Iyer",
//     designation: "Scientist",
//     company: "ISRO",
//     image: "https://randomuser.me/api/portraits/men/15.jpg",
//   },
// ];

const projects = [
  {
    name: "Email Classifier with PII Masking",
    description:
      "A REST API built with FastAPI that classifies emails and masks personally identifiable information (PII) using deep learning models deployed on Hugging Face Spaces.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "huggingface", color: "green-text-gradient" },
      { name: "deep-learning", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/khushi2488/Email_classifier_with_pii_masking/tree/master",
  },
  {
    name: "WhatsApp Chat Analyzer",
    description:
      "An interactive data visualization tool to analyze WhatsApp chat data using Python and Streamlit. Tracks user activity, emoji usage, and conversation trends.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "matplotlib", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/khushi2488/Whatsapp_Chat_Analyzer_project",
  },
  {
    name: "GreatKart E-Commerce Platform",
    description:
      "A full-stack Django-based e-commerce platform with PayPal integration, secure user auth, scalable APIs, and deployment on AWS.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
      { name: "restapi", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/khushi2488/Django-Project",
  },
   {
  name: "MediGenius – Medicine Recommendation System",
  description:
    "Engineered a symptom-based medical diagnosis system using Python, Flask, and machine learning models with 90% accuracy in disease prediction. Integrated voice input, Bootstrap, and JavaScript to create a user-friendly interface that improved engagement by 40%.",
  tags: [
    { name: "flask", color: "blue-text-gradient" },
    { name: "machine-learning", color: "green-text-gradient" },
    { name: "javascript", color: "pink-text-gradient" },
  ],
  image: carrent, // Define this image variable in your assets
  source_code_link: "https://github.com/khushi2488/Medicine-Recommendation-System",
},
{
  name: "Real Estate Home Rental Website",
  description:
    "Built a full-stack MERN-based home rental platform with advanced search filters, secure user auth, and CRUD operations. Achieved 20% faster query response by implementing optimized MongoDB indexing and dynamic React components for intuitive user experience.",
  tags: [
    { name: "mern", color: "blue-text-gradient" },
    { name: "reactjs", color: "green-text-gradient" },
    { name: "mongodb", color: "pink-text-gradient" },
  ],
  image: carrent, // Define this image variable in your assets
  source_code_link: "https://github.com/khushi2488/Homerentalweb",
}

];

export { services, technologies, experiences,projects };
