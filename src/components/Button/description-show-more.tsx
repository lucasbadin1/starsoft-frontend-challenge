import { useState } from "react";

interface DescriptionShowMoreProps {
  text: string;
}

export default function DescriptionShowMore({ text }: DescriptionShowMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className={`text-heading text-xs font-light transition-all duration-300 ${isExpanded ? "line-clamp-6" : "line-clamp-3"}`}>
        {text}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-orange text-xs font-bold mt-1 hover:underline"
      >
        {isExpanded ? "Ler menos" : "Ler mais"}
      </button>
    </div>
  );
}
