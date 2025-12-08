import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SpecialsSection } from "./components/SpecialsSection";
import { MenuSection } from "./components/MenuSection";
import { ChefSection } from "./components/ChefSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { SplitScreenLayout } from "./components/preview/SplitScreenLayout";

function CurrentLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SpecialsSection />
        <MenuSection />
        <ChefSection />
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
      <Route path="/preview/split-screen" element={<SplitScreenLayout />} />
    </Routes>
  );
}

export default App;
