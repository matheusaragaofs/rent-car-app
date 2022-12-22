import styled from "styled-components";
import tw from "twin.macro";

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
`

export const ItemContainer = styled.div`
    ${tw`
        flex
        `}
`
export const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-sm
        md:text-base
        mr-1
        md:mr-3
        `}
`
export const Name = styled.span`
    ${tw`
        text-gray-600
        text-sm
        md:text-sm
        `}
`
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
`
