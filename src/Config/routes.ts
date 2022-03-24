import IRoute from "../Interfaces/route";
import LoginScreen from "../Pages/Auth/login";
import HomeScreen from "../Pages/Home/home";

const routes: IRoute[] = [
  {
    path: "/",
    exact: true, 
    component: HomeScreen,
    name: "Login Page",
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