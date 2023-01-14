import { useState } from 'react';

import { Mail } from '@/types';
import { inboxMailStub, outboxMailStub } from '@/stubs';
import MailCard from '../../components/mailCard';
import MailContent from '../../components/mailContent/MailContent';
import { useRouter } from 'next/router';

type MailOverlayProps = {
  isOutbox?: boolean;
};

export default function MailOverlay({ isOutbox }: MailOverlayProps) {
  const [selectedMail, setSelectedMail] = useState<Mail>();

  const handleMailCardClick = (mail: Mail) => {
    setSelectedMail(mail);
  };

  const dynamicMailStub = isOutbox ? outboxMailStub : inboxMailStub;

  return (
    <div className="flex space-x-4 h-96">
      <div className="space-y-2">
        {dynamicMailStub.map((mail: Mail) => {
          const mailLabel = (isOutbox ? mail.to : mail.from) as string;

          return (
            <div key={mail.id}>
              <MailCard
                mail={mail}
                label={mailLabel}
                selectedMail={selectedMail}
                handleClick={handleMailCardClick}
                showEta={isOutbox}
              />
            </div>
          );
        })}
      </div>
      {selectedMail ? (
        <MailContent mail={selectedMail} isOutbox={isOutbox} />
      ) : (
        <div className="flex w-full items-center justify-center">
          <p className="text-sm font-semibold text-gray-400">
            Select a mail to view its contents
          </p>
        </div>
      )}
    </div>
  );
}
