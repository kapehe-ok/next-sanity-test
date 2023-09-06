import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col h-screen gap-3 m-5 text-md">
      <p>Hello, world!</p>
    </div>
  );
}
