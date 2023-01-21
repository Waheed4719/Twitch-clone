import * as IconMd from 'react-icons/md';
import * as IconFa from 'react-icons/fa';
import * as IconSl from 'react-icons/sl';
import * as IconBs from 'react-icons/bs';

export type AllowedIconGroups = 'md' | 'fa' | 'sl' | 'bs';

type IconProps = {
    iconGroup: AllowedIconGroups
    icon: string
    style: React.CSSProperties
}

const Icon = ({ iconGroup = 'md', icon = 'MdHelpOutline', style }: IconProps) : JSX.Element => {
    let IconComponent: React.ElementType = IconMd[icon] as React.ElementType;
    if (iconGroup === 'md') {
        IconComponent = IconMd[icon]  as React.ElementType;
    }
    if (iconGroup === 'fa') {
        IconComponent = IconFa[icon]  as React.ElementType;
    }
    if (iconGroup === 'sl') {
        IconComponent = IconSl[icon]  as React.ElementType;
    }
    if (iconGroup === 'bs') {
        IconComponent = IconBs[icon]  as React.ElementType;
    }

    return <IconComponent style={{...style}}/>  ;
}

export default Icon;
