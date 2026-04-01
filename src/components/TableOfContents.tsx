interface TOCProps {
  headings: { id: string; text: string; level: number }[];
}

export default function TableOfContents({ headings }: TOCProps) {
  if (headings.length === 0) return null;

  let h2Count = 0;

  return (
    <nav className="toc">
      <p className="toc-title">この記事の目次</p>
      <ol className="toc-list">
        {headings.map((h) => {
          if (h.level === 2) {
            h2Count++;
            const num = String(h2Count).padStart(2, "0");
            return (
              <li key={h.id} className="toc-item toc-h2">
                <a href={`#${h.id}`}>
                  <span className="toc-number">{num}</span>
                  <span className="toc-text">{h.text}</span>
                </a>
              </li>
            );
          }
          if (h.level === 3) {
            return (
              <li key={h.id} className="toc-item toc-h3">
                <a href={`#${h.id}`}>
                  <span className="toc-dot" />
                  <span className="toc-text">{h.text}</span>
                </a>
              </li>
            );
          }
          return null;
        })}
      </ol>
    </nav>
  );
}
