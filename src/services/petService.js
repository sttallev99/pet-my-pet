const BASE_URL = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    const response = await fetch(`${BASE_URL}/pets`);

    const pets = await response.json();

    let result = Object.values(pets)

    return result;
}