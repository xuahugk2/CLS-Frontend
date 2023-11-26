import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
// Custom components/libs
import { cx } from '@/utils';

interface CategoryType {
  link: string;
  name: string;
  isActive: boolean;
  props: {
    className: string;
  };
}

const classes: string[] = [
  'inline-block',
  'm-2 py-1.5 md:py-2 px-6 md:px-10',
  'rounded-full',
  'border-2 border-solid border-dark dark:border-light',
  'hover:scale-105 transition-all ease-in-out duration-200',
];

const Category = ({ link = '#', name = '', isActive, props }: CategoryType) => {
  const { className } = props;
  const activeCss = isActive ? 'bg-dark text-light dark:bg-light dark:text-dark' : 'bg-light text-dark dark:bg-dark dark:text-light';

  return (
    <Link href={link} className={cx(...classes, className, activeCss)}>
      #{name}
    </Link>
  );
};

export default Category;
