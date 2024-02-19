import SectionProjects from "./features/sections/SectionProjects";
import SectionEducation from "./features/sections/SectionEducation";
import SectionHero from "./features/sections/SectionHero";
import SectionAboutMe from "./features/sections/SectionAboutMe";
import Nav from "./features/ui/Nav";

import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useRef, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      // staleTime: 0,
    },
  },
});

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
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div>
        <Nav isIntersecting={isIntersecting} />
        <main className="mx-auto max-w-4xl  px-4 py-8">
          <SectionHero reference={ref} />
          <SectionProjects />
          <SectionEducation />
          <SectionAboutMe />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
