import MainSection from './components/sections/landing/Main'
import PartnerSection from './components/sections/landing/Partner'
import SimulateSection from './components/sections/landing/Simulate'
import SolutionsSection from './components/sections/landing/Solutions'
 
export default function Layout() {
  return (
    <>
        <MainSection />
        <SimulateSection />
        <PartnerSection />
        <SolutionsSection />
    </>
  );
}