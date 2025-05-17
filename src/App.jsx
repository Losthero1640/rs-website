import React from 'react'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoaderScreen from './components/LoaderScreen.jsx'
import PageRoutes from './components/PageRoutes.jsx'

import usePageLoader from './hooks/usePageLoader'
import './styles/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


const AppContent = () => {
  const location = useLocation()
  const { pathname } = location
  const { isLoading, firstLoading, fadeOut } = usePageLoader(pathname)

  const isNotFound = ![
    '/',
    '/team',
    '/about',
    '/contact',
    '/workshops/:id',
    '/competitions/:id',
  ].includes(pathname)

  return (
    <>
      {isLoading && <LoaderScreen fadeOut={fadeOut} />}

      {!firstLoading && !isNotFound && <Navbar />}

      <div
        className={`page-content ${isLoading ? 'page-hidden' : 'page-animate'}`}
      >
        <main>
          <PageRoutes />
        </main>
        {!isNotFound && <Footer />}
      </div>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
