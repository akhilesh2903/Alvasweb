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
