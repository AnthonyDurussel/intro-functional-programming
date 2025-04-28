import CodeExecutor from "./CodeExecutor";

function Slide({ slide }) {
  // Fonction pour rendre le contenu HTML de manière sécurisée
  const renderHTML = (html) => {
    return { __html: html };
  };

  // Vérifier si le slide a un code fonctionnel et impératif
  const hasDualCode =
    slide.code &&
    typeof slide.code === "object" &&
    slide.code.functional &&
    slide.code.imperative;

  return (
    <div className="slide-content">
      <h1 className="slide-title">{slide.title}</h1>
      <div
        className="slide-body"
        dangerouslySetInnerHTML={renderHTML(slide.content)}
      />

      {hasDualCode ? (
        <div className="code-comparison">
          <div className="code-column">
            <h3>Approche Fonctionnelle</h3>
            <CodeExecutor code={slide.code.functional} />
          </div>
          <div className="code-column">
            <h3>Approche Impérative</h3>
            <CodeExecutor code={slide.code.imperative} />
          </div>
        </div>
      ) : slide.code ? (
        <CodeExecutor code={slide.code} />
      ) : null}
    </div>
  );
}

export default Slide;
