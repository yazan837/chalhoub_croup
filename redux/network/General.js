import {requestProfile} from './api';

export const getProfile = () => requestProfile('GET', '');
