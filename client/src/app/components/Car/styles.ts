import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../Button";

export const CarContainer = styled.div`
  ${tw`
        shadow-md
        w-[16.5rem]
        min-h-[22.2rem]
        max-h-[25.2rem]
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6

    `}
`;

export const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const CarName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
    `}
`;
export const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3

`}
`;
export const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3

`}
`;
export const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
`}
`;

export const SmallIcon = styled.span`
  ${tw`
        text-gray-400
        text-sm
        mr-1
    `}
`;

export const CarDetailsContainer = styled.div`
  ${tw`
        flex
        w-full
        justify-between
    `}
`;
export const CarDetail = styled.span`
  ${tw`
        flex
        items-center
    `}
`;
export const CarInfo = styled.h6`
  ${tw`
        text-xs
        text-gray-400
    `}
`;
export const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
        flex
        bg-gray-300
        mt-2
        mb-2
    `}
`;
export const RentButton = styled(Button)`
  ${tw`
        min-w-full
        mt-5
    `}
`;
export const SmallText = styled.p`
  color: inherit;
  ${tw`
        text-xs
        inline-flex
        font-thin
    `}
`;
