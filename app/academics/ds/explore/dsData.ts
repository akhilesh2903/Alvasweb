import { DepartmentData, Faculty } from "@/lib/departments";

export const dsDepartmentData: DepartmentData = {
  id: "ds",
  name: "Department of Ds",
  title: "Department of Ds Engineering",
  vision: `Centre of excellence to empower the young minds in the field of Department of Ds Engineering with research focus and skill development through transformative education catering to the needs of the society`,
  mission:
    `M1:	To create Learning Environment to enable the students for excellence in the field of Department of Ds Engineering.
M2:	To empower the students with ndsssary skills for solving the complex technological problems.
M3:	To inculcate Research Culture among Teaching Learning Group by guiding them towards Research activities to bridge the gap between Industry and Academia.
M4:	By imbibing the students with human values and ethics through transformative education and make them socially responsible professionals.


`,
  hod: {
    name: "Prof. Harish Kunder",
    designation: "Associate Professor & Head",
    qualification: "Ph.D (Thesis Submitted)",
    experience: "22+ Years",
    email: "aietaiml08@aiet.org.in",
    phone: "+91 98765 43214",
    photo:
      "/api/image-proxy?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D10_iBnKvNTiyqzkoHdBOn2sxyWkW0sTHV",
    joiningDate: "12-08-2010",
    details: {
      qualifications: `• Ph.D. in Computer Science & Engineering - VTU (2026 - Thesis Submitted)
• M.Tech in Computer Science & Engineering - VTU (2012)
• B.E in Computer Science & Engineering - VTU (2004)
• Ph.D. Title: An Efficient Method For Handling Non-Convex Optimization Problems In Deep Learning
• Research Area: Deep learning
• Supervisor: Dr. Manjunath Kotari`,
      pastExperience: `• Associate Professor & Head - Dept. of CSD, DS & AIML
• Total Experience: 22+ Years Teaching Experience
• Specialized in Artificial Intelligence, Machine Learning, Data Science, Cryptography, Network Security, and Non-Convex Optimization
• Published research in IEEE, Springer, CRC Press, and Wiley
• Patent holder (UK & Indian patents)
• Certified Innovation Ambassador (MoE & AICTE)
• NVIDIA Lab Grant recipient
• VTU MOOC Nodal Officer`,
      areasOfInterest: `• Artificial Intelligence
• Machine Learning
• Data Science
• Generative AI
• Transfer Learning
• Cryptography
• Network Security
• Non-Convex Optimization`,
      achievements: `• Bhishma Acharya Award – Bharath Education Excellence (2025)
• NVIDIA Grant (₹9 Lakhs) for AI Lab Setup
• KSCST Project Funding (5 Projects)
• Certified Innovation Ambassador – MoE & AICTE
• Google Cloud Career Launchpad Recognition – 2025
• SSRN Top Downloads Recognition
• UK Patent Granted: Precision Digital Micrometer (March 2024)
• Indian Patent (2024): Advanced Udder Health Monitoring & Intervention System`,
      professionalMembership: `• Indian Society for Technical Education (ISTE) – LM 50134
• Computer Society of India (CSI) – F8002369
• IEEE - 102113149
• IAENG (International Association of Engineers) - 300383`,
      publications: `• Book Chapter: AI-Enabled Businesses: Strategy for Innovation – John Wiley & Sons, 2025
• Book Chapter: Data Science & Exploration in Artificial Intelligence – CRC Press, 2025
• Patent: Precision Digital Micrometer – UK Patent (Granted: March 2024)
• Patent: Advanced Udder Health Monitoring & Intervention System – Indian Patent (2024)`,
      projectsGuided: `• KSCST Project Funding (5 Projects)
• Student mini and major projects addressing real-world challenges
• Mentors research in Deep Learning, Optimization, and AI in Healthcare`,
      subjectsTeaching: `• Finite Automata & Formal Languages
• System Simulation & Modelling
• Operations Research
• Compiler Design
• Graph Theory
• Discrete Mathematical Structures
• Logic Design
• Analysis and Design of Algorithms
• Data Base Management Systems
• Operating System
• Data Structures
• OOPs with C++
• Computer Graphics
• Generative AI Lab`,
      researchPublications: `• Journal: Monkeypox disease detection using deep learning, Indian Journal of Science and Technology, 2025
• Journal: Exploration of non-convex optimization challenges, International Journal of Computational & Digital Systems, 2024
• Journal: A structured approach with RASP data perturbation for confidential queries in cloud, IJMRD, 2015
• Conference: Autonomous Path-Finding System using Q-Learning Algorithm – CRC Press, 2025
• Conference: The BUNK – Advanced Voice Assistant using NLP & AI – AIDE Conference, 2025
• Conference: Music Genre Classification Using CNN & MobileNetV2 – IEEE ICCCNT 2024
• Conference: Warehouse Inventory Management using Drone & Raspberry Pi – IEEE CONECCT 2024
• Conference: IoAHT Framework for Mastitis Detection – ICRAIS 2023`,
      others: `• FDP: ATAL FDP on Introduction to Deep Learning – UVCE Bengaluru – 2021
• FDP: ATAL FDP on AI & ML for Healthcare – COEP Pune – 2021
• FDP: ATAL FDP on Cyber Security – NITTTR Chandigarh – 2020
• Workshop: Online Course on Remote Sensing & GIS Technology – ISRO – 2020
• Workshop: National Level Workshop on Artificial Intelligence – 2020
• Workshop: Network Simulation using NS-3 – AIET – 2015
• Seminar: IEEE ICCCNT 2024
• Seminar: International Conference on AI & Data Engineering`,
    },
  },
  faculty: Array.from(
    { length: 10 },
    (_, i): Faculty => ({
      name: `Prof. DS Faculty ${i + 1}`,
      designation:
        (i + 1) % 3 === 0 ? "Associate Professor" : "Assistant Professor",
      qualification: (i + 1) % 2 === 0 ? "M.Tech, Ph.D" : "M.Tech",
      experience: `${5 + (i + 1)} Years`,
      email: `faculty${i + 1}.ds@alvas.edu.in`,
      phone: `+91 90000 000${(i + 1).toString().padStart(2, "0")}`,
      aoi: "Specialized Research Area",
      photo: `https://images.unsplash.com/photo-${1500000000000 + (i + 1) * 10000 + 4}?auto=format&fit=crop&w=400&q=80`,
      joiningDate: `01-01-20${15 + ((i + 1) % 8)}`,
      details: {
        qualifications: `BE in DS, M.Tech in Specialization`,
        pastExperience: "5 years in Industry, 5 years in Academics",
        areasOfInterest: "Research, Development, Innovation",
        achievements: "Best Faculty Award, Multiple Publications",
        professionalMembership: "IEEE, CSI Member",
        publications: "10+ International Journals",
        projectsGuided: "15+ UG Projects",
        subjectsTeaching: "Core Subjects",
        researchPublications: "Rdsnt Research in Domain (2023)",
        others: "NA",
      },
    }),
  ),
  exploreData: {
    about: {
      title: "ABOUT DEPARTMENT OF DATA SCIENCE",
      body: `The Department of Data Science trains students in advanced analytics, big data technologies, and statistical modeling to extract actionable insights from vast amounts of data.`,
      highlights: [
        "Dynamic and modernized curriculum.",
        "Focus on hands-on practical learning.",
        "Strong industry-academia connections.",
      ],
    },
    thrust: {
      title: "THRUST AREA",
      body: "Big Data Analytics, Statistical Modeling, Predictive Analytics, and Cloud Computing.",
      highlights: [
        "• Core Domain Expertise",
        "• Advanced Research Methodologies",
        "• Industry-Standard Tools",
        "• Multi-disciplinary Projects",
      ],
    },
    peo: {
      title: "(PEO's, PO's, PSO'S)",
      body: `PO1: Engineering Knowledge: Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to solve complex engineering problems.

PO2:	Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems using first principles of mathematics, natural sciences and engineering sciences.

PO3:	Design and Development of solutions: Design solutions for complex engineering problems and digital systems, components or processes that meet specified needs with appropriate consideration for public health and safety and cultural, societal and environmental considerations.

PO4:	Conduct Investigations: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of the information to provide valid conclusions.

PO5:	Modern Tool Usage: Create, select and apply appropriate techniques, resources and modern engineering and IT tools to complex engineering activities with an understanding of the limitations.

PO6:	The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.

PO7:	Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.

PO8:	Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.

PO9:	Individual and team work: Function effectively as an individual and as a member or leader in diverse teams, and in multidisciplinary settings.

PO10:	Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations and give and rdsive clear instructions.

PO11:	Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.

PO12:	Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.

PEO1:	Apply mathematical, scientific and engineering skills for solving problems in the area of Department of Ds Engineering.
PEO2: Expose to emerging technologies and excel in industries/higher studies/research.
PEO3:	Apply analytical skills in the area of Department of Ds Engineering to become competent and employable.
PEO4:	Inculcate Professional ethics, human values, team work for solving engineering problems and contribute to societal needs.

PSO1: Understand and apply the principles of Department of Ds Engineering in various domains of Analog and Digital systems.

PSO2: Design and implement systems using the concepts of Electronics, Signal Processing, Embedded Systems and Semiconductor Technology.

PSO3: Apply modern Hardware and software tools to analyze and solve engineering Problems.`,
      highlights: [
        "Strong foundational knowledge in electronics.",
        "Practical application of theoretical concepts.",
        "Leadership and ethical engineering practices.",
      ],
    },
    syllabus: {
      title: "SCHEME & SYLLABUS",
      body: "Latest VTU curriculum with advanced elective courses in specialization tracks.",
      highlights: [
        "Modernized credit-based system.",
        "Emphasis on project-oriented learning.",
        "Regular workshops on syllabus-linked tools.",
      ],
    },
    placements: {
      title: "PLACEMENT",
      body: "Students achieve excellent placements in top-tier multinational companies and core industries.",
      highlights: [
        "Dedicated placement training.",
        "MoUs with leading corporates.",
        "High success rate for eligible students.",
      ],
    },
    research: {
      title: "RESEARCH AND PUBLICATION",
      body: "Active participation in research, leading to numerous publications in reputed journals and international conferences.",
      highlights: [
        "State and National funded projects.",
        "Student involvement in research.",
        "High-impact journal publications.",
      ],
    },
    facultyStaff: { title: "FACULTY AND STAFF", body: "", highlights: [] },
    facilities: {
      title: "FACILITIES",
      body: "Modernized infrastructure equipped with the latest software and hardware to support advanced learning and research.",
      highlights: [
        "Well-equipped laboratories.",
        "Access to latest software tools.",
        "Dedicated project incubation spaces.",
      ],
    },
    workshop: {
      title: "WORKSHOP AND CONFERENCE",
      body: "Regularly organizing and hosting technical events, guest lectures, and national seminars.",
      highlights: [
        "Annual technical fests.",
        "Workshops by industry experts.",
        "Hands-on skill development sessions.",
      ],
    },
    clubs: {
      title: "PROFESSIONAL BODIES",
      body: "Vibrant student clubs and professional societal chapters to promote extracurricular technical growth.",
      highlights: [
        "Active student chapters.",
        "Peer-to-peer learning clubs.",
        "Participation in national hackathons.",
      ],
    },
    achievements: {
      title: "ACHIEVEMENTS",
      body: "Consistent track record of academic excellence, university ranks, and winning national-level competitions.",
      highlights: [
        "Outstanding university ranks.",
        "Awards in technical competitions.",
        "Recognition in sports and culture.",
      ],
    },
    activities: {
      title: "DEPARTMENT ACTIVITIES",
      body: "A holistic environment encouraging students to engage in diverse co-curricular and extracurricular activities.",
      highlights: [
        "Frequent industrial visits.",
        "Alumni interaction sessions.",
        "Community outreach programs.",
      ],
    },
    newsletter: {
      title: "E-NEWSLETTER",
      body: "Quarterly updates from the department of DS.",
      highlights: [
        "Showcase of student innovations.",
        "Faculty research achievements.",
        "Event snapshots.",
      ],
    },
  },
  recruiters: [
    { name: "Infosys", logo: "/infosys.png" },
    { name: "TCS", logo: "/tcs.png" },
    { name: "Wipro", logo: "/wipro.png" },
    { name: "Accenture", logo: "/accenture.png" },
    { name: "Capgemini", logo: "/capgemini.png" },
    { name: "Amazon", logo: "/amazon.png" },
  ],
};
