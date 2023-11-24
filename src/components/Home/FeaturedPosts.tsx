// Custom components/libs
import { Blog } from '@/contentlayer/generated';
import { sortBlogs } from '@/utils';
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';

interface FeaturedPostsType {
  blogs: Blog[];
}

const FeaturedPosts = ({ blogs }: FeaturedPostsType) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        Featured Posts
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <article className="col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={blogs[1]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={blogs[2]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={blogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
