import { useState } from 'react';

import { SentMail } from '@/types';
import InboxTab from './components/InboxTab';

export default function Inbox() {
  const [selectedTab, setSelectedTab] = useState<string>();

  const handleSelectInboxTab = () => {
    setSelectedTab('inbox');
  };

  const handleSelectSentTab = () => {
    setSelectedTab('sent');
  };

  const noTabSelected = !selectedTab;
  const inboxTabIsSelected = selectedTab === 'inbox';
  const sentTabIsSelected = selectedTab === 'sent';

  return (
    <>
      <div className="flex space-x-8">
        <div className="" onClick={handleSelectInboxTab}>
          <h2 className="font-semibold text-lg">Inbox</h2>
        </div>
        <div className="bg-teal-100" onClick={handleSelectSentTab}>
          <h2 className="font-semibold text-lg">Sent Mail</h2>
        </div>
      </div>

      {(inboxTabIsSelected || noTabSelected) && <InboxTab />}
      {sentTabIsSelected}
    </>
  );
}
