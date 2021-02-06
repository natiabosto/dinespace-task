import React from 'react'
import styled from 'styled-components'
import TuneIcon from '@material-ui/icons/Tune'

const Wrapper = styled.div`
    display: flex;    

    .filter-button__container {
        background-color: rgb(205 214 241 / 50%);
        border-radius: 4px;
        padding: 7px 14px 9px 14px;
        width: fit-content;
        height: fit-content;
    }

    .filter-button__icon {
        font-size: 32px;
        margin-bottom: -8px;
    }

    .notification__container {
        background-color: var(--orange);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        position: absolute;
        margin-top: -44px;
        margin-left: 31px;
    }

    .notification__number {
        color: white;
        font-size: 13px;
        margin-left: 5px;
        margin-top: 0px;
    }

    .filter-items__container {
        overflow-x: scroll;
        flex: 1;
        white-space: nowrap;
    }
`

export const Filter = () => {

    const [filterExtended, setFilterExtended] = React.useState(true)
    const [notificationNumber, setNotificationNumber] = React.useState(4)

    return (
        <Wrapper>
            <div className='filter-button__container'>
                <TuneIcon className='filter-button__icon'/>
                { filterExtended ? <label> Filter </label> : 
                    <div className='notification__container'>
                        <div className='notification__number'> { notificationNumber } </div>
                    </div> 
                }
            </div>
            <div className='filter-items__container'>
dfffffffffffff ffffff f f fffffffffffffff ff ffffffffff ff ffffff f f ffffffffffff ff ff ff ffffffffff f f fffffffff
            </div>
        </Wrapper>
    )
}