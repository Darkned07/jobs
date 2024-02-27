export interface jobInfo {
  id: string;
  company: string;
  logo: string;
  new: boolean;
  featured: Blob;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}
