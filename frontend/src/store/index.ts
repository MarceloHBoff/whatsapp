import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { RootStateOrAny } from 'react-redux';

import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { IAuthState } from './modules/auth/types';
import { IContactsState } from './modules/contacts/types';
import { IMessagesState } from './modules/messages/types';
import { IModalState } from './modules/modal/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface IApplicationState {
  auth: IAuthState;
  contacts: IContactsState;
  messages: IMessagesState;
  modal: IModalState;
}

const sagaMiddleware = createSagaMiddleware();

const persistReducerConfigured = persistReducer<RootStateOrAny>(
  {
    key: '@whatsapp',
    storage,
    whitelist: ['auth'],
  },
  rootReducer
);

const store: Store<IApplicationState> = createStore(
  persistReducerConfigured,
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
