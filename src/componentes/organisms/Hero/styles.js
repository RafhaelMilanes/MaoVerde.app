import styled from "styled-components/native";

export const HeroContainer = styled.View`
    display: flex;
    flex-direction: column;
    width:100%;
    height:${({theme})=> theme.metrics.px(430)}px;
`

export const HeroImageBackground = styled.ImageBackground`
    width:100%;
    height:100%;
    
`