import "./SectionButton.css"

export const SectionButton = ({ title, onClick }) => (
  <button className="sectionButton" onClick={onClick}>
    {title}
  </button>
);

