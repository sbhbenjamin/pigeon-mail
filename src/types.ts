export type Mail = {
  id: number;
  from: string | null;
  content: string;
};

export type SentMail = {
  id: number;
  to: string;
  content: string;
};
