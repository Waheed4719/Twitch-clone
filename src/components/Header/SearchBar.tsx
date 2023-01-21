import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <FiSearch color='#545761' style={{ marginRight: 10 }} />
            <input placeholder='Search' />
        </div>
    );
}

export default SearchBar;
