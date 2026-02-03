import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import type {ReactNode} from "react";

interface IProps {
    children: ReactNode;
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