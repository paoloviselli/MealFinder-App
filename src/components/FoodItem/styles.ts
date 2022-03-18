import styled from "styled-components";

export const FoodItemContainer = styled.div`
  display: flex;
  /* margin: ${({ theme }) => theme.spacing.single}; */
  background-color: ${({ theme }) => theme.colors.active};
  border-radius: ${({ theme }) => theme.spacing.half};
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.active};
`;

export const TitleContainer = styled.div`
  display: flex;
`;
