import axios from 'axios';
import * as API from '../config';

export const getAccosiationTable = () => axios.get(API.ASSOCIATION);

export const getTableData = tableName => axios.get(API.GET_TABLE_DATA + tableName);
export const getTableColumns = tableName => axios.get(API.GET_TABLE_COLUMNS + tableName);
export const getTableDataItem = (tableName, id) => axios.get(API.GET_TABLE_DATA+tableName+'/'+id);
export const deleteTableItem = (tableName, id) => axios.delete(API.DELETE_TABLE_COLUMN, { data: { tableName, id }});