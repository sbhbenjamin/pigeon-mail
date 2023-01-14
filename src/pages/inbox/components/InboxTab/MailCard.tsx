import { Mail } from '@/types';

type MailCardProps = {
  mail: Mail;
  handleClick: (selectedMail: Mail) => void;
};

const MailCard = ({ mail, handleClick }: MailCardProps) => {
  return (
    <div className="px-4 py-2 bg-slate-200" onClick={() => handleClick(mail)}>
      <h1>{mail.from || 'unsigned'}</h1>
    </div>
  );
};

export default MailCard;
