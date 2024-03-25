import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 20px auto;
`;

export const LoaderContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #fff;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-left: 4px solid #006eff;
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 15px;
`;
