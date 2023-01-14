import { Mail } from '@/types';

type MailContentProps = {
  mail: Mail;
  isOutbox?: boolean;
};

const MailContent = ({ isOutbox, mail }: MailContentProps) => {
  console.log(mail);
  return (
    <div
      className={`${
        isOutbox ? 'bg-gray-50 text-gray-400' : 'bg-white'
      } px-4 py-2  w-full space-y-4`}
    >
      <div>
        {isOutbox ? (
          <div className="flex">
            <p className="text-xs text-gray-500">To: {mail.to}</p>
          </div>
        ) : (
          <div className="flex">
            <p className="text-xs text-gray-500">
              From: {mail.from || 'Anonymous'}
            </p>
          </div>
        )}

        <div className="flex">
          <p className="text-xs text-gray-500">Date: {mail.timestamp}</p>
        </div>
      </div>
      <h1>{mail.content}</h1>
    </div>
  );
};

export default MailContent;
