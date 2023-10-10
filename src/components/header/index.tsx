import React, { FC } from "react";
import { HeaderWrapper, Logo } from "./styles";

interface HeaderProps {
  username: string;
  isVisible: boolean;
}

const HeaderApp: FC<HeaderProps> = ({ username }) => (
  <HeaderWrapper>
    <span>Logo App</span>
    <span>{username}</span>
  </HeaderWrapper>
);

export default HeaderApp;
