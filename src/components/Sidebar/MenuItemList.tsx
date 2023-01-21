import { SidebarMenuItem } from '../../types';
import MenuItem from './MenuItem';

type MenuItemListProps = {
    items: SidebarMenuItem[],
    menuTitle: string
}

const MenuItemList = ({ items, menuTitle }: MenuItemListProps) => {
    return <>{items.map((item, index) => (
        <MenuItem title={menuTitle} key={item.title} index={index} item={item} />
    ))}
    </>;
} 


export default MenuItemList;
