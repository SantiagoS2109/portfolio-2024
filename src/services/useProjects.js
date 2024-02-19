import { useQuery } from "react-query";
import { getProjects } from "./apiNotion";

export function useProjects() {
  const {
    isLoading,
    data: projects,
    error,
  } = useQuery({ queryKey: ["projects"], queryFn: getProjects, retry: false });

  return { isLoading, projects, error };
}
