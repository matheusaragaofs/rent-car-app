import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Marginer } from "../../../utils/Marginer";
import { Button } from "../Button";
import {
  CardContainer,
  DateCalendar,
  Icon,
  ItemContainer,
  LineSeparator,
  Name,
  SmallIcon,
} from "./styles";

export const BookCard: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleOpenStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleOpenStartDateCalendar}>
          Pick Up Date
          <SmallIcon>
            <FontAwesomeIcon
              icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
            />
          </SmallIcon>
        </Name>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>
          Return Date
          <SmallIcon>
            <FontAwesomeIcon
              icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
            />
          </SmallIcon>
        </Name>
        {isReturnCalendarOpen && (
          <DateCalendar offset value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};
