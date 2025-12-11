interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <li className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 shadow-sm hover:scale-105 transition-transform">
      {skill}
    </li>
  );
};

export default Skill;
