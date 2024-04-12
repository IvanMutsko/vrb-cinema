import styled from "styled-components";

export const SearchbarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 700px;
  color: var(--light-text);
  background-color: var(--search-bg);
  box-shadow: var(--shadow-bt);
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  border-radius: 3px;

  @media screen and (max-width: 480px) {
    padding: 5px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  font-weight: 700;
  color: var(--search-bg);
  font-size: 16px;
  width: 90px;
  height: 42px;
  border: 0;

  opacity: 1;
  outline: none;
  transition: background-color var(--transition-duration)
    var(--transition-timing-function);

  &:hover {
    background-color: var(--active);
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    width: auto;
    height: auto;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  font-style: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  width: 100%;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    padding: 10px;
    width: auto;
    height: auto;
    font-size: 14px;
  }
`;
