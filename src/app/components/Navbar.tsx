'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">SUMC</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#courses" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
              <Link href="#gallery" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
              <Link href="#fees" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Fees Structure</Link>
              <Link href="#faculty" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Faculty</Link>
              <Link href="#activities" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Activities</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#courses" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <Link href="#gallery" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
            <Link href="#fees" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Fees Structure</Link>
            <Link href="#faculty" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Faculty</Link>
            <Link href="#activities" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Activities</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

