import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { SESSION_STORAGE_KEY } from './authStorage'
import AuthPage from './pages/AuthPage'
import CreateListingPage from './pages/CreateListingPage'
import LandingPage from './pages/LandingPage'
import MarketplacePage from './pages/MarketplacePage'
import './App.css'

function SiteLayout({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}

function ProtectedRoute({ children }) {
  const { pathname, search } = useLocation()
  const session = window.localStorage.getItem(SESSION_STORAGE_KEY)
  if (!session) {
    const next = encodeURIComponent(`${pathname}${search}`)
    return <Navigate to={`/auth?mode=login&next=${next}`} replace />
  }
  return children
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout><LandingPage /></SiteLayout>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/marketplace" element={<ProtectedRoute><SiteLayout><MarketplacePage /></SiteLayout></ProtectedRoute>} />
        <Route path="/listings/new" element={<ProtectedRoute><SiteLayout><CreateListingPage /></SiteLayout></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
