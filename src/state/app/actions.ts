import { AppMessage } from '@/typings/app';
import { createAction } from '@reduxjs/toolkit';

export const showMessage = createAction<AppMessage>('app/showMessage');
export const popMessagesStack = createAction('app/popMessagesStack');
