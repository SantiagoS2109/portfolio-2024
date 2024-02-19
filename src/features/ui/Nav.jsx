/* eslint-disable react/prop-types */

function Nav({ isIntersecting }) {
  return (
    <header className="fixed top-0 z-10 mx-auto mt-2 flex w-full items-center justify-center">
      <nav
        className={`flex items-center justify-center gap-4 rounded-full  px-2 text-xs font-semibold transition-all duration-300 sm:px-3 sm:text-sm ${isIntersecting ? "bg-white" : "bg-gray4/80 shadow-lg backdrop-blur-md"}`}
      >
        <a
          className="relative block px-2 py-2 transition hover:text-cyan dark:hover:text-cyan"
          href="#proyectos"
        >
          Proyectos
        </a>
        <a
          className="relative block px-2 py-2 transition hover:text-cyan dark:hover:text-cyan"
          href="#educacion"
        >
          Educación
        </a>
        <a
          className="relative block px-2 py-2 transition hover:text-cyan dark:hover:text-cyan"
          href="#sobremi"
        >
          Sobre mí
        </a>
        <a
          className="relative block px-2 py-2 transition hover:text-cyan dark:hover:text-cyan"
          href="#contacto"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Nav;
