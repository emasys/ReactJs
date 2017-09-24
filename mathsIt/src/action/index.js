const URL = '';

export function latestNews() {
    const req = fetch(`${URL}/articles?_order=desc&_end=3`, {method: 'GET'}).then(res => res.json());
    return {type: 'LATEST_NEWS', payload: req}
}