import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";
import { JwtPayload } from "jsonwebtoken";

type TProtectedRoute = {
  children: ReactNode;
  user_id?: number;
};

type UserPayload = JwtPayload & {
  user_id?: number;
};

const ProtectedRoute = ({ children, user_id }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  const dispatch = useAppDispatch();

  if (!token) {
    console.log("No token found. Redirecting to login.");
    return <Navigate to="/login" replace />;
  }

  let user: UserPayload | undefined;
  try {
    user = verifyToken(token) as UserPayload;
    console.log("Verified user:", user);

    if (user.exp && user.exp * 1000 < Date.now()) {
      console.log("Token expired. Logging out.");
      dispatch(logout());
      return <Navigate to="/login" replace />;
    }

    if (user_id !== undefined && user_id !== user.user_id) {
      console.log("User ID mismatch. Logging out.");
      dispatch(logout());
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
