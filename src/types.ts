export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface AcademicCredential {
  id: string;
  level: string;
  title: string;
  institution?: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  actionText: string;
}

export interface DiplomaticRole {
  id: string;
  organization: string;
  role: string;
  jurisdiction: string;
  description: string;
  category: 'diplomacia' | 'monarquia' | 'cultura';
}

export interface MediaResource {
  id: string;
  title: string;
  channel: string;
  type: 'video' | 'documento';
  url: string;
  description: string;
  badge: string;
}
