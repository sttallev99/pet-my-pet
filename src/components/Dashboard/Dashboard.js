import { useState, useEffect } from 'react';

import PetCard from "./Petcard/Petcard";
import * as petService from '../../services/petService';

export default function Dashboard() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => setPets(result));
    }, []);
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">
                {pets.map(pet => <PetCard key={pet._id} pet={pet}/>)}
            </ul>
            <p className="no-pets">No pets in database!</p>
        </section>
    )
}