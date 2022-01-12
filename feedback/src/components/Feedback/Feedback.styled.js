import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  max-width: 450px;
  min-width: 320px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

export const StatisticsTitle = styled.h2`
  font-size: 1.2em;
  text-align: center;
`;
