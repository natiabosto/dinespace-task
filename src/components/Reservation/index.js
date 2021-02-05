import React from 'react';
import styled from 'styled-components'

import DiningOption from './DiningOption'
import DateAndTime from './DateAndTime'
import Person from './Person'
import Search from './Search'

const Wrapper = styled.div`
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;

    .dining-option,
    .date-and-time,
    .person,
    .search {
        padding: 15px;
        display: inline-block;
        vertical-align: middle;
        flex: 1;
    }

    .dining-option,
    .search {
        flex: 1 100%;
    }

    .dining-option {
        border-bottom: 1px solid var(--borderColor)
    }

    .search {
        border-top: 1px solid var(--borderColor)
    }

    .person {
        border-left: 1px solid var(--borderColor)
    }

`

export const Reservation = () => {

    return (
        <Wrapper className='shadowed-border'>
            
            <DiningOption className='dining-option' />

            <DateAndTime className='date-and-time' />
            <Person className='person' />

            <Search className='search' />

        </Wrapper>
    )
}