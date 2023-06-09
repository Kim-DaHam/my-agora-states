import { useState } from 'react';
import { styled, css } from 'styled-components';
import globalToken from '../../../tokens/global.json';
import { Icon } from './Icon';

const { Spacing, borderRadius, Gray, White } = globalToken;

const InputContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: ${(props)=>props.gap || 0}px;

    background: transparent;
    padding: ${Spacing.base.value}px ${Spacing[12].value}px;
    border: 1px solid ${Gray[600].value};
    border-radius: ${borderRadius[8].value}px;

    &:focus-within{
        background-color: ${White.value};
    }
`;

const InputStyle = styled.input`
    width: 15rem;
    outline: none;
    border: none;
    padding: 0;
    flex: 1;

    background: transparent;
    transition: width 0.2s;

    &::placeholder {
        color: ${Gray[600].value};
    }

    ${(props)=>
        props.primary
            && css`
                &:focus{
                    width: 20rem;
                    background-color: ${White.value};
                }
            `
    }

`;

export const Input = ({primary, icon, placeholder, ...rest}) => {
    return (
        <InputContainer primary={primary} gap={Spacing[12].value} {...rest}>
            {icon && <Icon icon={icon}/>}
            <InputStyle primary={primary} placeholder={placeholder}/>
        </InputContainer>
    )
}