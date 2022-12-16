import PropertyAdd from "../pages/property/PropertyAdd";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/home";

export const privateRoutes = [
  { path: "/", name: "home", component: <Home /> },
  { path: "/property-add", name: "proprty add", component: <PropertyAdd /> },
];

export const publicRoutes = [
  { path: "/login", name: "Login", component: <Login /> },
  { path: "/sign-up", name: "SignUp", component: <SignUp /> },
];
