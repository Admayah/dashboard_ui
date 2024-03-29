interface ArrowUpProps {
  isOpen?: boolean;
}

const ArrowUp: React.FC<ArrowUpProps> = ({ isOpen }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.7125 18.2925L14.5925 14.4125L18.4725 18.2925C18.8625 18.6825 19.4925 18.6825 19.8825 18.2925C20.2725 17.9025 20.2725 17.2725 19.8825 16.8825L15.2925 12.2925C15.1057 12.1052 14.852 12 14.5875 12C14.323 12 14.0693 12.1052 13.8825 12.2925L9.2925 16.8825C8.9025 17.2725 8.9025 17.9025 9.2925 18.2925C9.6825 18.6725 10.3225 18.6825 10.7125 18.2925Z"
        fill={isOpen ? "#3361FF" : "#C3CAD9"}
      />
    </svg>
  );
};

export default ArrowUp;
