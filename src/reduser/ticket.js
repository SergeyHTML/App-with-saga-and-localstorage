import {LOAD_TICKET, FAIL, START, SUCCESS} from '../constans'
import {OrderedMap, Record} from 'immutable'

const DefaultReducerState = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: ''
});

export default (ticket = new DefaultReducerState(), action) => {
  const {type, payload} = action;

  switch (type) {
    case LOAD_TICKET + START:
      return ticket
        .set('loading', true);

    case LOAD_TICKET + SUCCESS:
      return ticket
        .setIn(['entities', payload.currency], payload.response[`BTC${payload.currency}`])
        .set('loading', false)
        .set('loaded', true);

    case LOAD_TICKET + FAIL:
      return ticket
          .set('error', "Something was wrong!")
          .set('loading', false)
          .set('loaded', true);

    default:
      return ticket
  }
}
