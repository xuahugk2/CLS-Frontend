import { Blog, allBlogs } from '@/contentlayer/generated';
import GithubSlugger, { slug } from 'github-slugger';
// Custom components/libs
import Categories from '@/components/Category/Categories';
import BlogLayoutThree from '@/components/Blog/BlogLayoutThree';

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories: string[] = [];
  const paths = [{ slug: 'all' }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags?.map((tag) => {
        const slugFiled = slugger.slug(tag);
        if (!categories.includes(slugFiled)) {
          categories.push(slugFiled);
          paths.push({ slug: slugFiled });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `${capitalize(params.slug.replaceAll('-', ' '))} Blogs`,
    description: `Learn more about ${
      params.slug === 'all' ? 'web development' : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}

function capitalize(title: string) {
  return title.replace(/\b\w/g, function (t) {
    return t.toUpperCase();
  });
}

const CategoriesPage = ({ params }: { params: { slug: string } }) => {
  const allCategories: string[] = ['all'];
  const blogs: Blog[] = allBlogs.filter((blog) => {
    return blog?.tags!.some((tag) => {
      const slugField = slug(tag);
      if (!allCategories.includes(slugField)) {
        allCategories.push(slugField);
      }
      if (params.slug === 'all') {
        return true;
      }
      return slugField === params.slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoriesPage;
