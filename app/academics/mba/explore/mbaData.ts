import { DepartmentData, Faculty } from "@/lib/departments";

const imageProxyUrl = (url: string) =>
  `/api/image-proxy?url=${encodeURIComponent(url)}`;

export const mbaDepartmentData: DepartmentData = {
  id: "mba",
  name: "Department of Business Administration",
  title: "Master of Business Administration (MBA)",
  vision: `To develop competent and ethical managers and entrepreneurs, sensitive to the environment and culture, responsible to their communities and global in their outlook and approach.`,
  mission: `M1:  To provide students with necessary knowledge and skills to enable them to be effective in the field of their specialization
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
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
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
      qualifications:
        "• MBA, St. Joseph's Engineering & Technology, Mijar (2010)",
      pastExperience:
        "• Founder, Ornamental Fish Culturing & Breeding Unit (2011-Current)\n• Assistant Professor, Milagres Degree College (2013-2015)\n• Business Assistant, Mitsui & Co. Kuwait (2006-2008)\n• Secretary, Al-Wegayan Law Firm, Kuwait (2003-2006)",
      areasOfInterest:
        "• Marketing\n• Agribusiness\n• Economics\n• Women Empowerment\n• Rural Development\n• E-Waste Management",
      achievements:
        "• Best Outgoing Student of MBA Batch 2008–2010\n• VTU BOE Member 2023-24\n• BOE Member St. Joseph’s Engineering College 2025-26",
      professionalMembership: "VTU BOE Member",
      publications: "7",
      projectsGuided: "NA",
      subjectsTeaching:
        "• Marketing Management\n• Managerial Economics\n• Consumer Behaviour\n• Service Marketing\n• Organization Behaviour\n• Risk Management\n• Brand Management\n• Research Methodology",
      researchPublications:
        "• Challenges of women entrepreneurs (2022)\n• Impact of Social Media (2024)\n• Jomo in Digital Well Being (2024)\n• Consumer Behaviour online food (2024)\n• Sustainability of EV (2024)\n• Mediating role of human behavior (2024)\n• Sustainability of EV (2025)",
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
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      joiningDate: "01-10-2020",
      details: {
        qualifications:
          "• PhD (Horticulture) - UAS Bangalore (Gold Medal 1997)\n• MBA - IGNOU\n• MCA - IGNOU\n• MBL - NLSIU Bangalore\n• MA (Economics) - Mangalore University\n• MS (Counselling) - Kuvempu University\n• B.Sc (Agri) - UAS Bangalore",
        pastExperience:
          "• Dean, MSNM Besant Institute (2018-2020)\n• Independent consultant for ADB project\n• Professor and Head, Srinivas School of Management (2013-2017)\n• Professor and Director, KVG College of Engineering (1999-2013)",
        areasOfInterest: "Finance",
        achievements:
          "• University Gold Medal for PhD\n• Senior Resident Merit Scholarship (M.Sc)\n• Fellow Member of ICAI\n• Served as BOS/BOE member for VTU, Nitte University, St. Aloysius",
        professionalMembership:
          "• Fellow Member of Institute of Cost Accountants of India\n• VTU BOS/BOE member",
        publications: "13",
        projectsGuided: "NA",
        subjectsTeaching:
          "• Financial Management\n• Advanced Financial Management\n• Security Analysis and Portfolio Management\n• International Financial Management\n• Business Statistics\n• Operations Research\n• Managerial Economics",
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
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      joiningDate: "15-09-2021",
      details: {
        qualifications:
          "• PhD (Commerce) - MSU Tirunelveli (2014)\n• MBA (IB) - Mangalore University (2017)\n• M.Phil - MKU Madurai (2005)\n• M.Com - University of Mysore (1991)\n• B.Com - Teresian College (1989)",
        pastExperience:
          "• HOD PG Commerce, St. Agnes (2014-2021)\n• Principal, Colaco College (2008-2013)\n• Lecturer, St. Agnes College (1991-2008)",
        areasOfInterest:
          "• Finance\n• Banking\n• Research\n• Women's issues\n• Entrepreneurship and Innovation",
        achievements:
          "• 30 Publications\n• 2 PhDs Guided (completed), 3 ongoing",
        professionalMembership: "NA",
        publications: "30",
        projectsGuided: "2 Completed, 3 Ongoing (PhD)",
        subjectsTeaching:
          "• Accounting\n• Strategic Cost Management\n• Financial Management\n• Global Financial Management\n• Direct and Indirect Tax\n• ITTC",
        researchPublications:
          "13 listed publications (Springer, IJCRT, IJRAR, IJIRES, etc.)",
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
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      joiningDate: "19-02-2020",
      details: {
        qualifications:
          "• PhD - VTU\n• MBA - VCET Puttur\n• B.E (Mech) - VCET Puttur",
        pastExperience: "• Srinivas Institute of Technology (9 years)",
        areasOfInterest: "• Marketing\n• HR",
        achievements:
          "• Best Professor in HRM (2021)\n• Young Achiever Award (2022)\n• Best Paper Award (2025)",
        professionalMembership: "NA",
        publications: "9",
        projectsGuided: "Nil",
        subjectsTeaching:
          "• Marketing Management\n• Corporate Strategy\n• Research Methodology and IPR\n• Sales and Retail Management\n• Services Marketing\n• Public Relations\n• Integrated Marketing Communication\n• Emerging Exponential Technology",
        researchPublications:
          "9 listed publications (Journal of Propulsion Technology, Shodh Sanchar Bulletin, etc.)",
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
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      joiningDate: "06-01-2025",
      details: {
        qualifications:
          "• PhD - Karnatak University Dharwad (2022)\n• MBA - KLS IMER Belgaum (2006)\n• BBA - ASP College Vijayapura (2004)",
        pastExperience: "• 15 years of industry and academic experience",
        areasOfInterest:
          "• Economics\n• Financial Management\n• Investment Analysis\n• Financial Markets\n• Derivatives\n• Research Methodology",
        achievements: "13 Publications",
        professionalMembership: "NA",
        publications: "13",
        projectsGuided: "-",
        subjectsTeaching:
          "• Economics for Decision Making\n• Financial Management\n• Global Financial Management\n• Investment Analysis and Portfolio Management",
        researchPublications:
          "13 listed publications (IJES, JRA, IJCRT, JETIR, etc.)",
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
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      joiningDate: "24-07-2012",
      details: {
        qualifications: "MBA",
        pastExperience: "• Capgemini India Pvt. Ltd. (1 year)",
        areasOfInterest: "• HRM\n• Digital Marketing",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "2",
        projectsGuided: "NA",
        subjectsTeaching:
          "• Economics for Managers\n• Digital Marketing\n• HRM\n• Research Methodology",
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
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      joiningDate: "09-11-2021",
      details: {
        qualifications:
          "• BBM - Alva's College (2008)\n• MBA - AJIM (2010)\n• Pursuing PhD at Nitte University",
        pastExperience:
          "• Karavali Institute of Technology (8 years)\n• AJIM (1 year)",
        areasOfInterest: "• HR\n• Finance",
        achievements: "• 2 Best Paper Awards (2023, 2025)",
        professionalMembership: "NA",
        publications: "5",
        projectsGuided: "NA",
        subjectsTeaching:
          "• Management and Organisational Behaviour\n• Human Resource Management\n• Research Methodology and IPR\n• Banking and Financial services\n• Recruitment and selection\n• Risk Management and Insurance",
        researchPublications:
          "5 listed publications (Educational Administration, Anveshna, etc.)",
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
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      joiningDate: "24-11-2023",
      details: {
        qualifications: "• B.Com - SBC Karkala (2008)\n• MBA - SJEC (2010)",
        pastExperience:
          "• Bank of New York Mellon (2 years)\n• Deutsche Bank (2 years)\n• Dhavala College (6 years)\n• Bhuvanendra College (1 year)",
        areasOfInterest: "• Finance\n• Marketing",
        achievements: "Air Wing Care Taker",
        professionalMembership: "NA",
        publications: "Nil",
        projectsGuided: "No",
        subjectsTeaching:
          "• Economics for Decision Making\n• Entrepreneurship development\n• Investment Analysis and Portfolio Management\n• Consumer Behaviour\n• Marketing Management\n• Innovation and Design Thinking\n• International Business",
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
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      joiningDate: "12-02-2024",
      details: {
        qualifications:
          "• BE - Cambridge Institute of Tech (2019)\n• MBA - Jain University (2023)",
        pastExperience: "• Infinite Computer Solution (1 year)",
        areasOfInterest: "• HR\n• Business Analytics",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching:
          "• Managerial Communication\n• Human Resource Management\n• Introduction to Python & Data Control\n• Exploratory Data Analysis\n• Machine Learning\n• Innovation and Design Thinking",
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
      photo:
        "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&w=400&q=80",
      joiningDate: "20-03-2024",
      details: {
        qualifications:
          "• B.Com - SDM College Ujire\n• B.Ed - AVS College Tarikere\n• M.Com - St. Agnes College",
        pastExperience:
          "• Meridian College (3 years)\n• Our International College Abu Dhabi (1 year)",
        areasOfInterest: "Finance",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching:
          "• Accounting for managers\n• Managerial Communication\n• Logistics and supply chain management\n• Strategic management\n• Mergers, Acquisition and Corporate Restructuring\n• ITTC\n• Tax",
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
      photo:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
      joiningDate: "01-06-2024",
      details: {
        qualifications:
          "• PhD (Pursuing) - VTU\n• MSc Psychology - IGNOU\n• PGDHRM - IGNOU\n• MBA - VTU",
        pastExperience: "• Raheja Group\n• Damro Exports\n• Reliance",
        areasOfInterest: "• Logistics\n• Data Analytics",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "1",
        projectsGuided: "NA",
        subjectsTeaching:
          "• Operational research\n• HRM\n• marketing\n• data visualization Analytics\n• Retail and sales",
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
      photo:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80",
      joiningDate: "04-12-2024",
      details: {
        qualifications:
          "• B.Com (2009) - Bhuvanendra College\n• M.Com (2011) - Mangalore University\n• MBA (2016) - Annamalai University\n• Pursuing PhD at Srinivas University (2020)",
        pastExperience: "• SDPT First Grade College Kateel (13 years)",
        areasOfInterest: "Finance",
        achievements: "5 Publications",
        professionalMembership: "NA",
        publications: "5",
        projectsGuided: "NA",
        subjectsTeaching:
          "• Financial Accounting\n• Accounting for Managers\n• Financial Management\n• Cost and Management Accounting\n• Company accounts\n• Mergers and acquisition\n• Entrepreneurial Development",
        researchPublications:
          "5 listed publications (IJRPR, IJRASET, Smart Cities etc.)",
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
      photo:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
      joiningDate: "01-01-2025",
      details: {
        qualifications: "• M.Com - SDM College Ujire (2011)",
        pastExperience:
          "• Shri Dhavala College (6 years)\n• Vivekananda College Puttur (2 years)",
        areasOfInterest: "Finance",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "-",
        subjectsTeaching:
          "• Business Statistics\n• Security Analysis and Investment management\n• Strategic Cost Management\n• NISM Certificate Course",
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
      photo: imageProxyUrl(
        "https://drive.google.com/uc?export=view&id=1sb5ngI_uz9V1hfXPIsEEkQ9bqnzfrM7C",
      ),
      joiningDate: "15-07-2025",
      details: {
        qualifications: "MBA",
        pastExperience: "• 1 year industry experience",
        areasOfInterest: "• Finance\n• Marketing",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching:
          "• Strategic Brand Management\n• International Business\n• Logistics and Supply Chain Management",
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
      photo:
        "https://images.unsplash.com/photo-1557862951-ef757a68ea23?auto=format&fit=crop&w=400&q=80",
      joiningDate: "12-02-2025",
      details: {
        qualifications:
          "• MBA - FMS Delhi University (1995)\n• BE - DCE Delhi University (1990)",
        pastExperience:
          "• MIT Manipal (3 years)\n• AIET (4 years, 2010-2014)\n• ICFAI National College (2 years)\n• Reliance Communications (7 years)\n• Essar Telecom (4 years)\n• L&T (2 years)",
        areasOfInterest:
          "• Spirituality\n• Philosophy\n• Communications\n• Operations Research\n• Statistics\n• Finance\n• Marketing\n• Supply Chain and Logistics",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "NA",
        projectsGuided: "NA",
        subjectsTeaching:
          "• Operations Research\n• Statistics for Management\n• Business Communications\n• Services Marketing\n• Supply Chain and Logistics\n• Security Analysis and Portfolio management",
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
      photo:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
      joiningDate: "08-11-2024",
      details: {
        qualifications: "MBA",
        pastExperience: "• Rinex Company (2 months)",
        areasOfInterest: "• Human Resource Management",
        achievements: "NA",
        professionalMembership: "NA",
        publications: "1",
        projectsGuided: "nil",
        subjectsTeaching:
          "• Management and organisation behaviour\n• Managerial communication\n• Human Resource Management\n• Conflict & Negotiation Management\n• International Business Environment\n• Soft skills",
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
      body: `
        <p class="text-gray-700">
          Faculty and students are actively involved in research, contributing to reputable journals and conferences.
          The following details summarize Ph.D qualifications, guides/supervisors, registrations, and publication statistics.
        </p>

        <h4 class="text-xl font-bold mt-6 mb-3 text-gray-900">Ph.D Holders</h4>
        <div class="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table class="min-w-[700px] w-full text-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Sl No</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Name</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Year of Completion</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">University</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">1</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Dr. Catherine Nirmala</td>
                <td class="px-4 py-3 border-b border-gray-200">2014</td>
                <td class="px-4 py-3 border-b border-gray-200">Manonmaniam Sundaranar University, Tirunelveli, Tamil Nadu</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">2</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Dr. Vijay Joshi</td>
                <td class="px-4 py-3 border-b border-gray-200">2022</td>
                <td class="px-4 py-3 border-b border-gray-200">Karnatak University, Dharwad</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">3</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Dr. Guruprasad Pai B</td>
                <td class="px-4 py-3 border-b border-gray-200">2024</td>
                <td class="px-4 py-3 border-b border-gray-200">Visvesvaraya Technological University, Belagavi</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3">4</td>
                <td class="px-4 py-3 font-semibold text-gray-900">Dr. Vishnu Prasanna K N</td>
                <td class="px-4 py-3">1997</td>
                <td class="px-4 py-3">University of Agricultural Sciences, Bangalore</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-xl font-bold mt-8 mb-3 text-gray-900">Details of Ph.D Guides / Supervisor</h4>
        <div class="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table class="min-w-[700px] w-full text-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Sl No</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Name of the Guide</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">University</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">1</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Dr. Catherine Nirmala</td>
                <td class="px-4 py-3 border-b border-gray-200">Mangalore University - 2 Scholars completed PhD’s; Currently 3 scholars still pursuing.</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3">2</td>
                <td class="px-4 py-3 font-semibold text-gray-900">Dr. Catherine Nirmala</td>
                <td class="px-4 py-3">VTU - Recognised guide</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-xl font-bold mt-8 mb-3 text-gray-900">Faculty Registered for Ph.D in other Research centre / University</h4>
        <div class="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table class="min-w-[900px] w-full text-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Sl No</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Name of the Research Scholar</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Registration Date</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Other University / Research Centre</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Completed Comprehensive Viva</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">1</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Sushmitha Santhosh Poojary</td>
                <td class="px-4 py-3 border-b border-gray-200">12/09/2020</td>
                <td class="px-4 py-3 border-b border-gray-200">Srinivas University</td>
                <td class="px-4 py-3 border-b border-gray-200">No</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">2</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Justin Pais</td>
                <td class="px-4 py-3 border-b border-gray-200">01/03/2025</td>
                <td class="px-4 py-3 border-b border-gray-200">VTU</td>
                <td class="px-4 py-3 border-b border-gray-200">No</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">3</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Mrs. Harshitha V Shetty</td>
                <td class="px-4 py-3 border-b border-gray-200">23/06/2025</td>
                <td class="px-4 py-3 border-b border-gray-200">Nitte University</td>
                <td class="px-4 py-3 border-b border-gray-200">No</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3">4</td>
                <td class="px-4 py-3 font-semibold text-gray-900">Mrs. Priya Sequiera</td>
                <td class="px-4 py-3">08/2022</td>
                <td class="px-4 py-3">National Institute of Technology, Surathkal</td>
                <td class="px-4 py-3">No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-xl font-bold mt-8 mb-3 text-gray-900">Research Paper Publication</h4>
        <div class="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table class="min-w-[1000px] w-full text-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Sl No</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Name</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Year</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Assessment Year</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">National/International Journals</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">National/International Conferences</th>
                <th class="text-left font-bold text-gray-700 px-4 py-3 border-b border-gray-200">Book Chapters</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">1</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Dr. Vijay Joshi</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">01</td>
                <td class="px-4 py-3 border-b border-gray-200">01</td>
                <td class="px-4 py-3 border-b border-gray-200">-</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">2</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Mrs. Harshitha V Shetty</td>
                <td class="px-4 py-3 border-b border-gray-200">2012-2025</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">03</td>
                <td class="px-4 py-3 border-b border-gray-200">15</td>
                <td class="px-4 py-3 border-b border-gray-200">-</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">3</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Dr. Guruprasad Pai B</td>
                <td class="px-4 py-3 border-b border-gray-200">2011-2025</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">07</td>
                <td class="px-4 py-3 border-b border-gray-200">12</td>
                <td class="px-4 py-3 border-b border-gray-200">01</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">4</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Sushmitha Santhosh Poojary</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">2</td>
                <td class="px-4 py-3 border-b border-gray-200">2</td>
                <td class="px-4 py-3 border-b border-gray-200">-</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">5</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Mr. Justin Pais</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">2</td>
                <td class="px-4 py-3 border-b border-gray-200">1</td>
                <td class="px-4 py-3 border-b border-gray-200">-</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3 border-b border-gray-200">6</td>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">Dr. Catherine Nirmala</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">2025</td>
                <td class="px-4 py-3 border-b border-gray-200">2</td>
                <td class="px-4 py-3 border-b border-gray-200">2</td>
                <td class="px-4 py-3 border-b border-gray-200">01</td>
              </tr>
              <tr class="odd:bg-white even:bg-gray-50">
                <td class="px-4 py-3">7</td>
                <td class="px-4 py-3 font-semibold text-gray-900">Dr. Vishnu Prasanna K N</td>
                <td class="px-4 py-3">1997-2025</td>
                <td class="px-4 py-3">2025</td>
                <td class="px-4 py-3">5</td>
                <td class="px-4 py-3">8</td>
                <td class="px-4 py-3">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
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
      body: "Holistic development through aptitude training, student enrichment sessions, industry exposure, and personality development programs.",
      highlights: [
        "Aptitude training programs by 10 Seconds for first-year MBA students.",
        "Well-being, HR, finance, entrepreneurship, and communication enrichment sessions.",
        "Industrial exposure and personality development activities.",
      ],
      entries: [
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=18r1BoAEbOeKEarWdJOqWaFXjCXhH1jDy",
            ),
            alt: "3 Days Aptitude Training by 10 Seconds cover image",
          },
          title: "3 Days Aptitude Training by 10 Seconds",
          topic:
            "A three-day aptitude training program for first-year MBA students",
          date: "16-04-2024 to 18-04-2024",
          venue: "MBA Classroom",
          audience: "First-year MBA students",
          conductedBy: "10 Seconds, Bangalore",
          overview:
            "The PG Department of Business Administration organized a three-day aptitude training program for first-year students from 16th to 18th April 2024. The sessions were conducted by expert trainers Mr. Dhanush, Mr. Rajesh Kanan, and Ms. Jwalitha from 10 Seconds. Each day comprised three sessions running from 9:00 AM to 5:00 PM and covered quantitative and logical reasoning topics such as blood relations, number systems, LCM, HCF, coding and decoding, percentages, directions, time and work, pipes and cisterns, arrangement, sequencing, data sufficiency, syllogism, profit and loss, circular arrangement, and number series.",
          objectives: [
            "Enhance analytical and logical reasoning skills among students.",
            "Improve speed and accuracy in solving aptitude-based problems.",
            "Build confidence for competitive exams and placements through practice.",
            "Develop practical application of mathematical concepts for academic and career success.",
          ],
          impact:
            "The workshop was highly interactive and rewarding, enhancing students' prediction, observation, memory, concentration, and logical reasoning skills. A total of 180 students benefited from the program and gained valuable aptitude knowledge and techniques for future academic and professional success.",
          conclusion:
            "The three-day training gave students a strong foundation in aptitude problem-solving while preparing them for competitive assessments and placement preparation.",
          tags: ["Aptitude", "Reasoning", "Placements"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=18r1BoAEbOeKEarWdJOqWaFXjCXhH1jDy",
            ),
            alt: "4 Days Aptitude Training by 10 Seconds cover image",
          },
          title: "4 Days Aptitude Training by 10 Seconds",
          topic:
            "A four-day aptitude training program for first-year MBA students",
          date: "25-07-2023 to 28-07-2023",
          venue: "MBA Classroom",
          audience: "First-year MBA students",
          conductedBy: "10 Seconds, Bangalore",
          overview:
            "The AIET MBA Department organized a four-day aptitude training program for first-year students from 25th to 28th July 2023. The sessions were held daily from 9:00 AM to 4:20 PM with three sessions each day. The training covered LCM and HCF, time-speed-distance, divisibility rules, train crossing problems, percentage, profit and loss, directions quiz, boat and stream problems, data sufficiency, time and speed shortcuts, deductive reasoning, and blood relations.",
          objectives: [
            "Strengthen students' quantitative aptitude and logical reasoning skills.",
            "Improve speed, accuracy, and efficiency in solving aptitude problems.",
            "Build confidence for competitive exams, placements, and academic assessments.",
            "Encourage critical thinking and practical application of mathematical concepts.",
          ],
          impact:
            "The workshop proved to be highly interactive and rewarding. It significantly enhanced students' skills in prediction, observation, memory, concentration, and logical reasoning. A total of 180 students actively participated and benefited from the program.",
          conclusion:
            "This four-day training created a strong aptitude base and helped students become better prepared for academic evaluation and placement interviews.",
          tags: ["Aptitude", "Quantitative Skills", "Training"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1KjXD4vIIqhKbLli8aLfdmDiTJ5gVlQsV",
            ),
            alt: "Stress Management and Resilience session cover image",
          },
          title: "Sessions on Stress Management and Resilience",
          topic: "Well-being sessions for MBA students",
          date: "08-02-2024",
          venue: "MBA Auditorium and MBA Seminar Hall",
          audience: "I year MBA students",
          conductedBy:
            "P.V. Bhandary, Psychiatrist, Dr. A. V. Baliga Group of Institutions; Dr. Deepa Kottari, Associate Professor in Psychology, Yenopaya (Deemed University)",
          overview:
            "The PG Department of Business Administration conducted a session on Stress Management in the morning and a session on Resilience and Mental Wellbeing later the same day. The first session highlighted common sources of stress in MBA programs, the consequences of unmanaged stress, and practical stress management strategies. The second session focused on the importance of resilience and mental well-being, creating a supportive environment, and helping students develop practical coping strategies for academic success and personal well-being.",
          objectives: [
            "Identify common sources of stress in MBA programs.",
            "Understand the consequences of unmanaged stress and anxiety.",
            "Equip students with practical stress management and resilience techniques.",
            "Promote student well-being, academic success, and help-seeking behaviour.",
          ],
          impact:
            "The sessions reduced stress-related concerns, improved emotional well-being, and gave students practical tools such as time management, mindfulness, emotional regulation, self-care, and support-seeking strategies. 149 students benefited from each session.",
          conclusion:
            "The well-being sessions helped students better understand stress and resilience, creating a healthier outlook toward academic demands and personal growth.",
          tags: ["Wellbeing", "Stress Management", "Resilience"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1mJeD7iqOSa4Ta7eW1tWMDPtBMG3CwkVB",
            ),
            alt: "MBA enrichment sessions cover image",
          },
          title:
            "MBA Enrichment Sessions on HR, Finance, Entrepreneurship and Skills",
          topic:
            "A series of student development sessions conducted in February 2024",
          date: "09-02-2024 to 14-02-2024",
          venue: "MBA Auditorium and MBA Seminar Hall",
          audience: "I and II year MBA students",
          conductedBy:
            "Mr. Ramani Venkat and Team; Mrs. Laxmi Shetty; Mr. Naveen Shankar Naik; Mr. Naveen; Dr. Vishwanath K.P.; Mrs. Maithiri; Sri Sundara S. M.; Mr. Karthik Alva; Mr. Samarth, Ms. Anagha and Mr. Aron; Mr. Manoj Kumar; and invited entrepreneurs from the Young Entrepreneurship Summit",
          overview:
            "The department organized several student enrichment sessions covering gamification, HR, statistics, accounting, entrepreneurship, professional grooming, auditing, cyber crime awareness, and entrepreneurship leadership. Students participated in team-building activities, learned corporate expectations, explored career paths in IT and HR, studied statistics and accounting basics, discussed entrepreneurship and government schemes, improved professional grooming, gained an introduction to auditing, understood cyber safety, and heard from successful entrepreneurs during the Young Entrepreneurship Summit.",
          objectives: [
            "Improve communication, teamwork, and professional grooming skills.",
            "Expose students to HR, finance, accounting, and entrepreneurship careers.",
            "Build awareness about statistics, cyber safety, and auditing fundamentals.",
            "Encourage innovation, resilience, leadership, and entrepreneurial thinking.",
          ],
          impact:
            "These sessions gave students exposure to corporate practices, practical problem-solving, leadership traits, and the mindset required for careers in management and entrepreneurship. The programs were interactive, motivating, and highly beneficial for career readiness.",
          conclusion:
            "The enrichment sessions created a strong bridge between classroom learning and real-world managerial practice, helping students become more confident, aware, and industry-ready.",
          tags: ["HR", "Finance", "Entrepreneurship"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1KjXD4vIIqhKbLli8aLfdmDiTJ5gVlQsV",
            ),
            alt: "Industrial Visit to Malpe Port cover image",
          },
          title: "Industrial Visit to Malpe Port",
          topic:
            "A practical exposure visit to the fishing industry and its operations",
          date: "06-12-2023",
          venue: "Malpe Port",
          audience: "Second-year MBA students",
          conductedBy: "PG Department of Business Administration",
          overview:
            "On 6th December 2023, the second-year MBA students visited Malpe Port to gain practical exposure to the fishing industry and understand its operations. The visit focused on fishing methods, processing, trade, supply chain activities, infrastructure requirements such as ice plants and cold storage, and the overall economic impact of the fish business on local communities and exports.",
          objectives: [
            "Gain practical exposure to the fishing industry and understand its operations.",
            "Study the infrastructure and supply chain involved in fish processing and trade.",
            "Analyze the economic impact of the fish business on local communities and exports.",
            "Observe challenges and sustainability practices in modern and traditional fishing methods.",
          ],
          impact:
            "The visit offered valuable insight into the multifaceted fish trade and highlighted the importance of industry visits in linking management concepts with local business ecosystems. Overall, 120 students benefited from the visit.",
          conclusion:
            "The Malpe Port visit helped students understand how a regional industry functions in practice and why sustainability and logistics matter in the seafood supply chain.",
          tags: ["Industrial Visit", "Supply Chain", "Field Exposure"],
        },
        {
          coverImage: {
            src: imageProxyUrl(
              "https://drive.google.com/uc?export=view&id=1mJeD7iqOSa4Ta7eW1tWMDPtBMG3CwkVB",
            ),
            alt: "Face Reading and Body Language Analysis cover image",
          },
          title: "Face Reading and Body Language Analysis",
          topic: "A session on self-awareness and interpersonal communication",
          date: "19-08-2023",
          venue: "MBA Seminar Hall",
          audience: "I year MBA students",
          conductedBy:
            "Mrs. Rachitha, healer, motivator, mentor and behavioural expert; Dr. Prakash Menon, practitioner of eastern healing and predicting techniques",
          overview:
            "The Face Reading Session for I Year MBA students was conducted to offer a unique perspective on interpersonal dynamics and self-awareness. The session introduced the history and basic principles of face reading, encouraged students to reflect on facial features such as the eyes, nose, mouth, and face shape, and highlighted the ethical considerations, cultural differences, limitations, and relevance of non-verbal communication in professional settings.",
          objectives: [
            "Introduce MBA students to the principles of face reading.",
            "Enhance self-awareness and understanding of personal strengths and challenges.",
            "Explore the applications of face reading in business and interpersonal relationships.",
            "Improve sensitivity to non-verbal communication in professional life.",
          ],
          impact:
            "The session fostered greater self-awareness and sensitivity to non-verbal cues, encouraging students to integrate these insights into their personal and professional development.",
          conclusion:
            "The program concluded with a thought-provoking learning experience that strengthened interpersonal communication awareness among the participants.",
          tags: ["Communication", "Self-Awareness", "Body Language"],
        },
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
