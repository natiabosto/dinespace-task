import React from 'react'
import styled from 'styled-components'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'

const Wrapper = styled.div`
    display: flex;
    display: inline-block;

    .date-and-time__name {
        padding: 16px;
    }

    .calendar-today__icon {
        color: var(--grey);
        vertical-align: middle;
        font-size: 19px !important;
        margin-bottom: 2px;
    }
`

const DateAndTime = ({ className }) => {
    return (
        <Wrapper className={className}>
            <div className='date-and-time__name'>
                <CalendarTodayIcon className='calendar-today__icon'/>
                <label className='dinespace-label'> Date and Time </label>
            </div>
            
        </Wrapper>
    )
}

export default DateAndTime;