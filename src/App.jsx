import Navbar from './components/Navbar'
import { appRoutes } from './routes/Routes'
import { Routes, Route } from 'react-router-dom'
import Footer from './pages/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {appRoutes.map((route, i) => {
          const Com = route.component;
          return <Route key={i} path={route.path} element={<Com />} />
        })}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
