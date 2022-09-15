import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderStyled>
      <Title>Issues</Title>
      angular / angular-cli
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

export default Header;
