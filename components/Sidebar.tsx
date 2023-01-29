import PopularTopics from './PopularTopics';
import { RiHomeSmileFill } from 'react-icons/ri';
import SuggestedAccounts from './SuggestedAccounts';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className='w-16 lg:w-full lg:max-w-sm mr-2 lg:mr-4 pr-2 border-r border-r-gray-100 lg:pr-4 h-[calc(100vh-96px)] overflow-hidden overflow-y-auto'>
      <Link
        href='/'
        className={`${
          router.asPath === '/' &&
          'text-secondary bg-gray-200 lg:bg-transparent'
        } inline-block  lg:flex items-center px-3 py-3 lg:py-2 rounded-full lg:rounded-sm text-xl font-bold hover:bg-gray-200`}
      >
        <RiHomeSmileFill size={23} />
        <p className='ml-2 hidden lg:block'>For You</p>
      </Link>

      <div className='h-[1px] bg-gray-200 my-3' />

      <PopularTopics />

      <SuggestedAccounts />
    </aside>
  );
}
