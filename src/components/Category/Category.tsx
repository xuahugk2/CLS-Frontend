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
  'inline-block m-2 py-2 px-10',
  'rounded-full',
  'font-semibold',
  'border-2 border-solid border-dark',
  'hover:scale-105 transition-all ease-in-out duration-200',
];

const Category = ({ link = '#', name = '', isActive, props }: CategoryType) => {
  const { className } = props;
  const activeCss = isActive ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <Link href={link} className={cx(...classes, className, activeCss)}>
      #{name}
    </Link>
  );
};

export default Category;
