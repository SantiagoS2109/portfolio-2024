import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import IconImg from "../assets/heroimg-dark.webp";

import { QueryClient, QueryClientProvider } from "react-query";
import SectionProjects from "./SectionProjects";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      // staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div className="absolute top-0 z-[-2] h-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>{" "}
        <main className="mx-auto max-w-4xl  px-4 py-8">
          <nav className="mx-auto sm:w-3/5">
            <ul className="flex justify-evenly rounded-full bg-gray4 px-4 py-2 text-sm font-medium shadow-md md:text-base">
              <li>
                {" "}
                <a href="#proyectos">Proyectos</a>
              </li>
              <li>
                {" "}
                <a href="#educacion">Educación</a>
              </li>
              <li>
                {" "}
                <a href="#sobremi">Sobre mí</a>
              </li>
              <li>
                {" "}
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>

          <section className="mx-auto mt-16 flex flex-col items-center md:w-4/5">
            <picture>
              <img
                className=" aspect-square w-24 rounded-full"
                src={IconImg}
                alt="Santiago Sepúlveda Icon"
              />
            </picture>
            <h1 className="mt-3 font-RedHat text-4xl font-bold text-gray9 sm:text-6xl">
              Hola, soy Santiago
            </h1>
            <p className="mt-4 text-center text-lg sm:w-2/3 sm:text-2xl">
              Ingeniero Multimedia.{" "}
              <span className="font-medium text-cyan8">
                {" "}
                Desarrollador Web y Animador 3D.
              </span>{" "}
              <span className="font-medium text-teal8">
                De Cúcuta, Colombia.
              </span>{" "}
              Apasionado por la creatividad.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className="rounded-full border border-cyan bg-gray4 px-4 py-1 font-medium text-cyan transition-all duration-300 hover:bg-cyan hover:text-white">
                <a className="flex items-center gap-2" href="">
                  <LinkedinLogo size={24} weight="bold" />
                  <span>Linkedin</span>
                </a>
              </button>

              <button className="rounded-full border border-cyan bg-gray4 px-4 py-1 font-medium text-cyan transition-all duration-300 hover:bg-cyan hover:text-white">
                <a className="flex items-center gap-2" href="">
                  <GithubLogo size={24} weight="bold" />
                  <span>Github</span>
                </a>
              </button>

              <button className="rounded-full border border-cyan bg-gray4 px-4 py-1 font-medium text-cyan transition-all duration-300 hover:bg-cyan hover:text-white">
                <a className="flex items-center gap-2" href="">
                  <Envelope size={24} weight="bold" />
                  <span>santiagosepul2109@gmail.com</span>
                </a>
              </button>
            </div>
          </section>

          <SectionProjects />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
