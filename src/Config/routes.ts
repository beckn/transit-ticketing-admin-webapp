import IRoute from "../Interfaces/route";
import LoginScreen from "../Pages/Auth/login";
import HomeScreen from "../Pages/Home/home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OperationalBoats from "../Components/OperationalBoats/operationalBoats";
import Schedules from "../Components/Schedules/schedules";
import Staff from "../Components/Staff/staff";

const routes: IRoute[] = [
  {
    path: "/",
    exact: true, 
    component: Dashboard,
    name: "Dashboard",
    protected: true
  },
  {
    path: "/reports",
    exact: true, 
    component: HomeScreen,
    name: "Reports",
    protected: true
  },
  {
    path: "/login",
    exact: true, 
    component: LoginScreen,
    name: "Login Page",
    protected: false
  },
  {
    path: "/opBoats",
    exact: true, 
    component: OperationalBoats,
    name: "Operational Boats",
    protected: false
  },
  {
    path: "/schedules",
    exact: true, 
    component: Schedules,
    name: "Schedules",
    protected: false
  },
  {
    path: "/staff",
    exact: true, 
    component: Staff,
    name: "Staff",
    protected: false
  },

];

export default routes;