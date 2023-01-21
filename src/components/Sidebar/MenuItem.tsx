import Icon from '../Common/Icon';
import {SidebarMenuItem} from '../../types'
import Person2 from '../../assets/images/avatar2.png';
import Person3 from '../../assets/images/avatar3.png';
import Person4 from '../../assets/images/avatar4.png';
import Person5 from '../../assets/images/avatar5.png';
import Person6 from '../../assets/images/avatar6.png';
import Avatar from '../Common/Avatar';


const avatars = [Person2, Person3, Person4, Person5, Person6];



type MenuItemProps = {
    item: SidebarMenuItem,
    title: string,
    index: number
}

const MenuItem = ({ item, title, index } : MenuItemProps) => {
    return (
        <h3 className='menu-item'>
            {title === 'Following' ? (
                <Avatar size='xs' avatar={avatars[index]} />
            ) : (
                <Icon iconGroup={item.iconGroup} icon={item.icon} style={{ fontSize: 16 }} />
            )}

            {item.title}
        </h3>
    );
}

export default MenuItem;
