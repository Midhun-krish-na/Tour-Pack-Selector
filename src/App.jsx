import { Routes, Route } from 'react-router-dom'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import PackageDetails from './pages/PackageDetails'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'
import SavedTrips from './pages/SavedTrips'
import MyBookings from './pages/MyBookings'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/package/:id"
            element={<PackageDetails />}
          />

          <Route
            path="/book/:id"
            element={<Booking />}
          />

          <Route
            path="/confirmation/:ref"
            element={<Confirmation />}
          />

          <Route path="/saved" element={<SavedTrips />} />

          <Route path="/my-bookings" element={<MyBookings />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
