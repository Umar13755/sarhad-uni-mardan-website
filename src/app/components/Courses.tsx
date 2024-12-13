const Courses = () => {
  const courseList = [
    {
      name: "Computer Science",
      description:
        "A comprehensive program focusing on programming, software development, data science, and emerging technologies to prepare students for careers in tech.",
    },
    {
      name: "Software Engineering",
      description:
        "Specialized training in designing, developing, and maintaining software systems, emphasizing project management and real-world applications.",
    },
    {
      name: "Bachelor of Business Administration",
      description:
        "Develops leadership and analytical skills in business management, marketing, and finance for versatile career opportunities.",
    },
    {
      name: "AD Education/BS Education",
      description:
        "Equips students with foundational and advanced knowledge in education theory, teaching methodologies, and classroom management.",
    },
    {
      name: "B.ED (1.5/2.5 Years)",
      description:
        "Tailored for aspiring educators, this program enhances teaching skills and subject knowledge for effective learning environments.",
    },
    {
      name: "AD/BS Urdu",
      description:
        "Focuses on the rich literary and linguistic heritage of Urdu, preparing students for careers in teaching, writing, and research.",
    },
    {
      name: "AD/BS English",
      description:
        "Offers in-depth studies in English language and literature, honing communication skills and analytical thinking for diverse fields.",
    },
    {
      name: "BS Sports Sciences & Physical Education",
      description:
        "Combines theory and practice in sports science, fitness, and physical education to promote health and athletic excellence.",
    },
  ];

  return (
    <section id="courses" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          We Offer Programmes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseList.map((course, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
