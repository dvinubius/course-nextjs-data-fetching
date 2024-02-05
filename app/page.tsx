import Hero from "../components/Hero";
import Overview from "../components/Overview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16 sm:px-12 px-8">
      <Hero />
      <Overview />     
    </main>
  );
}
