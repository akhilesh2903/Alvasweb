import { DepartmentData, Faculty } from "@/lib/departments";

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const cseDepartmentData: DepartmentData = {
  id: "cse",
  name: "Computer Science & Engineering",
  title: "Computer Science & Engineering",
  vision:
    "Engineering competent, excellent professionals by transforming the knowledge and computing skills to individuals through modern innovative tools and techniques",
  mission: `M1: To produce skilled, creative software developers through rigorous training.
M2: To conduct specific technical courses to keep abreast to the latest technological developments and transformations in the domain.
M3: To implement the ideas of research and innovations in interdisciplinary domains.
M4: To establish Industry-Institute Interaction programs to enhance the skills of employability and entrepreneurship.`,
  hod: {
    name: "Dr.Manjunath Kotari",
    designation: "Professor & Head",
    qualification: "B.E, M.Tech, Ph.D",
    experience: "26 Years",
    email: "aietcse08@aiet.org.in",
    phone: "NA",
    photo: imageProxyUrl(
      "https://drive.google.com/uc?export=view&id=1VZ74s9elk5-LErpzJ5wwWly1YVQrCzZR",
    ),
    joiningDate: "19-01-2013",
    details: {
      qualifications: `B.E, R.V. College of Engineering, Bangalore (2000)
M.Tech, NMAM Institute of Technology, Nitte (2005)
Ph.D, VTU, Belagavi (2017)`,
      pastExperience: `2001-2013 at NMAM Institute of Technology, Nitte
2013-till date at Alva’s Institute of Engineering & Technology, Moodbidri`,
      areasOfInterest: "Distributed Systems and Cyber Security",
      achievements: `Recognized as a Peer Reviewer for Elsevier, Springer and IEEE Access

Sl\tReviewer for\t#
1\tIEEE Access\t3
2\tElsevier\t9
3\tSpringer\t4
4\tAutomatika\t1
5\tEngineered Science\t2
6\tIEEE Conferences\t23`,
      professionalMembership: `Member IEEE 2018- till date
Life Member, ISTE (2001 to till date)`,
      publications: `Web of Science Researcher ID: AAI-4579-2020
Scopus ID: 56538593400
ORCID-ID: https://orcid.org/0000-0003-3601-225X
Vidwan ID: https://vidwan.inflibnet.ac.in/profile/319372
Research Gate: https://www.researchgate.net/profile/Manjunath-Kotari`,
      projectsGuided: "PhD Project Guided: 07",
      subjectsTeaching: `Cryptography & Network Security
Cyber Security
Advanced Computer Architecture
Cloud Computing
Distributed Systems
Operating Systems
Information Security
Computer Systems & Performance Analysis
Formal Models
Storage Area Networks
Computer Graphics
Programming Languages
Finite Automata & Formal Languages
System Software
Compiler Design`,
      researchPublications: `Scopus Indexed / Web of Science Articles
• Manjunath Kotari, Veena M., NLP-Powered Career and Higher Education Guidance and Recommendation System: A Deep Learning Approach, Journal of Circuits Systems and Computers, 35(2), 2026.
• Manjunath Kotari, Rathod J.A., Secure and efficient message transmission in MANET using hybrid cryptography and multipath routing technique, Multimedia Tools and Applications, 84(13), 2025
• Manjunath Kotari, Harish Kunder, A Survey on Customized Algorithm Approach for Solving Non-convex Optimization Problems in Machine Learning, Springer Proceedings in Mathematics and Statistics 492 PROMS, 2025
• Manjunath Kotari, Harshika, Gurukiran P, Sathish S, Goenka R, Temporal Analysis of Rainfall Patterns Over India: Insights from IMERG, GSMap, and IMD Data, Proceedings of 8th International Conference on Trends in Electronics and Informatics Icoei 2025
• Manjunath Kotari, Bharathesh S.K., Naik B.S., ...Shetty K.A., Shetty A.S., IoT-Enabled Cargo Shipment Management: Real-Time Tracking and Optimization in Global Logistics, 2025 International Conference on Intelligent Control Computing and Communications Ic3 2025
• Manjunath Kotari, Shreyas P.S., Hegde V.V., ...Shetty S.K., Bhandary S.R., A Lightweight Network Deployed on ARM Device for Hand Gesture Recognition, 2025 International Conference on Intelligent Control Computing and Communications Ic3 2025
• Manjunath Kotari, Sathyaprakash B.P., Petal Region Analysis of Improved Petal Ant Routing for Mobile Ad Hoc Networks, SN Computer Science 5(5), 2024
• Manjunath Kotari, Rathod J.A., TriChain: Kangaroo-Based Intrusion Detection for Secure Multipath Route Discovery and Route Maintenance in MANET Using Advanced Routing Protocol, International Journal of Computer Networks and Applications, 11(1), 2024
• Manjunath Kotari, Sathyaprakash B.P., Dynamic Routing Using Petal Ant Colony Optimization for Mobile Ad-hoc Networks, International Journal of Advanced Computer Science and Applications, 14(10), 2023
• Manjunath Kotari, Chiplunkar N.N., Nagesh H.R., Implementation of secure customized monitoring tool for adaptive distributed systems, Proceedings of 2014 International Conference on Contemporary Computing and Informatics Ic3i 2014
• Manjunath Kotari, Chiplunkar N.N., Investigation of security issues in distributed system monitoring, Handbook of Computer Networks and Cyber Security Principles and Paradigms, 2019
• Manjunath Kotari, Chiplunkar N.N., A survey on detection and analysis of cyber security threats through monitoring tools, Handbook of Research on Intrusion Detection Systems, 2020.
• Manjunath Kotari, Nagesh U.B., Chethan S.C., Integration of MQTT Protocol with Map APIs for Smart Garbage Management, 2021 IEEE International Conference on Distributed Computing VLSI Electrical Circuits and Robotics Discover 2021 Proceedings, 2021
• Manjunath Kotari, Balaji N., Karthik Pai B.H., Bhavatarini N., Sreenidhi B.K., Cyberbullying in Online/E-Learning Platforms Based on Social Networks, Lecture Notes in Networks and Systems, 334, 2022
• Manjunath Kotari, Rathod J.A., A Novel Framework for Network Based Secure Message Transmission Based on Fragmentation and Cryptography, 4th International Conference on Circuits Control Communication and Computing I4c 2022, 2022.

Patents Published:
• SYSTEM FOR HARDWARE ACCELERATION FOR EMBEDDED FLASH MEMORY BASED ON MACHINE LEARNING — 2021-05-07
• TOP SLIDING DRIVING HELMET FOR BETTER AIR VENTILATION WITH IOT FEATURES — 2021-02-18

Conference / Journals: 27`,
      others: `BoS
• Chairman Board of Studies (BoS), department of CSE, Alva’s Institute of Engineering & Technology, Moodbidri (2024- till date).
• VTU Nominee of Board of Studies, department of ICBC, St. Joseph Engineering College, Mangalore (2024- till date)
• Member of Board of Studies, department of Cyber Security, NMAMIT, Nitte University (2025- till date)
• Member of Board of Studies, department of CSE, NMAMIT, Nitte University (2025- till date)
• Member of Board of Studies, department of ISE, NMAMIT, Nitte University (2023- 2025)
• VTU Nominee, Board of Studies, department of ISE, NMAMIT, Nitte University (2020- 2022) - Autonomous
• VTU Nominee, Board of Studies, department of CSE, NMAMIT, Nitte (2016- 2018)
• Member, Board of Studies, department of CSE, NMAMIT, Nitte (Autonomous) (2007- 2012)

BoE
• Chairman Board of Examinations (BoE), department of CSE, Alva’s Institute of Engineering & Technology, Moodbidri (2024- till date)
• Member Board of Examinations (BoE), Computer Science & Engineering-Composite Board, VTU (2023-24)
• Member Board of Examinations (BoE), Computer Science & Engineering-Composite Board, VTU (2021-22)

• Member VTU Local Inquiry Committee (2018)`,
    },
  },
  faculty: [
    {
      name: "Dr. S. Mohideen Badhusha",
      designation: "Sr. Professor",
      qualification: "Ph.D, M.E, AMIE",
      experience: "24 Years",
      email: "alvas125@aiet.org.in",
      phone: "NA",
      aoi: "Mobile Adhoc Networks, Wireless Sensor Networks, Machine Learning, Deep Learning, Data Analytics",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      joiningDate: "14-11-2016",
      details: {
        qualifications: `PhD – 2016
ME – 2008, Anna University, Chennai
AMIE – 2004, IEI Kolkatta`,
        pastExperience: `9 years teaching and research experience in KS Rangasamy College of Technology, Tiruchengodu, TN state
6 years – Software Developer and trainer – Blue Moon Computers, Erode
9 years – Alva’s Institute of Engineering and Technology, Mijar, Moodbidri, Mangalore (till now)`,
        areasOfInterest: `Mobile Adhoc Networks
Wireless Sensor Networks
Machine Learning
Deep Learning
Data Analytics`,
        achievements: `Recognized as NPTEL Domain Scholar in Programming (Dec 2020)
Recognized as NPTEL Discipline Star (Dec 2020)
Reviewed 6 International Journal papers from 2020 to 2023 at Elsevier Journal and received the Elsevier Reviewer Recognition Certificate
Active SPOC for Swayam NPTEL
Recognized with prospect Certificate for active participation in NPTEL examination during Jan-Apr 2024
Recognized with Active SPOC Certificate for active participation in NPTEL examination during Jul-Dec 2024`,
        professionalMembership: "NA",
        publications: `Publication in the SCI and scopus indexed international journals:
• Mohideen Badhusha, S, Anvitha Poojary, Anvitha U, Ashwini, Akshata Hegde (2021) Improved Air Pollution Monitoring System using IoT. Journal of Chengdu University of Technology, vol.26, issue.7, ISSN: 1671-9727 (Scopus indexed)
• Mohideen Badhusha, S, Geetha BG, Prabhu P, Vasanthi R. (2018) Improved video streaming using MSVC and nonoverlapping zone routing multipath propagation over MANETs. Int J Commun Syst. vol.31, issue.10, pp 1-23, e3578. https://doi.org/10.1002/dac.3578 (SCI and Scopus indexed)
• Mohideen Badhusha, S & Duraiswamy, K (2015) Energy Efficient Improved Bandwidth Video Streaming through reliable Multipath propagation in MANETs. International Journal of Applied Engineering Research, ISSN 0973-4562, vol.10, no.13, pp.32888-32900 (Scopus indexed)
• Mohideen Badhusha, S & Duraiswamy, K (2015) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. World Academy of Science, Engineering and Technology, International Journal of Computer, Electrical, Automation, Control and Information Engineering, vol.9, no.6, pp.1339-1

Publication in the Book Chapter:
• Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2017) Energy Efficient Improved Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. In ‘Advanced Engineering Research & Applications’ (ISBN:978-93-86138-58-3) — 15th chapter.
• Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2018) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. In ‘Advanced Engineering Research & Applications’ (ISBN:978-93-86138-58-3) — 22nd chapter.

Publication of the Book:
• Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2017) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. Lambert Academic Publishing (ISBN:978-3-330-07764-5).

Scopus indexed International Conference:
• An Effective Identification of Ayurveda Herbal Plants Using CNN Model, AIP Conference Proceedings, 3278(1) 2025
• Smart Crop Health Monitoring and Disease Prediction System using IoT and Machine Learning — IEEE Xplore, Icici 2025
• An Effective and Comprehensive Crop Recommendation System Using Machine Learning — ICETCS 2024, doi: 10.1109/ICETCS61022.2024.10543400
• Enhanced Deep Learning Based Multi-omics Oral Cancer Survival Prediction System — ICICNIS-2025`,
        projectsGuided: "PhD Project Guided: nil",
        subjectsTeaching: `Object Oriented programming using C++, Java, C# and .NET framework
XML and Web services
Computer networks
Wireless Sensor Networks
Windows programming
Graphics and multimedia system
Information Security
Web Technology and its applications
Python Programming and its applications
Open source system and Object oriented programming in Python
Advanced Java`,
        researchPublications: `Publication in the SCI and scopus indexed international journals:
      • Mohideen Badhusha, S, Anvitha Poojary, Anvitha U, Ashwini, Akshata Hegde (2021) Improved Air Pollution Monitoring System using IoT. Journal of Chengdu University of Technology, vol.26, issue.7, ISSN: 1671-9727 (Scopus indexed)
      • Mohideen Badhusha, S, Geetha BG, Prabhu P, Vasanthi R. (2018) Improved video streaming using MSVC and nonoverlapping zone routing multipath propagation over MANETs. Int J Commun Syst. vol.31, issue.10, pp 1-23, e3578. https://doi.org/10.1002/dac.3578 (SCI and Scopus indexed)
      • Mohideen Badhusha, S & Duraiswamy, K (2015) Energy Efficient Improved Bandwidth Video Streaming through reliable Multipath propagation in MANETs. International Journal of Applied Engineering Research, ISSN 0973-4562, vol.10, no.13, pp.32888-32900 (Scopus indexed)
      • Mohideen Badhusha, S & Duraiswamy, K (2015) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. World Academy of Science, Engineering and Technology, International Journal of Computer, Electrical, Automation, Control and Information Engineering, vol.9, no.6, pp.1339-1

      Publication in the Book Chapter:
      • Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2017) Energy Efficient Improved Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. In ‘Advanced Engineering Research & Applications’ (ISBN:978-93-86138-58-3) — 15th chapter.
      • Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2018) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. In ‘Advanced Engineering Research & Applications’ (ISBN:978-93-86138-58-3) — 22nd chapter.

      Publication of the Book:
      • Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2017) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. Lambert Academic Publishing (ISBN:978-3-330-07764-5).

      Scopus indexed International Conference:
      • An Effective Identification of Ayurveda Herbal Plants Using CNN Model, AIP Conference Proceedings, 3278(1) 2025
      • Smart Crop Health Monitoring and Disease Prediction System using IoT and Machine Learning — IEEE Xplore, Icici 2025
      • An Effective and Comprehensive Crop Recommendation System Using Machine Learning — ICETCS 2024, doi: 10.1109/ICETCS61022.2024.10543400
      • Enhanced Deep Learning Based Multi-omics Oral Cancer Survival Prediction System — ICICNIS-2025`,
        others: "NA",
      },
    },
    {
      name: "VENKATESH",
      designation: "Senior Associate Professor",
      qualification: "BE (CSE), M.Tech (CSE)",
      experience: "12 Years in AIET (From 18-07-2014 to till date)",
      email: "venkateshbhat2007@gmail.com, venkateshbhat@aiet.org.in",
      phone: "NA",
      aoi: "iOS Programming, Java, Data Structures and Algorithms, Dot NET, Theory of Computation, System Software and Compiler Design",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      joiningDate: "18-07-2014",
      details: {
        qualifications: "BE (CSE), M.Tech (CSE)",
        pastExperience: `Worked as Associate Professor and HOD CSE in SMVITM, Bantakal Udupi from 18-07-2012 to 17-07-2014 (Two Years).
Worked as Lecturer, Senior Lecturer, and Assistant Professor in NMAMIT from 01-09-1999 to 17-07-2012 (13 Years).`,
        areasOfInterest: `iOS Programming
Java
Data Structures and Algorithms
Dot NET
Theory of Computation
System Software and Compiler Design`,
        achievements: `Wipro Certified Faculty in Dot NET
iOS Trainer`,
        professionalMembership: "NA",
        publications: `Yash Chandrashekhar Shetty, V Bhavani Krishna, Vikhyath Rai M S, Shahir Bilagi, Venkatesh Bhat: “LexiAct: Large Action Model Performing Actions based on Voice Prompts”, IEEE Xplore July 2025

N Balaji, B H Karthik Pai, Kotari Manjunath, Bhat Venkatesh, N Bhavatharini, B K Sreenidhi, “Cyberbullying in Online/E-Learning Platforms Based on Social Networks”, Springer, December 2021

Chaithra, Roshan Fernandes, Anisha P Rodrigues, Venkatesh, “An Approach Toward Stateless Chatbots with the Benefit of Tensorflow Over Spacy Pipeline”, Springer, August 2020`,
        projectsGuided: "NA",
        subjectsTeaching: `iOS Programming
Java
Analysis and Design of the Algorithms
Data Structures
Dot NET
Theory of Computation
System Software and Compiler Design
Microprocessors`,
        researchPublications: `Yash Chandrashekhar Shetty, V Bhavani Krishna, Vikhyath Rai M S, Shahir Bilagi, Venkatesh Bhat: “LexiAct: Large Action Model Performing Actions based on Voice Prompts”, IEEE Xplore July 2025

      N Balaji, B H Karthik Pai, Kotari Manjunath, Bhat Venkatesh, N Bhavatharini, B K Sreenidhi, “Cyberbullying in Online/E-Learning Platforms Based on Social Networks”, Springer, December 2021

      Chaithra, Roshan Fernandes, Anisha P Rodrigues, Venkatesh, “An Approach Toward Stateless Chatbots with the Benefit of Tensorflow Over Spacy Pipeline”, Springer, August 2020`,
        others: "NA",
      },
    },
    {
      name: "Dr. Chandra Naik",
      designation: "Associate Professor",
      qualification: "B.E, MTech, Ph.D.",
      experience: "19 Years",
      email: "drchandranaik@aiet.org.in",
      phone: "NA",
      aoi: "Applied Game Theory, Graph Theory, Wireless Sensor Networks, AI in WSN, Fog and IoT, AI in Data Science, Optimization, MADM, Fuzzy Logic, Machine Learning",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      joiningDate: "22-06-2023",
      details: {
        qualifications: "B.E, MTech, Ph.D.",
        pastExperience: "16",
        areasOfInterest: `Applied Game Theory and Graph Theory Algorithms for Wireless Sensor Networks.
Artificial Intelligence Methods in Wireless Sensor Networks.
Fog and IoT, Artificial Intelligence in Data Science, Applied Optimization Techniques, MADM Techniques, Fuzzy Logic, and Machine Learning in Data Science.`,
        achievements: `CT Pravarthak: A STEM awareness program for rural school students through CT workshop is selected for sponsorship by IEEE Bangalore Section in 2025.
Received IEEE Pre-University STEM grant for Computational Thinking workshop for Rural School Students in 2024.
A Student Scholarship of 20,000 INR from IISc to attend 13th International Conference on Web and Internet Economics December 17-20, 2017, IISc Bangalore, India.
Qualified GATE 2017.
Sponsorship for a Period of 2 years for post-graduation in MTech from NMAMIT, Nitte.
Mission10x Certificate in Teaching and Learning on January 31st, 2011 in “Pursuit of Excellence in Engineering Education through Innovation”.
Successfully completed the Mission10x learning approach Practitioners Certificate held on 13th September and 14th September 2010.
S.S.L.C Examination School topper in the year 1998.`,
        professionalMembership: "IEEE",
        publications: `1. Chandra Naik and Pushparaj Shetty D: MADM: Multi-attribute decision making approach for energy efficient sensor placement and clustering in wireless sensor networks. Telecommunication Systems, Springer [SCIE]
2. Chandra Naik and Pushparaj Shetty D: “FLAG: Fuzzy Logic Augmented Game Theoretic Hybrid Hierarchical Clustering” International Journal of Telecommunication Systems [SCIE].
3. Chandra Naik and Pushparaj Shetty D: “Optimal Sensors Placement Scheme for Targets Coverage with Minimized Interference using BBO", International Journal of Evolutionary Intelligence, Springer [ESCI, Scopus].
4. Chandra Naik and Pushparaj Shetty D: “Differential Evolution Meta-Heuristic Scheme for k-Coverage and m-Connected Optimal Node Placement in Wireless Sensor Networks", International Journal of Computer Information Systems and Industrial Management Applications. ISSN 2150-7988 Volume 11 (2019) pp. 132-141 [Scopus].
5. Chandra Naik and Pushparaj Shetty D: “A Novel Meta-Heuristic Differential Evolution Algorithm for Optimal Target Coverage in Wireless Sensor Networks", presented in 9th International Conference on Innovations in Bio-Inspired Computing and Applications (IBICA2018) held at Toc H Institute of Science & Technology, Kochi India. Proceedings in Springer Verlag, Advances in Intelligent Systems and Computing Series [Scopus].
6. Chandra Naik and Pushparaj Shetty D: “Intelligent Interference Minimization Algorithm for Optimal Placement of Sensors using BBO" presented in SOCTA 2019, NIT Patna, Bihar, India. Proceedings in Springer Verlag, Advances in Intelligent Systems and Computing Series [Scopus].
7. Purnima Nomosudro, Jyoti Mehra, Chandra Naik Shetty D Pushparaj: “ECABBO: Energy-efficient clustering algorithm based on Biogeography optimization for wireless sensor networks" TENCON 2019, IEEE Region 10 (Scopus).
8. Bung Vidhi Jagdish, Induraj A, M N Vikas, Akshay M, Chandra Naik: Decentralised IoT Authentication using Blockchain and Machine Learning the Trust Circle Framework (ICICT), Lalitpur, Nepal, April 2025.
9. Adith M, Aditya V Sreenivas, Deepak T S, Likhith T S, Chandra Naik: Advanced Stock Price Prediction Using Facebook Prophet-Arima Ensemble Model`,
        projectsGuided: "PhD Project Guiding: 01",
        subjectsTeaching: `C Programming
Python programming
Discrete mathematical structures
Compiler design
Data structure
Design and analysis of algorithm
Data communications
System software
Computer networks
Advanced Compilation techniques
Data base management system
Advanced computer architecture
OOMD
Game theory
Operating Systems
Bigdata Analytics
Storage Area Networks
Parallel Computing`,
        researchPublications: `1. Chandra Naik and Pushparaj Shetty D: MADM: Multi-attribute decision making approach for energy efficient sensor placement and clustering in wireless sensor networks. Telecommunication Systems, Springer [SCIE]
      2. Chandra Naik and Pushparaj Shetty D: “FLAG: Fuzzy Logic Augmented Game Theoretic Hybrid Hierarchical Clustering” International Journal of Telecommunication Systems [SCIE].
      3. Chandra Naik and Pushparaj Shetty D: “Optimal Sensors Placement Scheme for Targets Coverage with Minimized Interference using BBO", International Journal of Evolutionary Intelligence, Springer [ESCI, Scopus].
      4. Chandra Naik and Pushparaj Shetty D: “Differential Evolution Meta-Heuristic Scheme for k-Coverage and m-Connected Optimal Node Placement in Wireless Sensor Networks", International Journal of Computer Information Systems and Industrial Management Applications. ISSN 2150-7988 Volume 11 (2019) pp. 132-141 [Scopus].
      5. Chandra Naik and Pushparaj Shetty D: “A Novel Meta-Heuristic Differential Evolution Algorithm for Optimal Target Coverage in Wireless Sensor Networks", presented in 9th International Conference on Innovations in Bio-Inspired Computing and Applications (IBICA2018) held at Toc H Institute of Science & Technology, Kochi India. Proceedings in Springer Verlag, Advances in Intelligent Systems and Computing Series [Scopus].
      6. Chandra Naik and Pushparaj Shetty D: “Intelligent Interference Minimization Algorithm for Optimal Placement of Sensors using BBO" presented in SOCTA 2019, NIT Patna, Bihar, India. Proceedings in Springer Verlag, Advances in Intelligent Systems and Computing Series [Scopus].
      7. Purnima Nomosudro, Jyoti Mehra, Chandra Naik Shetty D Pushparaj: “ECABBO: Energy-efficient clustering algorithm based on Biogeography optimization for wireless sensor networks" TENCON 2019, IEEE Region 10 (Scopus).
      8. Bung Vidhi Jagdish, Induraj A, M N Vikas, Akshay M, Chandra Naik: Decentralised IoT Authentication using Blockchain and Machine Learning the Trust Circle Framework (ICICT), Lalitpur, Nepal, April 2025.
      9. Adith M, Aditya V Sreenivas, Deepak T S, Likhith T S, Chandra Naik: Advanced Stock Price Prediction Using Facebook Prophet-Arima Ensemble Model`,
        others: `PROFESSIONAL MEMBERSHIP: IEEE
ORCID ID: https://orcid.org/0000-0002-4760-3402
SCOPUS ID: https://www.scopus.com/authid/detail.uri?authorId=57208885567`,
      },
    },
    {
      name: "Dr. Madhusudhan S",
      designation: "Associate Professor",
      qualification: "BE, MTech, Ph.D.",
      experience: "12 years",
      email: "madhusudhan@aiet.org.in",
      phone: "NA",
      aoi: "Computer Vision, Image Processing, Computational Neural sciences",
      photo:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
      joiningDate: "18-11-2020",
      details: {
        qualifications: "BE, MTech, Ph.D.",
        pastExperience: "7 years",
        areasOfInterest:
          "Computer Vision, Image Processing, Computational Neural sciences",
        achievements: "NA",
        professionalMembership: "NA",
        publications: `1) Suresha M and Madhusudhan S, “Projection of Tensors to Retrieve Reflected Edges from an Image”, International Journal of Scientific and Technology Research, Volume 8, Issue 9, September 2019 (ISSN: 2277-8616). Scopus Indexed
2) Suresha M and Madhusudhan S, “Enhancement of Reflected Faces on Semi-reflecting Surfaces”, IEEE International Conference on Image Information Processing (ICIIP-2019), Jaypee University of Information Technology, Himachal Pradesh, India.
3) Suresha M and Madhusudhan S, “Projection of Tensors to Retrieve Reflected Edges from an Image”, International Conference on Numerical Optimization in Engineering and Sciences NOIEAS-2019 at National Institute of Technology, Warangal, 19th to 21st June, 2019.
4) Madhusudhan S, Charishma G, Gowda Miilee Madankumar, Mohidin Ahmed Kabeer and Preety Kakchingtabam, “AI-Driven Environmental Monitoring for Sustainable Water Management: An India-Centric IoT Framework”, IEEE International Conference on Innovate for Humanitarian: Tech Solutions for Global Challenges (ICIH), Acropolis Institute of Technology and Research, Indore, India, 21st to 22nd Nov, 2025.
5) Madhusudhan S, Sannidhi Shetty, Sannidhi, Poojary Prathiksha D and Preksha P Poojary, “Exploring CNN based recognizers for handwritten scripts”, IEEE International Conference on Computing Technologies ICOCT, Jyothi Institute of Technology, Bengaluru, India, 13th to 14th June, 2025.`,
        projectsGuided: "PhD Project Guided: NA",
        subjectsTeaching:
          "Computer Graphics, Artificial Intelligence, Machine Learning, Data Science, Python Programming",
        researchPublications: `1) Suresha M and Madhusudhan S, “Projection of Tensors to Retrieve Reflected Edges from an Image”, International Journal of Scientific and Technology Research, Volume 8, Issue 9, September 2019 (ISSN: 2277-8616). Scopus Indexed
2) Suresha M and Madhusudhan S, “Enhancement of Reflected Faces on Semi-reflecting Surfaces”, IEEE International Conference on Image Information Processing (ICIIP-2019), Jaypee University of Information Technology, Himachal Pradesh, India.
3) Suresha M and Madhusudhan S, “Projection of Tensors to Retrieve Reflected Edges from an Image”, International Conference on Numerical Optimization in Engineering and Sciences NOIEAS-2019 at National Institute of Technology, Warangal, 19th to 21st June, 2019.
4) Madhusudhan S, Charishma G, Gowda Miilee Madankumar, Mohidin Ahmed Kabeer and Preety Kakchingtabam, “AI-Driven Environmental Monitoring for Sustainable Water Management: An India-Centric IoT Framework”, IEEE International Conference on Innovate for Humanitarian: Tech Solutions for Global Challenges (ICIH), Acropolis Institute of Technology and Research, Indore, India, 21st to 22nd Nov, 2025.
5) Madhusudhan S, Sannidhi Shetty, Sannidhi, Poojary Prathiksha D and Preksha P Poojary, “Exploring CNN based recognizers for handwritten scripts”, IEEE International Conference on Computing Technologies ICOCT, Jyothi Institute of Technology, Bengaluru, India, 13th to 14th June, 2025.`,
        others: "NA",
      },
    },
    {
      name: "Dr.R.SENTHILKUMAR",
      designation: "Associate Professor",
      qualification: "B.E., M.E., Ph.D.",
      experience: "16",
      email: "senthil@aiet.org.in",
      phone: "NA",
      aoi: "Artificial Intelligence and Machine Learning & Deep Learning, Cloud Computing, Design and Analysis of Algorithm, Image Processing (Diabetic Retinopathy Vessel Detection)",
      photo:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
      joiningDate: "10-04-2023",
      details: {
        qualifications: `Graduation: B.E., in CSE from Tamandu College of Engineering and Technology, Coimbatore, India, 2006.
Post-Graduation: M.E., in CSE from Anna University Regional Centre, Coimbatore, India, 2010.
Ph.D in CSE from Anna University, Chennai, India, 2024.`,
        pastExperience: `Implementation Engineer at Axon Info Soft, Coimbatore (Dec 2005 to Oct 2008)
Assistant Professor in SNS College of Engineering (5 Years)
Assistant Professor in SNS College of Technology (4 Years)
Assistant Professor in Angel College of Engineering and Technology (2 Years)
Assistant Professor in Hindusthan Institute of Technology (2 Years)
Associate Professor in Alva’s Institute of Engineering Technology (2023 - Till Date)`,
        areasOfInterest: `Artificial Intelligence and Machine Learning & Deep Learning
Cloud Computing
Design and Analysis of Algorithm`,
        achievements: `Guided 15 BE level projects and 5 MTech. level projects.
Received VTU Guideship order.
Received District collector award for organizing blood camp with govt hospitals in 2015.
Received award from agriculture department for helping agriculture events in 2013.
Signed MoU with two companies in 2016 & 2017.`,
        professionalMembership: `Computer Science Teachers Association (CSTA) – Membership ID: 41124305.
Society of Digital Information and Wireless Communication (MSDIWC) – Membership ID: 182.
International Association of Engineering (IAENG) - Membership ID: 122384.
Universal Association of Computer and Electronics Engineers (UACEE) Member ID: AM1010002066.`,
        publications: `1. R.Senthilkumar (2014) “Detecting the active attacker using alert protocol” IJARCSMS, Volume 2 issue 36.
2. R.Senthilkumar (2014) “Detection of selfish node using combined AODV and watchdog” IJETT, March 2014 edition.
3. R.Senthilkumar “Survey of accident severity Estimation using data mining Techniques” IJCSET, Vol. 5, No.10, Page No. 1041–1044, Oct 2014. ISSN: 2229-3345.
4. R.Senthilkumar “Automatic accidental data classification and Severity estimation using machine learning Process” IJAER, Vol. 10, No.1, Page No. 952-957 (2015). ISSN: 0973-4562.
5. R.Senthilkumar “Unicast Communication based on Context-aware Adaptive Routing in delay Tolerant Mobile Adhoc Network” JETIR, Volume 2, Issue 4, Page No. 898–901. ISSN: 2349-5162.
6. R.Senthilkumar “Validation Schemes for Session Passwords Using Text And Colors” IJLSM, Volume: 2 Issue: 3, Page No. 022–025. ISSN: 2349-7955.
7. R.Senthilkumar “Hybrid approach for Image restoration” IJNIET, Volume: 3, issue: 3 – July 2015. ISSN: 2319-6319.
8. R.Senthilkumar “Privacy Preservation with Data Leakage Detection & Monitoring” International Journal of Science and Engineering Research (IJOSER), Volume 6, issue : 3 March 2018. ISSN(O) 3221-5687 (P) 3221-568X.
9. Alfred Daniel J, Chandru Vignesh C, Bala Anand Muthu, Senthil Kumar R, Sivaparthipan CB, Carlos Enrique Montenegro Marin. “Fully Convolutional Neural Networks For LIDAR–Camera Fusion For Pedestrian Detection In Autonomous Vehicle”, Springer, Feb 2023, https://doi.org/10.1007/s11042-023-14417-x.
10. S.Vinoth Kumar, S.Vidhya, P.S. Ramesh, R.Senthilkumar, Geetha Ponnaian. “Augumented Road Safety In India Through Real Time Detection Of Road Hazards”, Journal of Computational Analysis and Applications, Vol 33, No.2, 2024.
11. R.Senthilkumar, Dr.A.Bharathi “Discriminative convolution neural network architecture for diagnosis of diabetic retinopathy through classification and progression prediction of lesions grading in color fundus images of retina”.
12. G Manikandan, B Murugesa Kumar, A Bharathi, K Anandakumar, R Senthilkumar. “ORPN Algorithm used to diagnosis and identify plant diseases based on image segmentation using deep learning techniques” ICCAMS 2023. DOI: 10.1109/ICCAMS60113.2023.10526168.
13. Dr.S.Girirajan, S.Vidhya, S. Tamilselvi, S.Durai, R. Senthilkumar, Dr. S. Vinoth Kumar. “Code Generation Empowered by Natural Language Processing and Machine Learning Algorithms”, Advances in Nonlinear Variational Inequalities, Vol 28 No. 1s (2025).`,
        projectsGuided: "PhD Project Guided: 0",
        subjectsTeaching: `Advanced Java
Design and Analysis of Algorithm
Introduction to C
Principles of Compiler Design
Operating Systems
Computer Organization and Architecture
Machine Learning
Deep Learning
Cloud Computing
Software Engineering
Data Base Management Systems`,
        researchPublications: `Product Patent accepted for granting titled on IoT based seminar hall monitoring System (Aug 2018).
Paper patent published titled on Feature Detection and Diabetic Measurement in Retinal Images Based on Hybrid Classifier (09 Jan 2021).
R.Senthilkumar, Dr.A.Bharathi “Gray-Level Co-Occurrence Matrix With Oriented Fast And Rotated Brief Algorithm For Diabetic Retinopathy Prediction”, Journal of Environmental Protection and Ecology, 23, No 7, 3089–3097 (2022).`,
        others: "NA",
      },
    },
    {
      name: "Deepika Kamath",
      designation: "Sr. Assistant Professor",
      qualification: "BE, M.Tech, (PH.D)",
      experience: "15",
      email: "deepika@aiet.org.in",
      phone: "NA",
      aoi: "Algorithms",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      joiningDate: "16-08-2021",
      details: {
        qualifications: "BE, M.Tech, (PH.D)",
        pastExperience: "11",
        areasOfInterest: "Algorithms",
        achievements: `Workshops / FDPs / SDPs Conducted: 5
Guided more than 30 student's projects for under graduates (B.E) course
Coordinator for Institutions level Cyber Security Club
Patent Publication: A SYSTEM AND METHOD FOR DETECTING AND PREVENTING IMAGE FORGERY DETECTION USING DEEP LEARNING TECHNIQUE`,
        professionalMembership: "NA",
        publications: `1. A Review of Core Techniques for Multimodal Large Language Models
2. Cryptocurrency and UPI Convergence: A Next-Gen Digital Payment System
3. Deep Learning for Cognitive Human-Computer Interaction: a Comprehensive Review of Models, Techniques, and Applications`,
        projectsGuided: "30+ UG Projects",
        subjectsTeaching: "DATA STRUCTURES, ANALYSIS OF ALGORITHMS",
        researchPublications: `1. A Review of Core Techniques for Multimodal Large Language Models
      2. Cryptocurrency and UPI Convergence: A Next-Gen Digital Payment System
      3. Deep Learning for Cognitive Human-Computer Interaction: a Comprehensive Review of Models, Techniques, and Applications`,
        others: "NA",
      },
    },
    {
      name: "Jayendra Bandyan",
      designation: "Sr. Assistant Professor",
      qualification: "B.E, M.Tech",
      experience: "26",
      email: "jayendra@aiet.org.in",
      phone: "NA",
      aoi: "Software Development, Programming, Design of new Product, Test Automation",
      photo:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80",
      joiningDate: "21-04-2025",
      details: {
        qualifications: `B.E, M.Tech
Graduation: BIET Davanagere, Karnataka, India, 1996
Post Graduation: AAI of Allahabad University, Allahabad, 2005`,
        pastExperience: `Software Experience:
Senior Software Engineer at IBM, Bangalore (2004-2006)
Application Analyst at National Semiconductor, Bangalore (2007-2008)
Technical specialist at IGATE Global Solutions Ltd, Airoli, Mumbai (2009-2010)
Test Automation specialist at Yahoo India (p) limited, Bangalore (2011-2013)
Technical Architect at CAPGEMINI Software India PVT LTD, Bangalore (2014-2019)

Teaching Experience:
Faculty at SREM, Ramakunja, Karnataka (2020-2023)
Lecturer at Vidvath College, Guruvayankere, Karnataka (2024-2025)
Lecturer at SJRC college, Bangalore, Karnataka (2000-2004)

Mechanical Industrial Experience:
Quality Control Engineer at Reliance Engg. (p) Ltd, Bangalore (1999-2000)
Trainee Engineer at Syscon Instruments (P) Ltd, Bangalore (1997-1998)`,
        areasOfInterest:
          "Software Development, Programming, Design of new Product, Test Automation",
        achievements: `Best Performer in GE-Health care project.
Zero defect Achiever award on Test automation project`,
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching: "Python, Java, JEE, C, C++, Unix, SQL",
        researchPublications: "NA",
        others: "NA",
      },
    },
    {
      name: "KIRAN B V",
      designation: "SENIOR ASSISTANT PROFESSOR",
      qualification: "B.E., M.Tech",
      experience: "18.5",
      email: "kiranbv@aiet.org.in",
      phone: "NA",
      aoi: "Microcontrollers, IoT, Digital Design",
      photo:
        "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&w=400&q=80",
      joiningDate: "07-08-2023",
      details: {
        qualifications: "B.E., M.Tech",
        pastExperience: `13 years worked as Assistant Professor at KVGC College of Engineering, Sullia, D.K
2 years worked as Assistant Professor at Sir M Visvesvaray Institute of Technology, Bangalore
1 year worked as Assistant Professor at Rajeev Institute of Technology, Hassan.`,
        areasOfInterest: "Microcontrollers, IoT, Digital Design.",
        achievements: "NA",
        professionalMembership: "NA",
        publications: `Title of the Paper | Journal | Vol. Issue | Year
1) Improving the efficiency of weigher using PLC controller | IJRET | Volume 3 Special issue 3 | May 2014
2) Pneumonia Detection using Machine learning | IJNS | Volume 13, No.1 | December 2023- January 2024
3) Fortifying IoT Networks: A block chain based communication security paradigm (paper Id: 1571086514) | IEEE | 10.1109/CICN.2024.104 | December 2024
4) Advances in Software Engineering and Programming | IEEE | 10.1109/ICITIIT64777.2025.11041252 | June 2025`,
        projectsGuided: "NA",
        subjectsTeaching:
          "Digital Design & Computer Organization, Microcontrollers",
        researchPublications: `Title of the Paper | Journal | Vol. Issue | Year
1) Improving the efficiency of weigher using PLC controller | IJRET | Volume 3 Special issue 3 | May 2014
2) Pneumonia Detection using Machine learning | IJNS | Volume 13, No.1 | December 2023- January 2024
3) Fortifying IoT Networks: A block chain based communication security paradigm (paper Id: 1571086514) | IEEE | 10.1109/CICN.2024.104 | December 2024
4) Advances in Software Engineering and Programming | IEEE | 10.1109/ICITIIT64777.2025.11041252 | June 2025`,
        others: "NA",
      },
    },
    {
      name: "MAHESH KINI M",
      designation: "SENIOR ASSISTANT PROFESSOR",
      qualification: "BE (CSE), MTech (CSE)",
      experience: "24 years",
      email: "maheshkini@aiet.org.in",
      phone: "NA",
      aoi: "NLP, AI, & Robotics.",
      photo:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
      joiningDate: "05-02-2023",
      details: {
        qualifications: "BE(CSE), MTech (CSE)",
        pastExperience: "NA",
        areasOfInterest: "NLP, AI, & Robotics.",
        achievements: "NA",
        professionalMembership: "NA",
        publications: `Text Mining approach to classify Technical Research Document using Naive Bayes
NC Mahesh Kini M, Saroja Devi H, Prashant G Desai
International Journal of Advanced Research in computer and communication ...

A survey on video summarization techniques
M Kini, K Pai
2019 Innovations in Power and Advanced Computing Technologies (i-PACT) 1, 1-5

Saroja “A Study of Natural Language Processing Based Algorithms for Text Summarization” Devi Niranjan N Chiplunkar
PG Desai
Mahesh Kini M

Text Mining Approach to Classify Technical
M SDHPGDNC Mahesh Kini
International Journal of Advanced Research in Computer and Communication ...

Lightweight AI Models for Enhanced Audio Analysis
KM Mahesh, K N
2nd Asian Conference on Intelligent Technologies (ACOIT) Kolar, India. 2 (2 ...

Technical Document Classifications Using AI-Statistical Methods
M Kini, AL Sharath, S Ganiga, V Akki, V Hulsad
2025 International Conference on Computing Technologies & Data Communication ...

Technical Document Classifications using AI - Statistical Methods
SG Mahesh Kini, Sharth A L
IEEE

Review of Impact Of Generative AI in Finance
MKM Naren N, Neerav, Nikisha Poojari, Varnini
IEEE, 8

Machine learning Based Real Time Surveillance System for Anomaly Detection
MKM Raksha, Ramyashree, Ranjith R Ganiga, S Vishwesh Nayak
IEEE, 9

An Overview of Image Analysis-Based Plant Illness Recognition
MKM Vinay Kumar, Venkatesh H, Vijayalaxmi M K
IEEE, 7

An Overview of Image Analysis-Based Plant Illness Recognition
V Rai, VK SN, V Hulasad, VM Kunnur, M Kini

Object Recognition in Image Sequence using Heuristic Convolution Neural Network
M Kini

A Survey on Text Mining Approaches
H Saroja Devi, M Kini`,
        projectsGuided: "NA",
        subjectsTeaching: `Machine Learning
NOSQL
Applications Data Structures
Operating System
DBMS
Artificial Intelligence
C Programming
Advanced Java Programming
Angular JS and Python Programming`,
        researchPublications: `Text Mining approach to classify Technical Research Document using Naive Bayes
      NC Mahesh Kini M, Saroja Devi H, Prashant G Desai
      International Journal of Advanced Research in computer and communication ...

      A survey on video summarization techniques
      M Kini, K Pai
      2019 Innovations in Power and Advanced Computing Technologies (i-PACT) 1, 1-5

      Saroja “A Study of Natural Language Processing Based Algorithms for Text Summarization” Devi Niranjan N Chiplunkar
      PG Desai
      Mahesh Kini M

      Text Mining Approach to Classify Technical
      M SDHPGDNC Mahesh Kini
      International Journal of Advanced Research in Computer and Communication ...

      Lightweight AI Models for Enhanced Audio Analysis
      KM Mahesh, K N
      2nd Asian Conference on Intelligent Technologies (ACOIT) Kolar, India. 2 (2 ...

      Technical Document Classifications Using AI-Statistical Methods
      M Kini, AL Sharath, S Ganiga, V Akki, V Hulsad
      2025 International Conference on Computing Technologies & Data Communication ...

      Technical Document Classifications using AI - Statistical Methods
      SG Mahesh Kini, Sharth A L
      IEEE

      Review of Impact Of Generative AI in Finance
      MKM Naren N, Neerav, Nikisha Poojari, Varnini
      IEEE, 8

      Machine learning Based Real Time Surveillance System for Anomaly Detection
      MKM Raksha, Ramyashree, Ranjith R Ganiga, S Vishwesh Nayak
      IEEE, 9

      An Overview of Image Analysis-Based Plant Illness Recognition
      MKM Vinay Kumar, Venkatesh H, Vijayalaxmi M K
      IEEE, 7

      An Overview of Image Analysis-Based Plant Illness Recognition
      V Rai, VK SN, V Hulasad, VM Kunnur, M Kini

      Object Recognition in Image Sequence using Heuristic Convolution Neural Network
      M Kini

      A Survey on Text Mining Approaches
      H Saroja Devi, M Kini`,
        others: "NA",
      },
    },
    {
      name: "Mrs.Vidya",
      designation: "Senior Assistant Professor",
      qualification: "B.E, M.Tech",
      experience: "16",
      email: "vidya@aiet.org.in",
      phone: "NA",
      aoi: "Computer Networks, Web Technology, Cloud computing, Network Security",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      joiningDate: "20-07-2013",
      details: {
        qualifications: "B.E, M.Tech",
        pastExperience:
          "Worked as Lecturer in S.N.M Polytechnic Moodbidri, Mangalore, from 01-07-2008 to 17-09-2011.",
        areasOfInterest:
          "Computer Networks, Web Technology, Cloud computing, Network Security",
        achievements:
          "The project titled Technical term sign Language Detection under the guidance of me was selected for the KSCST exhibition held during 11-12th August 2023",
        professionalMembership: "NA",
        publications: `1. Published a Paper “VBS: A Technique to Improve Lifetime of Wireless Sensor Networks” at International Conference on Computer Communication and Network (I3CN), held during May 2015 at Coorg Institute of Technology, South Kodagu, Karnataka
2. Published a Paper “VBS: A Technique to Improve Lifetime of Wireless Sensor Networks” at International Journal of Innovative Research in Electrical, Electronics, Instrumentation and Control Engineering, Volume 3, Special Issue 1, April 2015.
3. Published a paper “Analyzation of Quality of Coconut” at International Research Journal of Engineering and Technology (IRJET), Volume 06, Issue 05, May 2019.
4. Published a paper “A Review on Smart Home Automation System” in International Research Journal Of Modernization in Engineering Technology and Science (IRJMETS) during May 2021, ISSN:2582-5208
5. Published a paper “Smart Farming Using Sensors for Agriculture Task Automation and Fencing System”, International Journal Of Creative Research Thoughts (IJCRT) during July 2021, ISSN:2320-2882
6. Published a paper “Facial Expression Recognition Based on Convolutional Neural Network” in International Journal Of Creative Research Thoughts (IJCRT) during July 2021, ISSN:2320-2882
7. Published a paper “A Review paper on Non-Fungible Tokens (NFT)” in International Journal of Advanced Research in Science, Communication and Technology, Volume2, Issue 2, March 2022.
8. Published a paper “A study on Open Source Software” in International Journal of Advanced Research in Science, Communication and Technology, Volume2, Issue 2, March 2022.
9. A paper titled “AI Powered Multimodal Content Moderation for Online Safety In Social Media Platforms” is published in 6th International Conference on Inventive Research in Computing Applications (ICIRCA-2025)
10. A paper titled “The Role of Edge Computing in Enhancing 5G Networks” is published at the 6th International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV 2025) on 17th to 19th June 2025.`,
        projectsGuided: "NA",
        subjectsTeaching: `Software Engineering
Operating System
Database Management Systems
Computer Organization
Analysis and Design of Algorithms
Programming the Web
Logic Design
Software Testing
Unix Shell Programming
Unix System Programming
Storage Area Network
Cloud Computing
Data Communication`,
        researchPublications: `1. Published a Paper “VBS: A Technique to Improve Lifetime of Wireless Sensor Networks” at International Conference on Computer Communication and Network (I3CN), held during May 2015 at Coorg Institute of Technology, South Kodagu, Karnataka
      2. Published a Paper “VBS: A Technique to Improve Lifetime of Wireless Sensor Networks” at International Journal of Innovative Research in Electrical, Electronics, Instrumentation and Control Engineering, Volume 3, Special Issue 1, April 2015.
      3. Published a paper “Analyzation of Quality of Coconut” at International Research Journal of Engineering and Technology (IRJET), Volume 06, Issue 05, May 2019.
      4. Published a paper “A Review on Smart Home Automation System” in International Research Journal Of Modernization in Engineering Technology and Science (IRJMETS) during May 2021, ISSN:2582-5208
      5. Published a paper “Smart Farming Using Sensors for Agriculture Task Automation and Fencing System”, International Journal Of Creative Research Thoughts (IJCRT) during July 2021, ISSN:2320-2882
      6. Published a paper “Facial Expression Recognition Based on Convolutional Neural Network” in International Journal Of Creative Research Thoughts (IJCRT) during July 2021, ISSN:2320-2882
      7. Published a paper “A Review paper on Non-Fungible Tokens (NFT)” in International Journal of Advanced Research in Science, Communication and Technology, Volume2, Issue 2, March 2022.
      8. Published a paper “A study on Open Source Software” in International Journal of Advanced Research in Science, Communication and Technology, Volume2, Issue 2, March 2022.
      9. A paper titled “AI Powered Multimodal Content Moderation for Online Safety In Social Media Platforms” is published in 6th International Conference on Inventive Research in Computing Applications (ICIRCA-2025)
      10. A paper titled “The Role of Edge Computing in Enhancing 5G Networks” is published at the 6th International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV 2025) on 17th to 19th June 2025.`,
        others: "NA",
      },
    },
    {
      name: "RIZAWAN N SHAIKH",
      designation: "SR. ASST PROFESSOR",
      qualification: "B.E, M.TECH",
      experience: "12",
      email: "RIZWANSHAIKH@AIET.ORG.IN",
      phone: "NA",
      aoi: `Artificial Intelligence
Social Networking
Big Data Analytics
Cyber Security
Graph Theory
Cryptography and Network Security
Machine learning
Artificial Neural Networks
Data Analytics
IOT
Generative AI
Computer Networks`,
      photo:
        "https://images.unsplash.com/photo-1557862951-ef757a68ea23?auto=format&fit=crop&w=400&q=80",
      joiningDate: "11-10-2021",
      details: {
        qualifications: "B.E, M.TECH",
        pastExperience: "01",
        areasOfInterest: `Artificial Intelligence
Social Networking
Big Data Analytics
Cyber Security
Graph Theory
Cryptography and Network Security
Machine learning
Artificial Neural Networks
Data Analytics
IOT
Generative AI
Computer Networks`,
        achievements: "NA",
        professionalMembership: "NA",
        publications: `Book Author: “AI REVOLUTION IN BIOMEDICINE AND BIOTECHNOLOGY TRANSFORMATIVE TRENDS AND EMERGING APPLICATIONS”

PATENT PUBLICATION with Application No. 202541123881 A
Title of the invention: “AN AUTONOMOUS LIGHT DETECTION AND RANGING (LIDAR) AND VISION-BASED ROVER SYSTEM AND METHOD THEREOF”`,
        projectsGuided: "NA",
        subjectsTeaching: `Big Data Analytics
Cyber Security
Cryptography and Network Security
Machine learning
IOT
Python Programming
Artificial Intelligence`,
        researchPublications: `Published paper on “Intelligent Network Traffic Control with AI and Machine Learning”
“DropBridge-A-WebRTC-Based-P2P-File-Transfer-Tool”
“Prototype model of multi — Load AVG for material supply in manufacturing system”`,
        others: "NA",
      },
    },
    {
      name: "Giridhar Gouda",
      designation: "Sr. Assistant Professor",
      qualification: "MTech",
      experience: "22",
      email: "giridhargowda@aiet.org.in",
      phone: "NA",
      aoi: "Machine Learning, Deep Learning, Natural Language Processing.",
      photo:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
      joiningDate: "02-11-2023",
      details: {
        qualifications: "MTech",
        pastExperience: `August 2016 to November 2023 Associate Professor in DBIT, Bengaluru.
August 2013 to May 2016 Assistant Professor in KLEIT, Hubli
August 2012 to May 2013 Associate Professor in MITE, Mudabidri
Mar 2010 to July 2012 Assistant Professor in TCE, Gadag
August 2005 to Feb 2010 Lecturer PDIT, Hospet
March 2004 to July 2005 Lecturer in GMIT, Davangere
November 2002 to February 2004 Lecturer in BCE, Shravanabelagola`,
        areasOfInterest:
          "Machine Learning, Deep Learning, Natural Language Processing.",
        achievements:
          "Best Paper Research Presenter at IEEE conference ICDCECE-2025, Bellary",
        professionalMembership: "NA",
        publications: `1) Robotic Based Pneumonia Diagnosis and Prediction Using Deep Learning Dropout Regularization Technique (ICDCECE-2025).
2) Live facial emotion detection and age-gender prediction using OpenCV and deep learning (IEEE 2025)
3) The Interplay of HCI AR and VR: Mapping Growth Research Contributions and User Insights (IEEE-2025).
4) An Automatic System for IVF data classification by utilizing Multilayer perceptron Algorithm, third international conference on current trends in Engineering and Technology, Thailand.
5) Classification of Facial Expressions using Artificial and Genetic Algorithms, IJREC, Bengaluru.
6) Sensitivity Analysis of optimization algorithms for neural networks using tensorflow, international conference held at GSSSIT, Mysore, Springer-2023.`,
        projectsGuided: "NA",
        subjectsTeaching:
          "OOPs with Java, Python Programming, C Programming, Web Technology, React",
        researchPublications: `1) Robotic Based Pneumonia Diagnosis and Prediction Using Deep Learning Dropout Regularization Technique (ICDCECE-2025).
2) Live facial emotion detection and age-gender prediction using OpenCV and deep learning (IEEE 2025)
3) The Interplay of HCI AR and VR: Mapping Growth Research Contributions and User Insights (IEEE-2025).
4) An Automatic System for IVF data classification by utilizing Multilayer perceptron Algorithm, third international conference on current trends in Engineering and Technology, Thailand.
5) Classification of Facial Expressions using Artificial and Genetic Algorithms, IJREC, Bengaluru.
6) Sensitivity Analysis of optimization algorithms for neural networks using tensorflow, international conference held at GSSSIT, Mysore, Springer-2023.`,
        others: "NA",
      },
    },
    {
      name: "H.Harshavardhan",
      designation: "Sr. Assistant Professor",
      qualification: `M.Tech in Computer Science and Engineering from MIT, Manipal.
B.E in Computer Science and Engineering from Jawaharlal Nehru National College of Engineering (JNNCE), Shivamogga.`,
      experience: "Teaching: 15 Years; Industry: 2 years",
      email: "harshavardhan@aiet.org.in",
      phone: "NA",
      aoi: "Software Engineering, Computer Networks, Artificial Intelligence and Machine Learning.",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      joiningDate: "31-07-2023",
      details: {
        qualifications: `M.Tech in Computer Science and Engineering from MIT, Manipal.
B.E in Computer Science and Engineering from Jawaharlal Nehru National College of Engineering (JNNCE), Shivamogga.`,
        pastExperience:
          "Assistant Professor at Dept. of Computer Science and Engineering, Srinivas institute of Technology, Valachil, Mangalore (2007-2018)",
        areasOfInterest:
          "Software Engineering, Computer Networks, Artificial Intelligence and Machine Learning.",
        achievements: "NA",
        professionalMembership: "NA",
        publications: `Advancements in NLP: From Rule-Based Methods to Modern Language Models, 2025 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)

AI in Satellite Image Processing and Earth Observation-A Systematic Review of Methods, Applications, and Challenges, 2025 IEEE International Conference on Next-Gen Technologies of Artificial Intelligence and Geoscience Remote Sensing (Earth Sense).

Ensuring Data Security in the Cloud: Emerging Security Challenges and Solutions, 2025 International Conference on Multi-Agent Systems for Collaborative Intelligence (ICMSCI).

A Comprehensive Survey of Transfer Learning Techniques and Applications Across Domains, 2025 5th International Conference on Soft Computing for Security Applications (ICSCSA)`,
        projectsGuided: "NA",
        subjectsTeaching: `Software Engineering
Cryptography and Network Security
Computer Networks
Data Structures and Applications
Analysis and Design of Algorithms
Operating systems
Machine Learning`,
        researchPublications: `Advancements in NLP: From Rule-Based Methods to Modern Language Models, 2025 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)

      AI in Satellite Image Processing and Earth Observation-A Systematic Review of Methods, Applications, and Challenges, 2025 IEEE International Conference on Next-Gen Technologies of Artificial Intelligence and Geoscience Remote Sensing (Earth Sense).

      Ensuring Data Security in the Cloud: Emerging Security Challenges and Solutions, 2025 International Conference on Multi-Agent Systems for Collaborative Intelligence (ICMSCI).

      A Comprehensive Survey of Transfer Learning Techniques and Applications Across Domains, 2025 5th International Conference on Soft Computing for Security Applications (ICSCSA)`,
        others: `FACULTY DEVELOPMENT PROGRAM / TRAINING ATTENDED
Participated & completed AICTE Training And Learning (ATAL) Academy Faculty Development Program on Digital Forensics in Cyber Security at ALVA’s INSTITUTE OF ENGINEERING AND TECHNOLOGY from 05/01/2026 to 10/01/2026.`,
      },
    },
    {
      name: "Mahesh D Katakadhond",
      designation: "Assistant Professor",
      qualification: `B.E - Computer Science and Engineering (2018-2022), APS College of Engineering Bangalore (VTU)
M.Tech - Computer Science and Engineering (2023-2025), University of Visvesvaraya College of Engineering Bangalore.`,
      experience: "2",
      email: "maheshdk@aiet.org.in",
      phone: "NA",
      aoi: "Machine Learning, Deep Learning, Generative AI",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      joiningDate: "03-02-2026",
      details: {
        qualifications: `B.E - Computer Science and Engineering (2018-2022), APS College of Engineering Bangalore (VTU)
M.Tech - Computer Science and Engineering (2023-2025), University of Visvesvaraya College of Engineering Bangalore.`,
        pastExperience: `Worked as a lecturer at AIIS Bangalore from August 2025 to December 2025.
Worked as Software Engineer at 6D Technologies from April 2022 to September 2023.`,
        areasOfInterest: `Machine Learning
Deep Learning
Generative AI`,
        achievements:
          "Certificate of Successful Completion of Global IT Training Program Conducted by Toshiba",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching: `Data Mining and Data Warehousing
Software Engineering
Software Testing
Cyber Security Fundamentals
Analysis and Design of algorithms
Database Management System`,
        researchPublications: "NA",
        others: "NA",
      },
    },
    {
      name: "Mr. Abhijith L Kotian",
      designation: "Assistant Professor",
      qualification: "M.Tech, B.E",
      experience: "4",
      email: "abhijithlkotian@gmail.com",
      phone: "NA",
      aoi: "Image Processing, AI, ML, Internet of Things (IoT)",
      photo:
        "https://images.unsplash.com/photo-1557862951-ef757a68ea23?auto=format&fit=crop&w=400&q=80",
      joiningDate: "15-11-2021",
      details: {
        qualifications: `M.Tech - N.M.A.M Institute of Technology, Nitte
B.E - Mangalore Institute of Technology and Engineering, Moodabidri`,
        pastExperience: "0",
        areasOfInterest: "Image Processing, AI, ML, Internet of Things (IoT)",
        achievements: `Project proposal submitted by students under my guidance has been approved by the Karnataka State Council for Science and Technology (KSCST) under 48th Series Student Project Program and participated in State Level Poster Presentation and Exhibition held at Jawaharlal Nehru New College of Engineering, Shivamogga on August 1st and 2nd, 2025
Project Proposal Reference No: 48S_BE_2225
Project Proposal entitled: USE OF DEEP LEARNING FOR EARLY DETECTION OF HUMAN DENTAL DEFECTS AND PROBLEMS`,
        professionalMembership: "NA",
        publications: `1. Abhijith. L. Kotian, S. Kamath, S. Shetty, S. S M and S. Acharya, "An Intelligent System for Predictive Maintenance and Automated Troubleshooting in Laboratory Environments," 2025 INSPIRE, pp. 659-664, doi: 10.1109/INSPIRE67328.2025.11300558.
2. Abhijith. L. Kotian, A. C. Raju, H. I. Akshay, E. C. Srinivas and Gagan, "Vision Guided Curser Control System using facial Landmark," 2025 INSPIRE, pp. 701-706, doi: 10.1109/INSPIRE67328.2025.11300611.
3. Abhijith. L. Kotian, S. M, S. Nadaf, S. V. D, V. P. K. G and S. Aragoddi, "Early Detection of Human Dental Defects by Using Deep Learning," 2025 ICCTDC, doi: 10.1109/ICCTDC64446.2025.11158003.
4. Abhijith. L. Kotian, A. B, A. R. Allapur, A. Gowda and A. Gowda, "A Comprehensive Review of Different Frameworks for Ensuring Data Privacy and Security for IoT Networks in Smart City," 2025 3rd IDCIoT, pp. 720-725, doi: 10.1109/IDCIOT64235.2025.10915140.
5. Abhijith. L. Kotian, A. Sheik, A. H. R, A. R. B and A. M, "Efficient AI Models for Extreme Edge Environments: A Comprehensive Review for Space, Underwater, and Disaster Zones," 2025 ICIRCA, pp. 1799-1804, doi: 10.1109/ICIRCA65293.2025.11089903.
6. Abhijith. L. Kotian, R. Nandipi, A. K. N, A. Kamane, Apoorva and Arun, "A Comprehensive Review of Data-Driven Wireless Communications: A Survey of ML-based Approaches," 2025 ICCMC, pp. 87-92, doi: 10.1109/ICCMC65190.2025.11140883.
7. Abhijith. L. Kotian, A. Ashritha, A. H. Shetty, A. Anush, A. Hafeeza and A. V. Survarna, "Guardians of the Green: A Review of AI, ML, and IoT Innovations Against Illegal Deforestation and Wildlife Poaching," 2025 ICICV, pp. 988-992, doi: 10.1109/ICICV64824.2025.11086053.
8. Abhijith. L. Kotian, R. Nandipi, U. M, U. R. S, VARSHAUK and V. G. T, "A Systematic Review on Human and Computer Interaction," 2024 2nd IDCIoT, pp. 1214-1218, doi: 10.1109/IDCIoT59759.2024.10467622.`,
        projectsGuided: "NA",
        subjectsTeaching: `Digital Design & Computer Organization
Analog And Digital Electronics
Microcontroller and Embedded Systems
Microcontrollers
Data Analytics with Excel
Biology for Computer Engineers
Social Connect and Responsibility`,
        researchPublications: `1. Abhijith. L. Kotian, S. Kamath, S. Shetty, S. S M and S. Acharya, "An Intelligent System for Predictive Maintenance and Automated Troubleshooting in Laboratory Environments," 2025 INSPIRE, pp. 659-664, doi: 10.1109/INSPIRE67328.2025.11300558.
      2. Abhijith. L. Kotian, A. C. Raju, H. I. Akshay, E. C. Srinivas and Gagan, "Vision Guided Curser Control System using facial Landmark," 2025 INSPIRE, pp. 701-706, doi: 10.1109/INSPIRE67328.2025.11300611.
      3. Abhijith. L. Kotian, S. M, S. Nadaf, S. V. D, V. P. K. G and S. Aragoddi, "Early Detection of Human Dental Defects by Using Deep Learning," 2025 ICCTDC, doi: 10.1109/ICCTDC64446.2025.11158003.
      4. Abhijith. L. Kotian, A. B, A. R. Allapur, A. Gowda and A. Gowda, "A Comprehensive Review of Different Frameworks for Ensuring Data Privacy and Security for IoT Networks in Smart City," 2025 3rd IDCIoT, pp. 720-725, doi: 10.1109/IDCIOT64235.2025.10915140.
      5. Abhijith. L. Kotian, A. Sheik, A. H. R, A. R. B and A. M, "Efficient AI Models for Extreme Edge Environments: A Comprehensive Review for Space, Underwater, and Disaster Zones," 2025 ICIRCA, pp. 1799-1804, doi: 10.1109/ICIRCA65293.2025.11089903.
      6. Abhijith. L. Kotian, R. Nandipi, A. K. N, A. Kamane, Apoorva and Arun, "A Comprehensive Review of Data-Driven Wireless Communications: A Survey of ML-based Approaches," 2025 ICCMC, pp. 87-92, doi: 10.1109/ICCMC65190.2025.11140883.
      7. Abhijith. L. Kotian, A. Ashritha, A. H. Shetty, A. Anush, A. Hafeeza and A. V. Survarna, "Guardians of the Green: A Review of AI, ML, and IoT Innovations Against Illegal Deforestation and Wildlife Poaching," 2025 ICICV, pp. 988-992, doi: 10.1109/ICICV64824.2025.11086053.
      8. Abhijith. L. Kotian, R. Nandipi, U. M, U. R. S, VARSHAUK and V. G. T, "A Systematic Review on Human and Computer Interaction," 2024 2nd IDCIoT, pp. 1214-1218, doi: 10.1109/IDCIoT59759.2024.10467622.`,
        others: `SCOPUS PROFILE: https://www.scopus.com/authid/detail.uri?authorId=58982070100
GOOGLE SCHOLAR PROFILE: https://scholar.google.com/citations?user=L04HD30AAAAJ&hl=en
RESEARCHGATE PROFILE: https://www.researchgate.net/profile/Abhijith-Kotian
LINKEDIN PROFILE: https://www.linkedin.com/in/abhijithlkotian/

FDP/Workshops/Trainings Attended:
1. AICTE ATAL FDP on Digital Forensics in Cyber Security (5th to 10th Jan 2026)
2. RDP on Problem Formulation, Publication, Proposal & Thesis Writing (Feb 2022)
3. UHV Refresher 1 (Apr 2022)
4. FDP on Universal Human Values in Technical Education (Jan-Feb 2022)
5. SERB Workshop on Inverse Problems and Applications (Mar 2023)
6. SPARC International Workshop on Sustainable Agriculture adoption (Apr 2022)
7. FDP on SoC Design Methodology using Intel FPGAs (Dec 2022)
8. FDP on Software and System Security, NITK (Dec 2024)
9. DST-ANRF Workshop on Advanced Materials and Manufacturing (Sep 2025)
10. Workshop on Recent Algorithms for Forest Remote Sensing Applications (Nov 2023)
11. Workshop on Recent Algorithms for Remote Sensing Applications (Jul 2022)
12. Workshop on Advances in Mechanical Engineering for Biomedical Applications (Jul 2022)
13. FDP on Latest Trends and Techniques in Software Engineering (Jan 2024)
14. FDP on Interdisciplinary Translational Science & Engineering (Jul 2022)
15. Training on Category B Assets Creation under MGNREGS (Jun 2022)
16. FDP on Introduction to Python Programming & its Applications (Jun 2023)
17. FDP on Electronics Circuit design using Lab View (Jun 2023)
18. IP Awareness / Training program (NIPAM) (Apr 2022)
19. Training on Disaster and Climate Change Resilient Cities (May 2022)
20. FDP on Recent Trends in Cyber Security & Blockchain Technology (Jun-Jul 2022)
21. FDP on Recent Trends in Engineering and Technology (Apr 2022)
22. Training on Remote Sensing and GIS in Disaster Risk Management (Jun 2022)
23. FDP on Designing and Modelling of IoT, AI & ML Systems (Aug 2023)
24. FDP on Disaster Resilience and Green Technology for SDGs (Jun 2022)`,
      },
    },
    {
      name: "Rakshitha Rai U",
      designation: "Assistant Professor",
      qualification: "M.Tech, B.E.",
      experience: "12.5 years",
      email: "rakshitharai31@gmail.com",
      phone: "NA",
      aoi: "Natural Language Processing, Ethical Hacking, Deep Learning",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      joiningDate: "02-02-2026",
      details: {
        qualifications: `M.Tech, Srinivas Institute Of Technology, Valachil, Mangalore (VTU)
B.E., Vivekananda College Of Engineering, Puttur (VTU)`,
        pastExperience: `Corporate (11 years)
Teaching (1.5 years)`,
        areasOfInterest:
          "Natural Language Processing, Ethical Hacking, Deep Learning",
        achievements: "NA",
        professionalMembership: "NA",
        publications:
          "Journal of Emerging Technologies and Innovative Research (JETIR) (JOURNAL: Cancer Detection by Artificial Intelligence)",
        projectsGuided: "NA",
        subjectsTeaching:
          "DBMS, Python Programming, Computer Networks, C programming",
        researchPublications:
          "Journal of Emerging Technologies and Innovative Research (JETIR) (JOURNAL: Cancer Detection by Artificial Intelligence)",
        others: "NA",
      },
    },
    {
      name: "Aysha Rameela",
      designation: "Assistant Professor",
      qualification: "B.E in ISE, M.Tech in CSE",
      experience: "1",
      email: "aysharameela19@gmail.com",
      phone: "NA",
      aoi: "Internet of Things (IoT), Artificial Intelligence and Machine Learning, C Programming, Embedded Systems",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      joiningDate: "09-02-2026",
      details: {
        qualifications: `Graduation: B.E in ISE from YIT Moodbidri, India, 2023
Post Graduation: M. Tech in CSE from SUIET Mukka, Mangalore, India, 2026`,
        pastExperience:
          "Worked as a Software Engineer Trainee in Folkslogic Technologies, Mangalore, India",
        areasOfInterest: `Internet of Things (IoT) System Design and Applications
Artificial Intelligence and Machine Learning
C Programming and Embedded Systems Development.`,
        achievements: `Completed Faculty Development Program on Next-Generation Energy Storage, Srinivas University (Nov 2024).
Presented a paper at 2nd International Conference on Management 5.0, DSCE, Bengaluru (Dec 2024).
Presented a research paper titled “Privacy and Security Challenges to Generative AI” at the Two Days International Conference on Recent Innovations in Computer Science (ICRICS-2025).
Presented a research paper titled “Bridging the Communication Gap: An Improved Real-Time Indian Sign Language Translation with Deep Learning” at IEEE AIDE 2025, NMAM Institute of Technology, Nitte (06–07 Feb 2025).`,
        professionalMembership: "NA",
        publications:
          "Bridging the Communication Gap: An Improved Real-Time Indian Sign Language Translation with Deep Learning, Published at IEEE AIDE 2025, NMAM Institute of Technology, Nitte, February 2025.",
        projectsGuided: "NA",
        subjectsTeaching:
          "Computer Network, Data Communication, Web Technology, Internet of Things",
        researchPublications:
          "International conference paper presented at IEEE AIDE 2025, NMAM Institute of Technology, Nitte.",
        others: "NA",
      },
    },
    {
      name: "Ms. Jasmine Princy Lobo",
      designation: "Teaching Assistant",
      qualification: "B.E.",
      experience: "6",
      email: "jasmine@aiet.org.in",
      phone: "NA",
      aoi: "Artificial Intelligence, Machine Learning, IOT",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      joiningDate: "02-09-2024",
      details: {
        qualifications: "B.E.",
        pastExperience: "5 years (Industry)",
        areasOfInterest: "Artificial Intelligence, Machine Learning, IOT",
        achievements: `Topper of AIET CSE batch 2015-2019
Employee of the Quarter, Champ Award (DXC Technology, Bangalore).`,
        professionalMembership: "NA",
        publications: `IEEE - Sign language interpretation to text: a real-time cnn-Based approach
Elsevier - Algorithmic Approach for Cash Withdrawal Problem in ATM`,
        projectsGuided: "NA",
        subjectsTeaching:
          "Programming in C, Advanced Java, Python programming.",
        researchPublications: `https://ieeexplore.ieee.org/author/350816299360741
https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3578519`,
        others: "NA",
      },
    },
    {
      name: "Ms.Yogitha",
      designation: "Teaching Assistant",
      qualification: `Bachelor of Computer Applications, Alva’s College, Moodubidire-2019
Master of Computer Applications, Shree Devi Institute of Technology, Kenjar, Mangalore (VTU)-2025`,
      experience: "2",
      email: "yogithak@aiet.org.in",
      phone: "NA",
      aoi: "Data Structures, Data communication & Computer Network, Database Management Systems",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      joiningDate: "14-07-2025",
      details: {
        qualifications: `Bachelor of Computer Applications, Alva’s College, Moodubidire-2019
Master of Computer Applications, Shree Devi Institute of Technology, Kenjar, Mangalore (VTU)-2025`,
        pastExperience: "2 years Experience at SN PUBLIC SCHOOL, MANGALORE",
        areasOfInterest:
          "Data Structures, Data communication & Computer Network, Database Management Systems",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching: "Computer Networks, Database Management System",
        researchPublications: "NIL",
        others: "NA",
      },
    },
    {
      name: "Srinivasa",
      designation: "Teaching Assistant",
      qualification: "Bachelor of Engineering (BE)",
      experience: "6 months",
      email: "SrinivasaCSE@aiet.org.in",
      phone: "NA",
      aoi: `Python Programming
Web & Application Development
Blockchain Technologies
Digital Marketing & Crypto Ecosystems`,
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      joiningDate: "18-08-2025",
      details: {
        qualifications: "Bachelor of Engineering (BE)",
        pastExperience: "Fresher (No previous full-time employment)",
        areasOfInterest: `Python Programming
Web & Application Development
Blockchain Technologies
Digital Marketing & Crypto Ecosystems`,
        achievements:
          "Developed practical digital projects and research-oriented work in Web3 and finance tracking",
        professionalMembership: "NA",
        publications: `“An Overview of Deep Learning for Detecting Brain Tumors” – Published at ICCET 2024
“Finance Tracker using Blockchain Technologies” – Accepted and presented at ICCCNet 2025`,
        projectsGuided: "NA",
        subjectsTeaching: "Python Programming, Artificial Intelligence (AI)",
        researchPublications: `“An Overview of Deep Learning for Detecting Brain Tumors” – Conference publication on AI/ML applications in medical imaging.
“Finance Tracker using Blockchain Technologies” – Research accepted & presented at ICCCNet 2025.`,
        others: `Experienced in Web3 finance development, including decentralized finance (DeFi) concepts and smart contract-based financial protocols.
Skilled in digital asset analysis and ICT-based trading strategies to support informed decision-making in crypto markets.`,
      },
    },
  ],
  exploreData: {
    about: {
      title: "ABOUT COMPUTER SCIENCE & ENGINEERING",
      body: `The Department of Computer Science and Engineering (CSE) focuses on cutting-edge education and research in software, systems, and computational theory. The curriculum emphasizes programming, algorithms, data structures, computer architecture, operating systems, databases, networking, and AI/ML. The department prepares students for industry and research through project-based learning and strong industry collaborations.`,
      highlights: [
        "Strong programming and systems labs.",
        "Industry-relevant curriculum and projects.",
        "Active research in AI and systems.",
      ],
    },
    thrust: {
      title: "THRUST AREA",
      body: "Focusing on AI/ML, Data Science, Distributed Systems and Cybersecurity.",
      highlights: [
        "• AI / Machine Learning",
        "• Data Science",
        "• Distributed Systems",
      ],
    },
    peo: {
      title: "(PEO's, PO's, PSO'S)",
      body: `PEO1: Exhibit the knowledge and skill sets to adapt to the dynamic technological transformations and developments in the field of Computer Science and Engineering.
PEO2: Get adapted to a corporate working environment discharging entrusted duties competently and be able to stay updated on the emerging technological changes to initiate a start-up.
PEO3: Get engaged in an innovative career to exploit new ideas for gaining social and economic values or to pursue higher studies in the field of research.

PO1: Engineering Knowledge: Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.
PO2: Problem Analysis: Identify, formulate, review research literature and analyse complex engineering problems reaching substantiated conclusions with consideration for sustainable development.
PO3: Design/Development of Solutions: Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for the public health and safety, whole-life cost, net zero carbon, culture, society and environment as required.
PO4: Conduct Investigations of Complex Problems: Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data to provide valid conclusions.
PO5: Engineering Tool Usage: Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling recognizing their limitations to solve complex engineering problems.
PO6: The Engineer and The World: Analyse and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment.
PO7: Ethics: Apply ethical principles and commit to professional ethics, human values, diversity and inclusion; adhere to national & international laws.
PO8: Individual and Collaborative Team work: Function effectively as an individual, and as a member or leader in diverse/multi-disciplinary teams.
PO9: Communication: Communicate effectively and inclusively within the engineering community and society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations considering cultural, language, and learning differences.
PO10: Project Management and Finance: Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.
PO11: Life-Long Learning: Recognize the need for, and have the preparation and ability for i) independent and life-long learning ii) adaptability to new and emerging technologies and iii) critical thinking in the broadest context of technological change.

PSO1: Professional Skills: The ability to understand & implement the computer programs in the areas of Computer Architecture, System Software, Database Management Systems, Web Design, Multimedia and Computer Networking.
PSO2: Problem-Solving Skills: The ability to solve real-world problems by suitable mathematical model with strong technological concepts in rapidly growing arena of computer technology.
PSO3: Successful Career and Entrepreneurship: Knowledge in diverse areas of Software Engineering and Management & Entrepreneurship for IT Industry, conducive in cultivating skills for successful career development.`,
      highlights: [
        "Strong foundational knowledge in computing.",
        "Project-oriented learning.",
        "Industry-ready graduates.",
      ],
    },
    syllabus: {
      title: "SCHEME & SYLLABUS",
      body: "Latest curriculum with advanced elective courses in AI, Data Science and Cloud Computing.",
      highlights: [
        "Credit-based system",
        "Project-oriented courses",
        "Regular workshops",
      ],
      syllabusCategories: [
        {
          name: "Autonomous Scheme and Syllabus",
          links: [
            {
              year: "3rd Sem Autonomous",
              id: "1DROqwjn99tR-4Y6mROQooWfyqy41SdXm",
            },
            {
              year: "4th Sem Autonomous",
              id: "1qTEXEaN2iERppoGT-0FMC0jlESNHTByU",
            },
          ],
        },
        {
          name: "VTU Scheme and Syllabus",
          links: [
            {
              year: "3rd Sem",
              id: "14Auyk6TGID-RWfq3xwLe9pq6G2myzYvn",
            },
            {
              year: "4th Sem",
              id: "1GFf7S0vMikQV95cMliYbuwDOKMSiZobP",
            },
            {
              year: "5th Sem",
              id: "1D6C64JiyoWvQpVR-lbpHOiAJaNW-iRgZ",
            },
            {
              year: "6th Sem",
              id: "13Z8OOXjoYNa58kjAiMTpMeTr4Lr7usmV",
            },
            {
              year: "7th Sem",
              id: "1Xdvfrx4jkY8IYO-ejZIiDC9Y5j7Utuct",
            },
          ],
        },
      ],
    },
    placements: {
      title: "PLACEMENT",
      body: "Students placed in top IT companies and startups.",
      highlights: [
        "Strong placement support",
        "Industry internships",
        "High-growth opportunities",
      ],
    },
    research: {
      title: "RESEARCH AND PUBLICATION",
      body: "Active research groups publishing in AI, Systems and Security.",
      highlights: [
        "International publications",
        "Research grants",
        "Student research projects",
      ],
    },
    facultyStaff: { title: "FACULTY AND STAFF", body: "", highlights: [] },
    facilities: {
      title: "FACILITIES",
      body: "Modern computing labs, cloud credits and dedicated research servers.",
      highlights: ["High-performance labs", "GPU clusters", "Cloud resources"],
    },
    workshop: {
      title: "WORKSHOP AND CONFERENCE",
      body: "Regular hackathons, workshops and seminars with industry experts.",
      highlights: [
        "Annual coding fest",
        "Guest lectures",
        "Student symposiums",
      ],
    },
    clubs: {
      title: "PROFESSIONAL BODIES",
      body: "Student chapters and developer clubs active throughout the year.",
      highlights: ["Coding club", "AI club", "Open-source initiatives"],
    },
    achievements: {
      title: "ACHIEVEMENTS",
      body: "Students and faculty winning national hackathons and publishing research.",
      highlights: [
        "Hackathon winners",
        "Research awards",
        "Startup incubations",
      ],
    },
    activities: {
      title: "DEPARTMENT ACTIVITIES",
      body: "From community outreach to technical workshops, the department regularly conducts activities that build awareness, skills, and responsible digital citizenship.",
      highlights: [
        "Over 50 participants actively engaged and shared experiences.",
        "Participants learned practical red flags and safe digital habits.",
        "Encouraged prompt reporting and community-led cyber awareness.",
      ],
      entries: [
        {
          title: "Cyber Security Awareness Talk",
          topic: "On various rising cyber threats",
          date: "06-09-2025",
          venue: "Rotary Club Moodabidre",
          audience: "Members of Rotary Club and local community",
          conductedBy: "Rotary Club Moodabidre Cybersecurity Awareness Team",
          overview:
            "A Cybersecurity Awareness Talk was conducted at the Rotary Club, Moodabidre to spread knowledge about the rising digital threats affecting individuals and communities in coastal Karnataka. The talk aimed to empower people to recognize cyber frauds, understand local trends in cybercrime, and adopt safety measures in their day-to-day digital activities. The awareness program highlighted real-world cases from Moodabidre, Bantwala, Mangalore, and Udupi, emphasizing the importance of digital safety in native and rural areas.",
          objectives: [
            "To raise awareness about increasing cyber threats in local communities.",
            "To explain concepts of phishing, vishing, and social engineering with real examples.",
            "To share recent cyber fraud statistics, including regional loss figures.",
            "To educate participants on best practices for online safety and secure digital habits.",
            "To demonstrate practical methods for detecting and avoiding scams.",
            "To train participants on identifying red flags in calls, messages, and emails.",
            "To encourage the community to report incidents promptly to the cybercrime helpline.",
            "To empower people to act as “cyber ambassadors” in their families and neighborhoods.",
          ],
          impact:
            "Over 50 participants actively engaged in the session. Attendees shared personal experiences of being targeted by scams. Elderly citizens gained clarity on how to verify suspicious calls. Young participants pledged to spread awareness among peers.",
          conclusion:
            "The cybersecurity awareness session at Rotary Club Moodabidre addressed both global and local cyber threats, provided real-life examples with recent loss figures, and equipped participants with practical skills for online safety. The program created a network of individuals ready to spread awareness and reinforced the role of community-driven cybersecurity initiatives.",
          tags: [
            "Community Outreach",
            "Cybersecurity",
            "Awareness",
            "Phishing",
            "Vishing",
            "Social Engineering",
          ],
        },
      ],
    },
    newsletter: {
      title: "E-NEWSLETTER",
      body: "Quarterly updates from the department of CSE.",
      highlights: ["Student projects", "Faculty research", "Events"],
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
