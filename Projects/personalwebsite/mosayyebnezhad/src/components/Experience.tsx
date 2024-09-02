
import './Styles/Exprience.css';
import source from "../../public/source.json"

const Experience = () => {
  return (
    <div className="experience">
      <h3>EXPERIENCE</h3>
      <div dangerouslySetInnerHTML={{ __html:source.Experience }} />

    </div>
  );
};

export default Experience;
