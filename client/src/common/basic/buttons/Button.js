import { css, styled } from 'styled-components';
import globalToken from '../../../tokens/global.json'
import { LabelText } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';

const { Spacing, borderRadius, Primary, Gray, White, Accent } =
  globalToken;

  const ButtonContainer = styled.button`
    border: none;
    outline: none;
    background-color: transparent;

    display: flex;
    align-items: center;
    gap: ${(props)=>props.gap || 0}px;

    cursor: pointer;
    border-radius: ${borderRadius[8].value}px;

    & > svg {
        color: inherit;
    }

    padding: ${Spacing[8].value}px ${Spacing[16].value}px;

    ${(props)=> props.mode === 'DarkMode'?
        css`
            background-color: ${Gray[400].value};
            color: ${Gray[700].value};

            &:hover {
                background-color: ${Gray[300].value};
            }
        `
    :
        css`
            background-color: ${Primary.value};
            color: ${White.value};

            &:hover {
                background-color: ${Accent.value};
            }
        `
    }
  `;

  export const Button = ({mode, label, icon, ...rest}) => {
    return (
        <ButtonContainer mode={mode} gap={Spacing[8].value} {...rest}>
            { icon &&
                <Icon icon={icon}/>
            }
            <LabelText children={label}/>
        </ButtonContainer>
    )
  }