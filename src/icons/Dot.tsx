const Dot = ({ isActive }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="11"
        y="12"
        width="7"
        height="7"
        rx="3.5"
        fill={isActive ? "#3361FF" : "#C3CAD9"}
      />
    </svg>
  );
};

export default Dot;
