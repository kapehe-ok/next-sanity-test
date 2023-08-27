import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-3 m-5 text-md">
      <p>Hello, world!</p>
    </div>
  );
}
