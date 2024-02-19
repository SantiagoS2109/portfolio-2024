/* eslint-disable react/prop-types */
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import IconImg from "../../assets/heroimg-dark.webp";

function SectionHero({ reference: ref }) {
  return (
    <section
      ref={ref}
      className="mx-auto mt-24 flex flex-col items-center md:w-4/5"
    >
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
          <a
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/santiago-sepúlveda-022a8a217/"
          >
            <LinkedinLogo size={24} weight="bold" />
            <span>Linkedin</span>
          </a>
        </button>

        <button className="rounded-full border border-cyan bg-gray4 px-4 py-1 font-medium text-cyan transition-all duration-300 hover:bg-cyan hover:text-white">
          <a
            className="flex items-center gap-2"
            href="https://github.com/SantiagoS2109"
          >
            <GithubLogo size={24} weight="bold" />
            <span>Github</span>
          </a>
        </button>

        <button className="rounded-full border border-cyan bg-gray4 px-4 py-1 font-medium text-cyan transition-all duration-300 hover:bg-cyan hover:text-white">
          <a
            className="flex items-center gap-2"
            href="mailto:santiagosepul2109@gmail.com?Subject=Interesado%20en%20contactarte"
          >
            <Envelope size={24} weight="bold" />
            <span>santiagosepul2109@gmail.com</span>
          </a>
        </button>
      </div>
    </section>
  );
}

export default SectionHero;
