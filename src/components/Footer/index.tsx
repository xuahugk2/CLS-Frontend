'use client';
import Link from 'next/link';
import React from 'react';
import { FieldValue, SubmitHandler, useForm } from 'react-hook-form';
// Custom components/libs
import { LinkedInIcon, GithubIcon } from '../Icons';

interface FormDataType {
  email: string;
}

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email..."
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          value="Submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
        <Link
          href={'https://www.linkedin.com/in/nguyen-xuan-hung-b25154193/'}
          target={'_blank'}
          className="inline-block w-6 h-6 mr-4"
        >
          <LinkedInIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
        </Link>
        <Link
          href={'https://github.com/xuahugk2'}
          target={'_blank'}
          className="inline-block w-6 h-6 mr-4 fill-light"
        >
          <GithubIcon className="hover:scale-125 transition-all ease-in-out duration-200" />
        </Link>
      </div>
      <div className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-center">
          &copy;{new Date().getUTCFullYear()} CLS. All right reserved.
        </span>
        <Link href={'/sitemap.xml'} className="text-center underline">
          sitemap.xml
        </Link>
        <div className="text-center">
          Make with &heart; by{' '}
          <Link href={'http://localhost:3000/'} className="underline">
            CLS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
