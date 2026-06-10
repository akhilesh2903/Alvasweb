import { DepartmentData, Faculty } from "@/lib/departments";

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const eceDepartmentData: DepartmentData = {
  id: "ece",
  name: "Electronics & Communication",
  title: "Electronics & Communication Engineering",
  vision: `Centre of excellence to empower the young minds in the field of Electronics and Communication Engineering with research focus and skill development through transformative education catering to the needs of the society`,
  mission: `M1:	To create Learning Environment to enable the students for excellence in the field of Electronics and Communication Engineering.
M2:	To empower the students with necessary skills for solving the complex technological problems.
M3:	To inculcate Research Culture among Teaching Learning Group by guiding them towards Research activities to bridge the gap between Industry and Academia.
M4:	By imbibing the students with human values and ethics through transformative education and make them socially responsible professionals.


`,
  hod: {
    name: "Dr. KrishnaVeerya",
    designation: "Professor & HOD - ECE",
    qualification: "Ph.D",
    experience: "15+ Years",
    email: "hodece@alvas.edu.in",
    phone: "+91 98765 43214",
    photo: "",
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
      name: "Mr. Faisal.K",
      designation: "Senior Assistant Professor",
      qualification: "M.Tech",
      experience: "1 year 5 months (AIET)",
      email: "faisalk@aiet.org.in",
      phone: "NA",
      aoi: "signal/image processing",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1mvyj07lwPWJ9tYYwb10WKwYFlzD3gAsD"
      ),
      joiningDate: "01/10/2024",
      details: {
        qualifications: "M.Tech",
        pastExperience: "20 years",
        areasOfInterest: "signal/image processing",
        achievements: "Nil",
        professionalMembership: "NA",
        publications: "5",
        projectsGuided: "NA",
        subjectsTeaching:
          "Digital Signal Processing, Principles of communication systems",
        researchPublications: `1. "Quality Issues in Digital Image Recovery from the Print-Scan Channel", Journal of Emerging Technologies, Image Processing and Networking, Vol 8, 2014.
2. "Efficient Wireless data transfer System using RASPBERRY PI", 5th ICCT Proceedings, Vol 1, 2017.
3. K.Faisal,Dr.R.Sudhakar,A.Hafilia, “Quality Issues in Digital Image Recovery from the Print-Scan Channel” ,IEEE  International Conference on Emerging Trends in Science, Engineering, Business and Disaster Management at Noorul Islam University ,Tamil Nadu, 28th February 2014.
4. K.Faisal, Prithwiraj, Raksha .S,” Smart Plant monitoring system: A review of approaches for monitoring condition of plants”,IJARSCT,volume 4,issue 2,December2024
5. Faisal.K”Farm to table automating fruit yield and sales using ESP-32 CAM and TeleBot,7th international conference on engineering and advancement in Technology 2025 at Malla Reddy college of engineering,Secundarabad.`,
        others: "Nil",
      },
    },
    {
      name: "Dr. Napolean",
      designation: "Associate Professor",
      qualification: "M.Tech, Ph.D",
      experience: "1 year 5 months (AIET)",
      email: "nepojustin@gmail.com",
      phone: "NA",
      aoi: "signal/image processing",
      photo: imageProxyUrl(
        "https://lh3.googleusercontent.com/pw/AP1GczN5dSn-N98fm53INzHCWjm4EiKlG0lUgcC4itTLn13CwAaqbs3wOXdnR55V5gFRIS1z22bGpXXwuJb5WjjvAg5RMFMw-255cn5eoEu26VOKGLIO5Od2Vd2rhrLi842hbDXJifKFy1wN-AYWQi07tk6Xyg=w413-h531-s-no"
      ),

      joiningDate: "17.04.2023",
      details: {
        qualifications: "M.Tech",
        pastExperience: "18 years",
        areasOfInterest: "signal/image processing",
        achievements: "Nil",
        professionalMembership: "NA",
        publications: "27",
        projectsGuided: "NA",
        subjectsTeaching:
          "Artificial Intelligence and Machine Learning, Communication Systems, Semiconductor Devices and Modeling, Wireless Communications and Networks, VLSI Design, Microwave Engineering",
        researchPublications: `1. “A new approach utlizing DTCWT for feature extraction and ANN for classification to improve fingerprint recognition”, Engineering Express, January 2025. 
    2. “Design of energy efficient hybrid STT-MTJ/CMOS based LIM logic gates for IOT applications”, Measurement: Sensors, 2024, April, 101063 (Scopus Indexed)
    3. “Design of INV/BUFF logic locking for enhancing the hardware security” in Journal of Electronic Testing, 2023, 39(2), pp. 141–153 (Scopus Indexed)
    4. “Review on Hardware Trojan Detection Techniques, in Journal of National Academy Science Letters”, 2023, 46(6), pp. 521–524. (Scopus Indexed) 
    5. “Design and Evaluation of XOR Arbiter Physical Unclonable Function and its Implementation on FPGA in Hardware Security Applications”, in Journal of Electronic Testing, 2022, 38(6), pp. 653– 666 (Scopus Indexed) 
    6. “Electroforming Atmospheric Temperature and Annealing Effects on Pt/HfO2/TiO2/HfO2/Pt Resistive Random-Access Memory Cell” in Journal of Silicon, March 2022 DoI:10.1007/s12633- 021-01074-8 (Scopus Indexed)
    7. “Hardware Obfuscation for IP Protection of DSP Applications” Journal of Electronic Testing: Theory and Applications (JETTA) 2022, 38(1), pp. 9–20. (Scopus Indexed).
    8. “Effects of Ambient and Annealing Temperature in HfO2 Based RRAM Device Modeling and Circuit-Level Implementation” . ECS Journal of Solid State Science and Technology, 2022,11(2), 023012. https://doi.org/10.1149/2162-8777/ac557b. (Scopus Indexed)
    9. “Review on role of nanoscale HfO2 switching material in resistive random access memory device”. Emergent Materials,2022, 5(2), 489–508. https://doi.org/10.1007/s42247-022- 00356-0. (Scopus Indexed) 
    10. “Temperature effects on HfO2 -TiO2 -HfO2 stack layer resistive random access memory cell for low power applications” in IEEE ICDCS 2020. (Scopus Indexed)
    11. “Overview of Current Compliance Effect on Reliability of Nano Scaled Metal Oxide Resistive Random Access Memory Device” in IEEE ICDCS 2018. (Scopus Indexed)
    12. •	“An Optimal Non Invasive Blood Glucose Measurement using Smartphone by Near Infrared Spectroscopy” in International Journal of Applied Engineering Research ISSN 0973-4562 Volume 10, Number 13 (2015) (Scopus indexed)
    13. •	“Open Loop Control of a Novel Power Converter for Fuel Cell assisted Photo voltaic Power Systems” in International Journal of Scientific & Engineering Research, Volume 4, Issue 4, April2013 ISSN 2229-5518. (Scopus indexed)`,
        others: "Conducted a significant portion of my doctoral research on RRAM fabrication and characterisation at Indian Institute of Science (IISc) Bangalore, where I gained hands-on experience in advanced device fabrication, clean room processing, and electrical characterisation, while collaborating with interdisciplinary research teams to analyze resistive switching behavior and optimize device performance.",
      },
    },
    {
      name: "Mr. Hemanth T S",
      designation: "Assistant Professor",
      qualification: "B.E. (ECE), M.Tech (VLSI Design and Embedded Systems)",
      experience: "9 months",
      email: "hemanthts@aiet.org.in",
      phone: "",
      aoi: "VLSI Design, ASIC Design, Phase Locked Loops (PLL), Embedded Systems",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=14X61SN7e8vU0pLYrgVfyjlMOlWe1XVKW"
      ),
      joiningDate: "",
      details: {
        qualifications: "B.E. (ECE), M.Tech (VLSI Design and Embedded Systems)",
        pastExperience: "5 months",
        areasOfInterest: "VLSI Design, ASIC Design, Phase Locked Loops (PLL), Embedded Systems",
        achievements: "nil",
        professionalMembership: "nil",
        publications: "1",
        projectsGuided: "nil",
        subjectsTeaching: "Basic Electronics, Analog electronic Circuits, VLSI Design, VLSI Process Technology, ASIC Design, System on Chip (SoC) Design, VLSI Testing and Verification, Digital System Design Using Verilog, Multimedia Communication, IOT, Machine Learning.",
        researchPublications: `1. 1.	Hemanth T S and Rajeshwari B S, “Predicting Blood Pressure from Photoplethysmogram Data: A Machine Learning Approach” 2024 International Conference on Recent Advances in Science and Engineering Technology (ICRASET).`,
        others: `1. Reviewer for the 3rd International Conference on Integrated Circuits and Communication Systems (ICICACS - 2025), organized by H.K.E. Society's Sir M Visvesvaraya College of Engineering, Raichur, February 21-22, 2025.
2. Reviewer for the 4th IEEE International Conference on Distributed Computing and Electrical Circuits and Electronics (ICDCECE - 2025) organized by IEEE SB Ballari Institute of Technology and Management, Ballari, April 25-26, 2025. 
3. Faculty Development Program (FDP) on “GENERATIVE AI”, organized by Brainvision Solutions India Pvt. Ltd., in collaboration with AICTE & hosted by Anjuman Institute of Technology and Management Bhatkal, August 4-8, 2025.
4. Reviewer for the International Conference on Emerging Technologies in Electronics and Green Energy (ICETEG - 2025), organized by JSS Science and Technology University, Mysuru, October 10-11, 2025.`,
      },
    },
    {
      name: "Dr. Guruprasad B",
      designation: "",
      qualification: "",
      experience: "",
      email: "",
      phone: "",
      aoi: "",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1Kr6P7dBPgeRmxDhsUasFH62p5hfojsrI"
      ),
      joiningDate: "",
      details: {
        qualifications: "",
        pastExperience: "",
        areasOfInterest: "",
        achievements: "",
        professionalMembership: "",
        publications: "",
        projectsGuided: "",
        subjectsTeaching: "",
        researchPublications: ``,
        others: "",
      },
    },
    {
      name: "Mrs. Vijetha T S",
      designation: "Senior Assistant Professor",
      qualification: "B.E., M.Tech, Ph.D(Pursuing)",
      experience: "15 years",
      email: "tsvijetha@aiet.org.in",
      phone: "NA",
      aoi: "Signal processing, Digital Communication, Electromagnetics, Machine Learning, Deep learning",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1pxKu1aaODqkIULmKwmmdRd1pAy8mIniz"
      ),
      joiningDate: "26/07/2010",
      details: {
        qualifications:
          "B.E. in ECE (2009), NMAMIT; M.Tech. in DE&CE (2014), NMAMIT; Currently pursuing Ph.D. in Signal Processing and AI at MIT, Manipal.",
        pastExperience: "NA",
        areasOfInterest:
          "Signal processing, Digital Communication, Electromagnetics, Machine Learning, Deep learning",
        achievements:
          "Presented/published in Springer, IEEE, SCOPUS; Consistently secured KSCST funding; Handled core technical subjects; Active in research/mentoring.",
        professionalMembership: "IEEE, Springer",
        publications: "14 papers presented/published",
        projectsGuided: "Mentored yearly KSCST funded projects",
        subjectsTeaching:
          "Antenna & Propagation, Engineering Electromagnetics, Fundamentals of HDL, Digital Signal Processing, Logic Design, Field Theory, Basic Electronics, DSP Algorithm & Architecture, Operating Systems, Digital Communication, Fundamentals of Electronica & Communication Engineering.",
        researchPublications: `1. "Classification and Quality Analysis of Rice Grains", Springer LNNS (SCOPUS), ICCIDC 2025.
2. "Brain Tumor Detection and Segmentation", Springer LNNS (SCOPUS), ICCIDC 2025.
3. "Automated ECG Signal Analysis for Cardiac Arrhythmia", AET 2025, GIJET.
4. "Plant Disease Detection and Pesticide Spraying Robot", IEEE Xplore, ISCCSC 2025.
5. "A review on Auto delivery BOT", GIJET, Vol 10, Issue 2.
6. "Voice Controlled wheel chair for physically disabled", GIJET, Vol 9, Issue 1.
7. "Smart Borewell Child Secure system", GIJET, Vol 9, Issue 1.
8. "Design and Implementation of Automated Hydroponic System", Vol 26, Issue 7, 2021.
9. "A Review on Design and Implementation of Micro Weather Station", Vol 26, Issue 7, 2021.
10. "A Review: Antitheft Sensor Controlled Home Security System", IJRAR 2020.
11. "Antitheft Sensor Controlled Home Security System", IJECET 2020.
12. Paper Presented in International Conference (AET), NMAMIT, Nitte.
13. Paper Presented in National Conference (ACSET), KLCET Chikodi.
14. "Development of Automatic Kannada Speech Recognition System", IJARIIE.`,
        others: "NA",
      },
    },
    {
      name: "Mr. Sudhakara H M",
      designation: "Associate Professor",
      qualification: "B.E., M.Tech",
      experience: "12 years (AIET)",
      email: "sudhi123@aiet.org.in",
      phone: "NA",
      aoi: "Embedded System, Digital System design, Power Electronics",
      photo: "",
      joiningDate: "16-09-2013",
      details: {
        qualifications: "B.E., M.Tech",
        pastExperience: "21 years",
        areasOfInterest:
          "Embedded System, Digital System design, Power Electronics",
        achievements:
          "Project guided 'IoT Based Real Time Monitoring And Control System for Mushroom Farm' selected for State Level Exhibition",
        professionalMembership: "NA",
        publications: "8",
        projectsGuided: "State Level Project on Mushroom Farm",
        subjectsTeaching:
          "Embedded System, Digital System design using Verilog, Wireless Communication",
        researchPublications: `1. "Three in one smart agricultural device using Arduino", IJAREEIE 2019.
2. "Design and Analysis of Phase Locked Loop Based Frequency Synthesizer", IJIREEICE 2016.
3. "Smart Ambulance and Traffic Controlling System", April 2020.
4. "Review and Design of Hybrid Surveillance Robot", GIJET June 2024.
5. "Farmer Friendly Maize Humidity Level Testing Machine", GIJET June 2024.
6. "Smart Floor Cleaning System", GIJET June 2025.
7. "Third Eye for the Blind Using Arduino Uno", IJSREM March 2023.
8. "IOT Based Real Time Monitoring and Control System for Mushroom Farm", IJSREM 2023.`,
        others: "NA",
      },
    },
    {
      name: "Dr. Ganesh V N",
      designation: "Associate Professor",
      qualification: "Ph.D, M.Tech(DE&CS)",
      experience: "19 years",
      email: "ganeshvn@aiet.org.in",
      phone: "NA",
      aoi: "Nano-Technology, Cryptography, Analog and digital Signal Processing, Antenna Theory and Design, Analog and Digital Communication Systems, VLSI Design and Embedded Systems.",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=11DBTwdd6IaU6r6-TPZyOb7-ISaPsAGXR"
      ),
      joiningDate: "04-10-2023",
      details: {
        qualifications: "Ph.D, M.Tech(DE&CS), B.E",
        pastExperience:
          "Associate Professor at MITE (2009-2023); Hardware designer at NanDigital Technologies; Lecturer at MIT Kundapura.",
        areasOfInterest:
          "Nano-Technology, Cryptography, Signal Processing, Antenna Theory, VLSI, Embedded Systems.",
        achievements:
          "First prize in Srishti Hackathon competition 2025; KSCST grants for Blood Group Detection and Multifunctional Robot projects.",
        professionalMembership: "NA",
        publications: "10 Research Publications",
        projectsGuided:
          "Secured first prize in Srishti Hackathon, state level project competition (2025).",
        subjectsTeaching:
          "Signals & Systems, Digital Signal Processing, Computer communication networks, Electronic Principles & Circuits, Principles of Communication systems, Cryptography, Microwaves & Antennas, Electronic Devices, optical fiber communication.",
        researchPublications: `1. "Panoptic Region Slicing Segmentation & Optimized Alexnet-Based CNN", SN Computer Science, 2024.
2. "Enhancing Segmentation of Abdominal Aortic Aneurysms in CT Images", IEEE ICDSNS 2023.
3. "Spray pyrolysis deposited Aluminium-Indium Zinc oxide thin films", Materials Today 2022.
4. "Optical and photoluminescence studies of Gallium Zinc Oxide films", Materials Today 2022.
5. "Growth of precursor stabilized IZO thin films", Materials Today 2022.
6. "Optical and photoluminescence studies of Aluminium-Gallium Zinc oxide films", Materials Today 2022.
7. "Optical band gap and photoluminescence of Indium-Gallium Zinc oxide films", Materials Today 2022.
8. "Pedal Effects Modelling for Stringed Instruments", Springer 2020.`,
        others:
          "Completed NPTEL Courses on Deep Learning, Communication Networks, Analog Communication, and Intro to ML.",
      },
    },
    {
      name: "Dr. Roshan Shetty",
      designation: "Associate Professor",
      qualification: "M.Tech, Ph.D",
      experience: "15 years",
      email: "roshans@aiet.org.in",
      phone: "NA",
      aoi: "Artificial Intelligence, Electromagnetics, Embedded Systems",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1hANb8DPBqxG_RBZsxkgjSejphRS6F7Fq"
      ),
      joiningDate: "27-07-2012",
      details: {
        qualifications: "M.Tech, Ph.D",
        pastExperience: "Asst. Professor at MIT Kundapur (2011-12)",
        areasOfInterest:
          "Artificial Intelligence, Electromagnetics, Embedded Systems",
        achievements:
          "Best Paper Award at Hinweis 2024; Project selected for KSCST 48th Series; Published patent on AI Assistant pocket device; Reviewer for Expert System with Applications.",
        professionalMembership: "Expert System with Applications Reviewer",
        publications: "11",
        projectsGuided:
          "KSCST State Level Exhibition Project- Multifunctional Robot for Specially Abled People.",
        subjectsTeaching:
          "Electromagnetic Field theory, Microcontrollers, Embedded systems, Basic Electronics, Operating Systems, OOPs with C++, C-Programming, Analog & Digital Electronics, RTOS, DSP Algorithm",
        researchPublications: `Scopus ID: 57225092323
1. "Multiclass Classification of Chest X-Ray Images Using Resnet-152", IJIES (Q2 Scopus).
2. "Hemicare: In-home Health Monitoring for Hemiplegia", Hinweis 2024 (Scopus).
3. "Web-Integrated Wireless Sensor Network for Landslide Monitoring", IEEE 2025.
4. "AI - based Cardiac Diagnostics", ACT 2024 (Scopus).
5. "Sensor-Based Innovations In Petrol Adulteration Detection", NGIEC-2025.
6. "Deep Learning Methods on Chest X-Ray Survey", IACIT-2021.
7. "Self-Sequential Attention layer based DenseNet", IJIES 2021 (Scopus).
8. "Adaptive Data Augmentation Training for Thoracic Diseases", IJCSE 2021 (Scopus).
9. "Recognition of Thoracic Pathologies in Chest X-Ray Radiography", IJSE (Scopus).
10. "Intermediate learning based Attention regulated DenseNet for Covid-19", IJST (WoS).
11. "Real-Time Landslide Monitoring", ICEAMST 2025 (IEEE).`,
        others:
          "Contributed a book chapter in 'Sustainable Computing: Transforming Industry 4.0 to Society 5.0'.",
      },
    },
    {
      name: "Dr. Harish Bhat N",
      designation: "Senior Assistant Professor",
      qualification: "BE(ECE), M.Tech(Digital Electronics and Communication), PhD(Autonomous Drones)",
      experience: "9.5 years",
      email: "harishbhat@aiet.org.in",
      phone: "NA",
      aoi: "Control design, System Engineering, Power Electronics, FPGA based system realization",
      photo: imageProxyUrl(
        ""
      ),
      joiningDate: "01/08/2024",
      details: {
        qualifications: "BE(ECE), M.Tech(Digital Electronics and Communication), PhD(Autonomous Drones)",
        pastExperience: "6 years Industry",
        areasOfInterest:
          "Control design, System Engineering, Power Electronics, FPGA based system realization",
        achievements:
          "GATE qualified 3 times, consistent certifications in Swayam NPTEL courses, participated in Summer Faculty Research Fellowship (SFRF 2015) for 6 weeks at IIT Delhi, 4 certificates in ATAL 5 days FDPs.",
        professionalMembership: "Reviewer for IEEE Access an open access journal (Q2)",
        publications: "2",
        projectsGuided:
          "nil",
        subjectsTeaching:
          "Embedded System Design, System Modeling Using Simulink Lab.",
        researchPublications: `1.	Bhat Harish N., Chokkadi Shreesha, & Shenoy B., Satish, (2023). "Evolvable Hardware Based Optimal Position Control of Quadcopter," Defence Science Journal, Jan 2024, 74(01), 91-99.
        2. Bhat, Harish, Shreesha Chokkadi, and Satish Shenoy. "Optimal fault resilient autonomous quadcopter control based on dynamic partial reconfigurable FPGA." Cogent Engineering 10, no. 2 (2023): 2276503`,
        others:
          `Others:
Developed zero cost Power Converter Simulation Lab using FreeEDA (an open source EDA tool) in 2014 at MITE Moodabidre
`,
      },
    },
    {
      name: "Dr Keshaveni N",
      designation: "Professor",
      qualification: "B.E, MTech, PhD",
      experience: "3 months",
      email: "keshaveni@aiet.org.in",
      phone: "NA",
      aoi: "Digital systems, VLSI design, Video/Image processing",
      photo: imageProxyUrl(
        ""
      ),
      joiningDate: "20-08-2025",
      details: {
        qualifications: "B.E, MTech, PhD",
        pastExperience: "31.7 years",
        areasOfInterest:
          "Digital systems, VLSI design, Video/Image processing",
        achievements:
          "Secured 3rd Rank in M.Tech  Digital Electronics, from V.T.U Belagavi during the year 2000.",
        professionalMembership: "doctoral committee member for 4 more candidates under VTU, Doctoral committee member for one candidate, under Nitte university, Karkala.",
        publications: "26",
        projectsGuided:
          "4",
        subjectsTeaching:
          "VLSI design and testing, Electronic principles and circuits.",
        researchPublications: `1.  Implementation of Context   Adaptive Variable Length Coder for H.264 Video Encoder , IJRTE, Vol. 2, ISSN:1797-9617, November 2009.

2. Design and FPGA Implementation of Integer Transform and Quantization Processor and their Inverses for H.264 video encoder, IJCSC, Vol.1, Number 1, pp. 45-61, January 2010.

3. Performance Evaluation of H.264 Advanced Video Encoder, IJEMR, Vol. 3, Issue 1, ISSN 2250-0758, February 2013.
4. Triple Input Sorter optimization Algorithm of  Median Filter Based on FPGA, IJAREEIE, Vol. 2, Issue 5, ISSN 2320-3765, May 2013.

5. A Survey of automatic Video  summarization techniques, IJEECS, Vol. 3, Issue 1, ISSN 2348-117X, April 2014.

6. Enhanced generic Video Summarization  using Large Scale Categorization, IJIRCCE, Vol. 2, Issue 4, ISSN 2320-9798, April 2014.

7. Reduced surface field technology for LDMOS: A  review, IJETAE, Vol. 4, Issue 6, ISSN 2250-2459, June 2014.

8. Comparative study of video compression techniques- H.264/AVC, IJARCSSE, Vol 4, Issue 11, ISSN 2277 128X, November 2014.

9.   Modeling and simulation of LDMOS Device, IJER, Vol. 4, Issue 6, ISSN 2347-5013, IF=0.475, June 2015.

10. High speed area efficient 32 bit Wallace Tree Multiplier, IJCA, Vol. 124, No.13, ISSN 0975-8887, IF=3.15,  August 2015.

11. Intra prediction mode decision for H.264, IJCA, Vol. 126, No. 4, ISSN 0975-8887, IF=3.15, September 2015.

12.  Review on video enhancement techniques, IJESID,  Vol. 3, Issue 2,  ISSN : 2349-6185,  IF= 4.116, August  2016.

13. Utilizing image classification based semantic recognition for personalized video summarization, IJEER, Vol. 9, No.1, ISSN 0975-6450, pp. 15-27. Indexed in EBSCO host, GOOGLE Scholar, Journal Seek, Index Copernicus, IF=5.98, January 2017.

14.  Improving  breakdown voltage in LDMOS with doped silicon pockets in buried oxide, IJST, Vol.10, Issue 1, ISSN 0974-6846, Impact factor 6.3. (Thomson indexed), January 2017.

15. n_channel LDMOS with STI for breakdown voltage enhancement and improved RON , JTAIT, Vol.95, No. 2, ISSN 1992-8645,  Impact factor 4.14. (Scopus indexed), January 2017.

16. Personalized Summary Representation of Video Summaries, IJAER, Vol. 12, No. 2, ISSN 0973-4562, September 2017.
17. Experimental Evaluation of Domain-Independent Video Summarization Approaches, JARAS, Vol. 5, Issue 2, ISSN : 2394-8442, February 2018.

18. Bit rate reduction for H.264/AVC video based on novel hexagon search algorithm, ICTACT Journal on image and video processing, Vol.8, Issue 4, ISSN: 0976-9102, May 2018.

19. A study on reflection reduction on eyeglasses, IJRAR, Vol.5, Issue 3, ISSN: 2349-5138, September 2018.

20. Contrast enhancement techniques for foggy videos, IJGM, Vol.9, Issue 1, January - December 2019, pp. 01-11, Article ID: IJGM_09_01_001, July 2019.

21. Video Enhancement using Histogram Equalization with JND Model, IJRTE, Volume-8 Issue-2, ISSN: 2277- 3878, July 2019.
 
22. Enhancement on Edge and reduction of noise in low light videos using discrete wavelet transform with JND model, Solid state technology, Volume 63, Issue 6, 2020.

23. Contrast enhancement techniques using discrete wavelet transform with just noticeable difference model for 3D stereoscopic degraded video, IJITEE, Volume-10 Issue-3, ISSN: 2278-3075,  January 2021.

24. Removal of reflection and darkness caused by sun glass occlusion using a PCA, IEEE 7th international conference on recent advances and innovations in engineering (ICRAIE), volume 7, page 220-223, 2022.

25. An AVOA-LSTM with MRCNN for segmenting and classifying the sunglass image-based eye region identification, Journal of Multimedia tools and applications, 2023.
`,
        others:
          `1. Served as External Deputy Chief Superintendent at Alpha college of Engineering Bangalore, KNSIT Bangalore during the year 2003, 2004, related to VTU examination Work. 
2. Served/Serving as Question Paper setter, valuator and moderator for UG and PG program of VTU Belagavi.
3. Recognized as a Local Inspection Committee member from VTU Belagavi, during the year 2014 and 2015 and visited various colleges for inspection in the Bangalore region.
4. Board of Examination (BOE) member for the academic year 2016, attended meetings to scrutinize the Question papers at VTU centers Belagavi, Bijapur and Mysore.
5. Performed the Annual Examination Lab allotment duty, to allot the examiners for the Lab examination for the Mangalore region colleges in the year 2017.
6. Served as a Chief Editor for the college magazine at KVG College of Engineering Sullia during the year 2017-18.
7. Reviewed three papers for the 3rd IEEE international conference ICEECCOT held at GSSIET Mysore on 14th and 15th December 2018.
8. Coordinator/paper reviewer for the two days International conference conducted by Mechanical and Robotics Engineering department, Sahyadri College of Engineering and Management Mangalore.
9. Coordinator for two day workshop on “Robot Operating Systems” for the faculty members and students of Robotics and Automation Engineering department, at Sahyadri College of Engineering and Management Mangalore on January 2024.
10.	Attended number of workshops and Faculty development programs at various colleges.
11.	Completed five NPTEL courses.
12.	Attended 10 days Faculty development program (FDP) on Advanced Semiconductor and Packaging Technology, conducted by Electronics & ICT Academy, IIT Roorkee on 30-06-2025 to 09-07-2025.
13.	Attended 12 days Faculty development program (FDP) on VLSI driven FPGA systems, conducted by Sense semiconductor and IT solutions Pvt. Ltd., on 19-01-2026 to 02-02-2026.
`,
      },
    },
    {
      name: "Mr. Praveen Ullagaddi",
      designation: "Senior Assistant Professor",
      qualification: "M.Tech",
      experience: "4 months",
      email: "praveenm@aiet.org.in",
      phone: "NA",
      aoi: "Communication",
      photo: imageProxyUrl(
        ""
      ),
      joiningDate: "2/2/2026",
      details: {
        qualifications: "M.Tech",
        pastExperience: "13.5 years",
        areasOfInterest:
          "Communication",
        achievements:
          "Received IEEE MDC star award.",
        professionalMembership: "Reviewer for IEEE Access an open access journal (Q2)",
        publications: "nil",
        projectsGuided:
          "nil",
        subjectsTeaching:
          "Basic electrical engineering, VLSI.",
        researchPublications: ``,
        others: ``,
      },
    },
    {
      name: "Ms. Sowmya T K",
      designation: "Senior Assistant Professor",
      qualification: "M.Tech in Digital Electronics and Communication, NMAM Institute of Technology, Nitte 2010, B.E. in Electronics and Communication Engineering, SJEC, Mangalore 2008, Advanced Diploma in ASIC Design – RTL Verification, RV Skills, Bangalore 2024",
      experience: "15.2 years",
      email: "sowmyatk@aiet.org.in",
      phone: "NA",
      aoi: "Cryptography and Network Security, VLSI Design and Verification, Digital System Design",
      photo: imageProxyUrl(
        ""
      ),
      joiningDate: "23/02/2026",
      details: {
        qualifications: "M.Tech in Digital Electronics and Communication, NMAM Institute of Technology, Nitte 2010, B.E. in Electronics and Communication Engineering, SJEC, Mangalore 2008, Advanced Diploma in ASIC Design – RTL Verification, RV Skills, Bangalore 2024",
        pastExperience: "13.5 years",
        areasOfInterest:
          "Cryptography and Network Security, VLSI Design and Verification, Digital System Design",
        achievements:
          "Published papers in Scopus Indexed and Q2 journals, Presented research paper in IEEE International Conference, Advanced certification in ASIC Design and RTL Verification",
        professionalMembership: "nil",
        publications: "3",
        projectsGuided:
          "nil",
        subjectsTeaching:
          "Digital Electronics, Logic Design, Control systems, Analog communication, Digital communication, Analog Circuits, Embedded Systems, VLSI Design, Microcontroller, Digital System Design using Verilog, Cryptography and Network Security",
        researchPublications: ``,
        others: `1. Title: Elliptic Curve-based Collaborative Group Key Management for Cloud Data Sharing
Journal: IJEAT
Indexing: Scopus Indexed
2. Title: Enhanced Cipher Text-Policy Attribute-Based Encryption for Media Cloud Data
Journal: International Journal of Pervasive Computing and Communication
Quartile: Q2 Journal
3. Title: Key Management Using Elliptic Curve Diffie-Hellman Curve 25519
Conference: IEEE MPCIT
Year: 2020
`,
      },
    },
  ],
  exploreData: {
    about: {
      title: "ABOUT ELECTRONICS & COMMUNICATION ENGINEERING",
      body: `The Department of Electronics and Communication Engineering (ECE) is accredited by the National Board of Accreditation, New Delhi (NBA) for a continuous period of nine years, from 01 July 2019 to 30 June 2028, reflecting the department’s commitment to academic excellence and quality education.
The Department of ECE is one of the most sought-after and dynamic branches of engineering, playing a vital role in the technological advancement and overall development of modern society. The department focuses on the design, development, manufacturing, and application of electronic devices, its software, and intelligent systems that drive today’s digital and connected world.
The curriculum emphasizes a strong foundation in Electronic Devices and Circuits, Computer Architecture and Communication, VLSI and Embedded Systems, Electromagnetism, Analog and Digital Communication, Digital Signal Processing, and Microwave and Broadband Communication. With a team of highly qualified, experienced, and research-oriented faculty members, the department ensures outcome-based learning, industry relevance, and career readiness for students in core and emerging areas of semiconductor industry.
`,
      highlights: [
        "State-of-the-art VLSI and Embedded Systems labs.",
        "Strong industry ties with electronics leaders.",
        "Innovation hub for IoT and Smart Systems.",
      ],
    },
    thrust: {
      title: "THRUST AREA",
      body: "Focusing on Next-Gen Communication, VLSI Design, and Embedded Systems.",
      highlights: [
        "•	Embedded Systems",
        "•	IoT (Internet of Things)",
        "•	VLSI Design",
        "•	Signal Processing",
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

PO10:	Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions.

PO11:	Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.

PO12:	Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.

PEO1:	Apply mathematical, scientific and engineering skills for solving problems in the area of Electronics and Communication Engineering.
PEO2: Expose to emerging technologies and excel in industries/higher studies/research.
PEO3:	Apply analytical skills in the area of Electronics and Communication Engineering to become competent and employable.
PEO4:	Inculcate Professional ethics, human values, team work for solving engineering problems and contribute to societal needs.

PSO1: Understand and apply the principles of Electronics and Communication Engineering in various domains of Analog and Digital systems.

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
      syllabusLinks: [
        { year: "2024-2025", id: "1jJzCk_UeBuSGWzitEd4_9nBMhPzQsfPj" },
        { year: "2023-2024", id: "1tI5GD7JXinGCCGikFzdgXgzxRwNg15ZH" },
        { year: "2022-2023", id: "1ArpQjKUYTSDLVJdIPShdFJDzyFo6WLe0" },
      ],
    },
    placements: {
      title: "PLACEMENT",
      body: "Students are placed in top companies like Bosch, Intel, Qualcomm, and more.",
      highlights: [
        "100% placement track record for eligible students.",
        "Highest CTC in communication domains.",
        "MOU with top electronics conglomerates.",
      ],
    },
    research: {
      title: "RESEARCH AND PUBLICATION",
      body: "Highly active research community with numerous patents and international publications.",
      highlights: [
        "Funded research labs (VGST).",
        "Patent filing assistance for students.",
        "Publication in IEEE and Springer journals.",
      ],
    },
    facultyStaff: { title: "FACULTY AND STAFF", body: "", highlights: [] },
    facilities: {
      title: "FACILITIES",
      body: "Advanced infrastructure including specialized equipment for signal processing and microelectronics.",
      highlights: [
        "Cadence VLSI bundle certification center.",
        "Digital Signal Processing workstation lab.",
        "Robotics and Automation center.",
      ],
    },
    workshop: {
      title: "WORKSHOP AND CONFERENCE",
      body: "Regular hosting of national and international technical events.",
      highlights: [
        "Annual Electronics Symposium.",
        "Workshops on AI in Communication.",
        "IEEE student chapter events.",
      ],
    },
    clubs: {
      title: "PROFESSIONAL BODIES",
      body: "Active membership in global engineering societies.",
      highlights: [
        "IEEE Signal Processing Society chapter.",
        "Robotics Club activity center.",
        "Student satellite program.",
      ],
    },
    achievements: {
      title: "ACHIEVEMENTS",
      body: "National awards in hackathons and sports.",
      highlights: [
        "First place in National Robotics Challenge.",
        "Best Technical Paper award at ICETE.",
        "University ranks in top positions.",
      ],
    },
    activities: {
      title: "DEPARTMENT ACTIVITIES",
      body: "Holistic development through technical and cultural activities.",
      highlights: [
        "Weekly technical seminars.",
        "Industrial visit programs.",
        "Cultural fest participation.",
      ],
    },
    newsletter: {
      title: "E-NEWSLETTER",
      body: "Quarterly updates from the department of ECE.",
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
