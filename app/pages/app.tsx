import { UserProvider } from '../components/UserContext';
import Navbar from '../components/Navbar';

function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <Navbar />
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default App;