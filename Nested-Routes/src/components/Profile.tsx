import {Link, Outlet} from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <h2>User Profile</h2>
            <ul>
                <li>
                    <Link to={`/profile/details`}>Profile Details</Link>
                </li>
                <li>
                    <Link to={`/profile/settings`}>Profile Settings</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Profile