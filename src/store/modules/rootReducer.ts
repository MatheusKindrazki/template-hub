import { Reducer } from 'react';

import { AnyAction, CombinedState, combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import example from './example/reducer';

export default (history: History): Reducer<CombinedState<any>, AnyAction> => {
  return combineReducers({
    router: connectRouter(history),
    example,
  });
};
