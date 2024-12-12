const Courses = () => {
    const courseList = [
      "Computer Science",
      "Business Administration",
      "Electrical Engineering",
      "Psychology",
      "Economics",
      "Mathematics"
    ]
  
    return (
      <section id="courses" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseList.map((course, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{course}</h3>
                <p className="text-gray-600">Discover our comprehensive {course} program designed to prepare you for a successful career.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Courses
  
  