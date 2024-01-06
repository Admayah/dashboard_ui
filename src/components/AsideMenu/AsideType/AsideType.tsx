import PlusIcon from "../../../icons/Plus";
import "./asidetype.css";

const AsideType = ({ type }) => {
  return (
    <div className="asideType">
      <div className="asideTypeWrapper">
        <span className="typeText">{type}</span>
        <PlusIcon />
      </div>
    </div>
  );
};

export default AsideType;
