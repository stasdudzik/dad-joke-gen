import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;
const Ulis = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const Litem = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: #150485;
    font-weight: 600;
    font-size: 1.4rem;
    &.Active {
      color: red;
    }
  }
`;

const Navigation = () => (
  <Wrapper>
    <Ulis>
      <Litem>
        <NavLink exact activeClassName="Active" to="/">
          generator
        </NavLink>
      </Litem>
      <Litem>
        <NavLink activeClassName="Active" to="/terrible">
          terrible
        </NavLink>
      </Litem>
      <Litem>
        <NavLink activeClassName="Active" to="/great">
          great
        </NavLink>
      </Litem>
    </Ulis>
  </Wrapper>
);

export default Navigation;
