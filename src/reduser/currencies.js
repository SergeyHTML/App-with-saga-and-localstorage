import {LOAD_CURRENCIES, FAIL, START, SUCCESS} from '../constans'
import {OrderedMap, Record, Map} from 'immutable'

const DefaultReducerState = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: ''
});

export default (currencies = new DefaultReducerState(), action) => {
  const {type, payload} = action;

  switch (type) {
    case LOAD_CURRENCIES + START:
      return currencies
        .set('loading', true);

    case LOAD_CURRENCIES + SUCCESS:
        return currencies
        .set('entities', Map(payload.response.rates))
        .set('loading', false)
        .set('loaded', true);

    case LOAD_CURRENCIES + FAIL:
      return currencies
          .set('error', "Something was wrong!")
          .set('loading', false)
          .set('loaded', true);

    default:
      return currencies
  }
}
