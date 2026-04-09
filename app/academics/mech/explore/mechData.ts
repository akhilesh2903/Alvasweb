import { DepartmentData, Faculty } from "@/lib/departments";
 
const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const mechDepartmentData: DepartmentData = {
  id: "mech",
  name: "Department of Mech",
  title: "Department of Mech Engineering",
  vision: `Impart Quality Technical Education to excel in Mechanical Engineering to meet the needs of the community.
`,
  mission: `M1:Empower student knowledge in basic and applied areas of Mechanical Engineering.
M2:Strengthening collaboration with industries, research organizations, and institutes for an internship, joint research, and consultancy.
M3:To inculcate entrepreneurial skills and human values in order to cater to the needs of society.
M4:Exposure to industrial practices for managerial skills & professionalism.

`,
  hod: {
    name: "Dr. Satyanarayan",
    designation: "Professor & HOD - MECH",
    qualification: "Ph.D",
    experience: "15+ Years",
    email: "hodmech@alvas.edu.in",
    phone: "+91 98765 43214",
    photo: imageProxyUrl(
      "https://drive.google.com/uc?export=view&id=1oFVvC5zN68_KLQ3XDUp6QQd40mnpJe2y",
    ),
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
  faculty: [
    {
      name: "Dr. GURUSHANTH B VAGGAR",
      designation: "Associate Professor",
      qualification: "B.E, M.Tech, Ph.D",
      experience: "21 Years",
      email: "gvaggar7@aiet.org.in",
      phone: "NA",
      aoi: "Thermal Properties of Polymer Composite & Natural Materials, Fluid Mechanics",
      photo: imageProxyUrl("https://drive.google.com/uc?export=view&id=1g9N88TlX4yW2MfngHptNywh9qysKsg5B"),
      joiningDate: "21/07/2014",
      details: {
        qualifications: "B.E: Mechanical Engineering (2001)\nM.Tech: Thermal Power Engineering (2008)\nPh.D: Mechanical Engineering Sciences (2022)",
        pastExperience: "ALVA’S Institute of Engineering and Technology (15 Years)\nVSM Institute of Technology (02 Years)\nK.L.E College of Engineering and Technology (01 Year)\nTontadarya College of Engineering (01 Year)\nKLE’S C. B. Kore Polytechnic (02 Years)",
        areasOfInterest: "Thermal Properties of Polymer Composite & Natural Materials\nFluid Mechanics\nEngineering Drawing",
        achievements: "Chief Advisor for establishing a new engineering college\nMultiple Best Paper Awards (MJMP 2025, SMARTME 2024, ICRAEM 2022)\nAuthor of textbook \"Quantitative and Qualitative Research Methods\"\nReceived Rs. 5 Lakh fund from YIC-2023, MIC\nCompleted 7 NPTEL courses\n5 Design patents granted",
        professionalMembership: "Life Member of India Society for Technical Education (ISTE) - LM61570",
        publications: "26+ Publications in Journals and Conferences including Elsevier, Springer, IJERT, etc.",
        projectsGuided: "A portable electric ploughing, spraying, and levelling machine\nSmart wheelchair",
        subjectsTeaching: "Basic Thermodynamics, Applied Thermodynamics, Fluid Mechanics, Computer-Aided Engineering Drawing, Elements of Mechanical Engineering, Power Plant Engineering, etc.",
        researchPublications: "Google Scholar link: https://scholar.google.com/citations?user=YLOtyGUAAAAJ",
        others: "Responsibilities: Department NAAC Criteria 7 Coordinator, NBA Coordinator, IQAC Coordinator\nPatents: 4 Grants\nBooks Published: 1",
      },
    },
    {
      name: "Prof. Sharathchandra Prabhu",
      designation: "Sr. Assistant Professor",
      qualification: "B.E, M.Tech",
      experience: "21 Years",
      email: "sharathchandraprabhu@aiet.org.in",
      phone: "NA",
      aoi: "Manufacturing, Quality Control, Materials Engineering",
      photo: imageProxyUrl("https://drive.google.com/uc?export=view&id=1336iGkStvDPIlfyeuvWubrOcF2JmW0aY"),
      joiningDate: "22/07/2013",
      details: {
        qualifications: "B.E: Industrial and Production Engineering (2000)\nM.Tech: Engineering Management (2002)",
        pastExperience: "SRINIVAS INSTITUTE OF TECHNOLOGY (2008-2013)\nTHE TIMES OF INDIA, Bangalore (2005-2008)\nVIJAYANANDA PRINTERS LTD. Shivamogga (2002-2005)",
        areasOfInterest: "Manufacturing\nQuality Control\nMaterials Engineering",
        achievements: "Received a grant of Rs. 1,00,000 for the project: an automatic folding bed for physically disabled persons.",
        professionalMembership: "NA",
        publications: "Nil",
        projectsGuided: "NA",
        subjectsTeaching: "Computer-Aided Engineering Drawing, Elements of Mechanical Engineering, Industrial Engineering, Engineering Management, Engineering Economics, Fluid Mechanics, Project Management, Operations Management, Statistical Quality Control, Total Quality Management, Production and Operations Management, Product Life Cycle Management",
        researchPublications: "Nil",
        others: "Responsibilities: Department EMS Coordinator, Project Coordinator",
      },
    },
    {
      name: "Prof. Hemanth Suvarna",
      designation: "Sr. Assistant Professor",
      qualification: "B.E, M.Tech",
      experience: "21 Years",
      email: "hemanthsuvarna@aiet.org.in",
      phone: "NA",
      aoi: "Manufacturing, Non-Conventional Energy Sources",
      photo: "",
      joiningDate: "24/07/2014",
      details: {
        qualifications: "B.E: NMAM Institute of Technology, Nitte VTU, Belagavi (2004)\nM.Tech: NMAM Institute of Technology, Nitte (2010)",
        pastExperience: "P A College of Engineering, Mangalore (2005-2014)\nAlva’s Institute of Engineering & Technology, Mijar (2014-Till date)",
        areasOfInterest: "Manufacturing\nNon-Conventional Energy Sources",
        achievements: "Nil",
        professionalMembership: "NA",
        publications: "1) Naveen Bilagi, Nandana M Hegde, Ketan Karande, Dinesh K Naik, Hemanth Suvarna, A review on Automation in Hydroponics, IRJET, Vol 10, Issue 5, May 2023.\n2) Suvarna H, Kundar B, Pinto CL, Shetty LS, Gurukiran, A Review of the Vapour Absorption Solar Refrigeration System. IJRP, Vol 4, Issue 2, Feb 2023.",
        projectsGuided: "NA",
        subjectsTeaching: "Hydraulics & Pneumatics, Computer-Aided Engineering Drawing, Renewable Energy Power plants, Non-Conventional Energy Sources",
        researchPublications: "Nil",
        others: "Responsibilities: Department Forum Coordinator, Auto Club Coordinator, Department E-News Coordinator",
      },
    },
    {
      name: "Dr KIRAN C.H",
      designation: "Assistant Professor",
      qualification: "B.E, M.Tech, Ph.D",
      experience: "15 Years",
      email: "ckmkiran@aiet.org.in",
      phone: "NA",
      aoi: "Green Technology, CFD, Industrial Robotics",
      photo: "",
      joiningDate: "09/01/2012",
      details: {
        qualifications: "B.E: Malnad College of Engineering [MCE], Hassan (2008)\nM.Tech: Thermal Power Engineering, Adichuchanagiri Institute of Technology [AIT], Chikkamagaluru (2011)\nPh.D: Mechanical Engineering Sciences, VTU, Belagavi (2025)",
        pastExperience: "Thermax Limited, Pune (02 Years)",
        areasOfInterest: "Green Technology\nCFD\nIndustrial Robotics",
        achievements: "Commissioned as NCC Associate NCC Officer (ANO) with the rank of Lieutenant\nSuccessfully guided five KSCST-funded projects\nAs Autoclub Coordinator, trained student teams (Team Dhrutaha, Team Alva’s Motorsport) for national events like Formula Bharat, FKDC, Mega ATV Championship\nConsultancy: Parisheka Yantra & Upahana Treatment equipment for Alva’s Ayurvedic Medical College\nCertified training sessions on CATIA V5\nCompleted Train the Trainer in Aptitude Training",
        professionalMembership: "Lifetime member of the Indian Society for Technical Education (ISTE) - LM96049",
        publications: "12+ publications in journals and conferences such as IEEE, Springer, IOP, IRJET, STM Journals.",
        projectsGuided: "Guided 5 KSCST-funded projects (2012, 2014, 2016, 2020, and 2022).",
        subjectsTeaching: "Thermodynamics, Fluid Mechanics, Turbo-machine, Finite Element Method/Analysis, Computational Methods for Heat transfer and Fluid Flow, Heat transfer, Industrial Robotics, Electric and Hybrid Vehicle Technology, Computer Aided Machine Drawing, Refrigeration and Air-condition, HVAC, Matlab & Python, Catia V5 & V6, ANSYS Workbench",
        researchPublications: "12+ publications in reputed journals and conferences.",
        others: "Responsibilities: Department NAAC Coordinator, Department NBA Coordinator, Time table Coordinator, Pre-placement training Coordinator\nPatents: 3 Indian Published Patents\nBooks Published: Fluid Mechanics and Machinery (Quill Tech, 2025)\nWorkshops/FDPs: Participated in multiple workshops on CFD, Nano Technology, MATLAB, Robotics MOOCs, ATAL FDPs",
      },
    },
    {
      name: "Dr. Pramod V Badyankal",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech, Ph.D",
      experience: "15 Years",
      email: "pramodvab@aiet.org.in",
      phone: "NA",
      aoi: "Teaching, Designing",
      photo: imageProxyUrl("https://drive.google.com/uc?export=view&id=1q2ob7PZx_rWlZGw12KZppF7UNVewsFWX"),
      joiningDate: "29-07-2011",
      details: {
        qualifications: "B.E: STJIT, Ranebennur, VTU (2009)\nM.Tech: JNNCE, Shivamogga, VTU (2012)\nPh.D: VTU, Belguam (2024)",
        pastExperience: "Nil",
        areasOfInterest: "Teaching\nDesigning",
        achievements: "Organizer for the National Workshop on Manufacturing of Gas Turbine and its Analysis of Heat Transfer (Dec 2025)",
        professionalMembership: "The Indian Society for Technical Education (M.No.: LM960470)",
        publications: "12+ publications in reputed journals including Materials Today: Proceedings, International Journal of Engineering & Technology, Engineering Research Express, etc. (Details in full profile)",
        projectsGuided: "Nil",
        subjectsTeaching: "Mechanical Vibration, Control Systems, Kinematics of Machine, Dynamics of Machine, Design of Machine Elements I and II, Computer Aided Engineering Drawing, Mechanical Engineering, Mechanical Measurements and Metrology, Fracture Mechanics",
        researchPublications: "SCOPUS Author ID: 56461309800\nGoogle Scholar: https://scholar.google.com/citations?user=qjFUGOwAAAAJ&hl=en\nORCID ID: 0000-0002-8910-7159",
        others: "Responsibilities: Time Table coordinator, IA Coordinator, NSS Program Officer, Class Coordinator, NIRF Coordinator, IQAC Coordinator\nReviewer for multiple Scopus-indexed journals and International conferences",
      },
    },
    {
      name: "Dr. Kumar Swamy M C",
      designation: "Sr. Assistant Professor",
      qualification: "B.E, M.Tech, Ph.D",
      experience: "14 Years",
      email: "mckswamy@aiet.org.in",
      phone: "NA",
      aoi: "IC engines, Heat Transfer, CFD, Interfacial Materials, Electronic Cooling systems",
      photo: "",
      joiningDate: "25-07-2012",
      details: {
        qualifications: "B.E: Malnad College of Engineering, Hassan, VTU (2009)\nM.Tech: SIT, Tumkur, VTU (2012)\nPh.D: VTU, Belguam (2024)",
        pastExperience: "Nil",
        areasOfInterest: "IC engines\nHeat Transfer\nCFD\nInterfacial Materials\nElectronic Cooling systems",
        achievements: "Best Poster Presentation AWARD (1st Place) at iCOLD 2019\nBest Paper Presentation AWARD (1st Place) at ICRAEM - 2022\nReceived 36 Lakh CSR fund for Projects and Institutional Activities.",
        professionalMembership: "Life Member of ISTE",
        publications: "7+ publications in reputed journals (Springer, Elsevier) including Transactions of the Indian Institute of Metals, Journal of Electronic Materials, Materials Today Proceedings, and Journal of Materials Science.",
        projectsGuided: "Guided 16 BE level projects and 1 M.Tech. level project",
        subjectsTeaching: "Basic Thermodynamics, Applied Thermodynamics, Fluid Mechanics, Heat Transfer, Non-Conventional Energy Resources, Research Methodology, Energy Engineering",
        researchPublications: "SCOPUS Author ID: 57815560200\nGoogle Scholar: https://scholar.google.com/citations?user=viVWcFcAAAAJ&hl=en\nResearchGate: https://www.researchgate.net/profile/Mck-Swamy",
        others: "Responsibilities: Placement Lead, Idea lab Co-ordinator, Learning and Development Head, EDC Coordinator, Internship Coordinator\nSet up BETA CAE Centre of Excellence\nSet up Toyota Centre of Excellence\nManufacturing Sector Head for Alvas Pragati\nOrganizer for MJMP 2025, ICRAEM 2022, and iCOLD 2019",
      },
    },
    {
      name: "Mr. DEEPAK KOTHARI",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech.",
      experience: "15 Years",
      email: "deepakkothari@aiet.org.in",
      phone: "NA",
      aoi: "Production Management, Quality Management",
      photo: imageProxyUrl("https://drive.google.com/uc?export=view&id=11iVd5v-LltC5XzuYedUMljFECnPE2ZLZ"),
      joiningDate: "19/07/2013",
      details: {
        qualifications: "B.E., M.Tech.",
        pastExperience: "KLE Polytechnic, Bailhongal (2011-2012)",
        areasOfInterest: "Production Management\nQuality Management",
        achievements: "Successfully guided three KSCST-funded projects (2016-17, 2021-22, and 2023-24)\nLifetime member of the Indian Society for Technical Education (ISTE)",
        professionalMembership: "Lifetime member of the Indian Society for Technical Education (ISTE)",
        publications: "11+ publications focusing on topics like 'Solar-Powered Sustainable Cutting Solution', 'Effect of Exhaust Gas Recirculation', 'Glass Fiber Reinforced Epoxy Matrix Composites', and more. (Details in full profile)",
        projectsGuided: "Guided 3 KSCST-funded projects",
        subjectsTeaching: "Total Quality Management, Supply Chain Management, Project Management, Mechanical Measurement and Metrology, Manufacturing Process I & II, Operation Research, Management and Entrepreneurship, Engineering Economics, Computer-Integrated Manufacturing, Industrial Engineering, Non-Traditional Machining, Industrial Safety, Product Data & Management",
        researchPublications: "SCOPUS Author ID: 58790087900\nGoogle Scholar: https://scholar.google.com/citations?user=IdH5ciUAAAAJ&hl=en",
        others: "Responsibilities: NAAC Criteria 3 College level Coordinator, Department NBA Criteria 8 Coordinator, Time table Coordinator, Internal Test Coordinator, Internship Coordinator, Centre Of Excellence TKM Trainer\nPatents: 3 Indian Published Patents\nConferences & Workshops: Active participation in numerous national and international technical events\nCertificates: Lean and Six Sigma Yellow/Green Belt, Project Planning (Coursera)",
      },
    },
    {
      name: "Mr. SRINIVASA C S",
      designation: "Assistant Professor",
      qualification: "B.E, M.Tech, (Ph.D)",
      experience: "13 Years",
      email: "srinivasa@aiet.org.in",
      phone: "NA",
      aoi: "Thermal power Engineering, Material science Engineering, Metal Matrix composite, Polymer composite",
      photo: "",
      joiningDate: "21/07/2014",
      details: {
        qualifications: "B.E\nM.Tech\n(Ph.D)",
        pastExperience: "Nil",
        areasOfInterest: "Thermal power Engineering\nMaterial science Engineering\nMetal Matrix composite\nPolymer composite",
        achievements: "BEST PAPER AWARD for 'Preparation of Glass Fibber-Epoxy Layered Composites and flammability Testing' at SMARTME-2024\nReceived 36 Lakh CSR fund for Projects and Institutional Activities",
        professionalMembership: "Life Member of ISTE, IAENG, Failure Analysis Society",
        publications: "8+ publications in reputed journals including Springer Nature Singapore, International Journal of Integrated Engineering, and Science Direct Materials Today Proceedings. (Details in full profile)",
        projectsGuided: "Guided 8 BE level projects",
        subjectsTeaching: "Fluid mechanics, Renewable energy and power plant Engineering, Power plant Engineering, Energy Engineering, Non Traditional machining, Composite Material, Computer Integrated engineering, Elements of Mechanical Engineering",
        researchPublications: "SCOPUS Author ID: 5722203027\nGoogle Scholar: https://scholar.google.com/citations?hl=en&user=ebFi7C8AAAAJ\nResearchGate: https://www.researchgate.net/profile/Srinivasa-C-S",
        others: "Responsibilities: Placement Lead, EDC Coordinator, IA Coordinator, Alumni Coordinator, Department Library Coordinator\nSet up BETA CAE Centre of Excellence\nSet up Toyota Centre of Excellence\nANSA Add on Lab Coordinator\nManufacturing Sector Head for Alva’s Pragati\nOrganizer for MJMP 2025 and iCOLD 2019",
      },
    },
    {
      name: "Mr. PRAVEEN K C",
      designation: "Assistant Professor",
      qualification: "B.E, M.Tech",
      experience: "15 Years",
      email: "praveenkc@aiet.org.in",
      phone: "NA",
      aoi: "Design Engineering, Machine Design, Mechatronics System Design, Automation system, Robotics Engineering",
      photo: imageProxyUrl("https://drive.google.com/uc?export=view&id=13sTjwNxDcnYOQ9zK9N2AiAoz37hQugmS"),
      joiningDate: "02-08-2014",
      details: {
        qualifications: "B.E: Bapuji Institute of Engineering & Technology, Davangere, 2009.\nM.Tech: Machine Design, Bapuji Institute of Engineering & Technology, Davangere, 2011.",
        pastExperience: "Design Engineer, TESS Engineering Solutions, Bangalore (2011-2012)\nGSS Institute of Technology, Bangalore (2012-2014)",
        areasOfInterest: "Design Engineering\nMachine Design\nMechatronics System Design\nAutomation system\nRobotics Engineering",
        achievements: "Organising member for International Symposium on Recent Advances in Materials Joining and Manufacturing Processes (MJMP) 2025\nOrganised 'Robotics and Automation' workshop with Vithsutra Technologies Pvt Ltd\nCoordinator for National workshop on Manufacturing of Gas Turbine and Analysis of Heat Transfer",
        professionalMembership: "Life Member of ISTE",
        publications: "5+ publications in Scopus-indexed journals including Tuijin Jishu/Journal of Propulsion Technology, Journal of Huazhong University of Science and Technology, and IJARIIE.",
        projectsGuided: "NA",
        subjectsTeaching: "Introduction to Mechanical Engineering, Theory of Machines, Machine Design, Control Engineering, Kinematics of Machine, Dynamics of Machines, Renewable Energy and Power Plant, Non-Traditional Machining",
        researchPublications: "SCOPUS Author ID: 0009-0001-5059-2310",
        others: "Responsibilities: 3rd year Class Coordinator, Department Forum Coordinator, Anti-Ragging Coordinator, NSS Coordinator, Sports Coordinator, Robotics club/lab coordinator, News Publicity Coordinator, Consultancy Coordinator, Aptitude Coordinator\nPatents: Design patent 400698-001 (Handy Tri-Level Liquid Container)\nThird-party inspection coordinator for TMC Moodbidri, Beltangady, and Mulky panchayath",
      },
    },
  ],
  exploreData: {
    about: {
      title: "ABOUT DEPARTMENT OF MECHANICAL ENGINEERING",
      body: `The Department of Mechanical Engineering focuses on the design, analysis, manufacturing, and maintenance of mechanical systems involving thermodynamics and fluid mechanics.`,
      highlights: [
        "Dynamic and modernized curriculum.",
        "Focus on hands-on practical learning.",
        "Strong industry-academia connections.",
      ],
    },
    thrust: {
      title: "THRUST AREA",
      body: "Thermodynamics, Fluid Mechanics, Kinematics, and Advanced Manufacturing Processes.",
      highlights: [
        "• Core Domain Expertise",
        "• Advanced Research Methodologies",
        "• Industry-Standard Tools",
        "• Multi-disciplinary Projects",
      ],
    },
    peo: {
      title: "(PEO's, PO's, PSO'S)",
      body: `PO1: Engineering Knowledge: Apply mathematics, science, and engineering fundamentals to solve complex problems.
PO2: Problem Analysis: Identify, formulate, research, and analyse complex engineering problems.
PO3: Design / Development of Solutions: Design solutions considering health, safety, societal, and environmental factors.
PO4: Investigation: Use research-based methods (experiments, data analysis, interpretation) to provide valid conclusions.
PO5: Engineering Tool Usage: Select and apply modern engineering tools, software, and techniques, recognising limitations.
PO6: The Engineer & The World: Analyse societal, environmental, sustainability, and economic impacts of engineering solutions.
PO7: Ethics: Apply ethical principles, commit to professional ethics, human values, and diversity.
PO8: Individual & Collaborative Team Work: Function effectively as an individual and in diverse, multi-disciplinary teams.
PO9: Communication: Communicate effectively and inclusively with the engineering community and society.
PO10: Project Management & Finance: Apply engineering management and financial principles to manage projects in multi-disciplinary environments.
PO11: Life Long Learning: Recognise the need for and engage in independent, continuous learning to adapt to evolving technologies.


PEO1: Provide an opportunity for the students to expand knowledge in mechanical engineering.
PEO2: Be able to provide solutions for technical and social problems through research and innovation.
PEO3: Educate students to develop a continuous learning attitude, ethics and values.


PSO1: Will be able to analyse, interpret and provide solutions to engineering and social problems.
PSO2: Adapt to the dynamic challenges and scenarios in the industries.
`,
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
      syllabusLinks: [
        { year: "2025-26 (Scheme)", id: "1RLjKVPK8-lHn2_yAix1XZcNcwP75bW5q" },
        { year: "2025-26 (Syllabus)", id: "1EqpPaf2EjjdphG2i2s58CsTVM0Qg4iu7" },
        { year: "2022 (Scheme)", id: "1scIUvFp0ydTxa47xgR2WXjMovZp2F3do" },
        { year: "2022 (Syllabus)", id: "1uZgef2Qcfkk2MTNutfhO35YRe0tnjpca" },
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
      body: "Quarterly updates from the department of MECH.",
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
