import { createAction } from '@reduxjs/toolkit';

export const addItemReq = createAction<string>('todo/addItemRequest');
export const addItemRes = createAction<string>('todo/addItemResponse');

export const removeItem = createAction<string>('todo/removeItem');

export const editItem = createAction<any>('todo/editItem');
