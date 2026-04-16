// lib/departments.ts
export interface Faculty {
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  email: string;
  phone: string;
  aoi?: string;
  photo: string;
  joiningDate?: string;
  message?: string;
  details?: {
    qualifications: string;
    pastExperience: string;
    areasOfInterest: string;
    achievements: string;
    professionalMembership: string;
    publications: string;
    projectsGuided: string;
    subjectsTeaching: string;
    researchPublications: string;
    others: string;
  };
}

export interface SyllabusLink {
  year: string;
  id: string;
}

export interface SyllabusCategory {
  name: string;
  links: SyllabusLink[];
}

export interface YearSection {
  year: string;
  body: string;
}

export interface ActivityImage {
  src: string;
  alt: string;
}

export interface DepartmentActivityEntry {
  coverImage?: ActivityImage;
  title: string;
  topic?: string;
  date: string;
  venue: string;
  audience: string;
  conductedBy: string;
  overview: string;
  objectives: string[];
  impact: string;
  conclusion: string;
  tags?: string[];
  images?: ActivityImage[];
}

export interface ExploreTabData {
  title: string;
  body: string;
  highlights: string[];
  yearSections?: YearSection[];
  syllabusLinks?: SyllabusLink[];
  syllabusCategories?: SyllabusCategory[];
  entries?: DepartmentActivityEntry[];
}

export interface DepartmentData {
  id: string;
  name: string;
  title: string;
  vision: string;
  mission: string;
  hod: Faculty;
  faculty: Faculty[];
  recruiters: { name: string; logo: string }[];
  exploreData?: {
    about?: ExploreTabData;
    thrust?: ExploreTabData;
    peo?: ExploreTabData;
    syllabus?: ExploreTabData;
    placements?: ExploreTabData;
    research?: ExploreTabData;
    facultyStaff?: ExploreTabData;
    facilities?: ExploreTabData;
    workshop?: ExploreTabData;
    clubs?: ExploreTabData;
    achievements?: ExploreTabData;
    activities?: ExploreTabData;
    newsletter?: ExploreTabData;
  };
}
