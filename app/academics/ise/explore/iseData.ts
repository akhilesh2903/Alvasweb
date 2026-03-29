import { DepartmentData, Faculty } from "@/lib/departments";

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const iseDepartmentData: DepartmentData = {
  id: "ise",
  name: "Department of Ise",
  title: "Department of Ise Engineering",
  vision: `Centre of excellence to empower the young minds in the field of Department of Ise Engineering with research focus and skill development through transformative education catering to the needs of the society`,
  mission: `M1:	To create Learning Environment to enable the students for excellence in the field of Department of Ise Engineering.
M2:	To empower the students with necessary skills for solving the complex technological problems.
M3:	To inculcate Research Culture among Teaching Learning Group by guiding them towards Research activities to bridge the gap between Industry and Academia.
M4:	By imbibing the students with human values and ethics through transformative education and make them socially responsible professionals.


`,
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
      title: "ABOUT ELECTRONICS & COMMUNICATION ENGINEERING",
      body: `The Department of Department of Ise Engineering (ISE) is accredited by the National Board of Accreditation, New Delhi (NBA) for a continuous period of nine years, from 01 July 2019 to 30 June 2028, reflecting the department’s commitment to academic excellence and quality education.
The Department of ISE is one of the most sought-after and dynamic branches of engineering, playing a vital role in the technological advancement and overall development of modern society. The department focuses on the design, development, manufacturing, and application of electronic devices, its software, and intelligent systems that drive today’s digital and connected world.
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

PO10:	Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations and give and riseive clear instructions.

PO11:	Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.

PO12:	Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.

PEO1:	Apply mathematical, scientific and engineering skills for solving problems in the area of Department of Ise Engineering.
PEO2: Expose to emerging technologies and excel in industries/higher studies/research.
PEO3:	Apply analytical skills in the area of Department of Ise Engineering to become competent and employable.
PEO4:	Inculcate Professional ethics, human values, team work for solving engineering problems and contribute to societal needs.

PSO1: Understand and apply the principles of Department of Ise Engineering in various domains of Analog and Digital systems.

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
      body: "Quarterly updates from the department of ISE.",
      highlights: [
        "Showcase of student innovations.",
        "Faculty research achievements.",
        "Event snapshots.",
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
};
