import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  width: 100%;

  padding: 20px;
  border-bottom: 1px solid #eee;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  :hover {
    background: ${props => props.theme.colors.background};
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
    border-radius: 100%;
    font-size: 0.9rem;
    background: #06d755;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactInfo = styled.div`
  margin-left: 10px;

  div {
    font-size: 1.2rem;
  }

  div + div {
    max-width: 150px;
    max-height: 0.8rem;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.text};
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
