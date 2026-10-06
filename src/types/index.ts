export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  indications: string[];
  preparation: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  neighborhood: string;
  condition: string;
  comment: string;
  rating: number;
  year: string;
}

export interface ClinicImage {
  id: string;
  url: string;
  title: string;
  category: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
