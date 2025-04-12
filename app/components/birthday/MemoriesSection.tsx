import Image from 'next/image';

const memories = [
  {
    id: 1,
    title: 'Fun Times Together',
    description: 'Remembering all the great moments we shared',
    image: '/memories/memory-1.jpg',
  },
  {
    id: 2,
    title: 'Adventures',
    description: 'Our amazing adventures and experiences',
    image: '/memories/memory-2.jpg',
  },
  {
    id: 3,
    title: 'Special Moments',
    description: 'Capturing the best moments of our friendship',
    image: '/memories/memory-3.jpg',
  },
];

export default function MemoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">
          Special Memories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <figure className="relative h-64">
                <Image
                  src={memory.image}
                  alt={memory.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-purple-700">{memory.title}</h3>
                <p className="text-gray-600">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 