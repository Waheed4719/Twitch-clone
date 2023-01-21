import { useState } from 'react';
import { BiMoon, BiSun, BiBell } from 'react-icons/bi';
import SearchBar from './SearchBar';
import IconButton from '../Common/IconButton';
import Avatar from '../../assets/images/avatar1.png';

const Header = () => {
    const [nightMode, setNightMode] = useState(true);
    const handleNightModeToggle = () => {
        setNightMode((mode) => !mode);
    };
    return (
        <div className='header'>
            <div className='header-left-children'>
                <h2>Gameco - Dashboard</h2>
            </div>
            <div className='header-right-children'>
                <SearchBar />
                <IconButton
                    icon={nightMode ? <BiMoon /> : <BiSun />}
                    onClick={handleNightModeToggle}
                />
                <IconButton icon={<BiBell />} badge={4} />
                <div className='avatar' style={{ border: '2px solid #603acd' }}>
                    <img src={Avatar} alt='Avatar' />
                </div>
            </div>
        </div>
    );
}

export default Header;
