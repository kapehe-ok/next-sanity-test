import Projects from "@/components/projects";
import AboutMe from "@/components/about-me";
import ContactForm from "@/components/contact-form";
import WhyMe from "@/components/why-me";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] flex-1 py-6 lg:py-12 divide-y">
      <AboutMe />
      <WhyMe />
      <Projects />
      <ContactForm />
    </div>
  );
}
