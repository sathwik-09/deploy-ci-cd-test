import HeroSection from './components/birthday/HeroSection';
import MemoriesSection from './components/birthday/MemoriesSection';
import WishesSection from './components/birthday/WishesSection';
import CountdownSection from './components/birthday/CountdownSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CountdownSection />
      <MemoriesSection />
      <WishesSection />
    </main>
  );
}
