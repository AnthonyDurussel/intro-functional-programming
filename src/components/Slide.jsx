import CodeExecutor from "./CodeExecutor"

function Slide({ slide }) {
  return (
    <div className="slide">
      <h2>{slide.title}</h2>
      <div className="slide-content" dangerouslySetInnerHTML={{ __html: slide.content }} />

      {slide.code && <CodeExecutor code={slide.code} />}
    </div>
  )
}

export default Slide
