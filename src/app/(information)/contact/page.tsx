import { Metadata } from 'next';
// Custom components/libs
import ContactForm from '@/components/Contact/ContactForm';
import LottieAnimation from '@/components/Contact/LottieAnimation';
import SiteMetadata from '@/utils/SiteMetadata';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: `Contact me through the form available on this page or email me at ${SiteMetadata.email}`,
};

const ContactPage = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark">
        <LottieAnimation />
      </div>
      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Let&apos;s Connect!</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
