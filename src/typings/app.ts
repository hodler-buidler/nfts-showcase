export type AppMessage = {
  type: 'info' | 'success' | 'warn' | 'error';
  content: string;
};
