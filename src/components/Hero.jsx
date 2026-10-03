import { scrollTo } from "../utils";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex scroll-mt-20 flex-col-reverse items-start gap-10 py-24 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600">
          📍 Damascus, Syria
        </p>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          Mowafak <br /> Arida
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-600">
          Software Engineer / Web Developer. I build web apps with ASP.NET Core
          and React. Software Engineering student at the University of Damascus.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("projects")}
            className="rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
          >
            See my projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
          >
            Contact me
          </button>
        </div>
      </div>

      <img
        src="/mowafak4.jpeg"
        alt="Mowafak Arida"
        className="h-40 w-40 shrink-0 rounded-full object-cover sm:h-56 sm:w-56"
      />
      {/* <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-5xl font-extrabold text-white sm:h-56 sm:w-56 sm:text-6xl">
        MA
      </div> */}
    </section>
  );
};

export default Hero;
