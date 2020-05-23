import styled from 'styled-components';

interface ImageProps {
  size: number;
}

export const Image = styled.img<ImageProps>`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: 50%;
`;
