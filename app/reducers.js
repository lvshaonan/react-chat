/**
 * Created by Administrator on 2018/1/30.
 */
import { combineReducers } from 'redux'
import { user } from './redux/user.redux'


const rootReducer = combineReducers({
  user
})

export default rootReducer