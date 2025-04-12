import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-purple-800 mb-6">
            Happy Birthday Sathwik! 🎉
          </h1>
          <p className="text-2xl text-purple-600 mb-8">
            Wishing you a day filled with joy, laughter, and wonderful memories!
          </p>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/birthday-cake.png"
              alt="Birthday Cake"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="animate-bounce">
            <span className="text-4xl">🎈</span>
          </div>
        </div>
      </div>
    </section>
  );
} 