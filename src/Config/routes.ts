import IRoute from "../Interfaces/route";
import LoginScreen from "../Pages/Auth/login";
import HomeScreen from "../Pages/Home/home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SidebarWithHeader from "../Pages/Dashboard/Test";

const routes: IRoute[] = [
  {
    path: "/",
    exact: true, 
    component: Dashboard,
    name: "Dashboard",
    protected: true
  },
  {
    path: "/test",
    exact: true, 
    component: SidebarWithHeader,
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
  }
];

export default routes;