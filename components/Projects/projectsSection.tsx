import Reveal from "../reveal";
import Title from "../title";
import Project from "./project";
import type { Dictionary } from "../../lib/i18n-types";

interface ProjectsSectionProps {
  dictionary: Dictionary;
}

const ProjectsSection = ({ dictionary }: ProjectsSectionProps) => {
  const t = dictionary.Projects;

  // Convert the dictionary project entries into a typed array
  const projects = [
    t.Techquity,
    t.Skolon,
    t.Kubicom,
    t.FurhoffsStala,
    t.GalioOfSweden,
    t.Dugga,
  ];

  return (
    <section className="w-full mb-16">
      <Reveal>
        <Title title={t.sectionTitle} />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <Project
              title={p.title}
              description={p.description}
              role={`${t.rolePrefix} ${p.role}`}
              length={`${t.lengthPrefix} ${p.length}`}
              visitProject={t.visitProject}
              workplace={`${t.workplacePrefix} ${p.workplace}`}
              url={p.url}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
