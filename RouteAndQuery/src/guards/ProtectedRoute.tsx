import type {ReactNode} from "react";
import {Navigate, Outlet} from "react-router-dom";
// import type {IUser} from "../shared/interfaces/user.interface.ts";

interface IProps {
    isAllowed: boolean;
    children?: ReactNode,
    redirectPath?: string
}

const ProtectedRoute = ({ isAllowed, redirectPath = '/', children }: IProps) => {
    if(!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute;