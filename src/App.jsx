import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Mowafak Arida
        </footer>
      </main>
    </div>
  );
}
