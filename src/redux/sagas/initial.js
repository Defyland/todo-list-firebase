import { call, put, select } from 'redux-saga/effects';

import api from '../../config/api';

export function* initial(action) {
  try {
    yield;
  } catch (err) {
    yield;
  }
}