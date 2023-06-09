import { Routes, Route, Link } from 'react-router-dom';

import PetList from '../PetList/PetList';

export default function Dashboard() {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <nav>
                <Link to='types'>Types</Link>
            </nav>

            <section>
                <nav>
                    <Routes>
                        <Route path='/' element={ <PetList /> }/>
                        <Route path='/types' element={ <p>Types ... </p> }/>
                    </Routes>
                </nav>
            </section>

        </section>
    )
}