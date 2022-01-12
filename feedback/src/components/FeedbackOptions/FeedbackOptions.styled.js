import styled from "styled-components";

export const ListButton = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const ListButtonItem = styled.li`
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Button = styled.button`
  width: 80px;
  border-radius: ${({ theme }) => theme.spacing(4)};
  border: ${({ theme }) => `1px solid ${theme.colors.primaryColor}`};
  padding: ${({ theme }) => theme.spacing(2)};
  text-transform: capitalize;
  color: inherit;
  transition: ${({ theme }) => `color ${theme.timing} ${theme.timingFunction}`},
    ${({ theme }) => `background-color ${theme.timing} ${theme.timingFunction}`};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.reverseColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
