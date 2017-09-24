const URL = 'http://localhost:5001';
export function getCar(keywords) {

    const req = fetch(`${URL}/carsIndex?q=${keywords}`, {method: 'GET'}).then(res => res.json());

    return {type: 'SEARCH_CARS', payload: req}
}

export function carDetail(id) {

    const req = fetch(`${URL}/carsIndex?id=${id}`, {method: 'GET'}).then(res => res.json());

    return {type: 'CAR_DETAIL', payload: req}
}