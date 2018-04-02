import axios from 'axios';
import * as API from '../config';

export const getAccosiationTable = () => axios.get(API.ASSOCIATION);

export const getTable = tableName => axios.get(API.GET_TABLE + tableName);