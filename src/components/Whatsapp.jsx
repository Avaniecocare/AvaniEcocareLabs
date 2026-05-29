import { useState } from "react";
import { FaWhatsapp, FaTimes, FaPhone } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

export const WhatsAppButton = () => {
  const [expanded, setExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I would like to inquire about your testing services."
    );
    const phoneNumber = "919910852911";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919910852911";
  };

  return (
    <FloatingContainer>
      {expanded && (
        <ActionMenu>
          <ActionItem onClick={handleCallClick} className="call-action">
            <div className="action-icon"><FaPhone /></div>
            <div className="action-text">
              <span className="action-label">Call Us Now</span>
              <span className="action-sub">+91 9910852911</span>
            </div>
          </ActionItem>
          <ActionItem onClick={handleWhatsAppClick} className="wa-action">
            <div className="action-icon"><FaWhatsapp /></div>
            <div className="action-text">
              <span className="action-label">WhatsApp Chat</span>
              <span className="action-sub">1-hour response</span>
            </div>
          </ActionItem>
        </ActionMenu>
      )}
      <MainButton
        id="whatsapp-float-btn"
        onClick={() => setExpanded((v) => !v)}
        aria-label="Contact us"
        className={expanded ? "open" : ""}
      >
        <FaWhatsapp className="wa-icon" />
        <FaTimes className="close-icon" />
        {!expanded && <span className="wa-label">Chat with us</span>}
      </MainButton>
    </FloatingContainer>
  );
};

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5), 0 6px 24px rgba(37,211,102,0.35); }
  70% { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0), 0 6px 24px rgba(37,211,102,0.35); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0), 0 6px 24px rgba(37,211,102,0.35); }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(14px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 3.6rem;
  left: 3.6rem;
  z-index: 9998;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  @media (max-width: 768px) {
    bottom: 2rem;
    left: 2rem;
  }
`;

const MainButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #25d366, #128c7e);
  border: none;
  border-radius: 50px;
  padding: 1.2rem 1.8rem 1.2rem 1.4rem;
  cursor: pointer;
  animation: ${pulse} 2.8s ease-in-out infinite;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .wa-icon {
    font-size: 2.6rem;
    color: white;
    transition: opacity 0.2s ease;
  }

  .close-icon {
    font-size: 2.2rem;
    color: white;
    display: none;
    transition: opacity 0.2s ease;
  }

  .wa-label {
    font-size: 1.4rem;
    font-weight: 600;
    color: white;
    font-family: 'Inter', sans-serif;
    white-space: nowrap;
    letter-spacing: 0.02em;
  }

  &.open {
    border-radius: 50%;
    padding: 1.4rem;
    animation: none;
    box-shadow: 0 6px 24px rgba(37, 211, 102, 0.4);

    .wa-icon { display: none; }
    .close-icon { display: block; }
    .wa-label { display: none; }
  }

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 10px 32px rgba(37, 211, 102, 0.5);
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 50%;

    .wa-label { display: none; }
  }
`;

const ActionMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  animation: ${fadeSlideUp} 0.25s ease;
`;

const ActionItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  backdrop-filter: blur(10px);
  min-width: 190px;
  text-align: left;

  &.wa-action {
    background: rgba(37, 211, 102, 0.15);
    border: 1px solid rgba(37, 211, 102, 0.3);

    &:hover {
      background: rgba(37, 211, 102, 0.25);
      transform: translateX(4px);
      box-shadow: 0 8px 20px rgba(37, 211, 102, 0.2);
    }

    .action-icon {
      background: linear-gradient(135deg, #25d366, #128c7e);
      color: white;
    }

    .action-label { color: #1a5c3a; }
    .action-sub { color: #5a7a5a; }
  }

  &.call-action {
    background: rgba(7, 24, 32, 0.85);
    border: 1px solid rgba(201, 168, 76, 0.3);

    &:hover {
      background: rgba(13, 42, 48, 0.92);
      transform: translateX(4px);
      box-shadow: 0 8px 20px rgba(7, 24, 32, 0.3);
    }

    .action-icon {
      background: linear-gradient(135deg, #c9a84c, #e8c87a);
      color: #071820;
    }

    .action-label { color: white; }
    .action-sub { color: rgba(255,255,255,0.5); }
  }

  .action-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  .action-text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .action-label {
    font-size: 1.4rem;
    font-weight: 700;
    font-family: 'Outfit', sans-serif;
    line-height: 1;
  }

  .action-sub {
    font-size: 1.15rem;
    font-family: 'Inter', sans-serif;
    line-height: 1;
  }

  @media (max-width: 480px) {
    min-width: 160px;
  }
`;
