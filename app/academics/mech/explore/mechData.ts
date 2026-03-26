import { DepartmentData, Faculty } from "@/lib/departments";

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
    photo:
      "https://lh3.googleusercontent.com/pw/AP1GczN2BKovvlJ5kRKtqzqceSkCwbVtpAtZ8JWQGqAh7Q_XeL6v9nCn7B4zY6J8z_vY0hUYTeRlDSyDB3eESBhoWQO4p4qxdErc_ye6lLBcRyJ4t60dPqG0VS-0hTJ6vCVNum9mo012MnTlD6j4PPaL8q2lsw=w600-h800-p",
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
      name: `Prof. MECH Faculty ${i + 1}`,
      designation:
        (i + 1) % 3 === 0 ? "Associate Professor" : "Assistant Professor",
      qualification: (i + 1) % 2 === 0 ? "M.Tech, Ph.D" : "M.Tech",
      experience: `${5 + (i + 1)} Years`,
      email: `faculty${i + 1}.mech@alvas.edu.in`,
      phone: `+91 90000 000${(i + 1).toString().padStart(2, "0")}`,
      aoi: "Specialized Research Area",
      photo: `https://images.unsplash.com/photo-${1500000000000 + (i + 1) * 10000 + 4}?auto=format&fit=crop&w=400&q=80`,
      joiningDate: `01-01-20${15 + ((i + 1) % 8)}`,
      details: {
        qualifications: `BE in MECH, M.Tech in Specialization`,
        pastExperience: "5 years in Industry, 5 years in Academics",
        areasOfInterest: "Research, Development, Innovation",
        achievements: "Best Faculty Award, Multiple Publications",
        professionalMembership: "IEEE, CSI Member",
        publications: "10+ International Journals",
        projectsGuided: "15+ UG Projects",
        subjectsTeaching: "Core Subjects",
        researchPublications: "Rmechnt Research in Domain (2023)",
        others: "NA",
      },
    }),
  ),
  exploreData: {
    about: {
      title: "ABOUT ELECTRONICS & COMMUNICATION ENGINEERING",
      body: `The Department of Department of Mech Engineering (MECH) is accredited by the National Board of Accreditation, New Delhi (NBA) for a continuous period of nine years, from 01 July 2019 to 30 June 2028, reflecting the department’s commitment to academic excellence and quality education.
The Department of MECH is one of the most sought-after and dynamic branches of engineering, playing a vital role in the technological advancement and overall development of modern society. The department focuses on the design, development, manufacturing, and application of electronic devices, its software, and intelligent systems that drive today’s digital and connected world.
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
      body: "Quarterly updates from the department of MECH.",
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
