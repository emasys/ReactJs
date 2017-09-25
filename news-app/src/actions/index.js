const URL = 'http://localhost:5001';

export function latestNews() {
    const req = fetch(`${URL}/articles?_order=desc&_end=3`, {method: 'GET'}).then(res => res.json());
    return {type: 'LATEST_NEWS', payload: req}
}

export function otherNews() {
    const req = fetch(`${URL}/articles?_order=desc&_start=3&_end=10`, {method: 'GET'}).then(res => res.json());
    return {type: 'OTHER_NEWS', payload: req}
}

export function gallery() {
    const req = fetch(`${URL}/galleries?_order=desc&_limit=2`, {method: 'GET'}).then(res => res.json());
    return {type: 'GALLERY', payload: req}
}

export function selectedNews(id) {
    const req = fetch(`${URL}/articles?id=${id}`, {method: 'GET'}).then(res => res.json());
    return {type: 'SELECTED_NEWS', payload: req}
}

export function clearNews() {
    return {type: 'CLEAR_NEWS', payload: ''}
}