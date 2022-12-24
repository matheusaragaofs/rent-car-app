import styled, { css } from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
    flex 
    items-center 
    `}
`;

const LogoText = styled.div<{ color?: any }>`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    m-1
    `}
  ${({ color }) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  ${tw`
    h-6 
    md:h-9`}
  width: auto;
  img {
    width: auto;
    height: 100%;
  }
`;

export { LogoContainer, LogoText, Image };
