import React from 'react';
import Badge from './Badge';

type IconButtonProps = {
    icon: JSX.Element,
    onClick?: (event: React.MouseEvent) => void
    badge?: number
}

const IconButton = ({ icon, onClick, badge }: IconButtonProps) => {
    const handleButtonAction = (event: React.MouseEvent) => {
        onClick && onClick(event)
    }
    return (
        <button type='button' onClick={handleButtonAction} className='icon-button'>
            {badge && <Badge number={badge} />}
            {icon}
        </button>
    );
}

export default IconButton;
