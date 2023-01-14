import { SentMail } from '@/types';
import { useState } from 'react';

import SentMailCard from './SentMailCard';
import { sentMailStub } from '@/stubs';

export default function SentMailTab() {
  const [selectedMail, setSelectedMail] = useState<SentMail>();

  const handleMailCardClick = (mail: SentMail) => {
    setSelectedMail(mail);
  };

  return (
    <>
      <div className="flex space-x-4">
        <div>
          {sentMailStub.map((mail) => (
            <div key={mail.id}>
              <SentMailCard mail={mail} handleClick={handleMailCardClick} />
            </div>
          ))}
        </div>
        {/* {selectedMail && <MailContent mail={selectedMail} />} */}
      </div>
    </>
  );
}
