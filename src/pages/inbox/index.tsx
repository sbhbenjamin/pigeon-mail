import { Mail } from '@/types';
import { useState } from 'react';

import InboxTab from './components/InboxTab';

export default function Inbox() {
  const [selectedTab, setSelectedTab] = useState<string>();

  return (
    <>
      <div className="flex space-x-8">
        <div className="" onClick={() => setSelectedTab('inbox')}>
          <h2 className="font-semibold text-lg">Inbox</h2>
        </div>
        <div className="bg-teal-100" onClick={() => setSelectedTab('sent')}>
          <h2 className="font-semibold text-lg">Sent Mail</h2>
        </div>
      </div>
    </>
  );
}
