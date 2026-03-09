// lib/mandatoryDisclosureData.ts

export interface MandatoryDisclosureData {
  collegeInfo: {
    institution: {
      name: string;
      address: string;
      city: string;
      state: string;
      pinCode: string;
      phone: string;
      email: string;
      website: string;
      nearestRailway: string;
      nearestAirport: string;
      type: string;
      category: string;
    };
    principal: {
      name: string;
      designation: string;
      phone: string;
      email: string;
      degree: string;
      specialization: string;
    };
    infrastructure: {
      classRooms: number;
      laboratories: number;
      computerCentres: string;
      internetBandwidth: string;
      libraryBooks: string;
      hostels: string;
    };
  };
  aicte: {
    fileNo: string;
    lastApprovalDate: string;
    programmes: {
      name: string;
      seats: number;
      duration: string;
    }[];
  };
  governance: {
    boardMembers: string[];
    academicAdvisory: string;
    feedbackSystem: string;
    grievanceRedressal: string;
    committees: {
      name: string;
      status: string;
    }[];
  };
  accreditation: {
    nba: string;
    naac: string;
    autonomous: string;
  };
  auditReports: {
    status: string;
    years: string[];
  };
}

export const mandatoryDisclosureData: MandatoryDisclosureData = {
  collegeInfo: {
    institution: {
      name: "ALVA'S INSTITUTE OF ENGINEERING & TECHNOLOGY",
      address:
        "Shobhavana Campus, Mijar, Moodbidri, Dakshina Kannada, Karnataka - 574225",
      city: "Moodbidri",
      state: "Karnataka",
      pinCode: "574225",
      phone: "08258-262725",
      email: "principalaiet08@gmail.com",
      website: "www.aiet.org.in",
      nearestRailway: "Mangalore (35 Km)",
      nearestAirport: "Mangalore International Airport (25 Km)",
      type: "Private-Self Financed (Non Minority, Co-Ed)",
      category: "Engineering & Technology",
    },
    principal: {
      name: "Dr. Peter Fernandes",
      designation: "Principal",
      phone: "08258-262725",
      email: "principalaiet08@gmail.com",
      degree: "Ph.D.",
      specialization: "Mechanical Engineering",
    },
    infrastructure: {
      classRooms: 45,
      laboratories: 65,
      computerCentres: "Available (850 Systems)",
      internetBandwidth: "500 Mbps",
      libraryBooks: "35,000+ Books",
      hostels: "Available (Boys & Girls)",
    },
  },
  aicte: {
    fileNo: "F.No. South-West/1-9321568288/2021/EOA",
    lastApprovalDate: "25-06-2021",
    programmes: [
      {
        name: "Computer Science & Engineering",
        seats: 120,
        duration: "4 Years",
      },
      {
        name: "Information Science & Engineering",
        seats: 120,
        duration: "4 Years",
      },
      {
        name: "Electronics & Communication Engg",
        seats: 60,
        duration: "4 Years",
      },
      { name: "Mechanical Engineering", seats: 60, duration: "4 Years" },
      { name: "Civil Engineering", seats: 60, duration: "4 Years" },
      { name: "Artificial Intelligence & ML", seats: 60, duration: "4 Years" },
      { name: "MBA", seats: 60, duration: "2 Years" },
    ],
  },
  governance: {
    boardMembers: [
      "Dr. M. Mohan Alva (Chairman)",
      "Mr. Vivek Alva (Trustee)",
      "Dr. Vinay Alva (Trustee)",
    ],
    academicAdvisory:
      "Principal, HODs, and Industry Experts. Meetings twice a year.",
    feedbackSystem:
      "Online feedback system is in place for institutional governance and faculty performance.",
    grievanceRedressal: "Functional mechanism for Faculty, Staff and Students.",
    committees: [
      { name: "Anti Ragging Committee", status: "Established" },
      { name: "Online Grievance Redressal", status: "Established" },
      { name: "Internal Complaint Committee (ICC)", status: "Established" },
      { name: "Committee for SC/ST", status: "Established" },
      { name: "Internal Quality Assurance Cell (IQAC)", status: "Established" },
    ],
  },
  accreditation: {
    nba: "Currently Nil (Individual departments may be in process).",
    naac: "Information available in respective department highlights.",
    autonomous:
      "Alva's Institute of Engineering & Technology is an Autonomous Institution.",
  },
  auditReports: {
    status:
      "Audited financial statements for the last three years are available at the institution office.",
    years: ["2020-21", "2019-20", "2018-19"],
  },
};
