import { DepartmentData, Faculty } from "@/lib/departments";

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const aiDepartmentData: DepartmentData = {
  id: "ai",
  name: "Department of Artificial Intelligence & Machine Learning",
  title: "Department of Artificial Intelligence & Machine Learning",
  vision: `To produce globally competent professionals in Artificial Intelligence and Machine Learning by fostering cognitive learning, innovation, and strong industry collaboration for the betterment of society.`,
  mission: `M1: Impart knowledge in cutting-edge Artificial Intelligence and Machine Learning technologies in line with evolving industry standards.
M2: Promote research, innovation, and lifelong learning to address real-world challenges and contribute to societal development.
M3: Inculcate ethical values, leadership qualities, and entrepreneurial skills to prepare responsible AI professionals.`,
  hod: {
    name: "Prof. Harish Kunder",
    designation: "Associate Professor & Head",
    qualification: "Ph.D (Thesis Submitted)",
    experience: "22+ Years",
    email: "aietaiml08@aiet.org.in",
    phone: "+91 98765 43214",
    photo: imageProxyUrl(
      "https://drive.google.com/uc?export=view&id=10_iBnKvNTiyqzkoHdBOn2sxyWkW0sTHV",
    ),
    joiningDate: "12-08-2010",
    details: {
      qualifications: `• Ph.D. in Computer Science & Engineering - VTU (2026 - Thesis Submitted)
• M.Tech in Computer Science & Engineering - VTU (2012)
• B.E in Computer Science & Engineering - VTU (2004)
• Ph.D. Title: An Efficient Method For Handling Non-Convex Optimization Problems In Deep Learning
• Research Area: Deep learning
• Supervisor: Dr. Manjunath Kotari`,
      pastExperience: `• Associate Professor & Head - Dept. of AIML | CSE (Data Science)
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
  faculty: [
    {
      name: "Dr. Pradeep Nazareth",
      designation: "Associate Professor",
      qualification: "Ph.D",
      experience: "18+ Years",
      email: "pradeepn@aiet.org.in",
      phone: "+91 90000 00000",
      photo: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80`,
      details: {
        qualifications: `• Ph.D. in Computer Science and Engineering - NITK, Surathkal (2023)
• M.Tech in Software Engineering - VTU, Belgaum (2009)
• B.E. in Computer Science and Engineering - VTU, Belgaum (2005)`,
        pastExperience: `• Associate Professor in Department of Artificial Intelligence and Machine Learning
• 18+ years of teaching experience
• Recognized research guide in Manipal Academy of Higher Education (MAHE) and VTU Belgaum`,
        areasOfInterest: `• Computer Networks
• Terrestrial and Underwater Ad hoc networks
• Applications of Machine Learning in network intrusion detection`,
        achievements: `• Recognized Research Guide (MAHE & VTU)
• Published 25+ research papers in SCI indexed journals and international conferences`,
        professionalMembership: `• IEEE
• Recognized Research Guide - MAHE & VTU`,
        publications: `• Complete list at Scopus: https://www.scopus.com/authid/detail.uri?authorId=57212037197
• Published in SCI indexed journals and international conferences including IET, Springer, Wiley, and IEEE`,
        projectsGuided: `• Mentors research in Terrestrial and Underwater Ad hoc networks
• Guidance in ML applications for network security`,
        subjectsTeaching: `• Computer Networks
• Software Engineering
• Network Security
• Ad hoc Networks`,
        researchPublications: `• E-VAR: enhanced void avoidance routing algorithm for UASNs - IET (2019)
• Location-Free Void Avoidance Routing Protocol for UASNs - Springer (2022)
• Hop-based void avoidance routing protocol for UASNs - Inderscience (2023)
• Cluster-based Multi-Attribute Routing Protocol for UASNs - Springer (2024)
• A swarm‐optimized microbial colony counter - Wiley, Expert Systems (2024)
• Exploring the Efficacy of Mental Health Care Chatbots: A Review - IEEE ICCCNT (2024)
• Weather Forecasting Using Machine Learning Approach - IEEE ICCCNT (2024)
• Automated Exposure of Colorimetric Fluctuations in Aspergillus Flavus - IEEE DISCOVER (2023)
• YouMatter: A Conversational AI Powered Mental Health Chatbot - IEEE ICCCNT (2024)
• Void avoidance node deployment strategy for underwater sensor networks - Springer (2019)
• Link Quality-based Routing Protocol for UASNs - IEEE ICCCNT (2020)
• Void-aware routing protocols for underwater communication networks: A survey - Springer (2020)
• Link and Void Aware Routing Protocol for UASNs - IEEE ICCCNT (2021)
• Mitigation of hard-coded credentials related attacks using QR code - IEEE ICCCNT (2019)
• Opportunistic Underwater Routing protocols: A Survey - Springer (2020)
• Hop-count Based Routing Protocols for UASNs: A Survey - IEEE ICCCNT (2022)
• Trilateration based Localization for Underwater Sensor Networks - Springer (2021)
• Localized Hop-Count Based Routing (LHR) Protocol for UASNs - NIT Warangal (2022)`,
        others: `• Scopus ID: https://www.scopus.com/authid/detail.uri?authorId=57212037197
• Research focus: Computer Networks, Terrestrial and Underwater Ad hoc networks
• Recognized as research guide in Manipal Academy of Higher Education (MAHE) and VTU`,
      },
    },
    {
      name: "Kiran Raj K M",
      designation: "Assistant Professor",
      qualification: "M.Tech (Ph.D Pursuing)",
      experience: "8 Years",
      email: "kiranraj@aiet.org.in",
      phone: "+91 90000 00000",
      photo: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80`,
      details: {
        qualifications: `• M.Tech in Computer Science & Engineering - VTU (2016)
• B.E in Information Science & Engineering - VTU (2014)
• Ph.D. Status: Pursuing`,
        pastExperience: `• Assistant Professor in Department of Artificial Intelligence and Machine Learning
• 8 years of academic experience
• Mentors undergraduate projects`,
        areasOfInterest: `• Artificial Intelligence
• Machine Learning
• AI-driven security systems
• Data Science`,
        achievements: `• Mentors undergraduate research projects
• Actively contributes to curriculum development in emerging AI areas`,
        professionalMembership: `• CSI Member`,
        publications: `• Published research papers in Scopus-indexed journals and international conferences
• Focused on Machine Learning applications and AI-driven automation`,
        projectsGuided: `• Undergraduate projects in AI-driven security systems
• Projects in Data Science applications`,
        subjectsTeaching: `• Data Structure & Applications
• Analysis & Design of Algorithms
• Cloud Computing
• Computer Networks
• Computer Organization`,
        researchPublications: `• A Comprehensive Review on Scaling Machine Learning Workflows Using Cloud Technologies and DevOps - IEEE Access
• Impact of COVID-19 Pandemic on Zomato: A Case Study - IJCSBE
• Impact of Covid-19 Pandemic in the Automobile Industry: A Case Study - IJCSBE
• AI-Driven DevOps for Intelligent Automation in Continuous Software Delivery Pipelines - ICECMSN (2025)
• Scalable Machine Learning Solutions for Solar Energy Output Forecasting and PV Performance Improvement - ICECMSN (2025)
• Leveraging AI for Cyber Threat Defence - ICRAIS (2025)
• Data Privacy and Ethics on Social Media Platforms - ICICI (2025)
• A Survey on Fast Task Adaptation Techniques in Machine Learning - ICICT (2025)
• A Survey on Vehicle Collision Avoidance Systems: Innovations, Challenges, and Future Prospects - AIDE (2025)
• Real Time Object Detection and Tracking Using SSD Mobilenetv2 on Jetbot GPU - IEEE DISCOVER (2024)
• EmoLens: Research on Enhancing Recommendation Systems through Facial Emotion Recognition - IEEE ICCCNT (2024)
• Computational Physics Methods and Algorithms - Journal of Physics: Conference Series`,
        others: `• FDP: Digital Forensics in Cyber Security - ATAL (2026)
• FDP: Cyber Security - Cyber Tech Associates (2025)
• FDP: Advances in Deep Architecture - IIIT Allahabad (2023)
• FDP: Deep Learning for NLP & Computer Vision - ExceLR (2023)
• FDP: Introduction to Python Programming - VTU (2023)
• FDP: Step-by-Step Guide to Research Paper - RFI-Care (2023)`,
      },
    },
    {
      name: "Shrikanth N G",
      designation: "Sr. Assistant Professor",
      qualification: "M.Tech",
      experience: "13 Years",
      email: "shrikanthng@aiet.org.in",
      phone: "+91 90000 00000",
      photo: `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80`,
      joiningDate: "05-09-2022",
      details: {
        qualifications: `• M.Tech.
• B.E.`,
        pastExperience: `• Sr. Assistant Professor in AIML
• Assistant Professor in Shree Devi Institute of Technology (2013-2022)
• 13 years of total experience`,
        areasOfInterest: `• Computer Vision
• Artificial Intelligence and Machine Learning
• Database
• Java Full Stack`,
        achievements: `• Wipro Certified Faculty under Java Full Stack Program`,
        professionalMembership: `• ISTE Member`,
        publications: `• Research Gate Profile: https://www.researchgate.net/profile/Shrikanth-N-G
• Orchid ID: https://orcid.org/0009-0007-7925-6453`,
        projectsGuided: `• Student projects in Computer Vision and AI
• Projects in Database Management and Web Dev`,
        subjectsTeaching: `• Introduction to C Programming
• Python Programming
• Computer Vision
• Operating Systems
• OOP with JAVA
• Principles of AI, AIML
• Database Management System`,
        researchPublications: `• Minimization of Churn Rate Through Analysis of ML - ICDCECE (2023)
• Rainfall Prediction using Machine Learning Algorithm - CODE AI (2024)
• Hybrid LSTM-CNN Model for Carbon Emission Prediction - ICICNIS (2025)
• Fine-Tuning Techniques for Large Language Models - IEEE CONECCT (2025)`,
        others: `• Wipro Java Full Stack Certification
• Active researcher in Sustainable Forecasting and LLMs`,
      },
    },
    {
      name: "Dr. SRINIVASAN G",
      designation: "Professor",
      qualification: "Ph.D.",
      experience: "19.6 Years Teaching + 4 Years Industry",
      email: "srinivasgopalan@aiet.org.in",
      phone: "+91 90000 00000",
      photo: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80`,
      details: {
        qualifications: `• Ph.D. in Computer Science and Engineering - Sathyabama University (2017)
• M.Tech in Advanced Computing - SASTRA University, Thanjavur (2005)
• B.E in Computer Science and Engineering - Madurai Kamaraj University (2003)
• Ph.D. Title: ENERGY EFFICIENT CONGESTION CONTROL PROTOCOL FOR WIRELESS SENSOR NETWORKS FOR RELIABLE DATA TRANSFER
• Supervisor: Dr. Murugappan S`,
        pastExperience: `• Professor in Department of CSE(Data Science)
• 19.6 Years of Teaching Experience
• 4 Years of Industry Experience
• Mentors undergraduate and postgraduate research projects
• Contributes to curriculum development in AI-driven security and data science`,
        areasOfInterest: `• Networking & Wireless Sensor Networks
• Wireless Communication
• Congestion Control Algorithms
• Cryptography and Network Security
• Object Oriented Programming Through Java`,
        achievements: `• Best Faculty Award in MNMJEC, Chennai (2012)
• Published Patent: FOREST FIRE MONITORING & ALERT SYSTEM EMPLOYING WSN (2023)`,
        professionalMembership: `• Member, IAENG (International Association of Engineers)`,
        publications: `• Patent: FOREST FIRE MONITORING & ALERT SYSTEM EMPLOYING WIRELESS SENSOR NETWORKS (2023)
• 21 Journal Publications including Scopus-indexed and UGC CARE II
• 14 Conference Publications (ICDSIS, ICCCE, NC4T)`,
        projectsGuided: `• Mentors UG and PG projects in AI-driven security and data science
• Guidance in Wireless Sensor Networks and IoT applications`,
        subjectsTeaching: `• Web Technology
• Software Engineering
• Cloud Computing
• Wireless Sensor Networks`,
        researchPublications: `• Fuzzy based Congestion Control and Congestion Aware Routing for IoT - JISEM (2025) [UGC CARE II]
• Virtual Matching System with Virtual Try-On (VTON) - ICDSIS (2025) [SCOPUS]
• Reliable Load Balanced Routing Policy using Bayesian Optimization for SDN-IoT - IJISAE (2024) [UGC CARE II]
• A Review Paper on Design and Experience of Mobile Applications - EAI (2024) [SCOPUS]
• Machine Learning and IoT Based Waste Management System - IJARBEST (2024)
• Digitization of ECG signals from cell phone images - IJARBEST (2024)
• Disclosing the IPv6 Acceptance Bridge: A Comprehensive Review - IJARBEST (2024)
• A Review on Comparative Study of Shell’s in Linux - IJARBEST (2024)
• Smart Healthcare Prediction System and Efficient Monitoring using Logistic Regression - IJARMATE (2024)
• A Review on Automated Drone Delivery Systems - IJARMATE (2024)
• Energy Efficient MAC Protocol with Traffic-Aware Wakeup Scheduling for IoT-WSN - ECB (2022) [UGC CARE II]
• Energy Efficient Priority Based Dynamic Duty-Cycle and Sleep Scheduling - GIS Science Journal (2021)
• Multi-population Firefly Algorithm (MFA) based MAC Protocol for Dynamic Sleep Scheduling - IJET (2020) [SCOPUS]
• Energy Efficient Congestion Control with Packet Drop Rate and Node Status - IJAEMA (2020)
• Development of Scanning Mechanism for User Developed Applications - IJIRMET (2018)
• Relay Assisted Effective Loss Recovery Technique for WSN - JCTN (2016) [WEB OF SCIENCE]
• Delay Sensitive and Interference Aware MAC Protocol for WSN - IJIES (2016) [SCOPUS]
• Secure P2P File Sharing in MANETs using Ambassador and Coordinator Relations - IJSIET (2015)
• Node Density Related Index Based Energy Efficient Technique for Congestion Control - IJACST (2013)
• Centralized Reliability Index Technique for Congestion Control in WSN - IJCSNE (2013)
• Reliable and Energy Efficient Congestion Control Protocol - IRCOS (2013) [SCOPUS]
• A Survey of Congestion Control Techniques in Wireless Sensor Networks - IJITKM (2011)
• Rapid Congestion Control Technique for WSN for Energy Efficiency and Reliability - ICCCE 2012
• Event Driven Failure Recovery Congestion Control Technique with Reliability - ICCEEE-2013
• Secure Data Storage with Encryption and Recovery Techniques in Cloud - NCRTECE-2013
• Probing Web Data Using Ontology Model - ICCT 2014
• Protected Cloud Computing Framework for Big Data Knowledge Management - ICEECE-2016`,
        others: `• Published Patent: FOREST FIRE MONITORING & ALERT SYSTEM EMPLOYING WSN (App No: 202341043030)
• FDP: Empowerment through AI: Tools, Techniques and Mechanisms - CARE College (2024)
• FDP: Evaluation of Generative AI – Past, Present and Future - Methodist College (2024)
• FDP: Recent Trends and Challenges in Medical Image Analysis - CMRIT (2024)
• FDP: Outcome Based Education and Essential AI Tools for Teachers - RVMCC (2024)
• FDP: Mission 10X Program conducted by Wipro
• FDP: Artificial Intelligence with IBM Watson - AITS Rajampet
• FDP: MATLAB and Simulink in Engineering Education - APSSDC
• Workshop: Deep Learning using TensorFlow and Python - VIT
• Workshop: NS-2 Workshop - Kongu Engineering College
• Webinar: Star Certified DevOps Expert
• Webinar: Nano Satellite Constellation: Space-based IoT
• Quiz: Technical Awareness E-Quiz Engineer’s Role During Pandemics`,
      },
    },
    {
      name: "Mr. KULAI GANESH VASANT KINI",
      designation: "Assistant Professor",
      qualification: "M.Tech",
      experience: "12 Years (2 Years Teaching)",
      email: "ganesh.kini@aiet.org.in",
      phone: "+91 90000 00000",
      photo: `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80`,
      details: {
        qualifications: `• M.Tech in Data Science and Machine Learning - PES University (2023)
• B.E in Mechanical Engineering - University of Mysore (2001)
• Ph.D. Status: Yet to join`,
        pastExperience: `• Assistant Professor in Dept. of AIML / CSE(DS)
• 12 Years total experience (2 years in teaching)
• Vast industry experience in data science and technical management`,
        areasOfInterest: `• Data Analytics
• Data Science
• NLP (Natural Language Processing)
• Machine Learning
• Sentiment Analysis`,
        achievements: `• Bronze Prize in Hackathon on Regression at institution level during M.Tech`,
        professionalMembership: `• Active engagement in SRM Institute ICRTDA Conferences`,
        publications: `• International Conference: Survey on Abstractive Text Summarization using Encoder-Decoder LSTM Model - ICRTDA 2023 (SRM Institute)`,
        projectsGuided: `• Undergraduate projects in Data Analytics, SQL, and Python
• Mentors research in Sentiment Analysis and NLP`,
        subjectsTeaching: `• Data Analytics
• SQL
• Python
• Artificial Intelligence
• Machine Learning – Regression, Classification, Clustering, Association`,
        researchPublications: `• Research focused on Abstractive Text Summarization using LSTM models`,
        others: `• FDP: SVNIT IEEE - Generative AI & Agentic AI: Tools, Use Cases & Live Demos
• FDP: Innovative Pedagogical Methods and Student Engagement Strategies - Presidency College
• Presentation: ICRTDA 2023 - Department of Data Science and Business Systems, SRM`,
      },
    },
  ],
  exploreData: {
    about: {
      title: "ABOUT DEPARTMENT OF ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
      body: `The Department of Artificial Intelligence & Machine Learning at Alva's Institute of Engineering and Technology is a strategic academic initiative established to prepare future-ready engineers for the era of intelligent computing and data-driven transformation. The department integrates core engineering principles with advanced AI and ML methodologies to meet growing industry and societal needs.

The program builds strong foundations in Artificial Intelligence, Machine Learning, Data Analytics and Deep Learning. It balances theoretical rigor with practical exposure so students learn algorithm design, predictive modelling, automation systems and ethical AI practices. Students are trained to develop scalable, industry-relevant AI solutions.

The department fosters an experiential ecosystem through laboratory practice, GPU-enabled workstations, project-based learning, internships, technical forums and collaborative activities. Interdisciplinary applications—healthcare, smart infrastructure, agriculture, finance and automation—are emphasised to give students real-world problem-solving exposure.

Academic delivery aligns with contemporary industry standards and is complemented by skill-enhancement programs, workshops, coding practices and industry interaction sessions to strengthen employability, research orientation and innovation culture. The department is committed to academic excellence, professional integrity and shaping responsible AI engineers for the future.`,
      highlights: [
        "Foundations in AI, ML, Deep Learning & Data Science",
        "Hands-on labs with GPU workstations and high-performance compute",
        "Industry-aligned curriculum, internships and placement support",
        "Research orientation: publications, projects, hackathons",
        "Interdisciplinary applications across healthcare, agriculture & smart systems",
        "Ethics, employability and entrepreneurship focus",
      ],
    },
    thrust: {
      title: "THRUST AREAS",
      body: `The Department focuses on core and emerging areas of AI and ML to enable research, development and real-world applications.`,
      highlights: [
        "Artificial Intelligence",
        "Machine Learning Algorithms & Applications",
        "Deep Learning & Neural Networks",
        "Data Science & Predictive Analytics",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Big Data Analytics",
        "Reinforcement Learning",
        "AI in IoT & Smart Systems",
        "AI-driven Cyber Security",
        "Edge AI & Cloud-based AI Solutions",
      ],
    },
    peo: {
      title: "(PEO's, PO's, PSO'S)",
      body: `Programme Educational Objectives (PEOs)
PEO1: Establish successful careers in Artificial Intelligence, Machine Learning, Data Analytics, and allied domains through strong technical knowledge and problem-solving skills.
PEO2: Engage in higher studies, research, and professional development to adapt to evolving technologies and global industry demands.
PEO3: Demonstrate ethical responsibility, teamwork, leadership qualities, and effective communication in multidisciplinary and multicultural environments.
PEO4: Develop innovative and sustainable AI-driven solutions addressing societal, environmental, and industrial challenges.

Programme Outcomes (POs)
PO1: Engineering Knowledge: Apply knowledge of mathematics, science, engineering fundamentals, and Artificial Intelligence principles to solve complex engineering problems.
PO2: Problem Analysis: Identify, formulate, review research literature, and analyze complex AI and Machine Learning problems using first principles.
PO3: Design/Development of Solutions: Design intelligent systems and AI-based solutions that meet specified needs considering public health, safety, and societal factors.
PO4: Conduct Investigations: Use research-based knowledge and experimental methods including data analysis and interpretation to draw valid conclusions.
PO5: Modern Tool Usage: Create, select, and apply appropriate AI/ML tools, software, and computational techniques with understanding of their limitations.
PO6: The Engineer and Society: Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues relevant to AI technologies.
PO7: Environment and Sustainability: Understand the impact of AI solutions in societal and environmental contexts and demonstrate sustainable development practices.
PO8: Ethics: Apply ethical principles and commit to professional ethics and responsibilities in AI system design and deployment.
PO9: Individual and Team Work: Function effectively as an individual and as a member or leader in multidisciplinary teams.
PO10: Communication: Communicate effectively on complex engineering activities through reports, documentation, and presentations.
PO11: Project Management and Finance: Demonstrate knowledge of engineering management principles and apply them to manage AI projects in multidisciplinary environments.
PO12: Life-long Learning: Recognize the need for lifelong learning to adapt to emerging technologies in Artificial Intelligence and Machine Learning.

Programme Specific Outcomes (PSOs)
PSO1: Intelligent System Development: Design, implement, and deploy Artificial Intelligence and Machine Learning models to develop intelligent systems for real-world applications.
PSO2: Data Analytics and Predictive Modeling: Apply statistical techniques, data mining methods, and machine learning algorithms to analyze large datasets and derive meaningful insights.
PSO3: Contemporary AI Tools and Innovation: Utilize modern AI frameworks, cloud platforms, and emerging technologies to build scalable and efficient AI solutions while adhering to professional and ethical standards.`,
      highlights: [
        "Globally competent professionals in AI & ML",
        "Successful careers in Data Analytics and allied domains",
        "Design and deployment of intelligent systems",
        "Sustainable AI-driven solutions for societal needs",
      ],
    },
    syllabus: {
      title: "SCHEME & SYLLABUS",
      body: "Latest curriculum with advanced elective courses in specialization tracks.",
      highlights: [
        "Modernized credit-based system.",
        "Emphasis on project-oriented learning.",
        "Regular workshops on syllabus-linked tools.",
      ],
      syllabusCategories: [
        {
          name: "Autonomous Scheme and Syllabus",
          links: [
            {
              year: "2025-2026 Autonomous",
              id: "12m46lSHwiNq1hou943JtteLm6tn5f9Bz",
            },
          ],
        },
        {
          name: "VTU Scheme and Syllabus",
          links: [],
        },
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
      body: `Innovation and research form the backbone of the AIML department. Faculty members and students actively engage in research activities focusing on emerging technologies and intelligent systems.
The department promotes:
●	Research publications and Conferences
●	Patent filing and intellectual property initiatives
●	Student mini and major projects addressing real-world challenges
●	Industry-oriented research collaborations
●	Multidisciplinary research integration with core engineering domains
Students are guided to develop AI-based applications such as predictive models, image recognition systems, recommendation engines, chatbots, and automation tools. The department encourages participation in national and international hackathons to enhance innovation culture.`,
      highlights: [
        "Research publications and Conferences",
        "Patent filing and intellectual property initiatives",
        "Student mini and major projects addressing real-world challenges",
        "Industry-oriented research collaborations",
        "Multidisciplinary research integration with core engineering domains",
      ],
    },
    facultyStaff: { title: "FACULTY AND STAFF", body: "", highlights: [] },
    facilities: {
      title: "FACILITIES (LAB DESCRIPTION)",
      body: `The AIML department is equipped with modern laboratory infrastructure to support practical learning and research activities.

AI & Machine Learning Laboratory
• NVIDIA LABORATORY
• High-performance computing systems
• GPU-enabled workstations
• High-speed internet connectivity
• Licensed and open-source AI development tools

Software & Tools
• Python Programming Environment
• TensorFlow & Keras
• Scikit-learn
• OpenCV
• Anaconda Distribution
• Jupyter Notebook
• R Programming
• Cloud-based AI platforms (if applicable)
`,
      highlights: [
        "AI & Machine Learning Laboratory (NVIDIA laboratory)",
        "High-performance computing systems and GPU-enabled workstations",
        "High-speed internet connectivity",
        "Licensed and open-source AI development tools",
        "Python, TensorFlow, Keras, Scikit-learn, OpenCV, Anaconda, Jupyter",
        "R Programming and cloud-based AI platforms",
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
      body: "Quarterly updates from the department of AI.",
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
