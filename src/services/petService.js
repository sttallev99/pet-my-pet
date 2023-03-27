const BASE_URL = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    const response = await fetch(`${BASE_URL}/pets`);

    const pets = await response.json();

    let result = Object.values(pets)

    return result;
}

export const create = async (petData) => {
    let response = await fetch(`${BASE_URL}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(petData)
    });

    let petResult = await response.json();

    return petResult;
}

export const getOne = (petId) => {
    return fetch(`${BASE_URL}/pets/${petId}`)
        .then(res => res.json())
}