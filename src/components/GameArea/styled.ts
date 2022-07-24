import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.25rem;
`;

export const InfoArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 0;
`;

export const Button = styled.button`
  margin-top: 0.625rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  height: 40px;
  width: 120px;
  border-radius: 0.3125rem;
  font-size: 18px;
  cursor: pointer;
  border: none;

  &:hover{
    background: rgba(255, 255, 255, 0.8);
    color: #000;
  }
`;

export const GridArea = styled.div`
  display: flex;
  flex: 1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media (max-width: 768px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 425px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 375px){
    grid-template-columns: repeat(1, 1fr);
  }
`;