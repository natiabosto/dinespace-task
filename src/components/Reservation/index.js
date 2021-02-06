import React from 'react';
import styled from 'styled-components'

import DiningOption from './DiningOption'
import DateAndTime from './DateAndTime'
import Person from './Person'
import Search from './Search'
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    
    .date-and-time,
    .person {
        flex: 1;
        cursor: pointer;
        user-select: none;
    }

    .dateandtime-person__container {
        flex: 1;
        display: flex;
    }

    .dining-option,
    .search {
        padding: 16px;
        display: inline-block;
        flex: 1 100%;
        cursor: pointer;
        user-select: none;
    }
    
    .dateandtime-person__container {
        position: relative;
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

    const pickupState = useSelector(state => state.pickupState.pickup);

    return (
        <Wrapper className='shadowed-border'>
            
            <DiningOption className='dining-option' />

            <div className='dateandtime-person__container'>
                <DateAndTime className='date-and-time' />
                {
                    !pickupState ?
                    <Person className='person' />
                    :
                    undefined
                }
            </div>

            <Search className='search' />

        </Wrapper>
    )
}