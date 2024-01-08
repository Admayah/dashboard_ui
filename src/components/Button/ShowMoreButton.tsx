import "./button.css";

interface ShowMoreButtonProps {
  text: string;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ text }) => {
  return (
    <button className="button">
      <span>Show More {text}</span>
    </button>
  );
};

export default ShowMoreButton;
