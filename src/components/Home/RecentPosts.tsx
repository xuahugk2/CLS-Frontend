// Custom components/libs
import { Blog, allBlogs } from '@/contentlayer/generated';
import { sortBlogs } from '@/utils';
import Link from 'next/link';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

interface RecentPostsType {
  blogs: Blog[];
}

const RecentPosts = ({ blogs }: RecentPostsType) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className="inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href={'/categories/all'}
          className="inline-block font-medium text-accent underline underline-offset-2 text-lg"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-16 mt-16">
        {sortedBlogs.slice(4, allBlogs.length).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
