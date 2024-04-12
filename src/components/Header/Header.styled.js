import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Layout = styled.header`
  background-color: var(--header-bg);
`;

export const HeaderEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  padding: 0 30px;
  min-height: 40px;
`;

export const Navigation = styled.nav`
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
    width: 0;

    transition: all var(--transition-long-duration)
      var(--transition-timing-function);
    &.hide {
      opacity: 0;
      height: 0;
    }
    &.open {
      opacity: 1;
      height: 150px;
      width: 150px;
    }
  }
`;

export const Image = styled.img`
  min-height: 30px;
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 10px;

  transition: background-color var(--transition-duration)
    var(--transition-timing-function);

  &:hover {
    background-color: var(--search-bg);
  }

  &.active {
    color: white;
    background-color: var(--active);
  }
`;

export const Button = styled.button`
  display: none;

  @media screen and (max-width: 480px) {
    display: flex;
    padding: 5px;
    background-color: transparent;
    border: none;

    font-size: 18px;
  }
`;
