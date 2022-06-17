import BankingReports from "../Components/BankingReports/bankingReports";
import OperationalBoats from "../Components/OperationalBoats/operationalBoats";
import PdfComponent from "../Components/PDF/index";
import Schedules from "../Components/Schedules/schedules";
import Staff from "../Components/Staff/staff";
import WayBillReport from "../Components/WayBillReports/wayBillReports";
import IRoute from "../Interfaces/route";
import Boats from '../Pages/Assignment/Boat/boats';
import Counter from "../Pages/Assignment/Counter/counter";
import LoginScreen from "../Pages/Auth/login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import HomeScreen from "../Pages/Home/home";

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
  {
    path: "/way_Bill_Reports",
    exact: true, 
    component: WayBillReport,
    name: "Way Bill Report",
    protected: false
  },
  {
  path: "/banking_Reports",
  exact: true, 
  component: BankingReports,
  name: "Banking Report",
  protected: false
},
{
  path: "/boats",
  exact: true, 
  component: Boats,
  name: "Boats",
  protected: false
},
{
  path: "/counter",
  exact: true, 
  component: Counter,
  name: "Counter",
  protected: false
},
{
  path: "/pdf/:id",
  exact: true, 
  component: PdfComponent,
  name: "PDF",
  protected: false
},

];

export default routes;