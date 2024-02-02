import Hero from "../components/Hero";
import Overview from "../components/Overview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='mb-32'>
        <Hero />
      </div>
      <Overview />     
    </main>
  );
}
