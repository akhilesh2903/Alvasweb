"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { mbaDepartmentData } from "./mbaData";
import { DepartmentActivityEntry, Faculty } from "@/lib/departments";
import dynamic from "next/dynamic";
import MbaExploreLoading from "./mbaExploreLoading";
import { motion, AnimatePresence } from "framer-motion";
import MobileExploreNav from "@/app/components/MobileExploreNav";
import Footer from "@/app/components/Footer";
import {
  Cpu,
  CircuitBoard,
  Lightbulb,
  ShieldCheck,
  Users,
  Zap,
  CheckCircle2,
  Award,
  Newspaper,
  Bell,
  Sparkles,
  BookOpen,
  Target,
  Trophy,
  GraduationCap,
  Medal,
  CalendarDays,
} from "lucide-react";
import NewsletterViewer from "@/app/components/NewsletterViewer";
import { MdClose } from "react-icons/md";

const SyllabusViewer = dynamic(
  () => import("@/app/components/SyllabusViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 flex items-center justify-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400">
        Loading Syllabus Viewer...
      </div>
    ),
  },
);

type AchievementCategory = "faculty" | "student";

type FacultyAchievement = {
  title: string;
  person: string;
  event: string;
  year: string;
  outcome: string;
  details: string;
};

type StudentAchievement = {
  names: string;
  event: string;
  category: string;
  outcome: string;
};

type StudentAchievementYear = {
  year: string;
  entries: StudentAchievement[];
};

const mbaFacultyAchievements: FacultyAchievement[] = [
  {
    title: "Best Paper Presentation - IIT Roorkee",
    person: "Mr. Neeraj Sudhakar Rai",
    event:
      "International Conference on Shaping the Future of Management Education for Sustainable Emerging Economies, Department of Management Studies, IIT Roorkee",
    year: "2024",
    outcome:
      "Presented the paper 'Impact of Fear of Missing Out Response on Purchase Intentions'.",
    details:
      "Recognized for quality research contribution in consumer behaviour and purchase intention studies.",
  },
  {
    title: "Best Paper Award - KIET School of Management",
    person: "Mr. Neeraj Sudhakar Rai",
    event:
      "7th Online International Conference on Advances in Global Business, Economics, Finance and Social Sciences",
    year: "2024",
    outcome: "Won Best Paper award.",
    details:
      "Award received for an international-level management research presentation.",
  },
  {
    title: "Best Professor in Human Resource Management",
    person: "Dr. Guruprasad Pai B",
    event: "Asia Pacific HRM Congress",
    year: "2021",
    outcome: "Conferred Best Professor in HRM on 26 October 2021.",
    details:
      "Award recognizes excellence in HR teaching, research output, and academic leadership.",
  },
  {
    title: "Young Achiever Award",
    person: "Dr. Guruprasad Pai B",
    event:
      "International Research Awards on Science, Technology and Management",
    year: "2022",
    outcome: "Received Young Achiever Award on 14-15 May 2022.",
    details:
      "Honored for research contributions and consistent academic performance in management studies.",
  },
  {
    title: "Best Paper Award - Innovation in Education Industry",
    person: "Mrs. Harshitha V Shetty",
    event:
      "One Day Online International Conference, Kala Research and Skill Training Organisation, Vijayapura",
    year: "2023",
    outcome:
      "Won Best Paper for 'A Study on Triangular Arbitrage Possibilities in Developed and Emerging Markets'.",
    details:
      "Award received on 26 November 2023 for research quality and practical relevance.",
  },
  {
    title: "Invited Talk - KPMG Network of Women, UK",
    person: "Dr. Claret Mendonca",
    event: "KPMG Network of Women, United Kingdom",
    year: "2018",
    outcome:
      "Invited speaker on women entrepreneurs and access to finance in Karnataka.",
    details:
      "Shared research insights and entrepreneurial journeys during the event on 19 April 2018.",
  },
  {
    title: "International Conference Presentation - Dublin",
    person: "Dr. Claret Mendonca",
    event:
      "Second Ireland India Institute Conference on South Asia 2018, Dublin City University, Ireland",
    year: "2018",
    outcome:
      "Presented paper: 'Challenges Facing Female Entrepreneurs Seeking Access to Finance in India'.",
    details: "Paper presented at the conference held on 26-27 April 2018.",
  },
  {
    title: "KPMG UK Event - Women Entrepreneurs Research Talk",
    person: "Dr. Claret Mendonca",
    event: "KPMG's Network of Women, United Kingdom",
    year: "2018",
    outcome:
      "Shared research on women entrepreneurs in SMEs and access to finance in Karnataka.",
    details:
      "Spoke on successful women entrepreneurs and challenges in entrepreneurship pathways during the 19 April 2018 UK event.",
  },
  {
    title: "Best Paper Award - SDG in Action",
    person: "Dr. Guruprasad Pai B and Mrs. Harshitha V Shetty",
    event:
      "One Day International Conference on Sustainable Development Goals in Action (MSNIM with INTI University, MAHE and Manipal School of Commerce and Economics)",
    year: "2025",
    outcome:
      "Won Best Paper for 'Tech Lives, Personal Struggles: A Narrative Exploration of Work-Life Balance in Indian Women with Reference to the IT Sector'.",
    details: "Award received at MSNIM, Mangalore on 26 June 2025.",
  },
  {
    title: "Keynote Speaker - Digital Transformation",
    person: "Dr. Catherine Nirmala",
    event:
      "International Conference on Digital Transformation in Commerce, Mahalakshmi Women's College of Arts and Science (Affiliated to University of Madras)",
    year: "2025",
    outcome:
      "Delivered keynote on 'Digitalisation of Commerce - An Indian Perspective'.",
    details: "Session delivered in Chennai on 30 July 2025.",
  },
  {
    title: "PhD Awardee",
    person: "Dr. Guruprasad Pai",
    event: "Faculty Achievement - PhD Awardee",
    year: "2024-25",
    outcome:
      "Completed PhD on faculty attrition in self-financing engineering institutes in Karnataka.",
    details:
      "Topic: 'A study on attrition rate of faculty members among self-financing engineering institutes in Karnataka'.",
  },
  {
    title: "Conference Participation - Environmental Sustainability",
    person: "Mrs. Priya Sequeira",
    event:
      "The Second International Conference on Environmental Sciences and Engineering for Sustainable Development, University of Technology and Applied Sciences",
    year: "2024-25",
    outcome:
      "Presented paper: Mediating Role of Human Behavior in Societal Influences on Environmental Sustainability.",
    details: "Conference country: Oman (2024).",
  },
  {
    title: "Conference Participation - NAV Method in Valuation",
    person: "Dr. Catherine",
    event:
      "International Conference on Sustainable Finance and Financial Resilience, Accountancy, Responsible Finance, Christ University",
    year: "2024-25",
    outcome:
      "Presented paper: A Critical Analysis of the Relevance of NAV Method in Valuation of Shares.",
    details: "Conference country: India (2024).",
  },
  {
    title: "Conference Participation - Career Break and Re-entry",
    person: "Dr. Catherine",
    event: "International Research Conference on Reimagining People Management",
    year: "2024-25",
    outcome:
      "Presented paper: Career Break and Re-entry Challenges Faced by Women with Reference to Karnataka.",
    details: "Conference country: India (2024).",
  },
  {
    title: "Conference Participation - Digital Marketing Impact",
    person: "Mrs. Harshitha V Shetty",
    event:
      "International Conference on Business and Banking Revolutions in Industry 4.0 Era, Mangalore University",
    year: "2024-25",
    outcome:
      "Presented paper: A Study on the Impact of Digital Marketing on Small and Medium Scale Food Industries.",
    details: "Conference country: India (2024).",
  },
  {
    title: "Conference Participation - Online Shopping Impact",
    person: "Mrs. Harshitha V Shetty",
    event:
      "International Conference on Business and Banking Revolutions in Industry 4.0 Era, Mangalore University",
    year: "2024-25",
    outcome:
      "Presented paper: A Study on the Impact of Online Shopping on Retail Business with Reference to Textile in India.",
    details: "Conference country: India (2024).",
  },
];

const mbaStudentAchievementsByYear: StudentAchievementYear[] = [
  {
    year: "2025-2027",
    entries: [
      {
        names: "Shetty Disha and Sujan D Shetty",
        event: "NITK",
        category: "Management Fest - Marketing",
        outcome: "Second Place",
      },
      {
        names: "Ujwal S Shetty and Ankitha Ansha Paradkar",
        event: "SDMIMD Mysore",
        category: "Management Fest - Marketing",
        outcome: "Third Place",
      },
      {
        names: "Ujwal S Shetty and Panchami",
        event: "NITK",
        category: "Management Fest - Marketing",
        outcome: "First Place",
      },
      {
        names: "Ujwal S Shetty",
        event: "AJ Institute of Management",
        category: "Management Fest - Marketing",
        outcome: "First Place",
      },
      {
        names: "Panchami Jogi and Ankitha Ansha Paradkar",
        event: "Mangalore University",
        category: "Management Fest - Marketing",
        outcome: "First Place",
      },
    ],
  },
  {
    year: "2024-2026",
    entries: [
      {
        names: "M K Ameya Upadhyaya and Dhanyashree",
        event: "St Agnes College, Mangalore",
        category: "Management Fest - Human Resource",
        outcome: "Achieved top position",
      },
      {
        names: "Krithik",
        event: "Reva Engineering College, Bangalore",
        category: "Karate",
        outcome: "Achievement recorded",
      },
      {
        names: "Samyak C Shetty",
        event: "Xavier Institute of Management and Entrepreneurship, Bangalore",
        category: "Photography / Reel Making / Movie Making",
        outcome: "Achievement recorded",
      },
    ],
  },
  {
    year: "2023-2025",
    entries: [
      {
        names: "Mervin J Kennedy, Adarsh V and Kotian Likhith",
        event: "Justice K S Hegde Institute of Management (JKSHIM), Nitte",
        category: "Management Fest - Marketing",
        outcome: "First Place",
      },
      {
        names: "K R Vivek and Suraksha S Rai",
        event: "Srinivas University, Pandeshwar, Mangalore",
        category: "Management Fest - Finance",
        outcome: "First Place",
      },
      {
        names: "K R Vivek and Deekshitha Poojary",
        event: "Srinivas Institute of Technology, Valachil, Mangalore",
        category: "Management Fest - Finance",
        outcome: "First Place",
      },
      {
        names: "K R Vivek and Deekshitha Poojary",
        event: "SIT Valachil, Mangalore",
        category: "Management Fest - Finance",
        outcome: "Second Place",
      },
      {
        names: "Nataraj J",
        event: "Senior Federation Cup 2023, Ranchi",
        category: "Athletics",
        outcome:
          "Participated; Dasara Sports State 2nd, Division 1st, District 1st, Taluk 1st, VTU Decathlon 3rd",
      },
      {
        names: "Shwetha Shenoy",
        event: "VTU State Level Ball Badminton Women's 2025-26",
        category: "Sports",
        outcome: "Runners Up",
      },
      {
        names: "Sharavan",
        event: "VTU Inter Collegiate Rest of Bengaluru Division",
        category: "Sports",
        outcome: "Secured Third Position",
      },
      {
        names: "MBA Team",
        event: "St Agnes College, Mangaluru - National Level Management Fest",
        category: "Overall Team",
        outcome: "Runners",
      },
      {
        names: "MBA Team",
        event:
          "Shri Dharmasthala Manjunatheshwara College of Business Management, Mangalore",
        category: "Overall Team",
        outcome: "Winners",
      },
      {
        names: "Sindhu",
        event: "VTU 26th State Level Inter Collegiate Athletic Meet 2024-26",
        category: "Pole Vault",
        outcome: "First Place",
      },
    ],
  },
  {
    year: "2022-2024",
    entries: [
      {
        names: "Shraddha S Shetty and Hithesh",
        event: "St Aloysius",
        category: "Management Fest - Human Resource",
        outcome: "Winning title",
      },
      {
        names: "Nithin, Suzana and Prahlad",
        event: "Shree Devi Institute of Technology",
        category: "Photography / Reel Making / Movie Making",
        outcome: "Winning title",
      },
      {
        names: "Sandeep, Adarsh and Jenisha",
        event: "Shree Devi Institute of Technology - ECHELON 2024",
        category: "Best Entrepreneurs",
        outcome: "Winning title",
      },
      {
        names: "Sandeep and Samyak",
        event: "NITK - INCIDENT 2024",
        category: "Marketing",
        outcome: "Second Prize",
      },
      {
        names: "Sandeep, Shravan and Rithesh",
        event: "SDM College of Business Management, Mangalore - Shreshta 2024",
        category: "Best Management Team",
        outcome: "Winning title",
      },
      {
        names:
          "Sushan S Shetty, Arjun S V, Rakshith V Shetty, Shrikantta Rao, Josith P Shetty, Nishanth S Sapaliga, HG Shamprasad, Sandeep Raviprasad Acharya, Shravan Acharya, Rithesh B, Yogish, Yash Raj and Jithesh",
        event: "SDM College of Business Management, Mangalore - Shreshta 2024",
        category: "Overall Runners",
        outcome: "Runners Up",
      },
      {
        names: "Sandeep, Keerthan, Shreshta, Divyashree and Rakshith",
        event: "Mangalore University Evening College - Equinox 2023",
        category: "Best Management Team",
        outcome: "Winning title",
      },
      {
        names: "Pranava Swaroopa",
        event: "Sri Devi MBA College",
        category: "Best Manager",
        outcome: "First Prize",
      },
      {
        names: "Pranava Swaroopa",
        event: "St Aloysius College of Management",
        category: "Best Manager",
        outcome: "First Prize",
      },
    ],
  },
  {
    year: "2026",
    entries: [
      {
        names: "Shetty Disha and Sujan D Shetty",
        event: "NITK Management Fest",
        category: "Marketing",
        outcome: "Second Place",
      },
      {
        names: "Ujwal S Shetty, Ankitha Ansha Paradkar",
        event: "SDMIMD Mysore",
        category: "Marketing",
        outcome: "Third Place",
      },
      {
        names: "Ujwal S Shetty and Panchami",
        event: "NITK",
        category: "Marketing",
        outcome: "First Place",
      },
      {
        names: "Ujwal S Shetty and Panchami",
        event: "AJ Institute of Management",
        category: "Marketing",
        outcome: "First Place",
      },
      {
        names: "Panchami Jogi and Ankitha Ansha Paradkar",
        event: "Mangalore University",
        category: "Marketing",
        outcome: "First Place",
      },
    ],
  },
  {
    year: "2025",
    entries: [
      {
        names: "Sindhu Raghupathi Bhat",
        event: "Pole Vault - JNN College of Engineering, Shivamogga",
        category: "Athletics",
        outcome: "First Place",
      },
      {
        names: "Natraj",
        event: "Decathlon - JNN College of Engineering, Shivamogga",
        category: "Athletics",
        outcome: "Third Place",
      },
      {
        names: "Kaushal Rao T J and Shrivastsa Gangadhar Hegde",
        event: "VTU State Level Youth Festival INTERACT 2025",
        category: "Folk Orchestra",
        outcome: "Second Place",
      },
      {
        names:
          "Shrivastsa Gangadhar Hegde, Revan Pinto, Josith P Shetty, Shrikantta Rao",
        event: "VTU State Level Youth Festival INTERACT 2025",
        category: "Skit",
        outcome: "First Place",
      },
      {
        names: "Mervin J K and Adarsh V",
        event: "Justice K S Hegde Institute of Management, Nitte",
        category: "MAR-QUEE",
        outcome: "First Place",
      },
      {
        names: "Vivek and Deekshitha",
        event: "Srinivas Institute of Technology, Mangalore",
        category: "Finance",
        outcome: "First Place",
      },
      {
        names: "Bhoomika Patil and Lohith Nayak",
        event: "Justice K S Hegde Institute of Management, Nitte",
        category: "HR Sphere",
        outcome: "Second Place",
      },
      {
        names: "Jithesh Devadiga",
        event: "Management Fest - SYNERGY, SDM College, Mangalore",
        category: "Judging",
        outcome: "Participated as Judge",
      },
      {
        names: "Jithesh Devadiga",
        event: "NITK, Surathkal",
        category: "Reel Making",
        outcome: "Second Place",
      },
      {
        names: "Sunil and Prithi Hegde",
        event: "Srinivas Institute of Technology, Mangalore",
        category: "Public Relation",
        outcome: "Second Place",
      },
    ],
  },
  {
    year: "2024",
    entries: [
      {
        names: "Sandeep, Adarsh and Jenisha",
        event: "Shree Devi Institute of Technology - ECHELON 2024",
        category: "Best Entrepreneurs",
        outcome: "Winners",
      },
      {
        names: "Sandeep and Samyak",
        event: "NITK - INCIDENT 2024",
        category: "Marketing",
        outcome: "Second Place",
      },
      {
        names: "Sandeep, Shravan and Rithesh",
        event: "SDM College of Business Management, Mangalore - Shreshta 2024",
        category: "Best Management Team",
        outcome: "Winners",
      },
      {
        names:
          "Sushan S Shetty, Arjun S V, Rakshith V Shetty, Shrikantta Rao and team",
        event: "SDM College of Business Management, Mangalore - Shreshta 2024",
        category: "Overall Runners",
        outcome: "Runners Up",
      },
      {
        names: "Pranava Swaroopa",
        event:
          "Sridevi Institute of Technology and St. Aloysius College of Management",
        category: "Best Manager",
        outcome: "First Place",
      },
      {
        names: "Nataraj",
        event: "Dasara Sports and Division Athletics Meets",
        category: "4 x 400 Relay / Decathlon",
        outcome:
          "Multiple top positions including First Place and State podium",
      },
      {
        names: "Sathyajit H Rao and Shreevastsa",
        event: "AJ Institute of Engineering and Technology, Mangalore",
        category: "MAD AD's",
        outcome: "Second Place",
      },
      {
        names: "Sandeep Raviprasad, Adarsh and Jenisha Lasard",
        event: "Sridevi Institute of Technology, Mangalore",
        category: "Spark Tank",
        outcome: "First Place",
      },
      {
        names: "Akshatha M and Prajna",
        event: "Sridevi Institute of Technology, Mangalore",
        category: "Brand Rangoli",
        outcome: "Second Place",
      },
      {
        names: "Prahlad V Acharya, Pooja C and Suzana Sheikh",
        event: "Sridevi Institute of Technology, Mangalore",
        category: "Movie Making",
        outcome: "Second Place",
      },
    ],
  },
  {
    year: "2023",
    entries: [
      {
        names: "Satyajith",
        event: "Mangalore University Directorate of Students Welfare",
        category: "Light Vocal Solo",
        outcome: "First Place",
      },
      {
        names: "Satyajith",
        event: "Mangalore University Directorate of Students Welfare",
        category: "Folk Orchestra",
        outcome: "First Place",
      },
      {
        names: "Nithin, Suzana and Prahlad",
        event: "Shree Devi Institute of Technology",
        category: "Photography / Reel Making / Movie Making",
        outcome: "Winners in management fest events",
      },
    ],
  },
];

const mbaNptelAchievementsByBatch = [
  {
    batch: "2024-26",
    results: [
      "Pushparaj J Shetty - Financial Statement Analysis and Reporting - 78%",
      "Ria Natasha Rodrigues - Business Analytics for Management Decision - 76%",
      "Sapthami - Consumer Behaviour - 75%",
    ],
  },
  {
    batch: "2023-25",
    results: [
      "K R Vivek - Financial Accounting and Analysis - 82%",
      "Swathi Shenoy - Business and Sustainable Development - 76%",
      "Rashmi Priya N - Advances in Strategic Human Resource Management - 72%",
    ],
  },
  {
    batch: "2022-24",
    results: [
      "Shreya - Financial Accounting and Analysis - 91.60%",
      "Chethan - Financial Accounting and Analysis - 78.80%",
      "Shreshta Jain - Financial Accounting and Analysis - 77.50%",
    ],
  },
];

const mbaFacultySubmittedNotesByYear = [
  {
    year: "2018",
    note: `Dr Claret Mendonca was invited to speak on her research, "Women Entrepreneurs in Small and Medium Enterprises and Their Access to Finance" at KPMG's Network of Women, UK, hosted on 19 April 2018.

Event: Second Ireland India Institute Conference on South Asia 2018, Dublin City University, Dublin, Ireland.
Dr Claret Mendonca presented "Challenges Facing Female Entrepreneurs Seeking Access to Finance in India" on 26 and 27 April 2018.

Event: KPMG's Network of Women, United Kingdom.
She also shared stories of successful women entrepreneurs and challenges faced along the path of entrepreneurship.`,
  },
  {
    year: "2021",
    note: `Dr. Guruprasad Pai B was awarded Best Professor in HRM by Asia Pacific HRM Congress.
The award was conferred on 26 October 2021 for outstanding contribution to teaching, research, and academic leadership in Human Resource Management.`,
  },
  {
    year: "2022",
    note: `Event: International Research Awards on Science, Technology and Management.
Dr. Guruprasad Pai B received the Young Achiever Award on 14 and 15 May 2022 for significant research contributions and academic excellence in management.`,
  },
  {
    year: "2023",
    note: `Name: Mrs Harshitha V Shetty.
Event: One Day Online International Conference on Innovation in Education Industry organized by Kala Research and Skill Training Organisation, Vijayapura.
Received Best Paper Award for "A Study on Triangular Arbitrage Possibilities in Developed and Emerging Markets" on 26 November 2023.`,
  },
  {
    year: "2024",
    note: `Mr. Neeraj Sudhakar Rai presented the technical paper "Impact of Fear of Missing Out Response on Purchase Intentions" at an International Conference on Shaping the Future of Management Education for Sustainable Emerging Economies organized by Department of Management Studies, IIT Roorkee.

The same work won Best Paper in the 7th Online International Conference on Advances in Global Business, Economics, Finance and Social Sciences conducted by KIET School of Management, Delhi NCR.`,
  },
  {
    year: "2024-25",
    note: `ACHIEVEMENTS OF FACULTIES - Ph.D. Awardee 2024-25:
Dr. Guruprasad Pai.
Topic: "A study on attrition rate of faculty members among self-financing engineering institutes in Karnataka."

List of Faculties Participated in National and International Conference during 2024-25:
1. Mrs. Priya Sequeira - "Mediating Role of Human Behavior in Societal Influences on Environmental Sustainability" - The Second International Conference on Environmental Sciences and Engineering for Sustainable Development - Oman (2024).
2. Dr Catherine - "A critical analysis of the relevance of NAV method in valuation of shares" - International Conference on Sustainable Finance and Financial Resilience, Christ University - India (2024).
3. Dr Catherine - "Career break and re-entry challenges faced by women with reference to Karnataka" - International Research Conference on Reimagining People Management - India (2024).
4. Mrs. Harshitha V Shetty - "A study on the impact of digital marketing on small and medium scale food industries" - International Conference on Business and Banking Revolutions in Industry 4.0 Era, Mangalore University - India (2024).
5. Mrs. Harshitha V Shetty - "A study on the impact of online shopping on retail business with reference to textile in India" - International Conference on Business and Banking Revolutions in Industry 4.0 Era, Mangalore University - India (2024).`,
  },
  {
    year: "2025",
    note: `Name: Dr Guruprasad Pai B and Mrs Harshitha V Shetty.
Event: One Day International Conference on Sustainable Development Goals in Action held at MSNIM in collaboration with INTI International University, Malaysia and in association with Manipal School of Commerce and Economics and MAHE.
Received Best Paper Award for "Tech Lives, Personal Struggles: A Narrative Exploration of Work-Life Balance in Indian Women with Reference to the IT Sector" on 26 June 2025.

Name: Dr Catherine Nirmala.
Event: International Conference on Digital Transformation in Commerce organized by Mahalakshmi Women's College of Arts and Science (Affiliated to University of Madras).
Delivered keynote on "Digitalisation of Commerce - An Indian Perspective" on 30 July 2025.`,
  },
];

const mbaStudentSubmittedNotesByYear = [
  {
    year: "2022-2024",
    note: `Student Achievements (Year 2022-2024):
Shraddha S Shetty and Hithesh - Human Resource - St Aloysius.
Nithin, Suzana and Prahlad - Photography, Reel Making and Movie Making - Shree Devi Institute of Technology.
Sandeep, Adarsh, Jenisha - Best Entrepreneurs - Shree Devi Institute of Technology (ECHELON 2024).
Sandeep and Samyak - Marketing - NITK INCIDENT 2024 (Won 2nd Prize).
Sandeep, Shravan and Rithesh - Best Management Team - SDM, Mangalore (Shreshta 2024).
Sushan S Shetty, Arjun SV, Rakshith V Shetty, Shrikantta Rao, Josith P Shetty, Nishanth S Sapaliga, HG Shamprasad, Sandeep Raviprasad Acharya, Shravan Acharya, Rithesh B, Yogish, Yash Raj, Jithesh - Overall Runners - SDM, Mangalore (Shreshta 2024).
Sandeep, Keerthan, Shreshta, Divyashree, Rakshith - Best Management Team - Mangalore University Evening College (Equinox 2023).
Pranava Swaroopa - Best Manager - Sri Devi MBA College (1st Prize).
Pranava Swaroopa - Best Manager - St Aloysius College of Management (1st Prize).`,
  },
  {
    year: "2023-2025",
    note: `Student Achievements (Year 2023-2025):
Mervin J Kennedy, Adarsh V and Kotian Likhith - Marketing - JKSHIM, Nitte (1st Prize).
K R Vivek, Suraksha S Rai, Deekshitha Poojary - Finance - Srinivas University / Srinivas Institute of Technology (1st Prize in both events).
K R Vivek and Deekshitha Poojary - Finance - SIT Valachil (2nd Prize).
Nataraj J - Senior Federation Cup 2023 Ranchi participation; Dasara Sports State 2nd; Division 1st; District 1st; Taluk 1st; VTU Decathlon 3rd.
Shwetha Shenoy - VTU State Level Ball Badminton Women's 2025-26 - Runners Up.
Sharavan - VTU Inter Collegiate Rest of Bengaluru Division - Third Position.
Overall Runners - St Agnes College, Mangaluru National Level Management Fest.
Overall Winners - SDM College of Business Management, Mangalore.
Sindhu - VTU 26th State Level Inter Collegiate Athletic Meet 2024-26 - Pole Vault - First Place.`,
  },
  {
    year: "2024-2026",
    note: `Student Achievements (Year 2024-2026):
M K Ameya Upadhyaya and Dhanyashree - Human Resource - St Agnes College Mangalore.
Krithik - Karate - Reva Engineering College Bangalore.
Samyak C Shetty - Photography, Reel Making and Movie Making - Xavier Institute of Management and Entrepreneurship, Bangalore.`,
  },
  {
    year: "2025-2027",
    note: `Student Achievements (Year 2025-2027):
Shetty Disha and Sujan D Shetty - Marketing - NITK.
Ujwal S Shetty and Ankitha Ansha Paradkar - Marketing - SDMIMD Mysore (3rd Prize).
Ujwal S Shetty and Panchami - Marketing - NITK (1st Prize).
Ujwal S Shetty - Marketing - AJ Institute of Management (1st Prize).
Panchami Jogi and Ankitha Ansha Paradkar - Marketing - Mangalore University (1st Prize).`,
  },
  {
    year: "2026",
    note: `ACHIEVEMENTS OF STUDENTS 2026:
1. Shetty Disha and Sujan D Shetty - NITK Management Fest Marketing - Second Place.
2. Ujwal S Shetty and Ankitha Ansha Paradkar - SDMIMD Mysore Management Fest Marketing - Third Place.
3. Ujwal S Shetty and Panchami - NITK Management Fest Marketing - First Place.
4. Ujwal S Shetty and Panchami - AJ Institute of Management Management Fest Marketing - First Place.
5. Panchami Jogi and Ankitha Ansha Paradkar - Mangalore University Management Fest Marketing - First Place.
6. Ujwal S Shetty and Panchami - Shree Devi Institute of Technology ECHELON 2024 Management Fest Marketing - First Place.`,
  },
  {
    year: "2025",
    note: `ACHIEVEMENTS OF STUDENTS 2025:
1. Sindhu Raghupathi Bhat - Pole Vault, JNN College of Engineering Shivamogga - First Place.
2. Natraj - Decathlon, JNN College of Engineering Shivamogga - Third Place.
3. Kaushal Rao T J - Folk Orchestra, VTU 2024 State Level Youth Festival INTERACT 2025 - Second Place.
4. Shrivastsa Gangadhar Hegde - Folk Orchestra, VTU 2024 State Level Youth Festival INTERACT 2025 - Second Place.
5. Shrivastsa Gangadhar Hegde - Skit, VTU 2024 State Level Youth Festival INTERACT 2025 - First Place.
6. Revan Pinto - Skit, VTU 2024 State Level Youth Festival INTERACT 2025 - First Place.
7. Josith P Shetty - Skit, VTU 2024 State Level Youth Festival INTERACT 2025 - First Place.
8. Shrikantta Rao - Skit, VTU 2024 State Level Youth Festival INTERACT 2025 - First Place.
9. Jithesh Devadiga - Judge in Management Fest SYNERGY SDM College Mangalore.
10. Jithesh Devadiga - Reel Making, NITK Surathkal - Second Place.
11. Sunil - Public Relation, Srinivas Institute of Technology Mangalore - Second Place.
12. Prithi Hegde - Public Relation, Srinivas Institute of Technology Mangalore - Second Place.
13. Vivek - Finance, Srinivas Institute of Technology Mangalore - First Place.
14. Deekshitha - Finance, Srinivas Institute of Technology Mangalore - First Place.
15. Bhoomika Patil - HR Sphere, Justice K S Hegde Institute of Management Nitte - Second Place.
16. Lohith Nayak - HR Sphere, Justice K S Hegde Institute of Management Nitte - Second Place.
17. Mervin JK - MAR-QUEE, Justice K S Hegde Institute of Management Nitte - First Place.
18. Adarsh V - MAR-QUEE, Justice K S Hegde Institute of Management Nitte - First Place.`,
  },
  {
    year: "2024",
    note: `ACHIEVEMENTS OF STUDENTS 2024:
1. Natraj - 4 x 400 metre Relay, Moodabidri Dasara Sports - First Place.
2. Natraj - 4 x 400 metre Relay, Mysore Division Dasara Sports - First Place.
3. Natraj - 4 x 400 metre Relay, Dasara CM Cup - Second Place.
4. Sathyajit H Rao - MAD AD's, AJ Institute of Engineering and Technology Mangalore - Second Place.
5. Shreevastsa - MAD AD's, AJ Institute of Engineering and Technology Mangalore - Second Place.
6. Pranava Swaroopa - Best Manager, Sridevi Institute of Technology Mangalore - First Place.
7. Sandeep Raviprasad - Spark Tank, Sridevi Institute of Technology Mangalore - First Place.
8. Adarsh - Spark Tank, Sridevi Institute of Technology Mangalore - First Place.
9. Jenisha Lasard - Spark Tank, Sridevi Institute of Technology Mangalore - First Place.
10. Akshatha M - Brand Rangoli, Sridevi Institute of Technology Mangalore - Second Place.
11. Prajna - Brand Rangoli, Sridevi Institute of Technology Mangalore - Second Place.
12. Prahlad V Acharya - Movie Making, Sridevi Institute of Technology Mangalore - Second Place.
13. Pooja C - Movie Making, Sridevi Institute of Technology Mangalore - Second Place.
14. Suzana Sheikh - Movie Making, Sridevi Institute of Technology Mangalore - Second Place.`,
  },
  {
    year: "2023",
    note: `ACHIEVEMENTS OF STUDENTS 2023:
1. Satyajith - Light Vocal Solo, Mangalore University Directorate of Students Welfare - First Place.
2. Satyajith - Folk Orchestra, Mangalore University Directorate of Students Welfare - First Place.`,
  },
  {
    year: "NPTEL",
    note: `NPTEL COURSE ACHIEVEMENTS:
2024-26 Batch: Pushparaj J Shetty (Financial Statement Analysis and Reporting - 78%), Ria Natasha Rodrigues (Business Analytics for Management Decision - 76%), Sapthami (Consumer Behaviour - 75%).
2023-25 Batch: K R Vivek (Financial Accounting and Analysis - 82%), Swathi Shenoy (Business and Sustainable Development - 76%), Rashmi Priya N (Advances in Strategic Human Resource Management - 72%).
2022-24 Batch: Shreya (Financial Accounting and Analysis - 91.60%), Chethan (Financial Accounting and Analysis - 78.80%), Shreshta Jain (Financial Accounting and Analysis - 77.50%).

Additional listing repeated in submission:
2022-24: First Place Shreya (91.60%), Second Place Chethan (78.80%), Second Place Chethan (78.80%).
2023-25: First Place K R Vivek (82%), Second Place Swathi Shenoy (76%), Second Place Rashmi Priya N (72%).
2024-26: First Place Pushparaj J Shetty (78%), Second Place Ria Natasha Rodrigues (76%), Second Place Sapthami (75%).`,
  },
];

export default function MbaExploreContent() {
  const department = mbaDepartmentData;

  const [activeTab, setActiveTab] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Faculty Section States
  const [activeFacultyIndex, setActiveFacultyIndex] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [isFacultyModalOpen, setIsFacultyModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeActivityIndex, setActiveActivityIndex] = useState<number | null>(
    null,
  );
  const [achievementCategory, setAchievementCategory] =
    useState<AchievementCategory>("faculty");

  useEffect(() => {
    // Show contents
    setIsMounted(true);

    // Set page title
    document.title = `Explore ${department.name} | AIET`;

    // Scroll header effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [department.name]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const openFacultyModal = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setIsFacultyModalOpen(true);
    setOpenAccordion(null);
  };

  useEffect(() => {
    if (activeTab !== "activities") {
      setActiveActivityIndex(null);
    }

    if (activeTab !== "achievements") {
      setAchievementCategory("faculty");
    }
  }, [activeTab]);

  const tabs = [
    { id: "about", label: "ABOUT" },
    { id: "thrust", label: "THRUST AREA" },
    { id: "peo", label: "(PEO's, PO's, PSO'S)" },
    { id: "syllabus", label: "SCHEME & SYLLABUS" },
    { id: "placements", label: "PLACEMENT" },
    { id: "research", label: "RESEARCH AND PUBLICATION" },
    { id: "facultyStaff", label: "FACULTY AND STAFF" },
    { id: "facilities", label: "FACILITIES" },
    { id: "workshop", label: "WORKSHOP AND CONFERENCE" },
    { id: "clubs", label: "PROFESSIONAL BODIES" },
    { id: "achievements", label: "ACHIEVEMENTS" },
    { id: "activities", label: "DEPARTMENT ACTIVITIES" },
    { id: "newsletter", label: "E-NEWSLETTER" },
  ];

  const currentData = department.exploreData?.[
    activeTab as keyof typeof department.exploreData
  ] || {
    title: "",
    body: "Content not available for this section.",
    highlights: [],
  };

  let activeActivity: DepartmentActivityEntry | null = null;
  if (
    activeTab === "activities" &&
    activeActivityIndex !== null &&
    currentData.entries?.[activeActivityIndex]
  ) {
    activeActivity = currentData.entries[
      activeActivityIndex
    ] as DepartmentActivityEntry;
  }

  const facultyYearOrder = [
    ...new Set(mbaFacultyAchievements.map((a) => a.year)),
  ].sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

  const facultyAchievementsByYear = facultyYearOrder.map((year) => ({
    year,
    records: mbaFacultyAchievements.filter((item) => item.year === year),
  }));

  if (!isMounted) {
    return <MbaExploreLoading />;
  }

  return (
    <>
      <style jsx global>{`
        .page-bg {
          background:
            radial-gradient(
              circle at top left,
              {names: "Ujwal S Shetty and Panchami",
              event: "Shree Devi Institute of Technology - ECHELON 2024",
              category: "Management Fest - Marketing",
              outcome: "First Place",
              },
              rgba(251, 191, 36, 0.12),
              transparent 55%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(59, 130, 246, 0.08),
              transparent 55%
            ),
            linear-gradient(to bottom, #fffbf0, #fef9f3, #fffbf0);
          min-height: 100vh;
          color: #1a1a1a;
        }

        .tab-btn.active {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(139, 92, 246, 0.6);
          color: #4338ca;
        }

        .content-enter {
          animation: slideInRight 0.5s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .header-scrolled {
          background-color: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(20px) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05) !important;
          padding-top: 8px !important;
          padding-bottom: 8px !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* Header */}
      <header
        id="main-header"
        className={`fixed top-0 w-full z-50 text-white pt-4 pb-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-500 ${
          isScrolled ? "header-scrolled" : ""
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12 flex justify-between items-center relative">
          <Link href="/">
            <div className="flex items-center gap-3 lg:gap-4 group cursor-pointer z-50">
              <img
                id="logo-img"
                src="https://alvascentralschool001.42web.io/wp-content/uploads/2026/01/logo.png"
                alt="Alvas Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />

              <div className="flex flex-col justify-center">
                <h1 className="font-serif text-xl md:text-2xl font-black leading-none tracking-tight text-blue-900">
                  ALVA&apos;S
                </h1>
                <span className="text-[8px] md:text-[9px] font-bold tracking-[0.1em] uppercase opacity-90 mt-0.5 text-blue-900">
                  INSTITUTE OF ENGINEERING & TECHNOLOGY
                </span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:block text-right">
              <div className="text-[9px] font-bold tracking-[0.2em] text-blue-900/40 uppercase mb-0.5">
                Explore Page
              </div>
              <div className="font-serif text-xl font-black text-blue-900 leading-none">
                MBA Highlights
              </div>
            </div>
            <Link
              href="/academics/mba"
              className="flex items-center gap-2 bg-[#4f46e5] text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition-all duration-300 font-bold text-sm shadow-lg shadow-indigo-200"
            >
              <FaArrowLeft className="text-xs" /> Back
            </Link>
          </div>
        </nav>
      </header>

      {/* Top padding for fixed header */}
      <div className="h-20 md:h-24"></div>

      {/* Main Content */}
      <div className="page-bg">
        <div className="max-w-[1500px] mx-auto px-3 md:px-5 py-10 grid lg:grid-cols-12 gap-6">
          {/* LEFT SIDE: Sidebar (Desktop) / Hamburger Menu (Mobile) */}
          <aside className="lg:col-span-3">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block bg-white border border-gray-300 rounded-3xl p-4 sticky top-28 shadow-md backdrop-blur-xl max-h-[calc(100vh-9rem)] overflow-y-auto overscroll-contain">
              <h3 className="text-lg font-black text-indigo-700 mb-4">
                Explore Tabs
              </h3>

              <div className="flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-btn w-full text-left px-4 py-3 rounded-2xl border border-gray-300 hover:bg-gray-200 transition font-bold text-gray-900 ${
                      activeTab === tab.id
                        ? "active bg-gray-100"
                        : "bg-gray-100"
                    }`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <MobileExploreNav
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={handleTabClick}
              />
            </div>
          </aside>

          {/* RIGHT SIDE: Content Area */}
          <section className="lg:col-span-9 bg-white border border-gray-300 rounded-3xl p-6 shadow-md overflow-hidden min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {activeTab === "about" ? (
                  <div className="space-y-8">
                    <div className="relative inline-block">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-tight uppercase"
                      >
                        {currentData?.title}
                      </motion.h2>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>

                    <div
                      className="prose prose-indigo max-w-none text-gray-700 text-lg leading-relaxed font-medium"
                      dangerouslySetInnerHTML={{
                        __html: currentData?.body || "",
                      }}
                    />

                    <div className="mt-12">
                      <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                        <Award className="text-indigo-600 w-6 h-6" />
                        KEY HIGHLIGHTS
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentData?.highlights?.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gradient-to-br from-white to-indigo-50/30 p-6 rounded-2xl border border-indigo-100 shadow-sm hover:border-indigo-300 transition-all group"
                          >
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                              {idx === 0 && <Cpu className="w-6 h-6" />}
                              {idx === 1 && (
                                <CircuitBoard className="w-6 h-6" />
                              )}
                              {idx === 2 && <Zap className="w-6 h-6" />}
                              {idx > 2 && <CheckCircle2 className="w-6 h-6" />}
                            </div>
                            <p className="text-gray-700 font-bold text-sm leading-relaxed">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : activeTab === "thrust" ? (
                  <div className="space-y-8">
                    <div className="relative inline-block">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-tight uppercase"
                      >
                        {department.exploreData?.thrust?.title}
                      </motion.h2>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      {department.exploreData?.thrust?.body}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mt-12">
                      {department.exploreData?.thrust?.highlights?.map(
                        (item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{
                              opacity: 0,
                              x: idx % 2 === 0 ? -20 : 20,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{
                              scale: 1.02,
                              backgroundColor: "rgba(79, 70, 229, 0.05)",
                            }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-3xl border border-gray-200 bg-white shadow-sm flex items-center gap-6 group hover:border-indigo-300 transition-all"
                          >
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              {idx === 0 && (
                                <CircuitBoard className="w-7 h-7" />
                              )}
                              {idx === 1 && <Lightbulb className="w-7 h-7" />}
                              {idx === 2 && <Cpu className="w-7 h-7" />}
                              {idx === 3 && <Zap className="w-7 h-7" />}
                            </div>
                            <div>
                              <h4 className="text-xl font-black text-gray-900 leading-tight">
                                {item.replace("â€¢\t", "")}
                              </h4>
                            </div>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>
                ) : activeTab === "peo" ? (
                  <div className="space-y-12 pb-10">
                    <div className="relative inline-block">
                      <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-2 leading-tight uppercase"
                      >
                        {department.exploreData?.peo?.title}
                      </motion.h2>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                      ></motion.div>
                    </div>

                    {/* POs SECTION */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                        <Target className="text-indigo-600 w-8 h-8" />
                        PROGRAM OUTCOMES (POs)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {department.exploreData?.peo?.body
                          ?.split("\n")
                          .filter((l) => /^PO\d+:/.test(l.trim()))
                          .map((line, idx) => {
                            const [code, ...rest] = line.split(":");
                            const title = rest[0];
                            const description = rest.slice(1).join(":");
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all group"
                              >
                                <div className="flex gap-4">
                                  <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-600 text-white font-black flex items-center justify-center shadow-lg shadow-indigo-200">
                                    {code.trim()}
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors uppercase text-sm mb-1">
                                      {title.trim()}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                      {description.trim()}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>

                    {/* PEOs SECTION */}
                    <div className="space-y-6 pt-6 pt-10 border-t border-gray-100">
                      <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                        <Users className="text-purple-600 w-8 h-8" />
                        PROGRAM EDUCATIONAL OBJECTIVES (PEOs)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {department.exploreData?.peo?.body
                          ?.split("\n")
                          .filter((l) => /^PEO\d+:/.test(l.trim()))
                          .map((line, idx) => {
                            const [code, ...rest] = line.split(":");
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-3xl border border-purple-100 bg-purple-50/30 flex gap-5 group hover:border-purple-300 transition-all"
                              >
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-600 text-white font-black flex items-center justify-center shadow-lg shadow-purple-200">
                                  {code.trim()}
                                </div>
                                <p className="text-sm text-gray-800 font-bold leading-relaxed self-center">
                                  {rest.join(":").trim()}
                                </p>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>

                    {/* PSOs SECTION */}
                    <div className="space-y-6 pt-6 pt-10 border-t border-gray-100">
                      <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                        <ShieldCheck className="text-blue-600 w-8 h-8" />
                        PROGRAM SPECIFIC OUTCOMES (PSOs)
                      </h3>
                      <div className="grid gap-4">
                        {department.exploreData?.peo?.body
                          ?.split("\n")
                          .filter((l) => /^PSO\d+:/.test(l.trim()))
                          .map((line, idx) => {
                            const [code, ...rest] = line.split(":");
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-[2rem] border border-blue-100 bg-blue-50/30 flex gap-6 group hover:border-blue-300 transition-all items-center"
                              >
                                <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                  {code.trim().replace("PSO", "")}
                                </div>
                                <p className="text-base text-gray-800 font-black leading-relaxed">
                                  {rest.join(":").trim()}
                                </p>
                              </motion.div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-indigo-700 mb-3 uppercase tracking-tight">
                      {currentData?.title || "EXPLORE"}
                    </h2>

                    {activeTab === "facultyStaff" ? (
                      <div className="space-y-12">
                        {/* HOD SECTION */}
                        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-lg relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full blur-3xl -mr-24 -mt-24 opacity-50"></div>
                          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                            <div className="w-full md:w-1/3">
                              <div className="relative">
                                <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] rotate-6 scale-95 opacity-20"></div>
                                <img
                                  src={department.hod.photo}
                                  className="w-full h-[320px] object-cover object-top rounded-[2rem] shadow-xl relative z-10 border-4 border-white"
                                  alt={department.hod.name}
                                />
                              </div>
                            </div>
                            <div className="w-full md:w-2/3">
                              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1 serif">
                                {department.hod.name}
                              </h2>
                              <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4">
                                {department.hod.designation}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs md:text-sm">
                                <div className="space-y-1.5">
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Qualification:
                                    </span>{" "}
                                    {department.hod.qualification}
                                  </p>
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Experience:
                                    </span>{" "}
                                    {department.hod.experience}
                                  </p>
                                </div>
                                <div className="space-y-1.5">
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Email:
                                    </span>{" "}
                                    {department.hod.email}
                                  </p>
                                  <p className="text-gray-500 flex items-center gap-2">
                                    <span className="font-bold text-gray-900">
                                      Phone:
                                    </span>{" "}
                                    {department.hod.phone}
                                  </p>
                                </div>
                              </div>
                              <div className="max-h-28 overflow-y-auto pr-2 custom-scrollbar text-gray-600 leading-relaxed italic border-l-4 border-indigo-100 pl-4 mb-6 text-sm whitespace-pre-line">
                                {department.hod.message}
                              </div>
                              <button
                                onClick={() => openFacultyModal(department.hod)}
                                className="bg-gray-900 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-gray-800 transition shadow-md text-sm active:scale-95"
                              >
                                View Profile
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* FACULTY SECTION */}
                        <div className="relative">
                          <div className="mb-6">
                            <h2 className="text-2xl font-black text-gray-900 serif">
                              Our Expert Faculty
                            </h2>
                            <p className="text-gray-500 font-medium text-sm mt-0.5">
                              Nurturing minds with experience and dedication
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-1">
                            {department.faculty.map(
                              (member: Faculty, i: number) => (
                                <div
                                  key={i}
                                  className="bg-white rounded-[2rem] p-4 shadow-md border border-gray-100/50 hover:shadow-xl transition-all duration-500 group cursor-pointer"
                                  onClick={() => openFacultyModal(member)}
                                >
                                  <div className="relative overflow-hidden rounded-2xl mb-5 aspect-square">
                                    <img
                                      src={member.photo}
                                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                      alt={member.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                  </div>
                                  <h3 className="text-base font-black text-gray-900 serif mb-0.5 group-hover:text-indigo-600 transition-colors">
                                    {member.name}
                                  </h3>
                                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                                    {member.designation}
                                  </p>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {activeTab === "newsletter" ? (
                          <NewsletterViewer
                            data={[]}
                            backPath="/academics/mba/explore"
                            departmentName="MBA"
                          />
                        ) : activeTab === "syllabus" ? (
                          <SyllabusViewer
                            syllabusLinks={currentData.syllabusLinks}
                          />
                        ) : activeTab === "activities" &&
                          currentData?.entries &&
                          currentData.entries.length > 0 ? (
                          <div className="space-y-8">
                            {currentData?.body?.trim() && (
                              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                                {currentData.body}
                              </p>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {currentData.entries.map(
                                (activity: DepartmentActivityEntry, idx) => (
                                  <motion.button
                                    key={`${activity.title}-${idx}`}
                                    type="button"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.25,
                                      delay: idx * 0.03,
                                    }}
                                    onClick={() =>
                                      setActiveActivityIndex((prev) =>
                                        prev === idx ? null : idx,
                                      )
                                    }
                                    aria-expanded={activeActivityIndex === idx}
                                    className="text-left group"
                                  >
                                    <div className="relative h-48 rounded-[2rem] overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
                                      {activity.coverImage?.src ? (
                                        <img
                                          src={activity.coverImage.src}
                                          alt={
                                            activity.coverImage.alt ||
                                            activity.title
                                          }
                                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                          loading="lazy"
                                        />
                                      ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100" />
                                      )}

                                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

                                      <div className="absolute top-0 left-0 right-0 p-4">
                                        <h3 className="text-white text-base md:text-lg font-black leading-snug">
                                          {activity.title}
                                        </h3>
                                      </div>

                                      {activity.tags?.length ? (
                                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-2">
                                          {activity.tags
                                            .slice(0, 3)
                                            .map((tag) => (
                                              <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-black uppercase tracking-widest text-gray-800"
                                              >
                                                {tag}
                                              </span>
                                            ))}
                                        </div>
                                      ) : null}
                                    </div>
                                  </motion.button>
                                ),
                              )}
                            </div>
                          </div>
                        ) : activeTab === "achievements" ? (
                          <div className="space-y-8">
                            {currentData?.body?.trim() && (
                              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                                {currentData.body}
                              </p>
                            )}

                            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-indigo-50/40 p-4 md:p-6">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                  <p className="text-[11px] font-black uppercase tracking-[0.14em] text-indigo-700">
                                    Achievement Explorer
                                  </p>
                                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-1">
                                    MBA Department Performance Highlights
                                  </h3>
                                </div>

                                <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200 gap-1.5 w-full md:w-auto">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setAchievementCategory("faculty")
                                    }
                                    className={`flex-1 md:flex-none px-4 py-2.5 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all ${
                                      achievementCategory === "faculty"
                                        ? "bg-indigo-600 text-white shadow"
                                        : "bg-transparent text-gray-700 hover:bg-white"
                                    }`}
                                  >
                                    Faculty Achievements
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setAchievementCategory("student")
                                    }
                                    className={`flex-1 md:flex-none px-4 py-2.5 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all ${
                                      achievementCategory === "student"
                                        ? "bg-indigo-600 text-white shadow"
                                        : "bg-transparent text-gray-700 hover:bg-white"
                                    }`}
                                  >
                                    Student Achievements
                                  </button>
                                </div>
                              </div>
                            </div>

                            {achievementCategory === "faculty" ? (
                              <>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-indigo-600">
                                      Total Faculty Records
                                    </p>
                                    <p className="text-2xl font-black text-indigo-900 mt-2">
                                      {mbaFacultyAchievements.length}
                                    </p>
                                  </div>
                                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-amber-700">
                                      Year Buckets
                                    </p>
                                    <p className="text-2xl font-black text-amber-900 mt-2">
                                      {facultyAchievementsByYear.length}
                                    </p>
                                  </div>
                                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-emerald-700">
                                      Focus Areas
                                    </p>
                                    <p className="text-sm font-black text-emerald-900 mt-2 leading-relaxed">
                                      Research, keynote talks, HRM excellence,
                                      and best paper awards
                                    </p>
                                  </div>
                                </div>

                                <div className="space-y-5">
                                  {facultyAchievementsByYear.map((group) => (
                                    <section
                                      key={group.year}
                                      className="rounded-3xl border border-gray-200 overflow-hidden bg-white"
                                    >
                                      <div className="px-5 py-4 bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-200 flex items-center justify-between gap-3">
                                        <h4 className="text-lg font-black text-gray-900 flex items-center gap-2.5">
                                          <CalendarDays className="w-5 h-5 text-indigo-700" />
                                          Faculty Achievements - {group.year}
                                        </h4>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-indigo-100 text-xs font-black uppercase tracking-wide text-indigo-700">
                                          <Trophy className="w-3.5 h-3.5" />
                                          {group.records.length} records
                                        </span>
                                      </div>

                                      <div className="p-4 md:p-5 grid grid-cols-1 xl:grid-cols-2 gap-5">
                                        {group.records.map((item, idx) => (
                                          <motion.article
                                            key={`${group.year}-${item.title}-${idx}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.03 }}
                                            className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
                                          >
                                            <h5 className="text-lg font-black text-gray-900 leading-snug">
                                              {item.title}
                                            </h5>
                                            <p className="text-sm font-bold text-indigo-700 mt-1">
                                              {item.person}
                                            </p>

                                            <p className="text-xs md:text-sm text-gray-600 font-semibold mt-4 leading-relaxed">
                                              {item.event}
                                            </p>

                                            <div className="mt-4 rounded-2xl bg-gray-50 border border-gray-100 p-4 space-y-2">
                                              <p className="text-sm font-bold text-gray-900 leading-relaxed">
                                                {item.outcome}
                                              </p>
                                              <p className="text-sm text-gray-700 font-medium leading-relaxed">
                                                {item.details}
                                              </p>
                                            </div>
                                          </motion.article>
                                        ))}
                                      </div>
                                    </section>
                                  ))}
                                </div>

                                <section className="rounded-3xl border border-gray-200 bg-white p-5 md:p-6">
                                  <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-indigo-600" />
                                    Submitted Detailed Notes (Year-wise)
                                  </h4>
                                  <div className="mt-4 space-y-4">
                                    {mbaFacultySubmittedNotesByYear.map(
                                      (item) => (
                                        <div
                                          key={`faculty-note-${item.year}`}
                                          className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
                                        >
                                          <p className="text-xs font-black uppercase tracking-widest text-indigo-700 mb-2">
                                            {item.year}
                                          </p>
                                          <p className="text-sm text-gray-700 leading-relaxed font-medium whitespace-pre-line">
                                            {item.note}
                                          </p>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </section>
                              </>
                            ) : (
                              <>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-blue-600">
                                      Year Buckets
                                    </p>
                                    <p className="text-2xl font-black text-blue-900 mt-2">
                                      {mbaStudentAchievementsByYear.length}
                                    </p>
                                  </div>
                                  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-purple-600">
                                      Focus Areas
                                    </p>
                                    <p className="text-sm font-black text-purple-900 mt-2 leading-relaxed">
                                      Management fests, athletics, cultural
                                      events, and competitions
                                    </p>
                                  </div>
                                  <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4">
                                    <p className="text-[11px] font-black uppercase tracking-widest text-rose-600">
                                      Achievement Types
                                    </p>
                                    <p className="text-sm font-black text-rose-900 mt-2 leading-relaxed">
                                      First place, podium finishes, runners-up,
                                      and participation credits
                                    </p>
                                  </div>
                                </div>

                                <div className="space-y-5">
                                  {mbaStudentAchievementsByYear.map((group) => (
                                    <section
                                      key={group.year}
                                      className="rounded-3xl border border-gray-200 overflow-hidden bg-white"
                                    >
                                      <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2.5">
                                          <GraduationCap className="w-5 h-5 text-indigo-700" />
                                          <h4 className="text-lg font-black text-gray-900">
                                            Student Achievements - {group.year}
                                          </h4>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-indigo-100 text-xs font-black uppercase tracking-wide text-indigo-700">
                                          <Trophy className="w-3.5 h-3.5" />
                                          {group.entries.length} records
                                        </span>
                                      </div>

                                      <div className="p-4 md:p-5 overflow-x-auto">
                                        <table className="w-full min-w-[680px] text-left border-collapse">
                                          <thead>
                                            <tr className="bg-gray-50 border border-gray-200">
                                              <th className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-600">
                                                Students
                                              </th>
                                              <th className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-600">
                                                Event / College
                                              </th>
                                              <th className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-600">
                                                Category
                                              </th>
                                              <th className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-600">
                                                Result
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {group.entries.map((entry, idx) => (
                                              <tr
                                                key={`${group.year}-${idx}`}
                                                className="border-x border-b border-gray-200"
                                              >
                                                <td className="px-3 py-3 text-sm font-bold text-gray-900 align-top">
                                                  {entry.names}
                                                </td>
                                                <td className="px-3 py-3 text-sm text-gray-700 font-semibold align-top">
                                                  {entry.event}
                                                </td>
                                                <td className="px-3 py-3 text-sm text-gray-700 font-semibold align-top">
                                                  {entry.category}
                                                </td>
                                                <td className="px-3 py-3 text-sm align-top">
                                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-black text-[11px] uppercase tracking-wide">
                                                    <Medal className="w-3.5 h-3.5" />
                                                    {entry.outcome}
                                                  </span>
                                                </td>
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </div>
                                    </section>
                                  ))}
                                </div>

                                <section className="rounded-3xl border border-gray-200 bg-white p-5 md:p-6">
                                  <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-indigo-600" />
                                    NPTEL Course Achievements
                                  </h4>
                                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {mbaNptelAchievementsByBatch.map(
                                      (batch) => (
                                        <div
                                          key={batch.batch}
                                          className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4"
                                        >
                                          <p className="text-xs font-black uppercase tracking-widest text-indigo-700">
                                            Batch {batch.batch}
                                          </p>
                                          <ul className="mt-3 space-y-2">
                                            {batch.results.map((result) => (
                                              <li
                                                key={result}
                                                className="text-xs md:text-sm text-gray-700 font-semibold leading-relaxed"
                                              >
                                                {result}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </section>

                                <section className="rounded-3xl border border-gray-200 bg-white p-5 md:p-6">
                                  <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-indigo-600" />
                                    Submitted Detailed Notes (Year-wise)
                                  </h4>
                                  <div className="mt-4 space-y-4">
                                    {mbaStudentSubmittedNotesByYear.map(
                                      (item) => (
                                        <div
                                          key={`student-note-${item.year}`}
                                          className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
                                        >
                                          <p className="text-xs font-black uppercase tracking-widest text-indigo-700 mb-2">
                                            {item.year}
                                          </p>
                                          <p className="text-sm text-gray-700 leading-relaxed font-medium whitespace-pre-line">
                                            {item.note}
                                          </p>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </section>
                              </>
                            )}
                          </div>
                        ) : (
                          <div
                            className="text-sm md:text-base text-gray-800 leading-relaxed mb-6"
                            dangerouslySetInnerHTML={{
                              __html: currentData?.body || "",
                            }}
                          />
                        )}

                        {activeTab !== "achievements" && (
                          <>
                            <div className="mt-6 grid md:grid-cols-2 gap-4">
                              <div className="bg-gray-100 border border-gray-300 rounded-2xl p-4">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-600">
                                  Highlights
                                </p>
                                <p className="font-semibold text-gray-900 mt-2">
                                  {currentData?.highlights?.[0] ||
                                    "Regular student activities and project-based learning."}
                                </p>
                              </div>

                              <div className="bg-gray-100 border border-gray-300 rounded-2xl p-4">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-600">
                                  Outcome
                                </p>
                                <p className="font-semibold text-gray-900 mt-2">
                                  {currentData?.highlights?.[1] ||
                                    "Industry-ready skills and strong placement performance."}
                                </p>
                              </div>
                            </div>

                            {currentData?.highlights?.[2] && (
                              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-2xl p-4">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                                  Additional Information
                                </p>
                                <p className="font-semibold text-blue-900 mt-2">
                                  {currentData.highlights[2]}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {activeActivity && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setActiveActivityIndex(null)}
        >
          <button
            onClick={() => setActiveActivityIndex(null)}
            className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition shadow-2xl z-[10000] border border-gray-100 font-bold text-xl"
          >
            <MdClose className="w-5 h-5" />
          </button>
          <div
            className="bg-white rounded-[2rem] shadow-2xl max-w-6xl w-[96vw] max-h-[90vh] overflow-hidden relative animate-in zoom-in duration-300 scale-95 md:scale-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f8f9fa] p-6 md:p-8 pb-6 border-b border-gray-100 flex flex-col md:flex-row gap-6 md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                  {activeActivity.title}
                </h3>
                {activeActivity.topic && (
                  <p className="text-sm md:text-base font-bold text-indigo-700 mt-2">
                    {activeActivity.topic}
                  </p>
                )}
              </div>

              <div className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-50 border border-indigo-100">
                <span className="text-[11px] font-black uppercase tracking-widest text-indigo-600">
                  Date
                </span>
                <span className="text-sm font-black text-indigo-900">
                  {activeActivity.date}
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 text-sm md:text-[0.95rem]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Venue
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {activeActivity.venue}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Audience
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {activeActivity.audience}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Conducted By
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {activeActivity.conductedBy}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-700">
                  Overview
                </h4>
                <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                  {activeActivity.overview}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-5">
                  <h4 className="text-sm font-black uppercase tracking-widest text-indigo-700">
                    Objectives
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {activeActivity.objectives.map((obj, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-800 leading-relaxed font-semibold"
                      >
                        <span className="mt-1 inline-block w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-5">
                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-700">
                      Impact
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                      {activeActivity.impact}
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-5">
                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-700">
                      Conclusion
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                      {activeActivity.conclusion}
                    </p>
                  </div>
                </div>
              </div>

              {activeActivity.tags?.length ? (
                <div className="mt-8 flex flex-wrap gap-2">
                  {activeActivity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide border border-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* Faculty Modal */}
      {isFacultyModalOpen && selectedFaculty && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsFacultyModalOpen(false)}
        >
          <button
            onClick={() => setIsFacultyModalOpen(false)}
            className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition shadow-2xl z-[10000] border border-gray-100 font-bold text-xl"
          >
            &times;
          </button>
          <div
            className="bg-white rounded-[2rem] shadow-2xl max-w-xl w-full max-h-[85vh] overflow-hidden relative animate-in zoom-in duration-300 scale-95 md:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f8f9fa] p-8 pb-6 border-b border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-indigo-200 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src={selectedFaculty?.photo}
                  className="w-40 h-40 md:w-52 md:h-52 object-cover object-top rounded-full shadow-2xl border-4 border-white relative z-10"
                  alt={selectedFaculty?.name}
                />
              </div>

              <div className="flex-1 mt-4 md:mt-0">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 border-b-2 border-gray-900 pb-2 inline-block italic serif">
                  {selectedFaculty?.name}
                </h3>

                <div className="mt-6 space-y-4 font-sans">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">
                      Designation
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {selectedFaculty?.designation}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 border-t border-gray-100 pt-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">
                      Email
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {selectedFaculty?.email}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 border-t border-gray-100 pt-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">
                      Joining date
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {selectedFaculty?.joiningDate || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-280px)] p-6 font-sans">
              {[
                { title: "Educational Qualifications", key: "qualifications" },
                { title: "Past Experience", key: "pastExperience" },
                { title: "Areas of Interest", key: "areasOfInterest" },
                { title: "Achievement", key: "achievements" },
                {
                  title: "Professional Membership",
                  key: "professionalMembership",
                },
                { title: "Publications", key: "publications" },
                { title: "Project Guided", key: "projectsGuided" },
                { title: "Subjects Teaching", key: "subjectsTeaching" },
                { title: "Research Publications", key: "researchPublications" },
                { title: "Others", key: "others" },
              ].map((item) => (
                <div key={item.key} className="mb-2">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === item.key ? null : item.key,
                      )
                    }
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left ${
                      openAccordion === item.key
                        ? "bg-[#f1f3f5] shadow-sm"
                        : "bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100"
                    }`}
                  >
                    <span className="text-sm font-bold text-gray-700">
                      {item.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openAccordion === item.key ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openAccordion === item.key
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-4 bg-white rounded-xl border border-gray-100 text-sm font-bold text-gray-900 leading-loose whitespace-pre-line">
                      {selectedFaculty?.details?.[
                        item.key as keyof typeof selectedFaculty.details
                      ] || "Information not available."}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
