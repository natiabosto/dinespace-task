import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

const Wrapper = styled.div`
    display: flex !important;
    padding: 16px;

    .search__icon {
        vertical-align: middle;
        font-size: 26px !important;
        margin-bottom: 2px;
    }

    .search__input {
        border: none;
        flex: 1;
        text-decoration: none;
        outline: none;
    }

    .search__input::placeholder {
        color: var(--grey);
    }
`

const Search = ({ className }) => {
    return (
        <Wrapper className={className}>
            <SearchIcon className='search__icon' />
            <input name='Search' placeholder='Search Restaurant or Category' className='dinespace-text__medium search__input' />
        </Wrapper>
    )
}

export default Search;