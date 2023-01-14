import { Mail } from '@/types';

type MailContentProps = {
  mail: Mail;
};

const MailContent = ({ mail }: MailContentProps) => {
  return (
    <div className="px-4 py-2 bg-red-200 w-full">
      <h1>{mail.content}</h1>
    </div>
  );
};

export default MailContent;
