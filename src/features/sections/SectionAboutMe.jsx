import { User } from "@phosphor-icons/react";
import AboutMeImg from "../../assets/aboutme.webp";

function SectionAboutMe() {
  return (
    <section id="sobremi" className="mt-8 pt-12">
      <div className="flex items-center gap-3">
        <User size={36} weight="bold" />
        <h2 className="font-RedHat text-3xl font-bold text-gray9 sm:text-5xl">
          Sobre mí
        </h2>
      </div>

      <div className="mt-2 grid grid-cols-1 sm:grid-cols-aboutme-layout">
        <picture className="flex items-center justify-center sm:order-1">
          <img
            className="aspect-square h-52 w-52 rotate-6 rounded-[4rem] object-cover shadow-xl"
            src={AboutMeImg}
            alt="Santiago Sepúlveda Dev."
          />
        </picture>
        <div className="mt-6 flex flex-col gap-3 text-xs lg:text-base">
          <p>
            Mi nombre es Santiago Sepúlveda, y tengo 21 años. Desde mi infancia,
            he sentido una profunda fascinación por el mundo de la tecnología y
            la creatividad. Recuerdo haber pasado horas dibujando en Paint
            cuando tuve mi primer encuentro con un computador con Windows XP.
          </p>

          <p>
            {" "}
            Durante mis estudios secundarios, experimenté mi primer acercamiento
            al ámbito de la programación mediante PHP. Más adelante, descubrí la
            animación 3D, lo que impulsó mi decisión de dedicarme a la
            disciplina que hoy en día desarrollo.{" "}
          </p>

          <p>
            En la actualidad, me dedico a estudiar desarrollo web de manera
            autodidacta, complementando el conocimiento que estoy adquiriendo en
            mi pregrado. Asimismo, me esfuerzo por perfeccionar otro de mis
            campos de interés predilectos: la animación.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutMe;
