import React from 'react';
import styled from 'styled-components'

import DiningOption from './DiningOption'
import DateAndTime from './DateAndTime'
import Person from './Person'
import Search from './Search'

const Wrapper = styled.div`
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;

    .dining-option,
    .date-and-time,
    .person,
    .search {
        padding: 15px;
        display: inline-block;
        vertical-align: middle;
        flex: 1;
    }

    .date-person__container {
        flex: 1;
        display: flex;
    }

    .person {
        border-left: 1px solid var(--borderColor)
    }

`

export const Reservation = () => {

    return (
        <Wrapper className='shadowed-border'>
            
            <DiningOption className='dining-option' />
            
            <hr className='hr'/>

            <div className='date-person__container'>
                <DateAndTime className='date-and-time' />
                <Person className='person' />
            </div>

            <hr className='hr'/>

            <Search className='search' />

        </Wrapper>
    )
}