export interface ContactButtons {
  email: string;
  linkedin: string;
  emailUrl: string;
  linkedinUrl: string;
}

export interface HomeDictionary {
  name: string;
  aboutTitle: string;
  aboutParagraph: string;
  skillsTitle: string;
  skills: string[];
  projectsTitle: string;
  contactTitle: string;
  contactText: string;
  profileRole: string;
  yearsInIndustry: string;
  yearsTooltip: string;
  ContactButtons: ContactButtons;
  generateCoverLetter: string;
  pasteJobDescription: string;
  generating: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  role: string;
  length: string;
  workplace: string;
  url: string;
}

export interface ProjectsDictionary {
  sectionTitle: string;
  workplacePrefix: string;
  rolePrefix: string;
  lengthPrefix: string;
  visitProject: string;

  Techquity: ProjectEntry;
  Skolon: ProjectEntry;
  Kubicom: ProjectEntry;
  FurhoffsStala: ProjectEntry;
  GalioOfSweden: ProjectEntry;
  Dugga: ProjectEntry;
}

export interface Dictionary {
  Home: HomeDictionary;
  Projects: ProjectsDictionary;
}

export type Locale = "en" | "sv";
