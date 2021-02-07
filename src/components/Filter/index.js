import React from 'react'
import styled from 'styled-components'
import TuneIcon from '@material-ui/icons/Tune'

import icon_1 from '../../media/icon_1.png'
import icon_2 from '../../media/icon_2.png'
import icon_3 from '../../media/icon_3.png'

const Wrapper = styled.div`
    display: flex;    

    .filter-button__container {
        background-color: rgb(205 214 241 / 50%);
        border-radius: 4px;
        padding: 7px 14px 8px 14px;
        width: fit-content;
        height: fit-content;
        user-select: none;
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

    .filters__container {
        overflow-x: scroll;
        flex: 1;
        white-space: nowrap;
        padding-left: 15px;
        user-select: none;
    }

    .filter-item__container {
        display: inline-block;
        padding: 5px 20px;
    }

    .filter-item__image {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 10px;
    }

    @media screen and (max-width: 400px) {
        .filter-item__container {
            padding: 2vw 6vw;
        }
        
        .filter-item__image {
            width: 10vw;
            height: 10vw;
        }

        .filter-button__container {
            padding: 3vw;
        }

        .filter-button__icon {
            margin-bottom: -2vw;
            font-size: 9vw;
        }
    }
`

export const Filter = () => {

    const [filterExtended, setFilterExtended] = React.useState(true)
    const [notificationNumber, setNotificationNumber] = React.useState(4)

    const filterItems = [
        {
            id: 1,
            src: icon_1,
            text: 'Pizza'
        },
        {
            id: 2,
            src: icon_2,
            text: 'Chicken'
        },
        {
            id: 3,
            src: icon_3,
            text: 'Burger'
        }
    ]

    const filterRef = React.useRef(null);

    React.useEffect(() => {
        if(filterRef.current){
            filterRef.current.addEventListener('scroll', (e)=>{
                setFilterExtended( e.target.scrollLeft === 0 )
            })
        }
        
    }, [filterRef]);

    return (
        <Wrapper>
            <div className='filter-button__container'>
                <TuneIcon className='filter-button__icon'/>
                { filterExtended ? <label className='dinespace-font-size__medium'> Filter </label> : 
                    <div className='notification__container'>
                        <div className='notification__number'> { notificationNumber } </div>
                    </div> 
                }
            </div>
            <div className='filters__container' ref={filterRef}>
                {
                    filterItems.map((item, index) => {return(
                        <div className='filter-item__container dinespace-font-size__medium' key={index}>
                            <img className='filter-item__image' src={item.src} />
                            { item.text }
                        </div>
                    )})
                }
            </div>
        </Wrapper>
    )
}