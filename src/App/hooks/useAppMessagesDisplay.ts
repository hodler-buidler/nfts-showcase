import { useAppDispatch, useAppSelector } from '@/state';
import { popMessagesStack } from '@/state/app';
import { AppMessage } from '@/typings/app';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export function useAppMessagesDisplay() {
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (!messages.length) return;
    console.log(messages);

    printMessage({ ...messages[0] });

    setTimeout(() => dispatch(popMessagesStack()), 0);
  }, [messages]);

  function printMessage(message: AppMessage): void {
    toast[message.type](message.content, {
      position: 'top-right',
      theme: 'dark',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}
