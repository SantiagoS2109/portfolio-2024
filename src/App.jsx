import SectionProjects from "./features/sections/SectionProjects";
import SectionEducation from "./features/sections/SectionEducation";
import SectionHero from "./features/sections/SectionHero";
import SectionAboutMe from "./features/sections/SectionAboutMe";
import Nav from "./features/ui/Nav";

import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useRef, useState } from "react";
import SectionSkills from "./features/sections/SectionSkills";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      // staleTime: 0,
    },
  },
});

const year = new Date().getFullYear();

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-430px" },
    );
    console.log(isIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <div className="absolute bottom-0 top-0 z-[-2] min-h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Nav isIntersecting={isIntersecting} />
        <main className="mx-auto max-w-4xl  px-4 py-8">
          <SectionHero reference={ref} />
          <SectionProjects />
          <SectionEducation />
          <SectionAboutMe />
          <SectionSkills />
        </main>
        <footer className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6 text-xs text-gray-500 md:text-base">
          <p className="w-1/2 md:w-full">
            &copy; {year}{" "}
            <a href="https://www.linkedin.com/in/santiago-sepúlveda-022a8a217/">
              Santiago Sepúlveda.
            </a>{" "}
            Casi todos los derechos reservados
          </p>

          <div className="flex gap-3">
            <a
              className="font-bold transition-all duration-300 hover:underline"
              href="#proyectos"
            >
              Proyectos
            </a>
            <a
              className="font-bold transition-all duration-300 hover:underline"
              href="mailto:santiagosepul2109@gmail.com?Subject=Interesado%20en%20contactarte"
            >
              Contacto
            </a>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
