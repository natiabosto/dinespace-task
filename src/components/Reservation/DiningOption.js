import React from 'react'
import styled from 'styled-components'
import { Icon } from '@material-ui/core';

const Wrapper = styled.div`
    display: flex;

    label {
        flex: 1;

    }
`

const DiningOption = ({ className }) => {
    return (
        <Wrapper className={className}>
            <label> Dining option </label>
        </Wrapper>
    )
}

export default DiningOption;