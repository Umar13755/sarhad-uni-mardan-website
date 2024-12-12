import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sarhad University Mardan Campus</h3>
            <p>Empowering minds, shaping futures</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#courses" className="hover:underline">Courses</Link></li>
              <li><Link href="#gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="#fees" className="hover:underline">Fees Structure</Link></li>
              <li><Link href="#faculty" className="hover:underline">Faculty</Link></li>
              <li><Link href="#activities" className="hover:underline">Activities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 University Road, Mardan, Pakistan</p>
            <p>Email: info@sumc.edu.pk</p>
            <p>Phone: +92 123 4567890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-500 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Sarhad University Mardan Campus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

