// Custom components/libs

const SkillList = [
  'next.js',
  'tailwind css',
  'figma',
  'javaScript',
  'web design',
  'Gatsby.js',
  'strapi',
  'firebase',
  'generative AI',
  'wireframing',
  'SEO',
  'framer motion',
  'sanity',
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-20 border-b-2 border-solid border-dark text-dark">
      <span className="font-semibold text-4xl text-accent">
        I&apos;m comfortable in...
      </span>
      <ul className="flex flex-wrap mt-8 justify-start">
        {SkillList.map((skill, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-2xl py-5 px-12 border-2 border-solid border-dark
              rounded mr-6 mb-6 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer"
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
