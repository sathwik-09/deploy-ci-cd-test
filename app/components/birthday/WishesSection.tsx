const wishes = [
  {
    id: 1,
    name: 'Your Best Friend',
    message: 'Happy Birthday, Sathwik! Wishing you a year filled with success, happiness, and all your dreams coming true!',
    emoji: '🎂',
  },
  {
    id: 2,
    name: 'Family',
    message: 'To our amazing Sathwik, may your birthday be as special as you are to us!',
    emoji: '🎉',
  },
  {
    id: 3,
    name: 'Friends',
    message: 'Happy Birthday! Here\'s to another year of amazing memories and adventures together!',
    emoji: '🎁',
  },
];

export default function WishesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">
          Birthday Wishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="card bg-white shadow-xl hover:shadow-2xl transition-shadow p-6"
            >
              <div className="text-4xl mb-4">{wish.emoji}</div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">
                {wish.name}
              </h3>
              <p className="text-gray-600">{wish.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 