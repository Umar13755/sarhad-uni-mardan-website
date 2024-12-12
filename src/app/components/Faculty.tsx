import Image from 'next/image'

const Faculty = () => {
  const facultyMembers = [
    { name: "Dr. Aisha Khan", position: "Dean of Computer Science", image: "/placeholder.svg?height=150&width=150" },
    { name: "Prof. Muhammad Ali", position: "Head of Business School", image: "/placeholder.svg?height=150&width=150" },
    { name: "Dr. Sarah Ahmed", position: "Chair of Engineering Department", image: "/placeholder.svg?height=150&width=150" },
    { name: "Prof. Zainab Malik", position: "Director of Research", image: "/placeholder.svg?height=150&width=150" },
  ]

  return (
    <section id="faculty" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 text-center">
              <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faculty

