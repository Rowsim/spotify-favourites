export const setWithExpiry = (key: string, value: any, ttlSeconds: number) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttlSeconds * 1000,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key: string) => {
  const itemStorage = localStorage.getItem(key);
  if (!itemStorage) {
    return null;
  }

  const item = JSON.parse(itemStorage);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
};
