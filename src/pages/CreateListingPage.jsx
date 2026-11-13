import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { LISTINGS_STORAGE_KEY, SESSION_STORAGE_KEY } from '../authStorage'

const defaultImage = 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=960&q=85'

export default function CreateListingPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Electronics')
  const [condition, setCondition] = useState('Good')
  const [detail, setDetail] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('')

  function submit(event) {
    event.preventDefault()
    setError('')
    const amount = Number(price)
    if (!Number.isFinite(amount) || amount <= 0) {
      setError('Enter an asking price greater than ₹0.')
      return
    }

    try {
      const saved = window.localStorage.getItem(LISTINGS_STORAGE_KEY)
      const listings = saved ? JSON.parse(saved) : []
      if (!Array.isArray(listings)) {
        setError('We couldn’t read your saved listings. Clear this site’s listing data and try again.')
        return
      }
      const session = JSON.parse(window.localStorage.getItem(SESSION_STORAGE_KEY) || 'null')
      const newListing = {
        id: `${Date.now()}`,
        name: name.trim(),
        description: description.trim(),
        price: amount,
        category,
        condition,
        seller: session?.name || 'ReLoop member',
        detailLabel: category === 'Electronics' ? 'Brand' : 'Material',
        detail: detail.trim(),
        image: image.trim() || defaultImage,
      }
      listings.unshift(newListing)
      window.localStorage.setItem(LISTINGS_STORAGE_KEY, JSON.stringify(listings))
      navigate('/marketplace')
    } catch (saveError) {
      if (saveError.name === 'QuotaExceededError') setError('Browser storage is full. Clear this site’s saved data and try again.')
      else if (saveError instanceof SyntaxError) setError('We couldn’t read your saved data. Clear this site’s data and try again.')
      else setError('We couldn’t save your listing on this device. Please try again.')
    }
  }

  const detailLabel = category === 'Electronics' ? 'Brand' : 'Material'

  return (
    <main className="listing-page">
      <div className="listing-heading">
        <Link className="marketplace-back" to="/marketplace"><ArrowLeft size={15} /> Marketplace</Link>
        <p className="eyebrow">Pass something along</p>
        <h1>Create a listing.</h1>
        <p>Share the details and set a fair asking price. You can update your listing later.</p>
      </div>
      <form className="listing-form" onSubmit={submit}>
        <label>Product name<input value={name} onChange={(event) => setName(event.target.value)} required minLength="2" maxLength="90" placeholder="What are you selling?" /></label>
        <label>Description<textarea value={description} onChange={(event) => setDescription(event.target.value)} required minLength="10" maxLength="700" rows="4" placeholder="Describe its condition and anything a buyer should know." /></label>
        <div className="listing-form-row">
          <label>Asking price (₹)<input type="number" value={price} onChange={(event) => setPrice(event.target.value)} min="1" step="1" required placeholder="e.g. 4500" /></label>
          <label>Category<select value={category} onChange={(event) => { setCategory(event.target.value); setDetail('') }}><option>Electronics</option><option>Furniture</option></select></label>
        </div>
        <div className="listing-form-row">
          <label>Condition<select value={condition} onChange={(event) => setCondition(event.target.value)}><option>Like new</option><option>Excellent</option><option>Good</option><option>Fair</option></select></label>
          <label>{detailLabel}<input value={detail} onChange={(event) => setDetail(event.target.value)} required maxLength="70" placeholder={category === 'Electronics' ? 'e.g. Sony' : 'e.g. Solid wood'} /></label>
        </div>
        <label>Product image URL<input type="url" value={image} onChange={(event) => setImage(event.target.value)} placeholder="https://…" /></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button button-primary" type="submit">Publish listing <ArrowRight size={15} /></button>
        <p className="listing-note">This frontend demo stores listings on this device. Payment and delivery are arranged directly by the buyer and seller.</p>
      </form>
    </main>
  )
}
