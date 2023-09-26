import styled from "styled-components/native";


export const TagContainer = styled.View`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${({theme})=> theme.colors.greenligth}
    height:${({theme})=> theme.metrics.px(24)}px;
    width:auto;
    padding-horizontal:${({theme})=> theme.metrics.px(6)};

`
