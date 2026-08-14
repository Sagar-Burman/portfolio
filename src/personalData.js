import { Mail, Phone } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const personalInfo = {
  name: "Sagar Burman",
  role: "Fullstack Developer | AI & Data Analytics | Web Developer",
  email: "",
  phone: "",
  linkedin: "https://linkedin.com/in/sagarburman",
  github: "https://github.com/Sagar-Burman",
  twitter: "https://x.com/sagar_1218",
  instagram: "https://www.instagram.com/__.s4garrr/",
  about:
    "I am a passionate Computer Science student with a strong foundation in web development and programming. I enjoy building scalable applications and solving complex problems. My expertise lies in the MERN stack, and I am always eager to learn new technologies.",

  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sagarburman",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/Sagar-Burman",
      icon: FaGithub,
    },
    {
      name: "Email",
      url: "",
      icon: Mail,
    },
    {
      name: "Twitter",
      url: "https://x.com/sagar_1218",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/__.s4garrr/",
      icon: FaInstagram,
    },
    {
      name: "Phone",
      url: "",
      icon: Phone,
    },
  ],
};

export const skills = {
  languages: ["C++", "Python", "SQL"],
  web: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
  tools: ["MongoDB", "MySQL", "Git", "GitHub", "Canva", "Figma"],
  softSkills: ["Problem-Solving", "Team Collaboration", "Project Management", "Adaptability"],
};

export const skillCategories = [
  { title: 'Languages', icon: 'Code', items: skills.languages },
  { title: 'Web Development', icon: 'Layout', items: skills.web },
  { title: 'Tools & Platforms', icon: 'Database', items: skills.tools },
  { title: 'Soft Skills', icon: 'Terminal', items: skills.softSkills },
];

export const certificates = [
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Mar’26",
    image: "",
    link: "https://www.hackerrank.com/certificates/4eae2b13a69d",
  },

  {
    name: "Virtual Internship Program",
    issuer: "ServiceNow / SmartBridge",
    date: "May’26",
    image: "",
    link: "/certificates/Servicenow virtual internship certificate.pdf",
  },

  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "May’26",
    image: "",
    link: "/certificates/CISCO_Introduction_to_Cybersecurity_certificate.pdf",
  },

  {
    name: "Cyber Job Simulation",
    issuer: "Deloitte / Forage",
    date: "Feb’26",
    image: "",
    link: "/certificates/deloitte Cyber security certificate.pdf",
  },
];

export const featuredCertificates = certificates.filter((certificate) => (
  certificate.name === "SQL (Basic)" ||
  certificate.name === "Introduction to Cybersecurity"
));

export const education = [
  {
    institution: "LNCT College, Bhopal, India",
    degree: "BCA in Artificial Intelligence and Data Analytics",
    period: "2024 – 2027",
    //details: "",
  },
];

export const highlights = [
  {
    metric: "03+",
    title: "Portfolio projects",
    description:
      "Building full-stack and AI-powered products including my personal portfolio, Emergency AI, and an interview platform, with a focus on practical real-world applications.",
  },
  {
    metric: "MERN",
    title: "Full-stack development",
    description:
      "Hands-on with JavaScript, React, Node.js, Express, MongoDB, and modern web development technologies, with a strong interest in building dynamic and interactive applications.",
  },
  {
    metric: "04",
    title: "Certifications",
    description:
      "Completed certifications and programs including SQL (Basic), Introduction to Cybersecurity, a ServiceNow Virtual Internship, and Deloitte Cyber Job Simulation.",
  },
];