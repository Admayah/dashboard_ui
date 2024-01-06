import "./button.css";
const ShowMoreButton = ({ text }) => {
  return (
    <button className="button">
      <span>Show More {text}</span>
    </button>
  );
};

export default ShowMoreButton;
