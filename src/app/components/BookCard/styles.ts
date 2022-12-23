import { Calendar } from "react-calendar";
import styled, { css } from "styled-components";
import "react-calendar/dist/Calendar.css";
import tw from "twin.macro";
import { SCREENS } from "../../config/responsive";

export const CardContainer = styled.div`
  min-height: 4.3em;
  ${tw`
        flex
        justify-center
        items-center
        shadow-lg
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-8
        md:pr-8
    `}
`;

export const ItemContainer = styled.div`
  ${tw`
        flex relative
        `}
`;
export const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-sm
        md:text-base
        mr-1
        md:mr-3
        `}
`;
export const Name = styled.span`
  ${tw`
        text-gray-600
        text-sm
        md:text-sm
        cursor-pointer
        select-none
        `}
`;
export const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
        `}
`;

export const DateCalendar = styled(Calendar)<{ offset?: boolean }>`
  position: absolute;
  user-select: none;
  top: 2em;
  left: 0;
  max-width: none;

  ${({ offset }) =>
    offset &&
    css`
      left: -6em;
    `}

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;

export const SmallIcon = styled.span`
  ${tw`
        text-gray-500
        fill-current
        text-xs
        md:text-base
        ml-2
    `}
`;
