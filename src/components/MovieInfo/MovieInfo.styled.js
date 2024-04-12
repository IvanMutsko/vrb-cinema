import styled from "styled-components";
import bgImg from "../../assets/bg-2.jpg";

export const Layout = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
`;

export const Wrap = styled.div`
  display: flex;
  padding: 20px 40px;

  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  text-shadow: var(--shadow-text);

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;

    font-size: 14px;
  }
`;

export const PhotoWrap = styled.div`
  position: relative;
`;

export const Image = styled.img`
  max-width: 400px;
  object-fit: contain;
`;

export const DescrWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;

  span {
    font-weight: 500;
  }
`;
