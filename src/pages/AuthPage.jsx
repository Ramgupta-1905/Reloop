import { useState } from 'react'
import { ArrowLeft, ArrowRight, Repeat2 } from 'lucide-react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { getPricingPlan } from '../data/pricingPlans'

const ACCOUNT_STORAGE_KEY = 'reloop-demo-accounts'
const LANDING_DESTINATIONS = ['/#categories', '/#seller-cta']

async function hashPassword(password) {
  const bytes = new TextEncoder().encode(password)
  const digest = await window.crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export default function AuthPage() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const mode = params.get('mode') === 'register' ? 'register' : 'login'
  const selectedPlan = getPricingPlan(params.get('plan'))
  const requestedDestination = params.get('next')
  const isLandingDestination = LANDING_DESTINATIONS.includes(requestedDestination)
  const destination = selectedPlan
    ? `/?plan=${selectedPlan.id}`
    : isLandingDestination
      ? requestedDestination
      : '/'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  function switchMode(nextMode) {
    setError('')
    const nextParams = new URLSearchParams(params)
    nextParams.set('mode', nextMode)
    setParams(nextParams)
  }

  async function submit(event) {
    event.preventDefault()
    setError('')
    setBusy(true)
    try {
      const saved = window.localStorage.getItem(ACCOUNT_STORAGE_KEY)
      const accounts = saved ? JSON.parse(saved) : []
      if (!Array.isArray(accounts)) {
        setError('We couldn’t read the saved demo accounts. Please clear this site’s local storage and try again.')
        return
      }
      const normalizedEmail = email.trim().toLowerCase()
      const existing = accounts.find((account) => account.email === normalizedEmail)
      const passwordHash = await hashPassword(password)
      if (mode === 'register') {
        if (existing) {
          setError('An account with this email already exists. Try signing in instead.')
          return
        }
        accounts.push({ name: name.trim(), email: normalizedEmail, passwordHash })
        window.localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(accounts))
      } else if (!existing || existing.passwordHash !== passwordHash) {
        setError('That email and password combination does not match.')
        return
      }
      navigate(destination, { replace: true })
    } catch (storageError) {
      if (storageError.name === 'QuotaExceededError') {
        setError('Browser storage is full. Clear this site’s local storage and try again.')
      } else if (storageError instanceof SyntaxError) {
        setError('We couldn’t read the saved demo accounts. Please clear this site’s local storage and try again.')
      } else {
        setError('We couldn’t save your account on this device. Please try again.')
      }
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-visual">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
          alt="A calm, light-filled home"
        />
        <div className="auth-visual-shade" />
        <Link className="brand brand-light auth-brand" to="/">
          <span className="brand-mark">
            <Repeat2 size={18} />
          </span>
          <span>
            ReLoop<span className="brand-period">.</span>
          </span>
        </Link>
        <div className="auth-quote">
          <span className="quote-mark">“</span>
          <p>
            The best things don’t have to be new.
            <br />
            They just have to be new to you.
          </p>
          <span>BUY SMART. SELL BETTER.</span>
        </div>
      </section>
      <section className="auth-form-side">
        <Link className="auth-back" to="/">
          <ArrowLeft size={15} /> Back home
        </Link>
        <div className="auth-form-wrap">
          <p className="eyebrow">
            {mode === 'register' ? 'A good place to start' : 'Welcome back to the loop'}
          </p>
          <h1>{mode === 'register' ? 'Create your account.' : 'Good to see you.'}</h1>
          <p className="auth-subtitle">
            {mode === 'register'
              ? 'Join ReLoop and make room for something good.'
              : 'Sign in to your ReLoop account.'}
          </p>
          {selectedPlan && (
            <p className="auth-selected-plan" role="status">
              Selected plan:{' '}
              <strong>
                {selectedPlan.name} · {selectedPlan.price} {selectedPlan.period}
              </strong>
            </p>
          )}
          <div className="auth-switch">
            <button
              type="button"
              className={mode === 'login' ? 'auth-tab-active' : ''}
              onClick={() => switchMode('login')}
            >
              Sign In
            </button>
            <button
              type="button"
              className={mode === 'register' ? 'auth-tab-active' : ''}
              onClick={() => switchMode('register')}
            >
              Create Account
            </button>
          </div>
          <form className="auth-form" onSubmit={submit}>
            {mode === 'register' && (
              <label>
                Your name
                <input
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="What should we call you?"
                  required
                  minLength="2"
                />
              </label>
            )}
            <label>
              Email address
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="At least 8 characters"
                minLength="8"
                required
              />
            </label>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="button button-primary button-full"
              disabled={busy}
            >
              {busy
                ? 'One moment…'
                : mode === 'register'
                  ? 'Create Account'
                  : 'Sign In'}{' '}
              <ArrowRight size={15} />
            </button>
          </form>
          {mode === 'register' && (
            <p className="auth-switch-prompt">
              Already have an account?{' '}
              <button type="button" onClick={() => switchMode('login')}>
                Sign in
              </button>
            </p>
          )}
          <p className="auth-terms">
            This is a local frontend demo. Your account is saved on this device
            only; no payment or delivery is handled here.
          </p>
        </div>
      </section>
    </main>
  )
}
