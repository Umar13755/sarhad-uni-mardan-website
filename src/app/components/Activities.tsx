
import { Calendar, Users, Book, Award } from 'lucide-react'

const Activities = () => {
  const activities = [
    { name: "Annual Tech Fest", icon: Calendar, description: "Showcase your technical skills and innovative ideas" },
    { name: "Student Clubs", icon: Users, description: "Join various clubs to pursue your interests and hobbies" },
    { name: "Research Symposium", icon: Book, description: "Present your research findings and learn from peers" },
    { name: "Sports Tournament", icon: Award, description: "Compete in various sports and promote physical fitness" },
  ]

  return (
    <section id="activities" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Campus Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <activity.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities

