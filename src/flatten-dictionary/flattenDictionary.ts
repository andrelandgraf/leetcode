type Dictionary = {
    [key: string]: number | string | Dictionary;
};

type FlatDictionary = Record<string, number | string>;

function getFlattenKey(namespace: string, key: string) {
    if (!namespace && !key) return '';
    if (!key) return namespace;
    if (!namespace) return key;
    return `${namespace}.${key}`;
}

function flattenDictionaryHelper(dict: Dictionary, flat: FlatDictionary, namespace: string) {
    for (let key in dict) {
        const value = dict[key];
        const flattenKey = getFlattenKey(namespace, key);
        if (typeof value === 'string' || typeof value === 'number') {
            flat[flattenKey] = value;
        } else {
            flattenDictionaryHelper(value, flat, flattenKey);
        }
    }
}

function flattenDictionary(dict: Dictionary): FlatDictionary {
    const flat = {};
    flattenDictionaryHelper(dict, flat, '');
    return flat;
}

export { flattenDictionary };
