import styled, { keyframes } from "styled-components";
import { DotLoader } from "react-spinners";

interface SpinnerProps {
    size?: number;
    color?: string;
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .spinner {
    animation: ${rotate} 1s linear infinite;
  }
`;

const SpinnerText = styled.p`
  margin-left: 10px;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 60, color = "#123abc" }) => {
    return (
        <SpinnerWrapper>
            <DotLoader color={color} size={size} className="spinner" />
            <SpinnerText>Loading...</SpinnerText>
        </SpinnerWrapper>
    );
};

export default Spinner;
