import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import PlacesPage from './pages/PlacesPage'
import StoriesPage from './pages/StoriesPage'
import AboutProject from './pages/AboutProject'
import SiteDetail from './pages/SiteDetail'
import PdfPage from './pages/PdfPage'
import PdfPage2 from './pages/PdfPage2'
import Chatbot from './components/Chatbot/Chatbot'

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Home />} />
          <Route path="/lugares" element={<PlacesPage />} />
          <Route path="/historias" element={<StoriesPage />} />
          <Route path="/proyecto" element={<AboutProject />} />
          <Route path="/lugar/:id" element={<SiteDetail />} />
          <Route path="/documento" element={<PdfPage />} />
          <Route path="/documento2" element={<PdfPage2 />} />
        </Routes>
      </main>

      <Footer />
      <Chatbot />
    </div>
  )
}
