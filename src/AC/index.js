import {LOAD_CURRENCIES, LOAD_TICKET, FAIL, START, SUCCESS} from '../constans'

export function loadCurrencies() {
  return {
    type: LOAD_CURRENCIES + START
  }
}

export function loadCurrenciesCusses(response) {
  return {
    type: LOAD_CURRENCIES + SUCCESS,
    payload: {response}
  }
}

export function loadCurrenciesError(data) {
  return {
    type: LOAD_CURRENCIES + FAIL,
    payload: {data}
  }
}

// comments for post
export function loadTicket(currency) {
  return {
    type: LOAD_TICKET + START,
    payload: currency
  }
}

export function loadTicketCusses(response, currency) {
  return {
    type: LOAD_TICKET + SUCCESS,
    payload: {response, currency}
  }
}

export function loadTicketError(data) {
  return {
    type: LOAD_TICKET + FAIL,
    payload: {data}
  }
}
