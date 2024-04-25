import { useState, useEffect, Dispatch, SetStateAction } from "react";


type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

export default function usePersistedState<T>(key: string, initialValue: any): Response<T> {
  const [state, setState] = useState(() => {
    const storageTheme = localStorage.getItem(key);

    if (storageTheme) {
      return JSON.parse(storageTheme);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}