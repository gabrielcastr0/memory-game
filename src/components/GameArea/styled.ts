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
  padding: 1.875rem 0;
`;

export const Button = styled.button`
  background: #000;
  color: #fff;
  height: 40px;
  width: auto;
`;

export const GridArea = styled.div`
  display: flex;
  flex: 1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;