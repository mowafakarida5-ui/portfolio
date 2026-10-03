// فيه قسم المشاريع الاسم والمشاريعع والتقنيات المستخدمة
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-slate-600">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-auto pt-5 font-medium text-blue-600 hover:underline"
            >
              View code →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
