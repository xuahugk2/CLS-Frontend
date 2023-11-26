import React from 'react';
import Image from 'next/image';
import { slug } from 'github-slugger';
// Custom components/libs
import { Blog, ImageFieldData, allBlogs } from '@/contentlayer/generated';
import Tag from '@/components/Elements/Tag';
import BlogDetail from '@/components/Blog/BlogDetail';
import RenderMdx from '@/components/Blog/RenderMdx';
import SiteMetadata from '@/utils/SiteMetadata';

interface Toc {
  level: string;
  text: string;
  slug: string;
}

export async function generateStaticParams() {
  const blogs = allBlogs.map((blog) => {
    slug: blog._raw.flattenedPath;
  });

  return blogs;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: Blog = allBlogs.find(
    (blog) => blog._raw.flattenedPath === params.slug
  )!;
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [SiteMetadata.socialBanner];
  if (blog.image) {
    imageList = [
      SiteMetadata.siteUrl + blog.image.filePath.replace('../public', ''),
    ];
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes('http') ? img : SiteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : SiteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: SiteMetadata.siteUrl + blog.url,
      siteName: SiteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [SiteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

function BlogPage({ params }: { params: { slug: string } }) {
  const blog: Blog = allBlogs.find(
    (b) => b._raw.flattenedPath === params.slug
  )!;

  let imageList = [SiteMetadata.socialBanner];
  if (blog.image) {
    imageList = [
      SiteMetadata.siteUrl + blog.image.filePath.replace('../public', ''),
    ];
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        '@type': 'Person',
        name: blog?.author ? [blog.author] : SiteMetadata.author,
        url: SiteMetadata.twitter,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={(blog.tags && blog.tags[0]) || ''}
              link={`/categories/${blog.tags && slug(blog.tags[0])}`}
              props={{
                className: 'px-6 text-sm py-2',
              }}
            />
            <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              {blog.title}
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          <Image
            src={blog.image?.filePath.replace('../public', '') || ''}
            placeholder="blur"
            blurDataURL={blog.image?.blurhashDataUrl}
            alt={blog.title}
            width={blog.image?.width}
            height={blog.image?.height}
            className="aspect-square w-full h-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <BlogDetail blog={blog} slug={params.slug} />

        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading: Toc) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       data-[level=four]:pl-10
                                       flex items-center justify-start
                                       "
                      >
                        {['three', 'four', 'five', 'six'].includes(heading.level) ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}

                        <span className="hover:underline text-ellipsis overflow-hidden whitespace-nowrap">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <RenderMdx blog={blog} />
        </div>
      </article>
    </>
  );
}

export default BlogPage;
