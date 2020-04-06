import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='tc pa1 ba b--brown bg-light-yellow'
                type='search'
                placeholder='search coffee shop'
                onChange={searchChange}
            />
        </div>
    )

}

export default SearchBox;