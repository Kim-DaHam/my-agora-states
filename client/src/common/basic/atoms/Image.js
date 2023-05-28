import globalToken from '../../tokens/global.json';
import { styled } from 'styled-components'

const { borderRadius } = globalToken;

export const Image = ({ url, size, radius, ...rest }) => {

    const ImageContainer = styled.div`
        width: ${(props)=>props.size}px;
        height: 100%;
        border-radius: ${(props)=>borderRadius[props.radius].value}%;
        overflow: hidden;
    `;

    const FeatherImage = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `;

    return (
        <ImageContainer size={size} radius={radius}>
            <FeatherImage src={url} {...rest}/>
        </ImageContainer>
        );
}