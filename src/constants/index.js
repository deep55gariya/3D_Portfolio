import {infosys, edunet, insignia } from "../assets/images";
import {
    Canva,
    car,
    contact,
    cpp,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    python,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: Canva,
        name: "Canva",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "cpp",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Programming Language",
    }
];

export const experiences = [
    {
      title: "AI Intern",
      company_name: "Infosys Springboard",
      icon: infosys,
      iconBg: "#accbe1",
      date: "February 2025 – March 2025",
      points: [
        "Built and executed 'Advanced AI-Driven Legal Document Summarization and Risk Assessment' project.",
        "Implemented advanced AI algorithms to enhance document processing speed, accuracy, and risk evaluation in legal analysis.",
        "Integrated cutting-edge features in legal AI solutions.",
      ],
    },
    {
      title: "AI Intern",
      company_name: "Edunet Foundation",
      icon: edunet,
      iconBg: "#fbc3bc",
      date: "November 2024 – December 2024",
      points: [
        "Prepared a Spam Mail Detection project using AI and Machine Learning techniques.",
        "Conducted in-depth research and analysis on multiple Machine Learning models, evaluating their performance and real-world applications.",
        "Engineered an end-to-end data pipeline to transform unstructured data into structured formats, optimizing data processing and model training efficiency.",
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "Insignia",
      icon: insignia,
      iconBg: "#b7e4c7",
      date: "August 2024 – December 2024",
      points: [
        "Worked on multiple ML models and prepared detailed reports on their performance and use-cases.",
        "Gained deep insights into important ML algorithms and their real-world applications.",
        "Contributed to a live ML project, focusing on converting unstructured data into structured formats for efficient model training.",
        "Collaborated with the team to clean, preprocess, and annotate data to improve model accuracy and efficiency.",
      ],
    },
  ];
  

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/deep55gariya',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/deepak-gariya-59603428b',
    }
];

export const projects = [

    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Virtual AI Interviewer',
        description: 'Built a smart interview system using resume and job role to ask contextual questions with speech-to-text and voice feedback features.',
        link: 'https://ai-mock-interviewer-blue.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Advanced AI Legal Document Analyzer',
        description: 'Summarizes legal documents and assesses risk factors using AI and NLP techniques for quick legal understanding.',
        link: 'https://github.com/deep55gariya/Advanced-AI-Driven-Legal-Document-Summarization-and-Risk-Assessment',
    },
    {
        iconUrl: car,
        theme: 'btn-back-yellow',
        name: 'CraavyBites',
        description: 'A visually appealing food ordering website that enhances user experience with an engaging layout and smooth navigation.',
        link: 'https://craavy-bites.vercel.app/#',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Chat with Multiple PDFs',
        description: 'A LangChain-based chatbot using FAISS and Gemini Pro to answer questions from multiple uploaded PDF documents.',
        link: 'https://huggingface.co/spaces/Deepak5555/Chat_With_Multiple_PDF',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AI Medical Assistant App',
        description: 'Created with Streamlit and Gemini API, this app analyzes MRI images, detects brain tumors, and provides auto-generated reports with treatment suggestions.',
        link: 'https://huggingface.co/spaces/Deepak5555/Medical_Assistant',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Podcast Summarizer',
        description: 'Extracts and summarizes YouTube video transcripts using Gemini API without requiring YouTube API access.',
        link: 'https://huggingface.co/spaces/Deepak5555/Podcast_Summarizer',
    },
    
    
];
