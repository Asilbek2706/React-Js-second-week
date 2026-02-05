import {Link, Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <nav>
                <Link to={"/blog/angular-haqida"}>Angular</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default RootLayout