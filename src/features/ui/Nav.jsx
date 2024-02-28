/* eslint-disable react/prop-types */

import DarkModeToggle from "./DarkModeToggle";

function Nav({ isIntersecting }) {
  return (
    <header className="fixed top-0 z-10 mx-auto mt-2 flex w-full items-center justify-center">
      <nav
        className={`flex items-center justify-center gap-3 rounded-full px-2 text-[10px] font-semibold text-inherit transition-all duration-300 sm:px-3 sm:text-sm dark:text-white ${isIntersecting ? "bg-white/0 dark:bg-black/0" : "bg-white/40 shadow-lg backdrop-blur-md"}`}
      >
        <NavItem href="#proyectos">Proyectos</NavItem>
        <NavItem href="#educacion">Educación</NavItem>
        <NavItem href="#sobremi">Sobre mí</NavItem>
        <NavItem href="mailto:santiagosepul2109@gmail.com?Subject=Interesado%20en%20contactarte">
          Contacto
        </NavItem>

        <DarkModeToggle />
      </nav>
    </header>
  );
}

export default Nav;

function NavItem({ href, children }) {
  return (
    <a
      className="relative block rounded-full px-2 py-2 outline-none transition-all duration-300 hover:text-cyan focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/75 dark:hover:text-cyan"
      href={href}
    >
      {children}
    </a>
  );
}
