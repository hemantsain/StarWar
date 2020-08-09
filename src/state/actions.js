import {ActionTypes} from './action-types';

export const doLoginRequest = (data) => {
  return {type: ActionTypes.DO_LOGIN_REQUEST, payload: data};
};

export const doPlanetSearchRequest = () => {
  return {type: ActionTypes.DO_SEARCH_REQUEST};
};
