import React from 'react';
import Image from 'next/image';
// Custom components/libs
import { Blog, allBlogs } from '@/contentlayer/generated';
import Tag from '@/components/Elements/Tag';
import BlogDetail from '@/components/Blog/BlogDetail';
import RenderMdx from '@/components/Blog/RenderMdx';

interface Toc {
  level: string;
  text: string;
  slug: string;
}

function BlogPage({ params }: { params: { slug: string } }) {
  const blog: Blog = allBlogs.find(
    (b) => b._raw.flattenedPath === params.slug
  )!;

  console.log(blog.toc);
  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={(blog?.tags && blog?.tags[0]) || ''}
            link={`/categories/${blog?.tags && blog?.tags[0]}`}
            props={{ className: 'px-6 text-sm py-2' }}
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-5/6">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
        <Image
          src={blog.image?.filePath?.replace('../public', '') || ''}
          placeholder={'blur'}
          blurDataURL={blog.image?.blurhashDataUrl}
          alt={blog.title}
          width={blog.image?.width}
          height={blog.image?.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>

      <BlogDetail blog={blog} slug={params.slug} />
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details
            className="border-r-[1px] border-dark border-solid dark:border-light dark:text-light p-4 sticky text-dark top-6"
            open={true}
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table of Contents
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog.toc.map((heading: Toc) => (
                <li key={`#${heading.slug}`} className="py-1">
                  <a
                    href={`#${heading.slug}`}
                    data-level={heading.level}
                    className="data-[level=two]:pl-0 data-[level=two]:pt-2
                                data-[level=two]:border-t border-solid border-dark/40

                                data-[level=three]:pl-4
                                sm:data-[level=three]:pl-6

                                data-[level=four]:pl-8
                                sm:data-[level=four]:pl-12

                                flex items-center justify-start"
                  >
                    {['three', 'four', 'five', 'six'].includes(
                      heading.level
                    ) ?
                      <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                        &nbsp;
                      </span>
                      : null}

                    <span className="hover:underline">{heading.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <div className="col-span-8">
          <RenderMdx blog={blog} />
        </div>
      </div>
    </article>
  );
}

export default BlogPage;
