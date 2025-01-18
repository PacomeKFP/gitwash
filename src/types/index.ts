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

export type Speaker = {
  name: string;
  email: string;
  title: string;
  avatar: string;
};

export type Schedule = {
  date: string; // Format ISO8601 (YYYY-MM-DD)
  time: string; // Format HH:mm
  duration: string; // Durée au format "2h", "30min", etc.
};

export type WorkshopType = {
  speaker: Speaker;
  schedule: Schedule;
  domain: string;
  theme: string;
  description: string;
};