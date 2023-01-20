import Badge from "./Badge";

function IconButton({ icon, onClick, badge }) {
  return (
    <button onClick={onClick} className="icon-button">
      {badge && <Badge number={badge} />}
      {icon}
    </button>
  );
}

export default IconButton;
