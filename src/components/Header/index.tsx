import Link from 'next/link';
// Custom components/libs
import Logo from './Logo';
import { GithubIcon, LinkedInIcon, SunIcon } from '../Icons';
import SiteMetadata from '@/utils/SiteMetadata';

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href={'/'} className="mr-2">
          Home
        </Link>
        <Link href={'/about'} className="mr-2">
          About
        </Link>
        <Link href={'/contact'} className="mr-2">
          Contact
        </Link>
        <button>
          <SunIcon className="" />
        </button>
      </nav>
      <div>
        <Link
          href={SiteMetadata.linkedin}
          target={'_blank'}
          className="inline-block w-6 h-6 mr-6"
        >
          <LinkedInIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
        </Link>
        <Link
          href={SiteMetadata.github}
          target={'_blank'}
          className="inline-block w-6 h-6 mr-6"
        >
          <GithubIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
