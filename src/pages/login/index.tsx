import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();
  return (
    <div className="flex h-screen justify-center items-center flex-col space-y-4">
      <h1>{JSON.stringify(session?.user?.name)}</h1>
      <h1 className="text-3xl font-black">pigeon-mail</h1>
      <button
        className="px-20 py-4 bg-gray-200 rounded-sm font-bold text-gray-500"
        onClick={() => signIn()}
      >
        Sign in with SSO
      </button>
    </div>
  );
}
