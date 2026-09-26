import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  background: linear-gradient(135deg, #1a6b5a 0%, #0d2a30 100%);
  color: #ffffff;
  padding: 1.2rem 2.8rem;
  border: none;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.03em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #c9a84c 0%, #e8c87a 100%);
    transition: left 0.4s ease;
    z-index: 0;
  }

  &:hover::before {
    left: 0;
  }

  span, svg, div {
    position: relative;
    z-index: 1;
  }

  &:hover, &:active {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(13, 42, 48, 0.35);
    color: #0d2a30;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    position: relative;
    z-index: 1;
  }
`;
