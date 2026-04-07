import { DepartmentData, Faculty } from "@/lib/departments";

export const mcaDepartmentData: DepartmentData = {
  id: "mca",
  name: "Department of Mca",
  title: "Department of Mca Engineering",
  vision: `Centre of excellence to empower the young minds in the field of Department of Mca Engineering with research focus and skill development through transformative education catering to the needs of the society`,
  mission:
    `M1:	To create Learning Environment to enable the students for excellence in the field of Department of Mca Engineering.
M2:	To empower the students with nmcassary skills for solving the complex technological problems.
M3:	To inculcate Research Culture among Teaching Learning Group by guiding them towards Research activities to bridge the gap between Industry and Academia.
M4:	By imbibing the students with human values and ethics through transformative education and make them socially responsible professionals.


`,
  hod: {
    name: "Dr. MCA HOD",
    designation: "Professor & HOD - MCA",
    qualification: "Ph.D",
    experience: "15+ Years",
    email: "hodmca@alvas.edu.in",
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
      name: `Prof. MCA Faculty ${i + 1}`,
      designation:
        (i + 1) % 3 === 0 ? "Associate Professor" : "Assistant Professor",
      qualification: (i + 1) % 2 === 0 ? "M.Tech, Ph.D" : "M.Tech",
      experience: `${5 + (i + 1)} Years`,
      email: `faculty${i + 1}.mca@alvas.edu.in`,
      phone: `+91 90000 000${(i + 1).toString().padStart(2, "0")}`,
      aoi: "Specialized Research Area",
      photo: `https://images.unsplash.com/photo-${1500000000000 + (i + 1) * 10000 + 4}?auto=format&fit=crop&w=400&q=80`,
      joiningDate: `01-01-20${15 + ((i + 1) % 8)}`,
      details: {
        qualifications: `BE in MCA, M.Tech in Specialization`,
        pastExperience: "5 years in Industry, 5 years in Academics",
        areasOfInterest: "Research, Development, Innovation",
        achievements: "Best Faculty Award, Multiple Publications",
        professionalMembership: "IEEE, CSI Member",
        publications: "10+ International Journals",
        projectsGuided: "15+ UG Projects",
        subjectsTeaching: "Core Subjects",
        researchPublications: "Rmcant Research in Domain (2023)",
        others: "NA",
      },
    }),
  ),
  exploreData: {
    about: {
      title: "ABOUT DEPARTMENT OF MASTER OF COMPUTER APPLICATIONS",
      body: `The MCA program delivers advanced training in software engineering, mobile application development, and web technologies aligned with current IT industry demands.`,
      highlights: [
        "Dynamic and modernized curriculum.",
        "Focus on hands-on practical learning.",
        "Strong industry-academia connections.",
      ],
    },
    thrust: {
      title: "THRUST AREA",
      body: "Advanced Software Engineering, Web Technologies, Database Systems, and Mobile Dev.",
      highlights: [
        "• Core Domain Expertise",
        "• Advanced Research Methodologies",
        "• Industry-Standard Tools",
        "• Multi-disciplinary Projects",
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

PO10:	Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations and give and rmcaive clear instructions.

PO11:	Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.

PO12:	Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.

PEO1:	Apply mathematical, scientific and engineering skills for solving problems in the area of Department of Mca Engineering.
PEO2: Expose to emerging technologies and excel in industries/higher studies/research.
PEO3:	Apply analytical skills in the area of Department of Mca Engineering to become competent and employable.
PEO4:	Inculcate Professional ethics, human values, team work for solving engineering problems and contribute to societal needs.

PSO1: Understand and apply the principles of Department of Mca Engineering in various domains of Analog and Digital systems.

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
      body: "Quarterly updates from the department of MCA.",
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
