import React from "react";
import {LogoImage} from "./styles"
import logoImage from "../../../../assets/perfil.png";

const sizes = {
  small:28,
  large:84,
  perfil:54,
}

export const Logo = ({size}) => {
  return (
    <LogoImage source={logoImage}size={sizes[size || 'perfil']}/>
  )
};