interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-900 dark:text-indigo-300 border-b-2 border-indigo-200 dark:border-indigo-700 pb-2">
      {title}
    </h2>
  );
};

export default Title;