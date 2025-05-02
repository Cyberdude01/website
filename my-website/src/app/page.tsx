export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-xl text-gray-600 mb-8">
        This is a modern website built with Next.js and Tailwind CSS
      </p>
      <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
        Get Started
      </button>
    </div>
  )
} 