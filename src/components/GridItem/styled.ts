import styled from 'styled-components';

type ContainerProps = {
  showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 9.875rem;
  width: 9.875rem;
  background: ${(props => props.showBackground ? 'rgba(255, 255, 255, 0.7)': 'rgba(0, 0, 0, 0.7)')};
  border-radius: 0.625rem;
  padding: 0.9375rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 9.875rem;
  width: 9.875rem;
`;