import MenuItemHeader from './MenuItemHeader';
import MenuItemList from './MenuItemList';
import { SidebarMenuItem } from '../../types';

type MenuGroupItemProps = {
    menu: {
        name: string
        items: SidebarMenuItem[]
    }
}
const MenuGroupItem = ({ menu }: MenuGroupItemProps) => {
    return (
        <div className='menu-group-item'>
            <MenuItemHeader title={menu.name} active={menu.name === 'Home'} />
            <MenuItemList items={menu.items} menuTitle={menu.name} />
        </div>
    );
}

export default MenuGroupItem;
