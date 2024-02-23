"use client";
import Link from "next/link"; // Import the Link component

export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-3 m-5 text-md">
      {/* Use the Link component for client-side navigation */}
      <p>Master any topic playing <Link href="/education" className="text-blue-500 underline">here</Link>.</p>
      <p>Birthday: 26/05/2001</p>
      <p>Nationality: Peruvian</p>
      <p>Residency: San Francisco, CA, USA</p>
      <p>Work</p>
      <p>Axeom</p>
      <p>Dudda</p>
      <p>Alegra</p>
      <p>Education</p>
      <p>California State University, East Bay</p>
      <p>Universidad del Pacífico</p>
      <p>Projects</p>
      <p>Bhuma AI</p>
      <p>Managent</p>
      <p>Dudda</p>
      <p>AI Tutor</p>
    </div>
  );
}
