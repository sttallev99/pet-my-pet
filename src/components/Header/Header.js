import { Link } from 'react-router-dom';

export default function Header({
    isAuthenticated,
    user
}) {
    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {user}</span>
            <Link className="button" to="/my-pet">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link className="button" to="#">Logout</Link>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>
                    { isAuthenticated
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    )
}