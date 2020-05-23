import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { setModalAddContact } from '../../store/modules/modal/actions';
import { IApplicationState } from '../../store';
import { setContacts } from '../../store/modules/contacts/actions';

import { Container, CloseButton } from './styles';

const AddContact: React.FC = () => {
  const [email, setEmail] = useState('');

  const contacts = useSelector((s: IApplicationState) => s.contacts.data);
  const modalAddContact = useSelector(
    (s: IApplicationState) => s.modal.addContact
  );

  const dispatch = useDispatch();

  async function handleAddContact() {
    if (email === '') {
      alert('Please type an email');
      return;
    }

    try {
      const { data } = await api.post('contacts', { email });

      dispatch(setContacts([...contacts, data]));
      setEmail('');
    } catch {
      alert('Contact does not registered in application');
    }

    dispatch(setModalAddContact(false));
  }

  return (
    <>
      {modalAddContact && (
        <Container>
          <div>
            Add Contact
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <button type="button" onClick={handleAddContact}>
              Add Contact
            </button>
          </div>

          <CloseButton onClick={() => dispatch(setModalAddContact(false))}>
            X
          </CloseButton>
        </Container>
      )}
    </>
  );
};

export default AddContact;
