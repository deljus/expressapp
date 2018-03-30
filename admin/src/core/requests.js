import axios from 'axios';
import * as API from '../config';

export const getAccosiationTable = () => axios.get(API.ASSOCIATION);