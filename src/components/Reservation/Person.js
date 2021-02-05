import React from 'react'
import styled from 'styled-components'
import { Icon } from '@material-ui/core'

const Wrapper = styled.div`
    display: flex;
`

const Person = ({ className }) => {
    return (
        <Wrapper className={className}>
            Person
        </Wrapper>
    )
}

export default Person;