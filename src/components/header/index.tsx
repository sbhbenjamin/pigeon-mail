import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const isActiveLink = (link: string) => {
    return link === router.pathname;
  };

  const navbarLinkStyle = (path: string) =>
    `${
      isActiveLink(path) ? 'text-blue-900' : 'text-black'
    } hover:text-blue-700 transition-all`;

  return (
    <>
      <div className="flex justify-end h-10">
        <Link className="text-xl font-black" href="/inbox">
          pigeon-mail
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-8">
          <div className={navbarLinkStyle('/inbox')}>
            <Link href="/inbox" className="font-semibold text-lg">
              Inbox
            </Link>
          </div>
          <div className={navbarLinkStyle('/outbox')}>
            <Link href="outbox" className="font-semibold text-lg">
              Sent Mail
            </Link>
          </div>
        </div>
        <div className={navbarLinkStyle('/post')}>
          <Link href="post" className="font-semibold text-lg">
            Post
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
