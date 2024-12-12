import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4 leading-tight">Welcome to Sarhad University Mardan Campus</h1>
            <p className="text-xl mb-8">Empowering minds, shaping futures</p>
            <Link href="#courses" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 inline-block">
              Explore Our Courses
            </Link>
          </div>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Director's Photo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-semibold">Director's Message</h2>
                  <p className="text-blue-200">Dr. Ahmed Khan</p>
                </div>
              </div>
              <p className="text-lg">
                "At Sarhad University Mardan Campus, we are committed to providing quality education and fostering innovation. Join us in shaping a brighter future for our nation and the world."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold mb-2">5000+</h3>
                <p>Enrolled Students</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center">
                <h3 className="text-2xl font-bold mb-2">200+</h3>
                <p>Faculty Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

