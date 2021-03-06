import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { routerMiddleware } from 'connected-react-router';

import history from '~/services/history';

import createRootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const encrypted = encryptTransform({
  secretKey: process.env.REACT_APP_SECRET_ENCRYPTED_KEY as string,
});

const persistName = process.env.REACT_APP_PERSIST_NAME as string;

const persistConfig = {
  key: persistName,
  storage,
  whitelist: ['auth', 'user'],
  transforms: [encrypted],
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history),
);

const store: Store<Store.State> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
