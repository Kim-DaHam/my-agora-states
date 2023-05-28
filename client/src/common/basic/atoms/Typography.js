import { styled } from 'styled-components';
import globalToken from '../../../tokens/global.json';
import { mapStyle } from '../../utils/mapStyle';

const { Heading, Label, Body } = globalToken;

// 제목 텍스트
export const HeadingText = styled.h1`
    margin: 0;
    ${mapStyle(Heading)};
`;

// 라벨 텍스트
export const LabelText = styled.h3`
    margin: 0;
    ${mapStyle(Label)};
`;

// 본문 텍스트
export const BodyText = styled.span`
    ${mapStyle(Body)};
`;