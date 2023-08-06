"use client"
import React from 'react'
import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

export default async function Project() {
  // const project = await getProjects();

  return (
    <div>
      <button onClick={() => console.log()}>Consola</button>
    </div>
  )
}




// type Props = {
//   params: { project: string }
// }

// export default async function Project({ params }: Props) {
//   const slug = params.project;


//   return (
//     <div className="flex flex-row items-center m-3">
//       <Image src={project.image} alt={project.name} width={250} height={250} className="border-1 border-gray-700 object-cover rounded-sm" />
//       <div className="m-4">
//         <div className="flex flex-row justify-between items-center mb-3">
//           <h1 className="text-2xl font-semibold">{project.name}</h1>
//           <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-sm text-gray-700 font-semibold py-2 px-4 whitespace-nowrap hover:bg-gray-500 hover:text-gray-100 transition">
//             View
//           </a>
//         </div>
//         <div className="text-gray-700 text-sm">
//           <PortableText value={project.content} />
//         </div>
//       </div>
//     </div>
//   )
// } 