"use client";
import Link from "next/link"; // Import the Link component

export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-3 m-5 text-md">
      {/* Use the Link component for client-side navigation */}
      <p>Master any topic playing <Link href="/education" className="text-blue-500 underline">here</Link>.</p>
      <p className="text-lg">About Me</p>
      <p>
        I was born and raised in Lima, Peru. I studied Economics & Finance for four years at Universidad del Pacífico,
        but dropped out at the beginning of 2023 - on my last year. After gaining traction with my first startup idea,
        I arrived to the conclusion that I wanted to focus on education as a problem and I didn&apos;t felt that
        college was the route for me. Eventually, the startup failed, but I managed to convience my parents to transfer
        to Cal State, East Bay so I could be as close as possible to SF - the biggest tech hub in the world. In 2024, on the 9th
        of January, I arrived to the States, transferred as an upper division student and worked for a year remotely with software
        projects. Below, you can see them organized by dates.
      </p>
      <p className="text-lg">Projects</p>
    </div>
  );
}
