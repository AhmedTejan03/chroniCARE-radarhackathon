import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/ambulance-booking">Book Ambulance</Link></li>
                {/* Add more links as necessary */}
            </ul>
        </nav>
    );
};

export default Navbar;
