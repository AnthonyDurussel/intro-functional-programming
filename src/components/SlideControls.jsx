"use client"

function SlideControls({ onNext, onPrev, canGoNext, canGoPrev }) {
  return (
    <div className="slide-controls">
      <button onClick={onPrev} disabled={!canGoPrev} className="control-button">
        ← Précédent
      </button>
      <button onClick={onNext} disabled={!canGoNext} className="control-button">
        Suivant →
      </button>
    </div>
  )
}

export default SlideControls
