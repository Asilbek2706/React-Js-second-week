import Navbar from "./Navbar.tsx";
import Footer from "./Footer/Footer.tsx";

interface IProps {
    children: React.ReactNode;
}

const Layout = ({children}: IProps) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;