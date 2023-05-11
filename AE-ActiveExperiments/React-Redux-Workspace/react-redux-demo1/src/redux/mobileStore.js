import { createStore} from 'redux';
import mobileReducer from './mobileReducer';
const store = createStore(mobileReducer);
export default store;