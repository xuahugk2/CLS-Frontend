import Image from 'next/image';
import Link from 'next/link';
// Image
import profileImg from '/public/profile-img.png';

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center text-dark dark:text-light'>
      <div className='w-16 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-2 md:mr-4'>
        <Image src={profileImg} alt={'Coding Life Sharing'} className='w-full h-auto rounded-full' />
      </div>
      <span className='font-bold dark:font-semibold text-lg sm:text-xl'>Coding Life Sharing</span>
    </Link>
  );
};

export default Logo;
