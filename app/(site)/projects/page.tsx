"use client"
import React, { useState, useEffect } from 'react';
import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image";

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    fetchProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id} className="items-center my-3">
          <div className="flex flex-row">
            <Image src={project.image} alt={project.name} width={100} height={100} className="border-1 border-gray-700 object-cover rounded-sm" />
            <div className='flex flex-col justify-center gap-3 ml-3'>
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-sm text-gray-700 font-semibold py-2 px-4  hover:bg-gray-500 hover:text-gray-100 transition">
                View Project
              </a>
            </div>
          </div>
          <div className="text-gray-700 text-xs mt-3">
            <PortableText value={project.content} />
          </div>
        </div>
      ))}

    </div>
  );
}
