import React from "react";
import { TagContainer } from "./styles";
import { Text } from "~/componentes/atomos";

export const Tag = ({children})=>(
    <TagContainer>
        <Text size={14}>{children}</Text>
    </TagContainer>
)