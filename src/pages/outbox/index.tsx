import { useState } from 'react';

import { SentMail } from '@/types';
import { sentMailStub } from '@/stubs';
import SentMailCard from './components/SentMailCard';

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
        <div>{selectedMail?.to}</div>
      </div>
    </>
  );
}
