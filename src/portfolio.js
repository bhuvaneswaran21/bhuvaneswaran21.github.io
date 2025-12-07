/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bhuvaneswaran",
  title: "Hi all, I'm Bhuvaneswaran",
  subTitle: emoji(
    "A passionate Data Scientist 🚀 specializing in Python, Machine Learning, Analytics, and GenAI, with experience in building end-to-end data pipelines, predictive models, and insight-driven dashboards for real-world impact."
  ),
  resumeLink: "", // Set to your resume URL when ready
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bhuvaneswaran21/",
  linkedin: "www.linkedin.com/in/bhuvaneswaran-r-034921176",
  gmail: "bhuvansekar001@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@bhuvansekar001",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE DATA SCIENTIST & DATA ENGINEER WORKING WITH BIG DATA, ML, AND CLOUD PIPELINES",
  skills: [
    emoji(
      "⚡ Build end-to-end Data Science solutions including data cleaning, feature engineering, model training, and evaluation"
    ),
    emoji(
      "⚡ Design and develop scalable Big Data pipelines using Spark, Hive, and distributed processing frameworks"
    ),
    emoji(
      "⚡ Orchestrate data workflows using Apache Airflow for reliable batch and streaming pipelines"
    ),
    emoji(
      "⚡ Build predictive models for classification, regression, forecasting, and NLP use cases"
    ),
    emoji(
      "⚡ Ensure data security and governance using Apache Ranger and best data compliance practices"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
     https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "apache-spark",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "apache-hive",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "apache-airflow",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "apache-ranger",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "machine-learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "deep-learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "data-visualization",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kalasalingam University",
      logo: require("./assets/images/karelogo.jpeg"),
      subHeader: "B.Tech in Computer Science Engineering",
      duration: "June 2016 - April 2020",
      desc:
        "Completed a Bachelor's degree in Computer Science with strong foundations in programming, data structures, algorithms, and data-driven problem solving. Developed a growing interest in Data Science, Big Data, and Machine Learning during academic projects and labs.",
      descBullets: [
        "Core subjects: Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks",
        "Hands-on experience with Python, SQL, and Java through lab courses and mini-projects",
        "Worked on academic projects involving data analysis, machine learning, and web-based applications",
        "Participated in technical workshops, coding contests, and university hackathons"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & Machine Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Big Data (Spark, Hive)",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Engineering (Airflow, ETL Pipelines)",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming (Python, SQL)",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud & DevOps (AWS, Docker)",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Visualization & Analytics",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Keep false unless you actively use CodersRank
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Data Scientist",
      company: "Finsire",
      companylogo: require("./assets/images/finsire_logo.jpeg"),
      date: "October 2025 – Present",
      desc: "Leading the design and development of large-scale data science and analytics solutions for financial products, focusing on predictive modeling, big data processing, and business intelligence.",
      descBullets: [
        "Built and deployed machine learning models for credit risk, churn prediction, and customer segmentation",
        "Designed scalable data pipelines using Apache Spark and Hive for high-volume financial datasets",
        "Orchestrated batch workflows using Apache Airflow to ensure reliable and automated data processing",
        "Implemented data access control and governance using Apache Ranger",
        "Worked closely with product and business teams to translate data insights into actionable strategies"
      ]
    },
    {
      role: "R&D Engineer",
      company: "Vivriti Capital",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "December 2022 – September 2025",
      desc: "Worked as part of the R&D team to build advanced analytics and machine learning solutions for lending, risk assessment, and financial intelligence.",
      descBullets: [
        "Developed ML models for loan default prediction and portfolio risk analysis",
        "Performed large-scale data analysis using Python, SQL, Spark, and Hive",
        "Automated data validation, feature engineering, and model pipelines using Airflow",
        "Built KPI dashboards and analytical reports for business stakeholders",
        "Collaborated with cross-functional teams to productionize ML solutions"
      ]
    },
    {
      role: "Data Engineer / Full Stack Engineer",
      company: "mpura Inc",
      companylogo: require("./assets/images/smartmoneyrd_logo.jpeg"), // You can replace with actual mpura logo later
      date: "August 2021 – October 2022",
      desc: "Worked on building data-intensive web applications and backend systems with a strong focus on data ingestion, transformation, and analytics.",
      descBullets: [
        "Built ETL pipelines to collect, clean, and process structured and semi-structured data",
        "Implemented REST APIs for data access and reporting",
        "Worked with SQL databases and data warehouses for analytics use cases",
        "Developed dashboards and internal tools for monitoring data quality and business metrics"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
