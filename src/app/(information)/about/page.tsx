import Link from 'next/link';
import { Metadata } from 'next';
// Custom components/libs
import AboutCoverSection from '@/components/About/AboutCoverSection';
import Skills from '@/components/About/Skills';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Here are some details about my self.',
};

const AboutPage = () => {
  return (
    <div>
      <AboutCoverSection />
      <Skills />
      <h2
        className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20
                    text-dark dark:text-light dark:font-normal"
      >
        Have a project in mind? Reach out to me 📞 from{' '}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{' '}
        and let&apos;s make it happen.
      </h2>
    </div>
  );
};

export default AboutPage;
