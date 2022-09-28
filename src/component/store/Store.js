import { createStore } from 'redux'
import { reduserFunc } from '../reducer/Reducer'

export const store= createStore(reduserFunc)
