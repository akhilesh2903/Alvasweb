import { DepartmentData, Faculty } from "@/lib/departments";
const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;
export const cseDepartmentData: DepartmentData = {
  id: "cse",
  name: "Computer Science & Engineering",
  title: "Computer Science & Engineering",
  vision:
    "Engineering competent, excellent professionals by transforming the knowledge and computing skills to individuals through modern innovative tools and techniques",
  mission: `M1: To produce skilled, creative software developers through rigorous training. M2: To conduct specific technical courses to keep abreast to the latest technological developments and transformations in the domain. M3: To implement the ideas of research and innovations in interdisciplinary domains. M4: To establish Industry-Institute Interaction programs to enhance the skills of employability and entrepreneurship.`,
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
      qualifications: `B.E, R.V. College of Engineering, Bangalore (2000) M.Tech, NMAM Institute of Technology, Nitte (2005) Ph.D, VTU, Belagavi (2017)`,
      pastExperience: `2001-2013 at NMAM Institute of Technology, Nitte 2013-till date at AlvaΓÇÖs Institute of Engineering & Technology, Moodbidri`,
      areasOfInterest: "Distributed Systems and Cyber Security",
      achievements: `Recognized as a Peer Reviewer for Elsevier, Springer and IEEE Access  Sl\tReviewer for\t# 1\tIEEE Access\t3 2\tElsevier\t9 3\tSpringer\t4 4\tAutomatika\t1 5\tEngineered Science\t2 6\tIEEE Conferences\t23`,
      professionalMembership: `Member IEEE 2018- till date Life Member, ISTE (2001 to till date)`,
      publications: `Web of Science Researcher ID: AAI-4579-2020 Scopus ID: 56538593400 ORCID-ID: https://orcid.org/0000-0003-3601-225X Vidwan ID: https://vidwan.inflibnet.ac.in/profile/319372 Research Gate: https://www.researchgate.net/profile/Manjunath-Kotari`,
      projectsGuided: "PhD Project Guided: 07",
      subjectsTeaching: `Cryptography & Network Security Cyber Security Advanced Computer Architecture Cloud Computing Distributed Systems Operating Systems Information Security Computer Systems & Performance Analysis Formal Models Storage Area Networks Computer Graphics Programming Languages Finite Automata & Formal Languages System Software Compiler Design`,
      researchPublications: `Scopus Indexed / Web of Science Articles ΓÇó Manjunath Kotari, Veena M., NLP-Powered Career and Higher Education Guidance and Recommendation System: A Deep Learning Approach, Journal of Circuits Systems and Computers, 35(2), 2026. ΓÇó Manjunath Kotari, Rathod J.A., Secure and efficient message transmission in MANET using hybrid cryptography and multipath routing technique, Multimedia Tools and Applications, 84(13), 2025 ΓÇó Manjunath Kotari, Harish Kunder, A Survey on Customized Algorithm Approach for Solving Non-convex Optimization Problems in Machine Learning, Springer Proceedings in Mathematics and Statistics 492 PROMS, 2025 ΓÇó Manjunath Kotari, Harshika, Gurukiran P, Sathish S, Goenka R, Temporal Analysis of Rainfall Patterns Over India: Insights from IMERG, GSMap, and IMD Data, Proceedings of 8th International Conference on Trends in Electronics and Informatics Icoei 2025 ΓÇó Manjunath Kotari, Bharathesh S.K., Naik B.S., ...Shetty K.A., Shetty A.S., IoT-Enabled Cargo Shipment Management: Real-Time Tracking and Optimization in Global Logistics, 2025 International Conference on Intelligent Control Computing and Communications Ic3 2025 ΓÇó Manjunath Kotari, Shreyas P.S., Hegde V.V., ...Shetty S.K., Bhandary S.R., A Lightweight Network Deployed on ARM Device for Hand Gesture Recognition, 2025 International Conference on Intelligent Control Computing and Communications Ic3 2025 ΓÇó Manjunath Kotari, Sathyaprakash B.P., Petal Region Analysis of Improved Petal Ant Routing for Mobile Ad Hoc Networks, SN Computer Science 5(5), 2024 ΓÇó Manjunath Kotari, Rathod J.A., TriChain: Kangaroo-Based Intrusion Detection for Secure Multipath Route Discovery and Route Maintenance in MANET Using Advanced Routing Protocol, International Journal of Computer Networks and Applications, 11(1), 2024 ΓÇó Manjunath Kotari, Sathyaprakash B.P., Dynamic Routing Using Petal Ant Colony Optimization for Mobile Ad-hoc Networks, International Journal of Advanced Computer Science and Applications, 14(10), 2023 ΓÇó Manjunath Kotari, Chiplunkar N.N., Nagesh H.R., Implementation of secure customized monitoring tool for adaptive distributed systems, Proceedings of 2014 International Conference on Contemporary Computing and Informatics Ic3i 2014 ΓÇó Manjunath Kotari, Chiplunkar N.N., Investigation of security issues in distributed system monitoring, Handbook of Computer Networks and Cyber Security Principles and Paradigms, 2019 ΓÇó Manjunath Kotari, Chiplunkar N.N., A survey on detection and analysis of cyber security threats through monitoring tools, Handbook of Research on Intrusion Detection Systems, 2020. ΓÇó Manjunath Kotari, Nagesh U.B., Chethan S.C., Integration of MQTT Protocol with Map APIs for Smart Garbage Management, 2021 IEEE International Conference on Distributed Computing VLSI Electrical Circuits and Robotics Discover 2021 Proceedings, 2021 ΓÇó Manjunath Kotari, Balaji N., Karthik Pai B.H., Bhavatarini N., Sreenidhi B.K., Cyberbullying in Online/E-Learning Platforms Based on Social Networks, Lecture Notes in Networks and Systems, 334, 2022 ΓÇó Manjunath Kotari, Rathod J.A., A Novel Framework for Network Based Secure Message Transmission Based on Fragmentation and Cryptography, 4th International Conference on Circuits Control Communication and Computing I4c 2022, 2022.  Patents Published: ΓÇó SYSTEM FOR HARDWARE ACCELERATION FOR EMBEDDED FLASH MEMORY BASED ON MACHINE LEARNING ΓÇö 2021-05-07 ΓÇó TOP SLIDING DRIVING HELMET FOR BETTER AIR VENTILATION WITH IOT FEATURES ΓÇö 2021-02-18  Conference / Journals: 27`,
      others: `BoS ΓÇó Chairman Board of Studies (BoS), department of CSE, AlvaΓÇÖs Institute of Engineering & Technology, Moodbidri (2024- till date). ΓÇó VTU Nominee of Board of Studies, department of ICBC, St. Joseph Engineering College, Mangalore (2024- till date) ΓÇó Member of Board of Studies, department of Cyber Security, NMAMIT, Nitte University (2025- till date) ΓÇó Member of Board of Studies, department of CSE, NMAMIT, Nitte University (2025- till date) ΓÇó Member of Board of Studies, department of ISE, NMAMIT, Nitte University (2023- 2025) ΓÇó VTU Nominee, Board of Studies, department of ISE, NMAMIT, Nitte University (2020- 2022) - Autonomous ΓÇó VTU Nominee, Board of Studies, department of CSE, NMAMIT, Nitte (2016- 2018) ΓÇó Member, Board of Studies, department of CSE, NMAMIT, Nitte (Autonomous) (2007- 2012)  BoE ΓÇó Chairman Board of Examinations (BoE), department of CSE, AlvaΓÇÖs Institute of Engineering & Technology, Moodbidri (2024- till date) ΓÇó Member Board of Examinations (BoE), Computer Science & Engineering-Composite Board, VTU (2023-24) ΓÇó Member Board of Examinations (BoE), Computer Science & Engineering-Composite Board, VTU (2021-22)  ΓÇó Member VTU Local Inquiry Committee (2018)`,
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
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1LfrCs2CMOlIc_fs4VgZfEKy_ul5VDnC7",
      ),
      joiningDate: "14-11-2016",
      details: {
        qualifications: `PhD ΓÇô 2016 ME ΓÇô 2008, Anna University, Chennai AMIE ΓÇô 2004, IEI Kolkatta`,
        pastExperience: `9 years teaching and research experience in KS Rangasamy College of Technology, Tiruchengodu, TN state 6 years ΓÇô Software Developer and trainer ΓÇô Blue Moon Computers, Erode 9 years ΓÇô AlvaΓÇÖs Institute of Engineering and Technology, Mijar, Moodbidri, Mangalore (till now)`,
        areasOfInterest: `Mobile Adhoc Networks Wireless Sensor Networks Machine Learning Deep Learning Data Analytics`,
        achievements: `Recognized as NPTEL Domain Scholar in Programming (Dec 2020) Recognized as NPTEL Discipline Star (Dec 2020) Reviewed 6 International Journal papers from 2020 to 2023 at Elsevier Journal and received the Elsevier Reviewer Recognition Certificate Active SPOC for Swayam NPTEL Recognized with prospect Certificate for active participation in NPTEL examination during Jan-Apr 2024 Recognized with Active SPOC Certificate for active participation in NPTEL examination during Jul-Dec 2024`,
        professionalMembership: "NA",
        publications: `Publication in the SCI and scopus indexed international journals: ΓÇó Mohideen Badhusha, S, Anvitha Poojary, Anvitha U, Ashwini, Akshata Hegde (2021) Improved Air Pollution Monitoring System using IoT. Journal of Chengdu University of Technology, vol.26, issue.7, ISSN: 1671-9727 (Scopus indexed) ΓÇó Mohideen Badhusha, S, Geetha BG, Prabhu P, Vasanthi R. (2018) Improved video streaming using MSVC and nonoverlapping zone routing multipath propagation over MANETs. Int J Commun Syst. vol.31, issue.10, pp 1-23, e3578. https://doi.org/10.1002/dac.3578 (SCI and Scopus indexed) ΓÇó Mohideen Badhusha, S & Duraiswamy, K (2015) Energy Efficient Improved Bandwidth Video Streaming through reliable Multipath propagation in MANETs. International Journal of Applied Engineering Research, ISSN 0973-4562, vol.10, no.13, pp.32888-32900 (Scopus indexed) ΓÇó Mohideen Badhusha, S & Duraiswamy, K (2015) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. World Academy of Science, Engineering and Technology, International Journal of Computer, Electrical, Automation, Control and Information Engineering, vol.9, no.6, pp.1339-1  Publication in the Book Chapter: ΓÇó Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2017) Energy Efficient Improved Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. In ΓÇÿAdvanced Engineering Research & ApplicationsΓÇÖ (ISBN:978-93-86138-58-3) ΓÇö 15th chapter. ΓÇó Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2018) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. In ΓÇÿAdvanced Engineering Research & ApplicationsΓÇÖ (ISBN:978-93-86138-58-3) ΓÇö 22nd chapter.  Publication of the Book: ΓÇó Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2017) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. Lambert Academic Publishing (ISBN:978-3-330-07764-5).  Scopus indexed International Conference: ΓÇó An Effective Identification of Ayurveda Herbal Plants Using CNN Model, AIP Conference Proceedings, 3278(1) 2025 ΓÇó Smart Crop Health Monitoring and Disease Prediction System using IoT and Machine Learning ΓÇö IEEE Xplore, Icici 2025 ΓÇó An Effective and Comprehensive Crop Recommendation System Using Machine Learning ΓÇö ICETCS 2024, doi: 10.1109/ICETCS61022.2024.10543400 ΓÇó Enhanced Deep Learning Based Multi-omics Oral Cancer Survival Prediction System ΓÇö ICICNIS-2025`,
        projectsGuided: "PhD Project Guided: nil",
        subjectsTeaching: `Object Oriented programming using C++, Java, C# and .NET framework XML and Web services Computer networks Wireless Sensor Networks Windows programming Graphics and multimedia system Information Security Web Technology and its applications Python Programming and its applications Open source system and Object oriented programming in Python Advanced Java`,
        researchPublications: `Publication in the SCI and scopus indexed international journals:       ΓÇó Mohideen Badhusha, S, Anvitha Poojary, Anvitha U, Ashwini, Akshata Hegde (2021) Improved Air Pollution Monitoring System using IoT. Journal of Chengdu University of Technology, vol.26, issue.7, ISSN: 1671-9727 (Scopus indexed)       ΓÇó Mohideen Badhusha, S, Geetha BG, Prabhu P, Vasanthi R. (2018) Improved video streaming using MSVC and nonoverlapping zone routing multipath propagation over MANETs. Int J Commun Syst. vol.31, issue.10, pp 1-23, e3578. https://doi.org/10.1002/dac.3578 (SCI and Scopus indexed)       ΓÇó Mohideen Badhusha, S & Duraiswamy, K (2015) Energy Efficient Improved Bandwidth Video Streaming through reliable Multipath propagation in MANETs. International Journal of Applied Engineering Research, ISSN 0973-4562, vol.10, no.13, pp.32888-32900 (Scopus indexed)       ΓÇó Mohideen Badhusha, S & Duraiswamy, K (2015) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. World Academy of Science, Engineering and Technology, International Journal of Computer, Electrical, Automation, Control and Information Engineering, vol.9, no.6, pp.1339-1        Publication in the Book Chapter:       ΓÇó Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2017) Energy Efficient Improved Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. In ΓÇÿAdvanced Engineering Research & ApplicationsΓÇÖ (ISBN:978-93-86138-58-3) ΓÇö 15th chapter.       ΓÇó Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2018) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. In ΓÇÿAdvanced Engineering Research & ApplicationsΓÇÖ (ISBN:978-93-86138-58-3) ΓÇö 22nd chapter.        Publication of the Book:       ΓÇó Dr. S. Mohideen Badhusha & Dr. Duraiswamy, K (2017) Secure Low-Bandwidth Video Streaming through Reliable Multipath Propagation in MANETs. Lambert Academic Publishing (ISBN:978-3-330-07764-5).        Scopus indexed International Conference:       ΓÇó An Effective Identification of Ayurveda Herbal Plants Using CNN Model, AIP Conference Proceedings, 3278(1) 2025       ΓÇó Smart Crop Health Monitoring and Disease Prediction System using IoT and Machine Learning ΓÇö IEEE Xplore, Icici 2025       ΓÇó An Effective and Comprehensive Crop Recommendation System Using Machine Learning ΓÇö ICETCS 2024, doi: 10.1109/ICETCS61022.2024.10543400       ΓÇó Enhanced Deep Learning Based Multi-omics Oral Cancer Survival Prediction System ΓÇö ICICNIS-2025`,
        others: "NA",
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
        publications: `1) Suresha M and Madhusudhan S, â€œProjection of Tensors to Retrieve Reflected Edges from an Imageâ€, International Journal of Scientific and Technology Research, Volume 8, Issue 9, September 2019 (ISSN: 2277-8616). Scopus Indexed
2) Suresha M and Madhusudhan S, â€œEnhancement of Reflected Faces on Semi-reflecting Surfacesâ€, IEEE International Conference on Image Information Processing (ICIIP-2019), Jaypee University of Information Technology, Himachal Pradesh, India.
3) Suresha M and Madhusudhan S, â€œProjection of Tensors to Retrieve Reflected Edges from an Imageâ€, International Conference on Numerical Optimization in Engineering and Sciences NOIEAS-2019 at National Institute of Technology, Warangal, 19th to 21st June, 2019.
4) Madhusudhan S, Charishma G, Gowda Miilee Madankumar, Mohidin Ahmed Kabeer and Preety Kakchingtabam, â€œAI-Driven Environmental Monitoring for Sustainable Water Management: An India-Centric IoT Frameworkâ€, IEEE International Conference on Innovate for Humanitarian: Tech Solutions for Global Challenges (ICIH), Acropolis Institute of Technology and Research, Indore, India, 21st to 22nd Nov, 2025.
5) Madhusudhan S, Sannidhi Shetty, Sannidhi, Poojary Prathiksha D and Preksha P Poojary, â€œExploring CNN based recognizers for handwritten scriptsâ€, IEEE International Conference on Computing Technologies ICOCT, Jyothi Institute of Technology, Bengaluru, India, 13th to 14th June, 2025.`,
        projectsGuided: "PhD Project Guided: NA",
        subjectsTeaching:
          "Computer Graphics, Artificial Intelligence, Machine Learning, Data Science, Python Programming",
        researchPublications: `1) Suresha M and Madhusudhan S, â€œProjection of Tensors to Retrieve Reflected Edges from an Imageâ€, International Journal of Scientific and Technology Research, Volume 8, Issue 9, September 2019 (ISSN: 2277-8616). Scopus Indexed
2) Suresha M and Madhusudhan S, â€œEnhancement of Reflected Faces on Semi-reflecting Surfacesâ€, IEEE International Conference on Image Information Processing (ICIIP-2019), Jaypee University of Information Technology, Himachal Pradesh, India.
3) Suresha M and Madhusudhan S, â€œProjection of Tensors to Retrieve Reflected Edges from an Imageâ€, International Conference on Numerical Optimization in Engineering and Sciences NOIEAS-2019 at National Institute of Technology, Warangal, 19th to 21st June, 2019.
4) Madhusudhan S, Charishma G, Gowda Miilee Madankumar, Mohidin Ahmed Kabeer and Preety Kakchingtabam, â€œAI-Driven Environmental Monitoring for Sustainable Water Management: An India-Centric IoT Frameworkâ€, IEEE International Conference on Innovate for Humanitarian: Tech Solutions for Global Challenges (ICIH), Acropolis Institute of Technology and Research, Indore, India, 21st to 22nd Nov, 2025.
5) Madhusudhan S, Sannidhi Shetty, Sannidhi, Poojary Prathiksha D and Preksha P Poojary, â€œExploring CNN based recognizers for handwritten scriptsâ€, IEEE International Conference on Computing Technologies ICOCT, Jyothi Institute of Technology, Bengaluru, India, 13th to 14th June, 2025.`,
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
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1KZT0AJ9TycFOh4211nttVC216ohneN98",
      ),
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
Associate Professor in Alvaâ€™s Institute of Engineering Technology (2023 - Till Date)`,
        areasOfInterest: `Artificial Intelligence and Machine Learning & Deep Learning
Cloud Computing
Design and Analysis of Algorithm`,
        achievements: `Guided 15 BE level projects and 5 MTech. level projects.
Received VTU Guideship order.
Received District collector award for organizing blood camp with govt hospitals in 2015.
Received award from agriculture department for helping agriculture events in 2013.
Signed MoU with two companies in 2016 & 2017.`,
        professionalMembership: `Computer Science Teachers Association (CSTA) â€“ Membership ID: 41124305.
Society of Digital Information and Wireless Communication (MSDIWC) â€“ Membership ID: 182.
International Association of Engineering (IAENG) - Membership ID: 122384.
Universal Association of Computer and Electronics Engineers (UACEE) Member ID: AM1010002066.`,
        publications: `1. R.Senthilkumar (2014) â€œDetecting the active attacker using alert protocolâ€ IJARCSMS, Volume 2 issue 36.
2. R.Senthilkumar (2014) â€œDetection of selfish node using combined AODV and watchdogâ€ IJETT, March 2014 edition.
3. R.Senthilkumar â€œSurvey of accident severity Estimation using data mining Techniquesâ€ IJCSET, Vol. 5, No.10, Page No. 1041â€“1044, Oct 2014. ISSN: 2229-3345.
4. R.Senthilkumar â€œAutomatic accidental data classification and Severity estimation using machine learning Processâ€ IJAER, Vol. 10, No.1, Page No. 952-957 (2015). ISSN: 0973-4562.
5. R.Senthilkumar â€œUnicast Communication based on Context-aware Adaptive Routing in delay Tolerant Mobile Adhoc Networkâ€ JETIR, Volume 2, Issue 4, Page No. 898â€“901. ISSN: 2349-5162.
6. R.Senthilkumar â€œValidation Schemes for Session Passwords Using Text And Colorsâ€ IJLSM, Volume: 2 Issue: 3, Page No. 022â€“025. ISSN: 2349-7955.
7. R.Senthilkumar â€œHybrid approach for Image restorationâ€ IJNIET, Volume: 3, issue: 3 â€“ July 2015. ISSN: 2319-6319.
8. R.Senthilkumar â€œPrivacy Preservation with Data Leakage Detection & Monitoringâ€ International Journal of Science and Engineering Research (IJOSER), Volume 6, issue : 3 March 2018. ISSN(O) 3221-5687 (P) 3221-568X.
9. Alfred Daniel J, Chandru Vignesh C, Bala Anand Muthu, Senthil Kumar R, Sivaparthipan CB, Carlos Enrique Montenegro Marin. â€œFully Convolutional Neural Networks For LIDARâ€“Camera Fusion For Pedestrian Detection In Autonomous Vehicleâ€, Springer, Feb 2023, https://doi.org/10.1007/s11042-023-14417-x.
10. S.Vinoth Kumar, S.Vidhya, P.S. Ramesh, R.Senthilkumar, Geetha Ponnaian. â€œAugumented Road Safety In India Through Real Time Detection Of Road Hazardsâ€, Journal of Computational Analysis and Applications, Vol 33, No.2, 2024.
11. R.Senthilkumar, Dr.A.Bharathi â€œDiscriminative convolution neural network architecture for diagnosis of diabetic retinopathy through classification and progression prediction of lesions grading in color fundus images of retinaâ€.
12. G Manikandan, B Murugesa Kumar, A Bharathi, K Anandakumar, R Senthilkumar. â€œORPN Algorithm used to diagnosis and identify plant diseases based on image segmentation using deep learning techniquesâ€ ICCAMS 2023. DOI: 10.1109/ICCAMS60113.2023.10526168.
13. Dr.S.Girirajan, S.Vidhya, S. Tamilselvi, S.Durai, R. Senthilkumar, Dr. S. Vinoth Kumar. â€œCode Generation Empowered by Natural Language Processing and Machine Learning Algorithmsâ€, Advances in Nonlinear Variational Inequalities, Vol 28 No. 1s (2025).`,
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
R.Senthilkumar, Dr.A.Bharathi â€œGray-Level Co-Occurrence Matrix With Oriented Fast And Rotated Brief Algorithm For Diabetic Retinopathy Predictionâ€, Journal of Environmental Protection and Ecology, 23, No 7, 3089â€“3097 (2022).`,
        others: "NA",
      },
    },
    {
      name: "Dr.Deepika Kamath",
      designation: "Sr. Assistant Professor",
      qualification: "BE, M.Tech, (PH.D)",
      experience: "15",
      email: "deepika@aiet.org.in",
      phone: "NA",
      aoi: "Algorithms",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1GWzL8mn62ALT0YPjEe5yhbNZ63_MUuDa",
      ),
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

Saroja â€œA Study of Natural Language Processing Based Algorithms for Text Summarizationâ€ Devi Niranjan N Chiplunkar
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

      Saroja â€œA Study of Natural Language Processing Based Algorithms for Text Summarizationâ€ Devi Niranjan N Chiplunkar
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
        publications: `1. Published a Paper â€œVBS: A Technique to Improve Lifetime of Wireless Sensor Networksâ€ at International Conference on Computer Communication and Network (I3CN), held during May 2015 at Coorg Institute of Technology, South Kodagu, Karnataka
2. Published a Paper â€œVBS: A Technique to Improve Lifetime of Wireless Sensor Networksâ€ at International Journal of Innovative Research in Electrical, Electronics, Instrumentation and Control Engineering, Volume 3, Special Issue 1, April 2015.
3. Published a paper â€œAnalyzation of Quality of Coconutâ€ at International Research Journal of Engineering and Technology (IRJET), Volume 06, Issue 05, May 2019.
4. Published a paper â€œA Review on Smart Home Automation Systemâ€ in International Research Journal Of Modernization in Engineering Technology and Science (IRJMETS) during May 2021, ISSN:2582-5208
5. Published a paper â€œSmart Farming Using Sensors for Agriculture Task Automation and Fencing Systemâ€, International Journal Of Creative Research Thoughts (IJCRT) during July 2021, ISSN:2320-2882
6. Published a paper â€œFacial Expression Recognition Based on Convolutional Neural Networkâ€ in International Journal Of Creative Research Thoughts (IJCRT) during July 2021, ISSN:2320-2882
7. Published a paper â€œA Review paper on Non-Fungible Tokens (NFT)â€ in International Journal of Advanced Research in Science, Communication and Technology, Volume2, Issue 2, March 2022.
8. Published a paper â€œA study on Open Source Softwareâ€ in International Journal of Advanced Research in Science, Communication and Technology, Volume2, Issue 2, March 2022.
9. A paper titled â€œAI Powered Multimodal Content Moderation for Online Safety In Social Media Platformsâ€ is published in 6th International Conference on Inventive Research in Computing Applications (ICIRCA-2025)
10. A paper titled â€œThe Role of Edge Computing in Enhancing 5G Networksâ€ is published at the 6th International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV 2025) on 17th to 19th June 2025.`,
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
        researchPublications: `1. Published a Paper â€œVBS: A Technique to Improve Lifetime of Wireless Sensor Networksâ€ at International Conference on Computer Communication and Network (I3CN), held during May 2015 at Coorg Institute of Technology, South Kodagu, Karnataka
      2. Published a Paper â€œVBS: A Technique to Improve Lifetime of Wireless Sensor Networksâ€ at International Journal of Innovative Research in Electrical, Electronics, Instrumentation and Control Engineering, Volume 3, Special Issue 1, April 2015.
      3. Published a paper â€œAnalyzation of Quality of Coconutâ€ at International Research Journal of Engineering and Technology (IRJET), Volume 06, Issue 05, May 2019.
      4. Published a paper â€œA Review on Smart Home Automation Systemâ€ in International Research Journal Of Modernization in Engineering Technology and Science (IRJMETS) during May 2021, ISSN:2582-5208
      5. Published a paper â€œSmart Farming Using Sensors for Agriculture Task Automation and Fencing Systemâ€, International Journal Of Creative Research Thoughts (IJCRT) during July 2021, ISSN:2320-2882
      6. Published a paper â€œFacial Expression Recognition Based on Convolutional Neural Networkâ€ in International Journal Of Creative Research Thoughts (IJCRT) during July 2021, ISSN:2320-2882
      7. Published a paper â€œA Review paper on Non-Fungible Tokens (NFT)â€ in International Journal of Advanced Research in Science, Communication and Technology, Volume2, Issue 2, March 2022.
      8. Published a paper â€œA study on Open Source Softwareâ€ in International Journal of Advanced Research in Science, Communication and Technology, Volume2, Issue 2, March 2022.
      9. A paper titled â€œAI Powered Multimodal Content Moderation for Online Safety In Social Media Platformsâ€ is published in 6th International Conference on Inventive Research in Computing Applications (ICIRCA-2025)
      10. A paper titled â€œThe Role of Edge Computing in Enhancing 5G Networksâ€ is published at the 6th International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV 2025) on 17th to 19th June 2025.`,
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
        publications: `Book Author: â€œAI REVOLUTION IN BIOMEDICINE AND BIOTECHNOLOGY TRANSFORMATIVE TRENDS AND EMERGING APPLICATIONSâ€

PATENT PUBLICATION with Application No. 202541123881 A
Title of the invention: â€œAN AUTONOMOUS LIGHT DETECTION AND RANGING (LIDAR) AND VISION-BASED ROVER SYSTEM AND METHOD THEREOFâ€`,
        projectsGuided: "NA",
        subjectsTeaching: `Big Data Analytics
Cyber Security
Cryptography and Network Security
Machine learning
IOT
Python Programming
Artificial Intelligence`,
        researchPublications: `Published paper on â€œIntelligent Network Traffic Control with AI and Machine Learningâ€
â€œDropBridge-A-WebRTC-Based-P2P-File-Transfer-Toolâ€
â€œPrototype model of multi â€” Load AVG for material supply in manufacturing systemâ€`,
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
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1PD56uOgAFmYAoTpm_0LJtH4YpZOrxJL6",
      ),
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
Participated & completed AICTE Training And Learning (ATAL) Academy Faculty Development Program on Digital Forensics in Cyber Security at ALVAâ€™s INSTITUTE OF ENGINEERING AND TECHNOLOGY from 05/01/2026 to 10/01/2026.`,
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
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1TC1szy6hfGvme61EnEF1aRTKwAVpr1VG",
      ),
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
Presented a research paper titled â€œPrivacy and Security Challenges to Generative AIâ€ at the Two Days International Conference on Recent Innovations in Computer Science (ICRICS-2025).
Presented a research paper titled â€œBridging the Communication Gap: An Improved Real-Time Indian Sign Language Translation with Deep Learningâ€ at IEEE AIDE 2025, NMAM Institute of Technology, Nitte (06â€“07 Feb 2025).`,
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
      qualification: `Bachelor of Computer Applications, Alvaâ€™s College, Moodubidire-2019
Master of Computer Applications, Shree Devi Institute of Technology, Kenjar, Mangalore (VTU)-2025`,
      experience: "2",
      email: "yogithak@aiet.org.in",
      phone: "NA",
      aoi: "Data Structures, Data communication & Computer Network, Database Management Systems",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      joiningDate: "14-07-2025",
      details: {
        qualifications: `Bachelor of Computer Applications, Alvaâ€™s College, Moodubidire-2019
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
        publications: `â€œAn Overview of Deep Learning for Detecting Brain Tumorsâ€ â€“ Published at ICCET 2024
â€œFinance Tracker using Blockchain Technologiesâ€ â€“ Accepted and presented at ICCCNet 2025`,
        projectsGuided: "NA",
        subjectsTeaching: "Python Programming, Artificial Intelligence (AI)",
        researchPublications: `â€œAn Overview of Deep Learning for Detecting Brain Tumorsâ€ â€“ Conference publication on AI/ML applications in medical imaging.
â€œFinance Tracker using Blockchain Technologiesâ€ â€“ Research accepted & presented at ICCCNet 2025.`,
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
      body: "Key thrust areas of the CSE department:",
      highlights: [
        "Cyber Security & Internet of Things",
        "UI/UX Design with iOS Application Development",
        "Artificial Intelligence & Machine Learning",
        "Data Science & Big Data Analytics",
        "Digital Design & Communication and Computer Architecture",
        "Data Structures & Algorithms",
        "Databases & Information Retrieval",
        "Software Engineering & Cloud Computing",
        "Human-Computer Interaction (HCI) and Image Processing",
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
PO10: Project Management and Finance: Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to oneâ€™s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.
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
      body: "Select a year below to view the detailed publication records for that academic year.",
      yearSections: [
        {
          year: "2023-24",
          body: `<p><strong>Faculty Publications - 2023-24</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr><th>Type of Publications / A.Y</th><th>2023-24</th></tr>
  </thead>
  <tbody>
    <tr><td>Scopus Indexed</td><td>11</td></tr>
    <tr><td>Conferences</td><td>05</td></tr>
    <tr><td>Book Chapters</td><td>01</td></tr>
    <tr><td>Books</td><td>-</td></tr>
  </tbody>
</table>

<p><strong>Faculty & Student Publications (Non-Scopus) - 2023-24</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr><th>Item</th><th>2023-24</th></tr>
  </thead>
  <tbody>
    <tr><td>Journals</td><td>80</td></tr>
    <tr><td>Conferences</td><td>169</td></tr>
  </tbody>
</table>

<p><strong>Patents Published (Yet to be granted)</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl. No.</th>
      <th>Patent Application No.</th>
      <th>Inventor/s Name</th>
      <th>Title of the Patent</th>
      <th>Patent Filed Date</th>
      <th>Patent Published / Granted Date</th>
      <th>Publication / Granted Number</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>202141005226</td><td>Dr. Manjunath Kotari</td><td>TOP SLIDING DRIVING HELMET FOR BETTER AIR VENTILATION WITH IOT FEATURES</td><td>08-02-2021</td><td>19-02-2021</td><td>8/2021</td></tr>
    <tr><td>2</td><td>202141020170</td><td>Dr. Manjunath Kotari</td><td>SYSTEM FOR HARDWARE ACCELERATION FOR EMBEDDED FLASH MEMORY BASED ON MACHINE LEARNING</td><td>03-05-2021</td><td>07-05-2021</td><td>19/2021</td></tr>
    <tr><td>3</td><td>202141039668</td><td>Deeksha M</td><td>NLP and Artificial Intelligence Based smart detection of Inflammated bowel disease</td><td>01-09-2021</td><td>10-09-2021</td><td>37/2021</td></tr>
    <tr><td>4</td><td>202241029669</td><td>Sheik Jamil Ahemed</td><td>Machine Learning and IOT Based approach monitoring and prediction Air quality pollution</td><td>24-05-2022</td><td>03-06-2022</td><td>22/2022</td></tr>
    <tr><td>5</td><td>202341040052</td><td>Dr. ARUN ANOOP M</td><td>SYSTEM AND DEVICE FOR DETERMINING AND MONITORING AN EMOTIONAL STATE OF A USER</td><td>12-06-2023</td><td>18-08-2023</td><td>33/2023</td></tr>
    <tr><td>6</td><td>202341043030</td><td>Dr. G. SRINIVASAN</td><td>FOREST FIRE MONITORING & ALERT SYSTEM EMPLOYING WIRELESS SENSOR NETWORKS</td><td>27-06-2023</td><td>15-09-2023</td><td>37/2023</td></tr>
    <tr><td>7</td><td>202041056170</td><td>Mr. VIVEK SHARMA S</td><td>Populated place monitoring and Medical alert using Wireless Service Network and analyse and respond using Cloud Computing</td><td>24-12-2020</td><td>01-01-2021</td><td>401/2021</td></tr>
    <tr><td>8</td><td>202441075620</td><td>Dr. Manjunath Kotari</td><td>INTEGRATED AUTISM DIAGNOSIS SYSTEM AND METHOD THEREOF</td><td>17-10-2024</td><td>18-10-2024</td><td>42/2024</td></tr>
  </tbody>
</table>

<p><strong>Table 5.7.1D: Details of Candidates registered in Research Center</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl. No.</th>
      <th>Name of the student</th>
      <th>Date of Registration</th>
      <th>Current Status</th>
      <th>Guide</th>
      <th>Topic of research</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Ms. Sreelatha R (4AL14PEM01)</td><td>2018</td><td>Ph.D Awarded</td><td>Dr. Roopalaksmi R</td><td>WSN-based Intelligent Transformation System for Traffic monitoring and management in Urban environments</td></tr>
    <tr><td>2</td><td>Sathyaprakash B P</td><td>2020</td><td>Ph.D Awarded</td><td>Dr. Manjunath Kotari</td><td>Dynamic Patal Based Ant Colony Optimization (ACO) Routing for Mobile Ad-hoc Networks (MANETs)</td></tr>
    <tr><td>3</td><td>Jayanthkumar Rathod A</td><td>2020</td><td>Ph.D Awarded</td><td>Dr. Manjunath Kotari</td><td>A Novel Freamework for Secure Message Transmission in Mobile Adhoc Netwrok using Crypto Message Fragmentation</td></tr>
    <tr><td>4</td><td>Mrs. Veena M</td><td>2019</td><td>Open seminar -I Completed</td><td>Dr. Manjunath Kotari</td><td>Data Analytics and Machine Learning approaches for Educational Data work Mining: A case study of Engineering Education in Karnataka.</td></tr>
    <tr><td>5</td><td>Rizawan N. Shaikh</td><td>2023</td><td>Registered</td><td>Dr. Chandra Naik</td><td>Novel Optimization Models for Epilepsy Seizure Identification and Prediction using Generative AI</td></tr>
    <tr><td>6</td><td>Harish Kunder</td><td>2021</td><td>Open seminar -I Completed</td><td>Dr. Manjunath Kotari</td><td>An efficient method for handling non-convex optimization problems in Machine Learning</td></tr>
    <tr><td>7</td><td>Nagesh U B</td><td>2021</td><td>Course Work Completed</td><td>Dr. Manjunath Kotari</td><td>Implementation and Performance Analysis of IoT Based Secure Autonomous Vehicles Using Blockchain Technology</td></tr>
    <tr><td>8</td><td>Kiran Raj k M</td><td>2023</td><td>Registered</td><td>Dr. Ramesh G</td><td>Design and optimization of lightweight encryption and decryption algorithms for enhanced IOT security</td></tr>
  </tbody>
</table>

<p><strong>Faculty Registered for Ph.D. in Other Research Centre / Universities</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl. No.</th>
      <th>Name of the Research Scholar</th>
      <th>Registration Date</th>
      <th>Name of the Other University / Research Centre</th>
      <th>Completed comprehensive Viva</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Mr. Vasudev S Shahapur</td><td>2016</td><td>KVGCE, Sullia</td><td>Completed Course Work</td></tr>
    <tr><td>2</td><td>Mrs. Deeksha M</td><td>2018</td><td>NITK, Surathkal</td><td>Completed Open Seminar-I</td></tr>
    <tr><td>3</td><td>Mr. Partha Sarathi Pati</td><td>2015</td><td>IIT, Guwahati</td><td>Annual Progress-3 Completed</td></tr>
    <tr><td>4</td><td>Mr. Giridhar Gowda</td><td>2023</td><td>SSIT, Tumakur</td><td>Course Work Completed</td></tr>
    <tr><td>5</td><td>Mrs. Deepika Kamath</td><td>2023</td><td>SDM, Ujire</td><td>Registered</td></tr>
  </tbody>
</table>

<p><strong>Sponsored Research</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl</th>
      <th>Agency</th>
      <th>Amount Granted</th>
      <th>PO</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>NAIN, KITS, Bengaluru</td><td>80,000-00</td><td>Dr. Madhusudhan S</td></tr>
    <tr><td>2</td><td>IEEE STEM Grant</td><td>$445</td><td>Dr. Chandra Naik</td></tr>
  </tbody>
</table>`,
        },
        {
          year: "2022-23",
          body: `<p><strong>Faculty Publications - 2022-23</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead><tr><th>Type of Publications / A.Y</th><th>2022-23</th></tr></thead>
  <tbody>
    <tr><td>Scopus Indexed</td><td>04</td></tr>
    <tr><td>Conferences</td><td>24</td></tr>
    <tr><td>Book Chapters</td><td>06</td></tr>
    <tr><td>Books</td><td>03</td></tr>
  </tbody>
</table>

<p><strong>Faculty & Student Publications (Non-Scopus) - 2022-23</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead><tr><th>Item</th><th>2022-23</th></tr></thead>
  <tbody>
    <tr><td>Journals</td><td>07</td></tr>
    <tr><td>Conferences</td><td>110</td></tr>
  </tbody>
</table>

<p><strong>Patents Published (Yet to be granted)</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl. No.</th><th>Patent Application No.</th><th>Inventor/s Name</th><th>Title of the Patent</th><th>Patent Filed Date</th><th>Patent Published / Granted Date</th><th>Publication / Granted Number</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>202141005226</td><td>Dr. Manjunath Kotari</td><td>TOP SLIDING DRIVING HELMET FOR BETTER AIR VENTILATION WITH IOT FEATURES</td><td>08-02-2021</td><td>19-02-2021</td><td>8/2021</td></tr>
    <tr><td>2</td><td>202141020170</td><td>Dr. Manjunath Kotari</td><td>SYSTEM FOR HARDWARE ACCELERATION FOR EMBEDDED FLASH MEMORY BASED ON MACHINE LEARNING</td><td>03-05-2021</td><td>07-05-2021</td><td>19/2021</td></tr>
    <tr><td>3</td><td>202141039668</td><td>Deeksha M</td><td>NLP and Artificial Intelligence Based smart detection of Inflammated bowel disease</td><td>01-09-2021</td><td>10-09-2021</td><td>37/2021</td></tr>
    <tr><td>4</td><td>202241029669</td><td>Sheik Jamil Ahemed</td><td>Machine Learning and IOT Based approach monitoring and prediction Air quality pollution</td><td>24-05-2022</td><td>03-06-2022</td><td>22/2022</td></tr>
    <tr><td>5</td><td>202341040052</td><td>Dr. ARUN ANOOP M</td><td>SYSTEM AND DEVICE FOR DETERMINING AND MONITORING AN EMOTIONAL STATE OF A USER</td><td>12-06-2023</td><td>18-08-2023</td><td>33/2023</td></tr>
    <tr><td>6</td><td>202341043030</td><td>Dr. G. SRINIVASAN</td><td>FOREST FIRE MONITORING & ALERT SYSTEM EMPLOYING WIRELESS SENSOR NETWORKS</td><td>27-06-2023</td><td>15-09-2023</td><td>37/2023</td></tr>
    <tr><td>7</td><td>202041056170</td><td>Mr. VIVEK SHARMA S</td><td>Populated place monitoring and Medical alert using Wireless Service Network and analyse and respond using Cloud Computing</td><td>24-12-2020</td><td>01-01-2021</td><td>401/2021</td></tr>
    <tr><td>8</td><td>202441075620</td><td>Dr. Manjunath Kotari</td><td>INTEGRATED AUTISM DIAGNOSIS SYSTEM AND METHOD THEREOF</td><td>17-10-2024</td><td>18-10-2024</td><td>42/2024</td></tr>
  </tbody>
</table>`,
        },
        {
          year: "2021-22",
          body: `<p><strong>Faculty Publications - 2021-22</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead><tr><th>Type of Publications / A.Y</th><th>2021-22</th></tr></thead>
  <tbody>
    <tr><td>Scopus Indexed</td><td>07</td></tr>
    <tr><td>Conferences</td><td>06</td></tr>
    <tr><td>Book Chapters</td><td>01</td></tr>
    <tr><td>Books</td><td>02</td></tr>
  </tbody>
</table>

<p><strong>Faculty & Student Publications (Non-Scopus) - 2021-22</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead><tr><th>Item</th><th>2021-22</th></tr></thead>
  <tbody>
    <tr><td>Journals</td><td>05</td></tr>
    <tr><td>Conferences</td><td>123</td></tr>
  </tbody>
</table>`,
        },
      ],
      highlights: [
        "Full publication, patent, research scholar, and sponsored research tables are displayed.",
        "No summary rows are omitted from the uploaded data.",
        "The tab now follows a detailed table-based layout.",
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
      body: "Select a year below to view the society and event records for that academic year.",
      yearSections: [
        {
          year: "2023-24",
          body: `<p><strong>Professional Societies / Chapters</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr><th>Sl.</th><th>Professional Societies / Chapters</th><th>Year</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Institute of Electrical and Electronics Engineers (IEEE)</td><td>2023 to present</td></tr>
    <tr><td>2</td><td>Indian Society for Technical Education (ISTE)</td><td>2020-2023</td></tr>
    <tr><td>3</td><td>Computer Society of India (CSI)</td><td>2017-2020</td></tr>
  </tbody>
</table>

<p><strong>Events Details of Professional Societies / Chapters - 2023-24</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl.</th><th>Topic</th><th>Dates</th><th>Resource Person</th><th>Organization of resource person</th><th>Level</th><th>Participant</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Readiness for Future Technology</td><td>05-09-2023</td><td>Dr. P Nagabhushan</td><td>Vignan's Foundation for Science, Technology and Research, Guntur, Andra Pradesh</td><td>Institute</td><td>Student/Faculty</td></tr>
    <tr><td>2</td><td>Technical Workshop on 3D Modelling and Game Development</td><td>03-10-2023</td><td>Mr. Anil Rokhade</td><td>Freelancer, Ranebennur</td><td>Institute</td><td>Student</td></tr>
    <tr><td>3</td><td>Technical Workshop on Cyber Security and Ethical Hacking</td><td>16/10/2023 to 17/10/2023</td><td>Mr. Samarth Bhaskar Bat</td><td>Reverse Engineering Infosec, Bangalore</td><td>Institute</td><td>Student</td></tr>
    <tr><td>4</td><td>Technical Workshop on Cyber Security</td><td>27/11/2023</td><td>Mr. Karthik Rao Bappanad</td><td>CySecK, Bangalore</td><td>Institute</td><td>Student/Faculty</td></tr>
    <tr><td>5</td><td>Workshop on Web Scraping</td><td>02-12-2023</td><td>Dr. Pruthviraj N / Prof. Raghudathesh G P</td><td>MAHE, Manipal</td><td>Institute</td><td>Student</td></tr>
    <tr><td>6</td><td>Cyber Security Finishing School</td><td>19/02/2024 to 22/03/2024</td><td>Mr. Baskaran / Mr. Kannadasan</td><td>Trishaka Foundation, Chennai</td><td>Institute</td><td>Student</td></tr>
    <tr><td>7</td><td>Industrial Visit to Centre of excellence in Cyber Security</td><td>16/07/2024</td><td>Dr. Balachandra</td><td>MAHE, Manipal</td><td>Institute</td><td>Student</td></tr>
    <tr><td>8</td><td>Cyber Security Ethical Hacking</td><td>27/07/2024</td><td>Mr. Ravi B</td><td>NMAMIT, Nitte</td><td>Institute</td><td>Student</td></tr>
    <tr><td>9</td><td>Cyber Security</td><td>15/04/2024 to 20/04/2024</td><td>Mr. Anveeksh Rao</td><td>Cyber Tech Associate, Udupi</td><td>Institute</td><td>Student/Faculty</td></tr>
    <tr><td>10</td><td>Innovative Tools and Methods for Satellite Image Processing</td><td>30/10/2023 to 04/11/2023</td><td>Dr. Vinay S / Mr. Vedanth / Mr. Satyam / Mr. Neerav</td><td>AIET</td><td>Institute</td><td>Student</td></tr>
    <tr><td>11</td><td>Workshop on Blockchain Technology</td><td>20/05/2024 to 21/05/2024</td><td>Dr. Shasidhar R</td><td>Samsung Research Institute, Bangalore</td><td>Institute</td><td>Student</td></tr>
    <tr><td>12</td><td>IEEE Student Branch Chapter</td><td>11/07/2023 to 12/07/2023</td><td>Dr. Roshan Fernandes</td><td>NMAM, Nitte</td><td>Institute</td><td>Student</td></tr>
  </tbody>
</table>

<p><strong>Events Details of Department 2023-24</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl.</th><th>Topic</th><th>Date</th><th>Resource person</th><th>Organization of the resource person</th><th>Level</th><th>Participant</th>
    </tr>
  </thead>
  `,
        },
        {
          year: "2022-23",
          body: `<p><strong>Professional Societies / Chapters</strong></p>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead><tr><th>Sl.</th><th>Professional Societies / Chapters</th><th>Year</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Institute of Electrical and Electronics Engineers (IEEE)</td><td>2023 to present</td></tr>
      <tr><td>2</td><td>Indian Society for Technical Education (ISTE)</td><td>2020-2023</td></tr>
      <tr><td>3</td><td>Computer Society of India (CSI)</td><td>2017-2020</td></tr>
    </tbody>
  </table>

  <p><strong>Events Details of Professional Societies / Chapters - 2022-23</strong></p>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Sl. No.</th><th>Topic</th><th>Duration and Date</th><th>Resource person</th><th>Organization of the resource person</th><th>Level</th><th>Participant</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Placement Opportunity and Preparation</td><td>01-10-2022</td><td>Mr. Mohith Puthuraya</td><td>Amazon Services, USA.</td><td>Institute</td><td>Student</td></tr>
      <tr><td>2</td><td>Java Full Stack Development</td><td>21/08/2022 to 03/10/2022</td><td>Mr. Vishal Vanaki / Mr. V Karthik / Mr. Yogeesh Shetty / Mr. Mohammed Ansari / Mr. Shivu D Shetty</td><td>Q-Spiders, Bangalore</td><td>Institute</td><td>Student</td></tr>
      <tr><td>3</td><td>Python Full Stack Development</td><td>07/10/2022 to 22/10/2022</td><td>Mr. Rakesh / Mr. Keshva Reddy</td><td>Q-Spiders, Bangalore</td><td>Institute</td><td>Student</td></tr>
      <tr><td>4</td><td>Apple iOS App Development Certification</td><td>28/01/2023 to 10/06/2023</td><td>Mr. Mahesh Naik</td><td>ViaCom18, Bangalore</td><td>Institute</td><td>Student</td></tr>
      <tr><td>5</td><td>Basics of API with Postman</td><td>19/11/2022</td><td>Dr. Mohit P Tahilaini</td><td>NITK Surathkal</td><td>Institute</td><td>Student</td></tr>
      <tr><td>6</td><td>Applications of Artificial Intelligence and Machine Learning</td><td>02-12-2022</td><td>Mrs. Swagath</td><td>IBM, Bangalore</td><td>Institute</td><td>Student</td></tr>
      <tr><td>7</td><td>Cyber Security</td><td>21/01/2023</td><td>Mr. Kaushik G. N / Mr. Vinith Shetty</td><td>Tie to Every, Bangalore</td><td>Institute</td><td>Student</td></tr>
    </tbody>
  </table>`,
        },
        {
          year: "2021-22",
          body: `<p><strong>Professional Societies / Chapters</strong></p>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead><tr><th>Sl.</th><th>Professional Societies / Chapters</th><th>Year</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Institute of Electrical and Electronics Engineers (IEEE)</td><td>2023 to present</td></tr>
      <tr><td>2</td><td>Indian Society for Technical Education (ISTE)</td><td>2020-2023</td></tr>
      <tr><td>3</td><td>Computer Society of India (CSI)</td><td>2017-2020</td></tr>
    </tbody>
  </table>

  <p><strong>Events Details of Professional Societies / Chapters - 2021-22</strong></p>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Sl. No.</th><th>Topic</th><th>Date</th><th>Resource person</th><th>Organization of Resource person</th><th>Level</th><th>Participants</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Algorithms: Approaches and Efficiency</td><td>09/07/2021</td><td>Dr. Prasanna Kumar H R</td><td>Professor & HOD, PESITM, Shivamogga</td><td>Institute</td><td>Student</td></tr>
      <tr><td>2</td><td>Aptitude Training</td><td>24/07/2021 to 28/07/2021</td><td>Mr. Rajesh / Mr. Ganesh Keerthi / Mr. Shiva Kumar</td><td>10 Seconds, Bengaluru</td><td>Institute</td><td>Student</td></tr>
      <tr><td>3</td><td>In-house Training on Data Structures and Applications</td><td>28/07/2021 to 31/07/2021</td><td>Mr. Venkatesh / Mrs. Merlyn Melita</td><td>AIET, Moodbidri</td><td>Institute Level</td><td>Student</td></tr>
    </tbody>
  </table>`,
        },
      ],
      highlights: [
        "Professional society details are shown in year-wise table format.",
        "All uploaded events are listed without shortening.",
        "2021-22, 2022-23, and 2023-24 records are displayed together.",
      ],
    },
    achievements: {
      title: "ACHIEVEMENTS",
      body: "Select a year below to view the achievement and participation records for that academic year.",
      yearSections: [
        {
          year: "2024-25",
          body: `<p><strong>International / National / State level Participations - CAY (2024-25)</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl. No.</th><th>Students Name</th><th>Place</th><th>Event Name</th><th>Level</th><th>Date</th><th>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>K G Shreya</td><td>Adichunchanagiri Institute of Technology, Chikkamagaluru</td><td>Algnite</td><td>National level</td><td>November 8th to 9th, 2024</td><td>Certificate of participation</td></tr>
    <tr><td>2</td><td>Sathish S</td><td>Adichunchanagiri Institute of Technology, Chikkamagaluru</td><td>Algnite</td><td>National level</td><td>November 8th to 9th, 2024</td><td>Certificate of participation</td></tr>
    <tr><td>3</td><td>Gurukiran P</td><td>Adichunchanagiri Institute of Technology, Chikkamagaluru</td><td>Algnite</td><td>National level</td><td>November 8th to 9th, 2024</td><td>Certificate of participation</td></tr>
    <tr><td>4</td><td>Archana Hublikar</td><td>Adichunchanagiri Institute of Technology, Chikkamagaluru</td><td>Algnite</td><td>National level</td><td>November 8th to 9th, 2024</td><td>Certificate of participation</td></tr>
    <tr><td>5</td><td>Ankitha Anand Joshi</td><td>Adichunchanagiri Institute of Technology, Chikkamagaluru</td><td>Algnite</td><td>National level</td><td>November 8th to 9th, 2024</td><td>Certificate of participation</td></tr>
    <tr><td>6</td><td>Harshika</td><td>Adichunchanagiri Institute of Technology, Chikkamagaluru</td><td>Algnite</td><td>National level</td><td>November 8th to 9th, 2024</td><td>Certificate of participation</td></tr>
    <tr><td>7</td><td>Bhagyashree S Naik</td><td>Adichunchanagiri Institute of Technology, Chikkamagaluru</td><td>Algnite</td><td>National level</td><td>November 8th to 9th, 2024</td><td>Certificate of participation</td></tr>
    <tr><td>8</td><td>Srinivasa L V</td><td>SAI Shooting Range, Sports Authority Of India Complex, Bangalore University Campus, Mysore Road, Bangalore -560056</td><td>12TH KARNATAKA STATE SPORTS SHOOTING COMMPETITION & CHAMPIONSHIP 2024- OPEN SIGHT</td><td>State Level</td><td>August 02nd 2024</td><td>(Competitor No. 205) MANGALORE RIFLE CLUB, participation certificate</td></tr>
    <tr><td>9</td><td>Samay Deepak Shetty</td><td>16th IEEE International Conference on CICN-2024 at Oriental University, Indore, Madhya Pradesh, India</td><td>Fortifying IoT Networks: A Blockchain-Based Communication Security Paradigm</td><td>International IEEE Conference CICN 2024</td><td>December 22-23rd 2024</td><td>Participation certificate</td></tr>
  </tbody>
</table>`,
        },
        {
          year: "2023-24",
          body: `<p><strong>Student Projects by Karnataka State Council for Science & Technology (KSCST)</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Series</th><th>Proposal Reference No.</th><th>Project Title</th><th>Course</th><th>Branch</th><th>Guide</th><th>Student(s)</th><th>Amount Sanctioned</th><th>Selected For</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>47th SPP (2023-24)</td><td>47S_BE_0849</td><td>CHARGING STATION FOR EVEHICLE USING SOLAR WITH IOT</td><td>B.E.</td><td>COMPUTER SCIENCE AND ENGINEERING</td><td>Mr. PRASHANTH KUMAR</td><td>Ms. DEEKSHITHA S. R., Ms. CHANDANA M., Ms. DISHA SHETTY, Ms. HARSHITHA N. P.</td><td>5,000.00</td><td>-</td></tr>
    <tr><td>47th SPP (2023-24)</td><td>47S_BE_0905</td><td>DRONE BASED DISEASE DETECTION IN CROPS</td><td>B.E.</td><td>COMPUTER SCIENCE AND ENGINEERING</td><td>Dr. CHANDRA NAIK</td><td>Mr. SHEBIN THOMAS, Mr. SHARATH S. KANCHAN, Mr. SHARAT R. NAIK</td><td>5,000.00</td><td>-</td></tr>
    <tr><td>47th SPP (2023-24)</td><td>47S_BE_0952</td><td>AN INDEPENDENT AUTOMATIC SYSTEM TO DETECT THE PRESENCE OF VIOLENCE DETECTION USING DEEP LEARNING TECHNIQUE</td><td>B.E.</td><td>COMPUTER SCIENCE AND ENGINEERING</td><td>Mr. GIRIDHAR GOWDA / Mrs. VIDYA</td><td>Ms. SUSHMITHA E, Ms. SINCHANA R. NAIK, Ms. SPANDHANA, Ms. VEENA G. T</td><td>5,000.00</td><td>-</td></tr>
    <tr><td>47th SPP (2023-24)</td><td>47S_BE_1293</td><td>ANOMALY DETECTION IN REAL TIME SURVEILLANCE SYSTEM</td><td>B.E</td><td>COMPUTER SCIENCE AND ENGINEERING</td><td>Prof. MAHESH KINI M. / Mrs. VIDYA</td><td>Mr. S. VISHWESH NAYAK, Ms. RAKSHA, Ms. RAMYASHREE, Mr. RANJITH R. GANIGA</td><td>4,500.00</td><td>-</td></tr>
    <tr><td>47th SPP (2023-24)</td><td>47S_BE_3554</td><td>MACHINE LEARNING AND IOT BASED WASTE MANAGEMENT MODEL</td><td>B.E</td><td>COMPUTER SCIENCE AND ENGINEERING</td><td>Dr. G. SRINIVASAN</td><td>Mr. PRUTHVIRAJ K. L., Mr. RAHUL, Mr. PAVAN KUMAR V., Mr. RACHITH M. R</td><td>4,500.00</td><td>-</td></tr>
  </tbody>
</table>

<p><strong>International / National / State level Participations - CAYm1 (2023-24)</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl. No.</th><th>Students Name</th><th>Place</th><th>Event Name</th><th>Level</th><th>Date</th><th>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>10</td><td>Ankitha Joshi / Reshna Nandipi / Aishwarya G D / Anamika Tiwari</td><td>CII Young Indians : IDS3.0 (Ideate Do Share)- Technical Competitions</td><td>AARA HEALING HANDS</td><td>National</td><td>18th November 2023</td><td>Finalists</td></tr>
    <tr><td>11</td><td>Neerav Patel</td><td>UI path Student developer Championship</td><td>UiPath Student Developer Championship</td><td>National</td><td>Oct 20, 2023</td><td>Appreciation Letter</td></tr>
    <tr><td>12</td><td>S Mohan Raj / Prathiksha Jain</td><td>Plenary Hall, Bharat Mandapam, New Delhi</td><td>STARTUP Maha Kumbh Bharat Innovates</td><td>National</td><td>March 20th 2024</td><td>Participated</td></tr>
    <tr><td>13</td><td>Ganesh B M</td><td>IBM Online</td><td>Getting Started with Enterprise Data Science</td><td>National</td><td>Feb 15th 2024</td><td>Certification</td></tr>
    <tr><td>14</td><td>Ganesh B M</td><td>IBM Online</td><td>Journey to Cloud: Envisioning Your Solution</td><td>National</td><td>Feb 15th 2024</td><td>Certification</td></tr>
    <tr><td>15</td><td>Mandira Rajiv</td><td>Combined Annual Training Camp 2023 -24</td><td>18 KAR BN NCC, MANGALORE</td><td>National</td><td>July 1st to 10th 2023</td><td>Certificate of participation</td></tr>
    <tr><td>16</td><td>Veeresh Akki</td><td>Combined Annual Training Camp 2023 -24</td><td>18 KAR BN NCC, MANGALORE</td><td>National</td><td>July 1st to 10th 2023</td><td>Certificate of participation</td></tr>
    <tr><td>17</td><td>Soumya</td><td>Combined Annual Training Camp 2023 -24</td><td>18 KAR BN NCC, MANGALORE</td><td>National</td><td>July 1st to 10th 2023</td><td>Certificate of participation</td></tr>
    <tr><td>18</td><td>Srinivas L V</td><td>Combined Annual Training Camp 2023 -24</td><td>18 KAR BN NCC, MANGALORE</td><td>National</td><td>July 1st to 10th 2023</td><td>Certificate of participation</td></tr>
    <tr><td>19</td><td>CUO Rahul</td><td>Air Force attachment camp, Bidar</td><td>Air Force Training</td><td>National</td><td>June 19th to 30th, 2023</td><td>Certificate of participation</td></tr>
    <tr><td>20</td><td>Felomina Jancy</td><td>22nd Annual Convocation of VTU, Belagavi</td><td>Secured B.E Honours in CSE</td><td>University Level</td><td>24th Feb 2023</td><td>Certificate of participation</td></tr>
    <tr><td>21</td><td>Sridevi</td><td>GATE 2022</td><td>Graduate Aptitude Test in Engineering Qualified</td><td>All India level</td><td>2022</td><td>Score card</td></tr>
    <tr><td>22</td><td>Adith P Kotian</td><td>State Level Dasara Sports Event 2023</td><td>Sports Event</td><td>State Level Dasara Sports Event</td><td>October 11th to 14th, 2023</td><td>Certificate of participation</td></tr>
    <tr><td>23</td><td>Pavan H L</td><td>Department of Humanities, Alva's College, Moodubidire</td><td>Written Quiz Competition</td><td>State Level</td><td>24th November 2023</td><td>Certificate of participation</td></tr>
    <tr><td>24</td><td>Dileep P R / Sagar K G / Dhanaraj R B / Sujan P S / Swathi M V / Rakshith S / Adith P Kotian</td><td>Represented VTU in all India Interuniversity</td><td>Sports Achievers</td><td>University Level</td><td>VTU in all India Interuniversity</td><td>Certificate of participation</td></tr>
    <tr><td>25</td><td>Adith P Kotian</td><td>Dakshina Kannada District Level Dasara Sports Event 2023-24</td><td>Sports Event</td><td>District Level Dasara Sports Event</td><td>September 30th to October 1st, 2023</td><td>Certificate of participation</td></tr>
    <tr><td>26</td><td>Adith P Kotian</td><td>Mysore Level Dasara Sports Meet 2023 -24</td><td>Sports Meet</td><td>State Level Dasara Sports Event</td><td>October 2nd to 04th, 2023</td><td>Certificate of participation</td></tr>
    <tr><td>27</td><td>Shanthaveer Pavan / Gayatri / Madhu / Nishitha / Pooja K R / Prajwal / Raghavendra</td><td>Department of Mathematics, AIET, Mijar</td><td>Secured 100/100 in Mathematics</td><td>University Level</td><td>August 2023</td><td>Certificate of participation</td></tr>
    <tr><td>28</td><td>Adith P Kotian</td><td>Karnataka State Junior & U-23 Athletic Meet - 2023</td><td>Dakshina Kannada District Athletics Association</td><td>District Level</td><td>September 27th to 30th, 2023</td><td>-</td></tr>
  </tbody>
</table>`,
        },
        {
          year: "2022-23",
          body: `<p><strong>Student Projects by Karnataka State Council for Science & Technology (KSCST)</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Series</th><th>Proposal Reference No.</th><th>Project Title</th><th>Course</th><th>Branch</th><th>Guide</th><th>Student(s)</th><th>Amount Sanctioned</th><th>Selected For</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>46th SPP (2022-23)</td><td>46S_BE_1885</td><td>TECHNICAL TERM SIGN LANGUAGE DETECTION</td><td>B.E.</td><td>COMPUTER SCIENCE AND ENGINEERING</td><td>Mrs. VIDYA</td><td>Ms. NATASHA SALDANHA, Mr. K. VINAY, Mr. GANESHA SHETTY, Mr. GIRIPRASAD PATIL</td><td>3,500.00</td><td>EXHIBITION</td></tr>
  </tbody>
</table>

<p><strong>International / National / State level Participations - CAYm2 (2022-23)</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl. No.</th><th>Students Name</th><th>Place</th><th>Event Name</th><th>Level</th><th>Date</th><th>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>29</td><td>Ankita Anand Joshi</td><td>CII Innovation Summit, Bangalore, Karnataka</td><td>CII INNOVERGE 2022 Engineering Imagination</td><td>National</td><td>August 25th -27th 2022</td><td>Finalist</td></tr>
    <tr><td>30</td><td>Sameer Shaikh</td><td>Entrepreneurship Development Institute of India, Ahmedabad, Gujarat</td><td>Sustainability Hackathon Challenge 2023</td><td>National</td><td>28th to 29th April 2023</td><td>Finalist</td></tr>
    <tr><td>31</td><td>Shamjetshabam Noren Singh</td><td>AIR FORCE SELECTION BOARD MYSORE</td><td>AIR FORCE SELECTION</td><td>National</td><td>April 17th to 21st, 2023</td><td>Participated</td></tr>
    <tr><td>32</td><td>V Pavan Kumar</td><td>Alva's Education Foundation (R) Moodubidire</td><td>Science Mela, International Cultural Jamboree -2022</td><td>Internation Jamboree</td><td>21st to 27th December, 2022</td><td>Certificate of appreciation</td></tr>
    <tr><td>33</td><td>Shivakumar H M</td><td>Inter Zone / Single Zone Tournament , KIT, Tiptur</td><td>Ball Badminton</td><td>State level</td><td>26 &amp; 27 December, 2022</td><td>Certificate of Participation</td></tr>
    <tr><td>34</td><td>Shivakumar H M</td><td>Inter- Collegiate Zonal Tournament, Ballari</td><td>Ball Badminton Men</td><td>State level</td><td>23-12-2022</td><td>Certificate of Participation</td></tr>
    <tr><td>35</td><td>Bilal</td><td>Sahityotsav 2022, Chikkamagaluru</td><td>Poem Recitation Eng...</td><td>State</td><td>14th &amp; 15th October, 2022</td><td>Certificate of achievement</td></tr>
    <tr><td>36</td><td>Bilal</td><td>National Sahityotsav, West Bengal</td><td>Story Writing (English)</td><td>National</td><td>02nd to 4th December</td><td>Certificate of achievement</td></tr>
    <tr><td>37</td><td>Abrar</td><td>National Sahityotsav, West Bengal</td><td>Na'ath ( Urdu) competition</td><td>National</td><td>02nd to 4th December</td><td>Certificate of achievement</td></tr>
    <tr><td>38</td><td>Gurulikith S</td><td>CATC -III/PRE RDC - I SELECTION CAMP 2022-23</td><td>8 Karnataka Battalion NCC</td><td>National</td><td>11th to 20th November 2022</td><td>Combined Annual training camp attended</td></tr>
    <tr><td>39</td><td>Ankita Anand Joshi / Anamika Tiwari / Reshna Nandipi / Aishwarya G D</td><td>CII YI Phase DO Bangalore, Karnataka</td><td>CII YI Phase DO winners in Yi IDS 3 Bangalore, Karnataka</td><td>National</td><td>12th September 2023</td><td>winners</td></tr>
    <tr><td>40</td><td>344 students completed Infosys Spring board certification</td><td>Infosys Spring board certification</td><td>Infosys Springboard Certifications</td><td>International</td><td>All year</td><td>Appreciation Letter + recognition letter</td></tr>
    <tr><td>41</td><td>LEC Gurulikhith S unit : 6 AIR SQUADRON MANGALORE</td><td>CATC/PRE RDC - II SELECTION CAMP 2022-23</td><td>19 KARNATAKA BN NCC, MADIKERI</td><td>National</td><td>15TH TO 22ND October 2022</td><td>Combined annual training camp</td></tr>
    <tr><td>42</td><td>Prof. Reena Lobo</td><td>Infosys Springboard</td><td>SPOC of the month</td><td>National</td><td>May 2023</td><td>Certificate of Appreciation</td></tr>
    <tr><td>43</td><td>LEC Gurulikhith S unit : 6 AIR SQUADRON MANGALORE</td><td>CATC / IGC -2022-2023</td><td>1 Karnataka BN NCC</td><td>National</td><td>1st to 10th November, 2022</td><td>Combined annual training camp</td></tr>
    <tr><td>44</td><td>LEC Gurulikhith S unit : 6 AIR SQUADRON MANGALORE</td><td>NATIONAL CADET CORPS</td><td>18 KARNATAKA BATTALION NCC, MANGALORE</td><td>National</td><td>24TH TO 31ST OCTOBER, 2022</td><td>Combined annual training camp</td></tr>
    <tr><td>45</td><td>Neha Shetty</td><td>Sahyadri Ranga Mandir Vikas Ashram Ground, Sirsi</td><td>Miss Sirsi 2023</td><td>State Level</td><td>February 4th to 5th 2023</td><td>Certificate of Appreciation</td></tr>
    <tr><td>46</td><td>Sameer Shaikh</td><td>FORTNET NSE CERTIFICATION PROGRAM</td><td>NSE3 Network Security Associate</td><td>International</td><td>February 14th 2023, Valid Till February 14th 2025</td><td>Certification validation number aGi1moQQCH</td></tr>
  </tbody>
</table>`,
        },
        {
          year: "2021-22",
          body: `<p><strong>International / National / State level Participations - CAYm3 (2021-22)</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl. No.</th><th>Students Name</th><th>Place</th><th>Event Name</th><th>Level</th><th>Date</th><th>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>47</td><td>Prajna SP</td><td>LinkedIn Learning Certificate of Completion</td><td>Learning Python</td><td>International</td><td>Oct 2021</td><td>Course Completion</td></tr>
    <tr><td>48</td><td>Sameer Shaikh</td><td>FORTNET NSE CERTIFICATION PROGRAM</td><td>NSE1 Network Security Associate</td><td>International</td><td>March 20th 2022, Valid Till March 20th 2024</td><td>Certification validation number JA6XF36TWe</td></tr>
    <tr><td>49</td><td>Sameer Shaikh</td><td>FORTNET NSE CERTIFICATION PROGRAM</td><td>NSE2 Network Security Associate</td><td>International</td><td>April 12th 2022, Valid Till April 12th 2024</td><td>Certification validation number jA6vRX7boU</td></tr>
    <tr><td>50</td><td>Sameer Shaikh</td><td>Entrepreneurship Cell IIT KANPUR</td><td>Student Ambassador Program</td><td>National</td><td>12th June 2021</td><td>Certificate of participation</td></tr>
    <tr><td>51</td><td>Chinmayee Dayanand Kamath / K Vinay / Ajay N</td><td>Confederation of Indian Industry (CII), Yi-Young Indians, Bengaluru Chapter</td><td>Future of Health: Hackathon</td><td>National</td><td>15th Sept, 2021</td><td>Finalist</td></tr>
    <tr><td>52</td><td>Jayesh Korade / Indraja / Ajay N</td><td>AIC Nitte Incubation Center (Supported by NITI Aayog) NMAMIT Campus, Nitte</td><td>Kaun Banega Udyamapati Contest</td><td>National</td><td>8th to 10th Nov, 2021</td><td>Top 10</td></tr>
    <tr><td>53</td><td>D Richard Franklin</td><td>NTA, Ministry of Education, Govt. of India</td><td>NATIONAL APTITUDE TEST - 2021</td><td>National</td><td>13th Dec, 2021</td><td>Qualified</td></tr>
    <tr><td>54</td><td>Jayesh Korade</td><td>Online</td><td>Microsoft Research Summit Oct 2021</td><td>National</td><td>19th -20th Oct, 2021</td><td>Participated</td></tr>
    <tr><td>55</td><td>Jayesh Korade</td><td>AIC Nitte Incubation Center (Supported by NITI Aayog) NMAMIT Campus, Nitte</td><td>Kaun Banega Udyamapati Contest</td><td>State</td><td>8th -10th Nov, 2021</td><td>Top 50</td></tr>
    <tr><td>56</td><td>Indraja R</td><td>Assistive Technology Lab, Shri Vishnu Engineering College for Women</td><td>TECH SRUSHTI-2K21</td><td>National</td><td>3rd September 2021</td><td>Participation</td></tr>
    <tr><td>57</td><td>Tejas Ravi</td><td>Assistive Technology Lab, Shri Vishnu Engineering College for Women</td><td>TECH SRUSHTI-2K21</td><td>National</td><td>3rd September 2021</td><td>Participation</td></tr>
    <tr><td>58</td><td>Veena M</td><td>PDA, Ballari</td><td>International Conference on Pattern Recognition Applications & Methods (ICPRAM)</td><td>International</td><td>28th &amp; 29th Dec, 2020</td><td>Best Paper Award</td></tr>
  </tbody>
</table>`,
        },
        {
          year: "2020-21",
          body: `<p><strong>Students Innovative Projects Financial Assistance by VTU - 2020-21</strong></p>
<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Sl. No.</th><th>Guide Name</th><th>Students Name</th><th>Year</th><th>Project Title</th><th>Amount Received</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Mr. Hemanth Kumar N P</td><td>JAYALAKSHMI M, Hemalayha S, Lathik Moger</td><td>2020-21</td><td>Automatic License Plate Detection And Recognition Using Deep Learning</td><td>Rs. 5,000/-</td></tr>
    <tr><td>2</td><td>Mr. Sayeesh</td><td>NANDITHA R SHETTY, Pallavi, Pavana P, Ashika</td><td>2020-21</td><td>Smart CCTV</td><td>Rs. 5,000/-</td></tr>
  </tbody>
</table>`,
        },
      ],
      highlights: [
        "All student project and participation records are shown in tables.",
        "The achievements tab now opens by year, with the latest year shown first.",
        "No summary-only replacement is used in this tab.",
      ],
    },
    activities: {
      title: "DEPARTMENT ACTIVITIES",
      body: "From community outreach to technical workshops, the department regularly conducts activities that build awareness, skills, and responsible digital citizenship.",
      highlights: [
        "Over 50 participants actively engaged in the awareness talk.",
        "Participants learned to spot phishing, vishing, and social engineering.",
        "The session encouraged prompt reporting and cyber ambassadors in the community.",
      ],
      entries: [
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1ecQZoCXEoWuOlHFPLAnsugH5qrLu8zYt",
            ),
            alt: "Cyber-Shield Week cover image",
          },
          title:
            "Cyber Security Awareness Talk on Various Rising Cyber Threats",
          topic:
            "Community awareness session on digital frauds and safe online habits",
          date: "6th September, 2025",
          venue: "Rotary Club Moodabidre",
          audience: "Members of Rotary Club and local community",
          conductedBy: "Rotary Club Moodabidre Cybersecurity Awareness Team",
          overview:
            "A Cybersecurity Awareness Talk was conducted at the Rotary Club, Moodabidre to spread knowledge about the rising digital threats affecting individuals and communities in coastal Karnataka. The talk aimed to empower people to recognize cyber frauds, understand local trends in cybercrime, and adopt safety measures in their day-to-day digital activities. The awareness program highlighted real-world cases from Moodabidre, Bantwala, Mangalore, and Udupi, emphasizing the importance of digital safety in native and rural areas.",
          objectives: [
            "Raise awareness about increasing cyber threats in local communities.",
            "Explain concepts of phishing, vishing, and social engineering with real examples.",
            "Share recent cyber fraud statistics, including regional loss figures.",
            "Educate participants on best practices for online safety and secure digital habits.",
            "Demonstrate practical methods for detecting and avoiding scams.",
            "Train participants on identifying red flags in calls, messages, and emails.",
            "Encourage the community to report incidents promptly to the cybercrime helpline.",
            "Empower people to act as cyber ambassadors in their families and neighborhoods.",
          ],
          impact:
            "Over 50 participants actively engaged in the session. Attendees shared personal experiences of being targeted by scams. Elderly citizens gained clarity on how to verify suspicious calls, and young participants pledged to spread awareness among peers.",
          conclusion:
            "The cybersecurity awareness session at Rotary Club Moodabidre addressed both global and local cyber threats, provided real-life examples with recent loss figures, equipped participants with practical skills for online safety, created a network of individuals ready to spread awareness, and reinforced the role of community-driven cybersecurity initiatives.",
          tags: [
            "Cybersecurity",
            "Awareness",
            "Community Outreach",
            "Rotary Club",
          ],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1eIlRNC6EN3qO2XpvbZpK1LBH-Qsw8rtC",
            ),
            alt: "CSE department activity cover image",
          },
          title: "Cyber-Shield Week",
          topic:
            "An awareness program on various rising cyber threats conducted by members of the Cybersecurity Club",
          date: "August 18thâ€“22nd, 2025",
          venue: "AIET, Moodbidri",
          audience: "Students from all mainstream Computer Science branches",
          conductedBy: "AIET Cybersecurity Club",
          overview:
            "The Cybersecurity Club at Alva's Institute of Engineering and Technology (AIET) is a dynamic student organization dedicated to fostering cybersecurity awareness and expertise among students and the broader college community. Founded with the mission to build a cyber-conscious generation, the club serves as a hub for learning, practicing, and promoting cybersecurity best practices in today's increasingly digital world. The AIET Cybersecurity Club successfully conducted a comprehensive 5-day cybersecurity awareness program from August 18-22, 2025, targeting all mainstream Computer Science branches. The program aimed to educate students about critical cybersecurity threats and provide hands-on experience with security tools and attack methodologies.",
          objectives: [
            "Raise awareness about prevalent cybersecurity threats in today's digital landscape.",
            "Educate students on identifying and preventing common cyber attacks.",
            "Demonstrate real-world attack scenarios and defense mechanisms.",
            "Provide hands-on exposure to cybersecurity tools and techniques.",
            "Foster a security-conscious mindset among future IT professionals.",
          ],
          impact:
            "Student engagement was high across all participating branches. Students actively participated in discussions, asked relevant questions, and showed genuine interest in cybersecurity concepts. They learned to identify red flags in suspicious communications, understand the psychology behind phishing attacks, and implement verification procedures before responding to unsolicited requests. Real-world examples, including the widespread Income Tax Refund scam targeting Indian users, were discussed to illustrate common attack patterns.",
          conclusion:
            "The 5-day cybersecurity awareness program successfully achieved its objectives of educating students about critical digital security threats and providing practical experience with security tools. The combination of theoretical knowledge and hands-on demonstrations proved highly effective in engaging students and transferring essential cybersecurity knowledge.",
          tags: ["Cybersecurity", "Awareness", "Cyber-Shield Week", "Students"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=11X0fP4tu4WZeXRPI5SIPQLsoS6NNueHJ",
            ),
            alt: "Preplacement training cover image",
          },
          title: "Preplacement Training â€” Advanced Java & J2EE",
          topic: "Technical Java + DSA (LeetCode Practice)",
          date: "12th July 2025 to 2nd August 2025",
          venue: "AIET",
          audience: "CSE students (pre-placement preparation)",
          conductedBy:
            "Rahul, Bhavya, Likhitha, Mallesh, Rohit, Hasnain, Guna, Yogesh, Javid, Jyothsna, Moksha, and visiting faculty Mohammad Idris",
          overview:
            "A rigorous pre-placement training program focused on Advanced Java & J2EE alongside DSA practice (including LeetCode-style problem solving). Sessions blended lectures, guided coding, and real-world interview preparation.",
          objectives: [
            "Strengthen Advanced Java and J2EE fundamentals.",
            "Build strong DSA problem-solving habits through regular practice.",
            "Improve coding proficiency with optimized solutions and best practices.",
            "Prepare students for technical assessments and interviews.",
          ],
          impact:
            "Participants demonstrated improved problem-solving confidence and readiness for high-level coding challenges, especially through integrated practice of recursion, backtracking, and dynamic programming.",
          conclusion:
            "By the end of the program, students showed enhanced algorithmic mastery and interview preparedness, successfully completing the pre-placement training series.",
          tags: ["Training", "Java", "J2EE", "DSA", "Placements"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1gQjnwYW8NIaSCV36Is62zU-P8S9F96R6",
            ),
            alt: "Agamya Cyber Tech 2025 cover image",
          },
          title: "Agamya Cyber Tech 2025 Hackathon",
          topic: "Cybersecurity innovation hackathon",
          date: "20thâ€“21st September, 2025",
          venue: "SDMCET, Dharwad",
          audience: "Student innovators and cybersecurity enthusiasts",
          conductedBy:
            "Shri Dharmasthala Manjunatheshwara College of Engineering & Technology (SDMCET), Dharwad",
          overview:
            "Agamya Cyber Tech 2025 brought together innovators, mentors, and cybersecurity enthusiasts for hands-on experimentation, rapid prototyping, and applied problem-solving on real-world digital security challenges. Teams developed functional prototypes under time-bound constraints and engaged in workshops on ethical hacking and no-code app development.",
          objectives: [
            "Inspire practical, creative solutions for emerging cybersecurity threats.",
            "Encourage rapid prototyping and experimentation under time constraints.",
            "Promote teamwork, leadership, and technical skill enhancement.",
            "Facilitate mentorship and networking opportunities with experts.",
            "Showcase innovative tools that enhance digital safety and privacy.",
          ],
          impact:
            "Two functional prototypes were delivered within the hackathon timeframe. The projects strengthened teamwork, rapid prototyping, and interdisciplinary skills, earning recognition for practical relevance and creativity.",
          conclusion:
            "The hackathon proved invaluable for building user-centric cybersecurity solutions and reinforcing the importance of mentorship, collaboration, and applied skills in creating safer digital experiences.",
          tags: ["Hackathon", "Cybersecurity", "Innovation", "Prototyping"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1pyzSk4wqPDeMe_uOUC-1q8NJgDkkGT7I",
            ),
            alt: "Cryptography and Network Security workshop cover image",
          },
          title: "Cryptography and Network Security Workshop",
          topic: "Two-day hands-on workshop",
          date: "13thâ€“14th October, 2025",
          venue: "AIET, Moodbidri",
          audience: "Students interested in cybersecurity fundamentals",
          conductedBy:
            "Cybersecurity Club of AIET (Resource Person: Prof. Anand Pashupathimath, SDMCET Dharwad)",
          overview:
            "A two-day workshop covering cryptographic principles and network security protocols through lectures and hands-on sessions. Participants explored key generation, encryption/decryption, certificates, protocol analysis, and network simulation using industry-relevant tools.",
          objectives: [
            "Build a solid foundation in cryptographic principles and algorithms.",
            "Provide hands-on practice in key management and encryption/decryption.",
            "Understand common network protocols and their vulnerabilities.",
            "Develop tool proficiency using Cisco Packet Tracer for simulation and testing.",
            "Enhance security awareness and problem-solving abilities through practical exercises.",
          ],
          impact:
            "Participants gained both conceptual clarity and practical skills in cryptography and network protocol security, improving their ability to analyze threats and apply defensive strategies.",
          conclusion:
            "The workshop successfully met its objectives of providing foundational knowledge, hands-on exposure, and motivation for further learning and careers in cybersecurity.",
          tags: ["Workshop", "Cryptography", "Network Security", "Hands-on"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1j74u9BvKuREZx44jzvZ4RhgaXdCJ-EDD",
            ),
            alt: "UiPath Essentials workshop cover image",
          },
          title: "UiPath Essentials â€” RPA for Beginners",
          topic: "Workshop conducted under C-Maniax",
          date: "September 24th, 2025 (9:00 AM â€“ 5:00 PM)",
          venue: "AIET, Moodbidri",
          audience: "~100 registered students",
          conductedBy: "Department of CSE in collaboration with C-Maniax",
          overview:
            "A full-day workshop introducing Robotic Process Automation (RPA) concepts and real-world applications, with hands-on exposure to UiPath. The program progressed from fundamentals to practical tasks, interactive activities, and a closing session to consolidate learning.",
          objectives: [
            "Introduce core RPA concepts and their real-world relevance.",
            "Provide hands-on experience with UiPath tools and workflows.",
            "Help participants connect theory to practice through guided activities.",
            "Motivate students to explore automation and emerging technology domains.",
          ],
          impact:
            "Excellent participation and engagement across sessions, with positive feedback and successful completion of practical tasks by attendees.",
          conclusion:
            "The workshop delivered a structured and impactful learning experience, serving as a strong stepping stone for students to explore automation more deeply and apply it in innovative ways.",
          tags: ["Workshop", "RPA", "UiPath", "Automation"],
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
