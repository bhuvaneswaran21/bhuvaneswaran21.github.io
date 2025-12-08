import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bhuvaneswaran",
  initials: "B",
  url: "https://bhuvaneswaran21.github.io/",
  location: "Chennai, Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "Data Scientist 🚀 specializing in Python, Machine Learning, Big Data (Spark, Hive), Airflow, and GenAI — building scalable data pipelines, predictive models, and business-driven analytics systems.",
  summary:
    "I am a Data Scientist with a strong background in Computer Science and real-world experience in building scalable ML systems, big data pipelines, and analytics platforms. My expertise spans across Spark, Hive, Airflow, Python, SQL, and GenAI applications. I focus on converting raw data into production-ready intelligence that drives real business impact.",
  avatarUrl: "/myself.png",

  skills: [
    "Python",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "Apache Spark",
    "Apache Hive",
    "Apache Airflow",
    "Data Engineering",
    "GenAI",
    "NLP",
    "Docker",
    "AWS",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "bhuvansekar001@@gmail.com",
    tel: "+91-XXXXXXXXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bhuvaneswaran21",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bhuvaneswaran-r-034921176",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "YouTube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:bhuvansekar001@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Finsire",
      href: "#",
      badges: ["FinTech", "Big Data"],
      location: "India",
      title: "Senior software Engineer",
      logoUrl: "/finsire.png",
      start: "Oct 2025",
      end: "Present",
      description:
        "Leading the development of large-scale ML and Big Data solutions for financial systems. Built and deployed predictive models for credit risk, churn, and fraud. Designed Spark + Hive based data pipelines orchestrated using Apache Airflow with governance through Apache Ranger.",
    },
    {
      company: "Vivriti Capital",
      href: "#",
      badges: ["Lending", "Risk Analytics"],
      location: "India",
      title: "R&D Engineer",
      logoUrl: "/vivriti.png",
      start: "Dec 2022",
      end: "Sep 2025",
      description:
        "Developed ML models for loan default prediction, portfolio risk analytics, and financial intelligence. Automated feature engineering and training pipelines using Airflow. Performed large-scale data processing using Spark and Hive.",
    },
    {
      company: "Mpura Inc",
      href: "#",
      badges: ["ETL", "Analytics"],
      location: "India",
      title: "Full Stack Engineer",
      logoUrl: "/mpura.png",
      start: "Aug 2021",
      end: "Oct 2022",
      description:
        "Built end-to-end ETL pipelines, REST APIs for data platforms, SQL-based analytics systems, and internal dashboards for business monitoring.",
    },
  ],

  education: [
    {
      school: "Kalasalingam University",
      href: "https://kalasalingam.ac.in",
      degree: "B.Tech in Computer Science Engineering",
      logoUrl: "/kare.png",
      start: "2016",
      end: "2020",
    },
  ],

  projects: [
    {
      title: "Credit Risk Prediction System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "End-to-end ML system to predict loan default probability using structured financial data with full data pipeline orchestration.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Spark",
        "Hive",
        "Airflow",
        "AWS",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Customer Churn Analytics Platform",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Machine learning-based churn prediction system with feature engineering, model explainability, and automated retraining workflows.",
      technologies: [
        "Python",
        "XGBoost",
        "SQL",
        "Airflow",
        "Docker",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "GenAI NLP Automation System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built a GenAI-powered text classification and summarization engine for automated document intelligence.",
      technologies: [
        "Python",
        "Transformers",
        "OpenAI",
        "FastAPI",
        "Docker",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [], // You can keep this empty or I can add DS hackathons if you want
} as const;
