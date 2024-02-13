import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";


export default async function Page() {
  const projects = await getProjects();

  return (
    <div className="h-screen m-5">
      {projects.map((project) => (
        <div key={project._id} className="items-center my-3">
          <div className="flex flex-row">
            <Image
              src={project.image}
              alt={project.name}
              width={100}
              height={100}
              className="border-1 border-gray-700 object-cover rounded-sm"
            />
            <div className="flex flex-col justify-center gap-3 ml-3">
              <h1 className="text-xl font-semibold">{project.name}</h1>
              <div className="flex flex-row gap-2">
                <a
                  href={project.url}
                >
                  <Github />
                </a>
                <a
                  href={project.url}
                >
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
          <div className="text-sm mt-3">
            <PortableText value={project.content} />
          </div>
        </div>
      ))}
    </div>
  );
}
