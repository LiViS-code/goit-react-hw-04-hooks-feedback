import styled from "styled-components";

export const ListFeedback = styled.ul`
  padding-left: 20%;
  list-style: none;
`;

export const FeedbackItem = styled.li`
  text-transform: capitalize;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

export const Value = styled.span`
  font-size: 1.2em;
  font-weight: 700;
`;
