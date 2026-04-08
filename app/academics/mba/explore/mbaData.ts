import { DepartmentData, Faculty } from "@/lib/departments";

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const mbaDepartmentData: DepartmentData = {
  id: "mba",
  name: "Department of Business Administration",
  title: "Master of Business Administration (MBA)",
  vision: `To develop competent and ethical managers and entrepreneurs, sensitive to the environment and culture, responsible to their communities and global in their outlook and approach.`,
  mission:
    `M1:  To provide students with necessary knowledge and skills to enable them to be effective in the field of their specialization
M2: To foster curiosity, broaden their horizons, and inculcate leadership skills to achieve academic rigour, highly grounded in the real world job market
M3: To adopt systems thinking approach to learning to help students excel in a complex and ever-changing global environment
M4: To develop in them a strong commitment to embrace cross cultural diversity and an entrepreneurial mindset.


`,
  hod: {
    name: "Mrs. Priya Sequiera",
    designation: "HOD, Sr. Asst. Professor",
    qualification: "MBA",
    experience: "7 Years (AIET)",
    email: "priyasequiera@aiet.org.in",
    phone: "NA",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    joiningDate: "22-May-2019",
    message: `Welcome to the Master of Business Administration (MBA) program. We are committed to nurturing technical excellence and professional ethics in our students.

Leadership, to me, is not about position — it is about responsibility. As the Head of the MBA Department at Alva's Institute of Engineering & Technology, I consider it my mission to create an ecosystem where students do not just earn a management degree, but evolve into confident, ethical, and industry-ready professionals.

Our MBA programme, now functioning under autonomous status, gives us the academic freedom to design a curriculum that truly responds to the needs of the present era. We have carefully framed our syllabus to integrate emerging business trends, analytics, technology-driven decision-making, and experiential learning. I strongly believe that management education must be dynamic, practical, and transformational — not merely theoretical.

Over the years, my focus has been on bridging the gap between classroom learning and corporate expectations. Our strong placement record reflects this commitment. Reputed organizations such as EY, KPMG, Grant Thornton, London Stock Exchange Group (LSEG), WITHUM and Tata Consultancy Services (TCS) regularly recruit from our campus. These achievements are not accidental — they are the result of systematic, industry-level training and continuous mentoring.

We have institutionalized structured training initiatives such as ITTC, soft skills development, aptitude training, and professional certification courses including Power BI, Digital Marketing, NISM, and Advanced Excel. One of the most transformative initiatives is our One-Month Residential Boot Camp, where students undergo intensive, immersive training while staying in the hostel. This experience not only enhances technical and corporate competencies but also builds discipline, resilience, adaptability, and the courage to step out of their comfort zones.

My philosophy is simple — students must be challenged, guided, and empowered. I believe in nurturing self-belief, ethical decision-making, lifelong learning, and leadership with social responsibility. Every student who enters this department carries potential; our role is to refine it into excellence.

I invite you to be part of our MBA family — where knowledge meets discipline, opportunity meets preparation, and ambition meets achievement.

Let us work together to create leaders who do not just succeed, but make a difference.`,
    details: {
      qualifications: "• MBA, St. Joseph's Engineering & Technology, Mijar (2010)",
      pastExperience: "• Founder, Ornamental Fish Culturing & Breeding Unit (2011-Current)\n• Assistant Professor, Milagres Degree College (2013-2015)\n• Business Assistant, Mitsui & Co. Kuwait (2006-2008)\n• Secretary, Al-Wegayan Law Firm, Kuwait (2003-2006)",
      areasOfInterest: "• Marketing\n• Agribusiness\n• Economics\n• Women Empowerment\n• Rural Development\n• E-Waste Management",
      achievements: "• Best Outgoing Student of MBA Batch 2008–2010\n• VTU BOE Member 2023-24\n• BOE Member St. Joseph’s Engineering College 2025-26",
      professionalMembership: "VTU BOE Member",
      publications: "7",
      projectsGuided: "NA",
      subjectsTeaching: "• Marketing Management\n• Managerial Economics\n• Consumer Behaviour\n• Service Marketing\n• Organization Behaviour\n• Risk Management\n• Brand Management\n• Research Methodology",
      researchPublications: "• Challenges of women entrepreneurs (2022)\n• Impact of Social Media (2024)\n• Jomo in Digital Well Being (2024)\n• Consumer Behaviour online food (2024)\n• Sustainability of EV (2024)\n• Mediating role of human behavior (2024)\n• Sustainability of EV (2025)",
      others: "NA",
    },
  },
  faculty: [
    {
      name: "Dr. Vishnu Prasanna",
      designation: "Professor",
      qualification: "MBA, MCA, MBL, MA, MS, PhD",
      experience: "5 Years (AIET), 25 Years (Total)",
      email: "drvpkn@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      joiningDate: "01-10-2020",
      details: {
        qualifications: "• PhD (Horticulture) - UAS Bangalore (Gold Medal 1997)\n• MBA - IGNOU\n• MCA - IGNOU\n• MBL - NLSIU Bangalore\n• MA (Economics) - Mangalore University\n• MS (Counselling) - Kuvempu University\n• B.Sc (Agri) - UAS Bangalore",
        pastExperience: "• Dean, MSNM Besant Institute (2018-2020)\n• Independent consultant for ADB project\n• Professor and Head, Srinivas School of Management (2013-2017)\n• Professor and Director, KVG College of Engineering (1999-2013)",
        areasOfInterest: "Finance",
        achievements: "• University Gold Medal for PhD\n• Senior Resident Merit Scholarship (M.Sc)\n• Fellow Member of ICAI\n• Served as BOS/BOE member for VTU, Nitte University, St. Aloysius",
        professionalMembership: "• Fellow Member of Institute of Cost Accountants of India\n• VTU BOS/BOE member",
        publications: "13",
        projectsGuided: "NA",
        subjectsTeaching: "• Financial Management\n• Advanced Financial Management\n• Security Analysis and Portfolio Management\n• International Financial Management\n• Business Statistics\n• Operations Research\n• Managerial Economics",
        researchPublications: "NA",
        others: "NA",
      },
    },
    {
      name: "Dr. Catherine N",
      designation: "Professor",
      qualification: "M.Com, M.Phil, MBA, PhD",
      experience: "4 Years 5 Months (AIET), 30+ Years (Total)",
      email: "catherine@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      joiningDate: "15-09-2021",
      details: {
        qualifications: "• PhD (Commerce) - MSU Tirunelveli (2014)\n• MBA (IB) - Mangalore University (2017)\n• M.Phil - MKU Madurai (2005)\n• M.Com - University of Mysore (1991)\n• B.Com - Teresian College (1989)",
        pastExperience: "• HOD PG Commerce, St. Agnes (2014-2021)\n• Principal, Colaco College (2008-2013)\n• Lecturer, St. Agnes College (1991-2008)",
        areasOfInterest: "• Finance\n• Banking\n• Research\n• Women's issues\n• Entrepreneurship and Innovation",
        achievements: "• 30 Publications\n• 2 PhDs Guided (completed), 3 ongoing",
        professionalMembership: "NA",
        publications: "30",
        projectsGuided: "2 Completed, 3 Ongoing (PhD)",
        subjectsTeaching: "• Accounting\n• Strategic Cost Management\n• Financial Management\n• Global Financial Management\n• Direct and Indirect Tax\n• ITTC",
        researchPublications: "13 listed publications (Springer, IJCRT, IJRAR, IJIRES, etc.)",
        others: "NA",
      },
    },
    {
      name: "Dr. Guruprasad Pai B",
      designation: "Assistant Professor",
      qualification: "B.E, MBA, PhD",
      experience: "6 Years (AIET), 15 Years (Total)",
      email: "guruprasadpai@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      joiningDate: "19-02-2020",
      details: {
        qualifications: "• PhD - VTU\n• MBA - VCET Puttur\n• B.E (Mech) - VCET Puttur",
        pastExperience: "• Srinivas Institute of Technology (9 years)",
        areasOfInterest: "• Marketing\n• HR",
        achievements: "• Best Professor in HRM (2021)\n• Young Achiever Award (2022)\n• Best Paper Award (2025)",
        professionalMembership: "NA",
        publications: "9",
        projectsGuided: "Nil",
        subjectsTeaching: "• Marketing Management\n• Corporate Strategy\n• Research Methodology and IPR\n• Sales and Retail Management\n• Services Marketing\n• Public Relations\n• Integrated Marketing Communication\n• Emerging Exponential Technology",
        researchPublications: "9 listed publications (Journal of Propulsion Technology, Shodh Sanchar Bulletin, etc.)",
        others: "NA",
      },
    },
    {
      name: "Dr. Vijay Joshi",
      designation: "Sr. Assistant Professor",
      qualification: "BBA, MBA, PhD",
      experience: "1 Year (AIET), 16 Years (Total)",
      email: "vijayjoshi@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      joiningDate: "06-01-2025",
      details: {
        qualifications: "• PhD - Karnatak University Dharwad (2022)\n• MBA - KLS IMER Belgaum (2006)\n• BBA - ASP College Vijayapura (2004)",
        pastExperience: "• 15 years of industry and academic experience",
        areasOfInterest: "• Economics\n• Financial Management\n• Investment Analysis\n• Financial Markets\n• Derivatives\n• Research Methodology",
        achievements: "13 Publications",
        professionalMembership: "NA",
        publications: "13",
        projectsGuided: "-",
        subjectsTeaching: "• Economics for Decision Making\n• Financial Management\n• Global Financial Management\n• Investment Analysis and Portfolio Management",
        researchPublications: "13 listed publications (IJES, JRA, IJCRT, JETIR, etc.)",
        others: "NA",
      },
    },
    {
      name: "Mr. Johnson Fernandes",
      designation: "Senior Asst. Professor",
      qualification: "MBA",
      experience: "14 Years (AIET), 15 Years (Total)",
      email: "johnsonfernandes@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      joiningDate: "24-07-2012",
      details: {
        qualifications: "MBA",
        pastExperience: "• Capgemini India Pvt. Ltd. (1 year)",
        areasOfInterest: "• HRM\n• Digital Marketing",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "2",
        projectsGuided: "NA",
        subjectsTeaching: "• Economics for Managers\n• Digital Marketing\n• HRM\n• Research Methodology",
        researchPublications: "• Psychological Safety and Team Learning (2025)",
        others: "NA",
      },
    },
    {
      name: "Mrs. Harshitha V Shetty",
      designation: "Assistant Professor",
      qualification: "BBM, MBA (PhD)",
      experience: "4 Years (AIET), 13 Years (Total)",
      email: "harshithashetty@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      joiningDate: "09-11-2021",
      details: {
        qualifications: "• BBM - Alva's College (2008)\n• MBA - AJIM (2010)\n• Pursuing PhD at Nitte University",
        pastExperience: "• Karavali Institute of Technology (8 years)\n• AJIM (1 year)",
        areasOfInterest: "• HR\n• Finance",
        achievements: "• 2 Best Paper Awards (2023, 2025)",
        professionalMembership: "NA",
        publications: "5",
        projectsGuided: "NA",
        subjectsTeaching: "• Management and Organisational Behaviour\n• Human Resource Management\n• Research Methodology and IPR\n• Banking and Financial services\n• Recruitment and selection\n• Risk Management and Insurance",
        researchPublications: "5 listed publications (Educational Administration, Anveshna, etc.)",
        others: "NA",
      },
    },
    {
      name: "Mr. Ashok Rao",
      designation: "Assistant Professor",
      qualification: "B.Com, MBA",
      experience: "2.3 Years (AIET), 13+ Years (Total)",
      email: "ashokurao@gmail.com",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      joiningDate: "24-11-2023",
      details: {
        qualifications: "• B.Com - SBC Karkala (2008)\n• MBA - SJEC (2010)",
        pastExperience: "• Bank of New York Mellon (2 years)\n• Deutsche Bank (2 years)\n• Dhavala College (6 years)\n• Bhuvanendra College (1 year)",
        areasOfInterest: "• Finance\n• Marketing",
        achievements: "Air Wing Care Taker",
        professionalMembership: "NA",
        publications: "Nil",
        projectsGuided: "No",
        subjectsTeaching: "• Economics for Decision Making\n• Entrepreneurship development\n• Investment Analysis and Portfolio Management\n• Consumer Behaviour\n• Marketing Management\n• Innovation and Design Thinking\n• International Business",
        researchPublications: "NA",
        others: "NA",
      },
    },
    {
      name: "Mrs. Archana D P",
      designation: "Assistant Professor",
      qualification: "BE, MBA",
      experience: "2 Years (AIET), 3 Years (Total)",
      email: "archana@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      joiningDate: "12-02-2024",
      details: {
        qualifications: "• BE - Cambridge Institute of Tech (2019)\n• MBA - Jain University (2023)",
        pastExperience: "• Infinite Computer Solution (1 year)",
        areasOfInterest: "• HR\n• Business Analytics",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching: "• Managerial Communication\n• Human Resource Management\n• Introduction to Python & Data Control\n• Exploratory Data Analysis\n• Machine Learning\n• Innovation and Design Thinking",
        researchPublications: "NA",
        others: "NA",
      },
    },
    {
      name: "Ms. Princy P F",
      designation: "Assistant Professor",
      qualification: "B.Com, B.Ed, M.Com",
      experience: "2 Years (AIET), 6 Years (Total)",
      email: "princyfrancis@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&w=400&q=80",
      joiningDate: "20-03-2024",
      details: {
        qualifications: "• B.Com - SDM College Ujire\n• B.Ed - AVS College Tarikere\n• M.Com - St. Agnes College",
        pastExperience: "• Meridian College (3 years)\n• Our International College Abu Dhabi (1 year)",
        areasOfInterest: "Finance",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching: "• Accounting for managers\n• Managerial Communication\n• Logistics and supply chain management\n• Strategic management\n• Mergers, Acquisition and Corporate Restructuring\n• ITTC\n• Tax",
        researchPublications: "NA",
        others: "NA",
      },
    },
    {
      name: "Mr. Justin Pais",
      designation: "Assistant Professor",
      qualification: "MBA, MSc Psychology, PGDHRM, PhD (Pursuing)",
      experience: "13 Years (Total)",
      email: "justinpais024@gmail.com",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
      joiningDate: "01-06-2024",
      details: {
        qualifications: "• PhD (Pursuing) - VTU\n• MSc Psychology - IGNOU\n• PGDHRM - IGNOU\n• MBA - VTU",
        pastExperience: "• Raheja Group\n• Damro Exports\n• Reliance",
        areasOfInterest: "• Logistics\n• Data Analytics",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "1",
        projectsGuided: "NA",
        subjectsTeaching: "• Operational research\n• HRM\n• marketing\n• data visualization Analytics\n• Retail and sales",
        researchPublications: "1. Sustainability and Adoption of EV (2024)",
        others: "NA",
      },
    },
    {
      name: "Mrs. Sushmitha Santhosh Poojary",
      designation: "Assistant Professor",
      qualification: "M.Com, MBA (PhD)",
      experience: "1 Year (AIET), 14 Years (Total)",
      email: "sushmitha@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80",
      joiningDate: "04-12-2024",
      details: {
        qualifications: "• B.Com (2009) - Bhuvanendra College\n• M.Com (2011) - Mangalore University\n• MBA (2016) - Annamalai University\n• Pursuing PhD at Srinivas University (2020)",
        pastExperience: "• SDPT First Grade College Kateel (13 years)",
        areasOfInterest: "Finance",
        achievements: "5 Publications",
        professionalMembership: "NA",
        publications: "5",
        projectsGuided: "NA",
        subjectsTeaching: "• Financial Accounting\n• Accounting for Managers\n• Financial Management\n• Cost and Management Accounting\n• Company accounts\n• Mergers and acquisition\n• Entrepreneurial Development",
        researchPublications: "5 listed publications (IJRPR, IJRASET, Smart Cities etc.)",
        others: "NA",
      },
    },
    {
      name: "Mrs. Pavithra Jain",
      designation: "Assistant Professor",
      qualification: "M.Com",
      experience: "1 Year (AIET), 9 Years (Total)",
      email: "pavithrajn@gmail.com",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
      joiningDate: "01-01-2025",
      details: {
        qualifications: "• M.Com - SDM College Ujire (2011)",
        pastExperience: "• Shri Dhavala College (6 years)\n• Vivekananda College Puttur (2 years)",
        areasOfInterest: "Finance",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "-",
        subjectsTeaching: "• Business Statistics\n• Security Analysis and Investment management\n• Strategic Cost Management\n• NISM Certificate Course",
        researchPublications: "NA",
        others: "NA",
      },
    },
    {
      name: "Mr. Samyak Jain",
      designation: "Assistant Professor & Placement Officer",
      qualification: "MBA",
      experience: "8 Months (AIET), 2 Years (Total)",
      email: "samyakjain@aiet.org.in",
      phone: "NA",
      photo: imageProxyUrl("https://drive.google.com/uc?export=view&id=1sb5ngI_uz9V1hfXPIsEEkQ9bqnzfrM7C"),
      joiningDate: "15-07-2025",
      details: {
        qualifications: "MBA",
        pastExperience: "• 1 year industry experience",
        areasOfInterest: "• Finance\n• Marketing",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching: "• Strategic Brand Management\n• International Business\n• Logistics and Supply Chain Management",
        researchPublications: "NA",
        others: "NA",
      },
    },
    {
      name: "Mr. Ruchir Anand",
      designation: "Senior Assistant Professor",
      qualification: "MBA, BE",
      experience: "5 Years (AIET), 25+ Years (Total)",
      email: "ruchir@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1557862951-ef757a68ea23?auto=format&fit=crop&w=400&q=80",
      joiningDate: "12-02-2025",
      details: {
        qualifications: "• MBA - FMS Delhi University (1995)\n• BE - DCE Delhi University (1990)",
        pastExperience: "• MIT Manipal (3 years)\n• AIET (4 years, 2010-2014)\n• ICFAI National College (2 years)\n• Reliance Communications (7 years)\n• Essar Telecom (4 years)\n• L&T (2 years)",
        areasOfInterest: "• Spirituality\n• Philosophy\n• Communications\n• Operations Research\n• Statistics\n• Finance\n• Marketing\n• Supply Chain and Logistics",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching: "• Operations Research\n• Statistics for Management\n• Business Communications\n• Services Marketing\n• Supply Chain and Logistics\n• Security Analysis and Portfolio management",
        researchPublications: "NA",
        others: "NA",
      },
    },
    {
      name: "Ms. Javeria Muskan",
      designation: "Assistant Professor",
      qualification: "MBA",
      experience: "1.3 Years (AIET)",
      email: "javeriamuskan@aiet.org.in",
      phone: "NA",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
      joiningDate: "08-11-2024",
      details: {
        qualifications: "MBA",
        pastExperience: "• Rinex Company (2 months)",
        areasOfInterest: "• Human Resource Management",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "1",
        projectsGuided: "nil",
        subjectsTeaching: "• Management and organisation behaviour\n• Managerial communication\n• Human Resource Management\n• Conflict & Negotiation Management\n• International Business Environment\n• Soft skills",
        researchPublications: "NA",
        others: "NA",
      },
    },
  ],
  exploreData: {
    about: {
      title: "ABOUT MBA - MASTER OF BUSINESS ADMINISTRATION",
      body: `
        <p>The PG Department of Business Administration at Alva's Institute of Engineering & Technology is a vibrant centre of management education committed to academic excellence, research, industry integration, and holistic student development.</p>
        <p>With autonomous status, the department has the academic flexibility to design a contemporary and industry-aligned curriculum. The syllabus is carefully framed to meet the evolving demands of the corporate world, integrating areas such as Business Analytics, Financial Markets, Digital Marketing, Strategic Management, Innovation, and Entrepreneurship. The programme emphasizes experiential learning through case studies, simulations, live projects, internships, and industry interactions, ensuring that students are equipped with both conceptual clarity and practical competence.</p>
        
        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">Experiential Learning Framework</h4>
        <p>The MBA programme is structured to bridge theory and practice through:</p>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li><strong>One-Month Internship (First Year)</strong> – Hands-on corporate exposure at reputed companies.</li>
          <li><strong>45 Days Project Work (Second Year)</strong> – Practical application of management concepts in real business environments.</li>
          <li>Regular Industry Visits</li>
          <li>Guest Lectures by corporate leaders and subject experts</li>
          <li>Skill Development Programmes (SDPs) and domain-specific workshops</li>
        </ul>
        <p>These initiatives provide students with real-time exposure to business operations and decision-making environments.</p>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">Industry-Oriented Training & Corporate Readiness</h4>
        <p>A distinctive strength of the department is its structured corporate training ecosystem. Students undergo Industry-Integrated Training & Certification (ITTC), soft skills development, aptitude training, and value-added certification courses such as Power BI, Digital Marketing, NISM, and Advanced Excel.</p>
        <p>The presence of the <strong>London Stock Exchange Group (LSEG) Lab</strong> on campus provides students with hands-on exposure to global financial data, analytics tools, and real-time market platforms. This significantly enhances their employability in finance, analytics, and consulting roles.</p>
        <p>Additionally, companies operating within the campus ecosystem offer opportunities for live projects, internships, mentorship, and practical exposure to corporate culture — enabling a smooth transition from classroom to career.</p>
        <p>Our strong placement record reflects this systematic preparation. Reputed organizations such as <strong>EY, Grant Thornton, LSEG, ORACLE, WITHUM, Asian Paints, Ultratech Cement, Ramco, Tata Consultancy Services</strong> and many more regularly visit the campus for recruitment.</p>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">Research & Knowledge Creation</h4>
        <p>The department actively promotes research among faculty and students. Faculty members engage in research publications, consultancy, and conference presentations at national and international levels. Students are encouraged to undertake empirical research projects, participate in conferences, and develop analytical and evidence-based decision-making skills.</p>
        <p>Through structured research methodology training and exposure to data analytics, the department nurtures critical thinking and a problem-solving mindset.</p>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">Entrepreneurship & Leadership Development</h4>
        <p>Entrepreneurial thinking is fostered through a dedicated Entrepreneurship Development Cell (EDC), which supports startup ideation, innovation workshops, and industry mentoring. Various student clubs function actively to develop leadership, communication, teamwork, and event management skills.</p>
        <p>Students organize and participate in management fests, group competitions, and intercollegiate events, including participation in premier institutions. Regular budget analysis exercises and competitive activities strengthen financial acumen and strategic thinking.</p>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">Social Responsibility & Value-Based Education</h4>
        <p>The department believes that management education must build socially responsible leaders. Initiatives such as <strong>VANAS</strong> — a one-day agricultural field immersion programme — help students understand sustainability, rural economy, and environmental responsibility through experiential learning.</p>
        <p>CSR activities including visits to orphanages and old-age homes, beach cleaning drives, plantation programs, and community engagement initiatives instill empathy, ethics, and social awareness.</p>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">Our Commitment</h4>
        <p>The MBA Department at AIET stands on strong pillars of Academic Excellence, Industry Integration, Research Orientation, Entrepreneurship Development, and Social Responsibility. We are committed to transforming aspiring graduates into competent professionals, ethical leaders, innovative entrepreneurs, and globally competitive managers prepared to meet the challenges of a dynamic business environment.</p>
      `,
      highlights: [
        "Autonomous status with industry-aligned curriculum.",
        "Experiential learning through internships and LSEG Lab.",
        "Strong focus on entrepreneurship and social responsibility.",
      ],
    },
    thrust: {
      title: "THRUST AREA",
      body: "Focusing on Marketing, Finance, Human Resource Management, and Business Analytics.",
      highlights: [
        "•	Marketing Management",
        "•	Financial Management",
        "•	Human Resource Management",
        "•	Business Analytics",
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
        "Strong foundational knowledge in management.",
        "Practical application through internships.",
        "Leadership and ethical business practices.",
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
        {
          year: "MBA Scheme",
          id: "1Y51jOXUK917UNoIlTIGrr1BHfhQlgPjC",
        },
        {
          year: "MBA Syllabus",
          id: "1apQwZ1ZNe5e9KLBawzQE3rCDBWVbpk32",
        },
      ],
    },
    placements: {
      title: "PLACEMENT",
      body: "Our graduates are sought after by top-tier companies across various sectors, including IT, Finance, Retail, and Consulting.",
      highlights: [
        "100% placement assistance for all eligible students.",
        "Successful placements in companies like Amazon, Infosys, and Capgemini.",
        "Dedicated placement officer for industry-student interface.",
      ],
    },
    research: {
      title: "RESEARCH AND PUBLICATION",
      body: "Faculty and students are actively involved in research, contributing to reputable journals and international conferences.",
      highlights: [
        "Publications in Scopus, ABDC, and UGC CARE journals.",
        "Participation in international management conferences.",
        "Focus on agribusiness, marketing, and rural development research.",
      ],
    },
    facultyStaff: { title: "FACULTY AND STAFF", body: "", highlights: [] },
    facilities: {
      title: "FACILITIES – @ ALVAS MBA DEPARTMENT",
      body: `
        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">1. Modern Classrooms</h4>
        <p>Our MBA classrooms are designed to provide a modern and engaging learning environment:</p>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Spacious classrooms with comfortable two-seater desks and benches as per academic norms</li>
          <li>LCD Projectors, Audio-Visual systems, Speakers & Computer Systems for dynamic presentations</li>
          <li>High-quality sound systems in all classrooms</li>
          <li>Writing boards to encourage interactive teaching</li>
          <li>Well-ventilated classrooms for long academic sessions</li>
          <li>Comfortable seating arrangements to enhance student focus and engagement</li>
          <li>Furnished with chairs and academic accessories</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">2. Technology & Connectivity</h4>
        <p>We ensure seamless digital integration for academic excellence:</p>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>High-speed Internet and Wi-Fi facilities in every classroom</li>
          <li>Technology-enabled smart classrooms</li>
          <li>Portable speaker for academic activities, seminars, and student programs</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">3. Placement & Academic Support</h4>
        <p>Focused support for career development and academic growth:</p>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Dedicated Placement Lounge for interviews and recruitment activities</li>
          <li>Separate Department Library for reference and research</li>
          <li>Guest Seating Lounge for guest lectures, seminars, and presentations</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">4. Safety & Security Measures</h4>
        <p>The safety and well-being of students and faculty are our top priorities:</p>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>CCTV surveillance on every floor for day-to-day vigilance</li>
          <li>Fire safety portable powder extinguishers</li>
          <li>First aid kit for emergency medical support</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">5. Student Amenities & Accessibility</h4>
        <p>Facilities designed for student comfort and convenience:</p>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Clean drinking water facility</li>
          <li>Accessible restrooms</li>
          <li>Storage cabinets and mobile lockers for safeguarding personal belongings</li>
          <li>Additional seating lounges for students and guests</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">6. Infrastructure & Comfort</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Well-designed, ventilated academic spaces across multiple floors</li>
          <li>Classrooms are thoughtfully designed with proper ventilation, ensuring a pleasant and conducive atmosphere for academic activities.</li>
          <li>Conducive learning atmosphere for lectures, seminars, and group discussions</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">7. Corporate Exposure & Industry Integration</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Industry tie-ups with reputed companies</li>
          <li>Regular industrial visits</li>
          <li>Guest lectures by corporate leaders</li>
          <li>Corporate mentorship programs</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">8. Business Analytics & Simulation Lab</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Dedicated Business Analytics Lab</li>
          <li>Business simulation software for decision-making practice</li>
          <li>Data-driven management training</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">9. Entrepreneurship & Innovation Cell</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Entrepreneurship Development Cell (EDC)</li>
          <li>Startup mentoring support</li>
          <li>Business plan competitions</li>
          <li>Incubation support</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">10. Soft Skills & Personality Development Centre</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Communication skills training</li>
          <li>Group discussion practice sessions</li>
          <li>Mock interviews with HR experts</li>
          <li>Aptitude and reasoning coaching</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">11. Digital Learning & E-Resources</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Access to E-Journals and E-Books</li>
          <li>Learning Management System (LMS)</li>
          <li>Online certification support (Coursera, NPTEL, etc.)</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">12. Career Advancement Services</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Resume building workshops</li>
          <li>Career counseling</li>
          <li>Internship assistance</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">13. Global & Value-Added Certifications</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Add-on certification programs</li>
          <li>International webinar participation</li>
        </ul>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">14. College Bus Facility</h4>
        <p>To ensure safe and convenient commuting, the college provides a well-organised transport system:</p>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Dedicated college buses covering major routes across the city and nearby areas</li>
          <li>Safe and punctual transportation services</li>
        </ul>
      `,
      highlights: [
        "Modern smart classrooms and Wi-Fi campus.",
        "Dedicated Business Analytics Lab and EDC Cell.",
        "Comprehensive student amenities and safety measures.",
      ],
    },
    workshop: {
      title: "WORKSHOP AND CONFERENCE",
      body: "Regularly organizing workshops, seminars, and guest lectures from industry experts.",
      highlights: [
        "Annual Management Fest and Symposium.",
        "Workshops on Data Visualization and Digital Marketing.",
        "Guest lectures by corporate leaders and entrepreneurs.",
      ],
    },
    clubs: {
      title: "PROFESSIONAL BODIES & CLUBS",
      body: "Active student clubs that foster holistic development and practical learning.",
      highlights: [
        "Marketing Club (Marketrix).",
        "HR Club (Synergy).",
        "Finance Club (Arthasastra).",
      ],
    },
    achievements: {
      title: "ACHIEVEMENTS",
      body: "Recognized excellence in management education and student competitions.",
      highlights: [
        "Best Paper awards at International Conferences.",
        "University ranks and academic excellence.",
        "Notable success in inter-collegiate management fests.",
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
    { name: "Infosys", logo: "/infosys.png" },
    { name: "TCS", logo: "/tcs.png" },
    { name: "Wipro", logo: "/wipro.png" },
    { name: "Accenture", logo: "/accenture.png" },
    { name: "Capgemini", logo: "/capgemini.png" },
    { name: "Amazon", logo: "/amazon.png" },
  ],
};
