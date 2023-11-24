'use client';
import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
// Custom components/libs
import { Blog } from '@/contentlayer/generated';

interface RenderMdxType {
  blog: Blog;
}

const MdxComponent = {
  Image,
};

const RenderMdx = ({ blog }: RenderMdxType) => {
  const MdxContent = useMDXComponent(blog.body.code);
  return (
    <div
      className="font-in prose prose-lg max-w-max
                    prose-blockquote:bg-accent/20
                    prose-blockquote:p-2
                    prose-blockquote:px-6
                    prose-blockquote:border-accent
                    prose-blockquote:not-italic
                    prose-blockquote:rounded-r-lg
                    prose-li:marker:text-accent"
    >
      <MdxContent components={MdxComponent} />
    </div>
  );
};

export default RenderMdx;