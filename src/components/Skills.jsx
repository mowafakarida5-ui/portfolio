//  هون رح يكون فيه قسم المهارات المقسمة لاكتر من شغلة

import { skills } from "../data.js";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <h2 className="mb-8 text-3xl font-bold">Skills</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="mb-3 text-lg font-semibold">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
