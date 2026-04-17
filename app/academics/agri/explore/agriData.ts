import { DepartmentData, Faculty } from "@/lib/departments";

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const agriDepartmentData: DepartmentData = {
  id: "agri",
  name: "Department of Agri",
  title: "Department of Agri Engineering",
  vision:
    "To serve the country by producing high-caliber technocrats who can combine farming with engineering and technology interventions and contribute to global food security and sustainable growth in agricultural production.",
  mission: `M1: To impart knowledge by establishing an environment that is conducive to teaching and learning.
M2: To create agriculture engineers who are both technically proficient and morally admirable in order to benefit society.
M3: To develop and enhance novel technologies to address current and foreseeable issues in agriculture.`,
  hod: {
    name: "Dr. K.V. Suresh",
    designation: "Professor and Head of the Department",
    qualification: "B.E., M.Tech, PhD",
    experience: "35 Years",
    email: "aietag08@aiet.org.in",
    phone: "9880496920",
    photo: imageProxyUrl(
      "https://drive.google.com/uc?export=view&id=15_ZSL5drs8-V3NyPjWlN5Qs5yqkvmlKT",
    ),
    joiningDate: "12-08-2010",
    details: {
      qualifications: "B.E., M.Tech, PhD",
      pastExperience: "35 Years",
      areasOfInterest: "Bio energy, Thermal engineering",
      achievements: "Skills: AUTO CAD, Taguchi, Artificial Neural Network",
      professionalMembership: "NA",
      publications:
        "10 Journal Publications, 3 International Conferences, 3 National Conferences",
      projectsGuided: "NA",
      subjectsTeaching:
        "Thermal engineering, Non-conventional energy source, ATD, BTD, Fuels and Combustion, Heat transfer and Fluid flow, Turbomachines",
      researchPublications: `• Investigation on performance and emission characteristics of diesel engine with cardanol based hybrid bio-diesel blends, Materials Today: Proceedings 35 (2021) 378-382.\n
• Effect of injection pressure on performance and emission of diesel engine with blends of Honge-Rice bran bio diesel, Materials Today: Proceedings 35 (2021) 489-493.\n
• Optimum hydrogen flowrates and membrane-electrode clamping pressure in hydrogen fuel cells, Materials Today: Proceedings 35 (2021) 412-416.\n
• Meshing and Post-processing Capabilities of Open Cascade SALOME and its Compatibility with Solver Code Saturne, IJLREM Vol 05 Issue 02 (2021) PP 01-11.\n
• Effect of injection pressure on performance and emission of CRDI engine operated with biofuel, IJLREM Vol 05 Issue 02 (2021) PP 12-20.\n
• Investigation on the performance of CI Engine with blends of cottonseed and Honge biodiesel, IJMEMES 8(1), Jan 2015, pp 69-74.\n
• An experimental study of performance and emission characteristics of CI Engine fueled with hybrid blends of biodiesels, ITRA Vol 2 Issue 5, Oct 2014 pp 71-74.\n
• Pongamia pinata biodiesel as an alternative fuel for diesel engine A review, Advanced engineering and applied science, 2014, 4(4), pp 52-61.\n
• Different methods of improving performance of an IC engine fueled with CNSL biodiesel: A Review, International Journal of Research, Vol. 1, Issue 11, 2014, pp. 1296-1305.\n
• International Conference: Effect of injection pressure on performance and Emission characteristics of CI Engine fueled with Honge hybrid bio fuel.\n
• International Conference: Performance and Emission characteristics of VCR Engine operated with raw cardanol, Rice bran biodiesel.\n
• International Conference: Effect of injection pressure on performance and Emission characteristics of CI Engine fueled with Honge, Rice bran biodiesel.\n
• K.V.Suresh, Jagadish, Dr.Appu Kuttan: Emission characteristics of methyl ester of Rice bran oil as fuel.\n
• K.V.Suresh, DoVan Hung, Dr.Appu Kuttan: Feasibility study of heated methyl ester cooking palm oil as bio diesel.\n
• K.V.Suresh, Shankarappa kalgudi: Investigation on the performance of CI engine with blends of cotton seed and honge bio-diesel.`,
      others: `Workshops/Conferences:
• Participated in AICTE Sponsored short term programme on Building integrated Photovoltaic system, I.I.T.Delhi, Feb 2011.
• Participated in AICTE Sponsored short term programme on Diesel particulate and NOx emission, I.I.T. Kanpur, Feb 2010.
• Participated in AICTE Sponsored short term programme on Air delivery system and indoor air quality, I.I.T. Madras, July 2009.
• Participated in AICTE-MHRD Sponsored short term programme on Experimentation and computation approach, N.I.T.K. Surathkal, Feb 2009.
• Participated in 2 Day workshop on application of computers in I.C. Engines, NI.T.K. Surathkal, Nov 2006.
• Participated in 3 Day workshop on CNC Machine tools programming and operation, N.I.E. Mysore, March 2006.
• Participated in training program 'Computer Implementation in Professional Work', St. Joseph Engineering College, Mangalore, 2006.
• Participated in VTU/MITE workshop on Research methodologies & Latex, July 2016.
• Participated in 5 days workshop on Software applications in Mechanical Engineering, AIET, Jan 2018.
• Participated in MHRD-INSTITUTION INNOVATION COUNCIL "WRITING A RESERACH PROPOSAL" during July 2020.
• Participated in New model curriculum for First year syllabus as per OBE at Sahyadri engg college by VTU, May 2019.
• Participated in AICTE-ISTE two week summer school on CAD and drafting, BIET, July 2006.`,
    },
  },
  faculty: [
    {
      name: "Dr. Rahul Phatak",
      designation: "Senior Assistant Professor",
      qualification: "M.Sc. Horticulture, Ph.D.",
      experience: "8 Years",
      email: "rahulp@aiet.org.in",
      phone: "8197025728",
      aoi: "Horticulture (Plantation, Spices, Medicinal and Aromatic crops)",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=19bbwF3spxNTl3A4muA3aaB63SsXxu5_P",
      ),
      joiningDate: "01-08-2016",
      details: {
        qualifications: "M.Sc. Horticulture, Ph.D.",
        pastExperience: "8 Years",
        areasOfInterest:
          "Horticulture (Plantation, Spices, Medicinal and Aromatic crops)",
        achievements:
          "Three Design Patents registered, INSPIRE fellowship (DST, GoI), University Gold Medal (M.Sc.), University Blue, Yuva Vigyani award from Karnataka Science Federation",
        professionalMembership: "NA",
        publications:
          "Presented eight papers in Conferences; Published four extension folders, nine articles in periodicals, one radio talk; Acted as co-organizing secretary for international conference.",
        projectsGuided: "NA",
        subjectsTeaching:
          "Fundamentals of Agriculture & Crop Production Technology, Basic concepts and applications of agro-chemicals, Social connect and responsibility, Research Methodologies and IPR, Sustainable agriculture and Food security",
        researchPublications: `• Phatak, R. S., et al., 2017, Journal of Pharmacognosy and Phytochemistry, SP3 :14-17 (NAAS 5.21).
• Phatak, R. S., et al., 2017, International Journal of Current Microbiology and Applied Sciences, 6(12) :135-140 (NAAS 5.38).
• Phatak, R. S., et al., 2017, IJCMAS, 7(1) :2539-2543 (NAAS 5.38).
• Phatak, R. S., et al., 2016, Research in Environment and Life Sciences, 9(5) :634-636 (NAAS 4.09).
• Phatak, R. S., et al., 2016, Research in Environment and Life Sciences, 9(7) :869-870 (NAAS 4.09).
• Phatak, R. S., et al., 2015, Indian Journal of Ecology, 42(1) :268-269 (NAAS 4.47).
• Phatak, R. S., et al., 2014, Indian Journal of Ecology, 41(2) :382-384 (NAAS 4.47).
• Hongal, S., et al., 2023, Eco. Env. & Cons. 29 : S147-S151 (NAAS 5.41).
• Hongal, S., et al., 2023, Biological Forum – An International Journal 15(4) :422-426 (NAAS 5.11).
• Hongal, S., et al., 2023, International Journal of Plant & Soil Science, 35(18) :1722-1730 (NAAS 5.07).
• Hongal, S., et al., 2023, Legume Research – An International Journal, 47 Issue 3 :477-483 (NAAS 6.80).
• Chaitra, B. M., et al., 2015, Environment and Ecology, 33(2A) :963-966 (NAAS 4.18).
• P. Ravi, et al., 2015, Indian Journal of Ecology, 42(2) :501-502 (NAAS 4.47).
• Review: Phatak, R. S. and Hegde, L., 2014, HortFlora Research Spectrum, 3(3): 282-287.`,
        others:
          "Technical Skills: Statistical data Analysis, Field & orchard layout, Crop management, Organic and natural farming practices. Soft skills: Good communication, Team facilitator, Organizational skills, Event management.",
      },
    },
    {
      name: "Dr. Yamagar S. G.",
      designation: "Sr. Assistant Professor",
      qualification: "B. Tech, M. Tech, Ph. D",
      experience: "2 Years",
      email: "ysujitrao@aiet.org.in",
      phone: "+91 9730764477",
      aoi: "Farm Equipment, Electric Vehicle (EV) in protected cultivation, Precision and Smart agriculture, Robotics and Drones in Agriculture.",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      joiningDate: "01-09-2022",
      details: {
        qualifications:
          "B. Tech (Agri Engg.), M. Tech (Farm Machinery), Ph. D (Farm Equipment and Power)",
        pastExperience: "2 Years",
        areasOfInterest:
          "Farm Equipment, Electric Vehicle (EV), Precision Agriculture, Robotics and Drones in Agriculture.",
        achievements:
          "MS-CIT, Poster Presentation in 'Yantra Naad 2015', Digital India Literacy Programme",
        professionalMembership: "NA",
        publications:
          "Research Papers: 6, Books: 2, Technical Bulletins: 1, Popular Articles: 2",
        projectsGuided: "NA",
        subjectsTeaching:
          "Precision agriculture, AI-ML in Agriculture, Farm machinery, Theory of machine, Design of farm machinery, Fluid mechanics",
        researchPublications: `• Ergonomic evaluation of manual Nutmeg Harvesting system. Green Farming Vol. 9 (6).
• Comparative study of physical properties of Nutmeg. International Journal of Chemical Studies 2018; 6(6).
• Determination of Engineering Properties and Fruit Detachment Force of Nutmeg. IJCMAS (2019) 8(1).
• Performance evaluation of developed manual nutmeg harvesting system. IJAE Volume 12 (1).
• Design Considerations in Electric Multi-tool carrier for protected cultivation. IJECC, Vol .14 (1).
• Design and Development of Electrical Multi-tool Carrier. CSIR-NIScPR, Vol. 83, 2024.
• Book: Manual Nutmeg Harvesting system, Lambert Academic Publishing.
• Book: Performance of Drip Irrigation System, Lambert Academic Publishing.`,
        others: `Trainings & Certificates:
• Training on Farm Machinery and Tractor, CFMTTI, Budani.
• Training on Product detail of Eicher Tractors, Alwar.
• Training on Micro-Irrigation System, Jain Irrigation, Jalgaon.
• Training on Testing and Evaluation of Tractor, Budani.
• Popular Article: चाफ कटरसाठी सुरक्षा गॅझेट्स (Agro One).
• Popular Article: स्मार्ट शेती: विद्युत मल्टी-टूल वाहकाची क्रांती (Agro One).`,
      },
    },
    {
      name: "Rakesh Rudragouda Patil",
      designation: "Assistant Professor",
      qualification: "M-Tech. Food Processing Technology",
      experience: "7 Months",
      email: "rakeshp@aiet.org.in",
      phone: "NA",
      aoi: "Research and NPD",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      joiningDate: "19-09-2025",
      details: {
        qualifications: "M-Tech. Food Processing Technology",
        pastExperience: "Research (6 months), Industry (5 months)",
        areasOfInterest: "Research and NPD",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "1",
        projectsGuided: "NA",
        subjectsTeaching: "Food and Agriculture Aspects",
        researchPublications:
          "1. Solar Powered Groundnut Decorticator: Design, Performance and Emission Reductions for Sustainable Agriculture.",
        others: "NA",
      },
    },
    {
      name: "Sharanbasava",
      designation: "Assistant Professor",
      qualification: "M-Tech. Farm Machinery and Power Engineering",
      experience: "8 Months",
      email: "sharanb@aiet.org.in",
      phone: "NA",
      aoi: "Teaching and Research",
      photo:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
      joiningDate: "28-08-2025",
      details: {
        qualifications: "M-Tech. Farm Machinery and Power Engineering",
        pastExperience: "NA",
        areasOfInterest: "Teaching and Research",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "1",
        projectsGuided: "NA",
        subjectsTeaching: "Farm Machinery Equipment II, Human Engineering",
        researchPublications:
          "1. Solar Powered Groundnut Decorticator: Design, Performance and Emission Reductions for Sustainable Agriculture.",
        others: "NA",
      },
    },
  ],
  exploreData: {
    about: {
      title: "ABOUT DEPARTMENT OF AGRICULTURE ENGINEERING",
      body: `The Future of Farming:
The Department of Agricultural Engineering stands at the vital intersection of technology, sustainability, and food security. As the global population rises, this field has evolved from simple machinery design into a high-tech powerhouse driving the Fourth Agricultural Revolution.

Agricultural engineers are the architects of modern food systems. Their work ensures that we can "grow more with less" by integrating diverse engineering principles across modern farms and agro-industries.`,
      highlights: [
        "Precision Agriculture & Robotics: Utilizing AI, GPS-guided tractors, and automated harvesting systems to maximize yield and minimize waste.",
        "Sustainable Water Management: Developing advanced irrigation techniques, such as automated drip systems and solar-powered pumps, to conserve critical water resources.",
        "Post-Harvest Technology: Designing smart storage and processing facilities that reduce food spoilage and maintain nutritional integrity.",
        "Renewable Energy Integration: Implementing biomass, solar, and wind energy solutions to create self-sustaining, carbon-neutral farm environments.",
      ],
    },
    thrust: {
      title: "THRUST AREA",
      body: "Thrust Areas of an engineering college department are the priority domains where the department focuses its teaching, research, innovation, industry collaboration, and development activities. These areas usually reflect current technology trends, faculty expertise, and institutional goals.",
      highlights: [
        "Farm Machinery and Power Engineering",
        "Soil and Water Conservation Engineering",
        "Food Processing",
        "Post Harvesting Technology",
        "Irrigation and Drainage Engineering",
        "Renewable Energy",
        "Hydroponics",
      ],
    },
    peo: {
      title: "(PEO's, PO's, PSO'S)",
      body: `PO1: Engineering Knowledge: Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to solve complex engineering problems.

PO2: Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems using first principles of mathematics, natural sciences and engineering sciences.

PO3: Design and Development of solutions: Design solutions for complex engineering problems and systems, components or processes that meet specified needs with appropriate consideration for public health and safety and cultural, societal and environmental considerations.

PO4: Conduct Investigations: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of the information to provide valid conclusions.

PO5: Modern Tool Usage: Create, select and apply appropriate techniques, resources and modern engineering and IT tools to complex engineering activities with an understanding of the limitations.

PO6: The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.

PO7: Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.

PO8: Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.

PO9: Individual and team work: Function effectively as an individual and as a member or leader in diverse teams, and in multidisciplinary settings.

PO10: Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give clear instructions.

PO11: Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.

PO12: Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.

PEO1: To give students a thorough understanding of the principles of mathematics, science, and agriculture engineering so they can solve problems relating to engineering and farmers as well as pursue higher education.
PEO2: To equip graduates with the knowledge they need to function successfully in the tractor, food processing, irrigation, watershed management, and renewable energy fields.
PEO3: To expose students to cutting-edge technology and inspire them to take on new challenges to address societal and national issues through research, entrepreneurship, and skill development.

PSO1: Using knowledge of basic and engineering sciences, identify challenges in agriculture engineering and design sustainable solutions.
PSO2: Embrace proper technology, resources, and modelling to pursue a successful professional career in the agro-industries, government agencies, educational institutions, and research institutes.
PSO3: Take the initiative in the growth of Agriculture Engineering and related businesses for the good of society. Adapt in a world of increasing technologies while maintaining professional ethics.`,
      highlights: [
        "Strong foundational knowledge in agriculture engineering.",
        "Problem-solving with sustainable, technology-driven approaches.",
        "Professional ethics and societal responsibility.",
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
      body: `Adoption of Hydroponics for Sustainable Plant Cultivation

Hydroponics is a soilless method of growing plants using mineral nutrient solutions in water. This modern agricultural approach has been adopted due to rising concerns about land degradation, water scarcity, and food security. The ability to grow crops efficiently in controlled environments makes hydroponics highly relevant today.

The main reasons behind choosing hydroponics are:
• Water Efficiency: Hydroponics uses up to 90% less water than traditional soil farming.
• Space Saving: It allows vertical and compact farming, suitable for urban and small-scale growers.
• Faster Growth: Plants receive direct nutrients and grow faster with higher yields.
• No Soil Needed: Eliminates issues related to soil-borne diseases and pests.
• Climate Control: Plants can be grown year-round regardless of external weather.

We have selected the Nutrient Film Technique (NFT) and Deep Water Culture (DWC) systems for this project.

NFT (Nutrient Film Technique):
• A thin stream of nutrient solution is continuously circulated over the plant roots placed in sloped channels.
• Roots absorb nutrients efficiently while having access to oxygen.
• Best for leafy vegetables like lettuce and spinach.

DWC (Deep Water Culture):
• Plant roots are suspended directly in a nutrient-rich, oxygenated water solution.
• Suitable for fast-growing plants like herbs, tomatoes, and peppers.
• Simple to maintain and ideal for beginners.

Conclusion:
Hydroponics is a future-ready solution that addresses key challenges in agriculture. With proper nutrient management and monitoring, it promises cleaner, faster, and sustainable crop production. By adopting NFT and DWC systems, I aim to explore efficient plant growth and contribute toward innovative farming practices.`,
      highlights: [
        "Water-efficient soilless cultivation.",
        "Ideal for urban and compact farming.",
        "NFT and DWC system implementation.",
        "Faster growth with direct nutrient delivery.",
        "Year-round climate-controlled cultivation.",
        "Reduced soil-borne disease and pest issues.",
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
      body: [
        '<h3 style="font-size:1.1rem;margin:0 0 0.75rem 0;"><strong>Academic Year 2024-25</strong></h3>',
        "",
        '<section data-achievement="student" style="border:1px solid #d1d5db;border-radius:14px;padding:14px 14px 10px 14px;margin-bottom:16px;background:#f8fafc;">',
        '  <h4 style="margin:0 0 10px 0;color:#1e40af;"><strong>Student Achievements</strong></h4>',
        '  <ol style="margin:0;padding-left:18px;line-height:1.65;display:grid;gap:10px;">',
        "    <li><strong>Participants:</strong> Mr. Guruprasd N, Esha, Prajna Shree Jain, Deepika Y, Nihar Acharya, Nikitha, Suma, Thrupthi S Rai, Prapthi N S (3rd year). <strong>Program:</strong> Two-week training on Farm Equipment Design and Manufacturing. <strong>Venue:</strong> University of Agricultural Sciences, Bangalore. <strong>Duration:</strong> 14 Oct 2024 to 26 Oct 2024.</li>",
        "    <li><strong>Participants:</strong> N. Hariyanth Kumar, Mr. Deepak J (3rd year). <strong>Program:</strong> One-week training on Drone Usage in Smart Agriculture. <strong>Venue:</strong> University of Agricultural Sciences, Bangalore. <strong>Duration:</strong> 21 Oct 2024 to 26 Oct 2024.</li>",
        "    <li><strong>Participants:</strong> N. Hariyanth Kumar, Mr. Deepak J (3rd year). <strong>Program:</strong> One-week training on Agriculture Automation and Machine Control. <strong>Venue:</strong> University of Agricultural Sciences, Bangalore. <strong>Duration:</strong> 14 Oct 2024 to 19 Oct 2024.</li>",
        "    <li><strong>Participant:</strong> N. Hariyanth Kumar (3rd year). <strong>Event:</strong> The Viksit Bharat Quiz. <strong>Organizers:</strong> Ministry of Youth Affairs and Sports, MyGov.</li>",
        "    <li><strong>Participant:</strong> Ms. Kasturi (3rd year). <strong>Program:</strong> Drone Usage in Smart Agriculture. <strong>Venue:</strong> University of Agricultural Sciences, Bangalore. <strong>Duration:</strong> 21 Oct 2024 to 26 Oct 2024.</li>",
        "    <li><strong>Participant:</strong> Ms. Kasturi (3rd year). <strong>Program:</strong> Agriculture Automation and Machine Control. <strong>Venue:</strong> University of Agricultural Sciences, Bangalore. <strong>Duration:</strong> 14 Oct 2024 to 19 Oct 2024.</li>",
        "    <li><strong>Participant:</strong> Ms. Kasturi (3rd year). <strong>Event:</strong> ATC/CATC NCC Camp. <strong>Venue:</strong> Canara High School, Mangalore. <strong>Duration:</strong> 13 May 2024 to 23 May 2024.</li>",
        "    <li><strong>Participant:</strong> Ms. Kasturi (3rd year). <strong>Event:</strong> Firing practice. <strong>Venue:</strong> NITK Surathkal. <strong>Date:</strong> 17 Apr 2025.</li>",
        "    <li><strong>Participant:</strong> Aditya Bhat (2nd year). <strong>Workshop:</strong> AI for Students - Build Your Own Generative AI Model. <strong>Organizer:</strong> NXT WAVE. <strong>Date:</strong> 1 Dec 2024.</li>",
        "    <li><strong>Participant:</strong> Mr. Deepak J (2nd year). <strong>Course:</strong> Geospatial Analysis with ArcGIS Online. <strong>Type:</strong> Online non-credit course. <strong>Authorized by:</strong> University of California.</li>",
        "    <li><strong>Participant:</strong> Mr. Deepak J (2nd year). <strong>Course:</strong> Remote Sensing and Mapping for Coral Reef Conservation. <strong>Type:</strong> Online non-credit course. <strong>Authorized by:</strong> University of Queensland.</li>",
        "    <li><strong>Participants:</strong> Mr. Vishwanath D C, Mr. Deepak J, Thrupthi S Rai, Prapthi N S (2nd year). <strong>Training:</strong> 3D Printing / 3D Scanning / Reverse Engineering. <strong>Venue:</strong> First National Conference on Emerging Trends in Engineering and Technology 2024, NIT Puducherry. <strong>Dates:</strong> 15 to 16 Feb 2024.</li>",
        "    <li><strong>Participants:</strong> Mr. Vishwanath D C, Mr. Deepak J, Thrupthi S Rai, Prapthi N S (2nd year). <strong>Training:</strong> Augmented Reality for Design and Manufacturing Applications. <strong>Venue:</strong> First National Conference on Emerging Trends in Engineering and Technology 2024, NIT Puducherry. <strong>Dates:</strong> 15 to 16 Feb 2024.</li>",
        "    <li><strong>Participant:</strong> Mr. Tejas Kumar. <strong>Event:</strong> Open Agri Quiz, NITTE-MANAGE Agribusiness Conclave 2024. <strong>Venue:</strong> Nitte Institute of Technology, Karkala. <strong>Outcome:</strong> Won <strong>Rs. 5,000</strong> cash prize.</li>",
        "    <li><strong>Participants:</strong> Mr. Santhosh M, Mr. Shreeharsha K S, Ms. Monisha S, Ms. Sahana M Gowda (4th year). <strong>Program:</strong> Srishti Incubation Support Program by Yuvaka Sangha. <strong>Outcome:</strong> Selected with mentorship and <strong>Rs. 50,000</strong> funding support.</li>",
        "    <li><strong>Participants:</strong> Mr. Chandan B M, Mr. Santhosh M, Mr. Shreeharsha K S (4th year). <strong>Program:</strong> Buhler Academy specialized education on Rice Milling. <strong>Venue:</strong> Buhler India Private Limited, Bangalore.</li>",
        "    <li><strong>Participant:</strong> Mr. Chandan B M (4th year). <strong>Program:</strong> Three-day online national training on Drone Technology. <strong>Organizer:</strong> Agri Youth Story. <strong>Duration:</strong> 13 to 15 Sep 2024.</li>",
        "    <li><strong>Participant:</strong> Mr. Mansoor P. A. <strong>Event:</strong> VTU State-Level Cross Country Inter-Collegiate Championship. <strong>Venue:</strong> Bahubali College of Engineering, Shravanabelagola. <strong>Duration:</strong> 14 to 16 Jun 2024. <strong>Outcome:</strong> Secured <strong>Third Place</strong>.</li>",
        "    <li><strong>Participant:</strong> Mr. Mansoor P. A. <strong>Event:</strong> Football Inter-Collegiate Mangalore Division Tournament. <strong>Venue:</strong> PA College of Engineering. <strong>Duration:</strong> 22 to 23 May 2024. <strong>Outcome:</strong> Secured <strong>Second Place</strong>.</li>",
        "    <li><strong>Participants:</strong> Mr. Chandan B M, Mr. Mansoor P. A. (4th year). <strong>Event:</strong> Lake Conference 2024.</li>",
        "    <li><strong>Participant:</strong> Ms. Pranusha (2nd year). <strong>Event:</strong> VTU 24th State-Level Youth Festival INTERACT-2025. <strong>Venue:</strong> Global Academy of Technology, Bengaluru. <strong>Duration:</strong> 24 to 27 Mar 2024. <strong>Outcome:</strong> Secured <strong>First Place (Skit)</strong>.</li>",
        "    <li><strong>Participant:</strong> Mr. Tejas Kumar with co-authors Tarun K., Deepak R., Dr. Shashikumar, Dr. Rahul Phatak. <strong>Award:</strong> Best Research Paper. <strong>Paper:</strong> Autonomous Disease Detection and Spraying Agri-Bot. <strong>Event:</strong> GCSH-2025, University of Horticultural Sciences, Bagalkot. <strong>Duration:</strong> 12 to 14 Feb 2025.</li>",
        "    <li><strong>Participant:</strong> Ms. Keerhana M Ram. <strong>Event:</strong> VTU Inter-Collegiate State-Level Swimming Tournament. <strong>Venue:</strong> R.V. Institute of Technology and Management. <strong>Duration:</strong> 19 to 20 Jun 2024. <strong>Outcome:</strong> Secured <strong>Runner-up Third Position</strong>.</li>",
        "    <li><strong>Participant:</strong> Mr. Shreeharsha K S (final year). <strong>Program:</strong> Summer School International Training Program. <strong>Venue:</strong> Konda Laxman Telangana State Horticultural University, Telangana. <strong>Duration:</strong> 15 Jul 2024 to 15 Aug 2024.</li>",
        "    <li><strong>Participant:</strong> Mr. Shreeharsha K S (final year). <strong>Program:</strong> Basics of Remote Sensing and Geographic Information System. <strong>Venue:</strong> AIET. <strong>Duration:</strong> 28 Aug 2024 to 30 Aug 2024.</li>",
        "    <li><strong>Participant:</strong> Mr. Shreeharsha K S (final year). <strong>Program:</strong> Rice Milling training. <strong>Organizer:</strong> Buhler India Limited, Bangalore. <strong>Duration:</strong> 9 Sep 2024 to 20 Sep 2024.</li>",
        "    <li><strong>Participants:</strong> Mr. Santhosh M, Mr. Shreeharsha K S, Ms. Monisha, Ms. Sahana. <strong>Event:</strong> Shreesti Hackathon-24, Atria Institute of Technology, Bangalore. <strong>Date:</strong> May 2024. <strong>Outcome:</strong> Won <strong>Second Place</strong> with <strong>Rs. 15,000</strong>.</li>",
        "    <li><strong>Participant:</strong> Mr. Mansoor P. E. with co-authors Vinay S., Dr. Rahul Phatak. <strong>Award:</strong> Best Research Paper under ICTs and AI in Horticulture. <strong>Paper:</strong> Geospatial Intelligence for Arecanut Suitability Mapping: A Remote Sensing and Machine Learning Approach. <strong>Event:</strong> GCSH-2025, University of Horticultural Sciences, Bagalkot.</li>",
        "  </ol>",
        "</section>",
        "",
        '<section data-achievement="faculty" style="border:1px solid #d1d5db;border-radius:14px;padding:14px 14px 10px 14px;background:#f8fafc;">',
        '  <h4 style="margin:0 0 10px 0;color:#1e40af;"><strong>Faculty Achievements (2024-25)</strong></h4>',
        '  <ol style="margin:0;padding-left:18px;line-height:1.65;display:grid;gap:10px;">',
        "    <li><strong>Faculty:</strong> Dr. Rahul Phatak. <strong>Presentation:</strong> Technological Advancements in Indian Horticulture. <strong>Conference:</strong> GCSH-2025. <strong>Venue:</strong> College of Horticultural Sciences, Bagalkot, Karnataka.</li>",
        "    <li><strong>Faculty:</strong> Dr. Shashikumar and Dr. Rahul Phatak. <strong>Program:</strong> One-week Faculty Train-the-Trainers Program. <strong>Venue:</strong> Buhler India, Bangalore. <strong>Duration:</strong> 12 Feb 2024 to 16 Feb 2024.</li>",
        "    <li><strong>Faculty:</strong> Dr. Rahul Phatak. <strong>Event:</strong> Open Agri Quiz, NITTE-MANAGE Agribusiness Conclave 2024. <strong>Venue:</strong> Nitte Institute of Technology, Karkala. <strong>Outcome:</strong> Won <strong>Rs. 5,000</strong> cash prize.</li>",
        "    <li><strong>Faculty:</strong> Dr. Shashikumar. <strong>Program:</strong> One-month online FDP on Solar PV Plant Design. <strong>Organizer:</strong> Skill Desire in collaboration with AICTE. <strong>Duration:</strong> 1 Jun 2024 to 30 Jun 2024.</li>",
        "    <li><strong>Faculty:</strong> Dr. Shashikumar. <strong>Paper Presented:</strong> Overview of Azolla and Its Importance. <strong>Conference:</strong> 4th International Conference on Recent Trends in Engineering, Technology and Management 2024. <strong>Dates:</strong> 5 to 6 Apr 2024. <strong>Organizer:</strong> Suguna College of Engineering, Coimbatore.</li>",
        "  </ol>",
        "</section>",
      ].join("\n"),
      highlights: [
        "Student achievements are presented first with complete 2024-25 entries.",
        "Faculty achievements are shown in a dedicated 2024-25 section.",
        "Training, research, sports, innovation and awards are documented in one place.",
      ],
    },
    activities: {
      title: "DEPARTMENT ACTIVITIES",
      body: [
        '<div style="display:grid;gap:16px;">',
        '  <div style="border:1px solid #c7d2fe;border-radius:18px;padding:18px 18px 14px 18px;background:linear-gradient(135deg,#eff6ff 0%,#ffffff 100%);box-shadow:0 8px 24px rgba(79,70,229,0.08);">',
        '    <p style="margin:0 0 8px 0;font-size:0.72rem;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#4f46e5;">Learning Environment</p>',
        '    <h4 style="margin:0 0 10px 0;font-size:1.15rem;line-height:1.35;color:#111827;"><strong>Best learning environment to enable students to face real-world agricultural challenges</strong></h4>',
        '    <p style="margin:0;color:#374151;line-height:1.7;">The department provides hands-on exposure, industry-linked learning, and field-oriented training so students are prepared for the realistic challenges faced by farmers in agriculture.</p>',
        "  </div>",
        "",
        '  <div style="border:1px solid #dbeafe;border-radius:18px;padding:18px;background:#ffffff;">',
        '    <p style="margin:0 0 10px 0;font-size:0.72rem;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#2563eb;">Quick Facts</p>',
        '    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;">',
        '      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:14px;">',
        '        <p style="margin:0 0 6px 0;font-weight:800;color:#0f172a;">Faculty Strength</p>',
        '        <p style="margin:0;color:#475569;line-height:1.65;">6 Doctorates and 1 M.Tech faculty.</p>',
        "      </div>",
        '      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:14px;">',
        '        <p style="margin:0 0 6px 0;font-weight:800;color:#0f172a;">Experience</p>',
        '        <p style="margin:0;color:#475569;line-height:1.65;">2 faculty members with more than 30 years of teaching experience.</p>',
        "      </div>",
        '      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:14px;">',
        '        <p style="margin:0 0 6px 0;font-weight:800;color:#0f172a;">Research Output</p>',
        '        <p style="margin:0;color:#475569;line-height:1.65;">30+ research publications in referred journals and conferences, along with 4 patents.</p>',
        "      </div>",
        '      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:14px;">',
        '        <p style="margin:0 0 6px 0;font-weight:800;color:#0f172a;">Innovation</p>',
        '        <p style="margin:0;color:#475569;line-height:1.65;">Hydroponic lab established and a startup-like initiative, VORMICMPOST, was set up in 2024-25.</p>',
        "      </div>",
        "    </div>",
        "  </div>",
        "",
        '  <div style="border:1px solid #e5e7eb;border-radius:18px;padding:18px;background:#ffffff;">',
        '    <p style="margin:0 0 10px 0;font-size:0.72rem;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#0f766e;">Department Highlights</p>',
        '    <ul style="margin:0;padding-left:18px;display:grid;gap:10px;color:#374151;line-height:1.7;">',
        "      <li>Three MOUs signed, including one with Keladi Shivappa Nayak University of Agriculture and Horticulture Science, Shivamogga, one with Mila University, Malaysia, and one with Buhler India Company, Bangalore.</li>",
        "      <li>Students are encouraged to pursue internships through MOUs and academic collaborations, with successful internships completed at KVK Brahmavar, GKVK Bangalore, Hebbuvu Ltd Bangalore, Akshaya Kalpa, SLN Coffee, and Buhler India.</li>",
        "      <li>Students are encouraged to take NPTEL and MOOCS online courses and participate in technical events organized by premier organizations.</li>",
        "      <li>The department has AGRONOVA forum, through which various technical programs and activities are conducted.</li>",
        "      <li>Our department students achieved 4 ranks in VTU Belagavi during their first batch (2021-2025).</li>",
        "    </ul>",
        "  </div>",
        "</div>",
      ].join("\n"),
      highlights: [
        "Strong practical learning environment for real-world agricultural challenges.",
        "6 Doctorates and 1 M.Tech faculty with strong academic depth.",
        "Three active MOUs with agriculture and industry partners.",
        "Internships at KVK, GKVK, Hebbuvu, Akshaya Kalpa, SLN Coffee and Buhler India.",
        "30+ publications, 4 patents and 2 senior faculty with 30+ years of experience.",
        "AGRONOVA forum, NPTEL/MOOCS participation and 4 VTU ranks in the first batch.",
      ],
    },
    newsletter: {
      title: "E-NEWSLETTER",
      body: "Quarterly updates from the department of AGRI.",
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
