import {
  SET_DOMAIN,
  SET_APIKEY,
  DELETE_DOMAIN,
  SHOW_DOMAIN_INPUT,
  UNAUTH_USER,
} from '../actions/actionTypes';

const initialState = {
  apikey: '',
  customDomain: '',
  homepage: '',
  domainInput: true,
  useHttps: false,
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOMAIN:
      return {
        ...state,
        customDomain: action.payload.customDomain,
        homepage: action.payload.homepage,
        domainInput: false,
        useHttps: action.payload.useHttps,
      };
    case SET_APIKEY:
      return { ...state, apikey: action.payload };
    case DELETE_DOMAIN:
      return { ...state, customDomain: '', homepage: '', domainInput: true };
    case SHOW_DOMAIN_INPUT:
      return { ...state, domainInput: true };
    case UNAUTH_USER:
      return initialState;
    default:
      return state;
  }
};

export default settings;
