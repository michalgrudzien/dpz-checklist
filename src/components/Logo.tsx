import React, { FunctionComponent } from "react";
import styled from "styled-components";

import wtLogoImg from "assets/images/logo_inland.svg";

const LogoImg = styled.img`
  display: block;
  width: 250px;
  padding-top: 2em;
`;

//TODO: add WSS logo depending on env
const logoImg = wtLogoImg;

const Logo: FunctionComponent = () => (
  <LogoImg src={logoImg} alt="DPŻ World Tour" />
);

export default Logo;
