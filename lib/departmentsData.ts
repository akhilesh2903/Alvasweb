import { DepartmentData } from "./departments";

export const departmentsData: Record<string, DepartmentData> = {
  cse: {
    id: "cse",
    name: "Computer Science",
    title: "Computer Science & Engineering",
    vision:
      "To become a center of excellence in Computer Science & Engineering by nurturing innovation, ethics, and research-driven learning to serve society and industry globally.",
    mission:
      "To impart quality technical education through modern curriculum, hands-on projects, innovation, ethics, and research-driven learning, industry collaboration, and skill development for strong career growth.",
    hod: {
      name: "Dr. ABC XYZ",
      designation: "Professor & HOD - CSE",
      qualification: "Ph.D, M.Tech",
      experience: "15+ Years",
      email: "hodcse@alvas.edu.in",
      phone: "+91 98765 43210",
      photo:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
      joiningDate: "01-06-2010",
      details: {
        qualifications: "BE in CSE, M.Tech in IT, Ph.D in Cloud Security",
        pastExperience: "10 years at Alva's, 5 years at XYZ Corp",
        areasOfInterest: "Cloud Computing, Cyber Security, Blockchain",
        achievements: "Best Teacher Award 2022, 50+ Publications",
        professionalMembership: "IEEE Senior Member, CSI Life Member",
        publications: "15 International Journals, 10 Conferences",
        projectsGuided: "20 UG Projects, 5 PG Projects",
        subjectsTeaching: "Operating Systems, Computer Networks",
        researchPublications: "Advanced Cloud Security Patterns (2023)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Ananth Rai",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "15 Years",
        email: "ananth.cse@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Artificial Intelligence",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2009",
        details: {
          qualifications: "Ph.D in AI, M.Tech in CSE",
          pastExperience: "15 years in academics",
          areasOfInterest: "AI, Machine Learning",
          achievements: "Best Researcher Award 2019",
          professionalMembership: "IEEE Member",
          publications: "20+ Journals",
          projectsGuided: "10 UG Projects",
          subjectsTeaching: "AI, ML, Python",
          researchPublications: "AI in Healthcare (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Smitha Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "10 Years",
        email: "smitha.cse@alvas.edu.in",
        phone: "+91 90000 00002",
        aoi: "Data Mining",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        joiningDate: "15-07-2014",
        details: {
          qualifications: "M.Tech in CSE, BE in CSE",
          pastExperience: "10 years in teaching",
          areasOfInterest: "Data Mining, Big Data",
          achievements: "Excellence in Teaching Award",
          professionalMembership: "CSI Member",
          publications: "12 Journals",
          projectsGuided: "8 UG Projects",
          subjectsTeaching: "Data Mining, DBMS",
          researchPublications: "Big Data Trends (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Raghavendra Hegde",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "12 Years",
        email: "raghu.cse@alvas.edu.in",
        phone: "+91 90000 00003",
        aoi: "Cyber Security",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        joiningDate: "20-08-2012",
        details: {
          qualifications:
            "Ph.D in Cryptography, M.Tech in Information Security",
          pastExperience: "12 years in academics",
          areasOfInterest: "Cyber Security, Network Security",
          achievements: "Certified Ethical Hacker",
          professionalMembership: "ACM Member",
          publications: "15+ Journals",
          projectsGuided: "12 UG Projects",
          subjectsTeaching: "Cryptography, Network Security",
          researchPublications: "Blockchain for IoT (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Deepa Rai",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "8 Years",
        email: "deepa.cse@alvas.edu.in",
        phone: "+91 90000 00004",
        aoi: "Software Engineering",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        joiningDate: "12-06-2016",
        details: {
          qualifications: "M.Tech in Software Engineering, BE in CSE",
          pastExperience: "8 years in teaching",
          areasOfInterest: "Agile, Software Testing",
          achievements: "Best Faculty Award 2021",
          professionalMembership: "ACM Member",
          publications: "8 Journals",
          projectsGuided: "6 UG Projects",
          subjectsTeaching: "Software Engineering, Testing",
          researchPublications: "Agile Methodologies (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Vinay Kumar",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "14 Years",
        email: "vinay.cse@alvas.edu.in",
        phone: "+91 90000 00005",
        aoi: "Computer Networks",
        photo:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
        joiningDate: "05-01-2010",
        details: {
          qualifications: "Ph.D in Networking, M.Tech in CSE",
          pastExperience: "14 years in teaching",
          areasOfInterest: "WSN, Mobile Computing",
          achievements: "Research Excellence Award",
          professionalMembership: "IEEE Member",
          publications: "22+ Journals",
          projectsGuided: "15 UG Projects",
          subjectsTeaching: "CN, Mobile Computing",
          researchPublications: "WSN Optimization (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Shweta Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "7 Years",
        email: "shweta.cse@alvas.edu.in",
        phone: "+91 90000 00006",
        aoi: "Web Technologies",
        photo:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        joiningDate: "14-02-2017",
        details: {
          qualifications: "M.Tech in CSE, BE in CSE",
          pastExperience: "7 years in teaching",
          areasOfInterest: "Frontend Development, Frameworks",
          achievements: "Best Teacher Nominee",
          professionalMembership: "CSI Member",
          publications: "6 Journals",
          projectsGuided: "5 UG Projects",
          subjectsTeaching: "Web Tech, Programming in C",
          researchPublications: "Modern Web Frameworks (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Bharath Rai",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "11 Years",
        email: "bharath.cse@alvas.edu.in",
        phone: "+91 90000 00007",
        aoi: "Cloud Computing",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "01-09-2013",
        details: {
          qualifications: "Ph.D in Cloud Computing, M.Tech in CSE",
          pastExperience: "11 years in teaching",
          areasOfInterest: "Virtualization, Security",
          achievements: "Patent on Cloud Management",
          professionalMembership: "ACM Member",
          publications: "14+ Journals",
          projectsGuided: "10 UG Projects",
          subjectsTeaching: "Cloud, OS, Unix",
          researchPublications: "Cloud Resource Scheduling (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Kavya Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "6 Years",
        email: "kavya.cse@alvas.edu.in",
        phone: "+91 90000 00008",
        aoi: "Internet of Things",
        photo:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2018",
        details: {
          qualifications: "M.Tech in Digital Electronics, BE in CSE",
          pastExperience: "6 years in teaching",
          areasOfInterest: "IoT, Embedded Systems",
          achievements: "Best Project Guide Award",
          professionalMembership: "IEEE Member",
          publications: "4 Journals",
          projectsGuided: "4 UG Projects",
          subjectsTeaching: "IoT, Microprocessors",
          researchPublications: "IoT in Agriculture (2023)",
          others: "NA",
        },
      },
    ],
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
      { name: "Accenture", logo: "/logos/accenture.png" },
      { name: "Capgemini", logo: "/logos/capgemini.png" },
      { name: "Amazon", logo: "/logos/amazon.png" },
    ],
  },
  mech: {
    id: "mech",
    name: "Mechanical Engineering",
    title: "Mechanical Engineering",
    vision:
      "To be a premier department providing value-based education and research in mechanical engineering for the sustainable development of society.",
    mission:
      "To provide quality education, encourage research and innovation, and prepare students for successful careers in mechanical engineering through state-of-the-art facilities and industry partnerships.",
    hod: {
      name: "Dr. Mech HOD",
      designation: "Professor & HOD - Mechanical",
      qualification: "Ph.D, M.Tech",
      experience: "20+ Years",
      email: "hodmech@alvas.edu.in",
      phone: "+91 98765 43211",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      joiningDate: "10-05-2008",
      details: {
        qualifications: "BE in Mech, M.Tech in Design, Ph.D in Robotics",
        pastExperience: "15 years at Alva's, 5 years at ABC Corp",
        areasOfInterest: "Robotics, Thermal Engineering, Design",
        achievements: "Innovation Award 2021",
        professionalMembership: "ASME Member",
        publications: "10 International Journals",
        projectsGuided: "15 UG Projects",
        subjectsTeaching: "Thermodynamics, Robotics",
        researchPublications: "Advanced Robotics Patterns (2022)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Satish Kumar",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "16 Years",
        email: "satish.mech@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Design Engineering",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2008",
        details: {
          qualifications: "Ph.D in Design, M.Tech in ME",
          pastExperience: "16 years in academics",
          areasOfInterest: "Machine Design, Vibrations",
          achievements: "Best Researcher 2018",
          professionalMembership: "IEI Member",
          publications: "25+ Journals",
          projectsGuided: "12 UG Projects",
          subjectsTeaching: "Design of Machine Elements",
          researchPublications: "Vibration Analysis (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Rekha Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "11 Years",
        email: "rekha.mech@alvas.edu.in",
        phone: "+91 90000 00002",
        aoi: "Manufacturing",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        joiningDate: "15-07-2013",
        details: {
          qualifications: "M.Tech in Manufacturing, BE in ME",
          pastExperience: "11 years in teaching",
          areasOfInterest: "CAD/CAM, Robotics",
          achievements: "Teaching Excellence Award",
          professionalMembership: "ISTE Member",
          publications: "10 Journals",
          projectsGuided: "9 UG Projects",
          subjectsTeaching: "Manufacturing Tech, CAD",
          researchPublications: "CAM Trends (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Naveen Prabhu",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "12 Years",
        email: "naveen.mech@alvas.edu.in",
        phone: "+91 90000 00003",
        aoi: "Material Science",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        joiningDate: "20-08-2012",
        details: {
          qualifications: "Ph.D in Materials, M.Tech in ME",
          pastExperience: "12 years in academics",
          areasOfInterest: "Composites, Nano-materials",
          achievements: "Young Scientist Award",
          professionalMembership: "MRSI Member",
          publications: "18+ Journals",
          projectsGuided: "10 UG Projects",
          subjectsTeaching: "Material Science, Metallurgy",
          researchPublications: "Composite Structures (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Swathi Nayak",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "8 Years",
        email: "swathi.mech@alvas.edu.in",
        phone: "+91 90000 00004",
        aoi: "Fluid Power",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        joiningDate: "12-06-2016",
        details: {
          qualifications: "M.Tech in Hydraulics, BE in ME",
          pastExperience: "8 years in teaching",
          areasOfInterest: "Pneumatics, Control Systems",
          achievements: "Best Faculty Award 2020",
          professionalMembership: "FPSI Member",
          publications: "6 Journals",
          projectsGuided: "7 UG Projects",
          subjectsTeaching: "Fluid Mechanics, Hydraulics",
          researchPublications: "Hydraulic Circuits (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Karthik Rao",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "17 Years",
        email: "karthik.mech@alvas.edu.in",
        phone: "+91 90000 00005",
        aoi: "Energy Studies",
        photo:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
        joiningDate: "05-01-2007",
        details: {
          qualifications: "Ph.D in Renewable Energy, M.Tech in ME",
          pastExperience: "17 years in teaching",
          areasOfInterest: "Solar, Wind, Alternate Fuels",
          achievements: "State Level Energy Award",
          professionalMembership: "SESI Member",
          publications: "28+ Journals",
          projectsGuided: "14 UG Projects",
          subjectsTeaching: "Renewable Energy, Heat Transfer",
          researchPublications: "Solar Collector Efficiency (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Pallavi Rai",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "7 Years",
        email: "pallavi.mech@alvas.edu.in",
        phone: "+91 90000 00006",
        aoi: "Total Quality Management",
        photo:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        joiningDate: "14-02-2017",
        details: {
          qualifications: "M.Tech in Industrial Engg, BE in ME",
          pastExperience: "7 years in teaching",
          areasOfInterest: "Six Sigma, Lean Manufacturing",
          achievements: "Certified Quality Auditor",
          professionalMembership: "QCFI Member",
          publications: "5 Journals",
          projectsGuided: "6 UG Projects",
          subjectsTeaching: "TQM, Industrial Management",
          researchPublications: "Lean Implementation (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Abhilash Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "13 Years",
        email: "abhilash.mech@alvas.edu.in",
        phone: "+91 90000 00007",
        aoi: "Mechatronics",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "01-09-2011",
        details: {
          qualifications: "Ph.D in Mechatronics, M.Tech in ME",
          pastExperience: "13 years in teaching",
          areasOfInterest: "Sensors, Actuators, PLCs",
          achievements: "Developed Automation Lab",
          professionalMembership: "IEEE Robotics",
          publications: "16+ Journals",
          projectsGuided: "11 UG Projects",
          subjectsTeaching: "Mechatronics, Control Engg",
          researchPublications: "PLC based Automation (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Meghana Nayak",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "6 Years",
        email: "meghana.mech@alvas.edu.in",
        phone: "+91 90000 00008",
        aoi: "Internal Combustion Engines",
        photo:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2018",
        details: {
          qualifications: "M.Tech in Thermal Power, BE in ME",
          pastExperience: "6 years in teaching",
          areasOfInterest: "Bio-fuels, Engine Emissions",
          achievements: "University topper in ME",
          professionalMembership: "SAE Member",
          publications: "4 Journals",
          projectsGuided: "5 UG Projects",
          subjectsTeaching: "IC Engines, Turbomachines",
          researchPublications: "Bio-diesel Performance (2023)",
          others: "NA",
        },
      },
    ],
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
      { name: "Accenture", logo: "/logos/accenture.png" },
      { name: "Capgemini", logo: "/logos/capgemini.png" },
      { name: "Amazon", logo: "/logos/amazon.png" },
    ],
  },
  ai: {
    id: "ai",
    name: "Artificial Intelligence",
    title: "AI & Machine Learning",
    vision:
      "To produce world-class AI professionals capable of solving complex global problems using intelligent systems.",
    mission:
      "To provide a robust foundation in AI and ML through experiential learning and cutting-edge research.",
    hod: {
      name: "Dr. AI HOD",
      designation: "Professor & HOD - AI&ML",
      qualification: "Ph.D",
      experience: "12+ Years",
      email: "hodai@alvas.edu.in",
      phone: "+91 98765 43212",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      joiningDate: "01-01-2018",
      details: {
        qualifications: "Ph.D in AI, M.Tech in CS",
        pastExperience: "12 years in Academics",
        areasOfInterest: "Deep Learning, NLP",
        achievements: "Young Researcher 2019",
        professionalMembership: "ACM",
        publications: "20 Journals",
        projectsGuided: "10 Projects",
        subjectsTeaching: "Deep Learning",
        researchPublications: "NLP Trends (2023)",
        others: "NA",
      },
    },
    faculty: Array.from({ length: 10 }, (_, i) => ({
      name: `Prof. AI Faculty ${i + 1}`,
      designation:
        (i + 1) % 3 === 0 ? "Associate Professor" : "Assistant Professor",
      qualification: (i + 1) % 2 === 0 ? "M.Tech, Ph.D" : "M.Tech",
      experience: `${5 + (i + 1)} Years`,
      email: `faculty${i + 1}.ai@alvas.edu.in`,
      phone: `+91 90000 000${(i + 1).toString().padStart(2, "0")}`,
      aoi: "Specialized Research Area",
      photo: `https://images.unsplash.com/photo-${1500000000000 + (i + 1) * 10000 + 2}?auto=format&fit=crop&w=400&q=80`,
      joiningDate: `01-01-20${15 + ((i + 1) % 8)}`,
      details: {
        qualifications: `BE in AI, M.Tech in Specialization`,
        pastExperience: "5 years in Industry, 5 years in Academics",
        areasOfInterest: "Research, Development, Innovation",
        achievements: "Best Faculty Award, Multiple Publications",
        professionalMembership: "IEEE, CSI Member",
        publications: "10+ International Journals",
        projectsGuided: "15+ UG Projects",
        subjectsTeaching: "Core Subjects",
        researchPublications: "Recent Research in Domain (2023)",
        others: "NA",
      },
    })),
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
      { name: "Accenture", logo: "/logos/accenture.png" },
      { name: "Capgemini", logo: "/logos/capgemini.png" },
      { name: "Amazon", logo: "/logos/amazon.png" },
    ],
  },
  ise: {
    id: "ise",
    name: "Information Science",
    title: "Information Science & Engineering",
    vision: "Excellence in Information Science education and research.",
    mission:
      "To empower students with computing skills and innovative mindset.",
    hod: {
      name: "Dr. ISE HOD",
      designation: "Professor & HOD - ISE",
      qualification: "Ph.D",
      experience: "18+ Years",
      email: "hodise@alvas.edu.in",
      phone: "+91 98765 43213",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
      joiningDate: "05-06-2005",
      details: {
        qualifications: "Ph.D in Big Data",
        pastExperience: "18 years",
        areasOfInterest: "Big Data, Data Analytics",
        achievements: "State Award 2017",
        professionalMembership: "CSI",
        publications: "18 Journals",
        projectsGuided: "20 Projects",
        subjectsTeaching: "Big Data Analytics",
        researchPublications: "Data Science (2021)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Ramesh Babu",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "12 Years",
        email: "ramesh.ise@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Machine Learning",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2012",
        details: {
          qualifications: "Ph.D in Machine Learning, M.Tech in CSE",
          pastExperience: "12 years in academics",
          areasOfInterest: "Neural Networks, Deep Learning",
          achievements: "Best Researcher Award 2022",
          professionalMembership: "IEEE Member",
          publications: "15+ Journals",
          projectsGuided: "12 UG Projects",
          subjectsTeaching: "Python, Machine Learning",
          researchPublications: "Deep Learning Trends (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Sahana Hegde",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "8 Years",
        email: "sahana.ise@alvas.edu.in",
        phone: "+91 90000 00002",
        aoi: "Cloud Computing",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        joiningDate: "15-07-2016",
        details: {
          qualifications: "M.Tech in ISE, BE in CSE",
          pastExperience: "8 years in teaching",
          areasOfInterest: "AWS, Azure, Distributed Systems",
          achievements: "Cloud Certified Professional",
          professionalMembership: "CSI Member",
          publications: "8 Journals",
          projectsGuided: "10 UG Projects",
          subjectsTeaching: "Cloud Computing, Operating Systems",
          researchPublications: "Serverless Architecture (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Kiran Kumar",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "9 Years",
        email: "kiran.ise@alvas.edu.in",
        phone: "+91 90000 00003",
        aoi: "Cyber Security",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        joiningDate: "20-08-2015",
        details: {
          qualifications: "Ph.D in Cyber Security, M.Tech in ISE",
          pastExperience: "9 years in academics",
          areasOfInterest: "Cryptography, Network Security",
          achievements: "Certified Ethical Hacker",
          professionalMembership: "ACM Member",
          publications: "10+ Journals",
          projectsGuided: "8 UG Projects",
          subjectsTeaching: "Information Security, DBMS",
          researchPublications: "Blockchain for Security (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Megha Nayak",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "7 Years",
        email: "megha.ise@alvas.edu.in",
        phone: "+91 90000 00004",
        aoi: "Internet of Things",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        joiningDate: "12-06-2017",
        details: {
          qualifications: "M.Tech in Digital Electronics, BE in ISE",
          pastExperience: "7 years in teaching",
          areasOfInterest: "Smart Cities, Sensor Networks",
          achievements: "Best Faculty Award 2021",
          professionalMembership: "ISTE Member",
          publications: "6 Journals",
          projectsGuided: "7 UG Projects",
          subjectsTeaching: "IoT, Embedded Systems",
          researchPublications: "MQTT Protocol Analysis (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Vinayak Rao",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "14 Years",
        email: "vinayak.ise@alvas.edu.in",
        phone: "+91 90000 00005",
        aoi: "Data Science",
        photo:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
        joiningDate: "05-01-2010",
        details: {
          qualifications: "Ph.D in Data Analytics, M.Tech in CSE",
          pastExperience: "14 years in industry and academics",
          areasOfInterest: "Predictive Modeling, R Programming",
          achievements: "Significant Research Contribution",
          professionalMembership: "IEEE Data Science Community",
          publications: "20+ Journals",
          projectsGuided: "15 UG Projects",
          subjectsTeaching: "Data Mining, Statistics",
          researchPublications: "Big Data Visualization (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Shweta Rai",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "6 Years",
        email: "shweta.ise@alvas.edu.in",
        phone: "+91 90000 00006",
        aoi: "Web Technologies",
        photo:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        joiningDate: "14-02-2018",
        details: {
          qualifications: "M.Tech in CSE, BE in ISE",
          pastExperience: "6 years in teaching",
          areasOfInterest: "React, Node.js, Web Architecture",
          achievements: "Full Stack Developer Certification",
          professionalMembership: "CSI",
          publications: "4 Journals",
          projectsGuided: "5 UG Projects",
          subjectsTeaching: "Web Programming, UI/UX Design",
          researchPublications: "Modern Web Frameworks (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Abhilash Hegde",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "11 Years",
        email: "abhilash.ise@alvas.edu.in",
        phone: "+91 90000 00007",
        aoi: "Artificial Intelligence",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "01-09-2013",
        details: {
          qualifications: "Ph.D in AI, M.Tech in CSE",
          pastExperience: "11 years in teaching",
          areasOfInterest: "Natural Language Processing, Robotics",
          achievements: "Best Teacher Award 2020",
          professionalMembership: "ACM AI Group",
          publications: "12+ Journals",
          projectsGuided: "10 UG Projects",
          subjectsTeaching: "Artificial Intelligence, Automata Theory",
          researchPublications: "NLP for Regional Languages (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Anushree Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "5 Years",
        email: "anushree.ise@alvas.edu.in",
        phone: "+91 90000 00008",
        aoi: "Software Engineering",
        photo:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2019",
        details: {
          qualifications: "M.Tech in Software Engineering, BE in CSE",
          pastExperience: "5 years in teaching",
          areasOfInterest: "Agile Methodologies, Software Testing",
          achievements: "University topper in M.Tech",
          professionalMembership: "ISTE",
          publications: "3 Journals",
          projectsGuided: "4 UG Projects",
          subjectsTeaching: "Software Engineering, Testing",
          researchPublications: "Agile Transformation in Startups (2023)",
          others: "NA",
        },
      },
    ],
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
      { name: "Accenture", logo: "/logos/accenture.png" },
      { name: "Capgemini", logo: "/logos/capgemini.png" },
      { name: "Amazon", logo: "/logos/amazon.png" },
    ],
  },
  ece: {
    id: "ece",
    name: "Electronics & Communication",
    title: "Electronics & Communication Engineering",
    vision:
      `Centre of excellence to empower the young minds in the field of Electronics and Communication Engineering with research focus and skill development through transformative education catering to the needs of the society`,
    mission:
      `M1: To create Learning Environment to enable the students for excellence in the field of Electronics and Communication Engineering.
M2: To empower the students with necessary skills for solving the complex technological problems.
M3: To inculcate Research Culture among Teaching Learning Group by guiding them towards Research activities to bridge the gap between Industry and Academia.
M4: By imbibing the students with human values and ethics through transformative education and make them socially responsible professionals`,
    hod: {
      name: "Dr. ECE HOD",
      designation: "Professor & HOD - ECE",
      qualification: "Ph.D",
      experience: "15+ Years",
      email: "hodece@alvas.edu.in",
      phone: "+91 98765 43214",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      joiningDate: "12-08-2010",
      details: {
        qualifications: "Ph.D in VLSI",
        pastExperience: "15 years",
        areasOfInterest: "VLSI, Embedded Systems",
        achievements: "Best Teacher Award",
        professionalMembership: "IEEE",
        publications: "15 Journals",
        projectsGuided: "12 Projects",
        subjectsTeaching: "VLSI Design",
        researchPublications: "VLSI Trends (2022)",
        others: "NA",
      },
    },
    faculty: Array.from({ length: 10 }, (_, i) => ({
      name: `Prof. ECE Faculty ${i + 1}`,
      designation:
        (i + 1) % 3 === 0 ? "Associate Professor" : "Assistant Professor",
      qualification: (i + 1) % 2 === 0 ? "M.Tech, Ph.D" : "M.Tech",
      experience: `${5 + (i + 1)} Years`,
      email: `faculty${i + 1}.ece@alvas.edu.in`,
      phone: `+91 90000 000${(i + 1).toString().padStart(2, "0")}`,
      aoi: "Specialized Research Area",
      photo: `https://images.unsplash.com/photo-${1500000000000 + (i + 1) * 10000 + 4}?auto=format&fit=crop&w=400&q=80`,
      joiningDate: `01-01-20${15 + ((i + 1) % 8)}`,
      details: {
        qualifications: `BE in ECE, M.Tech in Specialization`,
        pastExperience: "5 years in Industry, 5 years in Academics",
        areasOfInterest: "Research, Development, Innovation",
        achievements: "Best Faculty Award, Multiple Publications",
        professionalMembership: "IEEE, CSI Member",
        publications: "10+ International Journals",
        projectsGuided: "15+ UG Projects",
        subjectsTeaching: "Core Subjects",
        researchPublications: "Recent Research in Domain (2023)",
        others: "NA",
      },
    })),
        exploreData: {
      about: {
        title: 'ABOUT ECE',
        body: 'The Electronics & Communication Engineering department at AIET focuses on cutting-edge research and innovation in semiconductor technology, communication systems, and signal processing.',
        highlights: [
          'State-of-the-art VLSI and Embedded Systems labs.',
          'Strong industry ties with electronics leaders.',
          'Innovation hub for IoT and Smart Systems.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Focusing on Next-Gen Communication, VLSI Design, and Embedded Systems.',
        highlights: [
          '5G and 6G Communication research.',
          'Low-power VLSI design architectures.',
          'Internet of Things (IoT) applications.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Our objectives are aligned with outcome-based education to produce globally competent engineers.',
        highlights: [
          'Strong foundational knowledge in electronics.',
          'Practical application of theoretical concepts.',
          'Leadership and ethical engineering practices.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Latest VTU curriculum with advanced elective courses in specialization tracks.',
        highlights: [
          'Modernized credit-based system.',
          'Emphasis on project-oriented learning.',
          'Regular workshops on syllabus-linked tools.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Students are placed in top companies like Bosch, Intel, Qualcomm, and more.',
        highlights: [
          '100% placement track record for eligible students.',
          'Highest CTC in communication domains.',
          'MOU with top electronics conglomerates.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Highly active research community with numerous patents and international publications.',
        highlights: [
          'Funded research labs (VGST).',
          'Patent filing assistance for students.',
          'Publication in IEEE and Springer journals.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'Advanced infrastructure including specialized equipment for signal processing and microelectronics.',
        highlights: [
          'Cadence VLSI bundle certification center.',
          'Digital Signal Processing workstation lab.',
          'Robotics and Automation center.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Regular hosting of national and international technical events.',
        highlights: [
          'Annual Electronics Symposium.',
          'Workshops on AI in Communication.',
          'IEEE student chapter events.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Active membership in global engineering societies.',
        highlights: [
          'IEEE Signal Processing Society chapter.',
          'Robotics Club activity center.',
          'Student satellite program.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'National awards in hackathons and sports.',
        highlights: [
          'First place in National Robotics Challenge.',
          'Best Technical Paper award at ICETE.',
          'University ranks in top positions.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Holistic development through technical and cultural activities.',
        highlights: [
          'Weekly technical seminars.',
          'Industrial visit programs.',
          'Cultural fest participation.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Quarterly updates from the department of ECE.',
        highlights: [
          'Showcase of student innovations.',
          'Faculty research achievements.',
          'Event snapshots.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
      { name: "Accenture", logo: "/logos/accenture.png" },
      { name: "Capgemini", logo: "/logos/capgemini.png" },
      { name: "Amazon", logo: "/logos/amazon.png" },
    ],
  },
  civil: {
    id: "civil",
    name: "Civil Engineering",
    title: "Civil Engineering",
    vision: "To produce competent Civil Engineers with human values.",
    mission: "To provide quality technical education in Civil Engineering.",
    hod: {
      name: "Dr. Civil HOD",
      designation: "Professor & HOD - Civil",
      qualification: "Ph.D",
      experience: "22+ Years",
      email: "hodcivil@alvas.edu.in",
      phone: "+91 98765 43215",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
      joiningDate: "10-01-2006",
      details: {
        qualifications: "Ph.D in Structural Engineering",
        pastExperience: "22 years",
        areasOfInterest: "Structures, Materials",
        achievements: "Distinguished Service Award",
        professionalMembership: "ICI",
        publications: "12 Journals",
        projectsGuided: "15 Projects",
        subjectsTeaching: "Structures",
        researchPublications: "Concrete Tech (2021)",
        others: "NA",
      },
    },
    faculty: Array.from({ length: 10 }, (_, i) => ({
      name: `Prof. Civil Faculty ${i + 1}`,
      designation:
        (i + 1) % 3 === 0 ? "Associate Professor" : "Assistant Professor",
      qualification: (i + 1) % 2 === 0 ? "M.Tech, Ph.D" : "M.Tech",
      experience: `${5 + (i + 1)} Years`,
      email: `faculty${i + 1}.civil@alvas.edu.in`,
      phone: `+91 90000 000${(i + 1).toString().padStart(2, "0")}`,
      aoi: "Specialized Research Area",
      photo: `https://images.unsplash.com/photo-${1500000000000 + (i + 1) * 10000 + 5}?auto=format&fit=crop&w=400&q=80`,
      joiningDate: `01-01-20${15 + ((i + 1) % 8)}`,
      details: {
        qualifications: `BE in Civil, M.Tech in Specialization`,
        pastExperience: "5 years in Industry, 5 years in Academics",
        areasOfInterest: "Research, Development, Innovation",
        achievements: "Best Faculty Award, Multiple Publications",
        professionalMembership: "IEEE, CSI Member",
        publications: "10+ International Journals",
        projectsGuided: "15+ UG Projects",
        subjectsTeaching: "Core Subjects",
        researchPublications: "Recent Research in Domain (2023)",
        others: "NA",
      },
    })),
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
      { name: "Accenture", logo: "/logos/accenture.png" },
      { name: "Capgemini", logo: "/logos/capgemini.png" },
      { name: "Amazon", logo: "/logos/amazon.png" },
    ],
  },
  agri: {
    id: "agri",
    name: "Agriculture Engineering",
    title: "Agriculture Engineering",
    vision: "To be a leader in sustainable agriculture engineering.",
    mission: "To provide innovative solutions for agricultural challenges.",
    hod: {
      name: "Dr. Agri HOD",
      designation: "Professor & HOD - Agri",
      qualification: "Ph.D",
      experience: "14+ Years",
      email: "hodagri@alvas.edu.in",
      phone: "+91 98765 43216",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      joiningDate: "15-05-2012",
      details: {
        qualifications: "Ph.D in Agri Tech",
        pastExperience: "14 years",
        areasOfInterest: "Precision Farming, Irrigation",
        achievements: "Innovation in Agri Award",
        professionalMembership: "ASABE",
        publications: "10 Journals",
        projectsGuided: "8 Projects",
        subjectsTeaching: "Precision Farming",
        researchPublications: "Agri Future (2022)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Kiran Kumar",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "12 Years",
        email: "kiran.agri@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Precision Farming",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2012",
        details: {
          qualifications: "Ph.D in Precision Farming, M.Tech in Agri Tech",
          pastExperience: "12 years in academics",
          areasOfInterest: "Smart Irrigation, Crop Monitoring",
          achievements: "Best Researcher Award 2021",
          professionalMembership: "ASABE Member",
          publications: "15+ Journals",
          projectsGuided: "10 UG Projects",
          subjectsTeaching: "Precision Farming, Agri Equipment",
          researchPublications: "Sensor based Irrigation (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Sahana Hegde",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "8 Years",
        email: "sahana.agri@alvas.edu.in",
        phone: "+91 90000 00002",
        aoi: "Post Harvest Technology",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        joiningDate: "15-07-2016",
        details: {
          qualifications: "M.Tech in Post Harvest Tech, BE in Agri",
          pastExperience: "8 years in teaching",
          areasOfInterest: "Food Processing, Grain Storage",
          achievements: "Innovation in Food Tech Award",
          professionalMembership: "AFSTI Member",
          publications: "7 Journals",
          projectsGuided: "8 UG Projects",
          subjectsTeaching: "Post Harvest Engg, Food Tech",
          researchPublications: "Grain Drying Methods (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Vinay Rao",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "9 Years",
        email: "vinay.agri@alvas.edu.in",
        phone: "+91 90000 00003",
        aoi: "Soil & Water Conservation",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        joiningDate: "20-08-2015",
        details: {
          qualifications: "Ph.D in Hydraulics, M.Tech in Agri Engg",
          pastExperience: "9 years in academics",
          areasOfInterest: "Watershed Management, Erosion Control",
          achievements: "Young Scientist Nominee",
          professionalMembership: "ISAE Member",
          publications: "10+ Journals",
          projectsGuided: "7 UG Projects",
          subjectsTeaching: "Soil Conservation, Hydrology",
          researchPublications: "Water Harvesting Systems (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Deepa Nayak",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "7 Years",
        email: "deepa.agri@alvas.edu.in",
        phone: "+91 90000 00004",
        aoi: "Farm Machinery & Power",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        joiningDate: "12-06-2017",
        details: {
          qualifications: "M.Tech in Farm Machinery, BE in Agri",
          pastExperience: "7 years in teaching",
          areasOfInterest: "Tractor Design, Automation in Farming",
          achievements: "Best Faculty Award 2022",
          professionalMembership: "ISTE Member",
          publications: "6 Journals",
          projectsGuided: "6 UG Projects",
          subjectsTeaching: "Farm Power, Machinery Design",
          researchPublications: "Electric Tractor analysis (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Abhilash Prabhu",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "15 Years",
        email: "abhilash.agri@alvas.edu.in",
        phone: "+91 90000 00005",
        aoi: "Renewable Energy in Agri",
        photo:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
        joiningDate: "05-01-2009",
        details: {
          qualifications: "Ph.D in Bio-Energy, M.Tech in Agri Tech",
          pastExperience: "15 years in teaching",
          areasOfInterest: "Biomass, Solar Irrigation",
          achievements: "Research Excellence Award",
          professionalMembership: "SESI Member",
          publications: "20+ Journals",
          projectsGuided: "12 UG Projects",
          subjectsTeaching: "Renewable Energy, Heat Transfer",
          researchPublications: "Biogas Plants Optimization (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Shweta Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "6 Years",
        email: "shweta.agri@alvas.edu.in",
        phone: "+91 90000 00006",
        aoi: "Bio-Process Engineering",
        photo:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        joiningDate: "14-02-2018",
        details: {
          qualifications: "M.Tech in Bio-Process Engg, BE in Agri",
          pastExperience: "6 years in teaching",
          areasOfInterest: "Enzyme Tech, Food Safety",
          achievements: "Gold Medalist in M.Tech",
          professionalMembership: "CSI",
          publications: "4 Journals",
          projectsGuided: "5 UG Projects",
          subjectsTeaching: "Bio-Process, Thermodynamics",
          researchPublications: "Preservation Techniques (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Bharath Rao",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "11 Years",
        email: "bharath.agri@alvas.edu.in",
        phone: "+91 90000 00007",
        aoi: "Agri Informatics",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "01-09-2013",
        details: {
          qualifications: "Ph.D in Agri Informatics, M.Tech in CSE",
          pastExperience: "11 years in teaching",
          areasOfInterest: "AI in Agri, GIS in Farming",
          achievements: "Innovative Project Guide",
          professionalMembership: "ACM",
          publications: "12+ Journals",
          projectsGuided: "10 UG Projects",
          subjectsTeaching: "Agri Informatics, Programming",
          researchPublications: "Data Driven Farming (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Megha Rai",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "5 Years",
        email: "megha.agri@alvas.edu.in",
        phone: "+91 90000 00008",
        aoi: "Horticulture Engineering",
        photo:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2019",
        details: {
          qualifications: "M.Tech in Agri Tech, BE in Agri",
          pastExperience: "5 years in teaching",
          areasOfInterest: "Greenhouse Tech, Floriculture",
          achievements: "Certified Greenhouse Manager",
          professionalMembership: "ISTE",
          publications: "3 Journals",
          projectsGuided: "4 UG Projects",
          subjectsTeaching: "Horticulture Engg, Surveying",
          researchPublications: "Climate Controlled Agri (2023)",
          others: "NA",
        },
      },
    ],
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  physics: {
    id: "physics",
    name: "Physics",
    title: "Department of Physics",
    vision:
      "To excel in providing a fundamental understanding of physical principles for engineering and research.",
    mission:
      "To foster a spirit of inquiry and technical excellence through the study of natural laws.",
    hod: {
      name: "Dr. Physics HOD",
      designation: "Professor & HOD - Physics",
      qualification: "Ph.D",
      experience: "20+ Years",
      email: "hodphysics@alvas.edu.in",
      phone: "+91 98765 43222",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71f15367ef?auto=format&fit=crop&w=500&q=80",
      joiningDate: "10-06-2005",
      details: {
        qualifications: "Ph.D in Materials Science",
        pastExperience: "20 years",
        areasOfInterest: "Condensed Matter Physics",
        achievements: "Best Teacher Award 2018",
        professionalMembership: "Indian Physics Association",
        publications: "25 Journals",
        projectsGuided: "10 Projects",
        subjectsTeaching: "Engineering Physics",
        researchPublications: "Crystal Growth (2022)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Rajesh Kumar",
        designation: "Associate Professor",
        qualification: "M.Sc, Ph.D",
        experience: "12 Years",
        email: "rajesh.physics@alvas.edu.in",
        phone: "+91 91111 11101",
        aoi: "Quantum Mechanics",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "15-06-2012",
        details: {
          qualifications: "Ph.D in Quantum Physics, M.Sc in Physics",
          pastExperience: "12 years in teaching and research",
          areasOfInterest: "Quantum Computing, Theoretical Physics",
          achievements: "Best Researcher Award 2020",
          professionalMembership: "PSI Member",
          publications: "15 Journals",
          projectsGuided: "5 Projects",
          subjectsTeaching: "Quantum Mechanics, Optics",
          researchPublications: "Photonics (2023)",
          others: "NA",
        },
      },
    ],
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  chemistry: {
    id: "chemistry",
    name: "Chemistry",
    title: "Department of Chemistry",
    vision:
      "To provide quality education in chemistry for engineering excellence.",
    mission:
      "To impart sound knowledge of chemical principles and their industrial applications.",
    hod: {
      name: "Dr. Chemistry HOD",
      designation: "Professor & HOD - Chemistry",
      qualification: "Ph.D",
      experience: "18+ Years",
      email: "hodchem@alvas.edu.in",
      phone: "+91 98765 43223",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71f15367ef?auto=format&fit=crop&w=500&q=80",
      joiningDate: "15-05-2007",
      details: {
        qualifications: "Ph.D in Analytical Chemistry",
        pastExperience: "18 years",
        areasOfInterest: "Environmental Chemistry",
        achievements: "Research Excellence Award",
        professionalMembership: "Indian Chemical Society",
        publications: "20 Journals",
        projectsGuided: "8 Projects",
        subjectsTeaching: "Engineering Chemistry",
        researchPublications: "Water Quality (2023)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. S. Murali",
        designation: "Associate Professor",
        qualification: "M.Sc, Ph.D",
        experience: "13 Years",
        email: "murali.chem@alvas.edu.in",
        phone: "+91 92222 22201",
        aoi: "Organic Synthesis",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        joiningDate: "12-06-2011",
        details: {
          qualifications: "Ph.D in Organic Synthesis, M.Sc in Chemistry",
          pastExperience: "13 years in academics and research",
          areasOfInterest: "Synthetic Organic Chemistry, Medicinal Chemistry",
          achievements: "Innovation in Science Award 2019",
          professionalMembership: "ICS Member",
          publications: "12 Journals",
          projectsGuided: "6 Projects",
          subjectsTeaching: "Organic Chemistry, Spectroscopy",
          researchPublications: "Drug Synthesis (2022)",
          others: "NA",
        },
      },
    ],
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  mathematics: {
    id: "mathematics",
    name: "Mathematics",
    title: "Department of Mathematics",
    vision:
      "To be a center of excellence in mathematical sciences for engineering.",
    mission:
      "To impart logical and analytical skills through pure and applied mathematics.",
    hod: {
      name: "Dr. Mathematics HOD",
      designation: "Professor & HOD - Mathematics",
      qualification: "Ph.D",
      experience: "18+ Years",
      email: "hodmaths@alvas.edu.in",
      phone: "+91 98765 43224",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      joiningDate: "15-05-2008",
      details: {
        qualifications: "Ph.D in Fluid Mechanics",
        pastExperience: "18 years",
        areasOfInterest: "Computational Fluid Dynamics",
        achievements: "Excellence in Teaching Award",
        professionalMembership: "ISTE Life Member",
        publications: "20 Journals",
        projectsGuided: "5 PG Projects",
        subjectsTeaching: "Engineering Mathematics, Statistics",
        researchPublications: "Mathematical Modeling (2023)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. K. Subramanya",
        designation: "Associate Professor",
        qualification: "M.Sc, Ph.D",
        experience: "15 Years",
        email: "subramanya.math@alvas.edu.in",
        phone: "+91 93333 33301",
        aoi: "Graph Theory",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "15-06-2009",
        details: {
          qualifications: "Ph.D in Graph Theory, M.Sc in Mathematics",
          pastExperience: "15 years in teaching and research",
          areasOfInterest: "Graph Theory, Combinatorics",
          achievements: "Best Researcher Award 2019",
          professionalMembership: "Ramanujan Mathematical Society",
          publications: "20+ International Journals",
          projectsGuided: "10 UG Projects",
          subjectsTeaching: "Discrete Mathematics, Calculus",
          researchPublications: "Spectral Graph Analysis (2022)",
          others: "NA",
        },
      },
    ],
    recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  english: {
    id: "english",
    name: "English",
    title: "Department of English",
    vision:
      "To empower students with communicative competence and professional ethics.",
    mission:
      "To impart language skills through innovative teaching and holistic development.",
    hod: {
      name: "Dr. English HOD",
      designation: "Professor & HOD - English",
      qualification: "Ph.D",
      experience: "14+ Years",
      email: "hodenglish@alvas.edu.in",
      phone: "+91 98765 43225",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
      joiningDate: "20-08-2011",
      details: {
        qualifications: "Ph.D in English Literature",
        pastExperience: "14 years",
        areasOfInterest: "Language Teaching, ELT",
        achievements: "Best Communication Coach",
        professionalMembership: "ELTAI Member",
        publications: "10 Journals",
        projectsGuided: "2 Projects",
        subjectsTeaching: "Professional Communication, Ethics",
        researchPublications: "English in Engineering (2022)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Anitha Rao",
        designation: "Associate Professor",
        qualification: "MA, Ph.D",
        experience: "12 Years",
        email: "anitha.english@alvas.edu.in",
        phone: "+91 94444 44401",
        aoi: "Contemporary Literature",
        photo:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-08-2012",
        details: {
          qualifications: "Ph.D in Contemporary Literature, MA in English",
          pastExperience: "12 years in teaching and soft skills training",
          areasOfInterest: "Post-colonial Literature, Gender Studies",
          achievements: "Best Communication Coach 2021",
          professionalMembership: "ELTAI Member",
          publications: "10 Journals",
          projectsGuided: "2 Projects",
          subjectsTeaching: "Professional Communication, Ethics",
          researchPublications: "English in Digital Age (2022)",
          others: "NA",
        },
      },
    ],
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  mba: {
    id: "mba",
    name: "MBA",
    title: "Master of Business Administration",
    vision: "To be a premier business school developing global leaders.",
    mission:
      "To provide quality management education and foster entrepreneurship.",
    hod: {
      name: "Dr. MBA HOD",
      designation: "Professor & HOD - MBA",
      qualification: "Ph.D, MBA",
      experience: "16+ Years",
      email: "hodmba@alvas.edu.in",
      phone: "+91 98765 43217",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      joiningDate: "12-08-2014",
      details: {
        qualifications: "Ph.D in Management",
        pastExperience: "16 years",
        areasOfInterest: "Marketing, Strategy",
        achievements: "Leadership Award 2020",
        professionalMembership: "AIMA",
        publications: "20 Journals",
        projectsGuided: "25 Projects",
        subjectsTeaching: "Marketing Management",
        researchPublications: "Market Trends (2023)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Sudheer M.",
        designation: "Associate Professor",
        qualification: "MBA, Ph.D",
        experience: "15 Years",
        email: "sudheer.mba@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Financial Management",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2010",
        details: {
          qualifications: "Ph.D in Finance, MBA",
          pastExperience: "15 years in academics",
          areasOfInterest: "Stock Markets, Investment Banking",
          achievements: "Best Finance Faculty 2021",
          professionalMembership: "AIMA Member",
          publications: "15 Journals",
          projectsGuided: "20 Projects",
          subjectsTeaching: "Financial Accounting, SAP",
          researchPublications: "Equity Analysis (2022)",
          others: "NA",
        },
      },
    ],
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  mtech: {
    id: "mtech",
    name: "M.Tech",
    title: "Master of Technology",
    vision:
      "To be a center of excellence in post-graduate engineering education.",
    mission: "To foster advanced research and technical leadership.",
    hod: {
      name: "Dr. M.Tech HOD",
      designation: "Professor & Coordinator - M.Tech",
      qualification: "Ph.D",
      experience: "18+ Years",
      email: "hodmtech@alvas.edu.in",
      phone: "+91 98765 43218",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      joiningDate: "10-06-2008",
      details: {
        qualifications: "Ph.D in Computer Science",
        pastExperience: "18 years",
        areasOfInterest: "Advanced Computing, AI",
        achievements: "Research Excellence Award",
        professionalMembership: "ACM Senior Member",
        publications: "25 Journals",
        projectsGuided: "10 PG Projects",
        subjectsTeaching: "Advanced Algorithms",
        researchPublications: "Computing Trends (2022)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Raghavendra Kini",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "15 Years",
        email: "raghavendra.mtech@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Computer Networks",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2009",
        details: {
          qualifications: "Ph.D in Networking, M.Tech in CSE",
          pastExperience: "15 years in academics",
          areasOfInterest: "IoT, Wireless Sensor Networks",
          achievements: "Best Researcher Award 2022",
          professionalMembership: "IEEE Member",
          publications: "20 Journals",
          projectsGuided: "15 PG Projects",
          subjectsTeaching: "Advanced Networks, IoT Arch",
          researchPublications: "Network Security Protocols (2023)",
          others: "NA",
        },
      },
    ],
    recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  bsh: {
    id: "bsh",
    name: "Basic Science & Humanities",
    title: "Basic Science & Humanities",
    vision: "Developing a strong foundation for engineering education.",
    mission: "Excellence in fundamental sciences and soft skills.",
    hod: {
      name: "Dr. BSH HOD",
      designation: "Professor & HOD - BSH",
      qualification: "Ph.D",
      experience: "20+ Years",
      email: "hodbsh@alvas.edu.in",
      phone: "+91 98765 43218",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71f15367ef?auto=format&fit=crop&w=500&q=80",
      joiningDate: "01-09-2005",
      details: {
        qualifications: "Ph.D in Physics",
        pastExperience: "20 years",
        areasOfInterest: "Material Science",
        achievements: "Best Teacher 2015",
        professionalMembership: "PSI",
        publications: "15 Journals",
        projectsGuided: "10 Projects",
        subjectsTeaching: "Engineering Physics",
        researchPublications: "Quantum Mechanics (2019)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Vinayak Shet",
        designation: "Associate Professor",
        qualification: "M.Sc, Ph.D",
        experience: "14 Years",
        email: "vinayak.bsh@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Material Science",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2010",
        details: {
          qualifications: "Ph.D in Material Science, M.Sc in Physics",
          pastExperience: "14 years in academics",
          areasOfInterest: "Nanomaterials, Spectroscopy",
          achievements: "Best Teacher Award 2018",
          professionalMembership: "PSI Member",
          publications: "12 Journals",
          projectsGuided: "8 Projects",
          subjectsTeaching: "Engineering Physics, Solid State Physics",
          researchPublications: "Crystal Growth Studies (2021)",
          others: "NA",
        },
      },
    ],
        exploreData: {
      about: {
        title: 'ABOUT',
        body: 'This department focuses on holistic development of students through academic excellence and industry-relevant training.',
        highlights: [
          'Regular student activities and project-based learning.',
          'Industry workshops and guest lectures.',
          'Student chapter activities and tech clubs.'
        ],
      },
      thrust: {
        title: 'THRUST AREA',
        body: 'Exploring cutting-edge technologies to solve real-world problems.',
        highlights: [
          'Focus on emerging technologies and research areas.',
          'Industry-relevant specialization tracks.',
          'Research projects in cutting-edge domains.'
        ],
      },
      peo: {
        title: "(PEO's, PO's, PSO'S)",
        body: 'Program Educational Objectives and Outcomes.',
        highlights: [
          'Well-defined educational objectives.',
          'Clear program outcomes for skill development.',
          'Course outcomes mapped to objectives.'
        ],
      },
      syllabus: {
        title: 'SCHEME & SYLLABUS',
        body: 'Comprehensive academic structure and curriculum details.',
        highlights: [
          'Comprehensive semester-wise structure.',
          'Updated curriculum.',
          'Labs and practical sessions.'
        ],
      },
      placements: {
        title: 'PLACEMENT',
        body: 'Preparing students for successful careers in top-tier companies.',
        highlights: [
          'Comprehensive placement training.',
          'Regular mock interviews.',
          'Strong recruiter network.'
        ],
      },
      research: {
        title: 'RESEARCH AND PUBLICATION',
        body: 'Fostering a culture of innovation and scholarly research.',
        highlights: [
          'Faculty publications in reputed journals.',
          'Funded projects.',
          'Active conference participation.'
        ],
      },
      facultyStaff: { title: 'FACULTY AND STAFF', body: '', highlights: [] },
      facilities: {
        title: 'FACILITIES',
        body: 'State-of-the-art infrastructure for effective learning.',
        highlights: [
          'Modern computer labs.',
          'Smart classrooms.',
          'High speed internet.'
        ],
      },
      workshop: {
        title: 'WORKSHOP AND CONFERENCE',
        body: 'Organizing technical knowledge-sharing platforms.',
        highlights: [
          'National workshops.',
          'Guest lectures.',
          'Industry expert sessions.'
        ],
      },
      clubs: {
        title: 'PROFESSIONAL BODIES',
        body: 'Interaction with professional networks and student clubs.',
        highlights: [
          'Professional body chapters.',
          'Club meetups and events.',
          'Student leadership activities.'
        ],
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        body: 'Celebrating excellence in academics and research.',
        highlights: [
          'National competition awards.',
          'Research excellence recognitions.',
          'Academic achievements.'
        ],
      },
      activities: {
        title: 'DEPARTMENT ACTIVITIES',
        body: 'Ongoing events and technical activities within the department.',
        highlights: [
          'Technical symposiums.',
          'Cultural events.',
          'Skill-based workshops.'
        ],
      },
      newsletter: {
        title: 'E-NEWSLETTER',
        body: 'Staying updated with the latest department news.',
        highlights: [
          'Quarterly publications.',
          'Achievement updates.',
          'Event highlights.'
        ],
      },
    },

recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  cd: {
    id: "cd",
    name: "Computer Design",
    title: "Computer Science & Design",
    vision:
      "To blend creativity with computing for innovative digital solutions.",
    mission: "To nurture designers who can code and coders who can design.",
    hod: {
      name: "Dr. CD HOD",
      designation: "Professor & HOD - CS & Design",
      qualification: "Ph.D",
      experience: "14+ Years",
      email: "hodcd@alvas.edu.in",
      phone: "+91 98765 43221",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
      joiningDate: "20-05-2014",
      details: {
        qualifications: "Ph.D in Interaction Design",
        pastExperience: "14 years",
        areasOfInterest: "UI/UX, Graphics",
        achievements: "Design Excellence Award",
        professionalMembership: "ACM SIGCHI",
        publications: "15 Journals",
        projectsGuided: "8 Projects",
        subjectsTeaching: "User Experience Design",
        researchPublications: "Digital Design (2023)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Ganesh Prasad",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "13 Years",
        email: "ganesh.cd@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Interaction Design",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2011",
        details: {
          qualifications: "Ph.D in Design, M.Tech in CSE",
          pastExperience: "13 years in academics",
          areasOfInterest: "UI/UX, Human-Computer Interaction",
          achievements: "Innovation in Design Award 2021",
          professionalMembership: "ACM Member",
          publications: "10 Journals",
          projectsGuided: "12 Projects",
          subjectsTeaching: "Graphic Design, Interface Design",
          researchPublications: "User Centric Design (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Kavya Hegde",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "8 Years",
        email: "kavya.cd@alvas.edu.in",
        phone: "+91 90000 00002",
        aoi: "Game Design",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        joiningDate: "15-07-2016",
        details: {
          qualifications: "M.Tech in CS, BE in CSE",
          pastExperience: "8 years in teaching",
          areasOfInterest: "2D/3D Animation, Game Mechanics",
          achievements: "Best Faculty Award 2022",
          professionalMembership: "CSI Member",
          publications: "5 Journals",
          projectsGuided: "8 Projects",
          subjectsTeaching: "Computer Graphics, Game Dev",
          researchPublications: "VFX Trends (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Satish Rao",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "10 Years",
        email: "satish.cd@alvas.edu.in",
        phone: "+91 90000 00003",
        aoi: "Digital Media",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        joiningDate: "20-08-2014",
        details: {
          qualifications: "Ph.D in Multimedia, M.Tech",
          pastExperience: "10 years in academics",
          areasOfInterest: "Augmented Reality, Virtual Reality",
          achievements: "Copyright for Design Tool",
          professionalMembership: "IEEE Member",
          publications: "7 Journals",
          projectsGuided: "10 Projects",
          subjectsTeaching: "AR/VR, Digital Image Processing",
          researchPublications: "Mixed Reality Apps (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Anusha Nayak",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "6 Years",
        email: "anusha.cd@alvas.edu.in",
        phone: "+91 90000 00004",
        aoi: "Front-end Technologies",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        joiningDate: "12-06-2018",
        details: {
          qualifications: "M.Tech in CSE, BE",
          pastExperience: "6 years in teaching",
          areasOfInterest: "Responsive Design, Frameworks",
          achievements: "Certified UI/UX Specialist",
          professionalMembership: "ISTE Member",
          publications: "3 Journals",
          projectsGuided: "6 Projects",
          subjectsTeaching: "Web Programming, Design Patterns",
          researchPublications: "Modern Web Arch (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Vikram Prabhu",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "12 Years",
        email: "vikram.cd@alvas.edu.in",
        phone: "+91 90000 00005",
        aoi: "Visual Computing",
        photo:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
        joiningDate: "05-01-2012",
        details: {
          qualifications: "Ph.D in Computer Vision, M.Tech",
          pastExperience: "12 years in teaching",
          areasOfInterest: "Object Detection, Image Synthesis",
          achievements: "Research Excellence Award",
          professionalMembership: "CVPR Member",
          publications: "15 Journals",
          projectsGuided: "12 Projects",
          subjectsTeaching: "Computer Vision, Data Visualization",
          researchPublications: "Visual Analytics (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Priyanka Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "7 Years",
        email: "priyanka.cd@alvas.edu.in",
        phone: "+91 90000 00006",
        aoi: "Creative Coding",
        photo:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        joiningDate: "14-02-2017",
        details: {
          qualifications: "M.Tech in CS, BE",
          pastExperience: "7 years in teaching",
          areasOfInterest: "Generative Art, Interactive Media",
          achievements: "Gold Medalist M.Tech",
          professionalMembership: "CSI",
          publications: "4 Journals",
          projectsGuided: "7 Projects",
          subjectsTeaching: "Multimedia Systems, Python",
          researchPublications: "Algorithmic Aesthetics (2022)",
          others: "NA",
        },
      },
    ],
    recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  ds: {
    id: "ds",
    name: "Data Science",
    title: "Computer Science & Engineering (Data Science)",
    vision: "To be a leader in data science education and research.",
    mission: "To equip students with analytical skills for data-driven world.",
    hod: {
      name: "Dr. DS HOD",
      designation: "Professor & HOD - Data Science",
      qualification: "Ph.D",
      experience: "15+ Years",
      email: "hodds@alvas.edu.in",
      phone: "+91 98765 43220",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      joiningDate: "12-08-2012",
      details: {
        qualifications: "Ph.D in Machine Learning",
        pastExperience: "15 years",
        areasOfInterest: "Big Data, ML",
        achievements: "Data Scientist of the Year 2021",
        professionalMembership: "IEEE Data Science",
        publications: "20 Journals",
        projectsGuided: "12 Projects",
        subjectsTeaching: "Big Data Analytics",
        researchPublications: "Data Trends (2022)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Raghavendra Kini",
        designation: "Associate Professor",
        qualification: "M.Tech, Ph.D",
        experience: "14 Years",
        email: "raghavendra.ds@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Predictive Analytics",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2010",
        details: {
          qualifications: "Ph.D in Data Science, M.Tech in CSE",
          pastExperience: "14 years in academics",
          areasOfInterest: "Machine Learning, Big Data",
          achievements: "Best Researcher Award 2021",
          professionalMembership: "IEEE Member",
          publications: "18 Journals",
          projectsGuided: "15 Projects",
          subjectsTeaching: "Data Mining, Machine Learning",
          researchPublications: "Predictive Modeling (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Shilpa Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "7 Years",
        email: "shilpa.ds@alvas.edu.in",
        phone: "+91 90000 00002",
        aoi: "Deep Learning",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        joiningDate: "15-07-2017",
        details: {
          qualifications: "M.Tech in CS, BE",
          pastExperience: "7 years in teaching",
          areasOfInterest: "Neural Networks, Computer Vision",
          achievements: "Certified AI Specialty",
          professionalMembership: "CSI Member",
          publications: "6 Journals",
          projectsGuided: "10 Projects",
          subjectsTeaching: "Deep Learning, Python",
          researchPublications: "CNN Architectures (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Naveen Prabhu",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "11 Years",
        email: "naveen.ds@alvas.edu.in",
        phone: "+91 90000 00003",
        aoi: "Natural Language Processing",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        joiningDate: "20-08-2013",
        details: {
          qualifications: "Ph.D in NLP, M.Tech",
          pastExperience: "11 years in academics",
          areasOfInterest: "Computational Linguistics, Text Mining",
          achievements: "Patent on Semantic Search",
          professionalMembership: "ACM Member",
          publications: "12 Journals",
          projectsGuided: "12 Projects",
          subjectsTeaching: "NLP, Information Retrieval",
          researchPublications: "Sentiment Analysis (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Rashmi Rai",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "6 Years",
        email: "rashmi.ds@alvas.edu.in",
        phone: "+91 90000 00004",
        aoi: "Statistical Modeling",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        joiningDate: "12-06-2018",
        details: {
          qualifications: "M.Tech in CSE, BE",
          pastExperience: "6 years in teaching",
          areasOfInterest: "R Programming, Data Viz",
          achievements: "Best Paper Award 2020",
          professionalMembership: "ISTE Member",
          publications: "4 Journals",
          projectsGuided: "8 Projects",
          subjectsTeaching: "Statistics, Data Visualization",
          researchPublications: "Visual Analytics (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Santosh Kumar",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "12 Years",
        email: "santosh.ds@alvas.edu.in",
        phone: "+91 90000 00005",
        aoi: "Reinforcement Learning",
        photo:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
        joiningDate: "05-01-2012",
        details: {
          qualifications: "Ph.D in ML, M.Tech",
          pastExperience: "12 years in teaching",
          areasOfInterest: "Robotics, Game Theory",
          achievements: "Research Excellence Award",
          professionalMembership: "IEEE",
          publications: "10 Journals",
          projectsGuided: "14 Projects",
          subjectsTeaching: "RL, AI Fundamentals",
          researchPublications: "Autonomous Systems (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Megha Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "5 Years",
        email: "megha.ds@alvas.edu.in",
        phone: "+91 90000 00006",
        aoi: "Cloud Computing for Data",
        photo:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        joiningDate: "14-02-2019",
        details: {
          qualifications: "M.Tech in CS, BE",
          pastExperience: "5 years in teaching",
          areasOfInterest: "AWS/Azure Data Tools, Spark",
          achievements: "AWS Certified Architect",
          professionalMembership: "CSI",
          publications: "2 Journals",
          projectsGuided: "5 Projects",
          subjectsTeaching: "Cloud Computing, Big Data",
          researchPublications: "Scalable Data Arch (2022)",
          others: "NA",
        },
      },
    ],
    recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
  icb: {
    id: "icb",
    name: "Integrated Computer Biology",
    title: "Integrated Computer Biology",
    vision: "To pioneer the intersection of computing and biological sciences.",
    mission:
      "To provide interdisciplinary education for future bio-technologists.",
    hod: {
      name: "Dr. ICB HOD",
      designation: "Professor & HOD - ICB",
      qualification: "Ph.D",
      experience: "12+ Years",
      email: "hodicb@alvas.edu.in",
      phone: "+91 98765 43219",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      joiningDate: "15-08-2015",
      details: {
        qualifications: "Ph.D in Bioinformatics",
        pastExperience: "12 years",
        areasOfInterest: "Genomics, Data Science",
        achievements: "Bio-Tech Innovation Award",
        professionalMembership: "ISCB",
        publications: "18 Journals",
        projectsGuided: "6 Projects",
        subjectsTeaching: "Bioinformatics",
        researchPublications: "Gene Data Analysis (2023)",
        others: "NA",
      },
    },
    faculty: [
      {
        name: "Prof. Sudarshan Bhat",
        designation: "Associate Professor",
        qualification: "M.Sc, Ph.D",
        experience: "13 Years",
        email: "sudarshan.icb@alvas.edu.in",
        phone: "+91 90000 00001",
        aoi: "Computational Genomics",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        joiningDate: "10-01-2011",
        details: {
          qualifications: "Ph.D in Systems Biology, M.Sc in Bioinformatics",
          pastExperience: "13 years in academics",
          areasOfInterest: "Genome Sequencing, Data Mining",
          achievements: "Regional Biotech Award 2021",
          professionalMembership: "ISCB Member",
          publications: "12 Journals",
          projectsGuided: "10 Projects",
          subjectsTeaching: "Genomics, Biostatistics",
          researchPublications: "Gene Expression Analysis (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Deepa Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "8 Years",
        email: "deepa.icb@alvas.edu.in",
        phone: "+91 90000 00002",
        aoi: "Proteomics",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        joiningDate: "15-07-2016",
        details: {
          qualifications: "M.Tech in Bioinformatics, BE in CSE",
          pastExperience: "8 years in teaching",
          areasOfInterest: "Protein Folding, Structural Bio",
          achievements: "Best Faculty Award 2020",
          professionalMembership: "CSI Member",
          publications: "6 Journals",
          projectsGuided: "8 Projects",
          subjectsTeaching: "Proteomics, Molecular Modeling",
          researchPublications: "3D Protein Prediction (2021)",
          others: "NA",
        },
      },
      {
        name: "Prof. Sandeep Nayak",
        designation: "Assistant Professor",
        qualification: "M.Sc, Ph.D",
        experience: "10 Years",
        email: "sandeep.icb@alvas.edu.in",
        phone: "+91 90000 00003",
        aoi: "Algorithm Design for Bio",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        joiningDate: "20-08-2014",
        details: {
          qualifications: "Ph.D in algorithms, M.Tech",
          pastExperience: "10 years in academics",
          areasOfInterest: "String Matching, Sequence Alignment",
          achievements: "Copyright for Bio Tool",
          professionalMembership: "IEEE Member",
          publications: "9 Journals",
          projectsGuided: "12 Projects",
          subjectsTeaching: "Bio-Algorithms, Discrete Maths",
          researchPublications: "Scalable Alignment Methods (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Anusha Rao",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "6 Years",
        email: "anusha.icb@alvas.edu.in",
        phone: "+91 90000 00004",
        aoi: "Synthetic Biology",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        joiningDate: "12-06-2018",
        details: {
          qualifications: "M.Tech in Bio-Tech, BE",
          pastExperience: "6 years in teaching",
          areasOfInterest: "Bio-circuits, CRISPR Modeling",
          achievements: "Best Paper Presentation 2022",
          professionalMembership: "ISTE Member",
          publications: "3 Journals",
          projectsGuided: "6 Projects",
          subjectsTeaching: "Synthetic Bio, Cell Biology",
          researchPublications: "Genetic Mod Kits (2022)",
          others: "NA",
        },
      },
      {
        name: "Prof. Vikram Shetty",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "11 Years",
        email: "vikram.icb@alvas.edu.in",
        phone: "+91 90000 00005",
        aoi: "Systems pharmacology",
        photo:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
        joiningDate: "05-01-2013",
        details: {
          qualifications: "Ph.D in pharmacology, M.Tech",
          pastExperience: "11 years in teaching",
          areasOfInterest: "Drug Design, Pharmacokinetics",
          achievements: "Research Excellence Award 2021",
          professionalMembership: "ACS Member",
          publications: "14 Journals",
          projectsGuided: "10 Projects",
          subjectsTeaching: "Cheminformatics, Drug Discovery",
          researchPublications: "In-silico Screening (2023)",
          others: "NA",
        },
      },
      {
        name: "Prof. Rashmi Prabhu",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        experience: "7 Years",
        email: "rashmi.icb@alvas.edu.in",
        phone: "+91 90000 00006",
        aoi: "Biological Databases",
        photo:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        joiningDate: "14-02-2017",
        details: {
          qualifications: "M.Tech in Bioinformatics, BE",
          pastExperience: "7 years in teaching",
          areasOfInterest: "Database Mgmt, Bio-Curating",
          achievements: "Gold Medalist M.Tech",
          professionalMembership: "CSI",
          publications: "5 Journals",
          projectsGuided: "7 Projects",
          subjectsTeaching: "Database Systems, Bio-Programming",
          researchPublications: "Cloud Bio-Repos (2022)",
          others: "NA",
        },
      },
    ],
    recruiters: [
      { name: "Infosys", logo: "/logos/infosys.png" },
      { name: "TCS", logo: "/logos/tcs.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
    ],
  },
};

// Map explore keys to data registry keys if they differ
export const exploreKeyToDeptId: Record<string, string> = {
  agri: "agri",
  ai: "ai",
  bsh: "bsh",
  cd: "cd",
  chemistry: "chemistry",
  civil: "civil",
  cse: "cse",
  ds: "ds",
  ece: "ece",
  english: "english",
  icb: "icb",
  ise: "ise",
  mathematics: "mathematics",
  mba: "mba",
  mech: "mech",
  mtech: "mtech",
  physics: "physics",
};
