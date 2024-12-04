import { TigetFormData } from './type';
import { TigetFormDataDefault } from './value';

import { getStorage, setStorage } from '@/@common/storage';

const TigetStorageKey = 'TigetFormData';

/**
 * chrome.storageからフォームデータを取得する
 */
export const getTigetFormData = async (): Promise<TigetFormData> => {
  const data = await getStorage<Partial<TigetFormData>>(TigetStorageKey);
  return {
    ...TigetFormDataDefault,
    ...data,
  };
};

/**
 * chrome.storageにフォームのデータを保存する
 */
export const saveTigetFormData = async (data: Partial<TigetFormData>) => {
  const prevData = await getTigetFormData();

  const newData = {
    ...prevData,
    ...data,
  };
  await setStorage(TigetStorageKey, newData);
  return newData;
};
