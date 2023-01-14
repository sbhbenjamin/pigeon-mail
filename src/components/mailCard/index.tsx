import { Mail } from '@/types';

type MailCardProps = {
  mail: Mail;
  label: string;
  handleClick: (selectedMail: Mail) => void;
  selectedMail: Mail | undefined;
  showEta?: boolean;
};

const MailCard = ({
  mail,
  selectedMail,
  showEta,
  label,
  handleClick,
}: MailCardProps) => {
  const isSelected = mail === selectedMail;
  return (
    <div
      className={`${
        isSelected ? 'border-l-4 border-indigo-500 bg-white' : 'bg-white'
      } px-4 py-3  shadow-sm cursor-pointer h-24 w-56 flex flex-col justify-between`}
      onClick={() => handleClick(mail)}
    >
      <div>
        <h1 className="text-xs text-gray-500">18/08/2022</h1>
        <h1 className="text-sm font-bold">{label}</h1>
      </div>
      {showEta && (
        <div className="flex justify-end">
          <h1 className="text-sm font-semibold text-gray-500">
            ~{mail.delay} days
          </h1>
        </div>
      )}
    </div>
  );
};

export default MailCard;
