import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setIsVisible(winScroll > heightToHidden);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <button
          id="go-to-top-btn"
          className="top-btn"
          onClick={goToBtn}
          aria-label="Go to top"
          title="Back to top"
        >
          <FaArrowUp className="top-btn--icon" />
        </button>
      )}
    </Wrapper>
  );
};

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.5); }
  70% { box-shadow: 0 0 0 14px rgba(201, 168, 76, 0); }
  100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.8); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Wrapper = styled.section`
  position: fixed;
  bottom: 3.6rem;
  right: 3.6rem;
  z-index: 9999;

  .top-btn {
    width: 54px;
    height: 54px;
    background: linear-gradient(135deg, #c9a84c, #e8c87a);
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    animation: ${fadeIn} 0.3s ease, ${pulse} 2.5s ease-in-out 1s infinite;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: scale(1.12);
      box-shadow: 0 8px 24px rgba(201, 168, 76, 0.5);
    }

    &--icon {
      font-size: 2rem;
      color: #071820;
      animation: ${bounce} 1.5s ease-in-out infinite;
    }
  }

  @media (max-width: 768px) {
    bottom: 2.4rem;
    right: 2.4rem;

    .top-btn {
      width: 46px;
      height: 46px;
    }
  }
`;

export default GoToTop;
