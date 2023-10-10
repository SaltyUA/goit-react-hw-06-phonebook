import { createStore } from 'redux';
import { reducer } from './reduce';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();
export const store = createStore(reducer, enhancer);
