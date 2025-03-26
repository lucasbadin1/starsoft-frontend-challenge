import { useState } from "react";

interface DescriptionShowMoreProps {
  text: string;
}

export default function DescriptionShowMore({ text }: DescriptionShowMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className={`clamp-text ${isExpanded ? "clamp-6" : "clamp-3"}`}>
        {text}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="btn-show-more"
      >
        {isExpanded ? "Ler menos" : "Ler mais"}
      </button>
    </div>
  );
}
