import PropertyAdd from "../pages/property/PropertyAdd";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/home";
import PropertyEdit from "../pages/property/PropertyEdit";

export const privateRoutes = [
  { path: "/", name: "home", component: <Home /> },
  {
    path: "/property-add",
    name: "property add",
    component: <PropertyAdd />,
  },
  {
    path: "/property-edit/:id",
    name: "property edit",
    component: <PropertyEdit />,
  },
];

export const publicRoutes = [
  { path: "/login", name: "Login", component: <Login /> },
  { path: "/sign-up", name: "SignUp", component: <SignUp /> },
];
