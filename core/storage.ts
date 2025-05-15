import Storage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export const useStorage = (key: string, defaultValue?: string) => {
  const [value, setValue] = useState<string | null>(defaultValue ?? null);

  const setItem = async (value: string) => {
    try {
      await Storage.setItem(key, value);
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = async () => {
    try {
      const value = await Storage.getItem(key);
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return [value, setItem] as const;
};

export default Storage;
