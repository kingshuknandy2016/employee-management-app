import { useAppSelector } from '../store/hooks';

export const useReduxSelector = (keyOfState: string) => {
  const valueOfState = useAppSelector((state: any) => {
    return state[keyOfState];
  });
  return valueOfState;
};
