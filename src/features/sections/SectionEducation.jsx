/* eslint-disable react/prop-types */
import { Book } from "@phosphor-icons/react";
import { useDarkMode } from "../../context/DarkModeContext";

function SectionEducation() {
  const { isDarkMode } = useDarkMode();
  return (
    <section id="educacion" className="mt-8 pt-12">
      <div className="flex items-center gap-3">
        <Book size={36} weight="bold" color={isDarkMode ? "white" : "black"} />
        <h2 className="font-RedHat text-3xl font-bold text-gray9 sm:text-5xl dark:text-white">
          Educación
        </h2>
      </div>

      <ul className="mt-6 border-l-2 border-gray4 ps-4 pt-4">
        <EducationItem
          title={"Pregrado Ingeniería Multimedia"}
          institution={"Universidad Simón Bolívar, Cúcuta"}
          date={"2021 - Actualidad"}
          description={
            "Me encuentro en mi formación profesional como Ingeniero Multimedia, consolidando competencias en áreas que abarcan desde diseño gráfico, animación digital y modelado 3D hasta diseño UX/UI y desarrollo web, entre otras disciplinas."
          }
        />
        <EducationItem
          title={"The Ultimate React Course 2024"}
          institution={"Udemy"}
          date={"2023"}
          description={
            "Apasionado por la programación, diseño y desarrollo web, empiezo en 2022 de forma autodidacta a aprender más profundamente JavaScript y posteriormente HTML, CSS y React. Todo de la mano de los cursos de Jonas Schmedtmann en Udemy."
          }
        />
        <EducationItem
          title={"Build Responsive Real-World Websites with HTML and CSS"}
          institution={"Udemy"}
          date={"2023"}
        />
        <EducationItem
          title={"The Complete JavaScript Course 2024"}
          institution={"Udemy"}
          date={"2022"}
        />
        <EducationItem
          title={"Bachiller Técnico"}
          institution={"Colegio Once de Noviembre"}
          date={"2019"}
          description={
            "Concluí mis estudios secundarios con un título técnico en Contabilización de Operaciones Comerciales y Financieras, destacándome por mantener el más alto promedio del curso durante los últimos tres años. Fui reconocido como Estudiante Integral 2019 y mejor puntaje en las pruebas de estado de mi generación."
          }
        />
      </ul>
    </section>
  );
}

export default SectionEducation;

function EducationItem({ title, institution, date, description }) {
  return (
    <li className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
      <div className="relative">
        <div className="absolute -left-[25px] top-[6px] h-4 w-4 rounded-full bg-cyan2 lg:-left-[27px] lg:h-5 lg:w-5"></div>
        <h3 className="text-lg font-bold text-cyan lg:w-4/5 lg:text-2xl">
          {title}
        </h3>
        <h4 className="font-semibold text-gray9 lg:text-xl dark:text-white">
          {institution}
        </h4>
        <span className="text-sm text-gray7 lg:text-base dark:text-gray4">
          {date}
        </span>
      </div>
      <div>
        {description ? (
          <p className="text-sm text-gray7 lg:text-base dark:text-gray4">
            {description}
          </p>
        ) : null}
      </div>
    </li>
  );
}
