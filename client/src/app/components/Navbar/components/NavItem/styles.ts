import styled, { css } from "styled-components";
import tw from "twin.macro";

export const ListContainer = styled.ul`
  ${tw`flex
  list-none`}
`;
export const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-xs 
    md:text-base
  text-black  
    font-medium
    mr-1 
    md:mr-5 
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700`}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white 
        text-xl 
        mb-3
        focus:text-white `}
    `}
`;
