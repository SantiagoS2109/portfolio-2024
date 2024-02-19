/* eslint-disable react/prop-types */
import { Brain } from "@phosphor-icons/react";
import JSIcon from "../../assets/javascript.svg";
import ReactIcon from "../../assets/react.svg";
import HTMLIcon from "../../assets/html5.svg";
import CSSIcon from "../../assets/css.svg";
import FigmaIcon from "../../assets/figma.svg";
import GitIcon from "../../assets/git.svg";
import SupabaseIcon from "../../assets/supabase.svg";

function SectionSkills() {
  return (
    <section id="skills" className="mt-8 pt-12">
      <div className="flex items-center gap-3">
        <Brain size={36} weight="bold" />
        <h2 className="font-RedHat text-3xl font-bold text-gray9 sm:text-5xl">
          Habilidades
        </h2>
      </div>

      <div className="mt-8 flex justify-evenly">
        <SkillItem icon={JSIcon} label="JavaScript" />
        <SkillItem icon={CSSIcon} label="CSS" />
        <SkillItem icon={HTMLIcon} label="HTML" />
        <SkillItem icon={ReactIcon} label="React" />
      </div>

      <div className="mt-4 flex justify-evenly">
        <SkillItem icon={SupabaseIcon} label="Supabase" />
        <SkillItem icon={FigmaIcon} label="Figma" />
        <SkillItem icon={GitIcon} label="Git" />
      </div>
    </section>
  );
}

export default SectionSkills;

function SkillItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="mb-2 h-12 w-auto md:h-20"
        src={icon}
        alt={`${label} Icon`}
      />
      <span className="text-sm font-medium md:text-base">{label}</span>
    </div>
  );
}
