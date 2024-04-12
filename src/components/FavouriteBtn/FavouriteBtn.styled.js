import styled from "styled-components";

export const Button = styled.button`
  position: absolute;

  display: flex;
  right: 10px;
  top: 10px;

  border: none;
  background-color: var(--search-bg);
  border-radius: 3px;

  font-size: 24px;

  &.gray {
    color: var(--light-text);
  }
  &.red {
    color: #ff0000;
  }

  transition: transform var(--transition-duration)
      var(--transition-timing-function),
    color var(--transition-duration) var(--transition-timing-function);
  &:hover {
    transform: scale(1.1);
    color: #ff00009c;
  }
`;
