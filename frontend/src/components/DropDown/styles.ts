import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;

  div {
    color: #999;
    background: #999;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
`;

export const DropDownList = styled.span`
  position: absolute;
  top: 30px;
  right: 1px;
  width: 150px;
  z-index: 10000;

  ul {
    display: block;
    background: #fff;
    padding: 10px 0;
    border-radius: 5px;
    box-shadow: 0 0 20px 0.5px rgba(0, 0, 0, 0.1);
  }

  li {
    position: relative;
    font-size: 16px;
    text-align: left;
    padding: 15px 10px;

    &:hover {
      background: #eee;
    }
  }
`;
