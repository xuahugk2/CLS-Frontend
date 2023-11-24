import { allBlogs } from '@/contentlayer/generated';
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

const CategoriesPage = ({ params }: { params: { slug: string } }) => {
  const allCategories: string[] = ['all'];
  const blogs = allBlogs.filter((blog) => {
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
    <article className="mt-12 flex flex-col text-dark">
      <div className="px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid grid-cols-3 gap-16 mt-24 px-32">
        {blogs.map((blog, index) => (
          <article className="col-span-1 row-span-1 relative" key={index}>
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoriesPage;
