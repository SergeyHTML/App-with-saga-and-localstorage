import {combineReducers} from 'redux'
import currencies from './currencies'
import ticket from './ticket'

export default combineReducers({
  currencies, ticket
})
