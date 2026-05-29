import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Outfit', sans-serif;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    background-color: #f4f8f9;
    scrollbar-color: #1a6b5a #071820;
    scrollbar-width: thin;
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-track {
    background-color: #071820;
  }

  body::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #c9a84c, #1a6b5a);
    border-radius: 6px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
  }

  h2 {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 700;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.01em;
    white-space: normal;
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    font-size: 1.65rem;
    line-height: 1.7;
    margin-top: 1rem;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-four-column {
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
  }

  .common-heading {
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 6rem;
    text-transform: capitalize;
    color: #0d2a30;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.01em;
  }

  /* Fade-in animation for sections */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes pulse-ring {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.7s ease forwards;
  }

  input, textarea {
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
  }

  input[type="submit"] {
    max-width: 16rem;
    margin-top: 2rem;
    background: linear-gradient(135deg, #1a6b5a, #0d2a30);
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: 0.1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  input[type="submit"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(26, 107, 90, 0.4);
  }

  /* Media Queries */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      padding: 0 3.2rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 50%;
    }

    .grid {
      gap: 3.2rem;
    }

    .grid-two-column, .grid-three-column, .grid-four-column {
      grid-template-columns: 1fr;
    }
  }
`;
