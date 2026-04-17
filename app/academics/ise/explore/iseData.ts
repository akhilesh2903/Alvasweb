import { DepartmentData, Faculty } from "@/lib/departments";

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const iseDepartmentData: DepartmentData = {
  id: "ise",
  name: "Department of Information Science and Engineering",
  title: "Department of Information Science and Engineering",
  vision: `To impart quality learning and nurture students to become successful technocrats by achieving excellence in Information Science and Engineering for addressing the evolving needs of the industry as well as society.`,
  mission: `M1: To provide quality technical education and research training for preparing competent professionals in the Information Technology field.
M2: To provide suitable infrastructure and an environment that inculcates best engineering practices for the socio-economic development of society.
M3: To foster students to become successful technocrats to meet global competency in the IT industry.
M4: To develop entrepreneurship skills with active research and innovation by inculcating ethical values among students.`,
  hod: {
    name: "Dr. Ravindra B V",
    designation: "Professor & HOD - ISE",
    qualification: "Ph.D",
    experience: "15+ Years",
    email: "hodise@alvas.edu.in",
    phone: "+91 98765 43214",
    photo: imageProxyUrl(
      "https://drive.google.com/uc?export=view&id=1bW8ikKQ7x61DvLBB8q9lyMLyvXBwqSjf",
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
      name: "Dr. Rachana P",
      designation: "Associate Professor",
      qualification: "B.Tech, M.E., Ph.D",
      experience: "19 Years",
      email: "rachana@aiet.org.in",
      phone: "+91 90000 00001",
      aoi: "Computer Networks, Machine Learning",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1sz92ARG7Hw72i20pOA1wtVK9uj-wQEiR",
      ),
      joiningDate: "18-06-2024",
      details: {
        qualifications: "B.Tech, M.E., Ph.D",
        pastExperience: "Associate Professor at NHCE and SJEC",
        areasOfInterest: "Networking, AI",
        achievements: "Multiple Research Publications",
        professionalMembership: "IEEE",
        publications: "10+ Journals",
        projectsGuided: "15+ Projects",
        subjectsTeaching: "Computer Networks",
        researchPublications: "Research in ML (2023)",
        others: "NA",
      },
    },
    {
      name: "Mr. Pradeep Nayak",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech",
      experience: "9 Years",
      email: "nayak.pradeepk@gmail.com",
      phone: "+91 90000 00002",
      aoi: "Software Engineering, Cloud Computing",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1ighmSxPyB1H3r79KhZCH86dIwmfSb5N5",
      ),
      joiningDate: "01-01-2015",
      details: {
        qualifications: "B.E., M.Tech",
        pastExperience: "9 years in Academics",
        areasOfInterest: "Software Engineering",
        achievements: "Industry Certifications",
        professionalMembership: "CSI",
        publications: "5+ Papers",
        projectsGuided: "10+ Projects",
        subjectsTeaching: "Software Testing",
        researchPublications: "Cloud Trends (2022)",
        others: "NA",
      },
    },
    {
      name: "Mr. Nagesh U B",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech",
      experience: "14 Years",
      email: "nageshub@aiet.org.in",
      phone: "+91 90000 00003",
      aoi: "Database Management, Data Science",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1YhZ0M-WMpOC8IxWAyLzSHr4z-mIHVhMh",
      ),
      joiningDate: "01-08-2020",
      details: {
        qualifications: "B.E., M.Tech",
        pastExperience: "Canara Engineering College, VCET",
        areasOfInterest: "Data Science",
        achievements: "Senior Assistant Professor",
        professionalMembership: "ISTE",
        publications: "8+ Journals",
        projectsGuided: "12+ Projects",
        subjectsTeaching: "DBMS",
        researchPublications: "Data mining techniques (2021)",
        others: "NA",
      },
    },
    {
      name: "Mr. Mounesh A",
      designation: "Assistant Professor",
      qualification: "B.E., M.Tech, (Ph.D)",
      experience: "11 Years",
      email: "mounesh@aiet.org.in",
      phone: "+91 90000 00004",
      aoi: "Artificial Intelligence, Algorithms",
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1uF89svcpIW1MKdJNlu0VgD-JSB7sPutC",
      ),
      joiningDate: "01-01-2013",
      details: {
        qualifications: "B.E. (CSE), M.Tech (CSE)",
        pastExperience: "11 years in Academics",
        areasOfInterest: "AI/ML",
        achievements: "Pursuing Ph.D",
        professionalMembership: "IEEE",
        publications: "7+ Journals",
        projectsGuided: "14+ Projects",
        subjectsTeaching: "Design & Analysis of Algorithms",
        researchPublications: "AI optimization (2023)",
        others: "NA",
      },
    },
  ],
  exploreData: {
    about: {
      title: "ABOUT DEPARTMENT OF INFORMATION SCIENCE & ENGINEERING",
      body: `The Department was started in the year 2008 with an intake of 60 for the undergraduate program. The course has become popular among students because of their achievements and academic rigor. The department has well-qualified, experienced, and committed faculty members to provide quality industry-tuned education. Faculty members regularly participate in workshops, faculty development programs, and seminars to stay updated with cutting-edge technologies. They also publish research papers in renowned journals and conferences. The department has well-equipped laboratories with state-of-the-art infrastructure, including fully networked computer systems with latest configurations and software for application and development areas. The department is affiliated with Visvesvaraya Technological University (VTU), Belagavi.`,
      highlights: [
        "Established in 2008 with an intake of 60 for UG program.",
        "Experienced faculty with active participation in FDPs, workshops, and research publications.",
        "State-of-the-art, fully networked labs and latest software tools; affiliated to VTU, Belagavi.",
      ],
    },
    thrust: {
      title: "THRUST AREA",
      body: "Cloud Computing, Algorithm Design, Database Management, and System Architecture.",
      highlights: [
        "• Core Domain Expertise",
        "• Advanced Research Methodologies",
        "• Industry-Standard Tools",
        "• Multi-disciplinary Projects",
      ],
    },
    peo: {
      title: "(PEO's, PO's, PSO'S)",
      body: `PEOs

PEO1: Apply the principles of Information Science and Engineering and fundamentals of mathematics to provide solutions to societal needs.
PEO2: Pursue higher education and engage in research to meet the challenges of cutting-edge technologies.
PEO3: Design and develop reliable software systems to satisfy industrial needs through multidisciplinary projects.
PEO4: Work in various IT-related fields and contribute to society.

PSOs

PSO1: Design, develop, test, and maintain software systems that satisfy the needs of the IT industry.
PSO2: Apply the knowledge of computer networking, databases, and computation to provide solutions to real-world engineering problems.
PSO3: Develop programs and projects using modern software tools for industrial and scientific applications.`,
      highlights: [
        "Strong software design and development orientation.",
        "Emphasis on research, higher education, and multidisciplinary projects.",
        "Industry-ready IT skills with societal and ethical responsibility.",
      ],
    },
    syllabus: {
      title: "SCHEME & SYLLABUS",
      body: "Latest autonomous curriculum with advanced elective courses in specialization tracks.",
      highlights: [
        "Autonomous credit-based system.",
        "Emphasis on project-oriented learning.",
        "Continuous curriculum refinement aligned with industry needs.",
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
      body: `COMPUTER LABORATORIES

The Department is well equipped with hardware as well as software facilities. The department has more than 850 computer systems and fully air-conditioned programming labs, internet laboratories. The labs consist of advanced i5, i3, Dual Core and Core 2 Duo, 4th, 6th and 7th generation Lenovo and Dell systems with Ubuntu and Fedora Linux operating systems and servers with Windows Server 2003. Hardware facilities supporting the labs are equipped with Assembly kits, Interfacing kit, Emulators, Cross-compilers, Micro-controller, and DSP kit.

All the labs are LAN connected with licensed software packages related to latest global techniques. A 400 Mbps leased line internet with Wi-Fi facility is provided so that the students can develop and sharpen their technical skills. Students have opportunities to work on live projects received from reputed national and international companies. The department has the following labs with latest software and configurations:

Computer Programming Lab
Data Structure Lab
Electronic Circuits & Logic Design Lab
Algorithms Lab
Micro Processor Lab
Database Application Lab
System Software & Operating System Lab
Computer Graphics & Visualization Lab
Networks Lab
Web Programming Lab
Project Lab
Internet Lab
Intel Intelligence Lab
Apple Lab

Computing facility labs have software and utilities such as Windows Vista, Windows Advanced Server 2003, Windows XP, Windows 2000 Professional, Windows 98, Red Hat Linux 9.0, Ubuntu LTS 14.0, Fedora 22, LibreOffice, Oracle 8i, MS Visual Studio, Borland C++, Turbo C++, assemblers like MASM and TASM, etc.`,
      highlights: [
        "More than 850 computer systems across programming and internet laboratories.",
        "400 Mbps leased line internet with Wi-Fi and LAN-connected labs.",
        "Wide range of labs, software packages, and live-project support.",
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
      body: "TechGeekz, the ISE student forum, organizes intercollegiate technical events in association with AIET student chapters to build leadership, teamwork, and professional technical competence.",
      highlights: [
        "Intercollegiate events organized through TechGeekz forum.",
        "Strong participation from multiple institutions.",
        "Leadership, teamwork, and technical problem-solving focus.",
      ],
      entries: [
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1rcxRikSWANSBw42IRsWigk52Y-ZE4wlp",
            ),
            alt: "Alvas Appathon 2K19 thumbnail",
          },
          title: "Alvas Appathon ",
          topic:
            "Intercollegiate technical event by TechGeekz in association with AIET-ISE Student Chapter (KA-136)",
          date: "14 October 2019",
          venue: "AIET, Moodbidri",
          audience: "Intercollegiate student teams and ISE forum members",
          conductedBy:
            "TechGeekz - Student Forum of Information Science and Engineering Department",
          overview:
            "Alvas-Appathon 2K19 was organized as an intercollegiate technical platform to showcase innovation, app-building ability, and collaborative problem solving. The event was inaugurated by Dr. Dattathreya G, Dr. Praveen J, Mr. Jayantkumar A Rathod, Mr. Sudarshana K, and Mr. Vishak Amin. Ms. Gangothri NV hosted the event and Mr. Vishak Amin presented the scheduled activities.",
          objectives: [
            "Provide a competitive platform for app-based innovation.",
            "Encourage intercollegiate collaboration and technical exposure.",
            "Strengthen event leadership and organization skills among students.",
            "Promote design thinking and implementation under time constraints.",
          ],
          impact:
            "Twenty-eight teams participated from various colleges. First prize was won by Mr. Charan and Ms. Raksha of SDMIT Ujire, while second prize was won by Ms. Ramyashree Shetty and Ms. Spoorthi of AIET Moodbidri.",
          conclusion:
            "The event successfully demonstrated the technical capability and coordination strength of TechGeekz while creating meaningful intercollegiate engagement. ",
          tags: ["TechGeekz", "Appathon", "Intercollegiate", "Innovation"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1-hUXnVkkLajYeToiHKDSPny9XMg-qVjC",
            ),
            alt: "TechCrunch 2K19 thumbnail",
          },
          title: "TechCrunch ",
          topic:
            "Intercollegiate technical event by TechGeekz in association with AIET-ISTE Student Chapter (KA-136)",
          date: "6 September 2019",
          venue: "AIET, Moodbidri",
          audience:
            "More than 130 participants from various higher educational institutions",
          conductedBy:
            "TechGeekz - Forum of Information Science and Engineering Department",
          overview:
            "TechCrunch 2K19 was inaugurated in the presence of Dr. Peter Fernandes, Dr. Praveen J, Mr. Jayantkumar A Rathod, Mr. Sudarshana K, and Mr. Rakesh MR. In the presidential address, Dr. Peter Fernandes highlighted responsibility, critical thinking, programming, and innovation through student-led events. Mr. Vivek Alva addressed the gathering on fundamental engineering knowledge, application skills, and professional attitude.",
          objectives: [
            "Expose students to technical competition and teamwork.",
            "Develop critical thinking and problem-analysis ability.",
            "Build confidence in communication and technical presentation.",
            "Nurture responsible and industry-ready technicians.",
          ],
          impact:
            "The event attracted more than 130 participants. First prize in TechCrunch 2K19 was won by Mr. Subramanya M and Mr. Sanath L S from SDMIT Ujire, second prize by Mr. K Samarth and Mr. Elton G Pinto of SCEM Mangalore, and technical group discussion first prize by Mr. Faheem Ahammed and Mr. Asuthosh Kumar from SMVITM Udupi.",
          conclusion:
            "TechCrunch 2K19 reinforced the department's commitment to student-led technical culture and intercollegiate excellence. ",
          tags: [
            "TechGeekz",
            "TechCrunch",
            "Technical Event",
            "Student Chapter",
          ],
        },
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
      body: "Forum activities under Techgeekz combine social commitment, cultural heritage, and technology awareness to develop responsible and community-oriented engineers.",
      highlights: [
        "Activity cards now open detailed event popups for easier browsing.",
        "Initiatives include agriculture-awareness and charitable fundraising.",
        "Events blend cultural participation with social and technical impact.",
      ],
      entries: [
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1RDGVX4u9_nug0zuACrF1azrh2zBY0BV3",
            ),
            alt: "AVANI - KESARD ONJI DINA activity thumbnail",
          },
          title: "AVANI - KESARD ONJI DINA",
          topic:
            "Technology for agriculture awareness through cultural and educational engagement",
          date: "Department Forum Activity",
          venue: "AIET Campus, Moodbidri",
          audience: "ISE students, faculty, and invited guests",
          conductedBy:
            "Department of Information Science and Engineering in collaboration with Techgeekz Student Forum",
          overview:
            "AVANI - KESARD ONJI DINA was hosted to raise awareness about the impact of technology on agriculture. Inspired by the challenges faced by rural farmers, the event highlighted issues such as climate unpredictability, crop selection, and limited technological accessibility. It created an educational and cultural platform to connect traditional agriculture with modern IT-driven solutions and aligned with AIET's mission of community-centric education.",
          objectives: [
            "Sensitize students to real-world agricultural challenges in rural India.",
            "Promote practical use of IT for sustainable farming support.",
            "Encourage empathy, responsibility, and innovation for community development.",
            "Create awareness on how technology can improve crop planning and productivity.",
            "Integrate local cultural identity with modern engineering problem solving.",
          ],
          impact:
            "The event helped students understand rural farming realities, triggered meaningful discussions on technology adoption in agriculture, and strengthened student commitment toward socially relevant engineering solutions.",
          conclusion:
            "The activity successfully bridged cultural heritage and technological awareness. Through procession, interactions, and thematic engagement, participants gained deeper insight into rural issues and their role in addressing them as future engineers. ",
          tags: [
            "Forum Activity",
            "Agriculture",
            "Technology Awareness",
            "Community",
            "Tulu Culture",
          ],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1oCdrvYVa33WxoHGZ-YXcZC4fh2PTco37",
            ),
            alt: "Alva's Film Fest 2022-23 activity thumbnail",
          },
          title: "Alva's Film Fest 2022-23",
          topic: "Charitable fundraising event through movie screenings",
          date: "Nov-Dec 2022 (Six weekends)",
          venue: "AIET Campus, Moodbidri",
          audience: "Students, faculty, and campus community",
          conductedBy:
            "Department of Information Science and Engineering Forum - Techgeeks",
          overview:
            "Alva's Film Fest charitable movie show was organized to raise funds for a social cause through entertainment. The event ran on six weekends from November to December 2022, with popular socially relevant films screened on two screens. The inauguration was led by Dr. Peter Fernandes, Principal, in the presence of Prof. Sudheer Shetty, forum coordinators, student forum office bearers, staff, and students.",
          objectives: [
            "Raise charitable funds through engaging and inclusive campus activity.",
            "Promote student-led social responsibility initiatives.",
            "Use entertainment as a platform for meaningful contribution.",
            "Strengthen teamwork and leadership through forum coordination.",
          ],
          impact:
            "The initiative collected Rs 1,06,000 and donated the amount to the International Cultural Jamboree of Scouts and Guides organized at Alva's Campus, demonstrating strong student participation and social commitment.",
          conclusion:
            "The Film Fest stands out as a successful example of how student forums can convert creative engagement into measurable social impact. ",
          tags: [
            "Forum Activity",
            "Charity",
            "Fundraising",
            "Student Leadership",
          ],
        },
      ],
    },
    newsletter: {
      title: "E-NEWSLETTER",
      body: "Quarterly updates from the department of ISE.",
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
