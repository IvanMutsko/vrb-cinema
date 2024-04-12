import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.li`
  position: relative;
  width: 240px;
  border-radius: 10px;
  background-color: var(--header-bg);
  box-shadow: var(--shadow-bt);
  overflow: hidden;

  transition: transform var(--transition-duration)
    var(--transition-timing-function);
  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieLink = styled(NavLink)`
  color: var(--text-black);

  text-decoration: none;
  font-weight: 500;
`;

export const Image = styled.img`
  height: 340px;
  object-fit: cover;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;

  font-size: 14px;
  font-weight: 400;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 18px;
`;
