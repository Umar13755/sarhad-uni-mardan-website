import Image from 'next/image'

const Gallery = () => {
  const images = [
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
  ]

  return (
    <section id="gallery" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Campus Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <Image src={src} alt={`Campus image ${index + 1}`} width={400} height={300} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

