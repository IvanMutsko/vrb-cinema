import styled from "styled-components";

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;

  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 5px;

  #genreList & {
    font-weight: 400;
    padding: 5px;
  }
`;

export const Input = styled.input`
  display: inline-block;
  margin-bottom: 15px;
  padding: 5px;

  font-family: inherit;

  border: none;
  border-radius: 3px;
  max-width: 700px;

  #genreList & {
    margin-bottom: 10px;
  }
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  border: none;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 15px;

  max-width: 700px;
`;

export const Button = styled.button`
  display: inline-block;
  margin-right: auto;
  padding: 10px 15px;
  font-size: 18px;
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 5px;

  transition: background-color var(--transition-duration)
    var(--transition-timing-function);

  &:hover {
    background-color: var(--active);
  }
`;
