import { Navigate, Outlet } from 'react-router-dom'
import RouteConstants from './routeConstants'
const PrivateRoutes = ({requiredUserType}) => {

  const isAuthenticated = true;
  const userType = 'admin';
  console.log("user type");
  console.log(userType);


  if (!isAuthenticated) {
    return <Navigate to ={RouteConstants.Login}/>
  }

  if (requiredUserType && userType !== requiredUserType) {

    return <Navigate to={RouteConstants.NoAccess}/>
  }

  return <Outlet/>

}

export default PrivateRoutes;