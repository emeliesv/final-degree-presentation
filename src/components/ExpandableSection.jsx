import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ExpandableSection = ({ title, icon, subTitle, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <details className="shadow-sm rounded-2xl shadow-neutral-dark md:w-3/4 bg-white">
      <summary
        onClick={toggleExpanded}
        className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-2 w-full"
        type="button"
        aria-expanded={expanded}
        aria-label={`${expanded ? "Stäng" : "Expandera"} ${title} sektion`}
      >
        <span
          className="bg-brand text-neutral-light rounded-full p-3"
          aria-hidden="true"
        >
          {icon}
        </span>
        <div className="flex flex-col text-left">
          <span className="font-semibold text-brand">{title}</span>
          {subTitle}
        </div>
        <span
          className={`transform transition-transform duration-200 ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          <ChevronDown />
        </span>
      </summary>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white rounded-2xl">{children}</div>
      </div>
    </details>
  );
};

export default ExpandableSection;
