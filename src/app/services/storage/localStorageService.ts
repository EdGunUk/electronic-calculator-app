const getItem = (key: string) => JSON.parse(localStorage.getItem(key)!);
const setItem = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));
const removeItem = (key: string) => localStorage.removeItem(key);

export default {getItem, removeItem, setItem};
