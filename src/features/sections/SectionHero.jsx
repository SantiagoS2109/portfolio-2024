/* eslint-disable react/prop-types */
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import DarkImg from "../../assets/heroimg-dark.webp";
import LightImg from "../../assets/heroimg-light.webp";
import { useDarkMode } from "../../context/DarkModeContext";
import Button from "../ui/Button";

function SectionHero({ reference: ref }) {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      ref={ref}
      className="mx-auto mt-24 flex flex-col items-center md:w-4/5"
    >
      <picture>
        <img
          className=" aspect-square w-24 rounded-full"
          src={isDarkMode ? LightImg : DarkImg}
          alt="Santiago Sepúlveda Icon"
        />
      </picture>
      <h1 className="mt-3 font-RedHat text-4xl font-bold text-gray9 sm:text-6xl dark:text-white">
        Hola, soy Santiago
      </h1>

      <p className="mt-4 text-center text-lg sm:w-2/3 sm:text-2xl dark:text-gray4">
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

      <a
        href="https://www.linkedin.com/in/santiago-sepúlveda-022a8a217/"
        rel="noopener"
        className="mt-4 flex items-center rounded-full outline-none transition focus:ring-2 focus:ring-offset-2 md:justify-center md:hover:scale-105"
      >
        <div className="flex items-center">
          <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)] "></span>
            <div className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 backdrop-blur-3xl dark:bg-gray-800 dark:text-white/80">
              Disponible para trabajar
            </div>
          </span>
        </div>
      </a>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="https://www.linkedin.com/in/santiago-sepúlveda-022a8a217/">
          <LinkedinLogo size={24} weight="bold" />
          <span>Linkedin</span>
        </Button>

        <Button href="https://github.com/SantiagoS2109">
          <GithubLogo size={24} weight="bold" />
          <span>Github</span>
        </Button>

        <Button href="mailto:santiagosepul2109@gmail.com?Subject=Interesado%20en%20contactarte">
          <Envelope size={24} weight="bold" />
          <span>santiagosepul2109@gmail.com</span>
        </Button>
      </div>
    </section>
  );
}

export default SectionHero;
