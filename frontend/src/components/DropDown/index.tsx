import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signOut, changeTheme } from '../../store/modules/auth/actions';
import { setModalAddContact } from '../../store/modules/modal/actions';

import { Container, DropDownList } from './styles';

interface DropDownProps {
  options: string[];
}

const DropDown: React.FC<DropDownProps> = ({ options }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  function handleClick(option: number) {
    switch (option) {
      case 0:
        dispatch(setModalAddContact(true));
        return;
      case 1:
        dispatch(signOut());
        return;
      case 2:
        dispatch(changeTheme());
        return;
      default:
    }
  }

  return (
    <Container onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />

      {open && (
        <DropDownList>
          <ul>
            {options.map((option, index) => (
              <li key={option} onClick={() => handleClick(index)}>
                {option}
              </li>
            ))}
          </ul>
        </DropDownList>
      )}
    </Container>
  );
};

export default DropDown;
