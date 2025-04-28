"use client"

function SlideIndicators({ count, current, onChange }) {
  return (
    <div className="slide-indicators">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`indicator ${index === current ? "active" : ""}`}
          onClick={() => onChange(index)}
          aria-label={`Aller à la diapositive ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default SlideIndicators
