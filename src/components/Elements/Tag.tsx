import Link from 'next/link';
import React from 'react';
// Custom components/libs
import { cx } from '@/utils';

interface TagType {
  link: string,
  name: string,
  props: {
    className: string
  }
}

const classes: string[] = [
  'inline-block py-3 px-10',
  'bg-dark text-light',
  'rounded-full',
  'capitalize font-semibold',
  'border-2 border-solid border-light',
  'hover:scale-105 transition-all ease-in-out duration-200',
];

const Tag = ({ link = '#', name, props }: TagType) => {
  const { className } = props;

  return (
    <Link href={link} className={cx(...classes, className)}>
      {name}
    </Link>
  );
};

export default Tag;
