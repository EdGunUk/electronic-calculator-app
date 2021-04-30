export const getItem = (key: string) => JSON.parse(localStorage.getItem(key)!);
export const setItem = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));
export const removeItem = (key: string) => localStorage.removeItem(key);
