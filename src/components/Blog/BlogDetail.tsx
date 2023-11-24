import React from 'react';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
// Custom components/libs
import { Blog } from '@/contentlayer/generated';

interface BlogDetailType {
  blog: Blog;
  slug: string;
}

const BlogDetail = ({ blog, slug }: BlogDetailType) => {
  return (
    <div className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
      </time>
      <span className="m-3">1.000.000 views</span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${blog?.tags && blog?.tags[0]}`} className="m-3">
        #{blog?.tags && blog?.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetail;
