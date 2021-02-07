import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person'
import PeopleIcon from '@material-ui/icons/People'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

const Wrapper = styled.div`
    display: flex;
    
    .person__name {
        display: inline-block;
        padding: 16px;
        flex: 1;

        > * {
            pointer-events: none;
        }
    }
    
    .person__icon {
        color: var(--grey);
        vertical-align: middle;
        font-size: 22px !important;
        margin-bottom: 2px;
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

    .person-modifier {
        padding: 25px 15px;
        display: flex;
    }

    .group-size__icon-label-container {
        flex: 1;
    }

    .group-size__icon {
        margin-right: 5px;
        margin-bottom: 4px;
        vertical-align: middle;
    }

    .group-size__changer-container {
        flex: 1;
        text-align: right;
        margin-right: 7px;
    }

    .plus-minus__icon {
        font-size: 40px;
        vertical-align: middle;
        margin-top: -12px;
        margin-bottom: -9px;
        color: var(--grey);
    }

    .plus-minus__icon-disabled {
        color: var(--lightGrey)
    }

    .person-count__number {
        display: inline-block;
        margin: 0 10px;
        width: 20px;
        text-align: center;
    }

`

const Person = ({ className }) => {

    const [personCount, setPersonCount] = React.useState(1);
    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpansion = () => {
        setExpanded( !expanded );
    }

    const handlePlus = () => {
        setPersonCount(personCount+1);
    }

    const handleMinus = () => {
        if(personCount !== 1) {
            setPersonCount(personCount-1);
        }
    }

    return (
        <Wrapper className={className}>
            <div className='person__name' onClick={handleExpansion}>
                {
                personCount === 1 ?
                <>
                    <PersonIcon className='person__icon' />
                    <label> { personCount === 1 ? `Person` : `${ personCount } People` } </label>
                </>
                :
                <>
                    <PeopleIcon className='person__icon' />
                    <label> { personCount === 1 ? `Person` : `${ personCount } People` } </label>
                </>
            }
            { 
                !expanded ? 
                <ExpandMoreIcon className='expand-more' /> 
                : <ExpandLessIcon className='expand-less' /> 
            }
            </div>
            
            
            {
                expanded ?
                <div className='inner-component__container'>
                    <div className='shadow-styler'> </div>
                    <div className='inner-component__container-corrector'>
                        <div className='person-modifier shadowed-border'>
                            <div className='group-size__icon-label-container'>
                                { personCount === 1 ? 
                                    <PersonIcon className='group-size__icon' />
                                    :
                                    <PeopleIcon className='group-size__icon' />
                                }
                                Group Size
                            </div>
                            <div className='group-size__changer-container'> 
                                <RemoveCircleOutlineIcon onClick={handleMinus} className={`plus-minus__icon ${personCount === 1 ? 'plus-minus__icon-disabled' : '' }`} />
                                <div className='person-count__number'>{ personCount }</div>
                                <AddCircleOutlineIcon onClick={handlePlus} className='plus-minus__icon'/>
                            </div>
                        </div>
                    </div>
                </div>
                : 
                undefined
            }
        </Wrapper>
    )
}

export default Person;