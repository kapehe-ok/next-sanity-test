"use client";
import Link from "next/link"; // Import the Link component

export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-3 m-5 text-md">
      {/* Use the Link component for client-side navigation */}
      <p>Master any topic playing <Link href="/education" className="text-blue-500 underline">here</Link>.</p>
    </div>
  );
}
