import Image from 'next/image';
import Link from 'next/link';
// Image
import profileImg from '/public/profile-img.png';

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center text-dark'>
      <div className='w-16 rounded-full overflow-hidden border border-solid border-dark mr-4'>
        <Image src={profileImg} alt={'Coding Life Sharing'} className='w-full h-auto rounded-full' />
      </div>
      <span className='font-bold text-xl'>Coding Life Sharing</span>
    </Link>
  );
};

export default Logo;
