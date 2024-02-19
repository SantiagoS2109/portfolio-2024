/* eslint-disable react/prop-types */

import { GithubLogo, Link } from "@phosphor-icons/react";

function ProjectCard({ project }) {
  return (
    <li className="mb-16 grid grid-cols-1 last:mb-0 lg:grid-cols-2 lg:gap-6">
      <picture>
        <img className="w-full rounded-xl" src={project.img} alt="" />
      </picture>
      <div>
        <h3 className="mt-4 text-2xl font-bold sm:text-4xl">{project.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <div className="flex w-fit items-center gap-2 rounded-full bg-blue-900 px-2 py-1 text-white">
            <svg
              viewBox="0 0 256 154"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  x1="-2.778%"
                  y1="32%"
                  x2="100%"
                  y2="67.556%"
                  id="a"
                >
                  <stop stopColor="#2298BD" offset="0%" />
                  <stop stopColor="#0ED7B5" offset="100%" />
                </linearGradient>
              </defs>
              <path
                d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                fill="url(#a)"
              />
            </svg>
            <span className="text-sm">Tailwind</span>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray7">{project.description}</p>

        <div className="mt-4 flex gap-2">
          <button className="rounded-full border border-cyan bg-gray4 px-4 py-1 font-medium text-cyan transition-all duration-300 hover:bg-cyan hover:text-white">
            <a className="flex items-center gap-2" href={project.code}>
              <GithubLogo size={24} weight="bold" />
              <span>Código</span>
            </a>
          </button>

          <button className="rounded-full border border-cyan bg-gray4 px-4 py-1 font-medium text-cyan transition-all duration-300 hover:bg-cyan hover:text-white">
            <a className="flex items-center gap-2" href={project.demo}>
              <Link size={24} weight="bold" />
              <span>Demo</span>
            </a>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
