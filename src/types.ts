export type Mail = {
  id: number;
  from?: string | null;
  to?: string;
  content: string;
  timestamp: number;
  delay?: number;
};
