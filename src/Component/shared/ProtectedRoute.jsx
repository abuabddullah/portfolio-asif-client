import { useDispatch, useSelector } from "react-redux";
import { logout, selectUserToken } from "../../../store/slices/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { Navigate } from "react-router-dom";



const ProtectedRoute = ({ children, role }) => {
  const token = useSelector(selectUserToken);

  let decodedUser;

  if (token) {
    decodedUser = verifyToken(token);
}

  const dispatch = useDispatch();

  if (role !== undefined && role !== decodedUser?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;