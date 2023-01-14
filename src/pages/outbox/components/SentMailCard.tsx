import { SentMail } from '@/types';

type MailCardProps = {
  mail: SentMail;
  handleClick: (selectedMail: SentMail) => void;
};

const MailCard = ({ mail, handleClick }: MailCardProps) => {
  return (
    <div className="px-4 py-2 bg-slate-200" onClick={() => handleClick(mail)}>
      <h1>{mail.to}</h1>
    </div>
  );
};

export default MailCard;
