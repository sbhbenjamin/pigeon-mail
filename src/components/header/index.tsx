import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useState, useRef } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const handleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isActiveLink = (link: string) => {
    return link === router.pathname;
  };

  const navbarLinkStyle = (path: string) =>
    `${
      isActiveLink(path) ? 'text-blue-900' : 'text-black'
    } hover:text-blue-700 transition-all`;

  return (
    <div className="my-8">
      <div className="flex justify-center h-10">
        <Link className="text-xl font-black" href="/inbox">
          pigeon-mail
        </Link>
      </div>
      <div className="flex justify-between my-4">
        <div className="flex space-x-8">
          <div className={navbarLinkStyle('/compose')}>
            <Link href="/compose" className="font-semibold text-lg">
              Compose
            </Link>
          </div>
          <div className={navbarLinkStyle('/inbox')}>
            <Link href="/inbox" className="font-semibold text-lg">
              Inbox
            </Link>
          </div>
          <div className={navbarLinkStyle('/outbox')}>
            <Link href="/outbox" className="font-semibold text-lg">
              Outbox
            </Link>
          </div>
        </div>
        <div className={`${dropdownOpen && 'bg-slate-200'} relative px-4`}>
          <button
            className="font-semibold text-lg"
            onClick={handleDropdownOpen}
          >
            {session?.user?.name}
          </button>
          {dropdownOpen && (
            <ul
              className={`${
                dropdownOpen && 'bg-slate-200'
              } absolute w-full -mx-4 transition-all`}
            >
              <li className="my-2">
                <button className="w-full">Profile</button>
              </li>
              <li className="my-2">
                <button className="w-full text-red-700 font-bold">
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
