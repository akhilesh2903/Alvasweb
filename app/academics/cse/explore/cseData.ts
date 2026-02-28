import { DepartmentData, Faculty } from "@/lib/departments";

export const cseDepartmentData: DepartmentData = {
  id: "cse",
  name: "Computer Science & Engineering",
  title: "Computer Science & Engineering",
  vision: `Centre of excellence to empower the young minds in the field of Computer Science and Engineering with research focus and skill development through transformative education catering to the needs of the society`,
  mission: `M1: To create Learning Environment to enable the students for excellence in the field of Computer Science and Engineering.
M2: To empower the students with necessary skills for solving complex technological problems.
M3: To inculcate Research Culture among Teaching Learning Group by guiding them towards Research activities to bridge the gap between Industry and Academia.
M4: By imbibing the students with human values and ethics through transformative education and make them socially responsible professionals.


`,
  hod: {
    name: "Dr. CSE HOD",
    designation: "Professor & HOD - CSE",
    qualification: "Ph.D",
    experience: "15+ Years",
    email: "hodcse@alvas.edu.in",
    phone: "+91 98765 43214",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    joiningDate: "12-08-2010",
    details: {
      qualifications: "Ph.D in Computer Science",
      pastExperience: "15 years",
      areasOfInterest: "Algorithms, AI",
      achievements: "Best Teacher Award",
      professionalMembership: "IEEE",
      publications: "15 Journals",
      projectsGuided: "12 Projects",
      subjectsTeaching: "Core Computer Science Subjects",
      researchPublications: "Recent Research in Domain (2022)",
      others: "NA",
    },
  },
  faculty: Array.from(
    { length: 10 },
    (_, i): Faculty => ({
      name: `Prof. CSE Faculty ${i + 1}`,
      designation:
        (i + 1) % 3 === 0 ? "Associate Professor" : "Assistant Professor",
      qualification: (i + 1) % 2 === 0 ? "M.Tech, Ph.D" : "M.Tech",
      experience: `${5 + (i + 1)} Years`,
      email: `faculty${i + 1}.cse@alvas.edu.in`,
      phone: `+91 90000 000${(i + 1).toString().padStart(2, "0")}`,
      aoi: "Specialized Research Area",
      photo: `https://images.unsplash.com/photo-${1500000000000 + (i + 1) * 10000 + 4}?auto=format&fit=crop&w=400&q=80`,
      joiningDate: `01-01-20${15 + ((i + 1) % 8)}`,
      details: {
        qualifications: `BE in CSE, M.Tech in Specialization`,
        pastExperience: "5 years in Industry, 5 years in Academics",
        areasOfInterest: "Research, Development, Innovation",
        achievements: "Best Faculty Award, Multiple Publications",
        professionalMembership: "IEEE, CSI Member",
        publications: "10+ International Journals",
        projectsGuided: "15+ UG Projects",
        subjectsTeaching: "Core Subjects",
        researchPublications: "Recent Research in Domain (2023)",
        others: "NA",
      },
    }),
  ),
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
      body: `PO1: Engineering Knowledge: Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to solve complex engineering problems.

PO2: Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems using first principles.

PEO1: Apply mathematical, scientific and engineering skills for solving problems in the area of Computer Science and Engineering.
PEO2: Expose to emerging technologies and excel in industries/higher studies/research.
PEO3: Apply analytical skills in the area of Computer Science and Engineering to become competent and employable.
PEO4: Inculcate Professional ethics, human values, team work for solving engineering problems and contribute to societal needs.`,
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
      body: "Workshops, internships, industrial visits and student projects.",
      highlights: ["Weekly seminars", "Industry visits", "Project showcases"],
    },
    newsletter: {
      title: "E-NEWSLETTER",
      body: "Quarterly updates from the department of CSE.",
      highlights: ["Student projects", "Faculty research", "Events"],
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
