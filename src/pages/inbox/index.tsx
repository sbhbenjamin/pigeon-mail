import { useState } from 'react';

import { Mail } from '@/types';
import { inboxMailStub } from '@/stubs';
import MailCard from './components/InboxTab/MailCard';
import MailContent from './components/InboxTab/MailContent';

export default function InboxTab() {
  const [selectedMail, setSelectedMail] = useState<Mail>();

  const handleMailCardClick = (mail: Mail) => {
    setSelectedMail(mail);
  };

  return (
    <>
      <div className="flex space-x-4">
        <div>
          {inboxMailStub.map((mail) => (
            <div key={mail.id}>
              <MailCard mail={mail} handleClick={handleMailCardClick} />
            </div>
          ))}
        </div>
        {selectedMail && <MailContent mail={selectedMail} />}
      </div>
    </>
  );
}
