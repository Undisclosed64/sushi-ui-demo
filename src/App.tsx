import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SpecialsSection } from "./components/SpecialsSection";
import { MenuSection } from "./components/MenuSection";
import { ChefSection } from "./components/ChefSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";

function CurrentLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SpecialsSection />
        <MenuSection />
        <ChefSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<CurrentLayout />} />
    </Routes>
  );
}

export default App;
