import { filterData } from './filter';
import { pickupState } from './pickup';

import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    filterData,
    pickupState
});