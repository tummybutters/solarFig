import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Experiences from "@/sections/Experiences";
import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Navbar />
      <Hero />
      <Experiences />
    </main>
  );
}

export default App;
