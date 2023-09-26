import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    width: ${({theme}) => theme.metrics.px(144)}px;
    height: ${({theme}) => theme.metrics.px(221)}px;
    border-radius:${({theme})=> theme.metrics.px(25)}px;
    overflow:hidden;
    margin-right:${({theme})=> theme.metrics.px(12)};
`;

export const CardImage = styled.ImageBackground`
    width:100%;
    height:100%;
`