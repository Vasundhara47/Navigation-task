import React from 'react'
import { StyledButton } from './style'

interface ButtonProps {
    title: string
}
function Button({ title }: ButtonProps) {

    return (
        <StyledButton>
            {title}
        </StyledButton>
    )
}

export default Button
