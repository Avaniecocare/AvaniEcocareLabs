import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import SEO from "./components/SEO";

const Error = () => {
  return (
    <Wrapper>
      <SEO 
        title="404 Page Not Found" 
        description="The page you are looking for does not exist or has been moved. Check our materials testing services or get in touch."
        keywords="404 error, page not found"
      />
      <div className="error-content">
        <div className="error-code">404</div>
        <div className="error-icon">🔬</div>
        <h1>Page Not Found</h1>
        <p>
          Looks like this sample didn&apos;t pass our quality check. The page
          you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="error-actions">
          <NavLink to="/" className="btn-primary">
            ← Back to Home
          </NavLink>
          <NavLink to="/service" className="btn-secondary">
            View Services
          </NavLink>
        </div>
        <div className="error-contact">
          Need help?{" "}
          <a href="tel:+919910852911">Call +91 9910852911</a>
        </div>
      </div>
    </Wrapper>
  );
};

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const Wrapper = styled.section`
  min-height: calc(100vh - 120px);
  background: linear-gradient(180deg, #f4f8f9 0%, #eef4f5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2.4rem;

  .error-content {
    text-align: center;
    max-width: 560px;
  }

  .error-code {
    font-size: clamp(8rem, 18vw, 14rem);
    font-weight: 900;
    font-family: 'Outfit', sans-serif;
    background: linear-gradient(135deg, #0d2a30, #1a6b5a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .error-icon {
    font-size: 5rem;
    margin: 1.6rem 0;
    animation: ${float} 3s ease-in-out infinite;
    display: block;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 800;
    color: #0d2a30;
    font-family: 'Outfit', sans-serif;
    margin-bottom: 1.6rem;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.7rem;
    color: #5a7a82;
    line-height: 1.7;
    margin-bottom: 3.2rem;
    opacity: 1;
  }

  .error-actions {
    display: flex;
    gap: 1.4rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2.4rem;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: linear-gradient(135deg, #1a6b5a, #0d2a30);
    color: white;
    padding: 1.3rem 2.8rem;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    transition: all 0.3s ease;
    letter-spacing: 0.02em;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(13, 42, 48, 0.3);
    }
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    background: white;
    color: #1a6b5a;
    padding: 1.3rem 2.8rem;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    border: 1.5px solid rgba(26, 107, 90, 0.3);
    transition: all 0.3s ease;
    letter-spacing: 0.02em;

    &:hover {
      border-color: #c9a84c;
      color: #c9a84c;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(201, 168, 76, 0.2);
    }
  }

  .error-contact {
    font-size: 1.45rem;
    color: rgba(90, 122, 130, 0.7);
    font-family: 'Inter', sans-serif;

    a {
      color: #1a6b5a;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #c9a84c;
      }
    }
  }
`;

export default Error;
