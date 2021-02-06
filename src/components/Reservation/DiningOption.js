import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import NoteIcon from '@material-ui/icons/Note'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import { useDispatch } from 'react-redux'
import { updatePickupState } from '../../redux/pickup'

const Wrapper = styled.div`
    padding: 16px;
    display: flex;
    position: relative;

    .dinespace-label {
        pointer-events: none;
    }

    .expand-more,
    .expand-less {
        vertical-align: middle;
        font-size: 42px;
        height: 35px;
        margin-top: -1px;
        margin-bottom: -5px;
        float: right;
        cursor: pointer;
    }

    .dining-options {
        border-top-right-radius: 1px;
        border-top-left-radius: 1px;
        padding: 20px;
    }

    .options__line-break {
        border-top: 1px solid var(--borderColor);
        border-right: 1px solid var(--borderColor);
        border-left: 1px solid var(--borderColor);
        border-bottom: none;
    }

    .option {
        cursor: pointer;

        > * {
            pointer-events: none;
        }
    }
    
    .option-chosen {
        color: var(--orange) !important;
    }

    .option__icon,
    .option__label,
    .option-chosen,
    .option-chosen {
        display: inline-block;
        flex: 1;
        font-size: 22px;
    }

    .option__icon {
        font-size: 28px;
        margin: 0 1px -7px 5px;
        color: var(--grey)
    }

    .option__label {
        margin-left: 8px;
    }
`

const DiningOption = ({ className }) => {

    const dispatch = useDispatch();
    
    const [diningOption, setDiningOption] = React.useState(undefined);
    const [expanded, setExpanded] = React.useState(false);
    
    const diningOptions = [
        {
            id: 1,
            icon: <FastfoodIcon className={`option__icon ${Number(diningOption) === 1 ? 'option-chosen' : ''}`} />,
            label: 'Dine Out'
        },
        {
            id: 2,
            icon: <NoteIcon className={`option__icon ${Number(diningOption) === 2 ? 'option-chosen' : ''}`} />,
            label: 'Reservation'
        },
        {
            id: 3,
            icon: <LocalMallIcon className={`option__icon ${Number(diningOption) === 3 ? 'option-chosen' : ''}`} />,
            label: 'Pick Up'
        },
        {
            id: 4,
            icon: <div />,
            label: 'Any'
        }
    ]

    const handleExpansion = () => {
        setExpanded( !expanded );
    }

    const handleOptionClick = (option) => {
        setDiningOption(option.target.id);
        setExpanded( !expanded );

        dispatch(updatePickupState( Number(option.target.id) === 3 ))
    }

    return (
        <Wrapper className={className} onClick={handleExpansion}>
            { 
                diningOption === undefined ? 
                
                <label className='dinespace-label'> Dining Option </label> 
                :
                <div className='inner-title__container'>
                    { diningOptions[diningOption-1].icon }
                    <label className='option__label option-chosen'> { diningOptions[diningOption-1].label } </label>
                </div>
            }
            { 
                !expanded ? 
                
                <ExpandMoreIcon className='expand-more' /> 
                : 
                <ExpandLessIcon className='expand-less' /> 
            }
            {
                expanded ?
                <div className='inner-component__container'>
                    <div className='shadow-styler'> </div>
                    <div className='inner-component__container-corrector'>
                        <div className='dining-options shadowed-border'>
                            {
                                diningOptions.map((option, index) => {return (

                                    <div className='option' id={option.id} onClick={handleOptionClick} key={index}>
                                        { option.icon }
                                        <label className={`option__label ${Number(diningOption) === Number(option.id) ? 'option-chosen' : ''}`}> { option.label } </label>
                                    </div>

                                )}).reduce((previous, current) => [previous, <hr className='options__line-break'key={Math.random()}/>, current])
                            }
                        </div>
                    </div>
                </div>
                : 
                undefined
            }
        </Wrapper>
    )
}

export default DiningOption;