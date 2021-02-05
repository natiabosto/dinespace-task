import React from 'react'
import styled from 'styled-components'
import { Icon } from '@material-ui/core';

const Wrapper = styled.div`
    display: flex;
`

const Search = ({ className }) => {
    return (
        <Wrapper className={className}>
            Search
        </Wrapper>
    )
}

export default Search;