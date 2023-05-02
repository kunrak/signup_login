// function Details() {
//   const getuser = JSON.parse(localStorage.getItem("useryoutube"));
//   console.log(getuser);
//   const { name, email } = getuser[0];
//   return (
//     <div>
//       <h1>Details</h1>
//       <h1>{name}</h1>
//       <h1>{email}</h1>
//     </div>
//   );
// }

// export default Details;

// UserDetails.js

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const UserDetails = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        history.push("/login");
    };

    return (
        <div className="container">
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button className="btn btn-primary" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};
