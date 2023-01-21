import Menu from "./Menu";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <a href=":null">Gameco</a>
      </div>
      <Menu />
    </aside>
  );
}

export default Sidebar;
