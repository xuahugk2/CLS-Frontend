import Image from 'next/image';
import Link from 'next/link';
import { slug } from 'github-slugger';
// Custom components/libs
import { Blog } from '@/contentlayer/generated';
import Tag from '../Elements/Tag';

interface BlogLayoutOneType {
  blog: Blog;
}

const BlogLayoutOne = ({ blog }: BlogLayoutOneType) => {
  return (
    <div className="group inline-block overflow-hidden rounded-2xl">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10" />
      <Image
        src={blog.image?.filePath?.replace('../public', '') || ''}
        placeholder={'blur'}
        blurDataURL={blog.image?.blurhashDataUrl}
        alt={blog.title}
        width={blog.image?.width}
        height={blog.image?.height}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease-in-out duration-300"
      />
      <div className="w-full absolute bottom-0 p-10 z-20">
        <Tag
          link={`/categories/${blog?.tags && slug(blog?.tags[0])}`}
          name={(blog?.tags && blog?.tags[0]) || ''}
          props={{
            className: 'p-6 text-sm py-2 !border',
          }}
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-2xl text-light mt-4">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
