'use client';


import { store } from '@/app/redux/store';
import { Provider } from 'react-redux';

export const StoreProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};
