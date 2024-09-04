import { Navigate, Outlet } from 'react-router-dom'
import RouteConstants from './routeConstants'
const PrivateRoutes = ({requiredUserType, userType}) => {

  const isAuthenticated = true;
  console.log("user type");
  console.log(userType);


  if (!isAuthenticated) {
    return <Navigate to ={RouteConstants.Login}/>
  }

  if (requiredUserType && !requiredUserType.includes(userType)) {

    return <Navigate to={RouteConstants.NoAccess}/>
  }

  return <Outlet/>

}

export default PrivateRoutes;