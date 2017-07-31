/**
 * Created by matthewxfz on 7/30/17.
 */
import { combineReducers } from 'redux'
import alert from './alert'


const todoApp = combineReducers({
    alert,
})

export default todoApp