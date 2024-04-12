import styled from "styled-components";

export const Button = styled.button`
  position: absolute;

  display: flex;
  left: 10px;
  top: 10px;

  background-color: var(--search-bg);
  border-radius: 3px;

  border: none;

  font-size: 24px;

  transition: transform var(--transition-duration)
      var(--transition-timing-function),
    color var(--transition-duration) var(--transition-timing-function);
  &:hover {
    transform: scale(1.1);
    color: #ff00009c;
  }
`;
