import PlusIcon from "../../../icons/Plus";
import "./asidetype.css";

interface AsideTypeProps {
  type: string;
}

const AsideType: React.FC<AsideTypeProps> = ({ type }) => {
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
