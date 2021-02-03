import {combineReducers} from 'redux';
import {someTextReducer} from './test/someText';
import {loginReducer} from './auth/login';
import {errorsReducer} from './error/error';
import {loadingReducer} from './loading/loading';

export default combineReducers({
  someText: someTextReducer,
  loginData: loginReducer,
  error: errorsReducer,
  loading: loadingReducer,
});
