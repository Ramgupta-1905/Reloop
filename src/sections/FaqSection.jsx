import { useState } from 'react'
import { questions } from '../data/landingContent'

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(0)

  return (
    <section className="section faq-section" id="faq">
      <div className="faq-heading">
        <p className="eyebrow">Support &amp; answers</p>
        <h2>
          Frequently asked <span>questions.</span>
        </h2>
        <p>
          Clear answers about buying, selling, offers and finding a good
          second-hand thing.
        </p>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer], index) => {
          const isOpen = openQuestion === index

          return (
            <div
              className={`faq-item ${isOpen ? 'faq-open' : ''}`}
              key={question}
            >
              <button
                type="button"
                onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{question}</span>
                <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p>{answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
