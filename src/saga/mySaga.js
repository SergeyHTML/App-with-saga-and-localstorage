import {LOAD_CURRENCIES, LOAD_TICKET, START} from '../constans'
import {loadCurrenciesCusses, loadCurrenciesError, loadTicketCusses, loadTicketError} from '../AC/index'
import { call, put, takeEvery} from 'redux-saga/effects'

function* fetchCurrencies() {
    try {
        const data = yield call(() => {
            return fetch('https://apiv2.bitcoinaverage.com/constants/exchangerates/global')
                .then(res => res.json())
        });
        yield put(loadCurrenciesCusses(data));
    } catch (e) {
        yield put(loadCurrenciesError(e));
    }
}

function* fetchTicket(action) {
    const currency = action.payload;

    try {
        const data = yield call(() => {
            return fetch(`https://apiv2.bitcoinaverage.com/indices/global/ticker/short?crypto=BTC&fiat=${currency}`)
                .then(res => res.json())
        });
        yield put(loadTicketCusses(data, currency));
    } catch (e) {
        yield put(loadTicketError(e));
    }
}

function* mySaga() {
    yield takeEvery(LOAD_CURRENCIES + START, fetchCurrencies);
    yield takeEvery(LOAD_TICKET + START, fetchTicket);
}

export default mySaga
