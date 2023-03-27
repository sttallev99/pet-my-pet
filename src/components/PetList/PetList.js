import { useState, useEffect } from 'react';

import PetCard from '../Dashboard/Petcard/Petcard';
import * as petService from '../../services/petService';

export default function PetList() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => setPets(result));
    }, []);
    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.map(pet => <PetCard key={pet._id} pet={pet}/>)}
                    </ul>
                )
                : <p className="no-pets">No pets in database!</p>
            }    
        </>
    )
}