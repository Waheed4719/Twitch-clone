type MenuItemHeaderProps = {
    title: string,
    active: boolean
}

const MenuItemHeader = ({ title, active }: MenuItemHeaderProps) => {
    return <h2 className={`menu-item-header ${active ? 'active' : ''}`}>{title}</h2>;
}

export default MenuItemHeader;
