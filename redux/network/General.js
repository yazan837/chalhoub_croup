import {request, requestProfile} from './api';

export const getProducts = () => request('GET', '');

export const getProfile = () => requestProfile('GET', '');
