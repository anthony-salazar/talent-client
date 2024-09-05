import RouteConstants from "./routeConstants";

const userNavs = {
    Guest: {
      'Home': RouteConstants.Home,
      'Job Search': RouteConstants.JobSearch
    },
    Candidate: {
      'Home': RouteConstants.Home,
      'Dashboard': RouteConstants.CandidateDashboard,
      'Job Search': RouteConstants.JobSearch
    },
    Hiring_Manager: {
      'Home': RouteConstants.Home,
      'Dashboard': RouteConstants.ManagerDashboard,
      'Job Search': RouteConstants.JobSearch,
      'My Postings': '/manager/'
    },
    Administrator: {
      'Home': RouteConstants.Home,
      'Dashboard': RouteConstants.AdminDashboard,
      'Job Search': RouteConstants.JobSearch,
      'Manage Users': RouteConstants.ManageUsers,
      'Manage Apps': RouteConstants.ManageApps,
      'Manage Jobs': RouteConstants.ManageJobs
    }
  }

export default userNavs;