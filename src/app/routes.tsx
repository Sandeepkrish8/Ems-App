import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Employees } from "./pages/Employees";
import { EmployeeProfile } from "./pages/EmployeeProfile";
import { Attendance } from "./pages/Attendance";
import { Payroll } from "./pages/Payroll";
import { Recruitment } from "./pages/Recruitment";
import { Performance } from "./pages/Performance";
import { Reports } from "./pages/Reports";
import { Settings } from "./pages/Settings";
import { LeaveManagement } from "./pages/LeaveManagement";
import { Departments } from "./pages/Departments";
import { UserProfile } from "./pages/UserProfile";
import { Login } from "./pages/Login";
<<<<<<< HEAD
import { Signup } from "./pages/Signup";
import SmartSearch from "./pages/SmartSearch";
import { ShiftSchedule } from "./pages/ShiftSchedule";
import { OnboardingWizard } from "./pages/OnboardingWizard";
import { NotFound } from "./pages/NotFound";
import { Help } from "./pages/Help";
import { Training } from "./pages/Training";
import { Documents } from "./pages/Documents";
import NotificationsHistory from "./pages/Notifications";
=======
import SmartSearch from "./pages/SmartSearch";
import { ShiftSchedule } from "./pages/ShiftSchedule";
>>>>>>> 380915e (Add full project source)

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
};

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
<<<<<<< HEAD
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/onboarding",
    Component: OnboardingWizard,
  },
  {
=======
>>>>>>> 380915e (Add full project source)
    path: "/",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      { index: true, Component: Dashboard },
      { path: "employees", Component: Employees },
      { path: "employees/:id", Component: EmployeeProfile },
      { path: "attendance", Component: Attendance },
      { path: "payroll", Component: Payroll },
      { path: "recruitment", Component: Recruitment },
      { path: "performance", Component: Performance },
      { path: "reports", Component: Reports },
      { path: "settings", Component: Settings },
      { path: "leave", Component: LeaveManagement },
      { path: "departments", Component: Departments },
      { path: "profile", Component: UserProfile },
      { path: "smart-search", Component: SmartSearch },
      { path: "schedule", Component: ShiftSchedule },
<<<<<<< HEAD
      { path: "help", Component: Help },
      { path: "training", Component: Training },
      { path: "documents", Component: Documents },
      { path: "notifications", Component: NotificationsHistory }, // ✅ moved inside Layout
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
=======
    ],
  },
>>>>>>> 380915e (Add full project source)
]);
