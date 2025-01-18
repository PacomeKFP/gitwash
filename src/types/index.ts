export interface Challenge {
  icon: React.ElementType;
  title: string;
  domain: string;
  description: string;
  learnings: string[];
  keywords: string[];
}

export interface InfoCard {
  icon: React.ElementType;
  title: string;
  status: string;
  description: string;
}

export interface WorkshopApplication {
  id: number;
  name: string;
  email: string;
  whatsapp?: string;
  domain: string;
  workshop: string;
  description: string;
  createdAt?: string | Date;
}