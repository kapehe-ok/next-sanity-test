import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="mt-5 flex flex-col gap-3">
      <p>
        I was born on the 26th of May of 2001 in Lima, Peru. I lived all my life with both of my parents and my little sister.
        Both sides of my family are from <a href="" className="text-blue-500">San Marcos</a>, a small village in Ancash, a province of the highlands of Peru. My mom moved to Lima in 1997 and my dad the year after that. Both did it to pursue better education opportunities.
        My parents had me and my sister while they were on their early 20s. As you may imagine, most 20-year olds are not particularly wealthy and even more so two immigrants with limited resources and connections in a foreign city.
        Since we could not afford to live on our own, the first years of my life we stayed at my grandparents house, in San Juan de Miraflores. Even though we always had food on the table, those were some rough years.
      </p>
      <p>
        My dad began working a couple of months before I was born and never quit his job, by the time I write this he is still working there, more than twenty years have passed. Everything I have experienced in life is thanks to his job, but specially to him.
        His work ethic, determination, and noble heart though me at an early age that you must work hard in life to provide for your family and that whatever you accomplish in life will be shared with everyone that carries your the last name.
        We lived there until my last year of kindgergartden, when I was around 5 years old. Then, we move to a flat in Santiago de Surco, where I stayed until I was 15.
      </p>
      <p>
        When I was 15 we moved to a bigger house where I lived until I was 22, when I decided to become independent. I studied Finance at <a href="https://www.up.edu.pe/" className="text-blue-600">Universidad del Pacifico</a>. Even though I graduated school with the award of academic excellence, I failed constantly at university because I lacked a why. Since an early age I have known who I want to be, but I experimented for a long time what I wanted to be.
        Remember that those things are not the same. Deciding who you want to be comes more from the inside than the outside, but choosing what means choosing your character and that requires consistency. Even though the choice begins with yourself.
      </p>
    </div>
  )

}

{/*
    <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
*/}