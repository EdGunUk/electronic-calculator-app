const getItem = <T>(key: string): T | null => {
    const item: string | null = localStorage.getItem(key);
    if (!item) return null;

    try {
        return <T>JSON.parse(item);
    } catch (e) {
        return null;
    }
};
const setItem = <T>(key: string, value: T): void => localStorage.setItem(key, JSON.stringify(value));
const removeItem = (key: string): void => localStorage.removeItem(key);

export default {getItem, removeItem, setItem};
