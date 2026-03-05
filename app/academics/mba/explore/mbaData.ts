import { DepartmentData, Faculty } from "@/lib/departments";

export const mbaDepartmentData: DepartmentData = {
  id: "mba",
  name: "Department of Mba",
  title: "Department of Mba Engineering",
  vision: `To develop competent and ethical managers and entrepreneurs, sensitive to the environment and culture, responsible to their communities and global in their outlook and approach.`,
  mission:
    `M1:  To provide students with necessary knowledge and skills to enable them to be effective in the field of their specialization
M2: To foster curiosity, broaden their horizons, and inculcate leadership skills to achieve academic rigour, highly grounded in the real world job market
M3: To adopt systems thinking approach to learning to help students excel in a complex and ever-changing global environment
M4: To develop in them a strong commitment to embrace cross cultural diversity and an entrepreneurial mindset.


`,
  hod: {
    name: "Dr. MBA HOD",
    designation: "Professor & HOD - MBA",
    qualification: "Ph.D",
    experience: "15+ Years",
    email: "hodmba@alvas.edu.in",
    phone: "+91 98765 43214",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
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
  faculty: Array.from(
    { length: 10 },
    (_, i): Faculty => ({
      name: `Prof. MBA Faculty ${i + 1}`,
      designation:
        (i + 1) % 3 === 0 ? "Associate Professor" : "Assistant Professor",
      qualification: (i + 1) % 2 === 0 ? "M.Tech, Ph.D" : "M.Tech",
      experience: `${5 + (i + 1)} Years`,
      email: `faculty${i + 1}.mba@alvas.edu.in`,
      phone: `+91 90000 000${(i + 1).toString().padStart(2, "0")}`,
      aoi: "Specialized Research Area",
      photo: `https://images.unsplash.com/photo-${1500000000000 + (i + 1) * 10000 + 4}?auto=format&fit=crop&w=400&q=80`,
      joiningDate: `01-01-20${15 + ((i + 1) % 8)}`,
      details: {
        qualifications: `BE in MBA, M.Tech in Specialization`,
        pastExperience: "5 years in Industry, 5 years in Academics",
        areasOfInterest: "Research, Development, Innovation",
        achievements: "Best Faculty Award, Multiple Publications",
        professionalMembership: "IEEE, CSI Member",
        publications: "10+ International Journals",
        projectsGuided: "15+ UG Projects",
        subjectsTeaching: "Core Subjects",
        researchPublications: "Rmbant Research in Domain (2023)",
        others: "NA",
      },
    }),
  ),
  exploreData: {
    about: {
      title: "ABOUT ELECTRONICS & COMMUNICATION ENGINEERING",
      body: `The Department of Department of Mba Engineering (MBA) is accredited by the National Board of Accreditation, New Delhi (NBA) for a continuous period of nine years, from 01 July 2019 to 30 June 2028, reflecting the department’s commitment to academic excellence and quality education.
The Department of MBA is one of the most sought-after and dynamic branches of engineering, playing a vital role in the technological advancement and overall development of modern society. The department focuses on the design, development, manufacturing, and application of electronic devices, its software, and intelligent systems that drive today’s digital and connected world.
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
      body: `PO1: Apply knowledge of management theories and practices to solve business problems. 
PO2: Foster Analytical and critical thinking abilities for data-based decision making. 
PO3: Ability to develop Value based Leadership ability. 
PO4: Ability to understand, analyze and communicate global, economic, legal, and ethical aspects of business. 
PO5: Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment.




PEO1: Develop management graduates with theoretical knowledge, skills and attitude to be effective managers
PEO2: Transform graduates for leadership and management roles in corporate world and for starting enterprises.
PEO3: Equip graduates with systems and design thinking approach to survive and excel in a complex and ever-changing global environment
PEO4: Imbibe a strong commitment to embrace cross cultural diversity and an entrepreneurial mindset


PSO1: Graduates will be able to understand, analyze and work with numerical and qualitative data and provide desired solutions to the stakeholders
PSO2: Graduates will be able to use technology with ease in their specific domain of expertise
PSO3: Graduates will be endowed with life-long learning skills, critical thinking skills and research outlook
PSO4: Prepare graduates for entrepreneurship, ethical leadership and social value creation
PSO5: Develop graduates for corporate jobs with global outlook
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
      body: "Quarterly updates from the department of MBA.",
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
