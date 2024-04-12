import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackLink = styled(NavLink)`
  /* display: inline-block; */
  display: block;
  text-align: center;
  padding: 6px;
  background-color: var(--search-bg);
  font-weight: 500;

  transition: background var(--transition-duration)
    var(--transition-timing-function);

  &:hover {
    background-color: var(--light-text);
  }
`;
