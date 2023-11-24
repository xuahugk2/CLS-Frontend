import React from 'react';
import Category from './Category';
// Custom components/libs

interface CategoriesType {
  categories: string[];
  currentSlug: string;
}
const Categories = ({ categories, currentSlug }: CategoriesType) => {
  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((category) => (
        <Category
          key={category}
          link={`/categories/${category}`}
          name={category}
          isActive={category === currentSlug}
          props={{ className: '' }}
        />
      ))}
    </div>
  );
};

export default Categories;
