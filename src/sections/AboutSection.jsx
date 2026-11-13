import { Recycle } from 'lucide-react'
import livingRoomImage from '../assets/livingroom.avif'

export default function AboutSection() {
  return (
    <section className="section why-section" id="why-reloop">
      <div className="why-story">
        <div className="why-copy">
          <p className="eyebrow">A little more life in good things</p>
          <h2>Why ReLoop exists.</h2>
          <p className="why-paragraph">
            A simple marketplace to buy and sell pre-owned electronics,
            furniture and more. List what you don&apos;t need, find what you
            want, and negotiate the best price.
          </p>
          <p className="why-supporting">
            ReLoop makes it easier to find something useful, agree on a fair
            price and pass it along to someone who will enjoy it.
          </p>
        </div>
        <figure className="why-visual">
          <img
            src={livingRoomImage}
            alt="A bright living room with comfortable seating and indoor plants"
            loading="lazy"
          />
          <figcaption>
            <Recycle size={16} /> Good things deserve another go.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
