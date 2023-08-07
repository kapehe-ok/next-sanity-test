import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="mt-5 flex flex-col gap-3 text-xs">
      <p>My page</p>
    </div>
  )

}