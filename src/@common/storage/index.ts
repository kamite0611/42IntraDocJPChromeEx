// --------------------------------------------------------

/** Chromeストレージのデータを取得 */
export const getStorage = async <T = any>(storageKey: string): Promise<T> => {
  return new Promise((resolve) => {
    chrome.storage.local.get([storageKey], (result) => {
      resolve(result[storageKey]);
    });
  });
};

// --------------------------------------------------------

/** Chromeストレージにデータを保存 */
export const setStorage = async (storageKey: string, data: any) => {
  return chrome.storage.local.set({
    [storageKey]: data,
  });
};

// --------------------------------------------------------

/** Chromeストレージのデータを削除 */
export const removeStorage = async (storageKey: string) => {
  return chrome.storage.local.remove(storageKey);
};
