import { combineReducers } from 'redux';

import { IState } from '../../interfaces';
import { SearchFormModel } from '../forms/SearchForm';
import { loadingReducers } from './loadingReducers';
import { modelReducers, totalCountReducer } from './modelReducers';

export const rootReducer = combineReducers<IState>({
    models: modelReducers,
    loading: loadingReducers,
    totalCount: totalCountReducer,
    ...SearchFormModel,
});
