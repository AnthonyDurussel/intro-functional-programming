"use client"
import { useSelector, useDispatch } from "react-redux"
import Slide from "./Slide"
import SlideControls from "./SlideControls"
import SlideIndicators from "./SlideIndicators"

function SlideShow() {
  const { currentSlide, slides } = useSelector((state) => state)
  const dispatch = useDispatch()

  const nextSlide = () => {
    dispatch({ type: "NEXT_SLIDE" })
  }

  const prevSlide = () => {
    dispatch({ type: "PREV_SLIDE" })
  }

  const goToSlide = (index) => {
    dispatch({ type: "GO_TO_SLIDE", payload: index })
  }

  return (
    <div className="slideshow">
      <div className="slide-info">
        Diapositive {currentSlide + 1} / {slides.length}
      </div>

      <Slide slide={slides[currentSlide]} />

      <SlideControls
        onNext={nextSlide}
        onPrev={prevSlide}
        canGoNext={currentSlide < slides.length - 1}
        canGoPrev={currentSlide > 0}
      />

      <SlideIndicators count={slides.length} current={currentSlide} onChange={goToSlide} />
    </div>
  )
}

export default SlideShow
