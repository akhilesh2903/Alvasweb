import { DepartmentData, Faculty } from "@/lib/departments";

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const cseDepartmentData: DepartmentData = {
  id: "cse",
  name: "Computer Science & Engineering",
  title: "Computer Science & Engineering",
  vision:
    "Engineering competent, excellent professionals by transforming the knowledge and computing skills to individuals through modern innovative tools and techniques",
  mission: `M1: To produce skilled, creative software developers through rigorous training.
M2: To conduct specific technical courses to keep abreast to the latest technological developments and transformations in the domain.
M3: To implement the ideas of research and innovations in interdisciplinary domains.
M4: To establish Industry-Institute Interaction programs to enhance the skills of employability and entrepreneurship.`,
  hod: {
    name: "Dr. Manjunath Kotari",
    designation: "Professor & HOD - CSE",
    qualification: "Ph.D",
    experience: "15+ Years",
    email: "hodcse@alvas.edu.in",
    phone: "+91 98765 43214",
    photo: imageProxyUrl(
      "https://drive.google.com/uc?export=view&id=1VZ74s9elk5-LErpzJ5wwWly1YVQrCzZR",
    ),
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
PO10: Project Management and Finance: Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.
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
      body: "From community outreach to technical workshops, the department regularly conducts activities that build awareness, skills, and responsible digital citizenship.",
      highlights: [
        "Over 50 participants actively engaged and shared experiences.",
        "Participants learned practical red flags and safe digital habits.",
        "Encouraged prompt reporting and community-led cyber awareness.",
      ],
      entries: [
        {
          title: "Cyber Security Awareness Talk",
          topic: "On various rising cyber threats",
          date: "06-09-2025",
          venue: "Rotary Club Moodabidre",
          audience: "Members of Rotary Club and local community",
          conductedBy: "Rotary Club Moodabidre Cybersecurity Awareness Team",
          overview:
            "A Cybersecurity Awareness Talk was conducted at the Rotary Club, Moodabidre to spread knowledge about the rising digital threats affecting individuals and communities in coastal Karnataka. The talk aimed to empower people to recognize cyber frauds, understand local trends in cybercrime, and adopt safety measures in their day-to-day digital activities. The awareness program highlighted real-world cases from Moodabidre, Bantwala, Mangalore, and Udupi, emphasizing the importance of digital safety in native and rural areas.",
          objectives: [
            "To raise awareness about increasing cyber threats in local communities.",
            "To explain concepts of phishing, vishing, and social engineering with real examples.",
            "To share recent cyber fraud statistics, including regional loss figures.",
            "To educate participants on best practices for online safety and secure digital habits.",
            "To demonstrate practical methods for detecting and avoiding scams.",
            "To train participants on identifying red flags in calls, messages, and emails.",
            "To encourage the community to report incidents promptly to the cybercrime helpline.",
            "To empower people to act as “cyber ambassadors” in their families and neighborhoods.",
          ],
          impact:
            "Over 50 participants actively engaged in the session. Attendees shared personal experiences of being targeted by scams. Elderly citizens gained clarity on how to verify suspicious calls. Young participants pledged to spread awareness among peers.",
          conclusion:
            "The cybersecurity awareness session at Rotary Club Moodabidre addressed both global and local cyber threats, provided real-life examples with recent loss figures, and equipped participants with practical skills for online safety. The program created a network of individuals ready to spread awareness and reinforced the role of community-driven cybersecurity initiatives.",
          tags: [
            "Community Outreach",
            "Cybersecurity",
            "Awareness",
            "Phishing",
            "Vishing",
            "Social Engineering",
          ],
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
