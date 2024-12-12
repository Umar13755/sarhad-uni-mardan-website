import Hero from './components/Hero'
import Gallery from './components/Gallery'
import FeesStructure from './components/FeesStructure'
import Faculty from './components/Faculty'
import Activities from './components/Activities'
import Courses from './components/Courses'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Courses />
      <Gallery />
      <FeesStructure />
      <Faculty />
      <Activities />
    </div>
  )
}

