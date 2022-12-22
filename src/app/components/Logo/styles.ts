import styled from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
    flex 
    items-center 
    `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1`}
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
